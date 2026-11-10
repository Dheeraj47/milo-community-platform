import type {
  CityData,
  CityBackdrop,
  CommunityMember,
  PillarItem,
  AccommodationListing,
  LocalService,
  FAQItem,
  Testimonial,
} from '../types';

export const CITY_BACKDROPS: Record<string, CityBackdrop> = {
  pune: {
    id: 'pune',
    name: 'Pune',
    state: 'Maharashtra',
    localities: 'Baner · Viman Nagar · Hinjawadi',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuCRTxcd06nHip_fzg2cHDN95TI83Yoh4Cp9xQYOXoieufPmFcZRWr2py5t1w2QbGRY7LiFNXlslz2bpTyuKSw5Xnm5s5QDRqMgXuJg2lrxzGrgCcZPx0c__ZqK4Uqs5R3RGz2LpoIws-sX2ZPGOd1N2hTNc8mmZfsqyOI0dSDBeCLaYhZ7aNckucbeCSTLrvT4G1Fuxw65NWRbgfRP4KricYIEnYnXCeH175Iq24Qkb',
    badge: 'Featured Settlement Hub',
    circleInfo: 'Pune Settlement Circle',
    quote: '“Met 4 people from Rajasthan in Baner for weekend badminton & authentic poha!”',
  },
  bengaluru: {
    id: 'bengaluru',
    name: 'Bengaluru',
    state: 'Karnataka',
    localities: 'HSR Layout · Indiranagar · Koramangala',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuCqa0uGApt5zCrcJJORwY2Juc5-6t8VXiLLdBnOz504drbzuFdyeJo4NU3a0fe6cwE3RMBl-COnpFr1mCfMYpOe4VPx_tSI0IolkznjmECChdNjzS9KVIzp-wq9nFLrTdfcUzcVSvrGG7gOTU9GYzDSPlk6PYFVv-caMypD-U5nlmz1ZjyIRlWOAG4SNBS3sEtJYdIcq-jo4li3Tz0iqPQ3jit5J2fcUnDQjes2Ugss',
    badge: 'Silicon Valley Hub',
    circleInfo: 'Bengaluru Tech Movers',
    quote: '“Found flatmates from Lucknow in HSR Sector 2 with zero broker fees!”',
  },
  mumbai: {
    id: 'mumbai',
    name: 'Mumbai',
    state: 'Maharashtra',
    localities: 'Powai · Andheri · Bandra',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuBearmIK8vKPFSJDA8my7BVilt7EwhHYVFCNAQSwn5ZYfoUMTXOdlxbtWC17s47dZEcNQdCFSq2JMgzu3cc9oilYBZOv0-o60f2MazS5v-kKXo4HsKv_tAL1D0eVQ_xJ51_48q75zX8Y6Mv1dpY5MYk89ivxHjKidjIBndwV_AEh7wQAfj6o5y6YLUQAlpaRbtVNOCRC1Y4AEuE2UuetHvVOP15jzRtHJgTtqNqCmDv',
    badge: 'High Career Growth',
    circleInfo: 'Mumbai Settlers Guild',
    quote: '“Connected with 8 folks from Ahmedabad in Powai. Weekend runs by the lake!”',
  },
  hyderabad: {
    id: 'hyderabad',
    name: 'Hyderabad',
    state: 'Telangana',
    localities: 'Gachibowli · Madhapur · Hitec City',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuAWT3nl5WDYLnsMveYjzNCKdVa7D4wjhY1FNhRQFJl25wMnfDvpYWlzLS4Vk_DZiVvhVXyUTd2rXZ5YRuk-RuifokBW54HSHyfJxA9aO_Jlqn75auShwBFc3ltT6ZVa-abYTQ9ZZU8NgelMxAyvpBmlTRwSS9D6BP3K2ZRebuvc0sSUXm4qpjw7wZgqAPmbjg2uzgKPO7PLA0sp3NeW2blrJTMxyH65qDjDpLhPxOR6',
    badge: 'Best Value for Living',
    circleInfo: 'Hyderabad Twin Hub',
    quote: '“Relocated from Chandigarh. Found homestyle North Indian tiffins in 2 days!”',
  },
};

