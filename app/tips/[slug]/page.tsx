"use client";

import Image from "next/image";
import Link from "next/link";
import { useParams } from "next/navigation";
import { useState } from "react";
import { tipPosts } from "../data";

export default function TipPostPage() {
  const { slug } = useParams();
  const tip = tipPosts.find((t) => t.slug === slug);
  const [mobileOpen, setMobileOpen] = useState(false);

  if (!tip) {
    return (
      <div style={{ minHeight: "100vh", display: "flex", alignItems: "center", justifyContent: "center", background: "var(--bg)" }}>
        <div style={{ textAlign: "center" }}>
          <h1 style={{ fontSize: "2rem", marginBottom: 12 }}>Tip not found</h1>
          <Link href="/tips" style={{ color: "var(--gold)", fontWeight: 700 }}>← Back to Tips</Link>
        </div>
      </div>
    );
  }

  // Find next/prev
  const idx = tipPosts.indexOf(tip);
  const prev = idx > 0 ? tipPosts[idx - 1] : null;
  const next = idx < tipPosts.length - 1 ? tipPosts[idx + 1] : null;

  return (
    <>
      <nav style={{ position: "fixed", top: 0, left: 0, right: 0, zIndex: 100, background: "rgba(255,252,247,0.7)", backdropFilter: "blur(16px)", WebkitBackdropFilter: "blur(16px)", borderBottom: "1px solid rgba(45,45,45,0.1)" }}>
        <div className="container" style={{ display: "flex", alignItems: "center", justifyContent: "space-between", height: 72 }}>
          <Link href="/" style={{ textDecoration: "none", color: "var(--charcoal)" }}>
            <span style={{ fontFamily: "'Montserrat', sans-serif", fontWeight: 900, fontSize: "1.15rem" }}>
              🔨 Chad the Flooring Guy
            </span>
          </Link>
          <div className="nav-links" style={{ display: "flex", gap: 24, alignItems: "center" }}>
            <Link href="/" style={{ color: "var(--text-dim)", textDecoration: "none", fontSize: "0.9rem", fontWeight: 600 }}>Home</Link>
            <Link href="/#services" style={{ color: "var(--text-dim)", textDecoration: "none", fontSize: "0.9rem", fontWeight: 600 }}>Services</Link>
            <Link href="/#reviews" style={{ color: "var(--text-dim)", textDecoration: "none", fontSize: "0.9rem", fontWeight: 600 }}>Reviews</Link>
            <Link href="/tips" style={{ color: "var(--gold)", textDecoration: "none", fontSize: "0.9rem", fontWeight: 600 }}>Tips</Link>
            <Link href="/gallery" style={{ color: "var(--text-dim)", textDecoration: "none", fontSize: "0.9rem", fontWeight: 600 }}>Gallery</Link>
            <Link href="/faq" style={{ color: "var(--text-dim)", textDecoration: "none", fontSize: "0.9rem", fontWeight: 600 }}>FAQ</Link>
            <Link href="/#bid" className="btn btn-primary" style={{ padding: "10px 24px", fontSize: "0.85rem" }}>📸 Get a Free Bid</Link>
          </div>
          <button onClick={() => setMobileOpen(!mobileOpen)} style={{ display: "none", background: "none", border: "none", fontSize: "1.5rem", cursor: "pointer", color: "var(--charcoal)" }} className="mobile-menu-btn">☰</button>
        </div>
        {mobileOpen && (
          <div style={{ padding: "16px 20px", borderTop: "1px solid var(--border)", display: "flex", flexDirection: "column", gap: 12 }}>
            {[{href:"/",label:"Home"},{href:"/#services",label:"Services"},{href:"/#reviews",label:"Reviews"},{href:"/tips",label:"Tips"},{href:"/gallery",label:"Gallery"},{href:"/faq",label:"FAQ"}].map(l => (
              <Link key={l.href} href={l.href} onClick={() => setMobileOpen(false)} style={{ color: "var(--text)", textDecoration: "none", fontSize: "1rem", fontWeight: 600, padding: "8px 0" }}>{l.label}</Link>
            ))}
          </div>
        )}
      </nav>

      {/* Hero Image */}
      <div style={{ position: "relative", width: "100%", height: "clamp(300px, 50vh, 500px)", marginTop: 72 }}>
        <Image
          src={tip.photo}
          alt={tip.title}
          fill
          priority
          style={{ objectFit: "cover" }}
          sizes="100vw"
        />
        <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to bottom, transparent 50%, rgba(0,0,0,0.4))" }} />
      </div>

      {/* Content */}
      <section style={{ padding: "60px 0 80px" }}>
        <div className="container" style={{ maxWidth: 750 }}>
          <Link href="/tips" style={{ color: "var(--gold)", textDecoration: "none", fontWeight: 600, fontSize: "0.9rem", display: "inline-block", marginBottom: 24 }}>
            ← Back to All Tips
          </Link>
          <h1 style={{ fontSize: "clamp(1.8rem, 4vw, 2.5rem)", fontWeight: 900, marginBottom: 24, color: "var(--charcoal)", lineHeight: 1.2 }}>
            {tip.emoji} {tip.title}
          </h1>
          <div style={{ fontSize: "0.85rem", color: "var(--text-light)", marginBottom: 32 }}>
            By Katie · Chad the Flooring Guy
          </div>
          <div className="glass-card" style={{ padding: 32, fontSize: "1.1rem", lineHeight: 1.9, color: "var(--text-dim)" }}>
            {tip.content.split("\n\n").map((p, i) => (
              <p key={i} style={{ marginBottom: 20 }}>{p}</p>
            ))}
          </div>

          {/* CTA */}
          <div className="card gold-glow" style={{ padding: 32, textAlign: "center", marginTop: 48 }}>
            <p style={{ fontSize: "1.1rem", fontWeight: 700, marginBottom: 16, color: "var(--charcoal)" }}>
              Got a flooring issue? Chad can help! 🔨
            </p>
            <Link href="/#bid" className="btn btn-primary">📸 Get a Free Bid</Link>
          </div>

          {/* Prev / Next */}
          <div style={{ display: "flex", justifyContent: "space-between", marginTop: 48, gap: 16, flexWrap: "wrap" }}>
            {prev ? (
              <Link href={`/tips/${prev.slug}`} style={{ color: "var(--gold)", textDecoration: "none", fontWeight: 600, fontSize: "0.9rem" }}>
                ← {prev.title}
              </Link>
            ) : <div />}
            {next ? (
              <Link href={`/tips/${next.slug}`} style={{ color: "var(--gold)", textDecoration: "none", fontWeight: 600, fontSize: "0.9rem", textAlign: "right" }}>
                {next.title} →
              </Link>
            ) : <div />}
          </div>
        </div>
      </section>

      <footer style={{ background: "var(--charcoal)", color: "#fff", padding: "40px 0" }}>
        <div className="container" style={{ textAlign: "center" }}>
          <p style={{ color: "rgba(255,255,255,0.3)", fontSize: "0.8rem" }}>
            © {new Date().getFullYear()} Chad the Flooring Guy · Anthony Marie LLC
          </p>
        </div>
      </footer>
    </>
  );
}
