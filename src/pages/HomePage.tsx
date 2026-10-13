import React from 'react';
import {
  HeroSection,
  EligibilityAssessmentCard,
  WhoWeServeSection,
  AdvisoryBannerSection,
  CoreServicesSection,
  AboutSection,
  VideoDemoSection,
  TestimonialsSection,
  PartnersGridSection,
  StatewideCoverageSection,
} from '../components/home';

interface HomePageProps {
  onRequestInspection?: () => void;
  onCalculateQuote?: () => void;
}

export const HomePage: React.FC<HomePageProps> = ({
  onRequestInspection,
  onCalculateQuote,
}) => {
  return (
    <div className="flex flex-col w-full">
      {/* SECTION 1: DESKTOP HERO */}
      <HeroSection
        onRequestInspection={onRequestInspection}
        onCalculateQuote={onCalculateQuote}
      />

      {/* SECTION 2: ABOUT US - 35+ YEARS CALIFORNIA MANUFACTURED HOME SPECIALISTS */}
      <AboutSection onRequestInspection={onRequestInspection} />

      {/* SECTION 3: INSTANT ELIGIBILITY ASSESSMENT TOOL */}
      <section className="py-16 bg-surface-container-lowest border-b border-outline-variant/15 scroll-mt-32" id="eligibility-assessment-section">
        <div className="max-w-4xl mx-auto px-6 lg:px-12">
          <EligibilityAssessmentCard />
        </div>
      </section>

      {/* SECTION 4: WHO WE SERVE (4-COLUMN ARCHITECTURAL CARDS) */}
      <WhoWeServeSection />

      {/* SECTION 5: IMPORTANT CALIFORNIA ADVISORY BANNER (PRE-1976 & PARK MODEL GUIDELINES) */}
      <AdvisoryBannerSection />

      {/* SECTION 6: CORE SPECIALTY SERVICES (6 MODULAR TILES WITH BLUEPRINT STYLING) */}
      <CoreServicesSection />

      {/* SECTION 7: CERTIFIED FIELD OPERATIONS & ESSENTIAL KNOWLEDGE BASE */}
      <VideoDemoSection onRequestInspection={onRequestInspection} />

      {/* SECTION 6: CLIENT PRAISE & VERIFIED ESCROW TESTIMONIALS */}
      <TestimonialsSection />

      {/* SECTION 7: INDUSTRY PARTNERS & AFFILIATIONS LOGO GRID */}
      <PartnersGridSection />

      {/* SECTION 8: STATEWIDE COVERAGE & DIRECT DISPATCH BANNER */}
      <StatewideCoverageSection />
    </div>
  );
};

export default HomePage;
