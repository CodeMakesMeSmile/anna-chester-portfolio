"use client";

import { useEffect, useState } from "react";

type Theme = "light" | "dark";

const storageKey = "theme";

function getStoredTheme(): Theme | null {
  if (typeof window === "undefined") return null;

  const stored = window.localStorage.getItem(storageKey);
  return stored === "light" || stored === "dark" ? stored : null;
}

function getPreferredTheme(): Theme {
  if (typeof window === "undefined") return "light";

  return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
}

function applyTheme(theme: Theme) {
  document.documentElement.classList.toggle("dark", theme === "dark");
  document.documentElement.style.colorScheme = theme;
}

export function ThemeToggle() {
  const [theme, setTheme] = useState<Theme>("light");

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");

    const syncWithSystem = (event: MediaQueryListEvent) => {
      if (getStoredTheme()) return;

      const nextTheme = event.matches ? "dark" : "light";
      setTheme(nextTheme);
      applyTheme(nextTheme);
    };

    const initialTheme = getStoredTheme() ?? getPreferredTheme();
    setTheme(initialTheme);
    applyTheme(initialTheme);

    mediaQuery.addEventListener("change", syncWithSystem);

    return () => {
      mediaQuery.removeEventListener("change", syncWithSystem);
    };
  }, []);

  function toggleTheme() {
    const nextTheme = theme === "dark" ? "light" : "dark";
    setTheme(nextTheme);
    window.localStorage.setItem(storageKey, nextTheme);
    applyTheme(nextTheme);
  }

  return (
    <button
      type="button"
      role="switch"
      aria-checked={theme === "dark"}
      aria-label="Toggle color theme"
      onClick={toggleTheme}
      className="inline-flex min-h-11 items-center gap-2.5 whitespace-nowrap rounded-full border border-line/80 bg-surface/90 px-4 py-2 text-sm font-medium text-text shadow-sm backdrop-blur transition duration-300 hover:border-moss/55 hover:bg-surfaceStrong/80 motion-safe:hover:-translate-y-0.5 focus-ring sm:min-w-[7.25rem]"
    >
      <span
        className="relative h-6 w-11 shrink-0 overflow-hidden rounded-full bg-surfaceStrong"
        aria-hidden="true"
      >
        <span className="absolute inset-y-1 left-1 flex items-center text-[10px] text-muted">
          <SunIcon />
        </span>
        <span className="absolute inset-y-1 right-1 flex items-center text-[10px] text-muted">
          <MoonIcon />
        </span>
        <span
          className={`absolute left-1 top-1 h-4 w-4 rounded-full bg-text shadow-sm transition-[transform,background-color] duration-300 ${
            theme === "dark" ? "translate-x-5 bg-fern" : "translate-x-0"
          }`}
        />
      </span>
      <span className="hidden leading-none sm:inline">Theme</span>
    </button>
  );
}

function SunIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" className="h-3 w-3" aria-hidden="true">
      <circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="1.8" />
      <path
        d="M12 2.75V5.25M12 18.75V21.25M5.46 5.46L7.23 7.23M16.77 16.77L18.54 18.54M2.75 12H5.25M18.75 12H21.25M5.46 18.54L7.23 16.77M16.77 7.23L18.54 5.46"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
    </svg>
  );
}

function MoonIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" className="h-3 w-3" aria-hidden="true">
      <path
        d="M18 15.63A7.5 7.5 0 0 1 8.37 6a7.5 7.5 0 1 0 9.63 9.63Z"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
