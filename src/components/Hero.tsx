import React, { useState } from 'react';
import { CITY_BACKDROPS } from '../data/mockData';

interface HeroProps {
  onFindCommunityClick: () => void;
  onExploreCitiesClick: () => void;
  onOpenMentorModal?: () => void;
  initialCity?: string;
  currentCity?: string;
  onCityChange?: (city: string) => void;
}

export const Hero: React.FC<HeroProps> = ({
  onFindCommunityClick,
  onExploreCitiesClick,
  onOpenMentorModal,
  initialCity = 'pune',
  currentCity,
  onCityChange,
}) => {
  const [internalCityKey, setInternalCityKey] = useState<string>(initialCity);
  const selectedCityKey = currentCity || internalCityKey;

  const handleCitySelect = (cityKey: string) => {
    setInternalCityKey(cityKey);
    if (onCityChange) {
      onCityChange(cityKey);
    }
  };

  const backdrop = CITY_BACKDROPS[selectedCityKey] || CITY_BACKDROPS.pune;

  return (
    <section className="relative w-full overflow-hidden bg-surface py-12 md:py-20 lg:py-24">
      {/* ========================================================================= */}
      {/* 1. Full-Bleed City Background Picture Layer with Multi-Stop Gradients     */}
      {/* ========================================================================= */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        {/* City Background Picture - Clear, atmospheric, matching settlement destination */}
        <img
          key={backdrop.id}
          src={backdrop.image}
          alt={`${backdrop.name} City Horizon Backdrop`}
          className="w-full h-full object-cover object-center transition-all duration-700 opacity-40 md:opacity-45 filter saturate-[0.95] contrast-[1.08] animate-fade-in"
        />

        {/* Multi-directional gradient masks: text is 100% crisp on left, city skyline visibly shines on right */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#FBF9F3] via-[#FBF9F3]/85 via-45% to-[#FBF9F3]/30" />
        <div className="absolute inset-0 bg-gradient-to-b from-[#F7F5EF]/60 via-transparent to-[#FBF9F3]/90" />

        {/* Ambient colored lighting glows matching MILO brand palette */}
        <div className="absolute -top-24 -left-20 w-96 h-96 rounded-full bg-secondary-fixed/30 blur-3xl" />
        <div className="absolute top-1/2 right-0 w-[30rem] h-[30rem] rounded-full bg-tertiary-fixed-dim/25 blur-3xl" />
      </div>

      {/* Main Section Content */}
      <div className="max-w-7xl mx-auto px-margin relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left: Hero Headline & Narrative */}
          <div className="lg:col-span-7 flex flex-col items-start gap-6">
            {/* Top Badges: Brand Tag + City Horizon Selector */}
            <div className="flex flex-wrap items-center gap-2.5">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-secondary-container/70 text-primary-container shadow-xs">
                <span className="material-symbols-outlined text-sm font-semibold text-secondary">
                  eco
                </span>
                <span className="font-label-caps text-label-caps tracking-widest uppercase">
                  PREMIUM CITY SETTLEMENT NETWORK
                </span>
              </div>

              {/* Quick Destination Backdrop Switcher */}
              <div className="inline-flex items-center gap-1 p-1 rounded-full bg-surface-container-lowest/90 backdrop-blur-md border border-outline-variant/40 shadow-xs text-xs">
                <span className="material-symbols-outlined text-xs text-secondary pl-2">
                  location_city
                </span>
                <span className="font-label-caps text-[10px] text-on-surface-variant font-bold pr-1">
                  HORIZON:
                </span>
                {(['pune', 'bengaluru', 'mumbai', 'hyderabad'] as const).map((cityKey) => (
                  <button
                    key={cityKey}
                    type="button"
                    onClick={() => handleCitySelect(cityKey)}
                    className={`px-3 py-1 rounded-full text-xs font-semibold capitalize transition-all cursor-pointer ${
                      selectedCityKey === cityKey
                        ? 'bg-primary-container text-on-primary shadow-xs scale-105'
                        : 'text-on-surface-variant hover:text-on-surface hover:bg-surface-container'
                    }`}
                  >
                    {cityKey}
                  </button>
                ))}
              </div>
            </div>

            {/* Main Headline */}
            <h1 className="font-display-hero text-headline-xl-mobile md:text-display-hero text-on-surface tracking-tight leading-[1.08]">
              Your new city.
              <br />
              <span className="relative inline-block text-primary-container">
                Your people.
                <svg
                  className="absolute -bottom-2.5 left-0 w-full overflow-visible pointer-events-none"
                  fill="none"
                  height="12"
                  viewBox="0 0 280 12"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M3 8.5C80 3.5 190 2.5 277 8"
                    stroke="#E8B978"
                    strokeLinecap="round"
                    strokeWidth="4.5"
                  />
                </svg>
              </span>
            </h1>

            {/* Narrative text */}
            <p className="font-body-lg text-body-lg text-on-surface-variant max-w-xl leading-relaxed">
              Moving somewhere new doesn't mean starting alone. Find people from your hometown, discover trusted local communities, secure vetted flats, and make your new city feel like home from day one.
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-4 pt-2 w-full sm:w-auto">
              <a
                href="#interactive-matcher"
                onClick={(e) => {
                  e.preventDefault();
                  onFindCommunityClick();
                }}
                className="inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-full bg-primary-container text-on-primary font-label-md text-label-md shadow-lg shadow-primary-container/15 hover:bg-[#203c37] transition-all hover:scale-[1.02] cursor-pointer"
              >
                <span>Find Your Community</span>
                <span className="material-symbols-outlined text-sm">arrow_forward</span>
              </a>
              <a
                href="#destinations"
                onClick={(e) => {
                  e.preventDefault();
                  onExploreCitiesClick();
                }}
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-surface-container-lowest text-primary-container font-label-md text-label-md shadow-sm hover:bg-surface-container transition-all cursor-pointer"
              >
                <span className="material-symbols-outlined text-base">explore</span>
                <span>Explore Cities</span>
              </a>
            </div>

            {/* Micro Proof Bar */}
            <div className="flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-6 pt-4 text-on-surface-variant font-body-sm text-body-sm">
              <div className="flex items-center gap-3">
                <div className="flex -space-x-2">
                  <div className="w-8 h-8 rounded-full bg-surface-container-highest flex items-center justify-center font-label-caps text-on-surface shadow-xs">
                    KA
                  </div>
                  <div className="w-8 h-8 rounded-full bg-secondary-container flex items-center justify-center font-label-caps text-on-secondary-fixed shadow-xs">
                    RJ
                  </div>
                  <div className="w-8 h-8 rounded-full bg-tertiary-fixed flex items-center justify-center font-label-caps text-tertiary-container shadow-xs">
                    MH
                  </div>
                </div>
                <div>
                  <p className="font-label-md text-label-md text-on-surface font-semibold">
                    14,200+ Newcomers{' '}
                    <span className="text-[11px] font-normal text-secondary">(Demonstration Metric)</span>
                  </p>
                  <p className="text-xs text-on-surface-variant">
                    Settled across Pune, Bengaluru, Mumbai &amp; Hyd
                  </p>
                </div>
              </div>

              {/* Active Backdrop City Tag */}
              <div className="hidden sm:flex items-center gap-1.5 px-3 py-1 rounded-full bg-surface-container-low/80 border border-outline-variant/30 text-xs text-on-surface-variant">
                <span className="w-2 h-2 rounded-full bg-emerald-500" />
                <span>
                  Viewing <strong>{backdrop.name}</strong> horizon ({backdrop.localities})
                </span>
              </div>
            </div>
          </div>

          {/* Right: Visual Collage & Interactive Previews */}
          <div className="lg:col-span-5 relative w-full flex justify-center">
            <div className="relative w-full max-w-md">
              {/* Main Lifestyle Visual */}
              <div className="w-full h-[430px] rounded-3xl overflow-hidden shadow-xl bg-surface-container relative">
                <img
                  className="w-full h-full object-cover"
                  alt={`Diverse friends connecting in ${backdrop.name}`}
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuAjZZtuFW3q2M6PcXTBw8j19Qebz-nXraspF9RmTGSWrBPQw2lh5DQ1WZ099lDxYfmOguagMbnfUeCir639UfHjv3PTQz3VXsxUFPqhuNDR_bsEVwaNhEXcbL2wYbiphXeEtNcdtF2Mam4rpoZQTmqjtmH3X5x8Im3wa1Yo0mZ1wdMqBrfpvWJ3TRunaxSh1svkvDr4HCOiuAZ1pxbQ0zjwhyQzH9OWXH29ynqfh36z"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary-container/85 via-primary-container/20 to-transparent" />

                {/* Bottom Overlaid Live Circle Info */}
                <div className="absolute bottom-4 left-4 right-4 bg-surface-container-lowest/95 backdrop-blur-md p-4 rounded-2xl shadow-md">
                  <div className="flex items-center justify-between gap-2 mb-1.5">
                    <div className="flex items-center gap-2">
                      <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
                      <span className="font-label-md text-label-md text-primary-container font-bold">
                        {backdrop.circleInfo}
                      </span>
                    </div>
                    <span className="px-2 py-0.5 rounded-full bg-secondary-container text-on-secondary-fixed font-label-caps text-[10px] tracking-wider font-semibold">
                      ACTIVE TODAY · SAMPLE
                    </span>
                  </div>
                  <p className="font-body-sm text-body-sm text-on-surface-variant line-clamp-2">
                    {backdrop.quote}
                  </p>
                </div>
              </div>

              {/* Floating Top-Left Mentor Card */}
              <div
                className="absolute -top-6 -left-6 sm:-left-8 bg-surface-container-lowest p-3.5 rounded-2xl shadow-xl flex items-center gap-3.5 max-w-xs cursor-pointer transition-transform hover:scale-105"
                onClick={onOpenMentorModal}
                title="Click to view sample mentor profile"
              >
                <div className="relative w-12 h-12 rounded-full overflow-hidden shrink-0 bg-surface-variant">
                  <img
                    className="w-full h-full object-cover"
                    alt="Aarav Sharma sample profile"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuDiPAEwfOxrQMu2bXQo13D-u8-PduXg8a4vkARIIfd285joljQYbjVZb_CGVWYEp3D43X_JuoQ3forpByvz8-e0KUdb7iQE0xq7mjYLEonnU57yUVyO3OBXTb6N4UySt_qR-k08YXdOPLbQikj2uVaPhH0y8zihv7tgy1HD7ECeECDkVUtiSO8EADsLh3a4ByPLdVz4JywnFCYSaoEcH5UwOcNX9cT--ZHuZo97r5WI"
                  />
                  <span className="absolute bottom-0 right-0 w-3.5 h-3.5 rounded-full bg-emerald-500 ring-2 ring-surface-container-lowest" />
                </div>
                <div className="flex flex-col min-w-0">
                  <div className="flex items-center gap-1.5">
                    <h4 className="font-label-md text-label-md text-on-surface truncate">
                      Aarav Sharma
                    </h4>
                    <span className="inline-flex items-center text-xs font-bold text-amber-600">
                      ★ 4.9
                    </span>
                  </div>
                  <p className="font-body-sm text-xs text-on-surface-variant truncate">
                    Jaipur → Pune (Viman Nagar)
                  </p>
                  <div className="mt-1">
                    <span className="inline-block px-2 py-0.5 rounded-full bg-secondary-container/70 text-on-secondary-fixed font-label-caps text-[10px]">
                      Helped 28 Newcomers · Demo
                    </span>
                  </div>
                </div>
              </div>

              {/* Floating Bottom-Right Verified Alert Pill */}
              <div className="absolute -bottom-4 -right-4 sm:-right-6 bg-primary-container text-on-primary px-4 py-2.5 rounded-full shadow-xl flex items-center gap-2">
                <span className="material-symbols-outlined text-tertiary-fixed-dim text-lg">
                  restaurant
                </span>
                <span className="font-label-sm text-label-sm tracking-wide">
                  14 Homemade Tiffin hubs curated in {backdrop.name} (Demo)
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
