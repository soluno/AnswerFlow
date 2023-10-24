"use client";
import { LazyMotion, domAnimation, m } from "framer-motion";
import Image from "next/image";
import React from "react";

function Hero() {
  return (
    <LazyMotion features={domAnimation}>
      <section className="relative section flex gap-14 md:gap-28 items-center flex-col py-6 sm:py-16 md:py-20 md:pb-[200px] ">
        <div className="flex gap-14 md:gap-20 items-center flex-col">
          <div className="text-center md:max-w-[85%] mx-auto flex gap-8 items-center flex-col">
            <m.h2
              initial={{ y: 100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{
                duration: 1,
                type: "spring",
                stiffness: 50,
                delay: 0.7,
              }}
              className="text-[44px] leading-[44px] md:text-[64px] md:leading-[64px] font-bold "
            >
              Just Chat with your Company Data
            </m.h2>
            <m.p
              initial={{ y: 100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{
                duration: 1,
                type: "spring",
                stiffness: 50,
                delay: 1,
              }}
              className="text-[18px] font-normal leading-[24px] md:text-[28px] md:leading-[35px]"
            >
              Enable rich insights about your sales, customers, product & entire
              organisation and{" "}
              <span className="font-medium">
                improve company efficiency by 10X
              </span>
              ,
              <span className="text-[#E7E69F] font-medium">powered by AI.</span>
            </m.p>
          </div>
          <div className="">
            <m.button
              initial={{ filter: "blur(8px)", opacity: 0 }}
              animate={{ filter: "blur(0px)", opacity: 1 }}
              transition={{
                duration: 1,
                type: "spring",
                stiffness: 50,
                delay: 1.3,
              }}
              className="btn sec h-[60px] w-[230px] rounded-[10px] hover:bg-[#0c0c0c] fle justify-center items-start font-semibold"
            >
              Book a Demo
            </m.button>
          </div>
        </div>
        <div className=" flex justify-center gap-3 flex-col lg:flex-row md:gap-10">
          <m.div
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{
              duration: 1,
              type: "spring",
              stiffness: 90,
              delay: 1.7,
            }}
            className="bg-[#1B1B1B] px-4 md:px-12 py-3 rounded-[50px] text-center"
          >
            🔐 Secure
          </m.div>
          <m.div
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{
              duration: 1,
              type: "spring",
              stiffness: 90,
              delay: 1.8,
            }}
            className="bg-[#1B1B1B] px-4 md:px-12 py-3 rounded-[50px] text-center"
          >
            ☁️ Private Cloud Hosting
          </m.div>
          <m.div
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{
              duration: 1,
              type: "spring",
              stiffness: 90,
              delay: 1.9,
            }}
            className="bg-[#1B1B1B] px-4 md:px-12 py-3 rounded-[50px] text-center"
          >
            ✅ GDPR Compilant
          </m.div>
        </div>
        <div className="absolute bottom-0 left-[50%] -translate-x-[50%] w-[100%] ">
          <Image src={"/div.png"} width={1200} height={220} alt="separator" />
        </div>
      </section>
    </LazyMotion>
  );
}

export default Hero;
