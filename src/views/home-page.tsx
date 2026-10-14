import titleStyles from "@/components/sections/services/automation/section-heading-preview.module.css";
import SectionBoundary from "@/components/layouts/section-boundary";
import CoreValueSection from "@/components/sections/home/core-value-section";
import TechStackSection from "@/components/sections/home/tech-stack-section";
import ServicesSection from "@/components/sections/home/services-section";
import WhySection from "@/components/sections/home/why-section";
import ProcessSection from "@/components/sections/home/process-section";
import FAQSection from "@/components/sections/home/faq-section";
import SectionCanvas from "@/components/shared/sections/section-canvas";
import CTASection from "@/components/shared/sections/cta-section";
import HomeHeroSection from "@/components/sections/home/home-hero-section";

function HomePage() {
  return (
    <main>
      <HomeHeroSection />
      <SectionCanvas surface="dark" layout="full">
        <div className="page-layout">
          <TechStackSection />
          <CoreValueSection />
        </div>
        <SectionBoundary direction="dark-light" />
        <ServicesSection />
        <WhySection />
        <SectionBoundary direction="light-dark" />
        <ProcessSection headingClassName={titleStyles.heading} />
        <FAQSection headingClassName={`mt-4 ${titleStyles.heading}`} />
        <CTASection panelSurface="light" />
      </SectionCanvas>
    </main>
  );
}

export default HomePage;
