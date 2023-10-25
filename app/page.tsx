import Hero from "@/components/Hero";
import HorizontalScrolling from "@/components/HorizontalScrolling";
import Improve from "@/components/Improve";
import Steps from "@/components/Steps";
import TextAnimation from "@/components/TextAnimation";
import Image from "next/image";

export default function Home() {
  return (
    <main>
      <div className="bg-1"></div>
      <div className="bg-2"></div>
      <HorizontalScrolling />
      <Hero />
      <Steps />
      <Improve />
      <TextAnimation />
    </main>
  );
}
