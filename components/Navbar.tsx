'use client';

/**
 * MAWRID — Premium Islamic Art Ecommerce Navbar
 * -----------------------------------------------
 * Stack  : Next.js 14+ App Router · Tailwind CSS v4 · Framer Motion · Lucide React
 * File   : components/Navbar.tsx
 *
 * Sections
 *   1. Imports & Types
 *   2. Constants (palette, links)
 *   3. Custom hooks (useScrollState)
 *   4. Sub-components (MobileMenu, SearchBar)
 *   5. Main Navbar export
 */

// ─────────────────────────────────────────────────────────────────────────────
// 1. Imports & Types
// ─────────────────────────────────────────────────────────────────────────────
import React, { useCallback, useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { AnimatePresence, motion, useReducedMotion, } from 'framer-motion';
import { Menu, Search, ShoppingBag, User, X, BookOpen } from 'lucide-react';
import { FaInstagram } from 'react-icons/fa';

/** Props for the root Navbar component */
export interface NavbarProps {
    /** Use 'dark' when the navbar sits over a dark hero image so initial text flips to warm-white */
    variant?: 'light' | 'dark';
    /** Initial cart item count (consumer manages actual state externally) */
    cartCount?: number;
}

// ─────────────────────────────────────────────────────────────────────────────
// 2. Constants
// ─────────────────────────────────────────────────────────────────────────────
const COLORS = {
    sand700: '#5E5245',
    sand900: '#1E1A16',
    sand100: '#F5F0E8',
    sand400: '#A89880',
    gold500: '#C28A3E',
    gold600: '#A8732A',
    gold700: '#8F5E18',
    warmWhite: '#FFFCF8',
} as const;

const NAV_LINKS = [
    { label: 'Collections', href: '/collections' },
    { label: 'Artisans', href: '/artisans' },
    { label: 'Our Story', href: '/our-story' },
    { label: 'Journal', href: '/journal' },
    { label: 'Contact', href: '/contact' },
] as const;

const SCROLL_THRESHOLD = 50; // px before glassmorphism kicks in

// ─────────────────────────────────────────────────────────────────────────────
// 3. Custom hooks
// ─────────────────────────────────────────────────────────────────────────────

/** Returns whether the page has been scrolled past SCROLL_THRESHOLD pixels */
function useScrollState() {
    const [scrolled, setScrolled] = useState(false);
    const [hidden, setHidden] = useState(false);
    const lastScrollY = useRef(0);

    useEffect(() => {
        const onScroll = () => {
            const y = window.scrollY;

            // Glassmorphism threshold
            setScrolled(y > SCROLL_THRESHOLD);

            // Hide-on-scroll-down / reveal-on-scroll-up
            if (y > lastScrollY.current && y > 120) {
                setHidden(true);
            } else {
                setHidden(false);
            }
            lastScrollY.current = y;
        };

        window.addEventListener('scroll', onScroll, { passive: true });
        return () => window.removeEventListener('scroll', onScroll);
    }, []);

    return { scrolled, hidden };
}

// ─────────────────────────────────────────────────────────────────────────────
// 4. Sub-components
// ─────────────────────────────────────────────────────────────────────────────

/* ── 4a. NavLink with animated underline ─────────────────────────────────── */
interface NavLinkProps {
    href: string;
    label: string;
    isActive: boolean;
    textColor: string;
}

function NavLink({ href, label, isActive, textColor }: NavLinkProps) {
    const shouldReduce = useReducedMotion();

    return (
        <Link
            href={href}
            className="relative group flex flex-col items-center outline-none focus-visible:outline-2 focus-visible:outline-offset-2"
            style={{
                fontFamily: "'Cinzel', serif",
                fontWeight: 500,
                fontSize: '0.875rem',
                textTransform: 'uppercase',
                letterSpacing: '0.08em',
                color: isActive ? COLORS.sand900 : textColor,
                textDecoration: 'none',
            }}
        >
            {/* Label */}
            <motion.span
                animate={{ color: isActive ? COLORS.sand900 : textColor }}
                whileHover={{ color: COLORS.sand900 }}
                transition={{ duration: 0.3 }}
            >
                {label}
            </motion.span>

            {/* Underline — shared layoutId creates "travelling" effect */}
            <span className="relative h-[1px] w-full mt-[3px]">
                {isActive ? (
                    <motion.span
                        layoutId="activeNav"
                        className="absolute inset-0"
                        style={{ backgroundColor: COLORS.gold500 }}
                        transition={{ duration: shouldReduce ? 0 : 0.35, ease: [0.25, 0.1, 0.25, 1.0] }}
                    />
                ) : (
                    <motion.span
                        className="absolute inset-0 origin-center"
                        style={{ backgroundColor: COLORS.gold500, scaleX: 0 }}
                        whileHover={shouldReduce ? {} : { scaleX: 1 }}
                        transition={{ duration: 0.3, ease: [0.25, 0.1, 0.25, 1.0] }}
                    />
                )}
            </span>
        </Link>
    );
}

/* ── 4b. Icon button ─────────────────────────────────────────────────────── */
interface IconButtonProps {
    label: string;
    onClick?: () => void;
    children: React.ReactNode;
    badgeCount?: number;
}

function IconButton({ label, onClick, children, badgeCount = 0 }: IconButtonProps) {
    return (
        <motion.button
            aria-label={label}
            onClick={onClick}
            className="relative flex items-center justify-center outline-none focus-visible:outline-2 focus-visible:outline-offset-2"
            style={{
                width: 44,
                height: 44,
                borderRadius: 0,
            }}
            whileHover={{ backgroundColor: COLORS.sand100 }}
            whileTap={{ scale: 0.96 }}
            transition={{ duration: 0.2 }}
        >
            {children}

            {/* Cart badge */}
            {badgeCount > 0 && (
                <span
                    className="absolute top-1.5 right-1.5 flex items-center justify-center min-w-[14px] h-[14px] px-[3px] rounded-full"
                    style={{
                        backgroundColor: COLORS.gold500,
                        color: COLORS.warmWhite,
                        fontSize: '0.625rem',
                        fontFamily: "'Source Sans 3', sans-serif",
                        fontWeight: 600,
                        lineHeight: 1,
                    }}
                >
                    {badgeCount > 99 ? '99+' : badgeCount}
                </span>
            )}
        </motion.button>
    );
}

/* ── 4c. Expandable Search Bar ───────────────────────────────────────────── */
interface SearchBarProps {
    isOpen: boolean;
    onClose: () => void;
}

function SearchBar({ isOpen, onClose }: SearchBarProps) {
    const inputRef = useRef<HTMLInputElement>(null);

    // Auto-focus when opened
    useEffect(() => {
        if (isOpen) {
            setTimeout(() => inputRef.current?.focus(), 50);
        }
    }, [isOpen]);

    // Escape key closes
    useEffect(() => {
        const handler = (e: KeyboardEvent) => {
            if (e.key === 'Escape') onClose();
        };
        document.addEventListener('keydown', handler);
        return () => document.removeEventListener('keydown', handler);
    }, [onClose]);

    return (
        <AnimatePresence>
            {isOpen && (
                <motion.div
                    key="search-bar"
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 64, opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.4, ease: 'easeInOut' }}
                    className="overflow-hidden w-full"
                    style={{
                        backgroundColor: 'rgba(250, 248, 245, 0.88)',
                        backdropFilter: 'blur(20px) saturate(1.2)',
                        borderBottom: '1px solid rgba(212, 200, 184, 0.3)',
                    }}
                >
                    <div
                        className="flex items-center gap-3 h-full mx-auto"
                        style={{ paddingInline: 48 }}
                    >
                        <Search size={18} color={COLORS.sand400} aria-hidden />
                        <input
                            ref={inputRef}
                            type="search"
                            placeholder="Search for art, artisans, collections..."
                            className="flex-1 bg-transparent border-none outline-none"
                            style={{
                                fontFamily: "'Source Sans 3', sans-serif",
                                fontSize: '0.9375rem',
                                color: COLORS.sand700,
                                caretColor: COLORS.gold500,
                            }}
                        />
                        <button
                            aria-label="Close search"
                            onClick={onClose}
                            className="outline-none focus-visible:outline-2 focus-visible:outline-offset-2"
                            style={{ color: COLORS.sand400 }}
                        >
                            <X size={18} />
                        </button>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}

/* ── 4d. Mobile Full-screen Menu ─────────────────────────────────────────── */
interface MobileMenuProps {
    isOpen: boolean;
    onClose: () => void;
    pathname: string;
    cartCount: number;
    textColor: string;
}

/** Stagger variants for nav items inside mobile menu */
const mobileMenuVariants = {
    hidden: {},
    visible: {
        transition: { staggerChildren: 0.08 },
    },
};

const mobileItemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.4, ease: [0.25, 0.1, 0.25, 1] as const } },
};

