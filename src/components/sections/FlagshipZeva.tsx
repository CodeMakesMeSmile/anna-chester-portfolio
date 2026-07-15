import Link from "next/link";
import { Chip } from "@/components/ui/Chip";
import { SectionHeading } from "@/components/ui/SectionHeading";

const stack = ["Django", "Angular", "Flutter", "PostgreSQL", "Deep links", "Signed redemption"];

type FlowNode = {
  x: number;
  y: number;
  label: string;
  sub: string;
  accent?: boolean;
};

// A public-safe system diagram: two clients call one backend that persists
// referral + reward state. No internal names, endpoints, or metrics.
const nodes: FlowNode[] = [
  { x: 16, y: 32, label: "Angular web", sub: "Manage referrals" },
  { x: 16, y: 214, label: "Flutter mobile", sub: "Acquire & redeem" },
  { x: 268, y: 123, label: "Django backend", sub: "Issue & verify", accent: true },
  { x: 498, y: 123, label: "PostgreSQL", sub: "Reward state" }
];

export function FlagshipZeva() {
  return (
    <section id="flagship" className="scroll-mt-28">
      <SectionHeading
        eyebrow="Flagship case study"
        title="One referral engine, three tiers of the stack."
        description="ZEVA's cross-platform referral and promotions system: cycle-based reward issuance, deep-link acquisition, and signed promo redemption. One feature that had to be right across the whole stack."
      />
      <div className="mt-8 grid gap-5 lg:grid-cols-[0.85fr_1.15fr]">
        <div className="section-shell flex flex-col p-6 sm:p-8">
          <p className="text-base leading-8 text-text/82">
            I built one referral system that lives in three places at once. The backend issues the
            rewards, the web flow manages them, and the mobile app redeems them. One feature, kept
            consistent across an entire stack.
          </p>
          <div className="mt-6 flex flex-wrap gap-2.5">
            {stack.map((tag) => (
              <Chip key={tag}>{tag}</Chip>
            ))}
          </div>
          <div className="mt-auto flex flex-col gap-3 pt-8">
            <Link
              href="/work/zeva-referral"
              className="inline-flex items-center gap-2 font-mono text-sm font-medium text-moss transition hover:gap-3 focus-ring"
            >
              Read the full case study <span aria-hidden="true">→</span>
            </Link>
            <Link
              href="/work/zeva-vision"
              className="inline-flex items-center gap-2 font-mono text-sm text-muted transition hover:text-moss focus-ring"
            >
              See also: on-device computer vision <span aria-hidden="true">→</span>
            </Link>
          </div>
        </div>
        <div className="section-shell p-6 sm:p-8">
          <SystemFlowDiagram />
        </div>
      </div>
    </section>
  );
}

function SystemFlowDiagram() {
  const nodeW = 196;
  const nodeH = 74;

  return (
    <svg
      viewBox="0 0 680 320"
      className="h-auto w-full"
      role="img"
      aria-label="System flow: the Angular web and Flutter mobile clients both call the Django backend, which persists referral and reward state to PostgreSQL."
    >
      <title>ZEVA referral engine system flow</title>
      <defs>
        <marker id="flow-arrow" markerWidth="9" markerHeight="9" refX="6.5" refY="3" orient="auto">
          <path d="M0 0 L6 3 L0 6 Z" className="fill-moss" />
        </marker>
      </defs>

      <g fill="none" strokeWidth="1.75" className="stroke-line">
        <path d="M212 69 C 244 69, 244 152, 268 152" markerEnd="url(#flow-arrow)" />
        <path d="M212 251 C 244 251, 244 168, 268 168" markerEnd="url(#flow-arrow)" />
        <path d="M464 160 H 498" markerEnd="url(#flow-arrow)" />
      </g>

      {nodes.map((node) => (
        <g key={node.label}>
          <rect
            x={node.x}
            y={node.y}
            width={nodeW}
            height={nodeH}
            rx="16"
            strokeWidth="1.5"
            className={node.accent ? "fill-surfaceStrong stroke-moss" : "fill-surface stroke-line"}
          />
          <text
            x={node.x + 20}
            y={node.y + 32}
            className="font-mono fill-moss"
            fontSize="14"
            fontWeight="600"
          >
            {node.label}
          </text>
          <text
            x={node.x + 20}
            y={node.y + 52}
            className="font-sans fill-text"
            fontSize="12.5"
            opacity="0.66"
          >
            {node.sub}
          </text>
        </g>
      ))}
    </svg>
  );
}
