"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(useGSAP, ScrollTrigger);

type SectionBoundaryProps = {
  direction: "dark-light" | "light-dark";
};

const curves = {
  "dark-light": {
    edge: "M-20 110 C160 20 230 285 490 205 S790 35 1030 145 S1300 280 1460 170",
    crest: "M-20 110 C160 26 230 279 490 201 S790 41 1030 149 S1300 274 1460 170",
  },
  "light-dark": {
    edge: "M-20 190 C170 300 300 30 550 125 S820 295 1040 175 S1300 65 1460 130",
    crest: "M-20 190 C170 294 300 36 550 129 S820 289 1040 171 S1300 71 1460 130",
  },
};

export default function SectionBoundary({ direction }: SectionBoundaryProps) {
  const boundaryRef = useRef<HTMLDivElement>(null);
  const pathRef = useRef<SVGPathElement>(null);
  const { edge, crest } = curves[direction];
  const closePath = (curve: string) => `${curve} L1460 380 L-20 380 Z`;

  useGSAP(
    () => {
      const media = gsap.matchMedia();

      media.add("(prefers-reduced-motion: no-preference)", () => {
        gsap.timeline({
          defaults: { duration: 1, ease: "sine.inOut" },
          scrollTrigger: {
            trigger: boundaryRef.current,
            start: "top bottom",
            end: "bottom top",
            scrub: 3,
          },
        })
          .to(pathRef.current, { attr: { d: closePath(crest) } })
          .to(pathRef.current, { attr: { d: closePath(edge) } });
      });

      return () => media.revert();
    },
    { scope: boundaryRef, dependencies: [direction], revertOnUpdate: true },
  );

  return (
    <div ref={boundaryRef} className={`section-boundary transition-${direction}`} aria-hidden="true">
      <svg viewBox="0 0 1440 360" preserveAspectRatio="none" focusable="false">
        <path
          ref={pathRef}
          className="section-boundary-fill"
          d={closePath(edge)}
          stroke="none"
        />
      </svg>
    </div>
  );
}
