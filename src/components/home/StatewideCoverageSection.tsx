import React from 'react';
import { MapPin, Phone, Smartphone, Mail } from 'lucide-react';
import { CONTACT_INFO } from '../../data/navigation';

export const StatewideCoverageSection: React.FC = () => {
  const coveredCounties = [
    'San Diego County',
    'Riverside County',
    'Orange County',
    'Los Angeles County',
    'San Bernardino County',
    'Kern & Fresno Counties',
  ];

  return (
    <section className="py-20 bg-surface-container-low border-b border-outline-variant/15" id="coverage">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="bg-surface-container-lowest rounded-2xl p-8 lg:p-12 shadow-md border border-outline-variant/10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            {/* Left Content (7 Cols) */}
            <div className="lg:col-span-7 space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-surface-container text-on-surface font-badge-caps text-badge-caps uppercase">
                <MapPin className="w-4 h-4 text-secondary shrink-0" />
                <span>All 58 Counties Covered</span>
              </div>

              <h2 className="font-headline-lg text-headline-lg text-on-surface font-bold">
                Rapid Structural Dispatch Throughout California
              </h2>

              <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
                We maintain field engineering units serving Greater Southern California, Central Valley,
                and Northern regions with rapid 48-72 hour escrow response times.
              </p>

              <div className="flex flex-wrap gap-2 pt-2">
                {coveredCounties.map((county) => (
                  <span
                    key={county}
                    className="px-3 py-1.5 rounded-md bg-surface-container-low text-on-surface font-label-md text-label-md"
                  >
                    {county}
                  </span>
                ))}
              </div>
            </div>

            {/* Right Direct Contacts Card (5 Cols) */}
            <div className="lg:col-span-5 bg-surface-container p-6 rounded-xl space-y-4" id="contact-direct">
              <h4 className="font-headline-sm text-headline-sm text-on-surface font-bold">
                Direct Engineering Contacts
              </h4>

              {/* Toll-Free */}
              <a
                href={CONTACT_INFO.tollFreeHref}
                className="flex items-center gap-3 p-3 rounded-lg bg-surface-container-lowest hover:bg-secondary-fixed transition-colors group shadow-sm"
              >
                <div className="w-10 h-10 rounded-md bg-primary-container text-secondary-container flex items-center justify-center shrink-0">
                  <Phone className="w-5 h-5 text-secondary-container" />
                </div>
                <div>
                  <p className="font-badge-caps text-badge-caps text-outline uppercase font-bold">
                    Toll-Free Dispatch
                  </p>
                  <p className="font-headline-sm text-headline-sm text-on-surface group-hover:text-secondary font-bold">
                    {CONTACT_INFO.tollFree}
                  </p>
                </div>
              </a>

              {/* Local & SMS */}
              <a
                href={CONTACT_INFO.localHref}
                className="flex items-center gap-3 p-3 rounded-lg bg-surface-container-lowest hover:bg-secondary-fixed transition-colors group shadow-sm"
              >
                <div className="w-10 h-10 rounded-md bg-primary-container text-secondary-container flex items-center justify-center shrink-0">
                  <Smartphone className="w-5 h-5 text-secondary-container" />
                </div>
                <div>
                  <p className="font-badge-caps text-badge-caps text-outline uppercase font-bold">
                    Local Direct &amp; Field SMS
                  </p>
                  <p className="font-headline-sm text-headline-sm text-on-surface group-hover:text-secondary font-bold">
                    {CONTACT_INFO.local}
                  </p>
                </div>
              </a>

              {/* Email */}
              <a
                href={CONTACT_INFO.emailHref}
                className="flex items-center gap-3 p-3 rounded-lg bg-surface-container-lowest hover:bg-secondary-fixed transition-colors group shadow-sm"
              >
                <div className="w-10 h-10 rounded-md bg-primary-container text-secondary-container flex items-center justify-center shrink-0">
                  <Mail className="w-5 h-5 text-secondary-container" />
                </div>
                <div>
                  <p className="font-badge-caps text-badge-caps text-outline uppercase font-bold">
                    Escrow Document Intake
                  </p>
                  <p className="font-body-md text-body-md text-on-surface group-hover:text-secondary font-semibold">
                    {CONTACT_INFO.email}
                  </p>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
