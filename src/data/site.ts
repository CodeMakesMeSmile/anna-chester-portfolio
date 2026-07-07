export type NavItem = {
  label: string;
  /** In-page anchor (`#work`) on the home page, or a route (`/work/...`). */
  href: string;
};

/**
 * Site-level identity and shared copy. Single source of truth for the wordmark,
 * navigation, contact details, and metadata so any change is a one-line edit.
 *
 * Note: email defaults to the address used in the most recent portfolio content
 * (annachester02@gmail.com); confirm before launch.
 */
export const site = {
  name: "Anna Chester",
  role: "Full-Stack Software Engineer",
  domain: "annachester.dev",
  url: "https://annachester.dev",
  location: "Toronto, Canada",
  email: "annachester02@gmail.com",
  linkedin: "https://www.linkedin.com/in/anna-chester?originalSubdomain=ca",
  github: "https://github.com/CodeMakesMeSmile",
  resume: "/Anna_Chester_Resume.pdf",
  liveDemo: { url: "https://banubeauty.ca", label: "banubeauty.ca" },
  nav: [
    { label: "Work", href: "#work" },
    { label: "Skills", href: "#skills" },
    { label: "Experience", href: "#experience" },
    { label: "Contact", href: "#contact" }
  ] satisfies NavItem[],
  contact: {
    heading: "Have something thoughtful to build?",
    body: "Open to full-stack engineering roles and freelance projects where strong implementation, clear communication, and ownership matter. Building something that needs care from idea to deployment? Send me a note.",
    tags: ["Full-stack roles", "Freelance software", "Implementation ownership"]
  }
};
