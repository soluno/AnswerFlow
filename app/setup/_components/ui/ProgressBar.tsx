"use client";
import { useProgressBar } from "@/hooks/use-progressbar-hook";
import React from "react";

const steps = 11;
function ProgressBar() {
  const progress = useProgressBar((state) => state.progress);
  const width = (progress / steps) * 100;
  return (
    <p
      className="h-[6px] z-10 transition-all bg-gradient-to-r from-[#7515EF] to-[#EC7D4E] rounded-[10px] absolute top-0 duration-700 ease-in-out"
      style={{ width: `${width}%` }}
    ></p>
  );
}

export default ProgressBar;
