import React from 'react';
import { AlertTriangle, Info, Headphones } from 'lucide-react';
import { CONTACT_INFO } from '../../data/navigation';

export const AdvisoryBannerSection: React.FC = () => {
  return (
    <section className="py-12 bg-surface-container-lowest border-b border-outline-variant/15">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="rounded-2xl bg-primary-container text-on-primary p-8 shadow-lg relative overflow-hidden">
          {/* Subtle Watermark Icon */}
          <div className="absolute -right-8 -bottom-8 opacity-10 pointer-events-none select-none">
            <AlertTriangle className="w-56 h-56 text-white" strokeWidth={1} />
          </div>

          <div className="relative z-10 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6">
            <div className="space-y-3 max-w-4xl">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-secondary-container text-on-primary font-badge-caps text-badge-caps uppercase">
                <Info className="w-4 h-4 shrink-0" />
                <span>Important California Lending Notice</span>
              </div>

              <h3 className="font-headline-lg text-headline-lg font-bold tracking-tight text-on-primary">
                Pre-1976 &amp; Park Model Loan Guidelines
              </h3>

              <p className="font-body-md text-body-md text-on-primary-container leading-relaxed">
                If your home is a <strong className="text-on-primary font-semibold">Park Model</strong> or was constructed prior to{' '}
                <strong className="text-on-primary font-semibold">June 15, 1976</strong> (before federal HUD building codes were enacted),
                strict California and Federal regulations apply. Pre-1976 homes cannot qualify for standard FHA/VA insured
                financing, regardless of how beautifully the unit has been remodeled. Contact our engineering advisory desk
                to evaluate private portfolio loan alternatives or non-QM solutions before escrow falls through.
              </p>
            </div>

            {/* Advisory Action Buttons */}
            <div className="shrink-0 flex flex-col sm:flex-row lg:flex-col gap-3 w-full sm:w-auto">
              <a
                href={CONTACT_INFO.tollFreeHref}
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-lg bg-surface-container-lowest text-on-surface font-headline-sm text-headline-sm hover:bg-secondary-fixed transition-colors shadow"
              >
                <Headphones className="w-5 h-5 text-secondary shrink-0" />
                <span>Advisory: {CONTACT_INFO.tollFree}</span>
              </a>

              <a
                href="#resources"
                data-path="resources"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-lg bg-surface-container-highest/20 text-on-primary font-label-md text-label-md hover:bg-surface-container-highest/30 transition-colors"
              >
                <span>Read HUD 1976 Compliance Memo</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
