import React from 'react';
import {
  Clock,
  ShieldCheck,
  HardHat,
  Milestone,
  PhoneCall,
  ArrowRight,
} from 'lucide-react';

export interface AboutSectionTab {
  id: string;
  label: string;
  icon: React.ReactNode;
}

interface AboutNavFilterBarProps {
  activeSection: string;
  onSelectSection: (id: string) => void;
  onRequestInspection?: () => void;
}

export const ABOUT_SECTION_TABS: AboutSectionTab[] = [
  {
    id: 'heritage-story',
    label: 'Our Heritage & Story',
    icon: <Clock className="w-4 h-4" />,
  },
  {
    id: 'core-values',
    label: 'Core Standards (4 Pillars)',
    icon: <ShieldCheck className="w-4 h-4" />,
  },
  {
    id: 'leadership-fleet',
    label: 'Engineering Fleet',
    icon: <HardHat className="w-4 h-4" />,
  },
  {
    id: 'timeline',
    label: '35-Year Timeline',
    icon: <Milestone className="w-4 h-4" />,
  },
  {
    id: 'about-cta',
    label: 'Statewide Dispatch',
    icon: <PhoneCall className="w-4 h-4" />,
  },
];

export const AboutNavFilterBar: React.FC<AboutNavFilterBarProps> = ({
  activeSection,
  onSelectSection,
  onRequestInspection,
}) => {
  return (
    <section
      id="about-section-nav"
      className="sticky top-[120px] z-40 w-full bg-surface-container-lowest/95 backdrop-blur-md border-b border-outline-variant/15 shadow-xs"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-3.5 flex items-center justify-between gap-4 overflow-x-auto no-scrollbar">
        <div className="flex items-center gap-2 min-w-max text-on-surface">
          {ABOUT_SECTION_TABS.map((tab) => {
            const isActive = activeSection === tab.id;
            return (
              <button
                key={tab.id}
                type="button"
                onClick={() => onSelectSection(tab.id)}
                className={`px-4 py-2.5 rounded-lg font-label-md text-label-md transition-all shadow-xs flex items-center gap-2 cursor-pointer ${
                  isActive
                    ? 'bg-primary-container text-on-primary shadow-sm font-bold'
                    : 'bg-surface-container-low text-on-surface-variant hover:text-on-surface hover:bg-surface-container border border-outline-variant/15'
                }`}
              >
                <span className={isActive ? 'text-secondary' : 'text-on-surface-variant'}>
                  {tab.icon}
                </span>
                <span>{tab.label}</span>
              </button>
            );
          })}
        </div>

        {onRequestInspection && (
          <button
            type="button"
            onClick={onRequestInspection}
            className="hidden lg:inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-secondary-container hover:bg-secondary text-on-primary font-label-md text-label-md font-semibold shrink-0 cursor-pointer shadow-xs transition-colors"
          >
            <span>Request Inspection</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        )}
      </div>
    </section>
  );
};
