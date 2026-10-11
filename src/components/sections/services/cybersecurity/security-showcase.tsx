"use client";

import { useEffect, useRef, useState } from "react";
import { useInView, useReducedMotion } from "framer-motion";
import { ArrowRight, Check, CircleAlert, Globe, LockKeyhole, Play, RotateCcw, ShieldCheck, Users, Database, Pause } from "lucide-react";
import ConnectLink from "@/components/shared/connect-link";
import { securityScenarios } from "./security-showcase-data";
import styles from "./security-showcase.module.css";

function AssetMap({ labels, secured, running }: { labels: readonly string[]; secured: boolean; running: boolean }) {
  return <div className={styles.assetMap} data-secured={secured} data-running={running} aria-hidden="true">
    <div className={styles.assets}>{[Globe, Users, Database].map((Icon, index) => <div key={labels[index]}><Icon size={21} /><span>{labels[index]}</span></div>)}</div>
    <div className={styles.connections}><i /><i /><i /></div>
    <div className={styles.shield}>{secured ? <ShieldCheck size={34} /> : <LockKeyhole size={30} />}<span className={styles.shieldRing} /></div>
    <span className={styles.mapLabel}>{secured ? "Layers of protection" : "Where protection matters"}</span>
  </div>;
}

function ProtectionSteps({ scenario, progress }: { scenario: (typeof securityScenarios)[number]; progress: number }) {
  return <ol className={styles.steps}>{scenario.risks.map((risk, index) => {
    const complete = progress > index;
    const active = progress === index;
    return <li key={risk} data-complete={complete} data-active={active}>
      <span className={styles.stepIcon}>{complete ? <Check size={16} /> : <CircleAlert size={16} />}</span>
      <div><span className={styles.stepLabel}>{complete ? scenario.fixes[index] : risk}</span><small>{complete ? "Example improvement" : active ? "Reviewing this example" : "Example risk"}</small></div>
      {active && <span className={styles.processing} aria-hidden="true" />}
    </li>;
  })}</ol>;
}

export default function SecurityShowcase() {
  const ref = useRef<HTMLDivElement>(null);
  const visible = useInView(ref, { amount: .2 });
  const reduced = useReducedMotion();
  const [selected, setSelected] = useState(0);
  const [progress, setProgress] = useState(-1);
  const [paused, setPaused] = useState(false);
  const scenario = securityScenarios[selected];
  const busy = progress >= 0 && progress < 3;
  const secured = progress === 3;
  useEffect(() => {
    if (!busy || paused || !visible) return;
    const timer = window.setInterval(() => {
      if (!document.hidden) setProgress(current => Math.min(3, current + 1));
    }, 1100);
    return () => window.clearInterval(timer);
  }, [busy, paused, visible]);
  function start() { setPaused(false); setProgress(reduced ? 3 : 0); }
  return <div ref={ref} className={styles.showcase} data-running={visible && !paused && !reduced}>
    <div className={styles.demoHeading}><span><ShieldCheck size={18} />See what stronger protection can change</span><small>Interactive example</small></div>
    <div className={styles.scenarios} role="group" aria-label="Choose a security example">{securityScenarios.map((item, index) => <button key={item.id} type="button" aria-pressed={selected === index} onClick={() => { setSelected(index); setProgress(-1); setPaused(false); }}>{item.label}</button>)}</div>
    <div className={styles.panel}>
      <div className={styles.panelBar}><span><i /><i /><i /></span><span>YOUR BUSINESS, BETTER PROTECTED</span><LockKeyhole size={14} aria-hidden="true" /></div>
      <div className={styles.panelBody}>
        <div className={styles.diagramSide}><AssetMap labels={scenario.assets} secured={secured} running={visible && !paused && !reduced} /><p>Small gaps can affect the things<br />your business relies on.</p></div>
        <div className={styles.detailSide}>
          <span className={styles.kicker}>{secured ? "THE DIFFERENCE PROTECTION MAKES" : "LOOK BEYOND THE TECHNICAL DETAILS"}</span>
          <h2>{scenario.title}</h2><p className={styles.scenarioDescription}>{scenario.description}</p>
          <ProtectionSteps scenario={scenario} progress={progress} />
          <div className={styles.actions}>
            <button type="button" className={styles.demoButton} onClick={busy ? () => setPaused(current => !current) : start}>{busy ? paused ? <Play size={16} /> : <Pause size={16} /> : secured ? <RotateCcw size={16} /> : <ShieldCheck size={16} />}{busy ? paused ? "Resume example" : "Pause example" : secured ? "Replay example" : "Show me the protection"}{!busy && !secured && <ArrowRight size={16} />}</button>
            <span>{busy ? `${progress + 1} of 3 improvements` : secured ? "Example complete" : "About 4 seconds"}</span>
          </div>
        </div>
      </div>
      <div className={styles.result} data-secured={secured} aria-live="polite" aria-atomic="true"><span className={styles.resultIcon}><ShieldCheck size={23} /></span><div><strong>{secured ? scenario.outcome : "Clear risks. Practical next steps."}</strong><p>{secured ? scenario.benefit : "An assessment helps you understand what to fix first—and why it matters."}</p></div><ConnectLink href="/connect">Let’s talk<ArrowRight size={16} aria-hidden="true" /></ConnectLink></div>
    </div>
    <p className={styles.demoNote}>Illustrative scenarios, not a scan of your device or business. Every assessment starts with your permission.</p>
  </div>;
}
