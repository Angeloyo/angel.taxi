'use client';

import { useState } from 'react';
import { useLanguage, Language } from '../context/LanguageContext';

export default function LanguageSelector() {
  const { language, setLanguage, translations } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const selectLanguage = (lang: Language) => {
    setLanguage(lang);
    setIsOpen(false);
  };

  // Flag images for each language
  const flags: Record<Language, string> = {
    en: '🇺🇸',
    es: '🇪🇸',
  };

  // Language names
  const languageNames: Record<Language, string> = {
    en: 'English',
    es: 'Español',
  };

  return (
    <div className="relative">
      <button 
        onClick={toggleDropdown}
        className="retro-border px-2 py-1 flex items-center text-sm"
      >
        <span className="mr-2">{flags[language]}</span>
        <span>{translations.languages}</span>
        <span className="ml-1">▼</span>
      </button>
      
      {isOpen && (
        <div className="absolute right-0 mt-1 w-40 retro-border z-10">
          {Object.entries(languageNames).map(([code, name]) => (
            <button
              key={code}
              onClick={() => selectLanguage(code as Language)}
              className={`w-full text-left px-2 py-1 flex items-center hover:bg-cyan-900 ${
                language === code ? 'bg-cyan-900' : ''
              }`}
            >
              <span className="mr-2">{flags[code as Language]}</span>
              <span>{name}</span>
            </button>
          ))}
        </div>
      )}
    </div>
  );
} 