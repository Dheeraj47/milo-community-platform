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
      style={{
        position: 'fixed',
        bottom: '24px',
        right: '24px',
        zIndex: 9999,
        backgroundColor: '#102B27',
        color: '#F7F5EF',
        padding: '1rem 1.25rem',
        borderRadius: '16px',
        boxShadow: '0 12px 30px rgba(16, 43, 39, 0.25)',
        border: '1px solid #26332F',
        display: 'flex',
        alignItems: 'flex-start',
        gap: '0.85rem',
        maxWidth: '380px',
        animation: 'fadeIn 0.25s ease-out',
      }}
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

