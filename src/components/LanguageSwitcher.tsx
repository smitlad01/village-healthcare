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
  { code: 'kn', name: 'Kannada', script: 'कन्नड' },
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
        className="flex items-center gap-2 px-3.5 py-2 rounded-full bg-white/15 hover:bg-white/25 border border-white/25 text-white font-bold text-sm shadow-md transition-all backdrop-blur-md cursor-pointer"
        aria-label="Select Language"
      >
        <Globe className="w-4 h-4 text-[#7ebf1a]" />
        <span className="text-sm font-bold text-white hidden sm:inline">{selected.script}</span>
        <span className="text-sm font-bold text-white sm:hidden">{selected.code.toUpperCase()}</span>
        <ChevronDown className="w-4 h-4 text-gray-200" />
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            transition={{ duration: 0.2 }}
            className="absolute right-0 top-full mt-2 w-48 bg-[#072529] border border-white/20 rounded-2xl shadow-2xl overflow-hidden z-50 flex flex-col"
          >
            {languages.map((lang) => (
              <button
                key={lang.code}
                onClick={() => selectLanguage(lang)}
                className={`text-left px-4 py-3 hover:bg-white/15 transition-colors flex items-center justify-between
                  ${selected.code === lang.code ? 'bg-[#7ebf1a]/20 text-[#7ebf1a] font-bold' : 'text-white'}
                `}
              >
                <span className="font-semibold">{lang.script}</span>
                <span className="text-xs text-gray-400">{lang.name}</span>
              </button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
