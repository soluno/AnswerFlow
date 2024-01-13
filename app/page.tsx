import Cards from "@/components/Cards";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import HorizontalScrolling from "@/components/HorizontalScrolling";
import Improve from "@/components/Improve";
import Pricing from "@/components/Pricing";
import Steps from "@/components/Steps";
import TextAnimation from "@/components/TextAnimation";

export default function Home() {
  return (
    <main className=" relative">
      <div className="bg-1"></div>
      <div className="bg-2"></div>
      <div className="bg-3"></div>
      <Header />
      <HorizontalScrolling />
      <Hero />
      <Steps />
      <Improve />
      <TextAnimation />
      <Cards />
      <Pricing />
      <Footer />
    </main>
  );
}
