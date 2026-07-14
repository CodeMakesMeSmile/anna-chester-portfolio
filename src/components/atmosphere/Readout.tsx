"use client";

import { useEffect, useState } from "react";
import type { WeatherCondition } from "@/lib/weather";
import { useAtmosphere } from "@/store/atmosphere";
import { torontoTime } from "@/lib/time";

const conditionLabel: Record<WeatherCondition, string> = {
  clear: "Clear",
  rain: "Rain",
  snow: "Snow"
};

/** Live Toronto status for the nav: local time, condition, and temperature. */
export function Readout() {
  const weather = useAtmosphere((state) => state.weather);
  const live = useAtmosphere((state) => state.live);
  const [time, setTime] = useState<string | null>(null);

  useEffect(() => {
    const update = () => setTime(torontoTime());
    update();
    const id = window.setInterval(update, 30_000);
    return () => window.clearInterval(id);
  }, []);

  // The clock is client-only; render nothing until mounted to avoid a mismatch.
  if (!time) return null;

  return (
    <div className="hidden items-center gap-2 rounded-full border border-line/70 bg-surfaceStrong/60 px-3 py-1.5 font-mono text-xs text-text/75 lg:inline-flex">
      <span className="h-1.5 w-1.5 rounded-full bg-moss" aria-hidden="true" />
      <span>Toronto {time}</span>
      <span className="text-muted" aria-hidden="true">
        ·
      </span>
      <span>
        {conditionLabel[live ? live.weather : weather]}
        {live ? ` ${live.tempC}°` : ""}
      </span>
    </div>
  );
}
