"use client";

import type { WeatherCondition } from "@/lib/weather";
import { useAtmosphere } from "@/store/atmosphere";
import { cn } from "@/lib/cn";

const options: { value: WeatherCondition; label: string }[] = [
  { value: "clear", label: "Clear" },
  { value: "rain", label: "Rain" },
  { value: "snow", label: "Snow" }
];

/** Subtle, always-available control to drive the atmosphere by hand or live. */
export function WeatherControls() {
  const weather = useAtmosphere((state) => state.weather);
  const source = useAtmosphere((state) => state.source);
  const setWeatherManual = useAtmosphere((state) => state.setWeatherManual);
  const useLive = useAtmosphere((state) => state.useLive);

  const buttonClass = (active: boolean) =>
    cn(
      "rounded-lg px-2.5 py-1 font-mono text-xs transition focus-ring",
      active ? "bg-moss/20 text-moss" : "text-text/70 hover:bg-surfaceStrong/70 hover:text-text"
    );

  return (
    <div className="fixed bottom-4 right-4 z-30 rounded-2xl border border-line/70 bg-surface/85 p-2 shadow-soft backdrop-blur-xl">
      <p className="px-1.5 pb-1.5 font-mono text-[10px] uppercase tracking-[0.22em] text-muted">
        Atmosphere
      </p>
      <div className="flex items-center gap-1" role="group" aria-label="Weather">
        {options.map((option) => (
          <button
            key={option.value}
            type="button"
            aria-pressed={source === "manual" && weather === option.value}
            onClick={() => setWeatherManual(option.value)}
            className={buttonClass(source === "manual" && weather === option.value)}
          >
            {option.label}
          </button>
        ))}
        <span className="mx-0.5 h-4 w-px bg-line/70" aria-hidden="true" />
        <button
          type="button"
          aria-pressed={source === "live"}
          onClick={useLive}
          className={cn(
            "inline-flex items-center gap-1.5",
            buttonClass(source === "live")
          )}
        >
          <span
            className={cn("h-1.5 w-1.5 rounded-full", source === "live" ? "bg-moss" : "bg-muted/60")}
            aria-hidden="true"
          />
          Live
        </button>
      </div>
    </div>
  );
}
