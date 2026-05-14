import { useEffect, useState } from 'react';
import type { ReactNode } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUpRight, X, Sparkles, ShieldCheck } from 'lucide-react';
import { caseStudyPrograms } from '../../data/caseStudies';
import type { CaseStudyProgram } from '../../data/caseStudies';

const CaseStudies = () => {
  const [activeProgram, setActiveProgram] = useState<CaseStudyProgram | null>(null);

  // Close on Esc; lock body scroll while modal open
  useEffect(() => {
    if (!activeProgram) return;

    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setActiveProgram(null);
    };
    document.addEventListener('keydown', handleKey);
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', handleKey);
      document.body.style.overflow = prevOverflow;
    };
  }, [activeProgram]);

  return (
    <section
      id="practice"
      className="py-24 md:py-32 bg-white relative overflow-hidden border-t border-brand-navy/5"
    >
      <div className="absolute inset-0 z-0 bg-dotted opacity-50 pointer-events-none" />
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-brand-cyan/10 to-transparent z-0 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="mb-16 max-w-3xl">
          <span className="eyebrow mb-4 block">In Practice</span>
          <h2 className="text-4xl md:text-5xl font-bold text-brand-navy leading-[1.1] mb-6">
            Four strategic programs.<br />Built on the same operating discipline.
          </h2>
          <p className="text-lg text-brand-navy/70 leading-relaxed">
            Each program rolls up multiple client engagements — across financial services, healthcare, education, and enterprise — into a unified value proposition. The Expert-in-the-Loop architecture is the constant; the surface area changes.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {caseStudyPrograms.map((program, idx) => (
            <motion.button
              key={program.id}
              type="button"
              onClick={() => setActiveProgram(program)}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: (idx % 2) * 0.1 }}
              className="group text-left bg-white border border-brand-navy/10 hover:border-brand-teal/60 rounded-2xl p-8 md:p-10 transition-all duration-300 hover:shadow-xl hover:-translate-y-0.5 flex flex-col relative overflow-hidden"
            >
              {/* Decorative corner gradient */}
              <div className="absolute -top-12 -right-12 w-40 h-40 bg-gradient-to-br from-brand-cyan/30 to-transparent rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              <div className="relative z-10 flex-1">
                <div className="flex items-center gap-2 mb-5 flex-wrap">
                  <span className="inline-block px-3 py-1 rounded-full bg-brand-navy text-white text-[10px] font-bold tracking-wider uppercase">
                    Program 0{idx + 1}
                  </span>
                  <span className="inline-block px-3 py-1 rounded-full border border-brand-navy/15 text-brand-navy/70 text-[10px] font-bold tracking-wider uppercase">
                    {program.categoryLabel}
                  </span>
                </div>

                <h3 className="text-2xl md:text-[28px] font-bold text-brand-navy mb-3 leading-tight group-hover:text-brand-teal transition-colors">
                  {program.title}
                </h3>
                <p className="text-brand-navy/70 leading-relaxed mb-6">
                  {program.tagline}
                </p>

                <div className="border-t border-dashed border-brand-navy/10 pt-5">
                  <div className="text-[10px] font-bold text-brand-navy/40 tracking-[0.2em] uppercase mb-3">
                    Rolled-up engagements
                  </div>
                  <ul className="space-y-2">
                    {program.engagements.map((eng) => (
                      <li key={eng.title} className="flex items-start text-sm text-brand-navy/80">
                        <span className="w-1.5 h-1.5 rounded-full bg-brand-teal mt-2 mr-3 flex-shrink-0" />
                        <span>
                          <span className="font-semibold">{eng.sector}.</span>{' '}
                          <span className="text-brand-navy/70">{eng.headline}</span>
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="mt-8 flex items-center justify-between relative z-10">
                <span className="text-brand-teal font-semibold text-sm tracking-wide group-hover:translate-x-0.5 transition-transform inline-flex items-center">
                  Read the program
                  <ArrowUpRight
                    size={16}
                    className="ml-1.5 transform group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform"
                  />
                </span>
                <div className="flex gap-1.5">
                  {program.tags.map((t) => (
                    <span
                      key={t}
                      className="text-[10px] font-medium text-brand-navy/40 uppercase tracking-wider"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </motion.button>
          ))}
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
            {/* Backdrop */}
            <div className="absolute inset-0 bg-brand-navy/60 backdrop-blur-sm" />

            <motion.div
              initial={{ y: 40, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 40, opacity: 0 }}
              transition={{ duration: 0.3, ease: 'easeOut' }}
              className="relative bg-white w-full max-w-3xl max-h-[92vh] overflow-y-auto rounded-t-3xl md:rounded-2xl shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Sticky header */}
              <div className="sticky top-0 z-10 bg-white/95 backdrop-blur border-b border-brand-navy/10 px-6 md:px-10 py-5 flex items-start justify-between gap-4">
                <div>
                  <div className="text-[10px] font-bold text-brand-pink tracking-[0.25em] uppercase mb-1.5">
                    {activeProgram.categoryLabel}
                  </div>
                  <h3
                    id="case-study-title"
                    className="text-xl md:text-2xl font-bold text-brand-navy leading-tight"
                  >
                    {activeProgram.title}
                  </h3>
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

              <div className="px-6 md:px-10 py-8 space-y-8">
                <p className="text-lg text-brand-navy/80 leading-relaxed">
                  {activeProgram.brief}
                </p>

                <Section title="The Challenge">
                  <p className="text-brand-navy/75 leading-relaxed">{activeProgram.challenge}</p>
                </Section>

                <Section title="Our Approach">
                  <ul className="space-y-2.5">
                    {activeProgram.approach.map((line, i) => (
                      <li key={i} className="flex items-start text-brand-navy/80 leading-relaxed">
                        <span className="w-1.5 h-1.5 rounded-full bg-brand-teal mt-2.5 mr-3 flex-shrink-0" />
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

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="bg-brand-navy text-white rounded-xl p-6">
                    <div className="flex items-center gap-2 mb-2 text-brand-pink">
                      <Sparkles size={16} />
                      <span className="text-[10px] font-bold tracking-[0.2em] uppercase">What AI Did</span>
                    </div>
                    <p className="text-sm text-brand-mist/90 leading-relaxed">
                      {activeProgram.aiRole}
                    </p>
                  </div>
                  <div className="bg-brand-mist/60 border border-brand-navy/10 rounded-xl p-6">
                    <div className="flex items-center gap-2 mb-2 text-brand-teal">
                      <ShieldCheck size={16} />
                      <span className="text-[10px] font-bold tracking-[0.2em] uppercase">What Experts Did</span>
                    </div>
                    <p className="text-sm text-brand-navy/80 leading-relaxed">
                      {activeProgram.expertRole}
                    </p>
                  </div>
                </div>

                <Section title="Engagements In This Program">
                  <ul className="space-y-3">
                    {activeProgram.engagements.map((eng) => (
                      <li
                        key={eng.title}
                        className="border border-brand-navy/10 rounded-xl p-4 bg-white"
                      >
                        <div className="flex items-center gap-2 flex-wrap mb-1">
                          <span className="text-[10px] font-bold text-brand-teal tracking-[0.2em] uppercase">
                            {eng.sector}
                          </span>
                        </div>
                        <div className="font-semibold text-brand-navy">{eng.title}</div>
                        <div className="text-sm text-brand-navy/70 mt-1">{eng.headline}</div>
                      </li>
                    ))}
                  </ul>
                </Section>

                <div className="pt-2 flex flex-col sm:flex-row gap-3">
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
    <h4 className="text-[10px] font-bold text-brand-navy/50 tracking-[0.25em] uppercase mb-3">
      {title}
    </h4>
    {children}
  </div>
);

export default CaseStudies;
