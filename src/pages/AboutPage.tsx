import { motion } from 'motion/react';
import { 
  ArrowRight, CheckCircle2, Linkedin, Twitter, Github, MousePointer2, 
  Rocket, Target, Zap, Layout, Sparkles, Cpu, Layers, Command, 
  Globe, Calendar, Quote, ShieldCheck, Zap as FastIcon,
  Database, GitBranch, Link2, Palette, PenTool
} from 'lucide-react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const philosophies = [
  {
    title: 'Clarity over complexity',
    description: 'Good products feel obvious to use. We strip away the noise to find the core message and the most efficient user path.',
    icon: Sparkles,
  },
  {
    title: 'Speed without chaos',
    description: 'Fast execution only works with strong systems. We use proven frameworks and focused sprints to deliver high-end results in weeks.',
    icon: FastIcon,
  },
  {
    title: 'Outcomes over deliverables',
    description: 'We focus on what the product achieves—not just what gets handed over. Every pixel must serve a business goal.',
    icon: Target,
  }
];

const workStyle = [
  {
    title: 'Direct communication',
    description: 'No layers of account managers. You speak directly with the people building your product.',
    icon: Globe
  },
  {
    title: 'Structured progress',
    description: 'Weekly rituals and clear milestones ensuring you always know exactly where the project stands.',
    icon: Calendar
  },
  {
    title: 'Small client load',
    description: 'We only take on 2-3 projects at a time to ensure each founder gets our full creative attention.',
    icon: Command
  },
  {
    title: 'Built collaboratively',
    description: 'You stay deeply involved in strategic decisions without having to manage the execution.',
    icon: ShieldCheck
  }
];

const tools = [
  { name: 'Figma', icon: PenTool },
  { name: 'Next.js', icon: Zap },
  { name: 'Framer Motion', icon: Sparkles },
  { name: 'Supabase', icon: Database },
  { name: 'OpenAI', icon: Cpu },
  { name: 'n8n', icon: GitBranch },
  { name: 'Make', icon: Link2 },
  { name: 'Tailwind', icon: Palette }
];

