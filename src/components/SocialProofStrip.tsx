import { motion, useMotionValue, useSpring, useTransform, useInView } from 'motion/react';
import { useEffect, useRef } from 'react';

const industries = [
  'SaaS', 
  'Fintech', 
  'AI', 
  'Marketplaces', 
  'Web Platforms', 
  'Internal Tools'
];

const metrics = [
  { value: 20, suffix: '+', label: 'Products designed' },
  { value: 13, suffix: '+', label: 'Founders worked with' },
  { value: 5, suffix: '+', label: 'Industries' }
];

function CountUp({ value, suffix }: { value: number, suffix: string }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });
  const motionValue = useMotionValue(0);
  const springValue = useSpring(motionValue, {
    damping: 30,
    stiffness: 100,
  });
  const displayValue = useTransform(springValue, (latest) => Math.floor(latest));

  useEffect(() => {
    if (isInView) {
      motionValue.set(value);
    }
  }, [isInView, value, motionValue]);

  return (
    <span ref={ref} className="text-3xl md:text-5xl font-bold text-brand-blue tracking-tighter">
      <motion.span>{displayValue}</motion.span>
      {suffix}
    </span>
  );
}

export default function SocialProofStrip() {
  return (
    <section className="bg-white py-20 border-b border-border-subtle relative overflow-hidden">
      <div className="container-max relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-10"
        >
          <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-text-secondary/50">
            Built for founders, by experts.
          </span>
        </motion.div>

        <div className="flex flex-wrap justify-center gap-3 md:gap-4 mb-16">
          {industries.map((item, index) => (
            <motion.div
              key={item}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05, duration: 0.4 }}
              className="px-5 py-2.5 rounded-full border border-border-subtle bg-surface text-sm font-semibold text-text-primary transition-all cursor-default shadow-sm hover:shadow-md hover:text-brand-blue hover:border-brand-blue"
            >
              {item}
            </motion.div>
          ))}
        </div>

        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5, duration: 1 }}
          className="flex flex-wrap justify-center items-center gap-12 md:gap-24 pt-12 border-t border-border-subtle/50"
        >
          {metrics.map((metric) => (
            <div key={metric.label} className="flex flex-col items-center text-center gap-2">
              <CountUp value={metric.value} suffix={metric.suffix} />
              <span className="text-[10px] font-black text-text-secondary/60 uppercase tracking-[0.2em] whitespace-nowrap">
                {metric.label}
              </span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
