import { motion } from 'motion/react';

export default function BackgroundDecoration() {
  return (
    <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
      {/* Layer 1: Multi-density Global Grid */}
      <div className="absolute inset-0 bg-grid-subtle opacity-[0.08]" />
      
      {/* Thicker Guide Lines (Layout Rulers) */}
      <div className="absolute inset-0 opacity-[0.03]">
        <div className="absolute left-[10%] top-0 w-px h-full bg-brand-blue" />
        <div className="absolute left-[90%] top-0 w-px h-full bg-brand-blue" />
        <div className="absolute left-1/2 top-0 w-px h-full bg-brand-blue" />
        <div className="absolute top-[20%] left-0 w-full h-px bg-brand-blue" />
        <div className="absolute top-[80%] left-0 w-full h-px bg-brand-blue" />
      </div>

      {/* Layer 2: Base Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-white via-white to-[#F8FAFC]" />
      
      {/* Layer 3: Radial Focus Glows */}
      {/* Hero Focus */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[80vh] bg-[radial-gradient(circle_at_center,rgba(37,99,235,0.05)_0%,transparent_70%)]" />
      
      {/* CTA Focus Areas (Estimated positions) */}
      <div className="absolute top-[60%] left-1/2 -translate-x-1/2 w-full h-[60vh] bg-[radial-gradient(circle_at_center,rgba(37,99,235,0.03)_0%,transparent_60%)]" />

      {/* Layer 4: Flow System (Animated Curves) */}
      <svg className="absolute inset-0 w-full h-full opacity-[0.07] text-brand-blue" fill="none">
        <motion.path
          d="M-100,300 C200,150 400,450 600,300 C800,150 1000,450 1300,300"
          stroke="currentColor"
          strokeWidth="1"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 1 }}
          transition={{ duration: 5, ease: "easeInOut" }}
        />
        <motion.path
          d="M-50,600 C150,500 350,700 550,600 S950,500 1250,600"
          stroke="currentColor"
          strokeWidth="0.5"
          strokeDasharray="4 4"
          animate={{ 
            strokeDashoffset: [0, -40] 
          }}
          transition={{ 
            duration: 10, 
            repeat: Infinity, 
            ease: "linear" 
          }}
        />
        <motion.path
          d="M1200,100 C1000,200 800,0 600,100 S200,0 -100,100"
          stroke="currentColor"
          strokeWidth="0.5"
          opacity="0.5"
          animate={{ x: [0, 50, 0] }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
        />
      </svg>

      {/* Layer 5: Node System (Pulsing Connections) */}
      <div className="absolute top-[40%] right-[10%] opacity-[0.1] text-brand-blue">
        <svg width="200" height="200" viewBox="0 0 200 200">
          <motion.circle 
            animate={{ r: [2, 4, 2], opacity: [0.5, 1, 0.5] }}
            transition={{ duration: 3, repeat: Infinity }}
            cx="50" cy="50" r="3" fill="currentColor" 
          />
          <motion.circle 
            animate={{ r: [2, 4, 2], opacity: [0.5, 1, 0.5] }}
            transition={{ duration: 3, repeat: Infinity, delay: 1 }}
            cx="150" cy="150" r="3" fill="currentColor" 
          />
          <line x1="50" y1="50" x2="150" y2="150" stroke="currentColor" strokeWidth="0.5" />
          
          {/* Moving Pulse Data */}
          <motion.circle
            animate={{ cx: [50, 150], cy: [50, 150], opacity: [0, 1, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
            r="2" fill="currentColor"
          />
        </svg>
      </div>

      {/* Layer 6: UI Fragments (Floating Outlines) */}
      <motion.div 
        animate={{ y: [0, -20, 0], rotate: [0, 2, 0] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-[15%] right-[5%] w-40 h-24 border border-brand-blue/10 rounded-xl bg-brand-blue/[0.02] flex flex-col p-3 gap-2"
      >
        <div className="w-1/2 h-1.5 bg-brand-blue/10 rounded-full" />
        <div className="w-full h-8 bg-brand-blue/5 rounded-md" />
        <div className="flex gap-2">
          <div className="w-8 h-4 bg-brand-blue/5 rounded" />
          <div className="w-8 h-4 bg-brand-blue/5 rounded" />
        </div>
      </motion.div>

      <motion.div 
        animate={{ y: [0, 20, 0], rotate: [0, -2, 0] }}
        transition={{ duration: 15, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        className="absolute bottom-[15%] left-[5%] w-32 h-32 border-2 border-dashed border-brand-blue/10 rounded-full flex items-center justify-center opacity-40"
      >
        <div className="w-16 h-16 border border-brand-blue/5 rounded-full" />
      </motion.div>

      {/* Blueprint Layout Shapes */}
      <div className="absolute top-[70%] left-[8%] opacity-[0.05] text-brand-blue">
        <svg width="120" height="120" viewBox="0 0 120 120">
           <rect x="10" y="10" width="100" height="60" stroke="currentColor" strokeWidth="1" strokeDasharray="4 2" />
           <line x1="10" y1="40" x2="110" y2="40" stroke="currentColor" strokeWidth="0.5" />
           <circle cx="30" cy="40" r="15" stroke="currentColor" strokeWidth="1" fill="none" />
        </svg>
      </div>

      {/* Layer 7: Detail Accents */}
      <div className="absolute top-10 left-10 opacity-[0.1] text-xs font-mono text-brand-blue tracking-tighter">
        01 / SYSTEM_LOADED
      </div>
      <div className="absolute bottom-10 right-10 opacity-[0.1] text-xs font-mono text-brand-blue tracking-tighter">
        SYNC // ACTIVE
      </div>
    </div>
  );
}
