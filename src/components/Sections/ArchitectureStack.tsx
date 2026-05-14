import { useEffect, useRef, useState } from 'react';
import type { ReactNode } from 'react';
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from 'framer-motion';
import { Layers, Database, Target, Settings, Monitor } from 'lucide-react';
import SwipeHint from '../Brand/SwipeHint';

interface Step {
  id: number;
  title: string;
  icon: ReactNode;
  shortDesc: string;        // ~1 line, shown on the tile
  desc: string;             // longer expansion
  aiRole: string;
  expertRole: string;
}

// Bottom of stack → top, matching the brochure's 1-5 ordering left-to-right.
const steps: Step[] = [
  {
    id: 1,
    title: 'Business Need',
    icon: <Layers size={18} />,
    shortDesc: 'Diagnose the real problem worth solving.',
    desc: 'Needs and gaps analysis, open-ended consultation, client onboarding, stakeholder interviews, scope definition, and initial service architecture.',
    aiRole: 'Supports pattern analysis, use-case clustering, and initial feasibility framing.',
    expertRole: 'Diagnose opportunity quality, define practical use cases, and filter out noise.',
  },
  {
    id: 2,
    title: 'Knowledge Architecture',
    icon: <Database size={18} />,
    shortDesc: 'Turn fragmented inputs into structured intelligence.',
    desc: 'Data collation, extraction, and structuring, conversion to indexed metadata-enriched memory banks, and custom vector RAG creation.',
    aiRole: 'Supports ingestion, extraction, semantic structuring, and metadata enrichment.',
    expertRole: 'Define the knowledge model, boundaries, taxonomy, and validation rules.',
  },
  {
    id: 3,
    title: 'Expert Calibration',
    icon: <Target size={18} />,
    shortDesc: 'Where expert judgment shapes the system.',
    desc: 'Learning architecture, content strategy, prototype design, learning and format blend, deployment strategies, scoring rubrics, tracking and reporting workflows.',
    aiRole: 'Speeds source analysis, structure proposals, and first-pass architecture options.',
    expertRole: 'Define capability logic, sequencing, modality balance, and design quality.',
  },
  {
    id: 4,
    title: 'AI Workflow Engine',
    icon: <Settings size={18} />,
    shortDesc: 'Production workflows at scale, audited end-to-end.',
    desc: 'Agentic workflows for building the knowledge base, output-based production workflows, quality and iterative updates, client input incorporation, and testing.',
    aiRole: 'Extracts, structures, drafts, rewrites, tags, and formats content at scale.',
    expertRole: 'Set templates, tone, instructional quality rules, and review criteria.',
  },
  {
    id: 5,
    title: 'Output Systems',
    icon: <Monitor size={18} />,
    shortDesc: 'Apps, learning products, reports, knowledge platforms.',
    desc: 'Apps, learning products, knowledge platforms, rapid prototypes, insights and recommendation reports, transformation guidance.',
    aiRole: 'Handles interaction, retrieval, smart summaries, and adaptive flow across formats.',
    expertRole: 'Define intent boundaries, user guidance, validation behavior, and learning usefulness.',
  },
];

