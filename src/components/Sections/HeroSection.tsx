import { motion } from 'framer-motion';
import { ArrowRight, Sparkles } from 'lucide-react';

const HeroSection = () => {
  return (
    <section id="model" className="pt-32 pb-20 md:pt-40 md:pb-28 bg-white overflow-hidden relative">
      {/* Decorative bg elements */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-b from-brand-mist to-transparent -skew-x-12 transform translate-x-20 opacity-50 z-0"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          
          {/* Left Content */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="w-full md:w-1/2"
          >
            <div className="inline-block px-4 py-1.5 rounded-full border border-brand-teal text-brand-teal text-xs font-bold tracking-widest uppercase mb-6 shadow-[0_0_15px_rgba(0,180,216,0.15)]">
              Learning Transformation Accelerator
            </div>
            <h1 className="text-5xl md:text-7xl font-bold text-brand-navy leading-tight mb-6">
              Expertise <br /> Engineered <br /> <span className="text-brand-teal">to Scale.</span>
            </h1>
            <p className="text-lg text-brand-navy/70 leading-relaxed mb-6 max-w-lg font-light">
              PlatypAI is a team of experienced learning experts who committed to adopting and adapting the GenAI wave to amplify and scale their capabilities. We are not a production house. We are a learning transformation accelerator.
            </p>
            
            <div className="flex items-center space-x-4 mb-10 text-sm text-brand-navy/60 font-medium">
              <span>Designed by experts.</span>
              <span className="w-1.5 h-1.5 rounded-full bg-brand-pink"></span>
              <span>Accelerated by AI.</span>
              <span className="w-1.5 h-1.5 rounded-full bg-brand-cyan"></span>
              <span>Built for scale.</span>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <button className="px-8 py-3.5 bg-brand-navy text-white font-semibold rounded shadow-xl hover:shadow-brand-navy/20 hover:-translate-y-1 transition-all flex items-center justify-center group">
                Explore the Systems
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={18} />
              </button>
              <button className="px-8 py-3.5 border border-brand-navy/20 text-brand-navy font-semibold rounded hover:bg-brand-mist transition-all">
                Book a Discovery Session
              </button>
            </div>
          </motion.div>

          {/* Right Visual (Interactive Graphic replacing static duck) */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="w-full md:w-1/2 flex justify-center md:justify-end relative"
          >
            {/* Abstract representation of "Expertise + AI" Dashboard */}
            <div className="relative w-[500px] h-[450px]">
              {/* Back panel */}
              <div className="absolute top-10 right-10 w-[380px] h-[300px] bg-brand-mist border border-brand-navy/5 rounded-xl shadow-2xl"></div>
              
              {/* Front Dashboard */}
              <motion.div 
                animate={{ y: [-5, 5, -5] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                className="absolute top-20 left-10 w-[350px] h-[280px] bg-white border border-brand-navy/10 rounded-xl shadow-2xl overflow-hidden flex flex-col"
              >
                <div className="w-full h-10 bg-brand-navy/5 border-b border-brand-navy/10 flex items-center px-4 space-x-2">
                  <div className="w-3 h-3 rounded-full bg-red-400"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
                  <div className="w-3 h-3 rounded-full bg-green-400"></div>
                </div>
                <div className="p-6 flex-1 relative">
                  {/* Expert Signature Line */}
                  <motion.div 
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: 1 }}
                    transition={{ duration: 2, delay: 1 }}
                    className="w-full h-16 border-b-2 border-brand-navy relative"
                  >
                     <svg className="w-full h-full absolute top-0 left-0" viewBox="0 0 200 50">
                        <motion.path 
                          initial={{ pathLength: 0 }}
                          animate={{ pathLength: 1 }}
                          transition={{ duration: 2, delay: 1 }}
                          fill="none" 
                          stroke="#0A192F" 
                          strokeWidth="2" 
                          d="M10,40 Q30,10 50,30 T90,20 T130,40 T170,10" 
                        />
                     </svg>
                     <span className="absolute bottom-1 right-2 text-[10px] text-brand-navy/40 uppercase font-bold">Expert Logic</span>
                  </motion.div>
                  
                  {/* AI Generation Bars */}
                  <div className="mt-8 space-y-3">
                    {[...Array(4)].map((_, i) => (
                      <motion.div 
                        key={i}
                        initial={{ width: 0 }}
                        animate={{ width: `${60 + Math.random() * 40}%` }}
                        transition={{ duration: 1, delay: 1.5 + (i * 0.2) }}
                        className="h-2 bg-brand-cyan/40 rounded-full relative"
                      >
                         {i === 0 && (
                           <motion.div 
                             animate={{ x: [0, 200, 0] }}
                             transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                             className="absolute top-1/2 -translate-y-1/2 w-4 h-4 bg-brand-teal rounded-full flex items-center justify-center shadow-[0_0_10px_rgba(0,180,216,0.5)]"
                           >
                             <Sparkles size={8} className="text-white" />
                           </motion.div>
                         )}
                      </motion.div>
                    ))}
                  </div>
                </div>
              </motion.div>

              {/* Decorative nodes */}
              <motion.div 
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="absolute bottom-5 right-20 w-16 h-16 bg-white border border-brand-pink rounded-full shadow-lg flex items-center justify-center"
              >
                <div className="w-8 h-8 bg-brand-pink/20 rounded-full flex items-center justify-center text-brand-pink font-bold text-xs">AI</div>
              </motion.div>
              
              <div className="absolute top-0 left-20 w-8 h-8 border-2 border-brand-pink transform rotate-45 opacity-50"></div>
              <div className="absolute bottom-20 left-0 w-6 h-6 border-2 border-brand-teal transform rotate-12 opacity-50"></div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default HeroSection;
