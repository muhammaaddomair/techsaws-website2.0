import Image from "next/image";
import SectionTitleDots from "@/components/shared/section-title-dots";
import titleStyles from "@/components/sections/services/automation/section-heading-preview.module.css";
import styles from "./about-editorial.module.css";

const principles = [
  { title: "Systems-First Thinking", text: "We design connected systems rather than isolated technical fixes." },
  { title: "Business-Aligned Engineering", text: "Technical decisions are guided by measurable business objectives." },
  { title: "Security & Reliability by Design", text: "Security, performance, and maintainability are considered from the architecture stage." },
  { title: "Built for Long-Term Scale", text: "We prioritize systems that remain useful and adaptable as businesses grow." },
];

export default function EngineeringPrinciplesSection() {
  return <section className={`surface-dark section ${styles.principles}`} aria-labelledby="principles-heading"><div className="page-layout">
    <div className={styles.principlesHeader}><p className={styles.eyebrow}><SectionTitleDots />What Sets Us Apart</p><div><h2 id="principles-heading" className={titleStyles.heading}>Engineering<br />with purpose.</h2><p className={`${styles.introText} ${styles.headerDescription}`}>The principles behind our technical decisions, from the first conversation to the systems you depend on.</p></div></div>
    <div className={styles.missionBody}><ol className={styles.principleList}>{principles.map(({ title, text }, index) => <li key={title}><span className={styles.number}>{String(index + 1).padStart(2, "0")}</span><div><svg width="26" height="26" viewBox="0 0 24 24" className={styles.principleIcon} data-kind={index} aria-hidden="true" fill="currentColor">
      {index === 0 && <><rect x="8" y="1" width="8" height="6" rx="1.5" /><rect x="1" y="17" width="8" height="6" rx="1.5" /><rect x="15" y="17" width="8" height="6" rx="1.5" /><path d="M12 7V12M5 17V12H19V17" fill="none" stroke="currentColor" strokeWidth="2" /></>}
      {index === 1 && <><circle cx="12" cy="12" r="11" /><circle cx="12" cy="12" r="7" fill="none" stroke="#fff" strokeWidth="2" /><circle cx="12" cy="12" r="3" fill="#fff" /></>}
      {index === 2 && <><path d="M12 1L21 5V12C21 17 17 21 12 23C7 21 3 17 3 12V5Z" /><path d="M7 12L10 15L17 8" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></>}
      {index === 3 && <><path d="M12 13C5 13 2 9 2 4C9 4 12 7 12 13ZM12 10C12 4 16 1 22 1C22 7 18 10 12 10Z" /><path d="M12 9V22M6 22H18" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" /></>}
    </svg><h3>{title}</h3><p>{text}</p></div></li>)}</ol><div className={styles.artwork}><div className={styles.imageFrame}><Image src="/images/about/sets-apart-section-img.png" alt="" fill sizes="(max-width: 767px) 75vw, 352px" className={styles.image} /></div></div></div>
  </div></section>;
}
