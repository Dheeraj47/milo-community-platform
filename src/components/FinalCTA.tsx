import React from 'react';

interface FinalCTAProps {
  onJoinClick: () => void;
  onExploreCitiesClick: () => void;
}

export const FinalCTA: React.FC<FinalCTAProps> = ({ onJoinClick, onExploreCitiesClick }) => {
  return (
    <section className="w-full py-16 sm:py-20 md:py-28 bg-[#102B27] text-on-primary relative overflow-hidden" id="final-cta">
      {/* Ambient glowing radial backgrounds */}
      <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[45rem] h-[45rem] rounded-full bg-emerald-500/10 blur-3xl pointer-events-none" />
      <div className="absolute -bottom-24 right-1/4 w-[35rem] h-[35rem] rounded-full bg-[#E8B978]/10 blur-3xl pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-margin text-center relative z-10">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 text-tertiary-fixed-dim font-label-caps text-[10px] sm:text-label-caps tracking-widest uppercase mb-5 sm:mb-6 border border-white/10 shadow-xs">
          <span className="material-symbols-outlined text-xs">diversity_3</span>
          <span>COMMUNITY-POWERED SETTLEMENT</span>
        </div>

        <h2 className="font-display-hero text-2xl sm:text-headline-xl-mobile md:text-display-hero text-surface-container-lowest font-extrabold tracking-tight mb-4 sm:mb-6">
          A new city feels better when you belong.
        </h2>

        <p className="font-body-lg text-sm sm:text-body-lg text-outline-variant max-w-2xl mx-auto mb-8 sm:mb-10 leading-relaxed">
          Don’t spend your first weeks lost in unknown neighborhoods. Connect with people from your hometown who already found the best flats, authentic food, and warm friendships.
        </p>

        {/* Action Buttons: full-width stack on 320px, row on sm */}
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-3 sm:gap-4 mb-8 sm:mb-10 w-full sm:w-auto max-w-md mx-auto sm:max-w-none">
          <button
            type="button"
            onClick={onJoinClick}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 sm:px-8 py-3.5 sm:py-4 rounded-full bg-gradient-to-r from-[#E8B978] to-[#f0c58a] hover:from-[#dca961] hover:to-[#e4b574] text-[#102B27] font-label-md text-xs sm:text-sm font-extrabold transition-all shadow-[0_8px_28px_rgba(232,185,120,0.35)] hover:scale-105 cursor-pointer shimmer-btn"
          >
            <span>Join MILO Free</span>
            <span className="material-symbols-outlined text-base">arrow_forward</span>
          </button>
          <button
            type="button"
            onClick={onExploreCitiesClick}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 sm:px-7 py-3.5 sm:py-4 rounded-full bg-white/5 hover:bg-white/10 text-surface-container-lowest font-label-md text-xs sm:text-sm font-semibold transition-all border border-white/20 cursor-pointer backdrop-blur-sm"
          >
            <span className="material-symbols-outlined text-base">explore</span>
            <span>Explore Cities</span>
          </button>
        </div>

        {/* Member Trust Pile */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-3 mb-8 sm:mb-10">
          <div className="flex -space-x-2">
            <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-secondary-container text-[#102B27] flex items-center justify-center font-bold text-[10px] sm:text-xs ring-2 ring-[#102B27]">
              KA
            </div>
            <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-[#E8B978] text-[#102B27] flex items-center justify-center font-bold text-[10px] sm:text-xs ring-2 ring-[#102B27]">
              RJ
            </div>
            <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-white text-[#102B27] flex items-center justify-center font-bold text-[10px] sm:text-xs ring-2 ring-[#102B27]">
              MH
            </div>
          </div>
          <span className="text-[11px] sm:text-xs text-outline-variant font-medium">
            Over 14,200+ newcomers matched this year (Demo Metric)
          </span>
        </div>

        {/* Trust Badges Row */}
        <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-10 text-xs sm:text-sm text-outline-variant font-medium pt-6 sm:pt-8 border-t border-white/10">
          <div className="flex items-center gap-2">
            <span className="material-symbols-outlined text-[#E8B978] text-base">
              check_circle
            </span>
            <span>100% Free For Newcomers</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="material-symbols-outlined text-[#E8B978] text-base">
              verified_user
            </span>
            <span>Community Guidelines &amp; Peer Checks</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="material-symbols-outlined text-[#E8B978] text-base">
              real_estate_agent
            </span>
            <span>Zero Brokerage Philosophy</span>
          </div>
        </div>
      </div>
    </section>
  );
};
