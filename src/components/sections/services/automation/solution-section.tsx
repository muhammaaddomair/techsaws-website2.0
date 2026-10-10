import { aiAutomationPageData } from "@/data/pages/services/ai-automation-page-data";
import headingStyles from "@/components/sections/home/why-section.module.css";
import cardStyles from "@/components/sections/home/core-value-section.module.css";
import SolutionSymbol from "./solution-symbol";
import styles from "./solution-section.module.css";

const data = aiAutomationPageData.solution;

export default function SolutionSection() {
  return (
      <section className={`surface-light section ${styles.section}`} aria-labelledby="ai-solution-heading">
        <div className="page-layout">
          <div className={headingStyles.intro}>
            <p className={headingStyles.description}>{data.description}</p>
            <div className={headingStyles.heading}>
              <p className={headingStyles.eyebrow}><span aria-hidden="true"><i /><i /></span>{data.eyebrow}</p>
              <h2 id="ai-solution-heading" className="font-heading text-3xl font-medium leading-[1.12] tracking-tight text-surface-heading sm:text-4xl lg:text-5xl">{data.heading[0]}<br />{data.heading[1]}</h2>
            </div>
          </div>
          <ul className={`${cardStyles.cards} ${styles.cards}`} aria-label="AI automation solutions">
            {data.items.map((item, index) => (
              <li key={item.id} className={cardStyles.card} data-tone={item.tone}>
                <span className={cardStyles.number}>{String(index + 1).padStart(2, "0")}</span>
                <h3 className={`font-heading ${cardStyles.heading}`}>{item.title}</h3>
                <div className={cardStyles.symbol}><SolutionSymbol symbol={item.id} /></div>
                <p className={cardStyles.description}>{item.description}</p>
                <p className={cardStyles.service}>{item.detail}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>
  );
}
