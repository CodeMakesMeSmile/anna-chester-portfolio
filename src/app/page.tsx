import { BotanicalCircuit } from "@/components/BotanicalCircuit";
import { SiteHeader } from "@/components/SiteHeader";
import { profile } from "@/data/profile";

export default function Home() {
  return (
    <>
      <a href="#content" className="skip-link">
        Skip to content
      </a>
      <div className="relative min-h-screen overflow-x-clip bg-bg text-text transition-colors duration-300">
        <BotanicalCircuit />
        <div className="page-grid absolute inset-0 opacity-70" aria-hidden="true" />
        <div className="relative mx-auto flex w-full max-w-[90rem] flex-col px-4 pb-12 pt-5 sm:px-6 lg:px-8">
          <SiteHeader name={profile.name} navItems={profile.navItems} />
          <main id="content" className="space-y-3">
            <Hero />
            <MetricsStrip />
            <SectionConnector />
            <AboutSection />
            <SectionConnector />
            <ExperienceSection />
            <SectionConnector />
            <SkillsSection />
            <SectionConnector />
            <WorkSection />
            <SectionConnector />
            <ContactSection />
          </main>
        </div>
      </div>
    </>
  );
}

function Hero() {
  return (
    <section
      id="top"
      className="grid min-h-[72vh] items-center gap-8 py-6 sm:py-10 lg:grid-cols-[1.08fr_0.92fr] lg:gap-12 lg:py-14"
    >
      <div>
        <p className="mb-5 inline-flex min-h-10 items-center rounded-full border border-moss/25 bg-surface/90 px-4 py-2 text-sm font-medium text-moss">
          {profile.hero.eyebrow}
        </p>
        <h1 className="max-w-4xl font-display text-[clamp(3.15rem,8vw,6rem)] font-semibold leading-[0.94] tracking-[-0.07em]">
          {profile.hero.headline}
        </h1>
        <p className="mt-6 max-w-3xl text-[clamp(1.02rem,2.1vw,1.2rem)] leading-8 text-text/82">
          {profile.hero.intro}
        </p>
        <p className="mt-4 max-w-3xl text-sm leading-7 text-muted sm:text-base">
          {profile.hero.supportingText}
        </p>
        <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
          {profile.hero.ctas.map((cta) => (
            <a
              key={cta.label}
              href={cta.href}
              className={cta.variant === "primary" ? "button-primary" : "button-secondary"}
              target={cta.external ? "_blank" : undefined}
              rel={cta.external ? "noreferrer" : undefined}
            >
              {cta.label}
            </a>
          ))}
        </div>
      </div>
      <div className="section-shell relative overflow-hidden p-6 sm:p-7 lg:p-8">
        <div
          className="absolute inset-x-10 top-0 h-px bg-gradient-to-r from-transparent via-fern/70 to-transparent"
          aria-hidden="true"
        />
        <div className="mb-6 flex items-center justify-between gap-4">
          <div>
            <p className="section-kicker">{profile.hero.focusLabel}</p>
            <h2 className="mt-3 max-w-xl font-display text-2xl font-semibold tracking-tight sm:text-3xl">
              {profile.hero.focusTitle}
            </h2>
          </div>
          <span
            className="h-3.5 w-3.5 shrink-0 rounded-full bg-fern shadow-[0_0_26px_rgb(var(--color-fern)/0.8)]"
            aria-hidden="true"
          />
        </div>
        <div className="relative space-y-5">
          {profile.hero.focusItems.map((item, index) => (
            <article
              key={item.label}
              className="relative rounded-[1.6rem] border border-line/75 bg-bg/52 p-5 backdrop-blur-sm"
            >
              {index < profile.hero.focusItems.length - 1 ? (
                <span
                  className="absolute left-8 top-[calc(100%-0.25rem)] h-6 w-px bg-line/75"
                  aria-hidden="true"
                />
              ) : null}
              <div className="flex gap-4">
                <span className="grid h-8 w-8 shrink-0 place-items-center rounded-full border border-line/75 bg-surfaceStrong/82 font-display text-xs font-semibold text-moss">
                  0{index + 1}
                </span>
                <div>
                  <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-muted">
                    {item.label}
                  </p>
                  <h3 className="mt-2 text-lg font-semibold tracking-tight">{item.title}</h3>
                  <p className="mt-2 text-sm leading-7 text-text/74">{item.body}</p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function MetricsStrip() {
  return (
    <section className="grid gap-4 sm:grid-cols-3" aria-label="Career highlights">
      {profile.metrics.map((metric) => (
        <article key={metric.label} className="section-shell p-5 sm:p-6">
          <p className="font-display text-2xl font-semibold tracking-tight sm:text-3xl">{metric.value}</p>
          <p className="mt-2 max-w-[28ch] text-sm leading-6 text-muted">{metric.label}</p>
        </article>
      ))}
    </section>
  );
}

function AboutSection() {
  return (
    <section id="about" className="py-12 sm:py-16">
      <div className="grid gap-5 lg:grid-cols-[1.08fr_0.92fr]">
        <div className="section-shell p-6 sm:p-8 lg:p-10">
          <p className="section-kicker">{profile.about.eyebrow}</p>
          <h2 className="mt-3 max-w-3xl font-display text-3xl font-semibold tracking-tight sm:text-4xl">
            {profile.about.heading}
          </h2>
          <div className="mt-5 max-w-[72ch] space-y-4 text-base leading-8 text-text/78 sm:text-lg">
            {profile.about.paragraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
          <div className="mt-8 flex flex-wrap gap-3">
            {profile.about.pills.map((pill) => (
              <span key={pill} className="tag">
                {pill}
              </span>
            ))}
          </div>
        </div>
        <div className="grid gap-4">
          {profile.about.cards.map((card) => (
            <article key={card.title} className="section-shell p-5 sm:p-6">
              <div className="mb-4 flex items-center gap-3">
                <span
                  className="h-3 w-3 rounded-full bg-fern shadow-[0_0_16px_rgb(var(--color-fern)/0.6)]"
                  aria-hidden="true"
                />
                <h3 className="font-display text-xl font-semibold tracking-tight">{card.title}</h3>
              </div>
              <p className="text-sm leading-7 text-text/76 sm:text-base">{card.body}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function ExperienceSection() {
  return (
    <section id="experience" className="py-12 sm:py-16">
      <SectionHeading
        eyebrow={profile.experienceSection.eyebrow}
        title={profile.experienceSection.heading}
        description={profile.experienceSection.description}
      />
      <div className="mt-8 grid gap-5 lg:grid-cols-2">
        {profile.experience.map((item) => (
          <article key={`${item.company}-${item.role}`} className="section-shell flex h-full flex-col p-6 sm:p-7">
            <div className="flex flex-wrap items-start justify-between gap-3">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.3em] text-muted">
                  {item.timeframe}
                </p>
                <h3 className="mt-3 font-display text-2xl font-semibold tracking-tight">{item.role}</h3>
                <p className="mt-2 text-sm font-medium text-moss sm:text-base">{item.company}</p>
              </div>
              <span className="rounded-full border border-line/75 bg-surfaceStrong/76 px-3 py-1 text-xs font-medium text-text/76">
                {item.category}
              </span>
            </div>
            <p className="mt-5 text-sm leading-7 text-text/76 sm:text-base">{item.summary}</p>
            <ul className="mt-6 space-y-3">
              {item.bullets.map((bullet) => (
                <li key={bullet} className="flex items-start gap-3 text-sm leading-7 text-text/76 sm:text-base">
                  <span
                    className="mt-2 h-2.5 w-2.5 shrink-0 rounded-full border border-moss/45 bg-fern/60"
                    aria-hidden="true"
                  />
                  <span>{bullet}</span>
                </li>
              ))}
            </ul>
            <div className="mt-6 flex flex-wrap gap-2.5">
              {item.tags.map((tag) => (
                <span key={tag} className="tag">
                  {tag}
                </span>
              ))}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

function SkillsSection() {
  return (
    <section id="skills" className="py-12 sm:py-16">
      <SectionHeading
        eyebrow={profile.skillsSection.eyebrow}
        title={profile.skillsSection.heading}
        description={profile.skillsSection.description}
      />
      <div className="mt-8 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
        {profile.skillGroups.map((group) => (
          <article key={group.title} className="section-shell h-full p-6 sm:p-7">
            <h3 className="font-display text-2xl font-semibold tracking-tight">{group.title}</h3>
            <p className="mt-4 text-sm leading-7 text-text/76 sm:text-base">{group.description}</p>
            <div className="mt-6 flex flex-wrap gap-2.5">
              {group.items.map((item) => (
                <span key={item} className="tag">
                  {item}
                </span>
              ))}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

function WorkSection() {
  return (
    <section id="work" className="py-12 sm:py-16">
      <SectionHeading
        eyebrow={profile.workSection.eyebrow}
        title={profile.workSection.heading}
        description={profile.workSection.description}
      />
      <div className="mt-8 grid gap-5 md:grid-cols-2">
        {profile.workItems.map((item) => (
          <article
            key={item.name}
            className="section-shell group flex h-full flex-col p-6 transition duration-300 motion-safe:hover:-translate-y-1 motion-safe:hover:shadow-glow focus-within:border-moss/70 sm:p-7"
          >
            <div className="mb-5 flex items-center justify-between gap-3">
              <p className="rounded-full border border-line/70 bg-surfaceStrong/70 px-3 py-1 text-xs font-semibold text-text/72">
                {item.category}
              </p>
              <span
                className="h-10 w-10 rounded-full border border-line/70 bg-[radial-gradient(circle_at_35%_35%,rgb(var(--color-fern)/0.65),transparent_60%),radial-gradient(circle_at_70%_70%,rgb(var(--color-lilac)/0.45),transparent_65%)]"
                aria-hidden="true"
              />
            </div>
            <h3 className="font-display text-2xl font-semibold tracking-tight">{item.name}</h3>
            <div className="mt-5 flex-1 space-y-4">
              <WorkBlock label="Problem solved" body={item.problem} />
              <WorkBlock label="Technical scope" body={item.technicalScope} />
              <WorkBlock label="Impact" body={item.impact} />
            </div>
            <div className="mt-6 flex flex-wrap gap-2.5">
              {item.stack.map((tag) => (
                <span key={tag} className="tag">
                  {tag}
                </span>
              ))}
            </div>
            {item.links?.length ? (
              <div className="mt-6 flex flex-wrap gap-3">
                {item.links.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    className="button-secondary px-4 py-2 text-sm"
                    target="_blank"
                    rel="noreferrer"
                  >
                    {link.label}
                  </a>
                ))}
              </div>
            ) : null}
          </article>
        ))}
      </div>
    </section>
  );
}

function ContactSection() {
  return (
    <section id="contact" className="pb-12 pt-12 sm:pb-20 sm:pt-16">
      <div className="section-shell relative overflow-hidden p-7 shadow-glow sm:p-10 lg:p-12">
        <div className="absolute -right-14 top-0 h-64 w-64 rounded-full bg-fern/18 blur-3xl" aria-hidden="true" />
        <div className="absolute bottom-0 left-0 h-52 w-52 rounded-full bg-lilac/14 blur-3xl" aria-hidden="true" />
        <div className="relative grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
          <div>
            <p className="section-kicker">Contact</p>
            <h2 className="mt-3 max-w-3xl font-display text-3xl font-semibold tracking-tight sm:text-4xl">
              {profile.contact.heading}
            </h2>
            <p className="mt-4 max-w-2xl text-sm leading-7 text-text/76 sm:text-base">
              {profile.contact.body}
            </p>
            <div className="mt-6 flex flex-wrap gap-2">
              {profile.contact.tags.map((tag) => (
                <span key={tag} className="tag">
                  {tag}
                </span>
              ))}
            </div>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row lg:flex-col">
            <a href={`mailto:${profile.email}`} className="button-primary">
              Email me
            </a>
            <a href={profile.linkedin} className="button-secondary" target="_blank" rel="noreferrer">
              LinkedIn
            </a>
          </div>
        </div>
      </div>
      <footer className="mt-8 flex flex-col gap-3 text-sm text-muted sm:flex-row sm:items-center sm:justify-between">
        <p>© {new Date().getFullYear()} Anna Chester. Designed and built in Next.js and Tailwind.</p>
        <a href={`https://${profile.domain}`} className="transition hover:text-moss focus-ring">
          {profile.domain}
        </a>
      </footer>
    </section>
  );
}

function SectionHeading({
  eyebrow,
  title,
  description
}: {
  eyebrow: string;
  title: string;
  description: string;
}) {
  return (
    <div className="max-w-4xl">
      <p className="section-kicker">{eyebrow}</p>
      <h2 className="mt-3 max-w-3xl font-display text-3xl font-semibold tracking-tight sm:text-4xl">
        {title}
      </h2>
      <p className="mt-4 max-w-[68ch] text-sm leading-7 text-muted sm:text-base">{description}</p>
    </div>
  );
}

function WorkBlock({ label, body }: { label: string; body: string }) {
  return (
    <div>
      <p className="text-xs font-semibold uppercase tracking-[0.28em] text-muted">{label}</p>
      <p className="mt-2 text-sm leading-7 text-text/76 sm:text-base">{body}</p>
    </div>
  );
}

function SectionConnector() {
  return (
    <div className="flex items-center gap-3 py-2" aria-hidden="true">
      <span className="h-px flex-1 bg-line/70" />
      <span className="grid h-6 w-6 place-items-center rounded-full border border-line/70 bg-surface">
        <span className="h-2.5 w-2.5 rounded-full bg-fern" />
      </span>
      <span className="h-px w-16 bg-line/70 sm:w-24" />
      <span className="h-2.5 w-2.5 rounded-full bg-moss" />
      <span className="h-px flex-1 bg-line/70" />
    </div>
  );
}
