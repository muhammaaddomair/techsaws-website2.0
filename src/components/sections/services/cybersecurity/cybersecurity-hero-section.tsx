import styles from "./cybersecurity-hero-section.module.css";
import { ArrowUpRight, ArrowDown, Check } from "lucide-react";
import SectionTitleDots from "@/components/shared/section-title-dots";
import ConnectLink from "@/components/shared/connect-link";
import { Button } from "@/components/ui/button";
import SecurityShowcase from "./security-showcase";

export default function CybersecurityHeroSection() {
  return <section className={`surface-dark ${styles.hero}`} aria-labelledby="cybersecurity-heading">
    <div className={`page-layout ${styles.content}`}>
      <div className={styles.pitch}>
      <p className={styles.eyebrow}><SectionTitleDots />Cybersecurity &amp; Protection</p>
      <h1 id="cybersecurity-heading" className={styles.heading}>Find the gaps.<br /><span>Protect what matters.</span></h1>
      <p className={styles.description}>A security weakness can become a business problem. We help you find the risks, prioritize the fixes, and protect the systems your customers and team rely on.</p>
      <div className={styles.ctas}>
        <Button asChild className="min-h-12 gap-2 rounded-lg px-6 font-body"><ConnectLink href="/connect">Discuss Your Security<ArrowUpRight aria-hidden="true" /></ConnectLink></Button>
        <a href="#cybersecurity-demo" className={styles.demoLink}>See protection in action<ArrowDown size={16} aria-hidden="true" /></a>
      </div>
      <p className={styles.support}>Tell us what you need to protect. We’ll help you find the right starting point.</p>
      <div className={styles.takeaways}>
        <p>A clearer picture. A practical plan.</p>
        <ul>{["Understand where your business is exposed", "Know what needs attention first", "Get clear recommendations for stronger protection"].map(label => <li key={label}><Check size={16} aria-hidden="true" />{label}</li>)}</ul>
      </div>
      <p className={styles.assurances}>Authorized testing. Plain-language findings. Your business in control.</p>
      </div>
      <div id="cybersecurity-demo" className={styles.demo}><SecurityShowcase /></div>
    </div>
  </section>;
}
