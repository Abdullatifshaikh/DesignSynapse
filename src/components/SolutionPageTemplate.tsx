import { motion, AnimatePresence } from 'motion/react';
import { ArrowRight, Check, Target, Zap, Rocket, Layout, Bot, ChevronRight, HelpCircle, FileText, Code, Ship, Cpu, FileCheck, Minus, Sparkles, Layers, Search, MousePointerClick } from 'lucide-react';
import { useState, useEffect, useRef } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import CaseStudies from '../components/CaseStudies';
import CTASection from '../components/CTASection';

export interface Package {
  name: string;
  price: string;
  timeline: string;
  badge?: string;
  stats: string[];
  bestFor: string;
  included: string[];
  notIncluded: string[];
  pitch: string;
  selectionGuide: {
    whenToChoose: string[];
    outcome: string;
  };
}

export interface ComparisonRow {
  feature: string;
  values: (string | boolean)[];
  isHighlight?: boolean;
}

export interface SolutionPageProps {
  label: string;
  heroHeading: string;
  heroSubheading: string;
  problemHeading: string;
  problemBody: string[];
  solutionHeading: string;
  solutionBody: string[];
  explanationBlock: {
    title: string;
    description: string;
    items: { title: string; text: string; icon: any }[];
  };
  selectionGuideHeader?: {
    title: string;
    description: string;
  };
  packageComparison: {
    title: string;
    description: string;
    headers: string[];
    rows: ComparisonRow[];
  };
  packages: Package[];
  process: { title: string; explanation: string; output: string }[];
  deliverables: { title: string; items: string[]; icon: any }[];
  faqs: { q: string; a: string }[];
  finalCTAHeading: string;
}

