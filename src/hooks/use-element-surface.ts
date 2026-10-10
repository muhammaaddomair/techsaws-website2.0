"use client";

import { useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";

export type HeaderSurface = "dark" | "light";
type Subscriber = { element: HTMLElement; update: (surface: HeaderSurface) => void; current?: HeaderSurface };
const subscribers = new Set<Subscriber>();
let stopTracking: (() => void) | undefined;
let refreshTracking: (() => void) | undefined;

// Header and tooltips share one observer and one geometry pass per frame.
function startTracking() {
  let frame = 0;
  let regions: HTMLElement[] = [];
  let boundaryUnderControl = false;
  const measure = () => {
    frame = 0;
    const measured = regions.map(element => ({ element, rect: element.getBoundingClientRect() }));
    boundaryUnderControl = false;
    for (const subscriber of subscribers) {
      const bounds = subscriber.element.getBoundingClientRect();
      const x = Math.max(0, Math.min(innerWidth - 1, bounds.left + bounds.width / 2));
      const y = Math.min(innerHeight - 1, Math.max(0, bounds.top + bounds.height / 2));
      let next: HeaderSurface = "dark";
      let nearestDistance = Infinity;
      let nearestHeight = Infinity;
      for (const { element, rect } of measured) {
        if (!rect.height || !rect.width) continue;
        const distance = Math.max(rect.top - y, y - rect.bottom, 0);
        if (distance > nearestDistance || (distance === nearestDistance && rect.height >= nearestHeight)) continue;
        nearestDistance = distance;
        nearestHeight = rect.height;
        if (element.classList.contains("section-boundary")) {
          if (distance === 0) boundaryUnderControl = true;
          const path = element.querySelector<SVGPathElement>(".section-boundary-fill");
          const matrix = path?.getScreenCTM();
          const incoming = path && matrix
            ? path.isPointInFill(new DOMPoint(x, y).matrixTransform(matrix.inverse()))
            : y > rect.top + rect.height / 2;
          next = incoming === element.classList.contains("transition-dark-light") ? "light" : "dark";
        } else {
          next = element.classList.contains("surface-light") ? "light" : "dark";
        }
      }
      if (subscriber.current !== next) {
        subscriber.current = next;
        subscriber.update(next);
      }
    }
  };
  const schedule = () => {
    if (!frame && !document.hidden) frame = requestAnimationFrame(measure);
  };
  const resize = new ResizeObserver(schedule);
  const refresh = () => {
    regions = Array.from(document.querySelectorAll<HTMLElement>(
      "section.surface-dark, section.surface-light, main [data-surface], main .section-boundary, footer.surface-dark, footer.surface-light",
    ));
    resize.disconnect();
    regions.forEach(element => resize.observe(element));
    subscribers.forEach(({ element }) => resize.observe(element));
    schedule();
  };
  const mutations = new MutationObserver(records => {
    // Animated wave paths only need a measurement, not a new DOM inventory.
    if (records.some(record => record.type === "childList" || record.attributeName === "class")) refresh();
    else if (boundaryUnderControl && records.some(record => (record.target as Element).classList.contains("section-boundary-fill"))) schedule();
  });
  const main = document.querySelector("main");
  if (main) mutations.observe(main, { subtree: true, childList: true, attributes: true, attributeFilter: ["class", "d"] });
  window.addEventListener("scroll", schedule, { passive: true });
  window.addEventListener("resize", schedule);
  document.addEventListener("visibilitychange", schedule);
  refreshTracking = refresh;
  refresh();
  return () => {
    cancelAnimationFrame(frame);
    resize.disconnect();
    mutations.disconnect();
    window.removeEventListener("scroll", schedule);
    window.removeEventListener("resize", schedule);
    document.removeEventListener("visibilitychange", schedule);
    refreshTracking = undefined;
  };
}

export function useElementSurface() {
  const elementRef = useRef<HTMLElement>(null);
  const [surface, setSurface] = useState<HeaderSurface>("dark");
  const pathname = usePathname();
  useEffect(() => {
    const element = elementRef.current;
    if (!element) return;
    const subscriber: Subscriber = { element, update: setSurface };
    subscribers.add(subscriber);
    if (!stopTracking) stopTracking = startTracking();
    else refreshTracking?.();
    return () => {
      subscribers.delete(subscriber);
      if (!subscribers.size) {
        stopTracking?.();
        stopTracking = undefined;
      } else refreshTracking?.();
    };
  }, [pathname]);
  return { elementRef, surface };
}
