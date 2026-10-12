import React from 'react';
import { LENDING_REQUISITE_CONDITIONS } from '../../data/resourcesPage';
import { ShieldCheck, CheckCircle2, Clock, Landmark } from 'lucide-react';

export const LenderApprovalChecklistSection: React.FC = () => {
  return (
    <section className="w-full bg-surface-container-low py-12 lg:py-16 border-b border-outline-variant/15" id="lender-conditions">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 space-y-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="max-w-3xl space-y-3">
            <span className="font-badge-caps text-badge-caps uppercase tracking-wider text-secondary font-bold">
              Mortgage Underwriting Prerequisites
            </span>
            <h2 className="font-headline-lg text-headline-lg text-on-surface font-extrabold tracking-tight">
              5 Requisite Conditions for Land-Owned Loan Approval
            </h2>
            <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
              Fannie Mae, Freddie Mac, FHA, and VA underwriters mandate strict compliance with these five standards before funding residential loans in land-owned and condo park communities.
            </p>
          </div>

          <div className="flex items-center gap-2 p-3 rounded-xl bg-surface-container-lowest border border-outline-variant/15 shadow-xs shrink-0">
            <Clock className="w-5 h-5 text-secondary-container" />
            <div className="text-xs">
              <span className="font-bold text-on-surface block">Turnkey Engineering Resolution</span>
              <span className="text-on-surface-variant">48 to 72 Hours Stamped Certification</span>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {LENDING_REQUISITE_CONDITIONS.map((cond, i) => (
            <div
              key={i}
              className="p-6 rounded-2xl bg-surface-container-lowest border border-outline-variant/15 shadow-xs flex flex-col justify-between space-y-4 hover:shadow-md transition-shadow"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <div className="w-9 h-9 rounded-lg bg-secondary-fixed text-on-secondary-fixed flex items-center justify-center font-bold text-headline-sm">
                    {`0${i + 1}`}
                  </div>
                  <CheckCircle2 className="w-5 h-5 text-secondary-container" />
                </div>

                <h3 className="font-headline-sm text-headline-sm text-on-surface font-bold">
                  {cond.title}
                </h3>

                <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
                  {cond.desc}
                </p>
              </div>

              <div className="pt-2 border-t border-outline-variant/10 text-badge-caps font-badge-caps text-secondary font-semibold uppercase flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-secondary-container" />
                <span>OnTheLevel Verified Standard</span>
              </div>
            </div>
          ))}

          {/* Direct Title & Escrow Assistance Card */}
          <div className="p-6 rounded-2xl bg-primary-container text-on-primary flex flex-col justify-between space-y-4 shadow-md">
            <div className="space-y-3">
              <div className="w-9 h-9 rounded-lg bg-secondary-container text-on-primary flex items-center justify-center font-bold">
                <Landmark className="w-5 h-5" />
              </div>

              <h3 className="font-headline-sm text-headline-sm text-on-primary font-bold">
                Escrow Direct Billing &amp; Title Curative
              </h3>

              <p className="font-body-sm text-body-sm text-on-primary-container leading-relaxed">
                Missing 433A documentation or title clouds? OnTheLevel coordinates directly with county recorders, title officers, and escrow reps to clear conditions before your closing deadline.
              </p>
            </div>

            <div className="pt-2 text-xs font-semibold text-primary-fixed">
              $0 Upfront Out-of-Pocket • Invoiced at Close of Escrow
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
