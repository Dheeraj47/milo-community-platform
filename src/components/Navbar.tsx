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
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#F7F5EF]/85 backdrop-blur-2xl border-b border-[#102B27]/10 transition-all shadow-[0_4px_20px_rgba(16,43,39,0.03)]">
      <div className="h-20 max-w-7xl mx-auto px-margin flex items-center justify-between gap-space-lg">
        {/* Brand Logo & Tag */}
        <a href="#" className="flex items-center gap-3 shrink-0 group">
          {/* Reliable, Crisp Geometric SVG Logo */}
          <div className="relative">
            <svg
              width="36"
              height="36"
              viewBox="0 0 44 44"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="shrink-0 transition-transform group-hover:scale-105"
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
            <span className="absolute -bottom-1 -right-1 w-2.5 h-2.5 rounded-full bg-emerald-500 ring-2 ring-[#F7F5EF]" />
          </div>
          <div className="flex flex-col">
            <div className="flex items-center gap-2">
              <span className="font-headline-sm text-lg font-extrabold text-primary-container tracking-tight">
                MILO
              </span>
              <span className="hidden sm:inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-secondary-container/80 text-on-secondary-fixed font-label-caps text-[10px] tracking-wider uppercase font-bold">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-600 animate-pulse" />
                Live in 4 Hubs
              </span>
            </div>
            <span className="hidden lg:inline text-[10px] text-on-surface-variant font-medium tracking-wide">
              Community-Powered City Settlement
            </span>
          </div>
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-1 px-1.5 py-1 rounded-full bg-surface-container/70 border border-outline-variant/30 backdrop-blur-md">
          {navItems.map((item) => {
            const isActive = activePath === item.path;
            return (
              <a
                key={item.path}
                href={item.href}
                onClick={(e) => handleNavClick(e, item.href, item.path)}
                className={`px-4 py-1.5 rounded-full text-xs font-semibold transition-all ${
                  isActive
                    ? 'bg-primary-container text-on-primary shadow-xs'
                    : 'text-on-surface-variant hover:text-on-surface hover:bg-surface-container-high/60'
                }`}
              >
                {item.label}
              </a>
            );
          })}
        </nav>

        {/* Desktop Actions */}
        <div className="flex items-center gap-3 shrink-0">
          <button
            type="button"
            onClick={() => onOpenAuth('login')}
            className="hidden sm:inline-block font-label-md text-xs font-semibold text-primary-container hover:text-primary transition-colors px-3 py-1.5 rounded-full hover:bg-surface-container cursor-pointer"
          >
            Log In
          </button>
          <button
            type="button"
            onClick={() => onOpenAuth('join')}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-primary-container hover:bg-[#183F39] text-on-primary font-label-md text-xs font-bold transition-all shadow-[0_4px_14px_rgba(16,43,39,0.18)] hover:scale-[1.02] cursor-pointer shimmer-btn"
          >
            <span>Get Started</span>
            <span className="material-symbols-outlined text-sm text-tertiary-fixed-dim">
              arrow_forward
            </span>
          </button>
          <div
            className="flex items-center pl-2 border-l border-outline-variant/40 cursor-pointer"
            onClick={() => onOpenAuth('login')}
            title="Demo Member Profile"
          >
            <div className="relative">
              <img
                alt="Profile"
                className="w-8 h-8 rounded-full object-cover ring-2 ring-primary-container/20 hover:ring-secondary transition-all"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCRw6sq-w_5DDD-Nmf5I4wwBIQcf29dhU0izwXNFeBIzoREh1p51hFoaY1utBa2tZ4j3nAXfzTAViSZhzslOXuWBlPkcf28uKvnXic93lnQ9p0a-lYI24l_1vUhm8NDn6-UpPmbYG0Bji7kQ778GDVZOS7Voc95K8x-deGqiYlZYtHxPto4j0WnUHbUu-N4jjNyzvMtjMzkVdhDzl3If8zrPGHjh1XcuasuO5ifK0Eb"
              />
              <span className="absolute bottom-0 right-0 w-2.5 h-2.5 rounded-full bg-emerald-500 ring-1 ring-white" />
            </div>
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
