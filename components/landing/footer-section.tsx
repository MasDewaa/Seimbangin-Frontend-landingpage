"use client";

import Link from "next/link";
import Image from "next/image";
import { Facebook, Twitter, Instagram, Linkedin, Globe, Mail, Phone } from "lucide-react";

export function FooterSection() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gradient-to-t from-muted/60 to-background pt-12 pb-4 border-t border-border/40">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          <div className="flex flex-col gap-3">
            <div className="flex items-center gap-3 mb-2">
              <div className="w-10 h-10 flex items-center justify-center">
                <Image
                  src="/logo-app.svg"
                  alt="Seimbang.in Logo"
                  width={40}
                  height={40}
                  className="w-full h-full"
                />
              </div>
              <span className="font-bold text-lg text-foreground tracking-tight">seimbang.in</span>
            </div>
            <p className="text-muted-foreground text-xs max-w-md">
              Aplikasi keuangan modern untuk generasi balance. Gratis, aman, dan cerdas.
            </p>
            <div className="flex space-x-3 mt-2">
              <a href="#" className="text-muted-foreground hover:text-foreground transition-colors"><Facebook className="h-4 w-4" /></a>
              <a href="#" className="text-muted-foreground hover:text-foreground transition-colors"><Twitter className="h-4 w-4" /></a>
              <a href="#" className="text-muted-foreground hover:text-foreground transition-colors"><Instagram className="h-4 w-4" /></a>
              <a href="#" className="text-muted-foreground hover:text-foreground transition-colors"><Linkedin className="h-4 w-4" /></a>
            </div>
          </div>
          <div className="flex flex-col gap-1">
            <h3 className="font-semibold mb-1 text-sm">Product</h3>
            <ul className="space-y-1 text-xs">
              <li><a href="#why" className="hover:text-blue-500 transition-colors">Why</a></li>
              <li><a href="#features" className="hover:text-blue-500 transition-colors">Features</a></li>
              <li><a href="#pricing" className="hover:text-blue-500 transition-colors">Pricing</a></li>
              <li><a href="#faq" className="hover:text-blue-500 transition-colors">FAQ</a></li>
            </ul>
          </div>
          <div className="flex flex-col gap-1">
            <h3 className="font-semibold mb-1 text-sm">Company</h3>
            <ul className="space-y-1 text-xs">
              <li><a href="#testimonials" className="hover:text-blue-500 transition-colors">Testimonials</a></li>
              <li><a href="#" className="hover:text-blue-500 transition-colors">About</a></li>
              <li><a href="#" className="hover:text-blue-500 transition-colors">Careers</a></li>
            </ul>
          </div>
          <div className="flex flex-col gap-1">
            <h3 className="font-semibold mb-1 text-sm">Contact</h3>
            <ul className="space-y-1 text-xs">
              <li className="flex items-center gap-2">
                <Mail className="h-4 w-4 text-muted-foreground" />
                <a href="mailto:hello@seimbang.in" className="hover:text-blue-500 transition-colors">hello@seimbang.in</a>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="h-4 w-4 text-muted-foreground" />
                <a href="tel:+62123456789" className="hover:text-blue-500 transition-colors">+62 123 456 789</a>
              </li>
              <li className="flex items-center gap-2">
                <Globe className="h-4 w-4 text-muted-foreground" />
                <a href="https://seimbangin.site" className="hover:text-blue-500 transition-colors">seimbangin.site</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="pt-4 border-t border-border/40 flex flex-col md:flex-row justify-between items-center gap-2">
          <div className="flex flex-wrap gap-4 text-xs text-muted-foreground">
            <a href="#" className="hover:text-foreground transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-foreground transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-foreground transition-colors">Cookie Policy</a>
          </div>
          <div className="text-xs text-muted-foreground">
            © {currentYear} seimbang.in. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
}