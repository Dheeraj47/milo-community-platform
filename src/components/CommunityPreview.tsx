import React, { useState, useMemo } from 'react';
import { COMMUNITY_MEMBERS, HOMETOWNS, TARGET_CITIES, LANGUAGES } from '../data/mockData';
import type { CommunityMember } from '../types';
import { Users, CheckCircle2, MessageCircle, Sparkles, Search, RotateCcw, ArrowRight } from 'lucide-react';

interface CommunityPreviewProps {
  selectedHometown: string;
  onHometownChange: (hometown: string) => void;
  selectedCity: string;
  onCityChange: (city: string) => void;
  onConnectClick: (member: CommunityMember) => void;
  onOpenAuth: (mode: 'join') => void;
}

export const CommunityPreview: React.FC<CommunityPreviewProps> = ({
  selectedHometown,
  onHometownChange,
  selectedCity,
  onCityChange,
  onConnectClick,
  onOpenAuth,
}) => {
  const [selectedLanguage, setSelectedLanguage] = useState<string>('All Languages');
  const [searchQuery, setSearchQuery] = useState<string>('');

  // Filtered members list
  const filteredMembers = useMemo(() => {
    return COMMUNITY_MEMBERS.filter((m) => {
      const matchHometown =
        selectedHometown === 'All Hometowns' || m.hometown.toLowerCase() === selectedHometown.toLowerCase();
      const matchCity =
        selectedCity === 'All Cities' || m.currentCity.toLowerCase() === selectedCity.toLowerCase();
      const matchLang =
        selectedLanguage === 'All Languages' || m.languages.some((l) => l.toLowerCase() === selectedLanguage.toLowerCase());
      const matchSearch =
        searchQuery.trim() === '' ||
        m.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        m.neighborhood.toLowerCase().includes(searchQuery.toLowerCase()) ||
        m.role.toLowerCase().includes(searchQuery.toLowerCase()) ||
        m.bio.toLowerCase().includes(searchQuery.toLowerCase());

      return matchHometown && matchCity && matchLang && matchSearch;
    });
  }, [selectedHometown, selectedCity, selectedLanguage, searchQuery]);

  const handleResetFilters = () => {
    onHometownChange('All Hometowns');
    onCityChange('All Cities');
    setSelectedLanguage('All Languages');
    setSearchQuery('');
  };

  const handleApplyJaipurPunePreset = () => {
    onHometownChange('Jaipur');
    onCityChange('Pune');
    setSelectedLanguage('All Languages');
    setSearchQuery('');
  };

  return (
    <section
      id="community-preview"
      style={{
        padding: '6rem 0',
        backgroundColor: '#F7F5EF',
        position: 'relative',
      }}
    >
      <div className="section-wrapper">
        {/* Section Header */}
        <div className="section-center">
          <div className="section-badge">
            <Users size={14} color="#102B27" />
            <span>Interactive Settlement Preview</span>
          </div>
          <h2 className="section-title">Discover People From Your Roots</h2>
          <p className="section-subtitle">
            Search newcomers and seasoned residents who share your native hometown, language, and culture. They know the transition because they walked the exact same path.
          </p>

          {/* Quick preset button for the prompt's featured scenario */}
          <div style={{ marginTop: '1.25rem', display: 'flex', gap: '0.75rem', flexWrap: 'wrap', justifyContent: 'center' }}>
            <button
              type="button"
              onClick={handleApplyJaipurPunePreset}
              className="btn btn-sage"
              style={{ padding: '0.45rem 1rem', fontSize: '0.825rem' }}
            >
              <Sparkles size={14} color="#102B27" />
              Featured Example: Jaipur → Pune Circles
            </button>
            <button
              type="button"
              onClick={() => {
                onHometownChange('Indore');
                onCityChange('Pune');
              }}
              className="btn btn-ghost"
              style={{
                padding: '0.45rem 1rem',
                fontSize: '0.825rem',
                border: '1px solid #E8E9E3',
                backgroundColor: '#FFFFFF',
              }}
            >
              Indore → Pune (MP Diaspora)
            </button>
            <button
              type="button"
              onClick={() => {
                onHometownChange('Lucknow');
                onCityChange('Bengaluru');
              }}
              className="btn btn-ghost"
              style={{
                padding: '0.45rem 1rem',
                fontSize: '0.825rem',
                border: '1px solid #E8E9E3',
                backgroundColor: '#FFFFFF',
              }}
            >
              Lucknow → Bengaluru
            </button>
          </div>
        </div>

        {/* Filter Controls Bar */}
        <div
          style={{
            backgroundColor: '#FFFFFF',
            borderRadius: '24px',
            padding: '1.5rem',
            border: '1.5px solid #E8E9E3',
            boxShadow: '0 8px 24px rgba(16, 43, 39, 0.05)',
            marginBottom: '2.5rem',
          }}
        >
          <div className="filter-grid">
            {/* Filter 1: Hometown */}
            <div>
              <label
                style={{
                  display: 'block',
                  fontSize: '0.75rem',
                  fontWeight: 700,
                  color: '#26332F',
                  marginBottom: '0.35rem',
                  textTransform: 'uppercase',
                  letterSpacing: '0.03em',
                }}
              >
                Hometown (Origin)
              </label>
              <select
                value={selectedHometown}
                onChange={(e) => onHometownChange(e.target.value)}
                style={{
                  width: '100%',
                  padding: '0.7rem 0.85rem',
                  borderRadius: '12px',
                  border: '1px solid #E8E9E3',
                  backgroundColor: '#F7F5EF',
                  fontFamily: 'inherit',
                  fontSize: '0.9rem',
                  fontWeight: 600,
                  color: '#102B27',
                }}
              >
                {HOMETOWNS.map((h) => (
                  <option key={h} value={h}>
                    {h}
                  </option>
                ))}
              </select>
            </div>

            {/* Filter 2: Current City */}
            <div>
              <label
                style={{
                  display: 'block',
                  fontSize: '0.75rem',
                  fontWeight: 700,
                  color: '#26332F',
                  marginBottom: '0.35rem',
                  textTransform: 'uppercase',
                  letterSpacing: '0.03em',
                }}
              >
                Moving To (Current City)
              </label>
              <select
                value={selectedCity}
                onChange={(e) => onCityChange(e.target.value)}
                style={{
                  width: '100%',
                  padding: '0.7rem 0.85rem',
                  borderRadius: '12px',
                  border: '1px solid #E8E9E3',
                  backgroundColor: '#F7F5EF',
                  fontFamily: 'inherit',
                  fontSize: '0.9rem',
                  fontWeight: 600,
                  color: '#102B27',
                }}
              >
                {TARGET_CITIES.map((c) => (
                  <option key={c} value={c}>
                    {c}
                  </option>
                ))}
              </select>
            </div>

            {/* Filter 3: Language */}
            <div>
              <label
                style={{
                  display: 'block',
                  fontSize: '0.75rem',
                  fontWeight: 700,
                  color: '#26332F',
                  marginBottom: '0.35rem',
                  textTransform: 'uppercase',
                  letterSpacing: '0.03em',
                }}
              >
                Mother Tongue / Language
              </label>
              <select
                value={selectedLanguage}
                onChange={(e) => setSelectedLanguage(e.target.value)}
                style={{
                  width: '100%',
                  padding: '0.7rem 0.85rem',
                  borderRadius: '12px',
                  border: '1px solid #E8E9E3',
                  backgroundColor: '#F7F5EF',
                  fontFamily: 'inherit',
                  fontSize: '0.9rem',
                  fontWeight: 600,
                  color: '#102B27',
                }}
              >
                {LANGUAGES.map((l) => (
                  <option key={l} value={l}>
                    {l}
                  </option>
                ))}
              </select>
            </div>

            {/* Filter 4: Keyword Search */}
            <div>
              <label
                style={{
                  display: 'block',
                  fontSize: '0.75rem',
                  fontWeight: 700,
                  color: '#26332F',
                  marginBottom: '0.35rem',
                  textTransform: 'uppercase',
                  letterSpacing: '0.03em',
                }}
              >
                Keyword / Neighborhood
              </label>
              <div style={{ position: 'relative' }}>
                <input
                  type="text"
                  placeholder="e.g. Viman Nagar, Designer, Poha..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  style={{
                    width: '100%',
                    padding: '0.7rem 0.85rem 0.7rem 2.25rem',
                    borderRadius: '12px',
                    border: '1px solid #E8E9E3',
                    backgroundColor: '#F7F5EF',
                    fontFamily: 'inherit',
                    fontSize: '0.9rem',
                    color: '#102B27',
                  }}
                />
                <Search
                  size={16}
                  color="#536460"
                  style={{
                    position: 'absolute',
                    left: '0.75rem',
                    top: '50%',
                    transform: 'translateY(-50%)',
                  }}
                />
              </div>
            </div>
          </div>

          {/* Active Filter Summary Bar */}
          <div
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              alignItems: 'center',
              justifyContent: 'space-between',
              marginTop: '1.25rem',
              paddingTop: '1.25rem',
              borderTop: '1px solid #E8E9E3',
              gap: '1rem',
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', flexWrap: 'wrap' }}>
              <span style={{ fontSize: '0.85rem', fontWeight: 700, color: '#102B27' }}>
                Found {filteredMembers.length} verified newcomer & mentor profiles
              </span>
              {(selectedHometown !== 'All Hometowns' ||
                selectedCity !== 'All Cities' ||
                selectedLanguage !== 'All Languages' ||
                searchQuery !== '') && (
                <button
                  type="button"
                  onClick={handleResetFilters}
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '0.35rem',
                    fontSize: '0.78rem',
                    color: '#8c5b16',
                    fontWeight: 600,
                    cursor: 'pointer',
                  }}
                >
                  <RotateCcw size={12} /> Clear Filters
                </button>
              )}
            </div>

            <div style={{ fontSize: '0.75rem', color: '#536460' }}>
              Showing real member profiles from {selectedHometown === 'All Hometowns' ? 'Pan-India' : selectedHometown} in{' '}
              {selectedCity === 'All Cities' ? 'major tech hubs' : selectedCity}
            </div>
          </div>
        </div>

        {/* Member Cards Grid */}
        {filteredMembers.length > 0 ? (
          <div className="members-grid">
            {filteredMembers.map((member) => (
              <div
                key={member.id}
                className="member-card"
                style={{
                  backgroundColor: '#FFFFFF',
                  borderRadius: '22px',
                  border: '1.5px solid #E8E9E3',
                  padding: '1.75rem',
                  boxShadow: '0 8px 24px rgba(16, 43, 39, 0.04)',
                  display: 'flex',
                  flexDirection: 'column',
                  transition: 'all 0.25s ease',
                  position: 'relative',
                }}
              >
                {/* Header: Avatar, Name, Route Badge */}
                <div style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start', marginBottom: '1rem' }}>
                  <div style={{ position: 'relative', width: '60px', height: '60px', flexShrink: 0 }}>
                    <img
                      src={member.avatar}
                      alt={member.name}
                      style={{
                        width: '100%',
                        height: '100%',
                        borderRadius: '50%',
                        objectFit: 'cover',
                        border: '2px solid #D6E8CF',
                      }}
                    />
                    {member.verified && (
                      <div
                        style={{
                          position: 'absolute',
                          bottom: '-2px',
                          right: '-2px',
                          backgroundColor: '#102B27',
                          color: '#D6E8CF',
                          borderRadius: '50%',
                          width: '20px',
                          height: '20px',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                        }}
                        title="Verified Resident Profile"
                      >
                        <CheckCircle2 size={13} strokeWidth={2.5} />
                      </div>
                    )}
                  </div>

                  <div style={{ flex: 1 }}>
                    <h4
                      style={{
                        fontFamily: "'Manrope', sans-serif",
                        fontSize: '1.15rem',
                        fontWeight: 700,
                        color: '#102B27',
                        lineHeight: 1.2,
                        marginBottom: '0.2rem',
                      }}
                    >
                      {member.name}
                    </h4>
                    <div style={{ fontSize: '0.8rem', color: '#536460', marginBottom: '0.4rem' }}>
                      {member.role} · {member.companyOrField}
                    </div>

                    {/* Hometown to Current City Route Pill */}
                    <div
                      style={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '0.35rem',
                        backgroundColor: '#F7F5EF',
                        padding: '0.25rem 0.6rem',
                        borderRadius: '6px',
                        border: '1px solid #E8E9E3',
                        fontSize: '0.75rem',
                        fontWeight: 600,
                        color: '#102B27',
                      }}
                    >
                      <span>{member.hometown}</span>
                      <ArrowRight size={12} color="#8c5b16" />
                      <span>{member.currentCity}</span>
                      <span style={{ color: '#536460' }}>({member.neighborhood})</span>
                    </div>
                  </div>
                </div>

                {/* Bio text */}
                <p
                  style={{
                    fontSize: '0.875rem',
                    color: '#26332F',
                    lineHeight: 1.5,
                    marginBottom: '1rem',
                    flex: 1,
                  }}
                >
                  "{member.bio}"
                </p>

                {/* Offering Help With section */}
                <div style={{ marginBottom: '1.25rem' }}>
                  <div
                    style={{
                      fontSize: '0.72rem',
                      fontWeight: 700,
                      textTransform: 'uppercase',
                      color: '#8c5b16',
                      letterSpacing: '0.03em',
                      marginBottom: '0.4rem',
                    }}
                  >
                    Happy to help newcomers with:
                  </div>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.35rem' }}>
                    {member.offeringHelpWith.map((help) => (
                      <span
                        key={help}
                        className="tag-pill sage"
                        style={{ fontSize: '0.725rem', padding: '0.2rem 0.55rem' }}
                      >
                        ✓ {help}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Languages & Months Settled */}
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    paddingTop: '0.85rem',
                    borderTop: '1px solid #E8E9E3',
                    marginBottom: '1.25rem',
                    fontSize: '0.75rem',
                    color: '#536460',
                  }}
                >
                  <div>
                    <span style={{ fontWeight: 600, color: '#102B27' }}>Languages: </span>
                    {member.languages.join(', ')}
                  </div>
                  <div style={{ fontWeight: 600, color: '#102B27' }}>
                    Settled {member.monthsSettled} mos ago
                  </div>
                </div>

                {/* Card Action Buttons */}
                <div style={{ display: 'flex', gap: '0.5rem' }}>
                  <button
                    type="button"
                    onClick={() => onConnectClick(member)}
                    className="btn btn-primary"
                    style={{ flex: 1, padding: '0.65rem', fontSize: '0.85rem' }}
                  >
                    <MessageCircle size={15} /> Say Hi / Connect
                  </button>
                  <button
                    type="button"
                    onClick={() => onOpenAuth('join')}
                    className="btn btn-secondary"
                    style={{ padding: '0.65rem 0.9rem', fontSize: '0.85rem' }}
                    title="View Settlement Guide"
                  >
                    Guide
                  </button>
                </div>
              </div>
            ))}
          </div>
        ) : (
          /* Empty state */
          <div
            style={{
              backgroundColor: '#FFFFFF',
              borderRadius: '24px',
              padding: '4rem 2rem',
              textAlign: 'center',
              border: '1.5px dashed #CBD4C9',
            }}
          >
            <div
              style={{
                width: '64px',
                height: '64px',
                borderRadius: '50%',
                backgroundColor: '#D6E8CF',
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginBottom: '1rem',
                color: '#102B27',
              }}
            >
              <Users size={32} />
            </div>
            <h3 style={{ fontFamily: "'Manrope', sans-serif", fontSize: '1.5rem', color: '#102B27', marginBottom: '0.5rem' }}>
              No members matched this exact filter yet
            </h3>
            <p style={{ fontSize: '0.925rem', color: '#536460', maxWidth: '480px', margin: '0 auto 1.5rem' }}>
              Be the trailblazer who starts the {selectedHometown !== 'All Hometowns' ? selectedHometown : 'hometown'} circle in{' '}
              {selectedCity !== 'All Cities' ? selectedCity : 'your target city'}!
            </p>
            <button
              type="button"
              onClick={handleResetFilters}
              className="btn btn-primary"
              style={{ padding: '0.75rem 1.75rem' }}
            >
              Reset Filters to All Cities
            </button>
          </div>
        )}
      </div>

      <style>{`
        .filter-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 1rem;
        }

        .members-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 1.5rem;
        }

        .member-card:hover {
          border-color: #102B27;
          transform: translateY(-3px);
          box-shadow: 0 16px 36px rgba(16, 43, 39, 0.08);
        }

        @media (min-width: 680px) {
          .filter-grid {
            grid-template-columns: repeat(2, 1fr);
          }
          .members-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        @media (min-width: 1040px) {
          .filter-grid {
            grid-template-columns: repeat(4, 1fr);
          }
          .members-grid {
            grid-template-columns: repeat(3, 1fr);
          }
        }
      `}</style>
    </section>
  );
};
