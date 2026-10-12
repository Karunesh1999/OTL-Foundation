import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  ShieldCheck,
  Landmark,
  Phone,
  PhoneCall,
  Mail,
  Ruler,
  User,
  Menu,
  X,
} from 'lucide-react';
import { MAIN_NAV_ITEMS, CONTACT_INFO } from '../../data/navigation';

interface HeaderProps {
  activePath?: string;
  onRequestInspection?: () => void;
  onGetQuote?: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  activePath = 'home',
  onRequestInspection,
  onGetQuote,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const navigate = useNavigate();

  const handleNavClick = (e: React.MouseEvent, href: string) => {
    if (href === '#') {
      e.preventDefault();
    } else if (href.startsWith('/')) {
      e.preventDefault();
      navigate(href);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-surface-container-lowest/95 backdrop-blur-md shadow-[0_1px_8px_rgba(0,0,0,0.04)]">
      {/* Top Utility Bar */}
      <div className="bg-primary-container text-on-primary-container border-b-0 text-body-sm">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 h-10 flex items-center justify-between gap-4">
          {/* License & Billing Info */}
          <div className="flex items-center gap-6 divide-x divide-outline-variant/30">
            <div className="flex items-center gap-2 font-label-md text-label-md text-primary-fixed truncate">
              <ShieldCheck className="w-4 h-4 text-secondary-container shrink-0" />
              <span className="truncate">
                {CONTACT_INFO.lic1} &amp; {CONTACT_INFO.lic2}{' '}
                <span className="hidden sm:inline">| {CONTACT_INFO.licClass}</span>
              </span>
            </div>
            <div className="pl-6 hidden lg:flex items-center gap-2 text-surface-variant font-label-md text-label-md">
              <Landmark className="w-3.5 h-3.5 text-tertiary-fixed shrink-0" />
              <span>Escrow Direct Billing Available</span>
            </div>
          </div>

          {/* Quick Direct Contacts */}
          <div className="flex items-center gap-6">
            <div className="hidden md:flex items-center gap-5">
              <a
                href={CONTACT_INFO.tollFreeHref}
                className="flex items-center gap-1.5 text-primary-fixed hover:text-on-primary transition-colors"
                title="Toll-Free Phone"
              >
                <Phone className="w-3.5 h-3.5 text-secondary-container shrink-0" />
                <span className="font-label-md text-label-md">Toll-Free: {CONTACT_INFO.tollFree}</span>
              </a>
              <a
                href={CONTACT_INFO.localHref}
                className="flex items-center gap-1.5 text-on-primary-container hover:text-on-primary transition-colors"
                title="Direct Dispatch"
              >
                <PhoneCall className="w-3.5 h-3.5 text-on-primary-container shrink-0" />
                <span className="font-label-md text-label-md">Local: {CONTACT_INFO.local}</span>
              </a>
              <a
                href={CONTACT_INFO.emailHref}
                className="hidden xl:flex items-center gap-1.5 text-on-primary-container hover:text-on-primary transition-colors"
                title="Email Us"
              >
                <Mail className="w-3.5 h-3.5 text-on-primary-container shrink-0" />
                <span className="font-label-md text-label-md">{CONTACT_INFO.email}</span>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <div className="h-20 max-w-7xl mx-auto px-6 lg:px-12 flex items-center justify-between gap-6">
        {/* Brand Logo */}
        <a
          href="/"
          onClick={(e) => handleNavClick(e, '/')}
          className="flex items-center gap-3 shrink-0 group cursor-pointer"
          data-path="home"
        >
          <div className="w-11 h-11 rounded-lg bg-primary-container flex items-center justify-center text-secondary-container shadow-sm group-hover:bg-primary transition-colors">
            <Ruler className="w-6 h-6 text-secondary-container" />
          </div>
          <div className="flex flex-col">
            <span className="font-headline-md text-headline-md tracking-tight font-extrabold text-on-surface uppercase leading-none">
              OnTheLevel
            </span>
            <span className="font-badge-caps text-badge-caps tracking-widest text-secondary uppercase font-bold mt-1">
              Engineering &amp; Retrofit CA
            </span>
          </div>
        </a>

        {/* Desktop Nav Items */}
        <nav
          className="hidden xl:flex items-center gap-1"
          data-active-classes="bg-surface-container-high text-on-surface font-semibold rounded-lg"
        >
          {MAIN_NAV_ITEMS.map((item) => {
            const isActive = activePath === item.path;
            return (
              <a
                key={item.label}
                href={item.href}
                data-path={item.path}
                onClick={(e) => handleNavClick(e, item.href)}
                aria-current={isActive ? 'page' : undefined}
                className={`px-3 py-2 transition-colors font-label-md text-label-md cursor-pointer ${
                  isActive
                    ? 'bg-surface-container-high text-on-surface font-semibold rounded-lg'
                    : 'text-on-surface-variant hover:text-on-surface hover:bg-surface-container-low rounded-lg'
                }`}
              >
                {item.label}
              </a>
            );
          })}
        </nav>

        {/* Action CTAs */}
        <div className="flex items-center gap-3 shrink-0">
          <button
            type="button"
            onClick={onGetQuote}
            className="hidden md:inline-flex items-center justify-center px-4 py-2.5 rounded-lg bg-surface-container font-label-md text-label-md text-on-surface hover:bg-surface-container-high hover:text-on-surface transition-colors cursor-pointer"
            data-path="quote-calculator"
          >
            Get a Free Quote
          </button>
          <button
            type="button"
            onClick={onRequestInspection}
            className="inline-flex items-center justify-center px-5 py-2.5 rounded-lg bg-secondary-container text-on-primary font-headline-sm text-headline-sm hover:bg-secondary hover:text-on-secondary transition-colors shadow-sm cursor-pointer"
            data-path="request-inspection"
          >
            Request Inspection
          </button>
          
          <div
            className="w-8 h-8 rounded-full bg-primary flex items-center justify-center text-on-primary cursor-pointer hover:opacity-90 transition-opacity"
            title="Engineer Portal"
          >
            <User className="w-4 h-4 text-on-primary" />
          </div>

          {/* Mobile Menu Toggle Button */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="xl:hidden p-2 rounded-lg text-on-surface hover:bg-surface-container-low transition-colors"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? (
              <X className="w-6 h-6 text-on-surface" />
            ) : (
              <Menu className="w-6 h-6 text-on-surface" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Dropdown */}
      {mobileMenuOpen && (
        <div className="xl:hidden bg-surface-container-lowest border-t border-outline-variant/30 px-6 py-4 shadow-xl animate-fadeIn">
          <nav className="flex flex-col space-y-2">
            {MAIN_NAV_ITEMS.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={(e) => {
                  handleNavClick(e, item.href);
                  setMobileMenuOpen(false);
                }}
                className="px-4 py-2.5 rounded-lg text-on-surface hover:bg-surface-container-low font-label-md text-label-md transition-colors cursor-pointer"
              >
                {item.label}
              </a>
            ))}
          </nav>
          <div className="pt-4 mt-4 border-t border-outline-variant/20 flex flex-col gap-2.5">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onGetQuote?.();
              }}
              className="w-full py-2.5 rounded-lg bg-surface-container font-label-md text-label-md text-on-surface hover:bg-surface-container-high"
            >
              Get a Free Quote
            </button>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onRequestInspection?.();
              }}
              className="w-full py-2.5 rounded-lg bg-secondary-container text-on-primary font-headline-sm text-headline-sm hover:bg-secondary"
            >
              Request Inspection
            </button>
            <div className="pt-2 text-center text-body-sm text-on-surface-variant">
              Toll-Free:{' '}
              <a href={CONTACT_INFO.tollFreeHref} className="text-secondary font-semibold">
                {CONTACT_INFO.tollFree}
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
