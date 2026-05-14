import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const HeroSection = () => {
  return (
    <section id="model" className="pt-32 pb-20 md:pt-40 md:pb-28 bg-white overflow-hidden relative">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-16">
          
          {/* Left Content */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="w-full md:w-1/2"
          >
            <div className="inline-block px-4 py-1.5 rounded-full bg-brand-mist/50 text-brand-navy/60 text-[10px] font-bold tracking-widest uppercase mb-8 border border-brand-navy/5">
              Learning Transformation Accelerator
            </div>
            <h1 className="text-5xl md:text-7xl font-bold text-brand-navy leading-[1.1] mb-6 tracking-tight">
              Expertise Engineered to Scale.
            </h1>
            <p className="text-lg text-brand-navy/60 leading-relaxed mb-8 max-w-lg font-light">
              PlatypAI is a team of experienced learning experts who committed to adopting and adapting the GenAI wave to amplify and scale their capabilities. We are not a production house. We are a learning transformation accelerator.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <button 
                onClick={() => window.location.href = '#systems'}
                className="px-8 py-3.5 bg-brand-navy text-white font-medium rounded hover:bg-brand-teal transition-colors flex items-center justify-center group"
              >
                Explore the Systems
                <ArrowRight className="ml-2 opacity-50 group-hover:opacity-100 group-hover:translate-x-1 transition-all" size={18} />
              </button>
              <button 
                onClick={() => window.location.href = 'mailto:hello@platypai.com'}
                className="px-8 py-3.5 border border-brand-navy/10 text-brand-navy font-medium rounded hover:bg-brand-mist hover:border-brand-navy/20 transition-all"
              >
                Book a Discovery Session
              </button>
            </div>
          </motion.div>

          {/* Right Visual (Mindful Metaphor: Raw Info -> Expert Filter -> Scaled Structure) */}
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.2 }}
            className="w-full md:w-1/2 flex justify-center relative h-[400px]"
          >
            <div className="relative w-full max-w-[450px] h-full flex items-center justify-center">
              
              {/* Expert Filter (The Core) */}
              <motion.div 
                animate={{ boxShadow: ['0 0 0px rgba(0,180,216,0)', '0 0 40px rgba(0,180,216,0.1)', '0 0 0px rgba(0,180,216,0)'] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-24 h-48 border-x border-brand-teal/30 bg-white/50 backdrop-blur-sm z-20 flex flex-col items-center justify-center"
              >
                <div className="text-[8px] font-bold text-brand-teal uppercase tracking-widest transform -rotate-90 whitespace-nowrap">Expertise Filter</div>
              </motion.div>

              {/* Raw Data Input (Left side chaotic dots) */}
              {[...Array(12)].map((_, i) => (
                <motion.div
                  key={`raw-${i}`}
                  initial={{ x: -200, y: (Math.random() - 0.5) * 300, opacity: 0 }}
                  animate={{ x: -40, y: (Math.random() - 0.5) * 50, opacity: [0, 0.5, 0] }}
                  transition={{ 
                    duration: 3 + Math.random() * 2, 
                    repeat: Infinity, 
                    delay: Math.random() * 2,
                    ease: "easeInOut"
                  }}
                  className="absolute left-1/2 top-1/2 w-1.5 h-1.5 rounded-full bg-brand-navy/20 z-10"
                />
              ))}

              {/* Scaled Output (Right side structured grid) */}
              <div className="absolute right-0 top-1/2 -translate-y-1/2 grid grid-cols-3 gap-3 z-10 pr-8">
                {[...Array(9)].map((_, i) => (
                  <motion.div
                    key={`structured-${i}`}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: [0.2, 0.8, 0.2], scale: 1 }}
                    transition={{ 
                      duration: 4, 
                      repeat: Infinity, 
                      delay: i * 0.2,
                      ease: "easeInOut"
                    }}
                    className="w-8 h-8 border border-brand-teal/20 rounded bg-brand-mist/50"
                  />
                ))}
              </div>

              {/* AI Processing Lines */}
              <svg className="absolute inset-0 w-full h-full z-0 pointer-events-none" viewBox="0 0 450 400">
                <motion.path
                  initial={{ pathLength: 0, opacity: 0 }}
                  animate={{ pathLength: 1, opacity: 0.1 }}
                  transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                  d="M50 200 Q 150 100 225 200 T 400 200"
                  fill="none"
                  stroke="#00B4D8"
                  strokeWidth="1"
                  strokeDasharray="5,5"
                />
                <motion.path
                  initial={{ pathLength: 0, opacity: 0 }}
                  animate={{ pathLength: 1, opacity: 0.1 }}
                  transition={{ duration: 4, repeat: Infinity, ease: "linear", delay: 1 }}
                  d="M50 200 Q 150 300 225 200 T 400 200"
                  fill="none"
                  stroke="#FF4D6D"
                  strokeWidth="1"
                  strokeDasharray="5,5"
                />
              </svg>

            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default HeroSection;
