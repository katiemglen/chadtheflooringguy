import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Hardwood Floor Repair Washington County MN | Board Replacement, Scratches — Chad Bublitz",
  description: "Hardwood and engineered wood floor repair in Washington County MN. Board replacement, scratch repair, water damage fixes. 20+ years insured. Text photos: 651.353.6238.",
  alternates: { canonical: "https://chadtheflooringguy.vercel.app/hardwood-repair" },
};

export default function HardwoodRepairPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: "{\"@context\":\"https://schema.org\",\"@type\":\"BreadcrumbList\",\"itemListElement\":[{\"@type\":\"ListItem\",\"position\":1,\"name\":\"Home\",\"item\":\"https://chadtheflooringguy.vercel.app/\"},{\"@type\":\"ListItem\",\"position\":2,\"name\":\"Hardwood Repair\",\"item\":\"https://chadtheflooringguy.vercel.app/hardwood-repair\"}]}" }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: "{\"@context\":\"https://schema.org\",\"@type\":\"Service\",\"name\":\"Hardwood Repair\",\"provider\":{\"@type\":\"HomeAndConstructionBusiness\",\"name\":\"Chad the Flooring Guy\",\"telephone\":\"+1-651-353-6238\",\"address\":{\"@type\":\"PostalAddress\",\"addressLocality\":\"Woodbury\",\"addressRegion\":\"MN\"}},\"areaServed\":\"Washington County MN, Woodbury MN, Stillwater MN, Hastings MN, Maplewood MN\"}" }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: "{\"@context\":\"https://schema.org\",\"@type\":\"FAQPage\",\"mainEntity\":[{\"@type\":\"Question\",\"name\":\"Can you replace a few hardwood boards without refinishing the whole floor?\",\"acceptedAnswer\":{\"@type\":\"Answer\",\"text\":\"Yes. Chad removes damaged boards, installs matching replacements, and stains/finishes them to blend with the existing floor.\"}},{\"@type\":\"Question\",\"name\":\"How do you match the stain color on old hardwood?\",\"acceptedAnswer\":{\"@type\":\"Answer\",\"text\":\"Chad has 20+ years of experience color-matching. He tests stain samples on-site against your existing floor to get the closest match.\"}},{\"@type\":\"Question\",\"name\":\"Can water-damaged hardwood be saved?\",\"acceptedAnswer\":{\"@type\":\"Answer\",\"text\":\"It depends on severity. If boards are cupped or warped, they're replaced. If surface-level, sanding and refinishing may work. Chad will be honest.\"}},{\"@type\":\"Question\",\"name\":\"Do you repair engineered wood floors?\",\"acceptedAnswer\":{\"@type\":\"Answer\",\"text\":\"Yes — including delaminating layers, chipped edges, and boards that have separated from the subfloor.\"}}]}" }} />
      <main style={{ background: "var(--bg)", minHeight: "100vh" }}>
        {/* Hero */}
        <section style={{ padding: "100px 20px 60px", textAlign: "center", background: "linear-gradient(135deg, #2d2d2d 0%, #1a1a1a 100%)" }}>
          <div style={{ maxWidth: 800, margin: "0 auto" }}>
            <nav style={{ fontSize: "0.85rem", marginBottom: 20 }}>
              <Link href="/" style={{ color: "rgba(255,255,255,0.6)", textDecoration: "none" }}>Home</Link>
              <span style={{ color: "rgba(255,255,255,0.3)", margin: "0 8px" }}>/</span>
              <span style={{ color: "var(--gold)" }}>Hardwood Repair</span>
            </nav>
            <h1 style={{ fontSize: "clamp(1.8rem, 4vw, 2.8rem)", fontWeight: 900, color: "#fff", lineHeight: 1.2, marginBottom: 16 }}>
              Hardwood &amp; Engineered Wood Floor Repair — Washington County, MN
            </h1>
            <p style={{ fontSize: "1.1rem", color: "rgba(255,255,255,0.7)", maxWidth: 600, margin: "0 auto 24px", lineHeight: 1.6 }}>
              Scratched, dented, or water-damaged hardwood doesn&apos;t always need full refinishing or replacement. Chad&apos;s targeted repair approach fixes the problem area without disrupting your entire floor.
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
              <h3 style={{ fontSize: "1.15rem", fontWeight: 700, marginBottom: 8, color: "#2d2d2d" }}>Board Replacement</h3>
              <p style={{ color: "var(--text-dim)", lineHeight: 1.7, margin: 0 }}>Individual damaged boards removed and replaced with matching wood. Stained and finished to blend seamlessly with the surrounding floor.</p>
            </div>
            <div style={{ padding: "24px", borderRadius: 12, background: "var(--bg-card)", border: "1px solid rgba(0,0,0,0.06)", boxShadow: "0 1px 8px rgba(0,0,0,0.03)" }}>
              <h3 style={{ fontSize: "1.15rem", fontWeight: 700, marginBottom: 8, color: "#2d2d2d" }}>Scratch &amp; Dent Repair</h3>
              <p style={{ color: "var(--text-dim)", lineHeight: 1.7, margin: 0 }}>Deep scratches, dents, and gouges filled, sanded, and refinished. Surface scratches buffed and re-coated.</p>
            </div>
            <div style={{ padding: "24px", borderRadius: 12, background: "var(--bg-card)", border: "1px solid rgba(0,0,0,0.06)", boxShadow: "0 1px 8px rgba(0,0,0,0.03)" }}>
              <h3 style={{ fontSize: "1.15rem", fontWeight: 700, marginBottom: 8, color: "#2d2d2d" }}>Water Damage Repair</h3>
              <p style={{ color: "var(--text-dim)", lineHeight: 1.7, margin: 0 }}>Warped, cupped, or blackened boards from water damage replaced. Subfloor dried and treated to prevent mold.</p>
            </div>
            <div style={{ padding: "24px", borderRadius: 12, background: "var(--bg-card)", border: "1px solid rgba(0,0,0,0.06)", boxShadow: "0 1px 8px rgba(0,0,0,0.03)" }}>
              <h3 style={{ fontSize: "1.15rem", fontWeight: 700, marginBottom: 8, color: "#2d2d2d" }}>Engineered Wood Fixes</h3>
              <p style={{ color: "var(--text-dim)", lineHeight: 1.7, margin: 0 }}>Delaminating, chipping, or separating engineered planks repaired or replaced. Click-lock and glue-down systems.</p>
            </div>
            <div style={{ padding: "24px", borderRadius: 12, background: "var(--bg-card)", border: "1px solid rgba(0,0,0,0.06)", boxShadow: "0 1px 8px rgba(0,0,0,0.03)" }}>
              <h3 style={{ fontSize: "1.15rem", fontWeight: 700, marginBottom: 8, color: "#2d2d2d" }}>Threshold &amp; Transition Repair</h3>
              <p style={{ color: "var(--text-dim)", lineHeight: 1.7, margin: 0 }}>Wood-to-tile, wood-to-carpet, and wood-to-LVP transitions properly finished with matching reducers and T-moldings.</p>
            </div>
          </div>
        </section>

        {/* Why Save */}
        <section style={{ padding: "48px 20px", background: "var(--bg-section)" }}>
          <div style={{ maxWidth: 800, margin: "0 auto", textAlign: "center" }}>
            <h2 style={{ fontSize: "1.5rem", fontWeight: 800, marginBottom: 16, color: "#2d2d2d" }}>Why This Saves You Money</h2>
            <p style={{ fontSize: "1.05rem", color: "var(--text-dim)", lineHeight: 1.7, maxWidth: 600, margin: "0 auto" }}>
              Full hardwood refinishing runs $3–$8 per sq ft ($1,500–$4,000+ per room). Targeted board replacement or spot repair typically costs $300–$1,200 — addressing only the damaged area.
            </p>
          </div>
        </section>

        {/* FAQ */}
        <section style={{ padding: "60px 20px", maxWidth: 800, margin: "0 auto" }}>
          <h2 style={{ fontSize: "1.8rem", fontWeight: 800, marginBottom: 32, color: "#2d2d2d" }}>Frequently Asked Questions</h2>
          <details style={{ marginBottom: 16, padding: "20px 24px", borderRadius: 12, background: "var(--bg-card)", border: "1px solid rgba(0,0,0,0.06)" }}>
            <summary style={{ fontWeight: 700, fontSize: "1.05rem", cursor: "pointer", color: "#2d2d2d" }}>Can you replace a few hardwood boards without refinishing the whole floor?</summary>
            <p style={{ color: "var(--text-dim)", lineHeight: 1.7, marginTop: 12 }}>Yes. Chad removes damaged boards, installs matching replacements, and stains/finishes them to blend with the existing floor.</p>
          </details>
          <details style={{ marginBottom: 16, padding: "20px 24px", borderRadius: 12, background: "var(--bg-card)", border: "1px solid rgba(0,0,0,0.06)" }}>
            <summary style={{ fontWeight: 700, fontSize: "1.05rem", cursor: "pointer", color: "#2d2d2d" }}>How do you match the stain color on old hardwood?</summary>
            <p style={{ color: "var(--text-dim)", lineHeight: 1.7, marginTop: 12 }}>Chad has 20+ years of experience color-matching. He tests stain samples on-site against your existing floor to get the closest match.</p>
          </details>
          <details style={{ marginBottom: 16, padding: "20px 24px", borderRadius: 12, background: "var(--bg-card)", border: "1px solid rgba(0,0,0,0.06)" }}>
            <summary style={{ fontWeight: 700, fontSize: "1.05rem", cursor: "pointer", color: "#2d2d2d" }}>Can water-damaged hardwood be saved?</summary>
            <p style={{ color: "var(--text-dim)", lineHeight: 1.7, marginTop: 12 }}>It depends on severity. If boards are cupped or warped, they&apos;re replaced. If surface-level, sanding and refinishing may work. Chad will be honest.</p>
          </details>
          <details style={{ marginBottom: 16, padding: "20px 24px", borderRadius: 12, background: "var(--bg-card)", border: "1px solid rgba(0,0,0,0.06)" }}>
            <summary style={{ fontWeight: 700, fontSize: "1.05rem", cursor: "pointer", color: "#2d2d2d" }}>Do you repair engineered wood floors?</summary>
            <p style={{ color: "var(--text-dim)", lineHeight: 1.7, marginTop: 12 }}>Yes — including delaminating layers, chipped edges, and boards that have separated from the subfloor.</p>
          </details>
        </section>

        {/* Service Areas */}
        <section style={{ padding: "40px 20px", background: "var(--bg-section)" }}>
          <div style={{ maxWidth: 800, margin: "0 auto", textAlign: "center" }}>
            <h2 style={{ fontSize: "1.3rem", fontWeight: 700, marginBottom: 12, color: "#2d2d2d" }}>Service Areas</h2>
            <p style={{ color: "var(--text-dim)", lineHeight: 1.7 }}>Washington County MN, Woodbury MN, Stillwater MN, Hastings MN, Maplewood MN</p>
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
