import { cn } from "@/lib/utils";

export function GlassCard({
  className,
  children,
  hover = true,
}: {
  className?: string;
  children: React.ReactNode;
  hover?: boolean;
}) {
  return (
    <div
      className={cn(
        "rounded-2xl border border-zinc-200/90 bg-white/90 p-6 shadow-sm backdrop-blur-xl transition-all duration-300",
        hover && "hover:border-brand-sky/60 hover:shadow-md hover:shadow-brand-navy/10",
        className
      )}
    >
      {children}
    </div>
  );
}
