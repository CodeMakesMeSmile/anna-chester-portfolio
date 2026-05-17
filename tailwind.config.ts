import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        bg: "rgb(var(--color-bg) / <alpha-value>)",
        surface: "rgb(var(--color-surface) / <alpha-value>)",
        surfaceStrong: "rgb(var(--color-surface-strong) / <alpha-value>)",
        text: "rgb(var(--color-text) / <alpha-value>)",
        muted: "rgb(var(--color-muted) / <alpha-value>)",
        line: "rgb(var(--color-line) / <alpha-value>)",
        focus: "rgb(var(--color-focus) / <alpha-value>)",
        moss: "rgb(var(--color-moss) / <alpha-value>)",
        fern: "rgb(var(--color-fern) / <alpha-value>)",
        clay: "rgb(var(--color-clay) / <alpha-value>)",
        lilac: "rgb(var(--color-lilac) / <alpha-value>)"
      },
      fontFamily: {
        sans: ["var(--font-body)", "Manrope", "ui-sans-serif", "system-ui"],
        display: ["var(--font-display)", "Space Grotesk", "ui-sans-serif", "system-ui"]
      },
      boxShadow: {
        soft: "0 24px 60px rgb(var(--color-shadow) / 0.16)",
        glow: "0 0 0 1px rgb(var(--color-moss) / 0.18), 0 28px 80px rgb(var(--color-shadow) / 0.2)"
      }
    }
  },
  plugins: []
};

export default config;
