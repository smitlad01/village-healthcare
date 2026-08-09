"use client";

import React, { useState } from 'react';
import { Phone, PhoneCall, HeartPulse, MapPin, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function SOSButton() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div className="fixed bottom-6 right-6 z-50">
        <button
          onClick={() => setIsOpen(true)}
          className="relative flex items-center justify-center rounded-full text-white transition-transform hover:scale-110 active:scale-95"
          style={{
            width: '4rem',
            height: '4rem',
            backgroundColor: '#ef4444',
            boxShadow: '0 0 20px #ef4444',
            border: 'none',
            cursor: 'pointer'
          }}
          aria-label="Emergency SOS"
        >
          <div
            className="absolute rounded-full border-2 opacity-75"
            style={{
              inset: 0,
              borderColor: '#ef4444'
            }}
          ></div>
          <Phone size={32} />
        </button>
      </div>

      <AnimatePresence>
        {isOpen && (
          <div
            className="fixed flex items-center justify-center p-4"
            style={{
              inset: 0,
              zIndex: 100,
              backgroundColor: 'rgba(0, 0, 0, 0.5)',
              backdropFilter: 'blur(4px)',
              WebkitBackdropFilter: 'blur(4px)'
            }}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="glass-panel w-full overflow-hidden"
              style={{ maxWidth: '24rem' }}
            >
              <div
                className="p-4 flex justify-between items-center"
                style={{
                  backgroundColor: 'rgba(239, 68, 68, 0.2)',
                  borderBottom: '1px solid rgba(239, 68, 68, 0.3)'
                }}
              >
                <div className="flex items-center gap-2 font-bold" style={{ color: '#ef4444' }}>
                  <HeartPulse size={20} className="animate-pulse" />
                  EMERGENCY SOS
                </div>
                <button
                  onClick={() => setIsOpen(false)}
                  className="transition-colors"
                  style={{ color: '#9ca3af', background: 'transparent', border: 'none', cursor: 'pointer' }}
                >
                  <X size={24} />
                </button>
              </div>

              <div className="p-6 flex flex-col gap-4">
                <p className="text-sm text-center mb-2" style={{ color: 'var(--text-secondary)' }}>
                  Select an emergency service to contact immediately.
                </p>

                <a
                  href="tel:108"
                  className="btn btn-primary w-full justify-start text-lg"
                  style={{
                    backgroundColor: '#ef4444',
                    color: '#ffffff',
                    boxShadow: '0 0 15px rgba(239, 68, 68, 0.5)',
                    paddingTop: '1rem',
                    paddingBottom: '1rem'
                  }}
                >
                  <PhoneCall size={24} style={{ marginRight: '0.75rem' }} />
                  Call 108 (Ambulance)
                </a>
                
                <button className="btn btn-secondary w-full justify-start" style={{ paddingTop: '1rem', paddingBottom: '1rem' }}>
                  <Phone size={24} style={{ marginRight: '0.75rem' }} />
                  Contact Local ASHA Worker
                </button>
                
                <button className="btn btn-outline w-full justify-start" style={{ paddingTop: '1rem', paddingBottom: '1rem' }}>
                  <MapPin size={24} style={{ marginRight: '0.75rem' }} />
                  Share My Location
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
}
