'use client';

/**
 * Hero Section — MAWRID / AYNN Islamic Art Ecommerce
 * ───────────────────────────────────────────────────
 * A full-bleed, immersive hero with parallax background,
 * staggered text entrance, floating geometric shapes,
 * and a warm, meditative atmosphere.
 *
 * Stack: Next.js 14+ App Router · Tailwind CSS v4 · Framer Motion
 */

import React, { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import {
  motion,
  useScroll,
  useTransform,
  useReducedMotion,
} from 'framer-motion';

// ─────────────────────────────────────────────────────────────────────────────
// Types
// ─────────────────────────────────────────────────────────────────────────────
interface HeroProps {
  className?: string;
}

// ─────────────────────────────────────────────────────────────────────────────
// Color tokens (kept local so the component is fully self-contained)
// ─────────────────────────────────────────────────────────────────────────────
const C = {
  sand50: '#FAF8F5',
  sand100: '#F5F0E8',
  sand200: '#E8DFD2',
  sand300: '#D4C8B8',
  sand600: '#7D6F5E',
  sand700: '#5E5245',
  sand900: '#1E1A16',
  gold300: '#DEB87A',
  gold400: '#D4A85C',
  gold500: '#C28A3E',
  gold600: '#A87332',
  sage200: '#C5D1C0',
  warmWhite: '#FFFCF8',
} as const;

// ─────────────────────────────────────────────────────────────────────────────
// Framer Motion variants
// ─────────────────────────────────────────────────────────────────────────────

/** Stagger container for the text block */
const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.3,
    },
  },
};

const eyebrowVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.25, 0.1, 0.25, 1.0] as const },
  },
};

const headlineVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.9, ease: [0.25, 0.1, 0.25, 1.0] as const },
  },
};

const subheadlineVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.25, 0.1, 0.25, 1.0] as const },
  },
};

const ctaGroupVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.15 },
  },
};

const ctaItemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.25, 0.1, 0.25, 1.0] as const },
  },
};

// ─────────────────────────────────────────────────────────────────────────────
// Floating SVG shapes
// ─────────────────────────────────────────────────────────────────────────────

/** Eight-pointed star outline (Islamic geometric motif) */
function EightPointStar({ className, style }: { className?: string; style?: React.CSSProperties }) {
  return (
    <svg
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      style={style}
      aria-hidden="true"
    >
      <path
        d="M50 0 L61.8 30.9 L93.3 6.7 L73.2 36.8 L100 50 L73.2 63.2 L93.3 93.3 L61.8 69.1 L50 100 L38.2 69.1 L6.7 93.3 L26.8 63.2 L0 50 L26.8 36.8 L6.7 6.7 L38.2 30.9 Z"
        stroke={C.gold300}
        strokeWidth="0.5"
      />
    </svg>
  );
}

/** Hexagon outline */
function Hexagon({ className, style }: { className?: string; style?: React.CSSProperties }) {
  return (
    <svg
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      style={style}
      aria-hidden="true"
    >
      <polygon
        points="50,2 93,25 93,75 50,98 7,75 7,25"
        stroke={C.sage200}
        strokeWidth="0.6"
        fill="none"
      />
    </svg>
  );
}