function MobileMenu({ isOpen, onClose, pathname, cartCount, textColor }: MobileMenuProps) {
    // Lock body scroll while menu is open
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = '';
        }
        return () => { document.body.style.overflow = ''; };
    }, [isOpen]);

    // Escape key
    useEffect(() => {
        const handler = (e: KeyboardEvent) => {
            if (e.key === 'Escape') onClose();
        };
        document.addEventListener('keydown', handler);
        return () => document.removeEventListener('keydown', handler);
    }, [onClose]);

    return (
        <AnimatePresence>
            {isOpen && (
                <>
                    {/* Backdrop (click to close) */}
                    <motion.div
                        key="mobile-backdrop"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="fixed inset-0 z-40"
                        style={{ backgroundColor: 'rgba(30, 26, 22, 0.25)' }}
                        onClick={onClose}
                        aria-hidden
                    />

                    {/* Slide-in panel */}
                    <motion.div
                        key="mobile-panel"
                        role="dialog"
                        aria-modal="true"
                        aria-label="Navigation menu"
                        initial={{ x: '100%' }}
                        animate={{ x: 0 }}
                        exit={{ x: '100%' }}
                        transition={{ duration: 0.5, ease: [0.25, 0.1, 0.25, 1.0] }}
                        className="fixed top-0 right-0 bottom-0 w-full max-w-sm z-50 flex flex-col"
                        style={{
                            backgroundColor: 'rgba(250, 248, 245, 0.97)',
                            backdropFilter: 'blur(32px)',
                            borderBottomLeftRadius: 16,
                        }}
                    >
                        {/* Close button row */}
                        <div
                            className="flex items-center justify-between px-6 shrink-0"
                            style={{ height: 64 }}
                        >
                            <span
                                style={{
                                    fontFamily: "'Cinzel', serif",
                                    fontWeight: 400,
                                    fontSize: '1.125rem',
                                    letterSpacing: '0.15em',
                                    textTransform: 'uppercase',
                                    color: COLORS.sand700,
                                }}
                            >
                                AYNN
                            </span>
                            <motion.button
                                aria-label="Close menu"
                                onClick={onClose}
                                whileTap={{ scale: 0.94 }}
                                className="outline-none focus-visible:outline-2 focus-visible:outline-offset-2 p-2"
                                style={{ color: COLORS.sand700 }}
                            >
                                <X size={22} />
                            </motion.button>
                        </div>

                        {/* Divider */}
                        <div style={{ height: 1, backgroundColor: 'rgba(212, 200, 184, 0.4)', marginInline: 24 }} />

                        {/* Nav links — staggered */}
                        <motion.nav
                            role="navigation"
                            aria-label="Mobile navigation"
                            className="flex-1 flex flex-col justify-center px-8 gap-8"
                            variants={mobileMenuVariants}
                            initial="hidden"
                            animate="visible"
                        >
                            {NAV_LINKS.map(({ label, href }) => {
                                const isActive = pathname === href;
                                return (
                                    <motion.div key={href} variants={mobileItemVariants}>
                                        <Link
                                            href={href}
                                            onClick={onClose}
                                            className="group relative inline-flex flex-col items-start outline-none focus-visible:outline-2 focus-visible:outline-offset-2"
                                            style={{
                                                fontFamily: "'Cinzel', serif",
                                                fontWeight: 500,
                                                fontSize: '1.5rem',
                                                letterSpacing: '0.05em',
                                                textTransform: 'uppercase',
                                                color: isActive ? COLORS.sand900 : COLORS.sand700,
                                            }}
                                        >
                                            {label}
                                            {/* Active gold dot */}
                                            {isActive && (
                                                <span
                                                    className="mt-1 h-[2px] w-8"
                                                    style={{ backgroundColor: COLORS.gold500 }}
                                                />
                                            )}
                                        </Link>
                                    </motion.div>
                                );
                            })}
                        </motion.nav>

                        {/* CTA — full-width inside mobile menu */}
                        <div className="px-6 pb-6 shrink-0">
                            <Link
                                href="/collections"
                                onClick={onClose}
                                className="flex items-center justify-center w-full outline-none focus-visible:outline-2 focus-visible:outline-offset-2"
                                style={{
                                    backgroundColor: COLORS.gold500,
                                    color: COLORS.warmWhite,
                                    padding: '16px 24px',
                                    fontFamily: "'Source Sans 3', sans-serif",
                                    fontWeight: 500,
                                    fontSize: '0.875rem',
                                    letterSpacing: '0.08em',
                                    textTransform: 'uppercase',
                                    textDecoration: 'none',
                                    borderRadius: 0,
                                }}
                            >
                                Explore Collection
                            </Link>
                        </div>

                        {/* Social links */}
                        <div
                            className="px-8 pb-8 shrink-0 flex items-center gap-6"
                        >
                            <a
                                href="https://instagram.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="Instagram"
                                className="flex items-center gap-2 outline-none focus-visible:outline-2 focus-visible:outline-offset-2"
                                style={{
                                    fontFamily: "'Source Sans 3', sans-serif",
                                    fontSize: '0.75rem',
                                    color: COLORS.sand400,
                                    textDecoration: 'none',
                                }}
                            >
                                <FaInstagram size={14} />
                                Instagram
                            </a>
                            <a
                                href="https://pinterest.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="Pinterest"
                                className="flex items-center gap-2 outline-none focus-visible:outline-2 focus-visible:outline-offset-2"
                                style={{
                                    fontFamily: "'Source Sans 3', sans-serif",
                                    fontSize: '0.75rem',
                                    color: COLORS.sand400,
                                    textDecoration: 'none',
                                }}
                            >
                                <BookOpen size={14} />
                                Pinterest
                            </a>
                        </div>
                    </motion.div>
                </>
            )}
        </AnimatePresence>
    );
}

