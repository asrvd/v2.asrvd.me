"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { allPosts, Post } from "contentlayer/generated";
import WritingCard from "./writing-card";

export default function Writings() {
  const [hoverElementProperties, setHoverElementProperties] = useState({
    isHovered: false,
    index: 0,
    height: 0,
    y: 0,
  });
  return (
    <div className="border border-stone-800/90 p-[0.4rem] rounded-lg">
      <section className="relative w-full flex flex-col justify-start gap-0  ">
        <motion.div
          className={`absolute top-0 w-full h-full rounded-md -z-10 bg-stone-800/80`}
          initial={{
            visibility: "hidden",
            height: 0,
            width: "100%",
            transform: `translateY(0px)`,
          }}
          layoutId="writing-item"
          animate={{
            height: hoverElementProperties.height,
            transform: `translateY(${hoverElementProperties.y}px)`,
            visibility: hoverElementProperties.isHovered ? "visible" : "hidden",
          }}
          transition={{
            duration: 0.3,
            type: "spring",
            stiffness: 130,
            damping: 9,
          }}
        />
        {allPosts.map((post: Post, index: number) => (
          <WritingCard
            key={post.slug}
            setHoverElementProperties={setHoverElementProperties}
            title={post.title}
            published={post.published}
            href={`${post.slug}`}
          />
        ))}
      </section>
    </div>
  );
}
