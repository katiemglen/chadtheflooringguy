import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Flooring Repair Before Selling Your Home | Woodbury MN & Washington County",
  description:
    "Fix your floors before listing — don't replace them. Targeted carpet, LVP & transition repairs. Photo-ready results, fast turnaround. Text photos: 651.353.6238. Chad the Flooring Guy.",
  alternates: { canonical: "https://chadtheflooringguy.vercel.app/home-seller-flooring-repair" },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://chadtheflooringguy.vercel.app/" },
    { "@type": "ListItem", position: 2, name: "Home Seller Flooring Repair", item: "https://chadtheflooringguy.vercel.app/home-seller-flooring-repair" },
  ],
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "How much does it cost to fix flooring before selling a house?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Most pre-listing repairs range from $149–$799 depending on the issue. Carpet restretching is $149–$499, pet damage patches $149–$499, LVP board replacement $199–$799, and transition fixes $99–$399. Chad provides transparent itemized quotes. Text photos to 651-353-6238 for a free estimate.",
      },
    },
    {
      "@type": "Question",
      name: "Do I need to replace my carpet before selling my house?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Usually not. Targeted repairs like restretching wrinkled carpet or patching pet damage are much more affordable than full replacement and produce photo-ready results. A $300 repair can save you $4,000+ in unnecessary replacement costs.",
      },
    },
    {
      "@type": "Question",
      name: "How fast can you do flooring repairs before a listing?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Most repairs are completed same day or within one week. Text photos of the areas to 651-353-6238 and Chad will respond with a quote and timeline — usually same day.",
      },
    },
    {
      "@type": "Question",
      name: "Do you work with realtors in Woodbury and Washington County?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Chad works with realtors across the east Twin Cities metro for pre-listing repairs. Text photos to 651-353-6238 for a fast quote that fits your listing timeline.",
      },
    },
  ],
};

const repairs = [
  { icon: "🔧", name: "Carpet Wrinkle Restretching", price: "$149–$499", desc: "Flat, tight carpet for listing photos. Most jobs done same day. Eliminates trip hazard concerns from inspectors." },
  { icon: "🐾", name: "Pet Damage Patches", price: "$149–$499", desc: "Radio-wave seaming creates invisible patches. Buyers won\u2019t know there was ever damage. No need to re-carpet the room." },
  { icon: "📐", name: "LVP Board Replacement", price: "$199–$799", desc: "Individual damaged boards replaced without tearing up the whole floor. Seamless result." },
  { icon: "🚪", name: "Transition Strip Repair", price: "$99–$399", desc: "Fix gaps and broken strips between rooms. A small fix that makes a big visual difference in showings." },
];

const whyChad = [
  "Fast turnaround — most repairs done same day or within one week",
  "Photo-ready results — invisible repairs that don\u2019t look like repairs",
  "Transparent itemized quotes — seller sees every line item and can DIY parts to save",
  "No subcontractors — Chad does the work personally",
  "Insured through Anthony Marie LLC — 20+ years experience",
  "Text photos, get a quote same day — no scheduling hassle",
];

export default function HomeSellerFlooringRepairPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <main style={{ background: "var(--bg)", minHeight: "100vh" }}>
        {/* Hero */}
        <section style={{ padding: "100px 20px 60px", textAlign: "center", background: "linear-gradient(135deg, #2d2d2d 0%, #1a1a1a 100%)" }}>
          <div style={{ maxWidth: 800, margin: "0 auto" }}>
            <nav style={{ fontSize: "0.85rem", marginBottom: 20 }}>
              <Link href="/" style={{ color: "rgba(255,255,255,0.6)", textDecoration: "none" }}>Home</Link>
              <span style={{ color: "rgba(255,255,255,0.3)", margin: "0 8px" }}>/</span>
              <span style={{ color: "var(--gold)" }}>Home Seller Flooring Repair</span>
            </nav>
            <div style={{ display: "inline-flex", alignItems: "center", gap: 6, padding: "6px 16px", borderRadius: 100, fontSize: "0.8rem", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.5px", background: "rgba(196,136,42,0.2)", color: "var(--gold)", border: "1px solid rgba(196,136,42,0.4)", marginBottom: 20 }}>
              🏡 For Realtors &amp; Home Sellers
            </div>
            <h1 style={{ fontSize: "clamp(1.8rem, 4vw, 2.8rem)", fontWeight: 900, color: "#fff", lineHeight: 1.2, marginBottom: 16 }}>
              Flooring Repairs Before Listing — Woodbury &amp; Washington County
            </h1>
            <p style={{ fontSize: "1.1rem", color: "rgba(255,255,255,0.7)", maxWidth: 650, margin: "0 auto 24px", lineHeight: 1.6 }}>
              Fix the floor, don&apos;t replace it. Targeted repairs that photograph beautifully, pass buyer inspection, and save sellers thousands.
            </p>
            <div style={{ display: "flex", gap: 12, justifyContent: "center", flexWrap: "wrap" }}>
              <a href="sms:6513536238" style={{ display: "inline-flex", alignItems: "center", gap: 8, padding: "14px 28px", borderRadius: 10, background: "var(--gold)", color: "#fff", fontWeight: 700, textDecoration: "none" }}>
                📷 Text Photos for Quote
              </a>
              <a href="tel:6513536238" style={{ display: "inline-flex", alignItems: "center", gap: 8, padding: "14px 28px", borderRadius: 10, background: "transparent", color: "var(--gold)", fontWeight: 700, textDecoration: "none", border: "2px solid var(--gold)" }}>
                📞 Call 651-353-6238
              </a>
            </div>
          </div>
        </section>

        {/* The Problem */}
        <section style={{ padding: "60px 20px", maxWidth: 800, margin: "0 auto" }}>
          <h2 style={{ fontSize: "1.8rem", fontWeight: 800, marginBottom: 16, color: "#2d2d2d" }}>You Don&apos;t Have to Replace the Whole Floor Before Selling</h2>
          <p style={{ color: "var(--text-dim)", lineHeight: 1.8, fontSize: "1.05rem" }}>
            Most sellers and realtors assume damaged carpet, wrinkled hallways, or scratched LVP means a full replacement before listing. It usually doesn&apos;t. Chad does targeted repairs — the specific damaged area only — so your floors look show-ready without the $3,500–$8,500 price tag of full replacement.
          </p>
        </section>

        {/* Most Common Pre-Listing Repairs */}
        <section style={{ padding: "48px 20px", background: "var(--bg-section)" }}>
          <div style={{ maxWidth: 800, margin: "0 auto" }}>
            <h2 style={{ fontSize: "1.5rem", fontWeight: 800, marginBottom: 24, color: "#2d2d2d", textAlign: "center" }}>Most Common Pre-Listing Repairs</h2>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: 20 }}>
              {repairs.map((r) => (
                <div key={r.name} className="glass-card" style={{ padding: 28, textAlign: "center" }}>
                  <div style={{ fontSize: "2rem", marginBottom: 12 }}>{r.icon}</div>
                  <h3 style={{ fontSize: "1.1rem", fontWeight: 700, marginBottom: 4, color: "#2d2d2d" }}>{r.name}</h3>
                  <p style={{ color: "var(--gold-dark)", fontSize: "0.85rem", fontWeight: 700, marginBottom: 8 }}>{r.price}</p>
                  <p style={{ color: "var(--text-dim)", lineHeight: 1.6, margin: 0, fontSize: "0.9rem" }}>{r.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Why Realtors Choose Chad */}
        <section style={{ padding: "60px 20px", maxWidth: 800, margin: "0 auto" }}>
          <h2 style={{ fontSize: "1.5rem", fontWeight: 800, marginBottom: 24, color: "#2d2d2d" }}>Why Realtors Choose Chad</h2>
          <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
            {whyChad.map((item, i) => (
              <li key={i} style={{ display: "flex", gap: 12, alignItems: "flex-start", padding: "8px 0", fontSize: "1rem", color: "var(--text-dim)", lineHeight: 1.7 }}>
                <span style={{ color: "var(--gold)", fontWeight: 700, flexShrink: 0 }}>✓</span>
                {item}
              </li>
            ))}
          </ul>
        </section>

        {/* Testimonial */}
        <section style={{ padding: "40px 20px", background: "var(--bg-section)" }}>
          <div style={{ maxWidth: 600, margin: "0 auto", textAlign: "center" }}>
            <div className="glass-card" style={{ padding: 28 }}>
              <div style={{ marginBottom: 12 }}>⭐⭐⭐⭐⭐</div>
              <p style={{ color: "var(--text-dim)", lineHeight: 1.7, fontStyle: "italic", marginBottom: 12, fontSize: "1rem" }}>
                &ldquo;Fast, honest, and the price was exactly what he quoted. No surprises. Our realtor recommends him to all her clients.&rdquo;
              </p>
              <p style={{ fontWeight: 700, fontSize: "0.95rem", margin: 0 }}>Jenny K.</p>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section style={{ padding: "60px 20px", maxWidth: 800, margin: "0 auto" }}>
          <h2 style={{ fontSize: "1.5rem", fontWeight: 800, marginBottom: 24, color: "#2d2d2d" }}>Frequently Asked Questions</h2>
          {(faqSchema.mainEntity as Array<{name: string; acceptedAnswer: {text: string}}>).map((q, i) => (
            <details key={i} style={{ marginBottom: 16, padding: "20px 24px", borderRadius: 12, background: "var(--bg-card)", border: "1px solid rgba(0,0,0,0.06)" }}>
              <summary style={{ fontWeight: 700, fontSize: "1.05rem", cursor: "pointer", color: "#2d2d2d" }}>{q.name}</summary>
              <p style={{ color: "var(--text-dim)", lineHeight: 1.7, marginTop: 12 }}>{q.acceptedAnswer.text}</p>
            </details>
          ))}
        </section>

        {/* CTA */}
        <section style={{ padding: "60px 20px", textAlign: "center", background: "var(--bg-section)" }}>
          <div style={{ maxWidth: 600, margin: "0 auto" }}>
            <h2 style={{ fontSize: "1.8rem", fontWeight: 800, marginBottom: 12, color: "#2d2d2d" }}>Get a Pre-Listing Repair Quote</h2>
            <p style={{ color: "var(--text-dim)", lineHeight: 1.7, marginBottom: 24 }}>
              Text photos of the flooring areas that need attention from different angles, plus your <strong>first and last name</strong>, to <strong>651-353-6238</strong>. Chad reviews and responds with a quote — usually same day.
            </p>
            <div style={{ display: "flex", gap: 12, justifyContent: "center", flexWrap: "wrap" }}>
              <a href="sms:6513536238" style={{ display: "inline-flex", alignItems: "center", gap: 8, padding: "14px 28px", borderRadius: 10, background: "var(--gold)", color: "#fff", fontWeight: 700, textDecoration: "none" }}>
                📷 Text Photos Now
              </a>
              <a href="tel:6513536238" style={{ display: "inline-flex", alignItems: "center", gap: 8, padding: "14px 28px", borderRadius: 10, background: "transparent", color: "var(--gold-dark)", fontWeight: 700, textDecoration: "none", border: "2px solid var(--gold)" }}>
                📞 Call 651-353-6238
              </a>
            </div>
            <p style={{ fontSize: "0.82rem", color: "var(--text-light)", marginTop: 20 }}>
              Insured | 20+ years | Anthony Marie LLC | Woodbury, MN
            </p>
          </div>
        </section>

        {/* Related */}
        <section style={{ padding: "40px 20px 60px" }}>
          <div style={{ maxWidth: 800, margin: "0 auto", textAlign: "center" }}>
            <h2 style={{ fontSize: "1.3rem", fontWeight: 700, marginBottom: 20, color: "#2d2d2d" }}>Related Services</h2>
            <div style={{ display: "flex", gap: 12, justifyContent: "center", flexWrap: "wrap" }}>
              <Link href="/carpet-repair-woodbury" style={{ padding: "8px 20px", borderRadius: 100, fontSize: "0.85rem", fontWeight: 600, color: "var(--gold-dark)", background: "rgba(245,166,35,0.1)", border: "1px solid rgba(245,166,35,0.2)", textDecoration: "none" }}>Carpet Repair</Link>
              <Link href="/lvp-repair-stillwater" style={{ padding: "8px 20px", borderRadius: 100, fontSize: "0.85rem", fontWeight: 600, color: "var(--gold-dark)", background: "rgba(245,166,35,0.1)", border: "1px solid rgba(245,166,35,0.2)", textDecoration: "none" }}>LVP Repair</Link>
              <Link href="/transition-repair" style={{ padding: "8px 20px", borderRadius: 100, fontSize: "0.85rem", fontWeight: 600, color: "var(--gold-dark)", background: "rgba(245,166,35,0.1)", border: "1px solid rgba(245,166,35,0.2)", textDecoration: "none" }}>Transition Repair</Link>
              <Link href="/" style={{ padding: "8px 20px", borderRadius: 100, fontSize: "0.85rem", fontWeight: 600, color: "var(--gold-dark)", background: "rgba(245,166,35,0.1)", border: "1px solid rgba(245,166,35,0.2)", textDecoration: "none" }}>All Services</Link>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
