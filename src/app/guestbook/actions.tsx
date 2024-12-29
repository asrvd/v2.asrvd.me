"use client";

import { signIn, signOut } from "next-auth/react";

export function SignInButton() {
  return (
    <button
      className="px-4 py-2 rounded-md bg-stone-800/80 max-w-max text-sm lg:text-base relative no-underline duration-300 ease-in focus:ring-1 ring-stone-600/30 hover:bg-stone-700/50 border border-stone-600/30 w-full"
      onClick={() => signIn("github")}
      type="button"
    >
      <span>Sign In</span>
    </button>
  );
}

export function SignOutButton() {
  return (
    <button
      className="px-4 py-2 rounded-md bg-stone-800/80 max-w-max text-sm lg:text-base relative no-underline duration-300 ease-in focus:ring-1 ring-stone-600/30 hover:bg-stone-700/50 border border-stone-700/30 w-full"
      onClick={() => signOut()}
      type="button"
    >
      <span>Sign Out</span>
    </button>
  );
}
