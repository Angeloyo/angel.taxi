'use client';

import Image from "next/image";
import Link from "next/link";
import { useLanguage } from "./context/LanguageContext";
import LanguageSelector from "./components/LanguageSelector";

export default function Home() {
  const { translations } = useLanguage();

  return (
    <div className="flex flex-col items-center min-h-screen p-4">
      {/* Under Construction Banner */}
      <div className="w-full bg-yellow-300 text-center p-2 marquee">
        <span className="text-black font-bold">
          🚧 {translations.underConstruction} 🚧 {translations.pardon} 🚧 {translations.bestViewed} 🚧
        </span>
      </div>
      
      {/* Language Selector */}
      <div className="self-end mt-2 mr-2">
        <LanguageSelector />
      </div>
      
      {/* Header */}
      <header className="w-full max-w-4xl text-center my-4">
        <div className="relative max-w-44 h-[130px] mx-auto mb-4">
          <Image
            src="/taxi2.png"
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
              {translations.visitors}: 000738
            </div>
          </div>
        </div>
        
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
        
        {/* Coming Soon */}
        <div className="retro-border w-full my-4 text-center">
          <h3 className="text-xl font-bold text-fuchsia-500 mb-2">
            <span className="blink">🎮 {translations.comingSoon} 🎮</span>
          </h3>
          <p>{translations.gameDesc}</p>
          <p className="text-sm mt-2">{translations.checkBack}</p>
        </div>
        
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
      </main>
      
      {/* Footer */}
      <footer className="w-full max-w-4xl text-center my-4 text-sm">
        <div className="flex justify-center space-x-4 mb-2">
          <Link href="/about" className="hover:text-fuchsia-500">{translations.aboutUs}</Link>
          <Link href="/rates" className="hover:text-fuchsia-500">{translations.rates}</Link>
          <Link href="/contact" className="hover:text-fuchsia-500">{translations.contact}</Link>
          <Link href="/game" className="hover:text-fuchsia-500">{translations.game}</Link>
        </div>
        <p>{translations.copyright}</p>
        <p className="text-xs mt-1">
          <span className="mr-2">
            <a href="#" className="hover:text-fuchsia-500">{translations.guestbook}</a>
          </span>
          <span>
            <a href="#" className="hover:text-fuchsia-500">{translations.favorites}</a>
          </span>
        </p>
      </footer>
    </div>
  );
}
