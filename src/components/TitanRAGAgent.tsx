
'use client';

import React, { useState, useEffect, useRef } from 'react';
import { StaffButton, LiquidGlassStyles, AppleGlassIcons, LiquidGlint } from './StaffAtoms';
import evidenceData from '../data/evidence-dna.json';

/**
 * 🤖 TITAN MASTER INTELLIGENCE v85.0 — ARC SYNCED AGENT
 * - Protocol: High-Fidelity RAG.
 * - Fix: State loop prevention & Smooth Scroll.
 * - Logic: Direct context retrieval from DNA.
 */
export const TitanRAGAgent = ({ onClose }: { onClose: () => void }) => {
  const [query, setQuery] = useState('');
  const [chat, setChat] = useState<{ role: 'user' | 'agent'; text: string; path?: string; routes?: string[] }[]>([]);
  const [isThinking, setIsThinking] = useState(false);
  const [shownIds, setShownIds] = useState<string[]>([]);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTo({ top: scrollRef.current.scrollHeight, behavior: 'smooth' });
    }
  }, [chat, isThinking]);

  const roles = [
    { name: 'Staff Product Architect', desc: 'Visión estratégica y orquestación de sistemas de diseño transnacionales (BBVA).' },
    { name: 'Accessibility Lead', desc: 'Cumplimiento legal universal y mitigación de riesgos (FDN, LaSalle).' },
    { name: 'DesignOps Architect', desc: 'Optimización de pipelines y automatización de entrega (Sistema MERKEN).' }
  ];

  const handleSend = (override?: string) => {
    const activeQ = override || query;
    if (!activeQ.trim() || isThinking) return;

    setChat(prev => [...prev, { role: 'user', text: activeQ }]);
    setQuery('');
    setIsThinking(true);

    setTimeout(() => {
      const response = processQuery(activeQ);
      setChat(prev => [...prev, { 
        role: 'agent', 
        text: response.text, 
        path: response.path, 
        routes: response.routes 
      }]);
      setIsThinking(false);

      if (response.viewId) {
        const iframe = document.querySelector('iframe') as HTMLIFrameElement;
        if (iframe?.contentWindow && (iframe.contentWindow as any).navigateTo) {
          (iframe.contentWindow as any).navigateTo(response.viewId);
        }
      }
    }, 800);
  };

  const processQuery = (q: string) => {
    const qL = q.toLowerCase();
    
    // 1. PROJECT SEARCH
    const project = (evidenceData as any[]).find(p => 
      !shownIds.includes(p.id) && (
        qL.includes(p.client.toLowerCase()) || 
        qL.includes(p.sector.toLowerCase())
      )
    );

    if (project) {
      setShownIds(prev => [...prev, project.id]);
      return {
        text: `Consultando evidencia de **${project.client}**:\n\n• ${project.achievements.join('\n• ')}\n\n**Stack:** ${project.stack.join(', ')}`,
        path: `DNA_MATCH > [${project.id}]`,
        routes: ["Ver Expediente SSOT", "Otro Proyecto", "Impacto ROI"]
      };
    }

    // 2. SSOT REDIRECT
    if (qL.includes('expediente') || qL.includes('ssot') || qL.includes('timeline')) {
      return {
        text: "Activando el **Expediente Técnico SSOT**. He consolidado los 24 artefactos de evidencia con trazabilidad forense 1:1.",
        path: "REDIRECT > SSOT_LAYER",
        viewId: 'ssot',
        routes: ["Ver Roles Staff", "Metodologías"]
      };
    }

    // 3. ROLES
    if (qL.includes('rol') || qL.includes('staff')) {
      const r = roles[Math.floor(Math.random() * roles.length)];
      return {
        text: `Mi enfoque como **${r.name}** radica en: ${r.desc}`,
        path: "ROLE_SCAN > ACTIVE",
        routes: ["Caso BBVA", "Caso FDN", "Ver otro rol"]
      };
    }

    // DEFAULT
    return {
      text: "Hola. Soy TITAN, la inteligencia Staff de este portafolio. He analizado 13 años de trayectoria y 3,000+ evidencias.\n\n¿Qué pieza técnica o estratégica deseas auditar?",
      path: "GATE_READY > WAITING",
      routes: ["Expediente SSOT", "Ver Proyecto BBVA", "Impacto ROI"]
    };
  };

  return (
    <div style={{ ...LiquidGlassStyles, width: 'min(480px, 92vw)', height: 'min(650px, 80vh)', display: 'flex', flexDirection: 'column' }} className="animate-fade-in titan-agent">
      <LiquidGlint />
      <header style={{ padding: '20px', borderBottom: '1px solid rgba(255,255,255,0.1)', display: 'flex', justifyContent: 'space-between', alignItems: 'center', position: 'relative', zIndex: 2 }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
           <AppleGlassIcons.AI />
           <span style={{ fontWeight: '900', fontSize: '11px', color: '#60a5fa', letterSpacing: '2px' }}>TITAN_CORTEX_v85.0</span>
        </div>
        <div style={{ display: 'flex', gap: '8px' }}>
          <StaffButton variant="secondary" onClick={() => { setChat([]); setShownIds([]); }} style={{ width: '32px', height: '32px', padding: 0 }}>↺</StaffButton>
          <StaffButton variant="close" onClick={onClose} />
        </div>
      </header>
      
      <div ref={scrollRef} style={{ flexGrow: 1, overflow: 'auto', padding: '24px', display: 'flex', flexDirection: 'column', gap: '24px', scrollbarWidth: 'none', position: 'relative', zIndex: 2 }}>
        {chat.length === 0 && (
          <div style={{ marginTop: '100px', textAlign: 'center', opacity: 0.5 }}>
            <p style={{ fontSize: '13px' }}>"Inteligencia Forense Estabilizada"</p>
            <StaffButton variant="secondary" onClick={() => handleSend("Dossier Maestro")} style={{ margin: 'auto', marginTop: '20px' }}>INICIAR AUDITORÍA</StaffButton>
          </div>
        )}
        {chat.map((m, i) => (
          <div key={i} style={{ alignSelf: m.role === 'user' ? 'flex-end' : 'flex-start', maxWidth: '90%' }}>
            {m.path && <div style={{ fontSize: '8px', color: '#60a5fa', marginBottom: '6px', opacity: 0.6, fontFamily: 'monospace' }}>{m.path}</div>}
            <div style={{ background: m.role === 'user' ? 'linear-gradient(180deg, #3B82F6, #1E4ED8)' : 'rgba(255,255,255,0.06)', padding: '16px', borderRadius: '18px', fontSize: '13.5px', lineHeight: '1.5', border: m.role === 'agent' ? '1px solid rgba(255,255,255,0.1)' : 'none', whiteSpace: 'pre-wrap' }}>{m.text}</div>
            {m.routes && (
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px', marginTop: '16px' }}>
                {m.routes.map(r => <StaffButton key={r} variant="secondary" onClick={() => handleSend(r)} style={{ padding: '8px 16px', fontSize: '11px' }}>{r}</StaffButton>)}
              </div>
            )}
          </div>
        ))}
        {isThinking && <div className="animate-pulse" style={{ fontSize: '10px', color: '#60a5fa', fontStyle: 'italic' }}>TITAN_REASONING...</div>}
      </div>

      <footer style={{ padding: '20px', borderTop: '1px solid rgba(255,255,255,0.1)', background: 'rgba(0,0,0,0.3)', position: 'relative', zIndex: 2 }}>
         <div style={{ display: 'flex', gap: '10px' }}>
            <input value={query} onChange={e => setQuery(e.target.value)} onKeyDown={e => e.key === 'Enter' && handleSend()} style={{ flexGrow: 1, background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '12px', padding: '12px 18px', color: 'white', outline: 'none', fontSize: '14px' }} placeholder="Consulta trayectoria o roles..." />
            <StaffButton variant="primary" onClick={() => handleSend()}>→</StaffButton>
         </div>
      </footer>
    </div>
  );
};
