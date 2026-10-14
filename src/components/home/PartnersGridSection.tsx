import React from 'react';
import { PARTNERS } from '../../data/partners';

export const PartnersGridSection: React.FC = () => {
  // Multiply partners for continuous seamless right-to-left marquee loop
  const marqueePartners = [...PARTNERS, ...PARTNERS, ...PARTNERS, ...PARTNERS];

  return (
    <section className="py-14 bg-surface-container-lowest border-b border-outline-variant/15 overflow-hidden relative">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 text-center mb-8">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-surface-container-high text-on-surface font-badge-caps text-badge-caps uppercase tracking-wider mb-2.5 shadow-xs">
          <span className="w-2 h-2 rounded-full bg-secondary-container animate-pulse" />
          <span>Industry Network &amp; Affiliations</span>
        </div>
        <h3 className="font-badge-caps text-xs sm:text-badge-caps text-outline uppercase font-extrabold tracking-widest block">
          Trusted By California Leaders in Finance, Real Estate &amp; Prefab Construction
        </h3>
      </div>

      {/* Infinite Marquee Strip: Right to Left Scrolling */}
      <div className="relative w-full overflow-hidden py-4">
        {/* Left Fade Gradient Mask */}
        <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-16 sm:w-28 bg-gradient-to-r from-surface-container-lowest to-transparent z-10" />

        {/* Right Fade Gradient Mask */}
        <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-16 sm:w-28 bg-gradient-to-l from-surface-container-lowest to-transparent z-10" />

        {/* Moving Track: Continuous Right to Left Motion */}
        <div className="animate-marquee-left flex items-center gap-6 px-4">
          {marqueePartners.map((partner, index) => (
            <div
              key={`${partner.name}-${index}`}
              className="animate-move-scale shrink-0"
              style={{
                animationDelay: `${(index % 8) * 0.45}s`,
              }}
            >
              {/* Clean, Elegant Card with Smooth Scale on Hover */}
              <div
                className="group relative min-w-[170px] sm:min-w-[190px] h-22 px-5 py-3.5 rounded-xl bg-surface-container-lowest border border-outline-variant/20 shadow-xs hover:shadow-lg hover:border-secondary/40 hover:scale-105 hover:-translate-y-1 transition-all duration-300 ease-out flex flex-col items-center justify-center text-center cursor-pointer select-none"
              >
                {/* Card Typography */}
                <span className="font-label-md text-label-md font-extrabold text-on-surface leading-tight tracking-tight group-hover:text-secondary-container transition-colors duration-200">
                  {partner.name}
                </span>

                <span
                  className={`font-badge-caps text-badge-caps uppercase text-[9px] mt-1 tracking-wider ${
                    partner.highlightSecondary
                      ? 'text-secondary font-bold'
                      : 'text-outline font-semibold'
                  }`}
                >
                  {partner.subtitle}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
