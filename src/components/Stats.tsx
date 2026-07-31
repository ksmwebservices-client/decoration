"use client";

import CountUp from "react-countup";
import { motion } from "framer-motion";
import { stats } from "@/data/site";

export default function Stats() {
  return (
    <section className="relative py-10 md:py-14 bg-ink">
      <div className="mx-auto max-w-7xl px-4 md:px-8 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
        {stats.map((s, i) => (
          <motion.div
            key={s.label}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.08 }}
          >
            <p className="font-display text-3xl md:text-4xl font-bold brand-gradient-text">
              <CountUp end={s.value} duration={2.2} enableScrollSpy scrollSpyOnce />
              {s.suffix}
            </p>
            <p className="mt-1 text-xs md:text-sm text-white/70">{s.label}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
