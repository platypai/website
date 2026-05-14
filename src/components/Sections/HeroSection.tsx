import { motion } from 'framer-motion';
import { ArrowRight, Sparkles } from 'lucide-react';

const HeroSection = () => {
  return (
    <section
      id="model"
      className="relative pt-32 pb-24 md:pt-44 md:pb-32 bg-white overflow-hidden"
    >
      {/* Soft brand wash */}
      <div className="pointer-events-none absolute inset-0 z-0">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[120vw] h-[60vh] bg-gradient-to-b from-brand-cyan/15 via-white to-transparent rounded-full blur-3xl opacity-70" />
        <div className="absolute inset-0 bg-dotted opacity-40" />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-12 items-center gap-12 md:gap-16">
          {/* Left content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
            className="md:col-span-7"
          >
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-navy/[0.03] text-brand-navy/70 text-[11px] font-semibold tracking-[0.18em] uppercase mb-8 border border-brand-navy/10">
              <Sparkles size={12} className="text-brand-teal" />
              Learning Transformation Accelerator
            </div>

            <h1 className="text-5xl md:text-[5.5rem] font-bold text-brand-navy leading-[1.02] tracking-tight mb-6">
              Human expertise.
              <br />
              <span className="brand-gradient-text">AI amplified.</span>
            </h1>

            <p className="text-lg md:text-xl text-brand-navy/65 leading-relaxed mb-10 max-w-xl font-light">
              PlatypAI is a team of senior learning experts who adopted and adapted the GenAI wave to amplify and scale their craft. We are not a production house. We are a learning transformation accelerator.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 mb-12">
              <a
                href="#systems"
                className="px-7 py-3.5 bg-brand-navy text-white font-semibold rounded-lg hover:bg-brand-teal transition-colors flex items-center justify-center group"
              >
                Explore the Systems
                <ArrowRight
                  className="ml-2 opacity-70 group-hover:opacity-100 group-hover:translate-x-1 transition-all"
                  size={18}
                />
              </a>
              <a
                href="mailto:arpan@platypai.one?subject=PlatypAI%20%E2%80%94%20Discovery%20enquiry"
                className="px-7 py-3.5 border border-brand-navy/15 text-brand-navy font-semibold rounded-lg hover:bg-brand-mist hover:border-brand-navy/25 transition-all flex items-center justify-center"
              >
                Book a Discovery Session
              </a>
            </div>

            {/* Trust strip */}
            <div className="flex flex-wrap items-center gap-x-6 gap-y-3 text-xs text-brand-navy/55">
              <span className="font-semibold tracking-[0.15em] uppercase text-brand-navy/40">
                Built for
              </span>
              <span>Financial Services</span>
              <span className="text-brand-navy/20">•</span>
              <span>Healthcare</span>
              <span className="text-brand-navy/20">•</span>
              <span>Education</span>
              <span className="text-brand-navy/20">•</span>
              <span>Enterprise L&amp;D</span>
            </div>
          </motion.div>

          {/* Right visual */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.2 }}
            className="md:col-span-5 flex justify-center relative h-[420px] md:h-[500px]"
          >
            <HeroMetaphor />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

/**
 * Cinematic visual metaphor:
 *   raw, disordered inputs (left)
 *   → flow through an expert filter (center column)
 *   → resolve into a structured, ordered grid (right).
 *
 * Built with SVG + Framer Motion. Respects prefers-reduced-motion globally
 * (handled in index.css).
 */
const HeroMetaphor = () => {
  return (
    <div className="relative w-full max-w-[440px] h-full">
      <svg
        viewBox="0 0 440 500"
        className="absolute inset-0 w-full h-full"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <defs>
          <linearGradient id="filterGrad" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#00B4D8" stopOpacity="0" />
            <stop offset="50%" stopColor="#00B4D8" stopOpacity="0.35" />
            <stop offset="100%" stopColor="#00B4D8" stopOpacity="0" />
          </linearGradient>
          <linearGradient id="flow1" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="#00B4D8" stopOpacity="0" />
            <stop offset="50%" stopColor="#00B4D8" stopOpacity="0.6" />
            <stop offset="100%" stopColor="#00B4D8" stopOpacity="0" />
          </linearGradient>
          <linearGradient id="flow2" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="#FF4D6D" stopOpacity="0" />
            <stop offset="50%" stopColor="#FF4D6D" stopOpacity="0.55" />
            <stop offset="100%" stopColor="#FF4D6D" stopOpacity="0" />
          </linearGradient>
        </defs>

        {/* Flowing input lines */}
        {[80, 160, 240, 320, 400].map((y, i) => (
          <motion.path
            key={`flow-${i}`}
            d={`M 0 ${y} Q 110 ${y - 40 + i * 8} 220 250 T 440 ${y + 20}`}
            fill="none"
            stroke={i % 2 === 0 ? 'url(#flow1)' : 'url(#flow2)'}
            strokeWidth="1.5"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 0.7 }}
            transition={{
              duration: 4 + i * 0.4,
              repeat: Infinity,
              ease: 'linear',
              delay: i * 0.4,
            }}
          />
        ))}

        {/* Filter column */}
        <rect x="200" y="120" width="40" height="260" rx="6" fill="url(#filterGrad)" />
        <rect
          x="200"
          y="120"
          width="40"
          height="260"
          rx="6"
          fill="none"
          stroke="#00B4D8"
          strokeOpacity="0.35"
        />
        <text
          x="220"
          y="250"
          textAnchor="middle"
          transform="rotate(-90, 220, 250)"
          fontSize="9"
          fontWeight="700"
          letterSpacing="2"
          fill="#00B4D8"
        >
          EXPERTISE FILTER
        </text>
      </svg>

      {/* Raw input dots (left) — chaotic motion */}
      {Array.from({ length: 14 }).map((_, i) => (
        <motion.div
          key={`raw-${i}`}
          className="absolute w-1.5 h-1.5 rounded-full bg-brand-navy/25"
          style={{ left: '6%', top: `${10 + (i * 6) % 80}%` }}
          animate={{
            x: [0, 60, 80],
            y: [(Math.random() - 0.5) * 20, (Math.random() - 0.5) * 10, 0],
            opacity: [0, 0.7, 0],
          }}
          transition={{
            duration: 3 + (i % 4),
            repeat: Infinity,
            delay: (i * 0.25) % 3,
            ease: 'easeInOut',
          }}
        />
      ))}

      {/* Structured output grid (right) */}
      <div className="absolute right-2 top-1/2 -translate-y-1/2 grid grid-cols-3 gap-2.5">
        {Array.from({ length: 12 }).map((_, i) => (
          <motion.div
            key={`out-${i}`}
            initial={{ opacity: 0, scale: 0.6 }}
            animate={{ opacity: [0.25, 0.95, 0.25], scale: 1 }}
            transition={{
              duration: 3.2,
              repeat: Infinity,
              delay: (i * 0.15) % 2,
              ease: 'easeInOut',
            }}
            className="w-8 h-8 rounded-md border border-brand-teal/35 bg-brand-cyan/30"
          />
        ))}
      </div>

      {/* Floating capability labels */}
      {[
        { label: 'Curriculum', top: '14%', delay: 0 },
        { label: 'Knowledge', top: '42%', delay: 0.8 },
        { label: 'Workflows', top: '70%', delay: 1.6 },
      ].map((cap) => (
        <motion.div
          key={cap.label}
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: [0, 1, 1, 0], x: [-10, 0, 0, 10] }}
          transition={{
            duration: 4.5,
            repeat: Infinity,
            delay: cap.delay,
            ease: 'easeInOut',
            times: [0, 0.2, 0.8, 1],
          }}
          className="absolute left-[68%] text-[10px] font-bold tracking-[0.2em] uppercase text-brand-teal/80"
          style={{ top: cap.top }}
        >
          {cap.label}
        </motion.div>
      ))}
    </div>
  );
};

export default HeroSection;
