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
  welcome: "¡Bienvenidos al Servicio de Taxis Celestiales de Ángel!",
  serving: "Surcando las nubes desde la eternidad. ¡Nuestros conductores angelicales te llevan DONDE QUIERAS!",
  visitors: "Visitantes",
  services: "Nuestros Servicios Divinos",
  service1: "Traslados Entre Nubes",
  service2: "Viajes Exprés a las Puertas del Cielo",
  service3: "Rutas Panorámicas por el Cosmos",
  service4: "Descuentos Especiales para Miembros del Coro",
  comingSoon: "MUY PRONTO",
  gameDesc: "El Juego del Taxi Celestial - ¡Surca las nubes y colecciona aureolas!",
  checkBack: "¡Vuelve la semana que viene!",
  testimonials: "Lo Que Dicen Nuestros Clientes",
  testimonial1: "\"¡Un viaje verdaderamente celestial! ¡5 aureolas de 5!\" - San Pedro",
  testimonial2: "\"¡Ángel me llevó a mi nube puntualmente!\" - Gabriel, Arcángel",
  aboutUs: "Quiénes Somos",
  rates: "Precios",
  contact: "Contacto",
  game: "Juego (Muy Pronto)",
  copyright: "© 2003-2024 Angel.Taxi - Todos los derechos reservados",
  guestbook: "Firma en nuestro Libro de Visitas",
  favorites: "Añadir a Favoritos",
  underConstruction: "EN OBRAS",
  pardon: "DISCULPEN LAS MOLESTIAS",
  bestViewed: "PÁGINA OPTIMIZADA PARA INTERNET EXPLORER 6",
  fastestWay: "¡La Manera Más Rápida de Llegar al Cielo!",
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