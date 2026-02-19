"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const galleryPhotos = [
  { src: "/photos/gallery-before-after-stretch.jpg", alt: "Before & after carpet re-stretching", caption: "Carpet Re-Stretching — Before & After", featured: true },
  { src: "/photos/gallery-styled-closeup.jpg", alt: "Styled floor close-up with decor", caption: "The finished product ✨" },
  { src: "/photos/gallery-living-dining-grey.jpg", alt: "Open living and dining with light grey LVP", caption: "Open concept LVP install" },
  { src: "/photos/gallery-living-fireplace-grey.jpg", alt: "Living room with rustic grey LVP and fireplace", caption: "Rustic grey LVP + cozy fireplace" },
  { src: "/photos/gallery-kitchen-lvp.jpg", alt: "Finished LVP kitchen", caption: "Kitchen LVP — clean and done" },
  { src: "/photos/gallery-bedroom-blue.jpg", alt: "Completed bedroom with light vinyl and blue wall", caption: "Bedroom vinyl install" },
  { src: "/photos/gallery-living-light-oak.jpg", alt: "Completed living room with light oak", caption: "Light oak living room" },
  { src: "/photos/gallery-living-warm-fireplace.jpg", alt: "Living room warm-tone wood with fireplace", caption: "Warm tones + fireplace vibes" },
  { src: "/photos/gallery-room-grey-pendant.jpg", alt: "Empty room with grey LVP and pendant light", caption: "Fresh grey LVP — ready to move in" },
  { src: "/photos/gallery-stairs-carpet-lvp.jpg", alt: "Carpeted stairs with bullnose and LVP landing", caption: "Carpet stairs + LVP landing transition" },
  { src: "/photos/gallery-carpet-seaming.jpg", alt: "Carpet seaming with professional tools", caption: "Pro carpet seaming in action 🔧", wip: true },
  { src: "/photos/gallery-vinyl-install.jpg", alt: "Vinyl plank installation in kitchen", caption: "Mid-install — vinyl plank kitchen", wip: true },
  { src: "/photos/gallery-mid-install.jpg", alt: "Mid-installation living room", caption: "Work in progress — living room", wip: true },
  { src: "/photos/gallery-wrinkled-carpet.jpg", alt: "Wrinkled buckled carpet before repair", caption: "The before — wrinkled carpet needing rescue", before: true },
];

export default function GalleryPage() {
  const [lightbox, setLightbox] = useState<number | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/#services", label: "Services" },
    { href: "/#reviews", label: "Reviews" },
    { href: "/tips", label: "Tips" },
    { href: "/gallery", label: "Gallery", active: true },
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
            <div className="badge badge-forest" style={{ marginBottom: 12 }}>📸 Our Work</div>
            <h1 style={{ fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: 900, marginBottom: 12, color: "var(--charcoal)" }}>
              Project Gallery
            </h1>
            <div className="section-bar" />
            <p>Real projects. Real floors. Real results. Here&apos;s what Chad&apos;s been up to. 🔨</p>
          </div>

          {/* Bento Grid */}
          <div className="grid-gallery-bento" style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: 16,
            gridAutoRows: "280px",
          }}>
            {galleryPhotos.map((photo, i) => (
              <div
                key={i}
                onClick={() => setLightbox(i)}
                style={{
                  position: "relative",
                  borderRadius: 16,
                  overflow: "hidden",
                  cursor: "pointer",
                  gridColumn: photo.featured ? "span 2" : undefined,
                  gridRow: photo.featured ? "span 2" : undefined,
                }}
                className="photo-hover"
              >
                <Image
                  src={photo.src}
                  alt={photo.alt}
                  fill
                  style={{ objectFit: "cover" }}
                  sizes={photo.featured ? "(max-width: 768px) 100vw, 66vw" : "(max-width: 768px) 100vw, 33vw"}
                />
                <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top, rgba(0,0,0,0.6) 0%, transparent 50%)" }} />
                <div style={{ position: "absolute", bottom: 16, left: 16, right: 16 }}>
                  <p style={{ color: "#fff", fontWeight: 700, fontSize: "0.9rem", textShadow: "0 1px 4px rgba(0,0,0,0.5)" }}>
                    {photo.caption}
                  </p>
                  {photo.wip && <span style={{ background: "var(--gold)", color: "#fff", padding: "2px 8px", borderRadius: 6, fontSize: "0.7rem", fontWeight: 700 }}>IN PROGRESS</span>}
                  {photo.before && <span style={{ background: "var(--maroon)", color: "#fff", padding: "2px 8px", borderRadius: 6, fontSize: "0.7rem", fontWeight: 700 }}>BEFORE</span>}
                </div>
              </div>
            ))}
          </div>

          <div style={{ textAlign: "center", marginTop: 48 }}>
            <p style={{ color: "var(--text-dim)", fontSize: "1rem", marginBottom: 16 }}>
              Want your floors to look this good? 😎
            </p>
            <Link href="/#bid" className="btn btn-primary">📸 Get a Free Bid</Link>
          </div>
        </div>
      </section>

      {/* Lightbox */}
      {lightbox !== null && (
        <div
          onClick={() => setLightbox(null)}
          style={{
            position: "fixed", inset: 0, zIndex: 1000,
            background: "rgba(0,0,0,0.9)",
            display: "flex", alignItems: "center", justifyContent: "center",
            padding: 20, cursor: "pointer",
          }}
        >
          <div style={{ position: "relative", width: "90vw", height: "80vh", maxWidth: 1200 }}>
            <Image
              src={galleryPhotos[lightbox].src}
              alt={galleryPhotos[lightbox].alt}
              fill
              style={{ objectFit: "contain" }}
              sizes="90vw"
            />
          </div>
          <p style={{ position: "absolute", bottom: 24, color: "#fff", fontWeight: 700, fontSize: "1rem" }}>
            {galleryPhotos[lightbox].caption}
          </p>
          {/* Nav arrows */}
          {lightbox > 0 && (
            <button
              onClick={(e) => { e.stopPropagation(); setLightbox(lightbox - 1); }}
              style={{ position: "absolute", left: 20, top: "50%", transform: "translateY(-50%)", background: "rgba(255,255,255,0.2)", border: "none", color: "#fff", fontSize: "2rem", padding: "8px 16px", borderRadius: 12, cursor: "pointer" }}
            >←</button>
          )}
          {lightbox < galleryPhotos.length - 1 && (
            <button
              onClick={(e) => { e.stopPropagation(); setLightbox(lightbox + 1); }}
              style={{ position: "absolute", right: 20, top: "50%", transform: "translateY(-50%)", background: "rgba(255,255,255,0.2)", border: "none", color: "#fff", fontSize: "2rem", padding: "8px 16px", borderRadius: 12, cursor: "pointer" }}
            >→</button>
          )}
        </div>
      )}

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

      <style jsx global>{`
        @media (max-width: 768px) {
          div[style*="grid-template-columns: repeat(3"] {
            grid-template-columns: 1fr 1fr !important;
            grid-auto-rows: 200px !important;
          }
        }
        @media (max-width: 480px) {
          div[style*="grid-template-columns: repeat(3"] {
            grid-template-columns: 1fr !important;
            grid-auto-rows: 250px !important;
          }
        }
      `}</style>
    </>
  );
}
