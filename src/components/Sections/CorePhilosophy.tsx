import { Fragment } from 'react';
import { motion } from 'framer-motion';

interface MethodologyFeature {
  label: string;
  desc: string;
}

interface Methodology {
  name: string;
  subtitle?: string;
  features: MethodologyFeature[];
  highlight?: boolean;
}

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

const methodologies: Methodology[] = [
  {
    name: 'AI-only',
    features: [
      { label: 'Workflow Design', desc: 'Generates from prompts.' },
      { label: 'Domain Logic', desc: 'Optimises for speed.' },
      { label: 'Context', desc: 'Context depends on the prompt.' },
      { label: 'Quality Control', desc: 'Quality varies by user.' },
      { label: 'Outcome', desc: 'Good for low-risk tasks.' },
    ],
  },
  {
    name: 'Human-in-the-Loop',
    features: [
      { label: 'Workflow Design', desc: 'Reviews output after generation.' },
      { label: 'Domain Logic', desc: 'Catches visible errors.' },
      { label: 'Context', desc: 'Context depends on reviewer interpretation.' },
      { label: 'Quality Control', desc: 'Improves selected drafts.' },
      { label: 'Outcome', desc: 'Useful for controlled content production.' },
    ],
  },
  {
    name: 'Expert-in-the-Loop',
    subtitle: 'Our Approach',
    features: [
      { label: 'Workflow Design', desc: 'Architects the workflow before generation begins.' },
      { label: 'Domain Logic', desc: 'Embeds domain logic and quality rules natively.' },
      { label: 'Context', desc: 'Structures context via taxonomies and rubrics.' },
      { label: 'Quality Control', desc: 'Ensures consistent quality through expert audits.' },
      { label: 'Outcome', desc: 'Creates repeatable, business-critical engines.' },
    ],
    highlight: true,
  },
];

const CorePhilosophy = () => {
  return (
    <section id="methodology" className="pt-0 pb-24 md:pb-32 bg-white relative overflow-hidden">
      {/* Top dark banner with the four core principles */}
      <div className="bg-brand-navy w-full py-14 md:py-20 px-6 relative z-10 shadow-xl">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-x-16 gap-y-10">
            {philosophyPoints.map((point, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="flex items-start"
              >
                <div className="w-2 h-2 rounded-full bg-brand-teal mt-2.5 mr-4 flex-shrink-0" />
                <p className="text-brand-mist/90 text-lg leading-relaxed">
                  <span className="font-bold text-white block mb-1">{point.title}</span>
                  {point.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Philosophy intro */}
      <div className="max-w-7xl mx-auto px-6 mt-24 md:mt-32 mb-16">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="eyebrow mb-4 block">The Core Philosophy</span>
          <h2 className="text-4xl md:text-5xl font-bold text-brand-navy leading-[1.1] mb-8 max-w-3xl">
            AI output is becoming the norm.
            <br />
            Expert input is still scarce.
          </h2>
          <div className="space-y-6 text-lg text-brand-navy/75 max-w-4xl leading-relaxed">
            <p>
              The learning industry is quickly adopting AI to generate content. That adoption is coming at the cost of design quality, expert judgment, and the ability to preserve quality at scale.
            </p>
            <p>
              PlatypAI works where that gap matters. We design AI workflows and products that capture expert perspective before production begins — and maintain it through production.
            </p>
          </div>
        </motion.div>
      </div>

      {/* Methodology comparison */}
      <div className="max-w-7xl mx-auto px-6 mt-16 md:mt-24">
        <span className="eyebrow mb-6 block">From AI-Only to Expert-in-the-Loop</span>

        {/* Desktop table */}
        <div className="hidden md:block w-full">
          <div className="grid grid-cols-4 bg-white border border-brand-navy/10 rounded-2xl overflow-hidden shadow-sm">
            <div className="col-span-1 p-6 border-b border-brand-navy/10 bg-brand-mist/60">
              <h3 className="font-bold text-brand-navy uppercase text-sm tracking-wider">
                Methodology
              </h3>
            </div>
            {methodologies.map((method, idx) => (
              <div
                key={idx}
                className={`col-span-1 p-6 border-b ${
                  method.highlight
                    ? 'bg-brand-navy text-white border-brand-navy'
                    : 'bg-white text-brand-navy border-brand-navy/10 border-l'
                }`}
              >
                <h3 className="font-bold text-lg">{method.name}</h3>
                {method.subtitle && (
                  <span className="text-brand-teal text-[10px] tracking-[0.25em] uppercase mt-1.5 block font-bold">
                    {method.subtitle}
                  </span>
                )}
              </div>
            ))}

            {methodologies[0].features.map((feature, rowIdx) => (
              <Fragment key={rowIdx}>
                <div className="col-span-1 p-6 border-b border-brand-navy/10 bg-brand-mist/60 flex items-center">
                  <span className="font-bold text-brand-navy/65 text-[11px] tracking-[0.2em] uppercase">
                    {feature.label}
                  </span>
                </div>
                {methodologies.map((method, colIdx) => (
                  <motion.div
                    key={`${rowIdx}-${colIdx}`}
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: colIdx * 0.1 + rowIdx * 0.05 }}
                    className={`col-span-1 p-6 border-b flex items-center ${
                      method.highlight
                        ? 'bg-brand-navy text-white border-brand-navy/80 border-t border-t-white/10'
                        : 'bg-white text-brand-navy/80 border-brand-navy/10 border-l'
                    }`}
                  >
                    <p className="text-sm leading-relaxed">{method.features[rowIdx].desc}</p>
                  </motion.div>
                ))}
              </Fragment>
            ))}
          </div>
        </div>

        {/* Mobile stacked cards */}
        <div className="md:hidden space-y-4">
          {methodologies.map((method, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.05 }}
              className={`rounded-2xl overflow-hidden border shadow-sm ${
                method.highlight
                  ? 'bg-brand-navy text-white border-brand-navy'
                  : 'bg-white text-brand-navy border-brand-navy/10'
              }`}
            >
              <div className="p-5 border-b border-current/10 flex items-baseline justify-between gap-3">
                <h3 className="font-bold text-lg">{method.name}</h3>
                {method.subtitle && (
                  <span className="text-brand-teal text-[10px] tracking-[0.25em] uppercase font-bold">
                    {method.subtitle}
                  </span>
                )}
              </div>
              <div className="divide-y divide-current/10">
                {method.features.map((f, i) => (
                  <div key={i} className="px-5 py-4">
                    <div
                      className={`text-[10px] font-bold tracking-[0.2em] uppercase mb-1 ${
                        method.highlight ? 'text-brand-teal' : 'text-brand-navy/55'
                      }`}
                    >
                      {f.label}
                    </div>
                    <div
                      className={`text-sm leading-relaxed ${
                        method.highlight ? 'text-brand-mist/90' : 'text-brand-navy/80'
                      }`}
                    >
                      {f.desc}
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CorePhilosophy;
