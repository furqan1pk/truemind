// TrueMind logo + shared icons
const TrueMindMark = ({ size = 28, color = "currentColor" }) => (
  <svg width={size} height={size} viewBox="0 0 32 32" fill="none">
    {/* Two overlapping circles forming a calm 'mind' lens */}
    <circle cx="12" cy="16" r="9" stroke={color} strokeWidth="1.6" />
    <circle cx="20" cy="16" r="9" stroke={color} strokeWidth="1.6" />
    <circle cx="16" cy="16" r="2" fill={color} />
  </svg>
);

const TrueMindWordmark = ({ color = "currentColor", size = 28 }) => (
  <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
    <TrueMindMark size={size} color={color} />
    <span style={{ fontWeight: 600, fontSize: 19, letterSpacing: "-0.02em", color }}>
      TrueMind
    </span>
  </div>
);

const Arrow = ({ size = 14 }) => (
  <svg width={size} height={size} viewBox="0 0 16 16" fill="none" className="arr">
    <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const ArrowDown = ({ size = 14 }) => (
  <svg width={size} height={size} viewBox="0 0 16 16" fill="none">
    <path d="M8 3v10M4 9l4 4 4-4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const Check = ({ size = 14, color = "currentColor" }) => (
  <svg width={size} height={size} viewBox="0 0 16 16" fill="none">
    <path d="M3 8.5L6.5 12 13 4.5" stroke={color} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const Star = ({ size = 14, color = "currentColor" }) => (
  <svg width={size} height={size} viewBox="0 0 16 16" fill="none">
    <path d="M8 1.5l1.9 4.3 4.7.4-3.6 3.1 1.1 4.6L8 11.5 3.9 13.9 5 9.3 1.4 6.2l4.7-.4L8 1.5z" fill={color}/>
  </svg>
);

const Plus = ({ size = 14 }) => (
  <svg width={size} height={size} viewBox="0 0 16 16" fill="none">
    <path d="M8 3v10M3 8h10" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round"/>
  </svg>
);

const Minus = ({ size = 14 }) => (
  <svg width={size} height={size} viewBox="0 0 16 16" fill="none">
    <path d="M3 8h10" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round"/>
  </svg>
);

const Apple = ({ size = 22 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
    <path d="M17.5 12.5c0-2.6 2.1-3.8 2.2-3.9-1.2-1.8-3.1-2-3.7-2-1.6-.2-3.1.9-3.9.9-.8 0-2.1-.9-3.4-.9-1.7 0-3.4 1-4.3 2.6-1.8 3.2-.5 7.9 1.3 10.5.9 1.3 1.9 2.7 3.3 2.6 1.3-.1 1.8-.9 3.4-.9 1.5 0 2 .9 3.4.9 1.4 0 2.3-1.3 3.2-2.6 1-1.5 1.4-2.9 1.5-3-.1-.1-2.8-1.1-2.8-4.2zM15 4.4c.7-.9 1.2-2 1.1-3.2-1 0-2.3.7-3.1 1.5-.7.8-1.3 2-1.1 3.1 1.2.1 2.4-.6 3.1-1.4z"/>
  </svg>
);

const PlayStoreIcon = ({ size = 22 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
    <path d="M3.6 1.7c-.3.3-.5.8-.5 1.4v17.8c0 .6.2 1.1.5 1.4l.1.1L13.6 12 3.7 1.7l-.1.1z"/>
    <path d="M17 15.4l-3.4-3.4 3.4-3.4 4 2.3c1.2.7 1.2 1.8 0 2.4l-4 2.1z"/>
    <path d="M17 15.4L13.6 12 3.6 22.3c.4.4 1.1.5 1.8.1L17 15.4z"/>
    <path d="M17 8.6L5.4 1.6c-.7-.4-1.4-.3-1.8.1L13.6 12 17 8.6z"/>
  </svg>
);

const ShieldIcon = ({ size = 20 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 2l8 4v6c0 5-3.5 9.5-8 11-4.5-1.5-8-6-8-11V6l8-4z"/>
    <path d="M9 12l2 2 4-4"/>
  </svg>
);

Object.assign(window, { TrueMindMark, TrueMindWordmark, Arrow, ArrowDown, Check, Star, Plus, Minus, Apple, PlayStoreIcon, ShieldIcon });
