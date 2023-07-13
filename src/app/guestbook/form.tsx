"use client";

import { saveEntry } from "../actions";
import { SignInButton, SignOutButton } from "./actions";
import { useRef } from "react";
import type { Session } from "next-auth";
import { experimental_useFormStatus as useFormStatus } from "react-dom";

export default function GuestbookForm({
  session,
}: {
  session: Session | null;
}) {
  const formRef = useRef<HTMLFormElement>(null);
  const { pending } = useFormStatus();

  return (
    <section className="border border-stone-800/90 p-3 rounded-lg flex flex-row-reverse justify-between w-full h-full">
      {session?.user ? (
        <form
          className="w-full h-full flex flex-col gap-2 justify-between"
          ref={formRef}
          action={async (formData) => {
            // append user email and name in the form data
            formData.append("email", session.user?.email as string);
            formData.append("name", session.user?.name as string);
            await saveEntry(formData);
            formRef?.current?.reset();
          }}
        >
          <textarea
            name="entry"
            required
            aria-label="Enter your message"
            placeholder="Enter your message"
            disabled={pending}
            className="rounded-lg bg-stone-800/80 h-[150px] text-base focus:ring-1 placeholder:text-zinc-500 ring-stone-600 outline-none p-3"
          ></textarea>
          <div className="flex gap-2">
            <button
              className="px-4 py-2 rounded-md bg-stone-800/80 max-w-max text-sm lg:text-base relative no-underline duration-300 ease-in focus:ring-1 ring-stone-600 hover:bg-stone-800"
              type="submit"
              disabled={pending}
            >
              Send
            </button>
            <SignOutButton />
          </div>
        </form>
      ) : (
        <div className="w-full h-full flex flex-col justify-between">
          <p>Sign in to leave a message here</p>
          <SignInButton />
        </div>
      )}
    </section>
  );
}