export const CITIES_DATA: CityData[] = [
  {
    id: 'pune',
    name: 'Pune',
    tagline: '4,200+ Newcomers · 85+ Hometown Circles',
    state: 'Maharashtra',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuCRTxcd06nHip_fzg2cHDN95TI83Yoh4Cp9xQYOXoieufPmFcZRWr2py5t1w2QbGRY7LiFNXlslz2bpTyuKSw5Xnm5s5QDRqMgXuJg2lrxzGrgCcZPx0c__ZqK4Uqs5R3RGz2LpoIws-sX2ZPGOd1N2hTNc8mmZfsqyOI0dSDBeCLaYhZ7aNckucbeCSTLrvT4G1Fuxw65NWRbgfRP4KricYIEnYnXCeH175Iq24Qkb',
    description:
      'A vibrant blend of pleasant weather, IT corridors, academic energy, and deep Maharashtra heritage with large diaspora circles.',
    stats: {
      activeMovers: 4200,
      hometownCircles: 85,
      verifiedServices: 320,
      settlementRate: 98,
    },
    popularLocalities: ['Hinjawadi', 'Baner', 'Viman Nagar'],
    topDiasporas: ['Jaipur & Rajasthan', 'Indore & MP', 'Lucknow & UP', 'Nagpur', 'Bhopal'],
    vibe: 'Laidback cafés, breezy weather, weekend trekking hubs, and close-knit regional circles.',
    accentBadge: 'Featured Settlement Hub',
  },
  {
    id: 'mumbai',
    name: 'Mumbai',
    tagline: '6,800+ Newcomers · 120+ Circles',
    state: 'Maharashtra',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuBearmIK8vKPFSJDA8my7BVilt7EwhHYVFCNAQSwn5ZYfoUMTXOdlxbtWC17s47dZEcNQdCFSq2JMgzu3cc9oilYBZOv0-o60f2MazS5v-kKXo4HsKv_tAL1D0eVQ_xJ51_48q75zX8Y6Mv1dpY5MYk89ivxHjKidjIBndwV_AEh7wQAfj6o5y6YLUQAlpaRbtVNOCRC1Y4AEuE2UuetHvVOP15jzRtHJgTtqNqCmDv',
    description:
      'Fast-paced, high-opportunity, and endlessly energetic. Finding your neighborhood clan makes Mumbai truly feel like a village.',
    stats: {
      activeMovers: 6800,
      hometownCircles: 120,
      verifiedServices: 610,
      settlementRate: 97,
    },
    popularLocalities: ['BKC', 'Powai', 'Andheri East'],
    topDiasporas: ['Delhi NCR', 'Ahmedabad & Gujarat', 'Jaipur', 'Kolkata', 'Bengaluru'],
    vibe: 'Sea breeze, late-night tea stalls, bustling local trains, and hyper-active creative communities.',
    accentBadge: 'High Career Growth',
  },
  {
    id: 'bengaluru',
    name: 'Bengaluru',
    tagline: '7,400+ Newcomers · 150+ Circles',
    state: 'Karnataka',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuCqa0uGApt5zCrcJJORwY2Juc5-6t8VXiLLdBnOz504drbzuFdyeJo4NU3a0fe6cwE3RMBl-COnpFr1mCfMYpOe4VPx_tSI0IolkznjmECChdNjzS9KVIzp-wq9nFLrTdfcUzcVSvrGG7gOTU9GYzDSPlk6PYFVv-caMypD-U5nlmz1ZjyIRlWOAG4SNBS3sEtJYdIcq-jo4li3Tz0iqPQ3jit5J2fcUnDQjes2Ugss',
    description:
      'Startup epicenters, leafy boulevards, specialty filter coffee, and an exceptionally welcoming melting pot of pan-India newcomers.',
    stats: {
      activeMovers: 7400,
      hometownCircles: 150,
      verifiedServices: 750,
      settlementRate: 99,
    },
    popularLocalities: ['HSR Layout', 'Koramangala', 'Indiranagar'],
    topDiasporas: ['Hyderabad & AP/TG', 'Jaipur & Rajasthan', 'Lucknow', 'Chennai', 'Pune'],
    vibe: 'Third-wave roasteries, weekend hackathons, Cubbon Park mornings, and active sports clubs.',
    accentBadge: 'Most Connected Diaspora',
  },
  {
    id: 'hyderabad',
    name: 'Hyderabad',
    tagline: '3,900+ Newcomers · 70+ Circles',
    state: 'Telangana',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuAWT3nl5WDYLnsMveYjzNCKdVa7D4wjhY1FNhRQFJl25wMnfDvpYWlzLS4Vk_DZiVvhVXyUTd2rXZ5YRuk-RuifokBW54HSHyfJxA9aO_Jlqn75auShwBFc3ltT6ZVa-abYTQ9ZZU8NgelMxAyvpBmlTRwSS9D6BP3K2ZRebuvc0sSUXm4qpjw7wZgqAPmbjg2uzgKPO7PLA0sp3NeW2blrJTMxyH65qDjDpLhPxOR6',
    description:
      'Grand historic grandeur meeting futuristic HITEC city infrastructure, famed culinary culture, and warm hospitality.',
    stats: {
      activeMovers: 3900,
      hometownCircles: 70,
      verifiedServices: 430,
      settlementRate: 98,
    },
    popularLocalities: ['Gachibowli', 'Madhapur', 'Kondapur'],
    topDiasporas: ['Vijayawada & Guntur', 'Visakhapatnam', 'Bengaluru', 'Nagpur', 'Jaipur'],
    vibe: 'Irani chai over conversations, sprawling tech parks, aromatic biryani feasts, and serene lakes.',
    accentBadge: 'Best Value for Living',
  },
];

