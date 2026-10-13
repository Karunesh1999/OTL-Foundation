import React from 'react';
import { ShieldCheck, ArrowRight, Phone } from 'lucide-react';
import { CONTACT_INFO } from '../../data/navigation';

interface AboutHeroSectionProps {
  onRequestInspection?: () => void;
}

export const AboutHeroSection: React.FC<AboutHeroSectionProps> = ({
  onRequestInspection,
}) => {
  return (
    <section className="w-full bg-surface-container-lowest border-b border-outline-variant/15 py-8 lg:py-12">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* 2-Column Hero Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-8 space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-surface-container-high text-on-surface font-badge-caps text-badge-caps uppercase tracking-wider shadow-xs">
              <span className="w-2 h-2 rounded-full bg-secondary-container animate-pulse" />
              <span>California Foundation Specialists Since 1990 • Dual CSLB Authority</span>
            </div>

            <h1 className="font-display-hero text-display-hero text-on-surface tracking-tight leading-tight">
              35+ Years of Manufactured Housing Foundation Authority &amp; Structural Leadership
            </h1>

            <p className="font-body-lg text-body-lg text-on-surface-variant leading-relaxed">
              Family-owned and operated across California. Founded with a singular, uncompromising mission: to provide direct, licensed structural engineering, precision laser releveling, and turnkey HCD 433A permanent foundation certifications for manufactured, modular, and mobile homes without subcontractor delays or broker markups.
            </p>

            <div className="flex flex-wrap items-center gap-4 pt-2">
              <button
                type="button"
                onClick={onRequestInspection}
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-lg bg-secondary-container text-on-primary font-headline-sm text-headline-sm hover:bg-secondary hover:shadow-md transition-all shadow-sm cursor-pointer"
              >
                <span>Request Statewide Inspection</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <a
                href={CONTACT_INFO.tollFreeHref}
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-lg bg-surface-container-low text-on-surface font-headline-sm text-headline-sm hover:bg-surface-container-high transition-colors border border-outline-variant/15 shadow-xs"
              >
                <Phone className="w-4 h-4 text-secondary" />
                <span>Call Dispatch: {CONTACT_INFO.tollFree}</span>
              </a>
            </div>
          </div>

          {/* Right Metrics Grid */}
          <div className="lg:col-span-4 bg-surface-container-low p-6 sm:p-8 rounded-2xl border border-outline-variant/15 shadow-xs space-y-6">
            <div className="space-y-1">
              <span className="font-badge-caps text-badge-caps uppercase tracking-wider text-secondary font-bold">
                Proven Track Record
              </span>
              <h3 className="font-headline-sm text-headline-sm text-on-surface font-bold">
                California By The Numbers
              </h3>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="p-4 rounded-xl bg-surface-container-lowest border border-outline-variant/10 shadow-xs">
                <span className="font-headline-md text-headline-md text-secondary font-extrabold block">
                  35+
                </span>
                <span className="font-body-sm text-body-sm text-on-surface-variant block mt-0.5">
                  Years in Business
                </span>
              </div>

              <div className="p-4 rounded-xl bg-surface-container-lowest border border-outline-variant/10 shadow-xs">
                <span className="font-headline-md text-headline-md text-secondary font-extrabold block">
                  58
                </span>
                <span className="font-body-sm text-body-sm text-on-surface-variant block mt-0.5">
                  CA Counties Served
                </span>
              </div>

              <div className="p-4 rounded-xl bg-surface-container-lowest border border-outline-variant/10 shadow-xs">
                <span className="font-headline-md text-headline-md text-secondary font-extrabold block">
                  15k+
                </span>
                <span className="font-body-sm text-body-sm text-on-surface-variant block mt-0.5">
                  Foundations Certified
                </span>
              </div>

              <div className="p-4 rounded-xl bg-surface-container-lowest border border-outline-variant/10 shadow-xs">
                <span className="font-headline-md text-headline-md text-secondary font-extrabold block">
                  100%
                </span>
                <span className="font-body-sm text-body-sm text-on-surface-variant block mt-0.5">
                  Escrow Funding Rate
                </span>
              </div>
            </div>

            <div className="pt-2 border-t border-outline-variant/15 flex items-center gap-3 text-xs text-on-surface-variant">
              <ShieldCheck className="w-4 h-4 text-secondary-container shrink-0" />
              <span>Licensed General Contractor (Class B) &amp; Manufactured Housing (C-47)</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
