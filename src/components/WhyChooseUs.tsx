"use client";

import { motion } from "framer-motion";
import {
  Sparkles,
  Wallet,
  Headphones,
  Users,
  Flower2,
  Lightbulb,
  Palette,
  Clock,
} from "lucide-react";
import { SectionHeading } from "./Services";

const points = [
  { icon: Sparkles, title: "Premium Designs", desc: "Contemporary, photo-ready decor for every occasion." },
  { icon: Wallet, title: "Affordable Packages", desc: "Silver to Royal — plans for every budget." },
  { icon: Headphones, title: "24×7 Support", desc: "We're reachable on call and WhatsApp, any time." },
  { icon: Users, title: "Professional Team", desc: "Experienced decorators who plan every detail." },
  { icon: Flower2, title: "Quality Flowers", desc: "Fresh flowers sourced for lasting fragrance and colour." },
  { icon: Lightbulb, title: "Modern Lighting", desc: "LED and ambient lighting that elevates every stage." },
  { icon: Palette, title: "Creative Themes", desc: "50+ themes, or a fully custom look built with you." },
  { icon: Clock, title: "On-Time Delivery", desc: "Set up well before your muhurtham or event time." },
];

export default function WhyChooseUs() {
  return (
    <section className="py-20 md:py-28 bg-gradient-to-b from-[#fdf3f7] to-white">
      <div className="mx-auto max-w-7xl px-4 md:px-8">
        <SectionHeading
          eyebrow="Why Sathuragiri"
          title="Why Choose Us"
          subtitle="Fifteen years of decorating weddings, temples and celebrations across Ramanathapuram district."
        />
        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {points.map((p, i) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: (i % 4) * 0.08 }}
              className="rounded-2xl bg-white p-6 border border-ink/10 hover:border-rose/40 hover:shadow-lg transition-all"
            >
              <div className="h-11 w-11 rounded-xl bg-gradient-to-br from-rose to-amber flex items-center justify-center text-white">
                <p.icon size={20} />
              </div>
              <h3 className="mt-4 font-semibold text-ink">{p.title}</h3>
              <p className="mt-1.5 text-sm text-ink/60">{p.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
