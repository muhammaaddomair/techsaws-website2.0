import titleStyles from "@/components/sections/services/automation/section-heading-preview.module.css";
import SectionTitleDots from "@/components/shared/section-title-dots";
import Image from "next/image";
import { techStackSectionData } from "@/data/pages/home-page-data";
import styles from "./tech-stack-section.module.css";

const { technologies } = techStackSectionData;

function TechStackSection() {
  return (
    <section aria-labelledby="tech-stack-heading" className={styles.section}>
      <div className={styles.intro}>
        <div>
          <p className={styles.eyebrow}><SectionTitleDots /> {techStackSectionData.eyebrow}</p>
        </div>
        <div>
          <h2 id="tech-stack-heading" className={titleStyles.heading}>
            {techStackSectionData.heading[0]}<br />{techStackSectionData.heading[1]}
          </h2>
          <p className="mt-6 max-w-xl text-sm leading-6 text-surface-foreground max-md:hidden">
            {techStackSectionData.description}
          </p>
        </div>
      </div>
      <ul aria-label="Technologies we use" className={styles.grid}>
        {technologies.map((technology, index) => (
          <li key={technology.id} className={`${styles.card} ${index >= 6 ? styles.desktopOnly : index >= 4 ? styles.tabletUp : ""}`}>
            <Image src={technology.image} alt={technology.name} sizes="(max-width: 639px) 120px, 160px" className={styles.logo} />
          </li>
        ))}
      </ul>
      <div aria-hidden="true" className={`${styles.grid} ${styles.reflection}`}>
        {technologies.slice(0, 4).map((technology, index) => (
          <div key={technology.id} className={`${styles.card} ${index >= 3 ? styles.desktopOnly : index >= 2 ? styles.tabletUp : ""}`}>
            <Image src={technology.image} alt="" sizes="(max-width: 639px) 120px, 160px" className={styles.logo} />
          </div>
        ))}
      </div>
    </section>
  );
}

export default TechStackSection;
