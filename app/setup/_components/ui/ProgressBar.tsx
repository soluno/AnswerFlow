"use client";
import { useProgressBar } from "@/hooks/use-progressbar-hook";
import React from "react";

const steps = 5;
function ProgressBar() {
  const progress = useProgressBar((state) => state.progress);
  const width = (2 / 5) * 100;
  return (
    <p
      className="h-[6px] transition-all bg-gradient-to-r from-[#7515EF] to-[#EC7D4E] rounded-[10px]"
      style={{ width: `${width}%` }}
    ></p>
  );
}

export default ProgressBar;
