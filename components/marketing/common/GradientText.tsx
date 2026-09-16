import { cn } from "@/lib/utils";

export function GradientText({ children, className }: { children: React.ReactNode; className?: string }) {
  return (
    <span
      className={cn(
        "bg-gradient-to-br from-[#0A1931] via-[#0A1931] to-[#C5A059] bg-clip-text text-transparent",
        className
      )}
    >
      {children}
    </span>
  );
}
