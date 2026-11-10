import { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { HowItWorks } from './components/HowItWorks';
import { CorePillars } from './components/CorePillars';
import { CityDiscovery } from './components/CityDiscovery';
import { CommunityPreview } from './components/CommunityPreview';
import { FinalCTA } from './components/FinalCTA';
import { Footer } from './components/Footer';
import { AuthModal } from './components/AuthModal';
import { Toast } from './components/Toast';
import type { ToastMessage } from './components/Toast';
import type { CommunityMember } from './types';

export function App() {
  const [authModalOpen, setAuthModalOpen] = useState(false);
  const [authModalMode, setAuthModalMode] = useState<'join' | 'login'>('join');
  const [toast, setToast] = useState<ToastMessage | null>(null);

  // Cross-component filter coordination
  const [previewHometown, setPreviewHometown] = useState<string>('Jaipur');
  const [previewCity, setPreviewCity] = useState<string>('Pune');

  const showToast = (title: string, message: string, type: 'success' | 'info' = 'success') => {
    setToast({
      id: Date.now().toString(),
      title,
      message,
      type,
    });
  };

  const handleOpenAuth = (mode: 'join' | 'login') => {
    setAuthModalMode(mode);
    setAuthModalOpen(true);
  };

  const handleFindCommunity = (hometown?: string, targetCity?: string) => {
    if (hometown) setPreviewHometown(hometown);
    if (targetCity) setPreviewCity(targetCity);

    const el = document.getElementById('community-preview');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleExploreCities = () => {
    const el = document.getElementById('explore-cities');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleSelectCityForPreview = (cityName: string) => {
    setPreviewCity(cityName);
    const el = document.getElementById('community-preview');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
    showToast(
      `${cityName} Community Filtered`,
      `Showing verified newcomers, mentors and tiffin services in ${cityName}.`,
      'info'
    );
  };

  const handleConnect = (member: CommunityMember) => {
    showToast(
      `Intro Request Sent to ${member.name}!`,
      `Frontend Demo: In production, ${member.name} will receive a message to help you settle into ${member.neighborhood}, ${member.currentCity}.`,
      'success'
    );
  };

  const handleSelectPillarAction = (pillarId: string) => {
    if (pillarId === 'community') {
      handleFindCommunity('Jaipur', 'Pune');
    } else if (pillarId === 'living') {
      showToast(
        'Zero-Brokerage Stays Filtered',
        'Viewing roommate pairings and PGs matched by diet and lifestyle in Pune & Bengaluru.',
        'info'
      );
      handleFindCommunity();
    } else if (pillarId === 'local-discovery') {
      showToast(
        'Authentic Tiffin Radar',
        'Viewing verified home-cooked tiffins delivering to Baner, Hinjewadi, and Viman Nagar.',
        'info'
      );
      handleFindCommunity();
    } else {
      showToast(
        'Weekend Meetups & Chai Clubs',
        'Showing upcoming badminton, morning runs, and coffee walks for newcomers.',
        'info'
      );
      handleFindCommunity();
    }
  };

  const handleSubscribe = (email: string) => {
    showToast(
      'Relocation Guide Sent!',
      `We've sent our comprehensive Pune & Bengaluru newcomer handbook to ${email}.`,
      'success'
    );
  };

  return (
    <div className="app-container">
      {/* 1. Navigation Bar */}
      <Navbar onOpenAuth={handleOpenAuth} />

      <main>
        {/* 2. Hero Section */}
        <Hero
          onFindCommunityClick={handleFindCommunity}
          onExploreCitiesClick={handleExploreCities}
          onOpenAuth={handleOpenAuth}
        />

        {/* 3. How MILO Works */}
        <HowItWorks onGetStartedClick={() => handleOpenAuth('join')} />

        {/* 4. Four Core Pillars */}
        <CorePillars onSelectPillarAction={handleSelectPillarAction} />

        {/* 5. City Discovery */}
        <CityDiscovery
          onSelectCityForPreview={handleSelectCityForPreview}
        />

        {/* 6. Community Preview (Interactive Discovery) */}
        <CommunityPreview
          selectedHometown={previewHometown}
          onHometownChange={setPreviewHometown}
          selectedCity={previewCity}
          onCityChange={setPreviewCity}
          onConnectClick={handleConnect}
          onOpenAuth={handleOpenAuth}
        />

        {/* 7. Final CTA */}
        <FinalCTA
          onJoinClick={() => handleOpenAuth('join')}
          onExploreCitiesClick={handleExploreCities}
        />
      </main>

      {/* 8. Footer */}
      <Footer
        onCityClick={handleSelectCityForPreview}
        onSubscribe={handleSubscribe}
        onOpenAuth={handleOpenAuth}
      />

      {/* Interactive Demonstration Modals & Toast */}
      <AuthModal
        isOpen={authModalOpen}
        onClose={() => setAuthModalOpen(false)}
        defaultMode={authModalMode}
        onSuccess={(msg) => showToast('Settlement Circle Joined', msg, 'success')}
      />

      <Toast toast={toast} onClose={() => setToast(null)} />
    </div>
  );
}

export default App;
