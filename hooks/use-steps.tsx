import { create } from "zustand";
type stepsType = "a" | "b" | "c" | "d" | "e" | "f" | "final" | "";
type useStepsType = {
  activeStep: stepsType;
  setActiveStep: (value: stepsType) => void;
  resetToNewBot: () => void;
};

const activeStepFromLocal =
  typeof window !== "undefined" &&
  (localStorage.getItem("activeStep") as stepsType);

export const useSteps = create<useStepsType>((set) => ({
  activeStep: activeStepFromLocal || "",
  setActiveStep(value: stepsType) {
    set({ activeStep: value });
    localStorage.setItem("activeStep", value);
  },
  resetToNewBot() {
    set({ activeStep: "d" });
    localStorage.setItem("activeStep", "d");
  },
}));
