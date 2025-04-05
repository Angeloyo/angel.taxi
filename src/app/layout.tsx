import type { Metadata } from "next";
import { Comic_Neue } from "next/font/google";
import "./globals.css";
import { LanguageProvider } from "@/context/LanguageContext";
import { BackgroundWrapper } from "@/components/BackgroundWrapper";
import Script from "next/script";

const comicNeue = Comic_Neue({
  weight: ['300', '400', '700'],
  subsets: ["latin"],
  display: 'swap',
});

export const metadata: Metadata = {
  title: "Angel.Taxi - Heavenly Transportation Services",
  description: "The fastest way to heaven! Angel's Celestial Taxi Service - Serving the clouds since eternity.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {process.env.NODE_ENV === 'production' && (
          <Script
            defer
            src="https://analytics.angeloyo.com/script.js"
            data-website-id="59f6382a-7833-49b1-8840-c79db1ca442c"
            strategy="afterInteractive"
          />
        )}
      </head>
      <body className={`${comicNeue.className}`}>
        <LanguageProvider>
          <BackgroundWrapper>
            {children}
          </BackgroundWrapper>
        </LanguageProvider>
      </body>
    </html>
  );
}
