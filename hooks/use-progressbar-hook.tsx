import { create } from "zustand";
type progressBarType = {
  progress: number;
  increaseProgress: () => void;
  decreaseProgress: () => void;
};
export const useProgressBar = create<progressBarType>((set) => ({
  progress: 0,
  increaseProgress: () => set((prev) => ({ progress: prev.progress + 1 })),
  decreaseProgress: () => set((prev) => ({ progress: prev.progress - 1 })),
}));
