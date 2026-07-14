import { describe, it, expect, beforeEach } from "vitest";
import { useAtmosphere } from "@/store/atmosphere";

const reset = () =>
  useAtmosphere.setState({ weather: "clear", source: "live", theme: "dark", live: null });

describe("atmosphere store", () => {
  beforeEach(reset);

  it("manual selection sets the weather and switches to manual", () => {
    useAtmosphere.getState().setWeatherManual("snow");
    const state = useAtmosphere.getState();
    expect(state.weather).toBe("snow");
    expect(state.source).toBe("manual");
  });

  it("applyLive drives the scene only while in live mode", () => {
    useAtmosphere.getState().applyLive({ weather: "rain", tempC: 5, isDay: true });
    expect(useAtmosphere.getState().weather).toBe("rain");

    useAtmosphere.getState().setWeatherManual("snow");
    useAtmosphere.getState().applyLive({ weather: "clear", tempC: 10, isDay: false });
    expect(useAtmosphere.getState().weather).toBe("snow"); // manual override untouched
    expect(useAtmosphere.getState().live?.weather).toBe("clear"); // snapshot still recorded
  });

  it("useLive restores the last live snapshot", () => {
    useAtmosphere.getState().applyLive({ weather: "rain", tempC: 5, isDay: true });
    useAtmosphere.getState().setWeatherManual("snow");
    useAtmosphere.getState().useLive();
    const state = useAtmosphere.getState();
    expect(state.source).toBe("live");
    expect(state.weather).toBe("rain");
  });
});
