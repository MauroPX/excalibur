
'use client';

import React, { useState, useEffect } from 'react';
import { InquisitorHUD } from '../components/InquisitorHUD';
import { TitanRAGAgent } from '../components/TitanRAGAgent';
import { LiquidFAB } from '../components/StaffAtoms';

/**
 *  TITAN v91.0 — FINAL MASTER DELIVERY
 * Features:
 * - Direct Iframe Cache-Busting (v=91).
 * - PAR Method Visualization.
 * - Universal Roboto Flex Sovereignty.
 */
export default function Home() {
  const [activeTool, setActiveTool] = useState<'NONE' | 'AI' | 'A11Y'>('NONE');
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    console.log('--- EXCALIBUR v91.0: MASTER DELIVERY ACTIVE ---');
  }, []);

  if (!mounted) return <div style={{ background: '#080C12', height: '100vh' }} />;

  const close = () => setActiveTool('NONE');

  return (
    <div style={{ position: 'fixed', inset: 0, width: '100vw', height: '100vh', overflow: 'hidden', background: '#080C12' }}>
      
      {/* 🏛️ BASE LAYER: THE IFRAME (Forced Cache-Busting v91) */}
      <iframe 
        src="/original/index_clean.html?v=91.0" 
        style={{ 
          position: 'absolute', 
          inset: 0,
          width: '100%', height: '100%', 
          border: 'none',
          zIndex: 1
        }}
        title="Mauro GOOC Staff Portfolio"
      />

      {/* 🧩 UI LAYER: GOBERNANZA A11Y */}
      <div style={{ position: 'fixed', bottom: '30px', left: '30px', zIndex: 2147483647 }}>
        {activeTool === 'A11Y' && <div className="mb-4 animate-fade-in"><InquisitorHUD onClose={close} /></div>}
        <LiquidFAB onClick={() => setActiveTool(activeTool === 'A11Y' ? 'NONE' : 'A11Y')} isActive={activeTool === 'A11Y'} activeColor="#4ade80">
          ♿
        </LiquidFAB>
      </div>

      {/* 🧩 UI LAYER: INTELIGENCIA IA */}
      <div style={{ position: 'fixed', bottom: '30px', right: '30px', zIndex: 2147483647 }}>
        {activeTool === 'AI' && <div className="mb-4 animate-fade-in"><TitanRAGAgent onClose={close} /></div>}
        <LiquidFAB onClick={() => setActiveTool(activeTool === 'AI' ? 'NONE' : 'AI')} isActive={activeTool === 'AI'} activeColor="#1E4ED8">
          🤖
        </LiquidFAB>
      </div>

      <style jsx global>{`
        @keyframes liquid-flow {
          0% { transform: rotate(25deg) translate(-5%, -5%); }
          50% { transform: rotate(27deg) translate(2%, 2%); }
          100% { transform: rotate(25deg) translate(-5%, -5%); }
        }
        .animate-fade-in {
          animation: fadeIn 0.4s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(15px) scale(0.98); }
          to { opacity: 1; transform: translateY(0) scale(1); }
        }
        .mb-4 { margin-bottom: 16px; }
      `}</style>
    </div>
  );
}
