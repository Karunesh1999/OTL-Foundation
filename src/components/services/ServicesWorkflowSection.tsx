import React from 'react';
import { Clock, Sliders, HardHat, DollarSign } from 'lucide-react';
import { ESCROW_CLOSING_WORKFLOW } from '../../data/servicesPage';

export const ServicesWorkflowSection: React.FC = () => {
  const getStepIcon = (idx: number) => {
    switch (idx) {
      case 0:
        return <Clock className="w-4 h-4 text-secondary" />;
      case 1:
        return <Sliders className="w-4 h-4 text-secondary" />;
      case 2:
        return <HardHat className="w-4 h-4 text-secondary" />;
      case 3:
      default:
        return <DollarSign className="w-4 h-4 text-secondary-container" />;
    }
  };

  return (
    <section className="w-full bg-surface-container-lowest border-b border-outline-variant/15 py-16 lg:py-20">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 space-y-12">
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <span className="font-badge-caps text-badge-caps uppercase tracking-wider text-secondary font-bold">
            Escrow &amp; Lending Workflow
          </span>
          <h2 className="font-headline-lg text-headline-lg text-on-surface font-extrabold tracking-tight">
            How We Partner With You Through Closing
          </h2>
          <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
            We take the stress out of foundation contingencies. From the moment escrow opens to official recording, our dedicated escrow liaison coordinates all inspections, permits, and paperwork.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {ESCROW_CLOSING_WORKFLOW.map((st, i) => (
            <div
              key={i}
              className="p-6 rounded-xl bg-surface-container-low border border-outline-variant/15 shadow-xs flex flex-col justify-between space-y-4 hover:shadow-md hover:scale-[1.02] transition-all duration-300"
            >
              <div className="space-y-3">
                <div
                  className={`w-12 h-12 rounded-xl font-bold text-headline-md flex items-center justify-center ${st.badgeBg}`}
                >
                  {st.step}
                </div>
                <h3 className="font-headline-sm text-headline-sm text-on-surface font-bold">
                  {st.title}
                </h3>
                <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
                  {st.desc}
                </p>
              </div>
              <div className="pt-2 text-badge-caps font-badge-caps text-secondary uppercase font-semibold flex items-center gap-1.5">
                {getStepIcon(i)}
                <span>{st.tag}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
