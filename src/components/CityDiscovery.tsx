import React from 'react';
import { CITIES_DATA } from '../data/mockData';

interface CityDiscoveryProps {
  onSelectCityForPreview: (cityName: string) => void;
}

export const CityDiscovery: React.FC<CityDiscoveryProps> = ({ onSelectCityForPreview }) => {
  return (
    <section className="w-full py-16 md:py-24 bg-surface" id="destinations">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-margin">
        <div className="flex flex-col items-center text-center max-w-2xl mx-auto mb-10 sm:mb-12">
          <h2 className="font-headline-xl text-headline-xl-mobile md:text-headline-xl text-primary-container tracking-tight mb-3">
            Explore Destination Cities
          </h2>
          <p className="font-body-md text-sm sm:text-body-md text-on-surface-variant leading-relaxed mb-4">
            Whether moving for career growth, college, or a fresh start, discover the neighborhoods, regional diasporas, and sample communities waiting to welcome you.
          </p>
          <span className="inline-block px-3 py-1 rounded-full bg-surface-container-low text-[11px] sm:text-xs text-on-surface-variant">
            ● All statistics below represent demonstration data for platform showcase
          </span>
        </div>

        {/* 4 Cities Grid (Enhanced Luxury Bento Style) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {CITIES_DATA.map((city) => {
            const cityVibe =
              city.id === 'pune'
                ? '🌤️ 24°C · Cafes & Hills'
                : city.id === 'bengaluru'
                ? '☕ Tech Hub & Parks'
                : city.id === 'mumbai'
                ? '🌊 Sea Breeze & Ambition'
                : '🍛 Heritage & HITEC';

            return (
              <div
                key={city.id}
                onClick={() => onSelectCityForPreview(city.name)}
                className="group relative h-[380px] sm:h-[420px] rounded-3xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-500 cursor-pointer ring-1 ring-black/5 hover:ring-[#E8B978]/50 hover:-translate-y-2"
              >
                {/* Background image with smooth zoom */}
                <img
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
                  alt={city.name}
                  src={city.image}
                />
                
                {/* Multi-layered cinematic gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#102B27] via-[#102B27]/40 via-50% to-transparent" />
                <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-transparent opacity-80" />

                {/* Top Badges */}
                <div className="absolute top-4 left-4 right-4 flex flex-wrap items-center justify-between gap-1.5 sm:gap-2">
                  <span className="px-2.5 sm:px-3 py-1 rounded-full bg-surface-container-lowest/90 backdrop-blur-md text-primary-container font-label-caps text-[10px] sm:text-[11px] font-extrabold shadow-sm">
                    {city.accentBadge}
                  </span>
                  <span className="px-2 sm:px-2.5 py-1 rounded-full bg-black/40 backdrop-blur-md text-white font-label-sm text-[10px] sm:text-[11px] font-medium border border-white/10">
                    {cityVibe}
                  </span>
                </div>

                {/* Bottom Content */}
                <div className="absolute bottom-5 left-5 right-5 text-on-primary">
                  <span className="text-[10px] uppercase font-bold tracking-widest text-[#E8B978]">
                    {city.state}
                  </span>
                  <h3 className="font-headline-md text-2xl font-extrabold text-white mb-1 tracking-tight">
                    {city.name}
                  </h3>
                  <p className="text-xs text-[#D6E8CF] mb-3 font-medium">{city.tagline}</p>
                  
                  {/* Diaspora Preview */}
                  <div className="text-[11px] text-white/80 line-clamp-1 mb-3">
                    <span className="text-white/50">Diaspora: </span>
                    {city.topDiasporas.slice(0, 2).join(' · ')}
                  </div>

                  {/* Locality list & Action button */}
                  <div className="flex items-center justify-between text-xs text-outline-variant pt-3 border-t border-white/20">
                    <span className="text-white/80 truncate max-w-[150px]">
                      {city.popularLocalities.join(', ')}
                    </span>
                    <span className="inline-flex items-center gap-1 text-xs font-bold text-[#E8B978] group-hover:translate-x-1 transition-transform">
                      <span>Explore</span>
                      <span className="material-symbols-outlined text-sm">arrow_forward</span>
                    </span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
