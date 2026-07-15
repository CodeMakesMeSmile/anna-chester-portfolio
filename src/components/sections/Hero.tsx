import { CredibilityStrip } from "@/components/sections/CredibilityStrip";
import { Button } from "@/components/ui/Button";
import { site } from "@/data/site";

/**
 * The headline is plain server-rendered HTML so it's the LCP element.
 */
export function Hero() {
  return (
    <section id="top" className="pt-6 sm:pt-10">
      <div className="relative grid items-center gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:gap-14">
        <div>
          <p className="section-kicker">Full-stack engineer · Toronto</p>
          <h1 className="mt-5 text-balance font-display text-[clamp(2.8rem,7vw,5.25rem)] font-semibold leading-[0.98] tracking-tight">
            I build systems that grow from idea to impact.
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-text/85">
            Web, mobile, and backend. One engineer. I turn vague requirements into production
            software people actually use.
          </p>
          <p className="mt-4 max-w-2xl text-base leading-7 text-muted">
            A new grad who has already spent three years building production software, on a
            co-op → full-time → senior track, while teaching 1,000+ students along the way.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <Button href="#work" variant="primary">
              Explore my work
            </Button>
            <Button href="#contact" variant="secondary">
              Get in touch
            </Button>
            <Button href={site.resume} variant="ghost" external>
              Résumé
            </Button>
          </div>
          <a
            href={site.liveDemo.url}
            target="_blank"
            rel="noreferrer"
            className="group mt-6 inline-flex items-center gap-2.5 text-sm text-muted transition hover:text-text focus-ring"
          >
            <span className="relative flex h-2.5 w-2.5" aria-hidden="true">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-moss/70 motion-reduce:hidden" />
              <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-moss" />
            </span>
            <span>
              Live demo · <span className="font-mono text-text/80">{site.liveDemo.label}</span>
            </span>
            <span aria-hidden="true" className="transition-transform group-hover:translate-x-0.5">
              ↗
            </span>
          </a>
        </div>
        <EngineerCard />
      </div>
      <CredibilityStrip />
    </section>
  );
}

function EngineerCard() {
  return (
    <div className="section-shell relative overflow-hidden p-6 sm:p-8">
      <div
        className="absolute inset-x-8 top-0 h-px bg-gradient-to-r from-transparent via-moss/60 to-transparent"
        aria-hidden="true"
      />
      <p className="font-mono text-xs text-muted">{"// currently open to full-stack roles"}</p>
      <pre className="mt-3 overflow-x-auto font-mono text-sm leading-7 text-text/90">
        <code>{`const engineer = {
  name: "Anna Chester",
  stack: ["web", "mobile", "backend"],
  building: "3 years, production",
  teaching: "1,000+ students",
  status: "open to work",
};`}</code>
      </pre>
    </div>
  );
}
