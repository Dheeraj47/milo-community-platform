export interface CityStats {
  activeMovers: number;
  hometownCircles: number;
  verifiedServices: number;
  settlementRate: number;
}

export interface CityData {
  id: string;
  name: string;
  tagline: string;
  state: string;
  image: string;
  description: string;
  stats: CityStats;
  popularLocalities: string[];
  topDiasporas: string[];
  vibe: string;
  accentBadge: string;
}

export interface CityBackdrop {
  id: string;
  name: string;
  state: string;
  localities: string;
  image: string;
  badge: string;
  circleInfo: string;
  quote: string;
}

export interface CommunityMember {
  id: string;
  name: string;
  avatar: string;
  hometown: string;
  hometownState: string;
  currentCity: string;
  neighborhood: string;
  role: string;
  companyOrField: string;
  languages: string[];
  monthsSettled: number;
  bio: string;
  offeringHelpWith: string[];
  hobbies: string[];
  verified: boolean;
  avatarBg?: string;
}

export interface PillarCircle {
  id: string;
  initials: string;
  initialsBgClass: string;
  name: string;
  membersCount: number;
  locations: string;
}

export interface PillarItem {
  id: string;
  title: string;
  tagline: string;
  description: string;
  highlights: string[];
  metric: string;
  metricLabel: string;
  featuredCircles?: PillarCircle[];
  realQuote?: {
    text: string;
    author: string;
    fromTo: string;
  };
  sampleFeatures?: {
    label: string;
    description: string;
    tag: string;
  }[];
}

export interface AccommodationListing {
  id: string;
  title: string;
  city: string;
  neighborhood: string;
  rentMonthly: number;
  depositNote: string;
  image: string;
  tag: string;
  verifiedBadge: string;
  distanceNote: string;
  features: string[];
}

export interface LocalService {
  id: string;
  name: string;
  category: string;
  icon: string;
  iconBgClass: string;
  rating: number;
  reviewCountNote: string;
  description: string;
  priceNote: string;
  badge: string;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

export interface Testimonial {
  id: string;
  name: string;
  hometown: string;
  currentCity: string;
  neighborhood: string;
  quote: string;
  avatar: string;
  role: string;
  settledInDays: number;
}
