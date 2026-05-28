
import React from 'react';

/**
 *  MIDNIGHT LIQUID GLASS ENGINE (iOS 26) - v94.0 MD3 INTEGRATION
 */
export const LiquidGlassStyles: React.CSSProperties = {
  background: 'var(--md-sys-color-surface)', 
  backdropFilter: 'blur(60px) saturate(210%)',
  WebkitBackdropFilter: 'blur(60px) saturate(210%)',
  border: '1px solid var(--md-sys-color-outline)',
  boxShadow: `
    0 30px 100px rgba(0, 0, 0, 0.8),
    inset 0 0 0 1px rgba(255, 255, 255, 0.05),
    inset 0 1px 1px rgba(255, 255, 255, 0.1)
  `,
  borderRadius: '24px',
  color: 'var(--md-sys-color-on-surface)',
  fontFamily: "'Roboto Flex', sans-serif",
  position: 'relative',
  overflow: 'hidden'
};

/**
 *  LIQUID GLINT EFFECT
 */
export const LiquidGlint = () => (
  <div style={{
    position: 'absolute', top: '-50%', left: '-50%', width: '200%', height: '200%',
    background: 'radial-gradient(circle, rgba(255,255,255,0.1) 0%, transparent 70%)',
    pointerEvents: 'none', transform: 'rotate(25deg)', animation: 'liquid-flow 10s infinite linear'
  }} />
);

/**
 *  STAFF ATOM: LIQUID BUTTON (MD3 Token Mapping)
 */
export const StaffButton = ({ children, onClick, variant = 'primary', className = '', style = {} }: any) => {
  const [isHovered, setIsHovered] = React.useState(false);
  const base: React.CSSProperties = {
    padding: variant === 'close' ? '0' : '10px 24px', 
    borderRadius: variant === 'close' ? '50%' : '12px',
    cursor: 'pointer', fontWeight: '700', transition: 'all 0.4s cubic-bezier(0.16, 1, 0.3, 1)',
    display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px',
    border: '1px solid var(--md-sys-color-outline)',
    transform: isHovered ? 'scale(1.04) translateY(-1px)' : 'scale(1)',
    fontSize: '12.5px',
    fontFamily: "'Roboto Flex', sans-serif",
    ...style
  };
  const variants: any = {
    primary: { background: 'linear-gradient(180deg, var(--md-sys-color-primary) 0%, #1E4ED8 100%)', color: 'var(--md-sys-color-on-primary)', border: 'none' },
    secondary: { background: 'var(--md-sys-color-primary-container)', color: 'var(--md-sys-color-on-primary-container)' },
    ghost: { background: 'transparent', border: 'none', color: 'var(--md-sys-color-secondary)', padding: '6px 0' },
    close: { width: '32px', height: '32px', background: isHovered ? 'var(--md-sys-color-error)' : 'rgba(255,255,255,0.1)', color: 'white' }
  };
  return (
    <button onClick={onClick} style={{ ...base, ...variants[variant] }} onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)} className={className}>
      {isHovered && variant !== 'ghost' && <LiquidGlint />}
      {variant === 'close' ? <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"><path d="M18 6L6 18M6 6l12 12"/></svg> : children}
    </button>
  );
};

/**
 *  STAFF ATOM: LIQUID FAB (MD3 Token Mapping)
 */
export const LiquidFAB = ({ children, onClick, isActive = false }: any) => {
  const [isHovered, setIsHovered] = React.useState(false);
  const activeColor = 'var(--md-sys-color-primary)';
  
  return (
    <button
      onClick={onClick}
      style={{
        ...LiquidGlassStyles,
        width: '56px', height: '56px',
        borderRadius: '22.5%', 
        background: isActive ? activeColor : (isHovered ? 'rgba(40, 40, 40, 1)' : 'rgba(15, 15, 15, 0.8)'),
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        cursor: 'pointer', transition: 'all 0.5s cubic-bezier(0.16, 1, 0.3, 1)',
        transform: isHovered ? 'scale(1.1) rotate(1deg)' : 'scale(1)',
        boxShadow: isActive ? `0 0 40px var(--md-sys-color-primary)` : '0 20px 50px rgba(0,0,0,0.7)',
        border: isActive ? `2.5px solid var(--md-sys-color-primary)` : '1px solid var(--md-sys-color-outline)',
        zIndex: 2147483647
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <LiquidGlint />
      <span style={{ fontSize: '24px' }}>{children}</span>
    </button>
  );
};

export const AppleGlassIcons = {
  A11y: () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#4ade80" strokeWidth="2" strokeLinecap="round">
      <circle cx="12" cy="12" r="10" opacity="0.2"/><path d="M12 7v10M8 12h8M12 7l-3 3m3-3l3 3"/>
    </svg>
  ),
  AI: () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#60a5fa" strokeWidth="2" strokeLinecap="round">
      <rect x="4" y="4" width="16" height="16" rx="5" opacity="0.2"/><path d="M9 12l2 2 4-4"/><circle cx="12" cy="12" r="3" strokeDasharray="3 3"/>
    </svg>
  )
};
