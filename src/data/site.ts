export const business = {
  name: "Sathuragiri Decoration",
  shortName: "RS Sathuragiri",
  tagline: "We Decorate. You Celebrate. Memories Last Forever.",
  phone: "+917373999916",
  phoneDisplay: "+91 73739 99916",
  whatsapp: "917373999916",
  email: "info@sathuragiridecoration.in",
  address: {
    line1: "Near SMA Mahal, D.D Main Road",
    line2: "R.S. Mangalam, Rajasingamangalam",
    line3: "Ramanathapuram, Tamil Nadu – 623525",
    full: "Near SMA Mahal, D.D Main Road, R.S. Mangalam, Rajasingamangalam, Ramanathapuram, Tamil Nadu – 623525",
  },
  hours: "Open 24 Hours",
  mapsEmbed:
    "https://www.google.com/maps?q=Rajasingamangalam,Ramanathapuram,Tamil+Nadu+623525&output=embed",
  mapsLink: "https://maps.google.com/?q=Rajasingamangalam,Ramanathapuram,Tamil+Nadu+623525",
};

export function waLink(message: string) {
  return `https://wa.me/${business.whatsapp}?text=${encodeURIComponent(message)}`;
}

export const defaultWaMessage = `Hello Sathuragiri Decoration,\nI need decoration for:\nEvent:\nDate:\nLocation:\nBudget:\nPlease send packages.`;

export const stats = [
  { value: 500, suffix: "+", label: "Weddings Decorated" },
  { value: 1000, suffix: "+", label: "Happy Clients" },
  { value: 15, suffix: "+", label: "Years Experience" },
  { value: 50, suffix: "+", label: "Decoration Themes" },
];

export type Service = {
  id: string;
  title: string;
  category: string;
  description: string;
  price: string;
  image: string;
};

export const services: Service[] = [
  {
    id: "wedding-stage",
    title: "Wedding Stage Decoration",
    category: "Wedding",
    description:
      "Grand mandap and stage setups with premium florals, drapery and lighting for the big day.",
    price: "₹20,000 – ₹25,000",
    image:
      "https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=1200&auto=format&fit=crop",
  },
  {
    id: "reception",
    title: "Reception Decoration",
    category: "Wedding",
    description:
      "Elegant reception stages and entrances designed to make every arrival memorable.",
    price: "₹15,000 – ₹25,000",
    image:
      "https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?q=80&w=1200&auto=format&fit=crop",
  },
  {
    id: "temple",
    title: "Temple Decoration",
    category: "Temple",
    description:
      "Traditional flower and lighting decor for temple festivals and religious functions.",
    price: "₹20,000 – ₹25,000",
    image:
      "https://images.unsplash.com/photo-1604608672516-f1b9be93b400?q=80&w=1200&auto=format&fit=crop",
  },
  {
    id: "birthday",
    title: "Birthday Decoration",
    category: "Birthday",
    description:
      "Vibrant, themed birthday setups with balloons, backdrops and personalised touches.",
    price: "₹10,000 – ₹15,000",
    image:
      "https://images.unsplash.com/photo-1530103862676-de8c9debad1d?q=80&w=1200&auto=format&fit=crop",
  },
  {
    id: "balloon",
    title: "Balloon Decoration",
    category: "Birthday",
    description:
      "Creative balloon arches, walls and centrepieces for festivals and functions of any size.",
    price: "₹3,500 – ₹7,000",
    image:
      "https://images.unsplash.com/photo-1527529482837-4698179dc6ce?q=80&w=1200&auto=format&fit=crop",
  },
  {
    id: "flower",
    title: "Flower Decoration",
    category: "Flower",
    description:
      "Fresh floral backdrops, arches and stage decor for weddings, concerts and conferences.",
    price: "₹3,000 onwards",
    image:
      "https://images.unsplash.com/photo-1509357005913-9f2a6a0cd6c7?q=80&w=1200&auto=format&fit=crop",
  },
  {
    id: "housewarming",
    title: "House Warming Decoration",
    category: "Housewarming",
    description:
      "Warm, auspicious decor for Gruhapravesam with traditional motifs and fresh flowers.",
    price: "₹10,000 onwards",
    image:
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1200&auto=format&fit=crop",
  },
  {
    id: "anniversary",
    title: "Anniversary Decoration",
    category: "Wedding",
    description:
      "Romantic themed setups that celebrate your love story, from classic to contemporary.",
    price: "₹15,000 – ₹20,000",
    image:
      "https://images.unsplash.com/photo-1522673607200-164d1b6ce486?q=80&w=1200&auto=format&fit=crop",
  },
  {
    id: "corporate",
    title: "Corporate & Shop Opening",
    category: "Corporate",
    description:
      "Professional stage, backdrop and ribbon-cutting decor for launches and corporate events.",
    price: "₹15,000 – ₹20,000",
    image:
      "https://images.unsplash.com/photo-1511578314322-379afb476865?q=80&w=1200&auto=format&fit=crop",
  },
  {
    id: "outdoor",
    title: "Outdoor Decoration",
    category: "Outdoor",
    description:
      "Elegant lighting and floral arrangements that transform gardens and open grounds.",
    price: "₹20,000 – ₹25,000",
    image:
      "https://images.unsplash.com/photo-1478146059778-26028b07395a?q=80&w=1200&auto=format&fit=crop",
  },
  {
    id: "tent",
    title: "Arabian Tent Rental",
    category: "Outdoor",
    description:
      "Luxury Arabian-style tents for weddings, exhibitions and private gatherings.",
    price: "Ask for price",
    image:
      "https://images.unsplash.com/photo-1519167758481-83f550bb49b3?q=80&w=1200&auto=format&fit=crop",
  },
  {
    id: "religious",
    title: "Religious Function Decoration",
    category: "Temple",
    description:
      "Respectful, beautiful decor for poojas, festivals and religious ceremonies.",
    price: "₹20,000 – ₹25,000",
    image:
      "https://images.unsplash.com/photo-1604608678197-bcb2b93cf1e2?q=80&w=1200&auto=format&fit=crop",
  },
];

