"use client";

import React from "react";
import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import type { Product } from "@/app/data/products";

interface ProductCardProps extends Product {
  priority?: boolean;
}

export default function ProductCard({
  name,
  price,
  originalPrice,
  image,
  isNew,
  priority = false,
}: ProductCardProps) {
  const prefersReducedMotion = useReducedMotion();

  return (
    <motion.div
      className="
        group relative flex-shrink-0
        w-[260px] lg:w-[280px]
        bg-[#FAFAF8]
        rounded-xl lg:rounded-2xl
        shadow-sm shadow-black/5
        ring-1 ring-[#C9A96E]/0
        hover:ring-[#C9A96E]/40
        hover:shadow-[0_0_20px_rgba(201,169,110,0.15),0_10px_25px_-5px_rgba(0,0,0,0.1)]
        transition-all duration-500 ease-out
        overflow-hidden
        focus-visible:outline-none
        focus-visible:ring-2
        focus-visible:ring-[#C9A96E]
        focus-visible:ring-offset-2
        focus-visible:ring-offset-[#F9F7F2]
        snap-start
        will-change-transform
      "
      whileHover={prefersReducedMotion ? {} : { y: -6 }}
    >
      {/* Optional Ambient Glow Behind Card via Pseudo-element approach */}
      <div
        className="
          absolute inset-0 z-0
          opacity-0 group-hover:opacity-100
          bg-[#C9A96E]/5
          transition-opacity duration-700 ease-out
          pointer-events-none
        "
        aria-hidden="true"
      />

      {/* Image Container */}
      <div className="relative aspect-[3/4] overflow-hidden w-full z-10 bg-gray-100">
        <motion.div
          className="absolute inset-0 w-full h-full"
          whileHover={prefersReducedMotion ? {} : { scale: 1.05 }}
          transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1] }}
        >
          <Image
            src={image}
            alt={name}
            fill
            quality={100}
            sizes="(max-width: 768px) 50vw, 280px"
            className="object-cover object-center"
            priority={priority}
          />
        </motion.div>

        {/* Optional subtle overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/5 to-transparent pointer-events-none" />

        {/* Badges */}
        {isNew && (
          <div className="absolute top-3 left-3 bg-white/80 backdrop-blur-sm px-2.5 py-1 rounded-full border border-black/5 z-20">
            <span className="text-[9px] uppercase tracking-wider font-medium text-[#1C1C1C]">
              New Arrival
            </span>
          </div>
        )}
      </div>

      {/* Content */}
      <div className="p-3 lg:p-4 z-10 relative flex flex-col gap-2">
        <h3 className="text-sm md:text-base font-medium text-[#1C1C1C] leading-snug line-clamp-1">
          {name}
        </h3>
        
        <div className="flex items-center gap-2">
          <p className="text-sm font-light text-[#1C1C1C]">
            ${price}
          </p>
          {originalPrice && (
            <p className="text-xs line-through text-[#6B6560]">
              ${originalPrice}
            </p>
          )}
        </div>

        {/* Quick Add CTA */}
        <button
          className="
            mt-1 w-max
            text-[10px] uppercase tracking-widest font-medium
            text-[#C9A96E] hover:text-[#1C1C1C]
            transition-colors duration-300
            focus-visible:outline-none focus-visible:underline
          "
          aria-label={`Add ${name} to cart`}
        >
          + Quick Add
        </button>
      </div>
    </motion.div>
  );
}
