"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { MessageCircle, ArrowRight } from "lucide-react";
import { services, categories, waLink } from "@/data/site";

export default function Services() {
  const [active, setActive] = useState("All");
  const filtered =
    active === "All" ? services : services.filter((s) => s.category === active);

  return (
    <section id="services" className="py-20 md:py-28 bg-white">
      <div className="mx-auto max-w-7xl px-4 md:px-8">
        <SectionHeading
          eyebrow="What We Do"
          title="Our Services"
          subtitle="From an intimate housewarming to a 1000-guest wedding, every service is delivered with fresh flowers, careful lighting and an on-time crew."
        />

        <div className="mt-8 flex flex-wrap gap-2 justify-center">
          {categories.map((c) => (
            <button
              key={c}
              onClick={() => setActive(c)}
              className={`px-4 py-1.5 rounded-full text-sm font-medium border transition ${
                active === c
                  ? "bg-rose text-white border-rose"
                  : "border-ink/15 text-ink/70 hover:border-rose hover:text-rose"
              }`}
            >
              {c}
            </button>
          ))}
        </div>

        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((s, i) => (
            <motion.div
              key={s.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: (i % 6) * 0.06 }}
              className="group rounded-2xl overflow-hidden bg-white border border-ink/10 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all"
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={s.image}
                  alt={s.title}
                  loading="lazy"
                  className="h-full w-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <span className="absolute top-3 left-3 bg-white/90 backdrop-blur text-xs font-semibold text-rose px-3 py-1 rounded-full">
                  {s.category}
                </span>
              </div>
              <div className="p-5">
                <h3 className="font-display text-lg font-bold text-ink">{s.title}</h3>
                <p className="mt-1.5 text-sm text-ink/60 leading-relaxed">{s.description}</p>
                <p className="mt-3 text-sm font-semibold text-royal">{s.price}</p>
                <div className="mt-4 flex items-center gap-2">
                  <a
                    href={waLink(
                      `Hello Sathuragiri Decoration,\nI'd like to book: ${s.title}\nEvent Date:\nLocation:\nBudget:`
                    )}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center gap-1.5 rounded-full bg-leaf text-white text-xs font-semibold py-2 hover:brightness-110 transition"
                  >
                    <MessageCircle size={14} /> Book Now
                  </a>
                  <a
                    href="#contact"
                    className="flex-1 flex items-center justify-center gap-1.5 rounded-full border border-ink/15 text-ink/70 text-xs font-semibold py-2 hover:border-royal hover:text-royal transition"
                  >
                    Read More <ArrowRight size={13} />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  subtitle,
  light,
}: {
  eyebrow: string;
  title: string;
  subtitle?: string;
  light?: boolean;
}) {
  return (
    <div className="text-center max-w-2xl mx-auto">
      <span
        className={`section-eyebrow text-xs font-semibold uppercase ${
          light ? "text-gold" : "text-rose"
        }`}
      >
        {eyebrow}
      </span>
      <h2
        className={`mt-3 font-display text-3xl md:text-4xl font-bold ${
          light ? "text-white" : "text-ink"
        }`}
      >
        {title}
      </h2>
      {subtitle && (
        <p className={`mt-3 text-sm md:text-base ${light ? "text-white/70" : "text-ink/60"}`}>
          {subtitle}
        </p>
      )}
    </div>
  );
}
