const TORONTO_TZ = "America/Toronto";

/** Current wall-clock time in Toronto as "HH:MM" (24-hour). */
export function torontoTime(date: Date = new Date()): string {
  return new Intl.DateTimeFormat("en-CA", {
    timeZone: TORONTO_TZ,
    hour: "2-digit",
    minute: "2-digit",
    hour12: false
  }).format(date);
}

/** Current hour (0-23) in Toronto. */
export function torontoHour(date: Date = new Date()): number {
  const hour = new Intl.DateTimeFormat("en-CA", {
    timeZone: TORONTO_TZ,
    hour: "2-digit",
    hour12: false
  }).format(date);
  return Number.parseInt(hour, 10) % 24;
}
