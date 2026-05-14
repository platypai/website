import { useEffect, useRef, useState } from 'react';
import { useInView } from 'framer-motion';

interface CounterProps {
  /** Display string like "80%", "4 weeks", "5K+", "8×", "60%". */
  value: string;
  /** Duration of the count-up in ms. */
  duration?: number;
  className?: string;
}

/**
 * Parses the numeric prefix from a display string and animates it from 0 → target
 * when the element enters the viewport. The non-numeric suffix is preserved.
 *
 * Examples:
 *   "80%"     → animates 0..80 + "%"
 *   "4 weeks" → animates 0..4 + " weeks"
 *   "5K+"     → animates 0..5 + "K+"
 *   "8×"      → animates 0..8 + "×"
 */
const Counter = ({ value, duration = 1200, className = '' }: CounterProps) => {
  const ref = useRef<HTMLSpanElement | null>(null);
  const inView = useInView(ref, { once: true, margin: '-30px' });
  const [display, setDisplay] = useState<string>(value);

  // Split into numeric prefix and trailing suffix
  const match = value.match(/^(\d+(?:\.\d+)?)(.*)$/);
  const target = match ? parseFloat(match[1]) : 0;
  const suffix = match ? match[2] : '';
  const isInteger = match ? !match[1].includes('.') : true;

  useEffect(() => {
    if (!match) return; // no numeric prefix — render value as-is
    if (!inView) {
      setDisplay(`0${suffix}`);
      return;
    }

    let raf = 0;
    const start = performance.now();
    const animate = (now: number) => {
      const elapsed = now - start;
      const t = Math.min(1, elapsed / duration);
      // easeOutCubic
      const eased = 1 - Math.pow(1 - t, 3);
      const current = target * eased;
      const rounded = isInteger ? Math.round(current) : Math.round(current * 10) / 10;
      setDisplay(`${rounded}${suffix}`);
      if (t < 1) raf = requestAnimationFrame(animate);
    };
    raf = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(raf);
  }, [inView, duration, target, suffix, isInteger, match]);

  return (
    <span ref={ref} className={className} aria-label={value}>
      {match ? display : value}
    </span>
  );
};

export default Counter;
