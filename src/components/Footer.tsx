import Image from "next/image";
import { Phone, MessageCircle, Mail, MapPin } from "lucide-react";
import { business, navLinks, waLink, defaultWaMessage } from "@/data/site";

function InstagramIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <rect x="2" y="2" width="20" height="20" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
    </svg>
  );
}

function FacebookIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
    </svg>
  );
}

export default function Footer() {
  return (
    <footer className="bg-ink text-white/80 pb-28 md:pb-10 pt-14">
      <div className="mx-auto max-w-7xl px-4 md:px-8 grid sm:grid-cols-2 lg:grid-cols-4 gap-10">
        <div>
          <div className="flex items-center gap-2">
            <Image
              src="/images/logo.png"
              alt="Sathuragiri Decoration logo"
              width={40}
              height={40}
              className="h-9 w-9 object-contain"
            />
            <span className="font-display text-lg font-bold text-white">
              Sathuragiri Decoration
            </span>
          </div>
          <p className="mt-4 text-sm leading-relaxed">
            We Decorate. You Celebrate. Memories Last Forever.
          </p>
          <div className="mt-5 flex gap-3">
            <a
              href="#"
              aria-label="Instagram"
              className="h-9 w-9 rounded-full bg-white/10 flex items-center justify-center hover:bg-rose transition"
            >
              <InstagramIcon />
            </a>
            <a
              href="#"
              aria-label="Facebook"
              className="h-9 w-9 rounded-full bg-white/10 flex items-center justify-center hover:bg-royal transition"
            >
              <FacebookIcon />
            </a>
          </div>
        </div>

        <div>
          <h4 className="text-white font-semibold mb-4">Quick Links</h4>
          <ul className="space-y-2 text-sm">
            {navLinks.map((l) => (
              <li key={l.href}>
                <a href={l.href} className="hover:text-rose transition">
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="text-white font-semibold mb-4">Popular Services</h4>
          <ul className="space-y-2 text-sm">
            <li>Wedding Stage Decoration</li>
            <li>Temple Decoration</li>
            <li>Birthday Decoration</li>
            <li>Balloon Decoration</li>
            <li>Arabian Tent Rental</li>
          </ul>
        </div>

        <div>
          <h4 className="text-white font-semibold mb-4">Contact</h4>
          <ul className="space-y-3 text-sm">
            <li className="flex items-start gap-2">
              <MapPin size={16} className="mt-0.5 shrink-0 text-rose" />
              <span>{business.address.full}</span>
            </li>
            <li className="flex items-center gap-2">
              <Phone size={16} className="text-rose" />
              <a href={`tel:${business.phone}`}>{business.phoneDisplay}</a>
            </li>
            <li className="flex items-center gap-2">
              <MessageCircle size={16} className="text-rose" />
              <a href={waLink(defaultWaMessage)} target="_blank" rel="noopener noreferrer">
                WhatsApp Us
              </a>
            </li>
            <li className="flex items-center gap-2">
              <Mail size={16} className="text-rose" />
              <a href={`mailto:${business.email}`}>{business.email}</a>
            </li>
          </ul>
        </div>
      </div>

      <div className="mt-12 border-t border-white/10 pt-6 text-center text-xs text-white/50 px-4">
        © {new Date().getFullYear()} {business.name}. All rights reserved.
      </div>
    </footer>
  );
}
