import titleStyles from "@/components/sections/services/automation/section-heading-preview.module.css";
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

function AIAutomationPage() {
  return (
    <main>
      <SectionCanvas surface="dark" layout="full">
        <AIAutomationHeroSection />
        <ProblemSection />
        <SectionBoundary direction="dark-light" />
        <SolutionSection />
        <BusinessOutcomesSection />
        <HowItWorksSection />
        <SectionBoundary direction="light-dark" />
        <ProcessSection headingClassName={titleStyles.heading} />
        <FAQSection headingClassName={titleStyles.heading} />
        <CTASection panelSurface="light" />
      </SectionCanvas>
    </main>
  );
}

export default AIAutomationPage;
