import { motion } from 'motion/react';
import { Timer, Rocket, Lock, ShieldCheck } from 'lucide-react';

const stats = [
  {
    value: '6 Weeks',
    label: 'Average MVP delivery',
    icon: Timer,
    desc: 'From initial call to production handover.'
  },
  {
    value: '3x Faster',
    label: 'Than hiring in-house',
    icon: Rocket,
    desc: 'No recruitment cycles or on-boarding overhead.'
  },
  {
    value: '100%',
    label: 'Code ownership',
    icon: Lock,
    desc: 'You own every line of code we write.'
  },
  {
    value: 'Built to Scale',
    label: 'Real users, not demos',
    icon: ShieldCheck,
    desc: 'Production-ready infrastructure from day zero.'
  }
];

export default function Outcomes() {
  return (
    <section className="section-padding bg-white relative">
      <div className="container-max">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <label className="text-[10px] font-bold uppercase tracking-[0.2em] text-brand-blue mb-4 block">Outcomes</label>
            <h2 className="text-3xl md:text-4xl font-bold text-text-primary tracking-tight mb-4">What you actually get</h2>
            <p className="text-text-secondary max-w-lg mx-auto">Clear results. No ambiguity. We measure success by the speed and quality of your launch.</p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -5, borderColor: 'rgb(37, 99, 235, 0.3)' }}
              className="p-8 bg-surface border border-border-subtle rounded-2xl transition-all duration-300 group hover:shadow-xl hover:shadow-brand-blue/5"
            >
              <div className="w-10 h-10 bg-white border border-border-subtle rounded-lg flex items-center justify-center text-brand-blue mb-6 group-hover:scale-110 transition-transform duration-300">
                <stat.icon className="w-5 h-5" />
              </div>
              
              <div className="text-3xl font-bold text-text-primary tracking-tighter mb-1 select-none italic group-hover:text-brand-blue transition-colors">
                {stat.value}
              </div>
              <div className="text-sm font-bold text-text-primary uppercase tracking-wide mb-3">
                {stat.label}
              </div>
              <p className="text-sm text-text-secondary leading-relaxed">
                {stat.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
