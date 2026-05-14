import { Fragment } from 'react';
import { motion } from 'framer-motion';

const CorePhilosophy = () => {
  const philosophyPoints = [
    {
      title: 'Expert-in-the-loop architecture',
      desc: 'led by experienced learning architects and instructional design consultants'
    },
    {
      title: 'Source-grounded knowledge',
      desc: 'that combines indexed memory banks with vector RAGs'
    },
    {
      title: 'Uncompromised quality',
      desc: 'that combines human audits with iteratively refined agentic reviews'
    },
    {
      title: 'Repeatable engines',
      desc: 'that bring down cost and timelines with scale, while delivering consistent output'
    }
  ];

  const methodologies = [
    {
      name: 'AI-only',
      features: [
        { label: 'WORKFLOW DESIGN', desc: 'Generates from prompts' },
        { label: 'DOMAIN LOGIC', desc: 'Optimises for speed' },
        { label: 'CONTEXT', desc: 'Context depends on the prompt' },
        { label: 'QUALITY CONTROL', desc: 'Quality varies by user' },
        { label: 'OUTCOME', desc: 'Good for low-risk tasks' }
      ]
    },
    {
      name: 'Human-in-the-Loop',
      features: [
        { label: 'WORKFLOW DESIGN', desc: 'Reviews output after generation' },
        { label: 'DOMAIN LOGIC', desc: 'Catches visible errors' },
        { label: 'CONTEXT', desc: 'Context depends on reviewer interpretation' },
        { label: 'QUALITY CONTROL', desc: 'Improves selected drafts' },
        { label: 'OUTCOME', desc: 'Useful for controlled content production' }
      ]
    },
    {
      name: 'Expert-in-the-Loop',
      subtitle: 'OUR APPROACH',
      features: [
        { label: 'WORKFLOW DESIGN', desc: 'Architects the workflow before generation begins' },
        { label: 'DOMAIN LOGIC', desc: 'Embeds domain logic and quality rules natively' },
        { label: 'CONTEXT', desc: 'Structures context via taxonomies and rubrics' },
        { label: 'QUALITY CONTROL', desc: 'Ensures consistent quality through expert audits' },
        { label: 'OUTCOME', desc: 'Creates repeatable, business-critical engines' }
      ],
      highlight: true
    }
  ];

  return (
    <section id="methodology" className="pt-0 pb-24 bg-white relative overflow-hidden">
      
      {/* Top Dark Banner */}
      <div className="bg-brand-navy w-full py-16 px-6 relative z-10 shadow-xl">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-x-16 gap-y-12">
            {philosophyPoints.map((point, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="flex items-start"
              >
                <div className="w-2 h-2 rounded-full bg-brand-teal mt-2 mr-4 flex-shrink-0"></div>
                <p className="text-brand-mist/90 text-lg leading-relaxed">
                  <span className="font-bold text-white block mb-1">{point.title}</span> 
                  {point.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Philosophy Intro */}
      <div className="max-w-7xl mx-auto px-6 mt-32 mb-16">
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="text-brand-pink font-bold tracking-widest text-sm uppercase mb-4 block">The Core Philosophy</span>
          <h2 className="text-4xl md:text-5xl font-bold text-brand-navy leading-tight mb-8 max-w-3xl">
            AI output is becoming the norm. <br />Expert input is still scarce.
          </h2>
          <div className="space-y-6 text-lg text-brand-navy/80 max-w-4xl leading-relaxed">
            <p>
              The learning industry is quickly adopting AI to generate content. However, this is coming at the cost of design quality, expert judgment, and preserving quality at scale.
            </p>
            <p>
              PlatypAI works where that gap matters: designing AI workflows and products that capture expert perspective before production begins... and maintains it through production.
            </p>
          </div>
        </motion.div>
      </div>

      {/* Methodology Table */}
      <div className="max-w-7xl mx-auto px-6 mt-20">
        <span className="text-brand-pink font-bold tracking-widest text-sm uppercase mb-8 block">From AI-Only to Expert-in-the-Loop</span>
        
        <div className="w-full overflow-x-auto pb-8">
          <div className="min-w-[900px] grid grid-cols-4 bg-white border border-brand-navy/10 rounded-xl overflow-hidden shadow-sm">
            
            {/* Headers */}
            <div className="col-span-1 p-6 border-b border-brand-navy/10 bg-brand-mist/50">
              <h3 className="font-bold text-brand-navy uppercase text-sm tracking-wider">Methodology</h3>
            </div>
            {methodologies.map((method, idx) => (
              <div 
                key={idx} 
                className={`col-span-1 p-6 border-b ${method.highlight ? 'bg-brand-navy text-white border-brand-navy' : 'bg-white text-brand-navy border-brand-navy/10 border-l'}`}
              >
                <h3 className="font-bold text-lg">{method.name}</h3>
                {method.subtitle && <span className="text-brand-teal text-xs tracking-widest uppercase mt-1 block">{method.subtitle}</span>}
              </div>
            ))}

            {/* Rows */}
            {methodologies[0].features.map((feature, rowIdx) => (
              <Fragment key={rowIdx}>
                {/* Row Label */}
                <div className="col-span-1 p-6 border-b border-brand-navy/10 bg-brand-mist/50 flex items-center">
                  <span className="font-bold text-brand-navy/60 text-xs tracking-widest uppercase">{feature.label}</span>
                </div>
                
                {/* Row Data Cells */}
                {methodologies.map((method, colIdx) => (
                  <motion.div 
                    key={`${rowIdx}-${colIdx}`}
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: colIdx * 0.15 + rowIdx * 0.1 }}
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
      </div>

    </section>
  );
};

export default CorePhilosophy;
