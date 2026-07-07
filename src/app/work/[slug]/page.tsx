import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Fallback2D } from "@/components/atmosphere/Fallback2D";
import { Button } from "@/components/ui/Button";
import { Chip } from "@/components/ui/Chip";
import { Container } from "@/components/ui/Container";
import { PageHeader } from "@/components/ui/PageHeader";
import { caseStudySlugs, getCaseStudy, type CaseStudy } from "@/data/projects";
import { site } from "@/data/site";

type Params = { slug: string };

export function generateStaticParams(): Params[] {
  return caseStudySlugs.map((slug) => ({ slug }));
}

export function generateMetadata({ params }: { params: Params }): Metadata {
  const study = getCaseStudy(params.slug);
  if (!study) return {};

  return {
    title: study.title,
    description: study.summary,
    openGraph: {
      title: `${study.title} · ${site.name}`,
      description: study.summary,
      type: "article"
    },
    alternates: { canonical: `/work/${study.slug}` }
  };
}

export default function CaseStudyPage({ params }: { params: Params }) {
  const study = getCaseStudy(params.slug);
  if (!study) notFound();

  return (
    <>
      <Fallback2D />
      <Container className="flex min-h-screen flex-col pb-16 pt-4">
        <PageHeader name={site.name} />
        <main id="content" className="flex flex-col gap-14">
          <StudyHeader study={study} />
          <FactsGrid study={study} />
          <Narrative study={study} />
          <SystemFlow study={study} />
          <SkillsProof study={study} />
          <EndCta />
        </main>
        <Footer domain={site.domain} />
      </Container>
    </>
  );
}

function StudyHeader({ study }: { study: CaseStudy }) {
  return (
    <header className="max-w-3xl">
      <Link
        href="/#work"
        className="inline-flex items-center gap-2 font-mono text-sm text-muted transition hover:text-moss focus-ring"
      >
        <span aria-hidden="true">←</span> All work
      </Link>
      <p className="mt-6 font-mono text-xs uppercase tracking-[0.24em] text-moss">{study.kicker}</p>
      <h1 className="mt-3 text-balance font-display text-4xl font-semibold tracking-tight sm:text-5xl">
        {study.title}
      </h1>
      <p className="mt-3 font-mono text-sm text-muted">{study.role}</p>
      <p className="mt-6 text-lg leading-8 text-text/85">{study.intro}</p>
      <div className="mt-6 flex flex-wrap gap-2.5">
        {study.stack.map((tag) => (
          <Chip key={tag}>{tag}</Chip>
        ))}
      </div>
      {study.links.length > 0 ? (
        <div className="mt-6 flex flex-wrap gap-3">
          {study.links.map((link) => (
            <Button key={link.href} href={link.href} variant="primary" external>
              {link.label}
            </Button>
          ))}
        </div>
      ) : null}
    </header>
  );
}

function FactsGrid({ study }: { study: CaseStudy }) {
  return (
    <dl className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
      {study.facts.map((fact) => (
        <div key={fact.label} className="section-shell p-5">
          <dt className="font-mono text-xs uppercase tracking-[0.2em] text-muted">{fact.label}</dt>
          <dd className="mt-2 font-display text-lg font-semibold tracking-tight">{fact.value}</dd>
        </div>
      ))}
    </dl>
  );
}

function Narrative({ study }: { study: CaseStudy }) {
  return (
    <div className="grid gap-8 lg:grid-cols-2">
      <Block label="The problem" body={study.problem} />
      <Block label="What I owned" body={study.owned} />
      <div className="lg:col-span-2">
        <p className="section-kicker">The hard parts</p>
        <ul className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {study.hardParts.map((part) => (
            <li key={part} className="section-shell p-5 text-sm leading-7 text-text/80">
              {part}
            </li>
          ))}
        </ul>
      </div>
      <div className="lg:col-span-2">
        <Block label="The result" body={study.result} highlight />
      </div>
    </div>
  );
}

function Block({ label, body, highlight }: { label: string; body: string; highlight?: boolean }) {
  return (
    <div>
      <p className="section-kicker">{label}</p>
      <p
        className={`mt-4 leading-8 ${highlight ? "text-xl text-text/90" : "text-base text-text/80"}`}
      >
        {body}
      </p>
    </div>
  );
}

function SystemFlow({ study }: { study: CaseStudy }) {
  return (
    <section aria-label="System flow">
      <p className="section-kicker">How it fits together</p>
      <ol className="mt-5 grid gap-3">
        {study.flow.map((step, index) => (
          <li key={step.label} className="flex items-start gap-4 section-shell p-5">
            <span className="grid h-9 w-9 shrink-0 place-items-center rounded-lg border border-moss/40 bg-surfaceStrong/70 font-mono text-xs font-semibold text-moss">
              {String(index + 1).padStart(2, "0")}
            </span>
            <div>
              <h3 className="font-display text-lg font-semibold tracking-tight">{step.label}</h3>
              <p className="mt-1 text-sm leading-6 text-text/74">{step.detail}</p>
            </div>
          </li>
        ))}
      </ol>
    </section>
  );
}

function SkillsProof({ study }: { study: CaseStudy }) {
  return (
    <section aria-label="Skills demonstrated">
      <p className="section-kicker">Skills it proves</p>
      <div className="mt-5 grid gap-4 sm:grid-cols-3">
        {study.skills.map((skill) => (
          <article key={skill.name} className="section-shell p-5">
            <h3 className="font-display text-base font-semibold tracking-tight">{skill.name}</h3>
            <p className="mt-2 text-sm leading-6 text-text/74">{skill.evidence}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

function EndCta() {
  return (
    <section className="section-shell flex flex-col items-start gap-4 p-7 sm:flex-row sm:items-center sm:justify-between sm:p-8">
      <p className="max-w-xl font-display text-xl font-semibold tracking-tight">
        Want the rest of the story?
      </p>
      <div className="flex flex-wrap gap-3">
        <Button href="/#work" variant="secondary">
          More work
        </Button>
        <Button href="/#contact" variant="primary">
          Get in touch
        </Button>
      </div>
    </section>
  );
}

function Footer({ domain }: { domain: string }) {
  return (
    <footer className="mt-20 flex flex-col gap-3 border-t border-line/60 pt-8 text-sm text-muted sm:flex-row sm:items-center sm:justify-between">
      <p>© {new Date().getFullYear()} Anna Chester. Built with Next.js and Tailwind CSS.</p>
      <Link href="/" className="font-mono transition hover:text-moss focus-ring">
        {domain}
      </Link>
    </footer>
  );
}
