import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#0b0b0f",
        foreground: "#ffffff",
        muted: "#a1a1aa",
        prime: {
          purple: "#7c3aed",
          blue: "#38bdf8",
          ink: "#0b0b0f",
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)", "ui-sans-serif", "system-ui", "sans-serif"],
      },
      boxShadow: {
        glow: "0 0 42px rgba(124, 58, 237, 0.35)",
        blueGlow: "0 0 38px rgba(56, 189, 248, 0.25)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        "float-slow": {
          "0%, 100%": { transform: "translate3d(0, 0, 0)" },
          "50%": { transform: "translate3d(0, -16px, 0)" },
        },
        "pulse-border": {
          "0%, 100%": { opacity: "0.45" },
          "50%": { opacity: "1" },
        },
        "terminal": {
          "0%": { transform: "translateY(0)" },
          "100%": { transform: "translateY(-50%)" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.28s ease-out",
        "accordion-up": "accordion-up 0.28s ease-out",
        "float-slow": "float-slow 7s ease-in-out infinite",
        "pulse-border": "pulse-border 2.8s ease-in-out infinite",
        terminal: "terminal 14s linear infinite",
      },
    },
  },
  plugins: [],
};

export default config;
