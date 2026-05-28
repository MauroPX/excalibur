
import React from 'react';
import type { Metadata } from 'next';
import './globals.css';

/**
 * 🛡️ ROOT LAYOUT v78.0 — UNIVERSAL FONT LOCKDOWN
 * Implements Roboto Flex as the sole font family for the ecosystem.
 */
export const metadata: Metadata = {
  title: 'Mauricio Gómez | Product Architect',
  description: 'Expert in Design Systems, WCAG 2.2 AAA, and AI Orchestration.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Roboto+Flex:opsz,wdth,wght@8..144,25..151,100..1000&display=swap" rel="stylesheet" />
        <link href="https://fonts.cdnfonts.com/css/opendyslexic" rel="stylesheet" />
      </head>
      <body suppressHydrationWarning style={{ fontFamily: "'Roboto Flex', sans-serif" }}>
        {children}
      </body>
    </html>
  );
}
