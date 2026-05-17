import { CollectionItem } from "@/lib/collections-data";
import Link from "next/link";
import { motion } from "framer-motion";

export default function CollectionCard({ item }: { item: CollectionItem }) {
    return (
        <motion.div
            layout
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.4 }}
            className="group block relative w-full h-full rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-shadow duration-500"
            style={{ backgroundColor: "#F5F0E8" }}
        >
            <Link href={`/product/${item.slug}`} className="flex flex-col h-full cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#C28A3E]">
                <div className="relative aspect-[4/5] w-full overflow-hidden bg-[#E8E2D9]">
                    <img 
                        src={item.image} 
                        alt={item.title} 
                        className="object-cover w-full h-full transition-transform duration-700 ease-[0.25,0.1,0.25,1] group-hover:scale-105"
                    />
                    
                    {/* Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-in-out" />
                    
                    {item.isNew && (
                        <span className="absolute top-4 left-4 bg-[#FFFCF8]/90 backdrop-blur-sm px-3 py-1 text-[10px] sm:text-xs uppercase tracking-widest text-[#5E5245] font-semibold rounded shadow-sm">
                            New Arrival
                        </span>
                    )}
                </div>

                <div className="p-5 flex flex-col flex-1 bg-[#FFFCF8] group-hover:bg-white transition-colors duration-500">
                    <h3 className="text-lg font-medium text-[#1E1A16]" style={{ fontFamily: "'Cinzel', serif" }}>
                        {item.title}
                    </h3>
                    <p className="text-sm text-[#A89880] mt-1 mb-4" style={{ fontFamily: "'Source Sans 3', sans-serif" }}>
                        {item.subtitle}
                    </p>
                    <div className="flex items-center justify-between mt-auto">
                        <span className="text-[1.05rem] font-medium text-[#1E1A16]">
                            ${item.price}
                        </span>
                        
                        <span className="opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-400 ease-[0.25,0.1,0.25,1] text-[0.8rem] font-semibold uppercase tracking-[0.1em] text-[#C28A3E]">
                            View Artwork
                        </span>
                    </div>
                </div>
            </Link>
        </motion.div>
    );
}
