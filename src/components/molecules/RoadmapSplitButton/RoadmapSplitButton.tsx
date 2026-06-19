'use client'

import React, { useState, useRef, useEffect } from 'react';

export interface RoadmapSplitButtonProps {
  options: Array<{ label: string; value: string }>
  selectedValue: string
  onChange: (value: string) => void
  primaryLabel?: string
}

const RoadmapSplitButton: React.FC<RoadmapSplitButtonProps> = ({ options, selectedValue, onChange, primaryLabel }) => {
  const [open, setOpen] = useState(false);
  const rootRef = useRef<HTMLDivElement>(null);

  const selectedOption = options.find(o => o.value === selectedValue);

  useEffect(() => {
    const handler = (e: MouseEvent) => { if (rootRef.current && !rootRef.current.contains(e.target as Node)) setOpen(false) }
    document.addEventListener('mousedown', handler);
    return () => document.removeEventListener('mousedown', handler);
  }, []);

  useEffect(() => {
    const handler = (e: KeyboardEvent) => { if (e.key === 'Escape') setOpen(false) }
    document.addEventListener('keydown', handler);
    return () => document.removeEventListener('keydown', handler);
  }, []);

  return (
    <div
      ref={rootRef}
      data-atomic="molecule"
      data-component="RoadmapSplitButton"
      className="ex-roadmap-split"
      role="group"
      aria-label="Seleccionar vista"
    >
      {/* Botón primario */}
      <button
        className="ex-roadmap-split__primary"
        onClick={() => selectedOption && onChange(selectedOption.value)}
        style={{ backgroundColor: 'var(--md-sys-color-primary)', color: 'var(--md-sys-color-on-primary)', border: 'none', padding: '8px 16px', borderRadius: '4px 0 0 4px', cursor: 'pointer' }}
      >
        {selectedOption?.label ?? primaryLabel ?? 'Seleccionar'}
      </button>

      {/* Flecha dropdown */}
      <button
        className="ex-roadmap-split__arrow"
        aria-haspopup="listbox"
        aria-expanded={open}
        aria-controls="roadmap-dropdown"
        onClick={() => setOpen(prev => !prev)}
        style={{ backgroundColor: 'var(--md-sys-color-primary)', color: 'var(--md-sys-color-on-primary)', border: 'none', borderLeft: '1px solid var(--md-sys-color-on-primary)', padding: '8px', borderRadius: '0 4px 4px 0', cursor: 'pointer' }}
      >
        {open ? '▲' : '▼'}
      </button>

      {/* Dropdown listbox */}
      {open && (
        <ul
          role="listbox"
          id="roadmap-dropdown"
          aria-label="Opciones de vista"
          className="ex-roadmap-split__dropdown"
          style={{ position: 'absolute', listStyle: 'none', margin: 0, padding: '4px 0', backgroundColor: 'var(--md-sys-color-surface-container)', border: '1px solid var(--md-sys-color-outline)', borderRadius: '4px', minWidth: '200px', zIndex: 10 }}
        >
          {options.map(opt => (
            <li
              key={opt.value}
              role="option"
              aria-selected={opt.value === selectedValue}
              className="ex-roadmap-split__option"
              onClick={() => { onChange(opt.value); setOpen(false) }}
              onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') { onChange(opt.value); setOpen(false) } }}
              tabIndex={0}
              style={{ padding: '8px 16px', cursor: 'pointer', color: 'var(--md-sys-color-on-surface)', backgroundColor: opt.value === selectedValue ? 'var(--md-sys-color-primary-container)' : 'transparent' }}
            >
              {opt.label}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export { RoadmapSplitButton }
export default RoadmapSplitButton
