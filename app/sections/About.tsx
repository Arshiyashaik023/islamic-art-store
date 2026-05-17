"use client";

import React from "react";
import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: 0.1 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.25, 0.1, 0.25, 1] as const },
  },
};

export default function About() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <section
      className="py-20 md:py-28 lg:py-32 bg-[#F9F7F2]"
      aria-label="Our Story"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-8 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 lg:gap-16 items-center">
          {/* Image Column */}
          <motion.div
            className="relative aspect-[4/3] md:aspect-[4/5] lg:aspect-[4/5] w-full rounded-2xl lg:rounded-3xl overflow-hidden shadow-xl shadow-black/5 bg-[#EAE6DF]"
            initial={{ opacity: 0, scale: prefersReducedMotion ? 1 : 1.02 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 1, ease: [0.25, 0.1, 0.25, 1] }}
          >
            <motion.div
              className="absolute inset-0 w-full h-full"
              style={{ position: "absolute" }}
              whileHover={prefersReducedMotion ? {} : { scale: 1.05 }}
              transition={{ duration: 1, ease: "easeOut" }}
            >
              <Image
                src="/images/about/image.png"
                alt="Artist working on an Islamic painting"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/5 to-transparent pointer-events-none" />
            </motion.div>
          </motion.div>

          {/* Text Column */}
          <motion.div
            className="flex flex-col justify-center"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={containerVariants}
          >
            <motion.span
              variants={itemVariants}
              className="text-[10px] uppercase tracking-[0.25em] text-[#C9A96E] mb-4 md:mb-6 block"
            >
              Our Story
            </motion.span>

            <motion.h2
              variants={itemVariants}
              className="text-3xl md:text-4xl lg:text-5xl font-light tracking-tight text-[#1C1C1C] leading-[1.15] mb-6 md:mb-8"
            >
              Handmade Islamic Art for the modern home
            </motion.h2>

            <motion.div variants={itemVariants} className="space-y-6 max-w-prose">
              <p className="text-base md:text-lg font-light text-[#6B6560] leading-relaxed">
                "Rooted in tradition and crafted with intention"  each piece blends Islamic artistic heritage with a calm modern aesthetic.
                Inspired by historic architecture, desert tones, and sacred geometry, the collection is designed to create spaces that feel elegant, peaceful, and reflective.
              </p>
              <p className="text-base md:text-lg font-light text-[#6B6560] leading-relaxed">
                “I create Islamic-inspired artwork that combines tradition, calmness, and meaningful design.
                Inspired by ancient architecture, earthy landscapes, and the beauty of faith, each painting is made to bring warmth and serenity into your home.
                Every piece is carefully crafted to feel timeless, personal, and spiritually uplifting.”
              </p>
            </motion.div>

            <motion.div variants={itemVariants} className="mt-8 md:mt-12">
              <a
                href="#process"
                className="inline-block text-sm uppercase tracking-widest text-[#C9A96E] hover:text-[#1C1C1C] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C9A96E] focus-visible:ring-offset-4 focus-visible:ring-offset-[#F9F7F2]"
              >
                Explore Our Process →
              </a>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
