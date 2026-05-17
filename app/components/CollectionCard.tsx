"use client";

import React from "react";
import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import type { Collection } from "@/app/data/collections";

interface CollectionCardProps extends Collection {
  index: number;
}

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.25, 0.1, 0.25, 1],
    },
  },
};

export default function CollectionCard({
  title,
  subtitle,
  label,
  image,
  href,
  index,
}: CollectionCardProps) {
  const prefersReducedMotion = useReducedMotion();

  return (
    <motion.div
      variants={itemVariants}
      className="group"
    >
      <motion.a
        href={href}
        aria-label={`Explore ${title} collection`}
        role="button"
        className="
          block relative overflow-hidden
          rounded-2xl lg:rounded-3xl
          aspect-[3/4] md:aspect-[4/5] lg:aspect-[3/4]
          cursor-pointer
          ring-1 ring-[#C9A96E]/20
          shadow-lg shadow-black/5
          hover:shadow-[0_0_25px_rgba(201,169,110,0.2),0_0_8px_rgba(201,169,110,0.15)_inset,0_20px_50px_-12px_rgba(0,0,0,0.2)]
          transition-shadow duration-700 ease-out
          focus-visible:outline-none
          focus-visible:ring-2
          focus-visible:ring-[#C9A96E]
          focus-visible:ring-offset-2
          focus-visible:ring-offset-[#F9F7F2]
          focus-visible:shadow-[0_0_25px_rgba(201,169,110,0.2),0_0_8px_rgba(201,169,110,0.15)_inset]
          will-change-transform
        "
        whileHover={prefersReducedMotion ? {} : { y: -4 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        style={{
          boxShadow: "0 4px 20px -6px rgba(0, 0, 0, 0.1), 0 0 15px rgba(201, 169, 110, 0.08)",
        }}
      >
        {/* Image Layer */}
        <motion.div
          className="absolute inset-0 will-change-transform"
          style={{ position: "absolute" }}
          whileHover={
            prefersReducedMotion
              ? {}
              : { scale: 1.05, y: -6 }
          }
          transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1] }}
        >
          <Image
            src={image}
            alt={`${title} — Islamic art collection`}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 25vw"
            className="object-cover"
            priority={index < 2}
          />
        </motion.div>

        {/* Gradient Overlay — darkens on hover via group */}
        <div
          className="
            absolute inset-0 z-10
            bg-gradient-to-t from-black/60 via-black/20 to-transparent
            transition-all duration-700 ease-out
            group-hover:from-black/75
          "
          aria-hidden="true"
        />

        {/* Ambient Gold Glow on Hover */}
        <div
          className="
            absolute inset-0 z-[5]
            opacity-0 group-hover:opacity-100
            transition-opacity duration-700 ease-out
            pointer-events-none
          "
          style={{
            boxShadow: "inset 0 0 40px rgba(201, 169, 110, 0.1)",
          }}
          aria-hidden="true"
        />

        {/* Content Layer */}
        <div className="absolute bottom-0 left-0 right-0 z-20 p-5 md:p-6 lg:p-6">
          {/* Label */}
          <span
            className="
              block mb-2
              text-[10px] uppercase tracking-[0.25em] font-medium
              text-[#C9A96E]
            "
          >
            {label}
          </span>

          {/* Title */}
          <h3
            className="
              text-xl md:text-2xl lg:text-xl xl:text-2xl
              font-light tracking-wide
              text-white leading-tight
            "
          >
            {title}
          </h3>

          {/* Subtitle */}
          <p className="text-xs lg:text-[13px] font-light text-white/70 mt-1 leading-relaxed">
            {subtitle}
          </p>

          {/* CTA */}
          <div className="mt-3 flex items-center gap-2">
            <span
              className="
                text-xs uppercase tracking-widest
                text-white/90 group-hover:text-[#C9A96E]
                transition-colors duration-500
              "
            >
              Explore
            </span>
            <span
              className="
                inline-block text-white/90 group-hover:text-[#C9A96E]
                transition-all duration-500
                group-hover:translate-x-1
              "
              aria-hidden="true"
            >
              →
            </span>
          </div>
        </div>
      </motion.a>
    </motion.div>
  );
}
