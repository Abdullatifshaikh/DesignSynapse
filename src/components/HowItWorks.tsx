import { motion } from 'motion/react';

const steps = [
  {
    number: '01',
    title: 'Book a call',
    description: 'We discuss your vision, goals, and technical requirements.'
  },
  {
    number: '02',
    title: 'Get proposal',
    description: 'A detailed scope and fixed-price quote within 48 hours.'
  },
  {
    number: '03',
    title: 'Weekly sprints',
    description: 'Regular updates and progress check-ins every 7 days.'
  },
  {
    number: '04',
    title: 'Launch',
    description: 'Handover and support as you scale your SaaS.'
  }
];

export default function HowItWorks() {
  return (
    <section id="process" className="section-padding bg-white overflow-hidden">
      <div className="container-max">
        <label className="text-xs font-bold uppercase tracking-widest text-brand-blue mb-4 block">Process</label>
        <h2 className="text-3xl font-bold text-text-primary tracking-tight mb-16">Fast, formulaic, foolproof.</h2>

        <div className="grid md:grid-cols-4 gap-12 relative">
          {/* Connector Line */}
          <div className="absolute top-5 left-0 w-full h-px bg-border-subtle hidden md:block -z-10 overflow-hidden">
            <motion.div 
              initial={{ x: '-100%' }}
              whileInView={{ x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1.5, ease: "easeInOut" }}
              className="w-full h-full bg-brand-blue/30"
            />
          </div>
          
          {steps.map((step, index) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15, duration: 0.5 }}
              whileHover={{ y: -5 }}
              className="relative bg-white transition-all group"
            >
              <div className="w-10 h-10 bg-brand-blue text-white rounded-lg flex items-center justify-center font-bold text-sm mb-6 shadow-lg shadow-brand-blue/20 group-hover:scale-110 transition-transform">
                {step.number}
              </div>
              <h3 className="text-lg font-bold text-text-primary mb-2 group-hover:text-brand-blue transition-colors">{step.title}</h3>
              <p className="text-sm text-text-secondary leading-relaxed font-normal">
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
