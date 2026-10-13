import type { CSSProperties } from "react";
import actionStyles from "@/components/sections/home/core-value-section.module.css";
import shineStyles from "@/components/layouts/header.module.css";
import ROITooltip from "@/components/shared/roi-tooltip";
import { ArrowDown, ArrowUpRight, Layers3, Plug, ShieldCheck } from "lucide-react";
import SectionTitleDots from "@/components/shared/section-title-dots";
import ConnectLink from "@/components/shared/connect-link";
import { Button } from "@/components/ui/button";
import styles from "@/components/shared/service-hero.module.css";
import SoftwareShowcase from "./software-showcase";

export default function SoftwareHeroSection() {
  return <section className={`surface-dark ${styles.hero}`} data-theme="violet" aria-labelledby="software-hero-heading"><div className="page-layout">
    <div className={styles.intro}><div><p className={styles.eyebrow}><SectionTitleDots />Software &amp; Digital Products</p><h1 id="software-hero-heading" className={styles.heading}>Your next big idea.<br /><span>Built to work in the real world.</span></h1><p className={styles.description}>From a customer portal to the platform your team runs on, we build software around your people, your processes, and your plans for growth.</p><div className={styles.actions}><Button asChild className={`group relative min-h-11 gap-2 rounded-lg px-5 font-body ${actionStyles.goalsButton}`}><ConnectLink href="/connect"><span className={shineStyles.shine} aria-hidden="true" style={{ "--shine-duration": "7.2s", "--shine-delay": "-2.4s" } as CSSProperties} />Let’s Build Your Product<ArrowUpRight className={actionStyles.buttonArrow} aria-hidden="true" /><ROITooltip icon="launch" text="Build a product that earns its place." /></ConnectLink></Button><a href="#software-demo" className={styles.secondary}>See an idea take shape<ArrowDown size={18} strokeWidth={2.75} aria-hidden="true" /></a></div></div>
    <aside className={styles.promise} aria-labelledby="software-benefits-heading"><div><p className={styles.promiseLabel}>BUILT FOR YOUR BUSINESS. READY FOR WHAT&apos;S NEXT.</p><h2 id="software-benefits-heading">Good software makes<br />everyday work easier.</h2></div><ul><li><Layers3 size={22} aria-hidden="true" /><div><strong>Built around your business</strong><p>Give your users and team a product that fits how they work.</p></div></li><li><Plug size={22} aria-hidden="true" /><div><strong>Your tools, working together</strong><p>Connect your systems so information moves without extra effort.</p></div></li><li><ShieldCheck size={22} aria-hidden="true" /><div><strong>Reliable today. Ready to evolve.</strong><p>Build a tested foundation that supports your next stage of growth.</p></div></li></ul></aside></div>
    <div id="software-demo" className={styles.widePreview}><SoftwareShowcase /></div>
  </div></section>;
}
