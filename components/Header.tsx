"use client";
import { LazyMotion, domAnimation, m } from "framer-motion";
import React from "react";

function Header() {
  return (
    <LazyMotion features={domAnimation}>
      <m.header
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1, type: "spring", stiffness: 50 }}
        className="section flex justify-between items-center px-2 py-4 md:px-4 md:py-8 fle-col"
      >
        <div className="">
          <h1 className="font-bold text-[20px] sm:text-[26px] leading-[73px] md:text-[36px] ">
            AnswerFlow
          </h1>
        </div>
        <div className="">
          <button className="btn prim">Book a Demo</button>
        </div>
      </m.header>
    </LazyMotion>
  );
}

export default Header;
