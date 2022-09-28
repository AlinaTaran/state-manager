import create from "zustand";
import { persist } from "zustand/middleware";

export const useCounterStore = create(
  persist(
    (set, get) => ({
      count: 0,
      increment: () => set((state) => ({ count: state.count + 1 })),
      decrement: () => set((state) => ({ count: state.count - 1 })),
    }),
    {
      name: "count",
    }
  )
);
