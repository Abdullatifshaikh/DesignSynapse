import express from "express";
import * as path from "path";
import cors from "cors";
import * as dotenv from "dotenv";

dotenv.config();

async function startServer() {
  const app = express();
  const PORT = 3000;

  let resend: any = null;
  try {
    if (process.env.RESEND_API_KEY) {
      const { Resend } = await import("resend");
      resend = new Resend(process.env.RESEND_API_KEY);
    }
  } catch (err) {
    console.error("Failed to initialize Resend:", err);
  }

  app.use(express.json());
  app.use(cors());

  // API routes
  app.post("/api/contact", async (req, res) => {
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

      res.json({ success: true, data });
    } catch (err) {
      console.error("Server error:", err);
      res.status(500).json({ error: "Internal server error" });
    }
  });

  const isProd = process.env.NODE_ENV === "production" || !!process.env.APP_URL;
  console.log(`Server environment: ${isProd ? "production" : "development"}`);
  console.log(`NODE_ENV is: ${process.env.NODE_ENV}`);

  // Vite middleware for development
  if (!isProd) {
    console.log("Starting in development mode with Vite...");
    try {
      const { createServer: createViteServer } = await import("vite");
      const vite = await createViteServer({
        server: { middlewareMode: true },
        appType: "spa",
      });
      app.use(vite.middlewares);
    } catch (err) {
      console.error("Failed to start Vite server:", err);
      // Fallback to static serving even in dev if vite fails
    }
  } else {
    const distPath = path.resolve(process.cwd(), "dist");
    console.log(`Serving static files from: ${distPath}`);
    
    // Check if dist directory exists
    const fs = await import("fs");
    if (!fs.existsSync(distPath)) {
      console.error(`ERROR: dist directory missing at ${distPath}`);
    }

    app.use(express.static(distPath));
    app.get("*", (req, res) => {
      const indexPath = path.join(distPath, "index.html");
      if (fs.existsSync(indexPath)) {
        res.sendFile(indexPath);
      } else {
        console.error(`ERROR: index.html missing at ${indexPath}`);
        res.status(404).send("Application shell missing. Please check build logs.");
      }
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
}

startServer().catch((err) => {
  console.error("Failed to start server:", err);
  process.exit(1);
});
