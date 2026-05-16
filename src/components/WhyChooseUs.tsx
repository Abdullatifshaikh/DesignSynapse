import { motion } from 'motion/react';
import { Watch, Target, Zap, HeartHandshake } from 'lucide-react';

const reasons = [
  {
    title: 'Fixed Timelines',
    description: 'We don’t believe in infinite scopes. We set a date and we hit it.',
    icon: Watch
  },
  {
    title: 'Clear Scope',
    description: 'You know exactly what is being built, when, and for how much.',
    icon: Target
  },
  {
    title: 'Founder-First',
    description: 'We think like product partners, not just developers.',
    icon: HeartHandshake
  },
  {
    title: 'Built for Speed',
    description: 'Our tech stacks are chosen for agility and scale.',
    icon: Zap
  }
];

export default function WhyChooseUs() {
  return (
    <section id="about" className="section-padding bg-surface border-b border-border-subtle">
      <div className="container-max">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <label className="text-[10px] font-bold uppercase tracking-[0.2em] text-brand-blue mb-4 block">Philosophy</label>
          <h2 className="text-3xl md:text-4xl font-bold text-text-primary tracking-tight">Focus on what matters.</h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {reasons.map((reason, index) => (
            <motion.div
              key={reason.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              whileHover={{ y: -8 }}
              className="p-8 bg-white border border-border-subtle rounded-2xl transition-all duration-300 hover:shadow-xl hover:shadow-brand-blue/5 group"
            >
              <div className="w-12 h-12 bg-surface border border-border-subtle rounded-xl flex items-center justify-center text-brand-blue group-hover:bg-brand-blue group-hover:text-white transition-all duration-300 mb-6 font-bold">
                <reason.icon className="w-6 h-6" />
              </div>
              <div className="relative">
                <h3 className="text-xl font-bold text-text-primary mb-3 group-hover:text-brand-blue transition-colors">
                  {reason.title}
                </h3>
                <motion.div 
                  className="h-0.5 bg-brand-blue mb-4" 
                  initial={{ width: 0 }}
                  whileInView={{ width: 40 }}
                  viewport={{ once: true }}
                />
              </div>
              <p className="text-text-secondary leading-relaxed text-sm font-medium">
                {reason.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
