"use client";

import { useEffect, useRef, useState } from "react";
import { useInView } from "framer-motion";

function easeOutCubic(t: number) {
  return 1 - (1 - t) ** 3;
}

export function AnimatedCounter({
  value,
  suffix = "",
  duration = 2,
  className = "",
}: {
  value: number;
  suffix?: string;
  duration?: number;
  className?: string;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-10%" });
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    if (!isInView) return;
    if (duration <= 0) {
      setDisplay(value);
      return;
    }
    let start: number | null = null;
    let raf = 0;
    const from = 0;
    const to = value;

    const tick = (now: number) => {
      if (start === null) start = now;
      const elapsed = (now - start) / 1000;
      const p = Math.min(1, elapsed / duration);
      const eased = easeOutCubic(p);
      setDisplay(Math.round(from + (to - from) * eased));
      if (p < 1) raf = requestAnimationFrame(tick);
    };

    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [isInView, value, duration]);

  return (
    <span ref={ref} className={className}>
      {display}
      {suffix}
    </span>
  );
}
