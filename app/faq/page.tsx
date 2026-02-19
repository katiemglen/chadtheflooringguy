"use client";

import Link from "next/link";
import { useState, useEffect, useRef } from "react";
import { useQuery } from "convex/react";
import { api } from "../../convex/_generated/api";

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

export default function FaqPage() {
  const faqs = useQuery(api.queries.getFaqs);
  const [open, setOpen] = useState<string | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/#services", label: "Services" },
    { href: "/#reviews", label: "Reviews" },
    { href: "/tips", label: "Tips" },
    { href: "/gallery", label: "Gallery" },
    { href: "/faq", label: "FAQ", active: true },
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
        <div className="container" style={{ maxWidth: 800 }}>
          <div className="section-head">
            <h1 style={{ fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: 900, marginBottom: 12, color: "var(--charcoal)" }}>
              Frequently Asked Questions
            </h1>
            <div className="section-bar" />
          </div>

          {!faqs ? (
            <div style={{ textAlign: "center", padding: "40px 0" }}>
              <p style={{ color: "var(--text-dim)" }}>Loading...</p>
            </div>
          ) : faqs.length === 0 ? (
            <div style={{ textAlign: "center", padding: "40px 0" }}>
              <p style={{ color: "var(--text-dim)" }}>No FAQs yet — check back soon!</p>
            </div>
          ) : (
            <ScrollAnimate stagger>
              <div className="scroll-animate-stagger">
                {faqs.map((f) => (
                  <div key={f._id} className="faq-item scroll-animate">
                    <button className="faq-q" onClick={() => setOpen(open === f._id ? null : f._id)}>
                      {f.question}
                      <span style={{ fontSize: "1.2rem", transition: "transform 0.3s", transform: open === f._id ? "rotate(45deg)" : "none", color: "var(--gold)" }}>+</span>
                    </button>
                    {open === f._id && <div className="faq-a">{f.answer}</div>}
                  </div>
                ))}
              </div>
            </ScrollAnimate>
          )}

          <div style={{ textAlign: "center", marginTop: 48 }}>
            <Link href="/#bid" className="btn btn-primary" style={{ fontSize: "1rem" }}>📸 Get a Free Bid</Link>
          </div>
        </div>
      </section>
    </>
  );
}
