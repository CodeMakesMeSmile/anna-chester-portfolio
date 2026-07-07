/**
 * Case studies rendered at /work/[slug].
 *
 * Content is deliberately typed TS rather than MDX: each study is highly
 * structured (facts, flow, skills) with only a short prose lede, so a schema is
 * cleaner and fully type-checked. All copy is public-safe — employer work is
 * framed under the ZEVA / HAIL product names with no internal metrics, repo
 * names, or paths. Only the personally-owned Banu / La Vianue build links out.
 */

export type CaseStudyFact = { label: string; value: string };
export type CaseStudyFlowStep = { label: string; detail: string };
export type CaseStudySkill = { name: string; evidence: string };
export type CaseStudyLink = { label: string; href: string };

export type CaseStudy = {
  slug: string;
  title: string;
  kicker: string;
  role: string;
  /** One-line summary used on cards and as the meta description. */
  summary: string;
  /** Short first-person lede shown at the top of the case study. */
  intro: string;
  problem: string;
  /** What Anna personally owned. */
  owned: string;
  hardParts: string[];
  result: string;
  stack: string[];
  facts: CaseStudyFact[];
  /** The system-flow, tier by tier. */
  flow: CaseStudyFlowStep[];
  skills: CaseStudySkill[];
  links: CaseStudyLink[];
  /** The flagship study, surfaced first. */
  featured?: boolean;
};

