import AIAutomationHeroSection from "@/components/sections/services/automation/ai-automation-hero-section";
import ProblemSection from "@/components/sections/services/automation/problem-section";
import SolutionSection from "@/components/sections/services/automation/solution-section";
import SectionBoundary from "@/components/layouts/section-boundary";
import SectionCanvas from "@/components/shared/sections/section-canvas";
import BusinessOutcomesSection from "@/components/sections/services/automation/business-outcomes-section";
import HowItWorksSection from "@/components/sections/services/automation/how-it-works-section";
import ProcessSection from "@/components/sections/home/process-section";
import FAQSection from "@/components/sections/home/faq-section";
import CTASection from "@/components/shared/sections/cta-section";
import styles from "@/components/sections/services/automation/problem-section.module.css";

function AIAutomationPage() {
  return (
    <main>
      <AIAutomationHeroSection />
      <div className={styles.canvasBlend}>
        <SectionCanvas surface="dark" layout="full">
          <ProblemSection />
          <SectionBoundary direction="dark-light" />
          <SolutionSection />
          <BusinessOutcomesSection />
          <HowItWorksSection />
          <SectionBoundary direction="light-dark" />
          <ProcessSection />
          <FAQSection />
          <CTASection />
        </SectionCanvas>
      </div>
    </main>
  );
}

export default AIAutomationPage;
