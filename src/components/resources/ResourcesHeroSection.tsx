import React from 'react';
import { BookOpen, Building2, CheckCircle2, FileText, ArrowRight } from 'lucide-react';

export const ResourcesHeroSection: React.FC = () => {
  return (
    <section className="w-full bg-surface-container-lowest border-b border-outline-variant/15 py-8 lg:py-12">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* 2-Column Hero Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-8 space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-surface-container-high text-on-surface font-badge-caps text-badge-caps uppercase tracking-wider shadow-xs">
              <span className="w-2 h-2 rounded-full bg-secondary-container animate-pulse" />
              <span>California Engineering &amp; Borrower Education Center</span>
            </div>

            <h1 className="font-display-hero text-display-hero text-on-surface tracking-tight leading-tight">
              Manufactured Housing Lending, Title &amp; Engineering Knowledge Base
            </h1>

            <p className="font-body-lg text-body-lg text-on-surface-variant leading-relaxed">
              Authoritative California guidelines for homeowners, mortgage borrowers, realtors, and escrow officers. Navigate complex land-owned park financing, condo conversions, HCD Form 433A real property recordings, and Fannie Mae/FHA compliance requirements with direct engineering clarity.
            </p>

            {/* Quick-Jump Section Anchors */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <a
                href="#condo-park-financing"
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg bg-surface-container-low text-on-surface hover:bg-surface-container-high transition-colors text-body-sm font-semibold border border-outline-variant/15 shadow-xs"
              >
                <Building2 className="w-4 h-4 text-secondary" />
                <span>Condo Park Financing</span>
                <ArrowRight className="w-3.5 h-3.5 text-on-surface-variant" />
              </a>

              <a
                href="#park-types"
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg bg-surface-container-low text-on-surface hover:bg-surface-container-high transition-colors text-body-sm font-semibold border border-outline-variant/15 shadow-xs"
              >
                <BookOpen className="w-4 h-4 text-secondary" />
                <span>Park Classification Models</span>
                <ArrowRight className="w-3.5 h-3.5 text-on-surface-variant" />
              </a>

              <a
                href="#lender-conditions"
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg bg-surface-container-low text-on-surface hover:bg-surface-container-high transition-colors text-body-sm font-semibold border border-outline-variant/15 shadow-xs"
              >
                <CheckCircle2 className="w-4 h-4 text-secondary" />
                <span>Lending Approval Matrix</span>
                <ArrowRight className="w-3.5 h-3.5 text-on-surface-variant" />
              </a>

              <a
                href="#compliance-toolkits"
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg bg-surface-container-low text-on-surface hover:bg-surface-container-high transition-colors text-body-sm font-semibold border border-outline-variant/15 shadow-xs"
              >
                <FileText className="w-4 h-4 text-secondary" />
                <span>Official PDF Guides</span>
                <ArrowRight className="w-3.5 h-3.5 text-on-surface-variant" />
              </a>
            </div>
          </div>

          {/* Right Highlights Column */}
          <div className="lg:col-span-4 bg-surface-container-low p-6 rounded-2xl border border-outline-variant/15 shadow-xs space-y-4">
            <span className="font-badge-caps text-badge-caps uppercase tracking-wider text-secondary font-bold">
              Borrower Advisory
            </span>
            <h3 className="font-headline-sm text-headline-sm text-on-surface font-bold">
              Why Land Ownership Matters for Your Loan
            </h3>
            <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
              Standard mortgage lenders (Fannie Mae, Freddie Mac, FHA, VA) require a legal land-home link before offering 30-year low fixed mortgage rates. Discover which parks qualify and how to verify deeded status.
            </p>
            <div className="pt-2 border-t border-outline-variant/15 space-y-2 text-body-sm text-on-surface">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-secondary-container" />
                <span>Over 100+ Land-Owned Parks in Southern CA</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-secondary-container" />
                <span>Full Conforming Fixed-Rate Eligibility</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
