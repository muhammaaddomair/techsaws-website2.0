"use client";

import { useId, useState } from "react";
import { AnimatePresence, m as motion, useReducedMotion } from "framer-motion";
import { Plus } from "lucide-react";
import { faqSectionData as data } from "@/data/pages/home-page-data";
import styles from "./faq-section.module.css";

export default function FAQSection() {
  const id = useId();
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const reduceMotion = useReducedMotion();
  return (
    <section aria-labelledby="faq-heading" className={`surface-dark section ${styles.section}`}>
      <div className="page-layout">
        <div className={styles.intro}>
          <div>
            <p className={styles.eyebrow}><span aria-hidden="true"><i /><i /></span>{data.eyebrow}</p>
            <h2 id="faq-heading" className="mt-4 font-heading text-3xl font-medium leading-[1.12] tracking-tight text-surface-heading sm:text-4xl">{data.heading}</h2>
          </div>
          <p className={styles.description}>{data.description}</p>
        </div>
        <div className={styles.questions}>
          {data.items.map((item, index) => {
            const isOpen = openIndex === index;
            const triggerId = `${id}-question-${index}`;
            const answerId = `${id}-answer-${index}`;
            return (
              <div key={item.question} className={styles.item} data-open={isOpen}>
                <h3>
                  <button id={triggerId} type="button" className={styles.trigger} aria-expanded={isOpen} aria-controls={answerId} onClick={() => setOpenIndex(isOpen ? null : index)}>
                    <span aria-hidden="true" className={styles.number}>{String(index + 1).padStart(2, "0")}</span>
                    <span>{item.question}</span>
                    <motion.span aria-hidden="true" className={styles.icon} animate={{ rotate: isOpen ? 45 : 0 }} transition={{ duration: reduceMotion ? 0 : 0.25 }}>
                      <Plus size={20} strokeWidth={1.5} />
                    </motion.span>
                  </button>
                </h3>
                <div id={answerId} role="region" aria-labelledby={triggerId} aria-hidden={!isOpen}>
                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div key="answer" className={styles.answerWrap} initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: reduceMotion ? 0 : 0.28, ease: [0.22, 1, 0.36, 1] }}>
                        <p className={styles.answer}>{item.answer}</p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
