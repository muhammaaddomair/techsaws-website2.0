import {
  LucideIcon,
  TrendingUp,
  Clock3,
  Cpu,
  FileCode2,
  Layers3,
  Rocket,
  ShieldAlert,
  ShieldCheck,
} from "lucide-react";

type SubCategoryItem = {
  path: string;
  title: string;
  description: string;
  beforeIcon: LucideIcon;
  afterIcon: LucideIcon;
};

type NavItemLink = {
  path: string;
  title: string;
  isSubCategory?: false;
  subCategory?: never;
};

type NavItemDropdown = {
  title: string;
  path?: never;
  isSubCategory: true;
  subCategory: SubCategoryItem[];
};

export type HeaderNavItem = NavItemLink | NavItemDropdown;

export const HeaderNavData: HeaderNavItem[] = [
  {
    path: "/about",
    title: "About",
  },

  {
    title: "Solutions",
    path: "/solutions",
  },

  {
    title: "Case Studies",
    path: "/case-studies",
  },

  {
    title: "Services",
    isSubCategory: true,
    subCategory: [
      {
        path: "/services/ai-automation",
        title: "AI & Automation",
        description:
          "Automate workflows, operations, and business processes with AI-powered systems.",
        beforeIcon: Clock3,
        afterIcon: Cpu,
      },
      {
        path: "/services/software-digital-products",
        title: "Software & Digital Products",
        description:
          "Build scalable applications, platforms, APIs, and business systems.",
        beforeIcon: FileCode2,
        afterIcon: Layers3,
      },
      {
        path: "/services/growth-revenue-systems",
        title: "Growth & Revenue Systems",
        description:
          "Create lead generation, sales, and growth systems that drive revenue.",
        beforeIcon: TrendingUp,
        afterIcon: Rocket,
      },
      {
        path: "/services/cybersecurity-protection",
        title: "Cybersecurity & Protection",
        description:
          "Protect infrastructure, applications, and data with proactive security.",
        beforeIcon: ShieldAlert,
        afterIcon: ShieldCheck,
      },
    ],
  },
];

export const SidebarNavData = [
  {
    path: "/",
    title: "Home",
  },

  {
    path: "/about",
    title: "About Us",
  },

  {
    title: "Services",
    isAccordian: true,
    subCategory: [
      {
        path: "/services/ai-automation",
        title: "AI & Automation",
      },
      {
        path: "/services/software-digital-products",
        title: "Software & Digital Products",
      },
      {
        path: "/services/growth-revenue-systems",
        title: "Growth & Revenue Systems",
      },
      {
        path: "/services/cybersecurity-protection",
        title: "Cybersecurity & Protection",
      },
    ],
  },

  {
    title: "Solutions",
    path: "/solutions",
  },

  {
    title: "Case Studies",
    path: "/case-studies",
  },

  {
    title: "Capabilities",
    path: "/capabilities",
  },

  {
    title: "Methodology",
    path: "/methodology",
  },

  {
    title: "Engagement",
    path: "/engagement",
  },

  {
    title: "Industries",
    path: "/industries",
  },

  {
    title: "Insights",
    path: "/insights",
  },
];

export const FooterNavData = [
  {
    title: "Company",
    links: [
      { path: "/", title: "Home" },
      { path: "/about", title: "About Us" },
      { path: "/case-studies", title: "Case Studies" },
      { path: "/insights", title: "Insights" },
    ],
  },
  {
    title: "Explore",
    links: [
      { path: "/solutions", title: "Solutions" },
      { path: "/capabilities", title: "Capabilities" },
      { path: "/methodology", title: "Methodology" },
      { path: "/engagement", title: "Engagement" },
      { path: "/industries", title: "Industries" },
    ],
  },
  {
    title: "Services",
    links: [
      { path: "/services/ai-automation", title: "AI & Automation" },
      {
        path: "/services/software-digital-products",
        title: "Software & Digital Products",
      },
      {
        path: "/services/growth-revenue-systems",
        title: "Growth & Revenue Systems",
      },
      {
        path: "/services/cybersecurity-protection",
        title: "Cybersecurity & Protection",
      },
    ],
  },
] as const;
