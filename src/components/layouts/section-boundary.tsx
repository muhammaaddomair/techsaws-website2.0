"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(useGSAP, ScrollTrigger);

type SectionBoundaryProps = {
  direction: "dark-light" | "light-dark";
};

export default function SectionBoundary({ direction }: SectionBoundaryProps) {
  const boundaryRef = useRef<HTMLDivElement>(null);
  const highlightRef = useRef<HTMLSpanElement>(null);

  useGSAP(
    () => {
      const media = gsap.matchMedia();

      media.add("(prefers-reduced-motion: no-preference)", () => {
        gsap.fromTo(highlightRef.current, { xPercent: -12, opacity: .25 }, {
          xPercent: 12,
          opacity: .65,
          ease: "none",
          scrollTrigger: {
            trigger: boundaryRef.current,
            start: "top bottom",
            end: "bottom top",
            scrub: 1.5,
          },
        });
      });

      return () => media.revert();
    },
    { scope: boundaryRef, dependencies: [direction], revertOnUpdate: true },
  );

  return (
    <div ref={boundaryRef} className={`section-boundary transition-${direction}`} aria-hidden="true">
      <svg viewBox="0 0 1440 360" preserveAspectRatio="none" focusable="false">
        <path
          className="section-boundary-fill"
          d="M0 180H1440V360H0Z"
          stroke="none"
        />
      </svg>
      <span ref={highlightRef} className="section-boundary-highlight" />
    </div>
  );
}
