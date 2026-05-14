import { useState } from 'react';
import type { ReactNode } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Layers, Database, Target, Settings, Monitor, ChevronRight } from 'lucide-react';

interface Step {
  id: number;
  title: string;
  icon: ReactNode;
  desc: string;
  aiRole: string;
  expertRole: string;
  accent: string;        // tailwind text color
  accentBg: string;      // tailwind bg color
  accentRing: string;    // tailwind ring color
}

const steps: Step[] = [
  {
    id: 5,
    title: 'Output Systems',
    icon: <Monitor size={20} />,
    desc: 'Apps, learning products, knowledge platforms, rapid prototypes, insights and recommendation reports, transformation guidance.',
    aiRole: 'Handles interaction, retrieval, smart summaries, and adaptive flow across formats.',
    expertRole: 'Define intent boundaries, user guidance, validation behavior, and learning usefulness.',
    accent: 'text-brand-pink',
    accentBg: 'bg-brand-pink',
    accentRing: 'ring-brand-pink/30',
  },
  {
    id: 4,
    title: 'AI Workflow Engine',
    icon: <Settings size={20} />,
    desc: 'Agentic workflows for creating the knowledge base, output-based production workflows, quality and iterative updates, client input incorporation, and testing.',
    aiRole: 'Extracts, structures, drafts, rewrites, tags, and formats content at scale.',
    expertRole: 'Set templates, tone, instructional quality rules, and review criteria.',
    accent: 'text-brand-teal',
    accentBg: 'bg-brand-teal',
    accentRing: 'ring-brand-teal/30',
  },
  {
    id: 3,
    title: 'Expert Calibration',
    icon: <Target size={20} />,
    desc: 'Learning architecture, content strategy, prototype design, learning and format blend, deployment strategies, scoring rubrics, tracking and reporting workflows.',
    aiRole: 'Speeds source analysis, structure proposals, and first-pass architecture options.',
    expertRole: 'Define capability logic, sequencing, modality balance, and design quality.',
    accent: 'text-brand-pink',
    accentBg: 'bg-brand-pink',
    accentRing: 'ring-brand-pink/30',
  },
  {
    id: 2,
    title: 'Knowledge Architecture',
    icon: <Database size={20} />,
    desc: 'Data collation, extraction, and structuring, conversion to indexed metadata-enriched memory banks, custom vector RAG creation.',
    aiRole: 'Supports ingestion, extraction, semantic structuring, and metadata enrichment.',
    expertRole: 'Define the knowledge model, boundaries, taxonomy, and validation rules.',
    accent: 'text-brand-teal',
    accentBg: 'bg-brand-teal',
    accentRing: 'ring-brand-teal/30',
  },
  {
    id: 1,
    title: 'Business Need',
    icon: <Layers size={20} />,
    desc: 'Needs and gaps analysis, open-ended consultation, client onboarding, stakeholder interviews, scope definition, initial service architecture.',
    aiRole: 'Supports pattern analysis, use-case clustering, and initial feasibility framing.',
    expertRole: 'Diagnose opportunity quality, define practical use cases, and filter out noise.',
    accent: 'text-brand-pink',
    accentBg: 'bg-brand-pink',
    accentRing: 'ring-brand-pink/30',
  },
];

