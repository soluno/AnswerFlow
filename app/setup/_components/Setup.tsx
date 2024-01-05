"use client";
import React, { useEffect, useState } from "react";
import StepA from "./steps/StepA";
import StepB from "./steps/StepB";
import StepC from "./steps/StepC";
import { AnimatePresence } from "framer-motion";
import { useProgressBar } from "@/hooks/use-progressbar-hook";
import StepD from "./steps/StepD";
import StepE from "./steps/StepE";

type formDatatype = {
  email: string;
  password: string;
};
type stepsType = "a" | "b" | "c" | "d" | "e" | "final";
function Setup() {
  const increaseProgress = useProgressBar((state) => state.increaseProgress);
  const [step, setStep] = useState<stepsType>("a");

  const [formData, setFormData] = useState<formDatatype>({
    email: "",
    password: "",
  });

  const handleNext = () => {
    if (step !== "c") {
      increaseProgress();
    }
    if (step === "a") setStep("b");
    else if (step === "b") setStep("c");
    else if (step === "c") setStep("d");
    else if (step === "d") setStep("e");
    else if (step === "e") setStep("final");
  };

  return (
    <div className="relative overflow-hidden w-[100%] h-screen">
      <AnimatePresence>
        {step === "a" && <StepA handleNext={handleNext} />}
      </AnimatePresence>
      <AnimatePresence>
        {step === "b" && <StepB handleNext={handleNext} />}
      </AnimatePresence>
      <AnimatePresence>
        {step === "c" && <StepC handleNext={handleNext} />}
      </AnimatePresence>
      <AnimatePresence>
        {step === "d" && <StepD handleNext={handleNext} />}
      </AnimatePresence>
      <AnimatePresence>
        {step === "e" && <StepE handleNext={handleNext} />}
      </AnimatePresence>
    </div>
  );
}

export default Setup;
