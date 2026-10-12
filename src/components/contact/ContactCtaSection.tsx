import React from 'react';
import { Phone, PhoneCall, Mail, Clock } from 'lucide-react';
import { OFFICE_LOCATION } from '../../data/contactPage';

export const ContactCtaSection: React.FC = () => {
  return (
    <section className="w-full bg-primary-container text-on-primary py-16 lg:py-20">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="rounded-2xl bg-surface-container-highest/10 border border-outline-variant/15 p-8 lg:p-12 space-y-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8 space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-secondary-container/20 text-secondary-container font-badge-caps text-badge-caps uppercase font-bold">
                <Clock className="w-4 h-4" />
                <span>Urgent Escrow Closing Assistance</span>
              </div>

              <h2 className="font-headline-lg text-headline-lg text-on-primary font-extrabold tracking-tight">
                Facing a Tight Closing Deadline? Contact Our Rapid Review Desk
              </h2>

              <p className="font-body-lg text-body-lg text-on-primary-container leading-relaxed">
                Send your title paperwork, inspection contingency sheets, or park information directly to our team. We coordinate with escrow officers and building officials statewide to deliver stamped engineering packages on schedule.
              </p>

              <div className="pt-2 flex flex-wrap items-center gap-6 text-on-primary font-label-md text-label-md">
                <a
                  className="flex items-center gap-2 hover:text-secondary-container transition-colors"
                  href={OFFICE_LOCATION.tollFreeHref}
                >
                  <Phone className="w-4 h-4 text-secondary-container" />
                  <span>Toll-Free: {OFFICE_LOCATION.tollFree}</span>
                </a>
                <a
                  className="flex items-center gap-2 hover:text-secondary-container transition-colors"
                  href={OFFICE_LOCATION.mainPhoneHref}
                >
                  <PhoneCall className="w-4 h-4 text-secondary-container" />
                  <span>Direct: {OFFICE_LOCATION.mainPhone}</span>
                </a>
                <a
                  className="flex items-center gap-2 hover:text-secondary-container transition-colors"
                  href={OFFICE_LOCATION.emailHref}
                >
                  <Mail className="w-4 h-4 text-secondary-container" />
                  <span>{OFFICE_LOCATION.email}</span>
                </a>
              </div>
            </div>

            <div className="lg:col-span-4 flex flex-col gap-3">
              <a
                href="#contact-form"
                className="w-full py-4 rounded-lg bg-secondary-container text-on-primary font-headline-sm text-headline-sm hover:bg-secondary transition-colors text-center shadow-lg flex items-center justify-center gap-2"
              >
                <span>Request Feasibility Review</span>
              </a>

              <a
                className="w-full py-4 rounded-lg bg-surface-container-lowest text-on-surface font-headline-sm text-headline-sm hover:bg-surface-container-high transition-colors text-center shadow-sm flex items-center justify-center gap-2"
                href={`mailto:${OFFICE_LOCATION.email}?subject=Urgent%20Escrow%20Closing%20Review`}
              >
                <Mail className="w-5 h-5 text-secondary" />
                <span>Email Escrow Documents</span>
              </a>

              <p className="text-center font-body-sm text-body-sm text-on-primary-container pt-1">
                Zero Upfront Out-of-Pocket • Invoiced at Close of Escrow
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
