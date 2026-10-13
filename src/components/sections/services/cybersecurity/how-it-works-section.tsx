"use client";
import type { CSSProperties } from "react";
import actionStyles from "@/components/sections/home/core-value-section.module.css";
import shineStyles from "@/components/layouts/header.module.css";
import ROITooltip from "@/components/shared/roi-tooltip";
import { ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import ConnectLink from "@/components/shared/connect-link";


import titleStyles from "@/components/sections/services/automation/section-heading-preview.module.css";


import SectionTitleDots from "@/components/shared/section-title-dots";




import { useRef } from "react";
import { m, useInView, useReducedMotion } from "framer-motion";
import { cybersecurityProtectionPageData } from "@/data/pages/services/cybersecurity-protection-page-data";
import styles from "@/components/sections/home/why-section.module.css";
import ServiceProcessVisual from "@/components/shared/service-process-visual";

const stages = ["Assess", "Test", "Secure", "Verify"];
const data = cybersecurityProtectionPageData.process;
function ProcessCard({ item, index }: { item: (typeof data.items)[number]; index: number }) {
  const ref = useRef<HTMLElement>(null);
  const visible = useInView(ref, { margin: "0px 0px -40px 0px" });
  const reduced = useReducedMotion();
  return <m.article ref={ref} className={styles.reason} data-tone={item.tone} data-running={visible && !reduced} initial={false} whileInView={reduced ? undefined : { opacity: [.7, 1], y: [14, 0] }} transition={{ duration: .7, delay: index * .06 }} viewport={{ once: true, amount: .2 }}>
    <div aria-hidden="true" className={styles.visual} style={{ boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px" }}><ServiceProcessVisual service="cybersecurity" step={index} labels={item.labels} /></div>
    <div className={styles.copy}><span className={styles.number}>STEP {String(index + 1).padStart(2, "0")} / {stages[index]}</span><h3 className="font-heading">{item.title}</h3><p>{item.description}</p></div>
  </m.article>;
}
export default function HowItWorksSection() {
  return <section className={`surface-light section ${styles.section}`} aria-labelledby="cybersecurity-process-heading"><div className="page-layout">
    <div className={styles.intro}><div><p className={styles.description}>{data.description}</p><Button asChild className={`group relative mt-5 min-h-11 gap-2 rounded-lg px-5 font-body ${actionStyles.goalsButton}`}><ConnectLink href="/connect"><span className={shineStyles.shine} aria-hidden="true" style={{ "--shine-duration": "10.0s", "--shine-delay": "-4.1s" } as CSSProperties} />Plan Your Security Assessment<ArrowUpRight className={actionStyles.buttonArrow} aria-hidden="true" /><ROITooltip icon="search" text="Find the risks that matter first." /></ConnectLink></Button></div><div className={styles.heading}><p className={styles.eyebrow}><SectionTitleDots />{data.eyebrow}</p><h2 id="cybersecurity-process-heading" className={titleStyles.heading}>{data.heading[0]}<br />{data.heading[1]}</h2></div></div>
    <div className={styles.flow}><svg aria-hidden="true" className={styles.route} viewBox="0 0 1200 960" preserveAspectRatio="none" fill="none"><path d="M65 18H1135Q1182 18 1182 65V433Q1182 480 1135 480Q1182 480 1182 527V895Q1182 942 1135 942H65Q18 942 18 895V527Q18 480 65 480Q18 480 18 433V65Q18 18 65 18Z" /><g className={styles.routeArrows}><path d="M280 10l8 8-8 8" /><path d="M918 10l8 8-8 8" /><path d="M288 934l-8 8 8 8" /><path d="M918 934l-8 8 8 8" /></g></svg><div className={styles.grid}>{data.items.map((item, index) => <ProcessCard key={item.id} item={item} index={index} />)}</div></div>
  </div></section>;
}
