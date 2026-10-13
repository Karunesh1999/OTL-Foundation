import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { DEPARTMENT_CONTACTS, type DepartmentContact } from '../../data/contactPage';
import { Phone, Mail, UserCheck, Sparkles, MessageSquare, CheckCircle2 } from 'lucide-react';

export const DepartmentDirectorySection: React.FC = () => {
  const location = useLocation();
  const [activeFilter, setActiveFilter] = useState<string>('all');
  const [highlightedDeptId, setHighlightedDeptId] = useState<string | null>(null);

  // Check URL hash and search params to detect targeted service/specialist
  useEffect(() => {
    const checkTarget = () => {
      const hash = window.location.hash.replace('#', '');
      const searchParams = new URLSearchParams(window.location.search);
      const serviceParam = searchParams.get('service');

      const matchingDept = DEPARTMENT_CONTACTS.find((d) => {
        if (serviceParam && (d.serviceKey === serviceParam || d.id === serviceParam)) {
          return true;
        }
        if (hash) {
          if (d.id === hash || `dept-${d.id}` === hash) return true;
          if (d.aliasIds && d.aliasIds.includes(hash)) return true;
        }
        return false;
      });

      if (matchingDept) {
        setHighlightedDeptId(matchingDept.id);
        // Scroll smoothly to the targeted department card
        setTimeout(() => {
          const el = document.getElementById(`dept-${matchingDept.id}`);
          if (el) {
            const header = document.querySelector('header');
            const offset = (header ? header.offsetHeight : 120) + 20;
            const top = el.getBoundingClientRect().top + window.pageYOffset - offset;
            window.scrollTo({ top: Math.max(0, top), behavior: 'smooth' });
          }
        }, 150);
      }
    };

    checkTarget();
    window.addEventListener('hashchange', checkTarget);
    return () => window.removeEventListener('hashchange', checkTarget);
  }, [location]);

  const handleInquireClick = (dept: DepartmentContact) => {
    // Dispatch custom event or update form state and scroll to form
    const formEl = document.getElementById('contact-form');
    if (formEl) {
      formEl.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
    // Dispatch event so ContactFormSection updates its selected service
    window.dispatchEvent(
      new CustomEvent('otl:select-service', { detail: { service: dept.serviceOptionValue } })
    );
  };

  const filteredDepts = DEPARTMENT_CONTACTS.filter((dept) => {
    if (activeFilter === 'all') return true;
    if (activeFilter === 'title') return dept.serviceKey === '433a' || dept.serviceKey === 'escrow-title';
    if (activeFilter === 'engineering') return dept.serviceKey === 'hud' || dept.serviceKey === 'expert-testimony';
    if (activeFilter === 'field') return dept.serviceKey === 'seismic' || dept.serviceKey === 'releveling' || dept.serviceKey === 'drainage';
    return true;
  });

  return (
    <section className="w-full bg-surface py-16 lg:py-20 border-b border-outline-variant/15 scroll-mt-32" id="direct-directory">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 space-y-10">
        {/* Section Heading */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="max-w-3xl space-y-3">
            <span className="font-badge-caps text-badge-caps uppercase tracking-wider text-secondary font-bold flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-secondary" />
              <span>Direct Department Directory</span>
            </span>
            <h2 className="font-headline-lg text-headline-lg text-on-surface font-extrabold tracking-tight">
              Reach Our Key Specialists Directly
            </h2>
            <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
              Skip the general switchboard. Connect directly with our designated California department leaders
              for immediate consultation regarding your recorded title, engineering letters, field retrofits, or escrow needs.
            </p>
          </div>

          {/* Quick Filter Chips */}
          <div className="flex flex-wrap gap-2 shrink-0">
            <button
              type="button"
              onClick={() => setActiveFilter('all')}
              className={`px-3.5 py-1.5 rounded-full text-xs font-bold transition-all ${
                activeFilter === 'all'
                  ? 'bg-secondary text-on-primary shadow-sm'
                  : 'bg-surface-container hover:bg-surface-container-high text-on-surface'
              }`}
            >
              All Specialists ({DEPARTMENT_CONTACTS.length})
            </button>
            <button
              type="button"
              onClick={() => setActiveFilter('title')}
              className={`px-3.5 py-1.5 rounded-full text-xs font-bold transition-all ${
                activeFilter === 'title'
                  ? 'bg-secondary text-on-primary shadow-sm'
                  : 'bg-surface-container hover:bg-surface-container-high text-on-surface'
              }`}
            >
              433A &amp; Escrow
            </button>
            <button
              type="button"
              onClick={() => setActiveFilter('engineering')}
              className={`px-3.5 py-1.5 rounded-full text-xs font-bold transition-all ${
                activeFilter === 'engineering'
                  ? 'bg-secondary text-on-primary shadow-sm'
                  : 'bg-surface-container hover:bg-surface-container-high text-on-surface'
              }`}
            >
              HUD &amp; Engineering
            </button>
            <button
              type="button"
              onClick={() => setActiveFilter('field')}
              className={`px-3.5 py-1.5 rounded-full text-xs font-bold transition-all ${
                activeFilter === 'field'
                  ? 'bg-secondary text-on-primary shadow-sm'
                  : 'bg-surface-container hover:bg-surface-container-high text-on-surface'
              }`}
            >
              Field Operations &amp; Retrofits
            </button>
          </div>
        </div>

        {/* Dynamic Department Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredDepts.map((dept) => {
            const isHighlighted = highlightedDeptId === dept.id;

            return (
              <div
                key={dept.id}
                id={`dept-${dept.id}`}
                className={`relative p-6 rounded-2xl bg-surface-container-lowest border transition-all duration-300 flex flex-col justify-between space-y-5 scroll-mt-36 ${
                  isHighlighted
                    ? 'ring-4 ring-secondary border-secondary shadow-xl scale-[1.02] bg-surface-container-lowest'
                    : 'border-outline-variant/15 shadow-sm hover:shadow-md hover:scale-[1.01]'
                }`}
              >
                {/* Invisible anchor spans for all alias IDs */}
                {dept.aliasIds?.map((alias) => (
                  <span key={alias} id={alias} className="sr-only" />
                ))}

                <div className="space-y-4">
                  {/* Top Badges */}
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <span className="px-2.5 py-1 rounded-full bg-secondary-fixed text-on-secondary-fixed text-xs font-bold uppercase tracking-wider">
                      {dept.badge}
                    </span>

                    {isHighlighted && (
                      <span className="px-2 py-0.5 rounded-full bg-secondary text-on-primary text-[10px] font-bold uppercase tracking-wider animate-pulse flex items-center gap-1 shadow-xs">
                        <Sparkles className="w-3 h-3" />
                        <span>Selected Service</span>
                      </span>
                    )}
                  </div>

                  <div className="space-y-1.5">
                    <h3 className="font-headline-sm text-base font-bold text-on-surface leading-snug">
                      {dept.department}
                    </h3>
                    <div className="flex items-center gap-1.5 text-body-sm font-semibold text-secondary">
                      <UserCheck className="w-4 h-4 text-secondary-container" />
                      <span>{dept.contactName}</span>
                    </div>
                  </div>

                  <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
                    {dept.description}
                  </p>
                </div>

                {/* Direct Action Communication Buttons */}
                <div className="pt-4 border-t border-outline-variant/10 space-y-2">
                  <div className="grid grid-cols-2 gap-2">
                    <a
                      href={dept.phoneHref}
                      className="flex items-center justify-center gap-1.5 px-3 py-2 rounded-lg bg-surface-container-low text-on-surface hover:bg-secondary-container hover:text-on-primary transition-colors text-xs font-bold"
                    >
                      <Phone className="w-3.5 h-3.5 text-secondary" />
                      <span>{dept.phone}</span>
                    </a>

                    <a
                      href={dept.emailHref}
                      className="flex items-center justify-center gap-1.5 px-3 py-2 rounded-lg bg-surface-container-low text-on-surface hover:bg-secondary-container hover:text-on-primary transition-colors text-xs font-bold"
                    >
                      <Mail className="w-3.5 h-3.5 text-secondary" />
                      <span>Direct Email</span>
                    </a>
                  </div>

                  {/* Send Inquiry to this specialist's desk */}
                  <button
                    type="button"
                    onClick={() => handleInquireClick(dept)}
                    className="w-full flex items-center justify-center gap-1.5 px-3 py-2 rounded-lg bg-secondary/10 hover:bg-secondary hover:text-on-primary text-secondary transition-colors text-xs font-bold cursor-pointer"
                  >
                    <MessageSquare className="w-3.5 h-3.5" />
                    <span>Inquire with {dept.contactName.split(' ')[0]}</span>
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
