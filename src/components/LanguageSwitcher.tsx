"use client";

import React, { useState, useEffect, useRef } from 'react';
import { Globe, ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const languages = [
  { code: 'en', name: 'English', script: 'English' },
  { code: 'hi', name: 'Hindi', script: 'हिन्दी' },
  { code: 'mr', name: 'Marathi', script: 'मराठी' },
  { code: 'bn', name: 'Bengali', script: 'বাংলা' },
  { code: 'ta', name: 'Tamil', script: 'தமிழ்' },
  { code: 'te', name: 'Telugu', script: 'తెలుగు' },
  { code: 'kn', name: 'Kannada', script: 'ಕನ್ನಡ' },
  { code: 'gu', name: 'Gujarati', script: 'ગુજરાતી' },
];

export default function LanguageSwitcher() {
  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState(languages[0]);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const savedLang = localStorage.getItem('vhain-lang');
    if (savedLang) {
      const found = languages.find(l => l.code === savedLang);
      if (found) setSelected(found);
    }
  }, []);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const selectLanguage = (lang: typeof languages[0]) => {
    setSelected(lang);
    localStorage.setItem('vhain-lang', lang.code);
    setIsOpen(false);
  };

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 px-3 py-2 rounded-full glass-panel hover:bg-white/10 transition-colors border border-white/5"
      >
        <Globe className="w-4 h-4 text-[var(--accent)]" />
        <span className="text-sm font-medium hidden sm:inline">{selected.script}</span>
        <span className="text-sm font-medium sm:hidden">{selected.code.toUpperCase()}</span>
        <ChevronDown className="w-4 h-4 text-[var(--text-secondary)]" />
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            transition={{ duration: 0.2 }}
            className="absolute right-0 top-full mt-2 w-48 glass-panel overflow-hidden z-50 flex flex-col"
          >
            {languages.map((lang) => (
              <button
                key={lang.code}
                onClick={() => selectLanguage(lang)}
                className={`text-left px-4 py-3 hover:bg-white/10 transition-colors flex items-center justify-between
                  ${selected.code === lang.code ? 'bg-[var(--accent)]/10 text-[var(--accent)]' : 'text-[var(--text-primary)]'}
                `}
              >
                <span>{lang.script}</span>
                <span className="text-xs text-[var(--text-muted)]">{lang.name}</span>
              </button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
