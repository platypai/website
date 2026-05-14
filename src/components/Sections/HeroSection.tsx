import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowRight, Sparkles } from 'lucide-react';

const HeroSection = () => {
  const ref = useRef<HTMLElement | null>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] });
  // Subtle parallax for the colored glow + content lift
  const glowY = useTransform(scrollYProgress, [0, 1], [0, 80]);
  const contentY = useTransform(scrollYProgress, [0, 1], [0, -40]);
  const visualY = useTransform(scrollYProgress, [0, 1], [0, -20]);

  return (
    <section
      ref={ref}
      id="model"
      className="relative pt-28 pb-16 md:pt-36 md:pb-20 bg-white overflow-hidden"
    >
      {/* Layered colored glows (parallax) */}
      <motion.div style={{ y: glowY }} className="pointer-events-none absolute inset-0 z-0">
        <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-[120vw] h-[55vh] bg-gradient-to-b from-brand-cyan/30 via-brand-mist/40 to-transparent rounded-full blur-3xl" />
        <div className="absolute top-20 right-[-10%] w-[40vw] h-[40vh] bg-brand-pink/15 rounded-full blur-3xl" />
        <div className="absolute top-32 left-[-10%] w-[40vw] h-[40vh] bg-brand-teal/15 rounded-full blur-3xl" />
        <div className="absolute inset-0 bg-dotted opacity-40" />
      </motion.div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-12 items-center gap-10 md:gap-12">
          {/* Left content */}
          <motion.div style={{ y: contentY }} className="md:col-span-7">
            <motion.div
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-navy/[0.04] text-brand-navy/75 text-[11px] font-semibold tracking-[0.2em] uppercase mb-6 border border-brand-navy/10"
            >
              <Sparkles size={12} className="text-brand-teal" />
              Learning Transformation Accelerator
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.05 }}
              className="text-5xl md:text-[5rem] font-bold text-brand-navy leading-[1.02] tracking-tight mb-5"
            >
              Human expertise.
              <br />
              <span className="brand-gradient-text">AI amplified.</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="text-lg text-brand-navy/65 leading-relaxed mb-8 max-w-xl"
            >
              Designed by experts. Accelerated by AI. Built for scale. PlatypAI is a team of senior learning experts adapting GenAI to amplify and scale their craft — not a production house.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.25 }}
              className="flex flex-col sm:flex-row gap-3 mb-8"
            >
              <a
                href="#systems"
                className="px-6 py-3.5 bg-brand-navy text-white font-semibold rounded-lg hover:bg-brand-teal transition-colors flex items-center justify-center group shadow-lg shadow-brand-navy/15"
              >
                Explore the Systems
                <ArrowRight
                  className="ml-2 opacity-70 group-hover:opacity-100 group-hover:translate-x-1 transition-all"
                  size={18}
                />
              </a>
              <a
                href="mailto:arpan@platypai.one?subject=PlatypAI%20%E2%80%94%20Discovery%20enquiry"
                className="px-6 py-3.5 border border-brand-navy/15 text-brand-navy font-semibold rounded-lg hover:bg-brand-mist hover:border-brand-navy/25 transition-all flex items-center justify-center"
              >
                Book a Discovery Session
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="flex flex-wrap items-center gap-x-5 gap-y-2 text-xs text-brand-navy/55"
            >
              <span className="font-semibold tracking-[0.18em] uppercase text-brand-teal">
                Built for
              </span>
              <span>Financial Services</span>
              <span className="text-brand-navy/20">•</span>
              <span>Healthcare</span>
              <span className="text-brand-navy/20">•</span>
              <span>Education</span>
              <span className="text-brand-navy/20">•</span>
              <span>Enterprise L&amp;D</span>
            </motion.div>
          </motion.div>

          {/* Right visual with parallax */}
          <motion.div
            style={{ y: visualY }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="md:col-span-5 flex justify-center relative h-[380px] md:h-[460px]"
          >
            <HeroMetaphor />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

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
            <stop offset="50%" stopColor="#00B4D8" stopOpacity="0.45" />
            <stop offset="100%" stopColor="#00B4D8" stopOpacity="0" />
          </linearGradient>
          <linearGradient id="flow1" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="#00B4D8" stopOpacity="0" />
            <stop offset="50%" stopColor="#00B4D8" stopOpacity="0.7" />
            <stop offset="100%" stopColor="#00B4D8" stopOpacity="0" />
          </linearGradient>
          <linearGradient id="flow2" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="#FF4D6D" stopOpacity="0" />
            <stop offset="50%" stopColor="#FF4D6D" stopOpacity="0.65" />
            <stop offset="100%" stopColor="#FF4D6D" stopOpacity="0" />
          </linearGradient>
          <linearGradient id="ribbonGrad" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#00B4D8" stopOpacity="0.45" />
            <stop offset="100%" stopColor="#FF4D6D" stopOpacity="0.35" />
          </linearGradient>
        </defs>

        {/* Soft colored ribbon behind everything */}
        <rect x="-20" y="160" width="480" height="180" rx="90" fill="url(#ribbonGrad)" opacity="0.25" />

        {/* Flowing input lines */}
        {[80, 160, 240, 320, 400].map((y, i) => (
          <motion.path
            key={`flow-${i}`}
            d={`M 0 ${y} Q 110 ${y - 40 + i * 8} 220 250 T 440 ${y + 20}`}
            fill="none"
            stroke={i % 2 === 0 ? 'url(#flow1)' : 'url(#flow2)'}
            strokeWidth="1.5"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 0.8 }}
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
          strokeOpacity="0.45"
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

      {/* Raw input dots (left) */}
      {Array.from({ length: 14 }).map((_, i) => (
        <motion.div
          key={`raw-${i}`}
          className="absolute w-1.5 h-1.5 rounded-full bg-brand-navy/30"
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

      {/* Structured output grid */}
      <div className="absolute right-2 top-1/2 -translate-y-1/2 grid grid-cols-3 gap-2.5">
        {Array.from({ length: 12 }).map((_, i) => (
          <motion.div
            key={`out-${i}`}
            initial={{ opacity: 0, scale: 0.6 }}
            animate={{ opacity: [0.3, 1, 0.3], scale: 1 }}
            transition={{
              duration: 3.2,
              repeat: Infinity,
              delay: (i * 0.15) % 2,
              ease: 'easeInOut',
            }}
            className={`w-8 h-8 rounded-md border ${
              i % 5 === 0
                ? 'border-brand-pink/40 bg-brand-pink/15'
                : 'border-brand-teal/40 bg-brand-cyan/30'
            }`}
          />
        ))}
      </div>

      {/* Floating capability labels */}
      {[
        { label: 'Curriculum', top: '14%', delay: 0, color: 'text-brand-teal' },
        { label: 'Knowledge', top: '42%', delay: 0.8, color: 'text-brand-pink' },
        { label: 'Workflows', top: '70%', delay: 1.6, color: 'text-brand-teal' },
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
          className={`absolute left-[68%] text-[10px] font-bold tracking-[0.2em] uppercase ${cap.color}`}
          style={{ top: cap.top }}
        >
          {cap.label}
        </motion.div>
      ))}
    </div>
  );
};

export default HeroSection;
