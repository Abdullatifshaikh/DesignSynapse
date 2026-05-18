import { motion, AnimatePresence } from 'motion/react';
import { ArrowRight, Send, CheckCircle2, ShieldCheck, Clock, Mail, Calendar } from 'lucide-react';
import React, { useState, useEffect } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function ContactPage() {
  const [formState, setFormState] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
    source: ''
  });

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormState('loading');
    
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setFormState('success');
      } else {
        const data = await response.json();
        console.error('Submission failed:', data.error);
        setFormState('error');
      }
    } catch (err) {
      console.error('Error submitting form:', err);
      setFormState('error');
    }
  };

  return (
    <div className="min-h-screen bg-white selection:bg-brand-blue/10 selection:text-brand-blue">
      <Navbar />
      
      <main className="pt-32 pb-20">
        {/* Section 1: Hero */}
        <section className="container-max px-6 md:px-8 mb-20 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-2xl mx-auto"
          >
            <label className="text-xs font-black uppercase tracking-[0.3em] text-brand-blue mb-6 block">Get in touch</label>
            <h1 className="text-5xl lg:text-6xl font-bold text-text-primary tracking-tighter leading-none mb-6">
              Not ready for a call yet?
            </h1>
            <p className="text-xl text-text-secondary leading-relaxed mb-4">
              Send us a message and we’ll get back to you within one business day.
            </p>
            <p className="text-xs font-bold text-text-secondary/40 uppercase tracking-widest italic">
              No pressure. Just a conversation.
            </p>
          </motion.div>
        </section>

        {/* Section 2: Contact Form */}
        <section className="container-max px-6 md:px-8 mb-32">
          <div className="max-w-[560px] mx-auto">
            <AnimatePresence mode="wait">
              {formState === 'success' ? (
                <motion.div 
                  key="success-message"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="bg-green-50 border border-green-100 rounded-[2.5rem] p-12 text-center"
                >
                  <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-8">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h3 className="text-3xl font-bold text-green-900 mb-4 tracking-tight">Message sent successfully</h3>
                  <p className="text-green-800/70 font-medium">We’ll get back to you within one business day.</p>
                  <button 
                    onClick={() => setFormState('idle')}
                    className="mt-10 text-green-600 font-bold text-sm underline underline-offset-4 decoration-green-600/30 hover:decoration-green-600 transition-all"
                  >
                    Send another message
                  </button>
                </motion.div>
              ) : formState === 'error' ? (
                <motion.div 
                  key="error-message"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="bg-red-50 border border-red-100 rounded-[2.5rem] p-12 text-center"
                >
                  <div className="w-16 h-16 bg-red-100 text-red-600 rounded-full flex items-center justify-center mx-auto mb-8">
                    <Send className="w-8 h-8" />
                  </div>
                  <h3 className="text-3xl font-bold text-red-900 mb-4 tracking-tight">Failed to send message</h3>
                  <p className="text-red-800/70 font-medium">Something went wrong. Please try again or email us directly.</p>
                  <button 
                    onClick={() => setFormState('idle')}
                    className="mt-10 text-red-600 font-bold text-sm underline underline-offset-4 decoration-red-600/30 hover:decoration-red-600 transition-all"
                  >
                    Try again
                  </button>
                </motion.div>
              ) : (
                <motion.form 
                  key="contact-form"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  onSubmit={handleSubmit} 
                  className="space-y-6"
                >
                  <div className="space-y-1.5">
                    <label className="text-[10px] font-black text-text-secondary uppercase tracking-[0.2em] ml-1">Name <span className="text-brand-blue">*</span></label>
                    <input 
                      required
                      type="text" 
                      placeholder="Your name"
                      className="w-full px-5 py-4 rounded-xl border border-gray-200 bg-white text-text-primary placeholder:text-text-secondary/40 focus:border-brand-blue focus:ring-4 focus:ring-brand-blue/5 outline-none transition-all"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    />
                  </div>
                  
                  <div className="space-y-1.5">
                    <label className="text-[10px] font-black text-text-secondary uppercase tracking-[0.2em] ml-1">Email <span className="text-brand-blue">*</span></label>
                    <input 
                      required
                      type="email" 
                      placeholder="email@example.com"
                      className="w-full px-5 py-4 rounded-xl border border-gray-200 bg-white text-text-primary placeholder:text-text-secondary/40 focus:border-brand-blue focus:ring-4 focus:ring-brand-blue/5 outline-none transition-all"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-[10px] font-black text-text-secondary uppercase tracking-[0.2em] ml-1">What are you working on? <span className="text-brand-blue">*</span></label>
                    <textarea 
                      required
                      rows={4}
                      placeholder="Describe your idea or project..."
                      className="w-full px-5 py-4 rounded-xl border border-gray-200 bg-white text-text-primary placeholder:text-text-secondary/40 focus:border-brand-blue focus:ring-4 focus:ring-brand-blue/5 outline-none transition-all resize-none"
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-[10px] font-black text-text-secondary uppercase tracking-[0.2em] ml-1">How did you find us? (Optional)</label>
                    <input 
                      type="text" 
                      placeholder="Twitter, Linkedin, or referral..."
                      className="w-full px-5 py-4 rounded-xl border border-gray-200 bg-white text-text-primary placeholder:text-text-secondary/40 focus:border-brand-blue focus:ring-4 focus:ring-brand-blue/5 outline-none transition-all"
                      value={formData.source}
                      onChange={(e) => setFormData({ ...formData, source: e.target.value })}
                    />
                  </div>

                  <button 
                    disabled={formState === 'loading'}
                    className="w-full relative group overflow-hidden bg-brand-blue text-white py-5 rounded-2xl font-bold text-lg flex items-center justify-center gap-3 transition-all hover:shadow-2xl hover:shadow-brand-blue/20 hover:-translate-y-1 active:translate-y-0 active:scale-[0.98] disabled:opacity-70 disabled:cursor-not-allowed"
                  >
                    {formState === 'loading' ? (
                      <div className="flex items-center gap-3">
                        <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                        <span>Sending...</span>
                      </div>
                    ) : (
                      <>
                        <span className="relative z-10">Send message</span>
                        <Send className="w-5 h-5 relative z-10 group-hover:translate-x-1 group-hover:-translate-y-0.5 transition-transform" />
                        <div className="absolute inset-0 bg-gradient-to-r from-brand-blue-hover to-brand-blue opacity-0 group-hover:opacity-100 transition-opacity" />
                      </>
                    )}
                  </button>
                </motion.form>
              )}
            </AnimatePresence>

            {/* Alternative Contact */}
            <motion.div 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="mt-16 text-center"
            >
              <p className="text-text-secondary text-sm font-medium mb-2">Prefer to email directly?</p>
              <a 
                href="mailto:abdullatif.designsynapse@gmail.com" 
                className="text-brand-blue font-bold text-lg hover:underline underline-offset-4 decoration-brand-blue/30 transition-all flex items-center justify-center gap-2 group w-fit mx-auto"
              >
                <Mail className="w-5 h-5" />
                abdullatif.designsynapse@gmail.com
              </a>
            </motion.div>

            {/* Quick Trust Block */}
            <div className="mt-20 flex flex-wrap justify-center gap-x-8 gap-y-4 pt-10 border-t border-gray-100">
              <div className="flex items-center gap-2 text-[10px] font-black text-text-secondary/50 uppercase tracking-widest italic">
                <Clock className="w-3.5 h-3.5" />
                1 business day response
              </div>
              <div className="flex items-center gap-2 text-[10px] font-black text-text-secondary/50 uppercase tracking-widest italic">
                <ShieldCheck className="w-3.5 h-3.5" />
                No spam, ever
              </div>
              <div className="flex items-center gap-2 text-[10px] font-black text-text-secondary/50 uppercase tracking-widest italic">
                <CheckCircle2 className="w-3.5 h-3.5" />
                Message stays private
              </div>
            </div>
          </div>
        </section>

        {/* Section 5: CTA Redirection */}
        <section className="container-max px-6 md:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-[#EFF6FF] rounded-[3.5rem] p-12 lg:p-24 text-center border border-brand-blue/10 relative overflow-hidden"
          >
            <div className="relative z-10 max-w-3xl mx-auto">
              <h2 className="text-3xl lg:text-5xl font-bold text-text-primary tracking-tighter leading-tight mb-6">
                Want to talk it through instead?
              </h2>
              <p className="text-xl text-text-secondary mb-12 max-w-xl mx-auto">
                Book a free 30-minute call and get direct answers faster.
              </p>
              
              <a 
                href="https://calendly.com/abdullatif-designsynapse/30min"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex bg-brand-blue text-white px-10 py-5 rounded-2xl font-bold text-lg items-center justify-center gap-3 hover:translate-y-[-4px] active:translate-y-0 transition-all shadow-xl shadow-brand-blue/20"
              >
                Book a discovery call
                <Calendar className="w-5 h-5" />
              </a>
            </div>
            
            {/* Background elements */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-brand-blue/5 rounded-full blur-3xl pointer-events-none"></div>
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-brand-blue/5 rounded-full blur-3xl pointer-events-none"></div>
          </motion.div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
