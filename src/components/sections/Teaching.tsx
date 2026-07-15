import { SectionHeading } from "@/components/ui/SectionHeading";

const stats = [
  { value: "1,000+", label: "students supported since 2022" },
  { value: "12+", label: "University of Toronto course offerings" },
  { value: "~4 years", label: "as a teaching assistant and mentor" }
];

export function Teaching() {
  return (
    <section id="teaching" className="scroll-mt-28">
      <SectionHeading
        eyebrow="Teaching"
        title="Nearly four years teaching detailed computer science concepts to 1,000+ students."
        description="Reading unfamiliar code, debugging under pressure, and explaining hard ideas simply. These are the same skills that make me useful on a team."
      />
      <div className="mt-8 grid gap-4 sm:grid-cols-3">
        {stats.map((stat) => (
          <article key={stat.label} className="section-shell p-6">
            <p className="font-display text-3xl font-semibold tracking-tight">{stat.value}</p>
            <p className="mt-2 text-sm leading-6 text-muted">{stat.label}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
