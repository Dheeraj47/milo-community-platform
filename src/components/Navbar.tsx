import React, { useState, useEffect } from 'react';

interface NavbarProps {
  onOpenAuth: (mode: 'join' | 'login') => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenAuth }) => {
  const [activePath, setActivePath] = useState('explore-cities');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['destinations', 'mentor-discovery', 'how-it-works', 'four-pillars'];
      const scrollPosition = window.scrollY + 120;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            if (section === 'destinations') setActivePath('explore-cities');
            else if (section === 'mentor-discovery') setActivePath('communities');
            else if (section === 'how-it-works') setActivePath('how-it-works');
            else if (section === 'four-pillars') setActivePath('four-pillars');
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: 'Explore Cities', path: 'explore-cities', href: '#destinations' },
    { label: 'Communities', path: 'communities', href: '#mentor-discovery' },
    { label: 'How It Works', path: 'how-it-works', href: '#how-it-works' },
    { label: 'Four Pillars', path: 'four-pillars', href: '#four-pillars' },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string, path: string) => {
    e.preventDefault();
    setActivePath(path);
    setMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#F7F5EF]/90 backdrop-blur-xl border-b border-[#E5E2D9] transition-all">
      <div className="h-20 max-w-7xl mx-auto px-margin flex items-center justify-between gap-space-lg">
        {/* Brand Logo & Tag */}
        <a href="#" className="flex items-center gap-2.5 shrink-0">
          {/* Reliable, Crisp Geometric SVG Logo */}
          <svg
            width="32"
            height="32"
            viewBox="0 0 44 44"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="shrink-0"
          >
            <rect width="44" height="44" rx="12" fill="#102B27" />
            <path
              d="M11 32V16L18 25.5L22 20L26 25.5L33 16V32"
              stroke="#D6E8CF"
              strokeWidth="3.2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <circle cx="22" cy="13.5" r="2.8" fill="#E8B978" />
          </svg>
          <span className="font-headline-sm text-headline-sm font-bold text-primary-container tracking-tight">
            MILO
          </span>
          <span className="hidden lg:inline-flex items-center px-space-sm py-0.5 rounded-full bg-secondary-container text-on-secondary-fixed font-label-caps text-label-caps tracking-widest uppercase">
            City Settlement
          </span>
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-space-sm px-space-xs py-space-xs rounded-full bg-surface-container-low/60">
          {navItems.map((item) => {
            const isActive = activePath === item.path;
            return (
              <a
                key={item.path}
                href={item.href}
                onClick={(e) => handleNavClick(e, item.href, item.path)}
                className={`px-space-md py-space-xs rounded-full transition-colors ${
                  isActive
                    ? 'bg-surface-container text-primary-container font-semibold'
                    : 'font-label-md text-label-md text-on-surface-variant hover:text-on-surface'
                }`}
              >
                {item.label}
              </a>
            );
          })}
        </nav>

        {/* Desktop Actions */}
        <div className="flex items-center gap-space-md shrink-0">
          <button
            type="button"
            onClick={() => onOpenAuth('login')}
            className="hidden sm:inline-block font-label-md text-label-md text-on-surface-variant hover:text-on-surface transition-colors px-space-sm py-space-xs cursor-pointer"
          >
            Log In
          </button>
          <button
            type="button"
            onClick={() => onOpenAuth('join')}
            className="inline-flex items-center gap-space-sm px-space-lg py-2.5 rounded-full bg-primary-container hover:bg-[#26332F] text-on-primary font-label-md text-label-md transition-all shadow-[0_4px_12px_-2px_rgba(16,43,39,0.12)] hover:scale-[1.02] cursor-pointer"
          >
            <span>Get Started</span>
            <span className="font-bold text-tertiary-fixed-dim">→</span>
          </button>
          <div
            className="flex items-center pl-space-xs border-l border-outline-variant/40 cursor-pointer"
            onClick={() => onOpenAuth('login')}
            title="Demo Member Profile"
          >
            <img
              alt="Profile"
              className="w-8 h-8 rounded-full object-cover ring-2 ring-primary-container/10"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuCRw6sq-w_5DDD-Nmf5I4wwBIQcf29dhU0izwXNFeBIzoREh1p51hFoaY1utBa2tZ4j3nAXfzTAViSZhzslOXuWBlPkcf28uKvnXic93lnQ9p0a-lYI24l_1vUhm8NDn6-UpPmbYG0Bji7kQ778GDVZOS7Voc95K8x-deGqiYlZYtHxPto4j0WnUHbUu-N4jjNyzvMtjMzkVdhDzl3If8zrPGHjh1XcuasuO5ifK0Eb"
            />
          </div>

          {/* Mobile Menu Button */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden flex items-center justify-center p-2 rounded-xl bg-surface-container text-primary-container cursor-pointer"
            aria-label="Toggle menu"
          >
            <span className="material-symbols-outlined text-xl">
              {mobileMenuOpen ? 'close' : 'menu'}
            </span>
          </button>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-surface-container-lowest border-b border-[#E5E2D9] px-margin py-4 flex flex-col gap-3 shadow-lg">
          {navItems.map((item) => (
            <a
              key={item.path}
              href={item.href}
              onClick={(e) => handleNavClick(e, item.href, item.path)}
              className="py-2 text-base font-semibold text-primary-container"
            >
              {item.label}
            </a>
          ))}
          <div className="pt-2 border-t border-surface-container flex flex-col gap-2">
            <button
              type="button"
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenAuth('login');
              }}
              className="w-full py-2.5 rounded-full bg-surface-container text-primary-container font-semibold text-sm cursor-pointer"
            >
              Log In
            </button>
            <button
              type="button"
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenAuth('join');
              }}
              className="w-full py-2.5 rounded-full bg-primary-container text-on-primary font-semibold text-sm cursor-pointer"
            >
              Get Started →
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
