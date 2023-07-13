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

  const [hoverElementProperties, setHoverElementProperties] = useState({
    isHovered: false,
    width: 0,
    x: 0,
  });

  const [activeElementProperties, setActiveElementProperties] = useState({
    width: 0,
    x: 0,
  });

  useEffect(() => {
    console.log("im here");
    console.log(pathname);
    console.log(activeElementProperties);
    console.log(hoverElementProperties);
    const activeElement = document.querySelector(
      "[data-active=true]"
    ) as HTMLElement;
    if (activeElement) {
      setHoverElementProperties({
        isHovered: true,
        width: activeElement.clientWidth,
        x: activeElement.offsetLeft,
      });

      setActiveElementProperties({
        width: activeElement.clientWidth,
        x: activeElement.offsetLeft,
      });
    }
    console.log(activeElementProperties);
  }, [pathname]);

  return (
    <div className="border border-stone-800/90 p-[0.4rem] rounded-lg mb-12 sticky top-4 bg-stone-900/80 backdrop-blur-md">
      <nav className="flex gap-2 relative justify-start w-full z-10  rounded-lg">
        <motion.div
          className={`absolute top-0 w-full h-full rounded-md -z-10 bg-stone-800/80`}
          initial={{
            visibility: "hidden",
            width: activeElementProperties.width,
            transform: `translateX(${activeElementProperties.x}px)`,
          }}
          layoutId="nav-item"
          animate={{
            width: hoverElementProperties.width,
            transform: `translateX(${hoverElementProperties.x}px)`,
            visibility: hoverElementProperties.isHovered ? "visible" : "hidden",
          }}
          transition={{
            duration: 0.3,
            type: "spring",
            stiffness: 130,
            damping: 9,
          }}
        />
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
              onMouseEnter={(e) => {
                e.preventDefault();
                setHoverElementProperties({
                  isHovered: true,
                  width: e.currentTarget.offsetWidth,
                  x: e.currentTarget.offsetLeft,
                });
              }}
              onMouseLeave={(e) => {
                e.preventDefault();
                setHoverElementProperties({
                  ...activeElementProperties,
                  isHovered: true,
                });
              }}
            >
              <span>{name}</span>
            </Link>
          );
        })}
      </nav>
    </div>
  );
}
