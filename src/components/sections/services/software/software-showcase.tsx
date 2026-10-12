"use client";

import { useRef, useState } from "react";
import { useInView } from "framer-motion";
import { ArrowRight, Check, Code2, FileText, Layers3, LayoutDashboard, Monitor, Plug, ShieldCheck, Smartphone, Users, ArrowLeft, RotateCw, SlidersHorizontal, Star, MoreVertical, Plus, X, Minus, Square } from "lucide-react";
import ConnectLink from "@/components/shared/connect-link";
import useShowcaseSequence from "@/components/shared/use-showcase-sequence";
import googleStyles from "./software-showcase.module.css";
import styles from "@/components/shared/marketing-showcase.module.css";

const examples = [
  { label: "Client portal", title: "A better place for your customers.", cards: ["Shared projects", "Secure documents", "Team conversations"], activity: ["Project updates in one place", "Files ready for your customers"], result: "A simpler customer experience. A more connected team." },
  { label: "Operations hub", title: "One workspace. A clearer working day.", cards: ["Daily workflows", "Connected tools", "Team visibility"], activity: ["Work assigned to the right person", "Business tools connected"], result: "Less switching between tools. More clarity across operations." },
  { label: "SaaS platform", title: "Your product. Ready for real users.", cards: ["User workspace", "Product features", "Account controls"], activity: ["Core features tested and ready", "Access rules configured"], result: "A dependable foundation for your next digital product." },
];
const cardIcons = [Users, FileText, ShieldCheck];
export default function SoftwareShowcase() {
  const ref = useRef<HTMLElement>(null);
  const visible = useInView(ref, { amount: .15 });
  const sequence = useShowcaseSequence(visible);
  const [selected, setSelected] = useState(0);
  const [mobile, setMobile] = useState(false);
  const example = examples[selected];
  return <figure ref={ref} className={`${styles.showcase} ${googleStyles.google}`} data-theme="google" data-running={visible && !sequence.paused} aria-label="Illustrative digital product builder">
    <div className={styles.panel}><div className={googleStyles.chrome}><div className={googleStyles.tabstrip}><div className={googleStyles.tabList} role="group" aria-label="Choose a product concept">{examples.map((item, index) => <button className={googleStyles.browserTab} type="button" key={item.label} aria-pressed={selected === index} onClick={() => { setSelected(index); sequence.reset(); }}><span className={googleStyles.chromeIcon} aria-hidden="true" /><span>{item.label}</span><X size={12} aria-hidden="true" /></button>)}</div><Plus size={15} aria-hidden="true" className={googleStyles.newTab} /><span className={googleStyles.windowControls} aria-hidden="true"><Minus size={14} /><Square size={12} /><X size={15} /></span></div><div className={googleStyles.toolbar}><div className={googleStyles.navigation} aria-hidden="true"><ArrowLeft size={16} /><ArrowRight size={16} /><RotateCw size={15} /></div><span className={googleStyles.address} aria-hidden="true"><SlidersHorizontal size={13} />Your product workspace<Star size={14} /></span><div className={styles.devices}><button type="button" aria-label="Desktop preview" aria-pressed={!mobile} onClick={() => setMobile(false)}><Monitor size={15} /></button><button type="button" aria-label="Mobile preview" aria-pressed={mobile} onClick={() => setMobile(true)}><Smartphone size={15} /></button></div><MoreVertical size={16} aria-hidden="true" /></div></div>
    <div className={`${styles.product} ${googleStyles.product}`} data-mobile={mobile}><div className={styles.sidebar} aria-hidden="true"><strong><Layers3 size={18} />Your workspace</strong><span><LayoutDashboard size={14} />Overview</span><span><Users size={14} />People</span><span><FileText size={14} />Documents</span><span><Plug size={14} />Integrations</span></div><div className={styles.workspace}><div className={`${styles.previewHeading} ${googleStyles.previewHeading}`}><strong>{example.title}</strong><small>{sequence.complete ? "Launch ready" : "Product concept"}</small></div>
    <div className={`${styles.summary} ${googleStyles.summary}`}>{example.cards.map((label, index) => { const Icon = cardIcons[index]; return <div key={label}><Icon size={21} aria-hidden="true" /><strong>{label}</strong><small>{sequence.phase > 0 ? "Built around your needs" : "Planned for your users"}</small></div>; })}</div>
    <svg className={styles.workspaceChart} viewBox="0 0 450 65" fill="none" aria-hidden="true"><path d="M0 55 C45 55 35 30 80 35 S130 53 165 28 S220 42 265 20 S330 31 365 13 S420 22 450 4" /></svg>
    <div className={styles.activity}>{example.activity.map((label, index) => <div key={label}>{sequence.phase > index ? <Check size={15} aria-hidden="true" /> : <Code2 size={15} aria-hidden="true" />}{label}<small>{sequence.phase > index ? "Verified" : "Planned"}</small></div>)}</div></div></div>
    <div className={styles.builder}><div className={styles.buildSteps}>{["Build the features", "Connect & test", "Prepare to launch"].map((label, index) => <span key={label} data-active={sequence.phase === index} data-done={sequence.phase > index}>{sequence.phase > index ? <Check size={15} aria-hidden="true" /> : <span>{String(index + 1).padStart(2, "0")}</span>}{label}</span>)}</div><button type="button" className={styles.actionButton} onClick={sequence.running ? sequence.togglePause : sequence.start}>{sequence.running ? sequence.paused ? "Resume preview" : "Pause preview" : sequence.complete ? "Replay build" : "Bring it to life"}<ArrowRight size={16} aria-hidden="true" /></button></div>
    <div className={styles.result}><ShieldCheck size={22} aria-hidden="true" /><div aria-live="polite"><strong>{sequence.complete ? example.result : "Thoughtfully built. Carefully tested. Ready to evolve."}</strong><p>Clear requirements, connected systems, and a product shaped around your business.</p></div><ConnectLink href="/connect">Build with us<ArrowRight size={14} aria-hidden="true" /></ConnectLink></div></div>
  </figure>;
}
