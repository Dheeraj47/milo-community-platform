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
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#F7F5EF]/90 backdrop-blur-2xl border-b border-[#102B27]/10 transition-all shadow-[0_4px_20px_rgba(16,43,39,0.03)]">
      <div className="h-16 sm:h-20 max-w-7xl mx-auto px-3 sm:px-6 lg:px-margin flex items-center justify-between gap-2 sm:gap-space-lg">
        {/* Brand Logo & Tag */}
        <a href="#" className="flex items-center gap-2 sm:gap-3 shrink-0 group">
          {/* Reliable, Crisp Geometric SVG Logo */}
          <div className="relative shrink-0">
            <svg
              width="32"
              height="32"
              viewBox="0 0 44 44"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="sm:w-9 sm:h-9 shrink-0 transition-transform group-hover:scale-105"
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
            <span className="absolute -bottom-0.5 -right-0.5 w-2 h-2 rounded-full bg-emerald-500 ring-2 ring-[#F7F5EF]" />
          </div>
          <div className="flex flex-col">
            <div className="flex items-center gap-1.5 sm:gap-2">
              <span className="font-headline-sm text-base sm:text-lg font-extrabold text-primary-container tracking-tight">
                MILO
              </span>
              <span className="hidden sm:inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-secondary-container/80 text-on-secondary-fixed font-label-caps text-[10px] tracking-wider uppercase font-bold">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-600 animate-pulse" />
                Live in 4 Hubs
              </span>
            </div>
            <span className="hidden xl:inline text-[10px] text-on-surface-variant font-medium tracking-wide">
              Community-Powered City Settlement
            </span>
          </div>
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center gap-0.5 xl:gap-1 px-1.5 py-1 rounded-full bg-surface-container/70 border border-outline-variant/30 backdrop-blur-md">
          {navItems.map((item) => {
            const isActive = activePath === item.path;
            return (
              <a
                key={item.path}
                href={item.href}
                onClick={(e) => handleNavClick(e, item.href, item.path)}
                className={`px-3 xl:px-4 py-1.5 rounded-full text-xs font-semibold whitespace-nowrap transition-all ${
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

        {/* Action Buttons: Responsive for 320px - 430px+ */}
        <div className="flex items-center gap-1.5 sm:gap-3 shrink-0">
          <button
            type="button"
            onClick={() => onOpenAuth('login')}
            className="hidden sm:inline-block font-label-md text-xs font-semibold text-primary-container hover:text-primary transition-colors px-3 py-1.5 rounded-full hover:bg-surface-container cursor-pointer"
          >
            Log In
          </button>

          {/* Compact on narrow mobile, full on >= 380px */}
          <button
            type="button"
            onClick={() => onOpenAuth('join')}
            className="inline-flex items-center gap-1.5 px-3 sm:px-5 py-1.5 sm:py-2.5 rounded-full bg-primary-container hover:bg-[#183F39] text-on-primary font-label-md text-[11px] sm:text-xs font-bold transition-all shadow-xs hover:scale-[1.02] cursor-pointer shimmer-btn"
          >
            <span className="hidden min-[360px]:inline">Get Started</span>
            <span className="min-[360px]:hidden">Join</span>
            <span className="material-symbols-outlined text-xs sm:text-sm text-tertiary-fixed-dim">
              arrow_forward
            </span>
          </button>

          {/* Avatar Profile Trigger */}
          <div
            className="flex items-center pl-1 sm:pl-2 border-l border-outline-variant/40 cursor-pointer"
            onClick={() => onOpenAuth('login')}
            title="Demo Member Profile"
          >
            <div className="relative">
              <img
                alt="Profile"
                className="w-7 h-7 sm:w-8 sm:h-8 rounded-full object-cover ring-2 ring-primary-container/20 hover:ring-secondary transition-all"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCRw6sq-w_5DDD-Nmf5I4wwBIQcf29dhU0izwXNFeBIzoREh1p51hFoaY1utBa2tZ4j3nAXfzTAViSZhzslOXuWBlPkcf28uKvnXic93lnQ9p0a-lYI24l_1vUhm8NDn6-UpPmbYG0Bji7kQ778GDVZOS7Voc95K8x-deGqiYlZYtHxPto4j0WnUHbUu-N4jjNyzvMtjMzkVdhDzl3If8zrPGHjh1XcuasuO5ifK0Eb"
              />
              <span className="absolute bottom-0 right-0 w-2 h-2 rounded-full bg-emerald-500 ring-1 ring-white" />
            </div>
          </div>

          {/* Mobile & Tablet Menu Button */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden flex items-center justify-center p-1.5 sm:p-2 rounded-xl bg-surface-container text-primary-container cursor-pointer"
            aria-label="Toggle menu"
          >
            <span className="material-symbols-outlined text-lg sm:text-xl">
              {mobileMenuOpen ? 'close' : 'menu'}
            </span>
          </button>
        </div>
      </div>

      {/* Mobile & Tablet Menu Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-surface-container-lowest border-b border-[#E5E2D9] px-4 sm:px-6 py-4 flex flex-col gap-3 shadow-xl animate-fade-in max-h-[calc(100vh-64px)] overflow-y-auto">
          {/* Member Profile Quick Card */}
          <div
            onClick={() => {
              setMobileMenuOpen(false);
              onOpenAuth('login');
            }}
            className="flex items-center gap-3 p-3 rounded-2xl bg-surface-container-low border border-outline-variant/30 cursor-pointer"
          >
            <img
              alt="Profile"
              className="w-10 h-10 rounded-full object-cover ring-2 ring-primary-container/20"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuCRw6sq-w_5DDD-Nmf5I4wwBIQcf29dhU0izwXNFeBIzoREh1p51hFoaY1utBa2tZ4j3nAXfzTAViSZhzslOXuWBlPkcf28uKvnXic93lnQ9p0a-lYI24l_1vUhm8NDn6-UpPmbYG0Bji7kQ778GDVZOS7Voc95K8x-deGqiYlZYtHxPto4j0WnUHbUu-N4jjNyzvMtjMzkVdhDzl3If8zrPGHjh1XcuasuO5ifK0Eb"
            />
            <div className="flex flex-col">
              <span className="font-headline-sm text-xs font-bold text-primary-container">
                Demo Member Account
              </span>
              <span className="text-[11px] text-on-surface-variant">Tap to switch or sign in</span>
            </div>
          </div>

          <div className="py-1 flex flex-col gap-1">
            {navItems.map((item) => (
              <a
                key={item.path}
                href={item.href}
                onClick={(e) => handleNavClick(e, item.href, item.path)}
                className="py-2.5 px-3 rounded-xl text-sm font-semibold text-primary-container hover:bg-surface-container transition-colors"
              >
                {item.label}
              </a>
            ))}
          </div>

          <div className="pt-3 border-t border-surface-container flex flex-col gap-2">
            <button
              type="button"
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenAuth('join');
              }}
              className="w-full py-3 rounded-full bg-primary-container text-on-primary font-bold text-xs flex items-center justify-center gap-2 cursor-pointer shadow-md shimmer-btn"
            >
              <span>Get Started Free</span>
              <span className="material-symbols-outlined text-sm">arrow_forward</span>
            </button>
            <button
              type="button"
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenAuth('login');
              }}
              className="w-full py-2.5 rounded-full bg-surface-container hover:bg-surface-container-high text-primary-container font-semibold text-xs cursor-pointer border border-outline-variant/30"
            >
              Log In to Existing Account
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
