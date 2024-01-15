import Hero from "./_components/hero/Hero";
import HorizontalScrolling from "./_components/brandsPanner/HorizontalScrolling";
import Steps from "./_components/stepsSection/Steps";
import Improve from "./_components/features/Improve";
import TextAnimation from "./_components/textSection/TextAnimation";
import Pricing from "./_components/pricing/Pricing";
import Cards from "./_components/cards/Cards";

export default function Home() {
  return (
    <main className=" relative">
      <div className="bg-1"></div>
      <div className="bg-2"></div>
      <div className="bg-3"></div>
      <HorizontalScrolling />
      <Hero />
      <Steps />
      <Improve />
      <TextAnimation />
      <Cards />
      <Pricing />
    </main>
  );
}
