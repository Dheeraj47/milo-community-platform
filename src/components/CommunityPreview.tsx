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
      <div className="max-w-7xl mx-auto px-margin">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <div>
            <div className="flex items-center gap-2 mb-2">
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
            <p className="font-body-md text-body-md text-on-surface-variant mt-2 max-w-xl">
              Sample profiles of professionals who relocated from their home state to offer practical guidance on neighborhood choices, domestic help, and settlement routines.
            </p>
          </div>
          <div className="flex items-center gap-2">
            <span className="font-label-sm text-label-sm text-on-surface-variant">
              Showing active mentors for:
            </span>
            <span className="px-3 py-1 rounded-full bg-secondary-container text-on-secondary-fixed font-label-md text-xs font-bold">
              Jaipur → Pune
            </span>
          </div>
        </div>

        {/* 3 Profile Cards (Matching Stitch design) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {COMMUNITY_MEMBERS.map((mentor) => (
            <div
              key={mentor.id}
              className="bg-surface-container-lowest rounded-3xl p-6 shadow-sm flex flex-col justify-between hover:shadow-lg transition-all group"
            >
              <div>
                <div className="flex items-start gap-4 mb-4">
                  <div className="relative w-14 h-14 rounded-full overflow-hidden shrink-0 bg-surface-variant">
                    <img
                      className="w-full h-full object-cover"
                      alt={mentor.name}
                      src={mentor.avatar}
                    />
                    <span className="absolute bottom-0 right-0 w-4 h-4 rounded-full bg-emerald-600 ring-2 ring-surface-container-lowest flex items-center justify-center text-white text-[9px]">
                      ✓
                    </span>
                  </div>
                  <div className="min-w-0">
                    <h3 className="font-headline-sm text-headline-sm text-primary-container">
                      {mentor.name}
                    </h3>
                    <p className="font-body-sm text-xs text-on-surface-variant truncate">
                      {mentor.role} · {mentor.companyOrField}
                    </p>
                    <div className="mt-2">
                      <span className="inline-block px-3 py-1 rounded-full bg-tertiary-fixed-dim/30 text-tertiary-container font-label-sm text-xs font-semibold">
                        {mentor.hometown} → {mentor.currentCity} ({mentor.neighborhood})
                      </span>
                    </div>
                  </div>
                </div>

                <p className="font-body-sm text-body-sm text-on-surface-variant italic mb-6 leading-relaxed">
                  “{mentor.bio}”
                </p>

                <div className="mb-6">
                  <p className="font-label-caps text-[10px] text-on-surface-variant tracking-wider uppercase font-bold mb-2.5">
                    HAPPY TO HELP NEWCOMERS WITH:
                  </p>
                  <div className="flex flex-wrap gap-1.5">
                    {mentor.offeringHelpWith.map((help) => (
                      <span
                        key={help}
                        className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-secondary-container/70 text-on-secondary-fixed text-xs font-medium"
                      >
                        ✓ {help}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="pt-4 border-t border-surface-container flex items-center justify-between text-xs text-on-surface-variant mb-6">
                  <span>
                    <strong>Languages:</strong> {mentor.languages.join(', ')}
                  </span>
                  <span className="font-semibold text-primary-container">
                    Settled {mentor.monthsSettled} mos ago
                  </span>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-2">
                <button
                  type="button"
                  onClick={() => onConnectClick(mentor)}
                  className="py-2.5 px-3 rounded-full bg-primary-container hover:bg-[#203c37] text-on-primary font-label-sm text-xs flex items-center justify-center gap-1.5 transition-colors cursor-pointer"
                >
                  <span className="material-symbols-outlined text-sm">chat</span>
                  <span>Say Hi / Connect</span>
                </button>
                <button
                  type="button"
                  onClick={() => onViewGuide(mentor)}
                  className="py-2.5 px-3 rounded-full bg-surface-container hover:bg-surface-container-high text-primary-container font-label-sm text-xs transition-colors cursor-pointer"
                >
                  Guide Profile
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
