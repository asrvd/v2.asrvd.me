import { drizzle } from "drizzle-orm/libsql";
import { createClient } from "@libsql/client";
import { env } from "@/env.mjs";
import * as schema from "./schema";

const client = createClient({
  url: env.DB_URL,
  authToken: env.DB_TOKEN,
});

const db = drizzle(client, { schema });

export { db };
