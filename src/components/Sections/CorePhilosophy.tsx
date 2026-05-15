import { motion } from 'framer-motion';
import {
  Workflow,
  Brain,
  Compass,
  ShieldCheck,
  Target,
  Sparkles,
  Star,
} from 'lucide-react';
import SwipeHint from '../Brand/SwipeHint';

interface Dimension {
  key: string;
  label: string;
  Icon: typeof Workflow;
  aiOnly: string;
  hitl: string;
  eitl: string;
}

const dimensions: Dimension[] = [
  {
    key: 'workflow',
    label: 'Workflow Design',
    Icon: Workflow,
    aiOnly: 'Generates from prompts.',
    hitl: 'Reviews output after generation.',
    eitl: 'Architects the workflow before generation begins.',
  },
  {
    key: 'domain',
    label: 'Domain Logic',
    Icon: Brain,
    aiOnly: 'Optimises for speed.',
    hitl: 'Catches visible errors.',
    eitl: 'Embeds domain logic and quality rules natively.',
  },
  {
    key: 'context',
    label: 'Context',
    Icon: Compass,
    aiOnly: 'Depends on the prompt.',
    hitl: 'Depends on reviewer interpretation.',
    eitl: 'Structures context via taxonomies and rubrics.',
  },
  {
    key: 'quality',
    label: 'Quality Control',
    Icon: ShieldCheck,
    aiOnly: 'Varies by user.',
    hitl: 'Improves selected drafts.',
    eitl: 'Ensures consistent quality through expert audits.',
  },
  {
    key: 'outcome',
    label: 'Outcome',
    Icon: Target,
    aiOnly: 'Good for low-risk tasks.',
    hitl: 'Useful for controlled content production.',
    eitl: 'Creates repeatable, business-critical engines.',
  },
];

const philosophyPoints = [
  {
    title: 'Expert-in-the-loop architecture',
    desc: 'led by experienced learning architects and instructional design consultants.',
  },
  {
    title: 'Source-grounded knowledge',
    desc: 'that combines indexed memory banks with vector RAGs.',
  },
  {
    title: 'Uncompromised quality',
    desc: 'that combines human audits with iteratively refined agentic reviews.',
  },
  {
    title: 'Repeatable engines',
    desc: 'that bring down cost and timelines with scale, while delivering consistent output.',
  },
];

const CorePhilosophy = () => {
  return (
    <section id="methodology" className="pt-0 pb-16 md:pb-20 bg-white relative overflow-hidden">
      {/* Top dark banner with the four core principles */}
      <div className="bg-brand-navy w-full py-12 md:py-16 px-6 relative z-10 shadow-xl">
        <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-brand-teal via-brand-cyan to-brand-pink" />
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-x-14 gap-y-7">
            {philosophyPoints.map((point, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.45, delay: idx * 0.08 }}
                className="flex items-start"
              >
                <div
                  className={`w-2 h-2 rounded-full mt-2.5 mr-4 flex-shrink-0 ${
                    idx % 2 === 0 ? 'bg-brand-teal' : 'bg-brand-pink'
                  }`}
                />
                <p className="text-brand-mist/90 text-base md:text-lg leading-relaxed">
                  <span className="font-bold text-white block mb-1">{point.title}</span>
                  {point.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Philosophy intro */}
      <div className="max-w-7xl mx-auto px-6 mt-14 md:mt-20 mb-10">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55 }}
        >
          <span className="eyebrow mb-3 block">The Core Philosophy</span>
          <h2 className="text-4xl md:text-5xl font-bold text-brand-navy leading-[1.05] mb-6 max-w-3xl">
            AI output is becoming the norm.
            <br />
            Expert input is still scarce.
          </h2>
          <div className="space-y-4 text-base md:text-lg text-brand-navy/75 max-w-4xl leading-relaxed">
            <p>
              The learning industry is quickly adopting AI to generate content. That adoption is coming at the cost of design quality, expert judgment, and the ability to preserve quality at scale.
            </p>
            <p>
              PlatypAI works where that gap matters — designing AI workflows and products that capture expert perspective <em className="not-italic text-brand-navy font-semibold">before</em> production begins, and maintain it <em className="not-italic text-brand-navy font-semibold">through</em> production.
            </p>
          </div>
        </motion.div>
      </div>

      {/* Methodology progression — tier cards */}
      <div className="max-w-7xl mx-auto px-6 mt-8 md:mt-12">
        <div className="flex items-center justify-between flex-wrap gap-3 mb-5">
          <span className="eyebrow">From AI-Only to Expert-in-the-Loop</span>
          <SwipeHint />
          <span className="hidden md:inline-flex items-center gap-2 text-[10px] font-bold text-brand-navy/45 tracking-[0.25em] uppercase">
            Maturity progression
            <svg width="14" height="10" viewBox="0 0 14 10" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M1 5 H 13 M9 1 L 13 5 L 9 9" />
            </svg>
          </span>
        </div>

        {/* Mobile: horizontal scroll-snap | Desktop: 3-col grid */}
        <div className="-mx-6 lg:mx-0 px-6 lg:px-0 overflow-x-auto lg:overflow-visible no-scrollbar snap-x snap-mandatory lg:snap-none">
          <div className="flex lg:grid lg:grid-cols-3 gap-4 lg:gap-5 items-stretch pb-2 lg:pb-0">
            <TierCard
              tier={1}
              name="AI-only"
              tagline="Prompt-driven generation."
              tone="muted"
              dimensions={dimensions}
              valueKey="aiOnly"
            />
            <TierCard
              tier={2}
              name="Human-in-the-Loop"
              tagline="Review after generation."
              tone="balanced"
              dimensions={dimensions}
              valueKey="hitl"
            />
            <TierCard
              tier={3}
              name="Expert-in-the-Loop"
              tagline="Designed before generation."
              tone="featured"
              dimensions={dimensions}
              valueKey="eitl"
              featured
            />
          </div>
        </div>
      </div>
    </section>
  );
};

