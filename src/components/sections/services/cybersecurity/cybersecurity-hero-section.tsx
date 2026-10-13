import type { CSSProperties } from "react";
import actionStyles from "@/components/sections/home/core-value-section.module.css";
import shineStyles from "@/components/layouts/header.module.css";
import ROITooltip from "@/components/shared/roi-tooltip";
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
        <Button asChild className={`group relative min-h-11 gap-2 rounded-lg px-5 font-body ${actionStyles.goalsButton}`}><ConnectLink href="/connect"><span className={shineStyles.shine} aria-hidden="true" style={{ "--shine-duration": "9.0s", "--shine-delay": "-2.4s" } as CSSProperties} />Discuss Your Security<ArrowUpRight className={actionStyles.buttonArrow} aria-hidden="true" /><ROITooltip icon="shield" text="Protect the systems your business relies on." /></ConnectLink></Button>
        <a href="#cybersecurity-demo" className={styles.secondary}>See protection in action<ArrowDown size={18} strokeWidth={2.75} aria-hidden="true" /></a>
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
