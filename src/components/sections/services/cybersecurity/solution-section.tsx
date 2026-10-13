import type { CSSProperties } from "react";
import actionStyles from "@/components/sections/home/core-value-section.module.css";
import shineStyles from "@/components/layouts/header.module.css";
import ROITooltip from "@/components/shared/roi-tooltip";
import { ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import ConnectLink from "@/components/shared/connect-link";
import titleStyles from "@/components/sections/services/automation/section-heading-preview.module.css";
import SectionTitleDots from "@/components/shared/section-title-dots";
import { cybersecurityProtectionPageData } from "@/data/pages/services/cybersecurity-protection-page-data";
import headingStyles from "@/components/sections/home/why-section.module.css";
import cardStyles from "@/components/sections/home/core-value-section.module.css";
import ServiceSolutionSymbol from "@/components/shared/service-solution-symbol";
import styles from "../automation/solution-section.module.css";
import MobileCardCarousel from "@/components/shared/mobile-card-carousel";

const data = cybersecurityProtectionPageData.solution;

export default function SolutionSection() {
  return (
      <section className={`surface-light section ${styles.section}`} aria-labelledby="cybersecurity-solution-heading">
        <div className="page-layout">
          <div className={headingStyles.intro}>
            <div><p className={`${headingStyles.description} max-md:hidden`}>{data.description}</p><Button asChild className={`group relative mt-5 min-h-11 gap-2 rounded-lg px-5 font-body ${actionStyles.goalsButton}`}><ConnectLink href="/connect"><span className={shineStyles.shine} aria-hidden="true" style={{ "--shine-duration": "10.0s", "--shine-delay": "-4.1s" } as CSSProperties} />Discuss Your Security Needs<ArrowUpRight className={actionStyles.buttonArrow} aria-hidden="true" /><ROITooltip icon="shield" text="Close gaps before they cost you." /></ConnectLink></Button></div>
            <div className={headingStyles.heading}>
              <p className={headingStyles.eyebrow}><SectionTitleDots />{data.eyebrow}</p>
              <h2 id="cybersecurity-solution-heading" className={titleStyles.heading}>{data.heading[0]}<br />{data.heading[1]}</h2>
            </div>
          </div>
          <MobileCardCarousel className={`${cardStyles.cards} ${styles.cards}`} label="cybersecurity solutions">
            {data.items.map((item, index) => (
              <li key={item.id} className={cardStyles.card} data-tone={item.tone}>
                <span className={cardStyles.number}>{String(index + 1).padStart(2, "0")}</span>
                <h3 className={`font-heading ${cardStyles.heading}`}>{item.title}</h3>
                <div className={cardStyles.symbol}><ServiceSolutionSymbol service="cybersecurity" index={index} /></div>
                <p className={cardStyles.description}>{item.description}</p>
                <p className={cardStyles.service}>{item.detail}</p>
              </li>
            ))}
          </MobileCardCarousel>
        </div>
      </section>
  );
}
