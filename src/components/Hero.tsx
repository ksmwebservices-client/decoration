"use client";

import { motion } from "framer-motion";
import { MessageCircle, Phone, PackageOpen } from "lucide-react";
import { business, waLink, defaultWaMessage } from "@/data/site";

const petals = Array.from({ length: 10 });

export default function Hero() {
  return (
    <section className="relative overflow-hidden pt-28 pb-20 md:pt-40 md:pb-28 bg-gradient-to-b from-[#fff2e8] via-[#fff8f2] to-white">
      {/* ambient gradient blobs */}
      <div className="pointer-events-none absolute -top-24 -left-24 h-72 w-72 rounded-full bg-rose/20 blur-3xl" />
      <div className="pointer-events-none absolute top-10 -right-20 h-80 w-80 rounded-full bg-amber/20 blur-3xl" />
      <div className="pointer-events-none absolute bottom-0 left-1/3 h-64 w-64 rounded-full bg-leaf/10 blur-3xl" />

      {/* floating petals */}
      {petals.map((_, i) => (
        <motion.span
          key={i}
          className="pointer-events-none absolute text-2xl select-none"
          style={{ left: `${(i * 97) % 100}%`, top: -20 }}
          initial={{ y: -40, opacity: 0, rotate: 0 }}
          animate={{ y: 700, opacity: [0, 1, 1, 0], rotate: 360 }}
          transition={{
            duration: 10 + (i % 5),
            repeat: Infinity,
            delay: i * 1.3,
            ease: "linear",
          }}
        >
          🌸
        </motion.span>
      ))}

      <div className="relative mx-auto max-w-7xl px-4 md:px-8 grid lg:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <span className="section-eyebrow inline-block text-xs font-semibold uppercase text-rose bg-rose/10 px-4 py-1.5 rounded-full">
            Ramanathapuram&apos;s Trusted Decorators
          </span>
          <h1 className="mt-5 font-display text-4xl sm:text-5xl lg:text-6xl font-bold leading-[1.08] text-ink">
            Transform Every Occasion Into A{" "}
            <span className="brand-gradient-text">Grand Celebration</span>
          </h1>
          <p className="mt-5 text-base sm:text-lg text-ink/70 max-w-xl">
            Wedding Decoration • Birthday Decoration • Temple Decoration • Stage
            Decoration • Corporate Events • Outdoor Decoration — crafted with
            fresh flowers, warm lighting and a team that shows up on time.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href={waLink(defaultWaMessage)}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 rounded-full bg-leaf text-white px-6 py-3 font-semibold shadow-lg shadow-leaf/30 hover:brightness-110 transition"
            >
              <MessageCircle size={18} /> WhatsApp Now
            </a>
            <a
              href={`tel:${business.phone}`}
              className="flex items-center gap-2 rounded-full border-2 border-royal text-royal px-6 py-3 font-semibold hover:bg-royal hover:text-white transition"
            >
              <Phone size={18} /> Call Now
            </a>
            <a
              href="#packages"
              className="flex items-center gap-2 rounded-full bg-ink text-white px-6 py-3 font-semibold hover:bg-ink/90 transition"
            >
              <PackageOpen size={18} /> View Packages
            </a>
          </div>

          <div className="mt-8 flex items-center gap-6 text-sm text-ink/60">
            <span>📍 {business.address.line2}</span>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.15 }}
          className="relative"
        >
          <div className="arch-shape relative mx-auto aspect-[4/5] max-w-md overflow-hidden border-[6px] border-white shadow-2xl">
            <img
              src="https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=1000&auto=format&fit=crop"
              alt="Wedding stage decoration by Sathuragiri Decoration"
              className="h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-ink/50 via-transparent to-transparent" />
          </div>
          <div className="absolute -bottom-6 -left-6 bg-white rounded-2xl shadow-xl px-5 py-4 hidden sm:block">
            <p className="font-display text-2xl font-bold text-rose">15+ Yrs</p>
            <p className="text-xs text-ink/60">of decoration excellence</p>
          </div>
          <div className="absolute -top-6 -right-4 bg-white rounded-2xl shadow-xl px-5 py-3 hidden sm:block">
            <p className="text-xs text-ink/50">Since inception</p>
            <p className="font-display text-lg font-bold text-royal">500+ Weddings</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
