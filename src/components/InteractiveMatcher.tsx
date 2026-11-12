import React, { useState, useMemo } from 'react';
import { HOMETOWNS, TARGET_CITIES, LANGUAGES } from '../data/mockData';

interface InteractiveMatcherProps {
  onUnlockPass: (summary: string) => void;
}

export const InteractiveMatcher: React.FC<InteractiveMatcherProps> = ({ onUnlockPass }) => {
  const [origin, setOrigin] = useState(HOMETOWNS[0]);
  const [destination, setDestination] = useState(TARGET_CITIES[0]);
  const [selectedLanguages, setSelectedLanguages] = useState<string[]>(['Hindi', 'Marwari']);
  const [selectedNeeds, setSelectedNeeds] = useState<string[]>([
    'Broker-Free Flat',
    'Home Tiffins',
    'Weekend Peers',
  ]);

  const toggleLanguage = (lang: string) => {
    setSelectedLanguages((prev) =>
      prev.includes(lang) ? prev.filter((l) => l !== lang) : [...prev, lang]
    );
  };

  const toggleNeed = (need: string) => {
    setSelectedNeeds((prev) =>
      prev.includes(need) ? prev.filter((n) => n !== need) : [...prev, need]
    );
  };

  // Derive city display names
  const originName = origin.split(',')[0].trim();
  const destName = destination.split('(')[0].trim();

  // Dynamic simulation calculations
  const matchMetrics = useMemo(() => {
    if (destName.toLowerCase().includes('pune')) {
      return {
        peers: '18 Hometown Peers',
        peerLoc: 'Active in Baner, Viman Nagar & Wakad',
        flats: '4 Verified Broker-Free Flats',
        flatLoc: 'Near EON IT Park & Balewadi',
        tiffins: '3 Marwari Home Tiffins',
        tiffinDesc: 'Doorstep hot roti delivery',
      };
    } else if (destName.toLowerCase().includes('bengaluru')) {
      return {
        peers: '34 Hometown Peers',
        peerLoc: 'Active in HSR Layout & Koramangala',
        flats: '9 Verified Broker-Free Flats',
        flatLoc: 'Near Manyata & EcoSpace Tech Parks',
        tiffins: '5 North Indian Home Tiffins',
        tiffinDesc: 'Pure veg & home-style options',
      };
    } else if (destName.toLowerCase().includes('mumbai')) {
      return {
        peers: '26 Hometown Peers',
        peerLoc: 'Active in Powai, Andheri & BKC',
        flats: '6 Verified Broker-Free Flats',
        flatLoc: 'Near Western Express & Metro Hubs',
        tiffins: '4 Regional Meal Subscriptions',
        tiffinDesc: 'Gujarati, Marwari & Kathiyawadi',
      };
    } else {
      return {
        peers: '14 Hometown Peers',
        peerLoc: 'Active in Gachibowli & Madhapur',
        flats: '3 Verified Broker-Free Flats',
        flatLoc: 'Near Financial District & Cyber Towers',
        tiffins: '2 Doorstep Ghar Ka Khana Providers',
        tiffinDesc: 'Home-style regional lunch boxes',
      };
    }
  }, [destName]);

  const handlePassClick = () => {
    onUnlockPass(
      `Pass generated for ${originName} → ${destName}! ${matchMetrics.peers} and ${matchMetrics.flats} unlocked (Demo).`
    );
  };

  return (
    <section className="w-full py-12 md:py-24 bg-surface" id="interactive-matcher">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-margin">
        <div className="bg-surface-container-lowest rounded-3xl p-4 sm:p-8 lg:p-12 shadow-xl shadow-primary-container/5 relative overflow-hidden">
          {/* Decorative subtle element */}
          <div className="absolute -right-16 -bottom-16 w-80 h-80 rounded-full bg-secondary-fixed/20 blur-2xl pointer-events-none" />

          {/* Header Row */}
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 sm:gap-6 mb-8 pb-6 border-b border-surface-container">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-tertiary-fixed-dim/30 text-on-tertiary-fixed-variant mb-2 font-label-caps text-label-caps">
                <span className="material-symbols-outlined text-xs">auto_awesome</span>
                <span>QUICK COMMUNITY MATCHER</span>
              </div>
              <h2 className="font-headline-lg text-xl sm:text-headline-lg text-primary-container font-extrabold">
                Personalize Your Settlement Journey
              </h2>
              <p className="font-body-md text-xs sm:text-body-md text-on-surface-variant mt-1">
                Configure your route to preview instant peers, verified flats, and regional food matches.
              </p>
            </div>
            <div className="flex items-center gap-2.5 bg-surface-container-low px-3.5 py-2 rounded-full self-start lg:self-auto shrink-0">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-600 animate-ping" />
              <span className="font-label-md text-xs sm:text-label-md text-primary-container font-semibold">
                1,420+ Active Circles Live (Demo)
              </span>
            </div>
          </div>

          {/* Matcher Form Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Input Controls */}
            <div className="lg:col-span-7 flex flex-col gap-6 w-full">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* Moving From */}
                <div className="flex flex-col gap-2">
                  <label
                    htmlFor="originSelect"
                    className="font-label-md text-xs sm:text-label-md text-on-surface font-semibold flex items-center gap-1.5"
                  >
                    <span className="material-symbols-outlined text-secondary text-base">
                      flight_takeoff
                    </span>
                    <span>Moving From (Origin)</span>
                  </label>
                  <div className="relative">
                    <select
                      id="originSelect"
                      value={origin}
                      onChange={(e) => setOrigin(e.target.value)}
                      className="w-full px-4 py-3 rounded-2xl bg-surface-container-low text-on-surface font-body-md text-sm sm:text-body-md appearance-none focus:outline-none focus:ring-2 focus:ring-primary-container cursor-pointer"
                    >
                      {HOMETOWNS.map((h) => (
                        <option key={h} value={h}>
                          {h}
                        </option>
                      ))}
                    </select>
                    <span className="material-symbols-outlined absolute right-3 top-3.5 pointer-events-none text-on-surface-variant text-base">
                      expand_more
                    </span>
                  </div>
                </div>

                {/* Moving To */}
                <div className="flex flex-col gap-2">
                  <label
                    htmlFor="destinationSelect"
                    className="font-label-md text-xs sm:text-label-md text-on-surface font-semibold flex items-center gap-1.5"
                  >
                    <span className="material-symbols-outlined text-secondary text-base">
                      flight_land
                    </span>
                    <span>Moving To (Destination)</span>
                  </label>
                  <div className="relative">
                    <select
                      id="destinationSelect"
                      value={destination}
                      onChange={(e) => setDestination(e.target.value)}
                      className="w-full px-4 py-3 rounded-2xl bg-surface-container-low text-on-surface font-body-md text-sm sm:text-body-md appearance-none focus:outline-none focus:ring-2 focus:ring-primary-container cursor-pointer"
                    >
                      {TARGET_CITIES.map((c) => (
                        <option key={c} value={c}>
                          {c}
                        </option>
                      ))}
                    </select>
                    <span className="material-symbols-outlined absolute right-3 top-3.5 pointer-events-none text-on-surface-variant text-base">
                      expand_more
                    </span>
                  </div>
                </div>
              </div>

              {/* Native Languages */}
              <div className="flex flex-col gap-2">
                <label className="font-label-md text-xs sm:text-label-md text-on-surface font-semibold flex items-center gap-1.5">
                  <span className="material-symbols-outlined text-secondary text-base">translate</span>
                  <span>Native / Regional Language</span>
                </label>
                <div className="flex flex-wrap gap-1.5 sm:gap-2">
                  {LANGUAGES.map((lang) => {
                    const isSelected = selectedLanguages.includes(lang);
                    return (
                      <button
                        key={lang}
                        type="button"
                        onClick={() => toggleLanguage(lang)}
                        className={`px-3 py-1.5 rounded-full text-xs font-semibold transition-all cursor-pointer ${
                          isSelected
                            ? 'bg-primary-container text-on-primary shadow-xs'
                            : 'bg-surface-container text-on-surface-variant hover:bg-surface-variant'
                        }`}
                      >
                        {lang} {isSelected ? '✓' : ''}
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Immediate Settlement Help Needed - Clean single column on narrow mobile */}
              <div className="flex flex-col gap-2">
                <label className="font-label-md text-xs sm:text-label-md text-on-surface font-semibold flex items-center gap-1.5">
                  <span className="material-symbols-outlined text-secondary text-base">checklist</span>
                  <span>Immediate Settlement Help Needed</span>
                </label>
                <div className="grid grid-cols-1 min-[400px]:grid-cols-2 sm:grid-cols-4 gap-2 sm:gap-2.5">
                  {['Broker-Free Flat', 'Home Tiffins', 'Weekend Peers', 'Daily Commute'].map((need) => {
                    const checked = selectedNeeds.includes(need);
                    return (
                      <label
                        key={need}
                        className={`flex items-center gap-2.5 p-2.5 sm:p-3 rounded-2xl cursor-pointer transition-colors ${
                          checked
                            ? 'bg-secondary-container/40 border border-secondary/20'
                            : 'bg-surface-container-low hover:bg-surface-container'
                        }`}
                      >
                        <input
                          type="checkbox"
                          checked={checked}
                          onChange={() => toggleNeed(need)}
                          className="accent-primary-container w-4 h-4 rounded cursor-pointer shrink-0"
                        />
                        <span className="font-body-sm text-xs font-medium text-on-surface">
                          {need}
                        </span>
                      </label>
                    );
                  })}
                </div>
              </div>
            </div>

            {/* Real-Time Dynamic Result Preview Box - Digital Settler Pass Style */}
            <div className="lg:col-span-5 bg-gradient-to-br from-[#102B27] to-[#183F39] text-on-primary p-4 sm:p-6 lg:p-7 rounded-3xl flex flex-col justify-between shadow-2xl relative overflow-hidden border border-white/10 w-full">
              {/* Subtle ambient light */}
              <div className="absolute top-0 right-0 w-48 h-48 bg-secondary-fixed/15 rounded-full blur-2xl pointer-events-none" />

              <div>
                {/* Pass Header */}
                <div className="flex items-center justify-between mb-4 pb-3 border-b border-white/10 gap-2">
                  <div className="flex items-center gap-1.5 sm:gap-2 min-w-0">
                    <span className="material-symbols-outlined text-tertiary-fixed-dim text-sm shrink-0">
                      confirmation_number
                    </span>
                    <span className="font-label-caps text-[9px] sm:text-[10px] tracking-widest uppercase text-tertiary-fixed-dim font-bold truncate">
                      DIGITAL SETTLER PASS · SAMPLE
                    </span>
                  </div>
                  <span className="px-2 sm:px-2.5 py-0.5 rounded-full bg-emerald-500/20 text-emerald-300 text-[9px] sm:text-[10px] font-bold border border-emerald-400/30 shrink-0">
                    98% COMPATIBLE
                  </span>
                </div>

                {/* Route Badges */}
                <div className="flex items-center justify-between gap-2 sm:gap-3 mb-5 bg-white/5 p-3 sm:p-4 rounded-2xl border border-white/5">
                  <div className="min-w-0">
                    <span className="text-[9px] sm:text-[10px] uppercase font-bold text-outline-variant tracking-wider">
                      Origin
                    </span>
                    <h4 className="font-headline-sm text-sm sm:text-base font-extrabold text-white truncate">
                      {originName}
                    </h4>
                  </div>
                  <div className="flex flex-col items-center shrink-0 px-1">
                    <span className="material-symbols-outlined text-tertiary-fixed-dim text-base sm:text-lg animate-pulse">
                      arrow_right_alt
                    </span>
                    <span className="text-[8px] sm:text-[9px] text-outline-variant">Direct Circle</span>
                  </div>
                  <div className="text-right min-w-0">
                    <span className="text-[9px] sm:text-[10px] uppercase font-bold text-outline-variant tracking-wider">
                      Destination
                    </span>
                    <h4 className="font-headline-sm text-sm sm:text-base font-extrabold text-white truncate">
                      {destName}
                    </h4>
                  </div>
                </div>

                {/* Matches Breakdown */}
                <div className="flex flex-col gap-2 sm:gap-2.5">
                  <div className="p-2.5 sm:p-3 bg-white/5 hover:bg-white/10 rounded-xl transition-colors flex items-center justify-between border border-white/5 gap-2">
                    <div className="flex items-center gap-2.5 sm:gap-3 min-w-0">
                      <span className="w-8 h-8 rounded-lg bg-secondary-container/20 flex items-center justify-center text-secondary-fixed shrink-0">
                        <span className="material-symbols-outlined text-base">group</span>
                      </span>
                      <div className="min-w-0">
                        <p className="font-label-md text-xs text-white font-semibold truncate">
                          {matchMetrics.peers}
                        </p>
                        <p className="text-[10px] sm:text-[11px] text-outline-variant truncate">{matchMetrics.peerLoc}</p>
                      </div>
                    </div>
                    <span className="material-symbols-outlined text-emerald-400 text-sm shrink-0">
                      verified
                    </span>
                  </div>

                  <div className="p-2.5 sm:p-3 bg-white/5 hover:bg-white/10 rounded-xl transition-colors flex items-center justify-between border border-white/5 gap-2">
                    <div className="flex items-center gap-2.5 sm:gap-3 min-w-0">
                      <span className="w-8 h-8 rounded-lg bg-tertiary-fixed-dim/20 flex items-center justify-center text-tertiary-fixed shrink-0">
                        <span className="material-symbols-outlined text-base">apartment</span>
                      </span>
                      <div className="min-w-0">
                        <p className="font-label-md text-xs text-white font-semibold truncate">
                          {matchMetrics.flats}
                        </p>
                        <p className="text-[10px] sm:text-[11px] text-outline-variant truncate">{matchMetrics.flatLoc}</p>
                      </div>
                    </div>
                    <span className="material-symbols-outlined text-emerald-400 text-sm shrink-0">
                      verified
                    </span>
                  </div>

                  <div className="p-2.5 sm:p-3 bg-white/5 hover:bg-white/10 rounded-xl transition-colors flex items-center justify-between border border-white/5 gap-2">
                    <div className="flex items-center gap-2.5 sm:gap-3 min-w-0">
                      <span className="w-8 h-8 rounded-lg bg-secondary-container/20 flex items-center justify-center text-secondary-fixed shrink-0">
                        <span className="material-symbols-outlined text-base">skillet</span>
                      </span>
                      <div className="min-w-0">
                        <p className="font-label-md text-xs text-white font-semibold truncate">
                          {matchMetrics.tiffins}
                        </p>
                        <p className="text-[10px] sm:text-[11px] text-outline-variant truncate">{matchMetrics.tiffinDesc}</p>
                      </div>
                    </div>
                    <span className="material-symbols-outlined text-emerald-400 text-sm shrink-0">
                      verified
                    </span>
                  </div>
                </div>
              </div>

              {/* Perforated Divider */}
              <div className="relative my-4 overflow-hidden py-1">
                <div className="border-t border-dashed border-white/20" />
              </div>

              <div>
                <button
                  type="button"
                  onClick={handlePassClick}
                  className="w-full py-3 sm:py-3.5 rounded-full bg-gradient-to-r from-[#E8B978] to-[#f0c58a] hover:from-[#dca961] hover:to-[#e4b574] text-[#102B27] font-label-md text-xs font-extrabold flex items-center justify-center gap-2 shadow-lg transition-all hover:scale-[1.02] cursor-pointer shimmer-btn"
                >
                  <span>Claim Your Settler Pass</span>
                  <span className="material-symbols-outlined text-base">arrow_forward</span>
                </button>
                <div className="flex items-center justify-between text-[10px] text-outline-variant mt-2 px-1">
                  <span>Pass ID: ML-{originName.slice(0, 3).toUpperCase()}-{destName.slice(0, 3).toUpperCase()}</span>
                  <span>Free Prototype Access</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

