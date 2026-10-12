import { ArrowDown, ArrowUpRight, Target, Workflow, ChartNoAxesCombined } from "lucide-react";
import SectionTitleDots from "@/components/shared/section-title-dots";
import ConnectLink from "@/components/shared/connect-link";
import { Button } from "@/components/ui/button";
import styles from "@/components/shared/service-hero.module.css";
import GrowthShowcase from "./growth-showcase";

export default function GrowthHeroSection() {
  return <section className={`surface-dark ${styles.hero}`} aria-labelledby="growth-hero-heading"><div className="page-layout"><div className={styles.intro}>
    <div className={styles.pitch}>
      <p className={styles.eyebrow}><SectionTitleDots />Revenue &amp; Growth Systems</p>
      <h1 id="growth-hero-heading" className={styles.heading}>Interest is a start.<br /><span>Build what turns it into business.</span></h1>
      <p className={styles.description}>Give every opportunity a clear next step. Connect your lead generation, follow-ups, and sales process so promising conversations keep moving.</p>
      <div className={styles.actions}><Button asChild className="min-h-12 gap-2 rounded-lg px-6"><ConnectLink href="/connect">Discuss Your Growth Goals<ArrowUpRight aria-hidden="true" /></ConnectLink></Button><a href="#growth-demo" className={styles.secondary}>Explore the journey<ArrowDown size={16} /></a></div>
      
    </div><aside className={styles.promise}><p>A CLEARER PATH TO GROWTH.</p><h2>Turn interest into<br />lasting business.</h2><ul><li><Target size={20} /><div><strong>Reach the right people</strong><small>Relevant prospects and a clearer route to inquiry.</small></div></li><li><Workflow size={20} /><div><strong>Keep the conversation moving</strong><small>Connected information and timely follow-ups.</small></div></li><li><ChartNoAxesCombined size={20} /><div><strong>Know what drives your growth</strong><small>Track the journey from first interest to customer.</small></div></li></ul>
    </aside></div><div id="growth-demo" className={styles.widePreview}><GrowthShowcase /></div>
  </div></section>;
}
