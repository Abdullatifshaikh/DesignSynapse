import "dotenv/config";
import { createServer } from "./src/server";
import * as path from "path";
import * as fs from "fs";

const PORT = 3000;

async function bootstrap() {
  console.log("[BOOT] Starting bootstrap process...");
  try {
    const app = await createServer();

    app.listen(PORT, "0.0.0.0", () => {
      console.log(`[BOOT] Server successfully started`);
      console.log(`[BOOT] Listening on 0.0.0.0:${PORT}`);
      console.log(`[BOOT] NODE_ENV: ${process.env.NODE_ENV}`);
      console.log(`[BOOT] DIST_PATH: ${path.resolve(process.cwd(), "dist")}`);
      console.log(`[BOOT] dist exists: ${fs.existsSync(path.resolve(process.cwd(), "dist"))}`);
    });
  } catch (err) {
    console.error("[BOOT] FATAL: Error during bootstrap():", err);
    process.exit(1);
  }
}

// Global error handlers
process.on("uncaughtException", (err) => {
  console.error("[BOOT] Uncaught Exception:", err);
  // Give some time for logs to process
  setTimeout(() => process.exit(1), 100);
});

process.on("unhandledRejection", (reason, promise) => {
  console.error("[BOOT] Unhandled Rejection at:", promise, "reason:", reason);
});

bootstrap();
