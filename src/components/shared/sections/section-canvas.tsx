"use client";

import { useEffect, useId, useRef, useState, type ReactNode } from "react";
import styles from "./section-canvas.module.css";

type SectionCanvasProps = {
  children: ReactNode;
  surface?: "dark" | "light";
  layout?: "contained" | "full";
};
type Region = { top: number; height: number; curve: string | null; incomingLight: boolean };

function PatternLines({ mirrored = false }: { mirrored?: boolean }) {
  return (
    <g transform={mirrored ? "translate(1440 0) scale(-1 1)" : undefined}>
      <g stroke="currentColor" strokeWidth="1">
        <path d="M288 0V1400M480 0V1400M0 300H480M0 490H1440M0 870H1440M0 1250H1440" />
        <path d="M900 0C900 350 170 350 170 700S900 1050 900 1400M288 0C288 200 50 300 50 500S600 700 600 900S288 1200 288 1400" />
      </g>
      <g fill="currentColor">
        <circle cx="288" cy="300" r="2" /><circle cx="480" cy="300" r="2" />
        <circle cx="288" cy="490" r="2" /><circle cx="480" cy="870" r="2" />
      </g>
    </g>
  );
}

export default function SectionCanvas({ children, surface = "dark", layout = "contained" }: SectionCanvasProps) {
  const id = useId();
  const rootRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const [regions, setRegions] = useState<Region[]>([]);

  useEffect(() => {
    const root = rootRef.current;
    const content = contentRef.current;
    if (!root || !content) return;
    let frame = 0;
    let previous = "";
    const measure = () => {
      frame = 0;
      const origin = root.getBoundingClientRect().top;
      const next = Array.from(content.querySelectorAll<HTMLElement>("section.surface-light, section.surface-dark, .section-boundary")).map((element) => {
        const rect = element.getBoundingClientRect();
        const path = element.querySelector<SVGPathElement>(".section-boundary-fill");
        return {
          top: rect.top - origin,
          height: rect.height,
          curve: path?.getAttribute("d") ?? null,
          incomingLight: element.classList.contains("surface-light") || element.classList.contains("transition-dark-light"),
        };
      });
      const serialized = JSON.stringify(next);
      if (serialized !== previous) {
        previous = serialized;
        setRegions(next);
      }
    };
    const schedule = () => { if (!frame) frame = requestAnimationFrame(measure); };
    const resize = new ResizeObserver(schedule);
    resize.observe(content);
    content.querySelectorAll("section, .section-boundary").forEach((element) => resize.observe(element));
    const mutations = new MutationObserver(schedule);
    mutations.observe(content, { subtree: true, childList: true, attributes: true, attributeFilter: ["class"] });
    window.addEventListener("resize", schedule);
    schedule();
    return () => { cancelAnimationFrame(frame); resize.disconnect(); mutations.disconnect(); window.removeEventListener("resize", schedule); };
  }, []);

  const maskRegions = (light: boolean) => regions.map((region, index) => {
    const incoming = region.incomingLight === light ? "white" : "black";
    if (!region.curve) return <rect key={index} y={region.top} width="100%" height={region.height} fill={incoming} />;
    return (
      <svg key={index} y={region.top} width="100%" height={region.height} viewBox="0 0 1440 360" preserveAspectRatio="none" overflow="hidden">
        <rect width="1440" height="360" fill={incoming === "white" ? "black" : "white"} />
        <path d={region.curve} fill={incoming} />
      </svg>
    );
  });

  return (
    <div ref={rootRef} data-surface={surface} className={`surface-${surface} font-body ${styles.canvas}`}>
      <div aria-hidden="true" className={styles.pattern}>
        <svg width="100%" height="100%" fill="none" focusable="false">
          <defs>
            {[false, true].map((light) => (
              <pattern key={String(light)} id={`${id}-${light ? "right" : "left"}`} width="100%" height="1400" patternUnits="userSpaceOnUse" viewBox="0 0 1440 1400" preserveAspectRatio="none">
                <PatternLines mirrored={light} />
              </pattern>
            ))}
            {[false, true].map((light) => (
              <mask key={String(light)} id={`${id}-${light ? "light" : "dark"}`} maskUnits="userSpaceOnUse" x="0" y="0" width="100%" height="100%" style={{ maskType: "luminance" }}>
                <rect width="100%" height="100%" fill={(surface === "light") === light ? "white" : "black"} />
                {maskRegions(light)}
              </mask>
            ))}
          </defs>
          <rect width="100%" height="100%" fill={`url(#${id}-left)`} mask={`url(#${id}-dark)`} />
          <rect width="100%" height="100%" fill={`url(#${id}-right)`} mask={`url(#${id}-light)`} />
        </svg>
      </div>
      <div ref={contentRef} className={`${layout === "contained" ? "page-layout" : ""} ${styles.content}`}>{children}</div>
    </div>
  );
}
