import { Activity, Bot, Briefcase, Command, Cpu, Database, Globe, Layers, Layout, Monitor, Rocket, Shield, ShoppingCart, Sparkles, Target, Zap } from 'lucide-react';

export interface Project {
  slug: string;
  name: string;
  industry: string;
  solutionType: 'SaaS MVP' | 'Digital Launch' | 'AI Automation';
  description: string;
  longDescription: string;
  problem: string;
  strategy: string;
  outcome: string;
  thumbnail: string;
  heroImage: string;
  metrics: { label: string; value: string }[];
  tags: string[];
  tech: string[];
  timeline: string;
}

// Case Study Image Imports
import aiAgent1 from '../casestudyrevamp-pages/Ai_Agent_Automation_Builder_SAAS_UX_UI_Behance/1.webp';
import aiAgentLanding1 from '../casestudyrevamp-pages/AI_Agent_Landing_Page_UI_UX_Design__Behance/1.webp';
import therapyApp1 from '../casestudyrevamp-pages/AI_Powered_Mental_Therapy_App_UI_UX_Case_Study__Behance/1.webp';
import shipTracking1 from '../casestudyrevamp-pages/AI_Ship_Tracking_Fleet_Management_Platform__Behance/1.webp';
import aiTravel1 from '../casestudyrevamp-pages/AI_Travel_Assistant_Mobile_App_UI_UX__Behance/1.webp';
import carRental1 from '../casestudyrevamp-pages/Car_Rental_SaaS_Landing_Page_UI_UX_Design__Behance/1.webp';
import docily1 from '../casestudyrevamp-pages/Docily_Telemedicine_App_UI_UX_Design__Behance/1.webp';
import fintro1 from '../casestudyrevamp-pages/FINTRO_Quick_Easy_Loans_Fintech_Website_Design__Behance/1.webp';
import fraizro1 from '../casestudyrevamp-pages/Fraizro_branding__Behance/1.webp';
import lumex1 from '../casestudyrevamp-pages/LumeX_AR_glasses_Website_UI_UX_case_study__Behance/1.webp';
import lumina1 from '../casestudyrevamp-pages/Lumina_Clinic_Brand_Identity_Behance/1.webp';
import melovian1 from '../casestudyrevamp-pages/Melovian_Music_App_UI_UX_Mobile_App_Branding_Behance/1.webp';
import nalixo1 from '../casestudyrevamp-pages/Nalixo_AI_Powered_Crypto_Investment_App_UI_UX_Design_Behance/1.webp';
import niore1 from '../casestudyrevamp-pages/Niore_Social_Ecommerce_Mobile_App_ThemeTags_Behance/1.webp';
import privateInvest1 from '../casestudyrevamp-pages/Private_Investment_Club_App_Behance/1.webp';
import revoltise1 from '../casestudyrevamp-pages/Revoltise_Your_EV’s_Smartest_CoPilot_Behance/1.webp';
import cryptoWallet1 from '../casestudyrevamp-pages/Smart_Crypto_Wallet_Landing_Page_Modern_UI_UX_Design_Behance/1.webp';
import studyStream1 from '../casestudyrevamp-pages/StudyStream_Study_Mobile_App_Design_Behance/1.webp';
import marketingAgent1 from '../casestudyrevamp-pages/UI_UX_Design_for_Marketing_Agency_Website_Behance/1.webp';
import velvet1 from '../casestudyrevamp-pages/Velvet_HR_Solutions_Brand_Identity_Behance/1.webp';
import vroom8 from '../casestudyrevamp-pages/Vroom_Car_sharing_Mobile_App_UX_UI_design_Behance/8.webp';
import webCourse1 from '../casestudyrevamp-pages/Web_Design_Course_Landing_Page_Behance/1.webp';
import dental1 from '../casestudyrevamp-pages/White_Dental_UX_UI_Premium_Dental_Clinic_Behance/1.webp';

