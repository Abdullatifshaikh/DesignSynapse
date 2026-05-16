import { motion } from 'motion/react';
import { Check, ArrowRight, Minus } from 'lucide-react';

const isForYou = [
  'You have a clear idea or validated concept',
  'You want to launch quickly (not “someday”)',
  'You value speed and execution over endless iteration',
  'You are ready to invest in building properly',
  'You want a structured process, not chaos'
];

const isNotForYou = [
  'You’re just exploring ideas with no direction',
  'You’re looking for the cheapest option',
  'You want endless revisions with no scope',
  'You’re not ready to commit to a timeline',
  'You expect instant results without collaboration'
];

export default function WhoFor() {
  return (
    <section className="section-padding bg-surface border-y border-border-subtle">
      <div className="container-max">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <label className="text-[10px] font-bold uppercase tracking-[0.2em] text-brand-blue mb-4 block">Fit</label>
            <h2 className="text-3xl md:text-4xl font-bold text-text-primary tracking-tight mb-6">Is this the right fit?</h2>
            <p className="text-text-secondary max-w-xl mx-auto">
              We work best with founders who are clear, committed, and ready to build. Here’s how to know if that’s you.
            </p>
          </motion.div>
        </div>

        {/* Qualification Cards */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {/* Ideal Fit */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            whileHover={{ y: -4 }}
            className="bg-white border-l-4 border-l-brand-blue border-y border-r border-border-subtle rounded-xl p-8 md:p-12 transition-all duration-300 hover:shadow-xl hover:shadow-brand-blue/5"
          >
            <h3 className="text-2xl font-bold text-text-primary mb-8">This is for you if:</h3>
            <ul className="space-y-5">
              {isForYou.map((item) => (
                <li key={item} className="flex gap-4 text-text-secondary">
                  <div className="w-5 h-5 rounded-full bg-brand-blue/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Check className="w-3 h-3 text-brand-blue" />
                  </div>
                  <span className="text-sm lg:text-base font-medium">{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Not a Fit */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            whileHover={{ y: -4 }}
            className="bg-white border border-border-subtle rounded-xl p-8 md:p-12 transition-all duration-300 hover:shadow-xl hover:shadow-border-subtle/20"
          >
            <h3 className="text-2xl font-bold text-text-primary mb-8">This is not for you if:</h3>
            <ul className="space-y-5">
              {isNotForYou.map((item) => (
                <li key={item} className="flex gap-4 text-text-secondary opacity-60">
                  <div className="w-5 h-5 rounded-full bg-surface flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Minus className="w-3 h-3 text-text-secondary" />
                  </div>
                  <span className="text-sm lg:text-base font-medium">{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>

        {/* Subtle Bottom CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="text-center"
        >
          <p className="text-sm font-medium text-text-secondary mb-6">If this sounds like you, the next step is simple.</p>
          <button className="bg-brand-blue hover:bg-brand-blue-hover text-white px-8 py-4 rounded-lg font-bold transition-all inline-flex items-center gap-2 group shadow-lg shadow-brand-blue/20 hover:-translate-y-1">
            Book a discovery call
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>
        </motion.div>
      </div>
    </section>
  );
}
