import React, { useRef, useEffect } from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { 
  ArrowRight,
} from 'lucide-react';
import { projects } from '../data/projects';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

// Import all images from the casestudyrevamp-pages directory
const casestudyImages = import.meta.glob('../casestudyrevamp-pages/**/*.webp', { eager: true });

// Define the mapping from project slug to folder name
const projectFolderMapping: Record<string, string> = {
  'ai-agent': 'Ai_Agent_Automation_Builder_SAAS_UX_UI_Behance',
  'ai-agent-landing': 'AI_Agent_Landing_Page_UI_UX_Design__Behance',
  'therapy-app': 'AI_Powered_Mental_Therapy_App_UI_UX_Case_Study__Behance',
  'ship-tracking': 'AI_Ship_Tracking_Fleet_Management_Platform__Behance',
  'ai-travel': 'AI_Travel_Assistant_Mobile_App_UI_UX__Behance',
  'car-rental-saas': 'Car_Rental_SaaS_Landing_Page_UI_UX_Design__Behance',
  'docily': 'Docily_Telemedicine_App_UI_UX_Design__Behance',
  'fintro': 'FINTRO_Quick_Easy_Loans_Fintech_Website_Design__Behance',
  'fraizro': 'Fraizro_branding__Behance',
  'lumex': 'LumeX_AR_glasses_Website_UI_UX_case_study__Behance',
  'lumina-clinic': 'Lumina_Clinic_Brand_Identity_Behance',
  'melovian': 'Melovian_Music_App_UI_UX_Mobile_App_Branding_Behance',
  'nalixo': 'Nalixo_AI_Powered_Crypto_Investment_App_UI_UX_Design_Behance',
  'niore': 'Niore_Social_Ecommerce_Mobile_App_ThemeTags_Behance',
  'private-investment': 'Private_Investment_Club_App_Behance',
  'revoltise': 'Revoltise_Your_EV’s_Smartest_CoPilot_Behance',
  'smart-crypto-wallet': 'Smart_Crypto_Wallet_Landing_Page_Modern_UI_UX_Design_Behance',
  'studystream': 'StudyStream_Study_Mobile_App_Design_Behance',
  'marketing-agency': 'UI_UX_Design_for_Marketing_Agency_Website_Behance',
  'velvet-hr': 'Velvet_HR_Solutions_Brand_Identity_Behance',
  'vroom': 'Vroom_Car_sharing_Mobile_App_UX_UI_design_Behance',
  'white-dental': 'White_Dental_UX_UI_Premium_Dental_Clinic_Behance',
  'web-design-course': 'Web_Design_Course_Landing_Page_Behance',
};

export default function ProjectDetailPage() {
  const { slug } = useParams<{ slug: string }>();
  const project = projects.find(p => p.slug === slug);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'instant'
    });
  }, [slug]);

  if (!project) return <Navigate to="/work" replace />;

  const nextProject = projects[(projects.indexOf(project) + 1) % projects.length];

  const getProjectImages = () => {
    const folderName = projectFolderMapping[project.slug];
    
    if (folderName) {
      // Find all images belonging to this folder in our globbed results
      const localImages = Object.entries(casestudyImages)
        .filter(([path]) => path.includes(`/casestudyrevamp-pages/${folderName}/`))
        .sort(([pathA], [pathB]) => {
          // Sort by filename (1.webp, 2.webp, etc.)
          const nameA = pathA.split('/').pop()?.replace('.webp', '') || '';
          const nameB = pathB.split('/').pop()?.replace('.webp', '') || '';
          return parseInt(nameA) - parseInt(nameB);
        })
        .map(([_, module]: any) => module.default);

      if (localImages.length > 0) {
        return localImages;
      }
    }

    // Fallback logic for projects without local images yet
    return [project.heroImage];
  };

  const images = getProjectImages();

  return (
    <div className="min-h-screen bg-[#0a0a0a] selection:bg-brand-blue/20 selection:text-brand-blue" ref={containerRef}>
      <Navbar />

      <main className="font-sans">
        <div className="flex flex-col w-full" id="project-image-sequence">
          {images.map((img, index) => (
            <div key={index} className="w-full">
              <img
                src={img}
                alt={`case-study-${index + 1}`}
                draggable="false"
                onDragStart={(e) => e.preventDefault()}
                onMouseDown={(e) => e.preventDefault()}
                onContextMenu={(e) => e.preventDefault()}
                // inline style to ensure browsers (incl. Safari) respect the no-drag rule
                style={{
                  WebkitUserDrag: "none",
                  userSelect: "none",
                }}
                className="w-full h-auto object-cover select-none"
              />
            </div>
          ))}
        </div>

        {/* FINAL TRANSITION TO NEXT PROJECT - Full height dedicated section */}
        <section className="bg-black min-h-screen relative overflow-hidden group/next flex items-center justify-center" id="next-project">
           <div className="absolute inset-0 z-0 overflow-hidden">
              <img 
                src={nextProject.heroImage} 
                alt="" 
                draggable="false"
                className="w-full h-full object-cover opacity-20 transition-all duration-1000 group-hover/next:opacity-40 group-hover/next:scale-105 select-none" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black" />
           </div>

           <div className="container-max px-6 md:px-8 relative z-10 flex flex-col items-center text-center">
              <Link to={`/work/${nextProject.slug}`} className="block group">
                 <div className="font-mono text-[12px] font-bold uppercase tracking-[0.8em] text-white/40 mb-12 block transition-colors group-hover:text-brand-blue">
                   Up Next
                 </div>
                 <h2 className="font-display text-6xl md:text-[8rem] lg:text-[10rem] font-bold text-white tracking-tighter leading-none mb-16 transition-transform duration-700 group-hover:-translate-y-4">
                    {nextProject.name}
                 </h2>
                 <div className="flex flex-col items-center gap-6">
                   <div className="w-px h-24 bg-gradient-to-b from-brand-blue to-transparent transition-all duration-700 group-hover:h-32" />
                   <ArrowRight className="w-12 h-12 text-white/30 group-hover:text-brand-blue group-hover:translate-x-4 transition-all duration-500" />
                 </div>
              </Link>
           </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
