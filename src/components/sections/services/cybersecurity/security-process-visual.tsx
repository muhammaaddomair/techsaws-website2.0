import ProcessStepVisual from "@/components/shared/process-step-visual";
import { Server, AppWindow, Database, Search, Settings2, ScanSearch, ListChecks, Wrench, LockKeyhole, ShieldCheck, RefreshCw, CircleCheck, Radar } from "lucide-react";
import styles from "../automation/automation-section-visual.module.css";

export default function SecurityProcessVisual({ kind, labels }: { kind: string; labels: readonly string[] }) {
  if (kind === "strengthen") return <ProcessStepVisual kind="defense" labels={labels} />;
  if (kind === "verify") return <ProcessStepVisual kind="radar" labels={labels} />;
  if (kind === "assess") {
    return <div className={styles.stack}>{[Settings2, ScanSearch, ListChecks].map((Icon, index) => <div key={labels[index]} className={`${styles.task} ${styles.designTask}`} style={{ animationDelay: `${index * .9}s` }}><Icon /><span>{labels[index]}</span><i /></div>)}</div>;
  }
  const icons = kind === "understand" ? [Server, AppWindow, Database] : kind === "strengthen" ? [Wrench, LockKeyhole, ShieldCheck] : [RefreshCw, CircleCheck, Radar];
  return <div className={kind === "understand" ? styles.discovery : styles.integration}>
    <div className={styles.nodes}>{icons.map((Icon, index) => <div key={labels[index]} style={{ animationDelay: `${index}s` }}><Icon /><span>{labels[index]}</span></div>)}</div>
    {kind === "strengthen" ? <div className={styles.wire}><i /></div> : <div className={styles.scanLine} />}
    <div className={styles.receipt}><span>{labels[3]}</span>{kind === "understand" ? <Search size={18} /> : <ShieldCheck size={18} />}{kind !== "understand" && <CircleCheck size={16} />}</div>
  </div>;
}