export const projects: Project[] = [
  {
    slug: 'ai-agent',
    name: 'AI Agent Builder',
    industry: 'SaaS / AI',
    solutionType: 'AI Automation',
    description: 'Automation builder platform for enterprise AI agents.',
    longDescription: 'A high-end SaaS platform designed for building and managing complex AI agent workflows. We focused on a minimal, high-contrast dark interface that emphasizes the "logic flow" of automation.',
    problem: 'Enterprise teams were struggling to visualize and debug asynchronous AI agent interactions across multiple platforms.',
    strategy: 'Implemented a node-centric design language with real-time state visualization and an "Apple-style" presentation of technical data.',
    outcome: 'Currently in private beta with several Fortune 500 automation teams reporting a 40% reduction in workflow design time.',
    thumbnail: aiAgent1,
    heroImage: aiAgent1,
    metrics: [
      { label: 'Time Saved', value: '40%' },
      { label: 'Complexity', value: '-60%' },
      { label: 'UX Rating', value: '5/5' }
    ],
    tags: ['AI', 'SaaS', 'Automation'],
    tech: ['Next.js', 'React Flow', 'OpenAI', 'Tailwind'],
    timeline: '8 Weeks'
  },
  {
    slug: 'white-dental',
    name: 'White Dental Clinic',
    industry: 'Healthcare',
    solutionType: 'Digital Launch',
    description: 'Premium dental clinic UX/UI and digital identity.',
    longDescription: 'White Dental Clinic required a digital presence that matched their high-end, clinical-yet-welcoming physical space. The project involved a complete UX revamp of the booking system and a clean, luxury aesthetic.',
    problem: 'Existing digital touchpoints felt disconnected from the premium physical experience, leading to high drop-offs in the online consultation funnel.',
    strategy: 'Leveraging clean typography, vast white space, and high-fidelity dental imagery to create a sense of trust and "surgical precision".',
    outcome: 'Booking conversion increased by 55% within the first month of the new identity launch.',
    thumbnail: dental1,
    heroImage: dental1,
    metrics: [
      { label: 'Conversion', value: '+55%' },
      { label: 'User Trust', value: '98%' },
      { label: 'Design Scale', value: 'Global' }
    ],
    tags: ['Healthcare', 'Premium', 'UX'],
    tech: ['Framer', 'React', 'Custom CMS'],
    timeline: '4 Weeks'
  },
  {
    slug: 'web-design-course',
    name: 'Web Design Masterclass',
    industry: 'Education',
    solutionType: 'Digital Launch',
    description: 'High-conversion landing page for design education.',
    longDescription: 'A high-energy, visually striking landing page built to convert aspiring designers into professional students. The design focuses on social proof, interactive curriculum previews, and a bold color palette.',
    problem: 'Traditional design courses suffered from low retention on landing pages due to dry, academic presentation.',
    strategy: 'Using a "magazine-style" layout with parallax effects and bold, oversized typography to drive engagement and excitement.',
    outcome: 'Generated $100k+ in pre-enrollment revenue in the first two weeks of the campaign.',
    thumbnail: webCourse1,
    heroImage: webCourse1,
    metrics: [
      { label: 'Revenue', value: '$100k+' },
      { label: 'Engagement', value: '45%' },
      { label: 'Bounce Rate', value: '-30%' }
    ],
    tags: ['EdTech', 'Landing Page', 'Branding'],
    tech: ['Next.js', 'GSAP', 'Stripe'],
    timeline: '3 Weeks'
  },
  {
    slug: 'vroom',
    name: 'Vroom Car Sharing',
    industry: 'Mobility',
    solutionType: 'SaaS MVP',
    description: 'Modern car sharing mobile app UX/UI design.',
    longDescription: 'Vroom is a car-sharing platform focused on short-term urban rental. The challenge was creating a friction-less mobile booking experience that felt secure and instantly usable on the street.',
    problem: 'Existing competitors had complicated key-pickup processes and confusing map interfaces.',
    strategy: 'Implemented a "One-Tap Unlock" interface and a map-driven discovery engine that prioritizes the nearest available vehicles with clear pricing.',
    outcome: 'Acquired 10k users in the first month of the pilot launch in Seattle.',
    thumbnail: vroom8,
    heroImage: vroom8,
    metrics: [
      { label: 'Users', value: '10k' },
      { label: 'Retained', value: '65%' },
      { label: 'Unlock Time', value: '<2s' }
    ],
    tags: ['Mobile', 'App Design', 'Mobility'],
    tech: ['React Native', 'Node.js', 'Mapbox'],
    timeline: '6 Weeks'
  },
  {
    slug: 'ai-agent-landing',
    name: 'AI Agent Landing Page',
    industry: 'AI / SaaS',
    solutionType: 'Digital Launch',
    description: 'High-conversion landing page for AI agents.',
    longDescription: 'A modern, high-conversion landing page designed to showcase the capabilities of AI agent platforms. Focuses on clear messaging and interactive demonstrations.',
    problem: 'SaaS companies struggling to explain the complex value proposition of autonomous agents to non-technical users.',
    strategy: 'Used visual metaphors and a "clean room" aesthetic to simplify complex technical concepts into human benefits.',
    outcome: 'Increased sign-up rates by 35% during the initial rollout phase.',
    thumbnail: aiAgentLanding1,
    heroImage: aiAgentLanding1,
    metrics: [
      { label: 'Conversion', value: '+35%' },
      { label: 'Bounce', value: '-20%' },
      { label: 'Load Time', value: '<1s' }
    ],
    tags: ['AI', 'Landing Page', 'SaaS'],
    tech: ['Next.js', 'Tailwind', 'Frammer Motion'],
    timeline: '3 Weeks'
  },
  {
    slug: 'therapy-app',
    name: 'AI Mental Therapy',
    industry: 'Healthcare / AI',
    solutionType: 'SaaS MVP',
    description: 'AI-powered mental health companion app.',
    longDescription: 'A secure, AI-driven mobile application providing immediate mental health support and therapy guidance. Designed with extreme empathy and data privacy in mind.',
    problem: 'Shortage of mental health professionals leading to long wait times for basic support.',
    strategy: 'Implemented a "safe space" UI with calming colors and a non-judgmental AI chat interface.',
    outcome: 'Successful pilot with 5,000 users showing improved mood scores across 75% of the cohort.',
    thumbnail: therapyApp1,
    heroImage: therapyApp1,
    metrics: [
      { label: 'User Mood', value: '+30%' },
      { label: 'Retention', value: '70%' },
      { label: 'Sessions', value: '15k+' }
    ],
    tags: ['HealthTech', 'AI', 'Mobile'],
    tech: ['React Native', 'OpenAI', 'HIPAA Cloud'],
    timeline: '10 Weeks'
  },
  {
    slug: 'ship-tracking',
    name: 'AI Ship Tracking',
    industry: 'Logistics',
    solutionType: 'AI Automation',
    description: 'Fleet management and predictive logistics platform.',
    longDescription: 'An enterprise-grade platform for tracking global fleet movements and predicting arrival times using satellite data and machine learning.',
    problem: 'Inaccurate ETA predictions leading to port congestion and increased operational costs.',
    strategy: 'Built a high-density map interface with real-time weather and traffic overlays.',
    outcome: 'Improved ETA accuracy by 48% for transatlantic shipping routes.',
    thumbnail: shipTracking1,
    heroImage: shipTracking1,
    metrics: [
      { label: 'ETA Accuracy', value: '+48%' },
      { label: 'Fuel Saved', value: '12%' },
      { label: 'Fleet Size', value: '500+' }
    ],
    tags: ['Logistics', 'Maps', 'Data'],
    tech: ['Python', 'Leaflet', 'Cloud Functions'],
    timeline: '12 Weeks'
  },
  {
    slug: 'ai-travel',
    name: 'AI Travel Assistant',
    industry: 'Travel',
    solutionType: 'SaaS MVP',
    description: 'Personalized travel planning using AI.',
    longDescription: 'A mobile-first travel assistant that creates hyper-personalized itineraries based on user preferences and budget.',
    problem: 'Travelers spending an average of 15 hours planning a single 7-day trip.',
    strategy: 'Developed a conversational discovery engine that integrates with flight and hotel APIs for instant booking.',
    outcome: 'Reduced trip planning time from 15 hours to 10 minutes.',
    thumbnail: aiTravel1,
    heroImage: aiTravel1,
    metrics: [
      { label: 'Plan Time', value: '-90%' },
      { label: 'User Growth', value: '25k' },
      { label: 'Booking Conv', value: '18%' }
    ],
    tags: ['Travel', 'AI', 'Mobile'],
    tech: ['React Native', 'Node.js', 'Amadeus API'],
    timeline: '6 Weeks'
  },
  {
    slug: 'car-rental-saas',
    name: 'Car Rental SaaS',
    industry: 'Automotive',
    solutionType: 'Digital Launch',
    description: 'Modern booking platform for premium car rentals.',
    longDescription: 'A white-label SaaS solution for independent car rental agencies to manage fleet and online bookings with a premium touch.',
    problem: 'Small agencies used clunky, legacy systems that didn\'t support mobile bookings or digital signatures.',
    strategy: 'Focused on high-quality visuals and a 3-step checkout process.',
    outcome: 'Average online revenue increase of 65% for participating agencies.',
    thumbnail: carRental1,
    heroImage: carRental1,
    metrics: [
      { label: 'Revenue', value: '+65%' },
      { label: 'Checkout Time', value: '2min' },
      { label: 'UX Score', value: '4.8/5' }
    ],
    tags: ['Automotive', 'SaaS', 'E-commerce'],
    tech: ['Next.js', 'Stripe', 'Prisma'],
    timeline: '5 Weeks'
  },
  {
    slug: 'docily',
    name: 'Docily Telemedicine',
    industry: 'Healthcare',
    solutionType: 'SaaS MVP',
    description: 'Patient-doctor video consultation platform.',
    longDescription: 'A streamlined telemedicine app that focuses on simplicity for elderly patients while providing robust diagnostic tools for doctors.',
    problem: 'Existing platforms were too complex for aging demographics, leading to high abandonment rates.',
    strategy: 'Implemented "One-Button Join" and large-format UI elements for accessibility.',
    outcome: 'Achieved a 92% successful consultation rate for users over 65.',
    thumbnail: docily1,
    heroImage: docily1,
    metrics: [
      { label: 'Succ. Con.', value: '92%' },
      { label: 'Wait Time', value: '<5min' },
      { label: 'Accessibility', value: 'AA' }
    ],
    tags: ['Health', 'App Design', 'Accessibility'],
    tech: ['React', 'WebRTC', 'Supabase'],
    timeline: '8 Weeks'
  },
  {
    slug: 'fintro',
    name: 'FINTRO Loans',
    industry: 'FinTech',
    solutionType: 'Digital Launch',
    description: 'Fast and easy loan application website.',
    longDescription: 'A high-converting lending platform that uses AI to pre-approve personal loans in under 60 seconds.',
    problem: 'Traditional loan applications were paper-heavy and took days for initial feedback.',
    strategy: 'Built a gamified application funnel that reduces user friction and increases trust.',
    outcome: 'Processed over $50M in loan applications in the first 6 months.',
    thumbnail: fintro1,
    heroImage: fintro1,
    metrics: [
      { label: 'App Value', value: '$50M+' },
      { label: 'Approval Time', value: '45s' },
      { label: 'User Growth', value: '100%' }
    ],
    tags: ['FinTech', 'Landing Page', 'AI'],
    tech: ['Next.js', 'OpenAI', 'Plaid'],
    timeline: '4 Weeks'
  },
  {
    slug: 'fraizro',
    name: 'Fraizro Branding',
    industry: 'Creative',
    solutionType: 'Digital Launch',
    description: 'Visual identity for a modern design studio.',
    longDescription: 'A complete branding overhaul for Fraizro, focusing on a brutalist aesthetic that communicates raw creativity and technical precision.',
    problem: 'The studio\'s previous identity felt dated and failed to attract top-tier tech clients.',
    strategy: 'Developed a bold, typography-first identity with a custom-engineered color palette.',
    outcome: 'Secured three Fortune 500 design contracts within 3 months of the rebrand.',
    thumbnail: fraizro1,
    heroImage: fraizro1,
    metrics: [
      { label: 'Big Clients', value: '3' },
      { label: 'Brand Recall', value: '85%' },
      { label: 'Inquiries', value: '+120%' }
    ],
    tags: ['Branding', 'Directing', 'Creative'],
    tech: ['Illustrator', 'Framer', 'WebGL'],
    timeline: '4 Weeks'
  },
  {
    slug: 'lumex',
    name: 'LumeX AR Glasses',
    industry: 'Hardware / Tech',
    solutionType: 'Digital Launch',
    description: 'Immersive product site for AR hardware.',
    longDescription: 'A cinematic product landing page for the LumeX AR glasses, utilizing scroll-triggered animations and 3D embeds.',
    problem: 'Static images couldn\'t communicate the immersive nature of augmented reality.',
    strategy: 'Implemented "Scrollscape" technology to allow users to experience AR light-fields directly through the browser.',
    outcome: 'Sold out first batch of pre-orders within 12 hours of site launch.',
    thumbnail: lumex1,
    heroImage: lumex1,
    metrics: [
      { label: 'Pre-orders', value: 'Sold Out' },
      { label: 'Time on Page', value: '4m' },
      { label: 'Interaction', value: '95%' }
    ],
    tags: ['Hardware', 'AR', 'Landing Page'],
    tech: ['Three.js', 'GSAP', 'Next.js'],
    timeline: '6 Weeks'
  },
  {
    slug: 'lumina-clinic',
    name: 'Lumina Clinic',
    industry: 'Healthcare',
    solutionType: 'Digital Launch',
    description: 'Holistic clinical brand and identity.',
    longDescription: 'A complete clinical identity system that balances medical authority with wellness-focused accessibility.',
    problem: 'Local clinics often feel sterile and intimidating, creating patient anxiety.',
    strategy: 'Used organic shapes and a "healing" color palette across all digital and physical touchpoints.',
    outcome: 'Patient satisfaction scores rose by 30% post-implementation.',
    thumbnail: lumina1,
    heroImage: lumina1,
    metrics: [
      { label: 'Satisfaction', value: '+30%' },
      { label: 'New Patients', value: '+25%' },
      { label: 'Loyalty', value: '90%' }
    ],
    tags: ['Health', 'Branding', 'Creative'],
    tech: ['Figma', 'React', 'Sanity'],
    timeline: '5 Weeks'
  },
  {
    slug: 'melovian',
    name: 'Melovian Music App',
    industry: 'Entertainment',
    solutionType: 'SaaS MVP',
    description: 'High-fidelity music streaming mobile app.',
    longDescription: 'A music app designed for audiophiles, focusing on lossless audio and hyper-personalized discovery algorithms.',
    problem: 'Mainstream apps prioritize low-bandwidth files over audio quality, alienating serious listeners.',
    strategy: 'Built a custom audio engine and a "vinyl-style" visual experience.',
    outcome: 'Reached 100k active listeners within 4 months of the beta launch.',
    thumbnail: melovian1,
    heroImage: melovian1,
    metrics: [
      { label: 'Listeners', value: '100k' },
      { label: 'Avg Listen', value: '45m/d' },
      { label: 'High Fidelity', value: '100%' }
    ],
    tags: ['Music', 'Mobile', 'App Design'],
    tech: ['React Native', 'Swift', 'Redux'],
    timeline: '8 Weeks'
  },
  {
    slug: 'nalixo',
    name: 'Nalixo Crypto',
    industry: 'FinTech',
    solutionType: 'SaaS MVP',
    description: 'AI-powered crypto investment dashboard.',
    longDescription: 'A web-based platform that uses sentiment analysis and market data to provide real-time crypto investment insights.',
    problem: 'Retail investors are often overwhelmed by market volatility and news noise.',
    strategy: 'Implemented a "Signal vs Noise" score and automated risk-management alerts.',
    outcome: 'Users reported a 15% increase in profitable trades using the AI signals.',
    thumbnail: nalixo1,
    heroImage: nalixo1,
    metrics: [
      { label: 'Profitable Trade', value: '+15%' },
      { label: 'Signals/Day', value: '100+' },
      { label: 'App Value', value: '$10M+' }
    ],
    tags: ['Crypto', 'AI', 'FinTech'],
    tech: ['Next.js', 'Python', 'Web3.js'],
    timeline: '6 Weeks'
  },
  {
    slug: 'niore',
    name: 'Niore Social E-comm',
    industry: 'E-commerce',
    solutionType: 'SaaS MVP',
    description: 'Socially integrated e-commerce mobile app.',
    longDescription: 'A mobile marketplace that integrates social feeds with vertical shopping experiences.',
    problem: 'Standard shopping apps feel transactional and lack social engagement.',
    strategy: 'Created a "Live Feed" shopping experience where influencers can host real-time drops.',
    outcome: 'Increased repeat purchases by 40% compared to traditional models.',
    thumbnail: niore1,
    heroImage: niore1,
    metrics: [
      { label: 'Repeat Purchase', value: '+40%' },
      { label: 'Social Share', value: '25%' },
      { label: 'User Growth', value: '50k' }
    ],
    tags: ['E-commerce', 'Social', 'Mobile'],
    tech: ['React Native', 'Node.js', 'MongoDB'],
    timeline: '7 Weeks'
  },
  {
    slug: 'private-investment',
    name: 'Private Investment Club',
    industry: 'FinTech',
    solutionType: 'SaaS MVP',
    description: 'Exclusive investment platform for private high-net-worth clubs.',
    longDescription: 'A secure mobile app for private investment groups to manage deal flows and collective portfolios.',
    problem: 'High-net-worth clubs were relying on insecure WhatsApp groups and spreadsheets for deal management.',
    strategy: 'Focused on military-grade encryption and an "executive" dark interface.',
    outcome: 'Currently managing over $500M in collective club assets.',
    thumbnail: privateInvest1,
    heroImage: privateInvest1,
    metrics: [
      { label: 'Assets Managed', value: '$500M+' },
      { label: 'Deal Close', value: '-20%' },
      { label: 'App Rating', value: '5/5' }
    ],
    tags: ['FinTech', 'Security', 'Investment'],
    tech: ['Flutter', 'Rust', 'PostgreSQL'],
    timeline: '10 Weeks'
  },
  {
    slug: 'revoltise',
    name: 'Revoltise EV CoPilot',
    industry: 'Automotive / AI',
    solutionType: 'SaaS MVP',
    description: 'Smart companion for electric vehicle management.',
    longDescription: 'An AI-powered app that tracks EV charging cycles, battery health, and suggests optimized routes based on charger availability.',
    problem: 'Range anxiety remains the top barrier for EV adoption among long-distance commuters.',
    strategy: 'Developed a predictive "Range Guardian" engine and a minimal, high-contrast dashboard.',
    outcome: 'Users reported a 60% reduction in range-related stress during long-haul trips.',
    thumbnail: revoltise1,
    heroImage: revoltise1,
    metrics: [
      { label: 'Stress Red.', value: '60%' },
      { label: 'Charging Eff.', value: '+20%' },
      { label: 'Active Users', value: '15k' }
    ],
    tags: ['Automotive', 'EV', 'AI'],
    tech: ['React Native', 'Tesla API', 'Python'],
    timeline: '6 Weeks'
  },
  {
    slug: 'smart-crypto-wallet',
    name: 'Smart Crypto Wallet',
    industry: 'Crypto / FinTech',
    solutionType: 'Digital Launch',
    description: 'Modern landing page for a next-gen crypto wallet.',
    longDescription: 'A high-impact landing page featuring 3D visuals of hardware assets and detailed security breakdowns.',
    problem: 'Crypto wallets were struggling with trust and clear messaging about seed-phrase security.',
    strategy: 'Used interactive security diagrams and social proof from security researchers.',
    outcome: 'Increased waitlist signups by 200% within the first week.',
    thumbnail: cryptoWallet1,
    heroImage: cryptoWallet1,
    metrics: [
      { label: 'Waitlist', value: '+200%' },
      { label: 'Engagement', value: '40%' },
      { label: 'Trust Rank', value: 'Top 5' }
    ],
    tags: ['Crypto', 'FinTech', 'Landing Page'],
    tech: ['Next.js', 'WebGL', 'Spline'],
    timeline: '4 Weeks'
  },
  {
    slug: 'studystream',
    name: 'StudyStream App',
    industry: 'Education',
    solutionType: 'SaaS MVP',
    description: 'Collaborative study groups on mobile.',
    longDescription: 'A mobile app that facilitates focus-based study sessions with peers globally, utilizing gamification to boost focus.',
    problem: 'Remote learning has led to increased isolation and decreased focus among students.',
    strategy: 'Implemented "Focus Together" rooms and a virtual rewards system for study milestones.',
    outcome: 'Average user study time increased by 35% compared to solo studying.',
    thumbnail: studyStream1,
    heroImage: studyStream1,
    metrics: [
      { label: 'Study Time', value: '+35%' },
      { label: 'User Count', value: '250k' },
      { label: 'Focus Score', value: '4.7/5' }
    ],
    tags: ['EdTech', 'Social', 'Mobile'],
    tech: ['React Native', 'Socket.io', 'Node.js'],
    timeline: '8 Weeks'
  },
  {
    slug: 'marketing-agency',
    name: 'Marketing Agency Site',
    industry: 'Creative Services',
    solutionType: 'Digital Launch',
    description: 'High-end portfolio site for a global marketing agency.',
    longDescription: 'A bold, immersive showcase for an agency that works with world-class tech and lifestyle brands.',
    problem: 'The agency\'s case studies were buried under poor UX, preventing them from showing their full impact.',
    strategy: 'Focused on "Big Image" storytelling and dynamic transitions between case studies.',
    outcome: 'Increased agency leads by 150% in the first quarter post-launch.',
    thumbnail: marketingAgent1,
    heroImage: marketingAgent1,
    metrics: [
      { label: 'Leads', value: '+150%' },
      { label: 'Brand Power', value: '98%' },
      { label: 'Global Reach', value: '15 Countries' }
    ],
    tags: ['Agency', 'Portfolio', 'Branding'],
    tech: ['Next.js', 'Framer', 'Prismic'],
    timeline: '6 Weeks'
  },
  {
    slug: 'velvet-hr',
    name: 'Velvet HR Solutions',
    industry: 'HR Tech',
    solutionType: 'Digital Launch',
    description: 'Premium branding and platform for HR consultancy.',
    longDescription: 'A complete branding and digital presence for a high-end HR consultancy focusing on executive search.',
    problem: 'HR firms often feel corporate and cold, making them unapproachable for top talent.',
    strategy: 'Used a "luxury concierge" approach to the visual language and user experience.',
    outcome: 'Sourced 15 C-suite placements within the first 6 months using the new portal.',
    thumbnail: velvet1,
    heroImage: velvet1,
    metrics: [
      { label: 'C-Suite Plac.', value: '15' },
      { label: 'App Value', value: '$20M+' },
      { label: 'Talent Trust', value: '95%' }
    ],
    tags: ['HR Tech', 'Branding', 'Portal'],
    tech: ['React', 'D3.js', 'Strapi'],
    timeline: '8 Weeks'
  }
];
