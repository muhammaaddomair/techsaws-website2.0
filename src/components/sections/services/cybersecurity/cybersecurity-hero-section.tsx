import styles from "@/components/shared/service-hero.module.css";
import { ArrowUpRight, ArrowDown, ScanSearch, ListOrdered, ShieldCheck } from "lucide-react";
import SectionTitleDots from "@/components/shared/section-title-dots";
import ConnectLink from "@/components/shared/connect-link";
import { Button } from "@/components/ui/button";
import SecurityShowcase from "./security-showcase";

export default function CybersecurityHeroSection() {
  return <section className={`surface-dark ${styles.hero}`} data-theme="red" aria-labelledby="cybersecurity-heading">
    <div className="page-layout"><div className={styles.intro}>
      <div className={styles.pitch}>
      <p className={styles.eyebrow}><SectionTitleDots />Cybersecurity &amp; Protection</p>
      <h1 id="cybersecurity-heading" className={styles.heading}>Find the gaps.<br /><span>Protect what matters.</span></h1>
      <p className={styles.description}>A security weakness can become a business problem. We help you find the risks, prioritize the fixes, and protect the systems your customers and team rely on.</p>
      <div className={styles.actions}>
        <Button asChild className="min-h-12 gap-2 rounded-lg px-6 font-body"><ConnectLink href="/connect">Discuss Your Security<ArrowUpRight aria-hidden="true" /></ConnectLink></Button>
        <a href="#cybersecurity-demo" className={styles.secondary}>See protection in action<ArrowDown size={16} aria-hidden="true" /></a>
      </div>
      </div>
      <aside className={styles.promise}><p>CLEAR RISKS. PRACTICAL NEXT STEPS.</p><h2>Stronger protection starts<br />with a clearer picture.</h2><ul>
        <li><ScanSearch size={21} aria-hidden="true" /><div><strong>Find your exposure</strong><span>Understand where your systems and data are at risk.</span></div></li>
        <li><ListOrdered size={21} aria-hidden="true" /><div><strong>Prioritize what matters</strong><span>Know which gaps need attention first.</span></div></li>
        <li><ShieldCheck size={21} aria-hidden="true" /><div><strong>Build stronger protection</strong><span>Get practical recommendations for your next steps.</span></div></li>
      </ul></aside></div>
      <div id="cybersecurity-demo" className={styles.widePreview}><SecurityShowcase /></div>
    </div>
  </section>;
}
