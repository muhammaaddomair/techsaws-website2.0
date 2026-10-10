import { coreValuesSectionData } from "@/data/pages/home-page-data";
import CoreValueSymbol from "./core-value-symbol";
import styles from "./core-value-section.module.css";

function CoreValueSection() {
  return (
    <section
      aria-labelledby="core-values-heading"
      className={styles.section}
    >
      <div className={styles.intro}>
      <div>
        <p className="flex items-center gap-3 text-sm text-surface-heading">
          <span aria-hidden="true" className="flex gap-1">
            <span className="size-1.5 rounded-full bg-primary" />
            <span className="size-1.5 rounded-full bg-primary" />
          </span>{" "}
          {coreValuesSectionData.eyebrow}
        </p>
        <h2
          id="core-values-heading"
          className="mt-4 font-heading text-3xl font-medium tracking-tight text-surface-heading sm:text-4xl"
        >
          {coreValuesSectionData.heading}
        </h2>
      </div>
      <div className="flex items-start border-l border-surface-border pl-5">
        <p className="max-w-md text-sm leading-7 text-surface-foreground">
          {coreValuesSectionData.description}
        </p>
      </div>
      </div>
      <ul aria-label="The business value we deliver" className={styles.cards}>
        {coreValuesSectionData.values.map((value) => (
          <li key={value.id} className={styles.card} data-tone={value.tone}>
            <span className={styles.number}>{value.number}</span>
            <h3 className={`font-heading ${styles.heading}`}>{value.title}</h3>
            <div className={styles.symbol}><CoreValueSymbol symbol={value.symbol} /></div>
            <p className={styles.description}>{value.description}</p>
            <p className={styles.service}>{value.service}</p>
          </li>
        ))}
      </ul>
      <p className="mt-8 max-w-3xl text-sm leading-7 text-surface-foreground">{coreValuesSectionData.deliveryNote}</p>
    </section>
  );
}

export default CoreValueSection;
