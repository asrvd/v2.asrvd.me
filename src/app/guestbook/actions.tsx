"use client";

import { signIn, signOut } from "next-auth/react";

export function SignInButton() {
  return (
    <button
      className="px-4 py-2 rounded-md bg-stone-800/80 max-w-max text-sm lg:text-base relative no-underline duration-300 ease-in focus:ring-1 ring-stone-600 hover:bg-stone-800"
      onClick={() => signIn("github")}
      type="button"
    >
      Sign In
    </button>
  );
}

export function SignOutButton() {
    return (
        <button
          className="px-4 py-2 rounded-md bg-stone-800/80 max-w-max text-sm lg:text-base relative no-underline duration-300 ease-in focus:ring-1 ring-stone-600 hover:bg-stone-800"
          onClick={() => signOut()}
          type="button"
        >
          Sign Out
        </button>
      );
}
