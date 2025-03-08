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

  // home and reusable
  home: "Home",
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
  copyright: "© 2003-2025 Angel.Taxi - All Rights Reserved",
  guestbook: "Sign our Guestbook",
  favorites: "Add to Favorites",
  starOnGithub: "Give Us a Star",
  inLovingMemoryOf: "In loving memory of Bob",
  bobTribute: "We won't forget you.",
  underConstruction: "UNDER CONSTRUCTION",
  pardon: "PLEASE PARDON OUR STARDUST",
  bestViewed: "WEBSITE BEST VIEWED IN INTERNET EXPLORER 6",
  fastestWay: "The Fastest Way to Heaven!",
  languages: "Languages",

  // about
  ourHistory: "Our Heavenly History",
  foundingStory: "Angel Taxi was founded in the celestial year 0057 when we realized that souls needed a more efficient way to travel between heavenly destinations. Forget Charon's boat service and the stairway to heaven (they're exhausting). Relax and let us take you anywhere at affordable rates.",
  fleetDesc: "Our fleet of cloud-certified taxis has been serving the afterlife community with distinction, earning us the coveted \"5 Halo\" rating from the Celestial Transportation Authority for 20 consecutive years.",
  // charonCompare: "Unlike Charon's ferry service (one river, two coins), we go anywhere in Heaven at affordable rates!",
  firstTaxi: "Our first taxi (circa 0001)",
  fleetToday: "Today, Angel Taxi operates the largest fleet of winged vehicles in all of Heaven, serving both newly arrived souls and long-time residents with our signature celestial comfort.",
  mission: "Our mission is simple: To provide the smoothest transportation experience throughout eternity.",
  meetTeam: "Meet Our Team",
  ceo: "Angel - CEO & Head Driver",
  arrivalManager: "Gabriel - Arrival Services Manager",
  routesCoord: "Michael - Heaven Routes Coordinator",
  maintenance: "Raphael - Celestial Vehicle Maintenance",

  // rates
  ourRates: "Our Heavenly Rates",
  paymentMethods: "All rates are payable in halos, good deeds, or positive karma.",
  arrivalServices: "Arrival Services",
  forNewSouls: "For newly deceased souls in transition",
  standardTransfer: "Standard Arrival Transfer",
  free: "Free",
  firstRideFree: "First ride is on us!",
  expressLane: "Express Processing Lane",
  skipWaiting: "Skip the waiting room",
  orientationTour: "Orientation Tour",
  learnLayout: "Learn the afterlife layout",
  residentServices: "Heaven Resident Services",
  forResidents: "For souls with Heaven ID",
  districtTravel: "Cloud District Travel",
  betweenAreas: "Between residential areas",
  scenicRoutes: "Scenic Routes",
  leisurelyTour: "Leisurely tour with views",
  choirSpecial: "Choir Member Special",
  showId: "Must show choir ID",
  guardianPass: "Guardian Angel Pass",
  unlimitedRides: "Unlimited rides",
  specialDiscounts: "Special Discounts",
  familyDiscount: "Family Reunion Service: 20% group discount",
  vipService: "Saints and VIPs: Priority pickup",
  holidaySurcharge: "Holiday Rush (Christmas, Easter): 10% surcharge",
  newProgram: "NEW!",
  loyaltyProgram: "Loyalty Program: Collect wing stamps and earn free rides!",
  askDriver: "Ask your driver for details",
  tenHalos: "10 halos",
  eightHalos: "8 halos",
  fiveHalos: "5 halos",
  threeHalos: "3 halos",
  oneHalo: "1 halo",
  twentyHalosMonth: "20 halos/month",

  // contact
  contactOffice: "Contact Our Heavenly Office",
  assistance: "For immediate assistance, please use our celestial hotline:",
  hotline: "1-800-ANGEL-TAXI",
  serviceAvailable: "(Service available in all heavenly realms, 24/7)",
  headquarters: "Heavenly Headquarters",
  operatingHours: "Operating Hours",
  eternity: "Eternity - Eternity",
  neverClose: "(We never close!)",
  responseTimes: "* Response times may be longer during raptures and major holidays",
  sendPrayer: "Send Us a Prayer",
  yourName: "Your Name:",
  celestialEmail: "Celestial Email:",
  yourMessage: "Your Message:",
  sendToHeaven: "Send to Heaven",
  formDisclaimer: "* This form doesn't actually work (it's just for show)",
  emergency: "EMERGENCY?",
  urgentPickups: "For urgent pickups, just look up and wave!",
  cloudDetection: "Our cloud detection system will spot you",

};

