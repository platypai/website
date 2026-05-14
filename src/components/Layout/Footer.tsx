import { Mail, ArrowUpRight } from 'lucide-react';
import Logo from '../Brand/Logo';

const footerSections = [
  {
    title: 'Explore',
    links: [
      { label: 'The Model', href: '#model' },
      { label: 'Methodology', href: '#methodology' },
      { label: 'Architecture', href: '#architecture' },
      { label: 'Systems', href: '#systems' },
    ],
  },
  {
    title: 'Programs',
    links: [
      { label: 'Curriculum & Credentialing', href: '#practice' },
      { label: 'Validated Assessment', href: '#practice' },
      { label: 'Decision Rehearsal', href: '#practice' },
      { label: 'Knowledge Operations', href: '#practice' },
    ],
  },
  {
    title: 'Company',
    links: [
      { label: 'Trust & Governance', href: '#trust' },
      { label: 'Contact', href: 'mailto:arpan@platypai.one' },
    ],
  },
];

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-brand-navy text-white border-t border-white/5 relative overflow-hidden">
      <div className="absolute -top-32 -left-32 w-96 h-96 rounded-full bg-brand-teal/10 blur-3xl pointer-events-none" />
      <div className="absolute -bottom-32 -right-32 w-96 h-96 rounded-full bg-brand-pink/10 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 pt-20 pb-10 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-12 mb-14">
          {/* Brand */}
          <div className="md:col-span-5">
            <div className="flex items-center gap-3 mb-5">
              <Logo size={40} />
              <span className="text-white font-bold text-xl tracking-tight">PlatypAI</span>
            </div>
            <p className="text-brand-mist/75 leading-relaxed max-w-md mb-6">
              A learning transformation accelerator. We turn senior learning and design expertise into scalable, AI-native systems — under expert governance, end to end.
            </p>
            <a
              href="mailto:arpan@platypai.one?subject=PlatypAI%20%E2%80%94%20Hello"
              className="inline-flex items-center px-5 py-2.5 bg-white text-brand-navy text-sm font-semibold rounded-lg hover:bg-brand-cyan transition-colors"
            >
              <Mail size={14} className="mr-2" />
              arpan@platypai.one
            </a>
          </div>

          {/* Site map */}
          <div className="md:col-span-7 grid grid-cols-2 sm:grid-cols-3 gap-8">
            {footerSections.map((section) => (
              <div key={section.title}>
                <h4 className="text-[10px] font-bold text-brand-cyan tracking-[0.25em] uppercase mb-4">
                  {section.title}
                </h4>
                <ul className="space-y-2.5">
                  {section.links.map((link) => (
                    <li key={link.label}>
                      <a
                        href={link.href}
                        className="text-sm text-brand-mist/75 hover:text-white transition-colors inline-flex items-center group"
                      >
                        {link.label}
                        {link.href.startsWith('mailto:') && (
                          <ArrowUpRight
                            size={12}
                            className="ml-1 opacity-0 group-hover:opacity-100 transition-opacity"
                          />
                        )}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row items-start md:items-center justify-between gap-4 text-xs">
          <p className="text-brand-mist/55">
            © {year} PlatypAI. All rights reserved.
          </p>
          <p className="text-brand-mist/45">
            Human expertise. AI amplified.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
