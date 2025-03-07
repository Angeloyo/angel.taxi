'use client';

import Link from "next/link";
import { usePathname } from 'next/navigation';
import { useLanguage } from "@/context/LanguageContext";

export default function Footer() {
  const { translations } = useLanguage();
  const pathname = usePathname();
  
  // Helper function to determine if a link is active
  const isActive = (path: string) => pathname === path;
  
  return (
    <footer className="w-full max-w-4xl text-center my-4 text-sm">
      <div className="flex justify-center space-x-4 mb-2">
        <Link 
          href="/" 
          className={`hover:text-fuchsia-500 ${isActive('/') ? 'font-bold' : ''}`}
        >
          {translations.home}
        </Link>
        <Link 
          href="/about" 
          className={`hover:text-fuchsia-500 ${isActive('/about') ? 'font-bold' : ''}`}
        >
          {translations.aboutUs}
        </Link>
        <Link 
          href="/rates" 
          className={`hover:text-fuchsia-500 ${isActive('/rates') ? 'font-bold' : ''}`}
        >
          {translations.rates}
        </Link>
        <Link 
          href="/contact" 
          className={`hover:text-fuchsia-500 ${isActive('/contact') ? 'font-bold' : ''}`}
        >
          {translations.contact}
        </Link>
      </div>
      <p>{translations.copyright}</p>
      <p className="text-xs mt-1">
        <span className="mr-2">
          <a href="#" className="hover:text-fuchsia-500">{translations.guestbook}</a>
        </span>
        <span>
          <a 
            href="https://github.com/Angeloyo/angel.taxi" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="hover:text-fuchsia-500"
          >
            {/* ⭐ {translations.starOnGithub} ⭐ */}
            {translations.starOnGithub}
          </a>
        </span>
      </p>
    </footer>
  );
} 