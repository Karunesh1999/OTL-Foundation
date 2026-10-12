import React from 'react';
import {
  ShieldCheck,
  CheckCircle2,
  Calendar,
  Building2,
  Waves,
  Sliders,
} from 'lucide-react';
import { HUD_GUIDELINE_RULES, HUD_PACKAGE_CHECKLIST } from '../../data/servicesPage';

interface ServiceModuleHudProps {
  isVisible?: boolean;
  onRequestInspection?: () => void;
}

export const ServiceModuleHud: React.FC<ServiceModuleHudProps> = ({
  isVisible = true,
  onRequestInspection,
}) => {
  if (!isVisible) return null;

  const getRuleIcon = (id: string) => {
    switch (id) {
      case 'post-1976':
        return <Calendar className="w-5 h-5 text-secondary-container" />;
      case 'additions':
        return <Building2 className="w-5 h-5 text-secondary-container" />;
      case 'flood-elevation':
        return <Waves className="w-5 h-5 text-secondary-container" />;
      case 'running-gear':
      default:
        return <Sliders className="w-5 h-5 text-secondary-container" />;
    }
  };

  return (
    <article
      className="rounded-2xl bg-surface-container-lowest p-8 lg:p-12 shadow-sm border border-outline-variant/15 relative overflow-hidden transition-all duration-300"
      id="module-hud"
    >
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
        {/* Left Column (7 cols) */}
        <div className="lg:col-span-7 space-y-6">
          <div className="flex flex-wrap items-center gap-3">
            <span className="px-3 py-1 rounded-full bg-primary-fixed text-on-primary-fixed font-badge-caps text-badge-caps uppercase font-bold">
              FHA / HUD 7584 / VA Pamphlet 26-7
            </span>
            <span className="px-3 py-1 rounded-full bg-surface-container-high text-on-surface font-badge-caps text-badge-caps uppercase font-bold">
              Licensed Structural PE Stamped
            </span>
          </div>

          <h2 className="font-headline-lg text-headline-lg text-on-surface font-extrabold tracking-tight">
            HUD 1996 Permanent Foundation &amp; FHA / VA Loan Compliance Certifications
          </h2>

          <p className="font-body-lg text-body-lg text-on-surface-variant leading-relaxed">
            Lenders issuing government-backed mortgages (FHA, VA, USDA) require an independent, licensed Professional Engineer's Certification verifying the foundation meets the stringent <strong className="text-on-surface font-semibold">Permanent Foundations Guide for Manufactured Housing (HUD-4930.3G / Sept 1996)</strong>. Without an official signed and stamped PE compliance letter, escrow cannot fund.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
            {HUD_GUIDELINE_RULES.map((rule) => (
              <div
                key={rule.id}
                className="p-4 rounded-xl bg-surface-container-low border border-outline-variant/15 space-y-2"
              >
                <div className="flex items-center gap-2 text-on-surface font-headline-sm text-headline-sm font-bold">
                  {getRuleIcon(rule.id)}
                  <span>{rule.title}</span>
                </div>
                <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
                  {rule.desc}
                </p>
              </div>
            ))}
          </div>

          <div className="p-4 rounded-xl bg-surface-container-high/60 border border-outline-variant/20 space-y-2">
            <h4 className="font-label-md text-label-md font-bold text-on-surface flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-secondary-container" />
              <span>Pre-1976 Mobile Home Alternative Solutions</span>
            </h4>
            <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
              Own or buying a pre-1976 unit? While standard FHA/VA won't insure it, we provide specialized California Title 25 seismic bracing, releveling, and portfolio lender compliance certifications to unlock private and credit union financing options.
            </p>
          </div>
        </div>

        {/* Right Sidebar (5 cols) */}
        <div className="lg:col-span-5 space-y-6">
          {/* Engineering Verification Image Card */}
          <div className="rounded-xl overflow-hidden shadow-md bg-surface-container-lowest border border-outline-variant/15 group">
            <div className="relative overflow-hidden">
              <img
                alt="Licensed California structural Professional Engineer verifying official red HUD certification data plate label on manufactured home"
                className="w-full h-56 sm:h-64 object-cover object-top transition-transform duration-700 group-hover:scale-105"
                src="/images/service-hud-cert.jpg"
              />
              <div className="absolute top-3 left-3 px-2.5 py-1 rounded-md bg-surface-container-lowest/90 backdrop-blur-md border border-outline-variant/20 text-on-surface text-xs font-semibold flex items-center gap-1.5 shadow-sm">
                <span className="w-2 h-2 rounded-full bg-secondary-container animate-pulse" />
                <span>HUD Data Plate Verification</span>
              </div>
            </div>
          </div>

          <div className="p-6 rounded-xl bg-surface-container border border-outline-variant/20 space-y-5">
            <h3 className="font-headline-sm text-headline-sm text-on-surface font-bold">
              The HUD Certification Package Includes:
            </h3>
            <ul className="space-y-3 font-body-md text-body-md text-on-surface">
              {HUD_PACKAGE_CHECKLIST.map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-secondary-container shrink-0 mt-0.5" />
                  <span className="leading-snug">{item}</span>
                </li>
              ))}
            </ul>

            <div className="p-4 rounded-lg bg-surface-container-lowest border border-outline-variant/15 space-y-2">
              <div className="flex items-center justify-between text-body-sm font-body-sm">
                <span className="text-on-surface-variant">Typical Turnaround Time:</span>
                <span className="font-bold text-on-surface">48 - 72 Business Hours</span>
              </div>
              <div className="flex items-center justify-between text-body-sm font-body-sm">
                <span className="text-on-surface-variant">Escrow Direct Billing:</span>
                <span className="font-bold text-secondary-container">Available Statewide</span>
              </div>
            </div>

            <button
              type="button"
              onClick={onRequestInspection}
              className="w-full py-3.5 rounded-lg bg-primary-container text-on-primary font-headline-sm text-headline-sm hover:bg-primary transition-colors text-center block shadow-sm cursor-pointer"
            >
              Request HUD/FHA Engineering Letter
            </button>
          </div>
        </div>
      </div>
    </article>
  );
};