const stats = [
  { value: '13+', label: 'SaaS founders' },
  { value: '25+', label: 'Products built' },
  { value: '3', label: 'Core solutions' },
  { value: '21', label: 'Avg. Days / launch' }
];

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white selection:bg-brand-blue/10 selection:text-brand-blue overflow-x-hidden">
      <Navbar />
      
      {/* Background Decor */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_40%_20%,rgba(37,99,235,0.03),transparent_40%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />
      </div>

      <main className="relative z-10 pt-32 pb-20 font-sans">
        {/* Section 1: Hero — Editorial Split */}
        <section className="container-max px-6 md:px-8 mb-40">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: [0.23, 1, 0.32, 1] }}
            >
              <label className="text-[10px] font-black uppercase tracking-[0.4em] text-brand-blue mb-8 block px-3 py-1 bg-brand-blue/5 w-fit rounded-full">About DesignSynapse</label>
              <h1 className="text-5xl lg:text-7xl font-bold text-text-primary tracking-tighter leading-[0.95] mb-10">
                We help founders turn <span className="text-brand-blue">ambitious</span> ideas into scalable products.
              </h1>
              <p className="text-xl text-text-secondary leading-relaxed mb-12 max-w-lg font-medium opacity-80">
                A focused startup studio combining product strategy, design, and AI systems — built for founders who want to move faster with total clarity.
              </p>
              
              <div className="flex flex-wrap gap-4">
                <a href="https://calendly.com/abdullatif-designsynapse/30min" target="_blank" rel="noopener noreferrer" className="px-10 py-5 bg-brand-blue text-white rounded-2xl font-black text-xs uppercase tracking-widest hover:bg-brand-blue-hover transition-all shadow-lg shadow-blue-900/10 flex items-center gap-2 group">
                  Book discovery call <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </a>
                <Link to="/solutions" className="px-10 py-5 bg-surface text-text-primary border border-border-subtle rounded-2xl font-black text-xs uppercase tracking-widest hover:bg-white transition-all">
                  View solutions
                </Link>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9, rotate: -2 }}
              animate={{ opacity: 1, scale: 1, rotate: 0 }}
              transition={{ duration: 1, delay: 0.2, ease: [0.23, 1, 0.32, 1] }}
              className="relative"
            >
              <div className="relative aspect-square rounded-[48px] bg-[#F8FAFC] border border-border-subtle/50 overflow-hidden shadow-2xl p-4">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(37,99,235,0.05),transparent)] pointer-events-none" />
                
                {/* Simulated Floating Elements */}
                <motion.div 
                   animate={{ y: [0, -10, 0] }}
                   transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                   className="absolute top-12 left-10 w-48 h-32 bg-white rounded-2xl border border-border-subtle shadow-lg z-20 p-4"
                >
                  <div className="flex items-center gap-2 mb-4">
                    <div className="w-2 h-2 rounded-full bg-brand-blue" />
                    <div className="w-12 h-1.5 bg-surface rounded" />
                  </div>
                  <div className="space-y-2">
                    <div className="w-full h-2 bg-surface rounded" />
                    <div className="w-3/4 h-2 bg-surface rounded" />
                  </div>
                </motion.div>

                <img 
                  src="https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&q=80&w=1200" 
                  alt="Product Studio" 
                  className="w-full h-full object-cover rounded-[32px] grayscale-[0.3] opacity-90"
                />
              </div>
            </motion.div>
          </div>
        </section>

        {/* Section 2: Why DesignSynapse exists */}
        <section className="section-padding bg-surface/50 border-y border-border-subtle/40 mb-40">
          <div className="container-max">
            <div className="grid lg:grid-cols-2 gap-24 items-center">
              <div>
                <div className="flex items-center gap-3 mb-10">
                   <Quote className="w-5 h-5 text-brand-blue" />
                   <span className="text-[10px] font-black text-brand-blue uppercase tracking-[0.3em]">Our Origin</span>
                </div>
                <h2 className="text-4xl md:text-5xl font-bold text-text-primary tracking-tighter leading-tight mb-10">Why DesignSynapse exists</h2>
                <div className="space-y-8 text-lg text-text-secondary leading-relaxed font-medium opacity-80">
                  <p>Most founders waste months managing disconnected freelancers or waiting for slow, bloated agencies to deliver work that doesn't move the needle.</p>
                  <p>DesignSynapse was created to simplify this. We combine elite product design with deep technical execution, providing a lean, focused partner for founders who need to launch and grow with absolute precision.</p>
                  <p className="text-text-primary font-bold italic">No black boxes. No hierarchy. Just direct design-to-build output.</p>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-6 relative">
                 <div className="absolute inset-0 bg-brand-blue/5 rounded-full blur-[100px] -z-10" />
                 <div className="space-y-6">
                    <div className="p-8 bg-white rounded-[40px] border border-border-subtle shadow-sm flex flex-col items-center text-center">
                       <Layout className="w-8 h-8 text-brand-blue mb-4" />
                       <p className="text-[10px] font-black uppercase tracking-widest text-text-secondary">Clarity</p>
                    </div>
                    <div className="p-8 bg-white rounded-[40px] border border-border-subtle shadow-sm flex flex-col items-center text-center">
                       <Zap className="w-8 h-8 text-indigo-500 mb-4" />
                       <p className="text-[10px] font-black uppercase tracking-widest text-text-secondary">Momentum</p>
                    </div>
                 </div>
                 <div className="space-y-6 pt-12">
                    <div className="p-8 bg-white rounded-[40px] border border-border-subtle shadow-sm flex flex-col items-center text-center">
                       <Rocket className="w-8 h-8 text-emerald-500 mb-4" />
                       <p className="text-[10px] font-black uppercase tracking-widest text-text-secondary">Launch</p>
                    </div>
                    <div className="p-8 bg-white rounded-[40px] border border-border-subtle shadow-sm flex flex-col items-center text-center">
                       <Target className="w-8 h-8 text-brand-blue mb-4" />
                       <p className="text-[10px] font-black uppercase tracking-widest text-text-secondary">Outcome</p>
                    </div>
                 </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section 3: The Founder Section */}
        <section className="container-max mb-40">
           <div className="relative rounded-[64px] bg-white border border-border-subtle p-8 md:p-20 shadow-2xl shadow-blue-900/5">
              <div className="grid lg:grid-cols-12 gap-20 items-center">
                 <div className="lg:col-span-5">
                    <motion.div 
                      whileHover={{ scale: 1.02 }}
                      transition={{ duration: 0.6 }}
                      className="relative aspect-[3/4] rounded-[48px] overflow-hidden shadow-2xl"
                    >
                       <img 
                          src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=1000" 
                          alt="Abdullatif - Founder" 
                          className="w-full h-full object-cover grayscale-[0.1] hover:grayscale-0 transition-all duration-1000"
                       />
                       <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                       <div className="absolute bottom-10 left-10">
                          <div className="text-white font-black text-xs uppercase tracking-[0.3em] mb-2 opacity-80">Founder & Lead</div>
                          <div className="text-white text-3xl font-bold tracking-tight">Abdullatif</div>
                       </div>
                    </motion.div>
                 </div>

                 <div className="lg:col-span-7">
                    <div className="space-y-12">
                       <div className="grid md:grid-cols-2 gap-10">
                          <div>
                             <h4 className="text-[10px] font-black uppercase tracking-widest text-brand-blue mb-4">Background</h4>
                             <p className="text-base text-text-secondary leading-relaxed font-medium opacity-80">I founded DesignSynapse to bridge the wide gap between high-level visual design and actual technical execution. I speak the language of both founders and engineers.</p>
                          </div>
                          <div>
                             <h4 className="text-[10px] font-black uppercase tracking-widest text-brand-blue mb-4">Philosophy</h4>
                             <p className="text-base text-text-secondary leading-relaxed font-medium opacity-80">The best products aren't built by committees. They are built by small, high-agency teams who move fast and iterate based on real feedback.</p>
                          </div>
                          <div>
                             <h4 className="text-[10px] font-black uppercase tracking-widest text-brand-blue mb-4">Working Style</h4>
                             <p className="text-base text-text-secondary leading-relaxed font-medium opacity-80">Direct, collaborative, and entirely focused on the "why" behind every pixel. You speak directly with the people building your product.</p>
                          </div>
                          <div>
                             <h4 className="text-[10px] font-black uppercase tracking-widest text-brand-blue mb-4">Frustrations</h4>
                             <p className="text-base text-text-secondary leading-relaxed font-medium opacity-80">Nothing is more expensive than a slow project. I cut through the agency red tape to focus strictly on what needs to happen to get you to market.</p>
                          </div>
                       </div>

                       <div className="flex gap-4 pt-10 border-t border-border-subtle/50">
                          <a href="#" className="p-4 bg-surface rounded-2xl hover:bg-white border border-transparent hover:border-brand-blue/20 transition-all group">
                             <Linkedin className="w-5 h-5 text-text-secondary group-hover:text-brand-blue" />
                          </a>
                          <a href="#" className="p-4 bg-surface rounded-2xl hover:bg-white border border-transparent hover:border-brand-blue/20 transition-all group">
                             <Twitter className="w-5 h-5 text-text-secondary group-hover:text-brand-blue" />
                          </a>
                          <a href="#" className="p-4 bg-surface rounded-2xl hover:bg-white border border-transparent hover:border-brand-blue/20 transition-all group">
                             <Github className="w-5 h-5 text-text-secondary group-hover:text-brand-blue" />
                          </a>
                       </div>
                    </div>
                 </div>
              </div>
           </div>
        </section>

        {/* Section 4: How we think Case Study Section */}
        <section className="section-padding bg-surface/30 relative mb-40">
           <div className="container-max text-center mb-24">
              <label className="text-[10px] font-black uppercase tracking-[0.4em] text-brand-blue mb-4 block">Our DNA</label>
              <h2 className="text-4xl md:text-6xl font-bold text-text-primary tracking-tighter">How we think about building</h2>
           </div>

           <div className="container-max grid lg:grid-cols-3 gap-8">
              {philosophies.map((phi, i) => (
                 <motion.div
                   key={phi.title}
                   whileHover={{ y: -8 }}
                   className="group p-12 bg-white rounded-[48px] border border-border-subtle shadow-xl shadow-blue-900/5 hover:border-brand-blue/30 transition-all"
                 >
                   <div className="w-14 h-14 bg-brand-blue/5 rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 group-hover:bg-brand-blue/10 transition-all">
                      <phi.icon className="w-7 h-7 text-brand-blue" />
                   </div>
                   <h3 className="text-2xl font-bold text-text-primary mb-6 tracking-tight leading-tight">{phi.title}</h3>
                   <p className="text-text-secondary font-medium leading-relaxed opacity-70">{phi.description}</p>
                 </motion.div>
              ))}
           </div>
        </section>

        {/* Section 5: Experience Blocks */}
        <section className="container-max px-6 md:px-8 mb-40">
           <div className="text-center mb-20">
              <label className="text-[10px] font-black uppercase tracking-[0.4em] text-brand-blue mb-4 block">The Collaboration</label>
              <h2 className="text-4xl md:text-5xl font-bold text-text-primary tracking-tighter">What working together feels like</h2>
           </div>

           <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
              {workStyle.map((style, i) => (
                 <motion.div
                   key={style.title}
                   initial={{ opacity: 0, y: 20 }}
                   whileInView={{ opacity: 1, y: 0 }}
                   viewport={{ once: true }}
                   transition={{ delay: i * 0.1 }}
                   className="bg-[#F8FAFC] border border-border-subtle/50 p-10 rounded-[40px] hover:bg-white hover:shadow-xl hover:shadow-blue-900/5 transition-all text-center group"
                 >
                   <div className="w-12 h-12 bg-white rounded-xl shadow-sm border border-border-subtle flex items-center justify-center mx-auto mb-8 group-hover:scale-110 transition-transform">
                      <style.icon className="w-6 h-6 text-brand-blue" />
                   </div>
                   <h4 className="text-lg font-bold text-text-primary mb-4 tracking-tight">{style.title}</h4>
                   <p className="text-sm text-text-secondary leading-relaxed font-medium opacity-70">{style.description}</p>
                 </motion.div>
              ))}
           </div>
        </section>

        {/* Section 6: Systems Visual Strip */}
        <section className="container-max mb-40">
           <div className="bg-brand-blue rounded-[64px] p-20 text-center relative overflow-hidden">
              <div className="absolute inset-0 opacity-10 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:20px_20px]" />
              <div className="relative z-10">
                 <label className="text-[9px] font-black uppercase tracking-[0.4em] text-white/50 mb-10 block">Our Tech Ecosystem</label>
                 <div className="flex flex-wrap justify-center gap-4 max-w-4xl mx-auto">
                    {tools.map((tool) => (
                       <motion.div
                         key={tool.name}
                         whileHover={{ y: -5, scale: 1.05 }}
                         className="px-6 py-4 bg-white/10 backdrop-blur-md rounded-2xl border border-white/20 flex items-center gap-3"
                       >
                         <tool.icon className="w-5 h-5 text-white/80" />
                         <span className="text-xs font-black text-white uppercase tracking-widest">{tool.name}</span>
                       </motion.div>
                    ))}
                 </div>
              </div>
           </div>
        </section>

        {/* Section 7: Stats strip */}
        <section className="container-max mb-40 px-6 md:px-8">
           <div className="flex flex-wrap justify-between gap-12 items-center py-16 border-y border-border-subtle/40">
              {stats.map((stat) => (
                 <div key={stat.label} className="flex flex-col items-center flex-1 min-w-[200px]">
                    <div className="text-5xl lg:text-7xl font-bold text-text-primary tracking-tighter mb-2">{stat.value}</div>
                    <div className="text-[10px] font-black text-brand-blue uppercase tracking-[0.3em]">{stat.label}</div>
                 </div>
              ))}
           </div>
        </section>

        {/* Section 8: Final CTA */}
        <section className="container-max px-6 md:px-8">
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="bg-[#F8FAFC] rounded-[64px] p-12 lg:p-24 text-center border border-brand-blue/10 relative overflow-hidden shadow-2xl shadow-blue-900/5"
          >
            <div className="relative z-10 max-w-3xl mx-auto">
              <label className="text-[10px] font-black uppercase tracking-[0.5em] text-brand-blue mb-8 block">Start a Project</label>
              <h2 className="text-4xl lg:text-7xl font-bold text-text-primary tracking-tighter leading-[0.9] mb-12">
                Let's simplify your <span className="text-brand-blue">execution.</span>
              </h2>
              
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <a 
                  href="https://calendly.com/abdullatif-designsynapse/30min"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto bg-brand-blue text-white px-10 py-5 rounded-2xl font-black text-xs uppercase tracking-widest flex items-center justify-center gap-3 hover:translate-y-[-4px] transition-all shadow-xl shadow-blue-900/20"
                >
                  Book discovery call <ArrowRight className="w-4 h-4" />
                </a>
                <Link 
                  to="/contact"
                  className="w-full sm:w-auto bg-white text-text-primary border border-border-subtle px-10 py-5 rounded-2xl font-black text-xs uppercase tracking-widest flex items-center justify-center gap-3 hover:bg-surface transition-all"
                >
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
