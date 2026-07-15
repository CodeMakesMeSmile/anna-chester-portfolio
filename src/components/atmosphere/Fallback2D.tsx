"use client";

import type { CSSProperties } from "react";
import { getPreset, type Theme } from "@/lib/weather";
import { useAtmosphere } from "@/store/atmosphere";

/** Inline style that also carries CSS custom properties (e.g. `--snow-sway`). */
type StyleWithVars = CSSProperties & Record<`--${string}`, string | number>;

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

      {/* Light pouring through the glass roof. A clear sky flares with sunlight;
          wet weather keeps a flat, moody tint instead. */}
      {preset.precip === "none" ? (
        <SolarFlares theme={theme} />
      ) : (
        <div
          className="absolute inset-0 transition-[background] duration-1000"
          style={{
            background: `radial-gradient(1200px 760px at 50% -14%, rgb(${preset.glow} / 0.3), transparent 62%)`
          }}
        />
      )}

      <Dust theme={theme} />

      {preset.precip === "rain" ? (
        <Rain
          intensity={preset.precipIntensity}
          color={theme === "dark" ? "200 218 235" : "70 96 128"}
          boost={theme === "dark" ? 1 : 1.55}
        />
      ) : null}
      {preset.precip === "snow" ? (
        <Snow
          intensity={preset.precipIntensity}
          color={theme === "dark" ? "255 255 255" : "126 148 172"}
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
  const dark = theme === "dark";
  // Warm motes in the dark room; a deeper olive by day so they read against the
  // pale glass instead of washing out.
  const tint = dark ? "231 207 156" : "96 116 84";
  return (
    <div
      className="absolute inset-0 motion-reduce:hidden"
      style={{
        opacity: dark ? 0.55 : 0.72,
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

function Rain({ intensity, color, boost = 1 }: { intensity: number; color: string; boost?: number }) {
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
            opacity: Math.min(0.78, drop.opacity * boost),
            background: `linear-gradient(to bottom, rgb(${color} / 0), rgb(${color} / ${Math.min(
              0.82,
              0.55 * boost
            )}), rgb(${color} / 0))`,
            animation: `atmos-drop ${drop.duration}s linear ${drop.delay}s infinite`
          }}
        />
      ))}
    </div>
  );
}

// A field of individual snowflakes — bigger, rounder, and much slower than the
// raindrops, each with its own sideways sway (`--snow-sway`) and a soft glow so
// it stays legible against both the twilight room and the bright day glass.
// Deterministic, like the rain, so SSR and client markup match.
const SNOW_FLAKES = Array.from({ length: 120 }, (_, i) => {
  const rand = (seed: number) => {
    const x = Math.sin(i * 57.31 + seed * 88.17) * 43758.5453;
    return Math.round((x - Math.floor(x)) * 1000) / 1000;
  };
  return {
    left: rand(1) * 100,
    size: 2 + rand(2) * 4,
    duration: 6 + rand(3) * 7,
    delay: -(rand(4) * 12),
    opacity: 0.4 + rand(5) * 0.5,
    sway: (rand(6) - 0.5) * 9
  };
});

function Snow({ intensity, color }: { intensity: number; color: string }) {
  const count = Math.round(70 + intensity * 50);
  return (
    <div className="absolute inset-0 motion-reduce:hidden">
      {SNOW_FLAKES.slice(0, count).map((flake, i) => (
        <span
          key={`flake-${i}`}
          className="absolute top-0 rounded-full"
          style={{
            left: `${flake.left}%`,
            width: `${flake.size}px`,
            height: `${flake.size}px`,
            opacity: flake.opacity,
            background: `rgb(${color})`,
            boxShadow: `0 0 ${flake.size * 1.4}px rgb(${color} / 0.7)`,
            "--snow-sway": `${flake.sway}vw`,
            animation: `atmos-snowfall ${flake.duration}s linear ${flake.delay}s infinite`
          } as StyleWithVars}
        />
      ))}
    </div>
  );
}

