import { useEffect, useState } from 'react';
import type { ReactNode } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUpRight, X, Sparkles, ShieldCheck, TrendingUp } from 'lucide-react';
import { caseStudyPrograms } from '../../data/caseStudies';
import type { CaseStudyProgram } from '../../data/caseStudies';

const accentMap = {
  teal: {
    bg: 'bg-brand-teal',
    text: 'text-brand-teal',
    soft: 'bg-brand-teal/10',
    border: 'border-brand-teal/30',
    gradient: 'from-brand-teal to-brand-cyan',
  },
  pink: {
    bg: 'bg-brand-pink',
    text: 'text-brand-pink',
    soft: 'bg-brand-pink/10',
    border: 'border-brand-pink/30',
    gradient: 'from-brand-pink to-[#FF8FA3]',
  },
  cyan: {
    bg: 'bg-brand-cyan',
    text: 'text-[#0077B6]',
    soft: 'bg-brand-cyan/20',
    border: 'border-brand-cyan/40',
    gradient: 'from-brand-cyan to-brand-teal',
  },
  navy: {
    bg: 'bg-brand-navy',
    text: 'text-brand-navy',
    soft: 'bg-brand-navy/5',
    border: 'border-brand-navy/20',
    gradient: 'from-brand-navy to-[#0d2444]',
  },
} as const;

