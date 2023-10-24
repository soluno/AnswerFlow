"use client";
import React from "react";
import Image from "next/image";
import { LazyMotion, domAnimation, m } from "framer-motion";
function HorizontalScrolling() {
  return (
    <LazyMotion features={domAnimation}>
      <m.section
        initial={{ filter: "blur(8px)", opacity: 0 }}
        animate={{ filter: "blur(0px)", opacity: 1 }}
        transition={{
          duration: 1,
          type: "spring",
          stiffness: 50,
          delay: 1.8,
        }}
        className="section mx-auto flex justify-center py-6 sm:py-10"
      >
        <div className="slider">
          <div className="slider-track">
            <div className="slide">
              <Image
                src={"/brand1.svg"}
                height={80}
                width={80}
                alt="brand  "
              ></Image>
            </div>
            <div className="slide">
              <Image
                src={"/brand2.svg"}
                height={80}
                width={80}
                alt="brand"
              ></Image>
            </div>
            <div className="slide">
              <Image
                src={"/brand3.svg"}
                height={80}
                width={80}
                alt="brand"
              ></Image>
            </div>
            <div className="slide">
              <Image
                src={"/brand4.svg"}
                height={80}
                width={80}
                alt="brand"
              ></Image>
            </div>
            <div className="slide">
              <Image
                src={"/brand5.svg"}
                height={80}
                width={80}
                alt="brand"
              ></Image>
            </div>
            <div className="slide">
              <Image
                src={"/brand6.svg"}
                height={80}
                width={80}
                alt="brand"
              ></Image>
            </div>
            <div className="slide">
              <Image
                src={"/brand7.svg"}
                height={80}
                width={160}
                alt="brand"
              ></Image>
            </div>
            <div className="slide">
              <Image
                src={"/brand8.svg"}
                height={80}
                width={160}
                alt="brand"
              ></Image>
            </div>
            <div className="slide">
              <Image
                src={"/brand9.svg"}
                height={80}
                width={160}
                alt="brand"
              ></Image>
            </div>

            <div className="slide">
              <Image
                src={"/brand1.svg"}
                height={80}
                width={80}
                alt="brand"
              ></Image>
            </div>
            <div className="slide">
              <Image
                src={"/brand2.svg"}
                height={80}
                width={80}
                alt="brand"
              ></Image>
            </div>
            <div className="slide">
              <Image
                src={"/brand3.svg"}
                height={80}
                width={80}
                alt="brand"
              ></Image>
            </div>
            <div className="slide">
              <Image
                src={"/brand4.svg"}
                height={80}
                width={80}
                alt="brand"
              ></Image>
            </div>
            <div className="slide">
              <Image
                src={"/brand5.svg"}
                height={80}
                width={80}
                alt="brand"
              ></Image>
            </div>
            <div className="slide">
              <Image
                src={"/brand6.svg"}
                height={80}
                width={80}
                alt="brand"
              ></Image>
            </div>
            <div className="slide">
              <Image
                src={"/brand7.svg"}
                height={80}
                width={160}
                alt="brand"
              ></Image>
            </div>
            <div className="slide">
              <Image
                src={"/brand8.svg"}
                height={80}
                width={160}
                alt="brand"
              ></Image>
            </div>
            <div className="slide">
              <Image
                src={"/brand9.svg"}
                height={80}
                width={160}
                alt="brand"
              ></Image>
            </div>
          </div>
        </div>
      </m.section>
    </LazyMotion>
  );
}

export default HorizontalScrolling;
