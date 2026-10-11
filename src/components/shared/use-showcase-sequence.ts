"use client";

import { useEffect, useState } from "react";
import { useReducedMotion } from "framer-motion";

export default function useShowcaseSequence(visible: boolean, steps = 3) {
  const reduced = useReducedMotion();
  const [phase, setPhase] = useState(-1);
  const [paused, setPaused] = useState(false);
  const running = phase >= 0 && phase < steps;
  useEffect(() => {
    if (!running || paused || !visible) return;
    const timer = window.setInterval(() => {
      if (!document.hidden) setPhase(current => Math.min(steps, current + 1));
    }, 1200);
    return () => window.clearInterval(timer);
  }, [running, paused, visible, steps]);
  return { phase, running, paused, reduced, complete: phase === steps,
    start: () => { setPaused(false); setPhase(reduced ? steps : 0); },
    reset: () => { setPaused(false); setPhase(-1); },
    togglePause: () => setPaused(current => !current),
  };
}
