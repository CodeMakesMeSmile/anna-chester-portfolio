import { cn } from "@/lib/cn";

/** Small monospace pill used for stack tags and metadata. */
export function Chip({
  children,
  className
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return <span className={cn("tag", className)}>{children}</span>;
}
