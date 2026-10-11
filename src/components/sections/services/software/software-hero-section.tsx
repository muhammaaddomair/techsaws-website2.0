import { ArrowDown, ArrowUpRight, Check, Layers3, Plug, ShieldCheck } from "lucide-react";
import SectionTitleDots from "@/components/shared/section-title-dots";
import ConnectLink from "@/components/shared/connect-link";
import { Button } from "@/components/ui/button";
import styles from "@/components/shared/service-hero.module.css";
import SoftwareShowcase from "./software-showcase";

export default function SoftwareHeroSection() {
  return <section className={`surface-dark ${styles.hero}`} data-theme="violet" aria-labelledby="software-hero-heading"><div className="page-layout">
    <div className={styles.wideIntro}><div><p className={styles.eyebrow}><SectionTitleDots />Software &amp; Digital Products</p><h1 id="software-hero-heading" className={styles.heading}>Your next big idea.<br /><span>Built to work in the real world.</span></h1></div><div><p className={styles.description}>From a customer portal to the platform your team runs on, we build software around your people, your processes, and your plans for growth.</p><div className={styles.actions}><Button asChild className="min-h-12 gap-2 rounded-lg px-6"><ConnectLink href="/connect">Let’s Build Your Product<ArrowUpRight aria-hidden="true" /></ConnectLink></Button><a href="#software-demo" className={styles.secondary}>See an idea take shape<ArrowDown size={16} /></a></div><p className={styles.support}>Bring the idea. We’ll help define the product, the plan, and the next step.</p></div></div>
    <div className={styles.chips}><span><Layers3 size={14} />Built around your business</span><span><Plug size={14} />Connected to your tools</span><span><ShieldCheck size={14} />Tested for real-world use</span><span><Check size={14} />Ready to evolve</span></div>
    <div id="software-demo" className={styles.widePreview}><SoftwareShowcase /></div>
  </div></section>;
}
