import React from 'react';
import { CheckCircle2, Award, Clock } from 'lucide-react';

export const AboutHeritageSection: React.FC = () => {
  return (
    <section className="w-full bg-surface-container-low border-b border-outline-variant/15 py-16 lg:py-20 scroll-mt-48 transition-all duration-300" id="heritage-story">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 space-y-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Photorealistic Craftsmanship Image */}
          <div className="lg:col-span-6 relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-outline-variant/20 bg-surface-container-lowest group">
              <img
                alt="OnTheLevel founder and senior foundation engineer reviewing architectural foundation blueprints on California construction site"
                className="w-full h-[460px] sm:h-[520px] object-cover object-center transition-transform duration-700 group-hover:scale-105"
                src="/images/about-heritage-craft.jpg"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-primary-container/80 via-transparent to-transparent pointer-events-none" />

              {/* Inset Badge */}
              <div className="absolute bottom-5 left-5 right-5 p-4 rounded-xl bg-surface-container-lowest/95 backdrop-blur-md shadow-lg border border-outline-variant/20">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-secondary-container text-on-primary flex items-center justify-center shrink-0">
                    <Award className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-headline-sm text-headline-sm text-on-surface font-bold">
                      Direct Field Craftsmanship
                    </h4>
                    <p className="font-body-sm text-xs text-on-surface-variant">
                      Senior master personnel supervising every structural foundation calculation and pier block install.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Floating Top Badge */}
            <div className="absolute -top-4 -left-4 bg-surface-container-lowest/95 backdrop-blur-md p-3 rounded-xl border border-outline-variant/20 shadow-xl flex items-center gap-3">
              <div className="w-9 h-9 rounded-lg bg-secondary text-on-primary flex items-center justify-center font-bold text-sm">
                1990
              </div>
              <div className="text-xs">
                <span className="font-bold text-on-surface block">California Heritage</span>
                <span className="text-on-surface-variant">Family-Owned Since Day One</span>
              </div>
            </div>
          </div>

          {/* Right Column: Narrative & Story */}
          <div className="lg:col-span-6 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-secondary-fixed text-on-secondary-fixed font-badge-caps text-badge-caps uppercase font-bold">
              <Clock className="w-4 h-4 text-secondary" />
              <span>Our California Journey</span>
            </div>

            <h2 className="font-headline-lg text-headline-lg text-on-surface font-extrabold tracking-tight">
              Bridging the Gap Between Factory Manufacturing and Permanent Real Estate
            </h2>

            <div className="space-y-4 font-body-md text-body-md text-on-surface-variant leading-relaxed">
              <p>
                When manufactured homes first surged across California in the 1980s and 1990s, they occupied an awkward legal and physical gray area. Delivered on temporary steel chassis and highway axles with DMV vehicle registrations, they lacked true permanent foundation anchoring.
              </p>

              <p>
                As lenders, mortgage underwriters, and building officials began requiring rigid seismic stability and official conversion into real property, homeowners and realtors faced an overwhelming wall of bureaucracy. Traditional general contractors didn't understand factory-built chassis geometry, and generic handymen lacked structural engineering licenses.
              </p>

              <p>
                <strong className="text-on-surface font-semibold">OnTheLevel</strong> was established to provide the authoritative bridge. By holding dual CSLB licenses—<strong className="text-on-surface">Class B General Building (#677241)</strong> and <strong className="text-on-surface">Class C-47 Manufactured Housing (#1022204)</strong>—we mastered the entire continuum: from subfloor laser releveling and structural tie-down installations to county recorded HCD Form 433A conversions.
              </p>
            </div>

            <div className="pt-2 grid grid-cols-1 sm:grid-cols-2 gap-3 text-body-sm text-on-surface font-medium">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-secondary-container shrink-0" />
                <span>Zero Subcontracting Guarantee</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-secondary-container shrink-0" />
                <span>Direct Escrow Billing ($0 Upfront)</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-secondary-container shrink-0" />
                <span>CSLB Dual Master Licensure</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-secondary-container shrink-0" />
                <span>California CEA Seismic Partner</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
