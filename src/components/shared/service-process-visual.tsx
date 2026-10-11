import { AppWindow, ArrowUpRight, BriefcaseBusiness, Check, Code2, Cpu, Database, Layers3, ListChecks, LockKeyhole, Plug, Radar, RefreshCw, Search, Server, Settings2, ShieldCheck, Target, Users, Workflow, Zap } from "lucide-react";
import type { CSSProperties } from "react";
import styles from "../sections/services/automation/automation-section-visual.module.css";
import buildStyles from "./service-process-visual.module.css";

const icons = {
  automation: { discover: [ListChecks, Layers3, Users], build: [Cpu, Check, Plug, Workflow], launch: [ArrowUpRight, ListChecks, Settings2] },
  cybersecurity: { discover: [Server, AppWindow, Database], build: [Settings2, LockKeyhole, ShieldCheck, Check], launch: [RefreshCw, ShieldCheck, Radar] },
  growth: { discover: [Users, BriefcaseBusiness, Target], build: [Database, Zap, Workflow, Check], launch: [ArrowUpRight, ListChecks, Target] },
  software: { discover: [Target, Users, ListChecks], build: [Code2, Plug, ShieldCheck, Check], launch: [ArrowUpRight, Check, RefreshCw] },
};

export default function ServiceProcessVisual({ service, step, labels }: { service: keyof typeof icons; step: number; labels: readonly string[] }) {
  const selected = icons[service];
  if (step === 1) return <div className={styles.stack}>{labels.map((label, index) => <div key={label} className={`${styles.task} ${styles.designTask}`} style={{ animationDelay: `${index * .9}s` }}><Settings2 /><span>{label}</span><i /></div>)}</div>;
  if (step === 2) {
    const buildLabels = [...labels.slice(0, 3), service === "cybersecurity" ? "Validated" : "Ready"];
    return <div className={buildStyles.build}>
      <div className={buildStyles.board}>{selected.build.map((Icon, index) => <div key={buildLabels[index]} className={buildStyles.tile} style={{ "--delay": `${index * .8}s` } as CSSProperties}><Icon size={20} /><span>{buildLabels[index]}</span><Check className={buildStyles.check} size={14} /><i /></div>)}</div>
      <div className={styles.receipt}><span>{labels[3]}</span><Check size={17} /></div>
    </div>;
  }
  const nodeIcons = step === 0 ? selected.discover : selected.launch;
  return <div className={step === 0 ? styles.discovery : styles.improve}>
    <div className={styles.nodes}>{nodeIcons.map((Icon, index) => <div key={labels[index]}><Icon /><span>{labels[index]}</span></div>)}</div>
    {step === 0 ? <><div className={styles.scanLine} /><div className={styles.receipt}><span>{labels[3]}</span><Search size={17} /></div></> : <><svg className={styles.chart} viewBox="0 0 320 60" fill="none"><path d="M5 52C30 52 38 37 65 38S102 49 125 28S164 37 188 20S219 30 246 12S280 18 315 4" /></svg><p className={styles.caption}>{labels[3]}</p></>}
  </div>;
}
