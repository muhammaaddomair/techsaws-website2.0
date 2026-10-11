import SectionCanvas from "@/components/shared/sections/section-canvas";
import ProcessSection from "@/components/sections/home/process-section";
import FAQSection from "@/components/sections/home/faq-section";
import CTASection from "@/components/shared/sections/cta-section";
import SectionBoundary from "@/components/layouts/section-boundary";

export default function CybersecurityProtectionPage() {
  return (
    <main>
      <SectionCanvas surface="dark" layout="full">
        <SectionBoundary direction="light-dark" />
        <ProcessSection />
        <FAQSection />
        <CTASection />
      </SectionCanvas>
    </main>
  );
}