// Lens-flare orbs strung along the sun's optical axis (top-right toward the
// lower-left). Hand-placed for composition; each twinkles on its own cadence.
const SOLAR_ORBS = [
  { left: 58, top: 23, size: 46, alpha: 0.5, tone: "warm", ring: false, dur: 6.5, delay: 0 },
  { left: 50, top: 47, size: 22, alpha: 0.42, tone: "cool", ring: false, dur: 8, delay: 1.4 },
  { left: 41, top: 69, size: 78, alpha: 0.32, tone: "warm", ring: true, dur: 9.5, delay: 2.2 },
  { left: 30, top: 90, size: 32, alpha: 0.46, tone: "cool", ring: false, dur: 7, delay: 0.7 }
] as const;

function SolarFlares({ theme }: { theme: Theme }) {
  const dark = theme === "dark";
  // Warm sun tones, tuned per theme: bright and creamy against the twilight
  // ground, more saturated and golden so the flare still reads on pale day glass.
  const core = dark ? "255 232 186" : "255 214 138";
  const halo = dark ? "255 206 138" : "250 186 96";
  const ray = dark ? "255 218 156" : "247 182 90";
  const cool = dark ? "214 226 236" : "150 176 156";
  const rayAlpha = dark ? 0.5 : 0.44;
  const rayOpacity = dark ? 0.55 : 0.52;

  return (
    <div className="absolute inset-0 overflow-hidden">
      {/* The sun blooming through the glass roof, breathing slowly. */}
      <div
        className="absolute inset-0 transition-[background] duration-1000"
        style={{
          background: `radial-gradient(760px 620px at 66% 1%, rgb(${core} / ${
            dark ? 0.6 : 0.72
          }), rgb(${halo} / ${dark ? 0.24 : 0.32}) 34%, transparent 66%)`,
          animation: "atmos-flare-pulse 7s ease-in-out infinite"
        }}
      />

      {/* Crepuscular rays fanning from the sun, rotating almost imperceptibly.
          Sized well past the viewport and centred on the sun so the rotation
          never uncovers a corner; masked to a soft radial falloff. */}
      <div
        className="absolute"
        style={{
          top: "1%",
          left: "66%",
          width: "2600px",
          height: "2600px",
          marginLeft: "-1300px",
          marginTop: "-1300px",
          opacity: rayOpacity,
          background: `repeating-conic-gradient(from 0deg at 50% 50%, rgb(${ray} / ${rayAlpha}) 0deg 2.2deg, transparent 2.2deg 15deg)`,
          maskImage:
            "radial-gradient(closest-side, #000 0%, rgba(0, 0, 0, 0.55) 42%, transparent 76%)",
          WebkitMaskImage:
            "radial-gradient(closest-side, #000 0%, rgba(0, 0, 0, 0.55) 42%, transparent 76%)",
          animation: "atmos-flare-spin 150s linear infinite"
        }}
      />

      {SOLAR_ORBS.map((orb, i) => {
        const tint = orb.tone === "warm" ? halo : cool;
        return (
          <span
            key={`orb-${i}`}
            className="absolute rounded-full"
            style={{
              left: `${orb.left}%`,
              top: `${orb.top}%`,
              width: `${orb.size}px`,
              height: `${orb.size}px`,
              marginLeft: `${-orb.size / 2}px`,
              marginTop: `${-orb.size / 2}px`,
              background: orb.ring
                ? `radial-gradient(circle, transparent 50%, rgb(${tint} / ${orb.alpha}) 62%, transparent 74%)`
                : `radial-gradient(circle, rgb(${tint} / ${orb.alpha}), transparent 68%)`,
              animation: `atmos-flare-orb ${orb.dur}s ease-in-out ${orb.delay}s infinite`
            }}
          />
        );
      })}
    </div>
  );
}
