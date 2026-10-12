import React, { useState, useEffect } from 'react';
import {
  ServicesHeroSection,
  ServicesFilterBar,
  ServiceModule433A,
  ServiceModuleHud,
  ServiceModuleReleveling,
  ServiceModuleDrainage,
  ServiceModuleSeismic,
  ServicesWorkflowSection,
  ServicesResourcesSection,
  ServicesCtaSection,
} from '../components/services';

interface ServicesPageProps {
  onRequestInspection?: () => void;
  onGetQuote?: () => void;
}

export const ServicesPage: React.FC<ServicesPageProps> = ({
  onRequestInspection,
  onGetQuote,
}) => {
  const [activeCategory, setActiveCategory] = useState<string>('all');

  // Handle URL hash navigation on mount and hash changes
  useEffect(() => {
    const handleHash = () => {
      const hash = window.location.hash.replace('#', '');
      if (hash) {
        if (hash.startsWith('module-')) {
          setActiveCategory('all');
        }
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

  const handleSelectCategory = (catId: string) => {
    setActiveCategory(catId);
    if (catId !== 'all') {
      setTimeout(() => {
        const el = document.getElementById(`module-${catId}`);
        if (el) {
          el.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }, 50);
    }
  };

  return (
    <div className="w-full min-h-screen bg-surface flex flex-col">
      {/* SECTION 1: HERO & CORE CERTIFICATION CREDENTIALS */}
      <ServicesHeroSection onRequestInspection={onRequestInspection} />

      {/* SECTION 2: STICKY CATEGORY FILTER BAR */}
      <ServicesFilterBar
        activeCategory={activeCategory}
        onSelectCategory={handleSelectCategory}
      />

      {/* SECTION 3: TECHNICAL DEEP-DIVE MODULES */}
      <section className="w-full bg-surface-container-low border-b border-outline-variant/15 py-12 lg:py-16">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 space-y-12">
          {/* Module A: 433A Permanent Foundation Certification */}
          <ServiceModule433A
            isVisible={activeCategory === 'all' || activeCategory === '433a'}
            onRequestInspection={onRequestInspection}
          />

          {/* Module B: HUD / FHA / VA Engineering Certification */}
          <ServiceModuleHud
            isVisible={activeCategory === 'all' || activeCategory === 'hud'}
            onRequestInspection={onRequestInspection}
          />

          {/* Module C: Precision Laser Releveling */}
          <ServiceModuleReleveling
            isVisible={activeCategory === 'all' || activeCategory === 'releveling'}
          />

          {/* Module D: Moisture Barrier & Crawlspace Drainage */}
          <ServiceModuleDrainage
            isVisible={activeCategory === 'all' || activeCategory === 'drainage'}
            onGetQuote={onGetQuote}
          />

          {/* Module E: Earthquake Retrofit & ERBS Seismic Bracing */}
          <ServiceModuleSeismic
            isVisible={activeCategory === 'all' || activeCategory === 'seismic'}
            onRequestInspection={onRequestInspection}
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
