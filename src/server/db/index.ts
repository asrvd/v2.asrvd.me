import { connect } from "@planetscale/database";
import { drizzle } from "drizzle-orm/planetscale-serverless";
import { env } from "../../env.mjs";
import * as schema from "./schema";

const config = {
  host: env.DB_HOST,
  username: env.DB_USERNAME,
  password: env.DB_PASSWORD,
};

const connection = connect(config);

export const db = drizzle(connection, {
  schema: schema,
});
