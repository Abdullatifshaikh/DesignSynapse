import SolutionPageTemplate from '../../components/SolutionPageTemplate';
import { Cpu, Bot, Zap, FileCheck, Rocket, Target, Sparkles } from 'lucide-react';

export default function AIAutomationPage() {
  return (
    <SolutionPageTemplate
      label="Solution 03"
      heroHeading="AI Automation Solution"
      heroSubheading="Eliminate repetitive work with custom AI systems"
      problemHeading="Timeline: 4 weeks — Starting from $5,000"
      problemBody={[
        "Built for growing teams that want to automate repetitive workflows, reduce manual operations, and create scalable internal systems powered by AI."
      ]}
      solutionHeading="What you get"
      solutionBody={[
        "Faster operational workflows",
        "Reduced manual work",
        "AI systems tailored to your business",
        "Scalable automation infrastructure",
        "More time focused on growth"
      ]}
      explanationBlock={{
        title: "Best for",
        description: "Ideal for organizations looking to optimize their internal efficiency and scale without proportional headcount growth.",
        items: [
          { title: "Scaling Startups", text: "Teams that are growing fast and need systems that keep up.", icon: Rocket },
          { title: "Operations-heavy", text: "Businesses with complex manual processes and data flows.", icon: Cpu },
          { title: "Repetitive Workflows", text: "Teams spending too much time on manual task management.", icon: Zap },
          { title: "Efficiency Seekers", text: "Companies looking for an edge in operational speed and accuracy.", icon: Target }
        ]
      }}
      packageComparison={{
        title: "Choose the right package",
        description: "From simple workflow fixes to complex departmental automation. Pick the right level of intelligence for your operations.",
        headers: ["Starter", "Growth", "Advanced"],
        rows: [
          { feature: "Best for", values: ["Daily Hacks", "Department Ops", "Company Systems"] },
          { feature: "Timeline", values: ["4 Weeks", "6 Weeks", "8+ Weeks"], isHighlight: true },
          { feature: "Workflow Count", values: ["2 Core Chains", "5+ Complex Flows", "Unlimited"] },
          { feature: "AI Model Hook", values: ["Single LLM", "Multi-model", "Custom Chains"] },
          { feature: "Database Sync", values: [true, true, true] },
          { feature: "Custom UI", values: [false, "Basic Dash", "Full Internal App"] },
          { feature: "Monitoring", values: ["Alerts", "Dashboard", "Advanced Analytics"] },
          { feature: "Integrations", values: ["Standard APIs", "Custom Hooks", "Unlimited"] }
        ]
      }}
      packages={[
        {
          name: "Starter Automation",
          price: "$5,000",
          timeline: "4 weeks",
          badge: "Basic",
          stats: ["2 Core Workflows", "3rd Party Integrations", "Slack/Email Alerts"],
          bestFor: "Small teams spending 10+ hours a week on manual data tasks.",
          included: ["Workflow Mapping", "API Integrations", "No-code/Low-code Setup", "Monitoring Dashboard"],
          notIncluded: ["Custom LLM Training", "Complex AI Agents"],
          pitch: "Reclaim 10 hours of your team’s week, instantly.",
          selectionGuide: {
            whenToChoose: [
              "You have clear, manual bottlenecks in your daily work",
              "You want to connect 2-3 of your existing tools with AI logic",
              "You need simple, effective alerts for business events"
            ],
            outcome: "A streamlined operation where manual work is replaced by automated logic, saving 10+ hours weekly."
          }
        },
        {
          name: "Growth Automation",
          price: "$8,000",
          timeline: "6 weeks",
          badge: "Most Popular",
          stats: ["AI Agent Integration", "Multi-step Workflows", "Custom Dashboards"],
          bestFor: "Growing startups ready to replace manual processes with smart AI.",
          included: ["AI Copilot / Agent Setup", "Multi-platform Automation", "Internal Support Bot", "Data Normalization"],
          notIncluded: ["24/7 Managed Support"],
          pitch: "The foundation for an AI-first operational culture.",
          selectionGuide: {
            whenToChoose: [
              "You need AI agents to perform tasks like lead qualification",
              "You have complex, multi-step workflows across departments",
              "You want a custom dashboard to monitor automation ROI"
            ],
            outcome: "A sophisticated AI-powered system that acts as an invisible force multiplier for your team."
          }
        },
        {
          name: "Advanced Automation",
          price: "$12,000+",
          timeline: "8 weeks+",
          badge: "Premium",
          stats: ["Complex Systems", "Internal Apps", "Full Process Ops"],
          bestFor: "Medium-sized teams with complex operations and high volume.",
          included: ["Fully Custom Internal Apps", "LLM-powered Content/Support Engines", "Scalability Optimization", "Full Documentation"],
          notIncluded: ["Indefinite Maintenance"],
          pitch: "Automate your way to the next round of funding.",
          selectionGuide: {
            whenToChoose: [
              "You're building specialized AI tools for internal or external use",
              "You need a custom internal app to manage complex operations",
              "You require high-volume automated systems at enterprise scale"
            ],
            outcome: "An enterprise-grade automation infrastructure that allows your business to scale without overhead."
          }
        }
      ]}
      process={[
        { title: "Operational Audit", explanation: "We shadow your team to find the high-volume, low-value tasks that are perfect for AI.", output: "Workflow Map" },
        { title: "Architecture Design", explanation: "We design the logic flow, selecting the right APIs and LLM models for the task.", output: "System Blueprint" },
        { title: "Development Sprints", explanation: "We build the connectors, agents, and internal interfaces to run the automation.", output: "Beta Workflows" },
        { title: "System Handoff", explanation: "We train your team on how to manage and monitor the new automated systems.", output: "Operating Manual" }
      ]}
      deliverables={[
        { title: "This solution includes", icon: Sparkles, items: [
          "Workflow automation setup",
          "Custom AI integrations",
          "Internal operations systems",
          "AI-powered process optimization",
          "Tool and software integrations",
          "Automation strategy & implementation"
        ] },
        { title: "Intelligence & Scale", icon: Bot, items: [
          "Custom LLM prompts & agents",
          "Secure API connectors",
          "Operational monitoring dash",
          "Full workflow documentation"
        ] }
      ]}
      faqs={[
        { q: "Is AI ready for this?", a: "Yes. Current models are exceptional at structured tasks like data analysis, drafting, and triaging." },
        { q: "How much do API costs run?", a: "Most automation tasks cost less than $20-50/month in OpenAI tokens, far cheaper than a salary." },
        { q: "Do you use Zapier?", a: "We use the best tool for the job. Often it's a mix of Zapier/Make and custom Node.js/Python scripts." },
        { q: "Will this break my existing data?", a: "No. We build on top of your existing stack, adding a layer of automation without disrupting your source of truth." }
      ]}
      finalCTAHeading="Explore AI Automation Solution"
    />
  );
}
