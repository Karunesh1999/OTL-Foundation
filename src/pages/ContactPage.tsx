import React, { useEffect } from 'react';
import {
  ContactHeroSection,
  ContactFormSection,
  DepartmentDirectorySection,
  StatewideCoverageBanner,
  ContactCtaSection,
} from '../components/contact';

export const ContactPage: React.FC = () => {
  // Handle URL hash and service query parameter navigation
  useEffect(() => {
    const handleHashOrService = () => {
      const hash = window.location.hash.replace('#', '');
      const searchParams = new URLSearchParams(window.location.search);
      const serviceParam = searchParams.get('service');

      const targetId = hash || (serviceParam ? `dept-${serviceParam}` : '');
      if (targetId) {
        setTimeout(() => {
          const el = document.getElementById(targetId);
          if (el) {
            const header = document.querySelector('header');
            const offset = (header ? header.offsetHeight : 120) + 20;
            const top = el.getBoundingClientRect().top + window.pageYOffset - offset;
            window.scrollTo({ top: Math.max(0, top), behavior: 'smooth' });
          }
        }, 150);
      }
    };

    handleHashOrService();
    window.addEventListener('hashchange', handleHashOrService);
    return () => window.removeEventListener('hashchange', handleHashOrService);
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
