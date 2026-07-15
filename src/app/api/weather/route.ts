import { NextResponse } from "next/server";
import { codeToWeather, type WeatherCondition } from "@/lib/weather";

// Toronto. Kept server-side so there are no client CORS or rate-limit surprises.
const TORONTO = { latitude: 43.6532, longitude: -79.3832 };
const ENDPOINT =
  `https://api.open-meteo.com/v1/forecast?latitude=${TORONTO.latitude}` +
  `&longitude=${TORONTO.longitude}&current=temperature_2m,weather_code,is_day`;

export type WeatherResponse = {
  weather: WeatherCondition;
  tempC: number;
  isDay: boolean;
};

const FALLBACK: WeatherResponse = { weather: "clear", tempC: 0, isDay: true };

export async function GET() {
  try {
    // Cache for 15 minutes: fast, and well within Open-Meteo's free limits.
    const response = await fetch(ENDPOINT, { next: { revalidate: 900 } });
    if (!response.ok) throw new Error(`Open-Meteo responded ${response.status}`);

    const data = await response.json();
    const current = data?.current;
    if (!current || typeof current.weather_code !== "number") {
      throw new Error("Unexpected Open-Meteo payload");
    }

    const payload: WeatherResponse = {
      weather: codeToWeather(current.weather_code),
      tempC: Math.round(current.temperature_2m),
      isDay: current.is_day === 1
    };
    return NextResponse.json(payload);
  } catch {
    // Always hand the client a valid shape; the scene defaults to clear twilight.
    return NextResponse.json(FALLBACK);
  }
}
