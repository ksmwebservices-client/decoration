"use client";

import { motion } from "framer-motion";
import { Check, MessageCircle, FileText } from "lucide-react";
import { packages, waLink } from "@/data/site";
import { SectionHeading } from "./Services";

export default function Packages() {
  return (
    <section id="packages" className="py-20 md:py-28 bg-ink relative overflow-hidden">
      <div className="pointer-events-none absolute -top-32 left-1/4 h-96 w-96 rounded-full bg-rose/20 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-32 right-1/4 h-96 w-96 rounded-full bg-royal/20 blur-3xl" />
      <div className="relative mx-auto max-w-7xl px-4 md:px-8">
        <SectionHeading
          eyebrow="Simple Pricing"
          title="Decoration Packages"
          subtitle="Every package includes flowers, lighting, stage, entrance and guest seating decor — scaled to your celebration."
          light
        />

        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {packages.map((p, i) => (
            <motion.div
              key={p.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: i * 0.08 }}
              className={`relative rounded-2xl p-6 flex flex-col ${
                p.highlight
                  ? "bg-white text-ink shadow-2xl scale-[1.03] border-2 border-gold"
                  : "bg-white/5 text-white border border-white/15"
              }`}
            >
              {p.highlight && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-gold text-ink text-[11px] font-bold px-3 py-1 rounded-full">
                  Most Popular
                </span>
              )}
              <h3 className="font-display text-xl font-bold">{p.name}</h3>
              <p className={`mt-2 text-3xl font-bold ${p.highlight ? "text-rose" : "text-gold"}`}>
                {p.price}
              </p>
              <ul className="mt-5 space-y-2.5 flex-1">
                {p.features.map((f) => (
                  <li key={f} className="flex items-start gap-2 text-sm">
                    <Check
                      size={16}
                      className={`mt-0.5 shrink-0 ${p.highlight ? "text-leaf" : "text-leaf"}`}
                    />
                    <span className={p.highlight ? "text-ink/75" : "text-white/75"}>{f}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-6 flex flex-col gap-2">
                <a
                  href={waLink(
                    `Hello Sathuragiri Decoration,\nI'm interested in the ${p.name} package (${p.price}).\nEvent:\nDate:\nLocation:`
                  )}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-1.5 rounded-full bg-leaf text-white text-sm font-semibold py-2.5 hover:brightness-110 transition"
                >
                  <MessageCircle size={15} /> Book on WhatsApp
                </a>
                <a
                  href="#contact"
                  className={`flex items-center justify-center gap-1.5 rounded-full text-sm font-semibold py-2.5 border transition ${
                    p.highlight
                      ? "border-ink/20 text-ink hover:border-royal hover:text-royal"
                      : "border-white/25 text-white hover:border-white"
                  }`}
                >
                  <FileText size={15} /> Enquiry
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
