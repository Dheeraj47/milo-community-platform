import React from 'react';
import { ACCOMMODATIONS_DATA } from '../data/mockData';
import type { AccommodationListing } from '../types';

interface VettedLivingProps {
  onSelectListing: (listing: AccommodationListing) => void;
}

export const VettedLiving: React.FC<VettedLivingProps> = ({ onSelectListing }) => {
  return (
    <section className="w-full py-16 md:py-24 bg-surface-container-low" id="vetted-living">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-margin">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 sm:mb-12 gap-4">
          <div>
            <div className="flex flex-wrap items-center gap-2 mb-2">
              <span className="font-label-caps text-label-caps text-secondary font-bold tracking-widest uppercase">
                PEER-SHARED LIVING · DEMO
              </span>
              <span className="px-2 py-0.5 rounded-full bg-surface-container text-[11px] text-on-surface-variant font-medium">
                Sample Listings
              </span>
            </div>
            <h2 className="font-headline-xl text-headline-xl-mobile md:text-headline-xl text-primary-container tracking-tight">
              Fair Leases. Safe Neighborhoods.
            </h2>
            <p className="font-body-md text-sm sm:text-body-md text-on-surface-variant mt-2 max-w-xl leading-relaxed">
              Demonstration accommodation previews. Direct tenant connections, zero broker fees, and lifestyle compatibility matching.
            </p>
          </div>
          <div className="flex flex-wrap items-center gap-2 sm:gap-3 self-start md:self-auto">
            <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-secondary-container text-on-secondary-fixed text-xs font-semibold">
              <span className="material-symbols-outlined text-xs">verified</span>
              <span>Zero Brokerage Philosophy</span>
            </span>
            <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-surface-container text-primary-container text-xs font-semibold">
              <span className="material-symbols-outlined text-xs">shield</span>
              <span>Community Guidelines (Demo)</span>
            </span>
          </div>
        </div>

        {/* 3 Housing Cards (Enhanced Airbnb-Tier Modern Cards) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {ACCOMMODATIONS_DATA.map((listing) => (
            <div
              key={listing.id}
              className="bg-surface-container-lowest rounded-3xl overflow-hidden shadow-sm border border-outline-variant/30 hover:border-primary-container/20 hover:shadow-2xl hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                <div className="relative h-56 w-full overflow-hidden bg-surface-container">
                  <img
                    className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-500 ease-out"
                    alt={listing.title}
                    src={listing.image}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-60" />
                  <span className="absolute top-3 left-3 px-2.5 sm:px-3 py-1 rounded-full bg-surface-container-lowest/95 backdrop-blur-md text-primary-container font-label-caps text-[10px] sm:text-[11px] font-bold shadow-xs">
                    {listing.tag}
                  </span>
                  <span className="absolute top-3 right-3 px-2 sm:px-2.5 py-1 rounded-full bg-secondary-container/90 backdrop-blur-md text-on-secondary-fixed font-label-caps text-[10px] sm:text-[11px] font-bold border border-secondary/30">
                    {listing.verifiedBadge}
                  </span>
                  <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-white text-xs font-medium">
                    <span className="flex items-center gap-1">
                      <span className="material-symbols-outlined text-sm text-[#E8B978]">location_on</span>
                      <span>{listing.distanceNote}</span>
                    </span>
                  </div>
                </div>
                <div className="p-4 sm:p-6">
                  <div className="flex flex-wrap items-baseline justify-between gap-2 mb-2">
                    <span className="font-headline-md text-xl font-extrabold text-primary-container">
                      ₹{listing.rentMonthly.toLocaleString()}
                      <span className="text-xs text-on-surface-variant font-normal"> / month</span>
                    </span>
                    <span className="font-label-sm text-xs text-emerald-800 bg-emerald-100/70 px-2.5 py-0.5 rounded-full font-bold">
                      {listing.depositNote}
                    </span>
                  </div>
                  <h3 className="font-headline-sm text-base font-bold text-on-surface mb-2 group-hover:text-secondary transition-colors">
                    {listing.title}
                  </h3>
                  <div className="flex flex-wrap gap-1.5 text-xs text-on-surface-variant mb-4">
                    {listing.features.map((feat) => (
                      <span
                        key={feat}
                        className="px-2.5 py-1 rounded-lg bg-surface-container-low text-[11px] font-medium border border-outline-variant/20"
                      >
                        {feat}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
              <div className="p-4 sm:p-6 pt-0">
                <button
                  type="button"
                  onClick={() => onSelectListing(listing)}
                  className="w-full py-3 rounded-full bg-surface-container-low hover:bg-primary-container hover:text-on-primary text-primary-container font-label-md text-xs font-bold transition-all flex items-center justify-center gap-1.5 cursor-pointer border border-outline-variant/30 hover:border-transparent group-hover:shadow-md"
                >
                  <span>View Details &amp; Connect (Demo)</span>
                  <span className="material-symbols-outlined text-sm">arrow_forward</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

