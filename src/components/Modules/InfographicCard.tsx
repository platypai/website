import React from 'react';
import { motion } from 'framer-motion';
import { BarChart, Workflow, BrainCircuit } from 'lucide-react';

interface InfographicCardProps {
  type: 'process' | 'comparison' | 'system';
  title: string;
  data: any;
}

const InfographicCard: React.FC<InfographicCardProps> = ({ type, title, data }) => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="bg-brand-panel border border-brand-teal/30 rounded-xl p-6 shadow-lg relative overflow-hidden group"
    >
      <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-brand-teal to-brand-cyan"></div>
      
      <div className="flex items-center mb-4">
        {type === 'process' && <Workflow className="text-brand-teal mr-3" size={24} />}
        {type === 'comparison' && <BarChart className="text-brand-pink mr-3" size={24} />}
        {type === 'system' && <BrainCircuit className="text-brand-cyan mr-3" size={24} />}
        <h4 className="text-lg font-semibold text-white">{title}</h4>
      </div>

      <div className="relative z-10">
        {/* Placeholder for dynamic SVG/Canvas infographic rendering based on type */}
        <div className="w-full h-32 bg-brand-navy rounded-lg border border-brand-mist/10 flex items-center justify-center overflow-hidden">
           <div className="flex space-x-4">
              <motion.div 
                animate={{ height: ['20%', '80%', '40%', '60%'] }} 
                transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
                className="w-8 bg-brand-teal/50 rounded-t-sm"
              />
              <motion.div 
                animate={{ height: ['60%', '30%', '90%', '50%'] }} 
                transition={{ repeat: Infinity, duration: 3.5, ease: "easeInOut", delay: 0.5 }}
                className="w-8 bg-brand-cyan/50 rounded-t-sm"
              />
              <motion.div 
                animate={{ height: ['40%', '100%', '50%', '80%'] }} 
                transition={{ repeat: Infinity, duration: 4.5, ease: "easeInOut", delay: 1 }}
                className="w-8 bg-brand-pink/50 rounded-t-sm"
              />
           </div>
        </div>
        <p className="text-xs text-brand-mist/60 mt-3 text-center">Interactive data representation generated via AI extraction.</p>
      </div>

      {/* Decorative Glow */}
      <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-brand-teal/10 rounded-full blur-2xl group-hover:bg-brand-teal/20 transition-all duration-500"></div>
    </motion.div>
  );
};

export default InfographicCard;
