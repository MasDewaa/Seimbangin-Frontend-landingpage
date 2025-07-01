"use client";

import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "Apakah data saya aman di Seimbang.in?",
    answer: "Sangat aman! Data terenkripsi, privasi terjaga, dan tidak dibagikan ke pihak ketiga."
  },
  {
    question: "Apakah benar gratis selamanya?",
    answer: "Ya, fitur utama gratis selamanya. Ada paket premium untuk fitur lanjutan."
  },
  {
    question: "Bagaimana cara budgeting otomatis?",
    answer: "Cukup aktifkan budgeting, Seimbang.in akan mengelompokkan transaksi dan memberi saran anggaran."
  },
  {
    question: "Bisa sinkronisasi dengan semua bank?",
    answer: "Bisa! Kami dukung banyak bank besar di Indonesia dan akan terus bertambah."
  },
  {
    question: "Apakah ada dark mode?",
    answer: "Tentu, dark mode otomatis mengikuti sistem atau bisa diatur manual."
  }
];

export function FaqSection() {
  return (
    <section id="faq" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto text-center mb-14">
          <span className="inline-block mb-4 px-4 py-1 rounded-full bg-gradient-to-r from-blue-400 to-blue-700 text-white text-xs font-semibold shadow-md">
            FAQ
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold mb-4">Pertanyaan yang Sering Ditanyakan</h2>
          <p className="text-lg text-muted-foreground font-light">
            Masih ragu? Temukan jawabannya di bawah ini.
          </p>
        </div>
        <motion.div
          className="max-w-2xl mx-auto bg-card rounded-2xl shadow border border-border/20 p-6 md:p-10"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-left text-base font-semibold hover:text-blue-500 transition-colors">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground text-sm font-light">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  );
}