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
      <footer className="bg-white text-brand-navy py-16 text-center border-t border-brand-mist">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-bold mb-6">Ready to accelerate your learning transformation?</h2>
          <button 
            onClick={() => window.location.href = 'mailto:hello@platypai.com'}
            className="px-8 py-3.5 bg-brand-navy text-white font-bold rounded hover:bg-brand-teal hover:shadow-[0_0_20px_rgba(0,180,216,0.3)] transition-all mb-10"
          >
            Start Building
          </button>
          <div className="flex justify-center space-x-6 mb-8">
            <a href="#model" className="text-sm font-medium text-brand-navy/60 hover:text-brand-teal transition-colors">The Model</a>
            <a href="#architecture" className="text-sm font-medium text-brand-navy/60 hover:text-brand-teal transition-colors">Architecture</a>
            <a href="#systems" className="text-sm font-medium text-brand-navy/60 hover:text-brand-teal transition-colors">Systems</a>
          </div>
          <p className="text-brand-navy/40 text-sm">© {new Date().getFullYear()} PlatypAI. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
