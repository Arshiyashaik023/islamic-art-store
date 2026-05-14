"use client";

import React, { useRef } from "react";
import { motion } from "framer-motion";
import { featuredProducts } from "@/app/data/products";
import ProductCard from "@/app/components/ProductCard";

const sectionVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 0.6, ease: [0.25, 0.1, 0.25, 1] },
  },
};

const headerVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.25, 0.1, 0.25, 1] },
  },
};

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.08, delayChildren: 0.2 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.5, ease: [0.25, 0.1, 0.25, 1] },
  },
};

export default function FeaturedProducts() {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: -300, behavior: "smooth" });
    }
  };

  const scrollRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: 300, behavior: "smooth" });
    }
  };

  return (
    <motion.section
      className="w-full py-10 lg:py-14 bg-inherit overflow-hidden relative"
      aria-label="Featured products"
      role="region"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-50px" }}
      variants={sectionVariants}
    >
      <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-12 mb-6 lg:mb-8 flex items-end justify-between">
        <motion.div variants={containerVariants} className="flex flex-col">
          <motion.span
            variants={headerVariants}
            className="text-[10px] uppercase tracking-[0.2em] text-[#C9A96E] mb-2"
          >
            New Arrivals
          </motion.span>
          <motion.h2
            variants={headerVariants}
            className="text-2xl md:text-3xl font-light tracking-tight text-[#1C1C1C]"
          >
            Featured Pieces
          </motion.h2>
        </motion.div>

        {/* Desktop Navigation Arrows */}
        <motion.div
          variants={headerVariants}
          className="hidden md:flex items-center gap-3"
        >
          <button
            onClick={scrollLeft}
            className="w-10 h-10 rounded-full border border-[#C9A96E]/30 flex items-center justify-center text-[#C9A96E] hover:bg-[#C9A96E] hover:text-white transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C9A96E]"
            aria-label="Scroll left"
          >
            <span aria-hidden="true" className="text-lg leading-none">
              ←
            </span>
          </button>
          <button
            onClick={scrollRight}
            className="w-10 h-10 rounded-full border border-[#C9A96E]/30 flex items-center justify-center text-[#C9A96E] hover:bg-[#C9A96E] hover:text-white transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C9A96E]"
            aria-label="Scroll right"
          >
            <span aria-hidden="true" className="text-lg leading-none">
              →
            </span>
          </button>
        </motion.div>
      </div>

      <div className="relative max-w-7xl mx-auto">
        {/* Left Gradient Edge */}
        <div className="absolute top-0 bottom-0 left-0 w-8 lg:w-12 bg-gradient-to-r from-[#F9F7F2] to-transparent z-10 pointer-events-none hidden md:block" />

        {/* Horizontal Scroll Container */}
        <motion.div
          ref={scrollContainerRef}
          className="
            flex gap-4 lg:gap-5
            overflow-x-auto overflow-y-hidden
            snap-x snap-mandatory
            px-4 md:px-8 lg:px-12 pb-4 pt-2
            scrollbar-hide
            [&::-webkit-scrollbar]:hidden
          "
          aria-label="Featured products carousel"
          variants={containerVariants}
        >
          {featuredProducts.map((product, index) => (
            <motion.div key={product.id} variants={cardVariants}>
              <ProductCard {...product} priority={index < 2} />
            </motion.div>
          ))}
        </motion.div>

        {/* Right Gradient Edge */}
        <div className="absolute top-0 bottom-0 right-0 w-8 lg:w-12 bg-gradient-to-l from-[#F9F7F2] to-transparent z-10 pointer-events-none hidden md:block" />
      </div>
    </motion.section>
  );
}
