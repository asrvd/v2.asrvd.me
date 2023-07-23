/* eslint-disable @next/next/no-img-element */
"use client";

import useSWR from "swr";
import { useEffect, useRef } from "react";
import { motion, useInView } from "framer-motion";
import clsx from "clsx";

const fetcher = (url: string) => fetch(url).then((res) => res.json());

type Song = {
  name: string;
  artist: string;
  album: string;
  image: string;
  url: string;
  np: boolean;
};

export default function FM() {
  const { data, error } = useSWR<Song>("/api/fm", fetcher, {
    refreshInterval: 30000,
  });

  if (error) {
    console.error(error);
  }
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, {
    once: true,
  });

  // if (!data) {
  //   return (
  //     <div className="w-full bg-stone-800/90 flex items-center justify-center z-50 animate-pulse"></div>
  //   );
  // }

  return (
    <div className="w-full h-full" ref={ref}>
      <motion.div
        className="border border-stone-800/90 p-3 rounded-lg flex flex-row-reverse justify-between"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : -30 }}
        transition={{
          duration: 0.4,
          type: "spring",
          stiffness: 130,
          damping: 9,
        }}
      >
        <div className="w-20 h-20">
          <img
            src={data?.image}
            alt="cover-image"
            className="object-fit rounded-lg shadow-lg grayscale hover:grayscale-0 duration-300 ease-in"
          />
        </div>
        <div className="flex flex-col gap-2 h-20 items-start justify-between">
          <p
            className={clsx(
              "mb-0 leading-none text-sm",
              data?.np ? "text-emerald-500" : "text-zinc-500"
            )}
          >
            {data?.np ? "Jamming to" : "Last played"}
          </p>
          <p className="mb-0 leading-none">
            <a
              href={data?.url || "#"}
              target="_blank"
              rel="norefferer"
              className="no-underline"
            >
              {data?.name}
              {" // "} {data?.artist}
            </a>
          </p>
        </div>
      </motion.div>
    </div>
  );
}
