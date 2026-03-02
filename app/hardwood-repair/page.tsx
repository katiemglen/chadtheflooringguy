import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Hardwood & Engineered Wood Floor Repair | Washington County MN",
  description: "Hardwood board replacement, scratch repair, water damage fixes. Stain-matched, seamless results. 20+ years insured. Text photos: 651.353.6238.",
  alternates: { canonical: "https://chadtheflooringguy.vercel.app/hardwood-repair" },
};

const breadcrumbSchema = JSON.stringify({ "@context": "https://schema.org", "@type": "BreadcrumbList", itemListElement: [
  { "@type": "ListItem", position: 1, name: "Home", item: "https://chadtheflooringguy.vercel.app/" },
  { "@type": "ListItem", position: 2, name: "Hardwood Repair", item: "https://chadtheflooringguy.vercel.app/hardwood-repair" },
]});

const serviceSchema = JSON.stringify({ "@context": "https://schema.org", "@type": "Service", name: "Hardwood & Engineered Wood Floor Repair",
  provider: { "@type": "HomeAndConstructionBusiness", name: "Chad Bublitz – The Flooring Guy", telephone: "+1-651-353-6238", address: { "@type": "PostalAddress", addressLocality: "Woodbury", addressRegion: "MN" } },
  areaServed: "Washington County MN, Woodbury MN, Stillwater MN, Hastings MN, Maplewood MN",
});

const faqSchema = JSON.stringify({ "@context": "https://schema.org", "@type": "FAQPage", mainEntity: [
  { "@type": "Question", name: "Can scratched hardwood floors be repaired without refinishing the whole room?", acceptedAnswer: { "@type": "Answer", text: "In many cases, yes. Deep scratches and gouges can be filled, sanded, and refinished in the affected area. Surface scratches can be buffed and re-coated. Chad will assess the damage and be honest about what's fixable vs. what needs full refinishing." } },
  { "@type": "Question", name: "How much does hardwood floor repair cost in Washington County?", acceptedAnswer: { "@type": "Answer", text: "Most hardwood repairs range from $299–$1199 depending on the scope. Full room refinishing can be $4,000–$8,000+. Chad's targeted approach addresses only the damaged area, saving you significantly. Text photos to 651-353-6238 for a free estimate." } },
  { "@type": "Question", name: "Does Chad do hardwood floor installation?", acceptedAnswer: { "@type": "Answer", text: "Chad installs pre-finished hardwood for new installations. For traditional solid hardwood installation or full-room refinishing, he has trusted professional recommendations. His specialty is targeted repairs that save you from unnecessary full replacements." } },
]});

const services = [
  { name: "Board Replacement", desc: "Individual damaged boards removed and replaced with matching wood. Stained and finished to blend seamlessly with the surrounding floor. Chad has 20+ years of experience color-matching stains on-site." },
  { name: "Scratch & Dent Repair", desc: "Deep scratches, dents, and gouges filled, sanded, and refinished. Surface scratches buffed and re-coated. The goal is invisible repairs that match the existing floor." },
  { name: "Water Damage Repair", desc: "Warped, cupped, or blackened boards from water damage replaced. Subfloor dried and treated to prevent mold. Acting fast is critical with water damage." },
  { name: "Engineered Wood Fixes", desc: "Delaminating, chipping, or separating engineered planks repaired or replaced. Click-lock and glue-down systems. Engineered wood has its own repair techniques and adhesives." },
  { name: "Threshold & Transition Repair", desc: "Wood-to-tile, wood-to-carpet, and wood-to-LVP transitions properly finished with matching reducers and T-moldings." },
];

