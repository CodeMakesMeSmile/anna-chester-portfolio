export type NavItem = {
  label: string;
  href: `#${string}`;
};

export type CallToAction = {
  label: string;
  href: `#${string}` | string;
  variant: "primary" | "secondary";
  external?: boolean;
};

export type FocusItem = {
  label: string;
  title: string;
  body: string;
};

export type Metric = {
  value: string;
  label: string;
};

export type AboutCard = {
  title: string;
  body: string;
};

export type ExperienceItem = {
  role: string;
  company: string;
  timeframe: string;
  category: string;
  summary: string;
  bullets: string[];
  tags: string[];
};

export type SkillGroup = {
  title: string;
  description: string;
  items: string[];
};

export type ProjectLink = {
  label: string;
  href: string;
};

export type WorkItem = {
  name: string;
  category: string;
  problem: string;
  technicalScope: string;
  impact: string;
  stack: string[];
  links?: ProjectLink[];
};

const heroCtas: CallToAction[] = [
  { label: "View Work", href: "#work", variant: "primary" },
  { label: "See Experience", href: "#experience", variant: "secondary" },
  { label: "Contact", href: "#contact", variant: "secondary" }
];

export const profile = {
  name: "Anna Chester",
  title: "Full Stack Software Engineer",
  domain: "annachester.dev",
  linkedin: "https://www.linkedin.com/in/anna-chester?originalSubdomain=ca",
  email: "anna@primestandard.ca",
  location: "Canada",
  navItems: [
    { label: "Work", href: "#work" },
    { label: "Skills", href: "#skills" },
    { label: "Experience", href: "#experience" },
    { label: "Contact", href: "#contact" }
  ] satisfies NavItem[],
  hero: {
    eyebrow: "Full-stack software engineer",
    headline: "Full-stack engineer building the systems teams depend on.",
    intro:
      "From business-critical admin workflows to cross-platform mobile features, the work spans reliable software across frontend, backend, database, and release surfaces.",
    supportingText:
      "Recent implementation has included internal enterprise applications, multilingual web and mobile experiences, referral and payment flows, and technical mentorship for 1,000+ students. Currently completing a final semester while working full time, freelancing, and continuing to support students as a University of Toronto teaching assistant.",
    ctas: heroCtas,
    focusLabel: "Current focus",
    focusTitle: "Production full-stack delivery across web, mobile, and internal systems",
    focusItems: [
      {
        label: "Current role",
        title: "Full Stack Software Developer at Temerity Analytics",
        body:
          "Building web and mobile features across frontend, backend, data, payments, localization, and business workflow tools."
      },
      {
        label: "How the work gets shaped",
        title: "From ambiguous requirement to shipped solution",
        body:
          "Strong at breaking down unclear problems, designing practical implementation paths, and carrying work through release."
      },
      {
        label: "What strengthens the work",
        title: "Mentorship, ownership, and technical judgment",
        body:
          "Experience coaching students, supporting teammates, reviewing tradeoffs, and building solutions that stay maintainable after launch."
      }
    ] satisfies FocusItem[]
  },
  metrics: [
    { value: "1,000+", label: "students supported through UofT teaching assistant roles" },
    { value: "12+", label: "course offerings supported across software, debugging, and project work" },
    {
      value: "Web + Mobile + Backend",
      label: "Experience spanning Angular, React, Django, PostgreSQL, payments, and internal tools"
    }
  ] satisfies Metric[],
  about: {
    eyebrow: "About",
    heading: "Experienced beyond the classroom, with the range to build across the stack.",
    paragraphs: [
      "A full-stack engineer completing a final semester while working full time, freelancing, and continuing as a University of Toronto teaching assistant. Experience spans production web applications, mobile development, backend systems, database design, payment flows, localization, admin tooling, and internal business workflows.",
      "At Temerity Analytics, recent work has included admin pages supporting integral business processes, full translation support across web and mobile applications, referral programs built from database to frontend, and payment-related implementation involving Stripe, Apple, and Google Play.",
      "Before that, a software engineering co-op at DBRS Morningstar involved internal application features and SonarQube integration within core pipelines. Alongside industry work, teaching assistant roles since 2022 have supported more than 1,000 students across 12+ University of Toronto course offerings through debugging, project guidance, and technical explanation."
    ],
    pills: ["Final semester", "Working full time", "Freelance delivery", "UofT TA since 2022"],
    cards: [
      {
        title: "Cross-platform engineering",
        body:
          "Experience across web, iOS, Android, backend services, databases, payments, and internal tools."
      },
      {
        title: "Business-critical workflows",
        body:
          "Experience building admin and operational systems where reliability, clarity, and maintainability matter."
      },
      {
        title: "Technical mentorship",
        body:
          "Trusted to coach students through debugging, architecture, implementation, deployment, and communication."
      }
    ] satisfies AboutCard[]
  },
  experienceSection: {
    eyebrow: "Experience",
    heading: "Engineering experience across production systems, enterprise tools, and technical education.",
    description:
      "A focused view of the roles, responsibilities, and technical ownership behind this engineering range."
  },
  experience: [
    {
      role: "Full Stack Software Developer",
      company: "Temerity Analytics",
      timeframe: "Current role",
      category: "Web, mobile, payments, internal systems",
      summary:
        "Building and shipping web and mobile features across frontend, backend, database, payments, localization, and operational tooling.",
      bullets: [
        "Built full admin pages supporting integral workflows for large business operations.",
        "Implemented translation support across web and mobile applications.",
        "Developed referral program functionality from the ground up, including database design, backend logic, frontend implementation, and mobile integration.",
        "Worked with Stripe, Apple native payments, and Google Play Store flows across web and mobile surfaces.",
        "Translated ambiguous business requirements into maintainable technical solutions.",
        "Consistently strengthened implementation quality, communication, and delivery readiness beyond assigned scope."
      ],
      tags: [
        "Angular",
        "React",
        "Django",
        "PostgreSQL",
        "Mobile",
        "Stripe",
        "Apple Store",
        "Google Play",
        "Admin systems",
        "Localization",
        "Referral systems"
      ]
    },
    {
      role: "Software Engineering Co-op",
      company: "DBRS Morningstar",
      timeframe: "2023",
      category: "Enterprise software",
      summary:
        "Contributed to internal engineering systems and enterprise application development in a professional software environment.",
      bullets: [
        "Integrated new features into an internal application used by business teams.",
        "Supported SonarQube integration within core pipelines to improve code quality and maintainability.",
        "Worked within existing enterprise systems, balancing implementation needs with team standards and long-term reliability."
      ],
      tags: [
        "Internal tools",
        "Enterprise software",
        "SonarQube",
        "CI/CD",
        "Code quality",
        "Software engineering"
      ]
    },
    {
      role: "Teaching Assistant and Technical Mentor",
      company: "University of Toronto",
      timeframe: "2022 — Present",
      category: "1,000+ students supported",
      summary:
        "Supported more than 1,000 students across 12+ course offerings, moving students from confusion to working software.",
      bullets: [
        "Guided students through debugging, implementation planning, technical concepts, and project development.",
        "Supported students as they built, tested, and deployed projects across different levels of experience.",
        "Strengthened communication, mentoring, and technical explanation skills through repeated high-volume teaching work.",
        "Built a practical coaching style focused on clarity, confidence, and problem-solving habits."
      ],
      tags: [
        "Teaching",
        "Mentorship",
        "Debugging",
        "Student support",
        "Technical communication",
        "Project guidance",
        "Deployment support"
      ]
    },
    {
      role: "Freelance Full Stack Developer",
      company: "Independent work",
      timeframe: "Ongoing",
      category: "Client software",
      summary:
        "Building custom software for clients with attention to clear interfaces, clean implementation, and practical business needs.",
      bullets: [
        "Delivered custom web experiences from planning through implementation.",
        "Built ecommerce and preorder functionality with payment-aware flows.",
        "Communicated directly with clients to clarify requirements, make tradeoffs, and ship usable solutions."
      ],
      tags: [
        "Client work",
        "Full-stack development",
        "Ecommerce",
        "UX",
        "Payments",
        "Requirements",
        "Custom software"
      ]
    }
  ] satisfies ExperienceItem[],
  skillsSection: {
    eyebrow: "Skills",
    heading: "A full-stack foundation with real production depth.",
    description:
      "Grouped by the systems behind the work: user interfaces, backend logic, data models, mobile workflows, payments, and the practices that keep software reliable."
  },
  skillGroups: [
    {
      title: "Frontend",
      description:
        "Building responsive, maintainable interfaces across web applications, admin tools, ecommerce flows, and internal systems.",
      items: ["Angular", "React", "TypeScript", "JavaScript", "Responsive UI", "Accessibility", "Admin interfaces"]
    },
    {
      title: "Backend",
      description:
        "Designing application logic, APIs, service integrations, and backend workflows that support real business requirements.",
      items: ["Django", "API development", "Application architecture", "Service integration", "Authentication", "Business logic"]
    },
    {
      title: "Database and Data",
      description:
        "Modeling data for features that need to stay reliable as they grow, including referral systems, admin workflows, and operational tools.",
      items: ["PostgreSQL", "Database design", "Data modeling", "Query design", "Relational systems"]
    },
    {
      title: "Mobile and Cross-Platform",
      description:
        "Contributing across iOS, Android, and cross-platform mobile workflows, including localization, payment flows, and app-store-related implementation.",
      items: ["Apple/iOS", "Android", "Dart", "Android Studio", "Java", "Mobile UI", "Native payments", "App store workflows"]
    },
    {
      title: "Payments and Commerce",
      description:
        "Building flows involving purchases, referrals, checkout behavior, and payment-related integrations across web and mobile.",
      items: ["Stripe", "Apple payments", "Google Play", "Referral programs", "Ecommerce", "Preorder flows"]
    },
    {
      title: "Engineering Practices",
      description:
        "Strong technical work supported by communication, testing discipline, debugging, mentorship, and release-aware implementation.",
      items: ["Debugging", "Testing", "Code quality", "SonarQube", "CI/CD", "Mentoring", "Technical communication"]
    }
  ] satisfies SkillGroup[],
  workSection: {
    eyebrow: "Selected work",
    heading: "Selected systems built across business workflows, mobile experiences, payments, and client work.",
    description:
      "These examples highlight implementation ownership, technical scope, and the problems the work was designed to solve."
  },
  workItems: [
    {
      name: "ZEVA / Temerity Application Work",
      category: "Web, mobile, and operational systems",
      problem:
        "Support complex web and mobile application needs across business workflows, user-facing features, localization, and release-ready implementation.",
      technicalScope:
        "Built and maintained features across frontend, backend, database, and mobile surfaces, including admin pages, translation support, referral functionality, and payment-related flows.",
      impact:
        "Moved high-value features from unclear requirements to shipped implementation while improving reliability, maintainability, and cross-team communication.",
      stack: ["Angular", "Django", "PostgreSQL", "Mobile", "Admin systems", "Localization", "Referral programs", "Payments"],
      links: [{ label: "ZEVA", href: "https://zevaglobal.com/" }]
    },
    {
      name: "Referral Program System",
      category: "Ground-up full-stack feature",
      problem:
        "Create a referral flow that worked across web and mobile while supporting payment and account-related business logic.",
      technicalScope:
        "Built the system from the ground up across database design, backend implementation, frontend UI, and mobile integration. Worked with Stripe, Apple, and Google Play payment surfaces.",
      impact:
        "Delivered a multi-surface feature with real business value, connecting user experience, backend rules, data structure, and payment platform requirements.",
      stack: ["Database design", "Backend", "Frontend", "Mobile", "Stripe", "Apple", "Google Play", "Referral systems"]
    },
    {
      name: "Admin Workflow Tools",
      category: "Business-critical internal software",
      problem:
        "Give business teams reliable admin pages for managing integral workflows at scale.",
      technicalScope:
        "Implemented full admin interfaces connected to backend logic and business data, with attention to usability, reliability, and maintainable structure.",
      impact:
        "Improved internal operational workflows by turning complex business needs into clear, usable software.",
      stack: ["Admin systems", "Internal tools", "Business workflows", "Full-stack development", "Operational software"]
    },
    {
      name: "Translation and Localization Work",
      category: "Cross-platform implementation",
      problem:
        "Support multilingual experiences across both mobile and web applications.",
      technicalScope:
        "Integrated translation functionality across multiple application surfaces, ensuring content could be managed and displayed consistently across platforms.",
      impact:
        "Expanded application accessibility and usability for broader audiences while maintaining consistency across web and mobile experiences.",
      stack: ["Localization", "Internationalization", "Web", "Mobile", "Cross-platform implementation"]
    },
    {
      name: "DBRS Morningstar Internal Application Work",
      category: "Enterprise software and code quality",
      problem:
        "Support enterprise internal application development and improve code quality tooling across engineering pipelines.",
      technicalScope:
        "Contributed new features to internal software and supported SonarQube integration within core pipelines.",
      impact:
        "Improved development workflow quality and supported maintainability within an enterprise engineering environment.",
      stack: ["Enterprise software", "Internal applications", "SonarQube", "CI/CD", "Code quality"]
    },
    {
      name: "Teaching and Mentorship",
      category: "1,000+ students supported",
      problem:
        "Guide students from blocked, uncertain, or confused to capable of building and debugging working software.",
      technicalScope:
        "Supported 1,000+ students across 12+ UofT course offerings through debugging support, concept explanation, project guidance, and deployment support.",
      impact:
        "Developed a strong coaching style grounded in technical clarity, patience, communication, and practical problem solving.",
      stack: ["Mentorship", "Teaching", "Debugging", "Technical communication", "Project support", "Deployment support"]
    },
    {
      name: "La Vianue",
      category: "Custom ecommerce preorder site",
      problem:
        "Create a storefront that feels polished and trustworthy while supporting a focused preorder conversion flow.",
      technicalScope:
        "Built the experience end to end, shaping the purchase journey, content hierarchy, frontend implementation, database structure, and payment-aware flow.",
      impact:
        "Delivered a conversion-aware commerce experience designed around clarity, confidence, and a limited launch.",
      stack: ["Next.js", "Tailwind CSS", "Stripe", "PostgreSQL", "Prisma", "Ecommerce", "Preorder flow"],
      links: [{ label: "Live site", href: "https://lavianue.annachester.dev" }]
    }
  ] satisfies WorkItem[],
  contact: {
    heading: "Let’s build something reliable.",
    body:
      "Open to full-stack engineering opportunities, freelance projects, and technical roles where strong implementation, clear communication, and ownership matter.",
    tags: ["Full-stack roles", "Freelance software", "Implementation ownership"]
  }
};
