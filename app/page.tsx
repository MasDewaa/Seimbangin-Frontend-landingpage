"use client";

import { useEffect, useCallback } from "react";
import { HeroSection } from "@/components/landing/hero-section";
import { FeatureSection } from "@/components/landing/feature-section";
import { TestimonialSection } from "@/components/landing/testimonial-section";
import { ScreenshotGallery } from "@/components/landing/screenshot-gallery";
import { PricingSection } from "@/components/landing/pricing-section";
import { FaqSection } from "@/components/landing/faq-section";
import { CtaSection } from "@/components/landing/cta-section";
import { FooterSection } from "@/components/landing/footer-section";
import WhySection from "@/components/landing/why-section";
import HowSection from "@/components/landing/how-section";
import Navbar from "@/components/landing/navbar";

export default function Home() {
  // Smooth scroll for anchor links with better performance
  const handleAnchorClick = useCallback((e: MouseEvent) => {
    const target = e.target as HTMLElement;
    const anchor = target.closest('a[href^="#"]');
    
    if (anchor) {
      e.preventDefault();
      const targetId = anchor.getAttribute('href');
      if (targetId && targetId.startsWith('#')) {
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
          targetElement.scrollIntoView({ 
            behavior: 'smooth',
            block: 'start'
          });
        }
      }
    }
  }, []);

  useEffect(() => {
    document.addEventListener('click', handleAnchorClick, { passive: false });
    return () => document.removeEventListener('click', handleAnchorClick);
  }, [handleAnchorClick]);

  return (
    <>
      {/* Skip link for accessibility */}
      <a href="#main-content" className="skip-link">
        Skip to main content
      </a>
      
      <main id="main-content" className="min-h-screen overflow-hidden">
        <Navbar />
        <HeroSection />
        <WhySection />
        <HowSection />
        <FeatureSection />
        <TestimonialSection />
        <ScreenshotGallery />
        <PricingSection />
        <FaqSection />
        <CtaSection />
        <FooterSection />
      </main>
    </>
  );
}