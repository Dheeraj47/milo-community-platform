import React, { useState } from 'react';
import { HOW_IT_WORKS_STEPS } from '../data/mockData';
import { ArrowRight, Sparkles } from 'lucide-react';

interface HowItWorksProps {
  onGetStartedClick: () => void;
}

export const HowItWorks: React.FC<HowItWorksProps> = ({ onGetStartedClick }) => {
  const [activeStep, setActiveStep] = useState(0);

  return (
    <section
      id="how-it-works"
      style={{
        padding: '6rem 0',
        backgroundColor: '#FFFFFF',
        borderTop: '1px solid #E8E9E3',
        borderBottom: '1px solid #E8E9E3',
      }}
    >
      <div className="section-wrapper">
        {/* Section Header */}
        <div className="section-center">
          <div className="section-badge">
            <Sparkles size={14} color="#102B27" />
            <span>Three Simple Steps</span>
          </div>
          <h2 className="section-title">How MILO Works</h2>
          <p className="section-subtitle">
            Relocating without a support network feels daunting. MILO replaces guesswork with trusted hometown connections, safe accommodation, and familiar food.
          </p>
        </div>

        {/* Steps Grid */}
        <div className="steps-container">
          {HOW_IT_WORKS_STEPS.map((step, idx) => {
            const isSelected = activeStep === idx;
            return (
              <div
                key={step.stepNumber}
                onClick={() => setActiveStep(idx)}
                className="step-card"
                style={{
                  backgroundColor: isSelected ? '#F7F5EF' : '#FFFFFF',
                  borderRadius: '24px',
                  padding: '2.25rem 2rem',
                  border: `1.5px solid ${isSelected ? '#102B27' : '#E8E9E3'}`,
                  boxShadow: isSelected
                    ? '0 16px 36px rgba(16, 43, 39, 0.09)'
                    : '0 2px 8px rgba(16, 43, 39, 0.03)',
                  transition: 'all 0.25s ease',
                  cursor: 'pointer',
                  display: 'flex',
                  flexDirection: 'column',
                  position: 'relative',
                }}
              >
                {/* Step Number Top Row */}
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    marginBottom: '1.25rem',
                  }}
                >
                  <span
                    style={{
                      fontFamily: "'Manrope', sans-serif",
                      fontSize: '1.75rem',
                      fontWeight: 800,
                      color: isSelected ? '#102B27' : '#CBD4C9',
                    }}
                  >
                    {step.stepNumber}
                  </span>
                  <span
                    style={{
                      fontSize: '0.75rem',
                      fontWeight: 700,
                      textTransform: 'uppercase',
                      padding: '0.25rem 0.65rem',
                      borderRadius: '9999px',
                      backgroundColor: isSelected ? '#D6E8CF' : '#F7F5EF',
                      color: '#102B27',
                      border: '1px solid',
                      borderColor: isSelected ? '#C4DCBB' : '#E8E9E3',
                    }}
                  >
                    {step.badge}
                  </span>
                </div>

                {/* Step Title & Subtitle */}
                <h3
                  style={{
                    fontFamily: "'Manrope', sans-serif",
                    fontSize: '1.35rem',
                    fontWeight: 700,
                    color: '#102B27',
                    marginBottom: '0.5rem',
                    lineHeight: 1.3,
                  }}
                >
                  {step.title}
                </h3>
                <div
                  style={{
                    fontSize: '0.85rem',
                    fontWeight: 600,
                    color: '#8c5b16',
                    marginBottom: '1rem',
                  }}
                >
                  {step.subtitle}
                </div>

                {/* Step Description */}
                <p
                  style={{
                    fontSize: '0.925rem',
                    color: '#536460',
                    lineHeight: 1.6,
                    marginBottom: '1.5rem',
                    flex: 1,
                  }}
                >
                  {step.description}
                </p>

                {/* Visual Pill Showcase for Step */}
                <div
                  style={{
                    backgroundColor: '#FFFFFF',
                    borderRadius: '14px',
                    padding: '1rem',
                    border: '1px solid #E8E9E3',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '0.5rem',
                  }}
                >
                  <div
                    style={{
                      fontSize: '0.72rem',
                      fontWeight: 700,
                      color: '#26332F',
                      textTransform: 'uppercase',
                      letterSpacing: '0.04em',
                    }}
                  >
                    {idx === 0
                      ? 'Sample Profile Input'
                      : idx === 1
                      ? 'Instant Discovery Matches'
                      : 'Settled Life Outcome'}
                  </div>

                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem' }}>
                    {step.tags.map((tag) => (
                      <span
                        key={tag}
                        style={{
                          fontSize: '0.78rem',
                          fontWeight: 500,
                          padding: '0.25rem 0.6rem',
                          borderRadius: '6px',
                          backgroundColor: isSelected ? '#EBF4E7' : '#F7F5EF',
                          color: '#102B27',
                          border: '1px solid #D6E8CF',
                        }}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Interactive Demonstration Banner */}
        <div
          style={{
            marginTop: '3.5rem',
            backgroundColor: '#102B27',
            borderRadius: '24px',
            padding: '2rem 2.5rem',
            color: '#F7F5EF',
            display: 'flex',
            flexDirection: 'column',
            gap: '1.25rem',
          }}
          className="how-it-works-highlight"
        >
          <div
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              alignItems: 'center',
              justifyContent: 'space-between',
              gap: '1.5rem',
            }}
          >
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.4rem' }}>
                <span
                  style={{
                    backgroundColor: '#E8B978',
                    color: '#102B27',
                    fontWeight: 700,
                    fontSize: '0.75rem',
                    padding: '0.2rem 0.6rem',
                    borderRadius: '999px',
                  }}
                >
                  Case Study
                </span>
                <span style={{ fontSize: '0.85rem', color: '#D6E8CF' }}>
                  The Jaipur → Pune Relocation Experience
                </span>
              </div>
              <h3
                style={{
                  fontFamily: "'Manrope', sans-serif",
                  fontSize: '1.4rem',
                  fontWeight: 700,
                  color: '#FFFFFF',
                  marginBottom: '0.35rem',
                }}
              >
                "Within 3 days of landing in Pune, I had 5 friends from Rajasthan and a zero-brokerage PG."
              </h3>
              <p style={{ fontSize: '0.875rem', color: '#D6E8CF', maxWidth: '720px' }}>
                When Aarav moved to Pune for a design role, MILO instantly introduced him to fellow Jaipurites in Viman Nagar who shared authentic tiffin leads and flatmate vacancies.
              </p>
            </div>

            <button
              type="button"
              onClick={onGetStartedClick}
              className="btn btn-amber"
              style={{ padding: '0.85rem 1.75rem', whiteSpace: 'nowrap' }}
            >
              Start Your Settlement <ArrowRight size={16} />
            </button>
          </div>
        </div>
      </div>

      <style>{`
        .steps-container {
          display: grid;
          grid-template-columns: 1fr;
          gap: 1.5rem;
        }

        @media (min-width: 900px) {
          .steps-container {
            grid-template-columns: repeat(3, 1fr);
          }
        }
      `}</style>
    </section>
  );
};

