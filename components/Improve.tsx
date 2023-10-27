"use client";
import { motion, useInView, useScroll, useTransform } from "framer-motion";
import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";

function Improve() {
  const [current, setCurrent] = useState<number>(0);
  const next = () => {
    setCurrent((prev) => {
      return prev === 3 ? prev : prev + 1;
    });
  };
  const prev = () => {
    setCurrent((prev) => {
      return prev != 0 ? prev - 1 : prev;
    });
  };
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prevImage) => (prevImage === 4 - 1 ? 0 : prevImage + 1));
    }, 2400);
    return () => {
      clearInterval(interval);
    };
  }, [current]);
  const [cardNum, setCardNum] = useState(0);
  const divRef = useRef<HTMLDivElement>(null);
  const refDD = useRef<HTMLDivElement>(null);
  const divRef1 = useRef<HTMLDivElement>(null);
  const divRef2 = useRef<HTMLDivElement>(null);
  const divRef3 = useRef<HTMLDivElement>(null);
  const divRef4 = useRef<HTMLDivElement>(null);

  const card1 = useInView(divRef1, { margin: "-50% 0% -50% 0%" });
  const card2 = useInView(divRef2, { margin: "-50% 0% -50% 0%" });
  const card3 = useInView(divRef3, { margin: "-50% 0% -50% 0%" });
  const card4 = useInView(divRef4, { margin: "-50% 0% -50% 0%" });

  const { scrollYProgress } = useScroll({
    target: divRef,
    offset: ["start start", "end end"],
  });
  const scrollYProgressValue = useTransform(
    scrollYProgress,
    [0, 1],
    ["0%", "100%"]
  );

  return (
    <section className="section md:py-[200px] mt-40 lg:mt-0 ">
      <div className="flex gap-10 flex-col lg:flex-row md:px-10 px-4">
        <div className="flex-1">
          <div className="flex lg:h-screen sticky inset-0 items-center justify-center">
            <div className="hidden absolute top-[50%] left-0 -translate-y-[50%] lg:flex flex-col items-center gap-2">
              <span className="text-[12px] opacity-40">0 1</span>
              <div className="w-[4px] h-[400px] bg-[#343434] relative rounded-full overflow-hidden">
                <motion.span
                  className="absolute top-0 left-0 w-full bg-[#F8D350] rounded-full"
                  transition={{ delay: 0.1 }}
                  style={{ height: scrollYProgressValue }}
                ></motion.span>
              </div>
              <span className="text-[12px] opacity-40">0 4</span>
            </div>
            <h1 className="lg:absolute left-0 lg:w-[135%] top-[8%] text-[35px] md:text-[45px] font-bold ">
              Improve Efficiency across your Org
            </h1>
            <div className="hidden max-w-[70%] lg:flex gap-20 flex-col">
              <h3
                className={`text-4xl font-medium transition-all duration-[0.8s] ease-in-out  ${
                  card1 == false ? "opacity-[0.3]  " : " opacity-1  visible"
                }`}
              >
                CXO’s
              </h3>
              <h3
                className={`text-4xl font-medium transition-all duration-[0.8s] ease-in-out ${
                  card2 == false ? "opacity-[0.3]  " : " opacity-1  visible"
                }`}
              >
                Customer Success
              </h3>
              <h3
                className={`text-4xl font-medium transition-all duration-[0.8s] ease-in-out ${
                  card3 == false ? "opacity-[0.3] " : "opacity-1  visible"
                }`}
              >
                Sales
              </h3>
              <h3
                className={`text-4xl font-medium transition-all duration-[0.8s] ease-in-out ${
                  card4 == false ? "opacity-[0.3] " : "opacity-1  visible"
                }`}
              >
                Product
              </h3>
            </div>
          </div>
        </div>
        <div ref={divRef} className="hidden lg:flex flex-1 h-[700vh] relative">
          <div
            ref={divRef1}
            className="z-[-1000] absolute h-[calc(100%/4)] top-[0px]"
          ></div>
          <div
            ref={divRef2}
            className="z-[-1000] absolute h-[calc(100%/4)] top-[calc((100%/4)*1)]"
          ></div>
          <div
            ref={divRef3}
            className="z-[-1000] absolute h-[calc(100%/4)] top-[calc((100%/4)*2)]"
          ></div>
          <div
            ref={divRef4}
            className="z-[-1000] absolute h-[calc(100%/4)] top-[calc((100%/4)*3)]"
          ></div>

          <div className="flex h-screen sticky top-0 left-0 w-full items-center">
            <div className="absolute h-full top-0 left-0 w-full flex items-center  justify-center">
              <div
                className={`improveCard border-gad-2 ${
                  card1 == false
                    ? "scale-[0.6] opacity-0 translate-y-[250px] invisible "
                    : "scale-[1] opacity-1 translate-y-[0%] visible"
                }`}
              >
                <div className="flex items-start gap-6">
                  <Image
                    src={"/person4.png"}
                    alt="downArrow"
                    width={60}
                    height={60}
                    // className=" absolute top-[10px] left-[170px]"
                  />
                  <div className="question">
                    <p className="italic">Generate revenue report for Q4?</p>
                  </div>
                </div>
                <hr />
                <div className="flex flex-row gap-6">
                  <div className="w-[40px] h-[40px] aspect-square bg-white rounded-full"></div>
                  <div className="flex flex-col gap-8 ">
                    <p className="">
                      Sure, here’s a gist of our revenue’s in Q4:
                    </p>
                    <div className="flex flex-row gap-10 items-end">
                      <div className="flex flex-col gap-2">
                        <p>Total revenue: $150 </p>
                        <p>---------- </p>
                        <p> August: $10.3k</p>
                        <p>September: $44.5k</p>
                        <p> October: $6.7k </p>
                        <p> November: $10k</p>
                        <p>December: $20k</p>
                      </div>
                      <Image
                        src={"/card1.png"}
                        alt="downArrow"
                        width={190}
                        height={190}
                        // className=" absolute top-[10px] left-[170px]"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="absolute h-full top-0 left-0 w-full flex items-center  justify-center">
              <div
                className={`improveCard  border-gad-2 ${
                  card2 == false
                    ? "scale-[0.6] opacity-0 translate-y-[250px] invisible"
                    : "scale-[1] opacity-1 translate-y-[0%] visible"
                }`}
              >
                <div className="flex items-start gap-6">
                  <Image
                    src={"/person2.png"}
                    alt="downArrow"
                    width={60}
                    height={60}
                  />
                  <div className="question">
                    <p className="italic">List top 10 customer painpoints</p>
                  </div>
                </div>
                <hr />
                <div className="flex flex-row gap-6">
                  <div className="w-[40px] h-[40px] aspect-square bg-white rounded-full"></div>
                  <div className="flex flex-col gap-8 ">
                    <p className="">
                      Sure, here are some top customer problems from Hubspot
                      CRM:
                    </p>
                    <div className="flex flex-row gap-10 items-end">
                      <div className="flex flex-col gap-2">
                        <p>
                          01. Users found it hard to access the features:
                          ...........
                        </p>
                        <p>02. 20+ users asked for refund.. </p>
                        <p>03. ...........</p>
                        <p>04. ...........</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="absolute h-full top-0 left-0 w-full flex items-center justify-center">
              <div
                className={`improveCard  border-gad-2 ${
                  card3 == false
                    ? "scale-[0.6] opacity-0 translate-y-[250px] invisible"
                    : "scale-[1] opacity-1 translate-y-[0%] visible"
                }`}
              >
                <div className="flex items-start gap-6">
                  <Image
                    src={"/person6.png"}
                    alt="downArrow"
                    width={60}
                    height={60}
                  />
                  <div className="question">
                    <p className="italic">How did my sales do last month ? </p>
                  </div>
                </div>
                <hr />
                <div className="flex flex-row gap-6">
                  <div className="w-[40px] h-[40px] aspect-square bg-white rounded-full"></div>
                  <div className="flex flex-col gap-8 ">
                    <p className="">
                      Sure, here’s what our sales team achieved last month
                      retrieved from our database:
                    </p>
                    <div className="flex flex-row gap-10 items-end">
                      <div className="flex flex-col gap-2">
                        <p>
                          <span className="font-bold">Total</span> Sales: 228
                        </p>
                        <p>Amit: 56 </p>
                        <p>Steve: 142</p>
                        <p>....</p>
                        <p>....</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="absolute h-full top-0 left-0 w-full flex items-center  justify-center">
              <div
                className={`improveCard  border-gad-2 ${
                  card4 == false
                    ? "scale-[0.6] opacity-0 translate-y-[250px] invisible"
                    : "scale-[1] opacity-1 translate-y-[0%] visible"
                }`}
              >
                <div className="flex items-start gap-6">
                  <Image
                    src={"/person7.png"}
                    alt="downArrow"
                    width={60}
                    height={60}
                  />
                  <div className="question">
                    <p className="italic">Generate product usage metrics </p>
                  </div>
                </div>
                <hr />
                <div className="flex flex-row gap-6">
                  <div className="w-[40px] h-[40px] aspect-square bg-white rounded-full"></div>
                  <div className="flex flex-col gap-8 w-full ">
                    <p className="">Sure, here’s our product usage:</p>
                    <div className="flex flex-col gap-1 items-start w-full">
                      <div className="flex flex-col gap-2">
                        <p>New Signups: 350</p>
                        <p>Paid Signups: 56 </p>
                        <p>Daily Active Users: 12.2k </p>
                        <p>Churn: 0.7%</p>
                      </div>
                      <div className="flex justify-end w-full">
                        <Image
                          src={"/card4.png"}
                          alt="downArrow"
                          width={260}
                          height={260}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex lg:hidden overflow-hidden gap-5  flex-col ">
          <div
            className={`relative  flex flex-row transition-all gap-[30px] translate-x-[calc((-100%-30px)*${current}))]`}
            style={{
              transform: `translateX(calc((-100% - 30px) * ${current} ))`,
            }}
          >
            <div className="w-full flex flex-col items-center gap-4 shrink-0">
              <h1 className="text-4xl font-medium ">CXO’s</h1>
              <div className={`improveCard border-gad-2 flex-1`}>
                <div className="flex items-start gap-6">
                  <Image
                    src={"/person4.png"}
                    alt="downArrow"
                    width={60}
                    height={60}
                    // className=" absolute top-[10px] left-[170px]"
                  />
                  <div className="question">
                    <p className="italic">Generate revenue report for Q4?</p>
                  </div>
                </div>
                <hr />
                <div className="flex flex-row  gap-6">
                  <div className="w-[40px] h-[40px] aspect-square bg-white rounded-full"></div>
                  <div className="flex flex-col gap-8 ">
                    <p className="">
                      Sure, here’s a gist of our revenue’s in Q4:
                    </p>
                    <div className="flex flex-row   gap-10 items-end">
                      <div className="flex flex-col gap-2">
                        <p>Total revenue: $150 </p>
                        <p>---------- </p>
                        <p> August: $10.3k</p>
                        <p>September: $44.5k</p>
                        <p> October: $6.7k </p>
                        <p> November: $10k</p>
                        <p>December: $20k</p>
                      </div>
                      <Image
                        src={"/card1.png"}
                        alt="downArrow"
                        width={190}
                        height={190}
                        className="hidden sm:block"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-full flex flex-col items-center gap-4 shrink-0">
              <h1 className="text-4xl font-medium ">Customer Success</h1>
              <div className={`improveCard  border-gad-2 flex-1`}>
                <div className="flex items-start gap-6">
                  <Image
                    src={"/person2.png"}
                    alt="downArrow"
                    width={60}
                    height={60}
                  />
                  <div className="question">
                    <p className="italic">List top 10 customer pinpoints</p>
                  </div>
                </div>
                <hr />
                <div className="flex flex-row gap-6">
                  <div className="w-[40px] h-[40px] aspect-square bg-white rounded-full"></div>
                  <div className="flex flex-col gap-8 ">
                    <p className="">
                      Sure, here are some top customer problems from Hubspot
                      CRM:
                    </p>
                    <div className="flex flex-row gap-10 items-end">
                      <div className="flex flex-col gap-2">
                        <p>
                          01. Users found it hard to access the features:
                          ...........
                        </p>
                        <p>02. 20+ users asked for refund.. </p>
                        <p>03. ...........</p>
                        <p>04. ...........</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-full flex flex-col items-center gap-4 shrink-0">
              <h1 className="text-4xl font-medium ">Sales </h1>
              <div className={`improveCard  border-gad-2 flex-1`}>
                <div className="flex items-start gap-6">
                  <Image
                    src={"/person6.png"}
                    alt="downArrow"
                    width={60}
                    height={60}
                  />
                  <div className="question">
                    <p className="italic">How did my sales do last month ? </p>
                  </div>
                </div>
                <hr />
                <div className="flex flex-row gap-6">
                  <div className="w-[40px] h-[40px] aspect-square bg-white rounded-full"></div>
                  <div className="flex flex-col gap-8 ">
                    <p className="">
                      Sure, here’s what our sales team achieved last month
                      retrieved from our database:
                    </p>
                    <div className="flex flex-row gap-10 items-end">
                      <div className="flex flex-col gap-2">
                        <p>
                          <span className="font-bold">Total</span> Sales: 228
                        </p>
                        <p>Amit: 56 </p>
                        <p>Steve: 142</p>
                        <p>....</p>
                        <p>....</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-full flex flex-col items-center gap-4 shrink-0">
              <h1 className="text-4xl font-medium ">Product</h1>
              <div className={`improveCard  border-gad-2 flex-1`}>
                <div className="flex items-start gap-6">
                  <Image
                    src={"/person7.png"}
                    alt="downArrow"
                    width={60}
                    height={60}
                  />
                  <div className="question">
                    <p className="italic">Generate product usage metrics </p>
                  </div>
                </div>
                <hr />
                <div className="flex flex-row gap-6">
                  <div className="w-[40px] h-[40px] aspect-square bg-white rounded-full"></div>
                  <div className="flex flex-col gap-8 w-full ">
                    <p className="">Sure, here’s our product usage:</p>
                    <div className="flex flex-col gap-1 items-start w-full">
                      <div className="flex flex-col gap-2">
                        <p>New Signups: 350</p>
                        <p>Paid Signups: 56 </p>
                        <p>Daily Active Users: 12.2k </p>
                        <p>Churn: 0.7%</p>
                      </div>
                      <div className="flex justify-end w-full">
                        <Image
                          src={"/card4.png"}
                          alt="downArrow"
                          width={260}
                          height={174}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex justify-center w-full gap-4">
            <button
              onClick={prev}
              className={`w-full bg-white rounded-full text-black py-2 ${
                current === 0 ? "!cursor-default !bg-[#101010] !text-white" : ""
              }`}
            >
              {" "}
              prev{" "}
            </button>
            <button
              onClick={next}
              className={`w-full bg-white rounded-full text-black py-2 ${
                current === 3 ? "!cursor-default !bg-[#101010] !text-white" : ""
              }`}
            >
              {" "}
              next{" "}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Improve;
