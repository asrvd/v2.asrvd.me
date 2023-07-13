import {
  mysqlTable,
  mysqlSchema,
  AnyMySqlColumn,
  uniqueIndex,
  varchar,
  text,
  int,
  datetime,
} from "drizzle-orm/mysql-core";
import { sql } from "drizzle-orm";
import { InferModel } from "drizzle-orm";

export const account = mysqlTable(
  "Account",
  {
    id: varchar("id", { length: 191 }).primaryKey().notNull(),
    userId: varchar("userId", { length: 191 }).notNull(),
    type: varchar("type", { length: 191 }).notNull(),
    provider: varchar("provider", { length: 191 }).notNull(),
    providerAccountId: varchar("providerAccountId", { length: 191 }).notNull(),
    refreshToken: text("refresh_token"),
    accessToken: text("access_token"),
    expiresAt: int("expires_at"),
    tokenType: varchar("token_type", { length: 191 }),
    scope: varchar("scope", { length: 191 }),
    idToken: text("id_token"),
    sessionState: varchar("session_state", { length: 191 }),
  },
  (table) => {
    return {
      providerProviderAccountIdKey: uniqueIndex(
        "Account_provider_providerAccountId_key"
      ).on(table.provider, table.providerAccountId),
    };
  }
);

export const message = mysqlTable("Message", {
  id: varchar("id", { length: 191 }).primaryKey().notNull(),
  authorName: varchar("authorName", { length: 191 }).notNull(),
  createdAt: datetime("createdAt", { mode: "string", fsp: 3 })
    .default(sql`(CURRENT_TIMESTAMP(3))`)
    .notNull(),
  text: varchar("text", { length: 191 }).notNull(),
  authorEmail: varchar("email", { length: 191 }),
});

export const session = mysqlTable(
  "Session",
  {
    id: varchar("id", { length: 191 }).primaryKey().notNull(),
    sessionToken: varchar("sessionToken", { length: 191 }).notNull(),
    userId: varchar("userId", { length: 191 }).notNull(),
    expires: datetime("expires", { mode: "string", fsp: 3 }).notNull(),
  },
  (table) => {
    return {
      sessionTokenKey: uniqueIndex("Session_sessionToken_key").on(
        table.sessionToken
      ),
    };
  }
);

export const user = mysqlTable(
  "User",
  {
    id: varchar("id", { length: 191 }).primaryKey().notNull(),
    name: varchar("name", { length: 191 }),
    email: varchar("email", { length: 191 }),
    emailVerified: datetime("emailVerified", { mode: "string", fsp: 3 }),
    image: varchar("image", { length: 191 }),
  },
  (table) => {
    return {
      emailKey: uniqueIndex("User_email_key").on(table.email),
    };
  }
);

export const verificationToken = mysqlTable(
  "VerificationToken",
  {
    identifier: varchar("identifier", { length: 191 }).notNull(),
    token: varchar("token", { length: 191 }).primaryKey().notNull(),
    expires: datetime("expires", { mode: "string", fsp: 3 }).notNull(),
  },
  (table) => {
    return {
      tokenKey: uniqueIndex("VerificationToken_token_key").on(table.token),
      identifierTokenKey: uniqueIndex(
        "VerificationToken_identifier_token_key"
      ).on(table.identifier, table.token),
    };
  }
);

export type Message = InferModel<typeof message>;
