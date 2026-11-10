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

export interface PillarItem {
  id: string;
  title: string;
  tagline: string;
  description: string;
  highlights: string[];
  metric: string;
  metricLabel: string;
  realQuote: {
    text: string;
    author: string;
    fromTo: string;
  };
  sampleFeatures: {
    label: string;
    description: string;
    tag: string;
  }[];
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