export const COMMUNITY_MEMBERS: CommunityMember[] = [
  {
    id: 'mem-1',
    name: 'Aarav Sharma',
    avatar:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuDNDz23-pJYzVCFvfAyOXWse4KqZu9-q7q8GHR2E4-SZ0XLxIK4MdxETu682fa6weyCRqZANiTyAjGRZI3zVPetBRque1ywthwsDqYj7iwfPt9K77_kscpwCH6xTkE2wKMwfi4Rel4VMrxKliHC5xjGwEZ5wxRRVDn8qFfz7XrhIX63snd4P02U1vJtEEris7f_V4OkmzqgRIOGldQVn7TSbcUGUNHbngKHeygQez5X',
    hometown: 'Jaipur',
    hometownState: 'Rajasthan',
    currentCity: 'Pune',
    neighborhood: 'Viman Nagar',
    role: 'Senior Product Designer',
    companyOrField: 'Fintech Studio',
    languages: ['Hindi', 'Marwari', 'English'],
    monthsSettled: 14,
    bio: 'Moved from Jaipur to Pune in 2024. Spent my first month finding decent PGs and genuine dal baati. Now mentoring newcomers settling in Baner & Viman Nagar.',
    offeringHelpWith: ['PG & Flat hunting', 'Authentic Rajasthani tiffins', 'Weekend cafe recommendations'],
    hobbies: ['Badminton', 'Street photography', 'Specialty coffee'],
    verified: true,
  },
  {
    id: 'mem-2',
    name: 'Priya Rathore',
    avatar:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuDcGfio28MEQLCwbR5hJkPHDvP7LhxKA02YOYOtJJn3iR5EFsSySqaizDMWPDmyf1xFTQfHlSmloxgY0CSEDNzQVlK4cc2ZPkNAyvD_k9xZ0sik477u0ARbVPsLaPmUVy-qQjoUtADuzddeCv1zAFLMUXTFZQI0OW4gehL4gnI1IZ3vw3tKdGFo1Ds17L6F4qkukEv_fg5XWnNHlPH-HYT4mXCCSdL64QRU8kBt5kTr',
    hometown: 'Jaipur',
    hometownState: 'Rajasthan',
    currentCity: 'Pune',
    neighborhood: 'Baner',
    role: 'Frontend Engineer',
    companyOrField: 'Cloud SaaS Platform',
    languages: ['Hindi', 'Marwari', 'English'],
    monthsSettled: 9,
    bio: 'Jaipur native who shifted for tech opportunities. Co-host of the Pune Jaipurites Chai & Weekend Badminton Circle. Love helping fellow Rajasthanis settle smoothly.',
    offeringHelpWith: ['Flatmate vetting', 'Daily commute tips', 'Festive get-togethers'],
    hobbies: ['Trekking to Sinhagad', 'Pottery', 'Board games'],
    verified: true,
  },
  {
    id: 'mem-3',
    name: 'Tanmay Mathur',
    avatar:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuAqeq8qYU9fLI5MDSwPEh0YSbIoZvgQhO2zqhrAiEaubJDsTaXzCaqJNMBLg4tEu_T_w7CG-AZIuTxUck8hVsaFRZoq98kHtBf7SYkUdAQkbTC5OzcnsVN0AcyRfcUhCmRF_rLPPEVyRo24GaSOqqHn0C4pZBMDjTAtYWI1uF06mE1ThAR2pAxxJ_DFVbtVWPgesoM0iOKc58O-LClpp9qQjPobf6jXQ4uuM1AZV6K4',
    hometown: 'Jaipur',
    hometownState: 'Rajasthan',
    currentCity: 'Pune',
    neighborhood: 'Kothrud',
    role: 'Data Scientist',
    companyOrField: 'Mobility AI Lab',
    languages: ['Hindi', 'Marwari', 'English'],
    monthsSettled: 22,
    bio: 'Graduated from MNIT Jaipur, living in Pune for 2 years. Happy to connect on rental agreement legalities, broker-free flats, and finding quiet study libraries.',
    offeringHelpWith: ['Rental contracts & deposits', 'Cook & maid referrals', 'Local bike rentals'],
    hobbies: ['Cycling ARAI Hills', 'Indie music', 'Cookouts'],
    verified: true,
  },
];

