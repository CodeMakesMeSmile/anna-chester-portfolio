import { cn } from "@/lib/cn";

type SectionHeadingProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  className?: string;
};

export function SectionHeading({ eyebrow, title, description, className }: SectionHeadingProps) {
  return (
    <div className={cn("max-w-3xl", className)}>
      {eyebrow ? <p className="section-kicker">{eyebrow}</p> : null}
      <h2 className="mt-3 text-balance font-display text-3xl font-semibold tracking-tight sm:text-4xl">
        {title}
      </h2>
      {description ? (
        <p className="mt-4 max-w-[62ch] text-base leading-8 text-muted">{description}</p>
      ) : null}
    </div>
  );
}
