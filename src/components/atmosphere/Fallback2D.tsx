"use client";

import { getPreset, type Theme } from "@/lib/weather";
import { useAtmosphere } from "@/store/atmosphere";

/**
 * The 2D atmosphere: a theme-aware greenhouse that reads as a space even on a
 * clear day (light through the glass, panes, dust, vignette) and reacts to the
 * active weather (glow tint + rain/snow). It's the required baseline that renders
 * before the WebGL scene, is decorative/`aria-hidden`, and pauses precipitation
 * and dust under reduced motion.
 */
export function Fallback2D() {
  const weather = useAtmosphere((state) => state.weather);
  const theme = useAtmosphere((state) => state.theme);
  const preset = getPreset(theme, weather);

  return (
    <div aria-hidden="true" className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      {/* Base tint. */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(1000px circle at 14% 6%, rgb(var(--color-moss) / 0.12), transparent 55%)"
        }}
      />

      {/* Light pouring through the glass roof — tinted by the active weather. */}
      <div
        className="absolute inset-0 transition-[background] duration-1000"
        style={{
          background: `radial-gradient(1200px 760px at 50% -14%, rgb(${preset.glow} / 0.3), transparent 62%)`
        }}
      />

      <Dust theme={theme} />

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

      {/* Foliage glow along the floor. */}
      <div
        className="absolute inset-x-0 bottom-0 h-2/5"
        style={{
          background:
            "radial-gradient(80% 120% at 50% 125%, rgb(var(--color-moss) / 0.18), transparent 70%)"
        }}
      />

      {/* Cinematic vignette to frame the content. */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(125% 125% at 50% 32%, transparent 46%, rgb(var(--color-shadow) / 0.24) 100%)"
        }}
      />
    </div>
  );
}

function Dust({ theme }: { theme: Theme }) {
  const tint = theme === "dark" ? "231 207 156" : "120 140 108";
  return (
    <div
      className="absolute inset-0 motion-reduce:hidden"
      style={{
        opacity: 0.55,
        backgroundImage: `radial-gradient(1.6px 1.6px at 15% 30%, rgb(${tint} / 0.55), transparent 60%), radial-gradient(1.1px 1.1px at 60% 18%, rgb(${tint} / 0.45), transparent 60%), radial-gradient(1.6px 1.6px at 82% 68%, rgb(${tint} / 0.5), transparent 60%), radial-gradient(1.1px 1.1px at 35% 82%, rgb(${tint} / 0.4), transparent 60%)`,
        backgroundSize: "600px 600px, 500px 500px, 720px 720px, 460px 460px",
        animation: "atmos-dust 26s linear infinite"
      }}
    />
  );
}

// A field of individual raindrops, varied in position, length, speed, and
// opacity. Computed once and deterministically (no Math.random at render), so
// server and client markup match. ~60 streaks reads as rain far more naturally
// than a gradient, while staying cheap enough for a decorative backdrop.
const RAIN_DROPS = Array.from({ length: 60 }, (_, i) => {
  const rand = (seed: number) => {
    const x = Math.sin(i * 91.73 + seed * 47.29) * 43758.5453;
    return Math.round((x - Math.floor(x)) * 1000) / 1000;
  };
  return {
    left: rand(1) * 100,
    length: 34 + rand(2) * 52,
    duration: 0.7 + rand(3) * 0.7,
    delay: -(rand(4) * 2.4),
    opacity: 0.1 + rand(5) * 0.26
  };
});

function Rain({ intensity, color }: { intensity: number; color: string }) {
  const count = Math.round(30 + intensity * 30);
  return (
    <div className="absolute inset-0 motion-reduce:hidden">
      {RAIN_DROPS.slice(0, count).map((drop, i) => (
        <span
          key={`drop-${i}`}
          className="absolute top-0 rounded-full"
          style={{
            left: `${drop.left}%`,
            width: "1.4px",
            height: `${drop.length}px`,
            opacity: drop.opacity,
            background: `linear-gradient(to bottom, rgb(${color} / 0), rgb(${color} / 0.55), rgb(${color} / 0))`,
            animation: `atmos-drop ${drop.duration}s linear ${drop.delay}s infinite`
          }}
        />
      ))}
    </div>
  );
}

function Snow({ intensity, color }: { intensity: number; color: string }) {
  return (
    <div
      className="absolute inset-0 motion-reduce:hidden"
      style={{
        opacity: 0.4 + intensity * 0.22,
        backgroundImage: `radial-gradient(2.4px 2.4px at 25% 15%, rgb(${color} / 0.85), transparent 55%), radial-gradient(1.8px 1.8px at 70% 55%, rgb(${color} / 0.72), transparent 55%), radial-gradient(1.5px 1.5px at 45% 80%, rgb(${color} / 0.62), transparent 55%)`,
        backgroundSize: "320px 320px, 240px 240px, 200px 200px",
        animation: "atmos-snow 12s linear infinite"
      }}
    />
  );
}
