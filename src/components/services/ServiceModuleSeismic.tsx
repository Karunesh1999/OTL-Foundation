import React from 'react';
import { DollarSign, ShieldCheck } from 'lucide-react';

interface ServiceModuleSeismicProps {
  isVisible?: boolean;
  onRequestInspection?: () => void;
}

export const ServiceModuleSeismic: React.FC<ServiceModuleSeismicProps> = ({
  isVisible = true,
  onRequestInspection,
}) => {
  if (!isVisible) return null;

  return (
    <article
      className="rounded-2xl bg-surface-container-lowest p-5 sm:p-8 lg:p-12 shadow-sm border border-outline-variant/15 relative overflow-hidden transition-all duration-300 scroll-mt-48"
      id="module-seismic"
    >
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
        {/* Left Column (7 cols) */}
        <div className="lg:col-span-7 space-y-6">
          <div className="flex flex-wrap items-center gap-3">
            <span className="px-3 py-1 rounded-full bg-secondary-container text-on-primary font-badge-caps text-badge-caps uppercase font-bold">
              California Earthquake Authority (CEA) Certified
            </span>
            <span className="px-3 py-1 rounded-full bg-surface-container-high text-on-surface font-badge-caps text-badge-caps uppercase font-bold">
              State Certified Proprietary System
            </span>
          </div>

          <h2 className="font-headline-lg text-headline-lg text-on-surface font-extrabold tracking-tight">
            Earthquake Resistant Bracing Systems (ERBS) &amp; Lateral Tie-Down Engineering
          </h2>

          <p className="font-body-lg text-body-lg text-on-surface-variant leading-relaxed">
            In severe seismic tremors, unbraced manufactured homes can shift, topple off pier blocks, and rupture underground gas and sewer lines. OnTheLevel installs state-approved ERBS seismic bracing units designed to absorb horizontal acceleration and prevent catastrophic structural collapse.
          </p>

          <div className="space-y-4 pt-2">
            <div className="p-4 rounded-xl bg-surface-container-low border border-outline-variant/15 space-y-2">
              <div className="flex items-center gap-2 text-on-surface font-headline-sm text-headline-sm font-bold">
                <DollarSign className="w-5 h-5 text-secondary-container" />
                <span>CEA Insurance Discount Qualification</span>
              </div>
              <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
                Once our ERBS system is inspected and signed off by the building department, homeowners qualify for immediate premium discounts on their California Earthquake Authority (CEA) and private homeowners earthquake insurance policies.
              </p>
            </div>

            <div className="p-4 rounded-xl bg-surface-container-low border border-outline-variant/15 space-y-2">
              <div className="flex items-center gap-2 text-on-surface font-headline-sm text-headline-sm font-bold">
                <ShieldCheck className="w-5 h-5 text-secondary-container" />
                <span>Lateral &amp; Vertical Dual Anchorage</span>
              </div>
              <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
                Unlike basic ground anchors that loosen in saturated soils, our systems clamp rigidly to the main I-beam web with diagonal heavy-gauge struts anchored deep into solid concrete pad foundations.
              </p>
            </div>
          </div>

          <div className="pt-2 flex items-center gap-4">
            <button
              type="button"
              onClick={onRequestInspection}
              className="px-6 py-3.5 rounded-lg bg-primary-container text-on-primary font-headline-sm text-headline-sm hover:bg-primary transition-colors shadow-sm inline-flex items-center gap-2 cursor-pointer"
            >
              <span>Schedule Seismic Retrofit Evaluation</span>
              <ShieldCheck className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Right Sidebar (5 cols) */}
        <div className="lg:col-span-5 space-y-6">
          <div className="rounded-xl overflow-hidden shadow-md bg-surface-container-lowest border border-outline-variant/15">
            <img
              alt="Heavy gauge earthquake steel diagonal seismic strut bolted to concrete pier"
              className="w-full h-64 object-cover"
              src="/images/service-retrofit.jpg"
            />
            <div className="p-5 bg-surface-container-lowest space-y-2">
              <span className="font-badge-caps text-badge-caps text-secondary font-bold tracking-wider uppercase">
                Seismic Engineering
              </span>
              <h4 className="font-headline-sm text-headline-sm text-on-surface font-bold">
                Engineered Lateral Restraint System
              </h4>
              <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
                California State Standard SPA-certified bracing units installed under every factory transport section.
              </p>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
};