export default function HardwoodRepairPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: breadcrumbSchema }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: serviceSchema }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: faqSchema }} />
      <main style={{ background: "var(--bg)", minHeight: "100vh" }}>
        <section style={{ padding: "100px 20px 60px", textAlign: "center", background: "linear-gradient(135deg, #2d2d2d 0%, #1a1a1a 100%)" }}>
          <div style={{ maxWidth: 800, margin: "0 auto" }}>
            <nav style={{ fontSize: "0.85rem", marginBottom: 20 }}><Link href="/" style={{ color: "rgba(255,255,255,0.6)", textDecoration: "none" }}>Home</Link><span style={{ color: "rgba(255,255,255,0.3)", margin: "0 8px" }}>/</span><span style={{ color: "var(--gold)" }}>Hardwood Repair</span></nav>
            <h1 style={{ fontSize: "clamp(1.8rem, 4vw, 2.8rem)", fontWeight: 900, color: "#fff", lineHeight: 1.2, marginBottom: 16 }}>Hardwood &amp; Engineered Wood Floor Repair in Washington County, MN</h1>
            <p style={{ fontSize: "1.1rem", color: "rgba(255,255,255,0.7)", maxWidth: 650, margin: "0 auto 24px", lineHeight: 1.6 }}>Scratched, dented, or water-damaged hardwood doesn&apos;t always need full refinishing or replacement. Chad&apos;s targeted repair approach fixes the problem area without disrupting your entire floor.</p>
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
            <h2 style={{ fontSize: "1.5rem", fontWeight: 800, marginBottom: 16, color: "#2d2d2d" }}>Why Repair Saves You Thousands</h2>
            <p style={{ fontSize: "1.05rem", color: "var(--text-dim)", lineHeight: 1.7, maxWidth: 600, margin: "0 auto" }}>Full hardwood refinishing runs $3–$8 per sq ft ($4,000–$8,000+ per room). Targeted board replacement or spot repair typically costs $299–$1199 — addressing only the damaged area.</p>
          </div>
        </section>
        <section style={{ padding: "48px 20px", maxWidth: 800, margin: "0 auto" }}>
          <div style={{ textAlign: "center", padding: "20px 24px", background: "rgba(245,166,35,0.06)", borderRadius: 12, border: "1px solid rgba(245,166,35,0.15)", maxWidth: 700, margin: "0 auto" }}>
            <p style={{ color: "var(--text-dim)", fontSize: "0.9rem", lineHeight: 1.6, margin: 0 }}>Chad installs <strong>pre-finished hardwood</strong> for new projects. For traditional solid hardwood installation or full-room refinishing, he has trusted professional recommendations.</p>
          </div>
        </section>
        <section style={{ padding: "40px 20px 60px", maxWidth: 800, margin: "0 auto" }}>
          <h2 style={{ fontSize: "1.8rem", fontWeight: 800, marginBottom: 32, color: "#2d2d2d" }}>Frequently Asked Questions</h2>
          <details style={{ marginBottom: 16, padding: "20px 24px", borderRadius: 12, background: "var(--bg-card)", border: "1px solid rgba(0,0,0,0.06)" }}><summary style={{ fontWeight: 700, fontSize: "1.05rem", cursor: "pointer", color: "#2d2d2d" }}>Can scratched hardwood floors be repaired without refinishing the whole room?</summary><p style={{ color: "var(--text-dim)", lineHeight: 1.7, marginTop: 12 }}>In many cases, yes. Deep scratches and gouges can be filled, sanded, and refinished in the affected area. Surface scratches can be buffed and re-coated. Chad will assess the damage and be honest about what&apos;s fixable.</p></details>
          <details style={{ marginBottom: 16, padding: "20px 24px", borderRadius: 12, background: "var(--bg-card)", border: "1px solid rgba(0,0,0,0.06)" }}><summary style={{ fontWeight: 700, fontSize: "1.05rem", cursor: "pointer", color: "#2d2d2d" }}>How much does hardwood floor repair cost in Washington County?</summary><p style={{ color: "var(--text-dim)", lineHeight: 1.7, marginTop: 12 }}>Most hardwood repairs range from $299–$1199. Full room refinishing can be $4,000–$8,000+. Chad&apos;s targeted approach addresses only the damaged area. Text photos to 651-353-6238 for a free estimate.</p></details>
          <details style={{ marginBottom: 16, padding: "20px 24px", borderRadius: 12, background: "var(--bg-card)", border: "1px solid rgba(0,0,0,0.06)" }}><summary style={{ fontWeight: 700, fontSize: "1.05rem", cursor: "pointer", color: "#2d2d2d" }}>Does Chad do hardwood floor installation?</summary><p style={{ color: "var(--text-dim)", lineHeight: 1.7, marginTop: 12 }}>Chad installs pre-finished hardwood. For traditional solid hardwood installation or full-room refinishing, he has trusted professional recommendations.</p></details>
        </section>
        <section style={{ padding: "40px 20px", background: "var(--bg-section)" }}><div style={{ maxWidth: 800, margin: "0 auto", textAlign: "center" }}><h2 style={{ fontSize: "1.3rem", fontWeight: 700, marginBottom: 12, color: "#2d2d2d" }}>Service Areas</h2><p style={{ color: "var(--text-dim)", lineHeight: 1.7 }}>All of Washington County MN, Woodbury, Stillwater, Hastings, Maplewood, and the east Twin Cities metro</p></div></section>
        <section style={{ padding: "60px 20px", textAlign: "center" }}><div style={{ maxWidth: 600, margin: "0 auto" }}><h2 style={{ fontSize: "1.8rem", fontWeight: 800, marginBottom: 12, color: "#2d2d2d" }}>Let&apos;s Find Solutions!</h2><p style={{ color: "var(--text-dim)", lineHeight: 1.7, marginBottom: 24 }}>Text photos of the flooring area from different angles + your <strong>first and last name</strong> to <strong>651-353-6238</strong>. Chad reviews and responds with a free estimate — usually same day.</p><div style={{ display: "flex", gap: 12, justifyContent: "center", flexWrap: "wrap" }}><a href="tel:6513536238" style={{ display: "inline-flex", alignItems: "center", gap: 8, padding: "14px 28px", borderRadius: 10, background: "var(--gold)", color: "#fff", fontWeight: 700, textDecoration: "none" }}>📞 Call 651-353-6238</a><a href="sms:6513536238" style={{ display: "inline-flex", alignItems: "center", gap: 8, padding: "14px 28px", borderRadius: 10, background: "transparent", color: "var(--gold-dark)", fontWeight: 700, textDecoration: "none", border: "2px solid var(--gold)" }}>📷 Text Photos Now</a></div><p style={{ fontSize: "0.82rem", color: "var(--text-light)", marginTop: 20 }}>Insured · 20+ years experience · Anthony Marie LLC · Woodbury, MN</p></div></section>
        <section style={{ padding: "40px 20px 60px", background: "var(--bg-section)" }}><div style={{ maxWidth: 800, margin: "0 auto", textAlign: "center" }}><h2 style={{ fontSize: "1.3rem", fontWeight: 700, marginBottom: 20, color: "#2d2d2d" }}>Other Services</h2><div style={{ display: "flex", gap: 12, justifyContent: "center", flexWrap: "wrap" }}><Link href="/carpet-repair-woodbury" style={{ padding: "8px 20px", borderRadius: 100, fontSize: "0.85rem", fontWeight: 600, color: "var(--gold-dark)", background: "rgba(245,166,35,0.1)", border: "1px solid rgba(245,166,35,0.2)", textDecoration: "none" }}>Carpet Repair</Link><Link href="/lvp-repair-stillwater" style={{ padding: "8px 20px", borderRadius: 100, fontSize: "0.85rem", fontWeight: 600, color: "var(--gold-dark)", background: "rgba(245,166,35,0.1)", border: "1px solid rgba(245,166,35,0.2)", textDecoration: "none" }}>LVP Repair</Link><Link href="/transition-repair" style={{ padding: "8px 20px", borderRadius: 100, fontSize: "0.85rem", fontWeight: 600, color: "var(--gold-dark)", background: "rgba(245,166,35,0.1)", border: "1px solid rgba(245,166,35,0.2)", textDecoration: "none" }}>Transition Repair</Link><Link href="/home-seller-flooring-repair" style={{ padding: "8px 20px", borderRadius: 100, fontSize: "0.85rem", fontWeight: 600, color: "var(--gold-dark)", background: "rgba(245,166,35,0.1)", border: "1px solid rgba(245,166,35,0.2)", textDecoration: "none" }}>Realtors &amp; Home Sellers</Link><Link href="/" style={{ padding: "8px 20px", borderRadius: 100, fontSize: "0.85rem", fontWeight: 600, color: "var(--gold-dark)", background: "rgba(245,166,35,0.1)", border: "1px solid rgba(245,166,35,0.2)", textDecoration: "none" }}>All Services</Link></div></div></section>
      </main>
    </>
  );
}
