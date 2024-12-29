import "dotenv/config";
import { defineConfig } from "drizzle-kit";

if (!process.env.DB_URL || !process.env.DB_TOKEN) {
  throw new Error("DB_URL and DB_TOKEN must be set");
}

export default defineConfig({
  schema: "./src/server/db/schema.ts",
  out: "./drizzle",
  dialect: "turso",
  dbCredentials: {
    url: process.env.DB_URL,
    authToken: process.env.DB_TOKEN,
  },
});
