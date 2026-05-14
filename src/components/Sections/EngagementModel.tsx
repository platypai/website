import { motion } from 'framer-motion';

interface Stage {
  n: string;
  title: string;
  body: string;
  output: string;
  tone: 'navy' | 'teal' | 'pink' | 'cyan' | 'mix';
}

const stages: Stage[] = [
  {
    n: '01',
    title: 'Discover',
    body: 'Work with stakeholders to understand business need, source reality, audience, risk, and success criteria.',
    output: 'Problem map',
    tone: 'navy',
  },
  {
    n: '02',
    title: 'Frame',
    body: 'Identify whether the need is a learning system, knowledge system, workflow system, app prototype, or blended solution.',
    output: 'Solution direction',
    tone: 'teal',
  },
  {
    n: '03',
    title: 'Design',
    body: 'Create knowledge architecture, workflow logic, expert checkpoints, tool choices, and output model.',
    output: 'Build blueprint',
    tone: 'cyan',
  },
  {
    n: '04',
    title: 'Scale',
    body: 'Run production or prototype development based on scope, confidentiality, complexity, and integration requirements.',
    output: 'Working system',
    tone: 'pink',
  },
  {
    n: '05',
    title: 'Improve',
    body: 'Use audits, user feedback, and production data to refine quality, efficiency, and usability.',
    output: 'Repeatable engine',
    tone: 'mix',
  },
];

const toneClasses = {
  navy: {
    chipBg: 'bg-brand-navy',
    chipText: 'text-white',
    outputBg: 'bg-brand-navy/5',
    outputText: 'text-brand-navy',
    ring: 'ring-brand-navy/20',
  },
  teal: {
    chipBg: 'bg-brand-teal',
    chipText: 'text-white',
    outputBg: 'bg-brand-teal/10',
    outputText: 'text-brand-teal',
    ring: 'ring-brand-teal/20',
  },
  cyan: {
    chipBg: 'bg-brand-cyan',
    chipText: 'text-brand-navy',
    outputBg: 'bg-brand-cyan/15',
    outputText: 'text-[#0077B6]',
    ring: 'ring-brand-cyan/30',
  },
  pink: {
    chipBg: 'bg-brand-pink',
    chipText: 'text-white',
    outputBg: 'bg-brand-pink/10',
    outputText: 'text-brand-pink',
    ring: 'ring-brand-pink/20',
  },
  mix: {
    chipBg: 'bg-gradient-to-br from-brand-teal to-brand-pink',
    chipText: 'text-white',
    outputBg: 'bg-gradient-to-r from-brand-teal/10 to-brand-pink/10',
    outputText: 'text-brand-navy',
    ring: 'ring-brand-pink/20',
  },
} as const;

const EngagementModel = () => {
  return (
    <section className="py-16 md:py-24 bg-white relative overflow-hidden">
      <div className="absolute inset-0 bg-dotted opacity-30 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="mb-10 md:mb-14 max-w-3xl">
          <span className="eyebrow mb-3 block">Engagement Model</span>
          <h2 className="text-4xl md:text-5xl font-bold text-brand-navy leading-[1.05] mb-4">
            You do not need to arrive
            <br />
            with a perfect brief.
          </h2>
          <p className="text-base md:text-lg text-brand-navy/70 leading-relaxed">
            Often the real value starts before the problem is fully articulated. We help diagnose where AI can genuinely improve learning, knowledge, content, workflow, or product experience — and where it should not be forced.
          </p>
        </div>

        <div className="text-center mb-6">
          <span className="text-xs font-bold text-brand-navy/45 tracking-[0.25em] uppercase">
            Expertise → Workflow → Intelligence → Output
          </span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 md:gap-5">
          {stages.map((stage, idx) => {
            const t = toneClasses[stage.tone];
            return (
              <motion.div
                key={stage.n}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.4, delay: idx * 0.08 }}
                className={`relative bg-white rounded-2xl border border-brand-navy/10 p-5 md:p-6 shadow-sm hover:shadow-lg hover:ring-2 ${t.ring} transition-all flex flex-col`}
              >
                <div className={`w-11 h-11 rounded-xl ${t.chipBg} ${t.chipText} font-bold flex items-center justify-center mb-4 text-sm tracking-wide shadow-sm`}>
                  {stage.n}
                </div>
                <h3 className="text-lg font-bold text-brand-navy mb-2">{stage.title}</h3>
                <p className="text-xs text-brand-navy/65 leading-relaxed mb-4 flex-1">
                  {stage.body}
                </p>
                <div className={`mt-auto pt-3 border-t border-dashed border-brand-navy/10`}>
                  <div className="text-[9px] font-bold text-brand-navy/45 tracking-[0.25em] uppercase mb-1">
                    Output
                  </div>
                  <div className={`text-sm font-bold ${t.outputText}`}>{stage.output}</div>
                </div>

                {idx < stages.length - 1 && (
                  <div className="hidden lg:flex absolute -right-3 top-1/2 -translate-y-1/2 w-6 h-6 rounded-full bg-white border border-brand-navy/10 items-center justify-center text-brand-navy/40 z-10">
                    <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="9 18 15 12 9 6" />
                    </svg>
                  </div>
                )}
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default EngagementModel;
