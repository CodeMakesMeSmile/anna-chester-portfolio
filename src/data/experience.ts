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
    role: "Senior Full-Stack Developer",
    company: "ZEVA Global",
    timeframe: "2024 – Present",
    summary:
      "Production web and mobile software, promoted from co-op to senior. Built a cross-platform referral & promotions engine, an internal operations console, on-device computer vision, and live maps, analytics, and payment-enabled signup.",
    tags: ["Angular", "Flutter", "Django", "PostgreSQL", "ML Kit", "Payments"]
  },
  {
    role: "Software Engineer, Co-op",
    company: "DBRS Morningstar",
    timeframe: "2023",
    summary:
      "Full-stack web development in an enterprise agile environment with Angular, Node.js, .NET, and MySQL. Led the SonarQube rollout by standing up CI/CD pipelines in Jenkins and TeamCity, so analysis ran on every commit and pull request.",
    tags: ["Angular", ".NET", "Node.js", "MySQL", "Jenkins", "TeamCity", "SonarQube", "CI/CD"]
  },
  {
    role: "Teaching Assistant & Technical Mentor",
    company: "University of Toronto",
    timeframe: "2022 – Present",
    summary:
      "Supported 1,000+ students across 12+ course offerings, reviewing builds, debugging, checking deployments, and helping projects become working software.",
    tags: ["Teaching", "Debugging", "Testing", "Deployment support", "Code review"]
  }
];
