import { motion } from 'motion/react';

export default function Problem() {
  return (
    <section className="section-padding bg-surface relative overflow-hidden border-b border-border-subtle">
      <div className="container-max">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="max-w-2xl mx-auto text-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-text-primary tracking-tight mb-8">
            Building a SaaS product shouldn’t feel this hard.
          </h2>
          
          <div className="space-y-6 text-lg text-text-secondary leading-relaxed">
            <p>
              Hiring confusion, slow development cycles, and miscommunication between designers and engineers often lead to months of wasted time and capital.
            </p>
            <p>
              Most founders spend more time managing freelancers than they do talking to their own customers.
            </p>
            <p className="font-semibold text-text-primary pt-4">
              There’s a simpler way to build.
            </p>
          </div>
        </motion.div>
      </div>
      
      {/* Subtle separator */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-px h-24 bg-border-subtle" />
    </section>
  );
}
