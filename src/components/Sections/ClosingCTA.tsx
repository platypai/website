import { motion } from 'framer-motion';
import { Mail, ArrowRight } from 'lucide-react';

const ClosingCTA = () => {
  return (
    <section className="relative py-24 md:py-32 bg-white overflow-hidden">
      <div className="absolute inset-0 bg-dotted-teal opacity-40 pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[110%] h-[140%] rounded-full bg-gradient-to-br from-brand-cyan/15 via-transparent to-brand-pink/10 blur-3xl pointer-events-none" />

      <div className="max-w-5xl mx-auto px-6 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="eyebrow mb-5 block">Let's Build Together</span>
          <h2 className="text-4xl md:text-6xl font-bold text-brand-navy leading-[1.05] tracking-tight mb-7">
            Ready to scale your{' '}
            <span className="brand-gradient-text">learning transformation?</span>
          </h2>
          <p className="text-lg md:text-xl text-brand-navy/70 max-w-2xl mx-auto leading-relaxed mb-10">
            A 30-minute discovery session is the fastest way to see whether the Expert-in-the-Loop approach fits your context. We come ready with a working hypothesis; you come ready with the real problem.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 mb-6">
            <a
              href="mailto:arpan@platypai.one?subject=PlatypAI%20%E2%80%94%20Discovery%20session"
              className="inline-flex items-center px-8 py-4 bg-brand-navy text-white font-semibold rounded-lg hover:bg-brand-teal transition-all hover:shadow-[0_10px_30px_-10px_rgba(0,180,216,0.5)] group"
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
              className="inline-flex items-center px-8 py-4 border border-brand-navy/15 text-brand-navy font-semibold rounded-lg hover:bg-brand-mist hover:border-brand-navy/25 transition-all"
            >
              Explore Systems First
            </a>
          </div>
          <div className="text-sm text-brand-navy/55">
            Or write to{' '}
            <a
              href="mailto:arpan@platypai.one"
              className="text-brand-teal font-semibold hover:underline"
            >
              arpan@platypai.one
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ClosingCTA;
