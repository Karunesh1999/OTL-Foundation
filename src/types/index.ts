export interface NavItem {
  label: string;
  href: string;
  path: string;
  isActive?: boolean;
}

export interface ServiceItem {
  id: string;
  title: string;
  badge: string;
  icon: string;
  description: string;
  features: string[];
  linkText: string;
  path: string;
}

export interface ClientPortalItem {
  id: string;
  title: string;
  tag: string;
  tagColorClass: string;
  icon: string;
  description: string;
  actionText: string;
  path: string;
}

export interface ToolkitItem {
  id: string;
  title: string;
  subtitle: string;
  icon: string;
  actionType: 'download' | 'read';
  actionLabel: string;
  fileName?: string;
  href: string;
}

export interface TestimonialItem {
  id: string;
  quote: string;
  author: string;
  role: string;
  avatarInitials: string;
  rating: number;
}

export interface PartnerItem {
  name: string;
  subtitle: string;
  highlightSecondary?: boolean;
}

export interface EligibilityFormData {
  propertyType: 'manufactured' | 'modular' | 'adu' | 'park';
  county: string;
  urgency: 'escrow' | 'refi' | 'seismic' | 'title';
  yearBuilt: string;
  phone: string;
}

export interface EligibilityResult {
  status: 'standard' | 'pre1976_warning' | 'custom_adu' | 'urgent_escrow';
  title: string;
  description: string;
  turnaround: string;
}
