import { motion } from 'motion/react';
import { Twitter, Linkedin, Facebook, Instagram, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-24 px-6 bg-brand-blue text-white overflow-hidden relative">
      {/* Decorative background elements */}
      <div className="absolute inset-0 pointer-events-none opacity-10">
        <div className="absolute top-0 left-0 w-64 h-64 border-r border-b border-white" />
        <div className="absolute bottom-0 right-0 w-64 h-64 border-l border-t border-white" />
      </div>

      <div className="container-max relative z-10">
        <div className="grid md:grid-cols-4 gap-16 mb-20 items-start">
          {/* Column 1: Logo, Tagline, Email */}
          <div className="flex flex-col">
            <Link to="/" className="flex items-center group mb-8 w-fit select-none">
              <div className="flex items-baseline font-display text-xl tracking-tighter text-white leading-none">
                <span className="italic font-medium group-hover:text-blue-100 transition-colors duration-300">design</span>
                <span className="font-bold group-hover:text-blue-100 transition-colors duration-300">synapse</span>
                <span className="w-1 h-1 bg-white rounded-[1px] ml-0.5 group-hover:scale-125 group-hover:rotate-12 transition-all duration-300" />
              </div>
            </Link>
            <p className="text-white/70 text-sm leading-relaxed max-w-xs font-medium mb-6">
              Engineering high-growth SaaS products from idea to market in 6 weeks. No fluff. Just execution.
            </p>
            <a href="mailto:hello@designsynapse.com" className="text-white font-bold text-sm hover:text-blue-200 transition-colors w-fit underline underline-offset-4">
              hello@designsynapse.com
            </a>
          </div>

          {/* Column 2: Navigation Links */}
          <div className="flex flex-col">
            <div className="flex flex-col gap-6">
              <h4 className="text-xs font-black text-white uppercase tracking-[0.3em] opacity-100 mb-2">Navigation</h4>
              <ul className="flex flex-col gap-4 text-[13px] font-semibold">
                <li><Link to="/" className="text-white/70 hover:text-white transition-colors">Home</Link></li>
                <li><Link to="/work" className="text-white/70 hover:text-white transition-colors">Work</Link></li>
                <li><Link to="/about" className="text-white/70 hover:text-white transition-colors">About Us</Link></li>
                <li><Link to="/contact" className="text-white/70 hover:text-white transition-colors">Contact Us</Link></li>
              </ul>
            </div>
          </div>

          {/* Column 3: Solutions Links */}
          <div className="flex flex-col">
            <div className="flex flex-col gap-6">
              <h4 className="text-xs font-black text-white uppercase tracking-[0.3em] opacity-100 mb-2">Solutions</h4>
              <ul className="flex flex-col gap-4 text-[13px] font-semibold">
                <li><Link to="/solutions/saas-mvp" className="text-white/70 hover:text-white transition-colors">SaaS MVP Build</Link></li>
                <li><Link to="/solutions/digital-launchpad" className="text-white/70 hover:text-white transition-colors">Digital Launchpad</Link></li>
                <li><Link to="/solutions/ai-automation" className="text-white/70 hover:text-white transition-colors">AI Automation</Link></li>
                <li className="pt-6">
                  <div className="bg-[#F8FAFC] p-6 rounded-[2rem] border border-white/10 shadow-2xl shadow-black/5">
                    <p className="text-brand-blue text-[10px] font-extrabold uppercase tracking-[0.3em] mb-4">Ready to launch?</p>
                    <motion.a 
                      href="https://calendly.com/abdullatif-designsynapse/30min" 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      animate={{ boxShadow: ["0 0 0 0px rgba(37,99,235,0)", "0 0 0 10px rgba(37,99,235,0.05)", "0 0 0 0px rgba(37,99,235,0)"] }}
                      transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                      className="group relative inline-flex items-center justify-center gap-3 bg-gradient-to-r from-[#2563EB] to-[#3B82F6] text-white px-7 py-3.5 rounded-xl font-bold text-xs uppercase tracking-widest transition-all duration-300 hover:shadow-[0_10px_20px_-5px_rgba(37,99,235,0.4)] hover:-translate-y-0.5 active:translate-y-0 active:scale-[0.98] overflow-hidden w-full whitespace-nowrap"
                    >
                      <span className="relative z-10">Start your project</span>
                      <ArrowRight className="w-4 h-4 relative z-10 group-hover:translate-x-1 transition-transform duration-300" />
                      <div className="absolute inset-0 bg-gradient-to-r from-[#1D4ED8] to-[#2563EB] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    </motion.a>
                  </div>
                </li>
              </ul>
            </div>
          </div>

          {/* Column 4: Social Links */}
          <div className="flex flex-col">
            <div className="flex flex-col gap-6">
              <h4 className="text-xs font-black text-white uppercase tracking-[0.3em] opacity-100 mb-2">Connect</h4>
              <div className="flex gap-4">
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-xl bg-white/10 border border-white/20 flex items-center justify-center hover:bg-white hover:text-brand-blue transition-all hover:-translate-y-1 group">
                  <Linkedin className="w-4 h-4" />
                </a>
                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-xl bg-white/10 border border-white/20 flex items-center justify-center hover:bg-white hover:text-brand-blue transition-all hover:-translate-y-1 group">
                  <Twitter className="w-4 h-4" />
                </a>
                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-xl bg-white/10 border border-white/20 flex items-center justify-center hover:bg-white hover:text-brand-blue transition-all hover:-translate-y-1 group">
                  <Facebook className="w-4 h-4" />
                </a>
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-xl bg-white/10 border border-white/20 flex items-center justify-center hover:bg-white hover:text-brand-blue transition-all hover:-translate-y-1 group">
                  <Instagram className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-12 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-[10px] font-bold text-white/40 uppercase tracking-[0.2em]">
            © {currentYear} DesignSynapse. All RIGHTS RESERVED.
          </p>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse shadow-[0_0_8px_rgba(74,222,128,0.5)]" />
            <span className="text-[10px] font-bold text-white/60 uppercase tracking-widest">System Status: Operational</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
