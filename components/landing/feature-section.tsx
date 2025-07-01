"use client";

import { motion } from "framer-motion";

const features = [
  {
    icon: (
      <svg width="32" height="32" fill="none" viewBox="0 0 32 32" aria-hidden="true">
        <rect x="6" y="14" width="20" height="12" rx="4" fill="#14b8a6"/>
        <rect x="10" y="10" width="12" height="8" rx="4" fill="#059669"/>
        <circle cx="16" cy="16" r="3" fill="#FACC15"/>
      </svg>
    ),
    title: "Expense Tracking",
    desc: "Catat pengeluaran otomatis, kategori cerdas, dan laporan real-time."
  },
  {
    icon: (
      <svg width="32" height="32" fill="none" viewBox="0 0 32 32" aria-hidden="true">
        <rect x="8" y="8" width="16" height="16" rx="8" fill="#6366f1"/>
        <path d="M16 16v-6" stroke="#fff" strokeWidth="2" strokeLinecap="round"/>
        <circle cx="16" cy="22" r="2" fill="#fff"/>
      </svg>
    ),
    title: "Budgeting Otomatis",
    desc: "Buat anggaran otomatis, pantau sisa budget, dan dapatkan notifikasi."
  },
  {
    icon: (
      <svg width="32" height="32" fill="none" viewBox="0 0 32 32" aria-hidden="true">
        <rect x="4" y="20" width="24" height="6" rx="3" fill="#F59E42"/>
        <rect x="8" y="10" width="16" height="10" rx="5" fill="#14b8a6"/>
        <circle cx="16" cy="15" r="3" fill="#fff"/>
      </svg>
    ),
    title: "Smart Insight",
    desc: "Dapatkan insight keuangan personal, tips hemat, dan prediksi AI."
  },
  {
    icon: (
      <svg width="32" height="32" fill="none" viewBox="0 0 32 32" aria-hidden="true">
        <rect x="6" y="6" width="20" height="20" rx="10" fill="#059669"/>
        <path d="M16 10v8l4 2" stroke="#fff" strokeWidth="2" strokeLinecap="round"/>
      </svg>
    ),
    title: "Notifikasi Cerdas",
    desc: "Ingatkan tagihan, deteksi pengeluaran anomali, dan goal savings."
  }
];

export function FeatureSection() {
  return (
    <section id="features" className="py-20 bg-background" aria-labelledby="features-heading">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto text-center mb-14">
          <span className="inline-block mb-4 px-4 py-1 rounded-full bg-gradient-to-r from-blue-400 to-blue-700 text-white text-xs font-semibold shadow-md">
            Fitur Unggulan
          </span>
          <h2 id="features-heading" className="text-3xl md:text-4xl font-extrabold mb-4">Semua Fitur, Satu Aplikasi</h2>
          <p className="text-lg text-muted-foreground font-light">
            Seimbang.in hadir dengan fitur lengkap untuk mengelola keuanganmu secara otomatis dan cerdas.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10" role="list">
          {features.map((feature, index) => (
            <motion.article
              key={index}
              className="bg-card rounded-3xl p-8 shadow-lg border border-border/30 flex flex-col items-center text-center group hover:shadow-xl transition-shadow"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              role="listitem"
            >
              <div className="mb-4" aria-hidden="true">{feature.icon}</div>
              <h3 className="text-lg font-bold mb-2 text-foreground">{feature.title}</h3>
              <p className="text-muted-foreground text-sm font-light">{feature.desc}</p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}