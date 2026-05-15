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
const Counter = ({ value, duration = 1100, className = '' }: CounterProps) => {
  const ref = useRef<HTMLSpanElement | null>(null);
  const inView = useInView(ref, { once: true, margin: '0px 0px -10% 0px' });

  // Parse numeric prefix + suffix
  const match = value.match(/^(\d+(?:\.\d+)?)(.*)$/);
  const target = match ? parseFloat(match[1]) : 0;
  const suffix = match ? match[2] : '';
  const isInteger = match ? !match[1].includes('.') : true;

  // Initialize at 0 (or just `value` for non-numeric) to avoid a "target → 0 → animate" flash
  const initial = match ? `0${suffix}` : value;
  const [display, setDisplay] = useState<string>(initial);

  useEffect(() => {
    if (!match || !inView) return;
    let cancelled = false;
    const start = performance.now();
    const tick = (now: number) => {
      if (cancelled) return;
      const t = Math.min(1, (now - start) / duration);
      // easeOutCubic
      const eased = 1 - Math.pow(1 - t, 3);
      const current = target * eased;
      const rounded = isInteger ? Math.round(current) : Math.round(current * 10) / 10;
      setDisplay(`${rounded}${suffix}`);
      if (t < 1) requestAnimationFrame(tick);
      else setDisplay(`${target}${suffix}`); // snap to exact target
    };
    requestAnimationFrame(tick);
    return () => {
      cancelled = true;
    };
  }, [inView, duration, target, suffix, isInteger, match]);

  return (
    <span ref={ref} className={className} aria-label={value}>
      {display}
    </span>
  );
};

export default Counter;
