'use client';

import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";
import LanguageSelector from "@/components/LanguageSelector";

export default function ContactPage() {
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
          {translations.contact}
        </h2>
      </header>
      
      {/* Main Content */}
      <main className="w-full max-w-4xl flex flex-col items-center">
        <div className="retro-border w-full my-4">
          <h3 className="text-xl font-bold text-center text-fuchsia-500 mb-4">{translations.contactOffice}</h3>
          
          <div className="space-y-6">
            <div className="text-center">
              <p className="mb-2">{translations.assistance}</p>
              <p className="text-cyan-400 font-bold text-xl">{translations.hotline}</p>
              <p className="text-sm">{translations.serviceAvailable}</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="retro-border p-4 bg-blue-900/20">
                <h4 className="text-lg font-bold text-center text-cyan-400 mb-2">{translations.headquarters}</h4>
                <p>Cloud Nine Tower, Suite 777</p>
                <p>Pearly Gates District</p>
                <p>Heaven, H3V 3N</p>
                <p className="mt-2">Email: dispatch@angel.taxi</p>
              </div>
              
              <div className="retro-border p-4 bg-blue-900/20">
                <h4 className="text-lg font-bold text-center text-cyan-400 mb-2">{translations.operatingHours}</h4>
                <p>{translations.eternity}</p>
                <p>{translations.neverClose}</p>
                <p className="mt-2 text-sm">{translations.responseTimes}</p>
              </div>
            </div>
            
            <div className="retro-border p-4">
              <h4 className="text-lg font-bold text-center text-cyan-400 mb-4">{translations.sendPrayer}</h4>
              
              <form className="space-y-4">
                <div>
                  <label className="block mb-1 text-fuchsia-500">{translations.yourName}</label>
                  <input type="text" className="w-full p-2 bg-blue-900/30 border border-cyan-400 text-yellow-100" />
                </div>
                
                <div>
                  <label className="block mb-1 text-fuchsia-500">{translations.celestialEmail}</label>
                  <input type="email" className="w-full p-2 bg-blue-900/30 border border-cyan-400 text-yellow-100" />
                </div>
                
                <div>
                  <label className="block mb-1 text-fuchsia-500">{translations.yourMessage}</label>
                  <textarea rows={4} className="w-full p-2 bg-blue-900/30 border border-cyan-400 text-yellow-100"></textarea>
                </div>
                
                <div className="text-center">
                  <button type="button" className="px-4 py-2 bg-fuchsia-700 hover:bg-fuchsia-600 text-white font-bold">
                    {translations.sendToHeaven}
                  </button>
                </div>
                
                <p className="text-center text-sm">{translations.formDisclaimer}</p>
              </form>
            </div>
            
            <div className="text-center">
              <p className="blink text-fuchsia-500 font-bold">{translations.emergency}</p>
              <p>{translations.urgentPickups}</p>
              <p className="text-sm mt-2">{translations.cloudDetection}</p>
            </div>
          </div>
        </div>
      </main>
      
      {/* Footer */}
      <footer className="w-full max-w-4xl text-center my-4 text-sm">
        <div className="flex justify-center space-x-4 mb-2">
          <Link href="/" className="hover:text-fuchsia-500">{translations.home}</Link>
          <Link href="/about" className="hover:text-fuchsia-500">{translations.aboutUs}</Link>
          <Link href="/rates" className="hover:text-fuchsia-500">{translations.rates}</Link>
          <Link href="/contact" className="hover:text-fuchsia-500 font-bold">{translations.contact}</Link>
        </div>
        <p>{translations.copyright}</p>
      </footer>
    </div>
  );
} 