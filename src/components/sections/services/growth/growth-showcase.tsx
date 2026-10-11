"use client";

import { useRef, useState } from "react";
import { useInView } from "framer-motion";
import { ArrowRight, Check, Mail, Target, Users, ArrowLeft, RotateCw, LockKeyhole, Star, MoreVertical, Plus, X } from "lucide-react";
import ConnectLink from "@/components/shared/connect-link";
import useShowcaseSequence from "@/components/shared/use-showcase-sequence";
import growthStyles from "./growth-hero-section.module.css";
import styles from "@/components/shared/marketing-showcase.module.css";

const examples = [
  { label: "Website inquiry", title: "An inquiry deserves a next step.", lead: "A visitor asks about your services", detail: "Source: your website contact form", steps: [["Capture the opportunity", "Keep the inquiry and customer details together."], ["Send a relevant follow-up", "Give the prospect a clear answer and a next step."], ["Move the conversation forward", "Assign an owner and prepare the sales conversation."]] },
  { label: "Targeted outreach", title: "Reach the right people. Keep the conversation going.", lead: "A relevant prospect replies to your outreach", detail: "Source: a targeted outreach campaign", steps: [["Match the prospect to your offer", "Keep the response and campaign context in one place."], ["Follow up with purpose", "Share relevant information based on their interest."], ["Create a sales opportunity", "Hand an interested prospect to the right person."]] },
  { label: "Returning prospect", title: "Make renewed interest count.", lead: "A previous prospect is ready to talk again", detail: "Source: your existing customer pipeline", steps: [["Recover the conversation", "Bring previous notes and customer needs together."], ["Reconnect at the right moment", "Send a useful follow-up with a clear next step."], ["Keep the opportunity moving", "Schedule the next action so the conversation stays active."]] },
];
const icons = [Target, Mail, Users];
export default function GrowthShowcase() {
  const ref = useRef<HTMLElement>(null);
  const visible = useInView(ref, { amount: .15 });
  const sequence = useShowcaseSequence(visible);
  const [selected, setSelected] = useState(0);
  const example = examples[selected];
  return <figure ref={ref} className={styles.showcase} data-running={visible && !sequence.paused} aria-label="Illustrative lead-to-sales journey">
    <div className={styles.tabs} aria-label="Choose a customer journey">{examples.map((item, index) => <button type="button" key={item.label} aria-pressed={selected === index} onClick={() => { setSelected(index); sequence.reset(); }}>{item.label}</button>)}</div>
    <div className={styles.panel}><div className={growthStyles.chrome} aria-hidden="true"><div className={growthStyles.chromeTabs}><span className={growthStyles.lights}><i /><i /><i /></span><span className={growthStyles.chromeTab}><Target size={13} />Sales workspace<X size={12} /></span><Plus size={14} /></div><div className={growthStyles.navigation}><ArrowLeft size={15} /><ArrowRight size={15} /><RotateCw size={14} /><span className={growthStyles.address}><LockKeyhole size={12} />Your connected sales pipeline<Star size={13} /></span><MoreVertical size={15} /></div></div>
      <div className={styles.body}><p className={styles.kicker}>MAKE EVERY NEXT STEP CLEAR</p><h2>{example.title}</h2><p className={styles.intro}>See how a connected process helps your team respond, follow up, and focus on the right opportunities.</p>
      <div className={styles.leadCard}><span className={styles.avatar}><Users size={18} aria-hidden="true" /></span><div><strong>{example.lead}</strong><small>{example.detail}</small></div></div>
      <div className={`${styles.flow} ${growthStyles.flow}`} aria-hidden="true">{["Discover", "Engage", "Convert"].map((label, index) => <span key={label} data-on={sequence.phase >= index}>{label}</span>)}</div>
      <div className={styles.journey}>{example.steps.map(([title, description], index) => { const Icon = icons[index]; return <div key={title} className={styles.journeyRow} data-active={sequence.phase === index} data-done={sequence.phase > index}><span className={styles.stepIcon}>{sequence.phase > index ? <Check size={16} aria-hidden="true" /> : <Icon size={16} aria-hidden="true" />}</span><div><strong>{title}</strong><small>{description}</small></div><span className={styles.state}>{sequence.phase > index ? "Ready" : sequence.phase === index ? <span className={styles.spinner} aria-label="In progress" /> : "Waiting"}</span></div>; })}</div>
      <div className={styles.actions}><button type="button" className={styles.actionButton} onClick={sequence.running ? sequence.togglePause : sequence.start}>{sequence.running ? sequence.paused ? "Resume journey" : "Pause journey" : sequence.complete ? "Replay journey" : "See the journey"}<ArrowRight size={16} aria-hidden="true" /></button><small>Three connected steps. One clear opportunity.</small></div></div>
      <div className={styles.result}><Target size={21} aria-hidden="true" /><div aria-live="polite"><strong>{sequence.complete ? "Context ready. Follow-up clear. Sales connected." : "Less chasing. More meaningful conversations."}</strong><p>A growth system built around your customers and your sales process.</p></div><ConnectLink href="/connect">Let&apos;s talk<ArrowRight size={14} aria-hidden="true" /></ConnectLink></div>
    </div>
  </figure>;
}
