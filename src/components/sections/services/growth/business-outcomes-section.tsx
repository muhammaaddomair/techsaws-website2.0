"use client";

import titleStyles from "@/components/sections/services/automation/section-heading-preview.module.css";


import SectionTitleDots from "@/components/shared/section-title-dots";




import { useRef } from "react";
import { m, useInView, useReducedMotion } from "framer-motion";
import { growthRevenueSystemsPageData } from "@/data/pages/services/growth-revenue-systems-page-data";
import styles from "@/components/sections/home/services-section.module.css";
import ServiceOutcomeVisual from "@/components/shared/service-outcome-visual";

const data = growthRevenueSystemsPageData.outcomes;
function OutcomeCard({ item, index }: { item: (typeof data.items)[number]; index: number }) {
  const ref = useRef<HTMLElement>(null);
  const visible = useInView(ref, { margin: "0px 0px -40px 0px" });
  const reduced = useReducedMotion();
  return <m.article ref={ref} data-tone={item.tone} data-running={visible && !reduced} className={styles.card} style={{ boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px" }} initial={false} whileInView={reduced ? undefined : { y: [18, 0], opacity: [.7, 1] }} viewport={{ once: true, amount: .15 }} transition={{ duration: .7, delay: index * .06 }}>
    <div className={styles.cardCopy}><p className={styles.number}>{String(index + 1).padStart(2, "0")} / IMPACT</p><h3 className="font-heading">{item.title}</h3><p className={styles.description}>{item.description}</p></div>
    <div className={styles.story} aria-hidden="true"><ServiceOutcomeVisual service="growth" index={index} labels={item.labels} /></div>
    <div className={styles.cardFooter}><ul>{item.tags.map(tag => <li key={tag}>{tag}</li>)}</ul></div>
  </m.article>;
}
export default function BusinessOutcomesSection() {
  return <section aria-labelledby="growth-impact-heading" className={`surface-light section ${styles.section}`}><div className="page-layout">
    <div className={styles.intro}><div className={styles.introCopy}><h2 id="growth-impact-heading" className={titleStyles.heading}>{data.heading[0]}<br />{data.heading[1]}</h2><p>{data.description}</p></div><p className={styles.eyebrow}><SectionTitleDots />{data.eyebrow}</p></div>
    <div className={styles.flow}><svg aria-hidden="true" className={styles.route} viewBox="0 0 1200 1080" preserveAspectRatio="none" fill="none"><path className={styles.dashedRoute} d="M70 18H1130Q1182 18 1182 70V486Q1182 540 1130 540Q1182 540 1182 594V1010Q1182 1062 1130 1062H70Q18 1062 18 1010V594Q18 540 70 540Q18 540 18 486V70Q18 18 70 18Z" /><g className={styles.routeArrows}><path d="M180 10l8 8-8 8" /><path d="M598 10l8 8-8 8" /><path d="M1016 10l8 8-8 8" /><path d="M188 1054l-8 8 8 8" /><path d="M598 1054l-8 8 8 8" /><path d="M1008 1054l-8 8 8 8" /></g></svg><div className={styles.bento}>{data.items.map((item, index) => <OutcomeCard key={item.id} item={item} index={index} />)}</div></div>
  </div></section>;
}
