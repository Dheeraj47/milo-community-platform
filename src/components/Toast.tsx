import React, { useEffect } from 'react';
import { CheckCircle2, Info, X } from 'lucide-react';

export interface ToastMessage {
  id: string;
  type?: 'success' | 'info';
  title: string;
  message: string;
}

interface ToastProps {
  toast: ToastMessage | null;
  onClose: () => void;
}

export const Toast: React.FC<ToastProps> = ({ toast, onClose }) => {
  useEffect(() => {
    if (!toast) return;
    const timer = setTimeout(() => {
      onClose();
    }, 4500);
    return () => clearTimeout(timer);
  }, [toast, onClose]);

  if (!toast) return null;

  return (
    <div
      className="fixed bottom-4 left-4 right-4 sm:left-auto sm:bottom-6 sm:right-6 z-[9999] bg-[#102B27] text-[#F7F5EF] p-4 rounded-2xl shadow-[0_12px_30px_rgba(16,43,39,0.25)] border border-[#26332F] flex items-start gap-3 sm:max-w-[380px] animate-fade-in"
    >
      <div style={{ marginTop: '2px', color: toast.type === 'info' ? '#E8B978' : '#D6E8CF' }}>
        {toast.type === 'info' ? <Info size={20} /> : <CheckCircle2 size={20} />}
      </div>
      <div style={{ flex: 1 }}>
        <h4
          style={{
            fontFamily: "'Manrope', sans-serif",
            fontWeight: 700,
            fontSize: '0.95rem',
            color: '#F7F5EF',
            marginBottom: '0.2rem',
          }}
        >
          {toast.title}
        </h4>
        <p
          style={{
            fontSize: '0.825rem',
            color: '#D6E8CF',
            lineHeight: 1.4,
          }}
        >
          {toast.message}
        </p>
      </div>
      <button
        onClick={onClose}
        style={{
          color: '#E8E9E3',
          opacity: 0.7,
          padding: '2px',
          display: 'flex',
        }}
        aria-label="Close notification"
      >
        <X size={16} />
      </button>
    </div>
  );
};

