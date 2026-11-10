import React, { useState } from 'react';
import { FAQ_DATA } from '../data/mockData';

export const FAQSection: React.FC = () => {
  const [openIds, setOpenIds] = useState<string[]>(['faq-1']);

  const toggleFAQ = (id: string) => {
    setOpenIds((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  return (
    <section className="w-full py-16 md:py-24 bg-surface-container-low" id="faq-section">
      <div className="max-w-4xl mx-auto px-margin">
        <div className="flex flex-col items-center text-center mb-12">
          <span className="font-label-caps text-label-caps text-secondary font-bold tracking-widest uppercase mb-2">
            COMMON QUESTIONS
          </span>
          <h2 className="font-headline-xl text-headline-xl-mobile md:text-headline-xl text-primary-container tracking-tight">
            Frequently Asked Questions
          </h2>
          <p className="font-body-md text-body-md text-on-surface-variant mt-2">
            Everything you need to know about navigating MILO as a newcomer or peer mentor.
          </p>
        </div>

        <div className="flex flex-col gap-3.5">
          {FAQ_DATA.map((faq) => {
            const isOpen = openIds.includes(faq.id);
            return (
              <div
                key={faq.id}
                className={`bg-surface-container-lowest p-6 rounded-2xl transition-all duration-300 border ${
                  isOpen
                    ? 'border-secondary shadow-md'
                    : 'border-outline-variant/30 hover:border-outline-variant hover:shadow-xs'
                }`}
              >
                <button
                  type="button"
                  onClick={() => toggleFAQ(faq.id)}
                  className="w-full flex items-center justify-between cursor-pointer font-headline-sm text-base text-primary-container font-bold text-left gap-4"
                >
                  <span>{faq.question}</span>
                  <span
                    className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-all duration-300 ${
                      isOpen
                        ? 'bg-primary-container text-on-primary rotate-180'
                        : 'bg-surface-container text-primary-container'
                    }`}
                  >
                    <span className="material-symbols-outlined text-lg">expand_more</span>
                  </span>
                </button>
                {isOpen && (
                  <div className="pt-4 text-on-surface-variant font-body-md text-sm leading-relaxed border-t border-surface-container mt-4 animate-fade-in">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

