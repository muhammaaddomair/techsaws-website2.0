import titleStyles from "@/components/sections/services/automation/section-heading-preview.module.css";
import SectionTitleDots from "@/components/shared/section-title-dots";
import { growthRevenueSystemsPageData } from "@/data/pages/services/growth-revenue-systems-page-data";
import introStyles from "@/components/sections/home/tech-stack-section.module.css";
import styles from "../automation/problem-section.module.css";
import ServiceProblemVisual from "@/components/shared/service-problem-visual";

const data = growthRevenueSystemsPageData.problem;

export default function ProblemSection() {
  return (
      <section aria-labelledby="growth-problem-heading" className={`surface-dark ${styles.section}`}>
        <div className="page-layout">
        <div className={introStyles.intro}>
          <p className={introStyles.eyebrow}><SectionTitleDots />{data.eyebrow}</p>
          <div>
            <h2 id="growth-problem-heading" className={titleStyles.heading}>
              {data.heading[0]}<br />{data.heading[1]}
            </h2>
            <p className="mt-6 max-w-xl text-sm leading-6 text-surface-foreground">{data.description}</p>
          </div>
        </div>
        <div className={styles.grid}>
          {data.items.map((item, index) => (
            <article className={styles.card} key={item.id}>
              <ServiceProblemVisual service="growth" index={index} labels={item.labels} caption={item.caption} />
              <p className={styles.number}>{String(index + 1).padStart(2, "0")}</p>
              <h3 className={styles.title}>{item.title}</h3>
              <p className={styles.description}>{item.description}</p>
            </article>
          ))}
        </div>
        </div>
      </section>
  );
}
