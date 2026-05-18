import express from "express";
import * as path from "path";
import fs from "fs";
import cors from "cors";
import { handleContact, handleHealth } from "./apiHandlers";

export async function createServer() {
  const app = express();

  // Initialize Resend lazily but safely
  let resend: any = null;
  const RESEND_KEY = process.env.RESEND_API_KEY;
  
  if (RESEND_KEY) {
    try {
      const { Resend } = await import("resend");
      resend = new Resend(RESEND_KEY);
      console.log("Resend initialized successfully");
    } catch (err) {
      console.error("Failed to load resend package:", err);
    }
  } else {
    console.warn("RESEND_API_KEY environment variable is not set.");
  }

  app.use(express.json());
  app.use(cors());

  // Logging middleware
  app.use((req, res, next) => {
    const timestamp = new Date().toISOString();
    console.log(`[${timestamp}] ${req.method} ${req.url}`);
    next();
  });

  // API Routes
  app.get("/api/health", handleHealth);
  app.post("/api/contact", handleContact);

  // API 404 Handler
  app.all("/api/*", (req, res) => {
    res.status(404).json({ 
      error: "API route not found", 
      path: req.url, 
      method: req.method 
    });
  });

  const isProd = process.env.NODE_ENV === "production";
  
  if (!isProd && !process.env.VERCEL) {
    try {
      console.log("Initializing Vite middleware...");
      const { createServer: createViteServer } = await import("vite");
      const vite = await createViteServer({
        server: { middlewareMode: true },
        appType: "spa",
      });
      app.use(vite.middlewares);
      console.log("Vite middleware attached.");
    } catch (err) {
      console.error("Failed to initialize Vite server:", err);
      serveStaticFallback(app);
    }
  } else {
    serveProductionStatic(app);
  }

  function serveProductionStatic(expressApp: express.Express) {
    const distPath = path.resolve(process.cwd(), "dist");
    
    if (fs.existsSync(distPath)) {
      expressApp.use(express.static(distPath));
      // For Vercel, we only handle non-API routes if it's the root/fallback
      expressApp.get("*", (req, res) => {
        // If it starts with /api/, we already handled it or it's a 404
        if (req.url.startsWith("/api/")) return;
        
        const indexPath = path.join(distPath, "index.html");
        if (fs.existsSync(indexPath)) {
          res.sendFile(indexPath);
        } else {
          res.status(404).send("index.html not found in dist/");
        }
      });
    }
  }

  function serveStaticFallback(expressApp: express.Express) {
    expressApp.get("*", (req, res) => {
      if (req.url.startsWith("/api/")) return;
      res.status(200).send("Server is starting or static assets missing. Please wait.");
    });
  }

  return app;
}
