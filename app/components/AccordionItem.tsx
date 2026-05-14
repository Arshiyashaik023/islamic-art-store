"use client";

import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

interface AccordionItemProps {
  id: string;
  question: string;
  answer: string;
  isOpen: boolean;
  onClick: () => void;
}

export default function AccordionItem({
  id,
  question,
  answer,
  isOpen,
  onClick,
}: AccordionItemProps) {
  return (
    <div className="border-b border-[#EAE6DF] last:border-b-0 overflow-hidden bg-white rounded-lg transition-colors duration-300 hover:bg-[#FAFAF8]">
      <button
        type="button"
        className="w-full flex items-center justify-between px-6 py-5 md:px-8 md:py-6 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C9A96E] focus-visible:ring-inset text-left cursor-pointer"
        onClick={onClick}
        aria-expanded={isOpen}
        aria-controls={`faq-answer-${id}`}
        id={`faq-question-${id}`}
      >
        <span className="text-base md:text-lg font-medium text-[#1C1C1C]">
          {question}
        </span>
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.3 }}
          className="flex-shrink-0 ml-4 text-[#C9A96E]"
        >
          <ChevronDown className="w-5 h-5" />
        </motion.div>
      </button>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            id={`faq-answer-${id}`}
            role="region"
            aria-labelledby={`faq-question-${id}`}
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.4, ease: [0.25, 0.1, 0.25, 1] }}
          >
            <div className="px-6 pb-6 md:px-8 md:pb-8 pt-0">
              <p className="text-base font-light text-[#6B6560] leading-relaxed">
                {answer}
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
