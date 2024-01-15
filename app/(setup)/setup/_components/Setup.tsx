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
import { FormProvider } from "@/context/FormContext";
import { useSteps } from "@/hooks/use-steps";
function Setup() {
  const { activeStep, setActiveStep } = useSteps((state) => state);
  const increaseProgress = useProgressBar((state) => state.increaseProgress);

  switch (activeStep) {
    case "b":
      increaseProgress(1);
      break;
    case "c":
      increaseProgress(2);
      break;
    case "d":
      increaseProgress(3);
      break;
    case "e":
      increaseProgress(4);
      break;
    case "f":
      increaseProgress(5);
      break;

    default:
      break;
  }
  const handleNext = () => {
    if (activeStep === "a") {
      setActiveStep("b");
    } else if (activeStep === "b") {
      setActiveStep("c");
    } else if (activeStep === "c") {
      setActiveStep("d");
    } else if (activeStep === "d") {
      setActiveStep("e");
    } else if (activeStep === "e") {
      setActiveStep("f");
    } else if (activeStep === "f") {
      setActiveStep("final");
    }
  };

  return (
    <div className="relative overflow-hidden w-[100%] ">
      <FormProvider>
        <AnimatePresence>
          {activeStep === "a" && <StepA handleNext={handleNext} />}
        </AnimatePresence>
        <AnimatePresence>
          {activeStep === "b" && <StepB handleNext={handleNext} />}
        </AnimatePresence>
        <AnimatePresence>
          {activeStep === "c" && <StepC handleNext={handleNext} />}
        </AnimatePresence>
        <AnimatePresence>
          {activeStep === "d" && <StepD handleNext={handleNext} />}
        </AnimatePresence>
        <AnimatePresence>
          {activeStep === "e" && <StepE handleNext={handleNext} />}
        </AnimatePresence>
        <AnimatePresence>
          {activeStep === "f" && <StepF handleNext={handleNext} />}
        </AnimatePresence>
        <AnimatePresence>
          {activeStep === "final" && <StepFinal handleNext={handleNext} />}
        </AnimatePresence>
      </FormProvider>
    </div>
  );
}

export default Setup;
