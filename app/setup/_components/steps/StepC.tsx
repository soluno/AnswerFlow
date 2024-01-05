"use client";
import React, { useEffect, useState } from "react";
type props = { handleNext: () => void };
function StepC({ handleNext }: props) {
  useEffect(() => {
    setTimeout(() => {
      handleNext();
    }, 2000);
  }, [handleNext]);
  return (
    <div className="flex justify-center items-center flex-col h-full">
      <h1 className="text-[64px] font-normal">Hoorah, Welcome to AnswerFlow</h1>
      <p className="text-[#606060] font-normal text-[24px]">
        Assembling the army of zeros & ones ...
      </p>
    </div>
  );
}

export default StepC;
