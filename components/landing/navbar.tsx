"use client";

import Link from "next/link";
import { useState, useCallback } from "react";
import { Menu, X } from "lucide-react";

const navLinks = [
  { href: "#why", label: "Mengapa" },
  { href: "#features", label: "Fitur" },
  { href: "#how", label: "Cara Kerja" },
  { href: "#pricing", label: "Harga" },
  { href: "#faq", label: "FAQ" },
  { href: "#testimonials", label: "Testimoni" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const handleMenuToggle = useCallback(() => {
    setOpen((prev) => !prev);
  }, []);

  const handleMenuClose = useCallback(() => {
    setOpen(false);
  }, []);

  return (
    <header className="sticky top-0 z-50 w-full bg-background/80 backdrop-blur border-b border-border/40 shadow-sm transition-all">
      <nav className="max-w-7xl mx-auto flex items-center justify-between px-4 md:px-8 py-3" aria-label="Main navigation">
        {/* Logo */}
        <Link href="#" className="flex items-center gap-2" aria-label="Seimbang.in Home">
          <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-blue-400 to-blue-700 flex items-center justify-center shadow-md" aria-hidden="true">
            <span className="text-white font-bold text-lg">S</span>
          </div>
          <span className="font-bold text-lg text-foreground tracking-tight">seimbang.in</span>
        </Link>
        
        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-2 lg:gap-4">
          <ul className="flex items-center gap-2 lg:gap-4" role="list">
            {navLinks.map((link) => (
              <li key={link.href} role="listitem">
                <a
                  href={link.href}
                  className="px-3 py-2 rounded-lg text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-muted transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
          <a
            href="#cta"
            className="ml-2 px-4 py-2 rounded-full bg-gradient-to-r from-blue-400 to-blue-700 text-white font-semibold shadow hover:from-blue-500 hover:to-blue-800 transition-colors text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
          >
            Mulai Gratis
          </a>
        </div>
        
        {/* Mobile hamburger */}
        <button
          className="md:hidden p-2 rounded-lg hover:bg-muted text-muted-foreground hover:text-foreground transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
          onClick={handleMenuToggle}
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label="Toggle menu"
        >
          {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </nav>
      
      {/* Mobile menu */}
      {open && (
        <div 
          id="mobile-menu"
          className="md:hidden bg-background/95 backdrop-blur border-t border-border/40 shadow-lg px-4 pb-4 pt-2 flex flex-col gap-2 animate-fade-in-down"
          role="navigation"
          aria-label="Mobile navigation"
        >
          <ul className="flex flex-col gap-2" role="list">
            {navLinks.map((link) => (
              <li key={link.href} role="listitem">
                <a
                  href={link.href}
                  className="block px-3 py-2 rounded-lg text-base font-medium text-muted-foreground hover:text-foreground hover:bg-muted transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                  onClick={handleMenuClose}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
          <a
            href="#cta"
            className="mt-2 px-4 py-2 rounded-full bg-gradient-to-r from-blue-400 to-blue-700 text-white font-semibold shadow hover:from-blue-500 hover:to-blue-800 transition-colors text-base text-center focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
            onClick={handleMenuClose}
          >
            Mulai Gratis
          </a>
        </div>
      )}
    </header>
  );
} 