import React, { useState } from 'react';
import { FOUR_PILLARS } from '../data/mockData';
import { Users, Home, UtensilsCrossed, Sparkles, Check, ArrowRight, Quote } from 'lucide-react';

interface CorePillarsProps {
  onSelectPillarAction: (pillarId: string) => void;
}

export const CorePillars: React.FC<CorePillarsProps> = ({ onSelectPillarAction }) => {
  const [activeTab, setActiveTab] = useState<string>('community');

  const getPillarIcon = (id: string) => {
    switch (id) {
      case 'community':
        return <Users size={24} color="#102B27" />;
      case 'living':
        return <Home size={24} color="#102B27" />;
      case 'local-discovery':
        return <UtensilsCrossed size={24} color="#102B27" />;
      case 'connections':
      default:
        return <Sparkles size={24} color="#102B27" />;
    }
  };

  const selectedPillar = FOUR_PILLARS.find((p) => p.id === activeTab) || FOUR_PILLARS[0];

  return (
    <section
      id="pillars"
      style={{
        padding: '6rem 0',
        backgroundColor: '#F7F5EF',
      }}
    >
      <div className="section-wrapper">
        {/* Section Header */}
        <div className="section-center">
          <div className="section-badge">
            <Sparkles size={14} color="#102B27" />
            <span>The Four Pillars</span>
          </div>
          <h2 className="section-title">Everything You Need to Feel Settled</h2>
          <p className="section-subtitle">
            Relocating goes far beyond shipping boxes. MILO is built on four core pillars engineered to restore your social safety net, housing peace, and daily comforts.
          </p>
        </div>

        {/* 4 Interactive Selector Tabs */}
        <div className="pillars-nav-tabs">
          {FOUR_PILLARS.map((pillar) => {
            const isActive = activeTab === pillar.id;
            return (
              <button
                key={pillar.id}
                type="button"
                onClick={() => setActiveTab(pillar.id)}
                className="pillar-tab-btn"
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.75rem',
                  padding: '1rem 1.25rem',
                  borderRadius: '16px',
                  backgroundColor: isActive ? '#102B27' : '#FFFFFF',
                  color: isActive ? '#F7F5EF' : '#26332F',
                  border: `1.5px solid ${isActive ? '#102B27' : '#E8E9E3'}`,
                  boxShadow: isActive ? '0 8px 24px rgba(16, 43, 39, 0.15)' : 'none',
                  transition: 'all 0.2s ease',
                  textAlign: 'left',
                }}
              >
                <div
                  style={{
                    width: '38px',
                    height: '38px',
                    borderRadius: '10px',
                    backgroundColor: isActive ? '#D6E8CF' : '#F7F5EF',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0,
                  }}
                >
                  {getPillarIcon(pillar.id)}
                </div>
                <div>
                  <div
                    style={{
                      fontFamily: "'Manrope', sans-serif",
                      fontWeight: 700,
                      fontSize: '1rem',
                      color: isActive ? '#FFFFFF' : '#102B27',
                    }}
                  >
                    {pillar.title}
                  </div>
                  <div
                    style={{
                      fontSize: '0.75rem',
                      color: isActive ? '#D6E8CF' : '#536460',
                    }}
                  >
                    {pillar.metric} Active
                  </div>
                </div>
              </button>
            );
          })}
        </div>

        {/* Active Pillar Featured Display */}
        <div
          style={{
            backgroundColor: '#FFFFFF',
            borderRadius: '28px',
            border: '1.5px solid #E8E9E3',
            boxShadow: '0 16px 40px rgba(16, 43, 39, 0.07)',
            padding: '2.5rem',
            marginTop: '2rem',
          }}
          className="pillar-featured-card"
        >
          <div className="pillar-detail-grid">
            {/* Left Pillar Deep Dive */}
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.75rem' }}>
                <span className="tag-pill sage">Pillar 0{FOUR_PILLARS.indexOf(selectedPillar) + 1}</span>
                <span className="tag-pill amber">{selectedPillar.metricLabel}</span>
              </div>

              <h3
                style={{
                  fontFamily: "'Manrope', sans-serif",
                  fontSize: 'clamp(1.75rem, 3vw, 2.25rem)',
                  fontWeight: 800,
                  color: '#102B27',
                  lineHeight: 1.2,
                  marginBottom: '0.85rem',
                }}
              >
                {selectedPillar.tagline}
              </h3>

              <p
                style={{
                  fontSize: '1.025rem',
                  color: '#536460',
                  lineHeight: 1.65,
                  marginBottom: '1.75rem',
                }}
              >
                {selectedPillar.description}
              </p>

              {/* Highlights Check List */}
              <div
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '0.75rem',
                  marginBottom: '2rem',
                }}
              >
                {selectedPillar.highlights.map((highlight) => (
                  <div
                    key={highlight}
                    style={{
                      display: 'flex',
                      alignItems: 'flex-start',
                      gap: '0.75rem',
                    }}
                  >
                    <div
                      style={{
                        width: '20px',
                        height: '20px',
                        borderRadius: '50%',
                        backgroundColor: '#D6E8CF',
                        color: '#102B27',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        flexShrink: 0,
                        marginTop: '2px',
                      }}
                    >
                      <Check size={13} strokeWidth={3} />
                    </div>
                    <span style={{ fontSize: '0.925rem', color: '#26332F', fontWeight: 500 }}>
                      {highlight}
                    </span>
                  </div>
                ))}
              </div>

              <button
                type="button"
                onClick={() => onSelectPillarAction(selectedPillar.id)}
                className="btn btn-primary"
                style={{ padding: '0.85rem 1.85rem' }}
              >
                Explore {selectedPillar.title} Features <ArrowRight size={16} />
              </button>
            </div>

            {/* Right Pillar Visual Showcase: Feature Cards & Testimonial */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
              {/* Feature Chips */}
              <div
                style={{
                  backgroundColor: '#F7F5EF',
                  borderRadius: '20px',
                  padding: '1.5rem',
                  border: '1px solid #E8E9E3',
                }}
              >
                <div
                  style={{
                    fontSize: '0.75rem',
                    fontWeight: 700,
                    textTransform: 'uppercase',
                    color: '#102B27',
                    letterSpacing: '0.04em',
                    marginBottom: '1rem',
                  }}
                >
                  Core Platform Capabilities
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.85rem' }}>
                  {selectedPillar.sampleFeatures.map((feat) => (
                    <div
                      key={feat.label}
                      style={{
                        backgroundColor: '#FFFFFF',
                        borderRadius: '12px',
                        padding: '0.85rem 1rem',
                        border: '1px solid #E8E9E3',
                      }}
                    >
                      <div
                        style={{
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'space-between',
                          marginBottom: '0.2rem',
                        }}
                      >
                        <span style={{ fontSize: '0.9rem', fontWeight: 700, color: '#102B27' }}>
                          {feat.label}
                        </span>
                        <span className="tag-pill sage" style={{ fontSize: '0.7rem' }}>
                          {feat.tag}
                        </span>
                      </div>
                      <p style={{ fontSize: '0.8rem', color: '#536460', margin: 0 }}>
                        {feat.description}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Quote Card */}
              <div
                style={{
                  backgroundColor: '#102B27',
                  borderRadius: '20px',
                  padding: '1.5rem',
                  color: '#F7F5EF',
                  border: '1px solid #26332F',
                }}
              >
                <div style={{ display: 'flex', gap: '0.5rem', marginBottom: '0.65rem', color: '#E8B978' }}>
                  <Quote size={20} />
                </div>
                <p
                  style={{
                    fontSize: '0.925rem',
                    lineHeight: 1.5,
                    color: '#FFFFFF',
                    fontStyle: 'italic',
                    marginBottom: '1rem',
                  }}
                >
                  "{selectedPillar.realQuote.text}"
                </p>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                  <div>
                    <div style={{ fontSize: '0.875rem', fontWeight: 700, color: '#D6E8CF' }}>
                      {selectedPillar.realQuote.author}
                    </div>
                    <div style={{ fontSize: '0.75rem', color: '#E8E9E3' }}>
                      {selectedPillar.realQuote.fromTo}
                    </div>
                  </div>
                  <span className="demo-pill" style={{ color: '#E8E9E3', borderColor: '#26332F' }}>
                    Verified Resident
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 4 Cards Overview Grid */}
        <div className="pillars-cards-grid">
          {FOUR_PILLARS.map((p) => (
            <div
              key={p.id}
              className="milo-card"
              onClick={() => setActiveTab(p.id)}
              style={{
                padding: '1.75rem',
                cursor: 'pointer',
                borderColor: activeTab === p.id ? '#102B27' : '#E8E9E3',
              }}
            >
              <div
                style={{
                  width: '42px',
                  height: '42px',
                  borderRadius: '12px',
                  backgroundColor: '#D6E8CF',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginBottom: '1rem',
                }}
              >
                {getPillarIcon(p.id)}
              </div>
              <h4
                style={{
                  fontFamily: "'Manrope', sans-serif",
                  fontSize: '1.2rem',
                  fontWeight: 700,
                  color: '#102B27',
                  marginBottom: '0.4rem',
                }}
              >
                {p.title}
              </h4>
              <p style={{ fontSize: '0.85rem', color: '#536460', lineHeight: 1.5 }}>
                {p.tagline}
              </p>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .pillars-nav-tabs {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 1rem;
        }

        .pillar-detail-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 2.5rem;
          align-items: center;
        }

        .pillars-cards-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 1.25rem;
          margin-top: 2rem;
        }

        @media (min-width: 900px) {
          .pillars-nav-tabs {
            grid-template-columns: repeat(4, 1fr);
          }
          .pillar-detail-grid {
            grid-template-columns: 1.2fr 0.8fr;
          }
          .pillars-cards-grid {
            grid-template-columns: repeat(4, 1fr);
          }
        }
      `}</style>
    </section>
  );
};
