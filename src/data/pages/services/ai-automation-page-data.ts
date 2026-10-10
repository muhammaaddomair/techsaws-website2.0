export const aiAutomationPageData = {
  outcomes: {
    eyebrow: "THE IMPACT",
    heading: ["Less Manual Work.", "More Room to Grow."],
    description: "Turn time-consuming processes into efficient operations that save money, improve productivity, and support business growth.",
    items: [
      { id: "time", tone: "sage", title: "Save Valuable Time", description: "Reduce hours spent on repetitive tasks and give your team more time for meaningful work.", labels: ["Routine tasks", "Handled by AI", "Time for what matters"], tags: ["Time saved", "Team focus"] },
      { id: "cost", tone: "stone", title: "Reduce Operating Costs", description: "Cut unnecessary manual work, reduce errors, and make better use of your existing resources.", labels: ["Manual effort", "Fewer errors", "Better resource use"], tags: ["Less rework", "Efficiency"] },
      { id: "speed", tone: "clay", title: "Get More Done, Faster", description: "Speed up everyday operations, improve response times, and keep work moving without constant supervision.", labels: ["Incoming work", "In motion", "Completed"], tags: ["Faster responses", "Steady delivery"] },
      { id: "scale", tone: "forest", title: "Grow Without Growing Overhead", description: "Handle more customers and increasing workloads without adding staff at the same rate.", labels: ["More customers", "Connected automation", "A focused team"], tags: ["Capacity", "Sustainable growth"] },
    ],
  },
  process: {
    eyebrow: "OUR PROCESS",
    heading: ["From Manual Work", "to Smart Automation."],
    description: "We identify what slows your business down, build the right automation, and make sure it works with your existing systems.",
    items: [
      { id: "understand", tone: "lavender", title: "Understand Your Workflow", description: "We review how your business operates and identify repetitive tasks, delays, and opportunities for automation.", labels: ["Your tasks", "Your tools", "Your team", "Find the bottlenecks"] },
      { id: "design", tone: "honey", title: "Design the Right Solution", description: "We plan an automation that fits your business, connects with your tools, and addresses your specific needs.", labels: ["Map the workflow", "Set approval rules", "Plan the connections"] },
      { id: "integrate", tone: "peach", title: "Build & Integrate", description: "We develop, test, and connect your automation with existing systems to ensure everything works reliably.", labels: ["Build", "Test", "Connect", "Ready to work together"] },
      { id: "improve", tone: "lavender", title: "Launch & Improve", description: "We deploy your automation, check its performance, and help improve it as your business evolves.", labels: ["Launch", "Measure", "Improve", "Keep getting better"] },
    ],
  },
  solution: {
    eyebrow: "WHAT WE BUILD",
    heading: ["Less Manual Work.", "More Room to Grow."],
    description: "We build connected AI systems that take care of routine work, support your customers, and put your business information to work.",
    items: [
      { id: "agents", tone: "graphite", title: "AI Agents & Workflow Automation", description: "Automate repetitive tasks and everyday business operations.", detail: "Routine work, handled." },
      { id: "support", tone: "moss", title: "AI Customer Support Systems", description: "Answer common questions faster and provide around-the-clock assistance.", detail: "Help that keeps up." },
      { id: "crm", tone: "sage", title: "Business & CRM Automation", description: "Connect your tools, synchronize data, and automate customer workflows.", detail: "Your systems, in sync." },
      { id: "knowledge", tone: "forest", title: "AI Knowledge & Data Systems", description: "Make business information easier to find, process, and use.", detail: "Clear answers. Better decisions." },
    ],
  },
  problem: {
    eyebrow: "THE PROBLEM",
    heading: ["Is Manual Work Holding", "Your Business Back?"],
    description: "Repetitive tasks, disconnected tools, and slow processes cost businesses time and money. We build AI-powered systems that remove these bottlenecks.",
    items: [
      { id: "repetition", title: "Too Much Repetitive Work", description: "Manual tasks consume valuable time and keep your team from focusing on what matters.", solution: "Workflow Automation & AI Agents" },
      { id: "responses", title: "Slow Customer Responses", description: "Delayed replies frustrate customers and cause potential opportunities to slip away.", solution: "AI Customer Support Systems" },
      { id: "tools", title: "Disconnected Tools & Processes", description: "Systems that don't communicate create extra work, errors, and unnecessary delays.", solution: "Business & CRM Automation" },
      { id: "costs", title: "Growing Workloads, Rising Costs", description: "More customers mean more work, increasing costs and putting pressure on your team.", solution: "End-to-End Process Automation" },
    ],
  },
  metadata: { title: "AI & Automation Services | TechSaws", description: "Connect your tools, automate repetitive work, and put AI to work across sales, support, and operations with TechSaws." },
  hero: {
    eyebrow: "AI & Automation",
    heading: ["Less work.", "More impact."],
    description: "Let AI handle emails, orders, and daily tasks. Give your team time to grow.",
    cta: { label: "Discuss Your Workflow", href: "/connect" },
    supportingText: "Your tools. Your rules. Less busywork.",
    demo: {
      scenarios: [
        { label: "Email assistant", prompt: "Reply to this customer inquiry, update our CRM, and send a follow-up email for me.", steps: ["Read the inquiry and find the customer", "Update the CRM with the right context", "Send the follow-up using your approved rules"], result: "Follow-up sent. CRM updated.", detail: "Your customer gets an answer. Your team stays focused.", icon: "email" },
        { label: "Order assistant", prompt: "Take this new order, check stock, and email the customer their order confirmation.", steps: ["Capture the order details", "Check inventory and create the order", "Email the customer their confirmation"], result: "Order created. Customer informed.", detail: "From incoming request to a clear, connected handoff.", icon: "order" },
        { label: "Team assistant", prompt: "Summarize today's customer requests, assign next steps, and send my team a daily briefing.", steps: ["Bring customer requests together", "Identify priorities and assign next steps", "Prepare and share the team briefing"], result: "Priorities clear. Team in sync.", detail: "Less chasing updates. More time to move work forward.", icon: "team" },
      ],
      label: "Example workflow",
      prompt: "When a new inquiry arrives, summarize what the customer needs, update our CRM, and draft a response for our team to review.",
      promptLabel: "Your instruction",
      runningLabel: "Putting your workflow into motion",
      completeLabel: "Ready for your team to review",
      tasks: [
        { id: "understand", label: "Summarize the customer inquiry" },
        { id: "connect", label: "Update the CRM with the right context" },
        { id: "review", label: "Prepare a response for human approval" },
      ],
      outcome: "Connected systems. Clear handoffs. Human oversight.",
    },
  },
} as const;
