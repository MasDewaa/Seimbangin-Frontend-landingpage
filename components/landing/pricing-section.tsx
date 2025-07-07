"use client";

import { motion } from "framer-motion";
import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";

const plans = [
  {
    name: "Gratis",
    price: "Rp0",
    desc: "Cocok untuk pemula, fitur utama gratis selamanya.",
    features: [
      "Catat pengeluaran otomatis",
      "Budgeting dasar",
      "Laporan bulanan"
    ],
    cta: "Coba Gratis",
    popular: false
  },
  {
    name: "Premium",
    price: "Rp49.000",
    period: "/bulan",
    desc: "Fitur lengkap, AI insight, support prioritas.",
    features: [
      "Semua fitur Gratis",
      "AI smart insight",
      "Sinkronisasi bank",
      "Support prioritas"
    ],
    cta: "Upgrade Premium",
    popular: true
  },
  {
    name: "Family",
    price: "Rp89.000",
    period: "/bulan",
    desc: "Kelola keuangan keluarga, hingga 5 akun.",
    features: [
      "Semua fitur Premium",
      "5 akun keluarga",
      "Goal bersama"
    ],
    cta: "Pilih Family",
    popular: false
  }
];

export function PricingSection() {
  return (
    <section id="pricing" className="py-20 bg-background" aria-labelledby="pricing-heading">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto text-center mb-14">
          <span className="inline-block mb-4 px-4 py-1 rounded-full bg-gradient-to-r from-blue-400 to-blue-700 text-white text-xs font-semibold shadow-md">
            Harga & Paket
          </span>
          <h2 id="pricing-heading" className="text-3xl md:text-4xl font-extrabold mb-4">Pilih Paket Sesuai Kebutuhanmu</h2>
          <p className="text-lg text-muted-foreground font-light">
            Mulai gratis, upgrade kapan saja. Semua transparan, tanpa biaya tersembunyi.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10" role="list">
          {plans.map((plan, index) => (
            <motion.article
              key={index}
              className={`relative bg-card rounded-3xl p-8 shadow-lg border border-border/30 flex flex-col items-center text-center group transition-all duration-300 hover:shadow-xl ${plan.popular ? 'ring-2 ring-blue-500/60 scale-105 z-10' : ''}`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              role="listitem"
            >
              {plan.popular && (
                <span className="absolute -top-5 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-gradient-to-r from-blue-400 to-blue-700 text-white text-xs font-semibold shadow-md">
                  Paling Populer
                </span>
              )}
              <h3 className="text-xl font-bold mb-2 text-foreground">{plan.name}</h3>
              <div className="flex items-end justify-center gap-2 mb-4">
                <span className="text-3xl font-extrabold text-foreground">{plan.price}</span>
                {plan.period && <span className="text-base text-muted-foreground mb-1">{plan.period}</span>}
              </div>
              <p className="text-base text-muted-foreground mb-6 font-light">{plan.desc}</p>
              <ul className="mb-8 space-y-2 text-left w-full" role="list">
                {plan.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center gap-2 text-muted-foreground text-sm" role="listitem">
                    <Check className="h-4 w-4 text-teal-500 flex-shrink-0" aria-hidden="true" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              <Button
                className={`w-full py-3 text-base font-semibold rounded-full transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 ${plan.popular ? 'bg-gradient-to-r from-blue-400 to-blue-700 hover:from-blue-500 hover:to-blue-800 text-white shadow-lg' : 'bg-muted hover:bg-muted/80 text-foreground border border-border'}`}
                variant={plan.popular ? 'default' : 'outline'}
                asChild
              >
                <a href="#cta" aria-label={`Pilih paket ${plan.name}`}>
                  {plan.cta}
                </a>
              </Button>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}