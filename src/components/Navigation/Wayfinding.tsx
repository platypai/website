import React from 'react';
import { ChevronRight, Home, Map as MapIcon } from 'lucide-react';
import { motion } from 'framer-motion';

interface WayfindingProps {
  activeCategory: string | null;
  activeNode: string | null;
  onReset: () => void;
  onCategoryClick: (categoryId: string) => void;
}

const Wayfinding: React.FC<WayfindingProps> = ({ activeCategory, activeNode, onReset, onCategoryClick }) => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      className="fixed top-6 left-6 z-[90] flex items-center space-x-2 bg-brand-navy/80 backdrop-blur-md px-4 py-2 rounded-full border border-brand-teal/30 shadow-lg"
    >
      <button 
        onClick={onReset}
        className="text-brand-mist/70 hover:text-brand-cyan transition-colors flex items-center"
        aria-label="Return to Map"
      >
        <Home size={18} className="mr-1" />
        <span className="text-sm font-medium hidden md:inline">Ecosystem</span>
      </button>

      {activeCategory && (
        <>
          <ChevronRight size={16} className="text-brand-mist/40" />
          <button 
            onClick={() => onCategoryClick(activeCategory)}
            className={`text-sm font-medium transition-colors ${activeNode ? 'text-brand-mist/70 hover:text-brand-cyan' : 'text-brand-cyan'}`}
          >
            Category
          </button>
        </>
      )}

      {activeNode && (
        <>
          <ChevronRight size={16} className="text-brand-mist/40" />
          <span className="text-sm font-medium text-brand-pink truncate max-w-[150px] md:max-w-[200px]">
            Deep Dive
          </span>
        </>
      )}

      <div className="ml-4 pl-4 border-l border-brand-mist/20 flex items-center hidden sm:flex">
        <button onClick={onReset} className="text-brand-mist/50 hover:text-brand-teal transition-colors" title="Mini-Map View">
          <MapIcon size={18} />
        </button>
      </div>
    </motion.div>
  );
};

export default Wayfinding;
