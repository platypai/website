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
  const visualScale = useTransform(scrollYProgress, [0, 1], [1, 0.94]);
  const visualOpacity = useTransform(scrollYProgress, [0, 0.7], [1, 0.5]);

  return (
    <section
      ref={ref}
      id="model"
      className="relative pt-24 pb-12 md:pt-36 md:pb-20 bg-white overflow-hidden"
    >
      {/* Layered colored glows — anchored behind the right-hand metaphor for visual balance */}
      <motion.div style={{ y: glowY }} className="pointer-events-none absolute inset-0 z-0">
        {/* Soft top wash */}
        <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[120vw] h-[55vh] bg-gradient-to-b from-brand-cyan/25 via-brand-mist/30 to-transparent rounded-full blur-3xl" />
        {/* Teal glow centered on the metaphor (right two-thirds, vertically centered) */}
        <div className="absolute top-1/2 right-[12%] -translate-y-1/2 w-[34vw] h-[34vw] max-w-[420px] max-h-[420px] bg-brand-teal/20 rounded-full blur-3xl" />
        {/* Pink companion glow, just below-right of the metaphor for subtle asymmetric depth */}
        <div className="absolute top-[60%] right-[6%] -translate-y-1/2 w-[22vw] h-[22vw] max-w-[280px] max-h-[280px] bg-brand-pink/15 rounded-full blur-3xl" />
        {/* Light teal hint on the left, paired with the content column */}
        <div className="absolute top-[30%] left-[-6%] w-[24vw] h-[24vw] max-w-[320px] max-h-[320px] bg-brand-cyan/15 rounded-full blur-3xl" />
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
              className="text-[2.75rem] sm:text-5xl md:text-[5rem] font-bold text-brand-navy leading-[1.04] tracking-tight mb-5"
            >
              Human expertise.
              <br />
              <span className="text-brand-teal">AI amplified.</span>
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
                className="w-full sm:w-auto px-6 py-3.5 bg-brand-teal text-white font-semibold rounded-lg hover:bg-[#0096B8] transition-colors inline-flex items-center justify-center group shadow-md shadow-brand-teal/25"
              >
                Explore the Systems
                <ArrowRight
                  className="ml-2 opacity-90 group-hover:translate-x-1 transition-all"
                  size={18}
                />
              </a>
              <a
                href="mailto:arpan@platypai.one?subject=PlatypAI%20%E2%80%94%20Discovery%20enquiry"
                className="w-full sm:w-auto px-6 py-3.5 border-2 border-brand-navy/15 text-brand-navy font-semibold rounded-lg hover:border-brand-teal hover:text-brand-teal transition-colors inline-flex items-center justify-center"
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

          {/* Right visual with parallax + scroll-linked scale/fade */}
          <motion.div
            style={{ y: visualY, scale: visualScale, opacity: visualOpacity }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="md:col-span-5 flex justify-center relative h-[340px] sm:h-[380px] md:h-[460px]"
          >
            <HeroMetaphor />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

/**
 * Two-layer flow metaphor:
 *   raw inputs (left) → EXPERTS column (large, teal) → AI column (smaller, pink) → branched deliverables (right).
 * Layer-1 (Experts) is wider/bolder; Layer-2 (AI) is narrower and smaller. This communicates
 * that experts shape the system first, and AI amplifies inside the boundary experts set.
 */
const HeroMetaphor = () => {
  // Geometry constants — both layers vertically centered on the same band
  const expertsX = 175;
  const expertsW = 42;
  const aiX = 248;
  const aiW = 28;
  const bandTop = 130;
  const bandBottom = 370;
  const bandH = bandBottom - bandTop;

  return (
    <div className="relative w-full max-w-[440px] h-full">
      <svg
        viewBox="0 0 440 500"
        className="absolute inset-0 w-full h-full"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <defs>
          <linearGradient id="expertsGrad" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#00B4D8" stopOpacity="0" />
            <stop offset="50%" stopColor="#00B4D8" stopOpacity="0.55" />
            <stop offset="100%" stopColor="#00B4D8" stopOpacity="0" />
          </linearGradient>
          <linearGradient id="aiGrad" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#FF4D6D" stopOpacity="0" />
            <stop offset="50%" stopColor="#FF4D6D" stopOpacity="0.45" />
            <stop offset="100%" stopColor="#FF4D6D" stopOpacity="0" />
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
        <rect x="-20" y={bandTop + 20} width="480" height={bandH - 40} rx="90" fill="url(#ribbonGrad)" opacity="0.22" />

        {/* Flowing input lines — raw → first layer */}
        {[80, 160, 240, 320, 400].map((y, i) => (
          <motion.path
            key={`flow-${i}`}
            d={`M 0 ${y} Q 90 ${y - 40 + i * 8} 175 250`}
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

        {/* Connector lines between Experts → AI layer (3 narrow streams) */}
        {[210, 250, 290].map((y, i) => (
          <motion.path
            key={`bridge-${i}`}
            d={`M ${expertsX + expertsW} ${y} L ${aiX} ${y}`}
            fill="none"
            stroke="#00B4D8"
            strokeOpacity="0.5"
            strokeWidth="1.25"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1, opacity: [0.2, 0.9, 0.2] }}
            transition={{
              duration: 2.4,
              repeat: Infinity,
              delay: i * 0.3,
              ease: 'easeInOut',
            }}
          />
        ))}

        {/* Branched output lines — AI → deliverables grid */}
        {[
          { y1: 200, y2: 170 },
          { y1: 240, y2: 240 },
          { y1: 280, y2: 310 },
        ].map((b, i) => (
          <motion.path
            key={`branch-${i}`}
            d={`M ${aiX + aiW} ${b.y1} Q 330 ${(b.y1 + b.y2) / 2} 380 ${b.y2}`}
            fill="none"
            stroke="#0A192F"
            strokeOpacity="0.18"
            strokeWidth="1.25"
            strokeDasharray="3 3"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{
              duration: 3 + i * 0.3,
              repeat: Infinity,
              delay: 0.5 + i * 0.4,
              ease: 'easeInOut',
            }}
          />
        ))}

        {/* Experts column (Layer 1, larger) */}
        <rect x={expertsX} y={bandTop} width={expertsW} height={bandH} rx="7" fill="url(#expertsGrad)" />
        <rect x={expertsX} y={bandTop} width={expertsW} height={bandH} rx="7" fill="none" stroke="#00B4D8" strokeOpacity="0.55" strokeWidth="1.25" />
        <text
          x={expertsX + expertsW / 2}
          y={(bandTop + bandBottom) / 2}
          textAnchor="middle"
          transform={`rotate(-90, ${expertsX + expertsW / 2}, ${(bandTop + bandBottom) / 2})`}
          fontSize="13"
          fontWeight="700"
          letterSpacing="3.5"
          fill="#00B4D8"
        >
          EXPERTS
        </text>
        {/* layer 1 tag */}
        <text x={expertsX + expertsW / 2} y={bandTop - 10} textAnchor="middle" fontSize="9" fontWeight="700" letterSpacing="2" fill="#00B4D8" opacity="0.7">
          LAYER 1
        </text>

        {/* AI column (Layer 2, smaller) */}
        <rect x={aiX} y={bandTop + 30} width={aiW} height={bandH - 60} rx="6" fill="url(#aiGrad)" />
        <rect x={aiX} y={bandTop + 30} width={aiW} height={bandH - 60} rx="6" fill="none" stroke="#FF4D6D" strokeOpacity="0.55" strokeWidth="1.25" />
        <text
          x={aiX + aiW / 2}
          y={(bandTop + bandBottom) / 2}
          textAnchor="middle"
          transform={`rotate(-90, ${aiX + aiW / 2}, ${(bandTop + bandBottom) / 2})`}
          fontSize="11"
          fontWeight="700"
          letterSpacing="3"
          fill="#FF4D6D"
        >
          AI
        </text>
        <text x={aiX + aiW / 2} y={bandTop + 18} textAnchor="middle" fontSize="9" fontWeight="700" letterSpacing="2" fill="#FF4D6D" opacity="0.7">
          LAYER 2
        </text>
      </svg>

      {/* Raw input dots (left) */}
      {Array.from({ length: 14 }).map((_, i) => (
        <motion.div
          key={`raw-${i}`}
          className="absolute w-1.5 h-1.5 rounded-full bg-brand-navy/30"
          style={{ left: '4%', top: `${10 + (i * 6) % 80}%` }}
          animate={{
            x: [0, 50, 70],
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

      {/* Branched deliverables grid (right) */}
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
            className={`w-9 h-9 rounded-md border ${
              i % 5 === 0
                ? 'border-brand-pink/40 bg-brand-pink/15'
                : 'border-brand-teal/40 bg-brand-cyan/30'
            }`}
          />
        ))}
      </div>

      {/* Floating capability labels — larger, more readable */}
      {[
        { label: 'Curriculum', top: '14%', delay: 0, color: 'text-brand-teal' },
        { label: 'Knowledge', top: '44%', delay: 0.8, color: 'text-brand-pink' },
        { label: 'Workflows', top: '72%', delay: 1.6, color: 'text-brand-teal' },
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
          className={`hidden sm:block absolute left-[72%] text-[11px] font-bold tracking-[0.2em] uppercase ${cap.color}`}
          style={{ top: cap.top }}
        >
          {cap.label}
        </motion.div>
      ))}
    </div>
  );
};

export default HeroSection;
