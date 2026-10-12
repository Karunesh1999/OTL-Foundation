import React from 'react';
import { LEADERSHIP_PILLARS } from '../../data/aboutPage';
import { ShieldCheck, HardHat, FileSpreadsheet, Scale } from 'lucide-react';

export const AboutLeadershipSection: React.FC = () => {
  const getPillarIcon = (index: number) => {
    switch (index) {
      case 0:
        return <HardHat className="w-6 h-6 text-secondary" />;
      case 1:
        return <FileSpreadsheet className="w-6 h-6 text-secondary" />;
      case 2:
      default:
        return <Scale className="w-6 h-6 text-secondary" />;
    }
  };

  return (
    <section className="w-full bg-surface-container-low py-16 lg:py-20 border-b border-outline-variant/15" id="leadership-fleet">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 space-y-12">
        <div className="max-w-3xl space-y-3">
          <span className="font-badge-caps text-badge-caps uppercase tracking-wider text-secondary font-bold">
            Field Force &amp; Engineering Command
          </span>
          <h2 className="font-headline-lg text-headline-lg text-on-surface font-extrabold tracking-tight">
            Direct Leadership in Every California County
          </h2>
          <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
            Our company brings together master structural mechanics, certified professional engineers, and title legal specialists under one unified operational roof.
          </p>
        </div>

        {/* 2-Column: Big Fleet Image on Left & Pillars on Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          {/* Big Team & Fleet Photograph (6 cols) */}
          <div className="lg:col-span-6">
            <div className="rounded-2xl overflow-hidden shadow-2xl border border-outline-variant/20 bg-surface-container-lowest group relative">
              <img
                alt="OnTheLevel certified field technicians and engineering team standing with California Foundation service inspection fleet"
                className="w-full h-80 sm:h-96 object-cover object-center transition-transform duration-700 group-hover:scale-105"
                src="/images/about-engineering-crew.jpg"
              />

              {/* Floating Glassmorphism Badge */}
              <div className="absolute top-4 left-4 px-3 py-1.5 rounded-lg bg-surface-container-lowest/95 backdrop-blur-md border border-outline-variant/20 text-on-surface text-xs font-bold flex items-center gap-2 shadow-md">
                <span className="w-2 h-2 rounded-full bg-secondary-container animate-pulse" />
                <span>Statewide Mobile Inspection Fleet</span>
              </div>

              <div className="p-5 bg-surface-container-lowest space-y-2">
                <h4 className="font-headline-sm text-headline-sm text-on-surface font-bold">
                  Fully Equipped Field Diagnostic Vehicles
                </h4>
                <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
                  Every OnTheLevel service unit is outfitted with computerized Ziplevel precision altimeters, hydraulic chassis jacks, seismic tie-down hardware, and digital field reporting tablets.
                </p>
              </div>
            </div>
          </div>

          {/* 3 Pillar Cards (6 cols) */}
          <div className="lg:col-span-6 space-y-4">
            {LEADERSHIP_PILLARS.map((pillar, i) => (
              <div
                key={i}
                className="p-5 sm:p-6 rounded-2xl bg-surface-container-lowest border border-outline-variant/15 shadow-sm hover:shadow-md transition-shadow flex items-start gap-4"
              >
                <div className="w-12 h-12 rounded-xl bg-surface-container-low border border-outline-variant/15 flex items-center justify-center shrink-0 shadow-xs">
                  {getPillarIcon(i)}
                </div>

                <div className="space-y-1.5">
                  <div className="flex flex-wrap items-center gap-2">
                    <h3 className="font-headline-sm text-headline-sm text-on-surface font-bold">
                      {pillar.title}
                    </h3>
                    <span className="px-2.5 py-0.5 rounded-full bg-secondary-fixed text-on-secondary-fixed text-[11px] font-semibold">
                      {pillar.role}
                    </span>
                  </div>

                  <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
                    {pillar.desc}
                  </p>
                </div>
              </div>
            ))}

            <div className="p-4 rounded-xl bg-primary-container text-on-primary flex items-center justify-between gap-4 shadow-sm">
              <div className="flex items-center gap-3 text-xs font-medium">
                <ShieldCheck className="w-5 h-5 text-secondary-container shrink-0" />
                <span>Zero Outsourced Contractors • 100% In-House Direct Responsibility</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
