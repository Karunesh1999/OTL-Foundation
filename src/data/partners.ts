import type { PartnerItem, ToolkitItem } from '../types';

export const PARTNERS: PartnerItem[] = [
  { name: 'GOLDEN AGE', subtitle: 'Financial', highlightSecondary: true },
  { name: 'ADU', subtitle: 'Coalition CA', highlightSecondary: false },
  { name: 'SDCIA', subtitle: 'Investors Assoc', highlightSecondary: true },
  { name: 'SILVERCREST', subtitle: 'Homes', highlightSecondary: false },
  { name: 'IRONTOWN', subtitle: 'Modular Homes', highlightSecondary: true },
  { name: 'TAG', subtitle: 'Real Estate', highlightSecondary: false },
  { name: 'CREST', subtitle: 'Backyard Homes', highlightSecondary: true },
  { name: 'COAT', subtitle: 'Design Remodel', highlightSecondary: false },
];

export const TOOLKITS: ToolkitItem[] = [
  {
    id: 'toolkit-1',
    title: 'Manufactured Home Lending Checklist',
    subtitle: '2025 California Escrow Rules & Underwriting Criteria',
    icon: 'picture_as_pdf',
    actionType: 'download',
    actionLabel: 'PDF',
    fileName: 'OnTheLevel-Lending-Checklist.pdf',
    href: '#',
  },
  {
    id: 'toolkit-2',
    title: 'Understanding California Form 433A',
    subtitle: '3-Minute Guide to Real Property Recorded Conversion',
    icon: 'menu_book',
    actionType: 'read',
    actionLabel: 'Read',
    href: '#',
  },
  {
    id: 'toolkit-3',
    title: 'HUD 1996 Permanent Foundations Guide',
    subtitle: 'Handbook Summary for Appraisers, Agents & Buyers',
    icon: 'verified',
    actionType: 'download',
    actionLabel: 'PDF',
    fileName: 'HUD-1996-Permanent-Foundations-Summary.pdf',
    href: '#',
  },
];
