import { CATEGORIES } from "@/lib/collections-data";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";

interface FilterSidebarProps {
    activeCategory: string;
    onCategoryChange: (category: string) => void;
    isMobileOpen?: boolean;
    onMobileClose?: () => void;
}

export default function FilterSidebar({ 
    activeCategory, 
    onCategoryChange,
    isMobileOpen,
    onMobileClose
}: FilterSidebarProps) {
    const FilterContent = () => (
        <div className="flex flex-col gap-10 w-full max-w-[280px]">
            <div>
                <h3 className="text-sm tracking-widest uppercase font-medium text-[#5E5245] mb-5 border-b border-[#D4C8B8]/30 pb-3" style={{ fontFamily: "'Source Sans 3', sans-serif" }}>
                    Categories
                </h3>
                <ul className="flex flex-col gap-1">
                    {CATEGORIES.map((category) => (
                        <li key={category}>
                            <button
                                onClick={() => {
                                    onCategoryChange(category);
                                    onMobileClose?.();
                                }}
                                className={`text-[0.95rem] text-left w-full px-3 py-2 transition-all duration-300 outline-none focus-visible:ring-2 focus-visible:ring-[#C28A3E] rounded ${
                                    activeCategory === category 
                                        ? "text-[#1E1A16] font-medium bg-[#F5F0E8]" 
                                        : "text-[#5E5245] hover:text-[#1E1A16] hover:bg-[#F5F0E8]/50"
                                }`}
                                style={{ fontFamily: "'Source Sans 3', sans-serif" }}
                            >
                                {category}
                            </button>
                        </li>
                    ))}
                </ul>
            </div>

        </div>
    );

    return (
        <>
            {/* Desktop Sidebar */}
            <aside className="hidden lg:block sticky top-[120px] h-fit pr-8 border-r border-[#D4C8B8]/30">
                <FilterContent />
            </aside>

            {/* Mobile Sheet */}
            <AnimatePresence>
                {isMobileOpen && (
                    <>
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.3 }}
                            onClick={onMobileClose}
                            className="fixed inset-0 z-[60] bg-[#1E1A16]/50 backdrop-blur-sm lg:hidden"
                        />
                        <motion.div
                            initial={{ x: "-100%" }}
                            animate={{ x: 0 }}
                            exit={{ x: "-100%" }}
                            transition={{ type: "tween", duration: 0.4, ease: [0.25, 0.1, 0.25, 1] }}
                            className="fixed top-0 left-0 bottom-0 w-[85vw] max-w-[340px] bg-[#FFFCF8] z-[70] p-6 shadow-2xl lg:hidden overflow-y-auto"
                        >
                            <div className="flex items-center justify-between mb-10 pb-4 border-b border-[#D4C8B8]/30">
                                <span className="text-xl font-medium text-[#1E1A16]" style={{ fontFamily: "'Cinzel', serif" }}>Filters</span>
                                <button 
                                    onClick={onMobileClose} 
                                    className="p-2 text-[#5E5245] hover:text-[#1E1A16] rounded-full hover:bg-[#F5F0E8] transition-colors"
                                >
                                    <X size={20} />
                                </button>
                            </div>
                            <FilterContent />
                        </motion.div>
                    </>
                )}
            </AnimatePresence>
        </>
    );
}
