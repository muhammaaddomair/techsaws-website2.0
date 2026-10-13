import titleStyles from "@/components/sections/services/automation/section-heading-preview.module.css";
import CybersecurityHeroSection from "@/components/sections/services/cybersecurity/cybersecurity-hero-section";
import ProblemSection from "@/components/sections/services/cybersecurity/problem-section";
import SolutionSection from "@/components/sections/services/cybersecurity/solution-section";
import BusinessOutcomesSection from "@/components/sections/services/cybersecurity/business-outcomes-section";
import HowItWorksSection from "@/components/sections/services/cybersecurity/how-it-works-section";
import SectionCanvas from "@/components/shared/sections/section-canvas";
import ProcessSection from "@/components/sections/home/process-section";
import FAQSection from "@/components/sections/home/faq-section";
import CTASection from "@/components/shared/sections/cta-section";
import SectionBoundary from "@/components/layouts/section-boundary";

export default function CybersecurityProtectionPage() {
  return (
    <main>
      <SectionCanvas surface="dark" layout="full">
        <CybersecurityHeroSection />
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
