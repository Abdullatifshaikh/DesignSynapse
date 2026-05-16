import SolutionPageTemplate from '../../components/SolutionPageTemplate';
import { Layout, Palette, Ship, FileCheck, Rocket, Target, Check, Sparkles } from 'lucide-react';

export default function DigitalLaunchpadPage() {
  return (
    <SolutionPageTemplate
      label="Solution 02"
      heroHeading="Digital Launch Solution"
      heroSubheading="Build your scalable digital growth foundation"
      problemHeading="Timeline: 3 weeks — Starting from $4,500"
      problemBody={[
        "Built for startups that need more than just a website—a strategic digital foundation designed to build trust, attract users, and support long-term growth.",
        "We combine high-end branding with conversion-focused UX to ensure your startup isn't just invisible, but positioned as a category leader from day one."
      ]}
      solutionHeading="What you get"
      solutionBody={[
        "Scalable digital presence",
        "Conversion-ready growth foundation",
        "Strategic market positioning",
        "Improved trust and credibility",
        "Readiness for user acquisition"
      ]}
      explanationBlock={{
        title: "Best for",
        description: "Perfect for startups needing more than design—a growth-focused launch system that anchors their marketing efforts.",
        items: [
          { title: "Growth-ready Startups", text: "New ventures preparing for marketing and user acquisition.", icon: Rocket },
          { title: "Founder-led Brands", text: "Founders who need a scalable digital identity to back their vision.", icon: Target },
          { title: "SaaS Launch Teams", text: "Products needing a conversion engine for their public reveal.", icon: FileCheck },
          { title: "Positioning Leaders", text: "Startups who want to define their category and build immediate trust.", icon: Check }
        ]
      }}
      packageComparison={{
        title: "Which path fits your growth?",
        description: "From simple validation hubs to complex marketing engines. Choose the path that matches your scaling plans.",
        headers: ["Starter Hub", "Growth Engine", "Category Leader"],
        rows: [
          { feature: "Best for", values: ["Waitlists", "Growth Teams", "Market Leaders"] },
          { feature: "Timeline", values: ["3 Weeks", "4 Weeks", "6+ Weeks"], isHighlight: true },
          { feature: "Focus", values: ["Validation", "Conversion", "Positioning"] },
          { feature: "Branding", values: ["Core Identity", "Full Brand Book", "Motion Branding"] },
          { feature: "Conversion UX", values: [true, true, true] },
          { feature: "Growth Setup", values: ["Basic SEO", "Full Growth Stack", "Advanced Data"] },
          { feature: "Interactions", values: ["Clean", "Advanced", "High-end 3D"] },
          { feature: "Launch Ready", values: [true, true, true] }
        ]
      }}
      packages={[
        {
          name: "Starter Hub",
          price: "$4,500",
          timeline: "3 weeks",
          badge: "Launch",
          stats: ["Conversion Landing Page", "Strategic Branding", "SEO Foundation"],
          bestFor: "Early founders needing a credible bridge between their idea and their first users.",
          included: ["High-converting Landing Page", "Strategic Visual Identity", "Responsive UX Systems", "Growth SEO Setup"],
          notIncluded: ["Multi-page Systems", "Full Brand Book", "Advanced Analytics"],
          pitch: "Establish your category presence and start growing immediately.",
          selectionGuide: {
            whenToChoose: [
              "You need a conversion engine to test market interest",
              "You have a single core offer that needs trust and visibility",
              "You want a scalable foundation for early marketing"
            ],
            outcome: "A premium, strategic presence that turns visitors into early adopters and customers."
          }
        },
        {
          name: "Growth Engine",
          price: "$6,500",
          timeline: "4 weeks",
          badge: "Most Popular",
          stats: ["Multi-page Hub", "Full Brand System", "Conversion Strategy"],
          bestFor: "Startups ready for public launch, user acquisition, and investor scrutiny.",
          included: ["5+ Conversion-focused Pages", "Comprehensive Brand Book", "Custom Growth Assets", "CMS Integration", "Analytics Layer"],
          notIncluded: ["Complex Product Development"],
          pitch: "The complete digital system for startups ready to capture the market.",
          selectionGuide: {
            whenToChoose: [
              "You need to look credible to users, partners, and investors",
              "You are preparing for paid acquisition and marketing growth",
              "You need multiple pathways to convert different user personas"
            ],
            outcome: "A high-performance digital engine that anchors your growth and positions you as a leader."
          }
        },
        {
          name: "Category Leader",
          price: "$9,000+",
          timeline: "6 weeks+",
          badge: "Premium",
          stats: ["High-end Platform", "Strategic Narrative", "Premium Motion"],
          bestFor: "Brands intent on defining their category with world-class positioning.",
          included: ["Elite Interactive Experiences", "Motion Brand Identity", "Full Narrative Strategy", "Advanced Conversion Loops"],
          notIncluded: ["SaaS Product Engineering"],
          pitch: "For when you don't just want to join a market—you want to dominate it.",
          selectionGuide: {
            whenToChoose: [
              "You want to set the standard for quality in your industry",
              "You need complex storytelling and motion to win market share",
              "You're building a flagship experience for a high-value audience"
            ],
            outcome: "A world-class digital platform that communicates authority and drives massive growth."
          }
        }
      ]}
      process={[
        { title: "Positioning Strategy", explanation: "We extract the value—your vision, audience, and the unique reason you will win.", output: "Market Voice" },
        { title: "Visual Growth System", explanation: "We build more than a logo; we create a scalable identity system designed to grow.", output: "Brand Foundation" },
        { title: "Conversion Engine", explanation: "We map out the user journey to maximize trust, interest, and inbound results.", output: "Narrative Hub" },
        { title: "Scalable Deployment", explanation: "We build on elite platforms for ultra-fast performance and total client control.", output: "Growth Platform" }
      ]}
      deliverables={[
        { title: "Growth Foundations", icon: Sparkles, items: [
          "Strategic positioning & market voice",
          "Conversion-optimized UI/UX system",
          "High-performance website development",
          "Scalable growth infrastructure",
          "Launch-ready deployment",
          "Mobile-first experience mapping"
        ] },
        { title: "Scale & Reliability", icon: Ship, items: [
          "Ultra-fast loading systems",
          "Growth-focused SEO setup",
          "Custom marketing assets",
          "DNS & Infrastructure management"
        ] }
      ]}
      faqs={[
        { q: "What platform do you use?", a: "We primarily build on Framer or Webflow for speed and client editability, but can use React for more complex sites." },
        { q: "Do you write the copy?", a: "We provide high-level conversion copy. For deep editorial work, we can recommend world-class copywriters." },
        { q: "How many revisions do I get?", a: "We work iteratively. We include 2 rounds of major revisions to ensure perfect alignment." },
        { q: "Can we add a blog later?", a: "Yes, our multi-page packages include full CMS setup so you can add content easily." }
      ]}
      finalCTAHeading="Explore Digital Launch Solution"
    />
  );
}