const ArchitectureStack = () => {
  const sectionRef = useRef<HTMLElement | null>(null);
  const [active, setActive] = useState<number>(3); // default highlight Expert Calibration
  // Once a user manually picks a step, stop the scroll-driven auto-advance
  const [userPinned, setUserPinned] = useState(false);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start 80%', 'end 20%'],
  });

  // Scroll-driven active step on desktop (skip if user has clicked a tile)
  useMotionValueEvent(scrollYProgress, 'change', (latest) => {
    if (userPinned) return;
    // 5 steps → 5 bands of equal scroll progress
    const idx = Math.min(steps.length - 1, Math.max(0, Math.floor(latest * steps.length)));
    const nextId = steps[idx].id;
    setActive((prev) => (prev !== nextId ? nextId : prev));
  });

  // Reset pin after some idle time so scroll-driven mode resumes
  useEffect(() => {
    if (!userPinned) return;
    const t = window.setTimeout(() => setUserPinned(false), 6000);
    return () => window.clearTimeout(t);
  }, [userPinned, active]);

  const onTileClick = (id: number) => {
    setActive(id);
    setUserPinned(true);
  };

  const activeStep = steps.find((s) => s.id === active) ?? steps[2];

  return (
    <section
      ref={sectionRef}
      id="architecture"
      className="py-16 md:py-20 bg-gradient-to-b from-white via-brand-mist to-white relative"
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-10 max-w-3xl">
          <span className="eyebrow mb-3 block">The Architecture</span>
          <h2 className="text-4xl md:text-5xl font-bold text-brand-navy leading-[1.05] mb-4">
            Expert-in-the-Loop is not a review step.
            <br />
            It is the architecture.
          </h2>
          <p className="text-base md:text-lg text-brand-navy/70 leading-relaxed">
            We are consulting-first. The stack flows left to right — from business need through to the systems your users actually touch. Tap a step to see how AI and experts each show up.
          </p>
        </div>

        {/* Stack — horizontal flow */}
        <div className="relative">
          {/* Direction label / swipe hint */}
          <div className="flex items-center justify-between mb-3 text-[10px] font-bold text-brand-navy/45 tracking-[0.25em] uppercase gap-3">
            <span>Start · Bottom of stack</span>
            <SwipeHint />
            <span className="hidden md:flex items-center gap-2">
              Top of stack · Output
              <svg width="14" height="10" viewBox="0 0 14 10" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M1 5 H 13 M9 1 L 13 5 L 9 9" />
              </svg>
            </span>
          </div>

          {/* Connecting line behind tiles (desktop) */}
          <div className="hidden md:block absolute top-[58px] left-6 right-6 h-px bg-brand-navy/10 z-0" />

          {/* Scroll-driven progress fill on the desktop connector */}
          <motion.div
            style={{ scaleX: scrollYProgress, transformOrigin: '0% 50%' }}
            className="hidden md:block absolute top-[58px] left-6 right-6 h-px bg-brand-teal z-0 origin-left"
          />

          {/* Mobile: horizontal scroll-snap carousel | Desktop: grid */}
          <div className="-mx-6 md:mx-0 px-6 md:px-0 overflow-x-auto md:overflow-visible no-scrollbar snap-x snap-mandatory md:snap-none">
            <div className="flex md:grid md:grid-cols-2 lg:grid-cols-5 gap-3 md:gap-4 relative z-10 pb-2 md:pb-0">
              {steps.map((step, idx) => {
                const isActive = active === step.id;
                return (
                  <motion.button
                    type="button"
                    key={step.id}
                    onClick={() => onTileClick(step.id)}
                    initial={{ opacity: 0, y: 12 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: '-40px' }}
                    transition={{ duration: 0.35, delay: idx * 0.05 }}
                    aria-pressed={isActive}
                    className={`text-left relative rounded-2xl border p-4 md:p-5 transition-all duration-300 flex-shrink-0 w-[72vw] max-w-[260px] md:w-auto md:max-w-none snap-center md:snap-align-none ${
                      isActive
                        ? 'bg-white border-brand-teal shadow-lg shadow-brand-teal/15 ring-2 ring-brand-teal/20 md:-translate-y-0.5'
                        : 'bg-white border-brand-navy/10 hover:border-brand-cyan hover:shadow-md md:hover:-translate-y-0.5'
                    }`}
                  >
                    <div className="flex items-center gap-2 mb-2.5">
                      <div
                        className={`w-9 h-9 rounded-xl flex items-center justify-center font-bold text-sm transition-colors ${
                          isActive
                            ? 'bg-brand-teal text-white'
                            : 'bg-brand-mist text-brand-navy/70'
                        }`}
                      >
                        {step.id}
                      </div>
                      <div className={`${isActive ? 'text-brand-teal' : 'text-brand-navy/40'} transition-colors`}>
                        {step.icon}
                      </div>
                    </div>
                    <h3 className="font-bold text-brand-navy text-sm md:text-base leading-tight mb-1.5">
                      {step.title}
                    </h3>
                    <p className="text-xs text-brand-navy/60 leading-snug">{step.shortDesc}</p>
                  </motion.button>
                );
              })}
            </div>
          </div>

          {/* Detail panel below the row */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeStep.id}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.25 }}
              className="mt-6 md:mt-8 bg-brand-navy text-white rounded-2xl overflow-hidden shadow-xl"
            >
              <div className="h-1 bg-brand-teal" />
              <div className="p-6 md:p-7">
                <div className="flex flex-col md:flex-row md:items-start md:gap-8 gap-4">
                  <div className="md:w-1/3">
                    <div className="flex items-center gap-3 mb-2">
                      <div className="w-9 h-9 rounded-xl bg-brand-teal text-white flex items-center justify-center font-bold text-sm">
                        {activeStep.id}
                      </div>
                      <h3 className="text-xl md:text-2xl font-bold text-white leading-tight">
                        {activeStep.title}
                      </h3>
                    </div>
                    <p className="text-sm text-brand-mist/85 leading-relaxed">
                      {activeStep.desc}
                    </p>
                  </div>
                  <div className="md:w-2/3 grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="bg-white/[0.06] border border-white/10 rounded-xl p-4">
                      <h4 className="text-[10px] font-bold text-brand-pink tracking-[0.25em] uppercase mb-1.5">
                        What AI Does
                      </h4>
                      <p className="text-sm text-brand-mist/90 leading-relaxed">{activeStep.aiRole}</p>
                    </div>
                    <div className="bg-white/[0.06] border border-white/10 rounded-xl p-4">
                      <h4 className="text-[10px] font-bold text-brand-cyan tracking-[0.25em] uppercase mb-1.5">
                        What Experts Do
                      </h4>
                      <p className="text-sm text-brand-mist/90 leading-relaxed">{activeStep.expertRole}</p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Bottom callout — compact */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-6 bg-white border border-brand-teal/30 rounded-xl px-5 py-4 flex items-start gap-3 shadow-sm"
        >
          <Target size={16} className="text-brand-teal flex-shrink-0 mt-0.5" />
          <p className="text-brand-navy/80 leading-relaxed text-sm">
            Experts are involved at every step — but <span className="font-bold text-brand-navy">Expert Calibration</span> is the pivotal stage where they provide value that standard AI workflows can't replicate.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default ArchitectureStack;
