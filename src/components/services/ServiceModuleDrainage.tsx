import React from 'react';
import {
  ShieldCheck,
  CheckCircle2,
  Waves,
  Sliders,
  Phone,
  Mail,
  ArrowRight,
} from 'lucide-react';
import { MOISTURE_COMPROMISED_SIGNS } from '../../data/servicesPage';

interface ServiceModuleDrainageProps {
  isVisible?: boolean;
  onGetQuote?: () => void;
  onRequestInspection?: () => void;
}

export const ServiceModuleDrainage: React.FC<ServiceModuleDrainageProps> = ({
  isVisible = true,
  onGetQuote,
  onRequestInspection,
}) => {
  if (!isVisible) return null;

  const handleAction = onGetQuote || onRequestInspection;

  return (
    <article
      className="rounded-2xl bg-surface-container-lowest p-5 sm:p-8 lg:p-12 shadow-sm border border-outline-variant/15 relative overflow-hidden transition-all duration-300 scroll-mt-48"
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

          {/* Action Row */}
          <div className="pt-2 flex flex-wrap items-center gap-4">
            <button
              type="button"
              onClick={handleAction}
              className="px-6 py-3.5 rounded-lg bg-secondary-container text-on-primary font-headline-sm text-headline-sm hover:bg-secondary hover:shadow-md transition-all shadow-sm inline-flex items-center gap-2 cursor-pointer"
            >
              <span>Schedule Crawl Space Moisture Inspection</span>
              <ShieldCheck className="w-5 h-5" />
            </button>

            <a
              href="tel:7604151923"
              className="inline-flex items-center gap-2 px-5 py-3.5 rounded-lg bg-surface-container-high text-on-surface font-headline-sm text-headline-sm hover:bg-secondary/10 transition-colors text-xs font-bold"
            >
              <Phone className="w-4 h-4 text-secondary" />
              <span>Field Dispatch: 760-415-1923</span>
            </a>
          </div>
        </div>

        {/* Right Sidebar (5 cols) - Photo Showcase & Dedicated Specialist Card */}
        <div className="lg:col-span-5 space-y-6">
          {/* Crawl Space Encapsulation & Drainage Image Card */}
          <div className="rounded-xl overflow-hidden shadow-md bg-surface-container-lowest border border-outline-variant/15 group">
            <div className="relative overflow-hidden">
              <img
                alt="Encapsulated manufactured home crawlspace with reinforced vapor barrier and gravel French drain system"
                className="w-full h-56 sm:h-64 object-cover object-center transition-transform duration-700 group-hover:scale-105"
                src="/images/service-drainage-barrier.jpg"
                loading="lazy"
              />
              <div className="absolute top-3 left-3 px-2.5 py-1 rounded-md bg-surface-container-lowest/90 backdrop-blur-md border border-outline-variant/20 text-on-surface text-xs font-semibold flex items-center gap-1.5 shadow-sm">
                <span className="w-2 h-2 rounded-full bg-secondary-container animate-pulse" />
                <span>Encapsulation &bull; Gravity French Drain</span>
              </div>
            </div>
            <div className="p-5 bg-surface-container-lowest space-y-2">
              <span className="font-badge-caps text-badge-caps text-secondary font-bold tracking-wider uppercase">
                Sub-Crawl Space Environmental Defense
              </span>
              <h4 className="font-headline-sm text-headline-sm text-on-surface font-bold">
                Sub-Floor Vapor Barrier &amp; Perimeter Drainage
              </h4>
              <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
                Reinforced heavy-duty polyethylene barrier encapsulation combined with passive gravity French trenches halts floor dampness, chassis rust, and mold at the source.
              </p>
            </div>
          </div>

          {/* Scott Arendsen aka "Bubba" Specialist Card */}
          <div className="p-6 rounded-2xl bg-surface-container-low border border-outline-variant/20 shadow-md space-y-4">
            <div className="flex items-center justify-between">
              <span className="font-badge-caps text-badge-caps uppercase text-secondary font-bold tracking-wider">
                Field Operations Specialist
              </span>
              <span className="px-2.5 py-0.5 rounded-full bg-secondary-fixed text-on-secondary-fixed text-xs font-bold">
                Underfloor Moisture Desk
              </span>
            </div>

            <div className="space-y-1.5">
              <h3 className="font-headline-md text-headline-md text-on-surface font-extrabold">
                Scott Arendsen aka "Bubba"
              </h3>
              <div className="text-body-sm font-semibold text-secondary flex items-center gap-1.5">
                <Waves className="w-4 h-4 text-secondary-container" />
                <span>Crawl Space Moisture Barriers &amp; French Drains</span>
              </div>
              <p className="font-body-sm text-body-sm text-on-surface-variant pt-1 leading-relaxed">
                35+ years leading on-site crawl space restorations, torn belly wrap reconditioning, heavy vapor barrier encapsulation, and gravity-fed trench drainage.
              </p>
            </div>

            {/* Quick Contact Buttons */}
            <div className="grid grid-cols-2 gap-2 pt-2 border-t border-outline-variant/15">
              <a
                href="tel:7604151923"
                className="flex items-center justify-center gap-1.5 px-3 py-2.5 rounded-lg bg-surface-container-lowest hover:bg-secondary-container hover:text-on-primary transition-colors text-xs font-bold text-on-surface border border-outline-variant/15"
              >
                <Phone className="w-3.5 h-3.5 text-secondary" />
                <span>760-415-1923</span>
              </a>

              <a
                href="mailto:scottarendsen@mac.com?subject=Moisture%20Barrier%20%26%20Drainage%20Inquiry"
                className="flex items-center justify-center gap-1.5 px-3 py-2.5 rounded-lg bg-surface-container-lowest hover:bg-secondary-container hover:text-on-primary transition-colors text-xs font-bold text-on-surface border border-outline-variant/15"
              >
                <Mail className="w-3.5 h-3.5 text-secondary" />
                <span>Direct Email</span>
              </a>
            </div>

            {/* Prominent Button-like Link to redirect to Bubba on the contact page */}
            <button
              type="button"
              onClick={handleAction}
              className="w-full flex items-center justify-center gap-2 px-4 py-3 rounded-lg bg-secondary text-on-primary hover:bg-secondary/90 transition-all font-headline-sm text-xs font-bold shadow-sm cursor-pointer hover:shadow-md active:scale-[0.99]"
            >
              <span>Connect with Bubba on Contact Page</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            {/* Warning Signs Checklist */}
            <div className="pt-3 border-t border-outline-variant/15 space-y-2.5">
              <div className="text-xs font-bold text-on-surface uppercase tracking-wider">
                Signs Moisture Barrier Is Compromised:
              </div>
              <ul className="space-y-2 text-body-sm text-on-surface-variant">
                {MOISTURE_COMPROMISED_SIGNS.map((sign, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-secondary shrink-0 mt-0.5" />
                    <span className="text-xs leading-snug">{sign}</span>
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
