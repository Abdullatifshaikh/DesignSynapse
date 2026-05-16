import { motion } from 'motion/react';

const detailedSteps = [
  {
    num: '01',
    title: 'Product Clarity',
    desc: 'We strip your idea down to its most valuable core. Together, we define the strict scope, primary features, and optimal user flow to ensure we build what matters.',
    deliverable: 'Scope Doc + Flow Map'
  },
  {
    num: '02',
    title: 'Design Sprint',
    desc: 'Speed matters. We move from low-fidelity wireframes to a high-fidelity interactive UI prototype in days, not weeks. You see the product before we write any code.',
    deliverable: 'Interactive Prototype'
  },
  {
    num: '03',
    title: 'Development',
    desc: 'Our engineers build a robust, production-ready frontend and backend using modern tech stacks. Weekly check-ins keep you aligned and confident.',
    deliverable: 'Tested Codebase'
  },
  {
    num: '04',
    title: 'Launch & Handoff',
    desc: 'We handle the deployment and infrastructure. Once live, we hand over everything—the code, the assets, and the documentation for your future team.',
    deliverable: 'Live URL + Repo Access'
  }
];

export default function ProcessDetailed() {
  return (
    <section className="section-padding bg-surface border-y border-border-subtle relative overflow-hidden">
      {/* Moving background lines */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.05]">
        <svg className="w-full h-full" viewBox="0 0 1200 800" fill="none">
          <motion.path
            d="M 0 100 Q 300 0 600 100 T 1200 100"
            stroke="#2563EB"
            strokeWidth="2"
            animate={{ x: [0, -100, 0] }}
            transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
          />
          <motion.path
            d="M 0 700 Q 300 800 600 700 T 1200 700"
            stroke="#2563EB"
            strokeWidth="1"
            strokeDasharray="4 4"
            animate={{ x: [0, 100, 0] }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          />
        </svg>
      </div>

      <div className="container-max relative z-10">
        <div className="max-w-2xl mb-20">
          <label className="text-xs font-bold uppercase tracking-widest text-brand-blue mb-4 block">Deep Dive</label>
          <h2 className="text-4xl font-bold text-text-primary tracking-tight mb-6">How we move from idea to market.</h2>
          <p className="text-text-secondary leading-relaxed">No black boxes. No guessing. Our process is transparent, aggressive, and designed specifically for pre-seed founders who need to move.</p>
        </div>

        <div className="space-y-12">
          {detailedSteps.map((step, index) => (
            <motion.div
              key={step.num}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="flex flex-col md:flex-row gap-8 md:gap-16 items-start"
            >
              <div className="text-4xl md:text-5xl font-bold text-brand-blue/20 flex-shrink-0 tabular-nums">
                {step.num}
              </div>
              <div className="grid md:grid-cols-2 gap-8 flex-grow">
                <div>
                  <h3 className="text-2xl font-bold text-text-primary mb-4">{step.title}</h3>
                  <p className="text-text-secondary leading-relaxed font-normal">{step.desc}</p>
                </div>
                <div className="flex items-center">
                  <div className="bg-white border border-border-subtle px-6 py-4 rounded-xl shadow-sm flex-grow">
                    <span className="text-[10px] font-bold uppercase tracking-widest text-brand-blue block mb-2">Key Deliverable</span>
                    <span className="text-sm font-semibold text-text-primary">{step.deliverable}</span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
