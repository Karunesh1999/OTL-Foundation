export interface ParkClassification {
  id: string;
  title: string;
  ownershipModel: string;
  financingType: string;
  badge: string;
  badgeColor: string;
  description: string;
  keyRequirements: string[];
}

export const PARK_CLASSIFICATIONS: ParkClassification[] = [
  {
    id: 'condo-conversion',
    title: 'Condo Conversion Parks',
    ownershipModel: 'Deeded Airspace + Fractional Land Share',
    financingType: 'Conventional, FHA & VA Condo Loans',
    badge: 'Condominium Title',
    badgeColor: 'bg-secondary-fixed text-on-secondary-fixed',
    description:
      'The park has been legally converted into a residential condominium subdivision. Homeowners hold a deeded interest in their individual airspace and a shared undivided percentage of common ground.',
    keyRequirements: [
      'Must appear on HUD / FHA Approved Condominium Registry',
      'Requires Fannie Mae Form 1076 HOA Questionnaire',
      'Engineered permanent foundation certification (433A)',
      'HOA master hazard & liability insurance in place',
    ],
  },
  {
    id: 'resident-owned',
    title: 'Resident-Owned Communities (ROC)',
    ownershipModel: 'Co-op Share or Subdivision Parcel',
    financingType: 'Share Loans & Land-Home Mortgages',
    badge: 'Cooperative / HOA Share',
    badgeColor: 'bg-primary-fixed text-on-primary-fixed',
    description:
      'Residents form a mutual benefit corporation or homeowners cooperative that purchases the underlying park land, eliminating private landlord park-closure risks.',
    keyRequirements: [
      'Proprietary lease or corporate share certificate',
      'Specialized portfolio or credit union lender programs',
      '433A permanent foundation or Title 25 anchor system',
      'Regular monthly HOA maintenance dues assessment',
    ],
  },
  {
    id: 'pud-subdivision',
    title: 'Planned Unit Developments (PUD)',
    ownershipModel: 'Fee-Simple Lot Ownership',
    financingType: 'Standard 30-Year Conforming Mortgages',
    badge: 'Fee Simple Land-Home',
    badgeColor: 'bg-tertiary-fixed text-on-tertiary-fixed',
    description:
      'Homeowner owns both the manufactured home structure and the individual platted dirt lot beneath it with dedicated parcel boundaries recorded with the County Assessor.',
    keyRequirements: [
      'Recorded HCD Form 433A with County Recorder',
      'DMV registration cancelled; converted to real property tax rolls',
      'Eligible for lowest conventional 30-year fixed market rates',
      'ALTA 7 title policy endorsement issued to lender',
    ],
  },
  {
    id: 'rental-leasehold',
    title: 'Rental / Leasehold Parks',
    ownershipModel: 'Private Landlord Leased Space',
    financingType: 'Chattel (Personal Property) Loans Only',
    badge: 'Personal Property',
    badgeColor: 'bg-surface-container-high text-on-surface',
    description:
      'The land is owned by a private investor or corporate park operator. The homeowner pays monthly ground space rent and owns only the manufactured home structure.',
    keyRequirements: [
      'Ineligible for conventional conforming 30-yr real estate mortgages',
      'Financed through specialized chattel lenders (higher interest rates)',
      'HCD / DMV pink slips maintained (Form 433A not recorded)',
      'Subject to park rules and potential space rent increases',
    ],
  },
];

export const LENDING_REQUISITE_CONDITIONS = [
  {
    title: 'Verified Land-Home Collateral',
    desc: 'Lenders require that the borrower owns both the home and the underlying parcel or has a qualified deeded condo interest, eliminating ground lease termination risk.',
  },
  {
    title: 'HUD Approved Park Registry',
    desc: 'For FHA-insured condo loans, the specific condominium conversion park must be verified on the official HUD Condominium Approval List or qualify via Single-Unit Approval (SUA).',
  },
  {
    title: 'Recorded HCD Form 433A',
    desc: 'The home must be permanently affixed to an engineered foundation system with an official Form 433A recorded at the County Recorder, converting it into taxable real property.',
  },
  {
    title: 'Structural PE Compliance Stamping',
    desc: 'An independent inspection by a California licensed Professional Engineer verifying compliance with HUD-4930.3G standards, structural additions, and running gear removal.',
  },
  {
    title: 'Healthy HOA Reserve & Questionnaire',
    desc: 'For condo conversions, lenders evaluate HOA financial reserves, delinquency rates (under 15%), and owner-occupancy ratios before underwriting approval.',
  },
];
