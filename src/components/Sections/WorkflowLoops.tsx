import { motion } from 'framer-motion';
import { Stethoscope, Compass, SlidersHorizontal, Inbox, ShieldCheck, FlaskConical, Rocket } from 'lucide-react';
import type { ReactNode } from 'react';

interface Step {
  n: string;
  title: string;
  desc: string;
  icon: ReactNode;
}

const loop1: Step[] = [
  { n: '01', title: 'Diagnose', desc: 'Clarify need, audience, risk.', icon: <Stethoscope size={16} /> },
  { n: '02', title: 'Architect', desc: 'Map sources and knowledge structure.', icon: <Compass size={16} /> },
  { n: '03', title: 'Calibrate', desc: 'Define exemplars, rubrics, scoring.', icon: <SlidersHorizontal size={16} /> },
];

const loop2: Step[] = [
  { n: '04', title: 'Ingest / Transform', desc: 'Ingest documents and inputs; extract, structure, format.', icon: <Inbox size={16} /> },
  { n: '05', title: 'Validate', desc: 'RAG checks, consistency, source trust.', icon: <ShieldCheck size={16} /> },
  { n: '06', title: 'Prototype', desc: 'Run samples, test quality, iterate.', icon: <FlaskConical size={16} /> },
  { n: '07', title: 'Deploy', desc: 'Ship courses, apps, reports at scale.', icon: <Rocket size={16} /> },
];

const WorkflowLoops = () => {
  return (
    <section className="py-16 md:py-24 bg-gradient-to-br from-brand-mist via-white to-brand-mist relative overflow-hidden">
      <div className="absolute -top-32 right-0 w-[28rem] h-[28rem] bg-brand-teal/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-32 left-0 w-[28rem] h-[28rem] bg-brand-pink/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="mb-10 md:mb-14 max-w-3xl">
          <span className="eyebrow mb-3 block">Workflow Methodology</span>
          <h2 className="text-4xl md:text-5xl font-bold text-brand-navy leading-[1.05] mb-4">
            Two loops. <span className="text-brand-teal">Expert-designed first.</span>
            <br />
            Then automation with expert audits.
          </h2>
          <p className="text-base md:text-lg text-brand-navy/70 leading-relaxed">
            PlatypAI does not jump from source material to generated output. We design the production system first, then run it at scale with targeted audits, refinements, and escalation points.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
          <LoopCard
            label="Loop 1"
            title="Establish the Process"
            subtitle="Expert designed · AI facilitated"
            tone="teal"
            steps={loop1}
          />
          <LoopCard
            label="Loop 2"
            title="Run at Scale with Expert Audits"
            subtitle="AI automated · Expert audited"
            tone="pink"
            steps={loop2}
          />
        </div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mt-8 md:mt-10 bg-white rounded-2xl border border-brand-navy/10 p-5 md:p-6 flex items-start gap-4 shadow-sm"
        >
          <div className="w-9 h-9 rounded-full bg-gradient-to-br from-brand-teal to-brand-pink text-white flex items-center justify-center font-bold text-sm flex-shrink-0">
            →
          </div>
          <p className="text-brand-navy/80 leading-relaxed text-sm">
            <span className="font-bold text-brand-navy">Handoff between loops.</span> Loop 2 begins only when the rubrics, exemplars, and structure from Loop 1 are signed off — so scale never outruns standards.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

interface LoopCardProps {
  label: string;
  title: string;
  subtitle: string;
  tone: 'teal' | 'pink';
  steps: Step[];
}

const LoopCard = ({ label, title, subtitle, tone, steps }: LoopCardProps) => {
  const isTeal = tone === 'teal';
  const accentText = isTeal ? 'text-brand-teal' : 'text-brand-pink';
  const accentBg = isTeal ? 'bg-brand-teal' : 'bg-brand-pink';
  const accentSoft = isTeal ? 'bg-brand-teal/10' : 'bg-brand-pink/10';
  const ribbon = isTeal
    ? 'from-brand-teal to-brand-cyan'
    : 'from-brand-pink to-[#FF8FA3]';

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.5 }}
      className="relative bg-white rounded-2xl border border-brand-navy/10 shadow-sm overflow-hidden"
    >
      <div className={`h-1 bg-gradient-to-r ${ribbon}`} />
      <div className="p-6 md:p-7">
        <div className="flex items-center gap-2 mb-3">
          <span className={`inline-block px-2.5 py-1 rounded-full ${accentSoft} ${accentText} text-[10px] font-bold tracking-[0.2em] uppercase`}>
            {label}
          </span>
          <span className="text-[10px] font-semibold text-brand-navy/45 tracking-[0.18em] uppercase">
            {subtitle}
          </span>
        </div>
        <h3 className="text-2xl font-bold text-brand-navy mb-5 leading-tight">{title}</h3>

        <ol className="space-y-3 relative">
          {/* Animated vertical connector — draws in as the card enters viewport */}
          <motion.div
            initial={{ scaleY: 0 }}
            whileInView={{ scaleY: 1 }}
            viewport={{ once: true, margin: '-30px' }}
            transition={{ duration: 0.6 + steps.length * 0.05, ease: 'easeOut' }}
            style={{ transformOrigin: 'top' }}
            className={`absolute left-[15px] top-3 bottom-3 w-px ${accentSoft}`}
          />
          {steps.map((step, idx) => (
            <motion.li
              key={step.n}
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-30px' }}
              transition={{ duration: 0.35, delay: idx * 0.1 }}
              className="flex items-start gap-3 relative"
            >
              <motion.div
                initial={{ scale: 0.6, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: true, margin: '-30px' }}
                transition={{ duration: 0.3, delay: 0.1 + idx * 0.1, ease: 'backOut' }}
                className={`w-8 h-8 rounded-full ${accentBg} text-white flex items-center justify-center flex-shrink-0 shadow-sm relative z-10`}
              >
                {step.icon}
              </motion.div>
              <div className="flex-1 pt-1">
                <div className="flex items-center gap-2">
                  <span className={`text-[10px] font-bold ${accentText} tracking-wider`}>
                    {step.n}
                  </span>
                  <h4 className="font-bold text-brand-navy text-sm">{step.title}</h4>
                </div>
                <p className="text-xs text-brand-navy/65 mt-0.5 leading-relaxed">{step.desc}</p>
              </div>
            </motion.li>
          ))}
        </ol>
      </div>
    </motion.div>
  );
};

export default WorkflowLoops;
