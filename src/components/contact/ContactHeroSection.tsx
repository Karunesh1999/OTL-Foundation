import React from 'react';
import { Phone, PhoneCall, Mail, MapPin } from 'lucide-react';
import { OFFICE_LOCATION } from '../../data/contactPage';

export const ContactHeroSection: React.FC = () => {
  return (
    <section className="w-full bg-surface-container-lowest border-b border-outline-variant/15 py-8 lg:py-12">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* 2-Column Hero Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-8 space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-surface-container-high text-on-surface font-badge-caps text-badge-caps uppercase tracking-wider shadow-xs">
              <span className="w-2 h-2 rounded-full bg-secondary-container animate-pulse" />
              <span>Direct Top-Line Personnel • Zero Call Center Middlemen</span>
            </div>

            <h1 className="font-display-hero text-display-hero text-on-surface tracking-tight leading-tight">
              Connect Directly with California's Structural Foundation &amp; Title Authority
            </h1>

            <p className="font-body-lg text-body-lg text-on-surface-variant leading-relaxed">
              Have questions about an upcoming closing deadline, missing HCD 433A certification, HUD compliance letter, or on-site foundation retrofit? Reach out to our direct department specialists or submit your property details below for same-day feasibility review.
            </p>

            <div className="pt-2 flex flex-wrap items-center gap-3">
              <a
                href="#direct-directory"
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg bg-surface-container-low text-on-surface hover:bg-surface-container-high transition-colors text-body-sm font-semibold border border-outline-variant/15 shadow-xs"
              >
                <span>Department Direct Directory</span>
              </a>

              <a
                href="#contact-form"
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg bg-secondary-container text-on-primary hover:bg-secondary transition-colors text-body-sm font-semibold shadow-sm"
              >
                <span>Send Online Inquiry</span>
              </a>
            </div>
          </div>

          {/* Quick Contact Cards Grid (4 cols) */}
          <div className="lg:col-span-4 bg-surface-container-low p-6 rounded-2xl border border-outline-variant/15 shadow-xs space-y-4">
            <span className="font-badge-caps text-badge-caps uppercase tracking-wider text-secondary font-bold">
              Rapid Response Desk
            </span>

            <div className="space-y-3">
              <a
                href={OFFICE_LOCATION.tollFreeHref}
                className="flex items-center gap-3 p-3 rounded-xl bg-surface-container-lowest border border-outline-variant/10 hover:border-secondary/30 transition-all group"
              >
                <div className="w-10 h-10 rounded-lg bg-secondary-fixed text-on-secondary-fixed flex items-center justify-center shrink-0">
                  <Phone className="w-5 h-5 text-secondary" />
                </div>
                <div>
                  <span className="text-xs text-on-surface-variant block font-medium">Toll-Free Dispatch</span>
                  <span className="font-bold text-on-surface group-hover:text-secondary transition-colors">
                    {OFFICE_LOCATION.tollFree}
                  </span>
                </div>
              </a>

              <a
                href={OFFICE_LOCATION.mainPhoneHref}
                className="flex items-center gap-3 p-3 rounded-xl bg-surface-container-lowest border border-outline-variant/10 hover:border-secondary/30 transition-all group"
              >
                <div className="w-10 h-10 rounded-lg bg-primary-fixed text-on-primary-fixed flex items-center justify-center shrink-0">
                  <PhoneCall className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <span className="text-xs text-on-surface-variant block font-medium">Direct Line / Text</span>
                  <span className="font-bold text-on-surface group-hover:text-secondary transition-colors">
                    {OFFICE_LOCATION.mainPhone}
                  </span>
                </div>
              </a>

              <a
                href={OFFICE_LOCATION.emailHref}
                className="flex items-center gap-3 p-3 rounded-xl bg-surface-container-lowest border border-outline-variant/10 hover:border-secondary/30 transition-all group"
              >
                <div className="w-10 h-10 rounded-lg bg-tertiary-fixed text-on-tertiary-fixed flex items-center justify-center shrink-0">
                  <Mail className="w-5 h-5 text-tertiary" />
                </div>
                <div>
                  <span className="text-xs text-on-surface-variant block font-medium">Direct Email</span>
                  <span className="font-bold text-on-surface group-hover:text-secondary transition-colors truncate block">
                    {OFFICE_LOCATION.email}
                  </span>
                </div>
              </a>

              <div className="flex items-center gap-3 p-3 rounded-xl bg-surface-container-lowest border border-outline-variant/10">
                <div className="w-10 h-10 rounded-lg bg-surface-container-high text-on-surface flex items-center justify-center shrink-0">
                  <MapPin className="w-5 h-5 text-on-surface" />
                </div>
                <div>
                  <span className="text-xs text-on-surface-variant block font-medium">Mailing Headquarters</span>
                  <span className="text-xs font-semibold text-on-surface block">
                    {OFFICE_LOCATION.poBox}, {OFFICE_LOCATION.cityStateZip}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
