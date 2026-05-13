import Navbar from "@/components/Navbar";
import Hero from "./sections/Hero";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#f8f5f0] text-black">
      <Navbar />

      <Hero />
    </main>
  );
}