import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { siteContent, PrimaryCategory, ActionableNode } from '../../data/siteContent';

interface CoreMapProps {
  activeCategory: string | null;
  setActiveCategory: (id: string | null) => void;
  setActiveNode: (node: ActionableNode | null) => void;
}

const CoreMap: React.FC<CoreMapProps> = ({ activeCategory, setActiveCategory, setActiveNode }) => {
  // Calculate positions for 5 orbiting nodes
  const getOrbitPosition = (index: number, total: number, radius: number) => {
    const angle = (index / total) * 2 * Math.PI - Math.PI / 2;
    return {
      x: Math.cos(angle) * radius,
      y: Math.sin(angle) * radius
    };
  };

  const categories = siteContent.categories;
  const radius = activeCategory ? 400 : 320; // Expand radius when a category is selected

  return (
    <div className="relative w-full h-full flex items-center justify-center">
      {/* Central Node */}
      <motion.div
        layoutId="center-node"
        className="absolute w-[280px] h-[280px] rounded-full bg-gradient-to-br from-brand-navy to-brand-darkBg border-2 border-brand-cyan/80 flex flex-col items-center justify-center text-center p-8 z-50 shadow-[0_0_40px_rgba(0,180,216,0.2)]"
        animate={{
          scale: activeCategory ? 0.8 : 1,
          opacity: activeCategory ? 0.6 : 1,
          x: activeCategory ? '-20%' : 0 // Shift left when active
        }}
        onClick={() => setActiveCategory(null)}
        style={{ cursor: activeCategory ? 'pointer' : 'default' }}
      >
        <h1 className="text-2xl md:text-3xl font-bold text-white mb-2 leading-tight">
          {siteContent.hero.headline}
        </h1>
        <p className="text-brand-cyan text-sm md:text-base font-medium">
          {siteContent.hero.centerLabel}
        </p>
      </motion.div>

      {/* Orbiting Category Nodes */}
      <AnimatePresence>
        {categories.map((cat, idx) => {
          const isActive = activeCategory === cat.id;
          const pos = getOrbitPosition(idx, categories.length, radius);
          const isFaded = activeCategory !== null && !isActive;

          // If this is the active category, render its secondary nodes
          const secondaryRadius = 250;

          return (
            <React.Fragment key={cat.id}>
              {/* Connector Line from Center to Category */}
              {!isFaded && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 0.3 }}
                  className="absolute w-1 h-1 bg-brand-cyan origin-left hidden md:block"
                  style={{
                    width: Math.sqrt(pos.x ** 2 + pos.y ** 2),
                    left: '50%',
                    top: '50%',
                    rotate: Math.atan2(pos.y, pos.x) + 'rad',
                    transformOrigin: '0 0',
                    x: activeCategory ? '-20%' : 0
                  }}
                />
              )}

              <motion.div
                layoutId={`cat-${cat.id}`}
                className={`absolute w-[200px] h-[200px] rounded-full border-2 flex flex-col items-center justify-center text-center p-5 z-40 transition-colors cursor-pointer backdrop-blur-md ${
                  isActive ? 'bg-brand-navy border-brand-pink shadow-[0_0_30px_rgba(255,77,109,0.3)]' : 'bg-brand-panel border-brand-teal/50 hover:border-brand-cyan'
                }`}
                initial={{ x: 0, y: 0, opacity: 0 }}
                animate={{
                  x: activeCategory ? (isActive ? 0 : pos.x * 0.5) : pos.x,
                  y: activeCategory ? (isActive ? 0 : pos.y * 0.5) : pos.y,
                  scale: isActive ? 1.2 : isFaded ? 0.6 : 1,
                  opacity: isFaded ? 0.2 : 1,
                  pointerEvents: isFaded ? 'none' : 'auto'
                }}
                transition={{ type: 'spring', damping: 20, stiffness: 100 }}
                onClick={() => {
                  if (!isActive) {
                    setActiveCategory(cat.id);
                  }
                }}
              >
                <h2 className={`font-bold leading-tight ${isActive ? 'text-brand-mist text-lg' : 'text-brand-mist text-base'}`}>
                  {cat.label}
                </h2>
                {!isActive && (
                  <p className="text-xs text-brand-cyan mt-2 opacity-80 line-clamp-3">
                    {cat.blurb}
                  </p>
                )}
              </motion.div>

              {/* Secondary Nodes (only when active) */}
              {isActive && (
                <AnimatePresence>
                  {cat.nodes.map((node, nIdx) => {
                    const nPos = getOrbitPosition(nIdx, cat.nodes.length, secondaryRadius);
                    return (
                      <motion.div
                        key={node.id}
                        initial={{ opacity: 0, scale: 0, x: 0, y: 0 }}
                        animate={{ opacity: 1, scale: 1, x: nPos.x, y: nPos.y }}
                        exit={{ opacity: 0, scale: 0, x: 0, y: 0 }}
                        transition={{ delay: nIdx * 0.05, type: 'spring', stiffness: 150, damping: 15 }}
                        className="absolute w-[140px] h-[140px] rounded-full bg-brand-navy border border-brand-cyan/70 hover:border-brand-pink hover:shadow-[0_0_20px_rgba(255,77,109,0.4)] flex flex-col items-center justify-center text-center p-3 z-30 cursor-pointer group"
                        onClick={(e) => {
                          e.stopPropagation();
                          setActiveNode(node);
                        }}
                      >
                        <h3 className="text-xs font-semibold text-brand-mist group-hover:text-white transition-colors">
                          {node.label}
                        </h3>
                        <p className="text-[10px] text-brand-teal mt-1 opacity-0 group-hover:opacity-100 transition-opacity absolute bottom-2 w-[80%]">
                          {node.microBlurb}
                        </p>
                      </motion.div>
                    );
                  })}
                </AnimatePresence>
              )}
            </React.Fragment>
          );
        })}
      </AnimatePresence>
    </div>
  );
};

export default CoreMap;
