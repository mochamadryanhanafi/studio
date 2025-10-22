"use client";

import React, { createContext, useContext, useState, ReactNode, useCallback } from 'react';
import en from './locales/en.json';
import id from './locales/id.json';

type Language = 'en' | 'id';

const translations = { en, id };

// Helper function to get nested values
const getNestedValue = (obj: any, path: string): string => {
  return path.split('.').reduce((acc, part) => acc && acc[part], obj);
};

interface LanguageContextType {
  language: Language;
  setLanguage: (language: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguage] = useState<Language>('en');

  const t = useCallback((key: string): string => {
    const translation = getNestedValue(translations[language], key);
    if (!translation) {
      // Fallback to English if translation is missing
      const fallback = getNestedValue(translations.en, key);
      return fallback || key;
    }
    return translation;
  }, [language]);

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useTranslation = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useTranslation must be used within a LanguageProvider');
  }
  return context;
};
