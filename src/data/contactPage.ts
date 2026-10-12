export interface DepartmentContact {
  id: string;
  department: string;
  contactName: string;
  phone: string;
  phoneHref: string;
  email: string;
  emailHref: string;
  badge: string;
  description: string;
}

export const DEPARTMENT_CONTACTS: DepartmentContact[] = [
  {
    id: 'title-433a',
    department: 'Curative Title Solutions & 433A Recordings',
    contactName: 'Janis Arendsen',
    phone: '760-415-1982',
    phoneHref: 'tel:7604151982',
    email: 'onthelevel@mac.com',
    emailHref: 'mailto:onthelevel@mac.com?subject=Curative%20Title%20%26%20433A%20Inquiry',
    badge: 'Title & Assessor Desk',
    description:
      'HCD Form 433A permanent foundation filings, County Assessor conversions, DMV fee cancellation slips, and ALTA 7 title endorsement support.',
  },
  {
    id: 'lender-realtor',
    department: 'Lender & Realtor Escrow Relations',
    contactName: 'Janis Arendsen',
    phone: '760-415-1982',
    phoneHref: 'tel:7604151982',
    email: 'onthelevel@mac.com',
    emailHref: 'mailto:onthelevel@mac.com?subject=Lender%20%2F%20Realtor%20Escrow%20Relations',
    badge: 'Escrow Coordination',
    description:
      'Direct escrow billing setup ($0 upfront out-of-pocket), preliminary title reports review, and fast clearance of underwriter contingency conditions.',
  },
  {
    id: 'engineers-cert',
    department: "Engineer's Compliance Certifications",
    contactName: 'Janis Arendsen',
    phone: '760-415-1982',
    phoneHref: 'tel:7604151982',
    email: 'onthelevel@mac.com',
    emailHref: "mailto:onthelevel@mac.com?subject=Engineer's%20Certification%20Request",
    badge: 'PE Stamped Letters',
    description:
      'HUD-4930.3G compliance packages, FHA/VA engineering certifications, addition structural load isolation sign-offs, and rapid 48-72h turnaround.',
  },
  {
    id: 'retrofits-eval',
    department: 'California Retrofits & Home Evaluations',
    contactName: 'Scott Arendsen aka "Bubba"',
    phone: '760-415-1923',
    phoneHref: 'tel:7604151923',
    email: 'scottarendsen@mac.com',
    emailHref: 'mailto:scottarendsen@mac.com?subject=California%20Retrofit%20%26%20Evaluation%20Inquiry',
    badge: 'Direct Field Operations',
    description:
      'On-site field inspections, laser level mapping, earthquake ERBS tie-down installations, pier block reconditioning, and crawlspace vapor barrier solutions.',
  },
  {
    id: 'expert-testimony',
    department: 'Expert Testimony, Consultation & Troubleshooting',
    contactName: 'John Arendsen',
    phone: '760-815-6977',
    phoneHref: 'tel:7608156977',
    email: 'johndlarendsen@icloud.com',
    emailHref: 'mailto:johndlarendsen@icloud.com?subject=Expert%20Testimony%20%26%20Consultation',
    badge: 'Forensic Engineering',
    description:
      'Forensic foundation analysis, legal expert testimony, construction defect evaluation, and complex foundation installation troubleshooting.',
  },
  {
    id: 'development-infill',
    department: 'Real Estate Development & Factory Built Projects',
    contactName: 'John Arendsen',
    phone: '760-815-6977',
    phoneHref: 'tel:7608156977',
    email: 'johndlarendsen@icloud.com',
    emailHref: 'mailto:johndlarendsen@icloud.com?subject=Real%20Estate%20Development%20%26%20In-Fill%20Inquiry',
    badge: 'Development Consulting',
    description:
      'Urban residential in-fills, custom manufactured home developments, site foundation engineering, crane set coordination, and park subdivisions.',
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
  licClassification: 'Class B & Class C-47',
};
