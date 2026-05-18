import { handleHealth } from "../src/apiHandlers";

export default async (req: any, res: any) => {
  try {
    return await handleHealth(req, res);
  } catch (error: any) {
    console.error("Vercel Function Error (health):", error);
    return res.status(500).json({ error: "Internal Server Error", message: error.message });
  }
};
