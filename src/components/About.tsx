"use client";

import { motion } from "framer-motion";
import { SectionHeading } from "./Services";

const timeline = [
  { year: "2010", text: "Started as a small flower & balloon decoration team in Rajasingamangalam." },
  { year: "2015", text: "Expanded into wedding stage and mandap decoration across Ramanathapuram district." },
  { year: "2019", text: "Added tent, LED wall and lighting rental for large outdoor events." },
  { year: "2025", text: "Trusted by 1000+ families for weddings, temple festivals and celebrations." },
];

export default function About() {
  return (
    <section id="about" className="py-20 md:py-28 bg-gradient-to-b from-[#fdf3f7] to-white">
      <div className="mx-auto max-w-7xl px-4 md:px-8 grid lg:grid-cols-2 gap-12 items-start">
        <div>
          <SectionHeading eyebrow="Our Story" title="About Sathuragiri Decoration" />
          <p className="mt-5 text-sm md:text-base text-ink/70 leading-relaxed">
            Sathuragiri Decoration is a Ramanathapuram-based decoration studio serving
            weddings, temple festivals, birthdays and corporate events across Tamil
            Nadu. Our mission is simple — turn every occasion into a grand
            celebration, with flowers, lighting and design that families remember for
            years.
          </p>
          <p className="mt-4 text-sm md:text-base text-ink/70 leading-relaxed">
            Our vision is to be the most trusted decoration partner in the region,
            known for punctuality, fresh flowers and honest pricing — from a simple
            balloon setup to a full Arabian-tent wedding.
          </p>

          <div className="mt-8 grid grid-cols-2 gap-4">
            {[
              { k: "15+", v: "Years of Experience" },
              { k: "50+", v: "Team & Vendor Network" },
            ].map((s) => (
              <div key={s.v} className="rounded-xl bg-white border border-ink/10 p-4">
                <p className="font-display text-2xl font-bold text-rose">{s.k}</p>
                <p className="text-xs text-ink/60 mt-1">{s.v}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="relative pl-6 border-l-2 border-rose/20">
          {timeline.map((t, i) => (
            <motion.div
              key={t.year}
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="relative pb-10 last:pb-0"
            >
              <span className="absolute -left-[31px] top-0 h-4 w-4 rounded-full bg-rose ring-4 ring-rose/15" />
              <p className="font-display text-lg font-bold text-royal">{t.year}</p>
              <p className="mt-1 text-sm text-ink/65">{t.text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
