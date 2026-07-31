"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import { gallery, galleryCategories } from "@/data/site";
import { SectionHeading } from "./Services";

export default function Gallery() {
  const [active, setActive] = useState("All");
  const [lightbox, setLightbox] = useState<string | null>(null);

  const filtered =
    active === "All" ? gallery : gallery.filter((g) => g.category === active);

  return (
    <section id="gallery" className="py-20 md:py-28 bg-white">
      <div className="mx-auto max-w-7xl px-4 md:px-8">
        <SectionHeading
          eyebrow="Our Work"
          title="Gallery"
          subtitle="A glimpse of stages, temples and celebrations we've decorated."
        />

        <div className="mt-8 flex flex-wrap gap-2 justify-center">
          {galleryCategories.map((c) => (
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

        <div className="mt-10 columns-2 sm:columns-3 lg:columns-4 gap-4 [column-fill:_balance]">
          {filtered.map((g, i) => (
            <motion.button
              key={g.id}
              onClick={() => setLightbox(g.image)}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: (i % 8) * 0.05 }}
              className="mb-4 block w-full break-inside-avoid rounded-xl overflow-hidden group relative"
            >
              <img
                src={g.image}
                alt={`${g.category} decoration by Sathuragiri Decoration`}
                loading="lazy"
                className="w-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-ink/0 group-hover:bg-ink/30 transition-colors flex items-end p-3 opacity-0 group-hover:opacity-100">
                <span className="text-white text-xs font-semibold">{g.category}</span>
              </div>
            </motion.button>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {lightbox && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setLightbox(null)}
            className="fixed inset-0 z-[100] bg-ink/90 flex items-center justify-center p-6"
          >
            <button
              aria-label="Close"
              className="absolute top-6 right-6 text-white"
              onClick={() => setLightbox(null)}
            >
              <X size={28} />
            </button>
            <motion.img
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              src={lightbox}
              alt="Gallery preview"
              className="max-h-[85vh] max-w-full rounded-lg shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
