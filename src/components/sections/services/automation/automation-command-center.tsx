"use client";

import { useRef, useState } from "react";
import { useInView } from "framer-motion";
import { ArrowRight, Bot, Check, CircleCheck, FileText, Mail, Pause, Play, RotateCcw, ShieldCheck, ChevronLeft, ChevronRight, PanelLeft, LockKeyhole, RotateCw, Share, Plus, Users, Workflow } from "lucide-react";
import useShowcaseSequence from "@/components/shared/use-showcase-sequence";
import styles from "./automation-command-center.module.css";

const scenarios = [
  { label: "Customer inquiries", Icon: Mail, trigger: "A new customer inquiry arrives", request: "Someone asks about your services. Give them a useful response and keep the team informed.", manual: ["Read the email and find the customer", "Copy the details into your CRM", "Write a reply and notify the team"], actions: ["Understand the request and retrieve context", "Prepare a reply using your approved information", "Update the CRM and assign the next step"], output: "Reply prepared. Customer record updated.", benefit: "Your customer gets a clearer next step. Your team gets the context.", tools: ["Inbox", "CRM", "Team workspace"] },
  { label: "Documents & data", Icon: FileText, trigger: "A new document needs processing", request: "Turn incoming documents into useful information without copying every field by hand.", manual: ["Open and review each document", "Copy information into a spreadsheet", "Check the details and chase missing fields"], actions: ["Extract the information you need", "Flag missing details for your review", "Organize the data in your connected tools"], output: "Information organized. Exceptions flagged.", benefit: "Less copying between screens. A clearer queue for your team to review.", tools: ["Documents", "Spreadsheet", "Review queue"] },
  { label: "Team coordination", Icon: Users, trigger: "Your team needs a progress update", request: "Bring scattered updates together so everyone knows what needs attention next.", manual: ["Ask teammates for their latest updates", "Check tasks across different tools", "Write and share the daily briefing"], actions: ["Collect updates from your connected tools", "Highlight priorities and outstanding tasks", "Prepare a clear briefing for your team"], output: "Priorities clear. Briefing ready to share.", benefit: "Less chasing updates. More time moving the work forward.", tools: ["Task board", "Team chat", "Daily briefing"] },
];
export default function AutomationCommandCenter() {
  const ref = useRef<HTMLElement>(null);
  const visible = useInView(ref, { amount: .15 });
  const sequence = useShowcaseSequence(visible);
  const [selected, setSelected] = useState(0);
  const scenario = scenarios[selected];
  const Icon = scenario.Icon;
  return <figure ref={ref} id="automation-demo" className={styles.demo} data-running={visible && !sequence.paused} aria-label="Interactive examples of everyday AI automation">
    <div className={styles.console}>
      <div className={styles.safariBar} aria-hidden="true">
        <div className={styles.browserControls}><span className={styles.trafficLights}><i /><i /><i /></span><PanelLeft size={17} /><ChevronLeft size={18} /><ChevronRight size={18} /></div>
        <div className={styles.address}><span><LockKeyhole size={11} />Automation workspace</span><RotateCw size={12} /></div>
        <div className={styles.browserTools}><Share size={17} /><Plus size={18} /></div>
      </div>
      <div className={styles.tabs} aria-label="Choose an automation example">{scenarios.map(({ label, Icon: TabIcon }, index) => <button key={label} type="button" aria-pressed={selected === index} onClick={() => { setSelected(index); sequence.reset(); }}><TabIcon size={16} aria-hidden="true" />{label}</button>)}</div>
      <div className={styles.content}>
        <div className={styles.input}><p className={styles.label}>01 / THE EVERYDAY TASK</p><div className={styles.trigger}><Icon size={22} aria-hidden="true" /><div><h2>{scenario.trigger}</h2><p>{scenario.request}</p></div></div><div className={styles.manual}><span>Without a connected workflow</span>{scenario.manual.map((text, index) => <p key={text}><span>{index + 1}</span>{text}</p>)}</div><div className={styles.tools}>{scenario.tools.map(tool => <span key={tool}>{tool}</span>)}</div></div>
        <div className={styles.engine}><p className={styles.label}>02 / AI MOVES THE WORK FORWARD</p><div className={styles.agent}><span className={styles.orb}><Bot size={26} aria-hidden="true" /></span><div><strong>Your workflow assistant</strong><small>{sequence.complete ? "Workflow complete" : sequence.running ? sequence.paused ? "Paused" : "Working through your rules" : "Ready when you are"}</small></div></div>
          <div className={styles.steps}>{scenario.actions.map((text, index) => <div key={text} data-active={sequence.phase === index} data-done={sequence.phase > index}><span>{sequence.phase > index ? <Check size={15} aria-hidden="true" /> : String(index + 1).padStart(2, "0")}</span><p>{text}</p>{sequence.phase === index && <i aria-hidden="true" />}</div>)}</div>
          <div className={styles.guardrail}><ShieldCheck size={16} aria-hidden="true" /><p>Approval where you need it.<br /><span>Your team stays in control of important decisions.</span></p></div>
          <button type="button" className={styles.run} onClick={sequence.running ? sequence.togglePause : sequence.start}>{sequence.running ? sequence.paused ? <Play size={16} /> : <Pause size={16} /> : sequence.complete ? <RotateCcw size={16} /> : <Workflow size={16} />}{sequence.running ? sequence.paused ? "Resume workflow" : "Pause workflow" : sequence.complete ? "Try it again" : "See this task handled"}<ArrowRight size={16} aria-hidden="true" /></button>
        </div>
      </div>
      <div className={styles.outcome} data-complete={sequence.complete}><CircleCheck size={25} aria-hidden="true" /><div aria-live="polite"><p className={styles.label}>03 / MORE ROOM FOR WHAT MATTERS</p><strong>{sequence.complete ? scenario.output : "From scattered tasks to a connected workflow."}</strong><p>{scenario.benefit}</p></div><span className={styles.badge}>{sequence.complete ? "Ready for your team" : "Built for everyday work"}</span></div>
    </div>
  </figure>;
}
