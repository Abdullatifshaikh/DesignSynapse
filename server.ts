import express from "express";
import path from "path";
import nodemailer from "nodemailer";
import dotenv from "dotenv";

dotenv.config();

async function startServer() {
  try {
    const app = express();
    const PORT = 3000;

    // Health Check at the very beginning
    app.get("/api/health", (req, res) => res.status(200).json({ status: "OK" }));

    app.use(express.json());

    // API Route for Contact Form
    app.post("/api/contact", async (req, res) => {
      const { name, email, message, source } = req.body;

      if (!name || !email || !message) {
        return res.status(400).json({ error: "Missing required fields" });
      }

      const user = process.env.EMAIL_USER;
      const pass = process.env.EMAIL_APP_PASSWORD;

      if (!user || !pass) {
        console.error("Email configuration missing in environment variables");
        return res.status(500).json({ error: "Server email configuration error" });
      }

      const transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
          user: user,
          pass: pass,
        },
      });

      const mailOptions = {
        from: user,
        to: "abdullatif.designsynapse@gmail.com",
        subject: `New Website Contact Form Submission from ${name}`,
        text: `
          Name: ${name}
          Email: ${email}
          Source: ${source || "Not specified"}
          
          Message:
          ${message}
        `,
      };

      try {
        await transporter.sendMail(mailOptions);
        res.status(200).json({ message: "Email sent successfully" });
      } catch (error) {
        console.error("Error sending email:", error);
        res.status(500).json({ error: "Failed to send email" });
      }
    });

    // Vite middleware for development
    if (process.env.NODE_ENV !== "production") {
      console.log("Starting development server with Vite middleware...");
      const { createServer: createViteServer } = await import("vite");
      const vite = await createViteServer({
        server: { middlewareMode: true },
        appType: "spa",
      });
      app.use(vite.middlewares);
    } else {
      const distPath = path.resolve("dist");
      console.log(`Production mode: serving static files from ${distPath}`);
      app.use(express.static(distPath));
      app.get("*", (req, res) => {
        const indexPath = path.join(distPath, "index.html");
        res.sendFile(indexPath, (err) => {
          if (err) {
            console.error("Error sending index.html:", err);
            res.status(404).send("Index file not found");
          }
        });
      });
    }

    app.listen(PORT, "0.0.0.0", () => {
      console.log(`Server running on http://0.0.0.0:${PORT}`);
    });
  } catch (error) {
    console.error("Failed to start server:", error);
    process.exit(1);
  }
}

startServer();
