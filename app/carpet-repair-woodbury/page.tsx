import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Carpet Repair Woodbury MN | Wrinkles, Pet Damage, Seam Fixes — Chad the Flooring Guy",
  description: "Expert carpet repair in Woodbury MN. Wrinkle removal, pet damage patches, seam repairs, re-stretching. 20+ years insured. Itemized quotes + DIY savings. Text photos: 651.353.6238.",
  alternates: { canonical: "https://chadtheflooringguy.vercel.app/carpet-repair-woodbury" },
};

export default function CarpetRepairWoodburyPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: "{\"@context\":\"https://schema.org\",\"@type\":\"BreadcrumbList\",\"itemListElement\":[{\"@type\":\"ListItem\",\"position\":1,\"name\":\"Home\",\"item\":\"https://chadtheflooringguy.vercel.app/\"},{\"@type\":\"ListItem\",\"position\":2,\"name\":\"Carpet Repair\",\"item\":\"https://chadtheflooringguy.vercel.app/carpet-repair-woodbury\"}]}" }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: "{\"@context\":\"https://schema.org\",\"@type\":\"Service\",\"name\":\"Carpet Repair\",\"provider\":{\"@type\":\"HomeAndConstructionBusiness\",\"name\":\"Chad the Flooring Guy\",\"telephone\":\"+1-651-353-6238\",\"address\":{\"@type\":\"PostalAddress\",\"addressLocality\":\"Woodbury\",\"addressRegion\":\"MN\"}},\"areaServed\":\"Woodbury MN, Oakdale MN, Lake Elmo MN, Cottage Grove MN, Washington County\"}" }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: "{\"@context\":\"https://schema.org\",\"@type\":\"FAQPage\",\"mainEntity\":[{\"@type\":\"Question\",\"name\":\"How much does carpet re-stretching cost in Woodbury?\",\"acceptedAnswer\":{\"@type\":\"Answer\",\"text\":\"Most carpet re-stretching jobs run $150–$350 per room. Chad provides itemized quotes so you see exactly what you're paying for. Text photos to 651-353-6238 for a free estimate.\"}},{\"@type\":\"Question\",\"name\":\"Can you fix carpet pet damage without replacing the whole carpet?\",\"acceptedAnswer\":{\"@type\":\"Answer\",\"text\":\"Yes — microwave carpet patching replaces just the damaged section using donor carpet from a closet or remnant. The patch is virtually invisible and costs a fraction of full replacement.\"}},{\"@type\":\"Question\",\"name\":\"How do I know if my carpet needs re-stretching vs replacement?\",\"acceptedAnswer\":{\"@type\":\"Answer\",\"text\":\"If your carpet has wrinkles or bumps but the pile is still in good condition, re-stretching will fix it. Chad will be honest — if the carpet is worn out, he'll tell you.\"}},{\"@type\":\"Question\",\"name\":\"Do you repair carpeted stairs?\",\"acceptedAnswer\":{\"@type\":\"Answer\",\"text\":\"Yes. Stair carpet repairs include re-stretching, patching damaged areas, and fixing loose or bunched treads. Stairs are a safety priority.\"}}]}" }} />
      <main style={{ background: "var(--bg)", minHeight: "100vh" }}>
        {/* Hero */}
        <section style={{ padding: "100px 20px 60px", textAlign: "center", background: "linear-gradient(135deg, #2d2d2d 0%, #1a1a1a 100%)" }}>
          <div style={{ maxWidth: 800, margin: "0 auto" }}>
            <nav style={{ fontSize: "0.85rem", marginBottom: 20 }}>
              <Link href="/" style={{ color: "rgba(255,255,255,0.6)", textDecoration: "none" }}>Home</Link>
              <span style={{ color: "rgba(255,255,255,0.3)", margin: "0 8px" }}>/</span>
              <span style={{ color: "var(--gold)" }}>Carpet Repair</span>
            </nav>
            <h1 style={{ fontSize: "clamp(1.8rem, 4vw, 2.8rem)", fontWeight: 900, color: "#fff", lineHeight: 1.2, marginBottom: 16 }}>
              Carpet Repair &amp; Re-Stretching — Woodbury, MN
            </h1>
            <p style={{ fontSize: "1.1rem", color: "rgba(255,255,255,0.7)", maxWidth: 600, margin: "0 auto 24px", lineHeight: 1.6 }}>
              Carpet wrinkles, pet damage, torn seams, burns, and stains don&apos;t mean you need new carpet. Chad specializes in targeted carpet repairs that extend your floor&apos;s life by years — at a fraction of the cost of replacement.
            </p>
            <div style={{ display: "flex", gap: 12, justifyContent: "center", flexWrap: "wrap" }}>
              <a href="tel:6513536238" style={{ display: "inline-flex", alignItems: "center", gap: 8, padding: "14px 28px", borderRadius: 10, background: "var(--gold)", color: "#fff", fontWeight: 700, textDecoration: "none" }}>
                📞 Call 651-353-6238
              </a>
              <a href="sms:6513536238" style={{ display: "inline-flex", alignItems: "center", gap: 8, padding: "14px 28px", borderRadius: 10, background: "transparent", color: "var(--gold)", fontWeight: 700, textDecoration: "none", border: "2px solid var(--gold)" }}>
                📷 Text Photos for Quote
              </a>
            </div>
          </div>
        </section>

        {/* Services */}
        <section style={{ padding: "60px 20px", maxWidth: 800, margin: "0 auto" }}>
          <h2 style={{ fontSize: "1.8rem", fontWeight: 800, marginBottom: 32, color: "#2d2d2d" }}>What We Fix</h2>
          <div style={{ display: "grid", gap: 20 }}>
            <div style={{ padding: "24px", borderRadius: 12, background: "var(--bg-card)", border: "1px solid rgba(0,0,0,0.06)", boxShadow: "0 1px 8px rgba(0,0,0,0.03)" }}>
              <h3 style={{ fontSize: "1.15rem", fontWeight: 700, marginBottom: 8, color: "#2d2d2d" }}>Carpet Re-Stretching</h3>
              <p style={{ color: "var(--text-dim)", lineHeight: 1.7, margin: 0 }}>Power stretching removes wrinkles, bumps, and ripples. Eliminates trip hazards and restores your carpet&apos;s flat, professional appearance. Most rooms completed same day.</p>
            </div>
            <div style={{ padding: "24px", borderRadius: 12, background: "var(--bg-card)", border: "1px solid rgba(0,0,0,0.06)", boxShadow: "0 1px 8px rgba(0,0,0,0.03)" }}>
              <h3 style={{ fontSize: "1.15rem", fontWeight: 700, marginBottom: 8, color: "#2d2d2d" }}>Pet Damage Repair</h3>
              <p style={{ color: "var(--text-dim)", lineHeight: 1.7, margin: 0 }}>Microwave carpet patching replaces damaged sections — chewed edges, urine damage, scratched areas — without re-carpeting the entire room.</p>
            </div>
            <div style={{ padding: "24px", borderRadius: 12, background: "var(--bg-card)", border: "1px solid rgba(0,0,0,0.06)", boxShadow: "0 1px 8px rgba(0,0,0,0.03)" }}>
              <h3 style={{ fontSize: "1.15rem", fontWeight: 700, marginBottom: 8, color: "#2d2d2d" }}>Seam Repair</h3>
              <p style={{ color: "var(--text-dim)", lineHeight: 1.7, margin: 0 }}>Separated seams re-bonded with proper seam tape and iron. Invisible when done right. Prevents further unraveling.</p>
            </div>
            <div style={{ padding: "24px", borderRadius: 12, background: "var(--bg-card)", border: "1px solid rgba(0,0,0,0.06)", boxShadow: "0 1px 8px rgba(0,0,0,0.03)" }}>
              <h3 style={{ fontSize: "1.15rem", fontWeight: 700, marginBottom: 8, color: "#2d2d2d" }}>Burn &amp; Stain Patching</h3>
              <p style={{ color: "var(--text-dim)", lineHeight: 1.7, margin: 0 }}>Small burns, bleach spots, and permanent stains patched with matching carpet. Donor carpet from closets or remnants.</p>
            </div>
            <div style={{ padding: "24px", borderRadius: 12, background: "var(--bg-card)", border: "1px solid rgba(0,0,0,0.06)", boxShadow: "0 1px 8px rgba(0,0,0,0.03)" }}>
              <h3 style={{ fontSize: "1.15rem", fontWeight: 700, marginBottom: 8, color: "#2d2d2d" }}>Carpet-to-Carpet Transitions</h3>
              <p style={{ color: "var(--text-dim)", lineHeight: 1.7, margin: 0 }}>Clean transitions between rooms, hallways, and stairs. Proper tack strip and threshold work.</p>
            </div>
          </div>
        </section>

        {/* Why Save */}
        <section style={{ padding: "48px 20px", background: "var(--bg-section)" }}>
          <div style={{ maxWidth: 800, margin: "0 auto", textAlign: "center" }}>
            <h2 style={{ fontSize: "1.5rem", fontWeight: 800, marginBottom: 16, color: "#2d2d2d" }}>Why This Saves You Money</h2>
            <p style={{ fontSize: "1.05rem", color: "var(--text-dim)", lineHeight: 1.7, maxWidth: 600, margin: "0 auto" }}>
              A typical full-room carpet replacement runs $1,200–$3,500. Chad&apos;s targeted carpet repairs usually run $150–$500 — saving you 70-90% while extending your carpet&apos;s life by 5-10 years.
            </p>
          </div>
        </section>

        {/* FAQ */}
        <section style={{ padding: "60px 20px", maxWidth: 800, margin: "0 auto" }}>
          <h2 style={{ fontSize: "1.8rem", fontWeight: 800, marginBottom: 32, color: "#2d2d2d" }}>Frequently Asked Questions</h2>
          <details style={{ marginBottom: 16, padding: "20px 24px", borderRadius: 12, background: "var(--bg-card)", border: "1px solid rgba(0,0,0,0.06)" }}>
            <summary style={{ fontWeight: 700, fontSize: "1.05rem", cursor: "pointer", color: "#2d2d2d" }}>How much does carpet re-stretching cost in Woodbury?</summary>
            <p style={{ color: "var(--text-dim)", lineHeight: 1.7, marginTop: 12 }}>Most carpet re-stretching jobs run $150–$350 per room. Chad provides itemized quotes so you see exactly what you&apos;re paying for. Text photos to 651-353-6238 for a free estimate.</p>
          </details>
          <details style={{ marginBottom: 16, padding: "20px 24px", borderRadius: 12, background: "var(--bg-card)", border: "1px solid rgba(0,0,0,0.06)" }}>
            <summary style={{ fontWeight: 700, fontSize: "1.05rem", cursor: "pointer", color: "#2d2d2d" }}>Can you fix carpet pet damage without replacing the whole carpet?</summary>
            <p style={{ color: "var(--text-dim)", lineHeight: 1.7, marginTop: 12 }}>Yes — microwave carpet patching replaces just the damaged section using donor carpet from a closet or remnant. The patch is virtually invisible and costs a fraction of full replacement.</p>
          </details>
          <details style={{ marginBottom: 16, padding: "20px 24px", borderRadius: 12, background: "var(--bg-card)", border: "1px solid rgba(0,0,0,0.06)" }}>
            <summary style={{ fontWeight: 700, fontSize: "1.05rem", cursor: "pointer", color: "#2d2d2d" }}>How do I know if my carpet needs re-stretching vs replacement?</summary>
            <p style={{ color: "var(--text-dim)", lineHeight: 1.7, marginTop: 12 }}>If your carpet has wrinkles or bumps but the pile is still in good condition, re-stretching will fix it. Chad will be honest — if the carpet is worn out, he&apos;ll tell you.</p>
          </details>
          <details style={{ marginBottom: 16, padding: "20px 24px", borderRadius: 12, background: "var(--bg-card)", border: "1px solid rgba(0,0,0,0.06)" }}>
            <summary style={{ fontWeight: 700, fontSize: "1.05rem", cursor: "pointer", color: "#2d2d2d" }}>Do you repair carpeted stairs?</summary>
            <p style={{ color: "var(--text-dim)", lineHeight: 1.7, marginTop: 12 }}>Yes. Stair carpet repairs include re-stretching, patching damaged areas, and fixing loose or bunched treads. Stairs are a safety priority.</p>
          </details>
        </section>

        {/* Service Areas */}
        <section style={{ padding: "40px 20px", background: "var(--bg-section)" }}>
          <div style={{ maxWidth: 800, margin: "0 auto", textAlign: "center" }}>
            <h2 style={{ fontSize: "1.3rem", fontWeight: 700, marginBottom: 12, color: "#2d2d2d" }}>Service Areas</h2>
            <p style={{ color: "var(--text-dim)", lineHeight: 1.7 }}>Woodbury MN, Oakdale MN, Lake Elmo MN, Cottage Grove MN, Washington County</p>
          </div>
        </section>

        {/* CTA */}
        <section style={{ padding: "60px 20px", textAlign: "center" }}>
          <div style={{ maxWidth: 600, margin: "0 auto" }}>
            <h2 style={{ fontSize: "1.8rem", fontWeight: 800, marginBottom: 12, color: "#2d2d2d" }}>Let&apos;s Find Solutions!</h2>
            <p style={{ color: "var(--text-dim)", lineHeight: 1.7, marginBottom: 24 }}>
              Text photos of the flooring area from different angles + your <strong>first and last name</strong> to <strong>651-353-6238</strong>. Chad reviews photos and responds with a free estimate — usually same day.
            </p>
            <div style={{ display: "flex", gap: 12, justifyContent: "center", flexWrap: "wrap" }}>
              <a href="tel:6513536238" style={{ display: "inline-flex", alignItems: "center", gap: 8, padding: "14px 28px", borderRadius: 10, background: "var(--gold)", color: "#fff", fontWeight: 700, textDecoration: "none" }}>
                📞 Call 651-353-6238
              </a>
              <a href="sms:6513536238" style={{ display: "inline-flex", alignItems: "center", gap: 8, padding: "14px 28px", borderRadius: 10, background: "transparent", color: "var(--gold-dark)", fontWeight: 700, textDecoration: "none", border: "2px solid var(--gold)" }}>
                📷 Text Photos Now
              </a>
            </div>
            <p style={{ fontSize: "0.82rem", color: "var(--text-light)", marginTop: 20 }}>
              Insured · 20+ years experience · Anthony Marie LLC · Woodbury, MN
            </p>
          </div>
        </section>

        {/* Related */}
        <section style={{ padding: "40px 20px 60px", background: "var(--bg-section)" }}>
          <div style={{ maxWidth: 800, margin: "0 auto", textAlign: "center" }}>
            <h2 style={{ fontSize: "1.3rem", fontWeight: 700, marginBottom: 20, color: "#2d2d2d" }}>Other Services</h2>
            <div style={{ display: "flex", gap: 12, justifyContent: "center", flexWrap: "wrap" }}>
              <Link href="/carpet-repair-woodbury" style={{ padding: "8px 20px", borderRadius: 100, fontSize: "0.85rem", fontWeight: 600, color: "var(--gold-dark)", background: "rgba(245,166,35,0.1)", border: "1px solid rgba(245,166,35,0.2)", textDecoration: "none" }}>Carpet Repair</Link>
              <Link href="/lvp-repair-stillwater" style={{ padding: "8px 20px", borderRadius: 100, fontSize: "0.85rem", fontWeight: 600, color: "var(--gold-dark)", background: "rgba(245,166,35,0.1)", border: "1px solid rgba(245,166,35,0.2)", textDecoration: "none" }}>LVP Repair</Link>
              <Link href="/hardwood-repair" style={{ padding: "8px 20px", borderRadius: 100, fontSize: "0.85rem", fontWeight: 600, color: "var(--gold-dark)", background: "rgba(245,166,35,0.1)", border: "1px solid rgba(245,166,35,0.2)", textDecoration: "none" }}>Hardwood Repair</Link>
              <Link href="/transition-repair" style={{ padding: "8px 20px", borderRadius: 100, fontSize: "0.85rem", fontWeight: 600, color: "var(--gold-dark)", background: "rgba(245,166,35,0.1)", border: "1px solid rgba(245,166,35,0.2)", textDecoration: "none" }}>Transition Repair</Link>
              <Link href="/" style={{ padding: "8px 20px", borderRadius: 100, fontSize: "0.85rem", fontWeight: 600, color: "var(--gold-dark)", background: "rgba(245,166,35,0.1)", border: "1px solid rgba(245,166,35,0.2)", textDecoration: "none" }}>All Services</Link>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
