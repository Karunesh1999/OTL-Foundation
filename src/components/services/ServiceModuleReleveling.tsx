import React from 'react';
import {
  AlertTriangle,
  Building2,
  ShieldCheck,
  Phone,
  Mail,
  Sliders,
  ArrowRight,
} from 'lucide-react';
import { RELEVELING_SYMPTOMS, RELEVELING_STEPS } from '../../data/servicesPage';

interface ServiceModuleRelevelingProps {
  isVisible?: boolean;
  onRequestInspection?: () => void;
}

export const ServiceModuleReleveling: React.FC<ServiceModuleRelevelingProps> = ({
  isVisible = true,
  onRequestInspection,
}) => {
  if (!isVisible) return null;

  return (
    <article
      className="rounded-2xl bg-surface-container-lowest p-5 sm:p-8 lg:p-12 shadow-sm border border-outline-variant/15 relative overflow-hidden transition-all duration-300 scroll-mt-48"
      id="module-releveling"
    >
      {/* Invisible anchor aliases for deep linking */}
      <span id="laser-releveling" className="sr-only" />
      <span id="field-calibration" className="sr-only" />

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
        {/* Left Column (7 cols) */}
        <div className="lg:col-span-7 space-y-6">
          <div className="flex flex-wrap items-center gap-3">
            <span className="px-3 py-1 rounded-full bg-secondary-fixed text-on-secondary-fixed font-badge-caps text-badge-caps uppercase font-bold flex items-center gap-1.5">
              <Sliders className="w-3.5 h-3.5" />
              <span>Field Calibration Desk</span>
            </span>
            <span className="px-3 py-1 rounded-full bg-surface-container-high text-on-surface font-badge-caps text-badge-caps uppercase font-bold">
              Ziplevel Pro-2000 Altimeter Calibrated
            </span>
          </div>

          <h2 className="font-headline-lg text-headline-lg text-on-surface font-extrabold tracking-tight">
            Precision Laser Elevation Mapping, Chassis Releveling &amp; Pier Resetting
          </h2>

          <p className="font-body-lg text-body-lg text-on-surface-variant leading-relaxed">
            Over time, shifting soils, moisture migration, and decaying wooden shim pads cause uneven settlement
            across a manufactured home's dual steel I-beam chassis. If left uncorrected, interior drywall cracks,
            sticking exterior doors, jammed windows, and uneven floor dips quickly develop. Our field operations team
            uses computerized high-precision altimeters to restore subfloor tolerance to within 1/8 inch.
          </p>

          <div className="p-5 rounded-xl bg-surface-container-low border border-outline-variant/15 space-y-3">
            <h3 className="font-headline-sm text-headline-sm text-on-surface font-bold">
              Common Symptoms of Foundation Settlement:
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 font-body-md text-body-md text-on-surface-variant">
              {RELEVELING_SYMPTOMS.map((symptom, i) => (
                <div key={i} className="flex items-center gap-2">
                  <AlertTriangle className="w-4 h-4 text-secondary-container shrink-0" />
                  <span>{symptom}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="font-headline-sm text-headline-sm text-on-surface font-bold">
              Our Engineered Releveling &amp; Calibration Method:
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {RELEVELING_STEPS.map((st) => (
                <div key={st.num} className="p-4 rounded-xl bg-surface-container border border-outline-variant/15 space-y-2">
                  <div className="w-8 h-8 rounded-lg bg-surface-container-lowest text-secondary flex items-center justify-center font-bold text-sm">
                    {st.num}
                  </div>
                  <h4 className="font-headline-sm text-sm font-bold text-on-surface">{st.title}</h4>
                  <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
                    {st.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="pt-2 flex flex-wrap items-center gap-4">
            <button
              type="button"
              onClick={onRequestInspection}
              className="px-6 py-3.5 rounded-lg bg-secondary-container text-on-primary font-headline-sm text-headline-sm hover:bg-secondary transition-colors shadow-sm inline-flex items-center gap-2 cursor-pointer"
            >
              <span>Schedule Precision Laser Releveling</span>
              <ShieldCheck className="w-5 h-5" />
            </button>

            <a
              href="tel:7604151923"
              className="inline-flex items-center gap-2 px-5 py-3.5 rounded-lg bg-surface-container-high text-on-surface font-headline-sm text-headline-sm hover:bg-secondary/10 transition-colors text-xs font-bold"
            >
              <Phone className="w-4 h-4 text-secondary" />
              <span>Direct Line: 760-415-1923</span>
            </a>
          </div>
        </div>

        {/* Right Sidebar (5 cols) */}
        <div className="lg:col-span-5 space-y-6">
          {/* Photo Showcase */}
          <div className="rounded-xl overflow-hidden shadow-md bg-surface-container-lowest border border-outline-variant/15">
            <img
              alt="Field workers calibrating elevation leveling understructure underneath manufactured house"
              className="w-full h-56 sm:h-64 object-cover"
              src="/images/service-hero.jpg"
            />
            <div className="p-5 bg-surface-container-lowest space-y-2">
              <span className="font-badge-caps text-badge-caps text-secondary font-bold tracking-wider uppercase">
                Structural Warranty
              </span>
              <h4 className="font-headline-sm text-headline-sm text-on-surface font-bold">
                Complete Subfloor Integrity Guarantee
              </h4>
              <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
                Every full-home relevel is backed by our signature OnTheLevel warranty and a verified pre-and-post digital elevation map for your records.
              </p>
            </div>
          </div>

          {/* Scott Arendsen aka "Bubba" Specialist Card */}
          <div className="p-6 rounded-2xl bg-surface-container-low border border-outline-variant/20 shadow-md space-y-4">
            <div className="flex items-center justify-between">
              <span className="font-badge-caps text-badge-caps uppercase text-secondary font-bold tracking-wider">
                Field Calibration Specialist
              </span>
              <span className="px-2.5 py-0.5 rounded-full bg-emerald-500/10 text-emerald-600 text-xs font-bold">
                Active Field Operations
              </span>
            </div>

            <div className="space-y-1">
              <h3 className="font-headline-md text-headline-md text-on-surface font-extrabold">
                Scott Arendsen aka "Bubba"
              </h3>
              <div className="text-body-sm font-semibold text-secondary flex items-center gap-1.5">
                <Sliders className="w-4 h-4 text-secondary-container" />
                <span>Head of Field Operations &amp; Elevation Calibration</span>
              </div>
              <p className="font-body-sm text-body-sm text-on-surface-variant pt-1 leading-relaxed">
                35+ years leading on-site crawlspace excavations, high-precision laser elevation mapping, and hydraulic multi-point chassis releveling across all 58 California counties.
              </p>
            </div>

            {/* Direct Phone & Email */}
            <div className="grid grid-cols-2 gap-2 pt-2 border-t border-outline-variant/15">
              <a
                href="tel:7604151923"
                className="flex items-center justify-center gap-1.5 px-3 py-2.5 rounded-lg bg-surface-container-lowest hover:bg-secondary-container hover:text-on-primary transition-colors text-xs font-bold text-on-surface border border-outline-variant/15"
              >
                <Phone className="w-3.5 h-3.5 text-secondary" />
                <span>760-415-1923</span>
              </a>

              <a
                href="mailto:scottarendsen@mac.com?subject=Precision%20Laser%20Releveling%20Inquiry"
                className="flex items-center justify-center gap-1.5 px-3 py-2.5 rounded-lg bg-surface-container-lowest hover:bg-secondary-container hover:text-on-primary transition-colors text-xs font-bold text-on-surface border border-outline-variant/15"
              >
                <Mail className="w-3.5 h-3.5 text-secondary" />
                <span>Direct Email</span>
              </a>
            </div>

            <button
              type="button"
              onClick={onRequestInspection}
              className="w-full flex items-center justify-center gap-1.5 px-4 py-2.5 rounded-lg bg-secondary/10 hover:bg-secondary hover:text-on-primary text-secondary transition-colors text-xs font-bold cursor-pointer"
            >
              <span>Connect with Bubba on Contact Page</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Subfloor Repair Partnerships */}
          <div className="p-5 rounded-xl bg-surface-container-high/70 border border-outline-variant/15 space-y-2">
            <div className="flex items-center gap-2 font-headline-sm text-sm font-bold text-on-surface">
              <Building2 className="w-4 h-4 text-secondary-container" />
              <span>Subfloor Repair Partnerships</span>
            </div>
            <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
              Need extensive subfloor plywood replacement, rotten joist sistering, or plumbing leak restoration? We collaborate closely with vetted manufactured housing restoration contractors for complete interior repairs.
            </p>
          </div>
        </div>
      </div>
    </article>
  );
};
