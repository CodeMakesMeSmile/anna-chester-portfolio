export type ExperienceItem = {
  role: string;
  company: string;
  timeframe: string;
  summary: string;
  tags: string[];
};

/**
 * Experience timeline. Employer work is framed under the public product name
 * (ZEVA Global); DBRS Morningstar and the University of Toronto are public.
 */
export const experience: ExperienceItem[] = [
  {
    role: "Full-Stack Software Developer",
    company: "ZEVA Global",
    timeframe: "Co-op → Senior track",
    summary:
      "Production web and mobile software across referral & promotions, driver and fleet experiences, maps, analytics, translations, and payment-enabled signup — promoted from co-op to a senior track while shipping.",
    tags: ["Angular", "Flutter", "Django", "PostgreSQL", "Payments", "Translations"]
  },
  {
    role: "Software Engineering Co-op",
    company: "DBRS Morningstar",
    timeframe: "2023",
    summary:
      "Contributed in an enterprise engineering environment where maintainability, code quality, and team standards mattered; supported SonarQube integration in core pipelines.",
    tags: ["Enterprise software", "Internal tools", "SonarQube", "CI/CD", "Code quality"]
  },
  {
    role: "Teaching Assistant & Technical Mentor",
    company: "University of Toronto",
    timeframe: "2022 – Present",
    summary:
      "Supported 1,000+ students across 12+ course offerings — reviewing builds, debugging, checking deployments, and helping projects become working software.",
    tags: ["Teaching", "Debugging", "Testing", "Deployment support", "Code review"]
  }
];
