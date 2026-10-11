import { ArrowDown, ArrowUpRight, Plug, ShieldCheck, Workflow } from "lucide-react";
import SectionTitleDots from "@/components/shared/section-title-dots";
import ConnectLink from "@/components/shared/connect-link";
import { Button } from "@/components/ui/button";
import AutomationCommandCenter from "./automation-command-center";
import styles from "./automation-command-center.module.css";

export default function AIAutomationHeroSection() {
  return <section className={`surface-dark ${styles.hero}`} aria-labelledby="ai-automation-heading"><div className="page-layout">
    <div className={styles.intro}><div><p className={styles.eyebrow}><SectionTitleDots />AI &amp; Automation</p><h1 id="ai-automation-heading">Give the busywork to AI.<br /><span>Give your team room to grow.</span></h1><p className={styles.description}>The emails. The data entry. The updates nobody has time to chase. We build AI assistants and connected workflows that take repetitive work off your plate, with your people in control.</p><div className={styles.actions}><Button asChild className="min-h-12 gap-2 rounded-lg px-6 font-body"><ConnectLink href="/connect">Find Your First Automation<ArrowUpRight aria-hidden="true" /></ConnectLink></Button><a href="#automation-demo" className={styles.explore}>Explore what AI can do<ArrowDown size={16} aria-hidden="true" /></a></div></div>
    <aside className={styles.promise}><p>LESS ADMIN. A BETTER WORKING DAY.</p><h2>Useful AI starts with<br />your everyday work.</h2><ul><li><Workflow size={21} aria-hidden="true" /><div><strong>Fewer repetitive steps</strong><span>Turn a routine task into a workflow that keeps moving.</span></div></li><li><Plug size={21} aria-hidden="true" /><div><strong>Your tools, working together</strong><span>Connect the systems your team already depends on.</span></div></li><li><ShieldCheck size={21} aria-hidden="true" /><div><strong>Clear rules. Human oversight.</strong><span>Choose what runs automatically and what needs approval.</span></div></li></ul></aside></div>
    <AutomationCommandCenter />
  </div></section>;
}
