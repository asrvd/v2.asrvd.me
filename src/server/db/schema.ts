import { int, sqliteTable, text } from "drizzle-orm/sqlite-core";
import { InferSelectModel, InferInsertModel, sql } from "drizzle-orm";
import { createId } from "@paralleldrive/cuid2";

export const messages = sqliteTable("messages", {
  id: text("id")
    .$defaultFn(() => createId())
    .primaryKey(),
  authorName: text("authorName").notNull(),
  createdAt: text("createdAt").default(sql`(CURRENT_TIMESTAMP)`),
  text: text("text").notNull(),
  authorEmail: text("email"),
});

export type Message = InferSelectModel<typeof messages>;
export type NewMessage = InferInsertModel<typeof messages>;