/** Small circle dot pattern */
function DotCluster({ className, style }: { className?: string; style?: React.CSSProperties }) {
  return (
    <svg
      viewBox="0 0 80 80"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      style={style}
      aria-hidden="true"
    >
      {/* 3 × 3 grid of soft dots */}
      {[0, 1, 2].map((row) =>
        [0, 1, 2].map((col) => (
          <circle
            key={`${row}-${col}`}
            cx={16 + col * 24}
            cy={16 + row * 24}
            r="3"
            fill={C.sand200}
          />
        ))
      )}
    </svg>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// Main Component
// ─────────────────────────────────────────────────────────────────────────────
export default function Hero({ className = '' }: HeroProps) {
  const sectionRef = useRef<HTMLElement>(null);
  const shouldReduce = useReducedMotion();
  const [isMobile, setIsMobile] = useState(false);

  // ── Responsive check (avoids SSR mismatch by running in useEffect) ─────
  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768);
    check();
    window.addEventListener('resize', check);
    return () => window.removeEventListener('resize', check);
  }, []);

  // ── Parallax scroll ────────────────────────────────────────────────────
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start start', 'end start'],
  });

  // On mobile or reduced-motion: no parallax
  const parallaxY = useTransform(
    scrollYProgress,
    [0, 1],
    isMobile || shouldReduce ? ['0%', '0%'] : ['0%', '30%'],
  );

  return (
    <section
      ref={sectionRef}
      className={`relative min-h-[90vh] overflow-hidden ${className}`}
      style={{ backgroundColor: C.sand50 }}
    >
      {/* ── Google Fonts (Cinzel + Source Sans 3) ─────────────────────────
          Ideally these live in layout.tsx via next/font. Keeping a
          fallback here so the component stays self-contained.           */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cinzel:wght@400;500;600&family=Source+Sans+3:wght@400;500;600&display=swap');
      `}</style>

      {/* ================================================================
          BACKGROUND IMAGE + PARALLAX
          ================================================================ */}
      <motion.div
        className="absolute inset-0 will-change-transform"
        initial={shouldReduce ? undefined : { scale: 1.08, opacity: 0 }}
        animate={shouldReduce ? undefined : { scale: 1, opacity: 1 }}
        transition={{ duration: 1.4, ease: [0.25, 0.1, 0.25, 1.0] }}
        style={{ y: parallaxY }}
      >
        <Image
          src="/images/hero image.png"
          alt="A hijabi artist painting intricate Arabic calligraphy on a large canvas in a sunlit atelier"
          fill
          priority
          quality={90}
          className="object-cover"
          sizes="100vw"
        />
      </motion.div>

      {/* ================================================================
          GRADIENT OVERLAY
          Desktop: left-to-right  ·  Mobile: bottom-to-top
          ================================================================ */}
      <div
        className="absolute inset-0 z-[1] hidden md:block"
        style={{
          background: `linear-gradient(
   to right,
   rgba(250, 248, 245, 0.85),
   rgba(210, 180, 140, 0.55),
   transparent
 )`
          //background: `linear-gradient(to right, ${C.sand50}CC, ${C.sand50}88, transparent)`
          //background: `linear-gradient(to right, ${C.sand50}F2, ${C.sand50}CC, transparent)`,
        }}
      />
      <div
        className="absolute inset-0 z-[1] block md:hidden"
        style={{
          background: `linear-gradient(
  to top,
  rgba(250, 248, 245, 0.85),
  rgba(210, 180, 140, 0.35),
  transparent
)`
          //background: `linear-gradient(to top, ${C.sand50}CC, ${C.sand50}66, transparent)`
          //background: `linear-gradient(to top, ${C.sand50}F2, ${C.sand50}99, transparent)`,
        }}
      />

      {/* ================================================================
          FLOATING GEOMETRIC SHAPES (behind text, z-[2])
          ================================================================ */}
      {/* 8-point star — top-right */}
      <motion.div
        className="absolute z-[2] w-32 h-32 md:w-48 md:h-48 pointer-events-none"
        style={{ top: '15%', right: '10%', opacity: 0.06 }}
        animate={
          shouldReduce
            ? undefined
            : { y: [0, -20, 0], rotate: [0, 5, -5, 0] }
        }
        transition={
          shouldReduce
            ? undefined
            : { duration: 16, repeat: Infinity, ease: 'easeInOut' }
        }
      >
        <EightPointStar className="w-full h-full" />
      </motion.div>

      {/* Hexagon — bottom-left (visible on all viewports, reduced opacity on mobile) */}
      <motion.div
        className="absolute z-[2] w-24 h-24 pointer-events-none opacity-[0.08] md:opacity-[0.08]"
        style={{ bottom: '20%', left: '5%' }}
        animate={
          shouldReduce
            ? undefined
            : { y: [0, 15, 0], rotate: [0, -8, 0] }
        }
        transition={
          shouldReduce
            ? undefined
            : { duration: 20, repeat: Infinity, ease: 'easeInOut', delay: 2 }
        }
      >
        <Hexagon className="w-full h-full" />
      </motion.div>

      {/* Dot cluster — middle-right (hidden on mobile) */}
      <motion.div
        className="absolute z-[2] w-16 h-16 pointer-events-none hidden md:block"
        style={{ top: '40%', right: '30%', opacity: 0.05 }}
        animate={
          shouldReduce
            ? undefined
            : { scale: [1, 1.1, 1], opacity: [0.05, 0.08, 0.05] }
        }
        transition={
          shouldReduce
            ? undefined
            : { duration: 12, repeat: Infinity, ease: 'easeInOut', delay: 4 }
        }
      >
        <DotCluster className="w-full h-full" />
      </motion.div>

      {/* Second star — lower-right (hidden on mobile, extra depth) */}
      <motion.div
        className="absolute z-[2] w-20 h-20 pointer-events-none hidden lg:block"
        style={{ bottom: '12%', right: '22%', opacity: 0.04 }}
        animate={
          shouldReduce
            ? undefined
            : { y: [0, 12, 0], rotate: [0, -3, 3, 0] }
        }
        transition={
          shouldReduce
            ? undefined
            : { duration: 22, repeat: Infinity, ease: 'easeInOut', delay: 6 }
        }
      >
        <EightPointStar className="w-full h-full" />
      </motion.div>

      {/* ================================================================
          TEXT CONTENT
          ================================================================ */}
      <motion.div
        className="relative z-10 max-w-7xl mx-auto flex flex-col justify-end md:justify-center
                   min-h-[90vh] px-6 md:px-12 lg:px-24 py-16 sm:py-24 md:py-32 lg:py-40
                   text-center md:text-left"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* ── Eyebrow ──────────────────────────────────────────────────── */}
        <motion.div variants={eyebrowVariants} className="flex flex-col items-center md:items-start">
          {/* Decorative bar */}
          <div
            className="w-12 h-[1px] mb-4"
            style={{ backgroundColor: C.gold400 }}
          />
          <span
            className="text-[0.75rem] md:text-xs font-medium uppercase"
            style={{
              fontFamily: "'Source Sans 5', sans-serif",
              letterSpacing: '0.2em',
              color: C.gold600,
            }}
          >
            Beautifully Handcrafted

          </span>
        </motion.div>

        {/* ── Headline ─────────────────────────────────────────────────── */}
        <motion.h1
          variants={headlineVariants}
          className="mt-6 max-w-[600px] mx-auto md:mx-0"
          style={{
            fontFamily: "'Cinzel', serif",
            fontWeight: 400,
            fontSize: 'clamp(2.5rem, 5vw, 4.5rem)',
            lineHeight: 1.1,
            letterSpacing: '0.02em',
            color: C.sand900,
          }}
        >
          Where{' '}
          <span style={{ color: C.gold600 }}>Beauty</span>{' '}
          Reflects Divine Inspiration
        </motion.h1>

        {/* ── Subheadline ──────────────────────────────────────────────── */}
        <motion.p
          variants={subheadlineVariants}
          className="mt-6 max-w-[480px] mx-auto md:mx-0 text-base md:text-lg"
          style={{
            fontFamily: "'Source Sans 5', sans-serif",
            fontWeight: 400,
            lineHeight: 1.7,
            color: C.sand900,
          }}
        >
          Each piece tells a story through careful brushwork and artistic vision.
          Explore ready-made artwork or commission something entirely your own.

        </motion.p>

        {/* ── CTA Group ────────────────────────────────────────────────── */}
        <motion.div
          variants={ctaGroupVariants}
          className="mt-10 flex flex-col sm:flex-row gap-4 items-center md:items-start"
        >
          {/* Primary CTA */}
          <motion.div variants={ctaItemVariants}>
            <Link href="/collections" className="inline-block">
              <motion.span
                className="inline-flex items-center justify-center cursor-pointer
                           w-full sm:w-auto px-8 py-4 text-sm font-medium uppercase"
                style={{
                  fontFamily: "'Source Sans 3', sans-serif",
                  letterSpacing: '0.08em',
                  backgroundColor: C.gold500,
                  color: C.warmWhite,
                  borderRadius: 0,
                  textDecoration: 'none',
                  transition: 'background-color 0.3s cubic-bezier(0.25,0.1,0.25,1), box-shadow 0.3s cubic-bezier(0.25,0.1,0.25,1)',
                }}
                whileHover={
                  shouldReduce
                    ? {}
                    : {
                      y: -1,
                      backgroundColor: C.gold600,
                      boxShadow: '0 4px 20px rgba(194,138,62,0.15)',
                    }
                }
                whileTap={shouldReduce ? {} : { scale: 0.98, y: 0 }}
              >
                Explore the Collection
              </motion.span>
            </Link>
          </motion.div>

          {/* Secondary CTA */}
          <motion.div variants={ctaItemVariants}>
            <Link href="/custom" className="inline-block">
              <motion.span
                className="inline-flex items-center justify-center cursor-pointer
                           w-full sm:w-auto px-8 py-4 text-sm font-medium uppercase border"
                style={{
                  fontFamily: "'Source Sans 3', sans-serif",
                  letterSpacing: '0.08em',
                  backgroundColor: 'transparent',
                  color: C.sand700,
                  borderColor: C.sand300,
                  borderRadius: 0,
                  textDecoration: 'none',
                  transition: 'all 0.3s cubic-bezier(0.25,0.1,0.25,1)',
                }}
                whileHover={
                  shouldReduce
                    ? {}
                    : {
                      backgroundColor: C.sand100,
                      borderColor: '#BFB3A3',
                    }
                }
                whileTap={shouldReduce ? {} : { scale: 0.98 }}
              >
                Customise Artwork
              </motion.span>
            </Link>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
}
