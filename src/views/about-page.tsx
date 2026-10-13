import MissionVisionSection from "@/components/sections/about/mission-vision-section";
import EngineeringPrinciplesSection from "@/components/sections/about/engineering-principles-section";
import ProcessSection from "@/components/sections/home/process-section";
import titleStyles from "@/components/sections/services/automation/section-heading-preview.module.css";
import CTASection from "@/components/shared/sections/cta-section";
import SectionCanvas from "@/components/shared/sections/section-canvas";
import TeamSection from "@/components/sections/about/team-section";
import SectionBoundary from "@/components/layouts/section-boundary";

function AboutPage() {
  return (
    <main>
      <SectionCanvas surface="dark" layout="full">
        <MissionVisionSection />
        <EngineeringPrinciplesSection />
        <SectionBoundary direction="dark-light" />
        <ProcessSection
          surface="light"
          headingClassName={titleStyles.heading}
        />
        <TeamSection />
        <CTASection surface="light" panelSurface="light" />
      </SectionCanvas>
    </main>
  );
}

export default AboutPage;
