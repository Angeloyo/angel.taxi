'use client';

import Image from "next/image";
import { useLanguage } from "@/context/LanguageContext";
import LanguageSelector from "@/components/LanguageSelector";
import Footer from "@/components/Footer";
import { useVisitorCounter } from "@/hooks/useVisitorCounter";

export default function Home() {
  const { translations } = useLanguage();
  const { formattedCount, loading } = useVisitorCounter();

  return (
    <div className="flex flex-col items-center min-h-screen p-4">
      {/* Under Construction Banner */}
      <div className="w-full bg-yellow-300 text-center p-2 marquee">
        <span className="text-black font-bold">
          🚧 {translations.underConstruction} 🚧 {translations.pardon} 🚧 {translations.bestViewed} 🚧
        </span>
      </div>
      
      {/* Navigation Bar */}
      <div className="w-full max-w-4xl flex justify-end items-center mt-2">
        <LanguageSelector />
      </div>
      
      {/* Header */}
      <header className="w-full max-w-4xl text-center my-4">
        <div className="relative w-24 h-24 md:w-32 md:h-32 mx-auto mb-4">
          <Image
            src="/taxi4.png"
            alt="Angel Taxi Logo"
            fill
            className="object-contain"
            priority
          />
        </div>
        <h1 className="text-4xl md:text-6xl font-bold text-yellow-300 blink">
          ANGEL.TAXI
        </h1>
        <h2 className="text-xl md:text-2xl text-cyan-400 mt-2">
          ✨ {translations.fastestWay} ✨
        </h2>
      </header>
      
      {/* Main Content */}
      <main className="w-full max-w-4xl flex flex-col items-center">
        {/* Welcome Message */}
        <div className="retro-border w-full my-4 text-center">
          <h3 className="text-2xl font-bold text-fuchsia-500 mb-2">{translations.welcome}</h3>
          <p className="mb-4">{translations.serving}</p>
          <div className="flex justify-center my-4">
            <div className="visitor-counter mx-auto">
              {translations.visitors}: {loading ? (
                <span className="counter-loading">&nbsp;</span>
              ) : (
                <span className="w-[60px] inline-block text-center">{formattedCount}</span>
              )}
            </div>
          </div>
        </div>
        
        {/* <div className="relative w-full h-6 my-4">
          <Image
            src="/divider2.png"
            alt="Decorative Divider"
            fill
            className="object-contain"
          />
        </div> */}
        
        {/* Services */}
        <div className="retro-border w-full my-4">
          <h3 className="text-xl font-bold text-center text-fuchsia-500 mb-2">{translations.services}</h3>
          <ul className="list-disc pl-8">
            <li className="mb-2">{translations.service1}</li>
            <li className="mb-2">{translations.service2}</li>
            <li className="mb-2">{translations.service3}</li>
            <li className="mb-2">{translations.service4}</li>
          </ul>
        </div>
        
        {/* <div className="relative w-full h-6 my-4">
          <Image
            src="/divider2.png"
            alt="Decorative Divider"
            fill
            className="object-contain"
          />
        </div> */}
        
        {/* Coming Soon */}
        <div className="retro-border w-full my-4 text-center">
          <h3 className="text-xl font-bold text-fuchsia-500 mb-2">
            <span className="blink">🎮 {translations.comingSoon} 🎮</span>
          </h3>
          <p>{translations.gameDesc}</p>
          <p className="text-sm mt-2">{translations.checkBack}</p>
        </div>
        
        {/* <div className="relative w-full h-6 my-4">
          <Image
            src="/divider2.png"
            alt="Decorative Divider"
            fill
            className="object-contain"
          />
        </div> */}
        
        {/* Testimonials */}
        <div className="retro-border w-full my-4">
          <h3 className="text-xl font-bold text-center text-fuchsia-500 mb-2">{translations.testimonials}</h3>
          <blockquote className="italic border-l-4 border-cyan-400 pl-4 my-2">
            {translations.testimonial1}
          </blockquote>
          <blockquote className="italic border-l-4 border-cyan-400 pl-4 my-2">
            {translations.testimonial2}
          </blockquote>
        </div>
        
        {/* Bob Tribute */}
        <div className="retro-border w-full my-4 bg-blue-900/20">
          <div className="p-4">
            <div className="flex flex-col md:flex-row items-center md:items-start gap-6">
              <div className="relative w-[14.8rem] h-[11rem] flex-shrink-0 border-4 border-yellow-300 p-1 bg-black shadow-lg">
                <Image
                  src="/bob5.png"
                  alt="Bob"
                  fill
                  className="object-contain"
                />
              </div>
              <div className="text-center md:text-left flex flex-col justify-center">
                <p className="text-fuchsia-400 font-bold text-xl mb-2">{translations.inLovingMemoryOf || "In loving memory of Bob"}</p>
                <p className="text-yellow-200 text-sm mb-3">1372 - 2024 AD</p>
                <p className="italic">
                  {translations.bobTribute || "We won't forget you."}
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
      
      {/* Footer */}
      <Footer />
    </div>
  );
}
