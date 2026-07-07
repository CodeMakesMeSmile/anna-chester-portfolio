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
        amber: "rgb(var(--color-amber) / <alpha-value>)",
        lilac: "rgb(var(--color-lilac) / <alpha-value>)"
      },
      fontFamily: {
        sans: [
          "ui-sans-serif",
          "system-ui",
          "-apple-system",
          "Segoe UI",
          "Roboto",
          "Helvetica Neue",
          "Arial",
          "sans-serif"
        ],
        display: ["var(--font-display)", "Fraunces", "Georgia", "Cambria", "ui-serif", "serif"],
        mono: ["var(--font-mono)", "JetBrains Mono", "ui-monospace", "SFMono-Regular", "Menlo", "monospace"]
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
