import { ChevronRight } from 'lucide-react';

interface SwipeHintProps {
  label?: string;
  className?: string;
}

/**
 * Mobile-only swipe affordance.
 * Hidden by default on md+ screens. Drop it inside any mobile horizontal
 * scroll-snap section to telegraph the interaction.
 */
const SwipeHint = ({ label = 'Swipe', className = '' }: SwipeHintProps) => (
  <div
    className={`md:hidden inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-brand-mist border border-brand-navy/10 text-[10px] font-bold text-brand-navy/55 tracking-[0.2em] uppercase ${className}`}
  >
    {label}
    <ChevronRight size={11} className="swipe-pulse text-brand-teal" />
  </div>
);

export default SwipeHint;
