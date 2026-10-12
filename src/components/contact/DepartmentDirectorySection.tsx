import React from 'react';
import { DEPARTMENT_CONTACTS } from '../../data/contactPage';
import { Phone, Mail, UserCheck } from 'lucide-react';

export const DepartmentDirectorySection: React.FC = () => {
  return (
    <section className="w-full bg-surface py-16 lg:py-20 border-b border-outline-variant/15" id="direct-directory">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 space-y-12">
        <div className="max-w-3xl space-y-3">
          <span className="font-badge-caps text-badge-caps uppercase tracking-wider text-secondary font-bold">
            Direct Department Directory
          </span>
          <h2 className="font-headline-lg text-headline-lg text-on-surface font-extrabold tracking-tight">
            Reach Our Key Specialists Directly
          </h2>
          <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
            Skip the switchboard. Contact our designated department leaders directly for instant answers regarding your title, engineering, field retrofits, or legal consultation needs.
          </p>
        </div>

        {/* 6-Card Department Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {DEPARTMENT_CONTACTS.map((dept) => (
            <div
              key={dept.id}
              className="p-6 rounded-2xl bg-surface-container-lowest border border-outline-variant/15 shadow-sm hover:shadow-md hover:scale-[1.01] transition-all duration-300 flex flex-col justify-between space-y-5"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between gap-2">
                  <span className="px-2.5 py-1 rounded-full bg-secondary-fixed text-on-secondary-fixed text-xs font-bold uppercase tracking-wider">
                    {dept.badge}
                  </span>
                </div>

                <div className="space-y-1">
                  <h3 className="font-headline-sm text-headline-sm text-on-surface font-bold leading-snug">
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

              {/* Direct Communication Buttons */}
              <div className="pt-4 border-t border-outline-variant/10 grid grid-cols-2 gap-2">
                <a
                  href={dept.phoneHref}
                  className="flex items-center justify-center gap-1.5 px-3 py-2 rounded-lg bg-surface-container-low text-on-surface hover:bg-secondary-container hover:text-on-primary transition-colors text-xs font-bold"
                >
                  <Phone className="w-3.5 h-3.5" />
                  <span>Call {dept.phone}</span>
                </a>

                <a
                  href={dept.emailHref}
                  className="flex items-center justify-center gap-1.5 px-3 py-2 rounded-lg bg-surface-container-low text-on-surface hover:bg-secondary-container hover:text-on-primary transition-colors text-xs font-bold"
                >
                  <Mail className="w-3.5 h-3.5" />
                  <span>Direct Email</span>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
