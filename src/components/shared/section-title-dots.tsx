import styles from "./section-title-dots.module.css";

export default function SectionTitleDots() {
  return <span aria-hidden="true" className={styles.dots}><span /><span /></span>;
}
