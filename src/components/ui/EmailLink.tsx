"use client";

import { cn } from "@/lib/cn";

type EmailLinkProps = {
  user: string;
  domain: string;
  className?: string;
  children: React.ReactNode;
};

/**
 * Opens a mailto without ever writing the full address into the server HTML —
 * the parts are joined only on click, which turns away the simplest scrapers.
 */
export function EmailLink({ user, domain, className, children }: EmailLinkProps) {
  return (
    <button
      type="button"
      className={cn(className)}
      onClick={() => {
        window.location.href = `mailto:${user}@${domain}`;
      }}
    >
      {children}
    </button>
  );
}
