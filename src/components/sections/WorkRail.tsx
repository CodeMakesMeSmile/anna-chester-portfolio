import { Chip } from "@/components/ui/Chip";
import { SectionHeading } from "@/components/ui/SectionHeading";

type Environment = {
  name: string;
  environment: string;
  summary: string;
  tags: string[];
  href?: string;
};

// Range first: four environments across the whole stack. Depth is revealed on
// click. Deep-link routes to /work/[slug] are wired in Phase B.
const environments: Environment[] = [
  {
    name: "Banu Beauty",
    environment: "Web · full-stack e-commerce",
    summary:
      "A storefront built concept to deployed — product, checkout, and a payment-aware preorder flow. The live, clickable anchor.",
    tags: ["Next.js", "Stripe", "PostgreSQL"]
  },
  {
    name: "ZEVA referral engine",
    environment: "Cross-platform · flagship",
    summary:
      "One referral & promotions system spanning Django, Angular, and Flutter — one feature, three tiers of the stack, shipped.",
    tags: ["Django", "Angular", "Flutter"],
    href: "#flagship"
  },
  {
    name: "HAIL Admin",
    environment: "Ownership · operations console",
    summary:
      "Sole frontend engineer: a blank repository to a production operations console in about two and a half months.",
    tags: ["Angular", "Admin systems", "Telemetry"],
    href: "#hail"
  },
  {
    name: "Teaching",
    environment: "Mentorship · 1,000+ students",
    summary:
      "Nearly four years as a University of Toronto TA — reading unfamiliar code, debugging, and explaining until it clicks.",
    tags: ["Debugging", "Mentorship", "Communication"],
    href: "#teaching"
  }
];

export function WorkRail() {
  return (
    <section id="work" className="scroll-mt-28">
      <SectionHeading
        eyebrow="Selected work"
        title="Range across the whole stack — web, mobile, backend, and the teams around it."
        description="Four environments that show the breadth first. The depth lives one click away."
      />
      <div className="mt-8 grid gap-5 md:grid-cols-2">
        {environments.map((item) => (
          <article
            key={item.name}
            className="section-shell flex h-full flex-col p-6 transition duration-300 motion-safe:hover:-translate-y-1 motion-safe:hover:shadow-glow sm:p-7"
          >
            <p className="font-mono text-xs uppercase tracking-[0.24em] text-moss">
              {item.environment}
            </p>
            <h3 className="mt-3 font-display text-2xl font-semibold tracking-tight">{item.name}</h3>
            <p className="mt-3 flex-1 text-sm leading-7 text-text/76 sm:text-base">{item.summary}</p>
            <div className="mt-5 flex flex-wrap gap-2.5">
              {item.tags.map((tag) => (
                <Chip key={tag}>{tag}</Chip>
              ))}
            </div>
            {item.href ? (
              <a
                href={item.href}
                className="mt-6 inline-flex items-center gap-2 font-mono text-sm font-medium text-moss transition hover:gap-3 focus-ring"
              >
                View <span aria-hidden="true">→</span>
              </a>
            ) : null}
          </article>
        ))}
      </div>
    </section>
  );
}
