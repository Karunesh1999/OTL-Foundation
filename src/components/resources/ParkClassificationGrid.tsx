import React from 'react';
import { PARK_CLASSIFICATIONS } from '../../data/resourcesPage';
import { Check, ShieldAlert } from 'lucide-react';

export const ParkClassificationGrid: React.FC = () => {
  return (
    <section className="w-full bg-surface py-12 lg:py-16 border-b border-outline-variant/15" id="park-types">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 space-y-10">
        <div className="max-w-3xl space-y-3">
          <span className="font-badge-caps text-badge-caps uppercase tracking-wider text-secondary font-bold">
            California Park Typology
          </span>
          <h2 className="font-headline-lg text-headline-lg text-on-surface font-extrabold tracking-tight">
            Comparison of California Manufactured Housing Park Models
          </h2>
          <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
            Understanding the legal ownership structure of the park determines which loan programs, interest rates, and foundation requirements apply to your transaction.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {PARK_CLASSIFICATIONS.map((cat) => (
            <div
              key={cat.id}
              className="rounded-2xl p-6 bg-surface-container-lowest border border-outline-variant/15 shadow-sm hover:shadow-md hover:scale-[1.01] transition-all duration-300 flex flex-col justify-between space-y-5"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between gap-2">
                  <span className={`px-2.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider ${cat.badgeColor}`}>
                    {cat.badge}
                  </span>
                </div>

                <div className="space-y-1">
                  <h3 className="font-headline-sm text-headline-sm text-on-surface font-bold leading-snug">
                    {cat.title}
                  </h3>
                  <p className="font-label-md text-label-md text-secondary font-medium">
                    {cat.ownershipModel}
                  </p>
                </div>

                <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
                  {cat.description}
                </p>

                <div className="pt-2 border-t border-outline-variant/10 space-y-2">
                  <span className="font-label-md text-xs font-bold uppercase tracking-wider text-on-surface block">
                    Underwriting Checklist:
                  </span>
                  <ul className="space-y-2 font-body-sm text-xs text-on-surface-variant">
                    {cat.keyRequirements.map((req, i) => (
                      <li key={i} className="flex items-start gap-2">
                        {cat.id === 'rental-leasehold' ? (
                          <ShieldAlert className="w-3.5 h-3.5 text-error shrink-0 mt-0.5" />
                        ) : (
                          <Check className="w-3.5 h-3.5 text-secondary-container shrink-0 mt-0.5" />
                        )}
                        <span className="leading-snug">{req}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="pt-3 border-t border-outline-variant/15 font-body-sm text-xs">
                <span className="text-on-surface-variant block font-medium">Eligible Loan Programs:</span>
                <span className="font-bold text-on-surface block mt-0.5">{cat.financingType}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
