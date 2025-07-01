"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import MascotBalanziPro from "./mascot-balanzi-pro";

export function HeroSection() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section
      className="relative w-full min-h-[90vh] flex flex-col justify-center overflow-hidden pb-10"
      aria-labelledby="hero-heading"
    >
      {/* Hero content */}
      <div className="relative z-10 flex flex-col-reverse lg:flex-row items-center justify-between max-w-7xl mx-auto px-4 md:px-8 gap-20 lg:gap-0">
        {/* Left: Text */}
        <motion.div 
          className="flex-1 text-center lg:text-left"
          initial={{ opacity: 0.9, y: 80 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <span className="inline-block mb-4 px-4 py-1 rounded-full bg-gradient-to-r from-blue-400 to-blue-700 text-white text-xs font-semibold shadow-md tracking-wide">
            Smart Money, Balanced Journey
          </span>
          <h1 
            id="hero-heading"
            className="text-5xl md:text-6xl font-extrabold tracking-tight mb-6 leading-tight text-foreground"
          >
            Financial Balance, <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-blue-700">Made Simple</span>
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground mb-10 max-w-xl mx-auto lg:mx-0 font-light">
            Seimbang.in membantu kamu mengelola keuangan dengan mudah, cerdas, dan tetap fun. Satu aplikasi, semua solusi finansial.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center lg:justify-start">
            <Button 
              size="lg" 
              className="gap-2 bg-gradient-to-r from-blue-400 to-blue-700 hover:from-blue-500 hover:to-blue-800 shadow-md text-base font-semibold px-8 py-4 rounded-full"
              asChild
            >
              <a href="#cta">Mulai Sekarang</a>
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="gap-2 border-2 border-blue-500 text-blue-700 dark:text-blue-400 hover:bg-blue-50 dark:hover:bg-blue-900/30 text-base font-semibold px-8 py-4 rounded-full"
              asChild
            >
              <a href="#features">Lihat Demo</a>
            </Button>
          </div>
          {/* Badge/testimoni kecil */}
          <div className="flex items-center gap-2 mt-8 justify-center lg:justify-start">
            <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-muted text-xs font-semibold text-foreground shadow">
              <svg width="16" height="16" fill="none" viewBox="0 0 16 16" aria-hidden="true">
                <circle cx="8" cy="8" r="8" fill="#60a5fa"/>
                <text x="8" y="12" textAnchor="middle" fontSize="10" fill="#fff">★</text>
              </svg>
              4.9/5 dari 10.000+ pengguna
            </span>
          </div>
        </motion.div>

        {/* Right: Ilustrasi SVG custom */}
        <motion.div 
          className="flex-1 flex justify-center items-center relative"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          {/* Maskot animasi BalanziPro */}
          <MascotBalanziPro className="w-[220px] h-[250px] md:w-[500px] md:h-[500px] drop-shadow-2xl" />
        </motion.div>
      </div>
    </section>
  );
}