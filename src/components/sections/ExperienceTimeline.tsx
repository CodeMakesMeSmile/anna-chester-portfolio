import { Chip } from "@/components/ui/Chip";
import { SectionHeading } from "@/components/ui/SectionHeading";
import type { ExperienceItem } from "@/data/profile";

export function ExperienceTimeline({ items }: { items: ExperienceItem[] }) {
  return (
    <section id="experience" className="scroll-mt-28">
      <SectionHeading
        eyebrow="Experience"
        title="Production systems, enterprise tools, and technical education."
        description="The roles and ownership behind the range — from the current full-stack seat back through a co-op and four years of teaching."
      />
      <ol className="mt-8 space-y-4">
        {items.map((item) => (
          <li
            key={`${item.company}-${item.role}`}
            className="section-shell relative p-6 pl-8 sm:p-7 sm:pl-10"
          >
            <span
              className="absolute left-4 top-8 h-3 w-3 rounded-full border border-moss/50 bg-fern/70 sm:left-5"
              aria-hidden="true"
            />
            <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
              <h3 className="font-display text-xl font-semibold tracking-tight">{item.role}</h3>
              <p className="font-mono text-xs uppercase tracking-[0.2em] text-muted">
                {item.timeframe}
              </p>
            </div>
            <p className="mt-1 text-sm font-medium text-moss">{item.company}</p>
            <p className="mt-3 max-w-3xl text-sm leading-7 text-text/76">{item.summary}</p>
            <div className="mt-4 flex flex-wrap gap-2.5">
              {item.tags.slice(0, 6).map((tag) => (
                <Chip key={tag}>{tag}</Chip>
              ))}
            </div>
          </li>
        ))}
      </ol>
    </section>
  );
}
