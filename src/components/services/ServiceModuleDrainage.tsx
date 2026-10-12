import React from 'react';
import {
  ShieldCheck,
  CheckCircle2,
  Waves,
  Sliders,
} from 'lucide-react';
import { MOISTURE_COMPROMISED_SIGNS } from '../../data/servicesPage';

interface ServiceModuleDrainageProps {
  isVisible?: boolean;
  onGetQuote?: () => void;
}

export const ServiceModuleDrainage: React.FC<ServiceModuleDrainageProps> = ({
  isVisible = true,
  onGetQuote,
}) => {
  if (!isVisible) return null;

  return (
    <article
      className="rounded-2xl bg-surface-container-lowest p-8 lg:p-12 shadow-sm border border-outline-variant/15 relative overflow-hidden transition-all duration-300"
      id="module-drainage"
    >
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
        {/* Left Column (7 cols) */}
        <div className="lg:col-span-7 space-y-6">
          <div className="flex flex-wrap items-center gap-3">
            <span className="px-3 py-1 rounded-full bg-surface-container-high text-on-surface font-badge-caps text-badge-caps uppercase font-bold">
              Environmental Sub-Crawl Space Protection
            </span>
            <span className="px-3 py-1 rounded-full bg-tertiary-fixed text-on-tertiary-fixed font-badge-caps text-badge-caps uppercase font-bold">
              Gravity-Fed French Drains &amp; Vents
            </span>
          </div>

          <h2 className="font-headline-lg text-headline-lg text-on-surface font-extrabold tracking-tight">
            Understructure Moisture Barriers &amp; Sub-Floor Drainage Solutions
          </h2>

          <p className="font-body-lg text-body-lg text-on-surface-variant leading-relaxed">
            Excessive crawl space moisture is the number one cause of foundation deterioration, rust corrosion on chassis I-beams, floor warping, and mold in manufactured housing. We implement engineered, non-electrical gravity drainage systems and heavy-duty vapor barriers to preserve structural value.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 pt-2">
            <div className="p-5 rounded-xl bg-surface-container-low border border-outline-variant/15 space-y-3">
              <div className="flex items-center gap-2 text-on-surface font-headline-sm text-headline-sm font-bold">
                <ShieldCheck className="w-5 h-5 text-secondary-container" />
                <span>Vapor &amp; Varmint Barrier Restoration</span>
              </div>
              <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
                We reseal ripped "belly wrap" underneath the subfloor caused by rodent intrusion or previous plumbing work. Heavy reinforced polyethylene sheets are cleanly sealed to contain loose insulation and halt floor drafts.
              </p>
              <div className="pt-2 font-body-sm text-body-sm text-secondary font-semibold flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4" />
                <span>Halts mold, mildew &amp; rot</span>
              </div>
            </div>

            <div className="p-5 rounded-xl bg-surface-container-low border border-outline-variant/15 space-y-3">
              <div className="flex items-center gap-2 text-on-surface font-headline-sm text-headline-sm font-bold">
                <Waves className="w-5 h-5 text-secondary-container" />
                <span>Gravity French Drains for Pit-Set Homes</span>
              </div>
              <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
                Subterranean pit-set homes on terraced lots often collect hillside rainwater. Rather than relying on motorized sump pumps prone to power failures during storms, we trench and install deep gravity-fed drainage channels that divert water permanently to street discharge.
              </p>
              <div className="pt-2 font-body-sm text-body-sm text-secondary font-semibold flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4" />
                <span>Zero maintenance, passive drainage</span>
              </div>
            </div>
          </div>

          <div className="p-4 rounded-xl bg-surface-container border border-outline-variant/15 space-y-2">
            <h4 className="font-label-md text-label-md font-bold text-on-surface flex items-center gap-2">
              <Sliders className="w-4 h-4 text-secondary-container" />
              <span>Crawl Space Cross-Ventilation Compliance</span>
            </h4>
            <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
              HUD regulations mandate 1 square foot of free ventilation area for every 150 square feet of underfloor space. We install galvanized pest-resistant crawlspace louvers to prevent stagnant humidity and termite infestations.
            </p>
          </div>
        </div>

        {/* Right Sidebar (5 cols) */}
        <div className="lg:col-span-5 space-y-6">
          {/* Crawl Space Encapsulation & Drainage Image Card */}
          <div className="rounded-xl overflow-hidden shadow-md bg-surface-container-lowest border border-outline-variant/15 group">
            <div className="relative overflow-hidden">
              <img
                alt="Encapsulated manufactured home crawlspace with reinforced vapor barrier and gravel French drain system"
                className="w-full h-56 sm:h-64 object-cover object-center transition-transform duration-700 group-hover:scale-105"
                src="/images/service-drainage-barrier.jpg"
              />
              <div className="absolute top-3 left-3 px-2.5 py-1 rounded-md bg-surface-container-lowest/90 backdrop-blur-md border border-outline-variant/20 text-on-surface text-xs font-semibold flex items-center gap-1.5 shadow-sm">
                <span className="w-2 h-2 rounded-full bg-secondary-container animate-pulse" />
                <span>Encapsulation &amp; Gravity French Drain</span>
              </div>
            </div>
          </div>

          <div className="p-6 rounded-xl bg-surface-container-lowest border border-outline-variant/15 space-y-4 shadow-sm">
            <h3 className="font-headline-sm text-headline-sm text-on-surface font-bold">
              Signs Your Moisture Barrier Is Compromised:
            </h3>
            <ul className="space-y-3 font-body-sm text-body-sm text-on-surface-variant">
              {MOISTURE_COMPROMISED_SIGNS.map((sign, i) => (
                <li key={i} className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-secondary-container shrink-0 mt-0.5" />
                  <span className="leading-snug">{sign}</span>
                </li>
              ))}
            </ul>

            <div className="pt-3">
              <button
                type="button"
                onClick={onGetQuote}
                className="w-full py-3.5 rounded-lg bg-secondary-container text-on-primary font-headline-sm text-headline-sm hover:bg-secondary transition-colors text-center block shadow-sm cursor-pointer"
              >
                Get Crawl Space Inspection Quote
              </button>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
};
