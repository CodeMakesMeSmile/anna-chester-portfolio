export type SkillConnection = {
  target: string;
  label: string;
  evidence: string;
};

export type SkillEvidence = {
  skill: string;
  category: string;
  whyItMatters: string;
  connections: SkillConnection[];
};

/**
 * Skills mapped to the real systems that prove them. This is the data behind
 * the interactive root-map. Every connection names a public-safe project or
 * environment (ZEVA Global, Banu Beauty, HAIL Admin, UofT, DBRS).
 */
export const skillEvidence: SkillEvidence[] = [
  {
    skill: "PostgreSQL",
    category: "Data",
    whyItMatters:
      "A product that lasts needs a data layer that can carry real behavior after launch.",
    connections: [
      {
        target: "Banu Beauty",
        label: "Product and order data",
        evidence: "Used Neon-hosted PostgreSQL for the commerce layer and order handling."
      },
      {
        target: "ZEVA Global",
        label: "Production-backed feature work",
        evidence: "Worked across PostgreSQL-backed product features inside ZEVA's web and mobile software."
      }
    ]
  },
  {
    skill: "Payments",
    category: "Transactions",
    whyItMatters:
      "Transactions are trust points. They need to be clear for users and reliable in the system.",
    connections: [
      {
        target: "Banu Beauty",
        label: "Stripe checkout",
        evidence: "Implemented the live payment path for customer purchases."
      },
      {
        target: "ZEVA Global",
        label: "Self-serve signup",
        evidence: "Worked on payment-enabled signup flows in a production product environment."
      }
    ]
  },
  {
    skill: "Angular",
    category: "Frontend",
    whyItMatters:
      "Typed frontend architecture matters once product flows get denser and longer-lived.",
    connections: [
      {
        target: "ZEVA Global",
        label: "Production web",
        evidence: "Built features for ZEVA's Angular web experience."
      },
      {
        target: "University of Toronto",
        label: "Project support",
        evidence: "Supported students building Angular apps across multiple course offerings."
      }
    ]
  },
  {
    skill: "Flutter",
    category: "Mobile",
    whyItMatters:
      "Mobile delivery changes how product decisions get made because clarity and speed matter even more.",
    connections: [
      {
        target: "ZEVA Global",
        label: "Production mobile",
        evidence: "Contributed to Flutter feature work for ZEVA's mobile product."
      }
    ]
  },
  {
    skill: "Deployment",
    category: "Shipping",
    whyItMatters: "A feature is not finished when it looks good locally. It has to survive release.",
    connections: [
      {
        target: "Banu Beauty",
        label: "Commerce release",
        evidence: "Owned deployment for the commerce build."
      },
      {
        target: "HAIL Admin",
        label: "Portal launch",
        evidence: "Took the admin platform from blank repo to a live release."
      },
      {
        target: "University of Toronto",
        label: "Student app support",
        evidence: "Helped students move from local builds to working deployed apps."
      }
    ]
  },
  {
    skill: "Translation automation",
    category: "Automation",
    whyItMatters:
      "Automation is useful when it reduces repetitive product work without lowering quality.",
    connections: [
      {
        target: "ZEVA Global",
        label: "Transloco + Hugging Face",
        evidence: "Built translation support with Transloco, Hugging Face, and custom scripts."
      }
    ]
  },
  {
    skill: "Google Maps API + ECharts",
    category: "Integrations",
    whyItMatters:
      "Integrations matter when the product needs live location data and readable analytics.",
    connections: [
      {
        target: "ZEVA Global",
        label: "Maps + analytics",
        evidence: "Used in confirmed location-aware and analytics-heavy product features."
      }
    ]
  },
  {
    skill: "Code quality",
    category: "Review",
    whyItMatters:
      "Maintainability becomes visible when you work inside established systems or review unfamiliar code calmly.",
    connections: [
      {
        target: "DBRS Morningstar",
        label: "Enterprise standards",
        evidence: "Worked where maintainability, SonarQube, and CI/CD expectations mattered."
      },
      {
        target: "University of Toronto",
        label: "Implementation review",
        evidence: "Built strong habits around code review, debugging, and practical quality checks."
      }
    ]
  }
];
