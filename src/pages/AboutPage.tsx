import React, { useEffect } from 'react';
import {
  AboutHeroSection,
  AboutHeritageSection,
  AboutValuesSection,
  AboutLeadershipSection,
  AboutTimelineSection,
  AboutCtaSection,
} from '../components/about';

interface AboutPageProps {
  onRequestInspection?: () => void;
}

export const AboutPage: React.FC<AboutPageProps> = ({ onRequestInspection }) => {
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
      {/* SECTION 1: HERO & 35-YEAR CREDENTIALS */}
      <AboutHeroSection onRequestInspection={onRequestInspection} />

      {/* SECTION 2: HERITAGE & CALIFORNIA STORY */}
      <AboutHeritageSection />

      {/* SECTION 3: CORE OPERATING VALUES (4 PILLARS) */}
      <AboutValuesSection />

      {/* SECTION 4: ENGINEERING FLEET & FIELD LEADERSHIP */}
      <AboutLeadershipSection />

      {/* SECTION 5: 35-YEAR TIMELINE & MILESTONES (1990 - PRESENT) */}
      <AboutTimelineSection />

      {/* SECTION 6: HIGH-IMPACT STATEWIDE ESCROW CTA BANNER */}
      <AboutCtaSection onRequestInspection={onRequestInspection} />
    </div>
  );
};

export default AboutPage;
