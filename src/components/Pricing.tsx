import { motion } from 'motion/react';
import { Check, ArrowRight } from 'lucide-react';

const plans = [
  {
    name: 'Digital Launch Solution',
    price: '$4,500',
    time: '3 Weeks',
    features: ['Brand Identity', 'Conversion-Focused Site', 'CMS Integration'],
    popular: false
  },
  {
    name: 'SaaS MVP Solution',
    price: '$10,000',
    time: '6 Weeks',
    features: ['Custom Web App', 'Auth & Database', 'Stripe Integration'],
    popular: true
  },
  {
    name: 'AI Automation Solution',
    price: '$5,000',
    time: '4 Weeks',
    features: ['Workflow Analysis', 'Custom AI Agents', 'API Connectors'],
    popular: false
  }
];

export default function Pricing() {
  return (
    <section className="section-padding bg-white relative">
      <div className="container-max">
        <label className="text-xs font-bold uppercase tracking-widest text-brand-blue mb-4 block text-center">Investment</label>
        <h2 className="text-3xl font-bold text-text-primary tracking-tight mb-16 text-center">Predictable costs. Fixed timelines.</h2>

        <div className="grid md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className={`glass-card relative flex flex-col ${plan.popular ? 'border-brand-blue ring-4 ring-brand-blue/5 scale-105 z-10 lg:scale-110' : ''}`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-brand-blue text-white text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-full whitespace-nowrap">
                  Most Popular
                </div>
              )}
              
              <h3 className="text-xl font-bold mb-1">{plan.name}</h3>
              <p className="text-xs text-text-secondary uppercase tracking-widest font-bold mb-6">{plan.time}</p>
              
              <div className="mb-8">
                <span className="text-4xl font-bold text-text-primary italic">{plan.price}</span>
                <span className="text-text-secondary text-sm ml-1">starting from</span>
              </div>

              <ul className="space-y-4 mb-8 flex-grow">
                {plan.features.map(f => (
                  <li key={f} className="flex gap-3 text-sm text-text-secondary font-medium">
                    <Check className="w-4 h-4 text-brand-blue flex-shrink-0" />
                    {f}
                  </li>
                ))}
              </ul>

              <button className={`w-full py-3 rounded-lg font-bold text-sm tracking-wide transition-all flex items-center justify-center gap-2 ${
                plan.popular 
                  ? 'bg-brand-blue text-white hover:bg-brand-blue-hover shadow-lg shadow-brand-blue/20' 
                  : 'border border-border-subtle text-text-primary hover:bg-white'
              }`}>
                See full breakdown
                <ArrowRight className="w-4 h-4" />
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
