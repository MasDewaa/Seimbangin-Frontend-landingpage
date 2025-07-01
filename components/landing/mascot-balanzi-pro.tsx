import React from "react";
import "../../app/globals.css";

export default function MascotBalanziPro({ className = "", style = {} }) {
  return (
    <svg
      width="500"
      height="500"
      viewBox="0 0 250 250"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className + " balanziPro-float"}
      style={style}
    >
      {/* Sparkle/bubble */}
      <g className="balanziPro-sparkle">
        <circle cx="60" cy="90" r="3" fill="#f9a8d4" opacity="0.7" />
        <circle cx="180" cy="80" r="2.5" fill="#fef9c3" opacity="0.7" />
        <circle cx="120" cy="60" r="2.2" fill="#a5b4fc" opacity="0.7" />
      </g>
      {/* Shadow */}
      <ellipse cx="110" cy="220" rx="38" ry="12" fill="#6366f1" opacity="0.18" />
      {/* Koin utama dan koin kecil (spin, bounce, glow) */}
      <g className="balanziPro-coin-group">
        {/* Koin utama */}
        <g className="balanziPro-coin">
          <ellipse cx="110" cy="48" rx="28" ry="20" fill="#fde68a" />
          <ellipse cx="110" cy="48" rx="28" ry="20" fill="none" stroke="#fbbf24" strokeWidth="2" />
          <text x="110" y="56" textAnchor="middle" fontSize="20" fill="#f59e42" fontWeight="bold">Rp</text>
          {/* Glow */}
          <ellipse cx="110" cy="48" rx="32" ry="24" fill="#fde68a" opacity="0.18" />
        </g>
        {/* Koin kecil di atas koin utama (spin) */}
        <g className="balanziPro-coin-small">
          <ellipse cx="110" cy="28" rx="10" ry="7" fill="#fde68a" />
          <ellipse cx="110" cy="28" rx="10" ry="7" fill="none" stroke="#fbbf24" strokeWidth="1.5" />
          <text x="110" y="32" textAnchor="middle" fontSize="10" fill="#f59e42" fontWeight="bold">Rp</text>
        </g>
      </g>
      {/* Badan maskot (gradasi, outline, highlight, animasi) */}
      <g className="balanziPro-badan">
        <ellipse cx="110" cy="130" rx="60" ry="60" fill="url(#balanziProBody)" stroke="#6366f1" strokeWidth="3" />
        {/* Highlight/glossy */}
        <ellipse className="balanziPro-highlight" cx="90" cy="110" rx="18" ry="8" fill="#fff" opacity="0.35" />
        {/* Pipi */}
        <ellipse cx="85" cy="145" rx="7" ry="4" fill="#f9a8d4" opacity="0.7" />
        <ellipse cx="135" cy="145" rx="7" ry="4" fill="#f9a8d4" opacity="0.7" />
        {/* Mata besar dengan highlight */}
        <ellipse cx="95" cy="130" rx="7" ry="10" fill="#22223b" />
        <ellipse cx="125" cy="130" rx="7" ry="10" fill="#22223b" />
        <ellipse cx="93" cy="127" rx="2" ry="2.5" fill="#fff" />
        <ellipse cx="123" cy="127" rx="2" ry="2.5" fill="#fff" />
        {/* Mulut senyum lebar */}
        <path d="M98 148 Q110 160 122 148" stroke="#22223b" strokeWidth="3" fill="none" strokeLinecap="round" />
      </g>
      {/* Daun natural (melambai, flip) */}
      <g className="balanziPro-daun">
        <ellipse cx="175" cy="110" rx="10" ry="18" fill="#6ee7b7" />
        <path d="M175 110 Q180 120 182 130" stroke="#059669" strokeWidth="2.5" fill="none" />
        <ellipse cx="180" cy="120" rx="2.5" ry="5" fill="#34d399" />
      </g>
      {/* Lengan kiri (lentur) */}
      <path d="M90 140 Q60 130 45 110" stroke="#93c5fd" strokeWidth="8" fill="none" strokeLinecap="round" />
      {/* Lengan kanan (lentur) */}
      <path d="M130 140 Q160 130 175 110" stroke="#93c5fd" strokeWidth="8" fill="none" strokeLinecap="round" />
      <defs>
        <linearGradient id="balanziProBody" x1="60" y1="70" x2="160" y2="190" gradientUnits="userSpaceOnUse">
          <stop stopColor="#60a5fa" />
          <stop offset="1" stopColor="#a5b4fc" />
        </linearGradient>
      </defs>
    </svg>
  );
}

// Animasi CSS (tambahkan ke globals.css):
/*
.balanziPro-badan {
  transform-origin: 110px 130px;
  animation: balanziPro-goyang 3.5s cubic-bezier(.7,0,.3,1) infinite alternate;
}
@keyframes balanziPro-goyang {
  0% { transform: scale(1,1) rotate(-3deg); }
  20% { transform: scale(1.04,0.96) rotate(2deg); }
  50% { transform: scale(0.97,1.05) rotate(4deg); }
  80% { transform: scale(1.03,0.97) rotate(-2deg); }
  100% { transform: scale(1,1) rotate(-3deg); }
}
.balanziPro-highlight {
  animation: balanziPro-highlight-move 3.5s ease-in-out infinite alternate;
}
@keyframes balanziPro-highlight-move {
  0% { opacity: 0.35; transform: translateY(0); }
  50% { opacity: 0.5; transform: translateY(10px); }
  100% { opacity: 0.35; transform: translateY(0); }
}
.balanziPro-koin {
  transform-origin: 45px 110px;
  animation: balanziPro-koin-spin 2.2s linear infinite, balanziPro-koin-bounce 1.8s ease-in-out infinite alternate;
}
@keyframes balanziPro-koin-spin {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}
@keyframes balanziPro-koin-bounce {
  0% { filter: drop-shadow(0 0 0 #fde68a); }
  50% { filter: drop-shadow(0 4px 8px #fde68a88); }
  100% { filter: drop-shadow(0 0 0 #fde68a); }
}
.balanziPro-daun {
  transform-origin: 175px 110px;
  animation: balanziPro-daun 2.8s ease-in-out infinite alternate;
}
@keyframes balanziPro-daun {
  0% { transform: rotate(-12deg) scale(1,1); }
  50% { transform: rotate(16deg) scale(1.08,0.95); }
  100% { transform: rotate(-12deg) scale(1,1); }
}
*/ 