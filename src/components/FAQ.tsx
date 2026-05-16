import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Plus, Minus } from 'lucide-react';

const faqs = [
  {
    q: 'Do I need technical knowledge?',
    a: 'Not at all. We take care of technical architecture and implementation. Your focus stays on the product vision and customer feedback.'
  },
  {
    q: 'Do I own the code?',
    a: 'Yes. Upon final payment, 100% of the IP, code, and design assets are yours. We provide a clean GitHub repository and Figma source files.'
  },
  {
    q: 'How fast can we start?',
    a: 'Depending on our current queue, we typically kick off projects within 5–10 business days after the proposal is signed.'
  },
  {
    q: 'What stack do you use?',
    a: 'We leverage modern, scalable tech like React, Node.js, and specialized cloud providers. We choose the platform that best fits your product requirements, not our own preferences.'
  }
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="section-padding bg-white border-y border-border-subtle relative overflow-hidden">
      <div className="container-max">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <label className="text-xs font-bold uppercase tracking-widest text-brand-blue mb-4 block">Clarity</label>
          <h2 className="text-3xl md:text-4xl font-bold text-text-primary tracking-tight mb-4">Direct answers to real questions.</h2>
          <p className="text-text-secondary">Can’t find your answer? <a href="#" className="font-semibold text-brand-blue hover:underline">Chat with us directly.</a></p>
        </div>

        <div className="max-w-3xl mx-auto space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <motion.div 
                key={faq.q}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className={`border rounded-2xl overflow-hidden transition-all duration-300 ${isOpen ? 'border-brand-blue bg-brand-blue/[0.02] shadow-lg shadow-brand-blue/5' : 'border-border-subtle bg-white hover:border-brand-blue/30'}`}
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  className="w-full text-left p-6 flex justify-between items-center group transition-colors"
                >
                  <span className={`text-base font-bold transition-colors ${isOpen ? 'text-brand-blue' : 'text-text-primary group-hover:text-brand-blue'}`}>
                    {faq.q}
                  </span>
                  <div className={`p-2 rounded-full transition-all ${isOpen ? 'bg-brand-blue text-white rotate-180' : 'bg-surface text-text-secondary rotate-0'}`}>
                    <Plus className="w-4 h-4" />
                  </div>
                </button>
                
                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <div className="px-6 pb-6 text-sm text-text-secondary leading-relaxed pt-2">
                        {faq.a}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
