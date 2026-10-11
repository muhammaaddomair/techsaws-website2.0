import SectionTitleDots from "@/components/shared/section-title-dots";
import { ArrowUpRight } from "lucide-react";
import AIWorkflowShowcase from "./ai-workflow-showcase";
import { Button } from "@/components/ui/button";
import ConnectLink from "@/components/shared/connect-link";
import { aiAutomationPageData } from "@/data/pages/services/ai-automation-page-data";
import styles from "./ai-automation-hero-section.module.css";

const data = aiAutomationPageData.hero;

export default function AIAutomationHeroSection() {
  return (
    <section className={`surface-dark ${styles.hero}`} aria-labelledby="ai-automation-heading">
      <div className={`page-layout ${styles.content}`}>
        <p className={styles.eyebrow}><SectionTitleDots />{data.eyebrow}</p>
        <h1 id="ai-automation-heading" className={styles.heading}>{data.heading[0]} <span>{data.heading[1]}</span></h1>
        <p className={styles.description}>{data.description}</p>
        <Button asChild className="mt-5 min-h-12 gap-2 rounded-lg px-6 font-body">
          <ConnectLink href={data.cta.href}>{data.cta.label}<ArrowUpRight aria-hidden="true" /></ConnectLink>
        </Button>
        <p className={styles.support}>{data.supportingText}</p>
        <AIWorkflowShowcase />
      </div>
    </section>
  );
}
