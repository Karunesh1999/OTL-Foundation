import React from 'react';
import {
  FileCheck,
  Compass,
  Wrench,
  Activity,
  FileText,
  Home,
  Check,
  ChevronRight,
} from 'lucide-react';
import { CORE_SERVICES } from '../../data/services';

export const CoreServicesSection: React.FC = () => {
  const getServiceIcon = (id: string) => {
    switch (id) {
      case '433a':
        return <FileCheck className="w-6 h-6" />;
      case 'hud1996':
        return <Compass className="w-6 h-6" />;
      case 'fha-va':
        return <Wrench className="w-6 h-6" />;
      case 'erbs':
        return <Activity className="w-6 h-6" />;
      case 'curative-title':
        return <FileText className="w-6 h-6" />;
      case 'adu':
      default:
        return <Home className="w-6 h-6" />;
    }
  };

  return (
    <section className="py-20 bg-surface-container-low border-b border-outline-variant/15" id="services">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="font-badge-caps text-badge-caps text-secondary uppercase font-bold tracking-wider">
            Certified Structural Excellence
          </span>
          <h2 className="font-headline-lg text-headline-lg text-on-surface mt-1">
            Our Core Engineering &amp; Retrofit Services
          </h2>
          <p className="font-body-md text-body-md text-on-surface-variant mt-2 leading-relaxed">
            From legal title real-property conversion to state-mandated seismic defense, we oversee full design,
            physical construction, and county recorder sign-offs.
          </p>
        </div>

        {/* 6 Grid Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {CORE_SERVICES.map((service) => (
            <div
              key={service.id}
              className="bg-surface-container-lowest p-7 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 flex flex-col justify-between group border border-outline-variant/10"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 rounded-lg bg-surface-container-low flex items-center justify-center text-secondary group-hover:bg-secondary group-hover:text-on-secondary transition-colors">
                    {getServiceIcon(service.id)}
                  </div>
                  <span className="text-body-sm font-body-sm text-outline font-semibold">
                    {service.badge}
                  </span>
                </div>

                <h3 className="font-headline-md text-headline-md text-on-surface font-bold mb-2">
                  {service.title}
                </h3>

                <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed mb-4">
                  {service.description}
                </p>

                {/* Features list */}
                <div className="space-y-1.5 font-label-md text-label-md text-on-surface-variant mb-6">
                  {service.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center gap-2">
                      <Check className="w-4 h-4 text-secondary shrink-0" />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              <a
                href={`#${service.path}`}
                data-path={service.path}
                className="inline-flex items-center gap-2 font-label-md text-label-md text-secondary group-hover:translate-x-1 transition-transform"
              >
                <span>{service.linkText}</span>
                <ChevronRight className="w-4 h-4" />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
