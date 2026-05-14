"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Mail, ArrowRight } from "lucide-react";
import { FaInstagram } from "react-icons/fa";

// Fallback Pinterest Icon since it's not always in lucide-react standard set
const PinterestIcon = ({ className }: { className?: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="currentColor"
    className={className}
    aria-hidden="true"
  >
    <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.162-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.72-.359-1.781c0-1.663.967-2.911 2.168-2.911 1.024 0 1.518.769 1.518 1.688 0 1.029-.653 2.567-.992 3.992-.285 1.193.6 2.165 1.775 2.165 2.128 0 3.768-2.245 3.768-5.487 0-2.861-2.063-4.869-5.008-4.869-3.41 0-5.409 2.562-5.409 5.199 0 1.033.394 2.143.889 2.741.099.12.112.225.085.345-.09.375-.293 1.199-.334 1.363-.053.225-.172.271-.401.165-1.495-.69-2.433-2.878-2.433-4.646 0-3.776 2.748-7.252 7.951-7.252 4.168 0 7.392 2.967 7.392 6.923 0 4.135-2.607 7.462-6.233 7.462-1.214 0-2.354-.629-2.758-1.379l-.749 2.848c-.269 1.045-1.004 2.352-1.498 3.146 1.123.345 2.306.535 3.55.535 6.607 0 11.985-5.365 11.985-11.987C23.97 5.367 18.624 0 12.017 0z" />
  </svg>
);

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.25, 0.1, 0.25, 1] as const },
  },
};

export default function Footer() {
  const [email, setEmail] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setIsSubmitted(true);
      setEmail("");
    }
  };

  return (
    <footer
      className="bg-[#1C1C1C] relative overflow-hidden"
      aria-label="Site Footer"
    >
      {/* Subtle top edge gradient */}
      <div className="absolute top-0 left-0 right-0 h-24 bg-gradient-to-b from-[#C9A96E]/5 to-transparent pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-8 lg:px-12 pt-16 pb-8 md:pt-20 md:pb-10 relative z-10">
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-30px" }}
          variants={containerVariants}
        >
          {/* Brand Column */}
          <motion.div variants={itemVariants} className="flex flex-col">
            <h2 className="text-xl font-light tracking-wide text-white mb-4">
              A Y N N
            </h2>
            <p className="text-sm font-light text-[#9A9590] leading-relaxed mb-6 max-w-sm">
              Handcrafted Islamic art for the modern soul. Each piece tells a story of devotion and timeless beauty.
            </p>
            <div className="flex items-center gap-4">
              <a
                href="#"
                aria-label="Follow us on Instagram"
                className="text-[#9A9590] hover:text-[#C9A96E] hover:scale-110 transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C9A96E] rounded-full"
              >
                <FaInstagram className="w-5 h-5" />
              </a>
              <a
                href="#"
                aria-label="Follow us on Pinterest"
                className="text-[#9A9590] hover:text-[#C9A96E] hover:scale-110 transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C9A96E] rounded-full"
              >
                <PinterestIcon className="w-5 h-5" />
              </a>
              <a
                href="mailto:contact@aynn.com"
                aria-label="Email us"
                className="text-[#9A9590] hover:text-[#C9A96E] hover:scale-110 transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C9A96E] rounded-full"
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </motion.div>

          {/* Navigation Column */}
          <motion.div variants={itemVariants} className="flex flex-col">
            <h3 className="text-xs uppercase tracking-[0.2em] text-[#C9A96E] mb-4">
              Navigate
            </h3>
            <ul className="space-y-3">
              {["Home", "Shop", "About", "Custom Orders", "Contact"].map((link) => (
                <li key={link}>
                  <a
                    href="#"
                    className="text-sm font-light text-[#9A9590] hover:text-white transition-colors duration-300 focus-visible:outline-none focus-visible:underline"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Collections Column */}
          <motion.div variants={itemVariants} className="flex flex-col">
            <h3 className="text-xs uppercase tracking-[0.2em] text-[#C9A96E] mb-4">
              Collections
            </h3>
            <ul className="space-y-3">
              {["Arabic Calligraphy", "Canvas Paintings", "Islamic Wall Decor", "Artwork"].map((link) => (
                <li key={link}>
                  <a
                    href="#"
                    className="text-sm font-light text-[#9A9590] hover:text-white transition-colors duration-300 focus-visible:outline-none focus-visible:underline"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Newsletter Column */}
          <motion.div variants={itemVariants} className="flex flex-col">
            <h3 className="text-xs uppercase tracking-[0.2em] text-[#C9A96E] mb-4">
              Stay Inspired
            </h3>
            <p className="text-sm font-light text-[#9A9590] leading-relaxed mb-4">
              Receive updates on new collections and exclusive pieces.
            </p>

            <form onSubmit={handleSubscribe} className="relative w-full max-w-sm">
              <input
                type="email"
                placeholder="Your email address"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full bg-white/5 border border-white/10 rounded-lg pl-4 pr-12 py-3 text-sm text-white placeholder:text-[#9A9590]/60 focus:outline-none focus:border-[#C9A96E] focus:ring-1 focus:ring-[#C9A96E]/30 transition-all duration-300"
                aria-label="Email address for newsletter"
              />
              <button
                type="submit"
                aria-label="Subscribe"
                className="absolute right-2 top-1/2 -translate-y-1/2 p-2 text-[#C9A96E] hover:text-white transition-colors duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C9A96E] rounded-md"
              >
                <ArrowRight className="w-4 h-4" />
              </button>
            </form>
            {isSubmitted && (
              <p className="text-xs text-[#C9A96E] mt-3">
                Thank you for subscribing.
              </p>
            )}
          </motion.div>
        </motion.div>

        {/* Copyright Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-12 pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4"
        >
          <p className="text-xs text-[#9A9590]/60 text-center md:text-left">
            © {new Date().getFullYear()} AYNN. All rights reserved.
          </p>
          <div className="flex gap-6">
            <a href="#" className="text-xs text-[#9A9590]/60 hover:text-white transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="text-xs text-[#9A9590]/60 hover:text-white transition-colors">
              Terms of Service
            </a>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}
