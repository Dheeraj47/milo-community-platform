import React from 'react';

export const TrustSafety: React.FC = () => {
  return (
    <section className="w-full py-16 md:py-24 bg-primary-container text-on-primary" id="trust-safety">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-margin">
        <div className="flex flex-col items-center text-center max-w-2xl mx-auto mb-12 sm:mb-16">
          <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-tertiary-fixed-dim font-label-caps text-[10px] sm:text-label-caps tracking-widest uppercase mb-3">
            <span className="material-symbols-outlined text-xs">shield_with_heart</span>
            <span>SAFETY &amp; INTEGRITY · PROTOTYPE FRAMEWORK</span>
          </span>
          <h2 className="font-headline-xl text-headline-xl-mobile md:text-headline-xl text-surface-container-lowest tracking-tight mb-4">
            Community Safety &amp; Privacy Framework
          </h2>
          <p className="font-body-lg text-sm sm:text-body-lg text-outline-variant leading-relaxed">
            Moving to an unfamiliar city should feel exciting, never hazardous. We enforce community guidelines, privacy protection, and mutual consent at every layer of user connection.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {/* Pillar 1 */}
          <div className="p-5 sm:p-7 rounded-3xl bg-white/[0.05] backdrop-blur-md border border-white/10 hover:border-[#D6E8CF]/40 hover:bg-white/[0.08] hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between group">
            <div>
              <div className="w-14 h-14 rounded-2xl bg-white/10 border border-white/15 flex items-center justify-center text-[#E8B978] mb-5 group-hover:scale-110 transition-transform">
                <span className="material-symbols-outlined text-2xl">badge</span>
              </div>
              <h3 className="font-headline-sm text-lg font-bold text-surface-container-lowest mb-2.5">
                Identity &amp; Profile Guidelines
              </h3>
              <p className="font-body-sm text-xs text-outline-variant leading-relaxed">
                Community mentors and room applicants submit profile credentials and professional background before joining local circles (Prototype Design).
              </p>
            </div>
            <div className="mt-6 pt-3.5 border-t border-white/10 text-xs text-[#E8B978] font-bold flex items-center justify-between">
              <span>Review Standards</span>
              <span className="material-symbols-outlined text-sm">shield</span>
            </div>
          </div>

          {/* Pillar 2 */}
          <div className="p-5 sm:p-7 rounded-3xl bg-white/[0.05] backdrop-blur-md border border-white/10 hover:border-[#D6E8CF]/40 hover:bg-white/[0.08] hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between group">
            <div>
              <div className="w-14 h-14 rounded-2xl bg-white/10 border border-white/15 flex items-center justify-center text-[#E8B978] mb-5 group-hover:scale-110 transition-transform">
                <span className="material-symbols-outlined text-2xl">visibility_off</span>
              </div>
              <h3 className="font-headline-sm text-lg font-bold text-surface-container-lowest mb-2.5">
                Privacy First Masking
              </h3>
              <p className="font-body-sm text-xs text-outline-variant leading-relaxed">
                Phone numbers, email addresses, and personal handles stay protected. Both sides must explicitly accept a connection request to chat.
              </p>
            </div>
            <div className="mt-6 pt-3.5 border-t border-white/10 text-xs text-[#E8B978] font-bold flex items-center justify-between">
              <span>Consent Gateways</span>
              <span className="material-symbols-outlined text-sm">lock</span>
            </div>
          </div>

          {/* Pillar 3 */}
          <div className="p-5 sm:p-7 rounded-3xl bg-white/[0.05] backdrop-blur-md border border-white/10 hover:border-[#D6E8CF]/40 hover:bg-white/[0.08] hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between group">
            <div>
              <div className="w-14 h-14 rounded-2xl bg-white/10 border border-white/15 flex items-center justify-center text-[#E8B978] mb-5 group-hover:scale-110 transition-transform">
                <span className="material-symbols-outlined text-2xl">timer</span>
              </div>
              <h3 className="font-headline-sm text-lg font-bold text-surface-container-lowest mb-2.5">
                Moderation Protocol
              </h3>
              <p className="font-body-sm text-xs text-outline-variant leading-relaxed">
                Community leads review reports regarding spam, misleading listings, or unprofessional conduct following structured safety procedures.
              </p>
            </div>
            <div className="mt-6 pt-3.5 border-t border-white/10 text-xs text-[#E8B978] font-bold flex items-center justify-between">
              <span>Redressal System</span>
              <span className="material-symbols-outlined text-sm">verified_user</span>
            </div>
          </div>

          {/* Pillar 4 */}
          <div className="p-5 sm:p-7 rounded-3xl bg-white/[0.05] backdrop-blur-md border border-white/10 hover:border-[#D6E8CF]/40 hover:bg-white/[0.08] hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between group">
            <div>
              <div className="w-14 h-14 rounded-2xl bg-white/10 border border-white/15 flex items-center justify-center text-[#E8B978] mb-5 group-hover:scale-110 transition-transform">
                <span className="material-symbols-outlined text-2xl">storefront</span>
              </div>
              <h3 className="font-headline-sm text-lg font-bold text-surface-container-lowest mb-2.5">
                Public Meetup Spaces
              </h3>
              <p className="font-body-sm text-xs text-outline-variant leading-relaxed">
                Recommended popular, well-lit public cafes in each neighborhood to facilitate comfortable first encounters with potential flatmates.
              </p>
            </div>
            <div className="mt-6 pt-3.5 border-t border-white/10 text-xs text-[#E8B978] font-bold flex items-center justify-between">
              <span>Partnered Cafes</span>
              <span className="material-symbols-outlined text-sm">local_cafe</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

