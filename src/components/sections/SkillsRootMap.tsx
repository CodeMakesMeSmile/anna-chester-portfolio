import { Chip } from "@/components/ui/Chip";
import { SectionHeading } from "@/components/ui/SectionHeading";
import type { SkillGroup } from "@/data/profile";

/**
 * Skills in context. Phase A renders the grouped foundation; the interactive
 * root-map visualization is layered on in Phase B.
 */
export function SkillsRootMap({ groups }: { groups: SkillGroup[] }) {
  return (
    <section id="skills" className="scroll-mt-28">
      <SectionHeading
        eyebrow="Skills in context"
        title="A full-stack foundation with production depth."
        description="Grouped by the systems behind the work — interfaces, services, data, mobile, payments, and the practices that keep software reliable."
      />
      <div className="mt-8 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
        {groups.map((group) => (
          <article key={group.title} className="section-shell h-full p-6 sm:p-7">
            <h3 className="font-display text-xl font-semibold tracking-tight">{group.title}</h3>
            <p className="mt-3 text-sm leading-7 text-text/74">{group.description}</p>
            <div className="mt-5 flex flex-wrap gap-2.5">
              {group.items.map((item) => (
                <Chip key={item}>{item}</Chip>
              ))}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
