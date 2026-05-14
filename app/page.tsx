import Navbar from "@/components/Navbar";
import Hero from "./sections/Hero";
import FeaturedCollections from "./sections/FeaturedCollections";
import FeaturedProducts from "./sections/FeaturedProducts";
import About from "./sections/About";
import FAQ from "./sections/FAQ";
import CTA from "./sections/CTA";
import Footer from "./sections/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#f8f5f0] text-black">
      <Navbar />

      <Hero />
      <FeaturedCollections />
      <FeaturedProducts />
      <About />
      <FAQ />
      <CTA />
      <Footer />
    </main>
  );
}