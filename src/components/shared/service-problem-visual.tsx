"use client";

import { useRef } from "react";
import { useInView } from "framer-motion";
import { Target, MousePointerClick, Clock3, ChartNoAxesCombined, Monitor, AppWindow, Server, CircleAlert, Bug, LockKeyhole, ShieldAlert, ClipboardList } from "lucide-react";
import styles from "../sections/services/automation/problem-section.module.css";

const serviceIcons = {
  growth: [Target, MousePointerClick, Clock3, ChartNoAxesCombined],
  software: [Monitor, AppWindow, Server, CircleAlert],
  cybersecurity: [Bug, LockKeyhole, ShieldAlert, ClipboardList],
};

function Node({ x, y, label, width = 120 }: { x: number; y: number; label: string; width?: number }) {
  return <g><rect x={x} y={y} width={width} height="38" rx="9" /><text x={x + width / 2} y={y + 24} textAnchor="middle">{label}</text></g>;
}

export default function ServiceProblemVisual({ service, index, labels, caption }: { service: keyof typeof serviceIcons; index: number; labels: readonly string[]; caption: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const visible = useInView(ref, { amount: .2 });
  const Icon = serviceIcons[service][index];
  const palette = ["repetition", "responses", "tools", "costs"][index];
  return <div ref={ref} className={styles.visual} data-visible={visible} data-kind={palette} aria-hidden="true">
    <svg viewBox="0 0 480 220" fill="none" className={styles.diagram}>
      {index === 0 && <>
        <path className={styles.brokenRoute} d="M100 104H380" />
        <Node x={35} y={84} label={labels[0]} /><Node x={180} y={84} label={labels[1]} /><Node x={325} y={84} label={labels[2]} />
        <g className={styles.softPulse}><Icon x="222" y="30" width="36" height="36" /></g>
        <path d="M164 94l10 17m0-17-10 17M309 94l10 17m0-17-10 17" />
      </>}
      {index === 1 && <>
        {labels.map((label, row) => <g key={label} className={[styles.queueOne, styles.queueTwo, styles.queueThree][row]}><Node x={80 + row * 12} y={32 + row * 50} width={260} label={label} /></g>)}
        <Icon x="378" y="86" width="38" height="38" />
      </>}
      {index === 2 && <>
        <Node x={35} y={56} label={labels[0]} /><Node x={180} y={56} label={labels[1]} /><Node x={325} y={56} label={labels[2]} />
        <path className={styles.brokenRoute} d="M155 75H180M300 75H325M95 94V148H385V94" />
        <g className={styles.fallingLead}><Icon x="220" y="124" width="40" height="40" /></g>
        <path d="M162 65l10 18m0-18-10 18M307 65l10 18m0-18-10 18" />
      </>}
      {index === 3 && <>
        <Node x={35} y={45} label={labels[0]} /><Node x={180} y={45} label={labels[1]} /><Node x={325} y={45} label={labels[2]} />
        <path className={styles.brokenRoute} d="M95 83L216 130M240 83V118M385 83L264 130" />
        <circle className={styles.searchPulse} cx="240" cy="142" r="23" /><text x="240" y="147" textAnchor="middle">?</text>
        <Icon x="355" y="126" width="30" height="30" />
      </>}
      <text x="240" y="199" textAnchor="middle">{caption}</text>
    </svg>
  </div>;
}
