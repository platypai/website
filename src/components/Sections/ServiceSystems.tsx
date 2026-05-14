import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { BookOpen, Database, Settings, Cuboid, ChevronDown, Sparkles } from 'lucide-react';
import type { ReactNode } from 'react';
import { siteContent } from '../../data/siteContent';

interface SystemCardData {
  id: string;
  title: string;
  desc: string;
  icon: ReactNode;
  outputs: string[];
  watermark: string;
  categoryId: string;
}

const systems: SystemCardData[] = [
  {
    id: '01',
    title: 'Learning Systems',
    desc: 'Convert expertise into structured learning.',
    icon: <BookOpen size={20} />,
    outputs: ['Curricula', 'Assessments', 'Simulations', 'Storyboards'],
    watermark: 'TEACH',
    categoryId: 'learning-strategy',
  },
  {
    id: '02',
    title: 'Knowledge Systems',
    desc: 'Convert scattered information into usable intelligence.',
    icon: <Database size={20} />,
    outputs: ['Knowledge hubs', 'RAG systems', 'Repositories', 'Copilots'],
    watermark: 'ORGANISE',
    categoryId: 'enterprise-knowledge',
  },
  {
    id: '03',
    title: 'Workflow Systems',
    desc: 'Convert repeatable effort into automated production.',
    icon: <Settings size={20} />,
    outputs: [
      'Content pipelines',
      'Review flows',
      'Package generators',
      'Automated QA loops',
    ],
    watermark: 'AUTOMATE',
    categoryId: 'publishing-workflows',
  },
  {
    id: '04',
    title: 'Application Prototypes',
    desc: 'Convert business ideas into sophisticated AI product experiences.',
    icon: <Cuboid size={20} />,
    outputs: ['Dashboards', 'AI tools', 'Simulations', 'Product pilots'],
    watermark: 'PROTOTYPE',
    categoryId: 'enablement-apps',
  },
];

const ServiceSystems = () => {
  const [activeSystem, setActiveSystem] = useState<string | null>(null);

  return (
    <section id="systems" className="py-24 md:py-32 bg-white relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-14 max-w-3xl">
          <span className="eyebrow mb-4 block">Service Offerings</span>
          <h2 className="text-4xl md:text-5xl font-bold text-brand-navy leading-[1.1] mb-6">
            Four kinds of AI systems.
            <br />
            One operating discipline.
          </h2>
          <p className="text-lg text-brand-navy/70 leading-relaxed">
            We can slice what we do many ways. The core message: we design systems before products, and we provide value before services.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {systems.map((system, idx) => {
            const dataRef = siteContent.categories.find((c) => c.id === system.categoryId);
            const isActive = activeSystem === system.id;

            return (
              <motion.div
                key={system.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: (idx % 2) * 0.1 }}
                className={`border rounded-2xl overflow-hidden shadow-sm transition-all duration-300 relative group ${
                  isActive
                    ? 'border-brand-teal ring-2 ring-brand-teal/20'
                    : 'border-brand-navy/10 hover:border-brand-cyan/50 hover:shadow-lg'
                }`}
              >
                {/* Header */}
                <button
                  type="button"
                  onClick={() => setActiveSystem(isActive ? null : system.id)}
                  className="w-full text-left"
                  aria-expanded={isActive}
                  aria-controls={`system-${system.id}-detail`}
                >
                  <div className="bg-brand-navy p-7 md:p-8 text-white relative">
                    <div className="flex justify-between items-start mb-2 gap-3">
                      <h3 className="text-2xl font-bold">{system.title}</h3>
                      <div className="bg-white/10 px-3 py-1 rounded text-xs font-bold tracking-wider">
                        {system.id}
                      </div>
                    </div>
                    <p className="text-brand-cyan text-sm pr-12">{system.desc}</p>

                    <div className="absolute bottom-[-16px] right-7 md:right-8 w-9 h-9 bg-brand-navy border-4 border-white rounded-full flex items-center justify-center text-brand-teal z-10">
                      {system.icon}
                    </div>
                  </div>

                  <div className="p-7 md:p-8 bg-white relative min-h-[200px]">
                    <h4 className="text-[10px] font-bold text-brand-navy/50 tracking-[0.25em] uppercase mb-4 border-b border-dashed border-brand-navy/10 pb-2">
                      Outputs
                    </h4>
                    <ul className="space-y-2.5 relative z-10">
                      {system.outputs.map((out, i) => (
                        <li
                          key={i}
                          className="text-brand-navy/80 text-sm font-medium flex items-center"
                        >
                          <span className="w-1.5 h-1.5 rounded-full bg-brand-teal/50 mr-3" />
                          {out}
                        </li>
                      ))}
                    </ul>

                    {/* Watermark */}
                    <div className="absolute bottom-2 left-0 w-full text-center z-0 overflow-hidden select-none pointer-events-none">
                      <span className="text-[80px] font-black text-brand-mist uppercase tracking-tighter leading-none block transform translate-y-4 opacity-90">
                        {system.watermark}
                      </span>
                    </div>

                    {/* Expand affordance */}
                    <div className="absolute bottom-4 right-5 text-brand-teal flex items-center text-xs font-bold uppercase tracking-wider opacity-70 group-hover:opacity-100 transition-opacity">
                      {isActive ? 'Close' : 'Deep Dive'}
                      <ChevronDown
                        size={14}
                        className={`ml-1 transition-transform ${isActive ? 'rotate-180' : ''}`}
                      />
                    </div>
                  </div>
                </button>

                {/* Expanded detail — all capabilities */}
                <AnimatePresence initial={false}>
                  {isActive && dataRef && (
                    <motion.div
                      key="detail"
                      id={`system-${system.id}-detail`}
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.35, ease: 'easeOut' }}
                      className="bg-brand-mist/70 border-t border-brand-navy/5 overflow-hidden"
                    >
                      <div className="px-7 md:px-8 py-7">
                        <div className="flex items-center gap-2 mb-5">
                          <Sparkles size={14} className="text-brand-teal" />
                          <h4 className="text-[11px] font-bold text-brand-navy tracking-[0.25em] uppercase">
                            Specific Capabilities
                          </h4>
                        </div>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                          {dataRef.nodes.map((node) => (
                            <div
                              key={node.id}
                              className="bg-white p-4 rounded-xl border border-brand-navy/5 shadow-sm hover:border-brand-teal/50 transition-colors group/node"
                            >
                              <h5 className="font-bold text-brand-navy text-sm mb-1.5">
                                {node.label}
                              </h5>
                              <p className="text-xs text-brand-navy/65 leading-relaxed">
                                {node.microBlurb}
                              </p>

                              <div className="mt-3 pt-2.5 border-t border-dashed border-brand-navy/10">
                                <div className="grid grid-cols-2 gap-3">
                                  <div>
                                    <div className="text-[9px] text-brand-teal font-bold uppercase tracking-[0.2em] mb-1">
                                      AI
                                    </div>
                                    <p className="text-[11px] text-brand-navy/75 leading-snug">
                                      {node.whatAIDoes}
                                    </p>
                                  </div>
                                  <div>
                                    <div className="text-[9px] text-brand-pink font-bold uppercase tracking-[0.2em] mb-1">
                                      Experts
                                    </div>
                                    <p className="text-[11px] text-brand-navy/75 leading-snug">
                                      {node.whatExpertsDo}
                                    </p>
                                  </div>
                                </div>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ServiceSystems;
