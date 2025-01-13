import type { Config } from "drizzle-kit";
import * as dotenv from "dotenv";
dotenv.config();

export default {
  schema: "./db/schema.ts",
  out: "./drizzle",
  driver: "d1",
  dbCredentials: {
    // TODO: Replace with Cloudflare binding variable
    // binding: 'DB',
    databasePath: "./drizzle/local.db",
  },
  verbose: true,
} satisfies Config;
