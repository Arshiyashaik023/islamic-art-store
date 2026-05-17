"use client";

import { useState, useEffect, useMemo, Suspense } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { SlidersHorizontal } from "lucide-react";
import { useSearchParams } from "next/navigation";
import { collections } from "@/lib/collections-data";
import CollectionCard from "@/components/collections/CollectionCard";
import FilterSidebar from "@/components/collections/FilterSidebar";
import SortDropdown from "@/components/collections/SortDropdown";
import CollectionSkeleton from "@/components/collections/CollectionSkeleton";
import EmptyState from "@/components/collections/EmptyState";
import Navbar from "@/components/Navbar";
import Footer from "@/app/sections/Footer";

function CollectionsContent() {
    const searchParams = useSearchParams();
    const initialCategory = searchParams?.get("category") || "All";

    const [isLoading, setIsLoading] = useState(true);
    const [activeCategory, setActiveCategory] = useState(initialCategory);
    const [sortBy, setSortBy] = useState("newest");
    const [isMobileFiltersOpen, setIsMobileFiltersOpen] = useState(false);

    useEffect(() => {
        if (initialCategory) {
            setActiveCategory(initialCategory);
        }
    }, [initialCategory]);

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsLoading(false);
        }, 800);
        return () => clearTimeout(timer);
    }, []);

    const filteredAndSortedCollections = useMemo(() => {
        let result = collections;

        if (activeCategory !== "All") {
            result = result.filter(item => item.category === activeCategory);
        }

        result = [...result].sort((a, b) => {
            if (sortBy === "price-asc") return a.price - b.price;
            if (sortBy === "price-desc") return b.price - a.price;
            if (sortBy === "newest") {
                if (a.isNew && !b.isNew) return -1;
                if (!a.isNew && b.isNew) return 1;
                return 0;
            }
            return 0;
        });

        return result;
    }, [activeCategory, sortBy]);

    const clearFilters = () => {
        setActiveCategory("All");
        setSortBy("newest");
    };

    return (
        <main className="min-h-screen bg-[#FAF8F5] text-[#1E1A16] flex flex-col">
            <Navbar variant="light" />
            <div className="pt-24 md:pt-32" />

            <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl pb-24 flex-1">
                
                <motion.div 
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
                    className="text-center mb-16 md:mb-20"
                >
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-medium text-[#1E1A16] mb-6" style={{ fontFamily: "'Cinzel', serif" }}>
                        Our Collections
                    </h1>
                    <p className="text-[#5E5245] text-lg max-w-2xl mx-auto" style={{ fontFamily: "'Source Sans 3', sans-serif" }}>
                        Explore our curated selection of premium Islamic art, featuring handcrafted ceramics, elegant calligraphy, and intricate geometric masterpieces.
                    </p>
                </motion.div>

                <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">
                    
                    <div className="lg:w-1/4 xl:w-1/5 shrink-0">
                        <FilterSidebar 
                            activeCategory={activeCategory}
                            onCategoryChange={setActiveCategory}
                            isMobileOpen={isMobileFiltersOpen}
                            onMobileClose={() => setIsMobileFiltersOpen(false)}
                        />
                    </div>

                    <div className="flex-1 min-w-0">
                        
                        <div className="flex items-center justify-between mb-8 pb-4 border-b border-[#D4C8B8]/30">
                            <button
                                onClick={() => setIsMobileFiltersOpen(true)}
                                className="lg:hidden flex items-center gap-2 px-4 py-2 border border-[#D4C8B8] rounded-md bg-[#FFFCF8] text-[#5E5245] text-sm focus:outline-none focus:ring-2 focus:ring-[#C28A3E] transition-colors hover:bg-[#F5F0E8]/50"
                                style={{ fontFamily: "'Source Sans 3', sans-serif" }}
                            >
                                <SlidersHorizontal size={16} className="text-[#A89880]" />
                                Filters
                            </button>

                            <div className="hidden lg:block text-sm tracking-wider uppercase font-semibold text-[#A89880]" style={{ fontFamily: "'Source Sans 3', sans-serif" }}>
                                Showing {filteredAndSortedCollections.length} {filteredAndSortedCollections.length === 1 ? 'artwork' : 'artworks'}
                            </div>

                            <SortDropdown 
                                value={sortBy}
                                onChange={setSortBy}
                            />
                        </div>

                        <div className="lg:hidden text-sm tracking-wider uppercase font-semibold text-[#A89880] mb-6" style={{ fontFamily: "'Source Sans 3', sans-serif" }}>
                            Showing {filteredAndSortedCollections.length} {filteredAndSortedCollections.length === 1 ? 'artwork' : 'artworks'}
                        </div>

                        {isLoading ? (
                            <CollectionSkeleton />
                        ) : (
                            <AnimatePresence mode="wait">
                                {filteredAndSortedCollections.length > 0 ? (
                                    <motion.div
                                        key="grid"
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        exit={{ opacity: 0 }}
                                        transition={{ duration: 0.4 }}
                                        className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6 lg:gap-8"
                                    >
                                        <AnimatePresence>
                                            {filteredAndSortedCollections.map((item) => (
                                                <CollectionCard key={item.id} item={item} />
                                            ))}
                                        </AnimatePresence>
                                    </motion.div>
                                ) : (
                                    <motion.div
                                        key="empty"
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        exit={{ opacity: 0 }}
                                        transition={{ duration: 0.4 }}
                                        className="w-full flex justify-center"
                                    >
                                        <EmptyState onClearFilters={clearFilters} />
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        )}
                    </div>
                </div>
            </div>

            <Footer />
        </main>
    );
}

export default function CollectionsPage() {
    return (
        <Suspense fallback={
            <main className="min-h-screen bg-[#FAF8F5] text-[#1E1A16] flex flex-col justify-between">
                <Navbar variant="light" />
                <div className="flex-1 flex items-center justify-center pt-32 pb-24">
                    <div className="w-10 h-10 border-4 border-[#E8E2D9] border-t-[#C28A3E] rounded-full animate-spin"></div>
                </div>
                <Footer />
            </main>
        }>
            <CollectionsContent />
        </Suspense>
    );
}
