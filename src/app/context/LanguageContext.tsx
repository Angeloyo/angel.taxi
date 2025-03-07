'use client';

import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';

// Define available languages
export type Language = 'en' | 'es';

// Define the context type
type LanguageContextType = {
  language: Language;
  setLanguage: (lang: Language) => void;
  translations: Record<string, string>;
};

// Create the context with default values
const LanguageContext = createContext<LanguageContextType>({
  language: 'en',
  setLanguage: () => {},
  translations: {},
});

// English translations
const enTranslations = {
  welcome: "Welcome to Angel's Celestial Taxi Service!",
  serving: "Serving the clouds since eternity. Our angelic drivers will take you ANYWHERE!",
  visitors: "Visitors",
  services: "Our Heavenly Services",
  service1: "Cloud-to-Cloud Transportation",
  service2: "Express Rides to Pearly Gates",
  service3: "Scenic Tours of the Cosmos",
  service4: "Special Rates for Choir Members",
  comingSoon: "COMING SOON",
  gameDesc: "Angel Taxi Game - Navigate through the clouds and collect halos!",
  checkBack: "Check back next week!",
  testimonials: "Customer Testimonials",
  testimonial1: "\"My ride was absolutely heavenly! 5 halos out of 5!\" - St. Peter",
  testimonial2: "\"Angel got me to my cloud on time!\" - Gabriel, Archangel",
  aboutUs: "About Us",
  rates: "Rates",
  contact: "Contact",
  game: "Game (Coming Soon)",
  copyright: "© 2003-2024 Angel.Taxi - All Rights Reserved",
  guestbook: "Sign our Guestbook",
  favorites: "Add to Favorites",
  underConstruction: "UNDER CONSTRUCTION",
  pardon: "PLEASE PARDON OUR STARDUST",
  bestViewed: "WEBSITE BEST VIEWED IN INTERNET EXPLORER 6",
  fastestWay: "The Fastest Way to Heaven!",
  languages: "Languages",
};

// Spanish translations
const esTranslations = {
  welcome: "¡Bienvenido al Servicio de Taxi Celestial de Angel!",
  serving: "Sirviendo a las nubes desde la eternidad. ¡Nuestros conductores angelicales te llevarán A CUALQUIER LUGAR!",
  visitors: "Visitantes",
  services: "Nuestros Servicios Celestiales",
  service1: "Transporte de Nube a Nube",
  service2: "Viajes Expresos a las Puertas del Cielo",
  service3: "Tours Escénicos por el Cosmos",
  service4: "Tarifas Especiales para Miembros del Coro",
  comingSoon: "PRÓXIMAMENTE",
  gameDesc: "Juego de Taxi Angelical - ¡Navega por las nubes y colecciona halos!",
  checkBack: "¡Vuelve la próxima semana!",
  testimonials: "Testimonios de Clientes",
  testimonial1: "\"¡Mi viaje fue absolutamente celestial! ¡5 halos de 5!\" - San Pedro",
  testimonial2: "\"¡Angel me llevó a mi nube a tiempo!\" - Gabriel, Arcángel",
  aboutUs: "Sobre Nosotros",
  rates: "Tarifas",
  contact: "Contacto",
  game: "Juego (Próximamente)",
  copyright: "© 2003-2024 Angel.Taxi - Todos los Derechos Reservados",
  guestbook: "Firma nuestro Libro de Visitas",
  favorites: "Añadir a Favoritos",
  underConstruction: "EN CONSTRUCCIÓN",
  pardon: "PERDONE NUESTRO POLVO ESTELAR",
  bestViewed: "SITIO MEJOR VISTO EN INTERNET EXPLORER 6",
  fastestWay: "¡La Forma Más Rápida de Llegar al Cielo!",
  languages: "Idiomas",
};

// All translations
const translations: Record<Language, Record<string, string>> = {
  en: enTranslations,
  es: esTranslations,
};

// Provider component
export function LanguageProvider({ children }: { children: ReactNode }) {
  // Initialize with browser language or default to English
  const [language, setLanguage] = useState<Language>('en');

  // Effect to load saved language preference
  useEffect(() => {
    const savedLanguage = localStorage.getItem('angelTaxiLanguage') as Language;
    if (savedLanguage && (savedLanguage === 'en' || savedLanguage === 'es')) {
      setLanguage(savedLanguage);
    }
  }, []);

  // Save language preference when it changes
  useEffect(() => {
    localStorage.setItem('angelTaxiLanguage', language);
  }, [language]);

  return (
    <LanguageContext.Provider
      value={{
        language,
        setLanguage,
        translations: translations[language],
      }}
    >
      {children}
    </LanguageContext.Provider>
  );
}

// Custom hook to use the language context
export function useLanguage() {
  return useContext(LanguageContext);
} 