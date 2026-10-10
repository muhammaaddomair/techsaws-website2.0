import techLogo1 from "../../../public/images/techstack/techstack-logo-01.png";
import techLogo2 from "../../../public/images/techstack/techstack-logo-02.png";
import techLogo3 from "../../../public/images/techstack/techstack-logo-03.png";
import techLogo4 from "../../../public/images/techstack/techstack-logo-04.png";
import techLogo5 from "../../../public/images/techstack/techstack-logo-05.png";
import techLogo6 from "../../../public/images/techstack/techstack-logo-06.png";
import techLogo7 from "../../../public/images/techstack/techstack-logo-07.png";
import techLogo8 from "../../../public/images/techstack/techstack-logo-08.png";

export const techStackSectionData = {
  eyebrow: "OUR TECHNOLOGY",
  heading: ["Built With Technologies", "You Can Rely On."],
  description: "We select proven technologies to build secure, scalable, and reliable systems tailored to your business.",
  technologies: [
    { id: "python", image: techLogo1, name: "Python" },
    { id: "openai", image: techLogo2, name: "OpenAI" },
    { id: "next-js", image: techLogo3, name: "Next.js" },
    { id: "node-js", image: techLogo4, name: "Node.js" },
    { id: "amazon-web-services", image: techLogo5, name: "Amazon Web Services" },
    { id: "postgresql", image: techLogo6, name: "PostgreSQL" },
    { id: "docker", image: techLogo7, name: "Docker" },
    { id: "n8n", image: techLogo8, name: "n8n" },
  ],
};

export const coreValuesSectionData = {
  eyebrow: "The Value We Deliver",
  heading: "Built to Make Your Business Better.",
  description: "We build systems that save time, increase revenue, support growth, and keep your business secure.",
  deliveryNote: "Managed Services, Consulting, Project Delivery, and Dedicated Teams — different ways to work with us, built around the outcomes your business needs.",
  values: [
    { id: "efficiency", number: "01", title: "Save Time & Reduce Costs", description: "Automate repetitive work, reduce manual effort, and help your team get more done with fewer resources.", service: "AI & Automation Systems", symbol: "efficiency", tone: "graphite" },
    { id: "revenue", number: "02", title: "Generate More Revenue", description: "Attract better leads, improve sales processes, and turn more opportunities into paying customers.", service: "Revenue & Growth Systems", symbol: "revenue", tone: "moss" },
    { id: "growth", number: "03", title: "Grow Without Limitations", description: "Build reliable systems that handle more customers, more work, and more demand as your business grows.", service: "Software & Platform Engineering", symbol: "growth", tone: "sage" },
    { id: "protection", number: "04", title: "Protect Your Business", description: "Keep your systems, customer data, and operations secure while reducing risks that could disrupt your business.", service: "Security & Cyber Defense", symbol: "protection", tone: "forest" },
  ],
} as const;

export const servicesSectionData = {
  eyebrow: "What We Provide",
  heading: ["The right systems.", "Real business momentum."],
  description: "We provide AI automation, software development, growth systems, and cybersecurity services tailored to your business. Reduce manual work, create more sales opportunities, scale your operations, and protect what matters.",
  services: [
    { id: "automation", number: "01", title: "AI & Automation", description: "Give repetitive work a smarter way forward. Connect your tools, streamline operations, and free your team to focus on what comes next.", href: "/services/ai-automation", tone: "sage", tags: ["Workflows", "AI agents", "Connected operations"], story: ["Request received", "AI processes", "Work completed"] },
    { id: "software", number: "02", title: "Software & Digital Products", description: "Turn a good idea into a dependable product. We build applications, platforms, and APIs that work beautifully today and scale with you tomorrow.", href: "/services/software-digital-products", tone: "stone", tags: ["Applications", "Platforms", "APIs & integrations"], story: ["Your next platform", "Build", "Connect", "Launch"] },
    { id: "growth", number: "03", title: "Growth & Revenue Systems", description: "Build a clearer path from interest to opportunity. Bring lead generation, sales, and customer journeys together in one connected growth system.", href: "/services/growth-revenue-systems", tone: "clay", tags: ["Lead generation", "Sales systems", "Customer journeys"], story: ["Attract", "Qualify", "Convert"] },
    { id: "security", number: "04", title: "Cybersecurity & Protection", description: "Move forward with confidence. Protect your infrastructure, applications, and customer data with proactive security built into the way you operate.", href: "/services/cybersecurity-protection", tone: "forest", tags: ["Infrastructure", "Application security", "Data protection"], story: ["Monitor", "Detect", "Protect"] },
  ],
} as const;

