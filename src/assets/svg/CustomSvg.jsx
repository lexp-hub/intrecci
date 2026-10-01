import React from 'react';

export const SVG_EMOJIS = {
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
  globe: (
    <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
      <circle cx="24" cy="24" r="18" fill="#CFFAFE" stroke="#0891B2" strokeWidth="2.5"/>
      <path d="M6 24h36M24 6c5 6 7 12 7 18s-2 12-7 18M24 6c-5 6-7 12-7 18s2 12 7 18" stroke="#0891B2" strokeWidth="2" strokeLinecap="round"/>
    </svg>
  ),
  compass: (
    <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
      <circle cx="24" cy="24" r="18" fill="#F0F9FF" stroke="#0284C7" strokeWidth="2.5"/>
      <path d="M24 8v3M24 37v3M8 24h3M37 24h3" stroke="#0284C7" strokeWidth="2" strokeLinecap="round"/>
      <polygon points="24 10 28 24 20 24" fill="#EF4444"/>
      <polygon points="24 38 28 24 20 24" fill="#E2E8F0"/>
      <polygon points="24 10 28 24 24 38 20 24" stroke="#0284C7" strokeWidth="1.8" strokeLinejoin="round"/>
      <circle cx="24" cy="24" r="2.5" fill="#F59E0B"/>
    </svg>
  ),
  sparkle: (
    <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
      <path d="M24 4c1 9 7 15 16 16-9 1-15 7-16 16-1-9-7-15-16-16 9-1 15-7 16-16z" fill="#FDE047" stroke="#EAB308" strokeWidth="2" strokeLinejoin="round"/>
      <circle cx="38" cy="10" r="3" fill="#FBBF24"/>
      <circle cx="10" cy="38" r="2.5" fill="#FBBF24"/>
    </svg>
  ),
  magic: (
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
      <path
        d="M10 2.5C10 7.5 14 9.2 17.5 9.8C14 10.4 10 12.1 10 17.5C10 12.1 6 10.4 2.5 9.8C6 9.2 10 7.5 10 2.5Z"
        fill="#FDE68A"
        stroke="#D97706"
        strokeWidth="1.6"
        strokeLinejoin="round"
      />
      <path
        d="M18 13C18 15.5 20.2 16.4 22 16.8C20.2 17.2 18 18.1 18 20.5C18 18.1 15.8 17.2 14 16.8C15.8 16.4 18 15.5 18 13Z"
        fill="#FEF08A"
        stroke="#D97706"
        strokeWidth="1.3"
        strokeLinejoin="round"
      />
      <circle cx="4.5" cy="18" r="1.3" fill="#F59E0B"/>
    </svg>
  ),
  pasta: (
    <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
      <path d="M6 27c0 8.5 8 15 18 15s18-6.5 18-15" fill="#FAF7F2" stroke="#57534E" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
      <ellipse cx="24" cy="27" rx="18" ry="6" fill="#FFFFFF" stroke="#57534E" strokeWidth="2.5"/>
      <ellipse cx="24" cy="27" rx="12" ry="3.5" fill="#F5F5F4" stroke="#E7E5E4" strokeWidth="1.5"/>
      <path d="M12.5 26c0-5.5 5.2-10 11.5-10s11.5 4.5 11.5 10c0 2-5.2 3.5-11.5 3.5s-11.5-1.5-11.5-3.5z" fill="#FEF08A" stroke="#CA8A04" strokeWidth="2.5" strokeLinejoin="round"/>
      <path d="M15 25c3-2 6-2 9 0s5 0 8-2" stroke="#EAB308" strokeWidth="2" strokeLinecap="round"/>
      <path d="M17 22c3-2 5-2 8 0s4 0 6-2" stroke="#EAB308" strokeWidth="2" strokeLinecap="round"/>
      <path d="M38 7l-8 10" stroke="#57534E" strokeWidth="2.5" strokeLinecap="round"/>
      <path d="M27 16c2-2 5-2 7 0" stroke="#CA8A04" strokeWidth="2.5" strokeLinecap="round"/>
      <circle cx="21" cy="22" r="2.5" fill="#EF4444"/>
      <path d="M22 19.5l2-2" stroke="#16A34A" strokeWidth="2.5" strokeLinecap="round"/>
    </svg>
  ),
  coffee: (
    <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
      <path d="M10 16h24v14c0 6.627-5.373 12-12 12s-12-5.373-12-12V16z" fill="#E8D8C8" stroke="#7A5638" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M34 20h4a5 5 0 0 1 5 5v0a5 5 0 0 1-5 5h-4" stroke="#7A5638" strokeWidth="2.5" strokeLinecap="round"/>
      <path d="M16 11c0-2 1-3 1-5s-1-3-1-5" stroke="#D4A373" strokeWidth="2.5" strokeLinecap="round"/>
      <path d="M22 11c0-2 1-3 1-5s-1-3-1-5" stroke="#D4A373" strokeWidth="2.5" strokeLinecap="round"/>
      <path d="M28 11c0-2 1-3 1-5s-1-3-1-5" stroke="#D4A373" strokeWidth="2.5" strokeLinecap="round"/>
    </svg>
  ),
  tree: (
    <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
      <path d="M21 33v9h6v-9" fill="#B45309" stroke="#78350F" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M24 7c-4.5 0-8.5 2.5-10 6-3 .5-5.5 2.5-6.5 5.5-1 3.5.5 7 3.5 9 .5 3 2.5 5.5 5.5 6.5 2.5.5 5.5-.5 7.5-2.5 2 2 5 3 7.5 2.5 3-1 5-3.5 5.5-6.5 3-2 4.5-5.5 3.5-9-1-3-3.5-5-6.5-5.5-1.5-3.5-5.5-6-10-6z" fill="#BBf7D0" stroke="#15803D" strokeWidth="2.5" strokeLinejoin="round"/>
      <path d="M24 33v-5l-4-4M24 30l4-3" stroke="#78350F" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  ),
  book: (
    <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
      <path d="M6 35c6-2 12-1 18 2 6-3 12-4 18-2V11c-6-2-12-1-18 2-6-3-12-4-18-2v24z" fill="#FBCFE8" stroke="#DB2777" strokeWidth="2.5" strokeLinejoin="round"/>
      <path d="M24 13v24" stroke="#DB2777" strokeWidth="2.5" strokeLinecap="round"/>
      <path d="M12 18c3-1 6-1 9 0M12 24c3-1 6-1 9 0M27 18c3-1 6-1 9 0M27 24c3-1 6-1 9 0" stroke="#F472B6" strokeWidth="2" strokeLinecap="round"/>
    </svg>
  ),
  lightbulb: (
    <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
      <path d="M24 8a13 13 0 0 0-8 23.2V35a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-3.8A13 13 0 0 0 24 8z" fill="#FEF08A" stroke="#CA8A04" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M19 41h10M21 45h6" stroke="#A16207" strokeWidth="2.5" strokeLinecap="round"/>
      <path d="M24 18v6M21 21h6" stroke="#EAB308" strokeWidth="2" strokeLinecap="round"/>
    </svg>
  ),
  puzzle: (
    <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
      <path d="M18 10a4 4 0 0 1 8 0h8a4 4 0 0 1 4 4v8a4 4 0 0 1 0 8v8a4 4 0 0 1-4 4h-8a4 4 0 0 0-8 0h-8a4 4 0 0 1-4-4v-8a4 4 0 0 0 0-8v-8a4 4 0 0 1 4-4h8z" fill="#C7D2FE" stroke="#6366F1" strokeWidth="2.5" strokeLinejoin="round"/>
      <circle cx="22" cy="22" r="3" fill="#818CF8" opacity="0.6"/>
    </svg>
  ),
  trophy: (
    <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
      <path d="M14 8h20v14c0 6-4 10-10 10s-10-4-10-10V8z" fill="#FEF08A" stroke="#CA8A04" strokeWidth="2.5" strokeLinejoin="round"/>
      <path d="M14 12H8a4 4 0 0 0-4 4v2a6 6 0 0 0 6 6h4M34 12h6a4 4 0 0 1 4 4v2a6 6 0 0 1-6 6h-4" stroke="#CA8A04" strokeWidth="2.5" strokeLinecap="round"/>
      <path d="M24 32v6M16 42h16" stroke="#CA8A04" strokeWidth="2.5" strokeLinecap="round"/>
      <polygon points="24,14 26,19 31,19 27,22 29,27 24,24 19,27 21,22 17,19 22,19" fill="#EAB308"/>
    </svg>
  ),
  clock: (
    <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
      <circle cx="24" cy="24" r="18" fill="#F0FDF4" stroke="#16A34A" strokeWidth="2.5"/>
      <circle cx="24" cy="24" r="2.5" fill="#15803D"/>
      <path d="M24 12v12l8 4" stroke="#15803D" strokeWidth="2.5" strokeLinecap="round"/>
    </svg>
  ),
  heart: (
    <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
      <path d="M24 41s-16-9.5-16-21.5a10 10 0 0 1 16-7.8A10 10 0 0 1 40 19.5C40 31.5 24 41 24 41z" fill="#FCA5A5" stroke="#E11D48" strokeWidth="2.5" strokeLinejoin="round"/>
      <ellipse cx="17" cy="18" rx="3" ry="1.5" transform="rotate(-30 17 18)" fill="#FFF" opacity="0.6"/>
    </svg>
  ),
  heartFill: (
    <svg viewBox="0 0 24 24" fill="#E11D48" stroke="#BE123C" strokeWidth="1.5" strokeLinejoin="round" className="w-full h-full">
      <path d="M12 21s-7-4.5-9.5-8.5C0 8 2.5 4 6.5 4c2.5 0 4.5 2 5.5 3 1-1 3-3 5.5-3 4 0 6.5 4 4 8.5C19 16.5 12 21 12 21z"/>
    </svg>
  ),
  heartEmpty: (
    <svg viewBox="0 0 24 24" fill="#E2DCD5" stroke="#A8A29E" strokeWidth="1.5" strokeLinejoin="round" className="w-full h-full">
      <path d="M12 21s-7-4.5-9.5-8.5C0 8 2.5 4 6.5 4c2.5 0 4.5 2 5.5 3 1-1 3-3 5.5-3 4 0 6.5 4 4 8.5C19 16.5 12 21 12 21z"/>
    </svg>
  ),
  sun: (
    <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
      <circle cx="24" cy="24" r="10" fill="#FEF08A" stroke="#EAB308" strokeWidth="2.5"/>
      <path d="M24 6v4M24 38v4M6 24h4M38 24h4M11.3 11.3l2.8 2.8M33.9 33.9l2.8 2.8M11.3 36.7l2.8-2.8M33.9 14.1l2.8-2.8" stroke="#F59E0B" strokeWidth="2.5" strokeLinecap="round"/>
    </svg>
  ),
  moon: (
    <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
      <path d="M34 32A16 16 0 1 1 20 6a14 14 0 0 0 14 26z" fill="#EDE9FE" stroke="#8B5CF6" strokeWidth="2.5" strokeLinejoin="round"/>
      <circle cx="34" cy="14" r="2" fill="#FBBF24"/>
      <circle cx="38" cy="22" r="1.5" fill="#FBBF24"/>
    </svg>
  ),
  palette: (
    <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
      <path d="M24 6C13 6 5 14 5 24c0 8 6 16 15 16 3 0 5-2 5-5 0-1.5-.7-3-1-4-1-1.5-1-2 0-3 1.5-1.5 5 0 8 2 3.5 2.5 7 .5 7-4 0-11.5-7.5-20-15-20z" fill="#FED7AA" stroke="#EA580C" strokeWidth="2.5" strokeLinejoin="round"/>
      <circle cx="15" cy="16" r="3" fill="#EF4444"/>
      <circle cx="24" cy="13" r="3" fill="#EAB308"/>
      <circle cx="33" cy="18" r="3" fill="#3B82F6"/>
      <circle cx="14" cy="26" r="3" fill="#10B981"/>
    </svg>
  ),
  music: (
    <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
      <ellipse cx="15" cy="34" rx="6" ry="4" fill="#DDD6FE" stroke="#7C3AED" strokeWidth="2.5"/>
      <ellipse cx="33" cy="28" rx="6" ry="4" fill="#DDD6FE" stroke="#7C3AED" strokeWidth="2.5"/>
      <path d="M21 34V14l18-6v20" stroke="#7C3AED" strokeWidth="2.5" strokeLinecap="round"/>
      <path d="M21.5 19l17-6" stroke="#7C3AED" strokeWidth="3" strokeLinecap="round"/>
    </svg>
  ),
  wine: (
    <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
      <path d="M14 8h20v10c0 5.5-4.5 10-10 10s-10-4.5-10-10V8z" fill="#FBCFE8" stroke="#BE185D" strokeWidth="2.5" strokeLinejoin="round"/>
      <path d="M24 28v12M17 40h14" stroke="#BE185D" strokeWidth="2.5" strokeLinecap="round"/>
      <path d="M14.5 19c3 2 17 2 19 0" stroke="#BE185D" strokeWidth="2" fill="none"/>
    </svg>
  ),
  key: (
    <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
      <circle cx="17" cy="20" r="9" fill="#FEF08A" stroke="#CA8A04" strokeWidth="2.5"/>
      <circle cx="17" cy="20" r="4" fill="#FAF7F2" stroke="#CA8A04" strokeWidth="2"/>
      <path d="M23.5 27.5l16 16M33.5 36l3-3M37.5 39.5l3-3" stroke="#CA8A04" strokeWidth="2.5" strokeLinecap="round"/>
    </svg>
  ),
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
  starEmpty: (
    <svg viewBox="0 0 24 24" fill="none" stroke="#CBD5E1" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="w-full h-full" opacity="0.45">
      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
    </svg>
  ),
  fire: (
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
      <path d="M8.5 7C6 10 5 13.5 5 16a7 7 0 0 0 14 0c0-3-1.5-6-4-8.5-1 2.5-3 3.5-3 3.5s-1-1.5-.5-4z" fill="#FED7AA" stroke="#EA580C" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M12 11c-1 1.5-1.5 2.5-1.5 4 0 1.5 1 2.5 2 2.5s2-1 2-2.5c0-1.5-1.5-2.5-2.5-4z" fill="#FBBF24" stroke="#D97706" strokeWidth="1.5" />
    </svg>
  ),
  stopwatch: (
    <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
      <circle cx="24" cy="26" r="16" fill="#EDE9FE" stroke="#7C3AED" strokeWidth="2.5"/>
      <path d="M24 10V6M20 6h8M24 26l6-6" stroke="#7C3AED" strokeWidth="2.5" strokeLinecap="round"/>
      <circle cx="24" cy="26" r="2.5" fill="#6D28D9"/>
    </svg>
  ),
  zen: (
    <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
      <circle cx="24" cy="24" r="18" fill="#DCFCE7" stroke="#16A34A" strokeWidth="2.5"/>
      <circle cx="24" cy="15" r="4" fill="#15803D"/>
      <path d="M16 33c1-6 4-9 8-9s7 3 8 9M13 28c3-3 6-4 11-4s8 1 11 4" stroke="#15803D" strokeWidth="2.5" strokeLinecap="round"/>
    </svg>
  ),
  target: (
    <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
      <circle cx="24" cy="24" r="18" fill="#FEE2E2" stroke="#EF4444" strokeWidth="2.5"/>
      <circle cx="24" cy="24" r="11" fill="#FFFFFF" stroke="#EF4444" strokeWidth="2"/>
      <circle cx="24" cy="24" r="4.5" fill="#EF4444"/>
    </svg>
  ),
  party: (
    <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
      <path d="M8 40l7-28 21 21L8 40z" fill="#FEF08A" stroke="#EAB308" strokeWidth="2.5" strokeLinejoin="round"/>
      <path d="M15 12l21 21M11 26l11 11" stroke="#EAB308" strokeWidth="2"/>
      <circle cx="34" cy="12" r="2.5" fill="#EF4444"/>
      <circle cx="40" cy="20" r="2" fill="#3B82F6"/>
      <circle cx="26" cy="6" r="2" fill="#10B981"/>
      <path d="M30 18l3-3M38 12l4-1" stroke="#F59E0B" strokeWidth="2" strokeLinecap="round"/>
    </svg>
  ),
  snow: (
    <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
      <path d="M24 4v40M4 24h40M10 10l28 28M10 38L38 10" stroke="#38BDF8" strokeWidth="2.5" strokeLinecap="round"/>
      <circle cx="24" cy="24" r="3" fill="#38BDF8"/>
    </svg>
  ),
  leaf: (
    <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
      <path d="M8 40C8 40 12 28 26 14c14 14 2 32-18 26z" fill="#DCFCE7" stroke="#16A34A" strokeWidth="2.5" strokeLinejoin="round"/>
      <path d="M8 40c8-8 16-16 26-22" stroke="#16A34A" strokeWidth="2.5" strokeLinecap="round"/>
    </svg>
  ),
  galaxy: (
    <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
      <ellipse cx="24" cy="24" rx="18" ry="9" transform="rotate(-30 24 24)" fill="#EDE9FE" stroke="#8B5CF6" strokeWidth="2.5"/>
      <circle cx="24" cy="24" r="5" fill="#A855F7"/>
      <circle cx="15" cy="18" r="2" fill="#FBBF24"/>
      <circle cx="33" cy="30" r="1.5" fill="#38BDF8"/>
    </svg>
  ),
  pin: (
    <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
      <path d="M24 4C16 4 10 10 10 18c0 11 14 26 14 26s14-15 14-26c0-8-6-14-14-14z" fill="#FEE2E2" stroke="#EF4444" strokeWidth="2.5" strokeLinejoin="round"/>
      <circle cx="24" cy="18" r="5" fill="#EF4444"/>
    </svg>
  ),
  lock: (
    <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
      <rect x="10" y="20" width="28" height="22" rx="4" fill="#FEF08A" stroke="#CA8A04" strokeWidth="2.5"/>
      <path d="M16 20v-7a8 8 0 0 1 16 0v7" stroke="#CA8A04" strokeWidth="2.5" strokeLinecap="round"/>
      <circle cx="24" cy="30" r="2.5" fill="#A16207"/>
      <path d="M24 32.5v4" stroke="#A16207" strokeWidth="2" strokeLinecap="round"/>
    </svg>
  ),
  map: (
    <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
      <polygon points="6 10 18 6 30 10 42 6 42 38 30 42 18 38 6 42" fill="#E0F2FE" stroke="#0284C7" strokeWidth="2.5" strokeLinejoin="round"/>
      <line x1="18" y1="6" x2="18" y2="38" stroke="#0284C7" strokeWidth="2"/>
      <line x1="30" y1="10" x2="30" y2="42" stroke="#0284C7" strokeWidth="2"/>
    </svg>
  ),
  levels: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" className="w-full h-full">
      <polygon points="12 3 21 7.5 12 12 3 7.5" fill="currentColor" fillOpacity="0.25" />
      <polyline points="3 12 12 16.5 21 12" />
      <polyline points="3 16.5 12 21 21 16.5" />
    </svg>
  ),
  stats: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-full h-full">
      <line x1="18" y1="20" x2="18" y2="10"/>
      <line x1="12" y1="20" x2="12" y2="4"/>
      <line x1="6" y1="20" x2="6" y2="14"/>
      <line x1="3" y1="20" x2="21" y2="20"/>
    </svg>
  )
};

