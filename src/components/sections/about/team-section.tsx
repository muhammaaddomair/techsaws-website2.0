"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { ArrowLeft, ArrowRight } from "lucide-react";
import SectionTitleDots from "@/components/shared/section-title-dots";
import titleStyles from "@/components/sections/services/automation/section-heading-preview.module.css";
import { teamSectionData as data } from "@/data/pages/about-page-data";
import portrait from "../../../../public/images/team/team-img-placeholder.jpg";
import styles from "./team-section.module.css";

export default function TeamSection() {
  const track = useRef<HTMLUListElement>(null);
  const [position, setPosition] = useState({ start: true, end: false });
  function updatePosition() {
    const list = track.current;
    if (list) setPosition({ start: list.scrollLeft < 2, end: list.scrollLeft + list.clientWidth >= list.scrollWidth - 2 });
  }
  useEffect(() => {
    const list = track.current;
    if (!list) return;
    const observer = new ResizeObserver(() => setPosition({ start: list.scrollLeft < 2, end: list.scrollLeft + list.clientWidth >= list.scrollWidth - 2 }));
    observer.observe(list);
    return () => observer.disconnect();
  }, []);
  function move(direction: number) {
    const list = track.current;
    const card = list?.firstElementChild;
    if (!list || !card) return;
    const distance = card.getBoundingClientRect().width + parseFloat(getComputedStyle(list).columnGap);
    list.scrollBy({ left: direction * distance, behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches ? "instant" : "smooth" });
  }
  return (
    <section className={`surface-light section ${styles.section}`} aria-labelledby="team-heading">
      <div className="page-layout">
        <div className={styles.intro}>
          <div><p className={styles.eyebrow}><SectionTitleDots />{data.eyebrow}</p><h2 id="team-heading" className={`mt-4 ${titleStyles.heading}`}>{data.heading[0]}<br />{data.heading[1]}</h2></div>
          <p className={styles.description}>{data.description}</p>
        </div>
      </div>
      <ul ref={track} id="team-carousel" className={styles.track} aria-label="Leadership and engineering team" tabIndex={0} onScroll={updatePosition} data-lenis-prevent-touch onKeyDown={event => { if (event.key === "ArrowLeft" || event.key === "ArrowRight") { event.preventDefault(); move(event.key === "ArrowLeft" ? -1 : 1); } }}>
        {data.members.map(member => <li key={member.id} className={`surface-dark ${styles.card}`}>
          <div className={styles.portrait}><Image src={portrait} alt="Team portrait placeholder" fill sizes="(max-width: 639px) 82vw, (max-width: 1023px) 45vw, 360px" placeholder="blur" className={styles.image} /></div>
          <div className={styles.copy}><h3>{member.name}</h3><p className={styles.designation}>{member.designation}</p><p className={styles.responsibility}>{member.responsibility}</p></div>
        </li>)}
      </ul>
      <div className={`page-layout ${styles.controls}`} aria-label="Team carousel controls">
        <button type="button" aria-label="Previous team member" aria-controls="team-carousel" disabled={position.start} onClick={() => move(-1)}><ArrowLeft size={19} aria-hidden="true" /></button>
        <button type="button" aria-label="Next team member" aria-controls="team-carousel" disabled={position.end} onClick={() => move(1)}><ArrowRight size={19} aria-hidden="true" /></button>
      </div>
    </section>
  );
}
