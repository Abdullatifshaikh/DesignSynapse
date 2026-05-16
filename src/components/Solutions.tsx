import { motion } from 'motion/react';
import { Rocket, Layout, Bot, ArrowRight, Check } from 'lucide-react';
import { Link } from 'react-router-dom';

const solutions = [
  {
    id: '01',
    slug: 'saas-mvp',
    title: 'SaaS MVP Solution',
    label: '01',
    positioning: 'Turn your SaaS idea into a real product in 6 weeks',
    description: 'Built for founders who need research, design, and development handled in one focused process — from early concept to launch-ready MVP.',
    bestFor: 'Early-stage founders · Validated ideas · Seed-stage startups',
    time: '6 weeks',
    price: '$10,000',
    icon: Rocket,
    accent: 'border-brand-blue',
    comparison: {
      output: 'Full Web App',
      complexity: 'High (Full Stack)',
      tech: 'React / Next / DB'
    }
  },
  {
    id: '02',
    slug: 'digital-launchpad',
    title: 'Digital Launch Solution',
    label: '02',
    positioning: 'Build your digital growth foundation in 3 weeks',
    description: 'A strategic growth system that combines elite branding with conversion-optimized web experiences to build trust and attract your first users.',
    bestFor: 'Startups ready for launch & marketing · Founder-led brands · Category leaders',
    time: '3 weeks',
    price: '$4,500',
    icon: Layout,
    accent: 'border-blue-400',
    comparison: {
      output: 'Growth Foundation',
      complexity: 'Medium (Marketing)',
      tech: 'Tailwind / Framer'
    }
  },
  {
    id: '03',
    slug: 'ai-automation',
    title: 'AI Automation Solution',
    label: '03',
    positioning: 'Eliminate repetitive work with custom AI systems',
    description: 'Built for growing teams that want to automate manual workflows, reduce repetitive tasks, and scale operations without increasing overhead.',
    bestFor: 'Scaling startups · Operations-heavy teams · Businesses using repetitive processes',
    time: '4 weeks',
    price: '$5,000',
    icon: Bot,
    accent: 'border-blue-900',
    comparison: {
      output: 'LLM Workflows',
      complexity: 'High (Systems)',
      tech: 'Python / OpenAI'
    }
  }
];

export default function Solutions() {
  return (
    <section id="solutions" className="section-padding bg-surface border-b border-border-subtle relative overflow-hidden">
      {/* Section Specific Background Elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden opacity-[0.03]">
        <div className="absolute top-0 right-0 w-[400px] h-[400px] border-l border-b border-brand-blue" />
        <div className="absolute top-20 right-20 flex gap-4">
          {[1,2,3,4].map(i => (
            <div key={i} className="w-8 h-8 rounded-full border border-brand-blue" />
          ))}
        </div>
      </div>

      <div className="container-max relative z-10">
        <div className="max-w-3xl mb-24 text-center mx-auto">
          <label className="text-[10px] font-bold uppercase tracking-[0.2em] text-brand-blue mb-4 block">Our Solutions</label>
          <h2 className="text-4xl md:text-5xl font-bold text-text-primary tracking-tight mb-8">Solutions built to scale.</h2>
          <p className="text-text-secondary leading-relaxed text-lg max-w-2xl mx-auto">
            We've built three focused solutions for the most common problems founders face. Each designed to help you scale faster.
          </p>
        </div>

        {/* Comparison Grid */}
        <div className="grid lg:grid-cols-3 gap-8 mb-32">
          {solutions.map((solution, index) => (
            <Link key={solution.title} to={`/solutions/${solution.slug}`} className="flex">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -8 }}
                className={`group flex flex-col bg-white border border-border-subtle rounded-2xl p-8 transition-all duration-300 hover:shadow-2xl hover:shadow-brand-blue/10 cursor-pointer relative w-full border-t-4 ${solution.accent}`}
              >
                <div className="mb-8 flex items-center justify-between">
                  <div className="w-12 h-12 bg-surface rounded-xl flex items-center justify-center text-brand-blue group-hover:scale-110 transition-transform duration-300">
                    <solution.icon className="w-6 h-6" />
                  </div>
                </div>

                <h3 className="text-2xl font-bold text-text-primary mb-2 group-hover:text-brand-blue transition-colors">
                  {solution.title}
                </h3>
                <p className="text-xs font-bold text-brand-blue mb-6 uppercase tracking-wider">
                  {solution.positioning}
                </p>
                
                {/* Highlight Strip */}
                <div className="flex items-center gap-4 py-3 px-4 bg-surface rounded-xl mb-8 border border-border-subtle/50">
                  <div className="flex flex-col">
                    <span className="text-[8px] font-bold text-text-secondary/50 uppercase tracking-tighter">Timeline</span>
                    <span className="text-xs font-bold text-text-primary">{solution.time}</span>
                  </div>
                  <div className="w-px h-6 bg-border-subtle/50" />
                  <div className="flex flex-col">
                    <span className="text-[8px] font-bold text-text-secondary/50 uppercase tracking-tighter">From</span>
                    <span className="text-xs font-bold text-text-primary">{solution.price}</span>
                  </div>
                </div>

                <p className="text-text-secondary text-sm leading-relaxed mb-8 flex-grow">
                  {solution.description}
                </p>

                <div className="mt-auto">
                  <div className="mb-8">
                    <span className="text-[10px] font-bold text-text-secondary/40 uppercase tracking-widest block mb-3">Best for</span>
                    <div className="inline-flex px-3 py-1 bg-blue-50 text-brand-blue text-[10px] font-bold rounded-full border border-brand-blue/10">
                      {solution.bestFor}
                    </div>
                  </div>

                  <div className="inline-flex items-center gap-2 text-sm font-bold text-text-primary group-hover:text-brand-blue transition-all">
                    <span>Learn more</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </motion.div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
