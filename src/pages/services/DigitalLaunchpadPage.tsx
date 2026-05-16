import SolutionPageTemplate from '../../components/SolutionPageTemplate';
import { Layout, Palette, Ship, FileCheck } from 'lucide-react';

export default function DigitalLaunchpadPage() {
  return (
    <SolutionPageTemplate
      label="Service 02"
      heroHeading="Launch your brand and website."
      heroSubheading="For founders who need to look credible, professional, and high-converting from day one."
      problemHeading="Invisible Startups: Great product, terrible presentation."
      problemBody={[
        "First impressions are made in 50 milliseconds. If your website looks like a template or a DIY project, potential customers, investors, and hires will bounce.",
        "A lack of professionalism is the #1 killer of trust in early-stage startups. You can't ask people to trust you with their data or money if your landing page is broken.",
        "You don't need 'just a website'. You need a high-converting digital presence that tells your story."
      ]}
      solutionHeading="A conversion-first digital brand identity."
      solutionBody={[
        "We build websites that don't just look pretty—they work. We use strategic messaging and psychological triggers to guide visitors toward your primary CTA.",
        "Our process includes full brand identity design, ensuring your logo, colors, and typography reflect the quality of your product.",
        "We optimize for performance, SEO, and responsiveness, so your site feels premium on every device."
      ]}
      explanationBlock={{
        title: "Look credible from day one.",
        description: "Your digital presence is your primary salesperson. We don't just build websites; we build high-converting growth engines that establish trust and convert visitors into customers immediately.",
        items: [
          { title: "Strategic Design", text: "We use conversion-optimized layouts and psychological hooks to drive user actions.", icon: Layout },
          { title: "Brand Identity", text: "From logos to custom iconography, we build a cohesive look that feels multi-million dollar.", icon: Palette },
          { title: "Ultra Fast", text: "Performance-first builds that rank higher and feel premium on all devices.", icon: Ship },
          { title: "Full CMS", text: "Easy-to-manage content systems so you can update your site without calling a dev.", icon: FileCheck }
        ]
      }}
      packageComparison={{
        title: "Which option fits your stage?",
        description: "From simple validation pages to complex multi-page marketing engines. Choose the path that matches your growth plans.",
        headers: ["Starter", "Growth", "Advanced"],
        rows: [
          { feature: "Best for", values: ["Waitlists", "Full Launches", "Market Leaders"] },
          { feature: "Timeline", values: ["3 Weeks", "4 Weeks", "6+ Weeks"], isHighlight: true },
          { feature: "Page Count", values: ["1 Landing Page", "5+ Custom Pages", "Unlimited"] },
          { feature: "Branding", values: ["Core Identity", "Full Brand Book", "Motion Branding"] },
          { feature: "CMS Setup", values: [false, true, true] },
          { feature: "SEO Strategy", values: ["On-page", "Full Setup", "Advanced/Retainer"] },
          { feature: "Interactions", values: ["Basic", "Advanced", "High-end 3D"] },
          { feature: "Analytics", values: [true, true, true] }
        ]
      }}
      packages={[
        {
          name: "Starter Launch",
          price: "$4,500",
          timeline: "3 weeks",
          badge: "Launch",
          stats: ["Single Landing Page", "Basic Branding", "SEO Ready"],
          bestFor: "Early founders validating a concept with a wait-list or demo.",
          included: ["High-converting Landing Page", "Logo & Color Palette", "Responsive Design", "Basic SEO"],
          notIncluded: ["Multi-page Site", "Full Brand Book", "Custom CMS"],
          pitch: "Look like a billion-dollar company from day one.",
          selectionGuide: {
            whenToChoose: ["Pre-launch validation", "Waitlists", "Budget limit"],
            outcome: "High-converting landing page"
          }
        },
        {
          name: "Growth Launch",
          price: "$6,500",
          timeline: "4 weeks",
          badge: "Most Popular",
          stats: ["Multi-page Website", "Full Brand Identity", "Custom Assets"],
          bestFor: "Startups ready for a public launch and investor interest.",
          included: ["5+ Custom Pages", "Full Brand Guidelines", "Custom Illustrations/Icons", "CMS Integration", "Analytics Setup"],
          notIncluded: ["Complex Product UI"],
          pitch: "The complete digital presence for scaling startups.",
          selectionGuide: {
            whenToChoose: ["Official brand launch", "SaaS marketing", "Credibility focus"],
            outcome: "Full corporate digital presence"
          }
        },
        {
          name: "Premium Launch",
          price: "$9,000+",
          timeline: "6 weeks+",
          badge: "Premium",
          stats: ["Advanced Site", "3D/Motion", "Rich Interactivity"],
          bestFor: "Brands that want to lead their category with superior visuals.",
          included: ["Advanced Interactions", "Motion Branding", "Content Strategy", "Integration with Product"],
          notIncluded: ["Long-term SEO Retainers"],
          pitch: "For when being 'good' isn't good enough.",
          selectionGuide: {
            whenToChoose: ["Category leadership", "Interactive storytelling", "Brand dominance"],
            outcome: "Best-in-class brand experience"
          }
        }
      ]}
      process={[
        { title: "Brand Discovery", explanation: "We extract the essence of your startup—your vision, audience, and unique edge.", output: "Moodboard & Style" },
        { title: "Visual Identity", explanation: "We create your logo, typography, and color systems designed for SaaS digital environments.", output: "Brand Assets" },
        { title: "Strategic Design", explanation: "We map out the narrative flow of your site to maximize interest and conversion.", output: "Site Map & Copy" },
        { title: "Performance Build", explanation: "We build on Framer or Webflow for pixel-perfect results and ultra-fast loading.", output: "Live Website" }
      ]}
      deliverables={[
        { title: "Brand Kit", icon: Palette, items: ["Logo suite", "Typography", "Color system"] },
        { title: "UI/UX Design", icon: Layout, items: ["Figma source", "Desktop & Mobile UI", "Prototypes"] },
        { title: "Live Site", icon: Ship, items: ["Clean export/hosting", "CMS access", "Performance optimization"] },
        { title: "Launch Support", icon: FileCheck, items: ["Documentation", "Team training", "DNS Setup"] }
      ]}
      faqs={[
        { q: "What platform do you use?", a: "We primarily build on Framer or Webflow for speed and client editability, but can use React for more complex sites." },
        { q: "Do you write the copy?", a: "We provide high-level conversion copy. For deep editorial work, we can recommend world-class copywriters." },
        { q: "How many revisions do I get?", a: "We work iteratively. We include 2 rounds of major revisions to ensure perfect alignment." },
        { q: "Can we add a blog later?", a: "Yes, our multi-page packages include full CMS setup so you can add content easily." }
      ]}
      finalCTAHeading="Ready to launch your business?"
    />
  );
}
