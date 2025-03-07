'use client';

import Link from "next/link";
import Image from "next/image";
import { useLanguage } from "@/context/LanguageContext";
import LanguageSelector from "@/components/LanguageSelector";
import Footer from "@/components/Footer";

export default function AboutPage() {
  const { translations } = useLanguage();
  
  return (
    <div className="flex flex-col items-center min-h-screen p-4">
      {/* Under Construction Banner */}
      <div className="w-full bg-yellow-300 text-center p-2 marquee">
        <span className="text-black font-bold">
          🚧 {translations.underConstruction} 🚧 {translations.pardon} 🚧 {translations.bestViewed} 🚧
        </span>
      </div>
      
      {/* Navigation Bar */}
      <div className="w-full max-w-4xl flex justify-between items-center mt-2">
        <Link 
          href="/" 
          className="language-selector-button px-4 py-1 flex items-center text-sm rounded"
        >
          <span className="font-bold">← {translations.home}</span>
        </Link>
        <LanguageSelector />
      </div>
      
      {/* Header */}
      <header className="w-full max-w-4xl text-center my-4">
        <h1 className="text-3xl md:text-4xl font-bold text-yellow-300">
          ANGEL.TAXI
        </h1>
        <h2 className="text-xl md:text-2xl text-cyan-400 mt-2">
          {translations.aboutUs}
        </h2>
      </header>
      
      {/* Main Content */}
      <main className="w-full max-w-4xl flex flex-col items-center">
        <div className="retro-border w-full my-4">
          <h3 className="text-xl font-bold text-center text-fuchsia-500 mb-4">{translations.ourHistory}</h3>
          
          <div className="space-y-4">
            <p>{translations.foundingStory}</p>
            
            <p>{translations.fleetDesc}</p>
            
            {/* <p>{translations.charonCompare}</p> */}
            
            <div className="my-6 text-center">
              <div className="inline-block retro-border p-2 bg-blue-900 rotate-[-3deg]">
                <p className="text-sm italic mb-2">{translations.firstTaxi}</p>
                <div className="relative w-48 h-48 mx-auto">
                  <Image
                    src="/taxi-photo.png"
                    alt="First Angel Taxi"
                    fill
                    className="object-contain"
                  />
                </div>
              </div>
            </div>
            
            <p>{translations.fleetToday}</p>
            
            <p>{translations.mission}</p>
            
            <div className="text-center mt-6">
              <h4 className="text-lg font-bold text-cyan-400 mb-2">{translations.meetTeam}</h4>
              <p>{translations.ceo}</p>
              <p>{translations.arrivalManager}</p>
              <p>{translations.routesCoord}</p>
              <p>{translations.maintenance}</p>
            </div>
          </div>
        </div>
      </main>
      
      {/* Footer */}
      <Footer />
    </div>
  );
} 