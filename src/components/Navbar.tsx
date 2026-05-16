import { motion, AnimatePresence } from 'motion/react';
import { ArrowRight, Menu, X, ChevronDown } from 'lucide-react';
import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isMobileMenuOpen]);

  const navLinks = [
    { name: 'Home', href: '/', type: 'link' },
    { 
      name: 'Solutions', 
      href: '/solutions', 
      type: 'dropdown',
      subLinks: [
        { name: 'SaaS MVP Solution', href: '/solutions/saas-mvp' },
        { name: 'Digital Launch Solution', href: '/solutions/digital-launchpad' },
        { name: 'AI Automation Solution', href: '/solutions/ai-automation' },
      ]
    },
    { name: 'Work', href: '/work', type: 'link' },
    { name: 'About Us', href: '/about', type: 'link' },
    { name: 'Contact Us', href: '/contact', type: 'link' },
  ];

  const handleNavClick = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled || isMobileMenuOpen 
            ? 'bg-white border-b border-gray-200 py-4 shadow-sm' 
            : 'bg-white/90 backdrop-blur-md py-5'
        }`}
      >
        <div className="container-max flex items-center justify-between px-6 md:px-8">
          <Link to="/" className="flex items-center group z-50 select-none">
            <div className="flex items-baseline font-display text-2xl tracking-tighter text-gray-900 leading-none">
              <span className="italic font-medium group-hover:text-brand-blue transition-colors duration-300">design</span>
              <span className="font-bold group-hover:text-brand-blue transition-colors duration-300">synapse</span>
              <span className="w-1.5 h-1.5 bg-brand-blue rounded-[1px] ml-0.5 group-hover:scale-125 group-hover:rotate-12 transition-all duration-300" />
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8 lg:gap-10 text-[15px] font-medium text-gray-600">
            {navLinks.map((link) => (
              link.type === 'link' ? (
                <Link 
                  key={link.name} 
                  to={link.href} 
                  className={`hover:text-gray-900 transition-colors relative py-2 group ${location.pathname === link.href ? 'text-brand-blue' : ''}`}
                >
                  {link.name}
                  <span className={`absolute bottom-0 left-0 h-[2px] bg-brand-blue transition-all duration-300 rounded-full ${location.pathname === link.href ? 'w-full' : 'w-0 group-hover:w-full'}`}></span>
                </Link>
              ) : link.type === 'dropdown' ? (
                <div key={link.name} className="relative group/dropdown py-2">
                  <div className={`flex items-center gap-1.5 cursor-pointer hover:text-gray-900 transition-colors ${location.pathname.startsWith(link.href) ? 'text-brand-blue' : ''}`}>
                    <Link to={link.href}>
                      {link.name}
                    </Link>
                    <ChevronDown className={`w-4 h-4 transition-transform duration-300 group-hover/dropdown:rotate-180`} />
                  </div>
                  
                  {/* Dropdown Menu */}
                  <div className="absolute top-full left-1/2 -translate-x-1/2 pt-4 opacity-0 invisible group-hover/dropdown:opacity-100 group-hover/dropdown:visible transition-all duration-300 transform group-hover/dropdown:translate-y-0 translate-y-2">
                    <div className="bg-white border border-gray-100 rounded-2xl shadow-2xl p-3 min-w-[260px]">
                      {link.subLinks?.map((sub) => (
                        <Link
                          key={sub.name}
                          to={sub.href}
                          className="block px-4 py-3.5 text-sm font-medium text-gray-600 hover:text-brand-blue hover:bg-gray-50 rounded-xl transition-all"
                        >
                          {sub.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              ) : (
                <a 
                  key={link.name} 
                  href={location.pathname === '/' ? link.href : `/${link.href}`} 
                  className="hover:text-gray-900 transition-colors relative py-2 group text-gray-600"
                >
                  {link.name}
                  <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-brand-blue transition-all duration-300 group-hover:w-full rounded-full"></span>
                </a>
              )
            ))}
          </div>

          <div className="hidden md:block">
            <a 
              href="https://calendly.com/abdullatif-designsynapse/30min"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-brand-blue hover:bg-[#1D4ED8] text-white px-7 py-3.5 rounded-xl text-[15px] font-bold tracking-tight transition-all flex items-center gap-2 shadow-lg shadow-brand-blue/20 hover:shadow-brand-blue/30 hover:-translate-y-1 active:translate-y-0 active:scale-95 group whitespace-nowrap"
            >
              Book a call
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1.5 transition-transform duration-300" />
            </a>
          </div>

          {/* Mobile Menu Toggle */}
          <button 
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden z-50 p-2 text-text-primary"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </motion.nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed inset-0 bg-white z-40 md:hidden pt-32 pb-12 px-6 flex flex-col"
          >
            <div className="flex flex-col gap-6 flex-grow overflow-y-auto">
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                >
                  {link.type === 'link' ? (
                    <Link 
                      to={link.href} 
                      onClick={handleNavClick}
                      className="text-4xl font-bold text-text-primary hover:text-brand-blue transition-colors"
                    >
                      {link.name}
                    </Link>
                  ) : link.type === 'dropdown' ? (
                    <div className="flex flex-col gap-4">
                      <Link 
                        to={link.href}
                        onClick={handleNavClick}
                        className="text-4xl font-bold text-text-primary hover:text-brand-blue transition-colors"
                      >
                        {link.name}
                      </Link>
                      <div className="flex flex-col gap-3 pl-4 border-l-2 border-border-subtle">
                        {link.subLinks?.map((sub) => (
                          <Link
                            key={sub.name}
                            to={sub.href}
                            onClick={handleNavClick}
                            className="text-xl font-semibold text-text-secondary hover:text-brand-blue transition-colors"
                          >
                            {sub.name}
                          </Link>
                        ))}
                      </div>
                    </div>
                  ) : (
                    <a 
                      href={location.pathname === '/' ? link.href : `/${link.href}`}
                      onClick={handleNavClick}
                      className="text-4xl font-bold text-text-primary hover:text-brand-blue transition-colors"
                    >
                      {link.name}
                    </a>
                  )}
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="mt-auto"
            >
              <p className="text-xs font-bold text-text-secondary/50 uppercase tracking-widest mb-6 text-center">Start your project</p>
              <a 
                href="https://calendly.com/abdullatif-designsynapse/30min"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full bg-brand-blue text-white py-5 rounded-2xl font-bold text-lg flex items-center justify-center gap-3 active:scale-[0.98] transition-transform whitespace-nowrap"
              >
                Book a call
                <ArrowRight className="w-5 h-5" />
              </a>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
