/**
 * Static, theme-aware greenhouse backdrop — the decorative baseline that renders
 * before (and instead of) the WebGL scene. It is purely CSS so it costs nothing
 * on first paint and works with reduced motion, no-WebGL, and SSR.
 *
 * Phase C wires these layers to live weather state; Phase D layers the R3F canvas
 * on top. The element is decorative and hidden from assistive tech.
 */
export function Fallback2D() {
  return (
    <div aria-hidden="true" className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      {/* Light through the glass: amber sun + moss wash. */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(1200px circle at 50% -8%, rgb(var(--color-amber) / 0.14), transparent 60%), radial-gradient(900px circle at 12% 8%, rgb(var(--color-moss) / 0.12), transparent 55%)"
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
