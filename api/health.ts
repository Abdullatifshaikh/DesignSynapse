import { handleHealth } from "../src/apiHandlers";

export default async (req: any, res: any) => {
  return handleHealth(req, res);
};
