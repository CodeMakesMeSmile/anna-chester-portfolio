"use client";

import { useEffect } from "react";
import { Fallback2D } from "@/components/atmosphere/Fallback2D";
import type { WeatherResponse } from "@/app/api/weather/route";
import { useAtmosphere } from "@/store/atmosphere";

/**
 * Client host for the atmosphere. Fetches live Toronto weather on mount and keeps
 * the store's theme in sync with the DOM (the ThemeToggle flips `html.dark`). It
 * renders the 2D fallback today; the WebGL scene layers in here in Phase D.
 */
export function Atmosphere() {
  const applyLive = useAtmosphere((state) => state.applyLive);
  const setTheme = useAtmosphere((state) => state.setTheme);

  useEffect(() => {
    let active = true;
    fetch("/api/weather")
      .then((response) => response.json())
      .then((data: WeatherResponse) => {
        if (active) applyLive(data);
      })
      .catch(() => {
        // The store already defaults to clear; nothing more to do.
      });
    return () => {
      active = false;
    };
  }, [applyLive]);

  useEffect(() => {
    const root = document.documentElement;
    const sync = () => setTheme(root.classList.contains("dark") ? "dark" : "light");
    sync();
    const observer = new MutationObserver(sync);
    observer.observe(root, { attributes: true, attributeFilter: ["class"] });
    return () => observer.disconnect();
  }, [setTheme]);

  return <Fallback2D />;
}