export const whySectionData = {
  eyebrow: "Why TechSaws",
  heading: ["Built to work together.", "Ready to grow with you."],
  description: "We understand how your business works, connect the right systems, and stay involved as your needs evolve.",
  reasons: [
    { id: "systems", number: "01", title: "The whole picture first", description: "We understand your workflows before recommending solutions, so every system fits your business and works with what you already use.", tone: "lavender", labels: ["Your people", "Your processes", "Your systems", "One connected business"] },
    { id: "outcomes", number: "02", title: "Progress you can measure", description: "We agree on practical goals early, then focus delivery on less manual work, smoother operations, and stronger business performance.", tone: "honey", labels: ["Understand the goal", "Deliver what matters", "Review the outcome"] },
    { id: "growth", number: "03", title: "Room to grow", description: "Reliability, security, and expansion are considered from the start, helping you grow without replacing the foundations that already work.", tone: "peach", labels: ["A reliable foundation", "Connect", "Extend", "Scale"] },
    { id: "partnership", number: "04", title: "A partner beyond launch", description: "From delivery to maintenance and ongoing improvements, you have a coordinated engineering partner as your business needs change.", tone: "lavender", labels: ["Launch", "Support", "Improve", "Keep moving forward"] },
  ],
} as const;

export const processSectionData = {
  eyebrow: "How We Work",
  heading: ["From Conversation", "to Execution."],
  description:
    "A straightforward process to understand your needs, plan the right solution, and get your project moving.",
  buttonLabel: "Let's Get Started",
  href: "/connect",
  supportingText:
    "Tell us what you're working on. We'll help you figure out the next step.",
  steps: [
    {
      id: "conversation",
      number: "01",
      title: "Tell Us What You Need",
      description:
        "Share your project, challenges, or goals through our contact form. No technical knowledge required.",
      image: "/images/process-conversation-ribbons.png",
    },
    {
      id: "goals",
      number: "02",
      title: "Let's Discuss Your Goals",
      description:
        "We'll connect to understand your business, discuss requirements, and explore the best approach.",
      image: "/images/process-goals-wave.png",
    },
    {
      id: "plan",
      number: "03",
      title: "Get a Clear Plan",
      description:
        "Receive a proposed solution outlining the scope, timeline, deliverables, and estimated cost.",
      image: "/images/process-plan-rings.png",
    },
    {
      id: "start",
      number: "04",
      title: "Approve & Get Started",
      description:
        "Once we agree on the plan and terms, we complete onboarding and begin execution.",
      image: "/images/process-start-folds.png",
    },
  ],
} as const;

export const faqSectionData = {
  "eyebrow": "Frequently Asked Questions",
  "heading": "Questions? We've Got Answers.",
  "description": "Everything you need to know before starting a project with TechSaws.",
  "items": [
    {
      "question": "What exactly does TechSaws do?",
      "answer": "We build AI automation, software platforms, revenue systems, and cybersecurity solutions that help businesses save time, improve performance, and grow."
    },
    {
      "question": "How much does it cost to work with TechSaws?",
      "answer": "Pricing depends on your project's requirements, complexity, and scope. After understanding your needs, we'll provide a clear proposal outlining the cost, timeline, and deliverables."
    },
    {
      "question": "How long does a typical project take?",
      "answer": "Timelines vary depending on the project. Smaller solutions may take a few weeks, while larger platforms and complex systems require more time. We'll discuss a realistic timeline before starting."
    },
    {
      "question": "Can TechSaws work with our existing systems?",
      "answer": "Yes. We can improve, integrate, or extend existing software and workflows. You don't necessarily need to replace everything to get better results."
    },
    {
      "question": "Do you provide support after the project is completed?",
      "answer": "Yes. We offer ongoing maintenance, monitoring, improvements, and technical support to help keep your systems secure, reliable, and performing well."
    },
    {
      "question": "How do we get started with TechSaws?",
      "answer": "Simply tell us about your business and what you need through our contact form. We'll discuss your goals, recommend an approach, and outline the next steps."
    }
  ]
};
