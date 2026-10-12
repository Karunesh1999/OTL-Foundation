export interface Milestone {
  year: string;
  title: string;
  desc: string;
  tag: string;
}

export const COMPANY_MILESTONES: Milestone[] = [
  {
    year: '1990',
    title: 'Founding & Field Mastery',
    desc: 'Founded in Southern California as a specialized manufactured housing foundation leveling and structural repair contracting firm.',
    tag: 'CSLB Class B #677241',
  },
  {
    year: '1998',
    title: 'Turnkey HCD 433A Authority',
    desc: 'Pioneered direct Title 25 permanent foundation certification and County Recorder document delivery, converting personal property into real estate.',
    tag: 'Title 25 Specialist',
  },
  {
    year: '2005',
    title: 'Statewide Escrow Direct Billing',
    desc: 'Introduced direct escrow billing to eliminate upfront out-of-pocket costs for buyers, sellers, and real estate professionals.',
    tag: '$0 Upfront Escrow Invoicing',
  },
  {
    year: '2014',
    title: 'Dual CSLB Licensure & Seismic Expansion',
    desc: 'Secured Class C-47 manufactured housing license (#1022204) and certified ERBS earthquake tie-down engineering with the California Earthquake Authority (CEA).',
    tag: 'CSLB Class C-47 #1022204',
  },
  {
    year: 'Present',
    title: '58-County Engineering Fleet',
    desc: 'Operating statewide with precision digital Ziplevel laser mapping, rapid 48-72h stamped PE certification turnarounds, and curative title resolution.',
    tag: 'All 58 CA Counties',
  },
];

export const CORE_VALUES = [
  {
    num: '01',
    title: 'Direct Top-Line Personnel',
    desc: 'You never speak with an offshore call center or third-party order desk. You deal directly with senior personnel possessing 35+ years of California field foundation experience.',
  },
  {
    num: '02',
    title: 'Zero Subcontractor Handoffs',
    desc: 'We operate our own licensed crews, tools, hydraulic jacking systems, and service fleet. Every foundation pier, tie-down, and permit is executed under direct company accountability.',
  },
  {
    num: '03',
    title: 'PE Stamped Engineering Precision',
    desc: 'Every certificate meets strict HUD-4930.3G, Fannie Mae, and California Title 25 criteria, backed by sealed calculation sheets from licensed Professional Structural Engineers.',
  },
  {
    num: '04',
    title: 'Closing Escrow Protection',
    desc: 'We coordinate with title companies and escrow officers directly. Zero out-of-pocket fees before closing protects delicate transaction contingencies from stalling.',
  },
];

export const LEADERSHIP_PILLARS = [
  {
    title: 'Master Field Superintendents',
    role: 'On-Site Foundation Operations',
    desc: 'Decades of direct crawlspace crawl-through, hydraulic Chassis leveling, steel pier block stanchion anchoring, and laser plane leveling experience.',
  },
  {
    title: 'Licensed Structural Engineers (PE)',
    role: 'Sealed Engineering Calculations',
    desc: 'California-registered Professional Engineers responsible for structural load calculations, addition load isolation, and HUD-4930.3G compliance letters.',
  },
  {
    title: 'Title & Escrow Curative Desk',
    role: 'County & HCD Title Processing',
    desc: 'Dedicated title processors coordinating County Recorder document delivery, DMV fee cancellation slips, and ALTA 7 lender title policy endorsements.',
  },
];
