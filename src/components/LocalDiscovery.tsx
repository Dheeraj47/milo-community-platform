import React from 'react';
import { LOCAL_SERVICES_DATA } from '../data/mockData';
import type { LocalService } from '../types';

interface LocalDiscoveryProps {
  onSelectService: (service: LocalService) => void;
}

export const LocalDiscovery: React.FC<LocalDiscoveryProps> = ({ onSelectService }) => {
  return (
    <section className="w-full py-16 md:py-24 bg-surface" id="local-discovery">
      <div className="max-w-7xl mx-auto px-margin">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="font-label-caps text-label-caps text-secondary font-bold tracking-widest uppercase">
                DAILY ESSENTIALS
              </span>
              <span className="px-2 py-0.5 rounded-full bg-surface-container text-[11px] text-on-surface-variant font-medium">
                Sample Community Providers
              </span>
            </div>
            <h2 className="font-headline-xl text-headline-xl-mobile md:text-headline-xl text-primary-container tracking-tight">
              Curated Tiffins, Commute &amp; Healthcare
            </h2>
            <p className="font-body-md text-body-md text-on-surface-variant mt-2 max-w-xl">
              Demonstration previews of everyday essentials: authentic regional home-style food, shared neighborhood transit, laundry care, and clinic contacts.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {LOCAL_SERVICES_DATA.map((service) => (
            <div
              key={service.id}
              onClick={() => onSelectService(service)}
              className="bg-surface-container-lowest p-6 rounded-3xl shadow-sm border border-outline-variant/30 flex flex-col justify-between hover:shadow-xl hover:border-primary-container/20 hover:-translate-y-1.5 transition-all duration-300 cursor-pointer group"
            >
              <div>
                <div
                  className={`w-14 h-14 rounded-2xl ${service.iconBgClass} flex items-center justify-center mb-4 transition-transform group-hover:scale-110 shadow-xs`}
                >
                  <span className="material-symbols-outlined text-2xl">{service.icon}</span>
                </div>
                <div className="flex items-center gap-1.5 mb-1.5">
                  <span className="text-xs font-extrabold text-amber-700 bg-amber-50 px-2 py-0.5 rounded-full border border-amber-200/50">
                    ★ {service.rating}
                  </span>
                  <span className="text-xs text-on-surface-variant font-medium">
                    ({service.reviewCountNote})
                  </span>
                </div>
                <h3 className="font-headline-sm text-base font-bold text-primary-container mb-1 group-hover:text-secondary transition-colors">
                  {service.name}
                </h3>
                <p className="text-xs text-on-surface-variant mb-4 leading-relaxed">
                  {service.description}
                </p>
              </div>
              <div className="pt-4 border-t border-surface-container flex items-center justify-between">
                <span className="text-xs font-bold text-primary-container">
                  {service.priceNote}
                </span>
                <span className="px-2.5 py-1 rounded-full bg-secondary-container text-on-secondary-fixed text-[10px] font-bold tracking-wide uppercase">
                  {service.badge}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

