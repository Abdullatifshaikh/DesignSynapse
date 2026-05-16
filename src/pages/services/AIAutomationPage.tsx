import SolutionPageTemplate from '../../components/SolutionPageTemplate';
import { Cpu, Bot, Zap, FileCheck } from 'lucide-react';

export default function AIAutomationPage() {
  return (
    <SolutionPageTemplate
      label="Service 03"
      heroHeading="Automate repetitive work with AI."
      heroSubheading="For teams wasting time on repetitive tasks that should be automated, allowing you to focus on high-impact growth."
      problemHeading="The Overhead Plague: Scaling people instead of systems."
      problemBody={[
        "As your startup grows, so does the 'busy work'. Data entry, lead qualification, customer support, and internal reporting start eating 50% of your team's time.",
        "Throwing more people at the problem is expensive, slow, and prone to human error. It scales costs without scaling efficiency.",
        "You don't need a bigger team. You need a smarter system that handles the heavy lifting automatically."
      ]}
      solutionHeading="Custom AI agents and automated workflows."
      solutionBody={[
        "We map out your operational bottlenecks and build custom integrations using OpenAI, Anthropic, and other LLMs to automate them.",
        "From AI-powered lead scoring to automated content generation and customer support triaging, we build systems that act as an invisible force multiplier.",
        "We focus on 'closed-loop' automation—systems that don't just trigger an action, but learn and improve over time."
      ]}
      explanationBlock={{
        title: "Scale without the overhead.",
        description: "Scale your output, not your headcount. We build intelligent systems that handle repetitive tasks, from lead qualification to complex data processing, giving your team back 20+ hours a week.",
        items: [
          { title: "Smart Workflows", text: "We connect your favorite tools with AI logic to automate multi-step processes.", icon: Zap },
          { title: "Custom Agents", text: "We build trained agents that understand your business and act on your behalf.", icon: Bot },
          { title: "System Audit", text: "Deep mapping of your operations to find precisely where AI adds the most value.", icon: Cpu },
          { title: "Future Proof", text: "We use modular architectures so you can swap models as AI tech evolves.", icon: FileCheck }
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
            whenToChoose: ["Single bottleneck", "Manual data entry", "Immediate ROI"],
            outcome: "Automated core reporting & sync"
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
            whenToChoose: ["Departmental scaling", "Process heavy", "AI integration focus"],
            outcome: "Intelligent agent-driven ops"
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
            whenToChoose: ["Enterprise systems", "Scale limitations", "Mission critical custom logic"],
            outcome: "Autonomous high-velocity engine"
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
        { title: "System Maps", icon: Cpu, items: ["Process diagrams", "API data flow", "Bot logic"] },
        { title: "AI Agents", icon: Bot, items: ["Custom OpenAI/Anthropic Bots", "Knowledge base integration", "Trained models"] },
        { title: "Automations", icon: Zap, items: ["Active Zapier/Make scripts", "Custom Node.js scripts", "Error handling"] },
        { title: "Internal Tools", icon: FileCheck, items: ["Custom Dashboards", "Slack Apps", "Handoff docs"] }
      ]}
      faqs={[
        { q: "Is AI ready for this?", a: "Yes. Current models are exceptional at structured tasks like data analysis, drafting, and triaging." },
        { q: "How much do API costs run?", a: "Most automation tasks cost less than $20-50/month in OpenAI tokens, far cheaper than a salary." },
        { q: "Do you use Zapier?", a: "We use the best tool for the job. Often it's a mix of Zapier/Make and custom Node.js/Python scripts." },
        { q: "Will this break my existing data?", a: "No. We build on top of your existing stack, adding a layer of automation without disrupting your source of truth." }
      ]}
      finalCTAHeading="Ready to automate your workflow?"
    />
  );
}
