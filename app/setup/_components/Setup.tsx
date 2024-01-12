"use client";
import React, { useState } from "react";
import StepA from "./steps/StepA";
import StepB from "./steps/StepB";
import StepC from "./steps/StepC";
import StepD from "./steps/StepD";
import StepE from "./steps/StepE";
import StepF from "./steps/StepF";
import StepFinal from "./steps/StepFinal";

import { AnimatePresence } from "framer-motion";
import { useProgressBar } from "@/hooks/use-progressbar-hook";
import { FormProvider } from "@/app/context/FormContext";

type stepsType = "a" | "b" | "c" | "d" | "e" | "f" | "final";
function Setup() {
  const increaseProgress = useProgressBar((state) => state.increaseProgress);
  const [step, setStep] = useState<stepsType>("a");

  const handleNext = () => {
    if (step !== "b" && step !== "f") {
      increaseProgress();
    }
    if (step === "a") setStep("b");
    else if (step === "b") setStep("c");
    else if (step === "c") setStep("d");
    else if (step === "d") setStep("e");
    else if (step === "e") setStep("f");
    else if (step === "f") setStep("final");
  };

  return (
    <div className="relative overflow-hidden w-[100%] ">
      <FormProvider>
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
        <AnimatePresence>
          {step === "f" && <StepF handleNext={handleNext} />}
        </AnimatePresence>
        <AnimatePresence>
          {step === "final" && <StepFinal handleNext={handleNext} />}
        </AnimatePresence>
      </FormProvider>
    </div>
  );
}

export default Setup;
