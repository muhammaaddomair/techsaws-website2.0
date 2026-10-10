import { aiAutomationPageData } from "@/data/pages/services/ai-automation-page-data";
import introStyles from "@/components/sections/home/tech-stack-section.module.css";
import styles from "./problem-section.module.css";
import ProblemVisual from "./problem-visual";

const data = aiAutomationPageData.problem;

export default function ProblemSection() {
  return (
      <section aria-labelledby="ai-problem-heading" className={`surface-dark ${styles.section}`}>
        <div className={`page-layout ${introStyles.section}`}>
        <div className={introStyles.intro}>
          <p className={introStyles.eyebrow}><span aria-hidden="true" className={introStyles.dots} />{data.eyebrow}</p>
          <div>
            <h2 id="ai-problem-heading" className="font-heading text-3xl font-medium leading-[1.12] tracking-tight text-surface-heading sm:text-4xl lg:text-5xl">
              {data.heading[0]}<br />{data.heading[1]}
            </h2>
            <p className="mt-6 max-w-xl text-sm leading-6 text-surface-foreground">{data.description}</p>
          </div>
        </div>
        <div className={styles.grid}>
          {data.items.map((item, index) => (
            <article className={styles.card} key={item.id}>
              <ProblemVisual kind={item.id} />
              <p className={styles.number}>{String(index + 1).padStart(2, "0")}</p>
              <h3 className={styles.title}>{item.title}</h3>
              <p className={styles.description}>{item.description}</p>
              <p className={styles.solution}><span>How we help</span>{item.solution}</p>
            </article>
          ))}
        </div>
        </div>
      </section>
  );
}
