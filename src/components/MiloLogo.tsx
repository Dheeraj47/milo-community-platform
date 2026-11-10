import React from 'react';

interface MiloLogoProps {
  className?: string;
  variant?: 'dark' | 'light' | 'ivory';
  size?: 'sm' | 'md' | 'lg';
  showSubtitle?: boolean;
}

export const MiloLogo: React.FC<MiloLogoProps> = ({
  className = '',
  variant = 'dark',
  size = 'md',
  showSubtitle = false,
}) => {
  const isLight = variant === 'light';

  const sizeStyles = {
    sm: { iconSize: 28, text: '1.25rem', sub: '0.65rem', gap: '0.5rem' },
    md: { iconSize: 34, text: '1.5rem', sub: '0.7rem', gap: '0.65rem' },
    lg: { iconSize: 44, text: '2rem', sub: '0.8rem', gap: '0.85rem' },
  }[size];

  const primaryTextColor = isLight ? '#F7F5EF' : '#102B27';
  const subtitleColor = isLight ? '#D6E8CF' : '#536460';

  return (
    <div
      className={`milo-logo-wrapper ${className}`}
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        gap: sizeStyles.gap,
        textDecoration: 'none',
        userSelect: 'none',
      }}
    >
      {/* Brand Emblem */}
      <svg
        width={sizeStyles.iconSize}
        height={sizeStyles.iconSize}
        viewBox="0 0 44 44"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        style={{ flexShrink: 0 }}
      >
        <rect
          width="44"
          height="44"
          rx="12"
          fill={isLight ? '#183F39' : '#102B27'}
        />
        {/* Bridge M symbol representing hometown to new city connection */}
        <path
          d="M11 32V16L18 25.5L22 20L26 25.5L33 16V32"
          stroke="#D6E8CF"
          strokeWidth="3.2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        {/* Soft amber beacon point */}
        <circle cx="22" cy="13.5" r="2.8" fill="#E8B978" />
      </svg>

      {/* Typography */}
      <div style={{ display: 'flex', flexDirection: 'column', lineHeight: 1 }}>
        <span
          style={{
            fontFamily: "'Manrope', sans-serif",
            fontWeight: 800,
            fontSize: sizeStyles.text,
            letterSpacing: '-0.035em',
            color: primaryTextColor,
          }}
        >
          MILO
        </span>
        {showSubtitle && (
          <span
            style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: sizeStyles.sub,
              letterSpacing: '0.08em',
              textTransform: 'uppercase',
              fontWeight: 600,
              color: subtitleColor,
              marginTop: '2px',
            }}
          >
            City Settlement
          </span>
        )}
      </div>
    </div>
  );
};

