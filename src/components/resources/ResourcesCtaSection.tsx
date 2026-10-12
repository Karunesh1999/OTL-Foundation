import React from 'react';
import { Phone, PhoneCall, Mail, Calendar, Building2 } from 'lucide-react';
import { CONTACT_INFO } from '../../data/navigation';

interface ResourcesCtaSectionProps {
  onRequestConsultation?: () => void;
}

export const ResourcesCtaSection: React.FC<ResourcesCtaSectionProps> = ({
  onRequestConsultation,
}) => {
  return (
    <section className="w-full bg-primary-container text-on-primary py-16 lg:py-20">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="rounded-2xl bg-surface-container-highest/10 border border-outline-variant/15 p-8 lg:p-12 space-y-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8 space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-secondary-container/20 text-secondary-container font-badge-caps text-badge-caps uppercase font-bold">
                <Building2 className="w-4 h-4" />
                <span>Statewide Park Feasibility &amp; Escrow Desk</span>
              </div>

              <h2 className="font-headline-lg text-headline-lg text-on-primary font-extrabold tracking-tight">
                Have Questions About a Park or Pending Loan Approval?
              </h2>

              <p className="font-body-lg text-body-lg text-on-primary-container leading-relaxed">
                Whether you are a buyer seeking FHA/VA condo approval, a realtor reviewing a 433A contingency, or an escrow officer coordinating a closing deadline, our engineering team provides direct phone and records verification.
              </p>

              <div className="pt-2 flex flex-wrap items-center gap-6 text-on-primary font-label-md text-label-md">
                <a
                  className="flex items-center gap-2 hover:text-secondary-container transition-colors"
                  href={CONTACT_INFO.tollFreeHref}
                >
                  <Phone className="w-4 h-4 text-secondary-container" />
                  <span>Toll-Free: {CONTACT_INFO.tollFree}</span>
                </a>
                <a
                  className="flex items-center gap-2 hover:text-secondary-container transition-colors"
                  href={CONTACT_INFO.localHref}
                >
                  <PhoneCall className="w-4 h-4 text-secondary-container" />
                  <span>Direct Mobile: {CONTACT_INFO.local}</span>
                </a>
                <a
                  className="flex items-center gap-2 hover:text-secondary-container transition-colors"
                  href={CONTACT_INFO.emailHref}
                >
                  <Mail className="w-4 h-4 text-secondary-container" />
                  <span>{CONTACT_INFO.email}</span>
                </a>
              </div>
            </div>

            <div className="lg:col-span-4 flex flex-col gap-3">
              <button
                type="button"
                onClick={onRequestConsultation}
                className="w-full py-4 rounded-lg bg-secondary-container text-on-primary font-headline-sm text-headline-sm hover:bg-secondary transition-colors text-center shadow-lg flex items-center justify-center gap-2 cursor-pointer"
              >
                <Calendar className="w-5 h-5" />
                <span>Request Feasibility Review</span>
              </button>

              <a
                className="w-full py-4 rounded-lg bg-surface-container-lowest text-on-surface font-headline-sm text-headline-sm hover:bg-surface-container-high transition-colors text-center shadow-sm flex items-center justify-center gap-2"
                href={`mailto:${CONTACT_INFO.email}?subject=Park%20Financing%20Feasibility%20Inquiry`}
              >
                <Mail className="w-5 h-5 text-secondary" />
                <span>Email Park Documents</span>
              </a>

              <p className="text-center font-body-sm text-body-sm text-on-primary-container pt-1">
                Zero Upfront Costs • Direct Title &amp; Escrow Coordination
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
