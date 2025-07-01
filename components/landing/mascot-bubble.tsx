import React from "react";
import "../../app/globals.css";

export default function MascotBubble({ className = "", style = {} }) {
  return (
    <svg
      width="220"
      height="220"
      viewBox="0 0 220 220"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className + " mascot-bubble-float"}
      style={style}
    >
      {/* Lingkaran latar dengan gelombang */}
      {/* <g className="mascot-bubble-bg">
        <circle cx="110" cy="110" r="100" fill="#e0eaff" />
        <path
          className="mascot-bubble-wave"
          d="M10 70 Q60 90 110 70 Q160 50 210 80 V210 H10 V70 Z"
          fill="#d3e3fa"
        />
      </g> */}
      {/* Maskot utama */}
      <g className="mascot-bubble-main">
        {/* Koin di atas kepala */}
        <g className="mascot-bubble-coin">
          {/* Koin utama (lebih besar) */}
          <ellipse cx="110" cy="48" rx="28" ry="20" fill="#60a5fa" opacity="0.7" />
          <ellipse cx="110" cy="48" rx="28" ry="20" fill="none" stroke="#3490fa" strokeWidth="2" />
          <text x="110" y="56" textAnchor="middle" fontSize="20" fill="#fff" fontWeight="bold" opacity="0.9">$</text>
          {/* Koin kecil di atas koin utama, berputar */}
          <g className="mascot-bubble-coin-spin">
            <ellipse cx="110" cy="28" rx="10" ry="7" fill="#60a5fa" opacity="0.8" />
            <ellipse cx="110" cy="28" rx="10" ry="7" fill="none" stroke="#3490fa" strokeWidth="1.5" />
            <text x="110" y="32" textAnchor="middle" fontSize="10" fill="#fff" fontWeight="bold" opacity="0.9">$</text>
          </g>
        </g>
        {/* Badan bulat */}
        <ellipse cx="110" cy="110" rx="44" ry="44" fill="#3490fa" />
        <ellipse cx="110" cy="110" rx="44" ry="44" fill="none" stroke="#2563eb" strokeWidth="3" />
        {/* Pipi putih */}
        <ellipse cx="92" cy="124" rx="6" ry="3.5" fill="#fff" opacity="0.9" />
        <ellipse cx="128" cy="124" rx="6" ry="3.5" fill="#fff" opacity="0.9" />
        {/* Mata bulat */}
        <ellipse cx="100" cy="112" rx="4" ry="6" fill="#22223b" />
        <ellipse cx="120" cy="112" rx="4" ry="6" fill="#22223b" />
        <ellipse cx="99" cy="110" rx="1.2" ry="1.7" fill="#fff" />
        <ellipse cx="119" cy="110" rx="1.2" ry="1.7" fill="#fff" />
        {/* Mulut kecil */}
        <ellipse cx="110" cy="124" rx="2.5" ry="1.5" fill="#22223b" />
        {/* Tangan kiri */}
        <g className="mascot-bubble-hand mascot-bubble-hand-left">
          <path d="M72 120 Q62 110 82 100 Q92 110 82 120 Q77 125 72 120Z" fill="#3490fa" />
          <path d="M72 120 Q62 110 82 100 Q92 110 82 120 Q77 125 72 120Z" fill="none" stroke="#2563eb" strokeWidth="2" />
        </g>
        {/* Tangan kanan */}
        <g className="mascot-bubble-hand mascot-bubble-hand-right">
          <path d="M148 120 Q158 110 138 100 Q128 110 138 120 Q143 125 148 120Z" fill="#3490fa" />
          <path d="M148 120 Q158 110 138 100 Q128 110 138 120 Q143 125 148 120Z" fill="none" stroke="#2563eb" strokeWidth="2" />
        </g>
      </g>
    </svg>
  );
}

// Animasi CSS (tambahkan ke globals.css):
/*
.mascot-bubble-float {
  animation: mascot-bubble-float 3.5s ease-in-out infinite alternate;
}
@keyframes mascot-bubble-float {
  0% { transform: translateY(0); }
  100% { transform: translateY(-18px); }
}
.mascot-bubble-coin {
  transform-origin: 110px 48px;
  animation: mascot-bubble-coin-bounce 2.2s ease-in-out infinite alternate;
}
@keyframes mascot-bubble-coin-bounce {
  0% { transform: translateY(0) scale(1,1); }
  100% { transform: translateY(-22px) scale(1.08,0.92); }
}
.mascot-bubble-coin-spin {
  transform-origin: 110px 28px;
  animation: mascot-bubble-coin-spin 1.6s linear infinite;
}
@keyframes mascot-bubble-coin-spin {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}
.mascot-bubble-hand-left {
  transform-origin: 77px 120px;
  animation: mascot-bubble-hand-wave 2.2s ease-in-out infinite alternate;
}
.mascot-bubble-hand-right {
  transform-origin: 143px 120px;
  animation: mascot-bubble-hand-wave 2.2s ease-in-out infinite alternate-reverse;
}
@keyframes mascot-bubble-hand-wave {
  0% { transform: rotate(0deg) scale(1,1); }
  100% { transform: rotate(-18deg) scale(1.08,0.92); }
}
.mascot-bubble-wave {
  animation: mascot-bubble-wave-move 6s ease-in-out infinite alternate;
}
@keyframes mascot-bubble-wave-move {
  0% { transform: translateY(0); }
  100% { transform: translateY(10px); }
}
*/ 