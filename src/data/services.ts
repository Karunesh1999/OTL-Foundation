import type { ServiceItem } from '../types';

export const CORE_SERVICES: ServiceItem[] = [
  {
    id: '433a',
    title: '433A Permanent Foundation',
    badge: 'CA Standard #1',
    icon: 'description',
    description:
      'Complete county permit pulling, foundation tie-in inspections, building official final sign-offs, and recorded document procurement converting personal property to real estate.',
    features: [
      'County Building Records Retrieval',
      'Form 433A Recording with County Assessor',
    ],
    linkText: 'Learn About 433A Requirements',
    path: 'services',
  },
  {
    id: 'hud1996',
    title: 'HUD 1996 Engineer Certification',
    badge: 'Federal Code',
    icon: 'architecture',
    description:
      'Licensed California structural engineer stamps verifying compliant anchorage, footing dimensions, flood elevation, and lateral/uplift wind resistance.',
    features: [
      'Permanent Foundations Guide for M.H.',
      'On-Site Digital Laser Measurements',
    ],
    linkText: 'Order Structural Engineer Stamp',
    path: 'services',
  },
  {
    id: 'fha-va',
    title: 'FHA / VA Loan Compliance',
    badge: 'Underwriting Fix',
    icon: 'construction',
    description:
      'Mandatory pier retrofitting, steel pier stabilization, and concrete perimeter wall upgrades installed to remove underwriting conditions for government-backed financing.',
    features: [
      'Fast Underwriter Clearance Notice',
      'Direct Payment from Escrow Proceeds',
    ],
    linkText: 'Retrofit For Loan Approval',
    path: 'services',
  },
  {
    id: 'erbs',
    title: 'Earthquake & Seismic Retrofit (ERBS)',
    badge: 'Life Safety',
    icon: 'vibration',
    description:
      'State-approved Earthquake Resistant Bracing Systems (ERBS) engineered to safeguard manufactured structures against severe California tremors and lateral displacement.',
    features: [
      'California HCD Approved Bracing',
      'CEA Earthquake Insurance Discount Eligible',
    ],
    linkText: 'View ERBS System Details',
    path: 'services',
  },
  {
    id: 'curative-title',
    title: 'Curative Title Assistance',
    badge: 'Legal & Escrow',
    icon: 'folder_special',
    description:
      'Resolving lost or missing HCD certificates of title, decedent transfers, unrecorded deeds of trust, and transitioning titles from DMV registers to county property tax rolls.',
    features: [
      'HCD Pink Slip Remediation',
      'Lienholder Sign-Off Procurement',
    ],
    linkText: 'Resolve Problem Title',
    path: 'resources',
  },
  {
    id: 'adu',
    title: 'Accessory Dwelling Units (ADU)',
    badge: 'Modern Living',
    icon: 'cottage',
    description:
      'Comprehensive structural engineering, concrete perimeter grade foundations, and site integration tailored for modern factory-built ADUs and Crest Backyard Homes models.',
    features: [
      'Prefab Crane Placement Support',
      'Expedited City Utility Tie-In Permits',
    ],
    linkText: 'Explore ADU Engineering',
    path: 'adu-custom-homes',
  },
];
