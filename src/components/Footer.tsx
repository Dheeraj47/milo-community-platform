import React, { useState } from 'react';
import { MiloLogo } from './MiloLogo';
import { CheckCircle2 } from 'lucide-react';

interface FooterProps {
  onCityClick: (cityName: string) => void;
  onSubscribe: (email: string) => void;
  onOpenAuth: (mode: 'join') => void;
}

export const Footer: React.FC<FooterProps> = ({
  onCityClick,
  onSubscribe,
  onOpenAuth,
}) => {
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newsletterEmail) return;
    onSubscribe(newsletterEmail);
    setSubscribed(true);
    setNewsletterEmail('');
  };

  const handleScroll = (href: string) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer
      style={{
        backgroundColor: '#0B1D1A',
        color: '#F7F5EF',
        paddingTop: '5rem',
        paddingBottom: '3rem',
        borderTop: '1px solid #183F39',
      }}
    >
      <div className="section-wrapper">
        <div className="footer-grid">
          {/* Brand Column */}
          <div style={{ maxWidth: '360px' }}>
            <MiloLogo variant="light" size="lg" showSubtitle />
            <p
              style={{
                fontSize: '0.9rem',
                color: '#D6E8CF',
                lineHeight: 1.6,
                marginTop: '1.25rem',
                marginBottom: '1.5rem',
              }}
            >
              MILO is a premium community-powered city settlement platform helping people moving to a new city find familiar people, trusted communities, accommodation, local services, and meaningful connections.
            </p>

            {/* Newsletter Mini Form */}
            <div>
              <div
                style={{
                  fontSize: '0.8rem',
                  fontWeight: 700,
                  color: '#E8B978',
                  textTransform: 'uppercase',
                  letterSpacing: '0.04em',
                  marginBottom: '0.5rem',
                }}
              >
                Get City Settlement Guides
              </div>
              {subscribed ? (
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.5rem',
                    backgroundColor: 'rgba(214, 232, 207, 0.15)',
                    padding: '0.65rem 1rem',
                    borderRadius: '10px',
                    color: '#D6E8CF',
                    fontSize: '0.825rem',
                  }}
                >
                  <CheckCircle2 size={16} color="#E8B978" />
                  <span>Check your inbox for our Jaipur → Pune Settler Guide!</span>
                </div>
              ) : (
                <form onSubmit={handleNewsletterSubmit} style={{ display: 'flex', gap: '0.5rem' }}>
                  <input
                    type="email"
                    required
                    placeholder="Enter your email"
                    value={newsletterEmail}
                    onChange={(e) => setNewsletterEmail(e.target.value)}
                    style={{
                      flex: 1,
                      padding: '0.65rem 0.85rem',
                      borderRadius: '10px',
                      border: '1px solid #183F39',
                      backgroundColor: 'rgba(247, 245, 239, 0.08)',
                      color: '#FFFFFF',
                      fontSize: '0.85rem',
                      fontFamily: 'inherit',
                    }}
                  />
                  <button
                    type="submit"
                    className="btn btn-amber"
                    style={{
                      padding: '0.65rem 1.15rem',
                      borderRadius: '10px',
                      fontSize: '0.85rem',
                    }}
                  >
                    Subscribe
                  </button>
                </form>
              )}
            </div>
          </div>

          {/* Column 2: Destination Cities */}
          <div>
            <h4
              style={{
                fontFamily: "'Manrope', sans-serif",
                fontSize: '0.95rem',
                fontWeight: 700,
                color: '#FFFFFF',
                textTransform: 'uppercase',
                letterSpacing: '0.05em',
                marginBottom: '1.25rem',
              }}
            >
              Explore Cities
            </h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.65rem' }}>
              {['Pune', 'Mumbai', 'Bengaluru', 'Hyderabad'].map((city) => (
                <li key={city}>
                  <button
                    type="button"
                    onClick={() => {
                      onCityClick(city);
                      handleScroll('#explore-cities');
                    }}
                    style={{
                      fontSize: '0.875rem',
                      color: '#D6E8CF',
                      transition: 'color 0.2s',
                    }}
                    onMouseEnter={(e) => (e.currentTarget.style.color = '#E8B978')}
                    onMouseLeave={(e) => (e.currentTarget.style.color = '#D6E8CF')}
                  >
                    {city} Settlement Circles
                  </button>
                </li>
              ))}
              <li style={{ fontSize: '0.825rem', color: '#536460' }}>
                Delhi NCR & Chennai (Opening Soon)
              </li>
            </ul>
          </div>

          {/* Column 3: The Four Pillars */}
          <div>
            <h4
              style={{
                fontFamily: "'Manrope', sans-serif",
                fontSize: '0.95rem',
                fontWeight: 700,
                color: '#FFFFFF',
                textTransform: 'uppercase',
                letterSpacing: '0.05em',
                marginBottom: '1.25rem',
              }}
            >
              Four Pillars
            </h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.65rem' }}>
              <li>
                <a
                  href="#pillars"
                  onClick={() => handleScroll('#pillars')}
                  style={{ fontSize: '0.875rem', color: '#D6E8CF' }}
                >
                  Hometown Community & Language
                </a>
              </li>
              <li>
                <a
                  href="#pillars"
                  onClick={() => handleScroll('#pillars')}
                  style={{ fontSize: '0.875rem', color: '#D6E8CF' }}
                >
                  Zero-Broker PGs & Roommates
                </a>
              </li>
              <li>
                <a
                  href="#pillars"
                  onClick={() => handleScroll('#pillars')}
                  style={{ fontSize: '0.875rem', color: '#D6E8CF' }}
                >
                  Authentic Regional Tiffins & Mess
                </a>
              </li>
              <li>
                <a
                  href="#pillars"
                  onClick={() => handleScroll('#pillars')}
                  style={{ fontSize: '0.875rem', color: '#D6E8CF' }}
                >
                  Sports & Newcomer Activity Circles
                </a>
              </li>
            </ul>
          </div>

          {/* Column 4: Resources & Trust */}
          <div>
            <h4
              style={{
                fontFamily: "'Manrope', sans-serif",
                fontSize: '0.95rem',
                fontWeight: 700,
                color: '#FFFFFF',
                textTransform: 'uppercase',
                letterSpacing: '0.05em',
                marginBottom: '1.25rem',
              }}
            >
              Resources & Trust
            </h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.65rem' }}>
              <li>
                <button
                  type="button"
                  onClick={() => onOpenAuth('join')}
                  style={{ fontSize: '0.875rem', color: '#D6E8CF', textAlign: 'left' }}
                >
                  Newcomer Relocation Checklist
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => onOpenAuth('join')}
                  style={{ fontSize: '0.875rem', color: '#D6E8CF', textAlign: 'left' }}
                >
                  Safe Neighborhood Ratings
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => onOpenAuth('join')}
                  style={{ fontSize: '0.875rem', color: '#D6E8CF', textAlign: 'left' }}
                >
                  Flatmate Compatibility Guide
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => onOpenAuth('join')}
                  style={{ fontSize: '0.875rem', color: '#D6E8CF', textAlign: 'left' }}
                >
                  Community Safety & Verification
                </button>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar: Copyright & Legal */}
        <div
          style={{
            marginTop: '4rem',
            paddingTop: '2rem',
            borderTop: '1px solid #183F39',
            display: 'flex',
            flexWrap: 'wrap',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: '1rem',
            fontSize: '0.825rem',
            color: '#7E908C',
          }}
        >
          <div>
            © 2026 MILO Platforms. Built with care for every newcomer discovering their people.
          </div>
          <div style={{ display: 'flex', gap: '1.5rem' }}>
            <span>Privacy Policy</span>
            <span>Terms of Service</span>
            <span>Community Guidelines</span>
          </div>
        </div>
      </div>

      <style>{`
        .footer-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 3rem;
        }

        @media (min-width: 640px) {
          .footer-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        @media (min-width: 1040px) {
          .footer-grid {
            grid-template-columns: 1.5fr 1fr 1fr 1fr;
          }
        }
      `}</style>
    </footer>
  );
};
