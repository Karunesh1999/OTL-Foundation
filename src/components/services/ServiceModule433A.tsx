import React from 'react';
import {
  ShieldCheck,
  CheckCircle2,
  XCircle,
  AlertTriangle,
  Check,
  Phone,
} from 'lucide-react';
import { PROCESS_433A_STEPS, SPECS_433A_ITEMS } from '../../data/servicesPage';
import { CONTACT_INFO } from '../../data/navigation';

interface ServiceModule433AProps {
  isVisible?: boolean;
  onRequestInspection?: () => void;
}

export const ServiceModule433A: React.FC<ServiceModule433AProps> = ({
  isVisible = true,
  onRequestInspection,
}) => {
  if (!isVisible) return null;

  return (
    <article
      className="rounded-2xl bg-surface-container-lowest p-8 lg:p-12 shadow-sm border border-outline-variant/15 relative overflow-hidden transition-all duration-300"
      id="module-433a"
    >
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
        {/* Left Column (7 cols) */}
        <div className="lg:col-span-7 space-y-6">
          <div className="flex flex-wrap items-center gap-3">
            <span className="px-3 py-1 rounded-full bg-tertiary-fixed text-on-tertiary-fixed font-badge-caps text-badge-caps uppercase font-bold">
              California Title 25 / Sec 18551
            </span>
            <span className="px-3 py-1 rounded-full bg-secondary-fixed text-on-secondary-fixed font-badge-caps text-badge-caps uppercase font-bold">
              ALTA 7 Mandatory Loan Endorsement
            </span>
          </div>

          <h2 className="font-headline-lg text-headline-lg text-on-surface font-extrabold tracking-tight">
            HCD Form 433A Permanent Foundation &amp; Real Estate Titling Conversion
          </h2>

          <p className="font-body-lg text-body-lg text-on-surface-variant leading-relaxed">
            When a manufactured home is originally placed on private property, it remains classified as personal property (like an automobile with DMV registration pink slips). To qualify for conventional 30-year conforming Fannie Mae, Freddie Mac, FHA, or VA mortgage financing, California law strictly requires the home to be permanently affixed and converted into taxable real property via a recorded <strong className="text-on-surface font-semibold">HCD Form 433A</strong>.
          </p>

          {/* Technical Distinction Card */}
          <div className="p-5 rounded-xl bg-surface-container-low border border-outline-variant/15 space-y-3">
            <h3 className="font-headline-sm text-headline-sm text-on-surface font-bold flex items-center gap-2">
              <AlertTriangle className="w-5 h-5 text-secondary-container" />
              <span>Crucial Legal Distinction: Form 433A vs. Form 433C</span>
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-1 font-body-md text-body-md">
              <div className="p-4 rounded-lg bg-surface-container-lowest border border-error/20">
                <span className="font-bold text-error flex items-center gap-1.5 mb-1 font-label-md text-label-md">
                  <XCircle className="w-4 h-4" />
                  <span>Unrecorded Form 433C</span>
                </span>
                <p className="text-on-surface-variant text-body-sm leading-relaxed">
                  Standard building permits or 433C slips certify construction but <em className="font-semibold text-on-surface">do not</em> convert title into real estate. Mortgage underwriters will reject this.
                </p>
              </div>

              <div className="p-4 rounded-lg bg-surface-container-lowest border border-secondary/30">
                <span className="font-bold text-secondary flex items-center gap-1.5 mb-1 font-label-md text-label-md">
                  <CheckCircle2 className="w-4 h-4 text-secondary-container" />
                  <span>Recorded Form 433A</span>
                </span>
                <p className="text-on-surface-variant text-body-sm leading-relaxed">
                  Officially recorded with County Recorder &amp; Assessor, cancelling DMV fees, securing real estate property tax assessment, and issuing ALTA 7 title endorsement.
                </p>
              </div>
            </div>
          </div>

          {/* Workflow Timeline Breakdown */}
          <div className="space-y-3 pt-2">
            <h3 className="font-headline-sm text-headline-sm text-on-surface font-bold">
              Turnkey 4-Stage 433A Engineering Process:
            </h3>
            <div className="space-y-3">
              {PROCESS_433A_STEPS.map((st) => (
                <div
                  key={st.step}
                  className="flex items-start gap-4 p-3.5 rounded-lg bg-surface-container-low hover:bg-surface-container transition-colors border border-outline-variant/10"
                >
                  <span className="w-7 h-7 rounded-full bg-primary-container text-on-primary font-bold flex items-center justify-center text-xs shrink-0 mt-0.5">
                    {st.step}
                  </span>
                  <div>
                    <h4 className="font-headline-sm text-sm font-semibold text-on-surface">
                      {st.title}
                    </h4>
                    <p className="font-body-sm text-on-surface-variant mt-0.5 leading-relaxed">
                      {st.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="pt-2 flex items-center gap-4">
            <button
              type="button"
              onClick={onRequestInspection}
              className="px-5 py-3 rounded-lg bg-secondary-container text-on-primary font-headline-sm text-headline-sm hover:bg-secondary hover:shadow-md transition-all shadow-sm inline-flex items-center gap-2 cursor-pointer"
            >
              <span>Certify Your 433A Permanent Foundation</span>
              <ShieldCheck className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Right Sidebar (5 cols) */}
        <div className="lg:col-span-5 space-y-6">
          <div className="rounded-xl overflow-hidden shadow-md bg-surface-container-lowest border border-outline-variant/15 group">
            <div className="relative overflow-hidden">
              <img
                alt="California certified 433A permanent foundation retrofit system with concrete footing and chassis tie-down"
                className="w-full h-64 sm:h-72 object-cover object-center transition-transform duration-700 group-hover:scale-105"
                src="/images/service-433a-retrofit.jpg"
              />
              <div className="absolute top-3 left-3 px-2.5 py-1 rounded-md bg-surface-container-lowest/90 backdrop-blur-md border border-outline-variant/20 text-on-surface text-xs font-semibold flex items-center gap-1.5 shadow-sm">
                <span className="w-2 h-2 rounded-full bg-secondary-container animate-pulse" />
                <span>Title 25 Engineered System</span>
              </div>
            </div>
            <div className="p-5 bg-surface-container-lowest space-y-3">
              <span className="font-badge-caps text-badge-caps text-secondary font-bold tracking-wider uppercase">
                Field Verification
              </span>
              <h4 className="font-headline-sm text-headline-sm text-on-surface font-bold">
                Standard 433A Installation Specifications
              </h4>
              <ul className="space-y-2.5 font-body-sm text-body-sm text-on-surface-variant">
                {SPECS_433A_ITEMS.map((spec, i) => (
                  <li key={i} className="flex items-center gap-2.5">
                    <Check className="w-4 h-4 text-secondary-container shrink-0" />
                    <span>{spec}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Escrow Alert Box */}
          <div className="p-6 rounded-xl bg-primary-container text-on-primary space-y-3 shadow-md">
            <div className="flex items-center gap-2.5">
              <ShieldCheck className="w-6 h-6 text-secondary-container" />
              <span className="font-headline-sm text-headline-sm font-bold text-on-primary">
                Escrow Closing Protection
              </span>
            </div>
            <p className="font-body-sm text-on-primary-container leading-relaxed">
              Need a 433A recorded before loan funding? OnTheLevel coordinates directly with your escrow officer and title company. We offer <strong className="text-primary-fixed">Direct Escrow Billing</strong> with zero upfront costs out-of-pocket for buyers or sellers.
            </p>
            <div className="pt-1">
              <a
                className="font-label-md text-label-md text-secondary-container hover:text-on-primary transition-colors flex items-center gap-1.5"
                href={CONTACT_INFO.tollFreeHref}
              >
                <Phone className="w-4 h-4" />
                <span>Call Escrow Dispatch: {CONTACT_INFO.tollFree}</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
};
