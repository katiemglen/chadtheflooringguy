import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Floor Transition Repair Woodbury MN | Doorway & Threshold Fixes",
  description: "Fix broken transition strips, doorway gaps, uneven thresholds. $99–$399 repairs that prevent bigger problems. Text photos: 651.353.6238.",
  alternates: { canonical: "https://chadtheflooringguy.vercel.app/transition-repair" },
};

const breadcrumbSchema = JSON.stringify({ "@context": "https://schema.org", "@type": "BreadcrumbList", itemListElement: [
  { "@type": "ListItem", position: 1, name: "Home", item: "https://chadtheflooringguy.vercel.app/" },
  { "@type": "ListItem", position: 2, name: "Transition Repair", item: "https://chadtheflooringguy.vercel.app/transition-repair" },
]});

const serviceSchema = JSON.stringify({ "@context": "https://schema.org", "@type": "Service", name: "Floor Transition & Doorway Repair",
  provider: { "@type": "HomeAndConstructionBusiness", name: "Chad Bublitz – The Flooring Guy", telephone: "+1-651-353-6238", address: { "@type": "PostalAddress", addressLocality: "Woodbury", addressRegion: "MN" } },
  areaServed: "Woodbury MN, Hastings MN, Hudson WI, Washington County MN",
});

const faqSchema = JSON.stringify({ "@context": "https://schema.org", "@type": "FAQPage", mainEntity: [
  { "@type": "Question", name: "How much does it cost to fix a floor transition?", acceptedAnswer: { "@type": "Answer", text: "Most doorway transition repairs run $99–$399 depending on the flooring types involved and whether subfloor work is needed. Text photos to 651-353-6238 for a free estimate." } },
  { "@type": "Question", name: "Can you fix the gap between my kitchen and living room floor?", acceptedAnswer: { "@type": "Answer", text: "Yes. Transition strip replacement and threshold leveling close gaps between rooms where different flooring types meet. Chad uses the correct transition profile for your specific flooring combination and secures it properly." } },
  { "@type": "Question", name: "Is a broken transition strip a big deal?", acceptedAnswer: { "@type": "Answer", text: "It can be. Gaps let moisture and debris underneath, which can cause larger flooring problems over time — including subfloor damage and mold. It's also a trip hazard, especially for kids and elderly family members. A $200 fix now prevents a $2,000 problem later." } },
]});

const services = [
  { name: "Transition Strip Replacement", desc: "Broken, cracked, or missing T-moldings, reducers, and end caps replaced with proper matching strips. Secured to prevent future loosening." },
  { name: "Doorway Gap Repair", desc: "Gaps between rooms where different flooring types meet are properly closed with the correct transition profile. No more visible subfloor, moisture infiltration, or debris accumulation." },
  { name: "Uneven Threshold Leveling", desc: "Height differences between rooms leveled with proper reducers or subfloor shimming. Eliminates trip hazards that are especially dangerous for children and elderly family members." },
  { name: "Carpet-to-Hard-Surface Transitions", desc: "Where carpet meets tile, LVP, or hardwood — proper tack strip and transition bar installation for a clean, secure edge that won\u2019t fray or separate." },
  { name: "Stair Nosing & Edge Repair", desc: "Loose or damaged stair nosing and floor edges re-secured or replaced. Critical for safety on stairs and landings." },
];

