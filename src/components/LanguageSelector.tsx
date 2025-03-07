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

  // Language names
  const languageNames: Record<Language, string> = {
    en: 'English',
    es: 'Español',
  };

  // Language codes for display
  const languageCodes: Record<Language, string> = {
    en: 'EN',
    es: 'ES',
  };

  return (
    <div className="relative">
      <button 
        onClick={toggleDropdown}
        className="language-selector-button px-3 py-1 flex items-center text-sm rounded"
      >
        <span className="language-code font-bold mr-1">{languageCodes[language]}</span>
        <span className="hidden sm:inline">{translations.languages}</span>
        <span className="ml-1">▼</span>
      </button>
      
      {isOpen && (
        <div className="absolute right-0 mt-1 w-40 retro-border z-10">
          {Object.entries(languageNames).map(([code, name]) => (
            <button
              key={code}
              onClick={() => selectLanguage(code as Language)}
              className={`language-option w-full text-left px-3 py-1 flex items-center ${
                language === code ? 'bg-cyan-900' : ''
              }`}
            >
              <span className="language-code font-bold mr-2">{languageCodes[code as Language]}</span>
              <span>{name}</span>
            </button>
          ))}
        </div>
      )}
    </div>
  );
} 