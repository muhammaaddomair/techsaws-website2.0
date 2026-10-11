"use client";

import { m, useReducedMotion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { ArrowUp, Check, Mail, PackageCheck, Sparkles, Users, Workflow } from "lucide-react";
import { aiAutomationPageData } from "@/data/pages/services/ai-automation-page-data";
import styles from "./ai-automation-hero-section.module.css";

const scenarios = aiAutomationPageData.hero.demo.scenarios;
const icons = [Mail, PackageCheck, Users];
const TYPE_END = 3300;
const SEND_END = 3900;
const FINISH = 7500;
const CYCLE = 11000;

export default function AIWorkflowShowcase() {
  const reduced = useReducedMotion();
  const ref = useRef<HTMLElement>(null);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [elapsed, setElapsed] = useState(0);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => setVisible(entry.isIntersecting), { threshold: .15 });
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);
  useEffect(() => {
    if (reduced || !visible) return;
    let previous = performance.now();
    const interval = window.setInterval(() => {
      const now = performance.now();
      const delta = Math.min(now - previous, 120);
      previous = now;
      if (!document.hidden) setElapsed(value => value + delta);
    }, 50);
    return () => window.clearInterval(interval);
  }, [reduced, visible]);
  const scenarioIndex = (selectedIndex + Math.floor(elapsed / CYCLE)) % scenarios.length;
  const time = reduced ? FINISH : elapsed % CYCLE;
  const scenario = scenarios[scenarioIndex];
  const Icon = icons[scenarioIndex];
  const typing = time < TYPE_END;
  const done = time >= FINISH;
  const completed = Math.max(0, Math.min(3, Math.floor((time - SEND_END) / 1200)));
  const typed = scenario.prompt.slice(0, Math.floor(scenario.prompt.length * Math.min(1, time / TYPE_END)));
  const duration = reduced ? 0 : .35;
  return (
    <figure ref={ref} className={styles.showcase} data-paused={!visible} aria-label="Illustrative AI assistant workflows">
      <figcaption className={styles.showcaseHeader}>
        <span><Sparkles size={16} aria-hidden="true" /> Your AI assistant at work <small>Workflow demo</small></span>
      </figcaption>
      <div className={styles.scenarioTabs} aria-label="Choose a workflow">
        {scenarios.map((item, index) => <button type="button" key={item.label} aria-pressed={index === scenarioIndex} onClick={() => { setSelectedIndex(index); setElapsed(0); }}>{item.label}<span style={{ transform: `scaleX(${index === scenarioIndex ? time / CYCLE : 0})` }} /></button>)}
      </div>
        <div>
          <div className={styles.liveComposer}>
            <p className={styles.promptLabel}>YOU ASK. AI GETS TO WORK.</p>
            <p className={styles.livePrompt} aria-hidden="true">{typed}<span className={typing ? styles.caret : styles.hiddenCaret}>|</span></p>
            <span className="sr-only">{scenario.prompt}</span>
            <div className={styles.composerFooter}><span>{typing ? "Writing your instruction" : "One request. Connected actions."}</span><m.span className={styles.send} animate={{ scale: time >= TYPE_END && time < SEND_END ? [1, .88, 1] : 1 }} transition={{ duration: .5 }} aria-hidden="true"><ArrowUp size={21} /></m.span></div>
          </div>
          <div className={styles.connector} aria-hidden="true"><span className={styles.signalLine} /><span className={styles.connectorNode}><Workflow size={24} strokeWidth={2.5} /></span><span className={styles.signalLine} /></div>
          <div className={styles.liveExecution} data-state={done ? "complete" : typing ? "ready" : "working"}>
            <div className={styles.executionHeading}><div><strong>{done ? "Handled. You're in control." : typing ? "Ready when you are" : "Taking care of the details"}</strong><p>{done ? "Across your connected tools" : "Your tools, working together"}</p></div></div>
            <ol className={styles.liveTasks}>{scenario.steps.map((step, index) => {
              const finished = done || index < completed;
              const active = !typing && time >= SEND_END && index === completed && !done;
              return <li key={step} data-active={active} data-done={finished}><span className={styles.stepIcon}>{finished ? <Check size={15} /> : active ? <span className={styles.liveSpinner} /> : <span>{index + 1}</span>}</span><span>{step}</span><span className={styles.stepState}>{finished ? "Done" : active ? "In progress" : "Queued"}</span></li>;
            })}</ol>
            <div className={styles.resultSlot}><m.div animate={{ opacity: 1, y: done ? 0 : 3 }} transition={{ duration }} className={styles.result}><Icon size={24} aria-hidden="true" /><div><strong>{done ? scenario.result : "A little less work on your plate."}</strong><p>{done ? scenario.detail : "Watch one instruction become a finished workflow."}</p></div>{done && <Check size={18} aria-hidden="true" />}</m.div></div>
          </div>
        </div>
      <p className={styles.showcaseNote}>Built around your tools and approval rules. You choose what AI can handle.</p>
    </figure>
  );
}
