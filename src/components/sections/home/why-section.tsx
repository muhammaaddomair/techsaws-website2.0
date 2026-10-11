"use client";

import titleStyles from "@/components/sections/services/automation/section-heading-preview.module.css";


import SectionTitleDots from "@/components/shared/section-title-dots";


import { useRef } from "react";
import { Check, CircleHelp, Layers3, Users, Workflow, Wrench, ArrowUpRight } from "lucide-react";
import { m as motion, useInView, useReducedMotion } from "framer-motion";
import { whySectionData as data } from "@/data/pages/home-page-data";
import styles from "./why-section.module.css";

type Reason = (typeof data.reasons)[number];

function ReasonStory({ reason }: { reason: Reason }) {
  if (reason.id === "systems") return (
    <div className={styles.systems}>
      <svg className={styles.connections} viewBox="0 0 400 210" fill="none" preserveAspectRatio="none"><path d="M70 56V102Q70 115 90 115H200M200 56V164M330 56V102Q330 115 310 115H200" /><circle className={styles.signal} cx="200" cy="115" r="3" /></svg>
      <div className={styles.systemNodes}>{[Users, Workflow, Layers3].map((Icon, index) => <div key={reason.labels[index]}><Icon size={18} strokeWidth={1.5} /><span>{reason.labels[index]}</span></div>)}</div>
      <div className={styles.connected}><span className={styles.statusDot} />{reason.labels[3]}</div>
    </div>
  );
  if (reason.id === "outcomes") return (
    <div className={styles.outcomes}>
      {reason.labels.map((label, index) => <div key={label} className={styles.task} style={{ animationDelay: `${index * 1.2}s` }}><span className={styles.taskIcon}>{index === 0 ? <CircleHelp size={17} /> : <Check size={17} />}</span><span>{label}</span><i /><span className={styles.taskProgress} /></div>)}
    </div>
  );
  if (reason.id === "growth") return (
    <div className={styles.growth}>
      <div className={styles.building}>{reason.labels.slice(1).map((label, index) => <div key={label} className={styles.buildingColumn}><span>{label}</span>{Array.from({ length: index + 2 }, (_, block) => <i key={block} style={{ animationDelay: `${index * .5 + block * .3}s` }} />)}</div>)}</div>
      <div className={styles.foundation}><Layers3 size={16} />{reason.labels[0]}<Check size={15} /></div>
    </div>
  );
  return (
    <div className={styles.partnership}>
      <div className={styles.timeline}>{[ArrowUpRight, Wrench, Workflow].map((Icon, index) => <div key={reason.labels[index]}><span style={{ animationDelay: `${index * 1.5}s` }}><Icon size={20} strokeWidth={1.5} /></span><p>{reason.labels[index]}</p></div>)}</div>
      <div className={styles.continuity}><span className={styles.statusDot} />{reason.labels[3]}<svg viewBox="0 0 60 24" fill="none"><path d="M5 12C5 0 18 0 30 12S55 24 55 12S42 0 30 12S5 24 5 12" /></svg></div>
    </div>
  );
}

function ReasonCard({ reason, index }: { reason: Reason; index: number }) {
  const ref = useRef<HTMLElement>(null);
  const visible = useInView(ref, { margin: "0px 0px -30px 0px" });
  const reduced = useReducedMotion();
  return (
    <motion.article ref={ref} className={styles.reason} data-tone={reason.tone} data-running={visible && !reduced}
      initial={false} whileInView={reduced ? undefined : { opacity: [.7, 1], y: [14, 0] }} transition={{ duration: .7, delay: index * .06 }} viewport={{ once: true, amount: .2 }}>
      <div aria-hidden="true" className={styles.visual}><ReasonStory reason={reason} /></div>
      <div className={styles.copy}><span className={styles.number}>{reason.number}</span><h3 className="font-heading">{reason.title}</h3><p>{reason.description}</p></div>
    </motion.article>
  );
}

export default function WhySection() {
  return (
    <section className={`surface-light section ${styles.section}`} aria-labelledby="why-heading">
      <div className="page-layout">
        <div className={styles.intro}>
          <p className={`${styles.description} max-md:hidden`}>{data.description}</p>
          <div className={styles.heading}>
            <p className={styles.eyebrow}><SectionTitleDots />{data.eyebrow}</p>
            <h2 id="why-heading" className={titleStyles.heading}>{data.heading[0]}<br />{data.heading[1]}</h2>
          </div>
        </div>
        <div className={styles.flow}>
          <svg aria-hidden="true" className={styles.route} viewBox="0 0 1200 960" preserveAspectRatio="none" fill="none"><path d="M65 18H1135Q1182 18 1182 65V433Q1182 480 1135 480Q1182 480 1182 527V895Q1182 942 1135 942H65Q18 942 18 895V527Q18 480 65 480Q18 480 18 433V65Q18 18 65 18Z" /><g className={styles.routeArrows}><path d="M280 10l8 8-8 8" /><path d="M918 10l8 8-8 8" /><path d="M288 934l-8 8 8 8" /><path d="M918 934l-8 8 8 8" /></g></svg>
          <div className={styles.grid}>{data.reasons.map((reason, index) => <ReasonCard key={reason.id} reason={reason} index={index} />)}</div>
        </div>
      </div>
    </section>
  );
}

