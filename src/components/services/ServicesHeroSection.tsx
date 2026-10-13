import React from 'react';
import { ArrowRight, FileText, ShieldCheck } from 'lucide-react';

interface ServicesHeroSectionProps {
  onRequestInspection?: () => void;
}

export const ServicesHeroSection: React.FC<ServicesHeroSectionProps> = ({
  onRequestInspection,
}) => {
  return (
    <section className="w-full bg-surface-container-lowest border-b border-outline-variant/15 py-8 lg:py-12">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* 2-Column Hero Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          {/* Left Narrative Column (7 cols) */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-surface-container-high text-on-surface font-badge-caps text-badge-caps uppercase tracking-wider shadow-xs">
              <span className="w-2 h-2 rounded-full bg-secondary-container animate-pulse" />
              <span>California Lic #677241 &amp; #1022204 • C-47 &amp; Class B</span>
            </div>

            <h1 className="font-display-hero text-display-hero text-on-surface tracking-tight leading-tight">
              Specialized Manufactured &amp; Modular Housing Engineering &amp; Foundation Services
            </h1>

            <p className="font-body-lg text-body-lg text-on-surface-variant leading-relaxed">
              Over 35 years of California licensing authority. Providing turnkey permanent foundation certifications (433A), HUD/FHA/VA compliance, seismic retrofitting, releveling, moisture barrier restoration, and curative title resolution directly to homeowners, realtors, and escrow officers.
            </p>

            <div className="flex flex-wrap items-center gap-4 pt-2">
              <button
                type="button"
                onClick={onRequestInspection}
                className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-lg bg-secondary-container text-on-primary font-headline-sm text-headline-sm hover:bg-secondary hover:shadow-lg hover:scale-[1.02] active:scale-[0.98] transition-all shadow-md group cursor-pointer"
              >
                <span>Schedule Service Inspection</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>

              <a
                href="#resources-library"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-lg bg-surface-container-low text-on-surface font-headline-sm text-headline-sm hover:bg-surface-container-high transition-colors shadow-xs border border-outline-variant/15"
              >
                <FileText className="w-5 h-5 text-secondary" />
                <span>Escrow Lending Checklist (PDF)</span>
              </a>
            </div>

            {/* 4 Trust Metric Badges */}
            <div className="pt-4 grid grid-cols-2 sm:grid-cols-4 gap-3 text-on-surface">
              <div className="p-3.5 bg-surface-container-low rounded-xl border border-outline-variant/10 shadow-xs flex flex-col">
                <span className="font-headline-sm text-headline-sm text-secondary font-bold">58</span>
                <span className="font-body-sm text-body-sm text-on-surface-variant">CA Counties Served</span>
              </div>
              <div className="p-3.5 bg-surface-container-low rounded-xl border border-outline-variant/10 shadow-xs flex flex-col">
                <span className="font-headline-sm text-headline-sm text-secondary font-bold">100%</span>
                <span className="font-body-sm text-body-sm text-on-surface-variant">Escrow Compliance</span>
              </div>
              <div className="p-3.5 bg-surface-container-low rounded-xl border border-outline-variant/10 shadow-xs flex flex-col">
                <span className="font-headline-sm text-headline-sm text-secondary font-bold">$0 Down</span>
                <span className="font-body-sm text-body-sm text-on-surface-variant">Direct Escrow Billing</span>
              </div>
              <div className="p-3.5 bg-surface-container-low rounded-xl border border-outline-variant/10 shadow-xs flex flex-col">
                <span className="font-headline-sm text-headline-sm text-secondary font-bold">Title 25</span>
                <span className="font-body-sm text-body-sm text-on-surface-variant">&amp; HUD 1996 Standards</span>
              </div>
            </div>
          </div>

          {/* Right Inspection Visual Column (5 cols) */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-2xl overflow-hidden shadow-xl border border-outline-variant/20 bg-surface-container-lowest group">
              <img
                alt="Licensed California structural engineering inspector conducting 433A foundation laser elevation inspection"
                className="w-full h-[480px] object-cover object-center transition-transform duration-700 group-hover:scale-105"
                src="/images/service-hero.jpg"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary-container/60 via-transparent to-transparent pointer-events-none" />
              <div className="absolute bottom-4 left-4 right-4 p-4 rounded-xl bg-surface-container-lowest/95 backdrop-blur-md shadow-lg border border-outline-variant/20">
                <div className="flex items-center gap-3.5">
                  <div className="w-11 h-11 rounded-lg bg-secondary-container text-on-primary flex items-center justify-center shrink-0 shadow-sm">
                    <ShieldCheck className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-headline-sm text-headline-sm text-on-surface font-bold leading-tight">
                      Statewide Field Inspection Crews
                    </h4>
                    <p className="font-body-sm text-body-sm text-on-surface-variant mt-0.5">
                      Rapid 48-72h escrow turnaround across California with sealed engineering calculations.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
