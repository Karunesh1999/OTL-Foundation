import React, { useEffect } from 'react';
import {
  ContactHeroSection,
  ContactFormSection,
  DepartmentDirectorySection,
  StatewideCoverageBanner,
  ContactCtaSection,
} from '../components/contact';

export const ContactPage: React.FC = () => {
  // Handle URL hash navigation on mount and hash changes
  useEffect(() => {
    const handleHash = () => {
      const hash = window.location.hash.replace('#', '');
      if (hash) {
        setTimeout(() => {
          const el = document.getElementById(hash);
          if (el) {
            el.scrollIntoView({ behavior: 'smooth', block: 'start' });
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
      {/* SECTION 1: HERO & QUICK CONTACT TILES */}
      <ContactHeroSection />

      {/* SECTION 2: INTERACTIVE INQUIRY FORM & OFFICE VISUAL */}
      <ContactFormSection />

      {/* SECTION 3: DIRECT DEPARTMENT DIRECTORY (CORE USER REFERENCE) */}
      <DepartmentDirectorySection />

      {/* SECTION 4: STATEWIDE COVERAGE (ALL 58 COUNTIES) */}
      <StatewideCoverageBanner />

      {/* SECTION 5: HIGH-IMPACT RAPID ESCROW CTA BANNER */}
      <ContactCtaSection />
    </div>
  );
};

export default ContactPage;
