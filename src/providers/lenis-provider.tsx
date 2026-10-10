"use client";

import { useEffect, type ReactNode } from "react";
import Lenis from "lenis";

export default function LenisProvider({ children }: { children: ReactNode }) {
  useEffect(() => {
    const preference = window.matchMedia("(prefers-reduced-motion: reduce)");
    let destroy: (() => void) | undefined;
    const configure = () => {
      destroy?.();
      destroy = undefined;
      if (preference.matches) return;
      const lenis = new Lenis({
        lerp: 0.08,
        smoothWheel: true,
        anchors: { offset: 80 },
        prevent: node => node.closest("[data-lenis-prevent]") !== null,
        autoRaf: false,
      });
      let frame = 0;
      const tick = (time: number) => {
        frame = 0;
        lenis.raf(time);
        if (!frame && lenis.isScrolling === "smooth" && !document.hidden) frame = requestAnimationFrame(tick);
      };
      const wake = () => {
        if (!frame && !document.hidden) frame = requestAnimationFrame(tick);
      };
      const visibility = () => {
        if (document.hidden) { cancelAnimationFrame(frame); frame = 0; }
        else wake();
      };
      // Only run the animation clock while an interaction needs smoothing.
      const offVirtualScroll = lenis.on("virtual-scroll", wake);
      const offScroll = lenis.on("scroll", wake);
      window.addEventListener("click", wake);
      document.addEventListener("visibilitychange", visibility);
      destroy = () => {
        cancelAnimationFrame(frame);
        offVirtualScroll();
        offScroll();
        window.removeEventListener("click", wake);
        document.removeEventListener("visibilitychange", visibility);
        lenis.destroy();
      };
    };
    configure();
    preference.addEventListener("change", configure);
    return () => { preference.removeEventListener("change", configure); destroy?.(); };
  }, []);
  return <>{children}</>;
}
