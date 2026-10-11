"use client";

import { useEffect, useRef, useState } from "react";
import styles from "./problem-section.module.css";

type Kind = "repetition" | "responses" | "tools" | "leads" | "knowledge" | "costs";
function Node({ x, y, label, width = 120, className = "" }: { x: number; y: number; label: string; width?: number; className?: string }) {
  return <g className={className}><rect x={x} y={y} width={width} height="38" rx="9" /><text x={x + width / 2} y={y + 24} textAnchor="middle">{label}</text></g>;
}
export default function ProblemVisual({ kind }: { kind: Kind }) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => setVisible(entry.isIntersecting), { threshold: .2 });
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);
  return <div ref={ref} className={styles.visual} data-visible={visible} data-kind={kind} aria-hidden="true">
    <svg viewBox="0 0 480 220" fill="none" className={styles.diagram}>
      {kind === "repetition" && <>
        <path d="M100 85H380V157H100V85" className={styles.route} />
        <circle r="4" className={styles.packet} />
        <Node x={40} y={65} label="Enter data" /><Node x={180} y={65} label="Copy update" /><Node x={320} y={65} label="Repeat" />
        <text x="240" y="186" textAnchor="middle">The same work. Every day.</text>
      </>}
      {kind === "responses" && <>
        <Node x={85} y={35} width={255} label="New customer question" className={styles.queueOne} />
        <Node x={100} y={88} width={255} label="Still waiting for a reply..." className={styles.queueTwo} />
        <Node x={115} y={141} width={255} label="Another inquiry arrives" className={styles.queueThree} />
        <circle cx="390" cy="106" r="23" /><path d="M390 91V106L400 112" className={styles.clockHand} />
      </>}
      {kind === "tools" && <>
        <Node x={32} y={55} label="CRM" width={110} /><Node x={185} y={55} label="Email" width={110} /><Node x={338} y={55} label="Orders" width={110} />
        <path d="M142 74H185M295 74H338M87 93V158H393V93" className={styles.brokenRoute} />
        <Node x={165} y={139} width={150} label="Manual transfers" className={styles.softPulse} />
        <path d="M156 68L170 81M170 68L156 81M309 68L323 81M323 68L309 81" />
      </>}
      {kind === "leads" && <>
        <text x="95" y="43" textAnchor="middle">Inquiry</text><text x="240" y="43" textAnchor="middle">Follow-up</text><text x="385" y="43" textAnchor="middle">Opportunity</text>
        <path d="M95 105H385" className={styles.brokenRoute} />
        <Node x={40} y={68} width={110} label="New lead" /><Node x={185} y={68} width={110} label="Unassigned" /><Node x={330} y={68} width={110} label="Waiting" />
        <g className={styles.fallingLead}><circle cx="240" cy="126" r="5" /><path d="M240 140V163" strokeDasharray="3 5" /></g>
        <text x="240" y="191" textAnchor="middle">A missed handoff. A missed chance.</text>
      </>}
      {kind === "knowledge" && <>
        <Node x={38} y={40} width={112} label="Documents" /><Node x={184} y={28} width={112} label="Emails" /><Node x={330} y={45} width={112} label="Team notes" />
        <path d="M94 78L215 135M240 66V121M386 83L264 135" className={styles.brokenRoute} />
        <circle cx="238" cy="144" r="22" className={styles.searchPulse} /><path d="M253 160L268 175" /><text x="238" y="150" textAnchor="middle">?</text>
        <text x="240" y="203" textAnchor="middle">Where is the answer?</text>
      </>}
      {kind === "costs" && <>
        <path d="M65 177H420M65 40V177" className={styles.route} />
        {[0, 1, 2, 3].map((index) => <rect key={index} x={100 + index * 75} y={145 - index * 27} width="42" height={32 + index * 27} rx="5" className={styles.growingBar} style={{ animationDelay: `${index * .3}s` }} />)}
        <path d="M100 124L181 97L256 68L347 37" className={styles.costLine} /><path d="M331 37H347V53" />
        <text x="240" y="205" textAnchor="middle">More work shouldn&apos;t mean more overhead.</text>
      </>}
    </svg>
  </div>;
}
