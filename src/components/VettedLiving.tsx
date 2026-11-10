import React from 'react';
import { ACCOMMODATIONS_DATA } from '../data/mockData';
import type { AccommodationListing } from '../types';

interface VettedLivingProps {
  onSelectListing: (listing: AccommodationListing) => void;
}

export const VettedLiving: React.FC<VettedLivingProps> = ({ onSelectListing }) => {
  return (
    <section className="w-full py-16 md:py-24 bg-surface-container-low" id="vetted-living">
      <div className="max-w-7xl mx-auto px-margin">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <div>
            <div className="flex items-center gap-2 mb-2">
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
            <p className="font-body-md text-body-md text-on-surface-variant mt-2 max-w-xl">
              Demonstration accommodation previews. Direct tenant connections, zero broker fees, and lifestyle compatibility matching.
            </p>
          </div>
          <div className="flex items-center gap-3">
            <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-secondary-container text-on-secondary-fixed text-xs font-semibold">
              <span className="material-symbols-outlined text-xs">verified</span>
              <span>Zero Brokerage Philosophy</span>
            </span>
            <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-surface-container text-primary-container text-xs font-semibold">
              <span className="material-symbols-outlined text-xs">shield</span>
              <span>Community Guidelines (Demo)</span>
            </span>
          </div>
        </div>

        {/* 3 Housing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {ACCOMMODATIONS_DATA.map((listing) => (
            <div
              key={listing.id}
              className="bg-surface-container-lowest rounded-3xl overflow-hidden shadow-sm hover:shadow-lg transition-all flex flex-col justify-between"
            >
              <div>
                <div className="relative h-52 w-full overflow-hidden bg-surface-container">
                  <img
                    className="w-full h-full object-cover"
                    alt={listing.title}
                    src={listing.image}
                  />
                  <span className="absolute top-3 left-3 px-3 py-1 rounded-full bg-surface-container-lowest/90 backdrop-blur-sm text-primary-container font-label-caps text-xs font-bold">
                    {listing.tag}
                  </span>
                  <span className="absolute top-3 right-3 px-2.5 py-1 rounded-full bg-secondary-container text-on-secondary-fixed font-label-caps text-xs font-bold">
                    {listing.verifiedBadge}
                  </span>
                </div>
                <div className="p-6">
                  <div className="flex items-baseline justify-between mb-2">
                    <span className="font-headline-md text-headline-md text-primary-container">
                      ₹{listing.rentMonthly.toLocaleString()}
                      <span className="text-xs text-on-surface-variant font-normal"> / month</span>
                    </span>
                    <span className="font-label-sm text-xs text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-full font-semibold">
                      {listing.depositNote}
                    </span>
                  </div>
                  <h3 className="font-headline-sm text-base font-bold text-on-surface mb-1">
                    {listing.title}
                  </h3>
                  <p className="text-xs text-on-surface-variant mb-4">{listing.distanceNote}</p>
                  <div className="flex flex-wrap gap-2 text-xs text-on-surface-variant mb-4">
                    {listing.features.map((feat) => (
                      <span key={feat} className="px-2.5 py-1 rounded-lg bg-surface-container-low">
                        {feat}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
              <div className="p-6 pt-0">
                <button
                  type="button"
                  onClick={() => onSelectListing(listing)}
                  className="w-full py-2.5 rounded-full bg-surface-container-low hover:bg-primary-container hover:text-on-primary text-primary-container font-label-md text-xs font-semibold transition-colors flex items-center justify-center gap-1 cursor-pointer"
                >
                  <span>View Flat Details &amp; Connect</span>
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

