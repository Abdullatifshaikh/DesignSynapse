import { Request, Response } from 'express';

// Initialize Resend safely
let resendInstance: any = null;

async function getResend() {
  if (resendInstance) return resendInstance;
  const RESEND_KEY = process.env.RESEND_API_KEY;
  if (RESEND_KEY) {
    try {
      const { Resend } = await import("resend");
      resendInstance = new Resend(RESEND_KEY);
      console.log("Resend initialized successfully");
      return resendInstance;
    } catch (err) {
      console.error("Failed to initialize resend:", err);
    }
  }
  return null;
}

function setCorsHeaders(res: Response) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  res.setHeader('Access-Control-Max-Age', '86400'); // 24 hours
}

export async function handleHealth(req: Request, res: Response) {
  setCorsHeaders(res);
  if (req.method === 'OPTIONS') return res.status(204).end();
  
  const rs = await getResend();
  res.json({ 
    status: "ok", 
    env: process.env.NODE_ENV,
    resendInitialized: !!rs,
    timestamp: new Date().toISOString()
  });
}

export async function handleContact(req: Request, res: Response) {
  setCorsHeaders(res);
  
  // Handle CORS preflight
  if (req.method === 'OPTIONS') {
    return res.status(204).end();
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ error: "Method not allowed. Use POST." });
  }

  console.log("Contact form submission attempt:", req.body);
  const data = req.body || {};
  const { name, email, message, source } = data;

  if (!name || !email || !message) {
    return res.status(400).json({ error: "Missing required fields (name, email, message)" });
  }

  try {
    const rs = await getResend();
    if (!rs) {
      console.warn("RESEND_API_KEY not found. Simulating email send.");
      return res.json({ success: true, message: "Email sent (simulated - RESEND_API_KEY missing)" });
    }

    const recipient = process.env.CONTACT_EMAIL || "abdullatif.designsynapse@gmail.com";

    const { data: resendData, error } = await rs.emails.send({
      from: "Contact Form <onboarding@resend.dev>",
      to: [recipient],
      subject: `[Website] New Contact Form Submission from ${name}`,
      html: `
        <div style="font-family: sans-serif; padding: 20px; color: #333;">
          <h1 style="color: #000; border-bottom: 1px solid #eee; padding-bottom: 10px;">New Website Contact Submission</h1>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> <a href="mailto:${email}">${email}</a></p>
          <p style="white-space: pre-wrap;"><strong>Message:</strong><br />${message}</p>
          <p><strong>Source:</strong> ${source || "Not specified"}</p>
          <hr style="border: 0; border-top: 1px solid #eee; margin: 20px 0;" />
          <p style="font-size: 12px; color: #999;">Sent from your website contact form.</p>
        </div>
      `,
    });

    if (error) {
      console.error("Resend error:", error);
      return res.status(500).json({ error: error.message });
    }

    console.log("Email sent successfully:", resendData?.id);
    res.json({ success: true, id: resendData?.id });
  } catch (err: any) {
    console.error("Server error during contact form submission:", err);
    res.status(500).json({ 
      error: "Internal server error", 
      message: err.message,
      stack: process.env.NODE_ENV === 'development' ? err.stack : undefined 
    });
  }
}
