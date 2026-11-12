import React, { useState } from 'react';
import { FOUR_PILLARS } from '../data/mockData';

interface CorePillarsProps {
  onJoinCircle: (circleName: string) => void;
}

export const CorePillars: React.FC<CorePillarsProps> = ({ onJoinCircle }) => {
  const [activePillarId, setActivePillarId] = useState('pillar-community');

  const activePillar =
    FOUR_PILLARS.find((p) => p.id === activePillarId) || FOUR_PILLARS[0];

  const getPillarIcon = (id: string) => {
    switch (id) {
      case 'pillar-community':
        return 'groups';
      case 'pillar-living':
        return 'home';
      case 'pillar-discovery':
        return 'restaurant';
      case 'pillar-connections':
      default:
        return 'handshake';
    }
  };

  const getPillarIndex = (id: string) => {
    const idx = FOUR_PILLARS.findIndex((p) => p.id === id);
    return idx >= 0 ? `0${idx + 1}` : '01';
  };

  return (
    <section className="w-full py-16 md:py-24 bg-surface-container-low" id="four-pillars">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-margin">
        {/* Header */}
        <div className="flex flex-col items-center text-center max-w-2xl mx-auto mb-10 sm:mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-surface-container text-secondary mb-3">
            <span className="material-symbols-outlined text-sm">stars</span>
            <span className="font-label-caps text-label-caps font-bold uppercase tracking-wider">
              THE FOUR PILLARS
            </span>
          </div>
          <h2 className="font-headline-xl text-headline-xl-mobile md:text-headline-xl text-primary-container tracking-tight mb-4">
            Everything You Need to Feel Settled
          </h2>
          <p className="font-body-lg text-sm sm:text-body-lg text-on-surface-variant leading-relaxed">
            Relocating goes far beyond shipping boxes. MILO is built on four core pillars engineered to restore your social safety net, housing peace, and daily comforts.
          </p>
        </div>

        {/* Tab Buttons Row - Responsive 1 col on 320px, 2 on 420px+, 4 on desktop */}
        <div className="grid grid-cols-1 min-[420px]:grid-cols-2 lg:grid-cols-4 gap-2.5 sm:gap-4 mb-8">
          {FOUR_PILLARS.map((pillar) => {
            const isActive = activePillarId === pillar.id;
            const iconName = getPillarIcon(pillar.id);

            return (
              <button
                key={pillar.id}
                type="button"
                onClick={() => setActivePillarId(pillar.id)}
                className={`p-3 sm:p-4 rounded-2xl flex items-center gap-3 text-left transition-all cursor-pointer ${
                  isActive
                    ? 'bg-primary-container text-on-primary shadow-lg scale-[1.02]'
                    : 'bg-surface-container-lowest hover:bg-surface-container text-on-surface border border-outline-variant/30 hover:border-outline-variant'
                }`}
              >
                <span
                  className={`w-10 h-10 sm:w-11 sm:h-11 rounded-xl flex items-center justify-center shrink-0 transition-transform ${
                    isActive
                      ? 'bg-surface-container-lowest/15 text-[#E8B978]'
                      : 'bg-surface-container text-primary-container'
                  }`}
                >
                  <span className="material-symbols-outlined text-xl">{iconName}</span>
                </span>
                <div className="min-w-0">
                  <p className="font-headline-sm text-sm font-bold truncate">{pillar.title}</p>
                  <p
                    className={`font-label-sm text-xs ${
                      isActive ? 'text-[#D6E8CF]' : 'text-on-surface-variant'
                    }`}
                  >
                    {pillar.metric} Active
                  </p>
                </div>
              </button>
            );
          })}
        </div>

        {/* Active Tab Content Container */}
        <div className="bg-surface-container-lowest p-4 sm:p-8 lg:p-10 rounded-3xl shadow-xl border border-outline-variant/25">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Left Content */}
            <div className="lg:col-span-6 flex flex-col gap-4">
              <div className="flex flex-wrap items-center gap-2">
                <span className="px-2.5 py-1 rounded-full bg-secondary-container text-on-secondary-fixed font-label-caps text-xs">
                  Pillar {getPillarIndex(activePillar.id)}
                </span>
                <span className="px-2.5 py-1 rounded-full bg-surface-container text-on-surface-variant font-label-caps text-xs">
                  {activePillar.metricLabel}
                </span>
              </div>
              <h3 className="font-headline-lg text-xl sm:text-headline-lg text-primary-container">
                {activePillar.tagline}
              </h3>
              <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
                {activePillar.description}
              </p>
              <div className="flex flex-col gap-3 pt-2">
                {activePillar.highlights.map((highlight, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <span className="material-symbols-outlined text-secondary text-lg mt-0.5">
                      check_circle
                    </span>
                    <p className="font-body-sm text-body-sm text-on-surface leading-relaxed">
                      {highlight}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Mini Bento Circles */}
            <div className="lg:col-span-6 flex flex-col gap-3.5">
              {activePillar.featuredCircles && activePillar.featuredCircles.length > 0 ? (
                activePillar.featuredCircles.map((circle) => (
                  <div
                    key={circle.id}
                    className="p-3.5 sm:p-4 rounded-2xl bg-surface-container-low flex flex-col min-[400px]:flex-row min-[400px]:items-center justify-between gap-3 hover:bg-surface-container transition-colors"
                  >
                    <div className="flex items-center gap-3 min-w-0">
                      <div
                        className={`w-11 h-11 sm:w-12 sm:h-12 rounded-xl flex items-center justify-center font-headline-sm font-bold shrink-0 ${circle.initialsBgClass}`}
                      >
                        {circle.initials}
                      </div>
                      <div className="min-w-0">
                        <h4 className="font-label-md text-xs sm:text-label-md text-primary-container font-bold leading-snug">
                          {circle.name}
                        </h4>
                        <p className="text-[11px] sm:text-xs text-on-surface-variant truncate">
                          {circle.membersCount} Members · {circle.locations}
                        </p>
                      </div>
                    </div>
                    <button
                      type="button"
                      onClick={() => onJoinCircle(circle.name)}
                      className="self-start min-[400px]:self-auto shrink-0 whitespace-nowrap px-3.5 py-1.5 rounded-full bg-surface-container-lowest text-xs font-semibold text-primary-container shadow-xs hover:bg-primary-container hover:text-on-primary transition-colors cursor-pointer"
                    >
                      Join Circle
                    </button>
                  </div>
                ))
              ) : (
                <div className="p-6 rounded-2xl bg-surface-container-low text-center text-sm text-on-surface-variant">
                  Featured community circles for this pillar are active across Pune, Bengaluru, Mumbai and Hyderabad.
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
