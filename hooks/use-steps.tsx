import { create } from "zustand";
type stepsType = "a" | "b" | "c" | "d" | "e" | "f" | "final";
type useStepsType = {
  activeStep: stepsType;
  setActiveStep: (value: stepsType) => void;
};
export const useSteps = create<useStepsType>((set) => ({
  activeStep: "a",
  setActiveStep(value: stepsType) {
    set({ activeStep: value });
  },
}));
