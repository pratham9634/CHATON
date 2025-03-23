import { create } from "zustand";

export const useThemeStore = create((set) => ({
  theme: "night", // Default theme

  setTheme: () => {
    set((state) => ({ theme: state.theme === "night" ? "light" : "night" }));
  },
}));
