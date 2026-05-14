import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { BookOpen, Database, Settings, Cuboid, ChevronDown, Plus, Minus } from 'lucide-react';
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
    icon: <BookOpen size={18} />,
    outputs: ['Curricula', 'Assessments', 'Simulations', 'Storyboards'],
    watermark: 'TEACH',
    categoryId: 'learning-strategy',
  },
  {
    id: '02',
    title: 'Knowledge Systems',
    desc: 'Convert scattered information into usable intelligence.',
    icon: <Database size={18} />,
    outputs: ['Knowledge hubs', 'RAG systems', 'Repositories', 'Copilots'],
    watermark: 'ORGANISE',
    categoryId: 'enterprise-knowledge',
  },
  {
    id: '03',
    title: 'Workflow Systems',
    desc: 'Convert repeatable effort into automated production.',
    icon: <Settings size={18} />,
    outputs: ['Content pipelines', 'Review flows', 'Package generators', 'Automated QA loops'],
    watermark: 'AUTOMATE',
    categoryId: 'publishing-workflows',
  },
  {
    id: '04',
    title: 'Application Prototypes',
    desc: 'Convert business ideas into sophisticated AI product experiences.',
    icon: <Cuboid size={18} />,
    outputs: ['Dashboards', 'AI tools', 'Simulations', 'Product pilots'],
    watermark: 'PROTOTYPE',
    categoryId: 'enablement-apps',
  },
];

