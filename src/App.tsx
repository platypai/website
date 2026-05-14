import { useState } from 'react';
import CoreMap from './components/Map/CoreMap';
import Wayfinding from './components/Navigation/Wayfinding';
import DeepDivePanel from './components/Panels/DeepDivePanel';
import { siteContent } from './data/siteContent';
import type { ActionableNode } from './data/siteContent';

function App() {
  const [activeCategoryId, setActiveCategoryId] = useState<string | null>(null);
  const [activeNode, setActiveNode] = useState<ActionableNode | null>(null);

  const handleReset = () => {
    setActiveCategoryId(null);
    setActiveNode(null);
  };

  const handleCategoryClick = (categoryId: string) => {
    setActiveCategoryId(categoryId);
    setActiveNode(null);
  };

  return (
    <div className="relative w-screen h-screen overflow-hidden bg-brand-darkBg text-brand-mist font-sans">
      {/* Background Starfield / Glow Effect */}
      <div className="absolute inset-0 z-0 opacity-20 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-brand-teal rounded-full blur-[150px]"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-brand-cyan rounded-full blur-[150px]"></div>
      </div>

      <Wayfinding 
        activeCategory={activeCategoryId ? siteContent.categories.find(c => c.id === activeCategoryId)?.label || null : null} 
        activeNode={activeNode ? activeNode.label : null} 
        onReset={handleReset} 
        onCategoryClick={() => activeCategoryId && handleCategoryClick(activeCategoryId)} 
      />

      <div className="relative z-10 w-full h-full flex items-center justify-center">
        <CoreMap 
          activeCategory={activeCategoryId} 
          setActiveCategory={setActiveCategoryId} 
          setActiveNode={setActiveNode} 
        />
      </div>

      <DeepDivePanel 
        node={activeNode} 
        onClose={() => setActiveNode(null)} 
      />
    </div>
  );
}

export default App;
