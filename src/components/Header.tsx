"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { Phone, MessageCircle, Menu, X } from "lucide-react";
import { business, navLinks, waLink, defaultWaMessage } from "@/data/site";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/90 backdrop-blur-md shadow-[0_2px_20px_rgba(233,30,99,0.12)]"
          : "bg-white/40 backdrop-blur-sm"
      }`}
    >
      <div className="mx-auto max-w-7xl px-4 md:px-8 flex items-center justify-between h-16 md:h-20">
        <a href="#home" className="flex items-center gap-2 shrink-0">
          <Image
            src="/images/logo.png"
            alt="Sathuragiri Decoration logo"
            width={44}
            height={44}
            className="h-10 w-10 md:h-12 md:w-12 object-contain"
            priority
          />
          <span className="font-display text-lg md:text-xl font-bold text-ink leading-tight">
            Sathuragiri<span className="text-rose"> Decoration</span>
          </span>
        </a>

        <nav className="hidden lg:flex items-center gap-7">
          {navLinks.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm font-medium text-ink/80 hover:text-rose transition-colors"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <div className="hidden md:flex items-center gap-3">
          <a
            href={`tel:${business.phone}`}
            className="flex items-center gap-2 rounded-full border-2 border-royal text-royal px-4 py-2 text-sm font-semibold hover:bg-royal hover:text-white transition-colors"
          >
            <Phone size={16} /> Call Now
          </a>
          <a
            href={waLink(defaultWaMessage)}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 rounded-full bg-leaf text-white px-4 py-2 text-sm font-semibold shadow-md shadow-leaf/30 hover:brightness-110 transition"
          >
            <MessageCircle size={16} /> WhatsApp
          </a>
        </div>

        <button
          aria-label="Toggle menu"
          className="lg:hidden text-ink"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {open && (
        <div className="lg:hidden bg-white border-t border-rose/10 px-4 py-4 flex flex-col gap-3">
          {navLinks.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="text-ink/80 font-medium py-1"
            >
              {l.label}
            </a>
          ))}
        </div>
      )}
    </header>
  );
}