const ArchitectureStack = () => {
  const [activeStep, setActiveStep] = useState<number | null>(null);

  return (
    <section id="architecture" className="py-16 md:py-24 bg-gradient-to-b from-white via-brand-mist to-white relative">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-12 md:mb-16">
          <span className="eyebrow mb-3 block">The Architecture</span>
          <h2 className="text-4xl md:text-5xl font-bold text-brand-navy leading-[1.05] mb-5">
            Expert-in-the-Loop is not a review step.
            <br />
            It is the architecture.
          </h2>
          <p className="text-base md:text-lg text-brand-navy/75 max-w-2xl mx-auto leading-relaxed">
            We are consulting-first. We work with clients to identify the business need and design custom solutions — starting from the bottom of the stack and building up.
          </p>
        </div>

        <div className="relative">
          <div className="text-center mb-6">
            <span className="text-brand-teal font-bold tracking-[0.25em] text-xs uppercase">
              Expertise Stack
            </span>
          </div>

          <div className="flex flex-col space-y-3 relative">
            {/* Connecting vertical line */}
            <div className="absolute left-[34px] top-10 bottom-10 w-0.5 bg-gradient-to-b from-brand-teal/30 via-brand-pink/20 to-brand-teal/30 z-0 hidden md:block" />

            {steps.map((step, idx) => {
              const isActive = activeStep === step.id;
              return (
                <div key={step.id} className="relative z-10">
                  <motion.button
                    type="button"
                    onClick={() => setActiveStep(isActive ? null : step.id)}
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: '-40px' }}
                    transition={{ duration: 0.4, delay: idx * 0.06 }}
                    className={`w-full text-left bg-white border rounded-xl p-5 md:p-6 cursor-pointer transition-all duration-300 flex flex-col md:flex-row items-start md:items-center gap-4 md:gap-6 shadow-sm ${
                      isActive
                        ? `border-transparent ring-2 ${step.accentRing} shadow-xl`
                        : 'border-brand-navy/10 hover:border-brand-cyan'
                    }`}
                    aria-expanded={isActive}
                  >
                    <div
                      className={`w-14 h-14 rounded-2xl flex items-center justify-center font-bold text-2xl flex-shrink-0 transition-colors ${
                        isActive
                          ? `${step.accentBg} text-white shadow-lg`
                          : 'bg-brand-mist text-brand-navy'
                      }`}
                    >
                      {step.id}
                    </div>

                    <div className="flex-1">
                      <div className="flex items-center space-x-2.5 mb-1">
                        <div className={isActive ? step.accent : 'text-brand-navy/40'}>
                          {step.icon}
                        </div>
                        <h3 className="text-xl md:text-2xl font-bold text-brand-navy">
                          {step.title}
                        </h3>
                      </div>
                      <p className="text-brand-navy/65 leading-relaxed text-sm">{step.desc}</p>
                    </div>

                    <div className="hidden md:block text-brand-navy/30">
                      <ChevronRight
                        size={22}
                        className={`transition-all duration-300 ${
                          isActive ? `${step.accent} translate-x-1` : ''
                        }`}
                      />
                    </div>
                  </motion.button>

                  <AnimatePresence>
                    {isActive && (
                      <motion.div
                        initial={{ opacity: 0, height: 0, marginTop: 0 }}
                        animate={{ opacity: 1, height: 'auto', marginTop: 10 }}
                        exit={{ opacity: 0, height: 0, marginTop: 0 }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden bg-brand-navy rounded-xl border border-brand-teal/30 mx-2 md:mx-10 shadow-2xl relative z-10"
                      >
                        <div className={`h-1 ${step.accentBg}`} />
                        <div className="p-5 md:p-6 grid grid-cols-1 md:grid-cols-2 gap-5">
                          <div>
                            <h4 className="text-brand-pink font-semibold text-[10px] tracking-[0.25em] uppercase mb-2">
                              What AI Does
                            </h4>
                            <p className="text-brand-mist/90 text-sm leading-relaxed">
                              {step.aiRole}
                            </p>
                          </div>
                          <div>
                            <h4 className="text-brand-cyan font-semibold text-[10px] tracking-[0.25em] uppercase mb-2">
                              What Experts Do
                            </h4>
                            <p className="text-brand-mist/90 text-sm leading-relaxed">
                              {step.expertRole}
                            </p>
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>

                  {idx < steps.length - 1 && (
                    <div className="w-full flex justify-center py-1 text-brand-navy/20">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <polyline points="18 15 12 9 6 15" />
                      </svg>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* Bottom callout */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-10 bg-white border border-brand-teal/30 rounded-xl p-6 flex items-start space-x-4 shadow-sm relative overflow-hidden"
        >
          <div className="absolute top-0 left-0 bottom-0 w-1 bg-gradient-to-b from-brand-teal to-brand-pink" />
          <div className="w-10 h-10 rounded-full bg-brand-mist flex items-center justify-center flex-shrink-0">
            <Target size={18} className="text-brand-teal" />
          </div>
          <p className="text-brand-navy/80 leading-relaxed text-sm">
            The expert layer isn't the only expert intervention — our experts are involved at every level. This is the <span className="font-bold text-brand-navy">pivotal stage</span> where they provide the level of input and value that cannot be replicated by standard AI workflows.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default ArchitectureStack;
