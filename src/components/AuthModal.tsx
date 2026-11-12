import React, { useState } from 'react';
import { X, ArrowRight, Check, Sparkles, ShieldCheck } from 'lucide-react';
import { MiloLogo } from './MiloLogo';
import { HOMETOWNS, TARGET_CITIES } from '../data/mockData';

interface AuthModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultMode?: 'join' | 'login';
  onSuccess: (message: string) => void;
}

export const AuthModal: React.FC<AuthModalProps> = ({
  isOpen,
  onClose,
  defaultMode = 'join',
  onSuccess,
}) => {
  const [mode, setMode] = useState<'join' | 'login'>(defaultMode);
  const [step, setStep] = useState<number>(1);

  // Form state
  const [hometown, setHometown] = useState('Jaipur');
  const [targetCity, setTargetCity] = useState('Pune');
  const [timeline, setTimeline] = useState('Moving next month');
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [selectedPriorities, setSelectedPriorities] = useState<string[]>([
    'Hometown Peers',
    'Authentic Tiffin',
    'Verified Flatmate',
  ]);

  if (!isOpen) return null;

  const togglePriority = (p: string) => {
    setSelectedPriorities((prev) =>
      prev.includes(p) ? prev.filter((item) => item !== p) : [...prev, p]
    );
  };

  const handleFinishJoin = (e: React.FormEvent) => {
    e.preventDefault();
    onSuccess(
      `Welcome to MILO! Matched you with 380+ ${hometown} members currently living in ${targetCity}.`
    );
    onClose();
    setStep(1);
  };

  const handleDemoLogin = (userRole: string) => {
    onSuccess(`Signed in to demo session as ${userRole}. Explore all community channels!`);
    onClose();
  };

  return (
    <div
      className="fixed inset-0 z-[9000] flex items-center justify-center p-3 sm:p-5 bg-[#102B27]/70 backdrop-blur-[6px] animate-fade-in"
      onClick={onClose}
    >
      <div
        className="w-full max-w-[520px] bg-white rounded-3xl border border-[#E8E9E3] shadow-[0_24px_60px_rgba(16,43,39,0.22)] p-4 sm:p-8 relative overflow-hidden max-h-[90vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          type="button"
          onClick={onClose}
          className="absolute top-3.5 right-3.5 sm:top-5 sm:right-5 p-2 rounded-full bg-[#F7F5EF] hover:bg-[#EAE8E2] text-[#26332F] flex items-center justify-center transition-colors cursor-pointer"
          aria-label="Close"
        >
          <X size={18} />
        </button>

        {/* Modal Header */}
        <div className="mb-4 sm:mb-6 text-center pt-1">
          <MiloLogo size="md" showSubtitle />
          <div className="mt-2.5 sm:mt-3">
            <span className="demo-pill">
              <span className="dot"></span>
              Frontend Settlement Demo
            </span>
          </div>
        </div>

        {/* Mode Switcher */}
        <div className="flex bg-[#F7F5EF] rounded-xl p-1 mb-4 sm:mb-6 gap-1">
          <button
            type="button"
            onClick={() => {
              setMode('join');
              setStep(1);
            }}
            className={`flex-1 py-2 px-2 rounded-lg text-xs sm:text-sm font-semibold whitespace-nowrap transition-all cursor-pointer ${
              mode === 'join' ? 'bg-[#102B27] text-[#F7F5EF]' : 'text-[#536460]'
            }`}
          >
            Get Started
          </button>
          <button
            type="button"
            onClick={() => setMode('login')}
            className={`flex-1 py-2 px-2 rounded-lg text-xs sm:text-sm font-semibold whitespace-nowrap transition-all cursor-pointer ${
              mode === 'login' ? 'bg-[#102B27] text-[#F7F5EF]' : 'text-[#536460]'
            }`}
          >
            Log In
          </button>
        </div>

        {/* Mode: JOIN (Multi-step interactive flow) */}
        {mode === 'join' && (
          <div style={{ overflowY: 'auto', paddingRight: '4px' }}>
            {step === 1 && (
              <div>
                <h3
                  style={{
                    fontFamily: "'Manrope', sans-serif",
                    fontSize: '1.25rem',
                    color: '#102B27',
                    marginBottom: '0.4rem',
                  }}
                >
                  Step 1: Your Settlement Route
                </h3>
                <p style={{ fontSize: '0.875rem', color: '#536460', marginBottom: '1.25rem' }}>
                  Help us connect you with familiar faces and community support.
                </p>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                  <div>
                    <label
                      style={{
                        display: 'block',
                        fontSize: '0.8rem',
                        fontWeight: 600,
                        color: '#26332F',
                        marginBottom: '0.4rem',
                      }}
                    >
                      Where are you moving from? (Hometown)
                    </label>
                    <div style={{ position: 'relative' }}>
                      <select
                        value={hometown}
                        onChange={(e) => setHometown(e.target.value)}
                        style={{
                          width: '100%',
                          padding: '0.75rem 1rem',
                          borderRadius: '10px',
                          border: '1px solid #D6E8CF',
                          backgroundColor: '#F7F5EF',
                          fontFamily: 'inherit',
                          fontSize: '0.9rem',
                          color: '#102B27',
                          fontWeight: 500,
                        }}
                      >
                        {HOMETOWNS.filter((h) => h !== 'All Hometowns').map((h) => (
                          <option key={h} value={h}>
                            {h}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div>
                    <label
                      style={{
                        display: 'block',
                        fontSize: '0.8rem',
                        fontWeight: 600,
                        color: '#26332F',
                        marginBottom: '0.4rem',
                      }}
                    >
                      Where are you moving to? (New City)
                    </label>
                    <div style={{ position: 'relative' }}>
                      <select
                        value={targetCity}
                        onChange={(e) => setTargetCity(e.target.value)}
                        style={{
                          width: '100%',
                          padding: '0.75rem 1rem',
                          borderRadius: '10px',
                          border: '1px solid #D6E8CF',
                          backgroundColor: '#F7F5EF',
                          fontFamily: 'inherit',
                          fontSize: '0.9rem',
                          color: '#102B27',
                          fontWeight: 500,
                        }}
                      >
                        {TARGET_CITIES.filter((c) => c !== 'All Cities').map((c) => (
                          <option key={c} value={c}>
                            {c}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div>
                    <label
                      style={{
                        display: 'block',
                        fontSize: '0.8rem',
                        fontWeight: 600,
                        color: '#26332F',
                        marginBottom: '0.4rem',
                      }}
                    >
                      When is your move?
                    </label>
                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.5rem' }}>
                      {['Already Arrived', 'In 2 Weeks', 'Next Month', 'Exploring'].map((time) => (
                        <button
                          key={time}
                          type="button"
                          onClick={() => setTimeline(time)}
                          style={{
                            padding: '0.6rem 0.75rem',
                            borderRadius: '8px',
                            border: `1px solid ${timeline === time ? '#102B27' : '#E8E9E3'}`,
                            backgroundColor: timeline === time ? '#D6E8CF' : '#FFFFFF',
                            color: '#102B27',
                            fontSize: '0.8rem',
                            fontWeight: 600,
                            textAlign: 'center',
                          }}
                        >
                          {time}
                        </button>
                      ))}
                    </div>
                  </div>

                  <button
                    type="button"
                    onClick={() => setStep(2)}
                    className="btn btn-primary"
                    style={{ marginTop: '0.5rem', width: '100%' }}
                  >
                    Continue to Community Preferences <ArrowRight size={16} />
                  </button>
                </div>
              </div>
            )}

            {step === 2 && (
              <div>
                <h3
                  style={{
                    fontFamily: "'Manrope', sans-serif",
                    fontSize: '1.25rem',
                    color: '#102B27',
                    marginBottom: '0.4rem',
                  }}
                >
                  Step 2: Settlement Needs in {targetCity}
                </h3>
                <p style={{ fontSize: '0.875rem', color: '#536460', marginBottom: '1.25rem' }}>
                  What will make {targetCity} immediately feel like home?
                </p>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.65rem' }}>
                  {[
                    { id: 'Hometown Peers', label: `People from ${hometown}`, sub: 'Language & cultural diaspora circles' },
                    { id: 'Authentic Tiffin', label: 'Home-style Regional Meals', sub: 'Sample tiffins, mess & groceries' },
                    { id: 'Verified Flatmate', label: 'Flatmate / PG Compatibility', sub: 'Zero-brokerage, lifestyle match' },
                    { id: 'Weekend Hangouts', label: 'Sports & Social Clubs', sub: 'Badminton, weekend hikes, chai walks' },
                  ].map((item) => {
                    const isSelected = selectedPriorities.includes(item.id);
                    return (
                      <div
                        key={item.id}
                        onClick={() => togglePriority(item.id)}
                        style={{
                          display: 'flex',
                          alignItems: 'center',
                          gap: '0.75rem',
                          padding: '0.75rem 1rem',
                          borderRadius: '12px',
                          border: `1.5px solid ${isSelected ? '#102B27' : '#E8E9E3'}`,
                          backgroundColor: isSelected ? '#F7F5EF' : '#FFFFFF',
                          cursor: 'pointer',
                          transition: 'all 0.15s ease',
                        }}
                      >
                        <div
                          style={{
                            width: '20px',
                            height: '20px',
                            borderRadius: '6px',
                            border: `2px solid ${isSelected ? '#102B27' : '#CBD4C9'}`,
                            backgroundColor: isSelected ? '#102B27' : 'transparent',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            color: '#FFFFFF',
                            flexShrink: 0,
                          }}
                        >
                          {isSelected && <Check size={14} strokeWidth={3} />}
                        </div>
                        <div style={{ flex: 1 }}>
                          <div style={{ fontSize: '0.875rem', fontWeight: 600, color: '#102B27' }}>
                            {item.label}
                          </div>
                          <div style={{ fontSize: '0.75rem', color: '#536460' }}>{item.sub}</div>
                        </div>
                      </div>
                    );
                  })}

                  <div style={{ marginTop: '0.5rem', display: 'flex', gap: '0.5rem' }}>
                    <button
                      type="button"
                      onClick={() => setStep(1)}
                      className="btn btn-secondary"
                      style={{ flex: 1, padding: '0.75rem' }}
                    >
                      Back
                    </button>
                    <button
                      type="button"
                      onClick={() => setStep(3)}
                      className="btn btn-primary"
                      style={{ flex: 2, padding: '0.75rem' }}
                    >
                      Next: Review Matches <ArrowRight size={16} />
                    </button>
                  </div>
                </div>
              </div>
            )}

            {step === 3 && (
              <form onSubmit={handleFinishJoin}>
                <div
                  style={{
                    backgroundColor: '#D6E8CF',
                    borderRadius: '16px',
                    padding: '1.25rem',
                    marginBottom: '1.25rem',
                    border: '1px solid #C4DCBB',
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.4rem' }}>
                    <Sparkles size={18} color="#102B27" />
                    <span style={{ fontSize: '0.8rem', fontWeight: 700, color: '#102B27', textTransform: 'uppercase' }}>
                      Immediate Match Found!
                    </span>
                  </div>
                  <h4 style={{ fontFamily: "'Manrope', sans-serif", fontSize: '1.15rem', color: '#102B27', marginBottom: '0.3rem' }}>
                    340+ {hometown} natives live in {targetCity}
                  </h4>
                  <p style={{ fontSize: '0.8rem', color: '#26332F', lineHeight: 1.4 }}>
                    We found 18 sample community groups, 24 regional tiffin partners, and 5 peer mentors ready to answer questions.
                  </p>
                </div>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.85rem', marginBottom: '1.25rem' }}>
                  <div>
                    <label style={{ display: 'block', fontSize: '0.8rem', fontWeight: 600, color: '#26332F', marginBottom: '0.3rem' }}>
                      Your Full Name
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Vikramaditya Rathore"
                      value={fullName}
                      onChange={(e) => setFullName(e.target.value)}
                      style={{
                        width: '100%',
                        padding: '0.75rem 1rem',
                        borderRadius: '10px',
                        border: '1px solid #D6E8CF',
                        backgroundColor: '#F7F5EF',
                        fontFamily: 'inherit',
                        fontSize: '0.9rem',
                      }}
                    />
                  </div>
                  <div>
                    <label style={{ display: 'block', fontSize: '0.8rem', fontWeight: 600, color: '#26332F', marginBottom: '0.3rem' }}>
                      Email Address
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="vikram@example.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      style={{
                        width: '100%',
                        padding: '0.75rem 1rem',
                        borderRadius: '10px',
                        border: '1px solid #D6E8CF',
                        backgroundColor: '#F7F5EF',
                        fontFamily: 'inherit',
                        fontSize: '0.9rem',
                      }}
                    />
                  </div>
                </div>

                <div style={{ display: 'flex', gap: '0.5rem' }}>
                  <button
                    type="button"
                    onClick={() => setStep(2)}
                    className="btn btn-secondary"
                    style={{ flex: 1, padding: '0.75rem' }}
                  >
                    Back
                  </button>
                  <button
                    type="submit"
                    className="btn btn-amber"
                    style={{ flex: 2, padding: '0.75rem' }}
                  >
                    Confirm & Join Circles <Check size={16} />
                  </button>
                </div>
              </form>
            )}
          </div>
        )}

        {/* Mode: LOG IN (Demo Mode) */}
        {mode === 'login' && (
          <div>
            <h3
              style={{
                fontFamily: "'Manrope', sans-serif",
                fontSize: '1.25rem',
                color: '#102B27',
                marginBottom: '0.4rem',
              }}
            >
              Sign In to MILO
            </h3>
            <p style={{ fontSize: '0.875rem', color: '#536460', marginBottom: '1.5rem' }}>
              Select a pre-loaded member profile to test the settlement features.
            </p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', marginBottom: '1.5rem' }}>
              <button
                type="button"
                onClick={() => handleDemoLogin('Aarav Sharma (Jaipur → Pune)')}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.85rem',
                  padding: '0.85rem 1rem',
                  borderRadius: '12px',
                  border: '1px solid #D6E8CF',
                  backgroundColor: '#F7F5EF',
                  textAlign: 'left',
                }}
              >
                <div
                  style={{
                    width: '36px',
                    height: '36px',
                    borderRadius: '50%',
                    backgroundColor: '#102B27',
                    color: '#D6E8CF',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontWeight: 700,
                    fontSize: '0.85rem',
                  }}
                >
                  AS
                </div>
                <div style={{ flex: 1 }}>
                  <div style={{ fontSize: '0.875rem', fontWeight: 700, color: '#102B27' }}>
                    Aarav Sharma
                  </div>
                  <div style={{ fontSize: '0.75rem', color: '#536460' }}>
                    Jaipur → Pune (Viman Nagar) · Community Mentor
                  </div>
                </div>
                <span className="tag-pill sage">Demo Profile</span>
              </button>

              <button
                type="button"
                onClick={() => handleDemoLogin('Priya Rathore (Jaipur → Pune)')}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.85rem',
                  padding: '0.85rem 1rem',
                  borderRadius: '12px',
                  border: '1px solid #E8E9E3',
                  backgroundColor: '#FFFFFF',
                  textAlign: 'left',
                }}
              >
                <div
                  style={{
                    width: '36px',
                    height: '36px',
                    borderRadius: '50%',
                    backgroundColor: '#E8B978',
                    color: '#102B27',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontWeight: 700,
                    fontSize: '0.85rem',
                  }}
                >
                  PR
                </div>
                <div style={{ flex: 1 }}>
                  <div style={{ fontSize: '0.875rem', fontWeight: 700, color: '#102B27' }}>
                    Priya Rathore
                  </div>
                  <div style={{ fontSize: '0.75rem', color: '#536460' }}>
                    Jaipur → Pune (Baner) · Tech & Badminton Circle
                  </div>
                </div>
                <span className="tag-pill amber">Demo Profile</span>
              </button>

              <button
                type="button"
                onClick={() => handleDemoLogin('Devanshu Saxena (Lucknow → Bengaluru)')}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.85rem',
                  padding: '0.85rem 1rem',
                  borderRadius: '12px',
                  border: '1px solid #E8E9E3',
                  backgroundColor: '#FFFFFF',
                  textAlign: 'left',
                }}
              >
                <div
                  style={{
                    width: '36px',
                    height: '36px',
                    borderRadius: '50%',
                    backgroundColor: '#26332F',
                    color: '#F7F5EF',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontWeight: 700,
                    fontSize: '0.85rem',
                  }}
                >
                  DS
                </div>
                <div style={{ flex: 1 }}>
                  <div style={{ fontSize: '0.875rem', fontWeight: 700, color: '#102B27' }}>
                    Devanshu Saxena
                  </div>
                  <div style={{ fontSize: '0.75rem', color: '#536460' }}>
                    Lucknow → Bengaluru (HSR) · Product Lead
                  </div>
                </div>
                <span className="tag-pill forest">Demo Profile</span>
              </button>
            </div>

            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem',
                padding: '0.75rem',
                backgroundColor: '#F7F5EF',
                borderRadius: '8px',
                fontSize: '0.75rem',
                color: '#536460',
              }}
            >
              <ShieldCheck size={16} color="#102B27" />
              <span>Simulated authentication session. No backend credentials required.</span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