// ─────────────────────────────────────────────────────────────────────────────
// 5. Main Navbar Component
// ─────────────────────────────────────────────────────────────────────────────
export default function Navbar({ variant = 'light', cartCount = 0 }: NavbarProps) {
    const pathname = usePathname();
    const { scrolled, hidden } = useScrollState();
    const [mobileOpen, setMobileOpen] = useState(false);
    const [searchOpen, setSearchOpen] = useState(false);
    const shouldReduce = useReducedMotion();

    // Derived text colours based on scroll state and variant
    const isDark = variant === 'dark' && !scrolled;
    const textColor = isDark ? COLORS.warmWhite : COLORS.sand700;
    const iconColor = isDark ? COLORS.warmWhite : COLORS.sand700;

    // Close handlers (stable references)
    const closeMenu = useCallback(() => setMobileOpen(false), []);
    const closeSearch = useCallback(() => setSearchOpen(false), []);

    // Glassmorphism style applied when scrolled
    const glassStyle: React.CSSProperties = scrolled
        ? {
            backgroundColor: 'rgba(250, 248, 245, 0.72)',
            backdropFilter: 'blur(20px) saturate(1.2)',
            WebkitBackdropFilter: 'blur(20px) saturate(1.2)',
            borderBottom: '1px solid rgba(212, 200, 184, 0.3)',
            boxShadow: '0 1px 3px rgba(30, 26, 22, 0.04), 0 1px 2px rgba(30, 26, 22, 0.02)',
        }
        : {
            backgroundColor: 'transparent',
            backdropFilter: 'none',
            borderBottom: 'none',
            boxShadow: 'none',
        };

    return (
        <>
            {/* ── Google Fonts link (idiomatic approach for client component) ───── */}
            {/* If you're using next/font, move these to layout.tsx instead         */}
            {/* eslint-disable-next-line @next/next/no-page-custom-font */}
            <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cinzel:wght@400;500;600&family=Source+Sans+3:wght@400;500;600&display=swap');
        *:focus-visible { outline: 2px solid ${COLORS.gold500}; outline-offset: 2px; }
      `}</style>

            {/* ── Sticky Navbar wrapper ─────────────────────────────────────────── */}
            <motion.header
                role="banner"
                className="fixed top-0 left-0 right-0 z-50 will-change-transform"
                style={glassStyle}
                animate={{ y: hidden && !shouldReduce ? -80 : 0 }}
                transition={{ duration: 0.4, ease: [0.25, 0.1, 0.25, 1.0] }}
            >
                {/* ── Main bar ───────────────────────────────────────────────────── */}
                <motion.nav
                    role="navigation"
                    aria-label="Primary navigation"
                    className="flex items-center justify-between w-full"
                    style={{
                        height: 'clamp(64px, 10vw, 80px)',
                        paddingInline: 'clamp(24px, 4vw, 48px)',
                        transition: `color 0.5s cubic-bezier(0.25, 0.1, 0.25, 1.0)`,
                    }}
                >
                    {/* ── LEFT: Logo ─────────────────────────────────────────────── */}
                    <Link
                        href="/"
                        aria-label="AYNN home"
                        className="shrink-0 outline-none focus-visible:outline-2 focus-visible:outline-offset-2"
                        style={{
                            fontFamily: "'Cinzel', serif",
                            fontWeight: 400,
                            fontSize: '1.25rem',
                            letterSpacing: '0.15em',
                            textTransform: 'uppercase',
                            color: textColor,
                            textDecoration: 'none',
                            transition: 'color 0.5s cubic-bezier(0.25, 0.1, 0.25, 1.0)',
                        }}
                    >
                        AYNN
                    </Link>

                    {/* ── CENTER: Desktop nav links (hidden below 768px) ─────────── */}
                    <div
                        className="hidden md:flex items-center"
                        style={{ gap: 'clamp(24px, 2.5vw, 40px)' }}
                    >
                        {NAV_LINKS.map(({ label, href }) => (
                            <NavLink
                                key={href}
                                href={href}
                                label={label}
                                isActive={pathname === href}
                                textColor={textColor}
                            />
                        ))}
                    </div>

                    {/* ── RIGHT: Icon group + CTA ────────────────────────────────── */}
                    <div className="flex items-center gap-1">

                        {/* Search icon — hide below 480px (moved inside mobile menu) */}
                        <div className="hidden xs:flex sm:flex">
                            <IconButton
                                label="Open search"
                                onClick={() => setSearchOpen((o) => !o)}
                            >
                                <Search size={20} color={searchOpen ? COLORS.gold500 : iconColor} />
                            </IconButton>
                        </div>

                        {/* Profile icon — hide below 480px */}
                        <div className="hidden xs:flex sm:flex">
                            <IconButton label="Account">
                                <User size={20} color={iconColor} />
                            </IconButton>
                        </div>

                        {/* Cart icon — always visible */}
                        <IconButton label={`Cart${cartCount > 0 ? `, ${cartCount} items` : ''}`} badgeCount={cartCount}>
                            <ShoppingBag size={20} color={iconColor} />
                        </IconButton>

                        {/* CTA button — hidden below 640px, shortened at 1024–1279px */}
                        <motion.div
                            className="hidden sm:flex ml-4"
                            whileHover={shouldReduce ? {} : { y: -1, boxShadow: '0 4px 20px rgba(194, 138, 62, 0.15)' }}
                            whileTap={shouldReduce ? {} : { y: 0 }}
                            transition={{ duration: 0.3 }}
                        >
                            <Link
                                href="/collections"
                                className="flex items-center justify-center outline-none focus-visible:outline-2 focus-visible:outline-offset-2"
                                style={{
                                    backgroundColor: COLORS.gold500,
                                    color: COLORS.warmWhite,
                                    padding: '14px 32px',
                                    fontFamily: "'Source Sans 3', sans-serif",
                                    fontWeight: 500,
                                    fontSize: '0.875rem',
                                    letterSpacing: '0.08em',
                                    textTransform: 'uppercase',
                                    textDecoration: 'none',
                                    borderRadius: 0,
                                    whiteSpace: 'nowrap',
                                    transition: 'background-color 0.3s',
                                }}
                                onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.backgroundColor = COLORS.gold600; }}
                                onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.backgroundColor = COLORS.gold500; }}
                                onMouseDown={(e) => { (e.currentTarget as HTMLElement).style.backgroundColor = COLORS.gold700; }}
                                onMouseUp={(e) => { (e.currentTarget as HTMLElement).style.backgroundColor = COLORS.gold600; }}
                            >
                                {/* Shorten label at medium widths */}
                                <span className="hidden xl:inline">Explore Collection</span>
                                <span className="inline xl:hidden">Explore</span>
                            </Link>
                        </motion.div>

                        {/* Hamburger — visible below md (768px) */}
                        <div className="flex md:hidden ml-2">
                            <IconButton
                                label={mobileOpen ? 'Close menu' : 'Open menu'}
                                onClick={() => setMobileOpen((o) => !o)}
                            >
                                <AnimatePresence mode="wait" initial={false}>
                                    {mobileOpen ? (
                                        <motion.span
                                            key="x"
                                            initial={{ rotate: -90, opacity: 0 }}
                                            animate={{ rotate: 0, opacity: 1 }}
                                            exit={{ rotate: 90, opacity: 0 }}
                                            transition={{ duration: 0.2 }}
                                            style={{ display: 'flex' }}
                                        >
                                            <X size={22} color={iconColor} />
                                        </motion.span>
                                    ) : (
                                        <motion.span
                                            key="menu"
                                            initial={{ rotate: 90, opacity: 0 }}
                                            animate={{ rotate: 0, opacity: 1 }}
                                            exit={{ rotate: -90, opacity: 0 }}
                                            transition={{ duration: 0.2 }}
                                            style={{ display: 'flex' }}
                                        >
                                            <Menu size={22} color={iconColor} />
                                        </motion.span>
                                    )}
                                </AnimatePresence>
                            </IconButton>
                        </div>
                    </div>
                </motion.nav>

                {/* ── Expandable Search Bar ───────────────────────────────────────── */}
                <SearchBar isOpen={searchOpen} onClose={closeSearch} />
            </motion.header>

            {/* ── Mobile full-screen menu ─────────────────────────────────────── */}
            <MobileMenu
                isOpen={mobileOpen}
                onClose={closeMenu}
                pathname={pathname}
                cartCount={cartCount}
                textColor={textColor}
            />
        </>
    );
}