export default function TransitionRepairPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: breadcrumbSchema }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: serviceSchema }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: faqSchema }} />
      <main style={{ background: "var(--bg)", minHeight: "100vh" }}>
        <section style={{ padding: "100px 20px 60px", textAlign: "center", background: "linear-gradient(135deg, #2d2d2d 0%, #1a1a1a 100%)" }}>
          <div style={{ maxWidth: 800, margin: "0 auto" }}>
            <nav style={{ fontSize: "0.85rem", marginBottom: 20 }}><Link href="/" style={{ color: "rgba(255,255,255,0.6)", textDecoration: "none" }}>Home</Link><span style={{ color: "rgba(255,255,255,0.3)", margin: "0 8px" }}>/</span><span style={{ color: "var(--gold)" }}>Transition Repair</span></nav>
            <h1 style={{ fontSize: "clamp(1.8rem, 4vw, 2.8rem)", fontWeight: 900, color: "#fff", lineHeight: 1.2, marginBottom: 16 }}>Floor Transition &amp; Doorway Repair in Woodbury, MN</h1>
            <p style={{ fontSize: "1.1rem", color: "rgba(255,255,255,0.7)", maxWidth: 650, margin: "0 auto 24px", lineHeight: 1.6 }}>Broken transitions, gaps between rooms, and uneven thresholds are tripping hazards, they look bad, and they let dirt and moisture into your subfloor. The good news? Most transition repairs are quick, affordable fixes.</p>
            <div style={{ display: "flex", gap: 12, justifyContent: "center", flexWrap: "wrap" }}>
              <a href="tel:6513536238" style={{ display: "inline-flex", alignItems: "center", gap: 8, padding: "14px 28px", borderRadius: 10, background: "var(--gold)", color: "#fff", fontWeight: 700, textDecoration: "none" }}>📞 Call 651-353-6238</a>
              <a href="sms:6513536238" style={{ display: "inline-flex", alignItems: "center", gap: 8, padding: "14px 28px", borderRadius: 10, background: "transparent", color: "var(--gold)", fontWeight: 700, textDecoration: "none", border: "2px solid var(--gold)" }}>📷 Text Photos for Quote</a>
            </div>
          </div>
        </section>
        <section style={{ padding: "60px 20px", maxWidth: 800, margin: "0 auto" }}>
          <h2 style={{ fontSize: "1.8rem", fontWeight: 800, marginBottom: 32, color: "#2d2d2d" }}>What We Fix</h2>
          <div style={{ display: "grid", gap: 20 }}>{services.map((s) => (<div key={s.name} style={{ padding: "24px", borderRadius: 12, background: "var(--bg-card)", border: "1px solid rgba(0,0,0,0.06)", boxShadow: "0 1px 8px rgba(0,0,0,0.03)" }}><h3 style={{ fontSize: "1.15rem", fontWeight: 700, marginBottom: 8, color: "#2d2d2d" }}>{s.name}</h3><p style={{ color: "var(--text-dim)", lineHeight: 1.7, margin: 0 }}>{s.desc}</p></div>))}</div>
        </section>
        <section style={{ padding: "48px 20px", background: "var(--bg-section)" }}>
          <div style={{ maxWidth: 800, margin: "0 auto", textAlign: "center" }}>
            <h2 style={{ fontSize: "1.5rem", fontWeight: 800, marginBottom: 16, color: "#2d2d2d" }}>Why a $200 Fix Now Prevents a $2,000 Problem Later</h2>
            <p style={{ fontSize: "1.05rem", color: "var(--text-dim)", lineHeight: 1.7, maxWidth: 600, margin: "0 auto" }}>Ignoring broken transitions leads to moisture and debris getting underneath your flooring, causing subfloor damage, mold, and further floor deterioration. Most transition repairs run $99–$399 per doorway — a small price to prevent a much bigger repair bill down the road.</p>
          </div>
        </section>
        <section style={{ padding: "60px 20px", maxWidth: 800, margin: "0 auto" }}>
          <h2 style={{ fontSize: "1.8rem", fontWeight: 800, marginBottom: 32, color: "#2d2d2d" }}>Frequently Asked Questions</h2>
          <details style={{ marginBottom: 16, padding: "20px 24px", borderRadius: 12, background: "var(--bg-card)", border: "1px solid rgba(0,0,0,0.06)" }}><summary style={{ fontWeight: 700, fontSize: "1.05rem", cursor: "pointer", color: "#2d2d2d" }}>How much does it cost to fix a floor transition?</summary><p style={{ color: "var(--text-dim)", lineHeight: 1.7, marginTop: 12 }}>Most doorway transition repairs run $99–$399 depending on the flooring types involved and whether subfloor work is needed. Text photos to 651-353-6238 for a free estimate.</p></details>
          <details style={{ marginBottom: 16, padding: "20px 24px", borderRadius: 12, background: "var(--bg-card)", border: "1px solid rgba(0,0,0,0.06)" }}><summary style={{ fontWeight: 700, fontSize: "1.05rem", cursor: "pointer", color: "#2d2d2d" }}>Can you fix the gap between my kitchen and living room floor?</summary><p style={{ color: "var(--text-dim)", lineHeight: 1.7, marginTop: 12 }}>Yes. Transition strip replacement and threshold leveling close gaps between rooms where different flooring types meet. Chad uses the correct transition profile for your specific flooring combination.</p></details>
          <details style={{ marginBottom: 16, padding: "20px 24px", borderRadius: 12, background: "var(--bg-card)", border: "1px solid rgba(0,0,0,0.06)" }}><summary style={{ fontWeight: 700, fontSize: "1.05rem", cursor: "pointer", color: "#2d2d2d" }}>Is a broken transition strip a big deal?</summary><p style={{ color: "var(--text-dim)", lineHeight: 1.7, marginTop: 12 }}>It can be. Gaps let moisture and debris underneath, which can cause larger flooring problems over time — including subfloor damage and mold. It&apos;s also a trip hazard. A $200 fix now prevents a $2,000 problem later.</p></details>
        </section>
        <section style={{ padding: "40px 20px", background: "var(--bg-section)" }}><div style={{ maxWidth: 800, margin: "0 auto", textAlign: "center" }}><h2 style={{ fontSize: "1.3rem", fontWeight: 700, marginBottom: 12, color: "#2d2d2d" }}>Service Areas</h2><p style={{ color: "var(--text-dim)", lineHeight: 1.7 }}>Woodbury MN, Hastings MN, Hudson WI, and the east Twin Cities metro</p></div></section>
        <section style={{ padding: "60px 20px", textAlign: "center" }}><div style={{ maxWidth: 600, margin: "0 auto" }}><h2 style={{ fontSize: "1.8rem", fontWeight: 800, marginBottom: 12, color: "#2d2d2d" }}>Let&apos;s Find Solutions!</h2><p style={{ color: "var(--text-dim)", lineHeight: 1.7, marginBottom: 24 }}>Text photos of the transition area from different angles + your <strong>first and last name</strong> to <strong>651-353-6238</strong>. Chad reviews and responds with a free estimate — usually same day.</p><div style={{ display: "flex", gap: 12, justifyContent: "center", flexWrap: "wrap" }}><a href="tel:6513536238" style={{ display: "inline-flex", alignItems: "center", gap: 8, padding: "14px 28px", borderRadius: 10, background: "var(--gold)", color: "#fff", fontWeight: 700, textDecoration: "none" }}>📞 Call 651-353-6238</a><a href="sms:6513536238" style={{ display: "inline-flex", alignItems: "center", gap: 8, padding: "14px 28px", borderRadius: 10, background: "transparent", color: "var(--gold-dark)", fontWeight: 700, textDecoration: "none", border: "2px solid var(--gold)" }}>📷 Text Photos Now</a></div><p style={{ fontSize: "0.82rem", color: "var(--text-light)", marginTop: 20 }}>Insured · 20+ years experience · Anthony Marie LLC · Woodbury, MN</p></div></section>
        <section style={{ padding: "40px 20px 60px", background: "var(--bg-section)" }}><div style={{ maxWidth: 800, margin: "0 auto", textAlign: "center" }}><h2 style={{ fontSize: "1.3rem", fontWeight: 700, marginBottom: 20, color: "#2d2d2d" }}>Other Services</h2><div style={{ display: "flex", gap: 12, justifyContent: "center", flexWrap: "wrap" }}><Link href="/carpet-repair-woodbury" style={{ padding: "8px 20px", borderRadius: 100, fontSize: "0.85rem", fontWeight: 600, color: "var(--gold-dark)", background: "rgba(245,166,35,0.1)", border: "1px solid rgba(245,166,35,0.2)", textDecoration: "none" }}>Carpet Repair</Link><Link href="/lvp-repair-stillwater" style={{ padding: "8px 20px", borderRadius: 100, fontSize: "0.85rem", fontWeight: 600, color: "var(--gold-dark)", background: "rgba(245,166,35,0.1)", border: "1px solid rgba(245,166,35,0.2)", textDecoration: "none" }}>LVP Repair</Link><Link href="/hardwood-repair" style={{ padding: "8px 20px", borderRadius: 100, fontSize: "0.85rem", fontWeight: 600, color: "var(--gold-dark)", background: "rgba(245,166,35,0.1)", border: "1px solid rgba(245,166,35,0.2)", textDecoration: "none" }}>Hardwood Repair</Link><Link href="/home-seller-flooring-repair" style={{ padding: "8px 20px", borderRadius: 100, fontSize: "0.85rem", fontWeight: 600, color: "var(--gold-dark)", background: "rgba(245,166,35,0.1)", border: "1px solid rgba(245,166,35,0.2)", textDecoration: "none" }}>Realtors &amp; Home Sellers</Link><Link href="/" style={{ padding: "8px 20px", borderRadius: 100, fontSize: "0.85rem", fontWeight: 600, color: "var(--gold-dark)", background: "rgba(245,166,35,0.1)", border: "1px solid rgba(245,166,35,0.2)", textDecoration: "none" }}>All Services</Link></div></div></section>
      </main>
    </>
  );
}
