import { motion, useScroll, useTransform, useSpring } from 'motion/react';
import { ArrowUpRight, ArrowRight } from 'lucide-react';
import React, { useRef } from 'react';
import { Link } from 'react-router-dom';

import { projects } from '../data/projects';

// Simplified rows for available projects
const row1 = projects.map(p => ({
  title: p.name,
  category: p.industry,
  result: p.solutionType,
  image: p.thumbnail,
  slug: p.slug
}));

const row2 = [...projects].reverse().map(p => ({
  title: p.name,
  category: p.industry,
  result: p.solutionType,
  image: p.thumbnail,
  slug: p.slug
}));

const row3 = [...projects, ...projects].map(p => ({
  title: p.name,
  category: p.industry,
  result: p.solutionType,
  image: p.thumbnail,
  slug: p.slug
}));

interface CaseStudyTileProps {
  project: any;
  key?: string | number;
  depth?: 'near' | 'mid' | 'far';
}

function CaseStudyTile({ project, depth = 'mid' }: CaseStudyTileProps) {
  const depthStyles = {
    near: 'scale-100 opacity-100',
    mid: 'scale-[0.98] opacity-80',
    far: 'scale-[0.96] opacity-60'
  };

  return (
    <motion.div
      whileHover={{ scale: 1.02, zIndex: 40 }}
      transition={{ duration: 0.4, ease: [0.23, 1, 0.32, 1] }}
      className={`aspect-video h-[120px] md:h-[160px] rounded-xl md:rounded-2xl overflow-hidden relative group cursor-pointer border border-border-subtle shadow-lg flex-shrink-0 bg-surface/50 transition-all duration-500 ${depthStyles[depth]}`}
    >
      <Link to={`/work/${project.slug}`} className="block h-full w-full">
        <img 
          src={project.image} 
          alt={project.title}
          className="w-full h-full object-cover transition-transform duration-700"
        />
        
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-all duration-300 flex flex-col justify-end p-4">
          <div className="transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
            <p className="text-[8px] font-black uppercase tracking-[0.2em] text-brand-blue mb-1">
              {project.category}
            </p>
            <h3 className="text-sm font-bold text-white tracking-tight">
              {project.title}
            </h3>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}

export default function CaseStudies() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const x1 = useTransform(scrollYProgress, [0, 1], [-40, 40]);
  const x2 = useTransform(scrollYProgress, [0, 1], [40, -40]);
  const x3 = useTransform(scrollYProgress, [0, 1], [-20, 20]);
  
  const springX1 = useSpring(x1, { stiffness: 15, damping: 30 });
  const springX2 = useSpring(x2, { stiffness: 15, damping: 30 });
  const springX3 = useSpring(x3, { stiffness: 15, damping: 30 });

  return (
    <section id="work" ref={containerRef} className="py-24 md:py-40 bg-white relative overflow-hidden min-h-[850px] flex flex-col justify-center border-y border-border-subtle/30">
      {/* Background Decor */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.03]" style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3%3Cfilter id='noiseFilter'%3%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3%3C/filter%3%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3%3C/svg%3")` }} />

      <div className="container-max relative z-30 mb-20">
        <div className="flex items-center justify-between">
          <motion.div
            initial={{ opacity: 0, x: -10 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <label className="text-[8px] font-black uppercase tracking-[0.4em] text-brand-blue mb-1 block">Case Studies</label>
            <h2 className="text-xl md:text-3xl lg:text-4xl font-bold text-text-primary tracking-tight">
              Recent Case Studies
            </h2>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 10 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <Link to="/work" className="text-[10px] md:text-[12px] font-black uppercase tracking-widest text-text-secondary hover:text-brand-blue flex items-center gap-2 group transition-colors">
              Full Archive <ArrowRight className="w-3 h-3 md:w-4 md:h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>
        </div>
      </div>

      {/* Compact Slide Strip */}
      <div className="relative z-10 overflow-hidden py-12">
        <div className="rotate-[-3deg] scale-[1.05] origin-center translate-y-4">
          <div className="flex flex-col gap-4 md:gap-6 relative">
            {/* Row 1 */}
            <motion.div 
              style={{ x: springX1 }}
              className="flex gap-4 md:gap-6 whitespace-nowrap px-10"
            >
              {[...row1, ...row1].map((project, i) => (
                <CaseStudyTile key={`r1-${i}`} project={project} depth="far" />
              ))}
            </motion.div>

            {/* Row 2 */}
            <motion.div 
              style={{ x: springX2 }}
              className="flex gap-4 md:gap-6 whitespace-nowrap -ml-32 px-10"
            >
              {[...row2, ...row2].map((project, i) => (
                <CaseStudyTile key={`r2-${i}`} project={project} depth="near" />
              ))}
            </motion.div>

            {/* Row 3 */}
            <motion.div 
              style={{ x: springX3 }}
              className="flex gap-4 md:gap-6 whitespace-nowrap px-10"
            >
              {[...row3, ...row3].map((project, i) => (
                <CaseStudyTile key={`r3-${i}`} project={project} depth="mid" />
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
