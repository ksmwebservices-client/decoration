"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Star, ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { testimonials } from "@/data/site";
import { SectionHeading } from "./Services";

export default function Testimonials() {
  const [index, setIndex] = useState(0);
  const t = testimonials[index];

  const next = () => setIndex((i) => (i + 1) % testimonials.length);
  const prev = () => setIndex((i) => (i - 1 + testimonials.length) % testimonials.length);

  return (
    <section id="testimonials" className="py-20 md:py-28 bg-gradient-to-b from-white to-[#fef6ea]">
      <div className="mx-auto max-w-4xl px-4 md:px-8">
        <SectionHeading
          eyebrow="Happy Clients"
          title="What Families Say"
          subtitle="Real words from the weddings, birthdays and festivals we've been part of."
        />

        <div className="mt-12 relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={index}
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -30 }}
              transition={{ duration: 0.35 }}
              className="rounded-2xl bg-white shadow-xl border border-ink/10 p-8 md:p-10 text-center"
            >
              <Quote className="mx-auto text-rose/30" size={36} />
              <p className="mt-4 text-lg text-ink/80 leading-relaxed">{t.quote}</p>
              <div className="mt-5 flex justify-center gap-1">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    size={16}
                    className={i < t.rating ? "fill-gold text-gold" : "text-ink/20"}
                  />
                ))}
              </div>
              <p className="mt-4 font-display font-bold text-ink">{t.name}</p>
              <p className="text-xs text-ink/50">{t.location}</p>
            </motion.div>
          </AnimatePresence>

          <div className="mt-6 flex items-center justify-center gap-4">
            <button
              aria-label="Previous testimonial"
              onClick={prev}
              className="h-10 w-10 rounded-full border border-ink/15 flex items-center justify-center hover:border-rose hover:text-rose transition"
            >
              <ChevronLeft size={18} />
            </button>
            <div className="flex gap-1.5">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  aria-label={`Go to testimonial ${i + 1}`}
                  onClick={() => setIndex(i)}
                  className={`h-2 rounded-full transition-all ${
                    i === index ? "w-6 bg-rose" : "w-2 bg-ink/15"
                  }`}
                />
              ))}
            </div>
            <button
              aria-label="Next testimonial"
              onClick={next}
              className="h-10 w-10 rounded-full border border-ink/15 flex items-center justify-center hover:border-rose hover:text-rose transition"
            >
              <ChevronRight size={18} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
