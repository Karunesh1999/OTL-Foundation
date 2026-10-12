import React from 'react';
import { AlertTriangle, Building2 } from 'lucide-react';
import { RELEVELING_SYMPTOMS, RELEVELING_STEPS } from '../../data/servicesPage';

interface ServiceModuleRelevelingProps {
  isVisible?: boolean;
}

export const ServiceModuleReleveling: React.FC<ServiceModuleRelevelingProps> = ({
  isVisible = true,
}) => {
  if (!isVisible) return null;

  return (
    <article
      className="rounded-2xl bg-surface-container-lowest p-8 lg:p-12 shadow-sm border border-outline-variant/15 relative overflow-hidden transition-all duration-300"
      id="module-releveling"
    >
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
        {/* Left Column (7 cols) */}
        <div className="lg:col-span-7 space-y-6">
          <div className="flex flex-wrap items-center gap-3">
            <span className="px-3 py-1 rounded-full bg-secondary-fixed text-on-secondary-fixed font-badge-caps text-badge-caps uppercase font-bold">
              Precision Subfloor Alignment
            </span>
            <span className="px-3 py-1 rounded-full bg-surface-container-high text-on-surface font-badge-caps text-badge-caps uppercase font-bold">
              Ziplevel Pro-2000 Altimeter Calibrated
            </span>
          </div>

          <h2 className="font-headline-lg text-headline-lg text-on-surface font-extrabold tracking-tight">
            Manufactured Home Releveling, Pier Reconditioning &amp; Structural Resetting
          </h2>

          <p className="font-body-lg text-body-lg text-on-surface-variant leading-relaxed">
            Over time, shifting soils, moisture migration, and decaying wooden shim pads cause uneven settlement across a manufactured home's dual steel I-beam chassis. If left uncorrected, interior drywall cracks, sticking exterior doors, jammed windows, and uneven floor dips quickly develop.
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
        </div>

        {/* Right Sidebar (5 cols) */}
        <div className="lg:col-span-5 space-y-6">
          <div className="rounded-xl overflow-hidden shadow-md bg-surface-container-lowest border border-outline-variant/15">
            <img
              alt="Field workers calibrating elevation leveling understructure underneath manufactured house"
              className="w-full h-64 object-cover"
              src="/images/service-hero.jpg"
            />
            <div className="p-5 bg-surface-container-lowest space-y-3">
              <span className="font-badge-caps text-badge-caps text-secondary font-bold tracking-wider uppercase">
                Structural Warranty
              </span>
              <h4 className="font-headline-sm text-headline-sm text-on-surface font-bold">
                Complete Subfloor Integrity Guarantee
              </h4>
              <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
                Every full-home relevel is backed by our signature OnTheLevel warranty and a verified pre-and-post elevation map for your records.
              </p>
            </div>
          </div>

          <div className="p-5 rounded-xl bg-surface-container-high/70 border border-outline-variant/15 space-y-3">
            <div className="flex items-center gap-2 font-headline-sm text-headline-sm font-bold text-on-surface">
              <Building2 className="w-5 h-5 text-secondary-container" />
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
