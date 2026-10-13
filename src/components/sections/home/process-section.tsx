"use client";

import type { CSSProperties } from "react";
import shineStyles from "@/components/layouts/header.module.css";

import SectionTitleDots from "@/components/shared/section-title-dots";




import Image from "next/image";
import ROITooltip from "@/components/shared/roi-tooltip";
import actionStyles from "./core-value-section.module.css";
import ConnectLink from "@/components/shared/connect-link";
import { ArrowUpRight } from "lucide-react";
import { m as motion, useReducedMotion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { processSectionData as data } from "@/data/pages/home-page-data";
import styles from "./process-section.module.css";
import MobileCardCarousel from "@/components/shared/mobile-card-carousel";

export default function ProcessSection({ headingClassName, surface = "dark" }: { headingClassName?: string; surface?: "dark" | "light" } = {}) {
  const reduced = useReducedMotion();
  return (
    <section className={`surface-${surface} section ${styles.section}`} aria-labelledby="process-heading">
      <div className="page-layout">
        <div className={styles.intro}>
          <p className={styles.eyebrow}><SectionTitleDots />{data.eyebrow}</p>
          <div>
            <h2 id="process-heading" className={headingClassName ?? "font-heading text-3xl font-medium leading-[1.12] tracking-tight text-surface-heading sm:text-4xl lg:text-5xl"}>{data.heading[0]}<br />{data.heading[1]}</h2>
            <p className={styles.description}>{data.description}</p>
            <Button asChild className={`group relative mt-5 min-h-11 gap-2 rounded-lg px-5 font-body ${actionStyles.goalsButton}`}><ConnectLink href={data.href}><span aria-hidden="true" className={shineStyles.shine} style={{ "--shine-duration": "9.3s", "--shine-delay": "-6.1s" } as CSSProperties} />{data.buttonLabel}<ArrowUpRight className={actionStyles.buttonArrow} aria-hidden="true" /><ROITooltip icon="plan" text="Share your idea. Find your next step." /></ConnectLink></Button>
          </div>
        </div>
        <MobileCardCarousel ordered className={styles.steps} label="How to start working with TechSaws">
          {data.steps.map((step, index) => (
            <motion.li key={step.id} className={`surface-light ${styles.card} ${surface === "light" ? styles.cardShadow : ""}`} initial={false}
              whileInView={reduced ? undefined : { opacity: [.75, 1], y: [18, 0] }} viewport={{ once: true, amount: .15 }} transition={{ duration: .7, delay: index * .08, ease: [.22, 1, .36, 1] }}>
              <div className={styles.copy}>
                <p className={styles.number}>STEP {step.number}</p>
                <h3 className="font-heading">{step.title}</h3>
                <p className={styles.cardDescription}>{step.description}</p>
              </div>
              <div aria-hidden="true" className={styles.artwork}>
                <Image src={step.image} alt="" fill loading={index === 0 ? "eager" : "lazy"} sizes="(max-width: 639px) 92vw, (max-width: 1023px) 46vw, 25vw" className={styles.image} />
              </div>
            </motion.li>
          ))}
        </MobileCardCarousel>
      </div>
    </section>
  );
}
