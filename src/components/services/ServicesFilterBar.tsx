import React from 'react';
import {
  Layers,
  HardHat,
  CheckCircle2,
  Sliders,
  Waves,
  ShieldCheck,
  Briefcase,
  Scale,
} from 'lucide-react';
import { SERVICE_CATEGORIES } from '../../data/servicesPage';

interface ServicesFilterBarProps {
  activeCategory: string;
  onSelectCategory: (id: string) => void;
}

export const ServicesFilterBar: React.FC<ServicesFilterBarProps> = ({
  activeCategory,
  onSelectCategory,
}) => {
  const getCategoryIcon = (id: string) => {
    switch (id) {
      case '433a':
        return <HardHat className="w-4 h-4" />;
      case 'hud':
        return <CheckCircle2 className="w-4 h-4" />;
      case 'escrow':
        return <Briefcase className="w-4 h-4" />;
      case 'forensic':
        return <Scale className="w-4 h-4" />;
      case 'releveling':
        return <Sliders className="w-4 h-4" />;
      case 'drainage':
        return <Waves className="w-4 h-4" />;
      case 'seismic':
        return <ShieldCheck className="w-4 h-4" />;
      case 'all':
      default:
        return <Layers className="w-4 h-4" />;
    }
  };

  return (
    <section id="services-filter-bar" className="sticky top-[120px] z-40 w-full bg-surface-container-lowest/95 backdrop-blur-md border-b border-outline-variant/15 shadow-xs">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-3.5 overflow-x-auto no-scrollbar">
        <div className="flex items-center gap-2 min-w-max text-on-surface">
          {SERVICE_CATEGORIES.map((cat) => {
            const isActive = activeCategory === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => onSelectCategory(cat.id)}
                className={`px-4 py-2.5 rounded-lg font-label-md text-label-md transition-all shadow-xs flex items-center gap-2 cursor-pointer ${
                  isActive
                    ? 'bg-primary-container text-on-primary shadow-sm'
                    : 'bg-surface-container-low text-on-surface-variant hover:text-on-surface hover:bg-surface-container border border-outline-variant/15'
                }`}
              >
                {getCategoryIcon(cat.id)}
                <span>{cat.label}</span>
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
};
