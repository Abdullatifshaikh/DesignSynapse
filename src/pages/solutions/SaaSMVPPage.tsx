import SolutionPageTemplate from '../../components/SolutionPageTemplate';
import { Rocket, Target, Code, FileCheck, Check, Sparkles } from 'lucide-react';

export default function SaaSMVPPage() {
  return (
    <SolutionPageTemplate
      label="Solution 01"
      heroHeading="SaaS MVP Solution"
      heroSubheading="Turn your idea into a real SaaS product in 6 weeks"
      problemHeading="Timeline: 6 weeks — Starting from $10,000"
      problemBody={[
        "Built for founders who need more than just development.",
        "We help you research, design, and build a launch-ready MVP — with product strategy, UX, and engineering handled in one focused process."
      ]}
      solutionHeading="What you get"
      solutionBody={[
        "Production-ready product",
        "Clean and modern UI/UX",
        "Real working software, not just mockups",
        "Structured delivery with weekly progress",
        "Full code ownership after launch"
      ]}
      explanationBlock={{
        title: "Best for",
        description: "This solution is designed for high-growth potential startups that need to prove their value quickly and efficiently.",
        items: [
          { title: "Early-stage Founders", text: "Founders who need a technical partner to bring their vision to life.", icon: Target },
          { title: "Validated Ideas", text: "Founders who have already validated their core concept and are ready to build.", icon: Check },
          { title: "Pre-seed & Seed Teams", text: "Ready to scale and need a professional product to show investors.", icon: Rocket },
          { title: "Fundraising Prep", text: "Teams preparing for their next round of funding needing a solid product.", icon: FileCheck }
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
            whenToChoose: [
              "You need to raise capital or close initial partners",
              "You have a validated UX but no visual presence",
              "You want to test usability before full build"
            ],
            outcome: "A high-fidelity, interactive frontend that feels 100% real to users and investors."
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
            whenToChoose: [
              "You have a validated idea and want to launch fast",
              "You need a complete product with backend and integrations",
              "You want to handle real users and payments immediately"
            ],
            outcome: "A complete, production-ready SaaS product designed to scale to your first 1,000 users."
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
            whenToChoose: [
              "You're building something complex and need infinite scalability",
              "Your core value is a complex AI or data system",
              "You need a long-term technical foundation for a large team"
            ],
            outcome: "An enterprise-grade software system built with technical excellence and unmatched speed."
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
        { title: "This solution includes", icon: Sparkles, items: [
          "Product discovery & research",
          "UX flows and interface design",
          "Full-stack development",
          "Scalable product architecture",
          "Responsive SaaS dashboard UI",
          "Launch-ready MVP delivery"
        ] },
        { title: "Technical Excellence", icon: Code, items: [
          "Clean, type-safe React code",
          "Scalable database schema",
          "Comprehensive API docs",
          "Deployment & handoff kit"
        ] }
      ]}
      faqs={[
        { q: "Do I own the code?", a: "Yes, 100%. We hand over all source files, credentials, and assets upon completion." },
        { q: "What stack do you use?", a: "We prefer TypeScript, React/Next.js, and Tailwind for the frontend, with Node.js and Firebase/Supabase for the backend." },
        { q: "Can we start next week?", a: "Depending on our current capacity, we typically kick off within 7-10 days." },
        { q: "Do you offer maintenance?", a: "We provide 30 days of launch support. After that, we can discuss a monthly retainer or help you hire a dedicated dev." }
      ]}
      finalCTAHeading="Explore SaaS MVP Solution"
    />
  );
}
