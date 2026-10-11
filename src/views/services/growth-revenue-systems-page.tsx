import ProblemSection from "@/components/sections/services/growth/problem-section";
import SolutionSection from "@/components/sections/services/growth/solution-section";
import BusinessOutcomesSection from "@/components/sections/services/growth/business-outcomes-section";
import HowItWorksSection from "@/components/sections/services/growth/how-it-works-section";
import SectionCanvas from "@/components/shared/sections/section-canvas";
import ProcessSection from "@/components/sections/home/process-section";
import FAQSection from "@/components/sections/home/faq-section";
import CTASection from "@/components/shared/sections/cta-section";
import SectionBoundary from "@/components/layouts/section-boundary";

export default function GrowthRevenueSystemsPage() {
  return (
    <main>
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
    </main>
  );
}
