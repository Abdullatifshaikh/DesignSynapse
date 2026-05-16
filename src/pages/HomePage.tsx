import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import BackgroundDecoration from '../components/BackgroundDecoration';
import SocialProofStrip from '../components/SocialProofStrip';
import Problem from '../components/Problem';
import Outcomes from '../components/Outcomes';
import Solutions from '../components/Solutions';
import HowItWorks from '../components/HowItWorks';
import ProcessDetailed from '../components/ProcessDetailed';
import Deliverables from '../components/Deliverables';
import CTASection from '../components/CTASection';
import CaseStudies from '../components/CaseStudies';
import Pricing from '../components/Pricing';
import ObjectionHandling from '../components/ObjectionHandling';
import WhyChooseUs from '../components/WhyChooseUs';
import WhoFor from '../components/WhoFor';
import FAQ from '../components/FAQ';
import FounderNote from '../components/FounderNote';
import UrgencyBanner from '../components/UrgencyBanner';
import FinalCTA from '../components/FinalCTA';
import Footer from '../components/Footer';

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white selection:bg-brand-blue-light selection:text-brand-blue scroll-smooth">
      <BackgroundDecoration />
      <Navbar />
      <main className="relative z-10 overflow-hidden">
        <Hero />
        <SocialProofStrip />
        <Problem />
        <Outcomes />
        <Solutions />
        <CTASection 
          label="Ready to build?"
          heading="Let’s figure out the right solution for your product"
          subheading="Book a free discovery call and we’ll help you identify the best path forward."
          bgColor="bg-[#EFF6FF]"
          trustItems={['Free 30-minute call', 'No pressure', 'Clear next steps']}
        />
        <HowItWorks />
        <ProcessDetailed />
        <Deliverables />
        <CTASection 
          variant="card"
          heading="Ready to move from idea to execution?"
          subheading="We’ll help you map the right next step for your product."
          bgColor="bg-white"
          label=""
        />
        <CaseStudies />
        <Pricing />
        <ObjectionHandling />
        <WhyChooseUs />
        <WhoFor />
        <FAQ />
        <FounderNote />
        <UrgencyBanner />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  );
}
