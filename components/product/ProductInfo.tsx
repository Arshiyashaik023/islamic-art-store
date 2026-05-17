"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ShoppingBag, Check, CreditCard, PenTool } from "lucide-react";
import type { Product } from "@/lib/product-data";

interface ProductInfoProps {
    product: Product;
}

export default function ProductInfo({ product }: ProductInfoProps) {
    const [isAdded, setIsAdded] = useState(false);

    const handleAddToCart = () => {
        setIsAdded(true);
        setTimeout(() => setIsAdded(false), 2500);
    };

    return (
        <div className="flex flex-col justify-center w-full h-full pt-4 lg:pt-0">
            {/* Category Tag */}
            <motion.span 
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="text-[#C28A3E] text-xs sm:text-sm uppercase tracking-[0.2em] font-semibold mb-4 block" 
                style={{ fontFamily: "'Source Sans 3', sans-serif" }}
            >
                {product.category}
            </motion.span>
            
            {/* Title & Subtitle */}
            <motion.h1 
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="text-4xl md:text-5xl lg:text-6xl font-medium text-[#1E1A16] mb-3 leading-tight" 
                style={{ fontFamily: "'Cinzel', serif" }}
            >
                {product.title}
            </motion.h1>
            
            <motion.h2 
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="text-lg sm:text-xl text-[#A89880] mb-8 font-light italic" 
                style={{ fontFamily: "'Source Sans 3', sans-serif" }}
            >
                "{product.subtitle}"
            </motion.h2>
            
            {/* Price */}
            <motion.div 
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="text-3xl font-medium text-[#1E1A16] mb-8" 
                style={{ fontFamily: "'Cinzel', serif" }}
            >
                ${product.price.toLocaleString()}
            </motion.div>
            
            <div className="h-[1px] w-full bg-[#D4C8B8]/40 mb-8" />
            
            {/* Description */}
            <motion.p 
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="text-base sm:text-lg text-[#5E5245] leading-relaxed mb-10" 
                style={{ fontFamily: "'Source Sans 3', sans-serif" }}
            >
                {product.description}
            </motion.p>

            {/* Metadata (Dimensions, Materials, Artisan) */}
            <motion.div 
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                className="flex flex-col gap-4 mb-12"
                style={{ fontFamily: "'Source Sans 3', sans-serif" }}
            >
                <div className="flex flex-col sm:flex-row sm:items-center py-3 border-b border-[#D4C8B8]/20">
                    <span className="text-[#A89880] text-sm uppercase tracking-wider w-32 shrink-0 mb-1 sm:mb-0">Dimensions</span>
                    <span className="text-[#1E1A16] font-medium">{product.dimensions}</span>
                </div>
                <div className="flex flex-col sm:flex-row sm:items-center py-3 border-b border-[#D4C8B8]/20">
                    <span className="text-[#A89880] text-sm uppercase tracking-wider w-32 shrink-0 mb-1 sm:mb-0">Materials</span>
                    <span className="text-[#1E1A16] font-medium">{product.materials}</span>
                </div>
                <div className="flex flex-col sm:flex-row py-3">
                    <span className="text-[#A89880] text-sm uppercase tracking-wider w-32 shrink-0 mb-1 sm:mb-0">Artisan</span>
                    <span className="text-[#5E5245] leading-snug">{product.artisan}</span>
                </div>
            </motion.div>

            {/* Actions */}
            <motion.div 
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.6 }}
                className="flex flex-col gap-4"
                style={{ fontFamily: "'Source Sans 3', sans-serif" }}
            >
                <div className="flex flex-col sm:flex-row gap-4">
                    <motion.button
                        whileHover={{ y: -2 }}
                        whileTap={{ scale: 0.98 }}
                        onClick={handleAddToCart}
                        className={`flex-1 flex items-center justify-center gap-3 px-8 py-4 sm:py-5 rounded-xl uppercase tracking-[0.15em] text-sm font-medium transition-colors duration-300 shadow-sm focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#C28A3E] ${
                            isAdded 
                                ? "bg-[#5E5245] text-white" 
                                : "bg-[#1E1A16] text-[#FFFCF8] hover:bg-[#C28A3E]"
                        }`}
                    >
                        {isAdded ? (
                            <>
                                <Check size={18} />
                                Added
                            </>
                        ) : (
                            <>
                                <ShoppingBag size={18} />
                                Add to Cart
                            </>
                        )}
                    </motion.button>
                    
                    <motion.button
                        whileHover={{ y: -2 }}
                        whileTap={{ scale: 0.98 }}
                        className="flex-1 flex items-center justify-center gap-3 px-8 py-4 sm:py-5 rounded-xl uppercase tracking-[0.15em] text-sm font-medium border border-[#1E1A16] text-[#1E1A16] hover:bg-[#F5F0E8] transition-colors duration-300 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#C28A3E]"
                    >
                        <CreditCard size={18} />
                        Buy Now
                    </motion.button>
                </div>

                <motion.button
                    whileHover={{ opacity: 0.7 }}
                    whileTap={{ scale: 0.98 }}
                    className="flex items-center justify-center gap-2 mt-2 py-3 text-sm font-medium uppercase tracking-widest text-[#C28A3E] hover:text-[#A89880] transition-colors duration-300 w-fit mx-auto sm:mx-0"
                >
                    <PenTool size={16} />
                    <span className="border-b border-transparent hover:border-current transition-colors pb-0.5">Customize Similar Piece</span>
                </motion.button>
            </motion.div>
        </div>
    );
}
