"use client";

import { useRef } from "react";
import Link from "next/link";
import { ArrowUpRight, Check, Cpu, Layers3, ShieldCheck, Workflow } from "lucide-react";
import { m as motion, useInView, useReducedMotion } from "framer-motion";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { servicesSectionData as data } from "@/data/pages/home-page-data";
import styles from "./services-section.module.css";

gsap.registerPlugin(useGSAP, ScrollTrigger);

type Service = (typeof data.services)[number];

function ServiceStory({ service }: { service: Service }) {
  if (service.id === "automation") return (
    <div className={styles.workflow}>
      <div className={styles.workflowNode}><Workflow /><span>{service.story[0]}</span></div>
      <div className={styles.connector}><i /></div>
      <div className={`${styles.workflowNode} ${styles.processor}`}><Cpu /><span>{service.story[1]}</span></div>
      <div className={styles.connector}><i /></div>
      <div className={styles.workflowNode}><Check /><span>{service.story[2]}</span></div>
    </div>
  );
  if (service.id === "software") return (
    <div className={styles.product}>
      <div className={styles.windowBar}><span className={styles.windowDots}><i /><i /><i /></span><span>{service.story[0]}</span><Layers3 size={15} /></div>
      <div className={styles.windowBody}>
        <div className={styles.sidebar}><i /><i /><i /><i /></div>
        <div className={styles.workspace}>
          <div className={styles.modules}>{service.story.slice(1).map((label, index) => <div key={label} style={{ animationDelay: `${index * 0.8}s` }}><span className={styles.moduleIcon}>{index === 0 ? "{ }" : index === 1 ? "↗" : "✓"}</span><span>{label}</span></div>)}</div>
          <svg viewBox="0 0 360 80" fill="none"><path className={styles.graph} d="M0 66C35 66 35 44 70 44S110 58 145 38S195 44 230 24S275 32 310 12S345 18 360 6" /></svg>
          <div className={styles.codeLines}><i /><i /><i /></div>
        </div>
      </div>
    </div>
  );
  if (service.id === "growth") return (
    <div className={styles.pipeline}>
      {service.story.map((label, index) => <div key={label} className={styles.pipelineColumn}><span>{label}</span>{Array.from({ length: 3 - index }, (_, item) => <div key={item} className={styles.lead} style={{ animationDelay: `${index * 0.7 + item * 0.3}s` }}><i /><span><b /><b /></span>{index === 2 && <Check size={16} />}</div>)}</div>)}
      <div className={styles.pipelineTrack}><i /></div>
    </div>
  );
  return (
    <div className={styles.security}>
      <div className={styles.shieldOrbit}><span /><span /><ShieldCheck strokeWidth={1.1} /></div>
      <div className={styles.securitySteps}>{service.story.map((label) => <span key={label}><Check size={12} />{label}</span>)}</div>
    </div>
  );
}

function ServiceCard({ service, index }: { service: Service; index: number }) {
  const ref = useRef<HTMLElement>(null);
  const visible = useInView(ref, { margin: "0px 0px -40px 0px" });
  const reduced = useReducedMotion();
  return (
    <motion.article ref={ref} data-tone={service.tone} data-running={visible && !reduced} className={styles.card}
      initial={false} whileInView={reduced ? undefined : { y: [18, 0], opacity: [0.7, 1] }} viewport={{ once: true, amount: 0.15 }} transition={{ duration: 0.7, delay: index * 0.06, ease: [0.22, 1, 0.36, 1] }}>
      <div className={styles.cardCopy}>
        <p className={styles.number}>{service.number} / SERVICES</p>
        <h3 className="font-heading"><Link href={service.href} className={styles.titleLink}>{service.title}<ArrowUpRight aria-hidden="true" /></Link></h3>
        <p className={styles.description}>{service.description}</p>
      </div>
      <div aria-hidden="true" className={styles.story}><ServiceStory service={service} /></div>
      <div className={styles.cardFooter}><ul>{service.tags.map(tag => <li key={tag}>{tag}</li>)}</ul><span aria-hidden="true" className={styles.explore}><ArrowUpRight /></span></div>
    </motion.article>
  );
}

export default function ServicesSection() {
  const root = useRef<HTMLElement>(null);
  const route = useRef<SVGPathElement>(null);
  useGSAP(() => {
    const media = gsap.matchMedia();
    media.add("(prefers-reduced-motion: no-preference)", () => {
      gsap.fromTo(route.current, { strokeDashoffset: 1 }, { strokeDashoffset: 0, duration: 1.8, ease: "power2.out", scrollTrigger: { trigger: root.current, start: "top 75%", once: true } });
    });
    return () => media.revert();
  }, { scope: root });
  return (
    <section ref={root} aria-labelledby="services-heading" className={`surface-light section ${styles.section}`}>
      <div className="page-layout">
        <div className={styles.intro}>
          <div className={styles.introCopy}>
            <h2 id="services-heading" className="font-heading text-3xl font-medium leading-[1.12] tracking-tight text-surface-heading sm:text-4xl lg:text-5xl">{data.heading[0]}<br />{data.heading[1]}</h2>
            <p>{data.description}</p>
          </div>
          <p className={styles.eyebrow}><span aria-hidden="true"><i /><i /></span>{data.eyebrow}</p>
        </div>
        <div className={styles.flow}>
          <svg aria-hidden="true" className={styles.route} viewBox="0 0 1200 1080" preserveAspectRatio="none" fill="none">
            <path className={styles.dashedRoute} d="M70 18H1130Q1182 18 1182 70V486Q1182 540 1130 540Q1182 540 1182 594V1010Q1182 1062 1130 1062H70Q18 1062 18 1010V594Q18 540 70 540Q18 540 18 486V70Q18 18 70 18Z" />
            <path ref={route} pathLength="1" className={styles.drawRoute} d="M70 18H1130Q1182 18 1182 70V486Q1182 540 1130 540Q1182 540 1182 594V1010Q1182 1062 1130 1062H70Q18 1062 18 1010V594Q18 540 70 540Q18 540 18 486V70Q18 18 70 18Z" />
            <g className={styles.routeArrows}><path d="m180 10 8 8-8 8m410-16 8 8-8 8m410-16 8 8-8 8M188 1054l-8 8 8 8m410-16-8 8 8 8m410-16-8 8 8 8" /></g>
          </svg>
          <div className={styles.bento}>{data.services.map((service, index) => <ServiceCard key={service.id} service={service} index={index} />)}</div>
        </div>
      </div>
    </section>
  );
}
