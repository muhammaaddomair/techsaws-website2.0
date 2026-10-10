"use client";

import { useId, useRef } from "react";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { m as motion, useReducedMotion, useScroll, useSpring, useTransform } from "framer-motion";
import { Button } from "@/components/ui/button";
import artwork from "../../../../public/images/cta-iridescent-ribbon.png";
import styles from "./cta-section.module.css";

type CTASectionProps = {
  heading?: string;
  description?: string;
  buttonLabel?: string;
  href?: string;
};

export default function CTASection({
  heading = "Ready to build what’s next?",
  description = "Turn your next big idea into lasting impact. Let’s build smarter software, connected systems, and new possibilities for your business.",
  buttonLabel = "Let’s talk about your project",
  href = "mailto:techsaws.core@gmail.com",
}: CTASectionProps) {
  const headingId = useId();
  const sectionRef = useRef<HTMLElement>(null);
  const reduceMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: sectionRef, offset: ["start end", "end start"] });
  const artworkOffset = useTransform(scrollYProgress, [0, 1], [6, -6]);
  const smoothOffset = useSpring(artworkOffset, { stiffness: 35, damping: 25, mass: 1.5 });

  return (
    <section ref={sectionRef} aria-labelledby={headingId} className={`surface-dark ${styles.section}`}>
      <div className="page-layout">
        <div className={styles.panel}>
          <motion.div aria-hidden="true" className={styles.artwork} style={{ y: reduceMotion ? 0 : smoothOffset }}>
            {[styles.ribbonLeft, styles.ribbonRight].map((placement) => (
              <div key={placement} className={`${styles.ribbon} ${placement}`}>
                <Image src={artwork} alt="" fill sizes="(max-width: 768px) 280px, (max-width: 1023px) 360px, 480px" placeholder="blur" className={styles.image} />
              </div>
            ))}
          </motion.div>
          <div aria-hidden="true" className={styles.topLight} />
          <div className={styles.content}>
            <h2 id={headingId} className="text-balance font-heading text-3xl font-bold leading-[1.12] tracking-tight text-surface-heading sm:text-4xl lg:text-5xl">
              {heading}
            </h2>
            <p className="mx-auto mt-5 max-w-xl text-pretty font-body text-sm leading-7 text-surface-foreground sm:text-base">
              {description}
            </p>
            <Button asChild className={`mt-8 h-auto min-h-12 max-w-full gap-3 whitespace-normal rounded-xl px-6 py-3.5 font-body text-sm font-semibold text-primary-foreground hover:bg-primary-hover sm:text-base ${styles.button}`}>
              <a href={href}>
                {buttonLabel}
                <ArrowUpRight aria-hidden="true" className="size-5 transition-transform duration-300 motion-safe:group-hover/button:-translate-y-0.5 motion-safe:group-hover/button:translate-x-0.5" />
              </a>
            </Button>
          </div>
        </div>
      </div>
      <div aria-hidden="true" className={styles.footerLight} />
    </section>
  );
}

