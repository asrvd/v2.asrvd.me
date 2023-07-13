import { NextResponse } from "next/server";

export async function GET(request: Request) {
  const res = await fetch(`https://sptfy-asrvd.deno.dev/np`, {
    next: { revalidate: 60 },
  });

  if (!res.ok) return NextResponse.error();

  const data = await res.json();
  return NextResponse.json(data);
}
