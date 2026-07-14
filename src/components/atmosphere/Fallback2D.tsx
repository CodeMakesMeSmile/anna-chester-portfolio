"use client";

import { getPreset } from "@/lib/weather";
import { useAtmosphere } from "@/store/atmosphere";

/**
 * The 2D atmosphere: a theme-aware greenhouse backdrop that reacts to the active
 * weather (glow tint + rain/snow). It's the required baseline that renders before
 * (and instead of) the WebGL scene, and it's decorative and hidden from a11y.
 * Precipitation pauses under reduced motion.
 */
export function Fallback2D() {
  const weather = useAtmosphere((state) => state.weather);
  const theme = useAtmosphere((state) => state.theme);
  const preset = getPreset(theme, weather);

  return (
    <div aria-hidden="true" className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      {/* Base wash — theme colors via CSS variables. */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(1200px circle at 50% -8%, rgb(var(--color-amber) / 0.08), transparent 60%), radial-gradient(900px circle at 12% 8%, rgb(var(--color-moss) / 0.1), transparent 55%)"
        }}
      />

      {/* Light through the glass — tinted by the active weather. */}
      <div
        className="absolute inset-0 transition-[background] duration-1000"
        style={{
          background: `radial-gradient(1000px circle at 50% -10%, rgb(${preset.glow} / 0.16), transparent 62%)`
        }}
      />

      {/* Faint greenhouse mullions. */}
      <div
        className="absolute inset-0 opacity-60"
        style={{
          backgroundImage: "linear-gradient(90deg, rgb(var(--color-grid) / 0.06) 1px, transparent 1px)",
          backgroundSize: "7.5rem 100%"
        }}
      />

      {preset.precip === "rain" ? (
        <Rain
          intensity={preset.precipIntensity}
          color={theme === "dark" ? "200 218 235" : "78 104 130"}
        />
      ) : null}
      {preset.precip === "snow" ? (
        <Snow
          intensity={preset.precipIntensity}
          color={theme === "dark" ? "255 255 255" : "150 168 186"}
        />
      ) : null}

      {/* Foliage floor glow. */}
      <div
        className="absolute inset-x-0 bottom-0 h-1/3"
        style={{
          background:
            "radial-gradient(80% 120% at 50% 120%, rgb(var(--color-moss) / 0.14), transparent 70%)"
        }}
      />
    </div>
  );
}

function Rain({ intensity, color }: { intensity: number; color: string }) {
  return (
    <div
      className="absolute inset-0 motion-reduce:hidden"
      style={{
        opacity: 0.55 + intensity * 0.4,
        backgroundImage: `repeating-linear-gradient(100deg, rgb(${color} / 0) 0px, rgb(${color} / 0) 12px, rgb(${color} / 0.65) 14px, rgb(${color} / 0) 16px)`,
        backgroundSize: "120px 640px",
        animation: "atmos-rain 0.55s linear infinite"
      }}
    />
  );
}

function Snow({ intensity, color }: { intensity: number; color: string }) {
  return (
    <div
      className="absolute inset-0 motion-reduce:hidden"
      style={{
        opacity: 0.6 + intensity * 0.35,
        backgroundImage: `radial-gradient(3px 3px at 25% 15%, rgb(${color} / 0.95), transparent 55%), radial-gradient(2.4px 2.4px at 70% 55%, rgb(${color} / 0.85), transparent 55%), radial-gradient(2px 2px at 45% 80%, rgb(${color} / 0.75), transparent 55%)`,
        backgroundSize: "320px 320px, 240px 240px, 200px 200px",
        animation: "atmos-snow 11s linear infinite"
      }}
    />
  );
}
