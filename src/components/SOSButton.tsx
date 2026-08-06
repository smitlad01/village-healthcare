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
          className="relative flex items-center justify-center w-16 h-16 rounded-full bg-[var(--danger)] text-white shadow-[0_0_20px_var(--danger)] transition-transform hover:scale-110 active:scale-95"
          aria-label="Emergency SOS"
        >
          <div className="absolute inset-0 rounded-full border-2 border-[var(--danger)] animate-[ping_2s_cubic-bezier(0,0,0.2,1)_infinite] opacity-75"></div>
          <Phone className="w-8 h-8" />
        </button>
      </div>

      <AnimatePresence>
        {isOpen && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center px-4 bg-black/50 backdrop-blur-sm">
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="glass-panel w-full max-w-sm overflow-hidden"
            >
              <div className="p-4 bg-[var(--danger)]/20 border-b border-[var(--danger)]/30 flex justify-between items-center">
                <div className="flex items-center gap-2 text-[var(--danger)] font-bold">
                  <HeartPulse className="w-5 h-5 animate-pulse" />
                  EMERGENCY SOS
                </div>
                <button onClick={() => setIsOpen(false)} className="text-gray-400 hover:text-white transition-colors">
                  <X className="w-6 h-6" />
                </button>
              </div>

              <div className="p-6 flex flex-col gap-4">
                <p className="text-[var(--text-secondary)] text-sm text-center mb-2">
                  Select an emergency service to contact immediately.
                </p>

                <a href="tel:108" className="btn btn-primary w-full justify-start text-lg bg-[var(--danger)] hover:bg-red-700 hover:shadow-[0_0_15px_var(--danger)] py-4">
                  <PhoneCall className="w-6 h-6 mr-3" />
                  Call 108 (Ambulance)
                </a>
                
                <button className="btn btn-secondary w-full justify-start py-4">
                  <Phone className="w-6 h-6 mr-3" />
                  Contact Local ASHA Worker
                </button>
                
                <button className="btn btn-outline w-full justify-start py-4">
                  <MapPin className="w-6 h-6 mr-3" />
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
