import { motion, AnimatePresence } from 'motion/react';
import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';

const clarityQs = [
  {
    q: 'How fast can we realistically launch?',
    a: 'We specialize in 6-week MVP builds. This includes 2 weeks of strategy and design, followed by 4 weeks of high-intensity development. For more complex products, we map out a phased roadmap.'
  },
  {
    q: 'What if my scope changes?',
    a: 'Startups are fluid. If we find a critical feature that wasn’t in initial scope, we swap it for a lower priority one or adjust the sprint. We keep it flexible enough to win, but structured enough to finish.'
  },
  {
    q: 'Do I own everything after delivery?',
    a: 'Absolutely. You own 100% of the IP, design files, and source code. No licenses, no recurring agency fees, no fine print. It’s yours to keep and grow.'
  },
  {
    q: 'How involved do I need to be?',
    a: 'We need about 2 hours of your time per week for demos and feedback. We handle the heavy lifting and decision-making for the "how", but we need you for the "what" and the "why".'
  },
  {
    q: 'What happens after launch?',
    a: 'We don’t just vanish. We offer 30 days of post-launch bug support for free. After that, you can choose a maintenance retainer or we can help you hire and hand off to an in-house team.'
  },
  {
    q: 'How do you handle revisions?',
    a: 'We work in tight feedback loops within each sprint. Because you see progress every few days, there are no "big reveals" and no massive revisions — just continuous refinement.'
  }
];

interface AccordionItemProps {
  key?: string | number;
  q: string;
  a: string;
  isOpen: boolean;
  onClick: () => void;
}

function AccordionItem({ q, a, isOpen, onClick }: AccordionItemProps) {
  return (
    <div 
      className={`border rounded-2xl transition-all duration-300 ${
        isOpen ? 'border-brand-blue bg-white shadow-xl shadow-brand-blue/5' : 'border-border-subtle bg-surface hover:border-brand-blue/30'
      }`}
    >
      <button
        onClick={onClick}
        className="w-full px-6 py-5 flex items-center justify-between text-left group"
      >
        <span className="text-base md:text-lg font-bold text-text-primary tracking-tight">{q}</span>
        <div className={`w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300 ${
          isOpen ? 'bg-brand-blue text-white rotate-180' : 'bg-white text-text-secondary group-hover:text-brand-blue border border-border-subtle'
        }`}>
          <ChevronDown className="w-4 h-4" />
        </div>
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="overflow-hidden"
          >
            <div className="px-6 pb-6 text-text-secondary leading-relaxed text-sm md:text-base font-medium border-t border-border-subtle/50 pt-4">
              {a}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function ObjectionHandling() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section className="section-padding bg-white relative overflow-hidden">
      {/* Background system lines */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.03]">
        <div className="absolute top-1/4 left-0 w-full h-px bg-brand-blue" />
        <div className="absolute top-2/4 left-0 w-full h-px bg-brand-blue" />
        <div className="absolute top-3/4 left-0 w-full h-px bg-brand-blue" />
        <div className="absolute left-1/4 top-0 h-full w-px bg-brand-blue" />
        <div className="absolute left-2/4 top-0 h-full w-px bg-brand-blue" />
        <div className="absolute left-3/4 top-0 h-full w-px bg-brand-blue" />
      </div>

      <div className="container-max relative z-10">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <label className="text-[10px] font-bold uppercase tracking-[0.3em] text-brand-blue mb-4 block">Clarity</label>
            <h2 className="text-4xl md:text-5xl font-bold text-text-primary tracking-tight mb-4">Direct answers to the questions founders actually ask</h2>
            <p className="text-lg text-text-secondary font-medium italic opacity-70">
              No vague agency answers. Just clear, practical guidance.
            </p>
          </motion.div>
        </div>

        <div className="grid lg:grid-cols-2 gap-4 items-start">
          <div className="space-y-4">
            {clarityQs.slice(0, 3).map((item, i) => (
              <AccordionItem 
                key={item.q}
                q={item.q}
                a={item.a}
                isOpen={openIndex === i}
                onClick={() => setOpenIndex(i)}
              />
            ))}
          </div>
          <div className="space-y-4">
            {clarityQs.slice(3).map((item, i) => (
              <AccordionItem 
                key={item.q}
                q={item.q}
                a={item.a}
                isOpen={openIndex === i + 3}
                onClick={() => setOpenIndex(i + 3)}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
