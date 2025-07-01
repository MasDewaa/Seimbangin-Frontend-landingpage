"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export function CtaSection() {
  return (
    <section className="py-20 bg-gradient-to-br from-blue-50/60 via-blue-100/60 to-background dark:from-blue-900/40 dark:via-blue-800/40 dark:to-background relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-2xl mx-auto rounded-2xl overflow-hidden shadow-xl border border-border/30 bg-card/90 backdrop-blur-lg p-10 md:p-16 flex flex-col items-center text-center">
          <h2 className="text-3xl md:text-4xl font-extrabold mb-4">Siap Mulai Perjalanan Finansialmu?</h2>
          <p className="text-lg text-muted-foreground mb-8 font-light">
            Download Seimbang.in sekarang dan rasakan kemudahan mengelola keuangan. Gratis, mudah, dan balance!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 mb-8 w-full justify-center">
            <Button size="lg" className="gap-2 bg-gradient-to-r from-blue-400 to-blue-700 hover:from-blue-500 hover:to-blue-800 text-white shadow-lg px-8 py-4 rounded-full w-full sm:w-auto">
              Download App
            </Button>
            <Button size="lg" variant="outline" className="gap-2 border-2 border-blue-500 text-blue-700 dark:text-blue-400 hover:bg-blue-50 dark:hover:bg-blue-900/30 text-base font-semibold px-8 py-4 rounded-full w-full sm:w-auto">
              Lihat Demo
            </Button>
          </div>
          <div className="w-full max-w-md mx-auto">
            <h3 className="font-semibold mb-4">Dapatkan update & tips keuangan</h3>
            <form className="flex gap-2">
              <Input 
                type="email" 
                placeholder="Masukkan email kamu" 
                className="max-w-xs rounded-full" 
              />
              <Button className="rounded-full px-6">Subscribe</Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}