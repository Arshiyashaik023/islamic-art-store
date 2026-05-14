"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import AccordionItem from "@/app/components/AccordionItem";

const faqData = [
  {
    id: "1",
    question: "Can I customize my artwork?",
    answer: "Yes, we offer bespoke customization options including specific verses, colors, sizes, and framing styles to match your space perfectly."
  },
  {
    id: "2",
    question: "How long does delivery take?",
    answer: "Each piece is handcrafted to order. Standard delivery takes 7–14 business days. Custom commissions may require 3–4 weeks."
  },
  {
    id: "3",
    question: "Do you ship internationally?",
    answer: "Yes, we ship worldwide. All artworks are carefully packaged to ensure they arrive in pristine condition, no matter the destination."
  },
  {
    id: "4",
    question: "What materials are used?",
    answer: "We use museum-grade canvases, archival inks, solid wood frames, and genuine gold leaf accents for select pieces."
  },
  {
    id: "5",
    question: "Are the artworks handmade?",
    answer: "Absolutely. Every piece is individually crafted by skilled artisans using traditional Islamic artistic techniques."
  },
  {
    id: "6",
    question: "Can I request specific colors or verses?",
    answer: "Of course. Share your preferences during checkout or contact us directly, and we will create a piece that resonates with your vision."
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.08, delayChildren: 0.1 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.25, 0.1, 0.25, 1] },
  },
};

export default function FAQ() {
  const [openId, setOpenId] = useState<string | null>("1");

  const handleToggle = (id: string) => {
    setOpenId((prev) => (prev === id ? null : id));
  };

  return (
    <section
      className="py-20 md:py-28 bg-[#F9F7F2] md:bg-white"
      aria-labelledby="faq-heading"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        {/* Section Header */}
        <motion.div
          className="text-center mb-12 md:mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
          }}
        >
          <span className="block text-[10px] uppercase tracking-[0.25em] text-[#C9A96E] mb-3">
            Questions & Answers
          </span>
          <h2
            id="faq-heading"
            className="text-3xl md:text-4xl font-light tracking-tight text-[#1C1C1C]"
          >
            Frequently Asked Questions
          </h2>
        </motion.div>

        {/* Accordion Container */}
        <motion.div
          className="max-w-3xl mx-auto shadow-sm shadow-black/5 rounded-2xl overflow-hidden"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={containerVariants}
        >
          {faqData.map((item) => (
            <motion.div key={item.id} variants={itemVariants}>
              <AccordionItem
                id={item.id}
                question={item.question}
                answer={item.answer}
                isOpen={openId === item.id}
                onClick={() => handleToggle(item.id)}
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