export const FOUR_PILLARS: PillarItem[] = [
  {
    id: 'pillar-community',
    title: 'Community',
    tagline: 'Connect with people from your hometown, instantly.',
    description:
      'When you move across states, small cultural idioms and shared habits matter. Whether it’s watching IPL with fellow Bengalis in Bangalore or finding someone who appreciates authentic Marwari Dal Baati in Pune, our circles bridge that gap effortlessly.',
    highlights: [
      'Weekly Chai & Sports meetups: Casual weekend badminton, football, and breakfast walks.',
      'Festive family warmth: Group celebrations for Diwali, Chhath Puja, Durga Puja, and Pongal.',
    ],
    metric: '280+',
    metricLabel: 'Hometown Circles Across 4 Metros',
    featuredCircles: [
      {
        id: 'c-1',
        initials: 'PJ',
        initialsBgClass: 'bg-tertiary-fixed-dim/40 text-tertiary-container',
        name: 'Pune Jaipurites Chai & Badminton',
        membersCount: 148,
        locations: 'Baner & Viman Nagar',
      },
      {
        id: 'c-2',
        initials: 'DN',
        initialsBgClass: 'bg-secondary-container text-primary-container',
        name: 'Delhi-NCR Tech Relocators in HSR',
        membersCount: 312,
        locations: 'Koramangala & HSR Sector 1',
      },
      {
        id: 'c-3',
        initials: 'HT',
        initialsBgClass: 'bg-primary-fixed text-primary-container',
        name: 'Hyderabad Andhra & Telangana Food Walkers',
        membersCount: 210,
        locations: 'Gachibowli & Madhapur',
      },
    ],
  },
  {
    id: 'pillar-living',
    title: 'Living',
    tagline: 'Discover PGs, flats and potential flatmates without broker commissions.',
    description:
      'Finding safe, comfortable accommodation in a new city can be overwhelming. Connect directly with verified members and current tenants to discover roommate openings that match your food habits, work hours, and hygiene standards.',
    highlights: [
      'Direct peer listings with zero intermediary or broker fees.',
      'Lifestyle & dietary compatibility filters (Veg, Non-veg, Jain, Pet-friendly).',
    ],
    metric: '1,200+',
    metricLabel: 'Sample Roommate & Stay Matches',
    featuredCircles: [
      {
        id: 'c-4',
        initials: 'VF',
        initialsBgClass: 'bg-secondary-container text-primary-container',
        name: 'Pune Zero-Broker Flatmate Network',
        membersCount: 420,
        locations: 'Viman Nagar, Baner & Hinjawadi',
      },
      {
        id: 'c-5',
        initials: 'BF',
        initialsBgClass: 'bg-tertiary-fixed-dim/40 text-tertiary-container',
        name: 'Bengaluru Techies Flatshare Circle',
        membersCount: 580,
        locations: 'HSR, Indiranagar & Bellandur',
      },
    ],
  },
  {
    id: 'pillar-discovery',
    title: 'Local Discovery',
    tagline: 'Find authentic regional tiffins, mess, laundry, and daily essentials.',
    description:
      'Daily routines dictate quality of life. Discover home-cooked regional meals, trusted local cooks, laundry pickups, and emergency clinic recommendations crowdsourced by people from your native background.',
    highlights: [
      'Authentic regional tiffin and home-cooked dabba directories.',
      'Crowdsourced neighborhood contacts for laundry, domestic help, and mechanics.',
    ],
    metric: '2,100+',
    metricLabel: 'Community Recommended Local Providers',
    featuredCircles: [
      {
        id: 'c-6',
        initials: 'TR',
        initialsBgClass: 'bg-primary-fixed text-primary-container',
        name: 'Pune Regional Tiffin & Mess Radar',
        membersCount: 280,
        locations: 'Hinjawadi, Kothrud & Viman Nagar',
      },
      {
        id: 'c-7',
        initials: 'BR',
        initialsBgClass: 'bg-secondary-container text-primary-container',
        name: 'Bengaluru North Indian Meals Hub',
        membersCount: 390,
        locations: 'Koramangala, HSR & Whitefield',
      },
    ],
  },
  {
    id: 'pillar-connections',
    title: 'Connections',
    tagline: 'Make friends, build meaningful bonds, and explore together.',
    description:
      'Never spend lonely weekends staring at screens. Join weekend turf badminton, coffee walks, heritage strolls, and coworking sessions designed specifically for newcomers seeking genuine friendships.',
    highlights: [
      'Weekend activity clubs: Badminton, morning running, and board games.',
      'Casual neighborhood chai walks and newcomer welcoming meetups.',
    ],
    metric: '450+',
    metricLabel: 'Monthly Newcomer Community Meetups',
    featuredCircles: [
      {
        id: 'c-8',
        initials: 'PC',
        initialsBgClass: 'bg-tertiary-fixed-dim/40 text-tertiary-container',
        name: 'Pune Weekend Hikers & Chai Walkers',
        membersCount: 260,
        locations: 'ARAI Hills, Sinhagad & Viman Nagar',
      },
      {
        id: 'c-9',
        initials: 'BC',
        initialsBgClass: 'bg-primary-fixed text-primary-container',
        name: 'Bengaluru Cubbon Park Runners & Readers',
        membersCount: 340,
        locations: 'Cubbon Park, Indiranagar',
      },
    ],
  },
];

