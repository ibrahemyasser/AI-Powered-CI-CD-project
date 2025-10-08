import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./app/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#22d3ee", // cyan-400
          500: "#06b6d4",
        },
      },
      boxShadow: {
        glow: "0 0 30px rgba(34, 211, 238, 0.35)",
      },
    },
  },
  plugins: [],
};

export default config;

