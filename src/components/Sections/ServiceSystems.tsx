import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { BookOpen, Database, Settings, Cuboid, ChevronDown } from 'lucide-react';
import { siteContent } from '../../data/siteContent';

const ServiceSystems = () => {
  const [activeSystem, setActiveSystem] = useState<string | null>(null);

  const systems = [
    {
      id: '01',
      title: 'Learning Systems',
      desc: 'Convert expertise into structured learning.',
      icon: <BookOpen size={20} />,
      outputs: ['Curricula', 'Assessments', 'Simulations', 'Storyboards'],
      watermark: 'TEACH',
      dataRef: siteContent.categories.find(c => c.id === 'learning-strategy')
    },
    {
      id: '02',
      title: 'Knowledge Systems',
      desc: 'Convert scattered information into usable intelligence.',
      icon: <Database size={20} />,
      outputs: ['Knowledge hubs', 'RAG systems', 'Repositories', 'Copilots'],
      watermark: 'ORGANISE',
      dataRef: siteContent.categories.find(c => c.id === 'enterprise-knowledge')
    },
    {
      id: '03',
      title: 'Workflow Systems',
      desc: 'Convert repeatable effort into automated production.',
      icon: <Settings size={20} />,
      outputs: ['Content pipelines', 'Review flows', 'Digital learning package generators', 'Automated QA loops'],
      watermark: 'AUTOMATE',
      dataRef: siteContent.categories.find(c => c.id === 'publishing-workflows')
    },
    {
      id: '04',
      title: 'Application Prototypes',
      desc: 'Convert business ideas into sophisticated AI product experiences.',
      icon: <Cuboid size={20} />,
      outputs: ['Dashboards', 'AI tools', 'Simulations', 'Product pilots'],
      watermark: 'PROTOTYPE',
      dataRef: siteContent.categories.find(c => c.id === 'enablement-apps')
    }
  ];

  return (
    <section id="systems" className="py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-6">
        
        <div className="mb-16">
          <span className="text-brand-pink font-bold tracking-widest text-sm uppercase mb-4 block">Service Offerings</span>
          <h2 className="text-4xl md:text-5xl font-bold text-brand-navy leading-tight mb-6">
            Four kinds of AI systems. <br />One operating discipline.
          </h2>
          <p className="text-lg text-brand-navy/80 max-w-2xl leading-relaxed">
            We can slice what we do in multiple ways. The core message though is that we design systems before products, we provide value before services.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {systems.map((system, idx) => (
            <motion.div 
              key={system.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className={`border rounded-2xl overflow-hidden shadow-sm transition-all duration-300 relative group cursor-pointer ${activeSystem === system.id ? 'border-brand-teal ring-2 ring-brand-teal/20' : 'border-brand-navy/10 hover:border-brand-cyan/50 hover:shadow-lg'}`}
              onClick={() => setActiveSystem(activeSystem === system.id ? null : system.id)}
            >
              {/* Card Header (Dark Blue) */}
              <div className="bg-brand-navy p-8 text-white relative">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-2xl font-bold">{system.title}</h3>
                  <div className="bg-white/10 px-3 py-1 rounded text-sm font-bold tracking-wider">{system.id}</div>
                </div>
                <p className="text-brand-cyan text-sm pr-12">{system.desc}</p>
                
                <div className="absolute bottom-[-16px] right-8 w-8 h-8 bg-brand-navy border-4 border-white rounded-full flex items-center justify-center text-brand-teal z-10">
                   {system.icon}
                </div>
              </div>

              {/* Card Body (White) */}
              <div className="p-8 bg-white relative min-h-[200px]">
                <h4 className="text-[10px] font-bold text-brand-navy/50 tracking-[0.2em] uppercase mb-4 border-b border-dashed border-brand-navy/10 pb-2">Outputs</h4>
                <ul className="space-y-3 relative z-10">
                  {system.outputs.map((out, i) => (
                    <li key={i} className="text-brand-navy/80 text-sm font-medium flex items-center">
                      <span className="w-1.5 h-1.5 rounded-full bg-brand-teal/50 mr-3"></span>
                      {out}
                    </li>
                  ))}
                </ul>

                {/* Watermark */}
                <div className="absolute bottom-2 left-0 w-full text-center z-0 overflow-hidden select-none pointer-events-none">
                  <span className="text-[80px] font-black text-brand-mist/60 uppercase tracking-tighter leading-none block transform translate-y-4">
                    {system.watermark}
                  </span>
                </div>

                {/* Expand Hint */}
                <div className="absolute bottom-4 right-4 text-brand-teal flex items-center text-xs font-bold uppercase tracking-wider opacity-0 group-hover:opacity-100 transition-opacity">
                   {activeSystem === system.id ? 'Close' : 'Deep Dive'} <ChevronDown size={14} className={`ml-1 transition-transform ${activeSystem === system.id ? 'rotate-180' : ''}`} />
                </div>
              </div>

              {/* Expanded Detail (from siteContent schema) */}
              <AnimatePresence>
                {activeSystem === system.id && system.dataRef && (
                  <motion.div 
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    className="bg-brand-mist border-t border-brand-navy/5 px-8 py-6"
                    onClick={(e) => e.stopPropagation()}
                  >
                    <h4 className="text-sm font-bold text-brand-navy mb-4">Specific Capabilities:</h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {system.dataRef.nodes.slice(0, 4).map(node => (
                        <div key={node.id} className="bg-white p-4 rounded-lg border border-brand-navy/5 shadow-sm group/node hover:border-brand-teal transition-colors">
                          <h5 className="font-bold text-brand-navy text-sm mb-1">{node.label}</h5>
                          <p className="text-xs text-brand-navy/60 line-clamp-2">{node.expandedBlurb}</p>
                          
                          {/* Hover reveal for what AI does */}
                          <div className="hidden group-hover/node:block mt-3 pt-2 border-t border-dashed border-brand-navy/10 animate-fade-in">
                             <div className="text-[10px] text-brand-teal font-bold uppercase tracking-wider mb-1">AI Amplification</div>
                             <p className="text-xs text-brand-navy/80">{node.whatAIDoes}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServiceSystems;
