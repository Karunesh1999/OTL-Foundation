import React from 'react';
import { COMPANY_MILESTONES } from '../../data/aboutPage';
import { CheckCircle2 } from 'lucide-react';

export const AboutTimelineSection: React.FC = () => {
  return (
    <section className="w-full bg-surface py-16 lg:py-20 border-b border-outline-variant/15 scroll-mt-48 transition-all duration-300" id="timeline">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 space-y-12">
        <div className="max-w-3xl space-y-3">
          <span className="font-badge-caps text-badge-caps uppercase tracking-wider text-secondary font-bold">
            Evolution &amp; Milestones
          </span>
          <h2 className="font-headline-lg text-headline-lg text-on-surface font-extrabold tracking-tight">
            35 Years of California Structural Progress
          </h2>
          <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
            From our early days leveling mobile homes in San Diego to becoming California's premier manufactured housing engineering and title authority.
          </p>
        </div>

        {/* 5-Step Horizontal / Responsive Milestone Progression */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {COMPANY_MILESTONES.map((mile, i) => (
            <div
              key={mile.year}
              className="p-5 rounded-2xl bg-surface-container-lowest border border-outline-variant/15 shadow-sm hover:shadow-xl hover:shadow-secondary/15 hover:border-secondary/40 hover:scale-105 hover:-translate-y-2 transition-all duration-300 ease-out flex flex-col justify-between space-y-4 group cursor-pointer"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="font-headline-lg text-headline-lg text-secondary font-extrabold tracking-tight group-hover:text-secondary-container transition-colors">
                    {mile.year}
                  </span>
                  <span className="w-7 h-7 rounded-full bg-secondary-fixed text-on-secondary-fixed group-hover:bg-secondary-container group-hover:text-on-primary flex items-center justify-center text-xs font-bold transition-colors">
                    {i + 1}
                  </span>
                </div>

                <h3 className="font-headline-sm text-base font-bold text-on-surface leading-snug group-hover:text-secondary transition-colors">
                  {mile.title}
                </h3>

                <p className="font-body-sm text-xs text-on-surface-variant leading-relaxed">
                  {mile.desc}
                </p>
              </div>

              <div className="pt-2 border-t border-outline-variant/10 text-[11px] font-semibold text-secondary uppercase flex items-center gap-1.5 group-hover:text-secondary-container transition-colors">
                <CheckCircle2 className="w-3.5 h-3.5 text-secondary-container shrink-0" />
                <span className="truncate">{mile.tag}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
