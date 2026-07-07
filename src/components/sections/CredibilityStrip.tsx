// Public-safe names for instant, skim-level credibility right under the hero.
const places = ["ZEVA Global", "DBRS Morningstar", "University of Toronto"];

export function CredibilityStrip() {
  return (
    <div className="mt-14 border-t border-line/50 pt-8">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:gap-8">
        <p className="font-mono text-xs uppercase tracking-[0.24em] text-muted">Experience</p>
        <div className="flex flex-wrap items-center gap-x-3 gap-y-2">
          {places.map((place, index) => (
            <span key={place} className="flex items-center gap-x-3">
              {index > 0 ? (
                <span aria-hidden="true" className="text-muted/50">
                  ·
                </span>
              ) : null}
              <span className="font-display text-base font-semibold tracking-tight text-text/80">
                {place}
              </span>
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
