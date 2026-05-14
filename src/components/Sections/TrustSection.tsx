import { motion } from 'framer-motion';
import { ShieldCheck, Lock, ScrollText, Network, EyeOff, GitBranch } from 'lucide-react';
import { siteContent } from '../../data/siteContent';

const trustPillars = [
  {
    Icon: ShieldCheck,
    title: 'Bounded AI Systems',
    desc: 'Every AI surface ships inside expert-defined intent boundaries, validation rules, and quality gates — not as an open-ended chat.',
  },
  {
    Icon: Lock,
    title: 'Confidentiality by Design',
    desc: 'We match each engagement to the right trust model — private deployments, isolated workspaces, and access controls before tooling.',
  },
  {
    Icon: ScrollText,
    title: 'Auditable Workflows',
    desc: 'Source trust rules, review gates, and decision logs are built into the workflow so quality and compliance are visible end-to-end.',
  },
  {
    Icon: Network,
    title: 'Source-Grounded Output',
    desc: 'Validated source bases and citation discipline keep AI grounded — no untraceable generations entering critical content.',
  },
  {
    Icon: EyeOff,
    title: 'Human Oversight, Not Theater',
    desc: 'Expert review is structural, not cosmetic. Experts set the rubrics and decide when AI output gets to ship.',
  },
  {
    Icon: GitBranch,
    title: 'Reversible by Default',
    desc: 'Versioned content, governance cadence, and rollback paths so systems can evolve without losing institutional memory.',
  },
];

const TrustSection = () => {
  return (
    <section id="trust" className="relative py-24 md:py-32 bg-brand-navy text-white overflow-hidden">
      {/* Subtle texture */}
      <div className="absolute inset-0 opacity-[0.08] pointer-events-none"
           style={{
             backgroundImage:
               'radial-gradient(rgba(202,240,248,0.6) 1px, transparent 1px)',
             backgroundSize: '32px 32px',
           }}
      />
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-brand-teal/10 to-transparent pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 lg:sticky lg:top-32"
          >
            <span className="text-brand-pink font-bold tracking-[0.25em] text-xs uppercase mb-4 block">
              Trust & Governance
            </span>
            <h2 className="text-4xl md:text-5xl font-bold leading-[1.1] mb-6">
              AI without compromise.
            </h2>
            <p className="text-lg text-brand-mist/80 leading-relaxed mb-6">
              "Move fast and break things" is a luxury PlatypAI's clients do not have. Learning, clinical, compliance, and enterprise workflows ship into environments where the cost of bad output is real.
            </p>
            <p className="text-brand-mist/70 leading-relaxed">
              Trust isn't a layer we add at the end. It is how the system is built — from the trust model and source rules through the review gates, all the way to the deployment posture.
            </p>

            {/* Cross-cutting principles pulled directly from siteContent for consistency */}
            <div className="mt-10 space-y-3">
              {siteContent.crossCutting.map((p) => (
                <div
                  key={p.id}
                  className="flex items-start gap-3 p-4 rounded-xl bg-white/5 border border-white/10"
                >
                  <div className="w-1.5 h-1.5 rounded-full bg-brand-teal mt-2 flex-shrink-0" />
                  <div>
                    <div className="text-sm font-semibold text-white">{p.label}</div>
                    <div className="text-xs text-brand-mist/70 mt-0.5 leading-relaxed">
                      {p.description}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-5">
            {trustPillars.map((pillar, idx) => (
              <motion.div
                key={pillar.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.45, delay: (idx % 2) * 0.08 }}
                className="bg-white/[0.04] border border-white/10 rounded-2xl p-6 hover:bg-white/[0.07] hover:border-brand-teal/40 transition-all"
              >
                <div className="w-11 h-11 rounded-xl bg-brand-teal/15 text-brand-teal flex items-center justify-center mb-4">
                  <pillar.Icon size={20} />
                </div>
                <h3 className="font-bold text-white text-lg mb-2 leading-tight">
                  {pillar.title}
                </h3>
                <p className="text-sm text-brand-mist/75 leading-relaxed">{pillar.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrustSection;
