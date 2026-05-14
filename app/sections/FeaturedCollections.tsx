"use client";

import React from "react";
import { motion } from "framer-motion";
import { collections } from "@/app/data/collections";
import CollectionCard from "@/app/components/CollectionCard";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.15,
    },
  },
};

const headerVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.25, 0.1, 0.25, 1],
    },
  },
};

export default function FeaturedCollections() {
  return (
    <section
      id="featured-collections"
      className="
        relative overflow-x-hidden
        pt-10 lg:pt-14
        pb-12 lg:pb-16
        bg-[#F9F7F2]
      "
    >
      {/* Subtle ambient top glow */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[80%] h-32 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at center, rgba(201, 169, 110, 0.06) 0%, transparent 70%)",
        }}
        aria-hidden="true"
      />

      <div className="max-w-[1400px] mx-auto px-4 md:px-8 lg:px-12">
        {/* Section Header */}
        <motion.div
          className="text-center mb-6 lg:mb-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={containerVariants}
        >
          {/* Label */}
          <motion.span
            variants={headerVariants}
            className="
              inline-block mb-3
              text-[10px] md:text-xs uppercase tracking-[0.2em] font-medium
              text-[#C9A96E]
            "
          >
            Curated Collections
          </motion.span>

          {/* Title */}
          <motion.h2
            variants={headerVariants}
            className="
              text-3xl md:text-4xl lg:text-5xl
              font-light tracking-tight leading-tight
              text-[#1C1C1C]
            "
          >
            Explore Our Collections
          </motion.h2>

          {/* Decorative line */}
          <motion.div
            variants={headerVariants}
            className="mt-4 mx-auto w-12 h-[1px] bg-[#C9A96E]/40"
            aria-hidden="true"
          />
        </motion.div>

        {/* Collection Grid */}
        <motion.div
          className="
            grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4
            gap-4 lg:gap-5
            lg:max-h-[calc(100vh-12rem)]
          "
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={containerVariants}
        >
          {collections.map((collection, index) => (
            <CollectionCard
              key={collection.id}
              {...collection}
              index={index}
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
