import Hero from "@/components/Hero";
import HorizontalScrolling from "@/components/HorizontalScrolling";
import Image from "next/image";

export default function Home() {
  return (
    <main>
      <div className="bg-1"></div>
      <HorizontalScrolling />
      <Hero />
    </main>
  );
}
