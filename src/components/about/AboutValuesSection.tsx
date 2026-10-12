import React from 'react';
import { CORE_VALUES } from '../../data/aboutPage';
import { ShieldCheck } from 'lucide-react';

export const AboutValuesSection: React.FC = () => {
  return (
    <section className="w-full bg-surface py-16 lg:py-20 border-b border-outline-variant/15" id="core-values">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 space-y-12">
        <div className="max-w-3xl space-y-3">
          <span className="font-badge-caps text-badge-caps uppercase tracking-wider text-secondary font-bold">
            Operating Philosophy
          </span>
          <h2 className="font-headline-lg text-headline-lg text-on-surface font-extrabold tracking-tight">
            Our Four Non-Negotiable Operational Standards
          </h2>
          <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
            The foundation principles that have guided every structural inspection, engineering calculation, and escrow sign-off for over three and a half decades.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {CORE_VALUES.map((val) => (
            <div
              key={val.num}
              className="p-6 rounded-2xl bg-surface-container-lowest border border-outline-variant/15 shadow-sm hover:shadow-md hover:scale-[1.01] transition-all duration-300 flex flex-col justify-between space-y-5"
            >
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-xl bg-secondary-fixed text-on-secondary-fixed font-headline-md text-headline-md font-bold flex items-center justify-center">
                  {val.num}
                </div>

                <h3 className="font-headline-sm text-headline-sm text-on-surface font-bold">
                  {val.title}
                </h3>

                <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
                  {val.desc}
                </p>
              </div>

              <div className="pt-3 border-t border-outline-variant/10 text-badge-caps font-badge-caps text-secondary font-semibold uppercase flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-secondary-container" />
                <span>OnTheLevel Standard</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
