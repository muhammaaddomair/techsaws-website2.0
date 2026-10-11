import { ArrowDown, ArrowUpRight, Target, Workflow, ChartNoAxesCombined } from "lucide-react";
import SectionTitleDots from "@/components/shared/section-title-dots";
import ConnectLink from "@/components/shared/connect-link";
import { Button } from "@/components/ui/button";
import styles from "@/components/shared/service-hero.module.css";
import growthStyles from "./growth-hero-section.module.css";
import GrowthShowcase from "./growth-showcase";

export default function GrowthHeroSection() {
  return <section className={`surface-dark ${styles.hero}`} aria-labelledby="growth-hero-heading"><div className={`page-layout ${styles.layout} ${growthStyles.layout}`}>
    <div className={styles.pitch}>
      <p className={styles.eyebrow}><SectionTitleDots />Revenue &amp; Growth Systems</p>
      <h1 id="growth-hero-heading" className={styles.heading}>Interest is a start.<br /><span>Build what turns it into business.</span></h1>
      <p className={styles.description}>Give every opportunity a clear next step. Connect your lead generation, follow-ups, and sales process so promising conversations keep moving.</p>
      <div className={styles.actions}><Button asChild className="min-h-12 gap-2 rounded-lg px-6"><ConnectLink href="/connect">Discuss Your Growth Goals<ArrowUpRight aria-hidden="true" /></ConnectLink></Button><a href="#growth-demo" className={styles.secondary}>Explore the journey<ArrowDown size={16} /></a></div>
      <p className={styles.support}>Tell us where opportunities get stuck. We’ll help you build a practical way forward.</p>
      <ul className={styles.benefits}><li><Target size={20} /><div><strong>Reach the right people</strong><small>Relevant prospects and a clearer route to inquiry.</small></div></li><li><Workflow size={20} /><div><strong>Keep the conversation moving</strong><small>Connected information and timely follow-ups.</small></div></li><li><ChartNoAxesCombined size={20} /><div><strong>Know what drives your growth</strong><small>Track the journey from first interest to customer.</small></div></li></ul>
    </div><div id="growth-demo" className={`${styles.preview} ${growthStyles.preview}`}><GrowthShowcase /></div>
  </div></section>;
}
