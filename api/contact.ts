import { handleContact } from "../src/apiHandlers";

export default async (req: any, res: any) => {
  try {
    return await handleContact(req, res);
  } catch (error: any) {
    console.error("Vercel Function Error (contact):", error);
    return res.status(500).json({ 
      error: "Internal Server Error", 
      message: error.message,
      stack: process.env.NODE_ENV === 'development' ? error.stack : undefined
    });
  }
};
