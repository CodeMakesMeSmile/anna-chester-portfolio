import { Fallback2D } from "@/components/atmosphere/Fallback2D";
import { Contact } from "@/components/sections/Contact";
import { ExperienceTimeline } from "@/components/sections/ExperienceTimeline";
import { FlagshipZeva } from "@/components/sections/FlagshipZeva";
import { HailOwnership } from "@/components/sections/HailOwnership";
import { Hero } from "@/components/sections/Hero";
import { SkillsRootMap } from "@/components/sections/SkillsRootMap";
import { Teaching } from "@/components/sections/Teaching";
import { WorkRail } from "@/components/sections/WorkRail";
import { Container } from "@/components/ui/Container";
import { Nav } from "@/components/ui/Nav";
import { profile } from "@/data/profile";

export default function Home() {
  return (
    <>
      <a href="#content" className="skip-link">
        Skip to content
      </a>
      <Fallback2D />
      <Container className="flex min-h-screen flex-col pb-16 pt-4">
        <Nav name={profile.name} navItems={profile.navItems} />
        <main id="content" className="flex flex-col gap-24 sm:gap-32">
          <Hero />
          <WorkRail />
          <FlagshipZeva />
          <HailOwnership />
          <SkillsRootMap groups={profile.skillGroups} />
          <Teaching />
          <ExperienceTimeline items={profile.experience} />
          <Contact
            heading="Have something thoughtful to build?"
            body={profile.contact.body}
            email={profile.email}
            linkedin={profile.linkedin}
            tags={profile.contact.tags}
          />
        </main>
        <SiteFooter domain={profile.domain} />
      </Container>
    </>
  );
}

function SiteFooter({ domain }: { domain: string }) {
  return (
    <footer className="mt-20 flex flex-col gap-3 border-t border-line/60 pt-8 text-sm text-muted sm:flex-row sm:items-center sm:justify-between">
      <p>© {new Date().getFullYear()} Anna Chester. Built with Next.js and Tailwind CSS.</p>
      <a href={`https://${domain}`} className="font-mono transition hover:text-moss focus-ring">
        {domain}
      </a>
    </footer>
  );
}
