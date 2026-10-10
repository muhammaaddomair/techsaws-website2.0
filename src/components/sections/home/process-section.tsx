"use client";

import Image from "next/image";
import ConnectLink from "@/components/shared/connect-link";
import { ArrowUpRight } from "lucide-react";
import { m as motion, useReducedMotion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { processSectionData as data } from "@/data/pages/home-page-data";
import styles from "./process-section.module.css";

export default function ProcessSection() {
  const reduced = useReducedMotion();
  return (
    <section className={`surface-dark section ${styles.section}`} aria-labelledby="process-heading">
      <div className="page-layout">
        <div className={styles.intro}>
          <p className={styles.eyebrow}><span aria-hidden="true"><i /><i /></span>{data.eyebrow}</p>
          <div>
            <h2 id="process-heading" className="font-heading text-3xl font-medium leading-[1.12] tracking-tight text-surface-heading sm:text-4xl lg:text-5xl">{data.heading[0]}<br />{data.heading[1]}</h2>
            <p className={styles.description}>{data.description}</p>
            <Button asChild className="mt-5 min-h-11 gap-2 rounded-lg px-5 font-body"><ConnectLink href={data.href}>{data.buttonLabel}<ArrowUpRight aria-hidden="true" /></ConnectLink></Button>
            <p className={styles.support}>{data.supportingText}</p>
          </div>
        </div>
        <ol className={styles.steps} aria-label="How to start working with TechSaws">
          {data.steps.map((step, index) => (
            <motion.li key={step.id} className={styles.card} initial={false}
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
        </ol>
      </div>
    </section>
  );
}