export const SVG_ICONS = {
  close: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" className="w-full h-full">
      <line x1="18" y1="6" x2="6" y2="18"/>
      <line x1="6" y1="6" x2="18" y2="18"/>
    </svg>
  ),
  check: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="w-full h-full">
      <polyline points="20 6 9 17 4 12"/>
    </svg>
  ),
  shuffle: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-full h-full">
      <polyline points="16 3 21 3 21 8"/>
      <line x1="4" y1="20" x2="21" y2="3"/>
      <polyline points="21 16 21 21 16 21"/>
      <line x1="15" y1="15" x2="21" y2="21"/>
      <line x1="4" y1="4" x2="9" y2="9"/>
    </svg>
  ),
  deselect: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-full h-full">
      <circle cx="12" cy="12" r="9"/>
      <line x1="15" y1="9" x2="9" y2="15"/>
      <line x1="9" y1="9" x2="15" y2="15"/>
    </svg>
  ),
  help: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-full h-full">
      <circle cx="12" cy="12" r="10"/>
      <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"/>
      <line x1="12" y1="17" x2="12.01" y2="17"/>
    </svg>
  ),
  refresh: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-full h-full">
      <path d="M21.5 2v6h-6M2.5 22v-6h6"/>
      <path d="M20 15a8 8 0 1 1-2.2-8.5L21.5 8"/>
      <path d="M4 9a8 8 0 0 1 2.2 8.5L2.5 16"/>
    </svg>
  ),
  share: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-full h-full">
      <path d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8"/>
      <polyline points="16 6 12 2 8 6"/>
      <line x1="12" y1="2" x2="12" y2="15"/>
    </svg>
  ),
  stats: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-full h-full">
      <line x1="18" y1="20" x2="18" y2="10"/>
      <line x1="12" y1="20" x2="12" y2="4"/>
      <line x1="6" y1="20" x2="6" y2="14"/>
      <line x1="3" y1="20" x2="21" y2="20"/>
    </svg>
  ),
  archive: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-full h-full">
      <rect x="3" y="4" width="18" height="4" rx="1"/>
      <path d="M5 8v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V8"/>
      <line x1="10" y1="12" x2="14" y2="12"/>
    </svg>
  ),
  heartFill: (
    <svg viewBox="0 0 24 24" fill="#E11D48" stroke="#BE123C" strokeWidth="1.5" strokeLinejoin="round" className="w-full h-full">
      <path d="M12 21s-7-4.5-9.5-8.5C0 8 2.5 4 6.5 4c2.5 0 4.5 2 5.5 3 1-1 3-3 5.5-3 4 0 6.5 4 4 8.5C19 16.5 12 21 12 21z"/>
    </svg>
  ),
  heartEmpty: (
    <svg viewBox="0 0 24 24" fill="#E2DCD5" stroke="#A8A29E" strokeWidth="1.5" strokeLinejoin="round" className="w-full h-full">
      <path d="M12 21s-7-4.5-9.5-8.5C0 8 2.5 4 6.5 4c2.5 0 4.5 2 5.5 3 1-1 3-3 5.5-3 4 0 6.5 4 4 8.5C19 16.5 12 21 12 21z"/>
    </svg>
  ),
  home: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" className="w-full h-full">
      <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/>
      <polyline points="9 22 9 12 15 12 15 22"/>
    </svg>
  ),
  settings: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" className="w-full h-full">
      <circle cx="12" cy="12" r="3"/>
      <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"/>
    </svg>
  ),
  play: (
    <svg viewBox="0 0 24 24" fill="currentColor" stroke="none" className="w-full h-full">
      <path d="M7 5.5v13a1.2 1.2 0 0 0 1.8 1.05l11-6.5a1.2 1.2 0 0 0 0-2.1l-11-6.5A1.2 1.2 0 0 0 7 5.5z"/>
    </svg>
  ),
  levels: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" className="w-full h-full">
      <polygon points="12 3 21 7.5 12 12 3 7.5" fill="currentColor" fillOpacity="0.25" />
      <polyline points="3 12 12 16.5 21 12" />
      <polyline points="3 16.5 12 21 21 16.5" />
    </svg>
  ),
  magic: (
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
      <path
        d="M10 2.5C10 7.5 14 9.2 17.5 9.8C14 10.4 10 12.1 10 17.5C10 12.1 6 10.4 2.5 9.8C6 9.2 10 7.5 10 2.5Z"
        fill="#FDE68A"
        stroke="#D97706"
        strokeWidth="1.6"
        strokeLinejoin="round"
      />
      <path
        d="M18 13C18 15.5 20.2 16.4 22 16.8C20.2 17.2 18 18.1 18 20.5C18 18.1 15.8 17.2 14 16.8C15.8 16.4 18 15.5 18 13Z"
        fill="#FEF08A"
        stroke="#D97706"
        strokeWidth="1.3"
        strokeLinejoin="round"
      />
      <circle cx="4.5" cy="18" r="1.3" fill="#F59E0B"/>
    </svg>
  ),
  chevronRight: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" className="w-full h-full">
      <polyline points="9 18 15 12 9 6"/>
    </svg>
  ),
  chevronLeft: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" className="w-full h-full">
      <polyline points="15 18 9 12 15 6"/>
    </svg>
  ),
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
  starEmpty: (
    <svg viewBox="0 0 24 24" fill="none" stroke="#CBD5E1" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="w-full h-full" opacity="0.45">
      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
    </svg>
  )
};

export const ICONS = {
  ...SVG_EMOJIS,
  ...SVG_ICONS
};

export const CustomSvg = ({ name, type = 'emoji', size = 24, className = '' }) => {
  const collection = type === 'emoji' ? SVG_EMOJIS : SVG_ICONS;
  let svg = collection[name];

  if (!svg) {
    svg = type === 'emoji' ? SVG_ICONS[name] : SVG_EMOJIS[name];
  }

  if (!svg) {
    svg = SVG_EMOJIS.sparkle;
  }

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
