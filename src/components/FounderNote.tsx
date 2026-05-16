import { motion } from 'motion/react';

export default function FounderNote() {
  return (
    <section className="section-padding bg-white overflow-hidden">
      <div className="container-max">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <blockquote className="text-2xl md:text-3xl font-bold text-text-primary italic leading-tight mb-8">
              “Most founders don’t fail because of ideas — they fail because nothing launches. That’s what we fix. We build with the urgency your startup deserves.”
            </blockquote>
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-surface rounded-full overflow-hidden border border-border-subtle shadow-sm">
                <img src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=100&q=80" alt="Founder" className="w-full h-full object-cover" />
              </div>
              <div>
                <div className="font-bold text-text-primary">Abdul Latif</div>
                <div className="text-xs font-bold uppercase tracking-widest text-brand-blue">Founder @ DesignSynapse</div>
              </div>
            </div>
          </motion.div>
          
          <div className="hidden md:block relative">
             <div className="absolute -inset-4 bg-brand-blue/5 -skew-x-6 rounded-3xl -z-10" />
             <div className="p-8 bg-white border border-border-subtle rounded-2xl shadow-sm rotate-1">
                <span className="text-[10px] font-bold uppercase tracking-widest text-text-secondary/60 block mb-4">Our Philosophy</span>
                <p className="text-text-secondary leading-relaxed">
                  We believe that speed is the only sustainable competitive advantage for new founders. Our agency isn't built to be your long-term maintenance team—it's built to be the rocket fuel that gets you to project-market fit.
                </p>
             </div>
          </div>
        </div>
      </div>
    </section>
  );
}
