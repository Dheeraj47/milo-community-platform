import React from 'react';

interface FooterProps {
  onCityClick: (cityName: string) => void;
  onOpenAuth: (mode: 'join') => void;
}

export const Footer: React.FC<FooterProps> = ({ onCityClick, onOpenAuth }) => {
  const handleScrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="w-full bg-[#102B27] text-on-primary py-12 sm:py-space-xl border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-margin">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-space-xl mb-10 sm:mb-space-xl">
          {/* Brand info */}
          <div className="lg:col-span-2 flex flex-col gap-space-md">
            <div className="flex items-center gap-space-sm">
              <svg
                width="34"
                height="34"
                viewBox="0 0 44 44"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="shrink-0"
              >
                <rect width="44" height="44" rx="12" fill="#183F39" />
                <path
                  d="M11 32V16L18 25.5L22 20L26 25.5L33 16V32"
                  stroke="#D6E8CF"
                  strokeWidth="3.2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <circle cx="22" cy="13.5" r="2.8" fill="#E8B978" />
              </svg>
              <span className="font-headline-md text-headline-md text-surface-container-lowest tracking-tight">
                MILO
              </span>
            </div>
            <p className="font-body-md text-sm sm:text-body-md text-outline-variant max-w-sm leading-relaxed">
              A community-powered relocation and settlement network for newcomers navigating unfamiliar Indian metropolises with warmth, safety, and peer support.
            </p>
            <div className="flex flex-wrap items-center gap-2 pt-space-xs">
              <span className="inline-flex items-center px-3 py-1 rounded-full bg-white/10 text-tertiary-fixed-dim font-label-caps text-[10px] sm:text-label-caps">
                100% COMMUNITY BACKED
              </span>
              <span className="inline-flex items-center px-3 py-1 rounded-full bg-white/10 text-primary-fixed-dim font-label-caps text-[10px] sm:text-label-caps">
                PEER MODERATED · DEMO
              </span>
            </div>
          </div>

          {/* Col 2: Four Pillars */}
          <div className="flex flex-col gap-space-sm">
            <span className="font-label-caps text-label-caps text-tertiary-fixed-dim tracking-wider uppercase mb-space-xs">
              Four Pillars
            </span>
            <button
              type="button"
              onClick={() => handleScrollTo('four-pillars')}
              className="text-left font-body-sm text-body-sm text-outline-variant hover:text-surface-container-lowest transition-colors cursor-pointer"
            >
              Neighborhood Anchors
            </button>
            <button
              type="button"
              onClick={() => handleScrollTo('four-pillars')}
              className="text-left font-body-sm text-body-sm text-outline-variant hover:text-surface-container-lowest transition-colors cursor-pointer"
            >
              Language &amp; Roots Guilds
            </button>
            <button
              type="button"
              onClick={() => handleScrollTo('vetted-living')}
              className="text-left font-body-sm text-body-sm text-outline-variant hover:text-surface-container-lowest transition-colors cursor-pointer"
            >
              Verified Rental Peer Circle
            </button>
            <button
              type="button"
              onClick={() => handleScrollTo('local-discovery')}
              className="text-left font-body-sm text-body-sm text-outline-variant hover:text-surface-container-lowest transition-colors cursor-pointer"
            >
              Emergency SOS &amp; Support
            </button>
          </div>

          {/* Col 3: Active City Hubs */}
          <div className="flex flex-col gap-space-sm">
            <span className="font-label-caps text-label-caps text-tertiary-fixed-dim tracking-wider uppercase mb-space-xs">
              Active City Hubs
            </span>
            {['Pune', 'Mumbai', 'Bengaluru', 'Hyderabad'].map((city) => (
              <button
                key={city}
                type="button"
                onClick={() => {
                  onCityClick(city);
                  handleScrollTo('destinations');
                }}
                className="text-left font-body-sm text-body-sm text-outline-variant hover:text-surface-container-lowest transition-colors cursor-pointer"
              >
                {city} Settlement Hub
              </button>
            ))}
          </div>

          {/* Col 4: Platform Trust */}
          <div className="flex flex-col gap-space-sm">
            <span className="font-label-caps text-label-caps text-tertiary-fixed-dim tracking-wider uppercase mb-space-xs">
              Platform Trust
            </span>
            <button
              type="button"
              onClick={() => handleScrollTo('trust-safety')}
              className="text-left font-body-sm text-body-sm text-outline-variant hover:text-surface-container-lowest transition-colors cursor-pointer"
            >
              Safety Guidelines
            </button>
            <button
              type="button"
              onClick={() => handleScrollTo('trust-safety')}
              className="text-left font-body-sm text-body-sm text-outline-variant hover:text-surface-container-lowest transition-colors cursor-pointer"
            >
              Mentor Code of Conduct
            </button>
            <button
              type="button"
              onClick={() => onOpenAuth('join')}
              className="text-left font-body-sm text-body-sm text-outline-variant hover:text-surface-container-lowest transition-colors cursor-pointer"
            >
              Identity Guidelines (Demo)
            </button>
            <button
              type="button"
              onClick={() => handleScrollTo('faq-section')}
              className="text-left font-body-sm text-body-sm text-outline-variant hover:text-surface-container-lowest transition-colors cursor-pointer"
            >
              Settler Grievances &amp; FAQ
            </button>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-6 sm:pt-space-lg border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4 sm:gap-space-md font-body-sm text-xs sm:text-body-sm text-outline-variant text-center md:text-left">
          <p>© 2026 MILO City Settlement Network. Demonstration platform for inter-city newcomers across India.</p>
          <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-space-lg">
            <button
              type="button"
              onClick={() => handleScrollTo('trust-safety')}
              className="hover:text-surface-container-lowest transition-colors cursor-pointer"
            >
              Privacy Policy
            </button>
            <button
              type="button"
              onClick={() => handleScrollTo('trust-safety')}
              className="hover:text-surface-container-lowest transition-colors cursor-pointer"
            >
              Terms of Hospitality
            </button>
            <button
              type="button"
              onClick={() => handleScrollTo('trust-safety')}
              className="hover:text-surface-container-lowest transition-colors cursor-pointer"
            >
              Community Guidelines
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
