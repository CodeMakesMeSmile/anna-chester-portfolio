import { describe, it, expect } from "vitest";
import { codeToWeather, getPreset } from "@/lib/weather";

describe("codeToWeather", () => {
  it("treats clear, cloud, and fog codes as clear", () => {
    for (const code of [0, 1, 2, 3, 45, 48]) {
      expect(codeToWeather(code)).toBe("clear");
    }
  });

  it("treats drizzle, rain, showers, and thunderstorms as rain", () => {
    for (const code of [51, 53, 55, 56, 57, 61, 63, 65, 66, 67, 80, 81, 82, 95, 96, 99]) {
      expect(codeToWeather(code)).toBe("rain");
    }
  });

  it("treats snow and snow showers as snow", () => {
    for (const code of [71, 73, 75, 77, 85, 86]) {
      expect(codeToWeather(code)).toBe("snow");
    }
  });

  it("falls back to clear for unknown codes", () => {
    expect(codeToWeather(-1)).toBe("clear");
    expect(codeToWeather(1000)).toBe("clear");
  });
});

describe("getPreset", () => {
  const themes = ["light", "dark"] as const;
  const conditions = ["clear", "rain", "snow"] as const;

  it("returns a valid preset for every theme and condition", () => {
    for (const theme of themes) {
      for (const condition of conditions) {
        const preset = getPreset(theme, condition);
        expect(preset.precip).toBe(condition === "clear" ? "none" : condition);
        expect(preset.precipIntensity).toBeGreaterThanOrEqual(0);
        expect(preset.precipIntensity).toBeLessThanOrEqual(1);
        expect(preset.fog).toBeGreaterThanOrEqual(0);
        expect(preset.glow).toMatch(/^\d+ \d+ \d+$/);
      }
    }
  });
});
