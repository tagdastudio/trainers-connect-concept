export const SITE_URL = "https://trainers-connect-concept.pages.dev";

export const site = {
  name: "Trainers Connect",
  shortName: "TC",
  descriptor: "India's Trainer Network",
  tagline: "India's Trainers. One Powerful Network.",
  description:
    "Trainers Connect is India's first platform connecting trainers, coaches, mentors and experts with the people and organisations looking for their expertise.",
  email: "care@trainersconnect.in",
  phone: "+91-78927 70456",
  phoneHref: "tel:+917892770456",
  whatsapp: "917892770456",
  address: {
    line: "627, 17A Main, 6th Block",
    area: "Koramangala",
    city: "Bengaluru",
    pin: "560095",
    full: "627, 17A Main, 6th Block, Koramangala, Bengaluru 560095",
  },
  socials: [
    {
      label: "Instagram",
      href: "https://www.instagram.com/connecttrainers",
      handle: "@connecttrainers",
    },
    {
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/trainers-connect-56648843b",
      handle: "Trainers Connect",
    },
  ],
  established: "2026",
  coordinates: "12.9352° N, 77.6245° E",
} as const;

export const NAV = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about-us" },
  { label: "Find Trainers", href: "/trainers-directory" },
  { label: "How it Works", href: "/how-it-works" },
  { label: "FAQ", href: "/faq" },
  { label: "Journal", href: "/blogs" },
  { label: "Contact", href: "/contact-us" },
] as const;

export const CTA = {
  find: { label: "Find a trainer", href: "/trainers-directory" },
  join: { label: "Join as a trainer", href: "/submit-listing" },
  signIn: { label: "Sign in", href: "/sign-in" },
} as const;

export const FOOTER_LINKS = {
  explore: [
    { label: "About us", href: "/about-us" },
    { label: "How it works", href: "/how-it-works" },
    { label: "Find trainers", href: "/trainers-directory" },
    { label: "FAQ", href: "/faq" },
  ],
  participate: [
    { label: "Join as a trainer", href: "/submit-listing" },
    { label: "Contact us", href: "/contact-us" },
    { label: "Sign in", href: "/sign-in" },
    { label: "Journal", href: "/blogs" },
  ],
  legal: [
    { label: "Privacy policy", href: "/legal/privacy-policy" },
    { label: "Terms & conditions", href: "/legal/terms-and-conditions" },
    { label: "Refund policy", href: "/legal/refund-and-returns-policy" },
  ],
} as const;
