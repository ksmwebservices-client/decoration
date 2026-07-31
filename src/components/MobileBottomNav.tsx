"use client";

import { Home, Sparkles, Images, PackageOpen, MessageCircle } from "lucide-react";
import { waLink, defaultWaMessage } from "@/data/site";

const items = [
  { label: "Home", href: "#home", icon: Home },
  { label: "Services", href: "#services", icon: Sparkles },
  { label: "Gallery", href: "#gallery", icon: Images },
  { label: "Packages", href: "#packages", icon: PackageOpen },
];

export default function MobileBottomNav() {
  return (
    <nav
      className="md:hidden fixed bottom-0 left-0 right-0 z-50 px-3 pb-3"
      aria-label="Mobile navigation"
    >
      <div className="flex items-center justify-between rounded-2xl bg-white/80 backdrop-blur-xl border border-white/60 shadow-[0_8px_30px_rgba(27,16,50,0.18)] px-2 py-2">
        {items.map(({ label, href, icon: Icon }) => (
          <a
            key={href}
            href={href}
            className="flex flex-col items-center justify-center gap-1 flex-1 py-1.5 text-ink/70 hover:text-rose transition-colors"
          >
            <Icon size={20} />
            <span className="text-[10px] font-medium">{label}</span>
          </a>
        ))}
        <a
          href={waLink(defaultWaMessage)}
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center justify-center gap-1 flex-1 py-1.5 rounded-xl bg-leaf text-white mx-1"
        >
          <MessageCircle size={20} />
          <span className="text-[10px] font-semibold">WhatsApp</span>
        </a>
      </div>
    </nav>
  );
}
