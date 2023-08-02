/* eslint-disable react-hooks/exhaustive-deps */

"use client";

import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";

const navItems = {
  "/": {
    name: "Home",
  },
  "/now": {
    name: "Now",
  },
  "/guestbook": {
    name: "Guestbook",
  },
  "/writing": {
    name: "Writing",
  },
};

export default function NavBar() {
  let pathname = usePathname() || "/";

  if (pathname.includes("/writing/")) {
    pathname = "/writing";
  }

  const [hoveredPath, setHoveredPath] = useState(pathname);

  return (
    <div className="border border-stone-800/90 p-[0.4rem] rounded-lg mb-12 sticky top-4 z-[100] bg-stone-900/80 backdrop-blur-md">
      <nav className="flex gap-2 relative justify-start w-full z-[100]  rounded-lg">
        {Object.entries(navItems).map(([path, { name }], index) => {
          const isActive = path === pathname;

          return (
            <Link
              key={path}
              className={`px-4 py-2 rounded-md text-sm lg:text-base relative no-underline duration-300 ease-in ${
                isActive ? "text-zinc-100" : "text-zinc-400"
              }`}
              data-active={isActive}
              href={path}
              onMouseOver={() => setHoveredPath(path)}
              onMouseLeave={() => setHoveredPath(pathname)}
            >
              <span>{name}</span>
              {path === hoveredPath && (
                <motion.div
                  className="absolute bottom-0 left-0 h-full bg-stone-800/80 rounded-md -z-10"
                  layoutId="navbar"
                  aria-hidden="true"
                  style={{
                    width: "100%",
                  }}
                  transition={{
                    type: "spring",
                    bounce: 0.25,
                    stiffness: 130,
                    damping: 9,
                    duration: 0.3,
                  }}
                />
              )}
            </Link>
          );
        })}
      </nav>
    </div>
  );
}
