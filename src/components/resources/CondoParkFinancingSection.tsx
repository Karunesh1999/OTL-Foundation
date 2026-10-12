import React, { useState } from 'react';
import {
  Building2,
  ExternalLink,
  CheckCircle2,
  AlertCircle,
  HelpCircle,
  Landmark,
  FileCheck,
} from 'lucide-react';

interface CondoParkFinancingSectionProps {
  onRequestConsultation?: () => void;
}

export const CondoParkFinancingSection: React.FC<CondoParkFinancingSectionProps> = ({
  onRequestConsultation,
}) => {
  const [hudModalOpen, setHudModalOpen] = useState(false);

  return (
    <section
      className="w-full bg-surface-container-low border-b border-outline-variant/15 py-12 lg:py-16"
      id="condo-park-financing"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12 space-y-8">
        {/* Top Header Card (Inspired by California Borrower Services) */}
        <div className="rounded-2xl bg-surface-container-lowest p-6 lg:p-10 shadow-sm border border-outline-variant/15 space-y-6">
          {/* Breadcrumb Ribbon & Category Tag */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-outline-variant/15 pb-4">
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-secondary">
              <Building2 className="w-4 h-4 text-secondary-container" />
              <span>Homeowner Borrower Services • Regional Financing Advisory</span>
            </div>

            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-secondary-fixed text-on-secondary-fixed text-xs font-semibold">
              <span className="w-1.5 h-1.5 rounded-full bg-secondary animate-pulse" />
              <span>San Diego &amp; Southern California Focus</span>
            </div>
          </div>

          {/* Main Title Banner */}
          <div className="space-y-2">
            <span className="font-badge-caps text-badge-caps uppercase tracking-wider text-secondary font-bold">
              Land-Home Transaction Authority
            </span>
            <h2 className="font-headline-lg text-headline-lg text-on-surface font-extrabold tracking-tight">
              Financing in San Diego &amp; California Land-Owned Communities
            </h2>
          </div>

          {/* 2-Column Content Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
            {/* Left Narrative Column (7 cols) */}
            <div className="lg:col-span-7 space-y-6">
              <div className="space-y-4">
                <h3 className="font-headline-md text-headline-md text-on-surface font-bold">
                  Condo Park Communities &amp; Resident-Owned Parks
                </h3>

                <p className="font-body-lg text-body-lg text-on-surface-variant leading-relaxed">
                  Manufactured Home Park Communities remain the most popular setting for manufactured homes in California. Although many parks operate under rental and leasehold arrangements, for loan underwriting and collateral purposes, <strong className="text-on-surface font-semibold">lenders generally require that the owner of the home also owns the land upon which the home sits</strong>—a true land-home transaction.
                </p>

                <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
                  Some resident-owned parks are legally organized as <strong className="text-on-surface font-semibold">Subdivisions</strong> or a <strong className="text-on-surface font-semibold">Planned Unit Development (PUD)</strong>, but many <strong className="text-on-surface font-semibold">condominium conversion parks</strong> also qualify for conventional 30-year conforming financing. To verify if a specific park community is on the active HUD / FHA approved registry, buyers and loan officers must cross-reference state records and title documentation.
                </p>
              </div>

              {/* Crucial Distinctions Callout */}
              <div className="p-5 rounded-xl bg-surface-container-low border border-outline-variant/15 space-y-3">
                <div className="flex items-center gap-2 font-headline-sm text-headline-sm text-on-surface font-bold">
                  <Landmark className="w-5 h-5 text-secondary-container" />
                  <span>The Critical Distinction for Loan Approval</span>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-1 font-body-sm text-body-sm">
                  <div className="p-3.5 rounded-lg bg-surface-container-lowest border border-outline-variant/20 space-y-1.5">
                    <span className="font-bold text-error flex items-center gap-1.5 font-label-md text-label-md">
                      <AlertCircle className="w-4 h-4 text-error" />
                      <span>Leased-Land / Rental Parks</span>
                    </span>
                    <p className="text-on-surface-variant leading-relaxed">
                      Subject to monthly ground space rent. Classified as personal property (chattel loan) with higher interest rates and shorter 15-20 yr terms.
                    </p>
                  </div>

                  <div className="p-3.5 rounded-lg bg-surface-container-lowest border border-secondary/30 space-y-1.5">
                    <span className="font-bold text-secondary flex items-center gap-1.5 font-label-md text-label-md">
                      <CheckCircle2 className="w-4 h-4 text-secondary-container" />
                      <span>Land-Owned / Condo Parks</span>
                    </span>
                    <p className="text-on-surface-variant leading-relaxed">
                      Borrower owns the underlying dirt or deeded condo interest. Qualifies for standard 30-year fixed conforming Fannie Mae, Freddie Mac, FHA &amp; VA mortgages.
                    </p>
                  </div>
                </div>
              </div>

              {/* Action Buttons & Links */}
              <div className="flex flex-wrap items-center gap-4 pt-2">
                <a
                  href="https://entp.hud.gov/idapp/html/condlook.cfm"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-3 rounded-lg bg-secondary-container text-on-primary font-headline-sm text-headline-sm hover:bg-secondary hover:shadow-md transition-all shadow-sm cursor-pointer"
                >
                  <span>Check HUD Approved Park Registry</span>
                  <ExternalLink className="w-4 h-4" />
                </a>

                <button
                  type="button"
                  onClick={() => setHudModalOpen(true)}
                  className="inline-flex items-center gap-2 px-5 py-3 rounded-lg bg-surface-container-low text-on-surface font-headline-sm text-headline-sm hover:bg-surface-container-high transition-colors border border-outline-variant/15 shadow-xs cursor-pointer"
                >
                  <HelpCircle className="w-4 h-4 text-secondary" />
                  <span>How to Verify Park Eligibility</span>
                </button>
              </div>
            </div>

            {/* Right Architectural Image Column (5 cols) */}
            <div className="lg:col-span-5 space-y-5">
              <div className="rounded-2xl overflow-hidden shadow-xl border border-outline-variant/20 bg-surface-container-lowest group relative">
                <img
                  alt="Modern two-story manufactured and modular homes in a sunny San Diego California resident-owned condo park community"
                  className="w-full h-72 sm:h-80 object-cover object-center transition-transform duration-700 group-hover:scale-105"
                  src="/images/condo-park-communities.jpg"
                />

                {/* Glassmorphism Floating Badge */}
                <div className="absolute top-3 left-3 px-3 py-1.5 rounded-lg bg-surface-container-lowest/95 backdrop-blur-md border border-outline-variant/20 text-on-surface text-xs font-bold flex items-center gap-2 shadow-md">
                  <span className="w-2 h-2 rounded-full bg-secondary-container animate-pulse" />
                  <span>Condo Park Community • San Diego Coastal</span>
                </div>

                <div className="p-5 bg-surface-container-lowest space-y-3">
                  <div className="flex items-center justify-between text-xs font-semibold text-secondary uppercase tracking-wider">
                    <span>Land-Home Residential Architecture</span>
                    <span>Class C-47 &amp; Class B Authority</span>
                  </div>

                  <h4 className="font-headline-sm text-headline-sm text-on-surface font-bold">
                    Title &amp; Foundation Coordination for Park Transactions
                  </h4>

                  <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
                    Buying or selling in a resident-owned mobile home subdivision? OnTheLevel coordinates foundation certifications, HCD 433A deed recordings, and structural modifications required by escrow lenders.
                  </p>

                  <div className="pt-2 border-t border-outline-variant/15 flex items-center justify-between text-body-sm">
                    <span className="text-on-surface-variant font-medium">Escrow Direct Billing:</span>
                    <span className="font-bold text-secondary-container">$0 Upfront to Buyer</span>
                  </div>
                </div>
              </div>

              {/* Consultation Quick Card */}
              <div className="p-4 rounded-xl bg-primary-container text-on-primary flex items-center justify-between gap-4 shadow-sm">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-secondary-container text-on-primary flex items-center justify-center shrink-0">
                    <FileCheck className="w-5 h-5" />
                  </div>
                  <div>
                    <h5 className="font-headline-sm text-sm font-bold text-on-primary">
                      Need Community Feasibility Review?
                    </h5>
                    <p className="font-body-sm text-xs text-on-primary-container">
                      Send parcel APN or park name for instant records lookup.
                    </p>
                  </div>
                </div>

                <button
                  type="button"
                  onClick={onRequestConsultation}
                  className="px-4 py-2 rounded-lg bg-secondary-container text-on-primary hover:bg-secondary text-xs font-bold uppercase tracking-wider shrink-0 transition-colors cursor-pointer"
                >
                  Consult
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Modal / Dialog for Park Verification Guide */}
        {hudModalOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fadeIn">
            <div className="bg-surface-container-lowest rounded-2xl max-w-xl w-full p-6 sm:p-8 space-y-6 shadow-2xl border border-outline-variant/20 relative">
              <div className="flex items-start justify-between gap-4">
                <div className="space-y-1">
                  <span className="font-badge-caps text-badge-caps uppercase tracking-wider text-secondary font-bold">
                    Verification Guide
                  </span>
                  <h3 className="font-headline-md text-headline-md text-on-surface font-extrabold">
                    How to Verify Park Financing Eligibility
                  </h3>
                </div>
                <button
                  type="button"
                  onClick={() => setHudModalOpen(false)}
                  className="w-8 h-8 rounded-lg bg-surface-container-high hover:bg-surface-container-highest text-on-surface flex items-center justify-center transition-colors cursor-pointer"
                >
                  ✕
                </button>
              </div>

              <div className="space-y-4 font-body-sm text-body-sm text-on-surface-variant">
                <div className="p-3.5 rounded-lg bg-surface-container-low border border-outline-variant/15 space-y-1">
                  <h4 className="font-semibold text-on-surface flex items-center gap-1.5">
                    <CheckCircle2 className="w-4 h-4 text-secondary-container" />
                    <span>Step 1: Check County Assessor Tax Rolls</span>
                  </h4>
                  <p>
                    Verify if the property has an individual APN (Assessor Parcel Number) with real property taxes assessed, or if it is billed under DMV license registration fees.
                  </p>
                </div>

                <div className="p-3.5 rounded-lg bg-surface-container-low border border-outline-variant/15 space-y-1">
                  <h4 className="font-semibold text-on-surface flex items-center gap-1.5">
                    <CheckCircle2 className="w-4 h-4 text-secondary-container" />
                    <span>Step 2: Confirm Recorded HCD Form 433A</span>
                  </h4>
                  <p>
                    Inspect the preliminary title report for a recorded HCD Form 433A certifying that the home is permanently affixed to the real estate.
                  </p>
                </div>

                <div className="p-3.5 rounded-lg bg-surface-container-low border border-outline-variant/15 space-y-1">
                  <h4 className="font-semibold text-on-surface flex items-center gap-1.5">
                    <CheckCircle2 className="w-4 h-4 text-secondary-container" />
                    <span>Step 3: Review HUD Condominium Roster</span>
                  </h4>
                  <p>
                    For condo conversions, search the HUD Condominiums database to confirm active project approval or request a Single-Unit Approval (SUA) questionnaire.
                  </p>
                </div>
              </div>

              <div className="pt-2 flex items-center justify-end gap-3">
                <button
                  type="button"
                  onClick={() => setHudModalOpen(false)}
                  className="px-5 py-2.5 rounded-lg bg-secondary-container text-on-primary font-semibold text-sm hover:bg-secondary transition-colors cursor-pointer"
                >
                  Close Guide
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
