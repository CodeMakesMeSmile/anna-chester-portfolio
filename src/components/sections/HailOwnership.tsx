import Link from "next/link";
import { Chip } from "@/components/ui/Chip";
import { SectionHeading } from "@/components/ui/SectionHeading";

const highlights = [
  {
    title: "Reusable foundation",
    body: "Set up the shared frontend architecture the console — and later features — would build on."
  },
  {
    title: "Operations surfaces",
    body: "Shipped the admin views business teams rely on to run day-to-day operations."
  },
  {
    title: "Live telemetry",
    body: "Wired real-time map and telemetry views so operators can see state at a glance."
  },
  {
    title: "White-label theming",
    body: "Built theming so the same console can be re-skinned per deployment."
  }
];

export function HailOwnership() {
  return (
    <section id="hail" className="scroll-mt-28">
      <SectionHeading
        eyebrow="Ownership"
        title="Blank repository to production operations console."
        description="As sole frontend engineer on HAIL Admin, I took an operations console from an empty repository to production on a reusable foundation — the end-to-end ownership that range alone doesn't show."
      />
      <div className="mt-8 grid gap-4 sm:grid-cols-2">
        {highlights.map((item) => (
          <article key={item.title} className="section-shell p-6">
            <h3 className="font-display text-xl font-semibold tracking-tight">{item.title}</h3>
            <p className="mt-3 text-sm leading-7 text-text/76">{item.body}</p>
          </article>
        ))}
      </div>
      <div className="mt-6 flex flex-wrap items-center justify-between gap-4">
        <div className="flex flex-wrap gap-2.5">
          {["Angular", "TypeScript", "Admin systems", "Real-time telemetry", "Theming"].map((tag) => (
            <Chip key={tag}>{tag}</Chip>
          ))}
        </div>
        <Link
          href="/work/hail"
          className="inline-flex items-center gap-2 whitespace-nowrap font-mono text-sm font-medium text-moss transition hover:gap-3 focus-ring"
        >
          Read the case study <span aria-hidden="true">→</span>
        </Link>
      </div>
    </section>
  );
}
