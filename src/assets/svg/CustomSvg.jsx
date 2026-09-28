import React from 'react';

// Common SVG attributes for consistent styling
const svgProps = {
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: "2.2",
  strokeLinecap: "round",
  strokeLinejoin: "round",
  className: "w-full h-full"
};

// Unified suite of icons & emojis for Intrecci
const ICONS = {
  // Transparent Connections 4-tile logo
  logo: (
    <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
      <rect x="7" y="7" width="22" height="22" rx="7" fill="#FACC15" stroke="#EAB308" strokeWidth="2"/>
      <rect x="35" y="7" width="22" height="22" rx="7" fill="#4ADE80" stroke="#22C55E" strokeWidth="2"/>
      <rect x="7" y="35" width="22" height="22" rx="7" fill="#60A5FA" stroke="#3B82F6" strokeWidth="2"/>
      <rect x="35" y="35" width="22" height="22" rx="7" fill="#C084FC" stroke="#A855F7" strokeWidth="2"/>
      <circle cx="32" cy="32" r="6.5" fill="currentColor"/>
      <circle cx="32" cy="32" r="2.8" fill="var(--bg-app, #FAF7F2)"/>
    </svg>
  ),

  // Compass (Navigation / Travel Map)
  compass: (
    <svg {...svgProps}>
      <circle cx="12" cy="12" r="9" fill="currentColor" fillOpacity="0.12" />
      <polygon points="12 6 15 12 12 18 9 12" fill="currentColor" fillOpacity="0.25" />
      <polygon points="12 6 15 12 12 12" fill="currentColor" />
      <line x1="12" y1="2" x2="12" y2="4" />
      <line x1="12" y1="20" x2="12" y2="22" />
      <line x1="2" y1="12" x2="4" y2="12" />
      <line x1="20" y1="12" x2="22" y2="12" />
    </svg>
  ),

  // Sparkle (Magic combos / Fantastici)
  sparkle: (
    <svg {...svgProps}>
      <path d="M12 2l2.5 7.5L22 12l-7.5 2.5L12 22l-2.5-7.5L2 12l7.5-2.5L12 2z" fill="currentColor" fillOpacity="0.2" />
      <path d="M19 2v4M17 4h4" strokeWidth="1.8" />
    </svg>
  ),

  // Pasta (Food biome)
  pasta: (
    <svg {...svgProps}>
      <path d="M3 13c0 4.97 4.03 9 9 9s9-4.03 9-9H3z" fill="currentColor" fillOpacity="0.2" />
      <path d="M12 2v6c0 1.5-1 2-2 2s-2-.5-2-2V4" />
      <path d="M12 8c0 1.5 1 2 2 2s2-.5 2-2V4" />
      <line x1="2" y1="13" x2="22" y2="13" />
    </svg>
  ),

  // Coffee
  coffee: (
    <svg {...svgProps}>
      <path d="M18 8h1a4 4 0 0 1 0 8h-1" />
      <path d="M2 8h16v8a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8z" fill="currentColor" fillOpacity="0.2" />
      <line x1="6" y1="1" x2="6" y2="4" />
      <line x1="10" y1="1" x2="10" y2="4" />
      <line x1="14" y1="1" x2="14" y2="4" />
    </svg>
  ),

  // Tree / Nature
  tree: (
    <svg {...svgProps}>
      <path d="M12 2L4 14h5l-3 6h12l-3-6h5L12 2z" fill="currentColor" fillOpacity="0.2" />
      <line x1="12" y1="20" x2="12" y2="23" strokeWidth="2.5" />
    </svg>
  ),

  // Book / Literature
  book: (
    <svg {...svgProps}>
      <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" />
      <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" fill="currentColor" fillOpacity="0.2" />
      <line x1="8" y1="6" x2="16" y2="6" strokeWidth="1.8" />
      <line x1="8" y1="10" x2="14" y2="10" strokeWidth="1.8" />
    </svg>
  ),

  // Lightbulb / Hint
  lightbulb: (
    <svg {...svgProps}>
      <path d="M9 18h6M10 22h4" />
      <path d="M12 2a7 7 0 0 0-7 7c0 2.5 1.3 4.8 3.3 6h7.4c2-1.2 3.3-3.5 3.3-6a7 7 0 0 0-7-7z" fill="currentColor" fillOpacity="0.2" />
    </svg>
  ),

  // Puzzle piece
  puzzle: (
    <svg {...svgProps}>
      <path d="M20 10V7a2 2 0 0 0-2-2h-3a2.5 2.5 0 0 1-5 0H7a2 2 0 0 0-2 2v3a2.5 2.5 0 0 1 0 5v3a2 2 0 0 0 2 2h3a2.5 2.5 0 0 1 5 0h3a2 2 0 0 0 2-2v-3a2.5 2.5 0 0 1 0-5z" fill="currentColor" fillOpacity="0.2" />
    </svg>
  ),

  // Trophy / Victory
  trophy: (
    <svg {...svgProps}>
      <path d="M8 21h8M12 17v4M6 4h12v4a6 6 0 0 1-12 0V4z" fill="currentColor" fillOpacity="0.2" />
      <path d="M6 6H4a2 2 0 0 0-2 2v1a4 4 0 0 0 4 4h0M18 6h2a2 2 0 0 1 2 2v1a4 4 0 0 1-4 4h0" />
      <circle cx="12" cy="8" r="1.5" fill="currentColor" stroke="none" />
    </svg>
  ),

  // Clock
  clock: (
    <svg {...svgProps}>
      <circle cx="12" cy="12" r="9" fill="currentColor" fillOpacity="0.15" />
      <polyline points="12 7 12 12 15 14" />
    </svg>
  ),

  // Stopwatch (Binomi timer)
  stopwatch: (
    <svg {...svgProps}>
      <circle cx="12" cy="13" r="8" fill="currentColor" fillOpacity="0.15" />
      <line x1="12" y1="9" x2="12" y2="13" />
      <line x1="12" y1="13" x2="15" y2="15" />
      <line x1="12" y1="5" x2="12" y2="2" />
      <line x1="10" y1="2" x2="14" y2="2" />
      <line x1="18" y1="6" x2="19.5" y2="7.5" />
    </svg>
  ),

  // Zen mode
  zen: (
    <svg {...svgProps}>
      <circle cx="12" cy="12" r="9" strokeDasharray="38 12" fill="currentColor" fillOpacity="0.15" />
      <path d="M12 7c-2 2.5-3 5-1 7.5 2-2.5 3-5 1-7.5z" fill="currentColor" fillOpacity="0.3" />
    </svg>
  ),

  // Fire / Streak
  fire: (
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
      <path d="M8.5 7C6 10 5 13.5 5 16a7 7 0 0 0 14 0c0-3-1.5-6-4-8.5-1 2.5-3 3.5-3 3.5s-1-1.5-.5-4z" fill="#F97316" fillOpacity="0.22" stroke="#F97316" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M12 11c-1 1.5-1.5 2.5-1.5 4 0 1.5 1 2.5 2 2.5s2-1 2-2.5c0-1.5-1.5-2.5-2.5-4z" fill="#FBBF24" />
    </svg>
  ),

  // Globe
  globe: (
    <svg {...svgProps}>
      <circle cx="12" cy="12" r="9" fill="currentColor" fillOpacity="0.15" />
      <line x1="3" y1="12" x2="21" y2="12" />
      <ellipse cx="12" cy="12" rx="4.5" ry="9" />
    </svg>
  ),

  // Map
  map: (
    <svg {...svgProps}>
      <polygon points="3 6 9 3 15 6 21 3 21 18 15 21 9 18 3 21" fill="currentColor" fillOpacity="0.15" />
      <line x1="9" y1="3" x2="9" y2="18" />
      <line x1="15" y1="6" x2="15" y2="21" />
    </svg>
  ),

  // Pin
  pin: (
    <svg {...svgProps}>
      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" fill="currentColor" fillOpacity="0.2" />
      <circle cx="12" cy="10" r="3" fill="currentColor" fillOpacity="0.3" />
    </svg>
  ),

  // Lock
  lock: (
    <svg {...svgProps}>
      <rect x="5" y="11" width="14" height="10" rx="2" fill="currentColor" fillOpacity="0.2" />
      <path d="M8 11V7a4 4 0 0 1 8 0v4" />
    </svg>
  ),

  // Target
  target: (
    <svg {...svgProps}>
      <circle cx="12" cy="12" r="9" fill="currentColor" fillOpacity="0.12" />
      <circle cx="12" cy="12" r="5" />
      <circle cx="12" cy="12" r="1.5" fill="currentColor" stroke="none" />
    </svg>
  ),

  // Party / Celebration
  party: (
    <svg {...svgProps}>
      <path d="M4 20l3.5-14 10.5 10.5L4 20z" fill="currentColor" fillOpacity="0.2" />
      <path d="M14 4l1 2M19 7l2 1M18 13l2-1M8 3v2M3 11h2" strokeWidth="2" />
    </svg>
  ),

  // Snow
  snow: (
    <svg {...svgProps}>
      <line x1="12" y1="2" x2="12" y2="22" />
      <line x1="3.34" y1="7" x2="20.66" y2="17" />
      <line x1="3.34" y1="17" x2="20.66" y2="7" />
      <polyline points="10 4 12 2 14 4" />
      <polyline points="10 20 12 22 14 20" />
    </svg>
  ),

  // Leaf
  leaf: (
    <svg {...svgProps}>
      <path d="M2 22s5.5-1 9.5-5 5.5-9.5 5.5-9.5-5.5 0-9.5 4S2 22 2 22z" fill="currentColor" fillOpacity="0.2" />
      <line x1="2" y1="22" x2="12" y2="12" />
    </svg>
  ),

  // Galaxy (Easter Egg / Space)
  galaxy: (
    <svg {...svgProps}>
      <ellipse cx="12" cy="12" rx="9" ry="4.5" transform="rotate(-30 12 12)" fill="currentColor" fillOpacity="0.15" />
      <circle cx="12" cy="12" r="3" fill="currentColor" fillOpacity="0.3" />
      <circle cx="12" cy="12" r="1.2" fill="currentColor" stroke="none" />
      <circle cx="17" cy="7" r="1" fill="currentColor" stroke="none" />
    </svg>
  ),

  // Magic wand (Database API & Special)
  magic: (
    <svg {...svgProps}>
      <line x1="4" y1="20" x2="15" y2="9" strokeWidth="2.6" />
      <path d="M14 4l1.5 2.5L18 8l-2.5 1.5L14 12l-1.5-2.5L10 8l2.5-1.5L14 4z" fill="currentColor" fillOpacity="0.3" />
      <line x1="19" y1="3" x2="19" y2="6" strokeWidth="1.8" />
      <line x1="17.5" y1="4.5" x2="20.5" y2="4.5" strokeWidth="1.8" />
    </svg>
  ),

  // Stats / Histogram (Statistiche e Record)
  stats: (
    <svg {...svgProps}>
      <line x1="3" y1="20" x2="21" y2="20" />
      <rect x="4.5" y="12" width="3.5" height="8" rx="1" fill="currentColor" fillOpacity="0.25" />
      <rect x="10.25" y="6" width="3.5" height="14" rx="1" fill="currentColor" fillOpacity="0.25" />
      <rect x="16" y="9" width="3.5" height="11" rx="1" fill="currentColor" fillOpacity="0.25" />
    </svg>
  ),

  // Levels / Isometric layers (Archivio Enigmi)
  levels: (
    <svg {...svgProps}>
      <polygon points="12 3 21 7.5 12 12 3 7.5" fill="currentColor" fillOpacity="0.25" />
      <polyline points="3 12 12 16.5 21 12" />
      <polyline points="3 16.5 12 21 21 16.5" />
    </svg>
  ),

  // Archive box (Archivio)
  archive: (
    <svg {...svgProps}>
      <polyline points="21 8 21 21 3 21 3 8" />
      <rect x="1" y="3" width="22" height="5" rx="1" fill="currentColor" fillOpacity="0.2" />
      <line x1="10" y1="12" x2="14" y2="12" />
    </svg>
  ),

  // Star filled
  star: (
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
      <polygon
        points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"
        fill="#FBBF24"
        stroke="#F59E0B"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  ),

  // Star empty
  starEmpty: (
    <svg {...svgProps}>
      <polygon
        points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"
        fill="currentColor"
        fillOpacity="0.1"
      />
    </svg>
  ),

  // Heart filled
  heartFill: (
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
      <path
        d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"
        fill="#F43F5E"
        stroke="#E11D48"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  ),

  // Heart empty
  heartEmpty: (
    <svg {...svgProps}>
      <path
        d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"
        fill="none"
        opacity="0.35"
      />
    </svg>
  ),

  // Home
  home: (
    <svg {...svgProps}>
      <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" fill="currentColor" fillOpacity="0.15" />
      <polyline points="9 22 9 12 15 12 15 22" />
    </svg>
  ),

  // Settings
  settings: (
    <svg {...svgProps}>
      <circle cx="12" cy="12" r="3" fill="currentColor" fillOpacity="0.2" />
      <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z" />
    </svg>
  ),

  // Play button
  play: (
    <svg viewBox="0 0 24 24" fill="currentColor" stroke="none" className="w-full h-full">
      <path d="M7 5.5v13a1.2 1.2 0 0 0 1.8 1.05l11-6.5a1.2 1.2 0 0 0 0-2.1l-11-6.5A1.2 1.2 0 0 0 7 5.5z" />
    </svg>
  ),

  // Shuffle
  shuffle: (
    <svg {...svgProps}>
      <polyline points="16 3 21 3 21 8" />
      <line x1="4" y1="20" x2="21" y2="3" />
      <polyline points="21 16 21 21 16 21" />
      <line x1="15" y1="15" x2="21" y2="21" />
      <line x1="4" y1="4" x2="9" y2="9" />
    </svg>
  ),

  // Deselect / Clear
  deselect: (
    <svg {...svgProps}>
      <rect x="3" y="3" width="18" height="18" rx="3" fill="currentColor" fillOpacity="0.15" />
      <line x1="8" y1="12" x2="16" y2="12" strokeWidth="2.5" />
    </svg>
  ),

  // Checkmark
  check: (
    <svg {...svgProps}>
      <polyline points="20 6 9 17 4 12" strokeWidth="2.6" />
    </svg>
  ),

  // Help / Rules
  help: (
    <svg {...svgProps}>
      <circle cx="12" cy="12" r="9" fill="currentColor" fillOpacity="0.15" />
      <path d="M9.5 9.2a2.8 2.8 0 0 1 5.3.9c0 1.8-2.8 2.3-2.8 3.9" />
      <circle cx="12" cy="17" r="0.8" fill="currentColor" stroke="none" />
    </svg>
  ),

  // Close modal
  close: (
    <svg {...svgProps}>
      <line x1="18" y1="6" x2="6" y2="18" strokeWidth="2.5" />
      <line x1="6" y1="6" x2="18" y2="18" strokeWidth="2.5" />
    </svg>
  ),

  // Share
  share: (
    <svg {...svgProps}>
      <circle cx="18" cy="5" r="3" fill="currentColor" fillOpacity="0.2" />
      <circle cx="6" cy="12" r="3" fill="currentColor" fillOpacity="0.2" />
      <circle cx="18" cy="19" r="3" fill="currentColor" fillOpacity="0.2" />
      <line x1="8.59" y1="13.51" x2="15.42" y2="17.49" />
      <line x1="15.41" y1="6.51" x2="8.59" y2="10.49" />
    </svg>
  ),

  // Refresh
  refresh: (
    <svg {...svgProps}>
      <path d="M21 4v6h-6" />
      <path d="M20 14a8 8 0 1 1-2.5-6.5L21 10" />
    </svg>
  ),

  // Chevrons
  chevronRight: (
    <svg {...svgProps}>
      <polyline points="9 18 15 12 9 6" strokeWidth="2.4" />
    </svg>
  ),
  chevronLeft: (
    <svg {...svgProps}>
      <polyline points="15 18 9 12 15 6" strokeWidth="2.4" />
    </svg>
  ),

  // Music
  music: (
    <svg {...svgProps}>
      <path d="M9 18V5l12-2v13" />
      <circle cx="6" cy="18" r="3" fill="currentColor" fillOpacity="0.25" />
      <circle cx="18" cy="16" r="3" fill="currentColor" fillOpacity="0.25" />
    </svg>
  ),

  // Palette / Art
  palette: (
    <svg {...svgProps}>
      <path d="M12 2C6.5 2 2 6.5 2 12c0 3.5 2.5 5 4.5 5 1 0 1.5-.5 2-.5.5 0 1 .5 1 1.5 0 2 2 4 4.5 4 4.5 0 8-3.5 8-8 0-6.5-4.5-12-10-12z" fill="currentColor" fillOpacity="0.2" />
      <circle cx="7.5" cy="10.5" r="1.5" fill="currentColor" stroke="none" />
      <circle cx="12" cy="7.5" r="1.5" fill="currentColor" stroke="none" />
      <circle cx="16.5" cy="10.5" r="1.5" fill="currentColor" stroke="none" />
      <circle cx="16" cy="15" r="1.5" fill="currentColor" stroke="none" />
    </svg>
  ),

  // Wine / Drink
  wine: (
    <svg {...svgProps}>
      <path d="M8 22h8M12 15v7M5 3h14c0 4.5-2.5 9-7 9s-7-4.5-7-9z" fill="currentColor" fillOpacity="0.2" />
    </svg>
  ),

  // Key / Secret
  key: (
    <svg {...svgProps}>
      <path d="M21 2l-2 2m-1.5 1.5L14 9M15 10l-2 2m-2-2l-1 1" />
      <circle cx="7.5" cy="16.5" r="4.5" fill="currentColor" fillOpacity="0.2" />
    </svg>
  ),

  // Sun / Daylight
  sun: (
    <svg {...svgProps}>
      <circle cx="12" cy="12" r="4.5" fill="currentColor" fillOpacity="0.25" />
      <line x1="12" y1="2" x2="12" y2="4" />
      <line x1="12" y1="20" x2="12" y2="22" />
      <line x1="4.93" y1="4.93" x2="6.34" y2="6.34" />
      <line x1="17.66" y1="17.66" x2="19.07" y2="19.07" />
      <line x1="2" y1="12" x2="4" y2="12" />
      <line x1="20" y1="12" x2="22" y2="12" />
      <line x1="4.93" y1="19.07" x2="6.34" y2="17.66" />
      <line x1="17.66" y1="6.34" x2="19.07" y2="4.93" />
    </svg>
  )
};

// Aliases for full backwards compatibility with all call sites
export const SVG_EMOJIS = ICONS;
export const SVG_ICONS = ICONS;

export const CustomSvg = ({ name, type = 'emoji', size = 24, className = '' }) => {
  const svg = ICONS[name] || ICONS.sparkle;

  return (
    <span
      className={`custom-svg-wrapper ${className}`}
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: typeof size === 'number' ? `${size}px` : size,
        height: typeof size === 'number' ? `${size}px` : size,
        verticalAlign: 'middle',
        flexShrink: 0
      }}
    >
      {svg}
    </span>
  );
};

export default CustomSvg;
