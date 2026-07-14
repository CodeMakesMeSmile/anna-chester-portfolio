"use client";

import { useEffect, useState } from "react";
import type { NavItem } from "@/data/site";
import { Readout } from "@/components/atmosphere/Readout";
import { Logo } from "@/components/ui/Logo";
import { ThemeToggle } from "@/components/ui/ThemeToggle";

type NavProps = {
  name: string;
  navItems: NavItem[];
};

export function Nav({ name, navItems }: NavProps) {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setMenuOpen(false);
    };

    const handleResize = () => {
      if (window.innerWidth >= 768) setMenuOpen(false);
    };

    window.addEventListener("keydown", handleKeyDown);
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <header className="sticky top-4 z-30 mb-16 rounded-[1.75rem] border border-line/80 bg-surface/80 px-3 py-3 shadow-soft backdrop-blur-xl sm:px-5">
      <nav aria-label="Main navigation">
        <div className="flex items-center justify-between gap-3">
          <a
            href="#top"
            className="flex min-h-11 items-center gap-3 rounded-full pr-3 text-text focus-ring"
            aria-label={`${name}, back to top`}
            onClick={() => setMenuOpen(false)}
          >
            <span className="grid h-11 w-11 place-items-center rounded-full border border-white/10 bg-[#0f1a15] shadow-sm dark:bg-[#24352b]">
              <Logo className="h-6 w-auto" />
            </span>
            <span className="hidden font-display text-sm font-semibold tracking-tight sm:inline">
              {name}
            </span>
          </a>
          <div className="flex items-center gap-2">
            <div className="hidden items-center gap-1 rounded-full border border-line/70 bg-surfaceStrong/70 p-1 md:flex">
              {navItems.map((item) => (
                <NavLink key={item.href} href={item.href} label={item.label} />
              ))}
            </div>
            <Readout />
            <ThemeToggle />
            <button
              type="button"
              className="inline-flex min-h-11 items-center justify-center rounded-full border border-line/80 bg-surface/90 px-4 py-2 text-sm font-medium text-text shadow-sm transition hover:border-moss/55 hover:bg-surfaceStrong/80 motion-safe:hover:-translate-y-0.5 focus-ring md:hidden"
              aria-expanded={menuOpen}
              aria-controls="mobile-navigation"
              onClick={() => setMenuOpen((current) => !current)}
            >
              {menuOpen ? "Close" : "Menu"}
            </button>
          </div>
        </div>
        <div
          id="mobile-navigation"
          className={`${menuOpen ? "grid" : "hidden"} mt-3 gap-2 border-t border-line/70 pt-3 md:hidden`}
        >
          {navItems.map((item) => (
            <NavLink
              key={item.href}
              href={item.href}
              label={item.label}
              onClick={() => setMenuOpen(false)}
              mobile
            />
          ))}
        </div>
      </nav>
    </header>
  );
}

type NavLinkProps = {
  href: string;
  label: string;
  mobile?: boolean;
  onClick?: () => void;
};

function NavLink({ href, label, mobile = false, onClick }: NavLinkProps) {
  return (
    <a
      href={href}
      onClick={onClick}
      className={`rounded-full px-4 py-2 text-sm font-medium text-text/78 transition hover:bg-surface hover:text-text focus-ring ${
        mobile ? "min-h-11 border border-line/70 bg-surfaceStrong/70 text-center" : ""
      }`}
    >
      {label}
    </a>
  );
}
