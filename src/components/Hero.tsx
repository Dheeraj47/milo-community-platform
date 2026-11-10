import React, { useState } from 'react';
import { ArrowRight, Compass, Users, MapPin, Sparkles, CheckCircle2, HeartHandshake, ShieldCheck } from 'lucide-react';
import { HOMETOWNS, TARGET_CITIES } from '../data/mockData';

interface HeroProps {
  onFindCommunityClick: (hometown?: string, targetCity?: string) => void;
  onExploreCitiesClick: () => void;
  onOpenAuth: (mode: 'join') => void;
}

export const Hero: React.FC<HeroProps> = ({
  onFindCommunityClick,
  onExploreCitiesClick,
  onOpenAuth,
}) => {
  const [selectedHometown, setSelectedHometown] = useState('Jaipur');
  const [selectedCity, setSelectedCity] = useState('Pune');

  // Realistic dynamic mock counts based on selection
  const getMatchCounts = (from: string, to: string) => {
    if (from === 'Jaipur' && to === 'Pune') {
      return { movers: '380+', circles: '14 Circles', tiffins: '24 Tiffins' };
    }
    if (to === 'Bengaluru') {
      return { movers: '540+', circles: '22 Circles', tiffins: '38 Tiffins' };
    }
    if (to === 'Mumbai') {
      return { movers: '490+', circles: '19 Circles', tiffins: '31 Tiffins' };
    }
    return { movers: '320+', circles: '12 Circles', tiffins: '18 Tiffins' };
  };

  const currentMatch = getMatchCounts(selectedHometown, selectedCity);

  return (
    <section
      style={{
        position: 'relative',
        paddingTop: '3.5rem',
        paddingBottom: '5.5rem',
        overflow: 'hidden',
        background: 'linear-gradient(180deg, #F7F5EF 0%, #F1EFE6 100%)',
      }}
    >
      {/* Decorative ambient background accents */}
      <div
        style={{
          position: 'absolute',
          top: '-120px',
          right: '-100px',
          width: '520px',
          height: '520px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(214, 232, 207, 0.45) 0%, rgba(247, 245, 239, 0) 70%)',
          pointerEvents: 'none',
        }}
      />
      <div
        style={{
          position: 'absolute',
          bottom: '-60px',
          left: '-80px',
          width: '420px',
          height: '420px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(232, 185, 120, 0.22) 0%, rgba(247, 245, 239, 0) 70%)',
          pointerEvents: 'none',
        }}
      />

      <div className="section-wrapper">
        <div className="hero-grid">
          {/* Left Column: Headline, Narrative & CTAs */}
          <div className="hero-text-content">
            {/* Mission Badge */}
            <div
              className="section-badge"
              style={{
                backgroundColor: '#D6E8CF',
                borderColor: '#C4DCBB',
                color: '#102B27',
                marginBottom: '1.25rem',
              }}
            >
              <HeartHandshake size={15} color="#102B27" />
              <span>Premium City Settlement Network</span>
            </div>

            {/* Main Headline */}
            <h1
              style={{
                fontSize: 'clamp(2.5rem, 5vw, 3.85rem)',
                lineHeight: 1.12,
                fontWeight: 800,
                letterSpacing: '-0.035em',
                color: '#102B27',
                marginBottom: '1.5rem',
              }}
            >
              Your new city.{' '}
              <span
                style={{
                  color: '#102B27',
                  position: 'relative',
                  display: 'inline-block',
                }}
              >
                Your people.
                <svg
                  style={{
                    position: 'absolute',
                    left: 0,
                    bottom: '-4px',
                    width: '100%',
                    height: '8px',
                    pointerEvents: 'none',
                  }}
                  viewBox="0 0 200 8"
                  fill="none"
                  preserveAspectRatio="none"
                >
                  <path
                    d="M1 5.5C40 2 120 1.5 199 5"
                    stroke="#E8B978"
                    strokeWidth="4"
                    strokeLinecap="round"
                  />
                </svg>
              </span>
            </h1>

            {/* Supporting Text */}
            <p
              style={{
                fontSize: 'clamp(1.05rem, 1.8vw, 1.22rem)',
                lineHeight: 1.65,
                color: '#26332F',
                marginBottom: '2rem',
                maxWidth: '560px',
              }}
            >
              Moving somewhere new doesn't mean starting alone. Find people from your hometown, discover trusted local communities and make your new city feel like home.
            </p>

            {/* Two Main CTAs */}
            <div
              style={{
                display: 'flex',
                flexWrap: 'wrap',
                gap: '1rem',
                marginBottom: '2.5rem',
              }}
            >
              <button
                type="button"
                onClick={() => onFindCommunityClick(selectedHometown, selectedCity)}
                className="btn btn-primary"
                style={{
                  padding: '0.95rem 2rem',
                  fontSize: '1.025rem',
                }}
              >
                Find Your Community <ArrowRight size={18} />
              </button>
              <button
                type="button"
                onClick={onExploreCitiesClick}
                className="btn btn-secondary"
                style={{
                  padding: '0.95rem 1.85rem',
                  fontSize: '1.025rem',
                }}
              >
                <Compass size={18} /> Explore Cities
              </button>
            </div>

            {/* Quick Interactive Settlement Match Bar */}
            <div
              style={{
                backgroundColor: '#FFFFFF',
                borderRadius: '18px',
                border: '1.5px solid #D6E8CF',
                padding: '1.25rem',
                boxShadow: '0 8px 24px rgba(16, 43, 39, 0.06)',
                maxWidth: '560px',
              }}
            >
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  marginBottom: '0.75rem',
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                  <Sparkles size={16} color="#E8B978" />
                  <span
                    style={{
                      fontFamily: "'Manrope', sans-serif",
                      fontSize: '0.825rem',
                      fontWeight: 700,
                      color: '#102B27',
                      textTransform: 'uppercase',
                      letterSpacing: '0.04em',
                    }}
                  >
                    Quick Community Matcher
                  </span>
                </div>
                <span className="demo-pill">
                  <span className="dot"></span>
                  Live Preview
                </span>
              </div>

              {/* Selector Row */}
              <div
                style={{
                  display: 'grid',
                  gridTemplateColumns: '1fr auto 1fr',
                  alignItems: 'center',
                  gap: '0.5rem',
                  marginBottom: '0.85rem',
                }}
              >
                <div>
                  <label
                    style={{
                      display: 'block',
                      fontSize: '0.72rem',
                      fontWeight: 600,
                      color: '#536460',
                      marginBottom: '0.2rem',
                    }}
                  >
                    From Hometown
                  </label>
                  <select
                    value={selectedHometown}
                    onChange={(e) => setSelectedHometown(e.target.value)}
                    style={{
                      width: '100%',
                      padding: '0.55rem 0.65rem',
                      borderRadius: '8px',
                      border: '1px solid #E8E9E3',
                      backgroundColor: '#F7F5EF',
                      fontFamily: 'inherit',
                      fontSize: '0.875rem',
                      fontWeight: 600,
                      color: '#102B27',
                    }}
                  >
                    {HOMETOWNS.filter((h) => h !== 'All Hometowns').map((h) => (
                      <option key={h} value={h}>
                        {h}
                      </option>
                    ))}
                  </select>
                </div>

                <div
                  style={{
                    padding: '0.4rem',
                    color: '#536460',
                    display: 'flex',
                    alignItems: 'center',
                    marginTop: '1rem',
                  }}
                >
                  <ArrowRight size={16} />
                </div>

                <div>
                  <label
                    style={{
                      display: 'block',
                      fontSize: '0.72rem',
                      fontWeight: 600,
                      color: '#536460',
                      marginBottom: '0.2rem',
                    }}
                  >
                    Moving To
                  </label>
                  <select
                    value={selectedCity}
                    onChange={(e) => setSelectedCity(e.target.value)}
                    style={{
                      width: '100%',
                      padding: '0.55rem 0.65rem',
                      borderRadius: '8px',
                      border: '1px solid #E8E9E3',
                      backgroundColor: '#F7F5EF',
                      fontFamily: 'inherit',
                      fontSize: '0.875rem',
                      fontWeight: 600,
                      color: '#102B27',
                    }}
                  >
                    {TARGET_CITIES.filter((c) => c !== 'All Cities').map((c) => (
                      <option key={c} value={c}>
                        {c}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Dynamic Discovery Result Bar */}
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  backgroundColor: '#F7F5EF',
                  padding: '0.65rem 0.85rem',
                  borderRadius: '10px',
                  border: '1px solid #E8E9E3',
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', flexWrap: 'wrap' }}>
                  <span style={{ fontSize: '0.825rem', fontWeight: 700, color: '#102B27' }}>
                    {currentMatch.movers} {selectedHometown} folks in {selectedCity}
                  </span>
                  <span style={{ fontSize: '0.75rem', color: '#536460' }}>
                    • {currentMatch.circles} • {currentMatch.tiffins}
                  </span>
                </div>
                <button
                  type="button"
                  onClick={() => onFindCommunityClick(selectedHometown, selectedCity)}
                  style={{
                    fontSize: '0.78rem',
                    fontWeight: 700,
                    color: '#102B27',
                    textDecoration: 'underline',
                    padding: '2px 4px',
                  }}
                >
                  View People →
                </button>
              </div>
            </div>

            {/* Trust Signals */}
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '1.5rem',
                marginTop: '1.75rem',
                fontSize: '0.825rem',
                color: '#536460',
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.35rem' }}>
                <ShieldCheck size={16} color="#102B27" />
                <span>100% Verified Members</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.35rem' }}>
                <CheckCircle2 size={16} color="#102B27" />
                <span>Zero Broker Fees</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.35rem' }}>
                <Users size={16} color="#102B27" />
                <span>4 Cities Active</span>
              </div>
            </div>
          </div>

          {/* Right Column: Visual Composition with People, City & Community Cards */}
          <div className="hero-visual-container">
            <div className="hero-cards-stack">
              {/* Main Visual Image Card */}
              <div
                style={{
                  position: 'relative',
                  borderRadius: '24px',
                  overflow: 'hidden',
                  boxShadow: '0 20px 48px -8px rgba(16, 43, 39, 0.22)',
                  border: '1px solid #E8E9E3',
                  backgroundColor: '#102B27',
                }}
              >
                <img
                  src="https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&w=1000&q=80"
                  alt="Young diverse friends connecting and laughing in a new city café"
                  style={{
                    width: '100%',
                    height: '420px',
                    objectFit: 'cover',
                    filter: 'brightness(0.96) contrast(1.02)',
                  }}
                />

                {/* Gradient Overlay for card contrast */}
                <div
                  style={{
                    position: 'absolute',
                    inset: 0,
                    background:
                      'linear-gradient(180deg, rgba(16,43,39,0.1) 0%, rgba(16,43,39,0.75) 100%)',
                    pointerEvents: 'none',
                  }}
                />

                {/* Overlaid Bottom Banner inside Image */}
                <div
                  style={{
                    position: 'absolute',
                    bottom: '1.25rem',
                    left: '1.25rem',
                    right: '1.25rem',
                    backgroundColor: 'rgba(247, 245, 239, 0.95)',
                    backdropFilter: 'blur(10px)',
                    borderRadius: '16px',
                    padding: '1rem 1.25rem',
                    border: '1px solid rgba(255, 255, 255, 0.6)',
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '0.3rem' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                      <MapPin size={15} color="#102B27" />
                      <span style={{ fontSize: '0.8rem', fontWeight: 700, color: '#102B27' }}>
                        Pune Settlement Circle
                      </span>
                    </div>
                    <span className="tag-pill sage">Active Today</span>
                  </div>
                  <p style={{ fontSize: '0.825rem', color: '#26332F', margin: 0 }}>
                    "Met 4 people from Rajasthan in Baner during my first week. We already rented a shared 3BHK!"
                  </p>
                </div>
              </div>

              {/* Floating Live Badge 1: Newcomer Success (Top Left) */}
              <div
                className="floating-badge badge-top-left"
                style={{
                  position: 'absolute',
                  top: '-20px',
                  left: '-20px',
                  backgroundColor: '#FFFFFF',
                  borderRadius: '16px',
                  padding: '0.75rem 1rem',
                  boxShadow: '0 12px 32px rgba(16, 43, 39, 0.12)',
                  border: '1px solid #D6E8CF',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.75rem',
                }}
              >
                <div
                  style={{
                    position: 'relative',
                    width: '42px',
                    height: '42px',
                    borderRadius: '50%',
                    overflow: 'hidden',
                    border: '2px solid #D6E8CF',
                  }}
                >
                  <img
                    src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=150&h=150&q=80"
                    alt="Aarav Sharma"
                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                  />
                </div>
                <div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.3rem' }}>
                    <span style={{ fontSize: '0.85rem', fontWeight: 700, color: '#102B27' }}>
                      Aarav Sharma
                    </span>
                    <span style={{ fontSize: '0.7rem', color: '#8c5b16' }}>★ 4.9</span>
                  </div>
                  <div style={{ fontSize: '0.75rem', color: '#536460' }}>
                    Jaipur → Pune (Viman Nagar)
                  </div>
                  <span
                    style={{
                      fontSize: '0.7rem',
                      fontWeight: 600,
                      color: '#102B27',
                      backgroundColor: '#EBF4E7',
                      padding: '2px 6px',
                      borderRadius: '4px',
                      display: 'inline-block',
                      marginTop: '3px',
                    }}
                  >
                    Helped 28 Newcomers
                  </span>
                </div>
              </div>

              {/* Floating Live Badge 2: Authentic Tiffin & Community (Bottom Right) */}
              <div
                className="floating-badge badge-bottom-right"
                onClick={() => onOpenAuth('join')}
                title="Click to join verified community circles"
                style={{
                  position: 'absolute',
                  bottom: '-25px',
                  right: '-15px',
                  backgroundColor: '#102B27',
                  color: '#F7F5EF',
                  borderRadius: '16px',
                  padding: '0.85rem 1.15rem',
                  boxShadow: '0 16px 36px rgba(16, 43, 39, 0.28)',
                  border: '1px solid #26332F',
                  maxWidth: '240px',
                  cursor: 'pointer',
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', marginBottom: '0.25rem' }}>
                  <span style={{ width: '8px', height: '8px', borderRadius: '50%', backgroundColor: '#E8B978' }} />
                  <span style={{ fontSize: '0.75rem', fontWeight: 700, color: '#D6E8CF', textTransform: 'uppercase' }}>
                    Verified Tiffin Hub
                  </span>
                </div>
                <div style={{ fontSize: '0.85rem', fontWeight: 600, color: '#FFFFFF', marginBottom: '0.25rem' }}>
                  Marwari & Kathiyawadi Mess
                </div>
                <div style={{ fontSize: '0.725rem', color: '#E8E9E3' }}>
                  4.8/5 (180 reviews) · Hinjewadi & Baner delivery
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .hero-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 3.5rem;
          align-items: center;
        }

        .hero-visual-container {
          position: relative;
          width: 100%;
          max-width: 540px;
          margin: 0 auto;
        }

        .hero-cards-stack {
          position: relative;
        }

        @media (min-width: 960px) {
          .hero-grid {
            grid-template-columns: 1.15fr 0.85fr;
            gap: 3.5rem;
          }
        }

        @media (max-width: 600px) {
          .floating-badge {
            display: none !important;
          }
        }
      `}</style>
    </section>
  );
};

