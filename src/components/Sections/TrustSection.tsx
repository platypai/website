import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Lock, Library, Network, ListChecks, RefreshCcw } from 'lucide-react';
import PlatypusMark from '../Brand/PlatypusMark';

interface Pillar {
  n: string;
  Icon: typeof Lock;
  title: string;
  body: string;
  why: string;
}

const pillars: Pillar[] = [
  {
    n: '01',
    Icon: Lock,
    title: 'Confidentiality-aware agentic workflows',
    body: 'Applications and workflows can switch between online, cloud-secure, and offline modes based on the sensitivity of the material.',
    why: 'Sensitive projects do not need to use the same AI path as low-risk content.',
  },
  {
    n: '02',
    Icon: Library,
    title: 'Bespoke skills and expert workflow library',
    body: 'Reusable workflow patterns capture learning architecture, assessment design, knowledge structuring, content QA, simulation logic, and business output rules.',
    why: 'Expert thinking becomes repeatable instead of remaining trapped in individual reviewers.',
  },
  {
    n: '03',
    Icon: Network,
    title: 'RAG + Context Management',
    body: 'Source-grounded RAG combined with curated context packs, wiki-style knowledge maps, reusable examples, and task-specific memory structures.',
    why: 'The system retrieves what matters and carries forward the right context without flooding the model.',
  },
  {
    n: '04',
    Icon: ListChecks,
    title: 'Layered quality audits',
    body: 'Outputs pass through sample checks, rubric checks, source checks, bias and fairness checks, format checks, and expert escalation where needed.',
    why: 'Quality is stabilised across batches, not judged only at the end.',
  },
  {
    n: '05',
    Icon: RefreshCcw,
    title: 'Iterative production intelligence',
    body: 'Each production cycle improves prompts, agents, templates, checklists, and source structures.',
    why: 'The workflow gets stronger as volume increases.',
  },
];

const TrustSection = () => {
  const ref = useRef<HTMLElement | null>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] });
  const glowY = useTransform(scrollYProgress, [0, 1], [-60, 60]);

  return (
    <section
      ref={ref}
      id="trust"
      className="relative py-16 md:py-24 bg-brand-navy text-white overflow-hidden"
    >
      {/* Top accent strip */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-brand-teal via-brand-cyan to-brand-pink" />

      <motion.div
        style={{ y: glowY }}
        className="absolute inset-0 pointer-events-none"
      >
        <div className="absolute -top-32 left-1/4 w-[28rem] h-[28rem] bg-brand-teal/15 rounded-full blur-3xl" />
        <div className="absolute -bottom-32 right-1/4 w-[28rem] h-[28rem] bg-brand-pink/15 rounded-full blur-3xl" />
      </motion.div>

      <div
        className="absolute inset-0 opacity-[0.07] pointer-events-none"
        style={{
          backgroundImage: 'radial-gradient(rgba(202,240,248,0.6) 1px, transparent 1px)',
          backgroundSize: '32px 32px',
        }}
      />

      {/* Subtle platypus motif watermark on the dark section */}
      <div className="hidden lg:block absolute right-[-40px] top-12 pointer-events-none">
        <PlatypusMark size={260} opacity={0.08} />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="mb-10 md:mb-14 max-w-3xl">
          <span className="text-brand-pink font-bold tracking-[0.25em] text-xs uppercase mb-3 block">
            Trust & Security
          </span>
          <h2 className="text-4xl md:text-5xl font-bold leading-[1.05] mb-5">
            Trust is designed into the workflow.
            <br />
            Not patched onto the output.
          </h2>
          <p className="text-base md:text-lg text-brand-mist/80 leading-relaxed">
            Our core team's careers have been built on the trust of the credibility and value they represent. We engineer the same credibility into our design, workflows, and processes — upfront, so that scale and speed stay stable and dependable.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5">
          {pillars.map((p, idx) => (
            <motion.div
              key={p.n}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.4, delay: (idx % 3) * 0.07 }}
              className="bg-white/[0.04] border border-white/10 rounded-2xl p-5 md:p-6 hover:bg-white/[0.07] hover:border-brand-teal/40 transition-all relative overflow-hidden flex flex-col h-full"
            >
              <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-brand-teal/40 to-transparent" />
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-xl bg-brand-teal/15 text-brand-teal flex items-center justify-center">
                  <p.Icon size={18} />
                </div>
                <span className="text-[10px] font-bold text-brand-pink tracking-[0.2em]">
                  {p.n}
                </span>
              </div>

              <h3 className="font-bold text-white text-base md:text-lg mb-2 leading-tight">
                {p.title}
              </h3>
              <p className="text-sm text-brand-mist/75 leading-relaxed mb-4 flex-1">{p.body}</p>

              <div className="mt-auto pt-3 border-t border-white/10">
                <div className="text-[9px] font-bold text-brand-cyan tracking-[0.25em] uppercase mb-1">
                  Why it matters
                </div>
                <p className="text-xs text-brand-mist/80 leading-relaxed">{p.why}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustSection;
