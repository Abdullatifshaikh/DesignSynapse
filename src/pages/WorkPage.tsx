import React, { useState, useMemo, useEffect } from 'react';
import { motion, AnimatePresence, useMotionValue, useSpring, useTransform } from 'motion/react';
import { Link } from 'react-router-dom';
import { 
  ArrowRight, Filter, Rocket, Layout, Bot, ChevronRight, 
  Layers, Globe, Target, Zap, MousePointer2, Sparkles,
  Command, Database, Cpu, Activity, Briefcase, ShoppingCart,
  PieChart as ChartIcon, Monitor, Smartphone, Terminal
} from 'lucide-react';
import { projects, Project } from '../data/projects';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const categories = [
  'All Projects',
  'SaaS MVP',
  'Digital Launch',
  'AI Automation',
  'Healthcare',
  'FinTech',
  'EdTech',
  'AI Products',
  'Productivity',
  'E-commerce'
];

const industryIcons: Record<string, any> = {
  'Productivity': Command,
  'Healthcare': Activity,
  'FinTech': Database,
  'EdTech': Globe,
  'SaaS': Layers,
  'AI Automation': Bot,
  'AI Products': Cpu,
  'E-commerce': ShoppingCart,
  'Marketing Tech': Target
};

const BrowserFrame = ({ children, className }: { children: React.ReactNode, className?: string }) => (
  <div className={`relative bg-surface border border-border-subtle/50 rounded-2xl shadow-2xl overflow-hidden flex flex-col ${className}`}>
    <div className="bg-white/80 backdrop-blur-md border-b border-border-subtle/40 px-4 py-3 flex items-center gap-2 shrink-0">
      <div className="flex gap-1.5">
        <div className="w-2 h-2 rounded-full bg-[#FF5F57]" />
        <div className="w-2 h-2 rounded-full bg-[#FFBD2E]" />
        <div className="w-2 h-2 rounded-full bg-[#28C840]" />
      </div>
      <div className="mx-4 flex-1 h-5 bg-surface rounded-lg border border-border-subtle/30 flex items-center px-3">
         <div className="w-2 h-2 text-text-secondary/20" />
      </div>
    </div>
    <div className="relative flex-1 overflow-hidden">
      {children}
    </div>
  </div>
);

const FloatingCard = ({ children, className, delay = 0 }: { children: React.ReactNode, className?: string, delay?: number }) => (
  <motion.div
    initial={{ y: 20, opacity: 0 }}
    whileInView={{ y: 0, opacity: 1 }}
    transition={{ duration: 1, delay, ease: [0.23, 1, 0.32, 1] }}
    className={`absolute z-20 bg-white/90 backdrop-blur-xl border border-white/20 shadow-2xl rounded-2xl p-4 ${className}`}
  >
    {children}
  </motion.div>
);

