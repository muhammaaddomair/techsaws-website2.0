import { Check, Target, Users, MousePointerClick, Workflow, AppWindow, Zap, ShieldCheck, ScanSearch, LockKeyhole, ChartNoAxesCombined, Server, TrendingUp, RefreshCw, Database, HeartHandshake } from "lucide-react";
import type { CSSProperties } from "react";
import styles from "../sections/services/automation/automation-section-visual.module.css";

const serviceIcons = {
  growth: [Target, Users, MousePointerClick, ChartNoAxesCombined],
  software: [AppWindow, Zap, Check, Server],
  cybersecurity: [ScanSearch, LockKeyhole, ShieldCheck, HeartHandshake],
};

export default function ServiceOutcomeVisual({ service, index, labels }: { service: keyof typeof serviceIcons; index: number; labels: readonly string[] }) {
  const icons = serviceIcons[service];
  if (index === 0) return <div className={styles.stack}>{labels.map((label, row) => {
    const Icon = icons[row];
    return <div key={label} className={styles.task} style={{ animationDelay: `${row * .7}s` }}><Icon /><span>{label}</span><i /></div>;
  })}</div>;
  if (index === 1) return <div className={styles.cost}><div className={styles.costBars}>{labels.map((label, row) => <div key={label}><span>{label}</span><i style={{ "--bar-width": `${55 + row * 17}%` } as CSSProperties} /></div>)}</div><div className={styles.receipt}>{service === "cybersecurity" ? <LockKeyhole size={18} /> : <Workflow size={18} />}<span>{service === "growth" ? "Better follow-ups. More conversions." : service === "software" ? "Connected systems. Smoother work." : "Safeguards around what matters."}</span><Check size={16} /></div></div>;
  if (index === 2) return <div className={styles.lanes}>{labels.map((label, column) => <div key={label}><span>{label}</span>{Array.from({ length: 3 }, (_, row) => <i key={row} style={{ animationDelay: `${column * .7 + row * .4}s` }}><span />{column === 2 && <Check size={14} />}</i>)}</div>)}<span className={styles.travel} /></div>;
  const Icon = icons[3];
  const Secondary = service === "growth" ? TrendingUp : service === "software" ? RefreshCw : Database;
  return <div className={styles.scale}><div className={styles.capacity}>{[0, 1, 2, 3].map(column => <span key={column} style={{ animationDelay: `${column * .5}s` }}>{Array.from({ length: column + 1 }, (_, row) => <i key={row} />)}</span>)}</div><div className={styles.scaleCore}><Icon size={30} /><p>{labels[2]}</p></div><p className={styles.caption}><Secondary size={14} style={{ display: "inline", verticalAlign: "middle", marginRight: ".4rem" }} />{labels[0]} · {labels[1]}</p></div>;
}
