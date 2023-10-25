"use client";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, useRef } from "react";
const text =
  "Create a secure Knowledge base & empower your org. with super-easy Answers about everything & boost productivity by removing the hassle of switching multiple tools";

export default function TextAnimation() {
  const refs = useRef<HTMLSpanElement[]>([]);
  const divRef = useRef(null);
  const pRef = useRef(null);

  const createAnimation = () => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: divRef.current,
        start: "top center",
        end: "90% center",
        markers: false,
        scrub: true,
      },
    });
    tl.to(refs.current, {
      opacity: 1,
      stagger: 0.8,
    });
  };
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    createAnimation();
  });
  const splitWords = (phrase: string) => {
    let body: React.JSX.Element[] = [];
    phrase.split(" ").forEach((word, i) => {
      body.push(
        <span
          className="opacity-0"
          ref={(e) => {
            refs.current.push(e!);
          }}
          key={word + "_" + i}
        >{`${word} `}</span>
      );
    });
    return body;
  };
  return (
    <section className="section mx-auto ">
      <div ref={divRef} className="h-[600vh] ">
        <div className="text-4xl md:text-7xl sticky top-[0] left-0 h-screen ">
          <div className="relative w-[100%] lg:w-[65%]  mx-auto h-full flex items-center justify-center">
            <p
              ref={pRef}
              className="absolute px-2 flex flex-wrap text-[#595959] opacity-1"
            >
              Create a secure Knowledge base & empower your org. with super-easy
              Answers about everything & boost productivity by removing the
              hassle of switching multiple tools
            </p>
            <p className="absolute px-2  opacity-1 text-white">
              {splitWords(text)}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
