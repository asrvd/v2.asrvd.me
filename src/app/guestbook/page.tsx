import { db } from "@/server/db";
import { Message, message } from "@/server/db/schema";
import { desc } from "drizzle-orm";
import { cache } from "react";
import GuestbookForm from "./form";
import { getServerSession } from "next-auth";
import { authOptions } from "@/pages/api/auth/[...nextauth]";

export const guestbook = cache(async () => {
  const entries = await db.query.message.findMany({
    orderBy: [desc(message.createdAt)],
  });
  return entries;
});

export default async function GuestbookPage() {
  const entries = await guestbook();
  const session = await getServerSession(authOptions);

  return (
    <div className="flex flex-col gap-12 w-full h-full">
      <section className="w-full flex flex-col justify-start px-[0.4rem] -mb-12">
        <h2>Guestbook ~</h2>
      </section>
      <GuestbookForm session={session} />
      <section className="w-full flex flex-col justify-start px-[0.4rem] gap-5">
        {entries.map((entry) => (
          <div key={entry.id} className="flex flex-col gap-2">
            <p className="leading-none text-zinc-100 m-0">{entry.text}</p>
            <p className="leading-none text-xs text-zinc-300 m-0 flex justify-between">
              <span>~ {entry.authorName}</span>
              <span>
                {Intl.DateTimeFormat("en-US", {
                  year: "numeric",
                  month: "short",
                  day: "numeric",
                }).format(new Date(entry.createdAt))}
              </span>
            </p>
          </div>
        ))}
      </section>
    </div>
  );
}
