import React from "react";
import "../../app/globals.css";

export default function MascotBalanziBlob({ className = "", style = {} }) {
  return (
    <svg
      width="240"
      height="260"
      viewBox="0 0 240 260"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      style={style}
    >
      {/* Shadow */}
      <ellipse cx="120" cy="230" rx="40" ry="14" fill="#818cf8" opacity="0.13" />
      {/* Badan blob organik (gradasi, outline, highlight, animasi) */}
      <g className="balanziBlob-badan">
        <path
          d="M120 70
            C170 60, 210 120, 180 170
            C160 210, 80 210, 60 170
            C30 120, 70 60, 120 70Z"
          fill="url(#balanziBlobBody)"
          stroke="#a5b4fc"
          strokeWidth="3"
        />
        {/* Highlight/glossy */}
        <ellipse className="balanziBlob-highlight" cx="100" cy="110" rx="22" ry="9" fill="#fff" opacity="0.32" />
        {/* Pipi blush */}
        <ellipse cx="90" cy="150" rx="9" ry="5" fill="#f9a8d4" opacity="0.7" />
        <ellipse cx="150" cy="150" rx="9" ry="5" fill="#f9a8d4" opacity="0.7" />
        {/* Mata besar (kanan wink) */}
        <ellipse cx="95" cy="130" rx="8" ry="11" fill="#22223b" />
        <ellipse cx="93" cy="127" rx="2.2" ry="2.7" fill="#fff" />
        <path d="M145 130 Q150 132 155 130" stroke="#22223b" strokeWidth="3" strokeLinecap="round" />
        {/* Mulut senyum lebar */}
        <path d="M105 165 Q120 180 135 165" stroke="#22223b" strokeWidth="3" fill="none" strokeLinecap="round" />
      </g>
      {/* Tangan kiri (koin float) */}
      <g className="balanziBlob-koin">
        <path d="M80 140 Q50 120 40 100" stroke="#a5b4fc" strokeWidth="7" fill="none" strokeLinecap="round" />
        <g className="balanziBlob-koin-float">
          <ellipse cx="32" cy="90" rx="12" ry="12" fill="url(#balanziBlobCoin)" stroke="#fbbf24" strokeWidth="2" />
          <ellipse cx="32" cy="90" rx="9" ry="9" fill="#fde68a" />
          <text x="32" y="95" textAnchor="middle" fontSize="10" fill="#f59e42" fontWeight="bold">Rp</text>
          <ellipse cx="35" cy="85" rx="3.5" ry="1.7" fill="#fff" opacity="0.5" />
        </g>
      </g>
      {/* Tangan kanan (daun float) */}
      <g className="balanziBlob-daun">
        <path d="M160 140 Q200 120 210 100" stroke="#a5b4fc" strokeWidth="7" fill="none" strokeLinecap="round" />
        <g className="balanziBlob-daun-float">
          <ellipse cx="218" cy="90" rx="10" ry="16" fill="#6ee7b7" />
          <path d="M218 90 Q222 100 224 110" stroke="#059669" strokeWidth="2.5" fill="none" />
          <ellipse cx="222" cy="100" rx="2.2" ry="4" fill="#34d399" />
        </g>
      </g>
      {/* Sparkle/bubble */}
      <g className="balanziBlob-sparkle">
        <circle cx="60" cy="80" r="3" fill="#f9a8d4" opacity="0.7" />
        <circle cx="180" cy="80" r="2.5" fill="#fef9c3" opacity="0.7" />
        <circle cx="120" cy="60" r="2.2" fill="#a5b4fc" opacity="0.7" />
      </g>
      <defs>
        <linearGradient id="balanziBlobBody" x1="60" y1="70" x2="180" y2="190" gradientUnits="userSpaceOnUse">
          <stop stopColor="#60a5fa" />
          <stop offset="0.5" stopColor="#a5b4fc" />
          <stop offset="1" stopColor="#c4b5fd" />
        </linearGradient>
        <radialGradient id="balanziBlobCoin" cx="0.5" cy="0.5" r="0.5" fx="0.3" fy="0.3">
          <stop stopColor="#fde68a" />
          <stop offset="1" stopColor="#fbbf24" />
        </radialGradient>
      </defs>
    </svg>
  );
}

// Animasi CSS (tambahkan ke globals.css):
/*
.balanziBlob-badan {
  transform-origin: 120px 140px;
  animation: balanziBlob-gelombang 4.5s cubic-bezier(.7,0,.3,1) infinite alternate;
}
@keyframes balanziBlob-gelombang {
  0% { transform: scale(1,1) rotate(-2deg); }
  20% { transform: scale(1.05,0.95) rotate(2deg); }
  50% { transform: scale(0.96,1.06) rotate(3deg); }
  80% { transform: scale(1.04,0.97) rotate(-2deg); }
  100% { transform: scale(1,1) rotate(-2deg); }
}
.balanziBlob-highlight {
  animation: balanziBlob-highlight-move 4.5s ease-in-out infinite alternate;
}
@keyframes balanziBlob-highlight-move {
  0% { opacity: 0.32; transform: translateY(0); }
  50% { opacity: 0.5; transform: translateY(12px); }
  100% { opacity: 0.32; transform: translateY(0); }
}
.balanziBlob-koin-float {
  animation: balanziBlob-float 2.8s ease-in-out infinite alternate;
}
.balanziBlob-daun-float {
  animation: balanziBlob-float 3.2s ease-in-out infinite alternate-reverse;
}
@keyframes balanziBlob-float {
  0% { transform: translateY(0); }
  100% { transform: translateY(-18px); }
}
.balanziBlob-sparkle circle {
  opacity: 0.7;
  animation: balanziBlob-sparkle-fade 3.5s ease-in-out infinite alternate;
}
.balanziBlob-sparkle circle:nth-child(2) {
  animation-delay: 1.2s;
}
.balanziBlob-sparkle circle:nth-child(3) {
  animation-delay: 2.1s;
}
@keyframes balanziBlob-sparkle-fade {
  0% { opacity: 0.7; }
  50% { opacity: 0.2; }
  100% { opacity: 0.7; }
}
*/ 