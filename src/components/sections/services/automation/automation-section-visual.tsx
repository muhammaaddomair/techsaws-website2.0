import ProcessStepVisual from "@/components/shared/process-step-visual";
import { ArrowUpRight, Check, Clock3, Cpu, Layers3, ListChecks, Search, Settings2, Users } from "lucide-react";
import styles from "./automation-section-visual.module.css";
import type { CSSProperties } from "react";

type Kind = "time" | "cost" | "speed" | "scale" | "understand" | "design" | "integrate" | "improve";

export default function AutomationSectionVisual({ kind, labels }: { kind: Kind; labels: readonly string[] }) {
  if (kind === "integrate") return <ProcessStepVisual kind="assembly" labels={labels} />;
  if (kind === "time") return <div className={styles.stack}>{labels.map((label, index) => <div key={label} className={styles.task} style={{ animationDelay: `${index * .7}s` }}>{index === 0 ? <Clock3 /> : index === 1 ? <Cpu /> : <Check />}<span>{label}</span><i /></div>)}</div>;
  if (kind === "cost") return <div className={styles.cost}><div className={styles.costBars}>{labels.map((label, index) => <div key={label}><span>{label}</span><i style={{ "--bar-width": `${90 - index * 23}%` } as CSSProperties} /></div>)}</div><div className={styles.receipt}><ListChecks size={18} /><span>Less effort. More value.</span><Check size={16} /></div></div>;
  if (kind === "speed") return <div className={styles.lanes}>{labels.map((label, index) => <div key={label}><span>{label}</span>{Array.from({ length: 3 }, (_, row) => <i key={row} style={{ animationDelay: `${index * .7 + row * .4}s` }}><span />{index === 2 && <Check size={14} />}</i>)}</div>)}<span className={styles.travel} /></div>;
  if (kind === "scale") return <div className={styles.scale}><div className={styles.capacity}>{[0, 1, 2, 3].map(index => <span key={index} style={{ animationDelay: `${index * .5}s` }}>{Array.from({ length: index + 1 }, (_, row) => <i key={row} />)}</span>)}</div><div className={styles.scaleCore}><Users size={30} /><p>{labels[2]}</p></div><p className={styles.caption}>{labels[0]} · {labels[1]}</p></div>;
  if (kind === "understand") return <div className={styles.discovery}><div className={styles.nodes}>{[ListChecks, Layers3, Users].map((Icon, index) => <div key={labels[index]}><Icon /><span>{labels[index]}</span></div>)}</div><div className={styles.scanLine} /><div className={styles.receipt}><span>{labels[3]}</span><Search size={17} /></div></div>;
  if (kind === "design") return <div className={styles.stack}>{labels.map((label, index) => <div key={label} className={`${styles.task} ${styles.designTask}`} style={{ animationDelay: `${index * .9}s` }}><Settings2 /><span>{label}</span><i /></div>)}</div>;
  return <div className={styles.improve}><div className={styles.nodes}>{[ArrowUpRight, ListChecks, Settings2].map((Icon, index) => <div key={labels[index]}><Icon /><span>{labels[index]}</span></div>)}</div><svg className={styles.chart} viewBox="0 0 320 60" fill="none"><path d="M5 52C30 52 38 37 65 38S102 49 125 28S164 37 188 20S219 30 246 12S280 18 315 4" /></svg><p className={styles.caption}>{labels[3]}</p></div>;
}
