import React from 'react';
import {
  Briefcase,
  DollarSign,
  Clock,
  CheckCircle2,
  ShieldCheck,
  Phone,
  Mail,
  ArrowRight,
  FileSpreadsheet,
} from 'lucide-react';

interface ServiceModuleEscrowProps {
  isVisible?: boolean;
  onRequestInspection?: () => void;
}

export const ServiceModuleEscrow: React.FC<ServiceModuleEscrowProps> = ({
  isVisible = true,
  onRequestInspection,
}) => {
  if (!isVisible) return null;

  const ESCROW_SERVICES = [
    {
      icon: <DollarSign className="w-5 h-5 text-secondary" />,
      title: '$0 Upfront Escrow Invoicing',
      desc: 'All engineering inspections, foundation retrofits, municipal permits, and 433A recording fees can be billed directly to closing escrow proceeds. Zero out-of-pocket costs for buyers or sellers.',
    },
    {
      icon: <Clock className="w-5 h-5 text-secondary" />,
      title: '48-72h Underwriting Clearance',
      desc: 'Direct communication with mortgage loan officers and underwriters (FHA, VA, Fannie Mae, Freddie Mac) to satisfy and clear foundation contingency conditions before funding cutoffs.',
    },
    {
      icon: <FileSpreadsheet className="w-5 h-5 text-secondary" />,
      title: 'Preliminary Title 433A Audits',
      desc: 'We review preliminary title commitments, retrieve historical county permits, and identify unrecorded 433A documents or DMV pink slip issues before escrow closing dates.',
    },
    {
      icon: <ShieldCheck className="w-5 h-5 text-secondary" />,
      title: 'Emergency Weekend Escrow Dispatch',
      desc: 'Active deals closing within 3-5 days receive priority field scheduling and Sunday emergency document review by our senior title desk.',
    },
  ];

  const ESCROW_CHECKLIST_ITEMS = [
    'Demand invoice sent directly to designated escrow officer',
    'Certified HUD-4930.3G PE compliance letter signed and stamped',
    'County recorder verified 433A document delivery',
    'FHA / VA underwriting condition clearance notices',
    'No personal credit check or upfront retainer required',
  ];

  return (
    <article
      className="rounded-2xl bg-surface-container-lowest p-5 sm:p-8 lg:p-12 shadow-sm border border-outline-variant/15 relative overflow-hidden transition-all duration-300 scroll-mt-48"
      id="module-escrow"
    >
      {/* Invisible anchor aliases for deep linking */}
      <span id="lender-realtor" className="sr-only" />
      <span id="escrow-billing" className="sr-only" />

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
        {/* Left Column (7 cols) */}
        <div className="lg:col-span-7 space-y-6">
          <div className="flex flex-wrap items-center gap-3">
            <span className="px-3 py-1 rounded-full bg-secondary-fixed text-on-secondary-fixed font-badge-caps text-badge-caps uppercase font-bold flex items-center gap-1.5">
              <Briefcase className="w-3.5 h-3.5" />
              <span>Lender &amp; Realtor Escrow Desk</span>
            </span>
            <span className="px-3 py-1 rounded-full bg-surface-container-high text-on-surface font-badge-caps text-badge-caps uppercase font-bold">
              $0 Upfront Out-of-Pocket Billing
            </span>
          </div>

          <h2 className="font-headline-lg text-headline-lg text-on-surface font-extrabold tracking-tight">
            Lender &amp; Realtor Escrow Relations &amp; Direct Billing
          </h2>

          <p className="font-body-lg text-body-lg text-on-surface-variant leading-relaxed">
            Eliminating transaction friction for California realtors, escrow officers, and mortgage underwriters.
            We act as the direct foundation liaison—verifying lender compliance, clearing contingency conditions,
            and billing all retrofit and engineering costs straight through closing escrow.
          </p>

          {/* 4 Core Pillars */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
            {ESCROW_SERVICES.map((srv, idx) => (
              <div
                key={idx}
                className="p-5 rounded-xl bg-surface-container-low border border-outline-variant/15 space-y-2 hover:border-secondary/30 transition-colors"
              >
                <div className="w-10 h-10 rounded-lg bg-surface-container flex items-center justify-center">
                  {srv.icon}
                </div>
                <h4 className="font-headline-sm text-sm font-bold text-on-surface">
                  {srv.title}
                </h4>
                <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
                  {srv.desc}
                </p>
              </div>
            ))}
          </div>

          {/* Action Row */}
          <div className="pt-2 flex flex-wrap items-center gap-4">
            <button
              type="button"
              onClick={onRequestInspection}
              className="px-6 py-3.5 rounded-lg bg-secondary-container text-on-primary font-headline-sm text-headline-sm hover:bg-secondary hover:shadow-md transition-all shadow-sm inline-flex items-center gap-2 cursor-pointer"
            >
              <span>Connect with Escrow Relations Desk</span>
              <ShieldCheck className="w-5 h-5" />
            </button>

            <a
              href="tel:7604151982"
              className="inline-flex items-center gap-2 px-5 py-3.5 rounded-lg bg-surface-container-high text-on-surface font-headline-sm text-headline-sm hover:bg-secondary/10 transition-colors text-xs font-bold"
            >
              <Phone className="w-4 h-4 text-secondary" />
              <span>Call Escrow Direct: 760-415-1982</span>
            </a>
          </div>
        </div>

        {/* Right Sidebar (5 cols) - Photo Showcase & Dedicated Specialist Card */}
        <div className="lg:col-span-5 space-y-6">
          {/* Photo Showcase Container */}
          <div className="rounded-xl overflow-hidden shadow-md bg-surface-container-lowest border border-outline-variant/15 group">
            <div className="relative overflow-hidden">
              <img
                alt="Senior California escrow officer and title coordinator reviewing official manufactured home permanent foundation certification documents"
                className="w-full h-56 sm:h-64 object-cover object-center transition-transform duration-700 group-hover:scale-105"
                src="/images/service-escrow-relations.jpg"
                loading="lazy"
              />
              <div className="absolute top-3 left-3 px-2.5 py-1 rounded-md bg-surface-container-lowest/90 backdrop-blur-md border border-outline-variant/20 text-on-surface text-xs font-semibold flex items-center gap-1.5 shadow-sm">
                <span className="w-2 h-2 rounded-full bg-secondary-container animate-pulse" />
                <span>Direct Escrow Billing &bull; $0 Upfront</span>
              </div>
            </div>
            <div className="p-5 bg-surface-container-lowest space-y-2">
              <span className="font-badge-caps text-badge-caps text-secondary font-bold tracking-wider uppercase">
                Closing Escrow Liaison
              </span>
              <h4 className="font-headline-sm text-headline-sm text-on-surface font-bold">
                Seamless Real Estate Transaction Protection
              </h4>
              <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
                We coordinate directly with California escrow officers, mortgage processors, and title companies to ensure zero loan funding delays.
              </p>
            </div>
          </div>

          {/* Janis Arendsen Specialist Card */}
          <div className="p-6 rounded-2xl bg-surface-container-low border border-outline-variant/20 shadow-md space-y-4">
            <div className="flex items-center justify-between">
              <span className="font-badge-caps text-badge-caps uppercase text-secondary font-bold tracking-wider">
                Direct Specialist Contact
              </span>
              <span className="px-2.5 py-0.5 rounded-full bg-emerald-500/10 text-emerald-600 text-xs font-bold">
                Active Escrow Desk
              </span>
            </div>

            <div className="space-y-1.5">
              <h3 className="font-headline-md text-headline-md text-on-surface font-extrabold">
                Janis Arendsen
              </h3>
              <div className="text-body-sm font-semibold text-secondary flex items-center gap-1.5">
                <Briefcase className="w-4 h-4 text-secondary-container" />
                <span>Head of Lender &amp; Realtor Escrow Relations</span>
              </div>
              <p className="font-body-sm text-body-sm text-on-surface-variant pt-1 leading-relaxed">
                Over 35 years managing California title transfers, County Assessor recordings, and escrow contingency clearances for manufactured homes.
              </p>
            </div>

            {/* Quick Contact Buttons */}
            <div className="grid grid-cols-2 gap-2 pt-2 border-t border-outline-variant/15">
              <a
                href="tel:7604151982"
                className="flex items-center justify-center gap-1.5 px-3 py-2.5 rounded-lg bg-surface-container-lowest hover:bg-secondary-container hover:text-on-primary transition-colors text-xs font-bold text-on-surface border border-outline-variant/15"
              >
                <Phone className="w-3.5 h-3.5 text-secondary" />
                <span>760-415-1982</span>
              </a>

              <a
                href="mailto:onthelevel@mac.com?subject=Lender%20%2F%20Realtor%20Escrow%20Relations"
                className="flex items-center justify-center gap-1.5 px-3 py-2.5 rounded-lg bg-surface-container-lowest hover:bg-secondary-container hover:text-on-primary transition-colors text-xs font-bold text-on-surface border border-outline-variant/15"
              >
                <Mail className="w-3.5 h-3.5 text-secondary" />
                <span>Direct Email</span>
              </a>
            </div>

            {/* Prominent Button-like Link to redirect to Janis on the contact page */}
            <button
              type="button"
              onClick={onRequestInspection}
              className="w-full flex items-center justify-center gap-2 px-4 py-3 rounded-lg bg-secondary text-on-primary hover:bg-secondary/90 transition-all font-headline-sm text-xs font-bold shadow-sm cursor-pointer hover:shadow-md active:scale-[0.99]"
            >
              <span>Connect with Janis on Contact Page</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            {/* Checklist */}
            <div className="pt-3 border-t border-outline-variant/15 space-y-2.5">
              <div className="text-xs font-bold text-on-surface uppercase tracking-wider">
                What Escrow Officers Get:
              </div>
              <ul className="space-y-2 text-body-sm text-on-surface-variant">
                {ESCROW_CHECKLIST_ITEMS.map((item, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-secondary shrink-0 mt-0.5" />
                    <span className="text-xs leading-snug">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
};