export default function SolutionPageTemplate({
  label,
  heroHeading,
  heroSubheading,
  problemHeading,
  problemBody,
  solutionHeading,
  solutionBody,
  explanationBlock,
  selectionGuideHeader,
  packageComparison,
  packages,
  process,
  deliverables,
  faqs,
  finalCTAHeading
}: SolutionPageProps) {
  const [activePackage, setActivePackage] = useState<number>(1);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-white selection:bg-brand-blue selection:text-white">
      <Navbar />
      
      <main className="overflow-hidden">
        {/* SECTION 1 — HERO */}
        <section className="pt-32 pb-24 md:pt-48 md:pb-32 bg-white relative">
          <BGGrid />
          <div className="container-max relative z-10">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
              >
                <label className="text-[10px] font-bold uppercase tracking-[0.2em] text-brand-blue mb-6 block bg-brand-blue/5 w-fit px-3 py-1 rounded-full border border-brand-blue/10">
                  {label}
                </label>
                <h1 className="text-5xl md:text-7xl font-bold text-text-primary tracking-tight mb-8 leading-[1.1]">
                  {heroHeading}
                </h1>
                <p className="text-xl text-text-secondary mb-12 leading-relaxed max-w-xl">
                  {heroSubheading}
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <a 
                    href="https://calendly.com/abdullatif-designsynapse/30min"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-brand-blue hover:bg-brand-blue-hover text-white px-7 py-4 rounded-xl text-sm font-bold transition-all flex items-center justify-center gap-2 group shadow-xl shadow-brand-blue/25 hover:-translate-y-1 whitespace-nowrap"
                  >
                    Book a discovery call
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </a>
                  <a href="#work" className="px-7 py-4 rounded-xl text-sm font-bold border border-border-subtle text-text-primary hover:bg-surface transition-all flex items-center justify-center gap-2 whitespace-nowrap">
                    View case studies
                    <ArrowRight className="w-5 h-5 rotate-90" />
                  </a>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="relative perspective-1000 hidden lg:block"
              >
                <div className="relative z-10 w-full aspect-square max-w-lg mx-auto">
                   <HeroVisual label={label} />
                </div>
                {/* Decorative Elements */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[140%] h-[140%] bg-brand-blue/5 rounded-full blur-[100px] pointer-events-none -z-10" />
              </motion.div>
            </div>
          </div>
        </section>

        {/* SECTION 2 — THE PROBLEM */}
        <section className="section-padding bg-surface border-y border-border-subtle relative">
          <div className="container-max max-w-7xl">
            <div className="grid lg:grid-cols-2 gap-20 items-center">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="order-2 lg:order-1"
              >
                <div className="flex items-center gap-4 mb-8">
                   <div className="w-12 h-[1px] bg-brand-blue/30" />
                   <h2 className="text-3xl font-bold text-text-primary tracking-tight italic">
                     {problemHeading}
                   </h2>
                </div>
                <div className="space-y-8">
                  {problemBody.map((p, i) => (
                    <p key={i} className="text-text-secondary text-lg leading-relaxed relative pl-6 border-l border-border-subtle">
                      {p}
                    </p>
                  ))}
                </div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="order-1 lg:order-2 bg-white p-8 rounded-3xl border border-border-subtle shadow-sm relative overflow-hidden"
              >
                <ProblemVisual />
              </motion.div>
            </div>
          </div>
        </section>

        {/* SECTION 3 — THE SOLUTION */}
        <section className="section-padding bg-white relative">
          <div className="container-max max-w-7xl">
            <div className="grid lg:grid-cols-2 gap-20 items-center">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="bg-brand-blue/5 p-8 rounded-3xl border border-brand-blue/10 relative overflow-hidden h-[400px] flex items-center justify-center"
              >
                <SolutionVisual />
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <label className="text-[10px] font-bold uppercase tracking-widest text-brand-blue mb-4 block">The Solution</label>
                <h2 className="text-4xl font-bold text-text-primary tracking-tight mb-8 leading-tight">
                  {solutionHeading}
                </h2>
                <div className="space-y-8">
                  {solutionBody.map((p, i) => (
                    <p key={i} className="text-text-secondary text-lg leading-relaxed">{p}</p>
                  ))}
                </div>
                <div className="mt-12 flex items-center gap-6">
                   <div className="flex -space-x-3">
                      {[1,2,3,4].map(i => (
                        <div key={i} className="w-10 h-10 rounded-full border-2 border-white bg-surface" />
                      ))}
                   </div>
                   <div className="text-sm font-bold text-text-primary">Join 50+ founders who pivoted to outcome-first.</div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* NEW SECTION — SERVICE EXPLANATION BLOCK */}
        <section className="section-padding bg-[#F8FAFC] border-y border-border-subtle overflow-hidden relative">
          <div className="container-max max-w-7xl relative z-10">
            <div className="grid lg:grid-cols-2 gap-20 items-center">
              <div>
                <label className="text-[10px] font-bold uppercase tracking-[0.2em] text-brand-blue mb-6 block">The Transformation</label>
                <h2 className="text-4xl md:text-5xl font-bold text-text-primary tracking-tight mb-8">
                  {explanationBlock.title}
                </h2>
                <p className="text-lg text-text-secondary mb-12 leading-relaxed">
                  {explanationBlock.description}
                </p>
              </div>
              <div className="grid sm:grid-cols-2 gap-6">
                {explanationBlock.items.map((item, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="p-8 bg-white border border-border-subtle rounded-3xl shadow-sm"
                  >
                    <div className="w-12 h-12 bg-surface rounded-2xl flex items-center justify-center text-brand-blue mb-6">
                      <item.icon className="w-6 h-6" />
                    </div>
                    <h3 className="text-lg font-bold text-text-primary mb-3">{item.title}</h3>
                    <p className="text-sm text-text-secondary leading-relaxed">{item.text}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 5 — SOLUTION OPTIONS */}
        <section id="pricing" className="section-padding bg-white relative">
          <div className="container-max max-w-7xl">
            <div className="text-center mb-20">
              <h2 className="text-4xl font-bold text-text-primary tracking-tight mb-4">Solution Options</h2>
              <p className="text-text-secondary">Zero ambiguity. Fixed prices. Clear timelines.</p>
            </div>
            
            <div className="grid lg:grid-cols-3 gap-8 mb-16">
              {packages.map((pkg, i) => (
                <motion.div
                  key={i}
                  onClick={() => setActivePackage(i)}
                  whileHover={{ y: -8 }}
                  className={`p-10 rounded-[32px] border transition-all cursor-pointer relative flex flex-col ${
                    activePackage === i 
                      ? 'border-brand-blue ring-8 ring-brand-blue/5 bg-white shadow-[0_32px_64px_-16px_rgba(37,99,235,0.15)] z-20' 
                      : 'border-border-subtle bg-surface z-10 grayscale-[0.5] hover:grayscale-0'
                  }`}
                >
                   {pkg.badge && (
                     <div className="absolute -top-4 left-10 bg-brand-blue text-white text-[10px] font-bold uppercase tracking-widest px-4 py-1.5 rounded-full shadow-lg shadow-brand-blue/20">
                       {pkg.badge}
                     </div>
                   )}
                   <h3 className="text-2xl font-bold text-text-primary mb-2 flex items-center justify-between">
                     {pkg.name}
                     {activePackage === i && <Sparkles className="w-5 h-5 text-brand-blue" />}
                   </h3>
                   <div className="text-3xl font-bold text-brand-blue mb-8">{pkg.price}</div>
                   <div className="space-y-5 mb-10">
                     {pkg.stats.map((stat, idx) => (
                       <div key={idx} className="flex items-center gap-3">
                         <div className={`w-1.5 h-1.5 rounded-full ${activePackage === i ? 'bg-brand-blue' : 'bg-text-secondary/40'}`} />
                         <span className="text-xs font-bold text-text-secondary uppercase tracking-widest">{stat}</span>
                       </div>
                     ))}
                   </div>
                   <div className="mt-auto pt-8 border-t border-border-subtle flex items-center justify-between">
                      <span className="text-sm font-medium text-text-secondary">Timeline: <span className="text-text-primary font-bold">{pkg.timeline}</span></span>
                      {activePackage !== i && <div className="text-brand-blue"><ArrowRight className="w-4 h-4" /></div>}
                   </div>
                </motion.div>
              ))}
            </div>

            <AnimatePresence mode="wait">
              <motion.div
                key={activePackage}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                className="bg-surface border border-border-subtle rounded-[48px] p-8 md:p-16 relative overflow-hidden"
              >
                <div className="absolute top-0 right-0 p-12 opacity-[0.05] pointer-events-none">
                   <Target className="w-64 h-64 text-brand-blue" />
                </div>
                <div className="grid lg:grid-cols-2 gap-16 relative z-10">
                   <div>
                     <div className="flex items-center gap-4 mb-6">
                        <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center text-brand-blue shadow-sm border border-border-subtle">
                           <Layout className="w-6 h-6" />
                        </div>
                        <div>
                          <h4 className="text-3xl font-bold text-text-primary">{packages[activePackage].name}</h4>
                          <p className="text-text-secondary text-sm">Best for: {packages[activePackage].bestFor}</p>
                        </div>
                     </div>
                     
                     <div className="h-[1px] w-full bg-border-subtle my-10" />

                     <h5 className="text-xs font-bold uppercase tracking-widest text-text-primary mb-8 flex items-center gap-2">
                        Included Deliverables
                        <div className="flex-1 h-[1px] bg-border-subtle" />
                     </h5>
                     <ul className="grid sm:grid-cols-2 gap-y-6 gap-x-8">
                        {packages[activePackage].included.map((item, i) => (
                          <motion.li 
                            key={i} 
                            initial={{ opacity: 0, x: -10 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: i * 0.05 }}
                            className="flex gap-3 text-sm text-text-primary font-medium items-start"
                          >
                            <div className="w-5 h-5 bg-brand-blue/10 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                              <Check className="w-3 h-3 text-brand-blue" />
                            </div>
                            {item}
                          </motion.li>
                        ))}
                     </ul>
                   </div>
                   <div className="flex flex-col justify-between">
                     <div className="bg-white/50 backdrop-blur-sm border border-border-subtle rounded-3xl p-8 mb-10">
                       <h5 className="text-[10px] font-bold uppercase tracking-widest text-text-secondary mb-6 italic opacity-70">Exclusions / Upgrades</h5>
                       <ul className="space-y-4 opacity-100">
                          {packages[activePackage].notIncluded.map((item, i) => (
                            <li key={i} className="flex gap-3 text-sm text-text-secondary items-center">
                              <Minus className="w-4 h-4 text-text-secondary opacity-40 flex-shrink-0" />
                              <span className="line-through decoration-text-secondary/30">{item}</span>
                            </li>
                          ))}
                       </ul>
                     </div>
                     <div className="space-y-8">
                        <div className="bg-brand-blue p-8 rounded-3xl text-white shadow-2xl shadow-brand-blue/20">
                           <p className="text-lg font-medium leading-relaxed italic mb-8">"{packages[activePackage].pitch}"</p>
                           <a 
                             href={`https://calendly.com/abdullatif-designsynapse/30min?package=${encodeURIComponent(packages[activePackage].name)}`}
                             target="_blank"
                             rel="noopener noreferrer"
                             className="w-full bg-white text-brand-blue py-5 rounded-2xl font-bold hover:bg-surface transition-all flex items-center justify-center gap-2 group whitespace-nowrap"
                           >
                             Get started with {packages[activePackage].name}
                             <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                           </a>
                        </div>
                     </div>
                   </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </section>

        {/* SECTION 5.5 — SELECTION GUIDE (RESTORED TABLE) */}
        <section id="selection-guide" className="section-padding bg-surface border-y border-border-subtle relative overflow-hidden">
          <div className="container-max max-w-7xl relative z-10">
            <div className="text-center mb-20">
              <label className="text-[10px] font-bold uppercase tracking-[0.2em] text-brand-blue mb-6 block">Selection Guide</label>
              <h2 className="text-4xl font-bold text-text-primary tracking-tight mb-4">
                {packageComparison.title}
              </h2>
              <p className="text-text-secondary max-w-2xl mx-auto">
                {packageComparison.description}
              </p>
            </div>
            
            <div className="overflow-x-auto pb-12">
              <div className="min-w-[800px]">
                <table className="w-full border-collapse">
                  <thead>
                    <tr>
                      <th className="py-8 px-6 text-left text-[10px] font-bold uppercase tracking-widest text-text-secondary/50 w-1/4">Feature</th>
                      {packageComparison.headers.map((header, i) => (
                        <th key={i} className={`py-8 px-6 text-left group transition-all duration-300 ${i === 1 ? 'bg-brand-blue/[0.02] border-x border-t border-brand-blue/10 rounded-t-3xl' : ''}`}>
                          <div className="flex flex-col gap-2">
                             {i === 1 && <span className="text-[10px] text-brand-blue font-bold uppercase tracking-widest mb-2 block">Most Popular</span>}
                             <span className="text-xl font-bold text-text-primary">{header}</span>
                          </div>
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-border-subtle">
                    {packageComparison.rows.map((row, i) => (
                      <tr key={i} className="group hover:bg-white/50 transition-colors">
                        <td className="py-6 px-6">
                          <span className={`text-sm font-bold ${row.isHighlight ? 'text-brand-blue' : 'text-text-primary'}`}>
                            {row.feature}
                          </span>
                        </td>
                        {row.values.map((val, idx) => (
                          <td key={idx} className={`py-6 px-6 ${idx === 1 ? 'bg-brand-blue/[0.02] border-x border-brand-blue/10' : ''}`}>
                            {typeof val === 'boolean' ? (
                              val ? <Check className="w-5 h-5 text-brand-blue" /> : <Minus className="w-5 h-5 text-text-secondary/20" />
                            ) : (
                              <span className={`text-sm font-medium ${idx === 1 ? 'text-brand-blue' : 'text-text-secondary'}`}>{val}</span>
                            )}
                          </td>
                        ))}
                      </tr>
                    ))}
                    {/* Select Buttons Row */}
                    <tr className="group">
                      <td className="py-8 px-6"></td>
                      {packageComparison.headers.map((_, idx) => (
                        <td key={idx} className={`py-8 px-6 ${idx === 1 ? 'bg-brand-blue/[0.02] border-x border-brand-blue/10' : ''}`}>
                          <a 
                            href={`https://calendly.com/abdullatif-designsynapse/30min?package=${encodeURIComponent(packages[idx]?.name || '')}&solution=${encodeURIComponent(heroHeading)}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className={`w-full py-4 rounded-xl font-bold text-xs uppercase tracking-widest flex items-center justify-center gap-2 transition-all whitespace-nowrap ${
                              idx === 1 
                                ? 'bg-brand-blue text-white shadow-xl shadow-brand-blue/20 hover:bg-brand-blue-hover hover:-translate-y-1' 
                                : 'bg-white border border-border-subtle hover:border-brand-blue hover:text-brand-blue'
                            }`}
                          >
                            Select {idx === 0 ? 'Starter' : idx === 1 ? 'Growth' : 'Advanced'}
                            <ArrowRight className="w-3 h-3" />
                          </a>
                        </td>
                      ))}
                    </tr>
                    {/* Bottom Border for Highlighted Column */}
                    <tr>
                      <td className="py-0 px-0"></td>
                      <td className="py-0 px-0 bg-brand-blue/[0.02] border-x border-b border-brand-blue/10 rounded-b-3xl h-4"></td>
                      {packageComparison.headers.length > 1 && <td className="py-0 px-0"></td>}
                      {packageComparison.headers.length > 2 && <td className="py-0 px-0"></td>}
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            <div className="mt-16 text-center">
              <p className="text-text-secondary mb-8 font-medium">Still unsure which one fits? We'll help you choose the right option during the call.</p>
              <a 
                href="https://calendly.com/abdullatif-designsynapse/30min"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 text-brand-blue font-bold group whitespace-nowrap"
              >
                Book a discovery call
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </div>
        </section>

        {/* SECTION 6 — VISUAL ROADMAP */}
        <section className="section-padding bg-surface border-y border-border-subtle relative overflow-hidden">
           <div className="container-max max-w-7xl">
              <div className="text-center mb-24">
                <h2 className="text-4xl font-bold text-text-primary tracking-tight mb-4">The roadmap to launch</h2>
                <p className="text-text-secondary">Measured in weeks, not months.</p>
              </div>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-x-12 gap-y-16 relative">
                 {/* Connecting line */}
                 <div className="absolute top-1/2 left-0 w-full h-[1px] bg-brand-blue/10 hidden lg:block -translate-y-12" />
                 
                 {process.map((step, i) => (
                   <motion.div 
                    key={i}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.15 }}
                    className="relative group"
                   >
                     <div className="mb-8 relative">
                        <div className="w-16 h-16 bg-white border border-border-subtle rounded-2xl flex items-center justify-center font-bold text-xl text-brand-blue shadow-lg group-hover:border-brand-blue transition-colors z-10 relative">
                          {i + 1}
                        </div>
                        <div className="absolute -top-4 -right-4 w-12 h-12 bg-brand-blue/5 rounded-full blur-xl group-hover:bg-brand-blue/10 transition-all" />
                     </div>
                     <h3 className="text-2xl font-bold text-text-primary mb-4">{step.title}</h3>
                     <p className="text-text-secondary text-sm leading-relaxed mb-6 h-16 line-clamp-3 group-hover:line-clamp-none transition-all">{step.explanation}</p>
                     <div className="pt-6 border-t border-border-subtle">
                        <label className="text-[10px] font-bold uppercase tracking-widest text-text-secondary/50 mb-2 block">Output</label>
                        <div className="text-xs font-bold text-brand-blue flex items-center gap-2 group-hover:translate-x-1 transition-transform">
                          {step.output}
                          <ChevronRight className="w-3 h-3" />
                        </div>
                     </div>
                   </motion.div>
                 ))}
              </div>
           </div>
        </section>

        {/* SECTION 7 — DELIVERABLES */}
        <section className="section-padding bg-white">
          <div className="container-max max-w-7xl">
            <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-20 gap-8">
              <div className="max-w-2xl">
                <h2 className="text-4xl font-bold text-text-primary tracking-tight mb-4">Tangible outputs</h2>
                <p className="text-text-secondary">The assets and tools we leave you with for long-term self-sufficiency.</p>
              </div>
              <div className="w-20 h-20 bg-brand-blue/5 rounded-full blur-2xl hidden md:block" />
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
               {deliverables.map((d, i) => (
                 <motion.div 
                   key={i} 
                   whileHover={{ y: -8 }}
                   className="p-10 bg-surface border border-border-subtle rounded-[40px] hover:bg-white hover:shadow-2xl hover:shadow-brand-blue/5 transition-all group"
                 >
                   <div className="w-14 h-14 bg-white border border-border-subtle rounded-2xl flex items-center justify-center text-brand-blue mb-8 group-hover:scale-110 group-hover:bg-brand-blue group-hover:text-white transition-all duration-500 shadow-sm">
                      <d.icon className="w-7 h-7" />
                   </div>
                   <h3 className="text-xl font-bold text-text-primary mb-6">{d.title}</h3>
                   <ul className="space-y-4">
                      {d.items.map((item, idx) => (
                        <li key={idx} className="flex gap-3 text-sm text-text-secondary items-start">
                          <Check className="w-4 h-4 text-brand-blue flex-shrink-0 mt-0.5" />
                          {item}
                        </li>
                      ))}
                   </ul>
                 </motion.div>
               ))}
            </div>
          </div>
        </section>

        {/* SECTION 8 — CASE STUDIES */}
        <div className="bg-surface py-20">
          <div className="container-max max-w-7xl">
            <div className="flex items-center gap-4 mb-12">
               <h2 className="text-2xl font-bold text-text-primary uppercase tracking-widest text-sm">Recent results</h2>
               <div className="flex-1 h-[1px] bg-border-subtle" />
            </div>
            <CaseStudies />
          </div>
        </div>

        {/* SECTION 9 — FAQ */}
        <section className="section-padding bg-white relative">
           <div className="container-max max-w-4xl relative z-10">
              <div className="text-center mb-20">
                <h2 className="text-4xl font-bold text-text-primary tracking-tight mb-4">Frequently asked</h2>
                <p className="text-text-secondary">Everything you need to know about starting this engagement.</p>
              </div>
              <div className="space-y-4">
                 {faqs.map((faq, i) => (
                    <div key={i}>
                      <FAQItem faq={faq} />
                    </div>
                 ))}
              </div>
           </div>
           <div className="absolute top-1/2 left-0 w-64 h-64 bg-brand-blue/5 rounded-full blur-[100px] -translate-x-1/2" />
        </section>

        {/* SECTION 10 — FINAL CTA */}
        <CTASection 
          heading={finalCTAHeading}
          subheading="Book a free 30-minute discovery call. We'll talk through your idea, your timeline, and whether this is the right fit for your vision."
          urgencyText="Limited project slots available for this quarter."
        />
      </main>

      <Footer />
    </div>
  );
}

function FAQItem({ faq }: { faq: { q: string; a: string } }) {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div 
      className={`group bg-white border rounded-[24px] overflow-hidden transition-all duration-500 ${isOpen ? 'border-brand-blue ring-8 ring-brand-blue/5 shadow-xl' : 'border-border-subtle hover:border-brand-blue/30'}`}
    >
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="w-full p-8 text-left flex items-center justify-between gap-6"
      >
        <span className={`text-lg font-bold transition-colors duration-300 ${isOpen ? 'text-brand-blue' : 'text-text-primary'}`}>{faq.q}</span>
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0, scale: isOpen ? 1.2 : 1 }}
          className={`flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center transition-colors duration-300 ${isOpen ? 'bg-brand-blue text-white' : 'bg-surface text-text-secondary group-hover:bg-brand-blue/10 group-hover:text-brand-blue'}`}
        >
          <ChevronRight className={`w-5 h-5 transition-transform duration-300 ${isOpen ? 'rotate-90' : 'rotate-90'}`} />
        </motion.div>
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.4, ease: [0.32, 0.72, 0, 1] }}
          >
            <div className="px-8 pb-8 pt-2">
              <div className="w-full h-[1px] bg-border-subtle/50 mb-6" />
              <p className="text-text-secondary leading-relaxed md:text-lg">
                {faq.a}
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

function BGGrid() {
  return (
    <div className="absolute inset-0 z-0 pointer-events-none opacity-[0.03]">
       <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="grid" width="60" height="60" patternUnits="userSpaceOnUse">
              <path d="M 60 0 L 0 0 0 60" fill="none" stroke="#2563EB" strokeWidth="1"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
       </svg>
    </div>
  );
}

function HeroVisual({ label }: { label: string }) {
  return (
    <div className="w-full h-full relative">
       {/* UI Composition */}
       <motion.div 
         animate={{ y: [0, -10, 0] }}
         transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
         className="absolute top-10 left-10 w-64 h-48 bg-white border border-border-subtle rounded-2xl shadow-2xl p-6 z-20"
       >
          <div className="flex items-center gap-3 mb-6">
             <div className="w-3 h-3 rounded-full bg-brand-blue/20" />
             <div className="w-20 h-2 bg-surface rounded" />
          </div>
          <div className="space-y-3">
             <div className="w-full h-8 bg-surface rounded animate-pulse" />
             <div className="flex gap-2">
                <div className="w-1/2 h-20 bg-brand-blue/5 rounded border border-brand-blue/10" />
                <div className="w-1/2 h-20 bg-surface rounded" />
             </div>
          </div>
       </motion.div>

       <motion.div 
         animate={{ y: [0, 10, 0] }}
         transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
         className="absolute bottom-10 right-10 w-72 h-56 bg-brand-blue rounded-3xl shadow-[0_32px_64px_-16px_rgba(37,99,235,0.3)] p-8 z-10"
       >
          <div className="flex items-center gap-2 mb-8">
             <div className="w-3 h-3 rounded-full bg-white/40" />
             <div className="text-[10px] font-bold text-white/60 tracking-widest uppercase">System Execution</div>
          </div>
          <div className="space-y-4">
             <div className="w-full h-2 bg-white/20 rounded" />
             <div className="w-4/5 h-2 bg-white/20 rounded" />
             <div className="mt-8 pt-8 border-t border-white/10 flex items-center justify-between">
                <div className="w-12 h-12 rounded-full border-2 border-white/20" />
                <ArrowRight className="text-white w-6 h-6" />
             </div>
          </div>
       </motion.div>

       {/* Floating decorations */}
       <div className="absolute top-1/2 right-0 w-24 h-24 bg-brand-blue/10 rounded-full blur-2xl animate-pulse" />
       <div className="absolute top-0 left-1/2 w-48 h-48 bg-brand-blue/5 rounded-full blur-3xl" />
    </div>
  );
}

function ProblemVisual() {
  return (
    <div className="w-full aspect-video flex items-center justify-center relative bg-surface p-10 overflow-hidden">
       {/* Abstract "Messy" Flow */}
       <svg width="400" height="200" viewBox="0 0 400 200" fill="none" className="z-10">
          <motion.path 
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 2, repeat: Infinity, repeatDelay: 1 }}
            d="M 20 100 Q 100 20 150 150 T 300 80 T 380 120" 
            stroke="#6B7280" 
            strokeWidth="3" 
            strokeDasharray="8 8"
            className="opacity-20"
          />
          <circle cx="20" cy="100" r="4" fill="#6B7280" className="opacity-40" />
          <circle cx="380" cy="120" r="4" fill="#6B7280" className="opacity-40" />
       </svg>
       
       <div className="absolute inset-0 flex items-center justify-center">
          <div className="p-4 bg-white rounded-xl border border-border-subtle shadow-lg scale-75 md:scale-100 flex items-center gap-4 animate-bounce">
             <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center text-red-500">
                <Minus className="w-6 h-6" />
             </div>
             <div>
                <div className="text-xs font-bold text-red-500 uppercase tracking-widest">Inefficiency Detected</div>
                <div className="text-lg font-bold text-text-primary">Stalled Execution</div>
             </div>
          </div>
       </div>

       {/* Blueprint lines */}
       <div className="absolute inset-0 pointer-events-none opacity-5">
          <div className="absolute top-0 left-0 w-full h-[1px] bg-brand-blue" />
          <div className="absolute bottom-0 left-0 w-full h-[1px] bg-brand-blue" />
          <div className="absolute top-0 left-0 w-[1px] h-full bg-brand-blue" />
          <div className="absolute top-0 right-0 w-[1px] h-full bg-brand-blue" />
       </div>
    </div>
  );
}

function SolutionVisual() {
  return (
    <div className="w-full h-full flex items-center justify-center relative p-8">
       {/* Organized Grid */}
       <div className="grid grid-cols-2 gap-4 w-full">
          {[1,2,3,4].map(i => (
            <motion.div 
               key={i}
               initial={{ opacity: 0, scale: 0.8 }}
               whileInView={{ opacity: 1, scale: 1 }}
               transition={{ delay: i * 0.1 }}
               className="bg-white border border-brand-blue/10 rounded-2xl p-4 shadow-sm"
            >
               <div className="w-8 h-8 rounded-lg bg-brand-blue/10 flex items-center justify-center text-brand-blue mb-4">
                  <Check className="w-4 h-4" />
               </div>
               <div className="w-full h-2 bg-surface rounded mb-2" />
               <div className="w-2/3 h-2 bg-surface rounded" />
            </motion.div>
          ))}
       </div>
       {/* Animated Connection Lines */}
       <svg className="absolute inset-0 w-full h-full pointer-events-none" xmlns="http://www.w3.org/2000/svg">
          <motion.circle 
            animate={{ r: [100, 150, 100] }}
            transition={{ duration: 6, repeat: Infinity }}
            cx="50%" cy="50%" r="120" stroke="#2563EB" strokeWidth="1" strokeDasharray="4 4" className="opacity-10" 
          />
       </svg>
    </div>
  );
}
