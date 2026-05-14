import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Layers, Database, Target, Settings, Monitor, ChevronRight } from 'lucide-react';

const ArchitectureStack = () => {
  const [activeStep, setActiveStep] = useState<number | null>(null);

  const steps = [
    {
      id: 5,
      title: 'Output Systems',
      icon: <Monitor size={24} />,
      desc: 'Apps, learning products, knowledge platforms, concept rapid prototypes, insights and recommendation reports, learning transformation guidance.',
      aiRole: 'Handles interaction, retrieval, smart summaries, and adaptive flow across formats.',
      expertRole: 'Define intent boundaries, user guidance, validation behavior, and learning usefulness.'
    },
    {
      id: 4,
      title: 'AI Workflow Engine',
      icon: <Settings size={24} />,
      desc: 'Agentic workflows for creating the knowledge base, output-based production workflows, quality and iterative updates, client input incorporation, and testing.',
      aiRole: 'Extracts, structures, drafts, rewrites, tags, and formats content at scale.',
      expertRole: 'Set templates, tone, instructional quality rules, and review criteria.'
    },
    {
      id: 3,
      title: 'Expert Calibration',
      icon: <Target size={24} />,
      desc: 'Learning architecture, content strategy, prototype design, learning and format blend, deployment strategies, scoring rubrics, tracking and reporting workflows.',
      aiRole: 'Speeds source analysis, structure proposals, and first-pass architecture options.',
      expertRole: 'Define capability logic, sequencing, modality balance, and design quality.'
    },
    {
      id: 2,
      title: 'Knowledge Architecture',
      icon: <Database size={24} />,
      desc: 'Data collation, extraction, and structuring, conversion to indexed metadata enriched memory banks, custom vector RAG creation.',
      aiRole: 'Supports ingestion, extraction, semantic structuring, and metadata enrichment.',
      expertRole: 'Define the knowledge model, boundaries, taxonomy, and validation rules.'
    },
    {
      id: 1,
      title: 'Business Need',
      icon: <Layers size={24} />,
      desc: 'Needs and gaps analysis, open-ended consultation, client onboarding, stakeholder interviews, scope definition, initial service architecture.',
      aiRole: 'Supports pattern analysis, use-case clustering, and initial feasibility framing.',
      expertRole: 'Diagnose opportunity quality, define practical use cases, and filter out noise.'
    }
  ];

  return (
    <section id="architecture" className="py-24 bg-brand-mist/30 relative">
      <div className="max-w-4xl mx-auto px-6">
        
        <div className="text-center mb-20">
          <span className="text-brand-pink font-bold tracking-widest text-sm uppercase mb-4 block">The Architecture</span>
          <h2 className="text-4xl md:text-5xl font-bold text-brand-navy leading-tight mb-8">
            Expert-in-the-Loop is not a review step. <br/>It is the architecture.
          </h2>
          <p className="text-lg text-brand-navy/80 max-w-2xl mx-auto">
            We are a consulting-first team. We work with our clients to identify the business need and design custom solutions for them. You can see this in our service stack, starting from the bottom, all the way up to the output.
          </p>
        </div>

        <div className="relative">
          <div className="text-center mb-8">
             <span className="text-brand-teal font-bold tracking-widest text-xs uppercase">Expertise Stack</span>
          </div>

          <div className="flex flex-col space-y-4 relative">
            {/* Connecting Line behind items */}
            <div className="absolute left-[38px] top-10 bottom-10 w-0.5 bg-brand-teal/20 z-0 hidden md:block"></div>

            {steps.map((step, idx) => (
              <div key={step.id} className="relative z-10">
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  onHoverStart={() => setActiveStep(step.id)}
                  onHoverEnd={() => setActiveStep(null)}
                  className={`bg-white border rounded-xl p-6 md:p-8 cursor-pointer transition-all duration-300 flex flex-col md:flex-row items-start md:items-center gap-6 shadow-sm ${activeStep === step.id ? 'border-brand-teal shadow-xl scale-[1.02] z-20' : 'border-brand-navy/10 hover:border-brand-cyan'}`}
                >
                  <div className={`w-16 h-16 rounded-2xl flex items-center justify-center font-bold text-2xl flex-shrink-0 transition-colors ${activeStep === step.id ? 'bg-brand-teal text-white' : 'bg-brand-mist text-brand-teal'}`}>
                    {step.id}
                  </div>
                  
                  <div className="flex-1">
                    <div className="flex items-center space-x-3 mb-2">
                      <div className="text-brand-navy/40">{step.icon}</div>
                      <h3 className="text-2xl font-bold text-brand-navy">{step.title}</h3>
                    </div>
                    <p className="text-brand-navy/70 leading-relaxed text-sm">
                      {step.desc}
                    </p>
                  </div>

                  <div className="hidden md:block text-brand-teal/50">
                    <ChevronRight size={24} className={`transition-transform duration-300 ${activeStep === step.id ? 'translate-x-2 text-brand-teal' : ''}`} />
                  </div>
                </motion.div>

                {/* Expanded Detail Panel */}
                <AnimatePresence>
                  {activeStep === step.id && (
                    <motion.div 
                      initial={{ opacity: 0, height: 0, marginTop: 0 }}
                      animate={{ opacity: 1, height: 'auto', marginTop: 16 }}
                      exit={{ opacity: 0, height: 0, marginTop: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden bg-brand-navy rounded-xl border border-brand-teal/30 mx-4 md:mx-12 shadow-2xl relative z-10"
                    >
                      <div className="p-6 grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                          <h4 className="text-brand-pink font-semibold text-xs tracking-widest uppercase mb-2">What AI Does</h4>
                          <p className="text-brand-mist/90 text-sm leading-relaxed">{step.aiRole}</p>
                        </div>
                        <div>
                          <h4 className="text-brand-cyan font-semibold text-xs tracking-widest uppercase mb-2">What Experts Do</h4>
                          <p className="text-brand-mist/90 text-sm leading-relaxed">{step.expertRole}</p>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
                
                {/* Arrow indicator between steps (except last) */}
                {idx < steps.length - 1 && (
                   <div className="w-full flex justify-center py-2 text-brand-teal/40">
                     <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="18 15 12 9 6 15"></polyline></svg>
                   </div>
                )}
              </div>
            ))}
          </div>
          
        </div>

        {/* Bottom Callout */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 bg-white border border-brand-teal/30 rounded-xl p-8 flex items-start space-x-6 shadow-sm"
        >
          <div className="w-12 h-12 rounded-full bg-brand-mist flex items-center justify-center flex-shrink-0">
             <Target size={20} className="text-brand-navy" />
          </div>
          <p className="text-brand-navy/80 leading-relaxed text-sm">
            The expert layer is not the only expert intervention. Our experts are involved at every level. Instead, this is the pivotal stage where our experts provide the level of input and value that cannot be replicated by standard AI workflows offered by production companies.
          </p>
        </motion.div>

      </div>
    </section>
  );
};

export default ArchitectureStack;
