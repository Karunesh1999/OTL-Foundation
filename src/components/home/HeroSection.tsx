import React from 'react';
import { ClipboardCheck, Calculator, PhoneCall, CheckCircle2 } from 'lucide-react';
import { Badge } from '../common/Badge';
import { CONTACT_INFO } from '../../data/navigation';

interface HeroSectionProps {
  onRequestInspection?: () => void;
  onCalculateQuote?: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  onRequestInspection,
  onCalculateQuote,
}) => {
  return (
    <section className="relative bg-surface-container-lowest border-b border-outline-variant/15 overflow-hidden py-12 lg:py-16">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Top 2-Column Hero Content: Left Headline & CTAs, Right Inspection Visual Card */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          {/* Left Hero Content (7 Cols) */}
          <div className="lg:col-span-7 space-y-6">
            {/* Top pill badge */}
            <div>
              <Badge variant="secondary" hasPulseDot>
                California's #1 Authority in Foundation Certification
              </Badge>
            </div>

            {/* Main Headline */}
            <h1 className="font-display-hero text-display-hero text-on-surface tracking-tight">
              The Manufactured &amp; Modular Home Experts
            </h1>

            {/* Subtitle */}
            <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl leading-relaxed">
              California's premier one-stop-shop for homeowners, lenders, and realtors. Backed by 35+ years of direct field experience, we deliver recorded 433A permanent foundations, HUD 1996 engineer certifications for FHA/VA loans, and earthquake retrofits—with zero upfront fees billed directly through escrow closing.
            </p>

            {/* Primary CTAs & Emergency Dispatch Pill */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <a
                href="#assessment-card"
                onClick={(e) => {
                  e.preventDefault();
                  onRequestInspection?.();
                }}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-lg bg-secondary-container text-on-primary font-headline-sm text-headline-sm hover:bg-secondary transition-all shadow-md cursor-pointer text-center"
              >
                <ClipboardCheck className="w-5 h-5" />
                <span>Request Free Inspection</span>
              </a>

              <a
                href="#assessment-card"
                onClick={(e) => {
                  e.preventDefault();
                  onCalculateQuote?.();
                }}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-lg bg-surface-container-high text-on-surface font-headline-sm text-headline-sm hover:bg-surface-container-highest transition-colors cursor-pointer text-center"
              >
                <Calculator className="w-5 h-5 text-secondary" />
                <span>Calculate Instant Quote</span>
              </a>

              <div className="w-full sm:w-auto flex items-center justify-center sm:justify-start gap-2.5 px-4 py-2.5 rounded-lg bg-primary-container text-on-primary shadow-sm">
                <PhoneCall className="w-5 h-5 text-secondary-container shrink-0" />
                <div>
                  <p className="font-badge-caps text-badge-caps text-primary-fixed uppercase leading-tight">
                    Direct Dispatch
                  </p>
                  <a
                    href={CONTACT_INFO.localHref}
                    className="font-label-md text-label-md text-on-primary hover:text-secondary-fixed transition-colors"
                  >
                    {CONTACT_INFO.local}
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Right Hero: Inspection Visual Card (5 Cols) */}
          <div className="lg:col-span-5">
            <div className="relative rounded-2xl overflow-hidden shadow-lg border border-outline-variant/10 group">
              <img
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuB2a-8JmMPRwgiA1uYUK4cc1UncnMvjxTE5r6rL5RHqSoDXY8cJmDw3MU8__e3k7qQkB5h_AMy8U2OaA4Tk7lgFAMM0GyjHfsAlKpMsB5sH99Hmq8i1Z9RaosMf2s2otv5-PB_ma24jY5qmRGywq1HCVKmhYJo6o7-yYFJ88ugR5RtosEyF37kKeEqktHFC98-nZzd0WfuLdRaKTt_7akSLzbghu_zNxJFFzoKAjPeRp4xuuZ34hc6V"
                alt="Licensed California engineers inspecting permanent manufactured home foundation"
                className="w-full h-80 sm:h-96 lg:h-[420px] object-cover transition-transform duration-500 group-hover:scale-105"
                loading="eager"
              />
              <div className="absolute inset-0 bg-primary/20 pointer-events-none" />

              {/* Top Overlay Badge */}
              <div className="absolute top-3 left-3 bg-primary-container/90 backdrop-blur-md px-3 py-1.5 rounded-lg flex items-center gap-2 text-on-primary shadow-sm">
                <span className="w-2 h-2 rounded-full bg-secondary-container animate-pulse" />
                <span className="font-badge-caps text-badge-caps uppercase tracking-wider text-primary-fixed">
                  Licensed CA Engineers on Site
                </span>
              </div>

              {/* Bottom Overlay Info Banner */}
              <div className="absolute bottom-3 left-3 right-3 bg-surface-container-lowest/95 backdrop-blur-md p-3 rounded-xl flex items-center justify-between shadow-md">
                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-lg bg-surface-container flex items-center justify-center text-secondary shrink-0">
                    <CheckCircle2 className="w-4 h-4 text-secondary" />
                  </div>
                  <div>
                    <p className="font-label-md text-label-md font-bold text-on-surface leading-tight">
                      Certified Permanent Foundation &amp; Retrofit Inspections
                    </p>
                    <p className="font-body-sm text-body-sm text-on-surface-variant">
                      All 58 California Counties • Escrow Sign-Offs
                    </p>
                  </div>
                </div>
                <span className="hidden sm:inline-flex px-2.5 py-1 rounded bg-secondary-fixed text-on-secondary-fixed font-badge-caps text-badge-caps uppercase font-bold shrink-0">
                  HCD &amp; HUD
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Quick Metrics Trust Row (Full Width 4 Cols with hover scale & color animation) */}
        <div className="pt-10 grid grid-cols-2 sm:grid-cols-4 gap-4">
          {[
            { metric: '35+ Years', label: 'California Track Record', highlight: false },
            { metric: '10,000+', label: 'Certifications Done', highlight: false },
            { metric: '100%', label: 'Loan Compliance Rate', highlight: true },
            { metric: '$0 Down', label: 'Direct Escrow Billing', highlight: false },
          ].map((item, idx) => (
            <div
              key={idx}
              className="bg-surface-container-lowest p-4 rounded-xl shadow-sm border border-outline-variant/10 text-center sm:text-left transition-all duration-300 ease-out hover:scale-[1.02] hover:-translate-y-0.5 hover:shadow-lg hover:shadow-secondary/10 hover:border-secondary-container/30 cursor-pointer group"
            >
              <div
                className={`font-headline-md text-headline-md font-bold transition-colors duration-300 ${
                  item.highlight
                    ? 'text-secondary group-hover:text-secondary-container'
                    : 'text-on-surface group-hover:text-secondary'
                }`}
              >
                {item.metric}
              </div>
              <div className="font-body-sm text-body-sm text-on-surface-variant group-hover:text-on-surface transition-colors duration-300 mt-0.5">
                {item.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