export default function WorkPage() {
  const [activeCategory, setActiveCategory] = useState('All Projects');
  
  // Parallax Values
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { damping: 25, stiffness: 150 };
  const moveX = useSpring(mouseX, springConfig);
  const moveY = useSpring(mouseY, springConfig);

  const layer1X = useTransform(moveX, [-500, 500], [-10, 10]);
  const layer1Y = useTransform(moveY, [-500, 500], [-10, 10]);
  
  const layer2X = useTransform(moveX, [-500, 500], [-25, 25]);
  const layer2Y = useTransform(moveY, [-500, 500], [-25, 25]);

  const layer3X = useTransform(moveX, [-500, 500], [-40, 40]);
  const layer3Y = useTransform(moveY, [-500, 500], [-40, 40]);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX - window.innerWidth / 2);
      mouseY.set(e.clientY - window.innerHeight / 2);
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const filteredProjects = useMemo(() => {
    if (activeCategory === 'All Projects') return projects;
    return projects.filter(p => 
      p.solutionType === activeCategory || p.industry === activeCategory || p.tags.includes(activeCategory)
    );
  }, [activeCategory]);

  return (
    <div className="min-h-screen bg-white selection:bg-brand-blue/10 selection:text-brand-blue overflow-x-hidden">
      <Navbar />

      {/* Subtle Background Elements */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute top-0 left-[20%] w-[1000px] h-[1000px] bg-brand-blue/[0.04] rounded-full blur-[140px] -translate-y-1/2" />
        <div className="absolute bottom-0 right-[10%] w-[800px] h-[800px] bg-brand-blue/[0.03] rounded-full blur-[120px] translate-y-1/2" />
        
        {/* Blueprint Grid */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#e5e7eb_1px,transparent_1px),linear-gradient(to_bottom,#e5e7eb_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-[0.15]" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#e5e7eb_1px,transparent_1px),linear-gradient(to_bottom,#e5e7eb_1px,transparent_1px)] bg-[size:160px_160px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-[0.2]" />
        
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(37,99,235,0.06),transparent_70%)]" />
        
        {/* Faint Texture Overlay */}
        <div className="absolute inset-0 opacity-[0.02] mix-blend-overlay pointer-events-none" style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")` }} />
      </div>

      <main className="relative z-10 font-sans">
        {/* HERO SECTION - Redesigned for Product Ecosystem */}
        <section className="container-max pt-48 pb-32 px-6 md:px-8">
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-32 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, ease: [0.23, 1, 0.32, 1] }}
            >
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1, delay: 0.1 }}
              >
                <label className="font-mono text-[10px] font-bold uppercase tracking-[0.5em] text-brand-blue mb-8 block px-4 py-1.5 bg-brand-blue/5 w-fit rounded-full ring-1 ring-brand-blue/10">Selected Work</label>
              </motion.div>
              
              <h1 className="font-display text-4xl md:text-5xl lg:text-7xl font-bold text-text-primary tracking-tighter leading-[0.95] mb-10 text-balance">
                High-end products <span className="relative">
                  <span className="relative z-10 text-brand-blue">built</span>
                  <motion.span 
                    initial={{ width: 0 }}
                    animate={{ width: '100%' }}
                    transition={{ duration: 1.5, delay: 0.8, ease: [0.23, 1, 0.32, 1] }}
                    className="absolute bottom-3 left-0 h-[0.1em] bg-brand-blue/20 -z-10 rounded-full"
                  />
                </span> for the modern web.
              </h1>
              
              <p className="text-lg md:text-xl text-text-secondary leading-relaxed mb-12 max-w-xl font-medium opacity-70">
                From stealth AI startups to enterprise SaaS—we engineer digital ecosystems that drive growth, credibility, and technical authority.
              </p>
              
              <div className="flex flex-row items-center gap-4">
                <a href="#explore" className="px-8 py-5 bg-brand-blue text-white rounded-2xl font-black text-[10px] uppercase tracking-widest hover:bg-brand-blue-hover transition-all shadow-xl shadow-brand-blue/10 flex items-center justify-center gap-3 group relative overflow-hidden">
                   <span className="relative z-10 flex items-center gap-2">
                     Explore projects <ArrowRight className="w-4 h-4 group-hover:translate-x-1.5 transition-transform duration-500" />
                   </span>
                   <motion.div 
                     className="absolute inset-0 bg-white/10 translate-y-full group-hover:translate-y-0 transition-transform duration-500"
                   />
                </a>
                <a href="https://calendly.com/abdullatif-designsynapse/30min" target="_blank" rel="noopener noreferrer" className="px-8 py-5 bg-white text-text-primary border border-border-subtle/80 rounded-2xl font-black text-[10px] uppercase tracking-widest hover:border-brand-blue/30 hover:bg-surface transition-all flex items-center justify-center gap-2 group">
                  Book discovery
                  <ChevronRight className="w-3.5 h-3.5 text-border-subtle group-hover:text-brand-blue transition-colors" />
                </a>
              </div>
            </motion.div>

            {/* PRODUCT ECOSYSTEM COMPOSITION with Parallax */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9, rotateY: -10 }}
              animate={{ opacity: 1, scale: 1, rotateY: 0 }}
              transition={{ duration: 1.2, delay: 0.3, ease: [0.23, 1, 0.32, 1] }}
              className="relative perspective-1000 hidden lg:block"
            >
              <div className="relative aspect-[4/3] w-full">
                {/* Main Dashboard Layer (Layer 1) */}
                <motion.div 
                  style={{ x: layer1X, y: layer1Y }}
                  className="absolute inset-0 z-10"
                >
                  <BrowserFrame className="w-full h-full shadow-[0_50px_100px_-20px_rgba(37,99,235,0.15)] ring-1 ring-brand-blue/5">
                    <div className="p-8 h-full bg-white">
                      <div className="flex gap-8 h-full">
                        <div className="w-48 space-y-4 shrink-0">
                          <div className="h-6 w-full bg-surface rounded-xl flex items-center px-3 gap-2">
                             <div className="w-2 h-2 rounded-full bg-brand-blue/30" />
                             <div className="h-1.5 w-12 bg-border-subtle/20 rounded" />
                          </div>
                          <div className="space-y-3">
                             {[1,2,3,4,5].map(v => (
                               <div key={v} className="flex items-center gap-3">
                                 <div className="w-4 h-4 rounded bg-surface" />
                                 <div className={`h-1.5 rounded-lg bg-surface flex-1`} style={{ width: `${Math.random() * 50 + 50}%` }} />
                               </div>
                             ))}
                          </div>
                        </div>
                        <div className="flex-1 space-y-8">
                          <div className="grid grid-cols-3 gap-6">
                             {[1,2,3].map(v => (
                               <div key={v} className="bg-surface/50 rounded-2xl p-4 border border-border-subtle/30 shadow-sm transition-transform hover:scale-105 duration-500 cursor-default">
                                 <div className="w-8 h-8 rounded-lg bg-white mb-3 flex items-center justify-center">
                                    {v === 1 ? <Zap className="w-4 h-4 text-brand-blue" /> : v === 2 ? <Activity className="w-4 h-4 text-brand-blue" /> : <Database className="w-4 h-4 text-brand-blue" />}
                                 </div>
                                 <div className="h-2 w-16 bg-white rounded" />
                               </div>
                             ))}
                          </div>
                          <div className="h-48 bg-surface/50 rounded-3xl border border-border-subtle/30 relative overflow-hidden group/chart">
                             <div className="absolute inset-0 bg-[linear-gradient(90deg,transparent_0%,rgba(37,99,235,0.03)_50%,transparent_100%)] animate-shimmer" />
                             <div className="absolute bottom-0 left-0 right-0 h-24 flex items-end px-8 pb-8 gap-2">
                                {[1,2,3,4,5,6,7,8,9,10,11,12].map(i => (
                                  <motion.div 
                                    key={i} 
                                    initial={{ height: 0 }}
                                    animate={{ height: `${20 + Math.random() * 60}%` }}
                                    className="flex-1 bg-brand-blue/5 rounded-t-sm"
                                  />
                                ))}
                             </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </BrowserFrame>
                </motion.div>

                {/* Floating Analytics Card (Layer 2) */}
                <motion.div
                  style={{ x: layer2X, y: layer2Y }}
                  transition={{ duration: 0.1 }}
                  className="absolute -top-12 -right-8 z-30 w-72"
                >
                  <motion.div 
                    animate={{ y: [0, 5, 0] }}
                    transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                    className="bg-white/95 backdrop-blur-3xl border border-white/50 p-6 rounded-3xl shadow-2xl shadow-blue-900/10 ring-1 ring-black/5"
                  >
                    <div className="flex items-center justify-between mb-6">
                      <div className="text-[10px] font-black uppercase tracking-widest text-text-secondary opacity-50">Active Users</div>
                      <div className="flex items-center gap-1.5">
                        <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                        <span className="text-[10px] font-black text-emerald-600">LIVE</span>
                      </div>
                    </div>
                    <div className="text-4xl font-bold text-text-primary tracking-tighter mb-4">2,842</div>
                    <div className="flex gap-1 items-end h-16">
                      {[1,3,2,5,4,6,8].map((h, i) => (
                        <div key={i} className="flex-1 bg-brand-blue/10 rounded-t-sm" style={{ height: `${h * 12}%` }}>
                          <motion.div 
                            initial={{ height: 0 }}
                            animate={{ height: '100%' }}
                            transition={{ duration: 1, delay: 1.5 + (i * 0.1) }}
                            className="w-full bg-brand-blue rounded-t-sm opacity-20"
                          />
                        </div>
                      ))}
                    </div>
                  </motion.div>
                </motion.div>

                {/* Mobile App Viewport (Layer 3) */}
                <motion.div
                  style={{ x: layer3X, y: layer3Y }}
                  transition={{ duration: 0.1 }}
                  className="absolute -bottom-16 -left-12 z-40 w-56"
                >
                  <motion.div 
                    animate={{ rotate: [0, 1, 0] }}
                    transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                    className="bg-[#111] rounded-[40px] p-2.5 aspect-[9/18] border-4 border-white/10 shadow-3xl"
                  >
                     <div className="bg-white rounded-[32px] h-full p-6 flex flex-col relative overflow-hidden">
                        <div className="absolute top-0 right-0 w-32 h-32 bg-brand-blue/5 rounded-full blur-2xl -translate-y-1/2 translate-x-1/2" />
                        <div className="w-12 h-1 bg-surface rounded-full mb-8 self-center" />
                        <div className="w-12 h-12 bg-brand-blue rounded-2xl mb-6 shadow-xl shadow-brand-blue/20 flex items-center justify-center">
                           <Smartphone className="w-6 h-6 text-white" />
                        </div>
                        <div className="space-y-4">
                           <div className="h-2 w-full bg-surface rounded" />
                           <div className="h-2 w-2/3 bg-surface rounded" />
                           <div className="h-32 w-full bg-surface/50 rounded-2xl border border-border-subtle/20 mt-4 flex items-center justify-center">
                              <ChartIcon className="w-8 h-8 text-brand-blue/20" />
                           </div>
                           <div className="flex gap-2">
                             <div className="w-10 h-10 rounded-lg bg-surface shrink-0" />
                             <div className="space-y-2 flex-1 pt-2">
                               <div className="h-1.5 w-full bg-surface rounded" />
                               <div className="h-1.5 w-1/2 bg-surface rounded" />
                             </div>
                           </div>
                        </div>
                     </div>
                  </motion.div>
                </motion.div>

                {/* Automation Node (Layer 2) */}
                <motion.div
                  style={{ x: layer2X, y: layer2Y }}
                  transition={{ duration: 0.1 }}
                  className="absolute bottom-20 -right-20 z-20"
                >
                   <motion.div 
                     whileHover={{ y: -5, scale: 1.02 }}
                     className="bg-white/80 backdrop-blur-2xl border border-white p-8 rounded-[40px] shadow-2xl flex items-center gap-6 ring-1 ring-black/5"
                   >
                      <div className="w-16 h-16 rounded-2xl bg-brand-blue/5 flex items-center justify-center">
                         <Terminal className="w-8 h-8 text-brand-blue" />
                      </div>
                      <div className="space-y-2">
                         <div className="text-[10px] font-black uppercase tracking-widest text-text-secondary opacity-40">System Logic</div>
                         <div className="flex gap-2 items-center">
                            <span className="w-2 h-2 rounded-full bg-brand-blue animate-pulse" />
                            <span className="font-bold text-text-primary tracking-tight">Deploying Edge...</span>
                         </div>
                      </div>
                   </motion.div>
                </motion.div>

                {/* Ambient Glows that follow mouse subtly */}
                <motion.div 
                  style={{ x: layer2X, y: layer2Y }}
                  className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[140%] h-[140%] bg-[radial-gradient(circle_at_50%_50%,rgba(37,99,235,0.08),transparent_70%)] blur-[100px]" 
                />
              </div>
            </motion.div>
          </div>
        </section>

        {/* FILTER BAR - Sophisticated Floating Pill */}
        <section id="explore" className="sticky top-24 z-50 py-8 pointer-events-none">
          <div className="container-max px-6 md:px-8 flex justify-center">
             <motion.div 
               initial={{ opacity: 0, y: 10 }}
               animate={{ opacity: 1, y: 0 }}
               className="pointer-events-auto bg-white/90 backdrop-blur-3xl border border-white/50 rounded-2xl p-1.5 flex flex-wrap items-center justify-center gap-1 shadow-[0_20px_50px_-15px_rgba(37,99,235,0.1)] ring-1 ring-black/[0.03] max-w-full"
             >
                <div className="px-4 py-2 border-r border-border-subtle/30 flex items-center gap-2 mr-1 shrink-0">
                   <Filter className="w-3 h-3 text-brand-blue" />
                   <span className="font-mono text-[9px] font-bold uppercase tracking-widest text-text-secondary">Filter</span>
                </div>
                <div className="flex flex-wrap items-center justify-center gap-0.5">
                  {categories.map((cat) => (
                     <button
                       key={cat}
                       onClick={() => setActiveCategory(cat)}
                       className={`px-5 py-2.5 rounded-xl font-mono text-[9px] font-bold uppercase tracking-widest whitespace-nowrap transition-all relative group ${
                         activeCategory === cat 
                         ? 'text-white' 
                         : 'text-text-secondary hover:text-brand-blue'
                       }`}
                     >
                       <span className="relative z-10">{cat === 'All Projects' ? 'All' : cat}</span>
                       {activeCategory === cat && (
                         <motion.div 
                           layoutId="active_pill"
                           className="absolute inset-0 bg-brand-blue/90 shadow-lg shadow-brand-blue/10"
                           transition={{ type: "spring", bounce: 0.1, duration: 0.5 }}
                           style={{ borderRadius: '12px' }}
                         />
                       )}
                     </button>
                  ))}
                </div>
             </motion.div>
          </div>
        </section>

        {/* PROJECTS SECTION - Structured & Premium */}
        <section className="container-max px-6 md:px-8 py-20 lg:py-32">
           <div className="space-y-16 lg:space-y-32">
              <AnimatePresence mode="popLayout">
                 {filteredProjects.map((project, i) => {
                    return (
                       <motion.div
                         key={project.slug}
                         layout
                         initial={{ opacity: 0, y: 30 }}
                         whileInView={{ opacity: 1, y: 0 }}
                         viewport={{ once: true, margin: "-100px" }}
                         exit={{ opacity: 0, scale: 0.98 }}
                         transition={{ duration: 0.8, ease: [0.23, 1, 0.32, 1] }}
                         className="group"
                       >
                          <Link to={`/work/${project.slug}`} className="block">
                             <div className="relative bg-white border border-border-subtle/40 rounded-[32px] md:rounded-[48px] overflow-hidden hover:border-brand-blue/30 transition-all duration-700 flex flex-col lg:flex-row hover:shadow-[0_60px_100px_-20px_rgba(37,99,235,0.12)] ring-1 ring-black/[0.02] group">
                                
                                {/* Visual Area (LEFT) */}
                                <div className="lg:w-[55%] aspect-[16/10] lg:aspect-auto relative overflow-hidden bg-surface/50 border-b lg:border-b-0 lg:border-r border-border-subtle/30">
                                   <div className="absolute inset-0 bg-[linear-gradient(to_right,#00000003_1px,transparent_1px),linear-gradient(to_bottom,#00000003_1px,transparent_1px)] bg-[size:32px_32px]" />
                                   
                                   <div className="absolute inset-0 p-8 lg:p-16 flex items-center justify-center">
                                      {/* Browser Mockup */}
                                      <div className="w-full h-full relative group-hover:scale-[1.04] group-hover:-translate-y-2 transition-transform duration-1000 ease-[0.23,1,0.32,1]">
                                         <BrowserFrame className="w-full h-full shadow-2xl relative z-10 transition-shadow duration-700 group-hover:shadow-brand-blue/20">
                                            <img src={project.heroImage} alt="" className="w-full h-full object-cover" />
                                            <div className="absolute inset-0 bg-brand-blue/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                                         </BrowserFrame>
                                         
                                         {/* Decorative elements behind */}
                                         <div className="absolute -inset-10 bg-brand-blue/5 blur-[80px] rounded-full opacity-0 group-hover:opacity-100 transition-all duration-1000 scale-150" />
                                      </div>
                                   </div>
                                </div>
 
                                {/* Content Area (RIGHT) */}
                                <div className="lg:w-[45%] p-10 lg:p-20 flex flex-col">
                                   <div className="flex flex-wrap items-center gap-3 mb-10 scale-95 origin-left group-hover:scale-100 transition-transform duration-700">
                                      <span className="px-3 py-1 bg-brand-blue/5 rounded-full text-[9px] font-black uppercase tracking-widest text-brand-blue ring-1 ring-brand-blue/10">
                                         {project.industry}
                                      </span>
                                      <span className="w-1 h-1 bg-border-subtle rounded-full opacity-40" />
                                      <span className="text-[9px] font-black uppercase tracking-widest text-text-secondary opacity-40">
                                         {project.solutionType}
                                      </span>
                                   </div>
 
                                   <h3 className="font-display text-3xl lg:text-5xl font-bold text-text-primary tracking-tighter leading-[1.1] mb-8 group-hover:text-brand-blue transition-colors duration-500">
                                      {project.name}
                                   </h3>
                                   
                                   <p className="text-lg lg:text-xl text-text-secondary font-medium opacity-60 leading-relaxed mb-12 max-w-md group-hover:opacity-80 transition-opacity duration-500">
                                      {project.description}
                                   </p>
 
                                   <div className="mt-auto space-y-12">
                                      {/* Impact Metric */}
                                      <div className="inline-block px-10 py-7 bg-surface/50 rounded-3xl border border-border-subtle/30 group-hover:border-brand-blue/30 group-hover:bg-white transition-all duration-500 shadow-sm group-hover:shadow-lg group-hover:shadow-brand-blue/5">
                                         <div className="font-display text-4xl lg:text-5xl font-bold text-text-primary tracking-tighter mb-1 group-hover:text-brand-blue transition-colors">
                                            {project.metrics[0].value}
                                         </div>
                                         <div className="font-mono text-[9px] font-bold text-brand-blue uppercase tracking-widest opacity-60">
                                            {project.metrics[0].label}
                                         </div>
                                      </div>
 
                                      <div className="font-mono flex items-center text-[10px] font-bold text-text-primary uppercase tracking-[0.25em] gap-5 group-hover:gap-8 transition-all duration-700 ease-out group-hover:text-brand-blue">
                                         View Case Study <ArrowRight className="w-5 h-5 text-brand-blue group-hover:scale-125 transition-transform" />
                                      </div>
                                   </div>
                                </div>
                             </div>
                          </Link>
                       </motion.div>
                    );
                 })}
              </AnimatePresence>
           </div>
        </section>

        {/* NEW SECTION 1: VISUAL ECOSYSTEM WALL */}
        <section className="bg-text-primary py-40 overflow-hidden relative">
           <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_50%_50%,rgba(37,99,235,0.3),transparent)]" />
           <div className="container-max relative z-10 px-6 md:px-8 mb-24">
              <div className="max-w-3xl">
                 <label className="text-[10px] font-black uppercase tracking-[0.5em] text-brand-blue mb-6 block">Visual Scale</label>
                 <h2 className="text-4xl md:text-7xl font-bold text-white tracking-tighter leading-[0.9] mb-10">Digital impact across <span className="text-brand-blue">industries.</span></h2>
                 <p className="text-xl text-white/50 font-medium max-w-xl">
                    From deep-tech interfaces to consumer mobile experiences—we build the systems that define modern brands.
                 </p>
              </div>
           </div>

           <div className="flex flex-col gap-10">
              <motion.div 
                animate={{ x: [0, -1000] }}
                transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
                className="flex gap-10 whitespace-nowrap"
              >
                 {[...projects, ...projects].map((p, i) => (
                    <div key={i} className="w-[500px] aspect-[16/10] bg-white/5 rounded-[40px] border border-white/10 overflow-hidden shrink-0 group">
                       <img src={p.heroImage} alt="" className="w-full h-full object-cover opacity-60 grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-1000" />
                    </div>
                 ))}
              </motion.div>
              <motion.div 
                animate={{ x: [-1000, 0] }}
                transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
                className="flex gap-10 whitespace-nowrap"
              >
                 {[...projects.slice().reverse(), ...projects.slice().reverse()].map((p, i) => (
                    <div key={i} className="w-[400px] aspect-[16/10] bg-white/5 rounded-[40px] border border-white/10 overflow-hidden shrink-0 group">
                       <img src={p.thumbnail} alt="" className="w-full h-full object-cover opacity-60 grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-1000" />
                    </div>
                 ))}
              </motion.div>
           </div>
        </section>

        {/* NEW SECTION 2: THE BLUEPRINT (PROCESS) */}
        <section className="py-40 bg-white border-b border-border-subtle/30 overflow-hidden">
           <div className="container-max px-6 md:px-8">
              <div className="grid lg:grid-cols-2 gap-24 items-center">
                 <div className="relative">
                    <label className="text-[10px] font-black uppercase tracking-[0.5em] text-brand-blue mb-8 block">Our Process</label>
                    <h2 className="text-4xl md:text-6xl font-bold text-text-primary tracking-tighter leading-[1] mb-10">The product <span className="text-brand-blue">blueprint</span> for scale.</h2>
                    <p className="text-xl text-text-secondary leading-relaxed font-medium opacity-80 mb-12 max-w-xl">
                       We don't just design screens. We architect end-to-end product ecosystems focused on long-term growth and technical excellence.
                    </p>
                    
                    <div className="space-y-4">
                       {[
                          { title: 'Core Strategy', desc: 'Market analysis & product positioning.' },
                          { title: 'Architecture', desc: 'System design and UX flow mapping.' },
                          { title: 'Elite Design', desc: 'High-end visual interfaces and motion.' },
                          { title: 'Execution', desc: 'Production-ready code & launch support.' }
                       ].map((step, i) => (
                          <div key={i} className="flex items-center gap-6 p-6 bg-surface border border-border-subtle/50 rounded-2xl hover:border-brand-blue/30 transition-all group">
                             <div className="w-12 h-12 rounded-xl bg-white border border-border-subtle flex items-center justify-center font-black text-xs text-brand-blue shadow-sm group-hover:scale-110 transition-transform">0{i+1}</div>
                             <div>
                                <h4 className="font-bold text-text-primary tracking-tight">{step.title}</h4>
                                <p className="text-xs text-text-secondary opacity-60">{step.desc}</p>
                             </div>
                          </div>
                       ))}
                    </div>
                 </div>

                 <div className="relative p-12 bg-surface rounded-[64px] border border-border-subtle/50">
                    <div className="absolute inset-0 bg-[linear-gradient(to_right,#00000003_1px,transparent_1px),linear-gradient(to_bottom,#00000003_1px,transparent_1px)] bg-[size:40px_40px] opacity-40 rounded-[64px]" />
                    <div className="relative z-10 space-y-8">
                       <div className="bg-white p-8 rounded-[40px] shadow-xl border border-border-subtle/50">
                          <div className="flex items-center gap-4 mb-6">
                             <div className="w-10 h-10 rounded-full bg-brand-blue" />
                             <div className="h-2 w-32 bg-surface rounded" />
                          </div>
                          <div className="space-y-3">
                             <div className="h-2 w-full bg-surface rounded" />
                             <div className="h-2 w-full bg-surface rounded" />
                             <div className="h-2 w-2/3 bg-surface rounded" />
                          </div>
                       </div>
                       <div className="grid grid-cols-2 gap-8">
                          <div className="bg-white p-8 rounded-[40px] shadow-xl border border-border-subtle/50">
                             <div className="w-12 h-12 bg-emerald-500/10 rounded-xl mb-6 flex items-center justify-center">
                                <Activity className="w-6 h-6 text-emerald-500" />
                             </div>
                             <div className="h-2 w-full bg-surface rounded" />
                          </div>
                          <div className="bg-white p-8 rounded-[40px] shadow-xl border border-border-subtle/50">
                             <div className="w-12 h-12 bg-amber-500/10 rounded-xl mb-6 flex items-center justify-center">
                                <Database className="w-6 h-6 text-amber-500" />
                             </div>
                             <div className="h-2 w-full bg-surface rounded" />
                          </div>
                       </div>
                    </div>
                 </div>
              </div>
           </div>
        </section>


        {/* FINAL CTA */}
        <section className="container-max px-6 md:px-8 pb-32 pt-20">
           <motion.div
             initial={{ opacity: 0, scale: 0.98 }}
             whileInView={{ opacity: 1, scale: 1 }}
             viewport={{ once: true }}
             className="bg-brand-blue rounded-[48px] md:rounded-[64px] p-12 md:p-24 lg:p-32 relative overflow-hidden text-center"
           >
              <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.4),transparent_70%)]" />
              <div className="relative z-10 max-w-3xl mx-auto text-white">
                 <label className="text-[10px] font-black uppercase tracking-[0.5em] text-white/50 mb-8 block">Ready to start?</label>
                 <h2 className="text-4xl md:text-7xl font-bold tracking-tighter leading-[0.9] mb-12">Let's build your <span className="text-white/60">launchpad.</span></h2>
                 <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                    <a href="https://calendly.com/abdullatif-designsynapse/30min" target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto bg-white text-brand-blue px-10 py-5 rounded-2xl font-black text-xs uppercase tracking-widest flex items-center justify-center gap-3 hover:-translate-y-1 transition-all shadow-2xl">
                       Get Started <ArrowRight className="w-4 h-4" />
                    </a>
                    <Link to="/contact" className="w-full sm:w-auto bg-brand-blue-hover text-white border border-white/20 px-10 py-5 rounded-2xl font-black text-xs uppercase tracking-widest flex items-center justify-center gap-3 hover:bg-brand-blue-hover/80 transition-all">
                       Message us
                    </Link>
                 </div>
              </div>
           </motion.div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
