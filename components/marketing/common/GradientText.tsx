import { cn } from "@/lib/utils";

export function GradientText({ children, className }: { children: React.ReactNode; className?: string }) {
  return (
    <span
      className={cn(
        "bg-gradient-to-br from-[#161E54] via-[#161E54] to-[#FF986A] bg-clip-text text-transparent",
        className
      )}
    >
      {children}
    </span>
  );
}
