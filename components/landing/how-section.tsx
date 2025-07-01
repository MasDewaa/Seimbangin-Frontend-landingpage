"use client";

import { motion } from "framer-motion";

const steps = [
  {
    icon: (
      <svg width="40" height="40" fill="none" viewBox="0 0 40 40"><circle cx="20" cy="20" r="20" fill="#14b8a6"/><path d="M13 20l5 5 9-9" stroke="#fff" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
    ),
    title: "Daftar & Koneksi Akun",
    desc: "Registrasi mudah, hubungkan rekening/bank, siap kelola keuangan."
  },
  {
    icon: (
      <svg width="40" height="40" fill="none" viewBox="0 0 40 40"><circle cx="20" cy="20" r="20" fill="#FACC15"/><path d="M20 12v10l6 3" stroke="#fff" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
    ),
    title: "Catat & Pantau Otomatis",
    desc: "Transaksi tercatat otomatis, budgeting & insight langsung aktif."
  },
  {
    icon: (
      <svg width="40" height="40" fill="none" viewBox="0 0 40 40"><circle cx="20" cy="20" r="20" fill="#6366f1"/><path d="M13 27l7-14 7 14" stroke="#fff" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
    ),
    title: "Capai Tujuan Finansial",
    desc: "Lihat progress, dapatkan tips, dan raih target keuanganmu!"
  }
];

export default function HowSection() {
  return (
    <section id="how" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto text-center mb-14">
          <span className="inline-block mb-4 px-4 py-1 rounded-full bg-gradient-to-r from-blue-400 to-blue-700 text-white text-xs font-semibold shadow-md">
            Cara Kerja
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold mb-4">Kelola Keuangan Mudah, 3 Langkah Saja</h2>
          <p className="text-lg text-muted-foreground font-light">
            Proses simpel, hasil maksimal. Semua otomatis, kamu tinggal pantau.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {steps.map((s, i) => (
            <motion.div
              key={i}
              className="bg-card rounded-3xl p-8 shadow-lg border border-border/30 flex flex-col items-center text-center group"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <div className="mb-4">{s.icon}</div>
              <h3 className="text-lg font-bold mb-2 text-foreground">{s.title}</h3>
              <p className="text-muted-foreground text-sm font-light">{s.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
} 