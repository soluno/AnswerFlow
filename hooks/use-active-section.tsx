import { sectionType } from "@/types/activeSection";
import { create } from "zustand";

export const useActiveSection = create<sectionType>((set) => ({
  activeSection: "",
  setActiveSection: (value) => {
    set({ activeSection: value });
  },
}));
