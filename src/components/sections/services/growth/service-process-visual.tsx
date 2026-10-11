import ProcessStepVisual from "@/components/shared/process-step-visual";
import { Users, BriefcaseBusiness, Target, Search, Magnet, Workflow, MousePointerClick, Database, Zap, Handshake, Rocket, ChartNoAxesCombined, TrendingUp } from "lucide-react";
import styles from "../automation/automation-section-visual.module.css";

export default function ServiceProcessVisual({ kind, labels }: { kind: string; labels: readonly string[] }) {
  if (kind === "integrate") return <ProcessStepVisual kind="funnel" labels={labels} />;
  if (kind === "design") return <div className={styles.stack}>{[Magnet, Workflow, MousePointerClick].map((Icon, index) => <div key={labels[index]} className={`${styles.task} ${styles.designTask}`} style={{ animationDelay: `${index * .9}s` }}><Icon /><span>{labels[index]}</span><i /></div>)}</div>;
  const icons = kind === "understand" ? [Users, BriefcaseBusiness, Target] : kind === "integrate" ? [Database, Zap, Handshake] : [Rocket, ChartNoAxesCombined, TrendingUp];
  return <div className={kind === "understand" ? styles.discovery : kind === "integrate" ? styles.integration : styles.improve}>
    <div className={styles.nodes}>{icons.map((Icon, index) => <div key={labels[index]} style={{ animationDelay: `${index}s` }}><Icon /><span>{labels[index]}</span></div>)}</div>
    {kind === "understand" ? <><div className={styles.scanLine} /><div className={styles.receipt}><span>{labels[3]}</span><Search size={18} /></div></> : kind === "integrate" ? <><div className={styles.wire}><i /></div><div className={styles.receipt}><Handshake size={18} /><span>{labels[3]}</span></div></> : <><svg className={styles.chart} viewBox="0 0 320 60" fill="none"><path d="M5 52C30 52 38 37 65 38S102 49 125 28S164 37 188 20S219 30 246 12S280 18 315 4" /></svg><p className={styles.caption}>{labels[3]}</p></>}
  </div>;
}
