import Navbar from './components/Navigation/Navbar';
import HeroSection from './components/Sections/HeroSection';
import CorePhilosophy from './components/Sections/CorePhilosophy';
import ArchitectureStack from './components/Sections/ArchitectureStack';
import ServiceSystems from './components/Sections/ServiceSystems';
import CaseStudies from './components/Sections/CaseStudies';
import TrustSection from './components/Sections/TrustSection';
import ClosingCTA from './components/Sections/ClosingCTA';
import Footer from './components/Layout/Footer';

function App() {
  return (
    <div className="w-full min-h-screen font-sans text-brand-navy bg-white selection:bg-brand-pink selection:text-white">
      <Navbar />

      <main>
        <HeroSection />
        <CorePhilosophy />
        <ArchitectureStack />
        <ServiceSystems />
        <CaseStudies />
        <TrustSection />
        <ClosingCTA />
      </main>

      <Footer />
    </div>
  );
}

export default App;
