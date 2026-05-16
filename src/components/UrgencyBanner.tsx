import { motion } from 'motion/react';
import { Calendar } from 'lucide-react';

export default function UrgencyBanner() {
  return (
    <div className="bg-brand-blue py-6 px-6">
      <div className="container-max flex flex-col md:flex-row items-center justify-between gap-4 text-center md:text-left">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center text-white">
            <Calendar className="w-5 h-5" />
          </div>
          <div>
            <p className="text-white font-bold text-sm tracking-tight">Availability is limited.</p>
            <p className="text-white/80 text-xs font-medium">We only take on 3–4 high-impact projects per month to ensure quality.</p>
          </div>
        </div>
        
        <button className="bg-white text-brand-blue px-6 py-2 rounded-lg text-sm font-bold hover:shadow-xl transition-all hover:-translate-y-0.5 active:translate-y-0 shadow-sm whitespace-nowrap">
          Book your spot →
        </button>
      </div>
    </div>
  );
}
