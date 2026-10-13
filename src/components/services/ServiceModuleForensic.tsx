import React from 'react';
import {
  Scale,
  Search,
  FileText,
  CheckCircle2,
  Phone,
  Mail,
  ArrowRight,
  Gavel,
  ShieldCheck,
} from 'lucide-react';

interface ServiceModuleForensicProps {
  isVisible?: boolean;
  onRequestInspection?: () => void;
}

export const ServiceModuleForensic: React.FC<ServiceModuleForensicProps> = ({
  isVisible = true,
  onRequestInspection,
}) => {
  if (!isVisible) return null;

  const FORENSIC_PRACTICE_AREAS = [
    {
      icon: <Search className="w-5 h-5 text-secondary" />,
      title: 'Forensic Crawlspace & Failure Analysis',
      desc: 'In-depth physical investigations identifying the root cause of foundation failure, differential soil settlement, severed seismic tie-downs, cracked pier blocks, and unpermitted room additions.',
    },
    {
      icon: <Scale className="w-5 h-5 text-secondary" />,
      title: 'Courtroom Expert Witness & Deposition',
      desc: 'Qualified expert testimony for California Superior Court litigation, arbitration, and mediation hearings. Sworn declarations backed by 35+ years of direct industry authority.',
    },
    {
      icon: <FileText className="w-5 h-5 text-secondary" />,
      title: 'Construction Defect & Insurance Claims',
      desc: 'Independent cause-of-loss determinations for insurance carrier claim disputes, contractor workmanship liability evaluations, and seller non-disclosure investigations.',
    },
    {
      icon: <ShieldCheck className="w-5 h-5 text-secondary" />,
      title: 'Remediation Protocols & Cost-of-Repair',
      desc: 'Preparation of PE-stamped engineered remediation plans, municipal permit strategies, and defensible line-item cost-of-repair estimates that withstand intense cross-examination.',
    },
  ];

  const ATTORNEY_DELIVERABLES = [
    'Comprehensive sworn forensic engineering reports',
    'Photographic exhibit logs & computerized laser elevation maps',
    'Deposition, mediation & trial testimony availability',
    'Neutral third-party peer review of opposing expert disclosures',
    'California Building Code & HUD Title 25 compliance cross-checks',
  ];

  return (
    <article
      className="rounded-2xl bg-surface-container-lowest p-5 sm:p-8 lg:p-12 shadow-sm border border-outline-variant/15 relative overflow-hidden transition-all duration-300 scroll-mt-48"
      id="module-forensic"
    >
      {/* Invisible anchor for module-expert-testimony alias */}
      <span id="module-expert-testimony" className="sr-only" />

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
        {/* Left Column (7 cols) */}
        <div className="lg:col-span-7 space-y-6">
          <div className="flex flex-wrap items-center gap-3">
            <span className="px-3 py-1 rounded-full bg-secondary-fixed text-on-secondary-fixed font-badge-caps text-badge-caps uppercase font-bold flex items-center gap-1.5">
              <Gavel className="w-3.5 h-3.5" />
              <span>Forensic Engineering &amp; Legal Desk</span>
            </span>
            <span className="px-3 py-1 rounded-full bg-surface-container-high text-on-surface font-badge-caps text-badge-caps uppercase font-bold">
              Courtroom-Tested Expert Witness
            </span>
          </div>

          <h2 className="font-headline-lg text-headline-lg text-on-surface font-extrabold tracking-tight">
            Forensic Engineering, Expert Witness Testimony &amp; Dispute Troubleshooting
          </h2>

          <p className="font-body-lg text-body-lg text-on-surface-variant leading-relaxed">
            When manufactured home foundations face catastrophic structural failure, unpermitted contractor work,
            insurance claim disputes, or complex real estate litigation, law firms and property owners rely on our
            senior forensic authority. John Arendsen provides courtroom-tested expert witness testimony and certified
            forensic investigation reports backed by over 35 years of hands-on field experience.
          </p>

          {/* 4 Practice Areas Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
            {FORENSIC_PRACTICE_AREAS.map((area, idx) => (
              <div
                key={idx}
                className="p-5 rounded-xl bg-surface-container-low border border-outline-variant/15 space-y-2 hover:border-secondary/30 transition-colors"
              >
                <div className="w-10 h-10 rounded-lg bg-surface-container flex items-center justify-center">
                  {area.icon}
                </div>
                <h4 className="font-headline-sm text-sm font-bold text-on-surface">
                  {area.title}
                </h4>
                <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
                  {area.desc}
                </p>
              </div>
            ))}
          </div>

          {/* Action Row */}
          <div className="pt-2 flex flex-wrap items-center gap-4">
            <button
              type="button"
              onClick={onRequestInspection}
              className="px-6 py-3.5 rounded-lg bg-secondary-container text-on-primary font-headline-sm text-headline-sm hover:bg-secondary transition-colors shadow-sm inline-flex items-center gap-2 cursor-pointer"
            >
              <span>Retain Expert Witness / Submit Case Details</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <a
              href="tel:7608156977"
              className="inline-flex items-center gap-2 px-5 py-3.5 rounded-lg bg-surface-container-high text-on-surface font-headline-sm text-headline-sm hover:bg-secondary/10 transition-colors text-xs font-bold"
            >
              <Phone className="w-4 h-4 text-secondary" />
              <span>Direct Line: 760-815-6977</span>
            </a>
          </div>
        </div>

        {/* Right Sidebar (5 cols) - Photo Showcase & Dedicated Specialist Card */}
        <div className="lg:col-span-5 space-y-6">
          {/* Photo Showcase Container */}
          <div className="rounded-xl overflow-hidden shadow-md bg-surface-container-lowest border border-outline-variant/15 group">
            <div className="relative overflow-hidden">
              <img
                alt="Senior forensic structural engineering expert witness reviewing foundation defect blueprints and legal case exhibits"
                className="w-full h-56 sm:h-64 object-cover object-center transition-transform duration-700 group-hover:scale-105"
                src="/images/service-forensic-expert.jpg"
                loading="lazy"
              />
              <div className="absolute top-3 left-3 px-2.5 py-1 rounded-md bg-surface-container-lowest/90 backdrop-blur-md border border-outline-variant/20 text-on-surface text-xs font-semibold flex items-center gap-1.5 shadow-sm">
                <span className="w-2 h-2 rounded-full bg-secondary-container animate-pulse" />
                <span>Courtroom-Tested &bull; Superior Court Expert</span>
              </div>
            </div>
            <div className="p-5 bg-surface-container-lowest space-y-2">
              <span className="font-badge-caps text-badge-caps text-secondary font-bold tracking-wider uppercase">
                Forensic Engineering Authority
              </span>
              <h4 className="font-headline-sm text-headline-sm text-on-surface font-bold">
                Defensible Expert Testimony &amp; Analysis
              </h4>
              <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
                Objective crawlspace failure investigations, construction defect evaluations, and sworn testimony trusted by California law firms and insurance carriers.
              </p>
            </div>
          </div>

          {/* John Arendsen Specialist Card */}
          <div className="p-6 rounded-2xl bg-surface-container-low border border-outline-variant/20 shadow-md space-y-4">
            <div className="flex items-center justify-between">
              <span className="font-badge-caps text-badge-caps uppercase text-secondary font-bold tracking-wider">
                Principal Expert Witness
              </span>
              <span className="px-2.5 py-0.5 rounded-full bg-secondary-fixed text-on-secondary-fixed text-xs font-bold">
                Courtroom Expert Desk
              </span>
            </div>

            <div className="space-y-1.5">
              <h3 className="font-headline-md text-headline-md text-on-surface font-extrabold">
                John Arendsen
              </h3>
              <div className="text-body-sm font-semibold text-secondary flex items-center gap-1.5">
                <Scale className="w-4 h-4 text-secondary-container" />
                <span>Forensic Engineering, Legal Consultation &amp; Troubleshooting</span>
              </div>
              <p className="font-body-sm text-body-sm text-on-surface-variant pt-1 leading-relaxed">
                Senior consultant with 35+ years spanning manufactured housing manufacturing plants, dealer logistics, structural foundation engineering, and trial testimony.
              </p>
            </div>

            {/* Quick Contact Buttons */}
            <div className="grid grid-cols-2 gap-2 pt-2 border-t border-outline-variant/15">
              <a
                href="tel:7608156977"
                className="flex items-center justify-center gap-1.5 px-3 py-2.5 rounded-lg bg-surface-container-lowest hover:bg-secondary-container hover:text-on-primary transition-colors text-xs font-bold text-on-surface border border-outline-variant/15"
              >
                <Phone className="w-3.5 h-3.5 text-secondary" />
                <span>760-815-6977</span>
              </a>

              <a
                href="mailto:johndlarendsen@icloud.com?subject=Expert%20Testimony%20%26%20Consultation"
                className="flex items-center justify-center gap-1.5 px-3 py-2.5 rounded-lg bg-surface-container-lowest hover:bg-secondary-container hover:text-on-primary transition-colors text-xs font-bold text-on-surface border border-outline-variant/15"
              >
                <Mail className="w-3.5 h-3.5 text-secondary" />
                <span>Direct Email</span>
              </a>
            </div>

            {/* Prominent Button-like Link to redirect to John on the contact page */}
            <button
              type="button"
              onClick={onRequestInspection}
              className="w-full flex items-center justify-center gap-2 px-4 py-3 rounded-lg bg-secondary text-on-primary hover:bg-secondary/90 transition-all font-headline-sm text-xs font-bold shadow-sm cursor-pointer hover:shadow-md active:scale-[0.99]"
            >
              <span>Connect with John on Contact Page</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            {/* Deliverables Checklist */}
            <div className="pt-3 border-t border-outline-variant/15 space-y-2.5">
              <div className="text-xs font-bold text-on-surface uppercase tracking-wider">
                What Attorneys &amp; Litigants Receive:
              </div>
              <ul className="space-y-2 text-body-sm text-on-surface-variant">
                {ATTORNEY_DELIVERABLES.map((item, i) => (
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
