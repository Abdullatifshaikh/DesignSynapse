import { motion, AnimatePresence } from 'motion/react';
import { ArrowRight, Check, Target, Zap, Rocket, Layout, Bot, ChevronRight, Code, Sparkles, Cpu, Palette } from 'lucide-react';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Outcomes from '../components/Outcomes';
import CaseStudies from '../components/CaseStudies';

const solutionDetails = [
  {
    id: '01',
    slug: 'saas-mvp',
    number: '01',
    title: 'SaaS MVP Solution',
    icon: Rocket,
    outcome: 'Turn your idea into a real SaaS product',
    headline: 'Turn your idea into a real SaaS product in 6 weeks',
    description: 'Built for founders who need more than just development. We help you research, design, and build a launch-ready MVP — with product strategy, UX, and engineering handled in one focused process.',
    timeline: '6 weeks',
    price: '$10,000',
    badge: 'Launch-ready MVP',
    bestFor: [
      'Early-stage SaaS founders',
      'Validated startup ideas',
      'Pre-seed & seed-stage teams',
      'Founders preparing for launch or fundraising'
    ],
    includes: [
      { title: 'Product Discovery', text: 'Deep research into your market and users.', icon: Target },
      { title: 'UX/UI Design', text: 'High-fidelity interface design and user flows.', icon: Layout },
      { title: 'Full-stack Dev', text: 'Production-ready code with scalable architecture.', icon: Code },
      { title: 'Responsive UI', text: 'Optimized dashboards for all devices.', icon: Zap }
    ],
    outcomes: [
      'Production-ready product',
      'Full code ownership',
      'Structured weekly progress'
    ],
    color: 'blue'
  },
  {
    id: '02',
    slug: 'digital-launchpad',
    number: '02',
    title: 'Digital Launch Solution',
    icon: Layout,
    outcome: 'Launch, position, and grow your presence',
    headline: 'Build a scalable digital foundation in 3 weeks',
    description: 'Built for startups that need more than just a website—a strategic growth system that combines elite branding with conversion-optimized web experiences to build trust and attract users.',
    timeline: '3 weeks',
    price: '$4,500',
    badge: 'Growth Foundation',
    bestFor: [
      'Startups preparing for launch and growth',
      'Founder-led businesses building market credibility',
      'SaaS products needing a scalable digital presence',
      'Teams looking to improve visibility and conversion'
    ],
    includes: [
      { title: 'Strategic Positioning', text: 'Defining your unique value and market voice.', icon: Sparkles },
      { title: 'Conversion Systems', text: 'Strategic messaging that turns visitors into leads.', icon: Target },
      { title: 'Growth-ready Website', text: 'Scalable, high-performance web infrastructure.', icon: Layout },
      { title: 'Market Readiness', text: 'Perfectly aligned for user acquisition and marketing.', icon: Zap }
    ],
    outcomes: [
      'Scalable digital presence',
      'Conversion-ready foundation',
      'Improved market trust'
    ],
    color: 'indigo'
  },
  {
    id: '03',
    slug: 'ai-automation',
    number: '03',
    title: 'AI Automation Solution',
    icon: Bot,
    outcome: 'Eliminate repetitive work with custom AI',
    headline: 'Scale your operations with custom AI systems',
    description: 'Built for growing teams that want to automate repetitive workflows, reduce manual operations, and create scalable internal systems powered by AI.',
    timeline: '4 weeks',
    price: '$5,000',
    badge: 'Operational Scale',
    bestFor: [
      'Scaling startups',
      'Operations-heavy businesses',
      'Teams handling repetitive workflows',
      'Companies looking to improve efficiency'
    ],
    includes: [
      { title: 'Workflow Audit', text: 'Mapping bottlenecks in your existing stack.', icon: Target },
      { title: 'AI Integrations', text: 'Custom OpenAI, Anthropic, or local LLM setups.', icon: Bot },
      { title: 'Internal Tools', text: 'Automated dashboards and data pipelines.', icon: Cpu },
      { title: 'Process Optimization', text: 'Reducing manual work by up to 50%.', icon: Zap }
    ],
    outcomes: [
      'Reduced manual overhead',
      'Scalable AI architecture',
      'Operational efficiency boost'
    ],
    color: 'emerald'
  }
];

