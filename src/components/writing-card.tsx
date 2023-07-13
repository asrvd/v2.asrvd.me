"use client";

import React from "react";
import Link from "next/link";

export default function WritingCard({
  setHoverElementProperties,
  title,
  published,
  href,
}: {
  setHoverElementProperties: React.Dispatch<
    React.SetStateAction<{
      isHovered: boolean;
      index: number;
      height: number;
      y: number;
    }>
  >;
  title: string;
  published: string;
  href: string;
}) {
  return (
    <Link
      href={href}
      className="rounded-lg px-4 py-2 ease-in duration-200 cursor-pointer no-underline"
      data-index={1}
      onMouseEnter={(e) => {
        const target = e.target as HTMLElement;
        setHoverElementProperties({
          isHovered: true,
          index: Number(e.currentTarget.getAttribute("data-index")),
          height: e.currentTarget.offsetHeight,
          y: e.currentTarget.offsetTop,
        });
      }}
      onMouseLeave={() => {
        setHoverElementProperties({
          isHovered: false,
          index: 0,
          height: 0,
          y: 0,
        });
      }}
    >
      <div className="w-full h-full">
        <p className="m-0 font-semibold">{title}</p>
        <span className="text-zinc-300 text-xs m-0">
          {Intl.DateTimeFormat("en-US", {
            year: "numeric",
            month: "long",
            day: "numeric",
          }).format(new Date(published))}
        </span>
      </div>
    </Link>
  );
}
