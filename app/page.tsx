import Hero from "@/components/Hero";
import HorizontalScrolling from "@/components/HorizontalScrolling";
import Steps from "@/components/Steps";
import Image from "next/image";

export default function Home() {
  return (
    <main>
      <div className="bg-1"></div>
      <HorizontalScrolling />
      <Hero />
      <Steps />
    </main>
  );
}
