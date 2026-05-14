import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ArrowRight, CheckCircle2 } from 'lucide-react';
import { ActionableNode } from '../../data/siteContent';
import InfographicCard from '../Modules/InfographicCard';

interface DeepDivePanelProps {
  node: ActionableNode | null;
  onClose: () => void;
}

const DeepDivePanel: React.FC<DeepDivePanelProps> = ({ node, onClose }) => {
  return (
    <AnimatePresence>
      {node && (
        <motion.div
          initial={{ x: '100%', opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          exit={{ x: '100%', opacity: 0 }}
          transition={{ type: 'spring', damping: 25, stiffness: 200 }}
          className="fixed top-0 right-0 w-full md:w-[600px] h-full bg-brand-navy border-l border-brand-teal/30 shadow-2xl shadow-brand-cyan/20 z-[100] overflow-y-auto"
        >
          <div className="p-8 pb-32">
            <button 
              onClick={onClose}
              className="absolute top-6 right-6 p-2 rounded-full hover:bg-brand-cyan/10 text-brand-mist/70 hover:text-brand-pink transition-colors"
            >
              <X size={24} />
            </button>

            <div className="mt-8">
              <h2 className="text-3xl font-bold text-white mb-4 leading-tight">{node.label}</h2>
              <p className="text-xl text-brand-cyan mb-8">{node.expandedBlurb}</p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
                <div className="bg-brand-panel p-6 rounded-xl border border-brand-teal/20">
                  <h3 className="text-brand-pink font-semibold mb-3 flex items-center">
                    <span className="w-2 h-2 rounded-full bg-brand-pink mr-2"></span>
                    What AI Does
                  </h3>
                  <p className="text-brand-mist/90 text-sm leading-relaxed">{node.whatAIDoes}</p>
                </div>
                
                <div className="bg-brand-panel p-6 rounded-xl border border-brand-cyan/20">
                  <h3 className="text-brand-cyan font-semibold mb-3 flex items-center">
                    <span className="w-2 h-2 rounded-full bg-brand-cyan mr-2"></span>
                    What Experts Do
                  </h3>
                  <p className="text-brand-mist/90 text-sm leading-relaxed">{node.whatExpertsDo}</p>
                </div>
              </div>

              {/* Dynamic Infographic Injection */}
              <div className="mb-10">
                <InfographicCard 
                  type={node.label.includes('System') || node.label.includes('Platform') ? 'system' : node.label.includes('Workflow') || node.label.includes('Pipeline') ? 'process' : 'comparison'} 
                  title={`${node.label} Architecture`} 
                  data={{}} 
                />
              </div>

              {node.proofCases && node.proofCases.length > 0 && (
                <div className="mb-10">
                  <h3 className="text-lg font-semibold text-white mb-4 border-b border-brand-mist/10 pb-2">Proof & Case Stories</h3>
                  <ul className="space-y-4">
                    {node.proofCases.map((caseStudy, idx) => (
                      <li key={idx} className="flex items-start">
                        <CheckCircle2 className="text-brand-teal mt-1 mr-3 flex-shrink-0" size={18} />
                        <span className="text-brand-mist/80 leading-snug">{caseStudy}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              <button className="w-full py-4 px-6 bg-gradient-to-r from-brand-teal to-brand-cyan text-brand-navy font-bold rounded-lg shadow-lg hover:shadow-brand-teal/50 transition-all flex items-center justify-center group">
                {node.ctaText}
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
              </button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default DeepDivePanel;
