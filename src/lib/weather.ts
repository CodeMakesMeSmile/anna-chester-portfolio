export type WeatherCondition = "clear" | "rain" | "snow";
export type Theme = "light" | "dark";

/**
 * Map a WMO weather-interpretation code (as returned by Open-Meteo) to the three
 * conditions the atmosphere renders. Fog and cloud collapse into "clear" since
 * the scene treats them as calm; anything unrecognized also falls back to clear.
 *
 * WMO reference: 71-77 + 85/86 = snow, 51-67 + 80-82 + 95-99 = rain, else clear.
 */
export function codeToWeather(code: number): WeatherCondition {
  if ((code >= 71 && code <= 77) || code === 85 || code === 86) return "snow";
  if ((code >= 51 && code <= 67) || (code >= 80 && code <= 82) || (code >= 95 && code <= 99)) {
    return "rain";
  }
  return "clear";
}

/**
 * A weather preset drives both the 2D fallback and (later) the WebGL uniforms.
 * `glow` is stored as space-separated sRGB channels so it can feed `rgb()`.
 */
export type AtmospherePreset = {
  label: string;
  precip: "none" | "rain" | "snow";
  /** 0..1 precipitation density. */
  precipIntensity: number;
  /** 0..1 haze/fog. */
  fog: number;
  /** Light-through-the-glass tint, "r g b". */
  glow: string;
};

/**
 * Art-directed by [theme][weather]. Dark is the twilight room; light is the
 * bright daytime greenhouse — each weather gets its own tuning, not an inversion.
 */
export const presets: Record<Theme, Record<WeatherCondition, AtmospherePreset>> = {
  dark: {
    clear: { label: "Clear", precip: "none", precipIntensity: 0, fog: 0.12, glow: "231 207 156" },
    rain: { label: "Rain", precip: "rain", precipIntensity: 0.7, fog: 0.42, glow: "150 180 200" },
    snow: { label: "Snow", precip: "snow", precipIntensity: 0.5, fog: 0.3, glow: "210 220 230" }
  },
  light: {
    clear: { label: "Clear", precip: "none", precipIntensity: 0, fog: 0.05, glow: "255 240 200" },
    rain: { label: "Rain", precip: "rain", precipIntensity: 0.6, fog: 0.22, glow: "200 210 205" },
    snow: { label: "Snow", precip: "snow", precipIntensity: 0.45, fog: 0.2, glow: "245 248 250" }
  }
};

export function getPreset(theme: Theme, weather: WeatherCondition): AtmospherePreset {
  return presets[theme][weather];
}
