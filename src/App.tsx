import Navbar from './components/Navigation/Navbar';
import HeroSection from './components/Sections/HeroSection';
import CorePhilosophy from './components/Sections/CorePhilosophy';
import ArchitectureStack from './components/Sections/ArchitectureStack';
import ServiceSystems from './components/Sections/ServiceSystems';
import CaseStudies from './components/Sections/CaseStudies';

function App() {
  return (
    <div className="w-full min-h-screen font-sans text-brand-navy bg-brand-mist selection:bg-brand-pink selection:text-white">
      <Navbar />
      
      <main>
        <HeroSection />
        <CorePhilosophy />
        <ArchitectureStack />
        <ServiceSystems />
        <CaseStudies />
      </main>

      {/* Simple Footer for Baseline */}
      <footer className="bg-brand-darkBg text-white py-12 text-center border-t border-brand-teal/20">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-2xl font-bold mb-4">Ready to accelerate your learning transformation?</h2>
          <button className="px-8 py-3 bg-brand-teal text-white font-bold rounded shadow-lg hover:bg-brand-cyan hover:text-brand-navy transition-all mb-8">
            Start Building
          </button>
          <p className="text-brand-mist/50 text-sm">© {new Date().getFullYear()} PlatypAI. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
