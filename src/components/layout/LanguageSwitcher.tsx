"use client";

import React, { useState, useEffect, useRef } from 'react';
import Flag from 'react-world-flags';
import { ChevronDown } from 'lucide-react';

interface Language {
  code: string;
  name: string;
  flagCode: string; // ISO 3166-1 alpha-2 code for the flag
}

const languages: Language[] = [
  { code: 'pt', name: 'Português', flagCode: 'BR' },
  { code: 'en', name: 'English', flagCode: 'US' },
  { code: 'es', name: 'Español', flagCode: 'ES' },
  { code: 'zh', name: '中文', flagCode: 'CN' },
  { code: 'uk', name: 'Українська', flagCode: 'UA' },
];

export default function LanguageSwitcher() {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState<Language>(languages[0]);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const toggleDropdown = () => setIsOpen(!isOpen);

  const handleSelectLanguage = (language: Language) => {
    setSelectedLanguage(language);
    setIsOpen(false);
    // Aqui viria a lógica para alterar o idioma do site (ex: router.push ou i18n.changeLanguage)
    console.log(`Idioma selecionado: ${language.name}`);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        onClick={toggleDropdown}
        className="flex items-center p-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
        aria-label="Selecionar idioma"
      >
        <Flag code={selectedLanguage.flagCode} className="w-6 h-auto rounded-sm" />
        <ChevronDown size={16} className={`ml-2 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`} />
      </button>
      {isOpen && (
        <div className="absolute right-0 mt-2 w-48 bg-white dark:bg-gray-800 rounded-md shadow-lg py-1 z-50">
          {languages.map((lang) => (
            <button
              key={lang.code}
              onClick={() => handleSelectLanguage(lang)}
              className="flex items-center w-full px-4 py-2 text-sm text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700"
            >
              <Flag code={lang.flagCode} className="w-5 h-auto mr-3 rounded-sm" />
              {lang.name}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
