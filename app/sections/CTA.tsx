"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.12, delayChildren: 0 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 25 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.25, 0.1, 0.25, 1] },
  },
};

export default function CTA() {
  return (
    <section
      className="relative py-24 md:py-32 lg:py-40 bg-gradient-to-b from-[#F9F7F2] to-[#F5F0E8] overflow-hidden"
      aria-label="Call to Action"
    >
      {/* Subtle Ambient Glow */}
      <div
        className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[#C9A96E]/5 via-transparent to-transparent pointer-events-none"
        aria-hidden="true"
      />

      <div className="relative max-w-3xl mx-auto text-center px-6 z-10">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={containerVariants}
        >
          {/* Label */}
          <motion.span
            variants={itemVariants}
            className="block text-[10px] uppercase tracking-[0.25em] text-[#C9A96E]"
          >
            Begin Your Journey
          </motion.span>

          {/* Main Heading */}
          <motion.h2
            variants={itemVariants}
            className="text-3xl md:text-4xl lg:text-5xl font-light tracking-tight text-[#1C1C1C] mt-4 mb-6"
          >
            Ready to Find Your Piece?
          </motion.h2>

          {/* Subtext */}
          <motion.p
            variants={itemVariants}
            className="text-base md:text-lg font-light text-[#6B6560] max-w-lg mx-auto"
          >
            Browse finished works or create something entirely your own.
          </motion.p>

          {/* Button Group */}
          <motion.div
            variants={itemVariants}
            className="mt-8 flex flex-col md:flex-row items-center justify-center gap-4 md:gap-6"
          >
            {/* Primary Button */}
            <Link
              href="/collections"
              className="
                w-full md:w-auto min-w-[200px]
                px-8 py-4 rounded-full
                bg-[#1C1C1C] text-white text-sm uppercase tracking-widest
                shadow-lg
                hover:bg-[#333333] hover:shadow-xl hover:shadow-black/10 hover:-translate-y-0.5
                transition-all duration-500
                focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[#F5F0E8]
                text-center inline-block
              "
            >
              Shop Collection
            </Link>

            {/* Secondary Button */}
            <button
              className="
                w-full md:w-auto min-w-[200px]
                px-8 py-4 rounded-full
                bg-transparent border border-[#C9A96E]/40 text-[#1C1C1C] text-sm uppercase tracking-widest
                hover:border-[#C9A96E] hover:bg-[#C9A96E]/5 hover:shadow-[0_0_20px_rgba(201,169,110,0.15)] hover:-translate-y-0.5
                transition-all duration-500
                focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C9A96E] focus-visible:ring-offset-2 focus-visible:ring-offset-[#F5F0E8]
              "
            >
              Customize Artwork
            </button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
