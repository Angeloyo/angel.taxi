import type { Metadata } from "next";
import { Comic_Neue } from "next/font/google";
import "./globals.css";

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
      <body className={`${comicNeue.className}`}>
        {children}
      </body>
    </html>
  );
}
