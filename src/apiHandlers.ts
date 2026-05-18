import type { Request, Response } from 'express';
import nodemailer from 'nodemailer';

// Initialize Transporter safely
let transporter: nodemailer.Transporter | null = null;

function getTransporter() {
  if (transporter) return transporter;
  const GMAIL_USER = process.env.GMAIL_USER;
  const GMAIL_PASS = process.env.GMAIL_APP_PASSWORD;

  if (GMAIL_USER && GMAIL_PASS) {
    try {
      transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
          user: GMAIL_USER,
          pass: GMAIL_PASS,
        },
      });
      console.log("Nodemailer transporter initialized successfully");
      return transporter;
    } catch (err) {
      console.error("Failed to initialize nodemailer:", err);
    }
  }
  return null;
}

function setCorsHeaders(res: any) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization, X-Requested-With');
  res.setHeader('Access-Control-Max-Age', '86400'); // 24 hours
}

export async function handleHealth(req: any, res: any) {
  setCorsHeaders(res);
  if (req.method === 'OPTIONS') return res.status(204).end();
  
  const tp = getTransporter();
  return res.json({ 
    status: "ok", 
    env: process.env.NODE_ENV,
    nodemailerInitialized: !!tp,
    timestamp: new Date().toISOString()
  });
}

export async function handleContact(req: any, res: any) {
  setCorsHeaders(res);
  
  // Handle CORS preflight
  if (req.method === 'OPTIONS') {
    return res.status(204).end();
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ error: "Method not allowed. Use POST." });
  }

  console.log("Contact form submission attempt:", req.body);
  
  // Robust body parsing check
  let data = req.body;
  if (typeof data === 'string') {
    try {
      data = JSON.parse(data);
    } catch (e) {
      console.error("Failed to parse body string:", e);
    }
  }
  
  data = data || {};
  const { name, email, message, source } = data;

  if (!name || !email || !message) {
    return res.status(400).json({ 
      error: "Missing required fields (name, email, message)",
      receivedStatus: { name: !!name, email: !!email, message: !!message }
    });
  }

  try {
    const tp = getTransporter();
    if (!tp) {
      console.warn("GMAIL credentials not found. Simulating email send.");
      return res.json({ success: true, message: "Email sent (simulated - Gmail credentials missing)" });
    }

    const recipient = process.env.CONTACT_EMAIL || "abdullatif.designsynapse@gmail.com";
    const gmailUser = process.env.GMAIL_USER;

    const mailOptions = {
      from: `"${name}" <${gmailUser}>`, // Must be from the Gmail user
      to: recipient,
      replyTo: email,
      subject: `[Website] New Contact Form Submission from ${name}`,
      text: `Name: ${name}\nEmail: ${email}\nSource: ${source || "Not specified"}\n\nMessage:\n${message}`,
      html: `
        <div style="font-family: sans-serif; padding: 20px; color: #333; max-width: 600px; margin: 0 auto; border: 1px solid #eee; border-radius: 8px;">
          <h1 style="color: #000; border-bottom: 1px solid #eee; padding-bottom: 15px; margin-top: 0;">New Website Contact</h1>
          <table style="width: 100%; border-collapse: collapse;">
            <tr>
              <td style="padding: 10px 0; font-weight: bold; width: 100px;">Name:</td>
              <td style="padding: 10px 0;">${name}</td>
            </tr>
            <tr>
              <td style="padding: 10px 0; font-weight: bold;">Email:</td>
              <td style="padding: 10px 0;"><a href="mailto:${email}" style="color: #2563eb; text-decoration: none;">${email}</a></td>
            </tr>
            <tr>
              <td style="padding: 10px 0; font-weight: bold;">Source:</td>
              <td style="padding: 10px 0;">${source || "Not specified"}</td>
            </tr>
          </table>
          <div style="margin-top: 20px; padding: 15px; background-color: #f9fafb; border-radius: 6px;">
            <p style="margin-top: 0; font-weight: bold; color: #666;">Message:</p>
            <p style="white-space: pre-wrap; margin-bottom: 0;">${message}</p>
          </div>
          <hr style="border: 0; border-top: 1px solid #eee; margin: 30px 0;" />
          <p style="font-size: 12px; color: #999; margin-bottom: 0;">This email was sent from your website's contact form. You can reply directly to this email to contact ${name}.</p>
        </div>
      `,
    };

    const info = await tp.sendMail(mailOptions);
    console.log("Email sent successfully:", info.messageId);
    return res.json({ success: true, messageId: info.messageId });
  } catch (err: any) {
    console.error("API error during contact form submission:", err);
    return res.status(500).json({ 
      error: "Internal server error", 
      message: err.message,
      stack: process.env.NODE_ENV === 'development' ? err.stack : undefined 
    });
  }
}
