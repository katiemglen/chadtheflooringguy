import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "LVP & Vinyl Plank Repair Stillwater MN | Chad the Flooring Guy",
  description: "Single-board LVP replacement without whole-floor teardown. Click-lock fixes, water damage repair. Stillwater MN & Washington County. Text photos: 651.353.6238.",
  alternates: { canonical: "https://chadtheflooringguy.vercel.app/lvp-repair-stillwater" },
};

const breadcrumbSchema = JSON.stringify({ "@context": "https://schema.org", "@type": "BreadcrumbList", itemListElement: [
  { "@type": "ListItem", position: 1, name: "Home", item: "https://chadtheflooringguy.vercel.app/" },
  { "@type": "ListItem", position: 2, name: "LVP Repair", item: "https://chadtheflooringguy.vercel.app/lvp-repair-stillwater" },
]});

const serviceSchema = JSON.stringify({ "@context": "https://schema.org", "@type": "Service", name: "LVP & Vinyl Plank Repair",
  provider: { "@type": "HomeAndConstructionBusiness", name: "Chad Bublitz – The Flooring Guy", telephone: "+1-651-353-6238", address: { "@type": "PostalAddress", addressLocality: "Woodbury", addressRegion: "MN" } },
  areaServed: "Stillwater MN, Bayport MN, Oak Park Heights MN, Marine on St. Croix MN, Washington County",
});

const faqSchema = JSON.stringify({ "@context": "https://schema.org", "@type": "FAQPage", mainEntity: [
  { "@type": "Question", name: "Can you replace just one LVP board without tearing up the whole floor?", acceptedAnswer: { "@type": "Answer", text: "Yes. Chad has specialized tools for removing and replacing individual LVP boards without disturbing the surrounding floor. This avoids the risk of cracking locking mechanisms on surrounding boards that comes with unclicking entire sections." } },
  { "@type": "Question", name: "How much does LVP repair cost in Stillwater MN?", acceptedAnswer: { "@type": "Answer", text: "Most LVP repairs range from $199–$799 depending on the number of boards and complexity. Full room replacement can be $5,000–$8,500. Chad's targeted approach saves thousands. Text photos to 651-353-6238 for a free estimate." } },
  { "@type": "Question", name: "What happens if you unclick an entire LVP floor for a repair?", acceptedAnswer: { "@type": "Answer", text: "Every time you disconnect and reconnect click-lock planks, you risk cracking the locking mechanism and damaging surrounding boards. Some planks won't re-engage properly, leaving gaps. Chad's method removes only the damaged board, avoiding this risk entirely." } },
]});

const services = [
  { name: "Single-Board Replacement", desc: "Remove and replace individual damaged planks without disturbing the surrounding floor. Click-lock and glue-down systems. This is the #1 money-saver in LVP repair — and avoids the risk of cracking locking mechanisms by unclicking entire sections." },
  { name: "Water Damage Repair", desc: "Warped, buckled, or swollen planks from water damage replaced. Subfloor assessment and repair included when needed. The key is acting fast before moisture spreads to adjacent boards." },
  { name: "Click-Lock Mechanism Fixes", desc: "Planks that have separated, popped up, or won\u2019t stay locked are properly re-engaged or replaced. Every reconnection attempt risks cracking the lock — Chad gets it right the first time." },
  { name: "Transition Strip Repair", desc: "Broken, loose, or missing transition strips between LVP and other flooring types replaced and properly secured." },
  { name: "Subfloor Leveling", desc: "Uneven subfloor causing planks to rock or gap? Leveling compound applied before repair for a permanently flat result." },
];

