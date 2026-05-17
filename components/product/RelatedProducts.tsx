"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import type { Product } from "@/lib/product-data";

interface RelatedProductsProps {
    products: Product[];
}

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1,
            delayChildren: 0.2,
        },
    },
};

const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.6,
            ease: [0.25, 0.1, 0.25, 1],
        },
    },
};

export default function RelatedProducts({ products }: RelatedProductsProps) {
    if (products.length === 0) return null;

    return (
        <section className="py-16 md:py-24 border-t border-[#D4C8B8]/30">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.6 }}
                    className="mb-12"
                >
                    <h3 className="text-2xl md:text-3xl font-medium text-[#1E1A16] mb-4" style={{ fontFamily: "'Cinzel', serif" }}>
                        More from this Collection
                    </h3>
                    <div className="w-16 h-[1px] bg-[#C28A3E]" />
                </motion.div>

                <motion.div 
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8"
                >
                    {products.map((product) => (
                        <motion.div key={product.id} variants={itemVariants}>
                            <Link href={`/product/${product.slug}`} className="group block focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C28A3E] rounded-xl overflow-hidden">
                                <div className="relative aspect-[4/5] w-full bg-[#E8E2D9] rounded-xl overflow-hidden mb-4">
                                    <Image
                                        src={product.images[0]}
                                        alt={product.title}
                                        fill
                                        sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 25vw"
                                        className="object-cover transition-transform duration-700 ease-[0.25,0.1,0.25,1] group-hover:scale-105"
                                    />
                                    <div className="absolute inset-0 bg-black/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                                </div>
                                <div className="flex flex-col gap-1 px-1">
                                    <h4 className="text-lg font-medium text-[#1E1A16] group-hover:text-[#C28A3E] transition-colors" style={{ fontFamily: "'Cinzel', serif" }}>
                                        {product.title}
                                    </h4>
                                    <p className="text-[#A89880] text-sm font-medium" style={{ fontFamily: "'Source Sans 3', sans-serif" }}>
                                        ${product.price.toLocaleString()}
                                    </p>
                                </div>
                            </Link>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
