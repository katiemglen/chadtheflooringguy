import type { Metadata } from "next";
import "./globals.css";
import ConvexClientProvider from "./ConvexClientProvider";
import SEOContent from "./components/SEOContent";

export const metadata: Metadata = {
  title: "Chad Bublitz | Flooring Repair Woodbury MN & Washington County — The Flooring Guy",
  description:
    "20+ years insured expert repairs — carpet, LVP, hardwood. Itemized quotes + DIY savings. Text photos for fast quote: 651.353.6238. Woodbury, Stillwater, Hastings, Hudson.",
  robots: "index, follow",
  openGraph: {
    title: "Chad Bublitz | Flooring Repair & Installation — Woodbury MN",
    description:
      "Expert flooring repair in Woodbury MN & Washington County. Carpet wrinkles, LVP board replacement, pet damage, transitions. 20+ years insured. Text photos for free quote: 651.353.6238.",
    url: "https://chadtheflooringguy.vercel.app/",
    siteName: "Chad the Flooring Guy",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Chad Bublitz | Flooring Repair — Woodbury MN",
    description:
      "20+ years insured. Carpet repair, LVP repair, hardwood fixes. Itemized quotes + DIY savings. Text photos: 651.353.6238.",
  },
  alternates: {
    canonical: "https://chadtheflooringguy.vercel.app/",
  },
};

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "HomeAndConstructionBusiness",
  "@id": "https://chadtheflooringguy.vercel.app/#organization",
  name: "Chad Bublitz – The Flooring Guy",
  alternateName: "Anthony Marie LLC",
  url: "https://chadtheflooringguy.vercel.app",
  telephone: "+1-651-353-6238",
  description:
    "Expert flooring repair and installation in Woodbury, MN and Washington County. 20+ years insured. Carpet repair, LVP board replacement, hardwood fixes, transition repair. Transparent itemized quotes with DIY savings options.",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Woodbury",
    addressRegion: "MN",
    postalCode: "55125",
    addressCountry: "US",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 44.9239,
    longitude: -92.9594,
  },
  areaServed: [
    { "@type": "City", name: "Woodbury", addressRegion: "MN" },
    { "@type": "City", name: "Stillwater", addressRegion: "MN" },
    { "@type": "City", name: "Hastings", addressRegion: "MN" },
    { "@type": "City", name: "Hudson", addressRegion: "WI" },
    { "@type": "City", name: "Cottage Grove", addressRegion: "MN" },
    { "@type": "City", name: "Oakdale", addressRegion: "MN" },
    { "@type": "City", name: "Lake Elmo", addressRegion: "MN" },
    { "@type": "City", name: "Maplewood", addressRegion: "MN" },
    { "@type": "AdministrativeArea", name: "Washington County, MN" },
  ],
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "07:00",
      closes: "17:00",
    },
  ],
  founder: {
    "@type": "Person",
    name: "Chad Bublitz",
    jobTitle: "Owner, Flooring Specialist",
  },
  priceRange: "$$",
  paymentAccepted: "Check, Invoice, Cash",
  currenciesAccepted: "USD",
  slogan: "Repairing your floors saves you time & money.",
  knowsAbout: [
    "Carpet repair",
    "Carpet re-stretching",
    "LVP repair",
    "Vinyl plank repair",
    "Hardwood floor repair",
    "Floor transition repair",
    "Pet damage repair",
    "Flooring installation",
  ],
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Flooring Services",
    itemListElement: [
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Carpet Repair & Re-Stretching",
          description:
            "Remove carpet wrinkles, fix pet damage, seam repairs, radio-wave carpet seaming. Targeted repairs that save thousands vs full replacement.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "LVP & Vinyl Plank Repair",
          description:
            "Single-board LVP replacement, click-lock fixes, water damage repair. No whole-floor teardown needed.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Hardwood & Engineered Wood Repair",
          description:
            "Board replacement, scratch repair, refinishing touch-ups, water damage fixes for hardwood and engineered wood floors.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Floor Transition Repair",
          description:
            "Fix gaps between rooms, replace broken transition strips, level uneven thresholds between different flooring types.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Flooring Installation",
          description:
            "New carpet, LVP, hardwood, and engineered wood installation. Full rooms, basements, and remodels.",
        },
      },
    ],
  },
  sameAs: [],
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "How much does carpet repair cost in Woodbury MN?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Most carpet repairs range from $150–$500 depending on the issue. Chad provides transparent itemized quotes so you see every line item and can choose what to DIY to save money. Text photos to 651-353-6238 for a free estimate.",
      },
    },
    {
      "@type": "Question",
      name: "Can you fix just one plank of LVP without replacing the whole floor?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes! Chad specializes in single-board LVP replacement. No whole-floor teardown needed. This targeted approach saves thousands compared to full replacement.",
      },
    },
    {
      "@type": "Question",
      name: "Do you fix carpet wrinkles and bumps?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Absolutely. Carpet re-stretching removes wrinkles, bumps, and ripples. This extends your carpet's life and eliminates trip hazards. Most jobs completed same day.",
      },
    },
    {
      "@type": "Question",
      name: "Can pet damage on carpet be repaired?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "In most cases, yes. Chad uses a professional radio-wave carpet seaming tool to bond replacement patches from the top of the carpet — no heat, no smoke, no fiber damage — without re-carpeting the entire room. Much more affordable than full replacement.",
      },
    },
    {
      "@type": "Question",
      name: "Do you serve Stillwater, Hastings, and Hudson?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Chad serves all of Washington County and the east Twin Cities metro including Woodbury, Stillwater, Hastings, Hudson WI, Cottage Grove, Oakdale, Lake Elmo, and Maplewood.",
      },
    },
    {
      "@type": "Question",
      name: "How do I get a quote from Chad the Flooring Guy?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Text several photos of the flooring area from different angles plus your first and last name to 651-353-6238. Chad reviews photos and responds with a free estimate, usually same day. No site visit required.",
      },
    },
    {
      "@type": "Question",
      name: "Are you insured?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Chad is fully insured through Anthony Marie LLC with 20+ years of experience in flooring repair and installation.",
      },
    },
    {
      "@type": "Question",
      name: "Do you do new flooring installations?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes — carpet, LVP, hardwood, and engineered wood. Full rooms, basements, and remodels. But Chad's specialty is targeted repairs that save you from unnecessary full replacements.",
      },
    },
  ],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta name="geo.region" content="US-MN" />
        <meta name="geo.placename" content="Woodbury" />
        <meta name="geo.position" content="44.9239;-92.9594" />
        <meta name="ICBM" content="44.9239, -92.9594" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
      </head>
      <body>
        <SEOContent />
        <ConvexClientProvider>{children}</ConvexClientProvider>
      </body>
    </html>
  );
}
