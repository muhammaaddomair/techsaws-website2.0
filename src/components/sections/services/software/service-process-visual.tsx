import ProcessStepVisual from "@/components/shared/process-step-visual";
import { Lightbulb, Users, ListChecks, Search, LayoutTemplate, MousePointer2, Layers3, Code2, Plug, ShieldCheck, Rocket, CircleCheck, RefreshCw } from "lucide-react";
import styles from "../automation/automation-section-visual.module.css";

export default function ServiceProcessVisual({ kind, labels }: { kind: string; labels: readonly string[] }) {
  if (kind === "integrate") return <ProcessStepVisual kind="assembly" labels={labels} />;
  if (kind === "improve") return <ProcessStepVisual kind="release" labels={labels} />;
  if (kind === "design") return <div className={styles.stack}>{[LayoutTemplate, MousePointer2, Layers3].map((Icon, index) => <div key={labels[index]} className={`${styles.task} ${styles.designTask}`} style={{ animationDelay: `${index * .9}s` }}><Icon /><span>{labels[index]}</span><i /></div>)}</div>;
  const icons = kind === "understand" ? [Lightbulb, Users, ListChecks] : kind === "integrate" ? [Code2, Plug, ShieldCheck] : [Rocket, CircleCheck, RefreshCw];
  return <div className={kind === "understand" ? styles.discovery : kind === "integrate" ? styles.integration : styles.improve}>
    <div className={styles.nodes}>{icons.map((Icon, index) => <div key={labels[index]} style={{ animationDelay: `${index}s` }}><Icon /><span>{labels[index]}</span></div>)}</div>
    {kind === "understand" ? <><div className={styles.scanLine} /><div className={styles.receipt}><span>{labels[3]}</span><Search size={18} /></div></> : kind === "integrate" ? <><div className={styles.wire}><i /></div><div className={styles.receipt}><ShieldCheck size={18} /><span>{labels[3]}</span></div></> : <><div className={styles.wire}><i /></div><div className={styles.receipt}><CircleCheck size={18} /><span>{labels[3]}</span></div></>}
  </div>;
}
