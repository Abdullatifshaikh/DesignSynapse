import { Request, Response } from 'express';
import { Resend } from 'resend';

// Initialize Resend safely
let resendInstance: Resend | null = null;

function getResend() {
  if (resendInstance) return resendInstance;
  const RESEND_KEY = process.env.RESEND_API_KEY;
  if (RESEND_KEY) {
    try {
      resendInstance = new Resend(RESEND_KEY);
      console.log("Resend initialized successfully");
      return resendInstance;
    } catch (err) {
      console.error("Failed to initialize resend:", err);
    }
  }
  return null;
}

export async function handleHealth(req: Request, res: Response) {
  const rs = getResend();
  res.json({ 
    status: "ok", 
    env: process.env.NODE_ENV,
    resendInitialized: !!rs,
    timestamp: new Date().toISOString()
  });
}

export async function handleContact(req: Request, res: Response) {
  // Handle CORS preflight
  if (req.method === 'OPTIONS') {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
    return res.status(204).end();
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ error: "Method not allowed. Use POST." });
  }

  console.log("Contact form submission attempt:", req.body);
  const { name, email, message, source } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({ error: "Missing required fields" });
  }

  try {
    const rs = getResend();
    if (!rs) {
      console.warn("RESEND_API_KEY not found. Simulating email send.");
      return res.json({ success: true, message: "Email sent (simulated)" });
    }

    const { data, error } = await rs.emails.send({
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
}
