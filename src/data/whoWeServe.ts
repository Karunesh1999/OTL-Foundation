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
    actionText: 'Homeowner Guide & Solutions',
    path: 'homeowner-borrower',
  },
  {
    id: 'lenders',
    title: 'Lenders & Realtors',
    tag: 'Fast Escrow',
    tagColorClass: 'bg-tertiary-fixed text-on-tertiary-fixed',
    icon: 'account_balance',
    description:
      'Recorded 433A certificates, HUD 1996 engineer compliance reports, and expedited site inspections billed directly to escrow closing.',
    actionText: 'Download Lender Checklist',
    path: 'lenders-realtors',
  },
  {
    id: 'lawyers',
    title: 'Lawyers & Title Co.',
    tag: 'Title Curative',
    tagColorClass: 'bg-surface-container-high text-on-surface',
    icon: 'gavel',
    description:
      'Curative title resolution, missing HCD pink slips, deed of trust conversions, tax roll classifications, and deceased estate transfers.',
    actionText: 'Title Resolution Portal',
    path: 'resources',
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
    path: 'adu-custom-homes',
  },
];
