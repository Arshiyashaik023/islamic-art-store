import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#f8f5f0] text-black">
      <Navbar />

      <section className="flex items-center justify-center h-[80vh]">
        <h1 className="text-5xl font-bold">
          Islamic Art Store
        </h1>
      </section>
    </main>
  );
}