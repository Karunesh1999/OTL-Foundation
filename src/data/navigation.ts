import type { NavItem } from '../types';

export const MAIN_NAV_ITEMS: NavItem[] = [
  { label: 'Home', href: '/', path: 'home', isActive: true },
  { label: 'Services', href: '/service', path: 'services' },
  { label: 'Resources', href: '/resources', path: 'resources' },
  { label: 'Testimonials', href: '#', path: 'testimonials' },
  { label: 'About', href: '/about', path: 'about' },
  { label: 'Contact', href: '/contact', path: 'contact' },
];

export const CORE_ENGINEERING_LINKS = [
  { label: '433A Permanent Foundation', href: '/service#module-433a', path: 'services' },
  { label: 'HUD 1996 Compliance Certifications', href: '/service#module-hud', path: 'services' },
  { label: 'FHA & VA Retrofit Modifications', href: '/service#module-hud', path: 'services' },
  { label: 'Earthquake ERBS Bracing Systems', href: '/service#module-seismic', path: 'services' },
  { label: 'Curative Title & HCD Pink Slips', href: '/service#module-433a', path: 'services' },
  { label: 'ADU Foundation Engineering', href: '/service', path: 'services' },
];

export const CLIENT_PORTAL_LINKS = [
  { label: 'Homeowners & Borrowers', href: '#', path: 'homeowner-borrower' },
  { label: 'Mortgage Lenders & Escrow Officers', href: '#', path: 'lenders-realtors' },
  { label: 'Realtors & Title Attorneys', href: '#', path: 'lenders-realtors' },
  { label: 'Modular Builders & Developers', href: '#', path: 'adu-custom-homes' },
  { label: 'Mobile Home Park Communities', href: '/resources#condo-park-financing', path: 'resources' },
  { label: 'Engineering Knowledge Base', href: '/resources#compliance-toolkits', path: 'resources' },
];

export const CONTACT_INFO = {
  tollFree: '(800) 257-4931',
  tollFreeHref: 'tel:8002574931',
  local: '(760) 415-1982',
  localHref: 'tel:7604151982',
  email: 'onthelevel@mac.com',
  emailHref: 'mailto:onthelevel@mac.com',
  lic1: 'CA Lic #677241',
  lic2: '#1022204',
  licClass: 'Class C-47 & Class B General Building',
};