export default function LvpRepairStillwaterPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: breadcrumbSchema }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: serviceSchema }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: faqSchema }} />
      <main style={{ background: "var(--bg)", minHeight: "100vh" }}>
        <section style={{ padding: "100px 20px 60px", textAlign: "center", background: "linear-gradient(135deg, #2d2d2d 0%, #1a1a1a 100%)" }}>
          <div style={{ maxWidth: 800, margin: "0 auto" }}>
            <nav style={{ fontSize: "0.85rem", marginBottom: 20 }}><Link href="/" style={{ color: "rgba(255,255,255,0.6)", textDecoration: "none" }}>Home</Link><span style={{ color: "rgba(255,255,255,0.3)", margin: "0 8px" }}>/</span><span style={{ color: "var(--gold)" }}>LVP Repair</span></nav>
            <h1 style={{ fontSize: "clamp(1.8rem, 4vw, 2.8rem)", fontWeight: 900, color: "#fff", lineHeight: 1.2, marginBottom: 16 }}>LVP &amp; Vinyl Plank Repair in Stillwater, MN</h1>
            <p style={{ fontSize: "1.1rem", color: "rgba(255,255,255,0.7)", maxWidth: 650, margin: "0 auto 24px", lineHeight: 1.6 }}>A scratched, chipped, or water-damaged vinyl plank doesn&apos;t mean tearing up the whole floor. Chad&apos;s specialized approach removes and replaces individual boards — saving you thousands compared to full replacement.</p>
            <div style={{ display: "flex", gap: 12, justifyContent: "center", flexWrap: "wrap" }}>
              <a href="tel:6513536238" style={{ display: "inline-flex", alignItems: "center", gap: 8, padding: "14px 28px", borderRadius: 10, background: "var(--gold)", color: "#fff", fontWeight: 700, textDecoration: "none" }}>📞 Call 651-353-6238</a>
              <a href="sms:6513536238" style={{ display: "inline-flex", alignItems: "center", gap: 8, padding: "14px 28px", borderRadius: 10, background: "transparent", color: "var(--gold)", fontWeight: 700, textDecoration: "none", border: "2px solid var(--gold)" }}>📷 Text Photos for Quote</a>
            </div>
          </div>
        </section>
        <section style={{ padding: "60px 20px", maxWidth: 800, margin: "0 auto" }}>
          <h2 style={{ fontSize: "1.8rem", fontWeight: 800, marginBottom: 32, color: "#2d2d2d" }}>What We Fix</h2>
          <div style={{ display: "grid", gap: 20 }}>
            {services.map((s) => (<div key={s.name} style={{ padding: "24px", borderRadius: 12, background: "var(--bg-card)", border: "1px solid rgba(0,0,0,0.06)", boxShadow: "0 1px 8px rgba(0,0,0,0.03)" }}><h3 style={{ fontSize: "1.15rem", fontWeight: 700, marginBottom: 8, color: "#2d2d2d" }}>{s.name}</h3><p style={{ color: "var(--text-dim)", lineHeight: 1.7, margin: 0 }}>{s.desc}</p></div>))}
          </div>
        </section>
        <section style={{ padding: "48px 20px", background: "var(--bg-section)" }}>
          <div style={{ maxWidth: 800, margin: "0 auto", textAlign: "center" }}>
            <h2 style={{ fontSize: "1.5rem", fontWeight: 800, marginBottom: 16, color: "#2d2d2d" }}>Why Repair Saves You Thousands</h2>
            <p style={{ fontSize: "1.05rem", color: "var(--text-dim)", lineHeight: 1.7, maxWidth: 600, margin: "0 auto" }}>Full LVP floor replacement runs $5,000–$8,500 for an average room. Chad&apos;s targeted board replacement typically costs $199–$799 — and you&apos;d never know the difference. Plus, replacing one board avoids the risk of cracking locking mechanisms across the entire floor.</p>
          </div>
        </section>
        <section style={{ padding: "60px 20px", maxWidth: 800, margin: "0 auto" }}>
          <h2 style={{ fontSize: "1.8rem", fontWeight: 800, marginBottom: 32, color: "#2d2d2d" }}>Frequently Asked Questions</h2>
          <details style={{ marginBottom: 16, padding: "20px 24px", borderRadius: 12, background: "var(--bg-card)", border: "1px solid rgba(0,0,0,0.06)" }}><summary style={{ fontWeight: 700, fontSize: "1.05rem", cursor: "pointer", color: "#2d2d2d" }}>Can you replace just one LVP board without tearing up the whole floor?</summary><p style={{ color: "var(--text-dim)", lineHeight: 1.7, marginTop: 12 }}>Yes. Chad has specialized tools for removing and replacing individual LVP boards without disturbing the surrounding floor. This avoids the risk of cracking locking mechanisms on surrounding boards.</p></details>
          <details style={{ marginBottom: 16, padding: "20px 24px", borderRadius: 12, background: "var(--bg-card)", border: "1px solid rgba(0,0,0,0.06)" }}><summary style={{ fontWeight: 700, fontSize: "1.05rem", cursor: "pointer", color: "#2d2d2d" }}>How much does LVP repair cost in Stillwater MN?</summary><p style={{ color: "var(--text-dim)", lineHeight: 1.7, marginTop: 12 }}>Most LVP repairs range from $199–$799. Full room replacement can be $5,000–$8,500. Chad saves you thousands with targeted repairs. Text photos to 651-353-6238 for a free estimate.</p></details>
          <details style={{ marginBottom: 16, padding: "20px 24px", borderRadius: 12, background: "var(--bg-card)", border: "1px solid rgba(0,0,0,0.06)" }}><summary style={{ fontWeight: 700, fontSize: "1.05rem", cursor: "pointer", color: "#2d2d2d" }}>What happens if you unclick an entire LVP floor for a repair?</summary><p style={{ color: "var(--text-dim)", lineHeight: 1.7, marginTop: 12 }}>Every time you disconnect and reconnect click-lock planks, you risk cracking the locking mechanism and damaging surrounding boards. Some planks won&apos;t re-engage properly, leaving gaps. Chad&apos;s method removes only the damaged board, avoiding this risk entirely.</p></details>
        </section>
        <section style={{ padding: "40px 20px", background: "var(--bg-section)" }}><div style={{ maxWidth: 800, margin: "0 auto", textAlign: "center" }}><h2 style={{ fontSize: "1.3rem", fontWeight: 700, marginBottom: 12, color: "#2d2d2d" }}>Service Areas</h2><p style={{ color: "var(--text-dim)", lineHeight: 1.7 }}>Stillwater MN, Bayport MN, Oak Park Heights MN, Marine on St. Croix MN, and Washington County</p></div></section>
        <section style={{ padding: "60px 20px", textAlign: "center" }}><div style={{ maxWidth: 600, margin: "0 auto" }}><h2 style={{ fontSize: "1.8rem", fontWeight: 800, marginBottom: 12, color: "#2d2d2d" }}>Let&apos;s Find Solutions!</h2><p style={{ color: "var(--text-dim)", lineHeight: 1.7, marginBottom: 24 }}>Text photos of the flooring area from different angles + your <strong>first and last name</strong> to <strong>651-353-6238</strong>. Chad reviews photos and responds with a free estimate — usually same day.</p><div style={{ display: "flex", gap: 12, justifyContent: "center", flexWrap: "wrap" }}><a href="tel:6513536238" style={{ display: "inline-flex", alignItems: "center", gap: 8, padding: "14px 28px", borderRadius: 10, background: "var(--gold)", color: "#fff", fontWeight: 700, textDecoration: "none" }}>📞 Call 651-353-6238</a><a href="sms:6513536238" style={{ display: "inline-flex", alignItems: "center", gap: 8, padding: "14px 28px", borderRadius: 10, background: "transparent", color: "var(--gold-dark)", fontWeight: 700, textDecoration: "none", border: "2px solid var(--gold)" }}>📷 Text Photos Now</a></div><p style={{ fontSize: "0.82rem", color: "var(--text-light)", marginTop: 20 }}>Insured · 20+ years experience · Anthony Marie LLC · Woodbury, MN</p></div></section>
        <section style={{ padding: "40px 20px 60px", background: "var(--bg-section)" }}><div style={{ maxWidth: 800, margin: "0 auto", textAlign: "center" }}><h2 style={{ fontSize: "1.3rem", fontWeight: 700, marginBottom: 20, color: "#2d2d2d" }}>Other Services</h2><div style={{ display: "flex", gap: 12, justifyContent: "center", flexWrap: "wrap" }}><Link href="/carpet-repair-woodbury" style={{ padding: "8px 20px", borderRadius: 100, fontSize: "0.85rem", fontWeight: 600, color: "var(--gold-dark)", background: "rgba(245,166,35,0.1)", border: "1px solid rgba(245,166,35,0.2)", textDecoration: "none" }}>Carpet Repair</Link><Link href="/hardwood-repair" style={{ padding: "8px 20px", borderRadius: 100, fontSize: "0.85rem", fontWeight: 600, color: "var(--gold-dark)", background: "rgba(245,166,35,0.1)", border: "1px solid rgba(245,166,35,0.2)", textDecoration: "none" }}>Hardwood Repair</Link><Link href="/transition-repair" style={{ padding: "8px 20px", borderRadius: 100, fontSize: "0.85rem", fontWeight: 600, color: "var(--gold-dark)", background: "rgba(245,166,35,0.1)", border: "1px solid rgba(245,166,35,0.2)", textDecoration: "none" }}>Transition Repair</Link><Link href="/home-seller-flooring-repair" style={{ padding: "8px 20px", borderRadius: 100, fontSize: "0.85rem", fontWeight: 600, color: "var(--gold-dark)", background: "rgba(245,166,35,0.1)", border: "1px solid rgba(245,166,35,0.2)", textDecoration: "none" }}>Realtors &amp; Home Sellers</Link><Link href="/" style={{ padding: "8px 20px", borderRadius: 100, fontSize: "0.85rem", fontWeight: 600, color: "var(--gold-dark)", background: "rgba(245,166,35,0.1)", border: "1px solid rgba(245,166,35,0.2)", textDecoration: "none" }}>All Services</Link></div></div></section>
      </main>
    </>
  );
}
