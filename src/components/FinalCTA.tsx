import React from 'react';

interface FinalCTAProps {
  onJoinClick: () => void;
  onExploreCitiesClick: () => void;
}

export const FinalCTA: React.FC<FinalCTAProps> = ({ onJoinClick, onExploreCitiesClick }) => {
  return (
    <section className="w-full py-20 md:py-28 bg-[#102B27] text-on-primary relative overflow-hidden" id="final-cta">
      {/* Ambient circle background */}
      <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[40rem] h-[40rem] rounded-full bg-white/5 blur-3xl pointer-events-none" />

      <div className="max-w-4xl mx-auto px-margin text-center relative z-10">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 text-tertiary-fixed-dim font-label-caps text-label-caps tracking-widest uppercase mb-6">
          <span className="material-symbols-outlined text-xs">diversity_3</span>
          <span>COMMUNITY-POWERED SETTLEMENT</span>
        </div>

        <h2 className="font-display-hero text-headline-xl-mobile md:text-display-hero text-surface-container-lowest font-extrabold tracking-tight mb-6">
          A new city feels better when you belong.
        </h2>

        <p className="font-body-lg text-body-lg text-outline-variant max-w-2xl mx-auto mb-10 leading-relaxed">
          Don’t spend your first weeks lost in unknown neighborhoods. Connect with people from your hometown who already found the best flats, authentic food, and warm friendships.
        </p>

        <div className="flex flex-wrap items-center justify-center gap-4 mb-12">
          <button
            type="button"
            onClick={onJoinClick}
            className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-[#E8B978] hover:bg-[#dca961] text-[#102B27] font-label-md text-label-md font-bold transition-all shadow-lg hover:scale-105 cursor-pointer"
          >
            <span>Join MILO</span>
            <span className="material-symbols-outlined text-base">arrow_forward</span>
          </button>
          <button
            type="button"
            onClick={onExploreCitiesClick}
            className="inline-flex items-center justify-center gap-2 px-7 py-4 rounded-full bg-transparent hover:bg-white/10 text-surface-container-lowest font-label-md text-label-md transition-all border border-white/20 cursor-pointer"
          >
            <span className="material-symbols-outlined text-base">explore</span>
            <span>Explore Cities</span>
          </button>
        </div>

        {/* Trust Badges Row (Screenshot 6 exact layout) */}
        <div className="flex flex-wrap items-center justify-center gap-6 sm:gap-10 text-xs sm:text-sm text-outline-variant font-medium pt-8 border-t border-white/10">
          <div className="flex items-center gap-2">
            <span className="material-symbols-outlined text-tertiary-fixed-dim text-base">
              check_circle
            </span>
            <span>100% Free For Newcomers</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="material-symbols-outlined text-tertiary-fixed-dim text-base">
              verified_user
            </span>
            <span>Community Guidelines &amp; Peer Checks</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="material-symbols-outlined text-tertiary-fixed-dim text-base">
              real_estate_agent
            </span>
            <span>Zero Brokerage Philosophy</span>
          </div>
        </div>
      </div>
    </section>
  );
};
