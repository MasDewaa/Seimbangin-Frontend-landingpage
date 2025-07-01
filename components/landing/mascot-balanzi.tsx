import React from "react";
import "../../app/globals.css";

export default function MascotBalanzi({ className = "", style = {} }) {
  return (
    <svg
      width="180"
      height="200"
      viewBox="0 0 180 200"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      style={style}
    >
      {/* Balok keseimbangan */}
      <rect x="40" y="170" width="100" height="12" rx="6" fill="#c4b5fd" />
      {/* Bayangan bulat */}
      <ellipse cx="90" cy="180" rx="28" ry="8" fill="#a5b4fc" opacity="0.25" />
      {/* Badan maskot (bergoyang) */}
      <g className="balanzi-badan">
        <ellipse cx="90" cy="120" rx="40" ry="40" fill="#93c5fd" />
        {/* Wajah */}
        <ellipse cx="90" cy="125" rx="18" ry="14" fill="#fff" />
        <ellipse cx="82" cy="127" rx="2.5" ry="3" fill="#6366f1" />
        <ellipse cx="98" cy="127" rx="2.5" ry="3" fill="#6366f1" />
        <path d="M85 135 Q90 140 95 135" stroke="#6366f1" strokeWidth="2" fill="none" />
      </g>
      {/* Tangan kiri (koin, berputar) */}
      <g className="balanzi-koin">
        <ellipse cx="50" cy="110" rx="8" ry="8" fill="#fde68a" stroke="#fbbf24" strokeWidth="2" />
        <text x="50" y="115" textAnchor="middle" fontSize="10" fill="#f59e42">Rp</text>
      </g>
      {/* Tangan kanan (daun, melambai) */}
      <g className="balanzi-daun">
        <ellipse cx="130" cy="110" rx="7" ry="12" fill="#6ee7b7" />
        <path d="M130 110 Q132 115 134 120" stroke="#059669" strokeWidth="2" fill="none" />
      </g>
      {/* Lengan kiri */}
      <path d="M80 120 Q65 115 50 110" stroke="#93c5fd" strokeWidth="6" fill="none" />
      {/* Lengan kanan */}
      <path d="M100 120 Q115 115 130 110" stroke="#93c5fd" strokeWidth="6" fill="none" />
    </svg>
  );
}

// Animasi CSS (tambahkan ke globals.css):
/*
.balanzi-badan {
  transform-origin: 90px 120px;
  animation: balanzi-goyang 3.5s ease-in-out infinite alternate;
}
@keyframes balanzi-goyang {
  0% { transform: rotate(-4deg); }
  50% { transform: rotate(4deg); }
  100% { transform: rotate(-4deg); }
}
.balanzi-koin {
  transform-origin: 50px 110px;
  animation: balanzi-koin 2.5s linear infinite;
}
@keyframes balanzi-koin {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}
.balanzi-daun {
  transform-origin: 130px 110px;
  animation: balanzi-daun 2.8s ease-in-out infinite alternate;
}
@keyframes balanzi-daun {
  0% { transform: rotate(-10deg); }
  100% { transform: rotate(18deg); }
}
*/ 