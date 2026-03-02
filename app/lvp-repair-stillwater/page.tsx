import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "LVP Repair Stillwater MN | Single-Board Replacement, Water Damage — Chad Bublitz",
  description: "LVP and vinyl plank repair in Stillwater MN & Washington County. Single-board replacement, click-lock fixes, water damage. 20+ years insured. Text photos: 651.353.6238.",
  alternates: { canonical: "https://chadtheflooringguy.vercel.app/lvp-repair-stillwater" },
};

export default function LvpRepairStillwaterPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: "{\"@context\":\"https://schema.org\",\"@type\":\"BreadcrumbList\",\"itemListElement\":[{\"@type\":\"ListItem\",\"position\":1,\"name\":\"Home\",\"item\":\"https://chadtheflooringguy.vercel.app/\"},{\"@type\":\"ListItem\",\"position\":2,\"name\":\"LVP Repair\",\"item\":\"https://chadtheflooringguy.vercel.app/lvp-repair-stillwater\"}]}" }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: "{\"@context\":\"https://schema.org\",\"@type\":\"Service\",\"name\":\"LVP Repair\",\"provider\":{\"@type\":\"HomeAndConstructionBusiness\",\"name\":\"Chad the Flooring Guy\",\"telephone\":\"+1-651-353-6238\",\"address\":{\"@type\":\"PostalAddress\",\"addressLocality\":\"Woodbury\",\"addressRegion\":\"MN\"}},\"areaServed\":\"Stillwater MN, Woodbury MN, Hudson WI, Lake Elmo MN, Washington County\"}" }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: "{\"@context\":\"https://schema.org\",\"@type\":\"FAQPage\",\"mainEntity\":[{\"@type\":\"Question\",\"name\":\"Can you replace just one vinyl plank without tearing up the whole floor?\",\"acceptedAnswer\":{\"@type\":\"Answer\",\"text\":\"Yes — that's Chad's specialty. Single-board removal and replacement using specialized tools. Most jobs done in under 2 hours.\"}},{\"@type\":\"Question\",\"name\":\"My LVP is buckling after water damage. Can it be fixed?\",\"acceptedAnswer\":{\"@type\":\"Answer\",\"text\":\"Usually yes. Damaged boards are removed, the subfloor is dried and assessed, and new matching boards are installed.\"}},{\"@type\":\"Question\",\"name\":\"How much does LVP repair cost vs replacement?\",\"acceptedAnswer\":{\"@type\":\"Answer\",\"text\":\"Single-board replacement typically runs $200–$800. Full room replacement can be $3,500–$8,500. Chad saves you thousands with targeted repairs.\"}},{\"@type\":\"Question\",\"name\":\"Do you carry replacement LVP boards or do I need to provide them?\",\"acceptedAnswer\":{\"@type\":\"Answer\",\"text\":\"If you have leftover planks from the original install, great. If not, Chad can help source matching boards.\"}}]}" }} />
      <main style={{ background: "var(--bg)", minHeight: "100vh" }}>
        {/* Hero */}
        <section style={{ padding: "100px 20px 60px", textAlign: "center", background: "linear-gradient(135deg, #2d2d2d 0%, #1a1a1a 100%)" }}>
          <div style={{ maxWidth: 800, margin: "0 auto" }}>
            <nav style={{ fontSize: "0.85rem", marginBottom: 20 }}>
              <Link href="/" style={{ color: "rgba(255,255,255,0.6)", textDecoration: "none" }}>Home</Link>
              <span style={{ color: "rgba(255,255,255,0.3)", margin: "0 8px" }}>/</span>
              <span style={{ color: "var(--gold)" }}>LVP Repair</span>
            </nav>
            <h1 style={{ fontSize: "clamp(1.8rem, 4vw, 2.8rem)", fontWeight: 900, color: "#fff", lineHeight: 1.2, marginBottom: 16 }}>
              LVP &amp; Vinyl Plank Repair — Stillwater, MN &amp; Washington County
            </h1>
            <p style={{ fontSize: "1.1rem", color: "rgba(255,255,255,0.7)", maxWidth: 600, margin: "0 auto 24px", lineHeight: 1.6 }}>
              A scratched, chipped, or water-damaged vinyl plank doesn&apos;t mean tearing up the whole floor. Chad&apos;s specialized approach removes and replaces individual boards — saving you thousands compared to full replacement.
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
              <h3 style={{ fontSize: "1.15rem", fontWeight: 700, marginBottom: 8, color: "#2d2d2d" }}>Single-Board Replacement</h3>
              <p style={{ color: "var(--text-dim)", lineHeight: 1.7, margin: 0 }}>Remove and replace individual damaged planks without disturbing the surrounding floor. Click-lock and glue-down systems. The #1 money-saver in LVP repair.</p>
            </div>
            <div style={{ padding: "24px", borderRadius: 12, background: "var(--bg-card)", border: "1px solid rgba(0,0,0,0.06)", boxShadow: "0 1px 8px rgba(0,0,0,0.03)" }}>
              <h3 style={{ fontSize: "1.15rem", fontWeight: 700, marginBottom: 8, color: "#2d2d2d" }}>Water Damage Repair</h3>
              <p style={{ color: "var(--text-dim)", lineHeight: 1.7, margin: 0 }}>Warped, buckled, or swollen planks from water damage replaced. Subfloor assessment and repair included when needed.</p>
            </div>
            <div style={{ padding: "24px", borderRadius: 12, background: "var(--bg-card)", border: "1px solid rgba(0,0,0,0.06)", boxShadow: "0 1px 8px rgba(0,0,0,0.03)" }}>
              <h3 style={{ fontSize: "1.15rem", fontWeight: 700, marginBottom: 8, color: "#2d2d2d" }}>Click-Lock System Fixes</h3>
              <p style={{ color: "var(--text-dim)", lineHeight: 1.7, margin: 0 }}>Planks that have separated, popped up, or won&apos;t stay locked are properly re-engaged or replaced with correct technique.</p>
            </div>
            <div style={{ padding: "24px", borderRadius: 12, background: "var(--bg-card)", border: "1px solid rgba(0,0,0,0.06)", boxShadow: "0 1px 8px rgba(0,0,0,0.03)" }}>
              <h3 style={{ fontSize: "1.15rem", fontWeight: 700, marginBottom: 8, color: "#2d2d2d" }}>Transition Strip Repair</h3>
              <p style={{ color: "var(--text-dim)", lineHeight: 1.7, margin: 0 }}>Broken, loose, or missing transition strips between LVP and other flooring types replaced and properly secured.</p>
            </div>
            <div style={{ padding: "24px", borderRadius: 12, background: "var(--bg-card)", border: "1px solid rgba(0,0,0,0.06)", boxShadow: "0 1px 8px rgba(0,0,0,0.03)" }}>
              <h3 style={{ fontSize: "1.15rem", fontWeight: 700, marginBottom: 8, color: "#2d2d2d" }}>Subfloor Leveling</h3>
              <p style={{ color: "var(--text-dim)", lineHeight: 1.7, margin: 0 }}>Uneven subfloor causing planks to rock or gap? Leveling compound applied before repair for a permanently flat result.</p>
            </div>
          </div>
        </section>

        {/* Why Save */}
        <section style={{ padding: "48px 20px", background: "var(--bg-section)" }}>
          <div style={{ maxWidth: 800, margin: "0 auto", textAlign: "center" }}>
            <h2 style={{ fontSize: "1.5rem", fontWeight: 800, marginBottom: 16, color: "#2d2d2d" }}>Why This Saves You Money</h2>
            <p style={{ fontSize: "1.05rem", color: "var(--text-dim)", lineHeight: 1.7, maxWidth: 600, margin: "0 auto" }}>
              Full LVP floor replacement runs $3,500–$8,500 for an average room. Chad&apos;s targeted board replacement typically costs $200–$800 — and you&apos;d never know the difference.
            </p>
          </div>
        </section>

        {/* FAQ */}
        <section style={{ padding: "60px 20px", maxWidth: 800, margin: "0 auto" }}>
          <h2 style={{ fontSize: "1.8rem", fontWeight: 800, marginBottom: 32, color: "#2d2d2d" }}>Frequently Asked Questions</h2>
          <details style={{ marginBottom: 16, padding: "20px 24px", borderRadius: 12, background: "var(--bg-card)", border: "1px solid rgba(0,0,0,0.06)" }}>
            <summary style={{ fontWeight: 700, fontSize: "1.05rem", cursor: "pointer", color: "#2d2d2d" }}>Can you replace just one vinyl plank without tearing up the whole floor?</summary>
            <p style={{ color: "var(--text-dim)", lineHeight: 1.7, marginTop: 12 }}>Yes — that&apos;s Chad&apos;s specialty. Single-board removal and replacement using specialized tools. Most jobs done in under 2 hours.</p>
          </details>
          <details style={{ marginBottom: 16, padding: "20px 24px", borderRadius: 12, background: "var(--bg-card)", border: "1px solid rgba(0,0,0,0.06)" }}>
            <summary style={{ fontWeight: 700, fontSize: "1.05rem", cursor: "pointer", color: "#2d2d2d" }}>My LVP is buckling after water damage. Can it be fixed?</summary>
            <p style={{ color: "var(--text-dim)", lineHeight: 1.7, marginTop: 12 }}>Usually yes. Damaged boards are removed, the subfloor is dried and assessed, and new matching boards are installed.</p>
          </details>
          <details style={{ marginBottom: 16, padding: "20px 24px", borderRadius: 12, background: "var(--bg-card)", border: "1px solid rgba(0,0,0,0.06)" }}>
            <summary style={{ fontWeight: 700, fontSize: "1.05rem", cursor: "pointer", color: "#2d2d2d" }}>How much does LVP repair cost vs replacement?</summary>
            <p style={{ color: "var(--text-dim)", lineHeight: 1.7, marginTop: 12 }}>Single-board replacement typically runs $200–$800. Full room replacement can be $3,500–$8,500. Chad saves you thousands with targeted repairs.</p>
          </details>
          <details style={{ marginBottom: 16, padding: "20px 24px", borderRadius: 12, background: "var(--bg-card)", border: "1px solid rgba(0,0,0,0.06)" }}>
            <summary style={{ fontWeight: 700, fontSize: "1.05rem", cursor: "pointer", color: "#2d2d2d" }}>Do you carry replacement LVP boards or do I need to provide them?</summary>
            <p style={{ color: "var(--text-dim)", lineHeight: 1.7, marginTop: 12 }}>If you have leftover planks from the original install, great. If not, Chad can help source matching boards.</p>
          </details>
        </section>

        {/* Service Areas */}
        <section style={{ padding: "40px 20px", background: "var(--bg-section)" }}>
          <div style={{ maxWidth: 800, margin: "0 auto", textAlign: "center" }}>
            <h2 style={{ fontSize: "1.3rem", fontWeight: 700, marginBottom: 12, color: "#2d2d2d" }}>Service Areas</h2>
            <p style={{ color: "var(--text-dim)", lineHeight: 1.7 }}>Stillwater MN, Woodbury MN, Hudson WI, Lake Elmo MN, Washington County</p>
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
