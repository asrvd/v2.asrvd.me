"use server";

import { createId } from "@paralleldrive/cuid2";
import { message } from "@/server/db/schema";
import { revalidatePath } from "next/cache";
import { db } from "@/server/db";

export async function saveEntry(formData: FormData) {
  const email = formData.get("email")?.toString() || "";
  const name = formData.get("name")?.toString() || "";
  const entry = formData.get("entry")?.toString() || "";
  const id = createId();

  await db.insert(message).values({
    authorName: name as string,
    authorEmail: email,
    id: id,
    text: entry,
  });

  revalidatePath("/guestbook");
}
