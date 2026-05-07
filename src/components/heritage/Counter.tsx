import { useEffect, useRef, useState } from "react";
import { useInView, motion } from "framer-motion";

export function Counter({ to, suffix = "", duration = 2.4, decimals = 0 }: { to: number; suffix?: string; duration?: number; decimals?: number }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });
  const [val, setVal] = useState(0);

  useEffect(() => {
    if (!inView) return;
    const start = performance.now();
    let frame: number;
    const tick = (now: number) => {
      const t = Math.min(1, (now - start) / (duration * 1000));
      const eased = 1 - Math.pow(1 - t, 3);
      setVal(to * eased);
      if (t < 1) frame = requestAnimationFrame(tick);
    };
    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [inView, to, duration]);

  return (
    <motion.span ref={ref} className="inline-block">
      {val.toFixed(decimals)}{suffix}
    </motion.span>
  );
}
