import { create } from "zustand";
import type { Theme, WeatherCondition } from "@/lib/weather";

export type WeatherSource = "live" | "manual";

export type LiveSnapshot = {
  weather: WeatherCondition;
  tempC: number;
  isDay: boolean;
};

type AtmosphereState = {
  /** The condition the scene is currently rendering. */
  weather: WeatherCondition;
  /** Whether `weather` tracks live data or a manual override. */
  source: WeatherSource;
  theme: Theme;
  /** The last snapshot fetched from the weather API, kept for the readout and
   *  for restoring live mode after a manual override. */
  live: LiveSnapshot | null;

  /** Pick a condition by hand; switches to manual mode. */
  setWeatherManual: (weather: WeatherCondition) => void;
  /** Return to live mode, restoring the last fetched condition. */
  useLive: () => void;
  /** Record a fresh live snapshot; only drives the scene while in live mode. */
  applyLive: (snapshot: LiveSnapshot) => void;
  setTheme: (theme: Theme) => void;
};

export const useAtmosphere = create<AtmosphereState>((set, get) => ({
  weather: "clear",
  source: "live",
  theme: "dark",
  live: null,

  setWeatherManual: (weather) => set({ weather, source: "manual" }),

  useLive: () => {
    const { live } = get();
    set({ source: "live", weather: live ? live.weather : get().weather });
  },

  applyLive: (snapshot) =>
    set((state) => ({
      live: snapshot,
      weather: state.source === "live" ? snapshot.weather : state.weather
    })),

  setTheme: (theme) => set({ theme })
}));
