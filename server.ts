import express from "express";
import * as path from "path";
import fs from "fs";
import cors from "cors";
import * as dotenv from "dotenv";

dotenv.config();

async function startServer() {
  const app = express();
  const PORT = 3000;

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

  // API Health Check
  app.get("/api/health", (req, res) => {
    res.json({ 
      status: "ok", 
      env: process.env.NODE_ENV,
      resendInitialized: !!resend,
      timestamp: new Date().toISOString()
    });
  });

  // Contact API
  app.post("/api/contact", async (req, res) => {
    console.log("Contact form submission attempt:", req.body);
    const { name, email, message, source } = req.body;

    if (!name || !email || !message) {
      return res.status(400).json({ error: "Missing required fields" });
    }

    try {
      if (!resend) {
        console.warn("RESEND_API_KEY not found. Simulating email send.");
        return res.json({ success: true, message: "Email sent (simulated)" });
      }

      const { data, error } = await resend.emails.send({
        from: "Contact Form <onboarding@resend.dev>",
        to: ["abdullatif.designsynapse@gmail.com"],
        subject: `[Website] New Contact Form Submission from ${name}`,
        html: `
          <h1>New Website Contact Submission</h1>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Message:</strong> ${message}</p>
          <p><strong>Source:</strong> ${source || "Not specified"}</p>
        `,
      });

      if (error) {
        console.error("Resend error:", error);
        return res.status(500).json({ error: error.message });
      }

      console.log("Email sent successfully:", data?.id);
      res.json({ success: true, data });
    } catch (err) {
      console.error("Server error during contact form submission:", err);
      res.status(500).json({ error: "Internal server error" });
    }
  });

  // API 404 Handler
  app.all("/api/*", (req, res) => {
    res.status(404).json({ 
      error: "API route not found", 
      path: req.url, 
      method: req.method 
    });
  });

  const isProd = process.env.NODE_ENV === "production";
  console.log(`Starting server in ${isProd ? "PRODUCTION" : "DEVELOPMENT"} mode`);
  
  if (!isProd) {
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
    console.log(`Serving production assets from: ${distPath}`);
    
    if (fs.existsSync(distPath)) {
      expressApp.use(express.static(distPath));
      expressApp.get("*", (req, res) => {
        const indexPath = path.join(distPath, "index.html");
        if (fs.existsSync(indexPath)) {
          res.sendFile(indexPath);
        } else {
          console.error("Critical error: index.html not found in dist/ folder.");
          res.status(404).send("Application shell missing. Contact support.");
        }
      });
    } else {
      console.error("Internal Error: 'dist' directory not found. Deployment might have failed to build client assets.");
      expressApp.get("*", (req, res) => {
        res.status(500).send("Server configuration error: client assets missing.");
      });
    }
  }

  function serveStaticFallback(expressApp: express.Express) {
    const distPath = path.resolve(process.cwd(), "dist");
    if (fs.existsSync(distPath)) {
      expressApp.use(express.static(distPath));
    }
    expressApp.get("*", (req, res) => {
      res.status(200).send("Dev server is starting or static assets missing. Please wait.");
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`[BOOT] Server successfully started`);
    console.log(`[BOOT] Listening on 0.0.0.0:${PORT}`);
    console.log(`[BOOT] NODE_ENV: ${process.env.NODE_ENV}`);
    console.log(`[BOOT] DIST_PATH: ${path.resolve(process.cwd(), "dist")}`);
    console.log(`[BOOT] dist exists: ${fs.existsSync(path.resolve(process.cwd(), "dist"))}`);
  });
}

startServer().catch((err) => {
  console.error("FATAL: Failed to start server entry point:");
  console.error(err);
  process.exit(1);
});
