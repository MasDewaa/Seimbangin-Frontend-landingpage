"use client";

import { motion } from "framer-motion";

const values = [
  {
    icon: (
      <svg width="32" height="32" fill="none" viewBox="0 0 32 32" aria-hidden="true">
        <circle cx="16" cy="16" r="16" fill="#14b8a6"/>
        <path d="M10 16l4 4 8-8" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    title: "Aman & Terpercaya",
    desc: "Data keuanganmu terenkripsi dan privasi terjaga."
  },
  {
    icon: (
      <svg width="32" height="32" fill="none" viewBox="0 0 32 32" aria-hidden="true">
        <circle cx="16" cy="16" r="16" fill="#059669"/>
        <path d="M16 10v8l6 3" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    title: "Mudah & Cepat",
    desc: "UI intuitif, semua fitur bisa diakses dalam 1-2 klik."
  },
  {
    icon: (
      <svg width="32" height="32" fill="none" viewBox="0 0 32 32" aria-hidden="true">
        <circle cx="16" cy="16" r="16" fill="#FACC15"/>
        <path d="M16 8v8h8" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    title: "Cerdas & Otomatis",
    desc: "Kategori, budgeting, dan insight otomatis dengan AI."
  },
  {
    icon: (
      <svg width="32" height="32" fill="none" viewBox="0 0 32 32" aria-hidden="true">
        <circle cx="16" cy="16" r="16" fill="#6366f1"/>
        <path d="M10 22l6-12 6 12" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    title: "Gratis Selamanya",
    desc: "Nikmati fitur utama tanpa biaya bulanan."
  }
];

export default function WhySection() {
  return (
    <section id="why" className="py-20 bg-background" aria-labelledby="why-heading">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto text-center mb-14">
          <span className="inline-block mb-4 px-4 py-1 rounded-full bg-gradient-to-r from-blue-400 to-blue-700 text-white text-xs font-semibold shadow-md">
            Kenapa Seimbang.in?
          </span>
          <h2 id="why-heading" className="text-3xl md:text-4xl font-extrabold mb-4">Solusi Keuangan Paling Balance</h2>
          <p className="text-lg text-muted-foreground font-light">
            Semua yang kamu butuhkan untuk mengelola keuangan, dalam satu aplikasi.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8" role="list">
          {values.map((value, index) => (
            <motion.article
              key={index}
              className="bg-card rounded-3xl p-8 shadow-lg border border-border/30 flex flex-col items-center text-center group hover:shadow-xl transition-shadow"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              role="listitem"
            >
              <div className="mb-4" aria-hidden="true">{value.icon}</div>
              <h3 className="text-lg font-bold mb-2 text-foreground">{value.title}</h3>
              <p className="text-muted-foreground text-sm font-light">{value.desc}</p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
} 