// Spanish translations
const esTranslations = {

  // home and reusable
  home: "Inicio",
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
  copyright: "© 2003-2025 Angel.Taxi - Todos los derechos reservados",
  guestbook: "Firma en nuestro Libro de Visitas",
  favorites: "Añadir a Favoritos",
  starOnGithub: "Danos una Estrella",
  inLovingMemoryOf: "En cariñoso recuerdo de Bob",
  bobTribute: "No te olvidaremos.",
  underConstruction: "EN OBRAS",
  pardon: "DISCULPEN LAS MOLESTIAS",
  bestViewed: "PÁGINA OPTIMIZADA PARA INTERNET EXPLORER 6",
  fastestWay: "¡La Manera Más Rápida de Llegar al Cielo!",
  languages: "Idiomas",

  // about
  ourHistory: "Nuestra Historia Celestial",
  foundingStory: "Angel Taxi se fundó en el año celestial 0057 cuando nos percatamos de que las almas se perdían buscando la luz al final del túnel. Olvida la barca de Caronte y las escaleras al cielo (son agotadoras). Relájate y deja que te llevemos a cualquier rincón a precios asequibles.",
  fleetDesc: "Nuestra flota de taxis homologados para nubes lleva sirviendo a la comunidad del más allá con distinción, habiendo obtenido la codiciada calificación de \"5 Aureolas\" de la Autoridad de Transporte Celestial durante 20 años consecutivos.",
  // charonCompare: "Olvida la barca de Caronte y las escaleras al cielo. Relájate y deja que te llevemos a cualquier rincón del Cielo a precios asequibles.",
  firstTaxi: "Nuestro primer taxi (año 0001)",
  fleetToday: "A día de hoy, Angel Taxi opera la mayor flota de vehículos alados en todo el Cielo, atendiendo tanto a las almas recién llegadas como a los residentes más veteranos con nuestro característico confort celestial.",
  mission: "Nuestra misión es sencilla: Ofrecer la experiencia de transporte más placentera durante toda la eternidad.",
  meetTeam: "Nuestro Equipo",
  ceo: "Ángel - Director General y Conductor Principal",
  arrivalManager: "Gabriel - Responsable de Servicios de Llegada",
  routesCoord: "Miguel - Coordinador de Rutas Celestiales",
  maintenance: "Rafael - Mantenimiento de Vehículos Celestiales",

  // rates
  ourRates: "Nuestras Tarifas Celestiales",
  paymentMethods: "Aceptamos pagos en aureolas, buenas acciones o karma positivo.",
  arrivalServices: "Servicios de Llegada",
  forNewSouls: "Para almas recién fallecidas en tránsito",
  standardTransfer: "Traslado Estándar de Llegada",
  free: "Gratuito",
  firstRideFree: "¡El primer viaje va por cuenta de la casa!",
  expressLane: "Carril Rápido de Procesamiento",
  skipWaiting: "Evita la sala de espera",
  orientationTour: "Tour de Orientación",
  learnLayout: "Familiarízate con el más allá",
  residentServices: "Servicios para Residentes",
  forResidents: "Para almas con DNI Celestial",
  districtTravel: "Viajes entre Distritos",
  betweenAreas: "Entre zonas residenciales",
  scenicRoutes: "Rutas Panorámicas",
  leisurelyTour: "Paseo turístico con vistas",
  choirSpecial: "Especial para el Coro",
  showId: "Imprescindible mostrar carnet de coro",
  guardianPass: "Abono Ángel Guardián",
  unlimitedRides: "Viajes ilimitados",
  specialDiscounts: "Descuentos Especiales",
  familyDiscount: "Servicio de Reunión Familiar: 20% de descuento para grupos",
  vipService: "Santos y VIPs: Recogida prioritaria",
  holidaySurcharge: "Temporada Alta (Navidad, Semana Santa): 10% de recargo",
  newProgram: "¡NOVEDAD!",
  loyaltyProgram: "Programa de Fidelización: ¡Colecciona sellos de alas y consigue viajes gratis!",
  askDriver: "Consulta los detalles con tu conductor",
  tenHalos: "10 aureolas",
  eightHalos: "8 aureolas",
  fiveHalos: "5 aureolas",
  threeHalos: "3 aureolas",
  oneHalo: "1 aureola",
  twentyHalosMonth: "20 aureolas/mes",

  // contact
  contactOffice: "Contacta con Nuestra Oficina Celestial",
  assistance: "Para asistencia inmediata, llama a nuestra línea directa celestial:",
  hotline: "900-ANGEL-TAXI",
  serviceAvailable: "(Servicio disponible en todos los reinos celestiales, 24/7)",
  headquarters: "Sede Central",
  operatingHours: "Horario",
  eternity: "De Eternidad a Eternidad",
  neverClose: "(¡Nunca cerramos!)",
  responseTimes: "* Los tiempos de respuesta pueden aumentar durante raptos y festividades importantes",
  sendPrayer: "Envíanos una Oración",
  yourName: "Nombre:",
  celestialEmail: "Correo Celestial:",
  yourMessage: "Mensaje:",
  sendToHeaven: "Enviar al Cielo",
  formDisclaimer: "* Este formulario no funciona realmente (es solo decorativo)",
  emergency: "¿URGENCIA?",
  urgentPickups: "Para recogidas urgentes, ¡simplemente mira hacia arriba y saluda!",
  cloudDetection: "Nuestro sistema de detección de nubes te localizará",

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