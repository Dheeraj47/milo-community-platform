import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowRight, UserCircle } from 'lucide-react';
import { MiloLogo } from './MiloLogo';

interface NavbarProps {
  onOpenAuth: (mode: 'join' | 'login') => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenAuth }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Explore Cities', href: '#explore-cities' },
    { label: 'Communities', href: '#community-preview' },
    { label: 'How It Works', href: '#how-it-works' },
    { label: 'Four Pillars', href: '#pillars' },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const targetElement = document.querySelector(href);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      style={{
        position: 'sticky',
        top: 0,
        zIndex: 1000,
        width: '100%',
        backgroundColor: isScrolled ? 'rgba(247, 245, 239, 0.94)' : 'rgba(247, 245, 239, 0.85)',
        backdropFilter: 'blur(12px)',
        borderBottom: `1px solid ${isScrolled ? '#E2E4DC' : 'rgba(232, 233, 227, 0.6)'}`,
        transition: 'all 0.25s ease',
      }}
    >
      <div
        className="section-wrapper"
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          height: '4.75rem',
        }}
      >
        {/* Brand Logo */}
        <a href="#" style={{ textDecoration: 'none' }}>
          <MiloLogo size="md" showSubtitle />
        </a>

        {/* Desktop Navigation Links */}
        <nav
          style={{
            display: 'none',
            alignItems: 'center',
            gap: '2rem',
          }}
          className="desktop-nav"
        >
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={(e) => handleNavClick(e, link.href)}
              style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: '0.925rem',
                fontWeight: 500,
                color: '#26332F',
                transition: 'color 0.2s ease',
              }}
              onMouseEnter={(e) => (e.currentTarget.style.color = '#102B27')}
              onMouseLeave={(e) => (e.currentTarget.style.color = '#26332F')}
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Desktop Actions */}
        <div
          style={{
            display: 'none',
            alignItems: 'center',
            gap: '1rem',
          }}
          className="desktop-actions"
        >
          <button
            type="button"
            onClick={() => onOpenAuth('login')}
            className="btn btn-ghost"
            style={{
              fontSize: '0.925rem',
              fontWeight: 600,
              padding: '0.55rem 1.1rem',
            }}
          >
            Log In
          </button>
          <button
            type="button"
            onClick={() => onOpenAuth('join')}
            className="btn btn-primary"
            style={{
              padding: '0.65rem 1.4rem',
              fontSize: '0.925rem',
            }}
          >
            Get Started <ArrowRight size={16} />
          </button>
        </div>

        {/* Mobile Hamburger Button */}
        <button
          type="button"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '0.6rem',
            borderRadius: '10px',
            backgroundColor: '#E8E9E3',
            color: '#102B27',
          }}
          className="mobile-hamburger"
          aria-label="Toggle navigation menu"
        >
          {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile Drawer Navigation */}
      {mobileMenuOpen && (
        <div
          style={{
            backgroundColor: '#F7F5EF',
            borderBottom: '1px solid #E8E9E3',
            padding: '1.5rem',
            display: 'flex',
            flexDirection: 'column',
            gap: '1.25rem',
            animation: 'fadeIn 0.2s ease-out',
          }}
          className="mobile-menu-drawer"
        >
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.85rem' }}>
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                style={{
                  fontSize: '1.05rem',
                  fontWeight: 600,
                  color: '#102B27',
                  padding: '0.4rem 0',
                }}
              >
                {link.label}
              </a>
            ))}
          </div>

          <div
            style={{
              height: '1px',
              backgroundColor: '#E8E9E3',
              margin: '0.5rem 0',
            }}
          />

          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
            <button
              type="button"
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenAuth('login');
              }}
              className="btn btn-secondary"
              style={{ width: '100%', justifyContent: 'center' }}
            >
              <UserCircle size={18} /> Log In
            </button>
            <button
              type="button"
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenAuth('join');
              }}
              className="btn btn-primary"
              style={{ width: '100%', justifyContent: 'center' }}
            >
              Get Started <ArrowRight size={18} />
            </button>
          </div>
        </div>
      )}

      <style>{`
        @media (min-width: 900px) {
          .desktop-nav {
            display: flex !important;
          }
          .desktop-actions {
            display: flex !important;
          }
          .mobile-hamburger {
            display: none !important;
          }
          .mobile-menu-drawer {
            display: none !important;
          }
        }
      `}</style>
    </header>
  );
};

