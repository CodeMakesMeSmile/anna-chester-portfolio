import Link from "next/link";
import { Logo } from "@/components/ui/Logo";
import { ThemeToggle } from "@/components/ui/ThemeToggle";

export function PageHeader({ name }: { name: string }) {
  return (
    <header className="sticky top-4 z-30 mb-12 rounded-[1.75rem] border border-line/80 bg-surface/80 px-3 py-3 shadow-soft backdrop-blur-xl sm:px-5">
      <div className="flex items-center justify-between gap-3">
        <Link
          href="/"
          className="flex min-h-11 items-center gap-3 rounded-full pr-3 text-text focus-ring"
          aria-label={`${name}, home`}
        >
          <span className="grid h-11 w-11 place-items-center rounded-full border border-white/10 bg-[#0f1a15] shadow-sm dark:bg-[#24352b]">
            <Logo className="h-6 w-auto" />
          </span>
          <span className="hidden font-display text-sm font-semibold tracking-tight sm:inline">
            {name}
          </span>
        </Link>
        <div className="flex items-center gap-2">
          <Link
            href="/#work"
            className="rounded-full px-4 py-2 text-sm font-medium text-text/78 transition hover:bg-surface hover:text-text focus-ring"
          >
            All work
          </Link>
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
}
