"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect, useRef } from "react";
import { tipPosts } from "./data";

function useScrollAnimation() {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      (entries) => { entries.forEach((entry) => { if (entry.isIntersecting) { entry.target.classList.add("animate-in"); entry.target.querySelectorAll(".scroll-animate").forEach((c) => c.classList.add("animate-in")); } }); },
      { threshold: 0.1, rootMargin: "0px 0px -40px 0px" }
    );
    if (el.classList.contains("scroll-animate")) observer.observe(el);
    el.querySelectorAll(".scroll-animate").forEach((c) => observer.observe(c));
    return () => observer.disconnect();
  }, []);
  return ref;
}

function ScrollAnimate({ children, className = "", stagger = false }: { children: React.ReactNode; className?: string; stagger?: boolean }) {
  const ref = useScrollAnimation();
  return <div ref={ref} className={stagger ? `scroll-animate-stagger ${className}` : className}>{children}</div>;
}

export default function TipsPage() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/#services", label: "Services" },
    { href: "/#reviews", label: "Reviews" },
    { href: "/tips", label: "Tips", active: true },
    { href: "/gallery", label: "Gallery" },
    { href: "/faq", label: "FAQ" },
  ];
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
            {navLinks.map(l => (
              <Link key={l.href} href={l.href} style={{ color: l.active ? "var(--gold)" : "var(--text-dim)", textDecoration: "none", fontSize: "0.9rem", fontWeight: 600 }}>{l.label}</Link>
            ))}
            <Link href="/#bid" className="btn btn-primary" style={{ padding: "10px 24px", fontSize: "0.85rem" }}>📸 Get a Free Bid</Link>
          </div>
          <button onClick={() => setMobileOpen(!mobileOpen)} style={{ display: "none", background: "none", border: "none", fontSize: "1.5rem", cursor: "pointer", color: "var(--charcoal)" }} className="mobile-menu-btn">☰</button>
        </div>
        {mobileOpen && (
          <div style={{ padding: "16px 20px", borderTop: "1px solid var(--border)", display: "flex", flexDirection: "column", gap: 12 }}>
            {navLinks.map(l => (
              <Link key={l.href} href={l.href} onClick={() => setMobileOpen(false)} style={{ color: "var(--text)", textDecoration: "none", fontSize: "1rem", fontWeight: 600, padding: "8px 0" }}>{l.label}</Link>
            ))}
          </div>
        )}
      </nav>

      <section style={{ paddingTop: 120, paddingBottom: 80 }}>
        <div className="container">
          <div className="section-head">
            <div className="badge badge-gold" style={{ marginBottom: 12 }}>💡 From Katie&apos;s Desk</div>
            <h1 style={{ fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: 900, marginBottom: 12, color: "var(--charcoal)" }}>
              Floor Care Tips
            </h1>
            <div className="section-bar" />
            <p>Real talk about taking care of your floors — from someone who lives with a flooring guy. 😄</p>
          </div>

          <ScrollAnimate stagger>
          <div className="grid-tips scroll-animate-stagger" style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(340px, 1fr))", gap: 24 }}>
            {tipPosts.map((tip) => (
              <Link key={tip.slug} href={`/tips/${tip.slug}`} style={{ textDecoration: "none", color: "inherit" }} className="scroll-animate">
                <div className="glass-card tip-card-hover" style={{ overflow: "hidden", height: "100%", display: "flex", flexDirection: "column" }}>
                  <div style={{ position: "relative", width: "100%", height: 220 }}>
                    <Image
                      src={tip.photo}
                      alt={tip.title}
                      fill
                      style={{ objectFit: "cover" }}
                      sizes="(max-width: 768px) 100vw, 400px"
                    />
                  </div>
                  <div style={{ padding: 24, flex: 1, display: "flex", flexDirection: "column" }}>
                    <h3 style={{ fontSize: "1.1rem", fontWeight: 800, marginBottom: 8, color: "var(--charcoal)" }}>
                      {tip.emoji} {tip.title}
                    </h3>
                    <p style={{ color: "var(--text-dim)", fontSize: "0.9rem", lineHeight: 1.7, flex: 1 }}>
                      {tip.preview}
                    </p>
                    <span style={{ color: "var(--gold)", fontWeight: 700, fontSize: "0.9rem", marginTop: 12, display: "inline-block" }}>
                      Read More →
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
          </ScrollAnimate>
        </div>
      </section>

      <footer style={{ background: "var(--charcoal)", color: "#fff", padding: "40px 0" }}>
        <div className="container" style={{ textAlign: "center" }}>
          <p style={{ color: "rgba(255,255,255,0.3)", fontSize: "0.8rem" }}>
            © {new Date().getFullYear()} Chad the Flooring Guy · Anthony Marie LLC
          </p>
          <p style={{ color: "rgba(255,255,255,0.25)", fontSize: "0.75rem", marginTop: 8 }}>
            Love and love, Katie and Chad ❤️
          </p>
        </div>
      </footer>
    </>
  );
}
