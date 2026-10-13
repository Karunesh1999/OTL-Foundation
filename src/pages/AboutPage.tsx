import React, { useState, useEffect } from 'react';
import {
  AboutHeroSection,
  AboutNavFilterBar,
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
  const [activeSection, setActiveSection] = useState<string>('heritage-story');

  const scrollToSection = (targetId: string) => {
    const el = document.getElementById(targetId);
    if (!el) return;

    setActiveSection(targetId);
    window.history.replaceState(null, '', `#${targetId}`);

    // Dynamically calculate Header (120px) + Sticky Nav Bar (~58px) + 20px breathing room
    const header = document.querySelector('header');
    const navBar = document.getElementById('about-section-nav');
    const headerHeight = header ? header.offsetHeight : 120;
    const navHeight = navBar ? navBar.offsetHeight : 58;
    const offset = headerHeight + navHeight + 20;

    const elementPosition = el.getBoundingClientRect().top;
    const offsetPosition = elementPosition + window.pageYOffset - offset;

    window.scrollTo({
      top: Math.max(0, offsetPosition),
      behavior: 'smooth',
    });

    // Highlight the card/section briefly so user immediately sees the full section
    el.classList.add('ring-4', 'ring-secondary', 'ring-offset-2');
    setTimeout(() => {
      el.classList.remove('ring-4', 'ring-secondary', 'ring-offset-2');
    }, 1800);
  };

  // Handle URL hash navigation on mount and hash changes
  useEffect(() => {
    const handleHash = () => {
      const hash = window.location.hash.replace('#', '');
      if (hash) {
        setActiveSection(hash);
        setTimeout(() => {
          scrollToSection(hash);
        }, 150);
      }
    };

    handleHash();
    window.addEventListener('hashchange', handleHash);
    return () => window.removeEventListener('hashchange', handleHash);
  }, []);

  return (
    <div className="w-full min-h-screen bg-surface flex flex-col">
      {/* SECTION 1: HERO & 35-YEAR CREDENTIALS */}
      <AboutHeroSection
        onRequestInspection={onRequestInspection}
        onNavigateSection={scrollToSection}
      />

      {/* STICKY SECTION NAV BAR */}
      <AboutNavFilterBar
        activeSection={activeSection}
        onSelectSection={scrollToSection}
        onRequestInspection={onRequestInspection}
      />

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

