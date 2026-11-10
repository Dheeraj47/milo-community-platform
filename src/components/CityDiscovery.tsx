import React from 'react';
import { CITIES_DATA } from '../data/mockData';

interface CityDiscoveryProps {
  onSelectCityForPreview: (cityName: string) => void;
}

export const CityDiscovery: React.FC<CityDiscoveryProps> = ({ onSelectCityForPreview }) => {
  return (
    <section className="w-full py-16 md:py-24 bg-surface" id="destinations">
      <div className="max-w-7xl mx-auto px-margin">
        <div className="flex flex-col items-center text-center max-w-2xl mx-auto mb-12">
          <h2 className="font-headline-xl text-headline-xl-mobile md:text-headline-xl text-primary-container tracking-tight mb-3">
            Explore Destination Cities
          </h2>
          <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed mb-4">
            Whether moving for career growth, college, or a fresh start, discover the neighborhoods, regional diasporas, and sample communities waiting to welcome you.
          </p>
          <span className="inline-block px-3 py-1 rounded-full bg-surface-container-low text-xs text-on-surface-variant">
            ● All statistics below represent demonstration data for platform showcase
          </span>
        </div>

        {/* 4 Cities Grid (Matching Stitch Style) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {CITIES_DATA.map((city) => (
            <div
              key={city.id}
              onClick={() => onSelectCityForPreview(city.name)}
              className="group relative h-96 rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all cursor-pointer"
            >
              <img
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                alt={city.name}
                src={city.image}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary-container via-primary-container/30 to-transparent" />
              <div className="absolute top-4 left-4">
                <span className="px-3 py-1 rounded-full bg-surface-container-lowest/90 backdrop-blur-sm text-primary-container font-label-caps text-xs font-bold shadow-xs">
                  {city.accentBadge}
                </span>
              </div>
              <div className="absolute bottom-5 left-5 right-5 text-on-primary">
                <h3 className="font-headline-md text-headline-md font-extrabold text-white mb-1">
                  {city.name}
                </h3>
                <p className="text-xs text-primary-fixed mb-3">{city.tagline}</p>
                <div className="flex items-center justify-between text-xs text-outline-variant pt-2 border-t border-white/15">
                  <span>{city.popularLocalities.join(', ')}</span>
                  <span className="font-bold text-tertiary-fixed-dim">→</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
