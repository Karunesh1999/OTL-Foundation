import React, { useEffect } from 'react';
import {
  ResourcesHeroSection,
  CondoParkFinancingSection,
  ParkClassificationGrid,
  LenderApprovalChecklistSection,
  ResourcesToolkitSection,
  ResourcesCtaSection,
} from '../components/resources';

interface ResourcesPageProps {
  onRequestConsultation?: () => void;
}

export const ResourcesPage: React.FC<ResourcesPageProps> = ({
  onRequestConsultation,
}) => {
  // Handle URL hash navigation on mount and hash changes
  useEffect(() => {
    const handleHash = () => {
      const hash = window.location.hash.replace('#', '');
      if (hash) {
        setTimeout(() => {
          const el = document.getElementById(hash);
          if (el) {
            const header = document.querySelector('header');
            const offset = (header ? header.offsetHeight : 120) + 20;
            const top = el.getBoundingClientRect().top + window.pageYOffset - offset;
            window.scrollTo({ top: Math.max(0, top), behavior: 'smooth' });
          }
        }, 100);
      }
    };

    handleHash();
    window.addEventListener('hashchange', handleHash);
    return () => window.removeEventListener('hashchange', handleHash);
  }, []);

  return (
    <div className="w-full min-h-screen bg-surface flex flex-col">
      {/* SECTION 1: HERO & KNOWLEDGE CENTER HEADER */}
      <ResourcesHeroSection />

      {/* SECTION 2: CONDO PARK COMMUNITIES & RESIDENT-OWNED FINANCING (FEATURED ADVISORY) */}
      <CondoParkFinancingSection onRequestConsultation={onRequestConsultation} />

      {/* SECTION 3: PARK CLASSIFICATION TYPOLOGY (4-COLUMN COMPARISON GRID) */}
      <ParkClassificationGrid />

      {/* SECTION 4: 5 REQUISITE CONDITIONS FOR LAND-OWNED LOAN APPROVAL */}
      <LenderApprovalChecklistSection />

      {/* SECTION 5: DOWNLOADABLE TOOLKITS & GUIDANCE LIBRARY */}
      <ResourcesToolkitSection />

      {/* SECTION 6: HIGH-IMPACT CONSULTATION & ESCROW DISPATCH BANNER */}
      <ResourcesCtaSection onRequestConsultation={onRequestConsultation} />
    </div>
  );
};

export default ResourcesPage;