export const caseStudies: CaseStudy[] = [
  {
    slug: "zeva-referral",
    title: "ZEVA referral & promotions engine",
    kicker: "Cross-platform · flagship",
    role: "Full-stack developer",
    summary:
      "One referral & promotions system spanning Django, Angular, and Flutter — one feature, three tiers of the stack.",
    intro:
      "I built one referral system that lives in three places at once — the Django backend that issues rewards, the Angular web flow that manages them, and the Flutter app that redeems them. It is the cleanest proof of range I have: a single feature that had to be right across the whole stack.",
    problem:
      "A referral and promotions program only works if every tier agrees. Rewards have to be issued on a cycle, acquisition has to survive an app install, and redemption has to be tamper-proof — across web and mobile at the same time.",
    owned:
      "Designed and shipped the feature end to end: cycle-based reward issuance in Django, referral and promotion management in Angular, and deep-link acquisition plus in-app redemption in Flutter, all over one shared PostgreSQL model.",
    hardParts: [
      "Keeping reward state consistent across backend, web, and mobile without drift.",
      "Making acquisition survive the gap between a shared link and a fresh app install, using deep links.",
      "Signing promo redemption so it can't be replayed or forged."
    ],
    result:
      "Shipped a referral & promotions engine that behaves identically across web and mobile, issuing and redeeming rewards on a live product.",
    stack: ["Django", "Angular", "Flutter", "PostgreSQL", "Deep links", "Signed redemption"],
    facts: [
      { label: "Platforms", value: "Web + mobile" },
      { label: "Backend", value: "Django + PostgreSQL" },
      { label: "Web", value: "Angular" },
      { label: "Mobile", value: "Flutter" }
    ],
    flow: [
      {
        label: "Django backend",
        detail: "Issues cycle-based rewards and validates signed redemptions."
      },
      { label: "PostgreSQL", detail: "Single source of truth for referral and reward state." },
      { label: "Angular web", detail: "Referral dashboard and promotion management flows." },
      { label: "Flutter mobile", detail: "Deep-link acquisition and in-app redemption." }
    ],
    skills: [
      {
        name: "Cross-platform feature design",
        evidence: "One feature designed to behave identically on web and mobile."
      },
      {
        name: "API + data modeling",
        evidence: "Modeled the reward lifecycle so every tier reads the same truth."
      },
      {
        name: "Secure redemption",
        evidence: "Signed promo redemption to prevent replay and forgery."
      }
    ],
    links: [],
    featured: true
  },
  {
    slug: "hail",
    title: "HAIL Admin",
    kicker: "Ownership · operations console",
    role: "Sole frontend engineer",
    summary:
      "Sole frontend engineer: a blank repository to a production operations console on a reusable foundation.",
    intro:
      "I took an operations console from an empty repository to production as the sole frontend engineer. It is the ownership story that range alone doesn't tell — product, design, and engineering decisions all ran through me.",
    problem:
      "Fleet operators needed a real console to run daily operations — vehicles, reservations, users, and the actions around them — not a placeholder dashboard.",
    owned:
      "Built the console frontend from a blank repo on a reusable foundation, working closely with product managers and designers and carrying the frontend decisions across departments.",
    hardParts: [
      "Turning real operational workflows into clear admin flows under a short timeline.",
      "Moving fast without making the console brittle or confusing.",
      "Carrying product, design, and engineering decisions as the sole frontend owner."
    ],
    result: "Delivered a production operations console now used to run live fleet operations.",
    stack: ["Angular", "TypeScript", "Operational UX", "Real-time telemetry", "Theming"],
    facts: [
      { label: "Timeline", value: "~1.5 months" },
      { label: "Ownership", value: "Sole frontend" },
      { label: "Core flows", value: "Vehicles, reservations, users" },
      { label: "Outcome", value: "Live operations" }
    ],
    flow: [
      { label: "Operators", detail: "Built around the people running day-to-day operations." },
      { label: "Vehicles", detail: "Vehicle management as a core operational flow." },
      { label: "Reservations", detail: "Reservation handling turned into a usable admin path." },
      { label: "Users", detail: "User management built into the operational system." },
      { label: "Release", detail: "Carried the console through to production." }
    ],
    skills: [
      { name: "Sole frontend delivery", evidence: "Owned the console frontend from blank slate to release." },
      { name: "Workflow modeling", evidence: "Turned operations into clear administrative paths." },
      {
        name: "Cross-functional communication",
        evidence: "Worked closely with product managers and designers throughout."
      }
    ],
    links: []
  },
  {
    slug: "banu",
    title: "Banu Beauty / La Vianue",
    kicker: "Live · end-to-end commerce",
    role: "Solo full-stack developer",
    summary:
      "A live commerce platform built from product data to checkout, orders, and production deployment.",
    intro:
      "Banu Beauty needed a real commerce system, not just a polished storefront. I built the customer flow, the Stripe payment path, the PostgreSQL data layer, and the deployment as one connected product — and it's live.",
    problem:
      "The store had to feel trustworthy to customers while behaving like a complete system behind the scenes: product data, cart, checkout, orders, and launch ownership.",
    owned:
      "Built the customer experience, wired the Stripe payment flow, structured the Neon-hosted PostgreSQL layer, and owned the Vercel deployment.",
    hardParts: [
      "Keeping the storefront calm and conversion-friendly on smaller screens.",
      "Making product, cart, payment, and order data behave like one connected flow.",
      "Owning release quality from implementation through production deployment."
    ],
    result:
      "Launched a live commerce experience for a real business, with a full checkout path and production deployment.",
    stack: ["Next.js", "TypeScript", "PostgreSQL", "Neon", "Stripe", "Vercel"],
    facts: [
      { label: "Built", value: "End to end" },
      { label: "Payments", value: "Stripe checkout" },
      { label: "Data", value: "Neon + PostgreSQL" },
      { label: "Release", value: "Vercel" }
    ],
    flow: [
      { label: "Browse", detail: "Responsive storefront designed to feel clear and trustworthy." },
      { label: "Product data", detail: "Catalog and order data structured on a real relational layer." },
      { label: "Cart", detail: "Product selection, state, and checkout connected into one path." },
      { label: "Stripe payment", detail: "The live payment flow for customer purchases." },
      { label: "Orders", detail: "Paid transactions mapped into the order system." },
      { label: "Deploy", detail: "Release ownership and production deployment." }
    ],
    skills: [
      { name: "Full-stack development", evidence: "Owned the customer path and the system underneath it." },
      { name: "Data modeling", evidence: "Designed the relational layer for catalog and order behavior." },
      { name: "Release readiness", evidence: "Handled deployment and production setup, not just implementation." }
    ],
    links: [{ label: "Live site", href: "https://lavianue.annachester.dev" }]
  },
  {
    slug: "zeva-vision",
    title: "On-device computer vision",
    kicker: "Mobile · on-device ML",
    role: "Mobile developer",
    summary:
      "Real-time, on-device computer vision on mobile — face detection for identity verification and object detection for photo validation.",
    intro:
      "Not many full-stack developers ship computer vision. On mobile, I used Google ML Kit for real-time face detection to support identity verification, and object detection plus image labeling to validate user photos — all on-device.",
    problem:
      "Identity and photo checks had to happen in real time, on the device, without sending raw images to a server for every frame.",
    owned:
      "Integrated Google ML Kit on-device: real-time face detection for identity verification, and object detection plus image labeling to check that submitted photos matched what was expected.",
    hardParts: [
      "Running detection in real time on-device without degrading the experience.",
      "Turning noisy detection results into a clear pass or fail for users.",
      "Keeping image handling on-device for privacy."
    ],
    result: "Shipped on-device vision features that verify identity and validate photos in real time.",
    stack: ["Flutter", "Google ML Kit", "Face detection", "Object detection", "Image labeling"],
    facts: [
      { label: "Runtime", value: "On-device" },
      { label: "Verification", value: "Real-time face detection" },
      { label: "Validation", value: "Object detection + labeling" },
      { label: "Platform", value: "Mobile" }
    ],
    flow: [
      { label: "Capture", detail: "Camera input handled on the device." },
      { label: "Face detection", detail: "Real-time detection to support identity verification." },
      { label: "Object + labeling", detail: "Detection and labeling to validate submitted photos." },
      { label: "Result", detail: "A clear pass or fail, without leaving the device." }
    ],
    skills: [
      { name: "On-device ML integration", evidence: "Wired Google ML Kit into a real mobile product." },
      { name: "Real-time mobile", evidence: "Kept detection responsive in the capture loop." },
      { name: "Privacy-aware design", evidence: "Kept image processing on-device by default." }
    ],
    links: []
  }
];

export const caseStudySlugs = caseStudies.map((study) => study.slug);

export function getCaseStudy(slug: string): CaseStudy | undefined {
  return caseStudies.find((study) => study.slug === slug);
}
