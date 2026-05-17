import { motion } from "framer-motion";
import { FilterX } from "lucide-react";

interface EmptyStateProps {
    onClearFilters: () => void;
}

export default function EmptyState({ onClearFilters }: EmptyStateProps) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex flex-col items-center justify-center py-20 px-4 text-center w-full"
        >
            <div className="w-20 h-20 mb-8 rounded-full bg-[#F5F0E8] flex items-center justify-center text-[#A89880]">
                <FilterX size={36} strokeWidth={1.5} />
            </div>
            <h3 className="text-2xl sm:text-3xl font-medium text-[#1E1A16] mb-4" style={{ fontFamily: "'Cinzel', serif" }}>
                No Artworks Found
            </h3>
            <p className="text-[#5E5245] max-w-md mb-10 text-base sm:text-lg" style={{ fontFamily: "'Source Sans 3', sans-serif" }}>
                We couldn't find any pieces matching your current filters. Try adjusting your categories or price range to explore more collections.
            </p>
            <button
                onClick={onClearFilters}
                className="px-8 py-3 bg-[#1E1A16] text-[#FFFCF8] rounded-full uppercase tracking-widest text-sm font-medium hover:bg-[#C28A3E] transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#C28A3E] shadow-md hover:shadow-lg"
                style={{ fontFamily: "'Source Sans 3', sans-serif" }}
            >
                Clear All Filters
            </button>
        </motion.div>
    );
}
