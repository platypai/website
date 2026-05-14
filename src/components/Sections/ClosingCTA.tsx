import { motion } from 'framer-motion';
import { Mail, ArrowRight, Linkedin } from 'lucide-react';

interface Founder {
  name: string;
  title: string;
  email: string;
  linkedin: string;
  tone: 'teal' | 'pink' | 'cyan';
}

const founders: Founder[] = [
  {
    name: 'Arpan',
    title: 'Co-founder · Chief AI Whisperer',
    email: 'arpan@platypai.one',
    linkedin: 'https://www.linkedin.com/in/arpanpanicker',
    tone: 'teal',
  },
  {
    name: 'Pankaj',
    title: 'Co-founder · CEO',
    email: 'pankaj@platypai.one',
    linkedin: 'https://www.linkedin.com/in/pankajrahulsingh',
    tone: 'pink',
  },
  {
    name: 'Radhika',
    title: 'Co-founder · Advisor',
    email: 'radhika@platypai.one',
    linkedin: 'https://www.linkedin.com/in/radhikakale',
    tone: 'cyan',
  },
];

const toneInitial = {
  teal: 'bg-gradient-to-br from-brand-teal to-brand-cyan text-white',
  pink: 'bg-gradient-to-br from-brand-pink to-[#FF8FA3] text-white',
  cyan: 'bg-gradient-to-br from-brand-cyan to-brand-teal text-brand-navy',
};

const ClosingCTA = () => {
  return (
    <section className="relative py-16 md:py-24 bg-white overflow-hidden">
      <div className="absolute inset-0 bg-dotted-teal opacity-40 pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[110%] h-[140%] rounded-full bg-gradient-to-br from-brand-cyan/20 via-transparent to-brand-pink/15 blur-3xl pointer-events-none" />

      <div className="max-w-5xl mx-auto px-6 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55 }}
        >
          <span className="eyebrow mb-4 block">Let's Build Together</span>
          <h2 className="text-4xl md:text-6xl font-bold text-brand-navy leading-[1.02] tracking-tight mb-5">
            Ready to scale your{' '}
            <span className="brand-gradient-text">learning transformation?</span>
          </h2>
          <p className="text-base md:text-xl text-brand-navy/70 max-w-2xl mx-auto leading-relaxed mb-8">
            AI is a great vehicle to speed and scale things up — when you have an expert driving. Reach out to one of our founders to map your business need to a working system.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 mb-10">
            <a
              href="mailto:arpan@platypai.one?subject=PlatypAI%20%E2%80%94%20Discovery%20session"
              className="inline-flex items-center px-7 py-3.5 bg-brand-navy text-white font-semibold rounded-lg hover:bg-brand-teal transition-all hover:shadow-[0_10px_30px_-10px_rgba(0,180,216,0.5)] group"
            >
              <Mail size={16} className="mr-2" />
              Book a Discovery Session
              <ArrowRight
                size={16}
                className="ml-2 opacity-70 group-hover:translate-x-1 group-hover:opacity-100 transition-all"
              />
            </a>
            <a
              href="#systems"
              className="inline-flex items-center px-7 py-3.5 border border-brand-navy/15 text-brand-navy font-semibold rounded-lg hover:bg-brand-mist hover:border-brand-navy/25 transition-all"
            >
              Explore Systems First
            </a>
          </div>
        </motion.div>

        {/* Founders block */}
        <div className="mt-4">
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="h-px w-12 bg-brand-navy/20" />
            <span className="text-[10px] font-bold text-brand-navy/55 tracking-[0.3em] uppercase">
              The Founders
            </span>
            <div className="h-px w-12 bg-brand-navy/20" />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 md:gap-5">
            {founders.map((f, idx) => (
              <motion.div
                key={f.name}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.08 }}
                className="bg-white border border-brand-navy/10 rounded-2xl p-5 md:p-6 text-left shadow-sm hover:shadow-md hover:border-brand-teal/40 transition-all flex items-center gap-4"
              >
                <div className={`w-14 h-14 rounded-full ${toneInitial[f.tone]} flex items-center justify-center font-bold text-lg flex-shrink-0`}>
                  {f.name[0]}
                </div>
                <div className="flex-1 min-w-0">
                  <div className="font-bold text-brand-navy">{f.name}</div>
                  <div className="text-xs text-brand-navy/55 mb-2 leading-snug">{f.title}</div>
                  <div className="flex items-center gap-3">
                    <a
                      href={`mailto:${f.email}`}
                      className="text-brand-teal hover:text-brand-navy transition-colors inline-flex items-center"
                      aria-label={`Email ${f.name}`}
                    >
                      <Mail size={14} />
                    </a>
                    <a
                      href={f.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-brand-teal hover:text-brand-navy transition-colors inline-flex items-center"
                      aria-label={`${f.name} on LinkedIn`}
                    >
                      <Linkedin size={14} />
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ClosingCTA;
