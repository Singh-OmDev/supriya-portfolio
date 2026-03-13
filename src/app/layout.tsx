"use client";
import { Analytics } from '@vercel/analytics/next';

import { useState, useEffect } from "react";
import { Playfair_Display, Inter } from "next/font/google"; // Import fonts
import "./globals.css";
import Mascot from "@/components/Mascot";
import MatrixRain from "@/components/MatrixRain";
import CommandPalette from "@/components/CommandPalette";
import VisitorCounter from "@/components/VisitorCounter";

const playfair = Playfair_Display({
  variable: "--font-serif",
  subsets: ["latin"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
  display: "swap",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [isMatrixMode, setIsMatrixMode] = useState(false);

  useEffect(() => {
    const handleMatrixActivation = () => {
      setIsMatrixMode(true);
      document.documentElement.classList.add("matrix-mode");

      // Turn off after 8 seconds
      setTimeout(() => {
        setIsMatrixMode(false);
        document.documentElement.classList.remove("matrix-mode");
      }, 8000);
    };

    window.addEventListener("matrix-mode-activated", handleMatrixActivation);
    return () => window.removeEventListener("matrix-mode-activated", handleMatrixActivation);
  }, []);

  return (
    <html lang="en" className="dark scroll-smooth">
      <head>
        <title>Supriya Singh | Portfolio</title>
        <meta name="description" content="Aspiring Software & AI Developer | Portfolio of Supriya Singh" />
        <link rel="icon" href="/icon.svg" />
      </head>
      <body
        className={`${playfair.variable} ${inter.variable} font-sans antialiased transition-colors duration-300 ${isMatrixMode ? "matrix-active" : ""}`}
        style={{ backgroundColor: 'var(--bg-base)', color: 'var(--text-base)' }}
      >
        <MatrixRain active={isMatrixMode} />
        <Mascot />
        <CommandPalette />
        <VisitorCounter />
        {children}
        <Analytics />

      </body>
    </html>
  );
}
