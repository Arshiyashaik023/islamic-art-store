import { SORT_OPTIONS } from "@/lib/collections-data";
import { ChevronDown } from "lucide-react";
import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface SortDropdownProps {
    value: string;
    onChange: (value: string) => void;
}

export default function SortDropdown({ value, onChange }: SortDropdownProps) {
    const [isOpen, setIsOpen] = useState(false);
    const dropdownRef = useRef<HTMLDivElement>(null);

    const selectedOption = SORT_OPTIONS.find(opt => opt.value === value) || SORT_OPTIONS[0];

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
                setIsOpen(false);
            }
        };
        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    return (
        <div className="relative" ref={dropdownRef}>
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="flex items-center gap-2 px-4 py-2 border border-[#D4C8B8] rounded-md bg-[#FFFCF8] text-[#5E5245] text-sm focus:outline-none focus:ring-2 focus:ring-[#C28A3E] transition-colors hover:bg-[#F5F0E8]/50"
                style={{ fontFamily: "'Source Sans 3', sans-serif" }}
            >
                <span className="hidden sm:inline">Sort by:</span> 
                <span className="font-medium text-[#1E1A16]">{selectedOption.label}</span>
                <ChevronDown size={16} className={`transition-transform duration-300 text-[#A89880] ${isOpen ? "rotate-180" : ""}`} />
            </button>

            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 10 }}
                        transition={{ duration: 0.2 }}
                        className="absolute right-0 mt-2 w-48 bg-[#FFFCF8] border border-[#D4C8B8] rounded-md shadow-lg z-20 py-1 overflow-hidden"
                    >
                        {SORT_OPTIONS.map((option) => (
                            <button
                                key={option.value}
                                onClick={() => {
                                    onChange(option.value);
                                    setIsOpen(false);
                                }}
                                className={`w-full text-left px-4 py-2.5 text-sm transition-colors ${
                                    value === option.value 
                                        ? "bg-[#F5F0E8] text-[#C28A3E] font-medium" 
                                        : "text-[#5E5245] hover:bg-[#F5F0E8]/50 hover:text-[#1E1A16]"
                                }`}
                                style={{ fontFamily: "'Source Sans 3', sans-serif" }}
                            >
                                {option.label}
                            </button>
                        ))}
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}
