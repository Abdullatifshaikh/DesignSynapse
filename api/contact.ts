import { handleContact } from "../src/apiHandlers";

export default async (req: any, res: any) => {
  // Support both Express-like and Vercel-like request objects
  return handleContact(req, res);
};
