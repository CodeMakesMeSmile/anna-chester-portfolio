import { Button } from "@/components/ui/Button";
import { Chip } from "@/components/ui/Chip";

type ContactProps = {
  heading: string;
  body: string;
  email: string;
  linkedin: string;
  tags: string[];
};

export function Contact({ heading, body, email, linkedin, tags }: ContactProps) {
  return (
    <section id="contact" className="scroll-mt-28">
      <div className="section-shell relative overflow-hidden p-7 shadow-glow sm:p-10 lg:p-12">
        <div
          className="pointer-events-none absolute -right-16 top-0 h-64 w-64 rounded-full bg-amber/15 blur-3xl"
          aria-hidden="true"
        />
        <div
          className="pointer-events-none absolute bottom-0 left-0 h-52 w-52 rounded-full bg-moss/15 blur-3xl"
          aria-hidden="true"
        />
        <div className="relative grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
          <div>
            <p className="section-kicker">Contact</p>
            <h2 className="mt-3 max-w-2xl text-balance font-display text-3xl font-semibold tracking-tight sm:text-4xl">
              {heading}
            </h2>
            <p className="mt-4 max-w-2xl text-base leading-8 text-text/78">{body}</p>
            <div className="mt-6 flex flex-wrap gap-2.5">
              {tags.map((tag) => (
                <Chip key={tag}>{tag}</Chip>
              ))}
            </div>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row lg:flex-col">
            <Button href={`mailto:${email}`} variant="primary">
              Email me
            </Button>
            <Button href={linkedin} variant="secondary" external>
              LinkedIn
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