export const categories = [
  "All",
  "Wedding",
  "Temple",
  "Birthday",
  "Flower",
  "Housewarming",
  "Corporate",
  "Outdoor",
];

export type Pkg = {
  name: string;
  price: string;
  highlight?: boolean;
  features: string[];
};

export const packages: Pkg[] = [
  {
    name: "Silver",
    price: "₹10,000",
    features: ["Basic stage decor", "Standard flowers", "Entrance decoration", "Guest seating"],
  },
  {
    name: "Gold",
    price: "₹25,000",
    highlight: true,
    features: [
      "Premium stage & mandap",
      "Fresh flowers & lighting",
      "Photography area backdrop",
      "LED accent lighting",
      "Guest seating decor",
    ],
  },
  {
    name: "Diamond",
    price: "₹50,000",
    features: [
      "Luxury mandap decoration",
      "Premium flowers & drapery",
      "Full stage & entrance lighting",
      "LED wall + generator backup",
      "Dedicated photography area",
    ],
  },
  {
    name: "Royal",
    price: "₹1,00,000+",
    features: [
      "Fully customised royal theme",
      "Imported flowers & luxury decor",
      "Complete lighting design",
      "LED wall, sound & generator",
      "VIP seating & premium finishes",
      "Dedicated event coordinator",
    ],
  },
];

export const galleryCategories = [
  "All",
  "Wedding",
  "Birthday",
  "Temple",
  "Outdoor",
  "Corporate",
  "Flower",
];

export const gallery = [
  { id: 1, category: "Wedding", image: "https://images.unsplash.com/photo-1519225421980-715cb0215aed?q=80&w=900&auto=format&fit=crop" },
  { id: 2, category: "Flower", image: "https://images.unsplash.com/photo-1478146059778-26028b07395a?q=80&w=900&auto=format&fit=crop" },
  { id: 3, category: "Birthday", image: "https://images.unsplash.com/photo-1530103862676-de8c9debad1d?q=80&w=900&auto=format&fit=crop" },
  { id: 4, category: "Temple", image: "https://images.unsplash.com/photo-1604608672516-f1b9be93b400?q=80&w=900&auto=format&fit=crop" },
  { id: 5, category: "Wedding", image: "https://images.unsplash.com/photo-1522673607200-164d1b6ce486?q=80&w=900&auto=format&fit=crop" },
  { id: 6, category: "Outdoor", image: "https://images.unsplash.com/photo-1519167758481-83f550bb49b3?q=80&w=900&auto=format&fit=crop" },
  { id: 7, category: "Corporate", image: "https://images.unsplash.com/photo-1511578314322-379afb476865?q=80&w=900&auto=format&fit=crop" },
  { id: 8, category: "Wedding", image: "https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?q=80&w=900&auto=format&fit=crop" },
  { id: 9, category: "Flower", image: "https://images.unsplash.com/photo-1509357005913-9f2a6a0cd6c7?q=80&w=900&auto=format&fit=crop" },
];

export const testimonials = [
  {
    name: "Karthik Raja",
    location: "Ramanathapuram",
    rating: 5,
    quote:
      "Our wedding stage looked exactly like the pictures we dreamed of. The team worked all night to get it perfect before the muhurtham.",
  },
  {
    name: "Meena Priya",
    location: "Rajasingamangalam",
    rating: 5,
    quote:
      "Booked them for my daughter's birthday. Balloon decor and backdrop were so colourful, all the guests were asking who did it.",
  },
  {
    name: "Selva Kumar",
    location: "Paramakudi",
    rating: 5,
    quote:
      "Very professional for our shop opening. On time, budget friendly and the lighting made the store look premium.",
  },
  {
    name: "Vijaya Lakshmi",
    location: "Ramanathapuram",
    rating: 4,
    quote:
      "Temple festival decoration was beautiful and true to tradition. Will definitely book again for the next function.",
  },
];

export const faqs = [
  {
    q: "How early should I book Sathuragiri Decoration for my wedding?",
    a: "We recommend booking at least 3–4 weeks in advance for weddings, especially during peak season (Nov–Feb). For temple festivals and smaller functions, 1–2 weeks is usually enough.",
  },
  {
    q: "Do you provide decoration outside Ramanathapuram district?",
    a: "Yes, we travel across Tamil Nadu for weddings, temple festivals and corporate events. Transport charges may apply based on distance.",
  },
  {
    q: "Can I customise a package instead of choosing Silver, Gold, Diamond or Royal?",
    a: "Absolutely. Every package can be customised — flowers, lighting, stage size and theme — based on your budget and requirements. Send us your details on WhatsApp for a custom quote.",
  },
  {
    q: "Do you provide tent, LED wall and sound system on rent?",
    a: "Yes, we offer Arabian tents, LED walls, sound systems and generator backup as add-on rentals for outdoor and large events.",
  },
  {
    q: "What is the advance payment to confirm a booking?",
    a: "A 25–30% advance is required to block your date, with the balance payable on the day of the event.",
  },
];

export const navLinks = [
  { label: "Home", href: "#home" },
  { label: "Services", href: "#services" },
  { label: "Gallery", href: "#gallery" },
  { label: "Packages", href: "#packages" },
  { label: "About", href: "#about" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "FAQ", href: "#faq" },
  { label: "Contact", href: "#contact" },
];