export const HOW_IT_WORKS_STEPS = [
  {
    stepNumber: '01',
    title: 'Tell us where you’re from',
    subtitle: 'Share your background, language & destination',
    description:
      'Tell MILO where you are moving from, your preferred native languages, work hub, dietary lifestyle, and when you are arriving. No endless forms—just the essentials that matter for genuine belonging.',
    badge: 'STEP 1: YOUR ROOTS',
    footerIcon: 'pin_drop',
    footerText: 'Origin mapping across 60+ Indian cities',
  },
  {
    stepNumber: '02',
    title: 'Discover familiar people in your new city',
    subtitle: 'Instant hometown peers, seniors & local guides',
    description:
      'Instantly get introduced to people from your hometown who already navigated the same transition. They know which neighborhoods have reliable water, which brokers are honest, and where to find comfort food.',
    badge: 'STEP 2: WARM INTROS',
    footerIcon: 'verified_user',
    footerText: 'Community-moderated peer profiles (Demo data)',
  },
  {
    stepNumber: '03',
    title: 'Find your people, place and community',
    subtitle: 'Lock in safe living, trusted services & lifelong friends',
    description:
      'Move from being a hesitant stranger to an integrated local. Secure a verified room, plug into reliable daily tiffins, join weekend badminton, and make your new city feel like home from day one.',
    badge: 'STEP 3: SETTLED & THRIVING',
    footerIcon: 'handshake',
    footerText: 'Zero brokerage, zero newcomer isolation',
  },
];

