'use client';

import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";
import LanguageSelector from "@/components/LanguageSelector";

export default function RatesPage() {
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
          {translations.rates}
        </h2>
      </header>
      
      {/* Main Content */}
      <main className="w-full max-w-4xl flex flex-col items-center">
        <div className="retro-border w-full my-4">
          <h3 className="text-xl font-bold text-center text-fuchsia-500 mb-4">{translations.ourRates}</h3>
          
          <div className="space-y-6">
            <p className="text-center">{translations.paymentMethods}</p>
            
            <div className="bg-blue-900/20 p-4 border border-cyan-400 mb-6">
              <h4 className="text-lg font-bold text-center text-cyan-400 mb-2">{translations.arrivalServices}</h4>
              <p className="text-center text-sm mb-2">{translations.forNewSouls}</p>
            </div>
            
            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="bg-blue-900">
                    <th className="border border-cyan-400 p-2 text-left">Service</th>
                    <th className="border border-cyan-400 p-2 text-center">Rate</th>
                    <th className="border border-cyan-400 p-2 text-center">Notes</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-cyan-400 p-2">{translations.standardTransfer}</td>
                    <td className="border border-cyan-400 p-2 text-center">{translations.free}</td>
                    <td className="border border-cyan-400 p-2 text-sm">{translations.firstRideFree}</td>
                  </tr>
                  <tr className="bg-blue-900/30">
                    <td className="border border-cyan-400 p-2">{translations.expressLane}</td>
                    <td className="border border-cyan-400 p-2 text-center">{translations.tenHalos}</td>
                    <td className="border border-cyan-400 p-2 text-sm">{translations.skipWaiting}</td>
                  </tr>
                  <tr>
                    <td className="border border-cyan-400 p-2">{translations.orientationTour}</td>
                    <td className="border border-cyan-400 p-2 text-center">{translations.fiveHalos}</td>
                    <td className="border border-cyan-400 p-2 text-sm">{translations.learnLayout}</td>
                  </tr>
                </tbody>
              </table>
            </div>
            
            <div className="bg-blue-900/20 p-4 border border-cyan-400 mb-6 mt-8">
              <h4 className="text-lg font-bold text-center text-cyan-400 mb-2">{translations.residentServices}</h4>
              <p className="text-center text-sm mb-2">{translations.forResidents}</p>
            </div>
            
            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="bg-blue-900">
                    <th className="border border-cyan-400 p-2 text-left">Service</th>
                    <th className="border border-cyan-400 p-2 text-center">Rate</th>
                    <th className="border border-cyan-400 p-2 text-center">Notes</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-cyan-400 p-2">{translations.districtTravel}</td>
                    <td className="border border-cyan-400 p-2 text-center">{translations.threeHalos}</td>
                    <td className="border border-cyan-400 p-2 text-sm">{translations.betweenAreas}</td>
                  </tr>
                  <tr className="bg-blue-900/30">
                    <td className="border border-cyan-400 p-2">{translations.scenicRoutes}</td>
                    <td className="border border-cyan-400 p-2 text-center">{translations.eightHalos}</td>
                    <td className="border border-cyan-400 p-2 text-sm">{translations.leisurelyTour}</td>
                  </tr>
                  <tr>
                    <td className="border border-cyan-400 p-2">{translations.choirSpecial}</td>
                    <td className="border border-cyan-400 p-2 text-center">{translations.oneHalo}</td>
                    <td className="border border-cyan-400 p-2 text-sm">{translations.showId}</td>
                  </tr>
                  <tr className="bg-blue-900/30">
                    <td className="border border-cyan-400 p-2">{translations.guardianPass}</td>
                    <td className="border border-cyan-400 p-2 text-center">{translations.twentyHalosMonth}</td>
                    <td className="border border-cyan-400 p-2 text-sm">{translations.unlimitedRides}</td>
                  </tr>
                </tbody>
              </table>
            </div>
            
            <div className="bg-blue-900/20 p-4 border border-cyan-400">
              <h4 className="text-lg font-bold text-center text-cyan-400 mb-2">{translations.specialDiscounts}</h4>
              <ul className="list-disc pl-8">
                <li>{translations.familyDiscount}</li>
                <li>{translations.vipService}</li>
                <li>{translations.holidaySurcharge}</li>
              </ul>
            </div>
            
            <div className="text-center">
              <p className="blink text-fuchsia-500 font-bold">{translations.newProgram}</p>
              <p>{translations.loyaltyProgram}</p>
              <p className="text-sm mt-2">{translations.askDriver}</p>
            </div>
          </div>
        </div>
      </main>
      
      {/* Footer */}
      <footer className="w-full max-w-4xl text-center my-4 text-sm">
        <div className="flex justify-center space-x-4 mb-2">
          <Link href="/" className="hover:text-fuchsia-500">{translations.home}</Link>
          <Link href="/about" className="hover:text-fuchsia-500">{translations.aboutUs}</Link>
          <Link href="/rates" className="hover:text-fuchsia-500 font-bold">{translations.rates}</Link>
          <Link href="/contact" className="hover:text-fuchsia-500">{translations.contact}</Link>
        </div>
        <p>{translations.copyright}</p>
      </footer>
    </div>
  );
} 