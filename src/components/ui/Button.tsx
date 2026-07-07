import { cn } from "@/lib/cn";

type Variant = "primary" | "secondary" | "ghost";

const variantClass: Record<Variant, string> = {
  primary: "button-primary",
  secondary: "button-secondary",
  ghost: "button-ghost"
};

type ButtonProps = {
  href: string;
  children: React.ReactNode;
  variant?: Variant;
  external?: boolean;
  className?: string;
  "aria-label"?: string;
};

/** Link styled as a button. External links open in a new, safely-`rel`'d tab. */
export function Button({
  href,
  children,
  variant = "primary",
  external,
  className,
  ...rest
}: ButtonProps) {
  return (
    <a
      href={href}
      className={cn(variantClass[variant], className)}
      {...(external ? { target: "_blank", rel: "noreferrer" } : {})}
      {...rest}
    >
      {children}
    </a>
  );
}
