export interface DepartmentContact {
  id: string;
  serviceKey: string;
  aliasIds: string[];
  department: string;
  contactName: string;
  phone: string;
  phoneHref: string;
  email: string;
  emailHref: string;
  badge: string;
  description: string;
  serviceOptionValue: string;
}

export const DEPARTMENT_CONTACTS: DepartmentContact[] = [
  {
    id: 'title-433a',
    serviceKey: '433a',
    aliasIds: ['dept-433a', '433a', 'title-433a', 'module-433a'],
    department: 'Curative Title Solutions & 433A Recordings',
    contactName: 'Janis Arendsen',
    phone: '760-415-1982',
    phoneHref: 'tel:7604151982',
    email: 'onthelevel@mac.com',
    emailHref: 'mailto:onthelevel@mac.com?subject=Curative%20Title%20%26%20433A%20Inquiry',
    badge: 'Title & Assessor Desk',
    description:
      'HCD Form 433A permanent foundation filings, County Assessor conversions, DMV fee cancellation slips, and ALTA 7 title endorsement support.',
    serviceOptionValue: '433a-cert',
  },
  {
    id: 'engineers-cert',
    serviceKey: 'hud',
    aliasIds: ['dept-hud', 'hud', 'engineers-cert', 'module-hud', 'fha-va'],
    department: "Engineer's Compliance Certifications (HUD / FHA / VA)",
    contactName: 'Janis Arendsen',
    phone: '760-415-1982',
    phoneHref: 'tel:7604151982',
    email: 'onthelevel@mac.com',
    emailHref: "mailto:onthelevel@mac.com?subject=Engineer's%20Certification%20Request",
    badge: 'PE Stamped Letters',
    description:
      'HUD-4930.3G compliance packages, FHA/VA engineering certifications, addition structural load isolation sign-offs, and rapid 48-72h turnaround.',
    serviceOptionValue: 'hud-fha',
  },
  {
    id: 'seismic-retrofit',
    serviceKey: 'seismic',
    aliasIds: ['dept-seismic', 'seismic', 'seismic-retrofit', 'module-seismic', 'erbs', 'retrofits-eval'],
    department: 'Earthquake ERBS Seismic Retrofit & Tie-Downs',
    contactName: 'Scott Arendsen aka "Bubba"',
    phone: '760-415-1923',
    phoneHref: 'tel:7604151923',
    email: 'scottarendsen@mac.com',
    emailHref: 'mailto:scottarendsen@mac.com?subject=Earthquake%20ERBS%20Seismic%20Retrofit%20Inquiry',
    badge: 'Seismic Defense',
    description:
      'State-approved ERBS seismic bracing installations, lateral earthquake restraints, chassis tie-down hardware, and CEA insurance discount verification.',
    serviceOptionValue: 'seismic',
  },
  {
    id: 'laser-releveling',
    serviceKey: 'releveling',
    aliasIds: ['dept-releveling', 'releveling', 'laser-releveling', 'module-releveling'],
    department: 'Precision Laser Elevation Mapping & Releveling',
    contactName: 'Scott Arendsen aka "Bubba"',
    phone: '760-415-1923',
    phoneHref: 'tel:7604151923',
    email: 'scottarendsen@mac.com',
    emailHref: 'mailto:scottarendsen@mac.com?subject=Precision%20Laser%20Releveling%20Inquiry',
    badge: 'Field Calibration',
    description:
      'High-precision digital laser elevation mapping, multi-point hydraulic chassis releveling, pier block re-shimming, and subfloor stabilization.',
    serviceOptionValue: 'releveling',
  },
  {
    id: 'crawlspace-drainage',
    serviceKey: 'drainage',
    aliasIds: ['dept-drainage', 'drainage', 'crawlspace-drainage', 'module-drainage'],
    department: 'Crawl Space Moisture Barriers & French Drains',
    contactName: 'Scott Arendsen aka "Bubba"',
    phone: '760-415-1923',
    phoneHref: 'tel:7604151923',
    email: 'scottarendsen@mac.com',
    emailHref: 'mailto:scottarendsen@mac.com?subject=Moisture%20Barrier%20%26%20Drainage%20Inquiry',
    badge: 'Underfloor Moisture',
    description:
      'Torn belly wrap reconditioning, heavy reinforced polyethylene vapor barrier encapsulation, gravity-fed French drainage trenching, and cross-ventilation louvers.',
    serviceOptionValue: 'drainage',
  },
  {
    id: 'lender-realtor',
    serviceKey: 'escrow-title',
    aliasIds: ['dept-lender-realtor', 'lender-realtor', 'escrow', 'escrow-title'],
    department: 'Lender & Realtor Escrow Relations',
    contactName: 'Janis Arendsen',
    phone: '760-415-1982',
    phoneHref: 'tel:7604151982',
    email: 'onthelevel@mac.com',
    emailHref: 'mailto:onthelevel@mac.com?subject=Lender%20%2F%20Realtor%20Escrow%20Relations',
    badge: 'Escrow Coordination',
    description:
      'Direct escrow billing setup ($0 upfront out-of-pocket), preliminary title reports review, and fast clearance of underwriter contingency conditions.',
    serviceOptionValue: 'escrow-title',
  },
  {
    id: 'expert-testimony',
    serviceKey: 'expert-testimony',
    aliasIds: ['dept-expert-testimony', 'expert-testimony'],
    department: 'Expert Testimony, Legal Consultation & Troubleshooting',
    contactName: 'John Arendsen',
    phone: '760-815-6977',
    phoneHref: 'tel:7608156977',
    email: 'johndlarendsen@icloud.com',
    emailHref: 'mailto:johndlarendsen@icloud.com?subject=Expert%20Testimony%20%26%20Consultation',
    badge: 'Forensic Engineering',
    description:
      'Forensic foundation analysis, legal expert testimony, construction defect evaluation, and complex foundation installation troubleshooting.',
    serviceOptionValue: 'expert-testimony',
  },
  {
    id: 'development-infill',
    serviceKey: 'adu',
    aliasIds: ['dept-development-infill', 'development-infill', 'adu'],
    department: 'Real Estate Development & Factory Built ADU Projects',
    contactName: 'John Arendsen',
    phone: '760-815-6977',
    phoneHref: 'tel:7608156977',
    email: 'johndlarendsen@icloud.com',
    emailHref: 'mailto:johndlarendsen@icloud.com?subject=Real%20Estate%20Development%20%26%20In-Fill%20Inquiry',
    badge: 'Development Consulting',
    description:
      'Urban residential in-fills, custom manufactured home developments, site foundation engineering, crane set coordination, and park subdivisions.',
    serviceOptionValue: '433a-cert',
  },
];

export const OFFICE_LOCATION = {
  addressName: 'On The Level General Contractors',
  poBox: 'PO Box 232068',
  cityStateZip: 'Encinitas, CA 92023-2068',
  mainPhone: '760-415-1982',
  mainPhoneHref: 'tel:7604151982',
  tollFree: '(800) 257-4931',
  tollFreeHref: 'tel:8002574931',
  email: 'onthelevel@mac.com',
  emailHref: 'mailto:onthelevel@mac.com',
  businessHours: 'Monday – Saturday: 7:00 AM – 6:00 PM PST',
  emergencyNote: 'Emergency escrow review available on Sundays for in-flight closings.',
  lic1: 'CA Lic #677241',
  lic2: '#1022204',
  licClassification: 'Class C-47 & Class B General Building Contractor',
  mapCoordinates: '33.0370° N, 117.2920° W (San Diego County Headquarters)',
};
