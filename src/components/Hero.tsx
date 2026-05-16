import { motion } from 'motion/react';
import { ArrowRight, ChevronDown } from 'lucide-react';
import ProductShowcase from './ProductShowcase';

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center pt-32 md:pt-40 overflow-hidden bg-white">
      {/* Radial Highlight */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[radial-gradient(circle_at_center,rgba(37,99,235,0.03)_0%,transparent_70%)] pointer-events-none" />
      
      <div className="container-max grid lg:grid-cols-2 gap-12 items-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-brand-blue-light text-brand-blue rounded-full text-[10px] font-bold uppercase tracking-wider mb-6">
            Design + Development Studio
          </div>
          
          <h1 className="text-5xl lg:text-[64px] font-bold text-text-primary leading-[1.1] tracking-tight mb-8">
            Launch your SaaS product in <span className="text-brand-blue italic relative inline-block">
              6 weeks
              <motion.div 
                initial={{ width: 0 }}
                animate={{ width: '100%' }}
                transition={{ duration: 1, delay: 0.8 }}
                className="absolute bottom-2 left-0 h-1 bg-brand-blue/20 -z-10"
              />
            </span>
          </h1>
          
          <p className="text-lg text-text-secondary leading-relaxed mb-10 max-w-lg">
            We help founders turn ideas into real products — without hiring a team or wasting months managing freelancers.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-5 items-start sm:items-center">
            <div className="flex flex-col gap-2 w-full sm:w-auto">
              <a 
                href="https://calendly.com/abdullatif-designsynapse/30min"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-brand-blue hover:bg-brand-blue-hover text-white px-5 py-3.5 lg:px-6 lg:py-4 rounded-lg text-sm font-bold transition-all flex items-center justify-center gap-2 group shadow-xl shadow-brand-blue/20 hover:-translate-y-1 active:translate-y-0 whitespace-nowrap"
              >
                Book a discovery call
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
              <span className="text-[10px] font-bold text-text-secondary/60 uppercase tracking-widest text-center">
                Free 30-min call · No pressure
              </span>
            </div>
          </div>

          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.5 }}
            className="mt-12 flex items-center gap-4 pt-8 border-t border-border-subtle w-fit group cursor-default"
          >
             <div className="flex -space-x-2 transition-[margin] duration-300 group-hover:-space-x-1">
                {[
                  'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=100&h=100&q=80',
                  'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=100&h=100&q=80',
                  'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=100&h=100&q=80',
                  'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&w=100&h=100&q=80',
                ].map((src, i) => (
                  <motion.div 
                    key={i} 
                    whileHover={{ 
                      scale: 1.15, 
                      zIndex: 10,
                      transition: { duration: 0.2 }
                    }}
                    className="w-9 h-9 rounded-full border-2 border-white bg-surface overflow-hidden relative shadow-sm"
                  >
                    <img src={src} alt="SaaS Founder" className="w-full h-full object-cover" />
                  </motion.div>
                ))}
             </div>
             <div className="text-xs font-bold text-text-secondary tracking-wide uppercase">
                Trusted by <span className="text-text-primary">13+</span> SaaS Founders
             </div>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="relative h-full hidden lg:flex items-center justify-center"
        >
          <ProductShowcase />
        </motion.div>
      </div>

      {/* Decorative Blur Backgrounds */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-brand-blue/5 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/4 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-brand-blue/[0.03] rounded-full blur-[120px] translate-y-1/2 -translate-x-1/4 pointer-events-none" />
    </section>
  );
}