export const ACCOMMODATIONS_DATA: AccommodationListing[] = [
  {
    id: 'acc-1',
    title: 'Premium Co-living Suite, Viman Nagar',
    city: 'Pune',
    neighborhood: 'Viman Nagar',
    rentMonthly: 14500,
    depositNote: 'Deposit: 1 Month',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuCMjBEXAYhE-c0wuJBEcjmObS5GQkZLEsSZy5dH3vhDgTEsyTFyaxlylMW_DQ6_tkG-dCFt3lDvXqrljR7eDmDE5k8FB7EXCnPaGWPb1EMOV4j8fk44zNM3LjSrEWGRjNWVVk2nheZzfFRs3vv7ikncU1yOPwORD0zaCotgBPyHOpcS93pxl3GNQm0YO2hJdgouwhvo6BGGpNIFfiRr8DCdKxjx7Kt3rrrnJwl4UbJU',
    tag: 'ZERO BROKERAGE',
    verifiedBadge: 'COMMUNITY CHECKED',
    distanceNote: 'Pune · 7 mins walk from Phoenix Marketcity & EON Shuttle',
    features: ['High-speed WiFi (300mbps)', 'Daily Housekeeping', 'Rajasthani & Guj flatmates'],
  },
  {
    id: 'acc-2',
    title: '2BHK Shared Flat with Techies, HSR',
    city: 'Bengaluru',
    neighborhood: 'HSR Layout',
    rentMonthly: 18000,
    depositNote: 'Deposit: 2 Months',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuBSGvijw2Ge4lZrKGY_Qz4lyYkaonw_tPUFNuHiH5ebE_i1J-FRgsrOWQ5k1qNZM8EoibCVsG81Sao9Md_aXQrR5565m-HvF0p4l3lj5klAxk1MQOd5fn1GsQinW8oaullQGiB0G5Xx2czvhhqivUE-Pv0wJ_L-tdYxoA_IU738QKJ-sZK2ieCEzue5vHYyFU9sQXEFTLCuULqKmEXT92xvL7-oaJXnkkP-tZSW4tUP',
    tag: 'FLATMATE OPENING',
    verifiedBadge: 'COMMUNITY CHECKED',
    distanceNote: 'Bengaluru · Sector 2, 5 mins from Cult.fit & 27th Main',
    features: ['Dedicated Cook Available', 'Balcony Garden', 'Vegetarian preferred'],
  },
  {
    id: 'acc-3',
    title: 'Private Studio, Baner-Pashan Link Rd',
    city: 'Pune',
    neighborhood: 'Baner',
    rentMonthly: 16000,
    depositNote: 'Deposit: 1 Month',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuCVFJx-rDDMgDkZUrh__kx7eoOpjAyn2xDZpH1bnh3HeBhmKXxSwK5yCauOUylxfBEj_wcZihCmh0MiLz1ZrR_Zx1ygrqq0WkVbc7vGCaYS4xeU7yhOj-LiPDIxWWON4gTh2XVU0mrNMXe1QoxBM65ZLihFo3TtbU_4w1-w_3udPQg4KKSChMjhRZ5DMqCawKfXRJh3IDWJmDbnSA3Fy760J5kCsmTNUnnLQniuY-RQ',
    tag: 'PRIVATE STUDIO',
    verifiedBadge: 'COMMUNITY CHECKED',
    distanceNote: 'Pune · 10 mins to Balewadi High Street & Siemens Hub',
    features: ['24/7 Water & RO Purifier', 'Building Gym Access', 'Covered 2-Wheeler Parking'],
  },
];

