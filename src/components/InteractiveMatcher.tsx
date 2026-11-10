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
    <section className="w-full py-16 md:py-24 bg-surface" id="interactive-matcher">
      <div className="max-w-7xl mx-auto px-margin">
        <div className="bg-surface-container-lowest rounded-3xl p-6 sm:p-10 lg:p-12 shadow-xl shadow-primary-container/5 relative overflow-hidden">
          {/* Decorative subtle element */}
          <div className="absolute -right-16 -bottom-16 w-80 h-80 rounded-full bg-secondary-fixed/20 blur-2xl pointer-events-none" />

          {/* Header Row */}
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 mb-10 pb-8 border-b border-surface-container">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-tertiary-fixed-dim/30 text-on-tertiary-fixed-variant mb-2 font-label-caps text-label-caps">
                <span className="material-symbols-outlined text-xs">auto_awesome</span>
                <span>QUICK COMMUNITY MATCHER</span>
              </div>
              <h2 className="font-headline-lg text-headline-lg text-primary-container">
                Personalize Your Settlement Journey
              </h2>
              <p className="font-body-md text-body-md text-on-surface-variant mt-1">
                Configure your route to preview instant peers, verified flats, and regional food matches.
              </p>
            </div>
            <div className="flex items-center gap-3 bg-surface-container-low px-4 py-2.5 rounded-full shrink-0">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-600 animate-ping" />
              <span className="font-label-md text-label-md text-primary-container font-semibold">
                1,420+ Active Circles Live (Demo)
              </span>
            </div>
          </div>

          {/* Matcher Form Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Input Controls */}
            <div className="lg:col-span-7 flex flex-col gap-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* Moving From */}
                <div className="flex flex-col gap-2">
                  <label
                    htmlFor="originSelect"
                    className="font-label-md text-label-md text-on-surface font-semibold flex items-center gap-1.5"
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
                      className="w-full px-4 py-3 rounded-2xl bg-surface-container-low text-on-surface font-body-md text-body-md appearance-none focus:outline-none focus:ring-2 focus:ring-primary-container cursor-pointer"
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
                    className="font-label-md text-label-md text-on-surface font-semibold flex items-center gap-1.5"
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
                      className="w-full px-4 py-3 rounded-2xl bg-surface-container-low text-on-surface font-body-md text-body-md appearance-none focus:outline-none focus:ring-2 focus:ring-primary-container cursor-pointer"
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
                <label className="font-label-md text-label-md text-on-surface font-semibold flex items-center gap-1.5">
                  <span className="material-symbols-outlined text-secondary text-base">translate</span>
                  <span>Native / Regional Language</span>
                </label>
                <div className="flex flex-wrap gap-2">
                  {LANGUAGES.map((lang) => {
                    const isSelected = selectedLanguages.includes(lang);
                    return (
                      <button
                        key={lang}
                        type="button"
                        onClick={() => toggleLanguage(lang)}
                        className={`px-3.5 py-1.5 rounded-full text-xs font-semibold transition-all ${
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

              {/* Immediate Settlement Help Needed */}
              <div className="flex flex-col gap-2">
                <label className="font-label-md text-label-md text-on-surface font-semibold flex items-center gap-1.5">
                  <span className="material-symbols-outlined text-secondary text-base">checklist</span>
                  <span>Immediate Settlement Help Needed</span>
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
                  {['Broker-Free Flat', 'Home Tiffins', 'Weekend Peers', 'Daily Commute'].map((need) => {
                    const checked = selectedNeeds.includes(need);
                    return (
                      <label
                        key={need}
                        className={`flex items-center gap-2 p-3 rounded-2xl cursor-pointer transition-colors ${
                          checked
                            ? 'bg-secondary-container/40 border border-secondary/20'
                            : 'bg-surface-container-low hover:bg-surface-container'
                        }`}
                      >
                        <input
                          type="checkbox"
                          checked={checked}
                          onChange={() => toggleNeed(need)}
                          className="accent-primary-container w-4 h-4 rounded cursor-pointer"
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

            {/* Real-Time Dynamic Result Preview Box */}
            <div className="lg:col-span-5 bg-surface-container-low p-6 rounded-3xl flex flex-col justify-between h-full shadow-inner">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="font-label-caps text-label-caps text-secondary font-bold uppercase tracking-wider">
                    LIVE MATCH PREVIEW (SAMPLE)
                  </span>
                  <span className="px-2 py-0.5 rounded-full bg-secondary-container text-on-secondary-fixed text-xs font-semibold">
                    Ready in 2 min
                  </span>
                </div>
                <div className="font-headline-sm text-headline-sm text-primary-container mb-4">
                  {originName} → {destName} Match Results
                </div>

                {/* Matches List */}
                <div className="flex flex-col gap-3">
                  <div className="p-3.5 bg-surface-container-lowest rounded-2xl shadow-xs flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <span className="w-9 h-9 rounded-full bg-secondary-container flex items-center justify-center text-primary-container">
                        <span className="material-symbols-outlined text-lg">group</span>
                      </span>
                      <div>
                        <p className="font-label-md text-label-md text-on-surface font-semibold">
                          {matchMetrics.peers}
                        </p>
                        <p className="text-xs text-on-surface-variant">{matchMetrics.peerLoc}</p>
                      </div>
                    </div>
                    <span className="material-symbols-outlined text-secondary text-base">
                      check_circle
                    </span>
                  </div>

                  <div className="p-3.5 bg-surface-container-lowest rounded-2xl shadow-xs flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <span className="w-9 h-9 rounded-full bg-tertiary-fixed flex items-center justify-center text-tertiary-container">
                        <span className="material-symbols-outlined text-lg">apartment</span>
                      </span>
                      <div>
                        <p className="font-label-md text-label-md text-on-surface font-semibold">
                          {matchMetrics.flats}
                        </p>
                        <p className="text-xs text-on-surface-variant">{matchMetrics.flatLoc}</p>
                      </div>
                    </div>
                    <span className="material-symbols-outlined text-secondary text-base">
                      check_circle
                    </span>
                  </div>

                  <div className="p-3.5 bg-surface-container-lowest rounded-2xl shadow-xs flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <span className="w-9 h-9 rounded-full bg-secondary-container flex items-center justify-center text-primary-container">
                        <span className="material-symbols-outlined text-lg">skillet</span>
                      </span>
                      <div>
                        <p className="font-label-md text-label-md text-on-surface font-semibold">
                          {matchMetrics.tiffins}
                        </p>
                        <p className="text-xs text-on-surface-variant">{matchMetrics.tiffinDesc}</p>
                      </div>
                    </div>
                    <span className="material-symbols-outlined text-secondary text-base">
                      check_circle
                    </span>
                  </div>
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-surface-container">
                <button
                  type="button"
                  onClick={handlePassClick}
                  className="w-full py-3.5 rounded-full bg-primary-container hover:bg-[#203c37] text-on-primary font-label-md text-label-md flex items-center justify-center gap-2 shadow-md transition-all cursor-pointer"
                >
                  <span>Unlock Connected Settler Pass</span>
                  <span className="material-symbols-outlined text-sm">arrow_forward</span>
                </button>
                <p className="text-center text-[11px] text-on-surface-variant mt-2">
                  Sample Demonstration · Simulated WhatsApp Circle Preview
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

