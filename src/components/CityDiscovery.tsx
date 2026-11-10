import React from 'react';
import { CITIES_DATA } from '../data/mockData';
import { MapPin, ArrowRight, Building2 } from 'lucide-react';

interface CityDiscoveryProps {
  onSelectCityForPreview: (cityName: string) => void;
}

export const CityDiscovery: React.FC<CityDiscoveryProps> = ({
  onSelectCityForPreview,
}) => {
  return (
    <section
      id="explore-cities"
      style={{
        padding: '6rem 0',
        backgroundColor: '#FFFFFF',
      }}
    >
      <div className="section-wrapper">
        {/* Section Header */}
        <div className="section-center">
          <div className="section-badge">
            <Building2 size={14} color="#102B27" />
            <span>Active Settlement Hubs</span>
          </div>
          <h2 className="section-title">Explore Destination Cities</h2>
          <p className="section-subtitle">
            Whether moving for career growth, college, or a fresh start, discover the neighborhoods, regional diasporas, and verified communities waiting to welcome you.
          </p>
          <div style={{ marginTop: '0.85rem' }}>
            <span className="demo-pill">
              <span className="dot"></span>
              All statistics below represent demonstration data for platform showcase
            </span>
          </div>
        </div>

        {/* 4 City Cards Grid */}
        <div className="city-cards-grid">
          {CITIES_DATA.map((city) => (
            <div
              key={city.id}
              className="city-card"
              style={{
                borderRadius: '24px',
                overflow: 'hidden',
                backgroundColor: '#FFFFFF',
                border: '1.5px solid #E8E9E3',
                boxShadow: '0 8px 24px rgba(16, 43, 39, 0.05)',
                transition: 'all 0.3s ease',
                display: 'flex',
                flexDirection: 'column',
              }}
            >
              {/* Image & Header Overlay */}
              <div style={{ position: 'relative', height: '220px', overflow: 'hidden' }}>
                <img
                  src={city.image}
                  alt={city.name}
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    transition: 'transform 0.4s ease',
                  }}
                  className="city-card-img"
                />
                <div
                  style={{
                    position: 'absolute',
                    inset: 0,
                    background:
                      'linear-gradient(180deg, rgba(16,43,39,0.2) 0%, rgba(16,43,39,0.85) 100%)',
                  }}
                />

                {/* Top Badge */}
                <div
                  style={{
                    position: 'absolute',
                    top: '1rem',
                    right: '1rem',
                  }}
                >
                  <span
                    className="tag-pill"
                    style={{
                      backgroundColor: 'rgba(247, 245, 239, 0.95)',
                      color: '#102B27',
                      fontWeight: 700,
                      backdropFilter: 'blur(4px)',
                      fontSize: '0.725rem',
                    }}
                  >
                    {city.accentBadge}
                  </span>
                </div>

                {/* Title inside Image bottom */}
                <div
                  style={{
                    position: 'absolute',
                    bottom: '1rem',
                    left: '1.25rem',
                    right: '1.25rem',
                    color: '#F7F5EF',
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', marginBottom: '0.2rem' }}>
                    <MapPin size={16} color="#E8B978" />
                    <span style={{ fontSize: '0.8rem', fontWeight: 600, color: '#D6E8CF', textTransform: 'uppercase' }}>
                      {city.state}
                    </span>
                  </div>
                  <h3
                    style={{
                      fontFamily: "'Manrope', sans-serif",
                      fontSize: '1.65rem',
                      fontWeight: 800,
                      color: '#FFFFFF',
                      lineHeight: 1.15,
                    }}
                  >
                    {city.name}
                  </h3>
                  <div style={{ fontSize: '0.8rem', color: '#E8E9E3', fontWeight: 500 }}>
                    {city.tagline}
                  </div>
                </div>
              </div>

              {/* Card Body */}
              <div style={{ padding: '1.5rem', display: 'flex', flexDirection: 'column', flex: 1 }}>
                <p style={{ fontSize: '0.875rem', color: '#536460', lineHeight: 1.55, marginBottom: '1.25rem' }}>
                  {city.description}
                </p>

                {/* Mock Community Statistics (Clearly treated as demonstration data) */}
                <div
                  style={{
                    backgroundColor: '#F7F5EF',
                    borderRadius: '16px',
                    padding: '1rem',
                    border: '1px solid #E8E9E3',
                    marginBottom: '1.25rem',
                  }}
                >
                  <div
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      marginBottom: '0.65rem',
                      fontSize: '0.7rem',
                      fontWeight: 700,
                      textTransform: 'uppercase',
                      color: '#8c5b16',
                      letterSpacing: '0.03em',
                    }}
                  >
                    <span>Demonstration Community Metrics</span>
                    <span>Demo Data</span>
                  </div>

                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.75rem' }}>
                    <div>
                      <div
                        style={{
                          fontFamily: "'Manrope', sans-serif",
                          fontSize: '1.25rem',
                          fontWeight: 800,
                          color: '#102B27',
                        }}
                      >
                        {city.stats.activeMovers.toLocaleString()}+
                      </div>
                      <div style={{ fontSize: '0.725rem', color: '#536460' }}>Active Movers</div>
                    </div>

                    <div>
                      <div
                        style={{
                          fontFamily: "'Manrope', sans-serif",
                          fontSize: '1.25rem',
                          fontWeight: 800,
                          color: '#102B27',
                        }}
                      >
                        {city.stats.hometownCircles}
                      </div>
                      <div style={{ fontSize: '0.725rem', color: '#536460' }}>Hometown Circles</div>
                    </div>

                    <div>
                      <div
                        style={{
                          fontFamily: "'Manrope', sans-serif",
                          fontSize: '1.25rem',
                          fontWeight: 800,
                          color: '#102B27',
                        }}
                      >
                        {city.stats.verifiedServices}+
                      </div>
                      <div style={{ fontSize: '0.725rem', color: '#536460' }}>Stays & Tiffins</div>
                    </div>

                    <div>
                      <div
                        style={{
                          fontFamily: "'Manrope', sans-serif",
                          fontSize: '1.25rem',
                          fontWeight: 800,
                          color: '#102B27',
                        }}
                      >
                        {city.stats.settlementRate}%
                      </div>
                      <div style={{ fontSize: '0.725rem', color: '#536460' }}>Settled Smoothly</div>
                    </div>
                  </div>
                </div>

                {/* Popular Localities Chips */}
                <div style={{ marginBottom: '1rem' }}>
                  <div
                    style={{
                      fontSize: '0.75rem',
                      fontWeight: 600,
                      color: '#26332F',
                      marginBottom: '0.4rem',
                    }}
                  >
                    Top Neighborhoods:
                  </div>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.35rem' }}>
                    {city.popularLocalities.slice(0, 3).map((loc) => (
                      <span key={loc} className="tag-pill" style={{ fontSize: '0.725rem' }}>
                        {loc}
                      </span>
                    ))}
                    {city.popularLocalities.length > 3 && (
                      <span className="tag-pill" style={{ fontSize: '0.725rem', color: '#536460' }}>
                        +{city.popularLocalities.length - 3} more
                      </span>
                    )}
                  </div>
                </div>

                {/* Top Incoming Diasporas */}
                <div style={{ marginBottom: '1.5rem', flex: 1 }}>
                  <div
                    style={{
                      fontSize: '0.75rem',
                      fontWeight: 600,
                      color: '#26332F',
                      marginBottom: '0.4rem',
                    }}
                  >
                    Largest Hometown Diasporas:
                  </div>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.35rem' }}>
                    {city.topDiasporas.map((diaspora) => (
                      <span key={diaspora} className="tag-pill sage" style={{ fontSize: '0.725rem' }}>
                        {diaspora}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Action Button */}
                <button
                  type="button"
                  onClick={() => onSelectCityForPreview(city.name)}
                  className="btn btn-secondary"
                  style={{ width: '100%', justifyContent: 'center', padding: '0.75rem' }}
                >
                  Explore {city.name} Community <ArrowRight size={16} />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .city-cards-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 2rem;
        }

        .city-card:hover .city-card-img {
          transform: scale(1.04);
        }

        @media (min-width: 640px) {
          .city-cards-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        @media (min-width: 1100px) {
          .city-cards-grid {
            grid-template-columns: repeat(4, 1fr);
          }
        }
      `}</style>
    </section>
  );
};