export const LOCAL_SERVICES_DATA: LocalService[] = [
  {
    id: 'srv-1',
    name: 'Maa Ki Rasoi Tiffins',
    category: 'Tiffin & Mess',
    icon: 'restaurant_menu',
    iconBgClass: 'bg-tertiary-fixed text-tertiary-container',
    rating: 4.9,
    reviewCountNote: '180+ monthly users',
    description:
      'Authentic Marwari & North Indian Ghar Ka Khana with phulkas, dal tadka, and seasonal subzi.',
    priceNote: '₹2,800 / mo (Lunch)',
    badge: 'Doorstep Hot',
  },
  {
    id: 'srv-2',
    name: 'Hinjawadi Tech Shuttle',
    category: 'Commute Shuttle',
    icon: 'directions_bus',
    iconBgClass: 'bg-secondary-container text-primary-container',
    rating: 4.8,
    reviewCountNote: '45 daily riders',
    description:
      'Peer carpooling & shared AC shuttles from Baner/Aundh directly into Phase 1, 2, and 3 IT Parks.',
    priceNote: 'Save 60% vs Cabs',
    badge: 'Live GPS Track',
  },
  {
    id: 'srv-3',
    name: 'SpinExpress Wash & Iron',
    category: 'Laundry Pickup',
    icon: 'local_laundry_service',
    iconBgClass: 'bg-surface-container-high text-primary-container',
    rating: 4.7,
    reviewCountNote: '340+ orders',
    description:
      'Doorstep pickup from PGs & flats. Gentle wash, crisp steam iron, delivered in 24 hours folded.',
    priceNote: '₹69 / kg pickup',
    badge: 'Free Pickup',
  },
  {
    id: 'srv-4',
    name: 'Apollo Hub & Clinics',
    category: 'Healthcare Access',
    icon: 'local_hospital',
    iconBgClass: 'bg-error-container/40 text-error',
    rating: 4.9,
    reviewCountNote: '24/7 Verified Partner',
    description:
      'Multilingual doctors (Hindi, English, Marathi, Bengali) with doorstep medicines within 30 mins.',
    priceNote: '₹299 Consult Fee',
    badge: 'Instant SOS',
  },
];

export const FAQ_DATA: FAQItem[] = [
  {
    id: 'faq-1',
    question: 'Is MILO completely free for newcomers?',
    answer:
      'Yes! Joining hometown circles, browsing community accommodation listings, getting matched with mentors, and accessing neighborhood guides is 100% free for all newcomers relocating across India.',
  },
  {
    id: 'faq-2',
    question: 'How are hometown mentors and peer flatmates vetted?',
    answer:
      'We use community-guided peer moderation: mentors share their work background, and user connections require mutual consent before contact details are exchanged. Peer feedback is reviewed after every meetup to maintain safety.',
  },
  {
    id: 'faq-3',
    question: 'Can I find roommates who speak my native language?',
    answer:
      'Absolutely. Our filter allows you to sort accommodation opportunities and flatmate openings by hometown, mother tongue (e.g. Marwari, Bengali, Tamil, Telugu, Hindi, etc.), and food preferences (pure veg, non-veg friendly).',
  },
  {
    id: 'faq-4',
    question: 'How do I list my tiffin or local service on MILO?',
    answer:
      'Local cooks and home entrepreneurs can apply under our “Local Discovery” portal. Neighborhood leads review member feedback and food quality before featuring any community tiffin partner.',
  },
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 'test-1',
    name: 'Aarav Sharma',
    hometown: 'Jaipur',
    currentCity: 'Pune',
    neighborhood: 'Viman Nagar',
    role: 'Product Designer',
    settledInDays: 4,
    avatar:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuDNDz23-pJYzVCFvfAyOXWse4KqZu9-q7q8GHR2E4-SZ0XLxIK4MdxETu682fa6weyCRqZANiTyAjGRZI3zVPetBRque1ywthwsDqYj7iwfPt9K77_kscpwCH6xTkE2wKMwfi4Rel4VMrxKliHC5xjGwEZ5wxRRVDn8qFfz7XrhIX63snd4P02U1vJtEEris7f_V4OkmzqgRIOGldQVn7TSbcUGUNHbngKHeygQez5X',
    quote:
      'Moving from Jaipur to Pune alone was terrifying until I discovered MILO. Within 4 days, I had a fellow Jaipurite roommate in Viman Nagar and an authentic Marwari tiffin delivery. It completely eliminated my anxiety.',
  },
];

export const HOMETOWNS = [
  'Jaipur, Rajasthan',
  'Indore, Madhya Pradesh',
  'Kolkata, West Bengal',
  'Lucknow, Uttar Pradesh',
  'Chandigarh, Punjab',
];

export const TARGET_CITIES = [
  'Pune (Viman Nagar / Baner)',
  'Bengaluru (HSR / Koramangala)',
  'Mumbai (Powai / Andheri)',
  'Hyderabad (Gachibowli / Hitec)',
];

export const LANGUAGES = [
  'Hindi',
  'Marwari',
  'Tamil',
  'Telugu',
  'Bengali',
  'Marathi',
];
