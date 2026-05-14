import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { siteContent } from '../../data/siteContent';

const CaseStudies = () => {
  // Extract all case studies from the site content schema
  const allCaseStudies: { title: string, category: string, categoryId: string }[] = [];
  
  siteContent.categories.forEach(category => {
    category.nodes.forEach(node => {
      if (node.proofCases) {
        node.proofCases.forEach(proof => {
          allCaseStudies.push({
            title: proof,
            category: node.label,
            categoryId: category.id
          });
        });
      }
    });
  });

  return (
    <section id="practice" className="py-24 bg-white relative overflow-hidden border-t border-brand-mist/50">
      {/* Decorative background grids */}
      <div className="absolute inset-0 z-0 opacity-[0.03]" style={{ backgroundImage: 'radial-gradient(#00B4D8 1px, transparent 1px)', backgroundSize: '30px 30px' }}></div>
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-brand-mist/30 to-transparent z-0"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="mb-16">
          <span className="text-brand-pink font-bold tracking-widest text-sm uppercase mb-4 block">Case Studies</span>
          <h2 className="text-4xl md:text-5xl font-bold text-brand-navy leading-tight mb-6">
            What this looks like in practice.
          </h2>
          <p className="text-lg text-brand-navy/70 max-w-2xl leading-relaxed">
            Real-world applications of the Expert-in-the-Loop methodology across learning architectures, workflow automation, and enterprise knowledge.
          </p>
        </div>

        {/* Masonry or Grid for Case Studies */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {allCaseStudies.map((study, idx) => (
            <motion.a
              href="#architecture"
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: (idx % 3) * 0.1 }}
              className="group bg-white border border-brand-navy/10 hover:border-brand-teal/50 rounded-xl p-6 transition-all duration-300 hover:shadow-lg flex flex-col justify-between block cursor-pointer"
            >
              <div>
                <span className="inline-block px-3 py-1 rounded-full bg-brand-mist text-brand-navy/60 text-[10px] font-bold tracking-wider uppercase mb-4 group-hover:bg-brand-teal/10 group-hover:text-brand-teal transition-colors">
                  {study.category}
                </span>
                <h3 className="text-lg font-bold text-brand-navy mb-4 leading-snug group-hover:text-brand-teal transition-colors">
                  {study.title}
                </h3>
              </div>
              
              <div className="mt-8 flex items-center text-brand-navy/40 group-hover:text-brand-teal transition-colors text-sm font-semibold">
                <span>View Approach</span>
                <ArrowUpRight size={16} className="ml-1 transform group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </div>
            </motion.a>
          ))}
        </div>

      </div>
    </section>
  );
};

export default CaseStudies;
