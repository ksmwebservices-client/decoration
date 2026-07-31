import type { Metadata, Viewport } from "next";
import "./globals.css";
import Header from "@/components/Header";
import MobileBottomNav from "@/components/MobileBottomNav";
import FloatingButtons from "@/components/FloatingButtons";
import Footer from "@/components/Footer";
import { Toaster } from "react-hot-toast";
import { business } from "@/data/site";

const siteUrl = "https://sathuragiridecoration.in";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: `${business.name} | Wedding & Event Decoration in Ramanathapuram`,
    template: `%s | ${business.name}`,
  },
  description:
    "Sathuragiri Decoration offers premium wedding, temple, birthday, corporate and outdoor decoration services in Rajasingamangalam, Ramanathapuram, Tamil Nadu. Book now on WhatsApp.",
  keywords: [
    "wedding decoration Ramanathapuram",
    "stage decoration Tamil Nadu",
    "temple decoration",
    "birthday decoration Ramanathapuram",
    "balloon decoration",
    "Sathuragiri Decoration",
    "event decorators Rajasingamangalam",
  ],
  openGraph: {
    title: `${business.name} | We Decorate. You Celebrate. Memories Last Forever.`,
    description:
      "Premium wedding, temple, birthday and corporate event decoration in Ramanathapuram, Tamil Nadu.",
    url: siteUrl,
    siteName: business.name,
    images: ["/images/logo.png"],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: business.name,
    description: "Premium wedding & event decoration in Ramanathapuram, Tamil Nadu.",
    images: ["/images/logo.png"],
  },
  icons: {
    icon: "/images/logo.png",
  },
  alternates: {
    canonical: siteUrl,
  },
  manifest: "/manifest.json",
};

export const viewport: Viewport = {
  themeColor: "#E91E63",
  width: "device-width",
  initialScale: 1,
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "EventPlanner",
  name: business.name,
  image: `${siteUrl}/images/logo.png`,
  telephone: business.phoneDisplay,
  email: business.email,
  address: {
    "@type": "PostalAddress",
    streetAddress: `${business.address.line1}, ${business.address.line2}`,
    addressLocality: "Rajasingamangalam",
    addressRegion: "Tamil Nadu",
    postalCode: "623525",
    addressCountry: "IN",
  },
  areaServed: "Tamil Nadu",
  priceRange: "₹₹",
  openingHours: "Mo-Su 00:00-23:59",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@500;600;700;800;900&family=Poppins:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="antialiased">
        <Toaster position="top-center" />
        <Header />
        <main id="home">{children}</main>
        <Footer />
        <FloatingButtons />
        <MobileBottomNav />
      </body>
    </html>
  );
}
