import type { Config } from "tailwindcss";
const config: Config = {
  content: ["./app/**/*.{js,ts,jsx,tsx,mdx}", "./components/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        gold: { 50: "#fffbeb", 100: "#fef3c7", 200: "#fde68a", 300: "#fcd34d", 400: "#fbbf24", 500: "#F5A623", 600: "#d97706", 700: "#b45309", 800: "#92400e", 900: "#78350f" },
        charcoal: { 50: "#f6f6f6", 100: "#e7e7e7", 200: "#d1d1d1", 300: "#b0b0b0", 400: "#888", 500: "#6d6d6d", 600: "#5d5d5d", 700: "#4f4f4f", 800: "#3d3d3d", 900: "#2D2D2D", 950: "#1a1a1a" },
        maroon: { 50: "#fdf2f2", 100: "#fce4e4", 200: "#f9cece", 300: "#f4a8a8", 400: "#c04040", 500: "#8B1A1A", 600: "#7a1717", 700: "#651313", 800: "#4f0f0f", 900: "#3a0c0c" },
        forest: { 50: "#f0fdf4", 100: "#dcfce7", 200: "#bbf7d0", 300: "#86efac", 400: "#4ade80", 500: "#2E5339", 600: "#254430", 700: "#1c3525", 800: "#14261a", 900: "#0c170f" },
      },
    },
  },
  plugins: [],
};
export default config;
