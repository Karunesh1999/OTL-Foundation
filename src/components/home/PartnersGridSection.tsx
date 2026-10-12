import React from 'react';
import { PARTNERS } from '../../data/partners';

export const PartnersGridSection: React.FC = () => {
  return (
    <section className="py-14 bg-surface-container-lowest border-b border-outline-variant/15">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 text-center">
        <span className="font-badge-caps text-badge-caps text-outline uppercase font-bold tracking-widest">
          Trusted By California Leaders in Finance, Real Estate &amp; Prefab Construction
        </span>

        <div className="mt-8 grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-4 items-center">
          {PARTNERS.map((partner, index) => (
            <div
              key={index}
              className="bg-surface-container-lowest px-4 py-3 rounded-lg shadow-sm hover:shadow-md transition-shadow flex flex-col items-center justify-center text-center h-20 border border-outline-variant/10"
            >
              <span className="font-label-md text-label-md font-extrabold text-on-surface leading-tight tracking-tight">
                {partner.name}
              </span>
              <span
                className={`font-badge-caps text-badge-caps uppercase text-[9px] mt-0.5 ${
                  partner.highlightSecondary ? 'text-secondary font-bold' : 'text-outline font-semibold'
                }`}
              >
                {partner.subtitle}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
