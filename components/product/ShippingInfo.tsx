"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, Package, Globe, ShieldCheck } from "lucide-react";

const shippingDetails = [
    {
        id: "packaging",
        icon: Package,
        title: "Museum-Grade Packaging",
        content: "Every artwork is carefully wrapped in acid-free tissue paper and secured within a custom-built, reinforced shipping crate to ensure it arrives in pristine condition. We do not use plastics, adhering to our commitment to sustainability."
    },
    {
        id: "delivery",
        icon: Globe,
        title: "Global Insured Shipping",
        content: "We ship worldwide using specialized fine art couriers. Standard domestic delivery takes 3-5 business days, while international shipping ranges from 7-14 days. All shipments are fully insured against loss or damage during transit."
    },
    {
        id: "returns",
        icon: ShieldCheck,
        title: "Returns & Guarantee",
        content: "We stand behind the quality of our craftsmanship. If you are not completely satisfied with your piece, you may return it within 14 days of receipt for a full refund or exchange. Custom and personalized orders are exempt."
    }
];

export default function ShippingInfo() {
    const [openId, setOpenId] = useState<string | null>("packaging");

    return (
        <section className="py-16 md:py-20 bg-[#FAF8F5]">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ duration: 0.6 }}
                >
                    <h3 className="text-2xl font-medium text-[#1E1A16] mb-10 text-center" style={{ fontFamily: "'Cinzel', serif" }}>
                        Shipping & Returns
                    </h3>

                    <div className="flex flex-col gap-4">
                        {shippingDetails.map((detail) => {
                            const isOpen = openId === detail.id;
                            const Icon = detail.icon;
                            
                            return (
                                <div 
                                    key={detail.id} 
                                    className="border border-[#D4C8B8]/40 rounded-xl overflow-hidden bg-[#FFFCF8]"
                                    style={{ fontFamily: "'Source Sans 3', sans-serif" }}
                                >
                                    <button
                                        onClick={() => setOpenId(isOpen ? null : detail.id)}
                                        className="w-full flex items-center justify-between p-6 text-left focus-visible:outline-none focus-visible:bg-[#F5F0E8] transition-colors hover:bg-[#F5F0E8]/50"
                                        aria-expanded={isOpen}
                                    >
                                        <div className="flex items-center gap-4">
                                            <Icon size={20} className="text-[#C28A3E]" />
                                            <span className="text-lg font-medium text-[#1E1A16]">{detail.title}</span>
                                        </div>
                                        <motion.div
                                            animate={{ rotate: isOpen ? 180 : 0 }}
                                            transition={{ duration: 0.3, ease: "easeInOut" }}
                                        >
                                            <ChevronDown size={20} className="text-[#A89880]" />
                                        </motion.div>
                                    </button>

                                    <AnimatePresence initial={false}>
                                        {isOpen && (
                                            <motion.div
                                                initial={{ height: 0, opacity: 0 }}
                                                animate={{ height: "auto", opacity: 1 }}
                                                exit={{ height: 0, opacity: 0 }}
                                                transition={{ duration: 0.3, ease: "easeInOut" }}
                                            >
                                                <div className="px-6 pb-6 pt-2 text-[#5E5245] leading-relaxed pl-[4.25rem]">
                                                    {detail.content}
                                                </div>
                                            </motion.div>
                                        )}
                                    </AnimatePresence>
                                </div>
                            );
                        })}
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
