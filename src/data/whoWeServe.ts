import type { ClientPortalItem } from '../types';

export const WHO_WE_SERVE: ClientPortalItem[] = [
  {
    id: 'homeowners',
    title: 'Homeowners & Borrowers',
    tag: 'Priority Service',
    tagColorClass: 'bg-secondary-fixed text-on-secondary-fixed',
    icon: 'home',
    description:
      'Foundation repairs, seismic tie-downs, re-leveling, FHA/VA retrofits, permanent permit finalization, and securing real property status.',
    actionText: 'Homeowner Foundation Solutions',
    path: '/service#module-433a',
  },
  {
    id: 'lenders',
    title: 'Lenders & Realtors',
    tag: 'Fast Escrow',
    tagColorClass: 'bg-tertiary-fixed text-on-tertiary-fixed',
    icon: 'account_balance',
    description:
      'Direct escrow billing setup ($0 upfront), preliminary title 433A reviews, and fast 48-72h underwriter contingency clearance notices.',
    actionText: 'Lender & Escrow Relations Desk',
    path: '/service#module-escrow',
  },
  {
    id: 'lawyers',
    title: 'Lawyers & Title Co.',
    tag: 'Legal & Forensic',
    tagColorClass: 'bg-surface-container-high text-on-surface',
    icon: 'gavel',
    description:
      'Forensic foundation investigations, California Superior Court expert witness testimony, defect evaluations, and curative title resolution.',
    actionText: 'Forensic & Legal Expert Desk',
    path: '/service#module-expert-testimony',
  },
  {
    id: 'parks',
    title: 'Parks & ADU Builders',
    tag: 'Strategic Partner',
    tagColorClass: 'bg-secondary-fixed-dim text-on-secondary-fixed',
    icon: 'holiday_village',
    description:
      'Resident ownership conversions, park compliance audits, master site reviews, and Crest Backyard Homes ADU foundation packages.',
    actionText: 'Community & ADU Solutions',
    path: '/resources#condo-park-financing',
  },
];