type TierTone = 'muted' | 'balanced' | 'featured';

interface TierCardProps {
  tier: number;
  name: string;
  tagline: string;
  tone: TierTone;
  dimensions: Dimension[];
  valueKey: 'aiOnly' | 'hitl' | 'eitl';
  featured?: boolean;
}

const TierCard = ({ tier, name, tagline, tone, dimensions, valueKey, featured }: TierCardProps) => {
  const cardStyles = {
    muted:
      'bg-white border-brand-navy/10 text-brand-navy',
    balanced:
      'bg-white border-brand-navy/15 text-brand-navy',
    featured:
      'bg-gradient-to-b from-brand-navy to-[#082037] border-brand-teal/30 text-white shadow-2xl lg:scale-[1.02]',
  } as const;

  const dimensionWrapper = {
    muted: 'border-brand-navy/10 text-brand-navy/60',
    balanced: 'border-brand-navy/10 text-brand-navy/75',
    featured: 'border-white/10 text-brand-mist/90',
  } as const;

  const iconStyles = {
    muted: 'bg-brand-navy/5 text-brand-navy/40',
    balanced: 'bg-brand-teal/10 text-brand-teal/80',
    featured: 'bg-brand-teal text-white',
  } as const;

  // Progress dots: 1 of 3 → 2 of 3 → 3 of 3
  const filledDots = tier;

  return (
    <motion.div
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.45, delay: (tier - 1) * 0.08 }}
      className={`relative rounded-2xl border overflow-hidden flex flex-col flex-shrink-0 w-[82vw] max-w-[340px] lg:w-auto lg:max-w-none snap-center ${cardStyles[tone]}`}
    >
      {featured && (
        <>
          <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-brand-teal via-brand-cyan to-brand-pink" />
          <div className="absolute -top-px right-5 px-2.5 py-1 rounded-b-md bg-brand-teal text-white text-[9px] font-bold tracking-[0.25em] uppercase inline-flex items-center gap-1 shadow-md">
            <Star size={10} className="fill-white" />
            Our Approach
          </div>
        </>
      )}

      <div className="p-5 md:p-6 border-b border-current/10">
        {/* Maturity bars — 3 ascending vertical bars, lit up to tier */}
        <div
          className="flex items-end gap-1 mb-3 h-4"
          aria-label={`Maturity tier ${tier} of 3`}
          role="img"
        >
          {[
            { id: 1, h: 6 },
            { id: 2, h: 10 },
            { id: 3, h: 14 },
          ].map((b) => {
            const lit = b.id <= filledDots;
            return (
              <span
                key={b.id}
                style={{ height: `${b.h}px` }}
                className={`w-1 rounded-[1px] ${
                  lit
                    ? featured
                      ? 'bg-brand-teal'
                      : 'bg-brand-navy/65'
                    : featured
                    ? 'bg-white/15'
                    : 'bg-brand-navy/15'
                }`}
              />
            );
          })}
          <span
            className={`ml-2 text-[10px] font-bold tracking-[0.2em] uppercase ${
              featured ? 'text-brand-cyan' : 'text-brand-navy/55'
            }`}
          >
            Tier {tier}/3
          </span>
        </div>

        <div className="flex items-baseline justify-between gap-2">
          <h3
            className={`text-xl md:text-2xl font-bold leading-tight ${
              featured ? 'text-white' : 'text-brand-navy'
            }`}
          >
            {name}
          </h3>
          {featured && <Sparkles size={16} className="text-brand-teal flex-shrink-0" />}
        </div>
        <p
          className={`text-sm mt-1 leading-snug ${
            featured ? 'text-brand-mist/85' : 'text-brand-navy/60'
          }`}
        >
          {tagline}
        </p>
      </div>

      <ul className="flex flex-col">
        {dimensions.map((d, idx) => (
          <li
            key={d.key}
            className={`px-5 md:px-6 py-3.5 ${
              idx > 0 ? `border-t ${dimensionWrapper[tone]}` : ''
            }`}
          >
            <DimensionRow tone={tone} icon={d.Icon} iconStyle={iconStyles[tone]} label={d.label} value={d[valueKey]} />
          </li>
        ))}
      </ul>
    </motion.div>
  );
};

const DimensionRow = ({
  tone,
  icon: Icon,
  iconStyle,
  label,
  value,
}: {
  tone: TierTone;
  icon: typeof Workflow;
  iconStyle: string;
  label: string;
  value: string;
}) => {
  const labelColor = tone === 'featured' ? 'text-brand-cyan' : 'text-brand-navy/55';
  const valueColor = tone === 'featured' ? 'text-white' : 'text-brand-navy/85';

  return (
    <div className="flex items-start gap-3">
      <div className={`w-8 h-8 rounded-lg ${iconStyle} flex items-center justify-center flex-shrink-0`}>
        <Icon size={14} />
      </div>
      <div className="flex-1 min-w-0">
        <div className={`text-[10px] font-bold tracking-[0.2em] uppercase ${labelColor}`}>
          {label}
        </div>
        <div className={`text-sm leading-snug mt-0.5 ${valueColor}`}>{value}</div>
      </div>
    </div>
  );
};

export default CorePhilosophy;