const CaseStudies = () => {
  const [activeProgram, setActiveProgram] = useState<CaseStudyProgram | null>(null);

  useEffect(() => {
    if (!activeProgram) return;
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setActiveProgram(null);
    };
    document.addEventListener('keydown', handleKey);
    const prev = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', handleKey);
      document.body.style.overflow = prev;
    };
  }, [activeProgram]);

  return (
    <section
      id="practice"
      className="py-16 md:py-24 bg-white relative overflow-hidden border-t border-brand-navy/5"
    >
      <div className="absolute inset-0 z-0 bg-dotted opacity-40 pointer-events-none" />
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-brand-cyan/10 to-transparent z-0 pointer-events-none" />
      <div className="absolute top-1/4 -left-32 w-64 h-64 bg-brand-pink/10 rounded-full blur-3xl z-0 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="mb-10 md:mb-14 max-w-3xl">
          <span className="eyebrow mb-3 block">In Practice</span>
          <h2 className="text-4xl md:text-5xl font-bold text-brand-navy leading-[1.05] mb-4">
            What this looks like in practice.
          </h2>
          <p className="text-base md:text-lg text-brand-navy/70 leading-relaxed">
            Real engagements across information security, investment management, education leadership, legal IP, and fintech. Same Expert-in-the-Loop discipline; different surface area each time.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
          {caseStudyPrograms.map((program, idx) => {
            const a = accentMap[program.accent];
            return (
              <motion.button
                key={program.id}
                type="button"
                onClick={() => setActiveProgram(program)}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.45, delay: (idx % 3) * 0.08 }}
                className="group relative text-left bg-white border border-brand-navy/10 hover:border-transparent hover:ring-2 hover:ring-brand-teal/25 rounded-2xl p-6 transition-all duration-300 hover:shadow-xl hover:-translate-y-0.5 flex flex-col overflow-hidden"
              >
                {/* Colored top ribbon */}
                <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${a.gradient}`} />

                {/* Big metric */}
                <div className="flex items-baseline gap-3 mb-3">
                  <div className={`text-5xl md:text-6xl font-bold ${a.text} leading-none`}>
                    {program.metric}
                  </div>
                  <TrendingUp size={20} className={`${a.text} opacity-70`} />
                </div>
                <p className="text-xs font-semibold text-brand-navy/60 uppercase tracking-wider mb-5 leading-snug">
                  {program.metricLabel}
                </p>

                {/* Category chip */}
                <div className="mb-3">
                  <span className={`inline-block px-2.5 py-1 rounded-full ${a.soft} ${a.text} text-[10px] font-bold tracking-wider uppercase`}>
                    {program.categoryLabel}
                  </span>
                </div>

                {/* Title + tagline */}
                <h3 className="text-lg md:text-xl font-bold text-brand-navy mb-2 leading-tight group-hover:text-brand-teal transition-colors">
                  {program.title}
                </h3>
                <p className="text-sm text-brand-navy/70 leading-relaxed mb-5 flex-1">
                  {program.tagline}
                </p>

                {/* Domain */}
                <div className="pt-4 border-t border-dashed border-brand-navy/10 flex items-center justify-between">
                  <span className="text-xs font-semibold text-brand-navy/60">
                    {program.domain}
                  </span>
                  <span className={`${a.text} text-xs font-bold inline-flex items-center group-hover:translate-x-0.5 transition-transform`}>
                    Read case
                    <ArrowUpRight
                      size={14}
                      className="ml-1 transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform"
                    />
                  </span>
                </div>
              </motion.button>
            );
          })}
        </div>
      </div>

      {/* Modal */}
      <AnimatePresence>
        {activeProgram && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-[100] flex items-end md:items-center justify-center p-0 md:p-6"
            role="dialog"
            aria-modal="true"
            aria-labelledby="case-study-title"
            onClick={() => setActiveProgram(null)}
          >
            <div className="absolute inset-0 bg-brand-navy/60 backdrop-blur-sm" />

            <motion.div
              initial={{ y: 40, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 40, opacity: 0 }}
              transition={{ duration: 0.3, ease: 'easeOut' }}
              className="relative bg-white w-full max-w-3xl max-h-[92vh] overflow-y-auto rounded-t-3xl md:rounded-2xl shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <div className={`h-1 bg-gradient-to-r ${accentMap[activeProgram.accent].gradient}`} />

              <div className="sticky top-0 z-10 bg-white/95 backdrop-blur border-b border-brand-navy/10 px-6 md:px-10 py-5 flex items-start justify-between gap-4">
                <div>
                  <div className={`text-[10px] font-bold ${accentMap[activeProgram.accent].text} tracking-[0.25em] uppercase mb-1.5`}>
                    {activeProgram.categoryLabel}
                  </div>
                  <h3
                    id="case-study-title"
                    className="text-xl md:text-2xl font-bold text-brand-navy leading-tight"
                  >
                    {activeProgram.title}
                  </h3>
                  <div className="text-xs text-brand-navy/60 mt-1">
                    {activeProgram.sectorDetail}
                  </div>
                </div>
                <button
                  type="button"
                  onClick={() => setActiveProgram(null)}
                  className="flex-shrink-0 w-10 h-10 rounded-full bg-brand-navy/5 hover:bg-brand-navy hover:text-white text-brand-navy flex items-center justify-center transition-colors"
                  aria-label="Close case study"
                >
                  <X size={18} />
                </button>
              </div>

              <div className="px-6 md:px-10 py-7 space-y-7">
                {/* Hero metric */}
                <div className={`rounded-2xl p-6 ${accentMap[activeProgram.accent].soft} border ${accentMap[activeProgram.accent].border} flex items-center gap-5`}>
                  <div className={`text-5xl md:text-6xl font-bold ${accentMap[activeProgram.accent].text} leading-none`}>
                    {activeProgram.metric}
                  </div>
                  <div>
                    <div className="text-xs font-bold text-brand-navy/55 uppercase tracking-wider mb-1">
                      The Outcome
                    </div>
                    <div className="text-brand-navy font-semibold leading-snug">
                      {activeProgram.metricLabel}
                    </div>
                  </div>
                </div>

                <p className="text-base md:text-lg text-brand-navy/80 leading-relaxed">
                  {activeProgram.brief}
                </p>

                <Section title="The Challenge">
                  <p className="text-brand-navy/75 leading-relaxed">{activeProgram.challenge}</p>
                </Section>

                <Section title="Our Approach">
                  <ul className="space-y-2.5">
                    {activeProgram.approach.map((line, i) => (
                      <li key={i} className="flex items-start text-brand-navy/80 leading-relaxed">
                        <span className={`w-1.5 h-1.5 rounded-full ${accentMap[activeProgram.accent].bg} mt-2.5 mr-3 flex-shrink-0`} />
                        <span>{line}</span>
                      </li>
                    ))}
                  </ul>
                </Section>

                <Section title="Outcome">
                  <ul className="space-y-2.5">
                    {activeProgram.outcome.map((line, i) => (
                      <li key={i} className="flex items-start text-brand-navy/80 leading-relaxed">
                        <span className="w-1.5 h-1.5 rounded-full bg-brand-pink mt-2.5 mr-3 flex-shrink-0" />
                        <span>{line}</span>
                      </li>
                    ))}
                  </ul>
                </Section>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  <div className="bg-brand-navy text-white rounded-xl p-5">
                    <div className="flex items-center gap-2 mb-1.5 text-brand-pink">
                      <Sparkles size={14} />
                      <span className="text-[10px] font-bold tracking-[0.2em] uppercase">
                        What AI Did
                      </span>
                    </div>
                    <p className="text-sm text-brand-mist/90 leading-relaxed">
                      {activeProgram.aiRole}
                    </p>
                  </div>
                  <div className="bg-brand-mist border border-brand-navy/10 rounded-xl p-5">
                    <div className="flex items-center gap-2 mb-1.5 text-brand-teal">
                      <ShieldCheck size={14} />
                      <span className="text-[10px] font-bold tracking-[0.2em] uppercase">
                        What Experts Did
                      </span>
                    </div>
                    <p className="text-sm text-brand-navy/80 leading-relaxed">
                      {activeProgram.expertRole}
                    </p>
                  </div>
                </div>

                <div className="pt-1 flex flex-col sm:flex-row gap-3">
                  <a
                    href="mailto:arpan@platypai.one?subject=PlatypAI%20%E2%80%94%20Program%20enquiry"
                    className="flex-1 px-6 py-3.5 bg-brand-navy text-white font-semibold rounded-lg hover:bg-brand-teal transition-colors text-center"
                  >
                    Start a similar program
                  </a>
                  <button
                    type="button"
                    onClick={() => setActiveProgram(null)}
                    className="px-6 py-3.5 border border-brand-navy/15 text-brand-navy font-semibold rounded-lg hover:bg-brand-mist transition-colors"
                  >
                    Close
                  </button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

const Section = ({ title, children }: { title: string; children: ReactNode }) => (
  <div>
    <h4 className="text-[10px] font-bold text-brand-navy/50 tracking-[0.25em] uppercase mb-2.5">
      {title}
    </h4>
    {children}
  </div>
);

export default CaseStudies;
