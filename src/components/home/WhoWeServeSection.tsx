import React from 'react';
import { Home, Landmark, Scale, Trees, ArrowRight, ShieldCheck } from 'lucide-react';
import { WHO_WE_SERVE } from '../../data/whoWeServe';

export const WhoWeServeSection: React.FC = () => {
  const getIcon = (id: string) => {
    switch (id) {
      case 'homeowners':
        return <Home className="w-6 h-6" />;
      case 'lenders':
        return <Landmark className="w-6 h-6" />;
      case 'lawyers':
        return <Scale className="w-6 h-6" />;
      case 'parks':
      default:
        return <Trees className="w-6 h-6" />;
    }
  };

  return (
    <section className="py-20 bg-surface-container-low border-b border-outline-variant/15" id="who-we-serve">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Section Heading */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-12 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-secondary/10 text-secondary text-xs font-bold uppercase tracking-wider mb-2">
              <span className="w-1.5 h-1.5 rounded-full bg-secondary animate-pulse" />
              Tailored Escrow &amp; Engineering Workflows
            </div>
            <h2 className="font-headline-lg text-headline-lg text-on-surface font-extrabold tracking-tight">
              Who We Serve Across California
            </h2>
          </div>

          {/* Redesigned Compliance Callout Card */}
          <div className="max-w-lg bg-surface-container-lowest p-4 rounded-xl border border-outline-variant/15 border-l-4 border-l-secondary shadow-sm flex items-start gap-3.5 transition-all duration-300 hover:shadow-md">
            <div className="w-10 h-10 rounded-lg bg-secondary/10 text-secondary flex items-center justify-center shrink-0 mt-0.5">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div>
              <div className="text-[11px] font-bold uppercase tracking-wider text-secondary mb-1">
                Full Escrow &amp; Lending Support
              </div>
              <p className="text-body-sm text-on-surface-variant leading-relaxed">
                Providing specialized <span className="font-semibold text-on-surface">compliance certifications</span>, <span className="font-semibold text-on-surface">engineering stamps</span>, and <span className="font-semibold text-on-surface">physical retrofits</span> for all parties in the transaction chain.
              </p>
            </div>
          </div>
        </div>

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {WHO_WE_SERVE.map((item) => (
            <div
              key={item.id}
              className="bg-surface-container-lowest rounded-xl p-6 shadow-sm hover:shadow-xl hover:shadow-secondary/10 hover:border-secondary-container/30 hover:scale-[1.02] hover:-translate-y-1 transition-all duration-300 ease-out flex flex-col justify-between group border border-outline-variant/10 cursor-pointer"
            >
              <div>
                <div className="flex items-center justify-between mb-5">
                  <div className="w-12 h-12 rounded-lg bg-surface-container-high flex items-center justify-center text-secondary group-hover:bg-secondary-container group-hover:text-on-primary group-hover:scale-105 group-hover:shadow-md transition-all duration-300">
                    {getIcon(item.id)}
                  </div>
                  <span
                    className={`px-2.5 py-1 rounded font-badge-caps text-badge-caps uppercase font-bold transition-all duration-300 ${item.tagColorClass}`}
                  >
                    {item.tag}
                  </span>
                </div>
                <h3 className="font-headline-md text-headline-md text-on-surface group-hover:text-secondary font-bold mb-2 transition-colors duration-300">
                  {item.title}
                </h3>
                <p className="font-body-md text-body-md text-on-surface-variant group-hover:text-on-surface/90 mb-6 leading-relaxed transition-colors duration-300">
                  {item.description}
                </p>
              </div>

              <a
                href={item.path}
                className="inline-flex items-center gap-2 font-label-md text-label-md text-secondary group-hover:text-secondary-container font-semibold transition-colors pt-2"
              >
                <span>{item.actionText}</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-2 transition-transform duration-300" />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
