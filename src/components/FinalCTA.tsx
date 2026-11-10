import React from 'react';
import { ArrowRight, Compass, ShieldCheck, HeartHandshake, Sparkles, CheckCircle2 } from 'lucide-react';

interface FinalCTAProps {
  onJoinClick: () => void;
  onExploreCitiesClick: () => void;
}

export const FinalCTA: React.FC<FinalCTAProps> = ({
  onJoinClick,
  onExploreCitiesClick,
}) => {
  return (
    <section
      style={{
        padding: '6.5rem 0',
        backgroundColor: '#102B27',
        color: '#F7F5EF',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Decorative ambient glowing circles */}
      <div
        style={{
          position: 'absolute',
          top: '-150px',
          left: '50%',
          transform: 'translateX(-50%)',
          width: '700px',
          height: '400px',
          background: 'radial-gradient(circle, rgba(214, 232, 207, 0.15) 0%, rgba(16, 43, 39, 0) 70%)',
          pointerEvents: 'none',
        }}
      />
      <div
        style={{
          position: 'absolute',
          bottom: '-100px',
          right: '5%',
          width: '350px',
          height: '350px',
          background: 'radial-gradient(circle, rgba(232, 185, 120, 0.12) 0%, rgba(16, 43, 39, 0) 70%)',
          pointerEvents: 'none',
        }}
      />

      <div className="section-wrapper" style={{ position: 'relative', zIndex: 2 }}>
        <div
          style={{
            maxWidth: '820px',
            margin: '0 auto',
            textAlign: 'center',
          }}
        >
          {/* Badge */}
          <div
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.5rem',
              padding: '0.4rem 1rem',
              backgroundColor: 'rgba(214, 232, 207, 0.15)',
              borderRadius: '9999px',
              border: '1px solid rgba(214, 232, 207, 0.3)',
              color: '#D6E8CF',
              fontSize: '0.825rem',
              fontWeight: 600,
              textTransform: 'uppercase',
              letterSpacing: '0.05em',
              marginBottom: '1.75rem',
            }}
          >
            <Sparkles size={15} color="#E8B978" />
            <span>Community-Powered Settlement</span>
          </div>

          {/* Prompt Required Headline */}
          <h2
            style={{
              fontFamily: "'Manrope', sans-serif",
              fontSize: 'clamp(2.4rem, 4.8vw, 3.6rem)',
              fontWeight: 800,
              color: '#FFFFFF',
              lineHeight: 1.15,
              letterSpacing: '-0.035em',
              marginBottom: '1.5rem',
            }}
          >
            A new city feels better when you belong.
          </h2>

          {/* Narrative */}
          <p
            style={{
              fontSize: 'clamp(1.05rem, 1.8vw, 1.25rem)',
              lineHeight: 1.65,
              color: '#D6E8CF',
              marginBottom: '2.5rem',
              maxWidth: '680px',
              margin: '0 auto 2.5rem',
            }}
          >
            Don't spend your first weeks lost in unknown neighborhoods. Connect with people from your hometown who already found the best flats, authentic food, and warm friendships.
          </p>

          {/* CTA Buttons */}
          <div
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              gap: '1rem',
              justifyContent: 'center',
              marginBottom: '3rem',
            }}
          >
            {/* Prompt Required Button */}
            <button
              type="button"
              onClick={onJoinClick}
              className="btn btn-amber"
              style={{
                padding: '1.05rem 2.5rem',
                fontSize: '1.05rem',
                boxShadow: '0 8px 24px rgba(232, 185, 120, 0.3)',
              }}
            >
              Join MILO <ArrowRight size={18} />
            </button>
            <button
              type="button"
              onClick={onExploreCitiesClick}
              style={{
                backgroundColor: 'rgba(247, 245, 239, 0.1)',
                color: '#F7F5EF',
                border: '1.5px solid rgba(214, 232, 207, 0.4)',
                padding: '1.05rem 2rem',
                borderRadius: '9999px',
                fontSize: '1.05rem',
                fontWeight: 600,
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.6rem',
                transition: 'all 0.2s',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = 'rgba(247, 245, 239, 0.2)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = 'rgba(247, 245, 239, 0.1)';
              }}
            >
              <Compass size={18} /> Explore Cities
            </button>
          </div>

          {/* Trust Guarantees */}
          <div
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '2rem',
              paddingTop: '2rem',
              borderTop: '1px solid rgba(214, 232, 207, 0.15)',
              fontSize: '0.85rem',
              color: '#D6E8CF',
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.45rem' }}>
              <CheckCircle2 size={18} color="#E8B978" />
              <span>100% Free For Newcomers</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.45rem' }}>
              <ShieldCheck size={18} color="#E8B978" />
              <span>Verified Identity & Safety Checks</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.45rem' }}>
              <HeartHandshake size={18} color="#E8B978" />
              <span>Zero Brokerage Philosophy</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

