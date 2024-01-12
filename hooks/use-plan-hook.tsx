import { create } from "zustand";
type planType = {
  plan: "basic" | "starter" | "pro";
  method: "monthly" | "annual";
  setPlan: (value: {
    plan: "basic" | "starter" | "pro";
    method: "monthly" | "annual";
  }) => void;
};
export const usePlan = create<planType>((set) => ({
  plan: "basic",
  method: "monthly",
  setPlan: ({ plan, method }) => {
    set({ plan: plan, method: method });
  },
}));
