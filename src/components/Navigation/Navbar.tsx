import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'The Model', href: '#model' },
    { label: 'Architecture', href: '#architecture' },
    { label: 'Systems', href: '#systems' },
    { label: 'In Practice', href: '#practice' },
    { label: 'Methodology', href: '#methodology' },
    { label: 'Trust', href: '#trust' },
  ];

  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white shadow-md py-3' : 'bg-transparent py-5'}`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        <div className="flex items-center space-x-2">
          {/* Logo Placeholder */}
          <div className="w-8 h-8 bg-brand-teal rounded-full flex items-center justify-center text-white font-bold text-xl relative overflow-hidden">
             <div className="absolute top-1/2 right-0 w-4 h-4 bg-brand-pink rounded-full mix-blend-multiply opacity-80"></div>
          </div>
          <span className="text-brand-navy font-bold text-xl tracking-tight">PlatypAI</span>
        </div>

        <div className="hidden md:flex items-center space-x-8">
          {navLinks.map((link, idx) => (
            <a 
              key={idx} 
              href={link.href}
              className="text-brand-navy/80 hover:text-brand-teal font-medium text-sm transition-colors"
            >
              {link.label}
            </a>
          ))}
        </div>

        <button 
          onClick={() => window.location.href = 'mailto:hello@platypai.com'}
          className="hidden md:block px-6 py-2 border-2 border-brand-navy text-brand-navy font-semibold rounded hover:bg-brand-navy hover:text-white transition-all"
        >
          Start Building
        </button>

        {/* Mobile Menu Toggle (simplified for baseline) */}
        <button className="md:hidden text-brand-navy">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>
    </motion.nav>
  );
};

export default Navbar;
