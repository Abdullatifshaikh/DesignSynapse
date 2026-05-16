import { motion } from 'motion/react';
import { Layout, CheckCircle, BarChart2, Users } from 'lucide-react';

export default function ProductShowcase() {
  return (
    <div className="relative w-full h-[500px] flex items-center justify-center">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-brand-blue/10 rounded-full blur-[100px] -z-10" />

      {/* Main UI Panel (The "Dashboard") */}
      <motion.div
        initial={{ opacity: 0, y: 40, rotateX: 10 }}
        animate={{ opacity: 1, y: 0, rotateX: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="relative w-[380px] bg-white border border-border-subtle rounded-2xl shadow-2xl p-6 z-20"
      >
        <div className="flex items-center justify-between mb-6">
          <div className="flex gap-1.5">
            <div className="w-2 h-2 rounded-full bg-red-400/20" />
            <div className="w-2 h-2 rounded-full bg-amber-400/20" />
            <div className="w-2 h-2 rounded-full bg-green-400/20" />
          </div>
          <div className="w-24 h-2 bg-surface rounded-full" />
        </div>

        <div className="space-y-4">
          <div className="h-4 w-3/4 bg-surface rounded-md animate-pulse" />
          <div className="grid grid-cols-2 gap-3">
            <div className="h-20 bg-brand-blue/5 rounded-xl border border-brand-blue/10 flex flex-col items-center justify-center gap-2">
              <BarChart2 className="w-5 h-5 text-brand-blue" />
              <div className="h-2 w-12 bg-brand-blue/20 rounded-full" />
            </div>
            <div className="h-20 bg-surface rounded-xl border border-border-subtle flex flex-col items-center justify-center gap-2">
              <Users className="w-5 h-5 text-text-secondary" />
              <div className="h-2 w-12 bg-text-secondary/10 rounded-full" />
            </div>
          </div>
          <div className="space-y-2">
            {[1, 2, 3].map((i) => (
              <div key={i} className="flex items-center gap-3 py-2 border-b border-border-subtle last:border-0">
                <div className="w-6 h-6 rounded-md bg-surface" />
                <div className="flex-grow space-y-1.5">
                  <div className="h-2 w-1/2 bg-surface rounded-full" />
                  <div className="h-1.5 w-1/4 bg-surface/50 rounded-full" />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Morphing Overlay (Wireframe Effect) */}
        <motion.div 
          initial={{ opacity: 0.15 }}
          animate={{ opacity: 0 }}
          transition={{ duration: 2, delay: 1, repeat: Infinity, repeatType: "reverse" }}
          className="absolute inset-0 bg-white/20 backdrop-blur-[1px] pointer-events-none rounded-2xl border-2 border-brand-blue/10 flex items-center justify-center overflow-hidden"
        >
          <div className="grid grid-cols-4 grid-rows-4 gap-4 w-full h-full p-4 opacity-30">
             {Array.from({ length: 16 }).map((_, i) => (
               <div key={i} className="border border-brand-blue rounded-sm" />
             ))}
          </div>
        </motion.div>
      </motion.div>

      {/* Floating Elements Around It */}
      <motion.div
        animate={{ y: [0, -10, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-10 -right-4 bg-white p-4 border border-border-subtle rounded-xl shadow-xl z-30 flex items-center gap-3"
      >
        <div className="w-8 h-8 bg-green-50 text-green-600 rounded-lg flex items-center justify-center">
          <CheckCircle className="w-5 h-5" />
        </div>
        <div className="space-y-1">
          <div className="text-[10px] font-bold text-text-secondary uppercase tracking-widest">Status</div>
          <div className="text-xs font-bold text-text-primary">Feature Deployed</div>
        </div>
      </motion.div>

      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        className="absolute bottom-16 -left-12 bg-white p-4 border border-border-subtle rounded-xl shadow-xl z-10 flex items-center gap-3"
      >
         <div className="w-8 h-8 bg-brand-blue/10 text-brand-blue rounded-lg flex items-center justify-center">
          <Layout className="w-5 h-5" />
        </div>
        <div className="space-y-1">
          <div className="text-[10px] font-bold text-text-secondary uppercase tracking-widest">Component</div>
          <div className="text-xs font-bold text-text-primary">Dashboard.tsx</div>
        </div>
      </motion.div>

      {/* Small Decorative Pulses */}
      <motion.div 
        animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.6, 0.3] }}
        transition={{ duration: 3, repeat: Infinity }}
        className="absolute top-1/4 left-1/4 w-2 h-2 bg-brand-blue rounded-full blur-[2px]"
      />
      <motion.div 
        animate={{ scale: [1, 1.4, 1], opacity: [0.2, 0.5, 0.2] }}
        transition={{ duration: 4, repeat: Infinity, delay: 1.5 }}
        className="absolute bottom-1/3 right-1/4 w-3 h-3 bg-brand-blue rounded-full blur-[2px]"
      />
    </div>
  );
}
