import { motion } from 'motion/react';
import { ArrowRight, MessageSquare, ShieldCheck } from 'lucide-react';

interface CTASectionProps {
  id?: string;
  label?: string;
  heading: string;
  subheading: string;
  primaryCTAText?: string;
  primaryCTAUrl?: string;
  secondaryCTAText?: string;
  urgencyText?: string;
  bgColor?: string;
  trustItems?: string[];
  variant?: 'block' | 'card';
}

export default function CTASection({
  id,
  label = "Ready when you are",
  heading,
  subheading,
  primaryCTAText = "Book a discovery call",
  primaryCTAUrl = "https://calendly.com/abdullatif-designsynapse/30min",
  secondaryCTAText,
  urgencyText,
  bgColor = "bg-[#F8FAFC]",
  trustItems = ['Free 30-min call', 'No pressure', 'No commitment'],
  variant = 'block'
}: CTASectionProps) {
  return (
    <section id={id} className={`py-24 md:py-32 ${bgColor} relative overflow-hidden ${variant === 'block' ? 'border-y border-border-subtle/50' : ''}`}>
      {variant === 'card' && (
        <div className="absolute inset-0 m-6 md:m-12 rounded-[3.5rem] border border-brand-blue/10 bg-white/50 -z-10" />
      )}
      {/* Background Vector Elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Focus Glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[radial-gradient(circle_at_center,rgba(37,99,235,0.04)_0%,transparent_70%)]" />

        {/* Flow Lines */}
        <svg className="absolute top-0 left-0 w-full h-full opacity-[0.03]" viewBox="0 0 1200 800" fill="none" xmlns="http://www.w3.org/2000/svg">
          <motion.path 
            initial={{ pathLength: 0, opacity: 0 }}
            whileInView={{ pathLength: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 2, ease: "easeInOut" }}
            d="M-100 400C100 300 300 500 500 400C700 300 900 500 1100 400" 
            stroke="#2563EB" 
            strokeWidth="2"
          />
          <motion.path 
            initial={{ pathLength: 0, opacity: 0 }}
            whileInView={{ pathLength: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 2.5, ease: "easeInOut", delay: 0.2 }}
            d="M-100 450C100 350 300 550 500 450C700 350 900 550 1100 450" 
            stroke="#2563EB" 
            strokeWidth="2"
          />
        </svg>

        {/* Floating Shapes */}
        <motion.div 
          animate={{ y: [0, -20, 0], rotate: [0, 5, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-20 right-[15%] w-32 h-32 bg-brand-blue/5 rounded-3xl blur-2xl" 
        />
        <motion.div 
          animate={{ y: [0, 20, 0], rotate: [0, -5, 0] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          className="absolute bottom-20 left-[15%] w-48 h-48 bg-brand-blue/5 rounded-full blur-3xl" 
        />
        
        {/* System Nodes (minimal) */}
        <div className="absolute inset-0 opacity-[0.02]" style={{ backgroundImage: 'radial-gradient(circle, #2563EB 1.5px, transparent 1.5px)', backgroundSize: '48px 48px' }} />
      </div>

      <div className="container-max relative z-10">
        <div className="max-w-3xl mx-auto text-center px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            {label && (
              <label className="text-[10px] font-bold uppercase tracking-[0.4em] text-brand-blue mb-8 block opacity-60">
                {label}
              </label>
            )}
            
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-text-primary tracking-tight mb-8 leading-[1.1]">
              {heading}
            </h2>
            
            <p className="text-lg md:text-xl text-text-secondary mb-12 leading-relaxed max-w-xl mx-auto">
              {subheading}
            </p>

            {urgencyText && (
              <motion.div 
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
                className="mb-10 inline-flex items-center gap-2 px-4 py-2 bg-brand-blue/5 border border-brand-blue/10 rounded-full text-xs font-bold text-brand-blue uppercase tracking-widest"
              >
                <ShieldCheck className="w-4 h-4" />
                {urgencyText}
              </motion.div>
            )}

            <div className="flex flex-col items-center gap-8">
              <a 
                href={primaryCTAUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-brand-blue hover:bg-brand-blue-hover text-white px-9 py-5 rounded-2xl font-bold transition-all flex items-center justify-center gap-3 group shadow-[0_20px_40px_-10px_rgba(37,99,235,0.3)] hover:-translate-y-1.5 active:translate-y-0 active:shadow-lg whitespace-nowrap"
              >
                {primaryCTAText}
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1.5 transition-transform" />
              </a>

              {secondaryCTAText && (
                <button className="flex items-center gap-2 text-text-secondary font-bold hover:text-text-primary transition-colors group">
                  <MessageSquare className="w-5 h-5 opacity-40 group-hover:opacity-100 transition-opacity" />
                  {secondaryCTAText}
                </button>
              )}

              {/* Micro Trust Text */}
              <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-4 pt-4 border-t border-border-subtle/50 w-full mt-4">
                {trustItems.map((text, i) => (
                  <div key={i} className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest text-text-secondary/40 whitespace-nowrap">
                    <div className="w-1 h-1 bg-brand-blue/30 rounded-full" />
                    {text}
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
      
      {/* Edge depth details */}
      {variant === 'block' && (
        <>
          <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-border-subtle/50 to-transparent" />
          <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-border-subtle/50 to-transparent" />
        </>
      )}
    </section>
  );
}
