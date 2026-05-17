"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

interface ProductImageGalleryProps {
    images: string[];
    title: string;
    isNew?: boolean;
}

export default function ProductImageGallery({ images, title, isNew }: ProductImageGalleryProps) {
    const [activeIndex, setActiveIndex] = useState(0);

    return (
        <div className="flex flex-col gap-4 lg:gap-6 w-full">
            {/* Main Image Container */}
            <div className="relative aspect-[4/5] w-full rounded-2xl overflow-hidden shadow-sm bg-[#E8E2D9] group">
                <AnimatePresence mode="wait">
                    <motion.div
                        key={activeIndex}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.5, ease: "easeInOut" }}
                        className="absolute inset-0 w-full h-full"
                    >
                        <Image
                            src={images[activeIndex]}
                            alt={`${title} - Image ${activeIndex + 1}`}
                            fill
                            priority
                            sizes="(max-width: 1024px) 100vw, 50vw"
                            className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                        />
                    </motion.div>
                </AnimatePresence>

                {isNew && (
                    <span className="absolute top-6 left-6 z-10 bg-[#FFFCF8]/90 backdrop-blur-sm px-4 py-1.5 text-xs uppercase tracking-widest text-[#5E5245] font-semibold rounded shadow-md pointer-events-none">
                        New Arrival
                    </span>
                )}
            </div>

            {/* Thumbnails */}
            {images.length > 1 && (
                <div className="flex gap-3 sm:gap-4 overflow-x-auto pb-2 scrollbar-hide">
                    {images.map((img, idx) => (
                        <button
                            key={idx}
                            onClick={() => setActiveIndex(idx)}
                            aria-label={`View image ${idx + 1}`}
                            className={`relative w-20 h-24 sm:w-24 sm:h-28 shrink-0 rounded-xl overflow-hidden transition-all duration-300 outline-none focus-visible:ring-2 focus-visible:ring-[#C28A3E] ${
                                activeIndex === idx
                                    ? "ring-2 ring-[#C28A3E] ring-offset-2 ring-offset-[#FAF8F5] shadow-md opacity-100"
                                    : "opacity-60 hover:opacity-100 border border-[#D4C8B8]/50"
                            }`}
                        >
                            <Image
                                src={img}
                                alt={`Thumbnail ${idx + 1}`}
                                fill
                                sizes="96px"
                                className="object-cover"
                            />
                        </button>
                    ))}
                </div>
            )}
        </div>
    );
}
