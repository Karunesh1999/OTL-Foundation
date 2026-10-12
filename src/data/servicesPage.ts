export interface ServiceCategory {
  id: string;
  label: string;
}

export const SERVICE_CATEGORIES: ServiceCategory[] = [
  { id: 'all', label: 'All Services' },
  { id: '433a', label: '433A & Foundation Retrofits' },
  { id: 'hud', label: 'HUD / FHA / VA Certifications' },
  { id: 'releveling', label: 'Releveling & Understructure' },
  { id: 'drainage', label: 'Drainage & Moisture Barriers' },
  { id: 'seismic', label: 'Earthquake Bracing (ERBS)' },
];

export const PROCESS_433A_STEPS = [
  {
    step: '1',
    title: 'Substructure Feasibility & Laser Elevation Audit',
    desc: 'We verify chassis longitudinal beams, pier block spacing, crawlspace clearance, and ground conditions.',
  },
  {
    step: '2',
    title: 'Pre-Engineered Proprietary System (SPA/Listing #)',
    desc: 'Utilizing state-approved designs that bypass costly 6-8 week municipal plan check delays while ensuring strict seismic load resistance.',
  },
  {
    step: '3',
    title: 'Municipal Building Permit Issuance & Turnkey Installation',
    desc: 'Our licensed Class C-47 & Class B crews pull permits directly with local Building Departments and complete concrete pours & steel ties.',
  },
  {
    step: '4',
    title: 'Inspector Sign-off & Official County Recording',
    desc: 'We coordinate final physical inspection with the municipal official and record Document 433A with County Recorder, forwarding certified records straight to escrow.',
  },
];

export const SPECS_433A_ITEMS = [
  'Engineered poured concrete footings to frost line',
  'Lateral seismic steel diagonal bracing members',
  'Tie-down tension anchors bolted into main steel I-beams',
  'Perimeter skirting continuous concrete or masonry enclosure',
];

export const HUD_GUIDELINE_RULES = [
  {
    id: 'post-1976',
    title: 'Post-June 15, 1976 Rule',
    desc: 'Federal law prohibits FHA and VA financing on homes manufactured prior to June 15, 1976. We physically verify HUD tags or retrieve official IBTS certification verification labels.',
  },
  {
    id: 'additions',
    title: 'Additions & Structural Alterations',
    desc: 'Porches, decks, sunrooms, and carports must be structurally independent or engineered so they do not exert unengineered roof loads on the manufactured chassis.',
  },
  {
    id: 'flood-elevation',
    title: 'Flood Plain & Grade Elevation',
    desc: 'Underfloor crawl spaces must be adequately elevated above the 100-year Base Flood Elevation (BFE) with perimeter positive drainage sloping away from the foundation.',
  },
  {
    id: 'running-gear',
    title: 'Chassis Running Gear Detachment',
    desc: 'HUD guidelines require towing hitch tongues, running axles, and chassis wheels to be removed from the site to establish true real estate permanence.',
  },
];

export const HUD_PACKAGE_CHECKLIST = [
  'Licensed California Civil/Structural Professional Engineer (PE) Wet or Digital Stamp',
  'Complete Foundation Lateral & Gravity Load Calculation Worksheet',
  'Photographic Documentation of HUD Certification Labels & Data Plates',
  'Comprehensive Structural Verification of Roof Additions / Carports',
  'Rapid 48-Hour Escrow PDF Delivery Direct to Underwriting Portals',
];

export const RELEVELING_SYMPTOMS = [
  'Doors and windows that bind or swing open',
  'Gaps at crown moldings or marriage line seams',
  'Cracking drywall or ceiling panel separations',
  'Floors squeaking, sloping, or feeling spongy',
];

export const RELEVELING_STEPS = [
  {
    num: 1,
    title: 'Ziplevel Digital Mapping',
    desc: 'We establish a digital benchmark elevation across every room to map exact settlement variance down to 0.1 of an inch.',
  },
  {
    num: 2,
    title: 'Hydraulic Jacking',
    desc: 'Simultaneous multi-point hydraulic elevation of main chassis I-beams gently restores the original factory baseline.',
  },
  {
    num: 3,
    title: 'Pier Reconditioning',
    desc: 'We remove decomposed wood shims, installing heavy-gauge steel screw jacks and solid masonry pads for zero future shrinkage.',
  },
];

export const MOISTURE_COMPROMISED_SIGNS = [
  'Persistent musty odor inside closets, cabinets, or carpeted areas',
  'Visible sag or dangling insulation under the home when viewing perimeter crawlspace',
  'Standing water or damp, spongy soil puddling under foundation blocks after winter rains',
  'Rust scale on structural longitudinal steel beams and jack screws',
];

export const ESCROW_CLOSING_WORKFLOW = [
  {
    step: '01',
    badgeBg: 'bg-secondary-fixed text-on-secondary-fixed',
    title: 'Same-Day Feasibility & Records Search',
    desc: 'Send us the parcel APN or property address. We review County Assessor records, HCD data, and prior permits to verify if a valid 433A is already on file.',
    tag: 'Rapid 24-hr review',
  },
  {
    step: '02',
    badgeBg: 'bg-primary-fixed text-on-primary-fixed',
    title: 'On-Site Engineering Inspection',
    desc: 'Our field technicians conduct laser elevation mapping, crawlspace crawl-through, HUD label verification, and pier block stability assessments.',
    tag: 'Precision Ziplevel data',
  },
  {
    step: '03',
    badgeBg: 'bg-tertiary-fixed text-on-tertiary-fixed',
    title: 'Permitting & Turnkey Retrofit',
    desc: 'If retrofitting or releveling is required, our crew pulls municipal permits and performs the installation with zero subcontracting delays.',
    tag: 'Licensed C-47 & Class B',
  },
  {
    step: '04',
    badgeBg: 'bg-surface-container-high text-on-surface',
    title: 'Stamped Sign-Off & Escrow Billing',
    desc: 'We obtain City/County building inspector sign-off, record official 433A at County Recorder, and invoice closing escrow directly ($0 upfront to client).',
    tag: 'Direct Escrow Invoice',
  },
];

export const COMPLIANCE_TOOLKITS = [
  {
    id: 'toolkit-433a',
    title: 'HCD Form 433A Guide (PDF)',
    desc: 'Complete breakdown of Title 25 requirements, County Assessor recording steps, and DMV pink slip conversions.',
    actionText: 'Download PDF (2.4 MB)',
    isDark: false,
  },
  {
    id: 'toolkit-checklist',
    title: 'Lender & Realtor Escrow Checklist',
    desc: 'The 7 essential foundation checklist items required by Fannie Mae, Freddie Mac, FHA, and VA loan underwriters.',
    actionText: 'Download Checklist',
    isDark: false,
  },
  {
    id: 'toolkit-pre1976',
    title: 'Pre-1976 Mobile Guidelines',
    desc: 'Financing alternatives and state safety retrofits for homes constructed prior to the June 15, 1976 HUD building code.',
    actionText: 'Read Guideline',
    isDark: false,
  },
  {
    id: 'toolkit-video',
    title: 'Video: 433A Field Installation',
    desc: 'Watch our licensed structural crews install an engineered seismic retrofit under an active escrow timeline.',
    actionText: 'Watch Video (4 min)',
    isDark: true,
  },
];
