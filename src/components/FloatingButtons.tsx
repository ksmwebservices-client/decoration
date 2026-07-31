"use client";

import { useEffect, useState } from "react";
import { Phone, MessageCircle, ArrowUp } from "lucide-react";
import { business, waLink, defaultWaMessage } from "@/data/site";

export default function FloatingButtons() {
  const [showTop, setShowTop] = useState(false);

  useEffect(() => {
    const onScroll = () => setShowTop(window.scrollY > 500);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="fixed right-4 md:right-6 bottom-24 md:bottom-8 z-40 flex flex-col items-end gap-3">
      {showTop && (
        <button
          aria-label="Scroll to top"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="h-10 w-10 rounded-full bg-white text-ink shadow-lg flex items-center justify-center hover:-translate-y-0.5 transition"
        >
          <ArrowUp size={18} />
        </button>
      )}
      <a
        href={`tel:${business.phone}`}
        aria-label="Call now"
        className="h-12 w-12 rounded-full bg-royal text-white shadow-lg flex items-center justify-center hover:-translate-y-0.5 transition"
      >
        <Phone size={20} />
      </a>
      <a
        href={waLink(defaultWaMessage)}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
        className="h-14 w-14 rounded-full bg-leaf text-white shadow-xl shadow-leaf/40 flex items-center justify-center animate-pulse hover:animate-none hover:-translate-y-0.5 transition"
      >
        <MessageCircle size={26} />
      </a>
    </div>
  );
}
