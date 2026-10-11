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
            <p className={`${headingStyles.description} max-md:hidden`}>{data.description}</p>
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