const ServiceSystems = () => {
  const [activeSystem, setActiveSystem] = useState<string | null>(null);
  const [activeCapability, setActiveCapability] = useState<string | null>(null);

  // Close active capability when system toggles
  const onToggleSystem = (id: string) => {
    setActiveSystem(activeSystem === id ? null : id);
    setActiveCapability(null);
  };

  return (
    <section id="systems" className="py-16 md:py-20 bg-white relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-10 md:mb-12 max-w-3xl">
          <span className="eyebrow mb-3 block">Service Offerings</span>
          <h2 className="text-4xl md:text-5xl font-bold text-brand-navy leading-[1.05] mb-4">
            Four kinds of AI systems.
            <br />
            One operating discipline.
          </h2>
          <p className="text-base md:text-lg text-brand-navy/70 leading-relaxed">
            We can slice what we do many ways. The core message: we design systems before products, and provide value before services.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-6">
          {systems.map((system, idx) => {
            const dataRef = siteContent.categories.find((c) => c.id === system.categoryId);
            const isActive = activeSystem === system.id;

            return (
              <motion.div
                key={system.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: (idx % 2) * 0.07 }}
                className={`border rounded-2xl overflow-hidden shadow-sm transition-all duration-300 relative ${
                  isActive
                    ? 'border-brand-teal ring-2 ring-brand-teal/15'
                    : 'border-brand-navy/10 hover:border-brand-teal/40 hover:shadow-md'
                }`}
              >
                {/* Top accent strip */}
                <div className="h-1 bg-brand-teal" />

                <button
                  type="button"
                  onClick={() => onToggleSystem(system.id)}
                  className="w-full text-left"
                  aria-expanded={isActive}
                  aria-controls={`system-${system.id}-detail`}
                >
                  {/* Compact header */}
                  <div className="px-6 md:px-7 pt-6 pb-5 flex items-start justify-between gap-3">
                    <div className="flex items-start gap-3 flex-1 min-w-0">
                      <div className="w-10 h-10 rounded-xl bg-brand-teal/10 text-brand-teal flex items-center justify-center flex-shrink-0">
                        {system.icon}
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-2 mb-0.5">
                          <span className="text-[10px] font-bold text-brand-teal tracking-[0.2em]">
                            {system.id}
                          </span>
                          <span className="text-[10px] font-semibold text-brand-navy/40 tracking-[0.2em] uppercase">
                            {system.watermark}
                          </span>
                        </div>
                        <h3 className="text-lg md:text-xl font-bold text-brand-navy leading-tight">
                          {system.title}
                        </h3>
                      </div>
                    </div>
                    <ChevronDown
                      size={18}
                      className={`text-brand-navy/40 mt-2 transition-transform flex-shrink-0 ${
                        isActive ? 'rotate-180' : ''
                      }`}
                    />
                  </div>

                  <p className="px-6 md:px-7 pb-5 text-brand-navy/70 text-sm leading-relaxed">
                    {system.desc}
                  </p>

                  {/* Outputs row — neutral chips */}
                  <div className="px-6 md:px-7 pb-6 flex flex-wrap gap-1.5">
                    {system.outputs.map((out) => (
                      <span
                        key={out}
                        className="text-[11px] font-semibold text-brand-navy/70 bg-brand-mist border border-brand-navy/10 px-2.5 py-1 rounded-md"
                      >
                        {out}
                      </span>
                    ))}
                  </div>
                </button>

                {/* Compact deep dive — capability list with hover/click reveal */}
                <AnimatePresence initial={false}>
                  {isActive && dataRef && (
                    <motion.div
                      key="detail"
                      id={`system-${system.id}-detail`}
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: 'easeOut' }}
                      className="bg-brand-mist border-t border-brand-navy/10 overflow-hidden"
                    >
                      <div className="px-6 md:px-7 py-5">
                        <h4 className="text-[10px] font-bold text-brand-navy/55 tracking-[0.25em] uppercase mb-3">
                          Specific Capabilities · hover or tap for detail
                        </h4>
                        <div className="space-y-1.5">
                          {dataRef.nodes.map((node) => {
                            const capKey = `${system.id}-${node.id}`;
                            const isCapOpen = activeCapability === capKey;
                            return (
                              <CapabilityRow
                                key={node.id}
                                label={node.label}
                                microBlurb={node.microBlurb}
                                whatAI={node.whatAIDoes}
                                whatExperts={node.whatExpertsDo}
                                open={isCapOpen}
                                onToggle={() =>
                                  setActiveCapability(isCapOpen ? null : capKey)
                                }
                              />
                            );
                          })}
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

interface CapabilityRowProps {
  label: string;
  microBlurb: string;
  whatAI: string;
  whatExperts: string;
  open: boolean;
  onToggle: () => void;
}

const CapabilityRow = ({ label, microBlurb, whatAI, whatExperts, open, onToggle }: CapabilityRowProps) => {
  return (
    <div
      className={`group bg-white rounded-lg border transition-all ${
        open ? 'border-brand-teal/40 shadow-sm' : 'border-brand-navy/10 hover:border-brand-teal/30'
      }`}
    >
      <button
        type="button"
        onClick={onToggle}
        onMouseEnter={() => {
          /* allow hover preview on capable devices via expanded detail */
        }}
        className="w-full flex items-center justify-between gap-3 px-4 py-2.5 text-left"
        aria-expanded={open}
      >
        <div className="flex-1 min-w-0">
          <div className="font-semibold text-brand-navy text-sm leading-tight">{label}</div>
          <div className="text-xs text-brand-navy/55 truncate mt-0.5">{microBlurb}</div>
        </div>
        <div className="text-brand-teal flex-shrink-0">
          {open ? <Minus size={14} /> : <Plus size={14} />}
        </div>
      </button>
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.22 }}
            className="overflow-hidden"
          >
            <div className="px-4 pb-3 pt-1 grid grid-cols-1 sm:grid-cols-2 gap-3 border-t border-dashed border-brand-navy/10">
              <div>
                <div className="text-[9px] font-bold text-brand-teal tracking-[0.25em] uppercase mb-1">
                  AI
                </div>
                <p className="text-[12px] text-brand-navy/75 leading-snug">{whatAI}</p>
              </div>
              <div>
                <div className="text-[9px] font-bold text-brand-pink tracking-[0.25em] uppercase mb-1">
                  Experts
                </div>
                <p className="text-[12px] text-brand-navy/75 leading-snug">{whatExperts}</p>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default ServiceSystems;
