import { useEffect, useState } from 'react';
import { motion, AnimatePresence, useScroll, useSpring } from 'framer-motion';
import { Menu, X, Mail } from 'lucide-react';
import Logo from '../Brand/Logo';

const navLinks = [
  { label: 'The Model', href: '#model' },
  { label: 'Methodology', href: '#methodology' },
  { label: 'Architecture', href: '#architecture' },
  { label: 'Systems', href: '#systems' },
  { label: 'In Practice', href: '#practice' },
  { label: 'Trust', href: '#trust' },
];

const CONTACT_EMAIL = 'arpan@platypai.one';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  const { scrollYProgress } = useScroll();
  const progress = useSpring(scrollYProgress, { stiffness: 120, damping: 25, mass: 0.4 });

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Lock body scroll while mobile menu open
  useEffect(() => {
    if (open) {
      const prev = document.body.style.overflow;
      document.body.style.overflow = 'hidden';
      return () => {
        document.body.style.overflow = prev;
      };
    }
  }, [open]);

  return (
    <>
      {/* Scroll progress bar */}
      <motion.div
        style={{ scaleX: progress }}
        className="fixed top-0 left-0 right-0 h-[3px] origin-left z-[60] bg-gradient-to-r from-brand-teal via-brand-cyan to-brand-pink"
      />

      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
          scrolled
            ? 'bg-white/90 backdrop-blur-md shadow-[0_2px_20px_rgba(10,25,47,0.06)] py-3'
            : 'bg-white/0 py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between gap-6">
          <a
            href="#model"
            className="flex items-center space-x-3 group"
            aria-label="PlatypAI home"
          >
            <Logo size={36} />
            <span className="text-brand-navy font-bold text-xl tracking-tight">
              PlatypAI
            </span>
          </a>

          <div className="hidden lg:flex items-center space-x-7">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-brand-navy/75 hover:text-brand-teal font-medium text-sm transition-colors link-underline"
              >
                {link.label}
              </a>
            ))}
          </div>

          <a
            href={`mailto:${CONTACT_EMAIL}?subject=PlatypAI%20%E2%80%94%20Discovery%20enquiry`}
            className="hidden md:inline-flex items-center px-5 py-2.5 bg-brand-navy text-white text-sm font-semibold rounded-lg hover:bg-brand-teal transition-colors"
          >
            <Mail size={14} className="mr-2" />
            Start Building
          </a>

          <button
            type="button"
            onClick={() => setOpen(true)}
            className="lg:hidden w-10 h-10 inline-flex items-center justify-center rounded-lg text-brand-navy hover:bg-brand-navy/5 transition-colors"
            aria-label="Open menu"
            aria-expanded={open}
            aria-controls="mobile-menu"
          >
            <Menu size={22} />
          </button>
        </div>
      </motion.nav>

      {/* Mobile drawer */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="lg:hidden fixed inset-0 z-[70]"
            id="mobile-menu"
          >
            <div
              className="absolute inset-0 bg-brand-navy/40 backdrop-blur-sm"
              onClick={() => setOpen(false)}
              aria-hidden="true"
            />
            <motion.aside
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ duration: 0.3, ease: 'easeOut' }}
              className="absolute top-0 right-0 h-full w-[84%] max-w-sm bg-white shadow-2xl flex flex-col"
              role="dialog"
              aria-modal="true"
              aria-label="Navigation menu"
            >
              <div className="px-6 py-5 flex items-center justify-between border-b border-brand-navy/10">
                <div className="flex items-center space-x-3">
                  <Logo size={32} />
                  <span className="text-brand-navy font-bold text-lg tracking-tight">
                    PlatypAI
                  </span>
                </div>
                <button
                  type="button"
                  onClick={() => setOpen(false)}
                  className="w-10 h-10 rounded-lg text-brand-navy hover:bg-brand-navy/5 inline-flex items-center justify-center"
                  aria-label="Close menu"
                >
                  <X size={20} />
                </button>
              </div>

              <nav className="flex-1 overflow-y-auto px-6 py-6 space-y-1">
                {navLinks.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className="block py-3 px-3 rounded-lg text-brand-navy font-medium hover:bg-brand-mist transition-colors"
                  >
                    {link.label}
                  </a>
                ))}
              </nav>

              <div className="px-6 py-6 border-t border-brand-navy/10 space-y-3">
                <a
                  href={`mailto:${CONTACT_EMAIL}?subject=PlatypAI%20%E2%80%94%20Discovery%20enquiry`}
                  className="flex items-center justify-center px-5 py-3 bg-brand-navy text-white font-semibold rounded-lg hover:bg-brand-teal transition-colors"
                  onClick={() => setOpen(false)}
                >
                  <Mail size={16} className="mr-2" />
                  Start Building
                </a>
                <p className="text-center text-xs text-brand-navy/50">
                  {CONTACT_EMAIL}
                </p>
              </div>
            </motion.aside>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
