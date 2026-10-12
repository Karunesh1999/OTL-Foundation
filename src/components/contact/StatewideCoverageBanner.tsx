import React from 'react';
import { ShieldCheck, Clock, CheckCircle2 } from 'lucide-react';

export const StatewideCoverageBanner: React.FC = () => {
  return (
    <section className="w-full bg-surface-container-low py-12 lg:py-16 border-b border-outline-variant/15" id="coverage-zones">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="rounded-2xl bg-surface-container-lowest p-8 lg:p-12 border border-outline-variant/15 shadow-sm space-y-6">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
            <div className="space-y-2 max-w-2xl">
              <span className="font-badge-caps text-badge-caps uppercase tracking-wider text-secondary font-bold">
                Statewide Deployment
              </span>
              <h3 className="font-headline-lg text-headline-lg text-on-surface font-extrabold tracking-tight">
                Full Coverage Across All 58 California Counties
              </h3>
              <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
                Headquartered in coastal Encinitas (San Diego County), with mobile inspection units positioned for rapid response throughout Southern California, the Central Valley, the Bay Area, and Northern California.
              </p>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 shrink-0">
              <div className="p-3.5 rounded-xl bg-surface-container-low border border-outline-variant/10 text-center">
                <span className="font-bold text-on-surface block text-sm">Southern CA</span>
                <span className="text-xs text-secondary font-semibold">24 - 48h Response</span>
              </div>

              <div className="p-3.5 rounded-xl bg-surface-container-low border border-outline-variant/10 text-center">
                <span className="font-bold text-on-surface block text-sm">Central Valley</span>
                <span className="text-xs text-secondary font-semibold">48h Response</span>
              </div>

              <div className="p-3.5 rounded-xl bg-surface-container-low border border-outline-variant/10 text-center col-span-2 sm:col-span-1">
                <span className="font-bold text-on-surface block text-sm">Bay Area &amp; North</span>
                <span className="text-xs text-secondary font-semibold">48 - 72h Response</span>
              </div>
            </div>
          </div>

          <div className="pt-4 border-t border-outline-variant/10 flex flex-wrap items-center justify-between gap-4 text-xs font-semibold text-on-surface-variant">
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-secondary-container" />
              <span>Direct Escrow Billing In Every California Title Office</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4 text-secondary-container" />
              <span>Same-Day APN &amp; Assessor Records Research</span>
            </div>
            <div className="flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-secondary-container" />
              <span>Licensed C-47 &amp; Class B Accountability</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
