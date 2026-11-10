import React from 'react';
import { HOW_IT_WORKS_STEPS } from '../data/mockData';

export const HowItWorks: React.FC = () => {
  return (
    <section id="how-it-works" className="w-full py-16 md:py-24 bg-surface-container-low">
      <div className="max-w-7xl mx-auto px-margin">
        <div className="flex flex-col items-center text-center max-w-2xl mx-auto mb-16">
          <span className="font-label-caps text-label-caps text-secondary font-bold tracking-widest uppercase mb-3">
            HOW MILO WORKS
          </span>
          <h2 className="font-headline-xl text-headline-xl-mobile md:text-headline-xl text-on-surface tracking-tight mb-4">
            The Settler’s Blueprint
          </h2>
          <p className="font-body-lg text-body-lg text-on-surface-variant leading-relaxed">
            Relocating without a support network feels daunting. MILO replaces guesswork with trusted hometown connections, safe accommodation, and familiar food.
          </p>
        </div>

        <div className="relative">
          {/* Subtle connecting line across cards on desktop */}
          <div className="hidden lg:block absolute top-1/2 left-16 right-16 h-0.5 border-t border-dashed border-outline-variant/50 pointer-events-none z-0" />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 relative z-10">
            {HOW_IT_WORKS_STEPS.map((step, idx) => (
              <div
                key={step.stepNumber}
                className="bg-surface-container-lowest p-8 rounded-3xl shadow-sm border border-outline-variant/20 flex flex-col justify-between hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 group"
              >
                <div>
                  <div className="flex items-center justify-between mb-8">
                    <div className="w-12 h-12 rounded-2xl bg-secondary-container/60 text-primary-container flex items-center justify-center font-display-hero text-xl font-bold group-hover:scale-110 transition-transform">
                      0{idx + 1}
                    </div>
                    <span className="px-3 py-1 rounded-full bg-surface-container text-on-surface-variant font-label-caps text-label-caps tracking-wider font-semibold border border-outline-variant/20">
                      {step.badge}
                    </span>
                  </div>
                  <h3 className="font-headline-md text-headline-md text-primary-container mb-2 group-hover:text-secondary transition-colors">
                    {step.title}
                  </h3>
                  <p className="font-label-md text-label-md text-on-tertiary-container mb-4 font-semibold">
                    {step.subtitle}
                  </p>
                  <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
                    {step.description}
                  </p>
                </div>
                <div className="mt-8 pt-4 flex items-center gap-2 text-secondary font-label-sm text-label-sm border-t border-surface-container">
                  <span className="material-symbols-outlined text-base">{step.footerIcon}</span>
                  <span className="font-medium">{step.footerText}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
