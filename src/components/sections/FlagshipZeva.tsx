import { Chip } from "@/components/ui/Chip";
import { SectionHeading } from "@/components/ui/SectionHeading";

const stack = ["Django", "Angular", "Flutter", "PostgreSQL", "Deep links", "Signed redemption"];

// Placeholder for the polished system-flow SVG built in Phase B. Kept structural
// so the "one feature, three tiers" story reads even before the diagram lands.
const tiers = [
  {
    tier: "Backend",
    label: "Django",
    detail: "Cycle-based reward issuance and signed promo redemption."
  },
  {
    tier: "Web",
    label: "Angular",
    detail: "Referral dashboard and promotion management flows."
  },
  {
    tier: "Mobile",
    label: "Flutter",
    detail: "Deep-link acquisition and in-app redemption."
  }
];

export function FlagshipZeva() {
  return (
    <section id="flagship" className="scroll-mt-28">
      <SectionHeading
        eyebrow="Flagship case study"
        title="One referral engine, three tiers of the stack."
        description="ZEVA's cross-platform referral & promotions system: cycle-based reward issuance, deep-link acquisition, and signed promo redemption — the cleanest proof of range in a single project."
      />
      <div className="mt-8 grid gap-5 lg:grid-cols-[0.85fr_1.15fr]">
        <div className="section-shell p-6 sm:p-8">
          <p className="text-base leading-8 text-text/82">
            I built one referral system that lives in three places at once — the backend that issues
            rewards, the web flow that manages them, and the mobile app that redeems them. The
            interesting part is where a single idea takes root across a whole stack.
          </p>
          <div className="mt-6 flex flex-wrap gap-2.5">
            {stack.map((tag) => (
              <Chip key={tag}>{tag}</Chip>
            ))}
          </div>
        </div>
        <SystemFlow />
      </div>
    </section>
  );
}

function SystemFlow() {
  return (
    <div className="section-shell grid gap-4 p-6 sm:p-8" aria-label="ZEVA system flow across three stack tiers">
      {tiers.map((tier, index) => (
        <div key={tier.tier} className="relative">
          {index < tiers.length - 1 ? (
            <span
              className="absolute left-6 top-full h-4 w-px bg-line/70"
              aria-hidden="true"
            />
          ) : null}
          <div className="flex items-start gap-4 rounded-2xl border border-line/70 bg-bg/40 p-4">
            <span className="grid h-12 w-12 shrink-0 place-items-center rounded-xl border border-moss/40 bg-surfaceStrong/70 font-mono text-xs font-semibold uppercase text-moss">
              {tier.tier}
            </span>
            <div>
              <h3 className="font-display text-lg font-semibold tracking-tight">{tier.label}</h3>
              <p className="mt-1 text-sm leading-6 text-text/74">{tier.detail}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
