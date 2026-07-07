import { cn } from "@/lib/cn";

/** Centered page-width wrapper shared by the home page and case-study routes. */
export function Container({
  className,
  children
}: {
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <div className={cn("mx-auto w-full max-w-[80rem] px-4 sm:px-6 lg:px-8", className)}>
      {children}
    </div>
  );
}
