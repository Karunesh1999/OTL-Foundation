import React, { useState, useEffect } from 'react';
import {
  ServicesHeroSection,
  ServicesFilterBar,
  ServiceModule433A,
  ServiceModuleHud,
  ServiceModuleEscrow,
  ServiceModuleForensic,
  ServiceModuleReleveling,
  ServiceModuleDrainage,
  ServiceModuleSeismic,
  ServicesWorkflowSection,
  ServicesResourcesSection,
  ServicesCtaSection,
} from '../components/services';

interface ServicesPageProps {
  onRequestInspection?: (serviceId?: string) => void;
  onGetQuote?: (serviceId?: string) => void;
}

export const ServicesPage: React.FC<ServicesPageProps> = ({
  onRequestInspection,
  onGetQuote,
}) => {
  const [activeCategory, setActiveCategory] = useState<string>('all');

  const scrollToModule = (targetId: string) => {
    const el = document.getElementById(targetId);
    if (!el) return;

    // Dynamically calculate Header (120px) + Sticky Filter Bar (~70px) + 20px breathing room
    const header = document.querySelector('header');
    const filterBar = document.getElementById('services-filter-bar');
    const headerHeight = header ? header.offsetHeight : 120;
    const filterHeight = filterBar ? filterBar.offsetHeight : 68;
    const offset = headerHeight + filterHeight + 20;

    const elementPosition = el.getBoundingClientRect().top;
    const offsetPosition = elementPosition + window.pageYOffset - offset;

    window.scrollTo({
      top: Math.max(0, offsetPosition),
      behavior: 'smooth',
    });

    // Brief highlight ring to emphasize the targeted module
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
        let catKey = hash.replace('module-', '');
        if (catKey === 'expert-testimony') catKey = 'forensic';
        setActiveCategory(catKey);
        setTimeout(() => {
          scrollToModule(hash.startsWith('module-') ? hash : `module-${hash}`);
        }, 150);
      }
    };

    handleHash();
    window.addEventListener('hashchange', handleHash);
    return () => window.removeEventListener('hashchange', handleHash);
  }, []);

  const handleSelectCategory = (catId: string) => {
    setActiveCategory(catId);
    if (catId === 'all') {
      const section = document.getElementById('services-modules-section');
      if (section) {
        const header = document.querySelector('header');
        const filterBar = document.getElementById('services-filter-bar');
        const headerHeight = header ? header.offsetHeight : 120;
        const filterHeight = filterBar ? filterBar.offsetHeight : 68;
        const offset = headerHeight + filterHeight + 10;
        const top = section.getBoundingClientRect().top + window.pageYOffset - offset;
        window.scrollTo({
          top: Math.max(0, top),
          behavior: 'smooth',
        });
      }
    } else {
      scrollToModule(`module-${catId}`);
    }
  };

  return (
    <div className="w-full min-h-screen bg-surface flex flex-col">
      {/* SECTION 1: HERO & CORE CERTIFICATION CREDENTIALS */}
      <ServicesHeroSection onRequestInspection={() => onRequestInspection?.()} />

      {/* SECTION 2: STICKY CATEGORY FILTER BAR */}
      <ServicesFilterBar
        activeCategory={activeCategory}
        onSelectCategory={handleSelectCategory}
      />

      {/* SECTION 3: TECHNICAL DEEP-DIVE MODULES */}
      <section id="services-modules-section" className="w-full bg-surface-container-low border-b border-outline-variant/15 py-12 lg:py-16">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 space-y-12">
          {/* Module A: 433A Permanent Foundation Certification */}
          <ServiceModule433A
            isVisible={true}
            onRequestInspection={() => onRequestInspection?.('433a')}
          />

          {/* Module B: HUD / FHA / VA Engineering Certification */}
          <ServiceModuleHud
            isVisible={true}
            onRequestInspection={() => onRequestInspection?.('hud')}
          />

          {/* Module C: Lender & Realtor Escrow Relations ($0 Upfront Billing) */}
          <ServiceModuleEscrow
            isVisible={true}
            onRequestInspection={() => onRequestInspection?.('escrow-title')}
          />

          {/* Module D: Forensic Engineering & Expert Witness Testimony */}
          <ServiceModuleForensic
            isVisible={true}
            onRequestInspection={() => onRequestInspection?.('expert-testimony')}
          />

          {/* Module E: Precision Laser Releveling */}
          <ServiceModuleReleveling
            isVisible={true}
            onRequestInspection={() => onRequestInspection?.('releveling')}
          />

          {/* Module F: Moisture Barrier & Crawlspace Drainage */}
          <ServiceModuleDrainage
            isVisible={true}
            onGetQuote={() => onGetQuote?.('drainage')}
            onRequestInspection={() => onRequestInspection?.('drainage')}
          />

          {/* Module G: Earthquake Retrofit & ERBS Seismic Bracing */}
          <ServiceModuleSeismic
            isVisible={true}
            onRequestInspection={() => onRequestInspection?.('seismic')}
          />
        </div>
      </section>

      {/* SECTION 4: 4-STAGE ESCROW CLOSING WORKFLOW */}
      <ServicesWorkflowSection />

      {/* SECTION 5: COMPLIANCE RESOURCES & GUIDES */}
      <ServicesResourcesSection />

      {/* SECTION 6: BOTTOM HIGH-IMPACT ESCROW CTA BANNER */}
      <ServicesCtaSection onRequestInspection={onRequestInspection} />
    </div>
  );
};

export default ServicesPage;
