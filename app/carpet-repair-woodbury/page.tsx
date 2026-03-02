import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Carpet Repair & Re-Stretching Woodbury MN | Chad the Flooring Guy",
  description: "Expert carpet wrinkle removal, pet damage patches, seam repair in Woodbury MN. Radio-wave seaming for invisible patches. 20+ years insured. Text photos: 651.353.6238.",
  alternates: { canonical: "https://chadtheflooringguy.vercel.app/carpet-repair-woodbury" },
};

const breadcrumbSchema = JSON.stringify({
  "@context": "https://schema.org", "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://chadtheflooringguy.vercel.app/" },
    { "@type": "ListItem", position: 2, name: "Carpet Repair", item: "https://chadtheflooringguy.vercel.app/carpet-repair-woodbury" },
  ],
});

const serviceSchema = JSON.stringify({
  "@context": "https://schema.org", "@type": "Service",
  name: "Carpet Repair & Re-Stretching",
  provider: { "@type": "HomeAndConstructionBusiness", name: "Chad Bublitz – The Flooring Guy", telephone: "+1-651-353-6238", address: { "@type": "PostalAddress", addressLocality: "Woodbury", addressRegion: "MN" } },
  areaServed: "Woodbury MN, Oakdale MN, Lake Elmo MN, Cottage Grove MN, Washington County",
  description: "Expert carpet wrinkle removal, pet damage patches, seam repair. Radio-wave seaming for invisible patches. Power stretching, burn and stain patching, stair carpet repair.",
});

const faqSchema = JSON.stringify({
  "@context": "https://schema.org", "@type": "FAQPage",
  mainEntity: [
    { "@type": "Question", name: "How much does carpet repair cost in Woodbury MN?", acceptedAnswer: { "@type": "Answer", text: "Most carpet repairs range from $149–$499 depending on the issue. Carpet restretching is typically $149–$349 per room, pet damage patches $149–$499, and seam repairs $99–$299. Chad provides transparent itemized quotes so you see every line item. Text photos to 651-353-6238 for a free estimate." } },
    { "@type": "Question", name: "Can carpet wrinkles be fixed without replacing the carpet?", acceptedAnswer: { "@type": "Answer", text: "Yes. Power stretching removes wrinkles, bumps, and ripples by re-tensioning the carpet over the tack strips. This extends your carpet's life by years and eliminates trip hazards. Most rooms completed same day." } },
    { "@type": "Question", name: "How does radio-wave carpet patching work?", acceptedAnswer: { "@type": "Answer", text: "Chad uses a professional radio-wave seaming tool that bonds carpet patches from the top of the surface — no heat touches the fibers, creating invisible repairs with no smoke or odor. The radio-wave energy activates specially engineered seam tape underneath, bonding the new patch seamlessly to the existing carpet." } },
  ],
});

const services = [
  { name: "Carpet Wrinkle & Bump Removal", desc: "Power stretching removes wrinkles, bumps, and ripples by re-tensioning carpet over the tack strips. Eliminates trip hazards and restores that flat, professional appearance. Most rooms completed same day." },
  { name: "Pet Damage Patching", desc: "Radio-wave carpet seaming repairs damaged sections — chewed edges, urine damage, scratched areas — by bonding replacement carpet from the top. No heat touches the fibers, so there's no scorching, smoke, or odor. The patch is virtually invisible." },
  { name: "Seam Repair", desc: "Separated seams re-bonded with proper seam tape and professional equipment. Invisible when done right. Prevents further unraveling and extends carpet life." },
  { name: "Burn & Stain Patching", desc: "Small burns, bleach spots, and permanent stains patched with matching carpet. Donor carpet sourced from closets or remnants for a seamless color match." },
  { name: "Stair Carpet Repair", desc: "Re-stretching, patching, and fixing loose or bunched treads on carpeted stairs. Stairs are a safety priority — loose carpet on stairs is a serious fall risk." },
];

export default function CarpetRepairWoodburyPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: breadcrumbSchema }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: serviceSchema }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: faqSchema }} />
      <main style={{ background: "var(--bg)", minHeight: "100vh" }}>
        <section style={{ padding: "100px 20px 60px", textAlign: "center", background: "linear-gradient(135deg, #2d2d2d 0%, #1a1a1a 100%)" }}>
          <div style={{ maxWidth: 800, margin: "0 auto" }}>
            <nav style={{ fontSize: "0.85rem", marginBottom: 20 }}>
              <Link href="/" style={{ color: "rgba(255,255,255,0.6)", textDecoration: "none" }}>Home</Link>
              <span style={{ color: "rgba(255,255,255,0.3)", margin: "0 8px" }}>/</span>
              <span style={{ color: "var(--gold)" }}>Carpet Repair</span>
            </nav>
            <h1 style={{ fontSize: "clamp(1.8rem, 4vw, 2.8rem)", fontWeight: 900, color: "#fff", lineHeight: 1.2, marginBottom: 16 }}>
              Carpet Repair &amp; Re-Stretching in Woodbury, MN
            </h1>
            <p style={{ fontSize: "1.1rem", color: "rgba(255,255,255,0.7)", maxWidth: 650, margin: "0 auto 24px", lineHeight: 1.6 }}>
              Carpet wrinkles, pet damage, torn seams, burns, and stains don&apos;t mean you need new carpet. Chad specializes in targeted carpet repairs that extend your floor&apos;s life by years — at a fraction of the cost of replacement.
            </p>
            <div style={{ display: "flex", gap: 12, justifyContent: "center", flexWrap: "wrap" }}>
              <a href="tel:6513536238" style={{ display: "inline-flex", alignItems: "center", gap: 8, padding: "14px 28px", borderRadius: 10, background: "var(--gold)", color: "#fff", fontWeight: 700, textDecoration: "none" }}>📞 Call 651-353-6238</a>
              <a href="sms:6513536238" style={{ display: "inline-flex", alignItems: "center", gap: 8, padding: "14px 28px", borderRadius: 10, background: "transparent", color: "var(--gold)", fontWeight: 700, textDecoration: "none", border: "2px solid var(--gold)" }}>📷 Text Photos for Quote</a>
            </div>
          </div>
        </section>

        <section style={{ padding: "60px 20px", maxWidth: 800, margin: "0 auto" }}>
          <h2 style={{ fontSize: "1.8rem", fontWeight: 800, marginBottom: 32, color: "#2d2d2d" }}>What We Fix</h2>
          <div style={{ display: "grid", gap: 20 }}>
            {services.map((s) => (
              <div key={s.name} style={{ padding: "24px", borderRadius: 12, background: "var(--bg-card)", border: "1px solid rgba(0,0,0,0.06)", boxShadow: "0 1px 8px rgba(0,0,0,0.03)" }}>
                <h3 style={{ fontSize: "1.15rem", fontWeight: 700, marginBottom: 8, color: "#2d2d2d" }}>{s.name}</h3>
                <p style={{ color: "var(--text-dim)", lineHeight: 1.7, margin: 0 }}>{s.desc}</p>
              </div>
            ))}
          </div>
        </section>

        <section style={{ padding: "48px 20px", background: "var(--bg-section)" }}>
          <div style={{ maxWidth: 800, margin: "0 auto", textAlign: "center" }}>
            <h2 style={{ fontSize: "1.5rem", fontWeight: 800, marginBottom: 16, color: "#2d2d2d" }}>Why Repair Saves You Thousands</h2>
            <p style={{ fontSize: "1.05rem", color: "var(--text-dim)", lineHeight: 1.7, maxWidth: 600, margin: "0 auto" }}>
              A typical full-room carpet replacement runs $3,500–$6,000. Chad&apos;s targeted carpet repairs usually run $149–$499 — saving you 70-90% while extending your carpet&apos;s life by 5-10 years. Chad provides transparent itemized quotes so you see every line item and can choose what to DIY to save even more.
            </p>
          </div>
        </section>

        <section style={{ padding: "60px 20px", maxWidth: 800, margin: "0 auto" }}>
          <h2 style={{ fontSize: "1.8rem", fontWeight: 800, marginBottom: 32, color: "#2d2d2d" }}>Frequently Asked Questions</h2>
          <details style={{ marginBottom: 16, padding: "20px 24px", borderRadius: 12, background: "var(--bg-card)", border: "1px solid rgba(0,0,0,0.06)" }}>
            <summary style={{ fontWeight: 700, fontSize: "1.05rem", cursor: "pointer", color: "#2d2d2d" }}>How much does carpet repair cost in Woodbury MN?</summary>
            <p style={{ color: "var(--text-dim)", lineHeight: 1.7, marginTop: 12 }}>Most carpet repairs range from $149–$499. Carpet restretching is typically $149–$349 per room, pet damage patches $149–$499, and seam repairs $99–$299. Chad provides transparent itemized quotes. Text photos to 651-353-6238 for a free estimate.</p>
          </details>
          <details style={{ marginBottom: 16, padding: "20px 24px", borderRadius: 12, background: "var(--bg-card)", border: "1px solid rgba(0,0,0,0.06)" }}>
            <summary style={{ fontWeight: 700, fontSize: "1.05rem", cursor: "pointer", color: "#2d2d2d" }}>Can carpet wrinkles be fixed without replacing the carpet?</summary>
            <p style={{ color: "var(--text-dim)", lineHeight: 1.7, marginTop: 12 }}>Yes. Power stretching removes wrinkles, bumps, and ripples by re-tensioning the carpet over the tack strips. This extends your carpet&apos;s life by years and eliminates trip hazards. Most rooms completed same day.</p>
          </details>
          <details style={{ marginBottom: 16, padding: "20px 24px", borderRadius: 12, background: "var(--bg-card)", border: "1px solid rgba(0,0,0,0.06)" }}>
            <summary style={{ fontWeight: 700, fontSize: "1.05rem", cursor: "pointer", color: "#2d2d2d" }}>How does radio-wave carpet patching work?</summary>
            <p style={{ color: "var(--text-dim)", lineHeight: 1.7, marginTop: 12 }}>Chad uses a professional radio-wave seaming tool that bonds carpet patches from the top of the surface — no heat touches the fibers, creating invisible repairs with no smoke or odor. The radio-wave energy activates specially engineered seam tape underneath, bonding the new patch seamlessly to the existing carpet.</p>
          </details>
        </section>

        <section style={{ padding: "40px 20px", background: "var(--bg-section)" }}>
          <div style={{ maxWidth: 800, margin: "0 auto", textAlign: "center" }}>
            <h2 style={{ fontSize: "1.3rem", fontWeight: 700, marginBottom: 12, color: "#2d2d2d" }}>Service Areas</h2>
            <p style={{ color: "var(--text-dim)", lineHeight: 1.7 }}>Woodbury MN, Oakdale MN, Lake Elmo MN, Cottage Grove MN, and surrounding Washington County</p>
          </div>
        </section>

        <section style={{ padding: "60px 20px", textAlign: "center" }}>
          <div style={{ maxWidth: 600, margin: "0 auto" }}>
            <h2 style={{ fontSize: "1.8rem", fontWeight: 800, marginBottom: 12, color: "#2d2d2d" }}>Let&apos;s Find Solutions!</h2>
            <p style={{ color: "var(--text-dim)", lineHeight: 1.7, marginBottom: 24 }}>Text photos of the carpet area from different angles + your <strong>first and last name</strong> to <strong>651-353-6238</strong>. Chad reviews photos and responds with a free estimate — usually same day.</p>
            <div style={{ display: "flex", gap: 12, justifyContent: "center", flexWrap: "wrap" }}>
              <a href="tel:6513536238" style={{ display: "inline-flex", alignItems: "center", gap: 8, padding: "14px 28px", borderRadius: 10, background: "var(--gold)", color: "#fff", fontWeight: 700, textDecoration: "none" }}>📞 Call 651-353-6238</a>
              <a href="sms:6513536238" style={{ display: "inline-flex", alignItems: "center", gap: 8, padding: "14px 28px", borderRadius: 10, background: "transparent", color: "var(--gold-dark)", fontWeight: 700, textDecoration: "none", border: "2px solid var(--gold)" }}>📷 Text Photos Now</a>
            </div>
            <p style={{ fontSize: "0.82rem", color: "var(--text-light)", marginTop: 20 }}>Insured · 20+ years experience · Anthony Marie LLC · Woodbury, MN</p>
          </div>
        </section>

        <section style={{ padding: "40px 20px 60px", background: "var(--bg-section)" }}>
          <div style={{ maxWidth: 800, margin: "0 auto", textAlign: "center" }}>
            <h2 style={{ fontSize: "1.3rem", fontWeight: 700, marginBottom: 20, color: "#2d2d2d" }}>Other Services</h2>
            <div style={{ display: "flex", gap: 12, justifyContent: "center", flexWrap: "wrap" }}>
              <Link href="/lvp-repair-stillwater" style={{ padding: "8px 20px", borderRadius: 100, fontSize: "0.85rem", fontWeight: 600, color: "var(--gold-dark)", background: "rgba(245,166,35,0.1)", border: "1px solid rgba(245,166,35,0.2)", textDecoration: "none" }}>LVP Repair</Link>
              <Link href="/hardwood-repair" style={{ padding: "8px 20px", borderRadius: 100, fontSize: "0.85rem", fontWeight: 600, color: "var(--gold-dark)", background: "rgba(245,166,35,0.1)", border: "1px solid rgba(245,166,35,0.2)", textDecoration: "none" }}>Hardwood Repair</Link>
              <Link href="/transition-repair" style={{ padding: "8px 20px", borderRadius: 100, fontSize: "0.85rem", fontWeight: 600, color: "var(--gold-dark)", background: "rgba(245,166,35,0.1)", border: "1px solid rgba(245,166,35,0.2)", textDecoration: "none" }}>Transition Repair</Link>
              <Link href="/home-seller-flooring-repair" style={{ padding: "8px 20px", borderRadius: 100, fontSize: "0.85rem", fontWeight: 600, color: "var(--gold-dark)", background: "rgba(245,166,35,0.1)", border: "1px solid rgba(245,166,35,0.2)", textDecoration: "none" }}>Realtors &amp; Home Sellers</Link>
              <Link href="/" style={{ padding: "8px 20px", borderRadius: 100, fontSize: "0.85rem", fontWeight: 600, color: "var(--gold-dark)", background: "rgba(245,166,35,0.1)", border: "1px solid rgba(245,166,35,0.2)", textDecoration: "none" }}>All Services</Link>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
