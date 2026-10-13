import type { CSSProperties } from "react";
import { ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import ConnectLink from "@/components/shared/connect-link";
import ROITooltip from "@/components/shared/roi-tooltip";
import actionStyles from "@/components/sections/home/core-value-section.module.css";
import shineStyles from "@/components/layouts/header.module.css";
import Image from "next/image";
import SectionTitleDots from "@/components/shared/section-title-dots";
import titleStyles from "@/components/sections/services/automation/section-heading-preview.module.css";
import styles from "./about-editorial.module.css";

export default function MissionVisionSection() {
  return <section className={`surface-dark section ${styles.mission}`} aria-labelledby="mission-heading"><div className="page-layout">
    <div className={styles.missionIntro}><div><p className={styles.eyebrow}><SectionTitleDots />Our Mission &amp; Vision</p><h2 id="mission-heading" className={`mt-4 ${titleStyles.heading}`}>Built for<br />what comes next.</h2></div><div className={styles.missionDescription}><p className={styles.introText}>A clear purpose. A lasting direction.<br />Technology that moves your business forward.</p><Button asChild className={`group relative mt-5 min-h-11 gap-2 rounded-lg px-5 font-body ${actionStyles.goalsButton}`}><ConnectLink href="/connect"><span aria-hidden="true" className={shineStyles.shine} style={{ "--shine-duration": "8.7s", "--shine-delay": "-3.4s" } as CSSProperties} />Build Your Next Step<ArrowUpRight className={actionStyles.buttonArrow} aria-hidden="true" /><ROITooltip icon="launch" text="Turn ambition into practical progress." /></ConnectLink></Button></div></div>
    <div className={styles.missionBody}><div className={styles.artwork}><div className={styles.imageFrame}><Image src="/images/about/our-mission-section-img.png" alt="" fill sizes="(max-width: 767px) 75vw, 352px" className={styles.image} /></div></div><div className={styles.statements}>
      <article><p className={styles.label}>01 / OUR MISSION</p><h3>Help ambition become progress.</h3><p>Build the systems that help ambitious businesses operate smarter, grow faster, and scale with confidence.</p></article>
      <article><p className={styles.label}>02 / OUR VISION</p><h3>Make better technology practical.</h3><p>Make reliable, intelligent, and secure technology a practical foundation for business growth.</p></article>
    </div></div>
  </div></section>;
}
