import React from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Ruler,
  CheckCircle2,
  ChevronRight,
  MapPin,
  Phone,
  Smartphone,
  Mail,
  Clock,
} from 'lucide-react';
import { CORE_ENGINEERING_LINKS, CLIENT_PORTAL_LINKS, CONTACT_INFO } from '../../data/navigation';

export const Footer: React.FC = () => {
  const navigate = useNavigate();

  const handleLinkClick = (e: React.MouseEvent, href: string) => {
    if (href === '#') {
      e.preventDefault();
    } else if (href.startsWith('/')) {
      e.preventDefault();
      const [path, hash] = href.split('#');
      navigate(path);
      if (hash) {
        setTimeout(() => {
          const el = document.getElementById(hash);
          if (el) el.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }, 150);
      } else {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    }
  };
  return (
    <footer className="w-full bg-primary-container text-surface-container border-t-0">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Col 1: Brand & Licensing */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-surface-container-lowest flex items-center justify-center text-secondary-container">
                <Ruler className="w-5 h-5 text-secondary-container" />
              </div>
              <span className="font-headline-md text-headline-md font-bold tracking-tight text-on-primary uppercase">
                OnTheLevel
              </span>
            </div>
            <p className="font-body-md text-body-md text-on-primary-container leading-relaxed">
              California's primary structural authority for manufactured, mobile, and modular
              permanent foundation certifications, earthquake safety retrofits, and title
              curative compliance for over 35 years.
            </p>
            <div className="pt-2 space-y-1.5 font-label-md text-label-md text-primary-fixed">
              <p className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-secondary-container shrink-0" />
                <span>CA State Contractor Lic #677241</span>
              </p>
              <p className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-secondary-container shrink-0" />
                <span>CA State Contractor Lic #1022204</span>
              </p>
              <p className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-secondary-container shrink-0" />
                <span>{CONTACT_INFO.licClass}</span>
              </p>
            </div>
          </div>

          {/* Col 2: Core Engineering */}
          <div className="space-y-4">
            <h4 className="font-headline-sm text-headline-sm text-on-primary font-semibold tracking-wide uppercase">
              Core Engineering
            </h4>
            <ul className="space-y-2.5 font-body-md text-body-md text-on-primary-container">
              {CORE_ENGINEERING_LINKS.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    data-path={link.path}
                    onClick={(e) => handleLinkClick(e, link.href)}
                    className="hover:text-primary-fixed transition-colors flex items-center gap-1.5 cursor-pointer"
                  >
                    <ChevronRight className="w-3.5 h-3.5 text-secondary-container shrink-0" />
                    <span>{link.label}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Client Portals */}
          <div className="space-y-4">
            <h4 className="font-headline-sm text-headline-sm text-on-primary font-semibold tracking-wide uppercase">
              Client Portals
            </h4>
            <ul className="space-y-2.5 font-body-md text-body-md text-on-primary-container">
              {CLIENT_PORTAL_LINKS.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    data-path={link.path}
                    className="hover:text-primary-fixed transition-colors flex items-center gap-1.5"
                  >
                    <ChevronRight className="w-3.5 h-3.5 text-secondary-container shrink-0" />
                    <span>{link.label}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4: Direct Contacts */}
          <div className="space-y-4">
            <h4 className="font-headline-sm text-headline-sm text-on-primary font-semibold tracking-wide uppercase">
              Direct Contacts
            </h4>
            <div className="space-y-3 font-body-md text-body-md text-on-primary-container">
              <p className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-secondary-container mt-0.5 shrink-0" />
                <span>Serving All 58 Counties Across California Statewide</span>
              </p>
              <p className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-secondary-container shrink-0" />
                <a
                  href={CONTACT_INFO.tollFreeHref}
                  className="hover:text-on-primary text-primary-fixed font-semibold transition-colors"
                >
                  {CONTACT_INFO.tollFree}
                </a>
              </p>
              <p className="flex items-center gap-2.5">
                <Smartphone className="w-4 h-4 text-secondary-container shrink-0" />
                <a
                  href={CONTACT_INFO.localHref}
                  className="hover:text-on-primary text-primary-fixed font-semibold transition-colors"
                >
                  {CONTACT_INFO.local}
                </a>
              </p>
              <p className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-secondary-container shrink-0" />
                <a
                  href={CONTACT_INFO.emailHref}
                  className="hover:text-on-primary transition-colors"
                >
                  {CONTACT_INFO.email}
                </a>
              </p>
            </div>
            
            <div className="pt-3">
              <div className="bg-surface-container-highest/10 p-3 rounded-lg border-0">
                <p className="font-label-md text-label-md text-on-primary flex items-center gap-2">
                  <Clock className="w-4 h-4 text-secondary-container shrink-0" />
                  <span>Rapid Escrow Turnaround (48-72h)</span>
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Legal Copyright */}
        <div className="mt-14 pt-8 border-t border-outline-variant/20 flex flex-col md:flex-row items-center justify-between gap-4 font-body-sm text-body-sm text-on-primary-container">
          <p>© 2025 OnTheLevel General Contractors &amp; Engineering. All rights reserved. CA Lic #677241 &amp; #1022204.</p>
          <div className="flex items-center flex-wrap gap-6">
            <a href="#privacy" className="hover:text-on-primary transition-colors" data-path="resources">
              Privacy Policy
            </a>
            <a href="#terms" className="hover:text-on-primary transition-colors" data-path="resources">
              Terms of Service
            </a>
            <a href="#disclaimer" className="hover:text-on-primary transition-colors" data-path="resources">
              HCD 433A Compliance Disclaimer
            </a>
            <a href="#sitemap" className="hover:text-on-primary transition-colors" data-path="contact">
              Sitemap
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
