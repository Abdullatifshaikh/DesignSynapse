import SolutionPageTemplate from '../../components/SolutionPageTemplate';
import { Rocket, Target, Code, FileCheck } from 'lucide-react';

export default function SaaSMVPPage() {
  return (
    <SolutionPageTemplate
      label="Service 01"
      heroHeading="Build your SaaS product in 6 weeks."
      heroSubheading="For founders who want to move fast and get a real product in users’ hands — not just designs."
      problemHeading="The 'Agile' Trap: Months of meetings, zero execution."
      problemBody={[
        "Most founders end up stuck in a cycle of endless iterations, shifting priorities, and developers who over-index on infrastructure before writing a single user feature.",
        "Weeks turn into months. The budget evaporates. And you still don't have a product for customers to actually pay for.",
        "You don't need 'agile' management. You need a structured studio that delivers results on day one."
      ]}
      solutionHeading="A battle-tested engine for MVP delivery."
      solutionBody={[
        "We've combined product design and engineering into a single high-velocity workflow. No handoff friction. No 'lost in translation' moments.",
        "We build with production-ready tools from the start, ensuring your MVP can scale to its first 10,000 users without a total rewrite.",
        "Everything from database schema to UI interactions is designed with the end goal in mind: launching a product people love."
      ]}
      explanationBlock={{
        title: "From 'Maybe' to Market-Ready.",
        description: "Building an MVP is not about building every feature. It's about building the right core that proves your value and attracts your first 1,000 users. We combine elite engineering with product strategy to ensure you don't just deliver code, you build a business.",
        items: [
          { title: "Rapid Development", text: "We use a modular architecture that allows us to deliver a full SaaS frontend and backend in 6 weeks.", icon: Rocket },
          { title: "Strategic Scoping", text: "We help you cut the noise and focus on the 'Killer Feature' that defines your product.", icon: Target },
          { title: "Production Grade", text: "Clean, type-safe code that can scale. No 'throwaway' MVPs here.", icon: Code },
          { title: "Seamless Handoff", text: "100% code ownership and comprehensive documentation from day one.", icon: FileCheck }
        ]
      }}
      packageComparison={{
        title: "Picks the right way to build this",
        description: "Not every project needs the same level of build. Here's how to choose the right package based on your stage and goals.",
        headers: ["Starter", "Growth", "Advanced"],
        rows: [
          { feature: "Best for", values: ["Validation", "Scaling", "Enterprise"] },
          { feature: "Timeline", values: ["6 Weeks", "8 Weeks", "10+ Weeks"], isHighlight: true },
          { feature: "Product Scope", values: ["1 Core Workflow", "Full App Cycle", "Complex Systems"] },
          { feature: "Design Depth", values: ["Clean UI", "Full Design System", "Custom Brand Kit"] },
          { feature: "Backend Setup", values: [true, true, true] },
          { feature: "3rd Party APIs", values: ["Basic", "Advanced", "Unlimited"] },
          { feature: "Admin Panel", values: [false, "Basic", "Advanced"] },
          { feature: "Scalability", values: ["Seed Ready", "Series A Ready", "Enterprise Ready"] }
        ]
      }}
      packages={[
        {
          name: "Starter MVP",
          price: "$10,000",
          timeline: "6 weeks",
          badge: "Entry",
          stats: ["Single core workflow", "Clean UI Design", "Frontend Build"],
          bestFor: "First-time founders with a simple, validated concept.",
          included: ["Product Strategy", "High-fidelity UI", "Responsive Frontend", "Basic Database Setup"],
          notIncluded: ["Admin Dashboard", "Complex API Integrations", "Advanced Analytics"],
          pitch: "The fastest way to go from idea to reality.",
          selectionGuide: {
            whenToChoose: ["Simple concept", "Validation phase", "Tight budget"],
            outcome: "PoC ready for user testing"
          }
        },
        {
          name: "Growth MVP",
          price: "$15,000",
          timeline: "8 weeks",
          badge: "Most Popular",
          stats: ["Full Product Design", "Frontend + Backend", "Auth & Integrations"],
          bestFor: "Seed-stage startups ready for a full production launch.",
          included: ["Full Product Strategy", "Design System", "Full-stack Build", "Auth & Databases", "3rd Party Integrations"],
          notIncluded: ["Mobile App (iOS/Android)", "Custom AI Models"],
          pitch: "Everything you need to scale your first 1,000 users.",
          selectionGuide: {
            whenToChoose: ["Post-validation", "Investor ready", "Full launch"],
            outcome: "Market-ready production app"
          }
        },
        {
          name: "Advanced MVP",
          price: "$20,000+",
          timeline: "10 weeks+",
          badge: "Premium",
          stats: ["Complex Features", "Admin Dashboards", "Scalability Setup"],
          bestFor: "Enterprise or complex SaaS projects requiring heavy logic.",
          included: ["Complex Data Architecture", "Admin/Internal Dashboards", "Advanced Analytics", "Performance Optimization"],
          notIncluded: ["Indefinite Maintenance"],
          pitch: "For when complexity is your competitive edge.",
          selectionGuide: {
            whenToChoose: ["Complex systems", "Scale critical", "High security needs"],
            outcome: "Enterprise-grade architecture"
          }
        }
      ]}
      process={[
        { title: "Strategic Scoping", explanation: "We trim the fat. We focus on the one feature that makes your product worth using.", output: "Feature Roadmap" },
        { title: "High-Fidelity Design", explanation: "We design every screen, state, and interaction in Figma for your approval.", output: "Interactive Prototype" },
        { title: "Engineering Sprint", explanation: "We build with a modern stack (Next.js, Tailwind, Supabase/Firebase) for speed and scale.", output: "Production Build" },
        { title: "Launch & Handoff", explanation: "We deploy to your infrastructure and hand over 100% of the code and credentials.", output: "Code Ownership" }
      ]}
      deliverables={[
        { title: "Product Strategy", icon: Target, items: ["Feature backlog", "User personas", "Growth roadmap"] },
        { title: "UI/UX Design", icon: Rocket, items: ["Figma source", "Design system", "Assets"] },
        { title: "Development", icon: Code, items: ["Clean React code", "API docs", "DB Schema"] },
        { title: "Handoff", icon: FileCheck, items: ["Documentation", "Deployment kit", "Final walk-through"] }
      ]}
      faqs={[
        { q: "Do I own the code?", a: "Yes, 100%. We hand over all source files, credentials, and assets upon completion." },
        { q: "What stack do you use?", a: "We prefer TypeScript, React/Next.js, and Tailwind for the frontend, with Node.js and Firebase/Supabase for the backend." },
        { q: "Can we start next week?", a: "Depending on our current capacity, we typically kick off within 7-10 days." },
        { q: "Do you offer maintenance?", a: "We provide 30 days of launch support. After that, we can discuss a monthly retainer or help you hire a dedicated dev." }
      ]}
      finalCTAHeading="Ready to build your SaaS product?"
    />
  );
}
