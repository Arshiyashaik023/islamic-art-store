"use client";

import { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";
import { products, type Product } from "@/lib/product-data";
import Navbar from "@/components/Navbar";
import Footer from "@/app/sections/Footer";
import ProductImageGallery from "@/components/product/ProductImageGallery";
import ProductInfo from "@/components/product/ProductInfo";
import RelatedProducts from "@/components/product/RelatedProducts";
import AuthenticitySection from "@/components/product/AuthenticitySection";
import ShippingInfo from "@/components/product/ShippingInfo";

export default function CollectionDetailPage() {
    const params = useParams();
    const router = useRouter();
    const rawSlug = params?.slug;
    const slug = typeof rawSlug === 'string' ? rawSlug : Array.isArray(rawSlug) ? rawSlug[0] : '';
    
    const [product, setProduct] = useState<Product | null | undefined>(undefined);
    const [isMounted, setIsMounted] = useState(false);
    
    useEffect(() => {
        setIsMounted(true);
        if (slug) {
            const decodedSlug = decodeURIComponent(slug);
            const foundProduct = products.find(p => p.slug === decodedSlug);
            setProduct(foundProduct || null);
        }
    }, [slug]);

    if (!isMounted || product === undefined) {
        return (
            <main className="min-h-screen bg-[#FAF8F5] text-[#1E1A16] flex flex-col justify-between">
                <Navbar variant="light" />
                <div className="flex-1 flex items-center justify-center pt-32 pb-24">
                    <div className="w-10 h-10 border-4 border-[#E8E2D9] border-t-[#C28A3E] rounded-full animate-spin"></div>
                </div>
                <Footer />
            </main>
        );
    }

    if (product === null) {
        return (
            <main className="min-h-screen bg-[#FAF8F5] text-[#1E1A16] flex flex-col justify-between">
                <Navbar variant="light" />
                <div className="flex-1 flex flex-col items-center justify-center pt-32 pb-24 text-center px-4">
                    <h1 className="text-3xl md:text-4xl font-medium text-[#1E1A16] mb-6" style={{ fontFamily: "'Cinzel', serif" }}>
                        Piece Not Found
                    </h1>
                    <p className="text-[#5E5245] mb-8 max-w-md" style={{ fontFamily: "'Source Sans 3', sans-serif" }}>
                        The artwork you are looking for may have been removed or is no longer available in our collection.
                    </p>
                    <button 
                        onClick={() => router.push('/collections')} 
                        className="text-[#1E1A16] border border-[#1E1A16] px-8 py-3 rounded-full hover:bg-[#1E1A16] hover:text-white transition-colors duration-300 uppercase tracking-widest text-xs font-medium"
                    >
                        Return to Gallery
                    </button>
                </div>
                <Footer />
            </main>
        );
    }

    const relatedProducts = products
        .filter(p => p.category === product.category && p.id !== product.id)
        .slice(0, 4);

    return (
        <main className="min-h-screen bg-[#FAF8F5] text-[#1E1A16] flex flex-col">
            <Navbar variant="light" />
            <div className="pt-24 md:pt-32" />

            {/* Top Section: Breadcrumb & Main Product Area */}
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl pb-16 md:pb-24 flex-1">
                <button 
                    onClick={() => router.back()}
                    className="flex items-center gap-2 text-[#5E5245] hover:text-[#1E1A16] transition-colors mb-8 md:mb-10 group w-fit focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#C28A3E] rounded"
                    style={{ fontFamily: "'Source Sans 3', sans-serif" }}
                >
                    <ArrowLeft size={18} className="group-hover:-translate-x-1 transition-transform" />
                    <span className="uppercase tracking-wider text-sm font-medium">Back to Gallery</span>
                </button>

                <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 xl:gap-24">
                    {/* Left: Image Gallery */}
                    <motion.div 
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
                        className="w-full lg:w-[55%] shrink-0"
                    >
                        <ProductImageGallery 
                            images={product.images} 
                            title={product.title} 
                            isNew={product.isNew} 
                        />
                    </motion.div>

                    {/* Right: Product Info */}
                    <motion.div 
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: 0.1, ease: [0.25, 0.1, 0.25, 1] }}
                        className="w-full lg:w-[45%]"
                    >
                        <ProductInfo product={product} />
                    </motion.div>
                </div>
            </div>

            {/* Below the Fold Sections */}
            <AuthenticitySection />
            <RelatedProducts products={relatedProducts} />
            <ShippingInfo />
            
            <Footer />
        </main>
    );
}
