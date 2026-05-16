import { motion } from 'motion/react';
import { Target, Palette, Code, Rocket, Cpu, FileCheck, Check } from 'lucide-react';

import aiAgent1 from '../casestudyrevamp-pages/Ai_Agent_Automation_Builder_SAAS_UX_UI_Behance/1.webp';
import therapyApp1 from '../casestudyrevamp-pages/AI_Powered_Mental_Therapy_App_UI_UX_Case_Study__Behance/1.webp';
import marketingAgent1 from '../casestudyrevamp-pages/UI_UX_Design_for_Marketing_Agency_Website_Behance/1.webp';
import nalixo1 from '../casestudyrevamp-pages/Nalixo_AI_Powered_Crypto_Investment_App_UI_UX_Design_Behance/1.webp';

const tangibleCards = [
  {
    title: 'Product Strategy',
    icon: Target,
    items: ['Feature roadmap', 'Scope definition', 'User flows', 'Product structure']
  },
  {
    title: 'UI/UX Design',
    icon: Palette,
    items: ['Wireframes', 'High-fidelity screens', 'Interactive prototype', 'Design system']
  },
  {
    title: 'Development',
    icon: Code,
    items: ['Frontend build', 'Backend integration', 'Responsive pages', 'Deployment-ready code']
  },
  {
    title: 'Launch Assets',
    icon: Rocket,
    items: ['Landing page', 'Brand assets', 'Analytics setup', 'Deployment support']
  },
  {
    title: 'Automation Systems',
    icon: Cpu,
    items: ['Workflow automations', 'AI integrations', 'Internal tooling', 'Process optimization']
  },
  {
    title: 'Handoff',
    icon: FileCheck,
    items: ['Documentation', 'Source files', 'Code ownership', 'Launch walkthrough']
  }
];

const visualProof = [
  aiAgent1,
  therapyApp1,
  marketingAgent1,
  nalixo1
];

export default function Deliverables() {
  return (
    <section className="section-padding bg-white border-b border-border-subtle relative overflow-hidden">
      {/* Blueprint elements */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.03]">
        <div className="absolute top-0 left-0 w-64 h-64 border-r border-b border-brand-blue" />
        <div className="absolute bottom-0 right-0 w-64 h-64 border-l border-t border-brand-blue" />
      </div>

      <div className="container-max relative z-10">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          <div>
            <label className="text-[10px] font-bold uppercase tracking-[0.2em] text-brand-blue mb-4 block">What you get</label>
            <h2 className="text-4xl md:text-5xl font-bold text-text-primary tracking-tight mb-8">What you actually get.</h2>
            <p className="text-lg text-text-secondary mb-12 leading-relaxed">
              Clear deliverables, structured outputs, and everything needed to move from idea to execution without the usual agency fluff.
            </p>

            <div className="grid sm:grid-cols-2 gap-4">
              {tangibleCards.map((card, index) => (
                <motion.div
                  key={card.title}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ x: 4 }}
                  className="p-6 bg-surface border border-border-subtle rounded-2xl transition-all duration-300 hover:border-brand-blue/30 group"
                >
                  <div className="w-10 h-10 bg-white border border-border-subtle rounded-lg flex items-center justify-center text-brand-blue mb-4 group-hover:scale-110 transition-transform">
                    <card.icon className="w-5 h-5" />
                  </div>
                  <h3 className="text-base font-bold text-text-primary mb-2">{card.title}</h3>
                  <ul className="space-y-1">
                    {card.items.slice(0, 2).map((item) => (
                      <li key={item} className="flex items-center gap-2 text-xs text-text-secondary font-medium">
                        <Check className="w-3 h-3 text-brand-blue flex-shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="grid grid-cols-2 gap-4">
              {visualProof.map((img, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  whileHover={{ y: -10, rotate: i % 2 === 0 ? 1 : -1 }}
                  className={`aspect-[4/5] rounded-2xl overflow-hidden shadow-2xl shadow-black/5 ${i % 2 === 1 ? 'mt-12' : ''}`}
                >
                  <img src={img} alt="Deliverable proof" className="w-full h-full object-cover transition-transform duration-700 hover:scale-110" />
                </motion.div>
              ))}
            </div>
            
            {/* Floating Badge */}
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -top-6 -right-6 bg-white border border-border-subtle shadow-xl p-4 rounded-xl flex items-center gap-3 z-20"
            >
              <div className="w-10 h-10 bg-brand-blue-light rounded-full flex items-center justify-center">
                <Rocket className="w-5 h-5 text-brand-blue" />
              </div>
              <div>
                <p className="text-[10px] font-bold text-text-secondary uppercase">Ready for</p>
                <p className="text-sm font-bold text-text-primary">Launch day</p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
