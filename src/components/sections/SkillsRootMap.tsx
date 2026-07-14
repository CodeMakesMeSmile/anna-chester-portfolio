"use client";

import { useState } from "react";
import Link from "next/link";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { skillEvidence } from "@/data/skills";
import { cn } from "@/lib/cn";

// Where each evidence target lives, so a connection can link through to depth.
const targetHref: Record<string, string> = {
  "Banu Beauty": "/work/banu",
  "ZEVA Global": "/work/zeva-referral",
  "HAIL Admin": "/work/hail",
  "University of Toronto": "#teaching",
  "DBRS Morningstar": "#experience"
};

/**
 * Interactive root-map: skills are the roots, and selecting one traces it to the
 * real systems that prove it. Keyboard-accessible and light on motion.
 */
export function SkillsRootMap() {
  const [selected, setSelected] = useState(skillEvidence[0].skill);
  const active = skillEvidence.find((entry) => entry.skill === selected) ?? skillEvidence[0];

  return (
    <section id="skills" className="scroll-mt-28">
      <SectionHeading
        eyebrow="Skills in context"
        title="I've used every one of these tools inside real, shipped systems."
        description="Select a skill to trace it to the production work behind it. Each connection links to the project."
      />
      <div className="section-shell mt-8 p-6 sm:p-8">
        <div className="flex flex-wrap gap-2.5" role="group" aria-label="Skills">
          {skillEvidence.map((entry) => {
            const isActive = entry.skill === selected;
            return (
              <button
                key={entry.skill}
                type="button"
                aria-pressed={isActive}
                onClick={() => setSelected(entry.skill)}
                className={cn(
                  "inline-flex min-h-9 items-center rounded-full border px-3.5 py-1.5 font-mono text-xs font-medium transition focus-ring",
                  isActive
                    ? "border-moss/70 bg-moss/15 text-moss"
                    : "border-line/70 bg-surfaceStrong/60 text-text/70 hover:border-moss/50 hover:text-text"
                )}
              >
                {entry.skill}
              </button>
            );
          })}
        </div>

        <div className="mt-7 border-t border-line/60 pt-7">
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-muted">{active.category}</p>
          <p className="mt-2 max-w-2xl text-base leading-7 text-text/80">{active.whyItMatters}</p>
          <ul className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {active.connections.map((connection) => {
              const href = targetHref[connection.target];
              const body = (
                <>
                  <div className="flex items-center gap-2">
                    <span className="h-2 w-2 shrink-0 rounded-full bg-fern" aria-hidden="true" />
                    <p className="font-display text-sm font-semibold tracking-tight">
                      {connection.target}
                    </p>
                  </div>
                  <p className="mt-2 font-mono text-xs text-moss">{connection.label}</p>
                  <p className="mt-2 text-sm leading-6 text-text/74">{connection.evidence}</p>
                </>
              );

              return (
                <li key={`${connection.target}-${connection.label}`}>
                  {href ? (
                    <Link
                      href={href}
                      className="block h-full rounded-2xl border border-line/70 bg-bg/40 p-4 transition hover:border-moss/50 hover:bg-surfaceStrong/50 focus-ring"
                    >
                      {body}
                    </Link>
                  ) : (
                    <div className="h-full rounded-2xl border border-line/70 bg-bg/40 p-4">{body}</div>
                  )}
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </section>
  );
}
