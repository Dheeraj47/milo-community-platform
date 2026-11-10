import { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { HowItWorks } from './components/HowItWorks';
import { InteractiveMatcher } from './components/InteractiveMatcher';
import { CorePillars } from './components/CorePillars';
import { CommunityPreview } from './components/CommunityPreview';
import { VettedLiving } from './components/VettedLiving';
import { LocalDiscovery } from './components/LocalDiscovery';
import { TrustSafety } from './components/TrustSafety';
import { CityDiscovery } from './components/CityDiscovery';
import { FAQSection } from './components/FAQSection';
import { FinalCTA } from './components/FinalCTA';
import { Footer } from './components/Footer';
import { AuthModal } from './components/AuthModal';
import { Toast } from './components/Toast';
import type { ToastMessage } from './components/Toast';
import type { CommunityMember, AccommodationListing, LocalService } from './types';

export function App() {
  const [authModalOpen, setAuthModalOpen] = useState(false);
  const [authModalMode, setAuthModalMode] = useState<'join' | 'login'>('join');
  const [selectedCity, setSelectedCity] = useState<string>('pune');
  const [toast, setToast] = useState<ToastMessage | null>(null);

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

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleFindCommunity = () => {
    scrollToSection('interactive-matcher');
  };

  const handleExploreCities = () => {
    scrollToSection('destinations');
  };

  const handleConnect = (member: CommunityMember) => {
    showToast(
      `Intro Request Sent to ${member.name}!`,
      `Frontend Demo: In production, ${member.name} will be notified to guide you in ${member.neighborhood}, ${member.currentCity}.`,
      'success'
    );
  };

  const handleViewGuide = (member: CommunityMember) => {
    showToast(
      `${member.name}’s Settlement Guide`,
      `Viewing neighborhood recommendations for ${member.neighborhood}, ${member.currentCity} (Demo).`,
      'info'
    );
  };

  const handleJoinCircle = (circleName: string) => {
    showToast(
      `Joined "${circleName}"!`,
      'Frontend Demo: Welcome to the circle! In production, you will receive an invitation to the community channel.',
      'success'
    );
  };

  const handleSelectListing = (listing: AccommodationListing) => {
    showToast(
      `Listing Selected: ${listing.title}`,
      `Rent: ₹${listing.rentMonthly.toLocaleString()}/mo · ${listing.depositNote}. Demo connection initiated with tenant.`,
      'info'
    );
  };

  const handleSelectService = (service: LocalService) => {
    showToast(
      `Service: ${service.name}`,
      `${service.category} · ${service.priceNote}. Demo inquiry sent to community service provider.`,
      'info'
    );
  };

  const handleSelectCityForPreview = (cityName: string) => {
    const cityKey = cityName.toLowerCase();
    if (['pune', 'bengaluru', 'mumbai', 'hyderabad'].includes(cityKey)) {
      setSelectedCity(cityKey);
    }
    showToast(
      `${cityName} Settlement Hub`,
      `Activated ${cityName} settlement horizon with community circles, stays, and mentors.`,
      'info'
    );
    scrollToSection('mentor-discovery');
  };

  const handleUnlockPass = (message: string) => {
    showToast('Settler Pass Generated', message, 'success');
    handleOpenAuth('join');
  };

  return (
    <div className="w-full min-h-screen bg-surface font-body-md text-on-surface antialiased flex flex-col">
      {/* 1. Header / Navbar */}
      <Navbar onOpenAuth={handleOpenAuth} />

      <main className="w-full pt-20 bg-surface min-h-[calc(100vh-80px)]">
        {/* 2. Hero Section */}
        <Hero
          currentCity={selectedCity}
          onCityChange={setSelectedCity}
          onFindCommunityClick={handleFindCommunity}
          onExploreCitiesClick={handleExploreCities}
          onOpenMentorModal={() => handleOpenAuth('login')}
        />

        {/* 3. The Settler’s Blueprint (How It Works) */}
        <HowItWorks />

        {/* 4. Interactive Onboarding Matcher Widget */}
        <InteractiveMatcher onUnlockPass={handleUnlockPass} />

        {/* 5. The Four Pillars */}
        <CorePillars onJoinCircle={handleJoinCircle} />

        {/* 6. Community Discovery: Peer Mentors */}
        <CommunityPreview
          onConnectClick={handleConnect}
          onViewGuide={handleViewGuide}
        />

        {/* 7. Living: Vetted Accommodations & Flatmates */}
        <VettedLiving onSelectListing={handleSelectListing} />

        {/* 8. Local Discovery: Essential Daily Services */}
        <LocalDiscovery onSelectService={handleSelectService} />

        {/* 9. Safety & Integrity (Trust Framework) */}
        <TrustSafety />

        {/* 10. Explore Destination Cities */}
        <CityDiscovery onSelectCityForPreview={handleSelectCityForPreview} />

        {/* 11. Frequently Asked Questions (FAQ) */}
        <FAQSection />

        {/* 12. Final Immersive CTA Banner */}
        <FinalCTA
          onJoinClick={() => handleOpenAuth('join')}
          onExploreCitiesClick={handleExploreCities}
        />
      </main>

      {/* 13. Footer */}
      <Footer
        onCityClick={handleSelectCityForPreview}
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