export default function SolutionsPage() {
  const [activeId, setActiveId] = useState('01');
  const activeSolution = solutionDetails.find(s => s.id === activeId) || solutionDetails[0];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-white selection:bg-brand-blue-light selection:text-brand-blue font-sans">
      <Navbar />
      
      <main className="overflow-hidden">
        {/* SECTION 1 — HERO */}
        <section className="pt-40 pb-20 bg-white relative">
          <div className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:32px_32px] opacity-10" />
          <div className="container-max text-center relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: [0.23, 1, 0.32, 1] }}
            >
              <label className="text-[10px] font-black uppercase tracking-[0.4em] text-brand-blue mb-6 block">Productized Solutions</label>
              <h1 className="text-5xl md:text-7xl font-bold text-text-primary tracking-tighter mb-8 leading-[0.95]">
                Three startup growth paths.
              </h1>
              <p className="text-xl text-text-secondary max-w-2xl mx-auto font-medium opacity-80">
                Choose the system that fits your current stage of building and growing. No generic services—just focused outcomes.
              </p>
            </motion.div>
          </div>
        </section>

        {/* SECTION 2 — SOLUTION EXPLORER */}
        <section className="pb-32 bg-white">
          <div className="container-max">
            <div className="bg-[#F8FAFC] rounded-[32px] border border-border-subtle/40 shadow-2xl shadow-blue-900/5 relative overflow-hidden">
              {/* Explorer Layout */}
              <div className="flex flex-col lg:flex-row relative z-10">
                {/* LEFT SIDE — SELECTOR (Sticky on Desktop) */}
                <div className="w-full lg:w-[400px] border-b lg:border-b-0 lg:border-r border-border-subtle/30 p-4 md:p-8 lg:p-10 lg:sticky lg:top-24 lg:h-[calc(100vh-120px)] flex flex-col gap-4">
                  <h3 className="text-[10px] font-black uppercase tracking-[0.3em] text-text-secondary mb-4 px-4">Select Solution</h3>
                  <div className="flex lg:flex-col gap-3 overflow-x-auto lg:overflow-visible pb-4 lg:pb-0 scrollbar-hide">
                    {solutionDetails.map((s) => {
                      const isActive = activeId === s.id;
                      return (
                        <button
                          key={s.id}
                          onClick={() => setActiveId(s.id)}
                          className={`flex-shrink-0 lg:flex-shrink-1 text-left p-6 md:p-8 rounded-[24px] transition-all duration-500 group relative ${
                            isActive 
                              ? 'bg-white shadow-xl shadow-blue-900/10 border border-brand-blue ring-1 ring-brand-blue/10 translate-x-0 lg:translate-x-2' 
                              : 'bg-transparent border border-transparent hover:bg-white/50 opacity-60 hover:opacity-90'
                          }`}
                        >
                          <div className={`text-[10px] font-black tracking-widest mb-3 ${isActive ? 'text-brand-blue' : 'text-text-secondary opacity-50'}`}>
                            {s.number}
                          </div>
                          <h4 className={`text-lg font-bold mb-2 transition-colors ${isActive ? 'text-text-primary' : 'text-text-secondary'}`}>
                            {s.title}
                          </h4>
                          <p className={`text-xs font-medium leading-relaxed max-w-[200px] transition-colors ${isActive ? 'text-text-secondary' : 'text-text-secondary/60'}`}>
                            {s.outcome}
                          </p>
                          {isActive && (
                            <motion.div 
                              layoutId="active-indicator"
                              className="absolute right-6 top-1/2 -translate-y-1/2 w-1.5 h-1.5 rounded-full bg-brand-blue shadow-[0_0_10px_#2563EB]"
                            />
                          )}
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* RIGHT SIDE — CONTENT PANEL */}
                <div className="flex-1 min-h-[600px] relative">
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={activeId}
                      initial={{ opacity: 0, x: 20, filter: 'blur(10px)' }}
                      animate={{ opacity: 1, x: 0, filter: 'blur(0px)' }}
                      exit={{ opacity: 0, x: -20, filter: 'blur(10px)' }}
                      transition={{ duration: 0.5, ease: [0.23, 1, 0.32, 1] }}
                      className="p-8 md:p-12 lg:p-16 xl:p-20 relative z-20"
                    >
                      {/* Solution Header */}
                      <div className="max-w-3xl mb-12">
                        <motion.div
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: 0.1 }}
                        >
                          <h2 className="text-3xl md:text-5xl font-bold text-text-primary mb-6 tracking-tight">
                            {activeSolution.title}
                          </h2>
                          <p className="text-xl md:text-2xl text-text-secondary font-medium leading-tight mb-8">
                            {activeSolution.headline}
                          </p>
                          
                          {/* Quick Info Bar */}
                          <div className="flex flex-wrap gap-3 mb-10">
                            {[
                              { label: activeSolution.timeline, icon: Zap },
                              { label: `From ${activeSolution.price}`, icon: Target },
                              { label: activeSolution.badge, icon: Sparkles }
                            ].map((pill, i) => (
                              <div key={i} className="flex items-center gap-2 px-4 py-2 bg-brand-blue/5 rounded-full border border-brand-blue/10">
                                <pill.icon className="w-3.5 h-3.5 text-brand-blue" />
                                <span className="text-[11px] font-black uppercase tracking-widest text-brand-blue">{pill.label}</span>
                              </div>
                            ))}
                          </div>

                          <p className="text-lg text-text-secondary leading-relaxed font-medium opacity-80 mb-12">
                            {activeSolution.description}
                          </p>
                        </motion.div>
                      </div>

                      {/* Best For Section */}
                      <div className="mb-16">
                        <h3 className="text-[10px] font-black uppercase tracking-[0.3em] text-brand-blue mb-8">Best For</h3>
                        <div className="grid md:grid-cols-2 gap-x-12 gap-y-6">
                          {activeSolution.bestFor.map((item, i) => (
                            <motion.div 
                              initial={{ opacity: 0, x: -10 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ delay: 0.3 + (i * 0.05) }}
                              key={i} 
                              className="flex items-start gap-4"
                            >
                              <div className="w-5 h-5 rounded-full bg-brand-blue/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                                <Check className="w-3 h-3 text-brand-blue stroke-[3px]" />
                              </div>
                              <span className="text-sm font-bold text-text-primary opacity-80">{item}</span>
                            </motion.div>
                          ))}
                        </div>
                      </div>

                      {/* This Solution Includes */}
                      <div className="mb-16">
                        <h3 className="text-[10px] font-black uppercase tracking-[0.3em] text-brand-blue mb-8">This Solution Includes</h3>
                        <div className="grid md:grid-cols-2 gap-6">
                          {activeSolution.includes.map((feature, i) => (
                            <motion.div 
                              initial={{ opacity: 0, y: 10 }}
                              animate={{ opacity: 1, y: 0 }}
                              transition={{ delay: 0.4 + (i * 0.05) }}
                              key={feature.title} 
                              className="p-6 rounded-[24px] bg-white border border-border-subtle/20 hover:border-brand-blue/30 hover:shadow-xl hover:shadow-blue-900/5 transition-all group"
                            >
                              <div className="w-10 h-10 bg-surface rounded-xl flex items-center justify-center text-brand-blue mb-4 group-hover:scale-110 transition-transform">
                                <feature.icon className="w-5 h-5" />
                              </div>
                              <h4 className="font-bold text-text-primary mb-2">{feature.title}</h4>
                              <p className="text-xs text-text-secondary leading-relaxed font-medium">{feature.text}</p>
                            </motion.div>
                          ))}
                        </div>
                      </div>

                      {/* What You Get Section */}
                      <div className="mb-16">
                        <h3 className="text-[10px] font-black uppercase tracking-[0.3em] text-brand-blue mb-8">What You Get</h3>
                        <div className="grid md:grid-cols-3 gap-4">
                          {activeSolution.outcomes.map((outcome, i) => (
                            <div key={outcome} className="p-6 rounded-[20px] bg-gradient-to-br from-white to-blue-50/30 border border-blue-100/50 flex flex-col justify-center text-center">
                              <span className="text-xs font-bold text-text-primary leading-tight">{outcome}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* CTA SECTION */}
                      <div className="flex flex-col sm:flex-row items-center gap-6 pt-10 border-t border-border-subtle/30">
                        <Link 
                          to={`/solutions/${activeSolution.slug}`}
                          className="w-full sm:w-auto px-10 py-5 bg-brand-blue text-white rounded-full font-black text-xs uppercase tracking-widest hover:bg-brand-blue-hover transition-all flex items-center justify-center gap-3 group shadow-[0_20px_50px_rgba(37,99,235,0.2)] hover:-translate-y-1"
                        >
                          Explore {activeSolution.title}
                          <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                        </Link>
                        <button className="text-xs font-black uppercase tracking-widest text-text-secondary hover:text-brand-blue flex items-center gap-2 group transition-colors">
                          Book discovery call <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                        </button>
                      </div>
                    </motion.div>
                  </AnimatePresence>

                  {/* Visual Background Identity */}
                  <div className="absolute inset-0 z-10 pointer-events-none opacity-40 overflow-hidden">
                    <AnimatePresence mode="wait">
                      <motion.div
                        key={`${activeId}-visual`}
                        initial={{ opacity: 0, scale: 1.1 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 1.1 }}
                        transition={{ duration: 1.5 }}
                        className="absolute inset-0"
                      >
                         <div className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full blur-[160px] opacity-20 ${
                           activeId === '01' ? 'bg-blue-500' : 
                           activeId === '02' ? 'bg-indigo-500' : 'bg-emerald-500'
                         }`} />
                         
                         {/* Abstract Patterns per Solution */}
                         {activeId === '01' && (
                           <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(37,99,235,0.05),transparent)]" />
                         )}
                         {activeId === '02' && (
                           <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%232563eb' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")` }} />
                         )}
                         {activeId === '03' && (
                           <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(16,185,129,0.02)_1px,transparent_1px),linear-gradient(to_bottom,rgba(16,185,129,0.02)_1px,transparent_1px)] bg-[size:40px_40px]" />
                         )}
                      </motion.div>
                    </AnimatePresence>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 3 — THE JOURNEY (Where are you right now?) */}
        <section id="journey" className="section-padding bg-white relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(37,99,235,0.03),transparent)] pointer-events-none" />
          
          <div className="container-max relative z-10">
            <div className="text-center mb-20">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <label className="text-[10px] font-black uppercase tracking-[0.4em] text-brand-blue mb-6 block">Self-Assessment</label>
                <h2 className="text-4xl md:text-6xl font-bold text-text-primary tracking-tighter mb-8 leading-tight">
                  Where are you right now?
                </h2>
                <p className="text-xl text-text-secondary max-w-2xl mx-auto font-medium opacity-70">
                  Each solution is designed for a different stage of building and growing your startup. Choose the path that matches what your business needs most right now.
                </p>
              </motion.div>
            </div>

            {/* Journey Line (Subtle) */}
            <div className="hidden lg:flex justify-between items-center max-w-4xl mx-auto mb-12 opacity-20">
              <div className="flex flex-col items-center">
                <div className="w-3 h-3 rounded-full bg-brand-blue" />
                <span className="text-[8px] font-black uppercase tracking-widest mt-2">Build Product</span>
              </div>
              <div className="flex-1 h-px bg-gradient-to-r from-brand-blue to-indigo-500" />
              <div className="flex flex-col items-center">
                <div className="w-3 h-3 rounded-full bg-indigo-500" />
                <span className="text-[8px] font-black uppercase tracking-widest mt-2">Launch & Grow</span>
              </div>
              <div className="flex-1 h-px bg-gradient-to-r from-indigo-500 to-emerald-500" />
              <div className="flex flex-col items-center">
                <div className="w-3 h-3 rounded-full bg-emerald-500" />
                <span className="text-[8px] font-black uppercase tracking-widest mt-2">Optimize & Automate</span>
              </div>
            </div>

            <div className="grid lg:grid-cols-3 gap-8">
              {/* CARD 01 - SaaS MVP */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.1, ease: [0.23, 1, 0.32, 1] }}
                className="group relative bg-[#F8FAFC] rounded-[40px] border border-border-subtle/30 p-10 flex flex-col justify-between hover:border-brand-blue/40 transition-all hover:-translate-y-2 hover:shadow-2xl hover:shadow-blue-900/10"
              >
                <div>
                  <label className="text-[9px] font-black uppercase tracking-[0.3em] text-brand-blue mb-8 block px-2 py-1 bg-brand-blue/5 w-fit rounded">Early-stage product</label>
                  <h3 className="text-2xl md:text-3xl font-bold text-text-primary mb-6 leading-tight tracking-tight">I have an idea but no real product yet</h3>
                  <p className="text-base text-text-secondary font-medium leading-relaxed opacity-80 mb-10">
                    You need strategy, UX, and development to turn your concept into a launch-ready SaaS product users can actually test, use, and invest in.
                  </p>
                </div>

                <div>
                  <div className="flex items-center gap-3 mb-6 px-4 py-3 bg-white rounded-2xl border border-brand-blue/5 shadow-sm">
                    <Rocket className="w-5 h-5 text-brand-blue" />
                    <div>
                      <div className="text-[8px] font-black uppercase tracking-widest text-text-secondary opacity-60">Recommended Solution</div>
                      <div className="text-xs font-bold text-text-primary">SaaS MVP Solution</div>
                    </div>
                  </div>
                  <Link to="/solutions/saas-mvp" className="flex items-center justify-between w-full p-6 bg-brand-blue text-white rounded-3xl font-black text-xs uppercase tracking-widest group/btn hover:bg-brand-blue-hover transition-all shadow-lg shadow-blue-900/20">
                    Build your MVP
                    <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </motion.div>

              {/* CARD 02 - Digital Launch */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2, ease: [0.23, 1, 0.32, 1] }}
                className="group relative bg-[#F8FAFC] rounded-[40px] border border-border-subtle/30 p-10 flex flex-col justify-between hover:border-indigo-500/40 transition-all hover:-translate-y-2 hover:shadow-2xl hover:shadow-indigo-900/10"
              >
                <div>
                  <label className="text-[9px] font-black uppercase tracking-[0.3em] text-indigo-600 mb-8 block px-2 py-1 bg-indigo-500/5 w-fit rounded">Launch, position, grow</label>
                  <h3 className="text-2xl md:text-3xl font-bold text-text-primary mb-6 leading-tight tracking-tight">I need to build credibility and attract my first users</h3>
                  <p className="text-base text-text-secondary font-medium leading-relaxed opacity-80 mb-10">
                    You need a strategic digital foundation—more than just a website. We build conversion-focused experiences that anchor your marketing and support long-term growth.
                  </p>
                </div>

                <div>
                  <div className="flex items-center gap-3 mb-6 px-4 py-3 bg-white rounded-2xl border border-indigo-500/5 shadow-sm">
                    <Layout className="w-5 h-5 text-indigo-500" />
                    <div>
                      <div className="text-[8px] font-black uppercase tracking-widest text-text-secondary opacity-60">Recommended Solution</div>
                      <div className="text-xs font-bold text-text-primary">Digital Launch Solution</div>
                    </div>
                  </div>
                  <Link to="/solutions/digital-launchpad" className="flex items-center justify-between w-full p-6 bg-indigo-600 text-white rounded-3xl font-black text-xs uppercase tracking-widest group/btn hover:bg-indigo-700 transition-all shadow-lg shadow-indigo-900/20">
                    Launch and grow
                    <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </motion.div>

              {/* CARD 03 - AI Automation */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.3, ease: [0.23, 1, 0.32, 1] }}
                className="group relative bg-[#F8FAFC] rounded-[40px] border border-border-subtle/30 p-10 flex flex-col justify-between hover:border-emerald-500/40 transition-all hover:-translate-y-2 hover:shadow-2xl hover:shadow-emerald-900/10"
              >
                <div>
                  <label className="text-[9px] font-black uppercase tracking-[0.3em] text-emerald-600 mb-8 block px-2 py-1 bg-emerald-500/5 w-fit rounded">Operations & scale</label>
                  <h3 className="text-2xl md:text-3xl font-bold text-text-primary mb-6 leading-tight tracking-tight">My team is wasting time on repetitive work</h3>
                  <p className="text-base text-text-secondary font-medium leading-relaxed opacity-80 mb-10">
                    You need AI-powered workflows and automation systems that reduce manual operations and help your business scale efficiently.
                  </p>
                </div>

                <div>
                  <div className="flex items-center gap-3 mb-6 px-4 py-3 bg-white rounded-2xl border border-emerald-500/5 shadow-sm">
                    <Bot className="w-5 h-5 text-emerald-500" />
                    <div>
                      <div className="text-[8px] font-black uppercase tracking-widest text-text-secondary opacity-60">Recommended Solution</div>
                      <div className="text-xs font-bold text-text-primary">AI Automation Solution</div>
                    </div>
                  </div>
                  <Link to="/solutions/ai-automation" className="flex items-center justify-between w-full p-6 bg-emerald-600 text-white rounded-3xl font-black text-xs uppercase tracking-widest group/btn hover:bg-emerald-700 transition-all shadow-lg shadow-emerald-900/20">
                    Automate operations
                    <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </motion.div>
            </div>

            {/* Section CTA */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
              className="mt-20 p-8 md:p-12 bg-white rounded-[40px] border border-border-subtle/50 text-center max-w-4xl mx-auto shadow-xl shadow-blue-900/5"
            >
              <h4 className="text-xl md:text-2xl font-bold text-text-primary mb-4 tracking-tight">Still not sure which one you need?</h4>
              <p className="text-base text-text-secondary font-medium opacity-70 mb-8 max-w-2xl mx-auto">
                Most founders have a mix of these needs. Book a quick 15-minute alignment call and we'll help you map out the most efficient technical path for your startup.
              </p>
              <button className="inline-flex items-center gap-2 text-brand-blue font-black text-[10px] uppercase tracking-[0.2em] px-8 py-4 bg-brand-blue/5 rounded-full hover:bg-brand-blue/10 transition-colors group">
                Schedule alignment call <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </motion.div>
          </div>
        </section>


        {/* SECTION 5 — OUTCOMES */}
        <Outcomes />

        {/* SECTION 6 — MINI CASE STUDIES */}
        <CaseStudies />

        {/* SECTION 7 — FINAL CTA */}
        <section className="section-padding bg-white relative overflow-hidden bg-[radial-gradient(ellipse_at_center,rgba(37,99,235,0.05),transparent)]">
          <div className="container-max text-center relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="max-w-4xl mx-auto"
            >
              <label className="text-[10px] font-black uppercase tracking-[0.4em] text-brand-blue mb-6 block">Ready to grow?</label>
              <h2 className="text-5xl md:text-7xl font-bold text-text-primary tracking-tighter mb-8 leading-[0.95]">
                Not sure which one you need?
              </h2>
              <p className="text-2xl text-text-secondary mb-12 max-w-2xl mx-auto font-medium opacity-70">
                We’ll help you figure it out in 30 minutes. No pressure. Just clarity on your technical roadmap.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <button className="bg-brand-blue hover:bg-brand-blue-hover text-white px-12 py-6 rounded-full font-black text-xs uppercase tracking-widest transition-all flex items-center justify-center gap-3 group shadow-[0_30px_60px_rgba(37,99,235,0.3)] hover:-translate-y-2">
                  Book a discovery call
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>
                <Link to="/process" className="px-12 py-6 rounded-full font-black text-xs uppercase tracking-widest border border-border-subtle text-text-primary hover:bg-surface transition-all flex items-center justify-center gap-2 group">
                  See our process
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </motion.div>
          </div>
        </section>

        {/* SECTION 8 — FAQ (SHORT) */}
        <section className="section-padding bg-surface border-t border-border-subtle">
           <div className="container-max max-w-4xl">
              <div className="text-center mb-16">
                <label className="text-[10px] font-black uppercase tracking-[0.3em] text-brand-blue mb-4 block">Knowledge</label>
                <h2 className="text-4xl font-bold text-text-primary tracking-tight">Common questions</h2>
              </div>
              <div className="grid md:grid-cols-2 gap-6">
                 {[
                   { q: 'Which service is right for me?', a: 'If you have an idea and need to build a product, SaaS MVP is best. If you need to build visibility, trust, and a scalable digital presence, Digital Launch is the path.' },
                   { q: 'Can I combine services?', a: 'Absolutely. Many founders start with a Digital Launch to build their growth foundation and then build a SaaS MVP once positioned.' },
                   { q: 'What if I’m not sure yet?', a: 'Book a discovery call. We’ll analyze your goals and recommend whether you need to build product or build presence first.' },
                   { q: 'How fast can we start?', a: 'Typically within 7-10 days of signing. We maintain focused capacity to ensure elite quality for every startup we partner with.' }
                 ].map((faq, i) => (
                   <div key={faq.q} className="bg-white border border-border-subtle/40 rounded-[24px] p-8 shadow-sm hover:shadow-xl hover:shadow-blue-900/5 transition-all">
                      <h4 className="text-lg font-bold text-text-primary mb-4 leading-tight">{faq.q}</h4>
                      <p className="text-sm text-text-secondary leading-relaxed font-medium opacity-80">{faq.a}</p>
                   </div>
                 ))}
              </div>
           </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
