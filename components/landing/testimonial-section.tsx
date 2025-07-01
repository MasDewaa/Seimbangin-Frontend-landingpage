"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Jessica T.",
    role: "Small Business Owner",
    avatar: "https://randomuser.me/api/portraits/women/44.jpg",
    quote: "Seimbang.in benar-benar mengubah cara saya mengelola keuangan. Fitur otomatisnya sangat membantu!",
    rating: 5
  },
  {
    name: "Michael L.",
    role: "Software Engineer",
    avatar: "https://randomuser.me/api/portraits/men/32.jpg",
    quote: "UI-nya simpel, budgeting jadi nggak ribet. Insight AI-nya juga keren!",
    rating: 5
  },
  {
    name: "Sophia K.",
    role: "Marketing Manager",
    avatar: "https://randomuser.me/api/portraits/women/68.jpg",
    quote: "Aplikasi keuangan paling balance. Semua fitur penting ada, dan gratis!",
    rating: 5
  },
  {
    name: "Raj P.",
    role: "Healthcare Professional",
    avatar: "https://randomuser.me/api/portraits/men/76.jpg",
    quote: "Progress menabung jadi lebih terpantau. Suka banget sama goal savings-nya!",
    rating: 4
  }
];

export function TestimonialSection() {
  return (
    <section id="testimonials" className="py-20 bg-muted/30" aria-labelledby="testimonials-heading">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto text-center mb-14">
          <span className="inline-block mb-4 px-4 py-1 rounded-full bg-gradient-to-r from-blue-400 to-blue-700 text-white text-xs font-semibold shadow-md">
            Testimoni Pengguna
          </span>
          <h2 id="testimonials-heading" className="text-3xl md:text-4xl font-extrabold mb-4">Apa Kata Mereka?</h2>
          <p className="text-lg text-muted-foreground font-light">
            Ribuan pengguna sudah merasakan manfaat Seimbang.in. Giliran kamu!
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10" role="list">
          {testimonials.map((testimonial, index) => (
            <motion.article
              key={index}
              className="bg-card rounded-3xl p-7 shadow-lg border border-border/30 flex flex-col items-center text-center group transition-all duration-300 hover:shadow-2xl hover:border-teal-500/40"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              role="listitem"
            >
              <div className="mb-3">
                <Image 
                  src={testimonial.avatar} 
                  alt={`Foto profil ${testimonial.name}`} 
                  width={48} 
                  height={48} 
                  className="rounded-full border-2 border-teal-500 shadow"
                  loading="lazy"
                />
              </div>
              <div className="flex items-center justify-center gap-1 mb-2" role="img" aria-label={`Rating ${testimonial.rating} dari 5 bintang`}>
                {Array.from({ length: 5 }).map((_, idx) => (
                  <Star 
                    key={idx} 
                    className={`h-4 w-4 ${idx < testimonial.rating ? 'text-amber-400 fill-amber-400' : 'text-muted-foreground'}`}
                    aria-hidden="true"
                  />
                ))}
              </div>
              <blockquote className="italic text-muted-foreground text-sm mb-3">
                &ldquo;{testimonial.quote}&rdquo;
              </blockquote>
              <cite className="not-italic">
                <div className="font-semibold text-foreground text-sm">{testimonial.name}</div>
                <div className="text-xs text-muted-foreground">{testimonial.role}</div>
              </cite>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}