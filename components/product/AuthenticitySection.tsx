"use client";

import { motion } from "framer-motion";
import { BadgeCheck } from "lucide-react";

export default function AuthenticitySection() {
    return (
        <section className="bg-[#F5F0E8] py-16 md:py-24">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl text-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.6 }}
                    className="flex flex-col items-center"
                >
                    <div className="w-16 h-16 rounded-full bg-[#E8E2D9] flex items-center justify-center mb-8 shadow-sm">
                        <BadgeCheck size={32} className="text-[#C28A3E]" strokeWidth={1.5} />
                    </div>
                    
                    <h3 className="text-2xl md:text-3xl font-medium text-[#1E1A16] mb-6" style={{ fontFamily: "'Cinzel', serif" }}>
                        Certificate of Authenticity
                    </h3>
                    
                    <p className="text-lg text-[#5E5245] leading-relaxed max-w-2xl mx-auto" style={{ fontFamily: "'Source Sans 3', sans-serif" }}>
                        Every piece in our collection is accompanied by a hand-signed Certificate of Authenticity. 
                        We pride ourselves on preserving traditional Islamic arts through meticulous craftsmanship. 
                        From the sourcing of museum-grade materials to the final masterstroke, we ensure that the 
                        spiritual essence and historical integrity of the art are honored in every detail.
                    </p>

                    <div className="mt-10 h-[1px] w-24 bg-[#D4C8B8] mx-auto" />
                </motion.div>
            </div>
        </section>
    );
}
