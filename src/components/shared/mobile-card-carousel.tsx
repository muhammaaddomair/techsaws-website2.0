"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";
import { ChevronLeft, ChevronRight, Pause, Play } from "lucide-react";
import styles from "./mobile-card-carousel.module.css";

type Props = { children: ReactNode; className: string; label: string; ordered?: boolean };
export default function MobileCardCarousel({ children, className, label, ordered = false }: Props) {
  const ref = useRef<HTMLOListElement & HTMLUListElement>(null);
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);
  const [count, setCount] = useState(0);
  const interactionUntil = useRef(0);
  const visible = useRef(false);
  const focused = useRef(false);
  const dragging = useRef(false);
  const activeRef = useRef(0);
  const move = (index: number) => {
    const list = ref.current;
    const slide = list?.children[index] as HTMLElement | undefined;
    if (!list || !slide) return;
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    list.scrollTo({ left: slide.offsetLeft - (list.children[0] as HTMLElement).offsetLeft, behavior: reduced ? "instant" : "smooth" });
  };
  useEffect(() => {
    const list = ref.current;
    if (!list) return;
    const update = () => {
      const width = list.clientWidth;
      const gap = parseFloat(getComputedStyle(list).columnGap) || 0;
      const index = Math.max(0, Math.min(list.children.length - 1, Math.round(list.scrollLeft / (width + gap))));
      activeRef.current = index;
      setActive(index);
      setCount(list.children.length);
    };
    const observer = new IntersectionObserver(([entry]) => { visible.current = entry.isIntersecting; }, { threshold: .35 });
    observer.observe(list);
    const resize = new ResizeObserver(update);
    resize.observe(list);
    list.addEventListener("scroll", update, { passive: true });
    update();
    return () => { observer.disconnect(); resize.disconnect(); list.removeEventListener("scroll", update); };
  }, []);
  useEffect(() => {
    const interval = window.setInterval(() => {
      if (paused || !visible.current || (focused.current && ref.current?.parentElement?.querySelector(":focus-visible")) || dragging.current || document.hidden || Date.now() < interactionUntil.current || !window.matchMedia("(width < 768px)").matches || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
      const list = ref.current;
      const next = list && (activeRef.current + 1) % list.children.length;
      if (next !== null && next !== undefined) move(next);
    }, 5500);
    return () => window.clearInterval(interval);
  }, [paused]);
  const interact = () => { interactionUntil.current = Date.now() + 9000; };
  const List = ordered ? "ol" : "ul";
  return <div className={styles.root} onFocusCapture={() => { focused.current = true; }} onBlurCapture={event => { if (!event.currentTarget.contains(event.relatedTarget)) focused.current = false; }}>
    <List ref={ref} className={`${className} ${styles.list}`} aria-label={label} tabIndex={0} data-lenis-prevent-touch onPointerDown={() => { dragging.current = true; interact(); }} onPointerUp={() => { dragging.current = false; interact(); }} onPointerCancel={() => { dragging.current = false; interact(); }} onTouchEnd={interact} onWheel={interact} onKeyDown={event => { if (!window.matchMedia("(width < 768px)").matches) return; if (event.key === "ArrowRight" || event.key === "ArrowLeft") { event.preventDefault(); interact(); move((active + (event.key === "ArrowRight" ? 1 : -1) + count) % count); } }}>
      {children}
    </List>
    <div className={styles.controls} aria-label={`${label} controls`}>
      <button type="button" aria-label="Previous card" onClick={() => { interact(); move((active - 1 + count) % count); }}><ChevronLeft size={18} /></button>
      <div className={styles.dots}>{Array.from({ length: count }, (_, index) => <button type="button" key={index} aria-label={`Go to card ${index + 1}`} aria-current={active === index ? "true" : undefined} onClick={() => { interact(); move(index); }}><span /></button>)}</div>
      <button type="button" aria-label="Next card" onClick={() => { interact(); move((active + 1) % count); }}><ChevronRight size={18} /></button>
      <button type="button" aria-label={paused ? "Play automatic carousel" : "Pause automatic carousel"} aria-pressed={paused} onClick={() => setPaused(value => !value)}>{paused ? <Play size={15} /> : <Pause size={15} />}</button>
    </div>
  </div>;
}
