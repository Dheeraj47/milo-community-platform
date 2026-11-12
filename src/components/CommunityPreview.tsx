import React from 'react';
import { COMMUNITY_MEMBERS } from '../data/mockData';
import type { CommunityMember } from '../types';

interface CommunityPreviewProps {
  onConnectClick: (member: CommunityMember) => void;
  onViewGuide: (member: CommunityMember) => void;
}

export const CommunityPreview: React.FC<CommunityPreviewProps> = ({
  onConnectClick,
  onViewGuide,
}) => {
  return (
    <section className="w-full py-16 md:py-24 bg-surface" id="mentor-discovery">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-margin">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 sm:mb-12 gap-4">
          <div>
            <div className="flex flex-wrap items-center gap-2 mb-2">
              <span className="font-label-caps text-label-caps text-secondary font-bold tracking-widest uppercase">
                COMMUNITY PEER ANCHORS
              </span>
              <span className="px-2 py-0.5 rounded-full bg-surface-container text-[11px] text-on-surface-variant font-medium">
                Demonstration Profiles
              </span>
            </div>
            <h2 className="font-headline-xl text-headline-xl-mobile md:text-headline-xl text-primary-container tracking-tight">
              Meet Mentors Who Walked Your Path
            </h2>
            <p className="font-body-md text-sm sm:text-body-md text-on-surface-variant mt-2 max-w-xl leading-relaxed">
              Sample profiles of professionals who relocated from their home state to offer practical guidance on neighborhood choices, domestic help, and settlement routines.
            </p>
          </div>
          <div className="flex items-center gap-2 self-start md:self-auto">
            <span className="font-label-sm text-xs text-on-surface-variant">
              Active mentors for:
            </span>
            <span className="px-3 py-1 rounded-full bg-secondary-container text-on-secondary-fixed font-label-md text-xs font-bold">
              Jaipur → Pune
            </span>
          </div>
        </div>

        {/* 3 Profile Cards (Enhanced Membership Passcard Style) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {COMMUNITY_MEMBERS.map((mentor) => (
            <div
              key={mentor.id}
              className="bg-surface-container-lowest rounded-3xl p-4 sm:p-6 lg:p-7 shadow-sm border border-outline-variant/30 flex flex-col justify-between hover:shadow-2xl hover:border-primary-container/25 hover:-translate-y-1.5 transition-all duration-300 group"
            >
              <div>
                <div className="flex items-start gap-3 sm:gap-4 mb-4">
                  <div className="relative w-14 h-14 sm:w-16 sm:h-16 rounded-full overflow-hidden shrink-0 bg-surface-variant ring-2 ring-primary-container/10 group-hover:ring-secondary transition-all">
                    <img
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                      alt={mentor.name}
                      src={mentor.avatar}
                    />
                    <span className="absolute bottom-0 right-0 w-3.5 h-3.5 sm:w-4 sm:h-4 rounded-full bg-emerald-600 ring-2 ring-surface-container-lowest flex items-center justify-center text-white text-[9px] font-bold">
                      ✓
                    </span>
                  </div>
                  <div className="min-w-0">
                    <div className="flex items-center gap-2">
                      <h3 className="font-headline-sm text-base font-extrabold text-primary-container truncate">
                        {mentor.name}
                      </h3>
                      <span className="inline-flex items-center text-[10px] sm:text-[11px] font-bold text-amber-600 bg-amber-50 px-1.5 py-0.2 rounded-full border border-amber-200/50 shrink-0">
                        ★ 4.9
                      </span>
                    </div>
                    <p className="font-body-sm text-xs text-on-surface-variant truncate">
                      {mentor.role} · {mentor.companyOrField}
                    </p>
                    <div className="mt-1.5 sm:mt-2">
                      <span className="inline-block px-2.5 sm:px-3 py-0.5 rounded-full bg-tertiary-fixed-dim/30 text-tertiary-container font-label-sm text-[10px] sm:text-[11px] font-bold truncate max-w-full">
                        {mentor.hometown} → {mentor.currentCity}
                      </span>
                    </div>
                  </div>
                </div>

                <div className="p-3 rounded-2xl bg-surface-container-low/70 mb-5 border border-outline-variant/20">
                  <p className="font-body-sm text-xs text-on-surface-variant italic leading-relaxed">
                    “{mentor.bio}”
                  </p>
                </div>

                <div className="mb-6">
                  <p className="font-label-caps text-[10px] text-on-surface-variant tracking-wider uppercase font-bold mb-2">
                    HAPPY TO HELP NEWCOMERS WITH:
                  </p>
                  <div className="flex flex-wrap gap-1.5">
                    {mentor.offeringHelpWith.map((help) => (
                      <span
                        key={help}
                        className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-secondary-container/70 text-on-secondary-fixed text-[11px] font-medium"
                      >
                        ✓ {help}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="pt-3.5 border-t border-surface-container flex flex-wrap items-center justify-between gap-2 text-xs text-on-surface-variant mb-6">
                  <span className="min-w-0">
                    <strong>Languages:</strong> {mentor.languages.join(', ')}
                  </span>
                  <span className="font-semibold text-primary-container text-[10px] sm:text-[11px] bg-surface-container px-2 py-0.5 rounded-full shrink-0">
                    Settled {mentor.monthsSettled} mos ago
                  </span>
                </div>
              </div>

              <div className="grid grid-cols-1 min-[360px]:grid-cols-2 gap-2 sm:gap-2.5">
                <button
                  type="button"
                  onClick={() => onConnectClick(mentor)}
                  className="py-2.5 px-3 rounded-full bg-primary-container hover:bg-[#183F39] text-on-primary font-label-sm text-xs font-bold flex items-center justify-center gap-1.5 transition-all shadow-xs cursor-pointer shimmer-btn"
                >
                  <span className="material-symbols-outlined text-sm text-tertiary-fixed-dim">chat</span>
                  <span>Say Hi 👋</span>
                </button>
                <button
                  type="button"
                  onClick={() => onViewGuide(mentor)}
                  className="py-2.5 px-3 rounded-full bg-surface-container hover:bg-surface-container-high text-primary-container font-label-sm text-xs font-semibold transition-colors cursor-pointer border border-outline-variant/30 text-center"
                >
                  Settlement Guide
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
