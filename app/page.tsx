"use client";

import { useQuery, useMutation } from "convex/react";
import { api } from "../convex/_generated/api";
import { useState, useRef, useEffect, useCallback, FormEvent } from "react";
import Image from "next/image";
import Link from "next/link";
import { tipPosts } from "./tips/data"; // used by TipsPreview

export default function Home() {
  const config = useQuery(api.queries.getSiteConfig);
  const services = useQuery(api.queries.getActiveServices);
  const testimonials = useQuery(api.queries.getTestimonials);
  const tips = useQuery(api.queries.getTips);

  if (!config) return (
    <div style={{ minHeight: "100vh", display: "flex", alignItems: "center", justifyContent: "center", background: "var(--bg)" }}>
      <div style={{ textAlign: "center" }}>
        <div style={{ fontSize: "2rem", marginBottom: 12 }}>🔨</div>
        <p style={{ color: "var(--text-dim)" }}>Loading...</p>
      </div>
    </div>
  );

  const primaryServices = (services || []).filter(s => s.tier === "primary");
  const standardServices = (services || []).filter(s => s.tier === "standard");
  const additionalServices = (services || []).filter(s => s.tier === "additional");

  return (
    <>
      <ScrollProgress />
      <BackToTop />
      <Navbar config={config} />
      <Hero config={config} />
      <NeighborhoodFavorite />
      <ReviewLinks variant="top" />
      <MeetUs />
      <RepairServices services={primaryServices} />
      <InstallServices services={standardServices} />
      <AdditionalServices services={additionalServices} />
      <GalleryPreview />
      <Testimonials testimonials={testimonials || []} />
      <ReviewLinks variant="middle" />
      <BidForm />
      <Footer config={config} />
    </>
  );
}

/* ==================== NAVBAR ==================== */
function Navbar({ config }: { config: Record<string, string> }) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const links = [
    { href: "#services", label: "Services" },
    { href: "#reviews", label: "Reviews" },
    { href: "/tips", label: "Tips" },
    { href: "/gallery", label: "Gallery" },
    { href: "/faq", label: "FAQ" },
    { href: "#bid", label: "Get a Bid" },
  ];
  return (
    <nav>
      <div className="container" style={{ display: "flex", alignItems: "center", justifyContent: "space-between", height: 72 }}>
        <a href="#" style={{ textDecoration: "none", color: "var(--charcoal)" }}>
          <span style={{ fontFamily: "'Montserrat', sans-serif", fontWeight: 900, fontSize: "1.15rem" }}>
            🔨 Chad the Flooring Guy
          </span>
        </a>
        <div className="nav-links" style={{ display: "flex", gap: 24, alignItems: "center" }}>
          {links.map((l) => (
            <a key={l.href} href={l.href} style={{ color: "var(--text-dim)", textDecoration: "none", fontSize: "0.9rem", fontWeight: 600 }}>{l.label}</a>
          ))}
          <a href="#bid" className="btn btn-primary" style={{ padding: "10px 24px", fontSize: "0.85rem" }}>📸 Get a Free Bid</a>
        </div>
        {/* Mobile hamburger */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          style={{ display: "none", background: "none", border: "none", fontSize: "1.5rem", cursor: "pointer", color: "var(--charcoal)" }}
          className="mobile-menu-btn"
        >
          ☰
        </button>
      </div>
      {mobileOpen && (
        <div style={{ padding: "16px 20px", borderTop: "1px solid var(--border)", display: "flex", flexDirection: "column", gap: 12 }}>
          {links.map((l) => (
            <a key={l.href} href={l.href} onClick={() => setMobileOpen(false)} style={{ color: "var(--text)", textDecoration: "none", fontSize: "1rem", fontWeight: 600, padding: "8px 0" }}>{l.label}</a>
          ))}
        </div>
      )}
    </nav>
  );
}

/* ==================== HERO ==================== */
function Hero({ config }: { config: Record<string, string> }) {
  return (
    <section style={{ position: "relative", minHeight: "90vh", display: "flex", alignItems: "center", paddingTop: 72, overflow: "hidden" }}>
      <Image
        src="/photos/hero-lvp-fireplace.jpg"
        alt="Beautiful LVP flooring by Chad the Flooring Guy"
        fill
        priority
        style={{ objectFit: "cover", zIndex: 0 }}
        sizes="100vw"
      />
      {/* Top gradient + blur overlay */}
      <div style={{
        position: "absolute", top: 0, left: 0, right: 0, height: "40%", zIndex: 1,
        background: "linear-gradient(to bottom, rgba(0,0,0,0.70) 0%, rgba(0,0,0,0.30) 50%, transparent 100%)",
        backdropFilter: "blur(4px)", WebkitBackdropFilter: "blur(4px)",
        maskImage: "linear-gradient(to bottom, black 0%, black 40%, transparent 100%)",
        WebkitMaskImage: "linear-gradient(to bottom, black 0%, black 40%, transparent 100%)",
      }} />
      <div className="container" style={{ textAlign: "center", padding: "60px 20px", position: "relative", zIndex: 2 }}>
        <div className="hero-text-box" style={{ background: "rgba(0, 0, 0, 0.55)", borderRadius: 24, padding: "48px 56px", backdropFilter: "blur(8px)", maxWidth: 700, margin: "0 auto" }}>
          <div style={{ display: "inline-flex", alignItems: "center", gap: 6, padding: "6px 16px", borderRadius: 100, fontSize: "0.8rem", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.5px", background: "rgba(196,136,42,0.2)", color: "var(--gold)", border: "1px solid rgba(196,136,42,0.4)", marginBottom: 20 }}>
            ⭐ Nextdoor Neighborhood Favorite — Multiple Years Running
          </div>
          <h1 className="fade-up" style={{ fontSize: "clamp(2.2rem, 5vw, 4rem)", fontWeight: 900, lineHeight: 1.15, marginBottom: 20, color: "#ffffff" }}>
            Repairing Your Floors<br />
            <span style={{ color: "var(--gold)" }}>Saves You Time & Money</span>
          </h1>
          <p style={{ fontSize: "1.15rem", color: "rgba(255,255,255,0.85)", maxWidth: 650, margin: "0 auto 16px", lineHeight: 1.7 }}>
            Expert flooring repair and installation in {config.serviceArea || "Woodbury, MN"}.
            20+ years of experience. Text photos for a fast estimate!
          </p>
          <p style={{ fontSize: "0.95rem", color: "rgba(255,255,255,0.85)", maxWidth: 500, margin: "0 auto 32px", lineHeight: 1.7 }}>
            Most people don&apos;t know who to call for flooring repairs. Now you do.
          </p>
          <div style={{ display: "flex", gap: 16, justifyContent: "center", flexWrap: "wrap" }}>
            <a href="#bid" className="btn btn-primary" style={{ fontSize: "1.1rem" }}>📸 Get a Free Bid</a>
            <a href="tel:6513536238" className="btn btn-outline">📞 Call 651-353-6238</a>
          </div>
        </div>
      </div>
      <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, height: 80, background: "linear-gradient(to bottom, transparent, var(--bg))", zIndex: 2 }} />
    </section>
  );
}

/* ==================== NEIGHBORHOOD FAVORITE ==================== */
function NeighborhoodFavorite() {
  return (
    <section style={{ padding: "60px 0", background: "var(--charcoal)", color: "#fff" }}>
      <div className="container" style={{ textAlign: "center" }}>
        <div className="stats-row" style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 40, flexWrap: "wrap" }}>
          <div>
            <div style={{ fontSize: "3rem", marginBottom: 8 }}>🏆</div>
            <h3 style={{ fontSize: "1.5rem", fontWeight: 900, marginBottom: 8 }}>Nextdoor Neighborhood Favorite</h3>
            <p style={{ color: "rgba(255,255,255,0.7)", maxWidth: 500, margin: "0 auto", lineHeight: 1.7 }}>
              Multiple years running. Your neighbors recommend me because the work speaks for itself.
            </p>
          </div>
          <div style={{ display: "flex", gap: 32, flexWrap: "wrap", justifyContent: "center" }}>
            {[
              { num: "20+", label: "Years Experience" },
              { num: "2-3hr", label: "Most Repairs" },
              { num: "24hr", label: "Response Time" },
            ].map((s) => (
              <div key={s.label} style={{ textAlign: "center" }}>
                <div style={{ fontSize: "2rem", fontWeight: 900, color: "var(--gold)", fontFamily: "'Montserrat', sans-serif" }}>{s.num}</div>
                <div style={{ fontSize: "0.8rem", color: "rgba(255,255,255,0.6)", marginTop: 4 }}>{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ==================== REVIEW LINKS ==================== */
function ReviewLinks({ variant }: { variant: "top" | "middle" }) {
  const reviewLinks = [
    { name: "Nextdoor", icon: "💚", url: "https://nextdoor.com/pages/chad-the-flooring-guy-woodbury-mn/", color: "#00B246" },
    { name: "Facebook", icon: "💙", url: "https://www.facebook.com/ChadTheFlooringGuy/reviews/", color: "#1877F2" },
    { name: "Google", icon: "⭐", url: "https://g.page/r/CVK6CXEcVKk1EAg/review", color: "#4285F4" },
  ];

  const isTop = variant === "top";

  return (
    <section style={{ padding: isTop ? "60px 0" : "80px 0", background: isTop ? "var(--bg-section)" : "var(--charcoal)" }}>
      <div className="container" style={{ textAlign: "center", maxWidth: 700 }}>
        {isTop ? (
          <>
            <h2 style={{ fontSize: "1.5rem", fontWeight: 900, marginBottom: 8, color: "var(--charcoal)" }}>
              See What Our Neighbors Are Saying
            </h2>
            <p style={{ color: "var(--text-dim)", lineHeight: 1.8, marginBottom: 24, fontSize: "0.95rem" }}>
              Real reviews from real neighbors. See why they keep calling back.
            </p>
          </>
        ) : (
          <>
            <h2 style={{ fontSize: "1.5rem", fontWeight: 900, marginBottom: 8, color: "#fff" }}>
              Loved Your Experience? Leave a Review! 🥰
            </h2>
            <p style={{ color: "rgba(255,255,255,0.7)", lineHeight: 1.8, marginBottom: 24, fontSize: "0.95rem" }}>
              Had a good experience? A quick review helps other neighbors find me. Appreciate it.
            </p>
          </>
        )}
        <ScrollAnimate stagger>
        <div className="scroll-animate-stagger" style={{ display: "flex", gap: 16, justifyContent: "center", flexWrap: "wrap" }}>
          {reviewLinks.map((r) => (
            <a
              key={r.name}
              href={r.url}
              target="_blank"
              rel="noopener noreferrer"
              className="review-btn scroll-animate"
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: 10,
                padding: "14px 28px",
                borderRadius: 12,
                minWidth: 180,
                background: isTop ? "#fff" : "rgba(255,255,255,0.1)",
                border: isTop ? "1px solid var(--border)" : "1px solid rgba(255,255,255,0.15)",
                textDecoration: "none",
                color: isTop ? "var(--charcoal)" : "#fff",
                fontWeight: 700,
                fontSize: "0.95rem",
                transition: "transform 0.2s, box-shadow 0.2s",
              }}
              onMouseEnter={(e) => { e.currentTarget.style.transform = "translateY(-2px)"; e.currentTarget.style.boxShadow = `0 4px 12px ${r.color}30`; }}
              onMouseLeave={(e) => { e.currentTarget.style.transform = ""; e.currentTarget.style.boxShadow = ""; }}
            >
              <span style={{ fontSize: "1.2rem" }}>{r.icon}</span>
              {isTop ? `Read on ${r.name}` : `Review on ${r.name}`}
            </a>
          ))}
        </div>
        </ScrollAnimate>
      </div>
    </section>
  );
}

/* ==================== REPAIR SERVICES (Primary) ==================== */
function RepairServices({ services }: { services: any[] }) {
  return (
    <section id="services" style={{ padding: "100px 0" }}>
      <div className="container">
        <ScrollAnimate><div className="section-head scroll-animate">
          <div className="badge badge-gold" style={{ marginBottom: 12 }}>🥇 Our Specialty</div>
          <h2>Flooring Repair & Re-Stretching</h2>
          <div className="section-bar" />
          <p>
            Most people don&apos;t even know flooring repair exists. I&apos;ve been doing it for 20+ years.
          </p>
          <p style={{ color: "var(--text-dim)", maxWidth: 700, margin: "16px auto 0", lineHeight: 1.8, fontSize: "0.95rem" }}>
            Some fixes take a couple hours — a seam, a patch, a transition. Other jobs are bigger — full house re-stretching, multiple rooms, years of damage. Either way, I&apos;ll walk you through it before any work starts.
          </p>
        </div></ScrollAnimate>
        <ScrollAnimate stagger>
        <div className="grid-2col scroll-animate-stagger" style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: 20, maxWidth: 700, margin: "0 auto" }}>
          {services.map((s) => (
            <div key={s._id} className="glass-card scroll-animate" style={{ padding: 28, textAlign: "center" }}>
              <div style={{ fontSize: "2rem", marginBottom: 12 }}>{s.icon}</div>
              <h3 style={{ fontSize: "1.15rem", fontWeight: 800, marginBottom: 4 }}>{s.name}</h3>
              {s.priceRange && <p style={{ color: "var(--gold-dark)", fontSize: "0.85rem", fontWeight: 700, marginBottom: 8 }}>{s.priceRange}</p>}
              <p style={{ color: "var(--text-dim)", fontSize: "0.9rem", lineHeight: 1.7, marginBottom: 16 }}>{s.description}</p>
              {s.features && (
                <ul style={{ listStyle: "none", padding: 0, margin: 0, textAlign: "center" }}>
                  {s.features.map((f: string, i: number) => (
                    <li key={i} style={{ color: "var(--text-dim)", fontSize: "0.8rem", padding: "3px 0" }}>
                      <span style={{ color: "var(--forest)", marginRight: 8 }}>✓</span>{f}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>
        </ScrollAnimate>
        <div style={{ textAlign: "center", marginTop: 32 }}>
          <a href="#bid" className="btn btn-primary">📸 Send Photos for a Free Estimate</a>
        </div>
      </div>
    </section>
  );
}

/* ==================== INSTALL SERVICES (Standard) ==================== */
function InstallServices({ services }: { services: any[] }) {
  return (
    <section className="section-alt" style={{ padding: "80px 0" }}>
      <div className="container">
        <div className="section-head">
          <div className="badge badge-forest" style={{ marginBottom: 12 }}>🥈 Installation</div>
          <h2>New Flooring Installation</h2>
          <div className="section-bar" />
          <p>Full room or whole house. Installed right the first time. I&apos;ll help you find the best materials at the best price.</p>
        </div>
        <ScrollAnimate stagger>
        <div className="scroll-animate-stagger" style={{ display: "flex", gap: 20, justifyContent: "center", flexWrap: "wrap" }}>
          {services.map((s) => (
            <div key={s._id} className="glass-card scroll-animate" style={{ padding: 28, textAlign: "center", maxWidth: 380, width: "100%" }}>
              <div style={{ fontSize: "2rem", marginBottom: 12 }}>{s.icon}</div>
              <h3 style={{ fontSize: "1.15rem", fontWeight: 800, marginBottom: 8 }}>{s.name}</h3>
              <p style={{ color: "var(--text-dim)", fontSize: "0.9rem", lineHeight: 1.7, marginBottom: 16 }}>{s.description}</p>
              {s.features && (
                <ul style={{ listStyle: "none", padding: 0, margin: 0, textAlign: "center" }}>
                  {s.features.map((f: string, i: number) => (
                    <li key={i} style={{ color: "var(--text-dim)", fontSize: "0.8rem", padding: "3px 0" }}>
                      <span style={{ color: "var(--forest)", marginRight: 8 }}>✓</span>{f}
                    </li>
                  ))}
                  <li style={{ color: "var(--gold-dark)", fontSize: "0.8rem", padding: "3px 0", fontWeight: 700 }}>
                    <span style={{ color: "var(--forest)", marginRight: 8 }}>✓</span>And more!
                  </li>
                </ul>
              )}
            </div>
          ))}
        </div>
        </ScrollAnimate>
      </div>
    </section>
  );
}

/* ==================== ADDITIONAL SERVICES ==================== */
function AdditionalServices({ services }: { services: any[] }) {
  if (services.length === 0) return null;
  return (
    <section style={{ padding: "60px 0" }}>
      <div className="container">
        <div className="section-head">
          <h2 style={{ fontSize: "1.5rem" }}>Additional Services</h2>
          <div className="section-bar" />
          <p style={{ fontSize: "0.95rem" }}>Custom quotes. Reach out to discuss your project.</p>
        </div>
        <ScrollAnimate stagger>
        <div className="scroll-animate-stagger" style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))", gap: 20, maxWidth: 700, margin: "0 auto", alignItems: "stretch" }}>
          {services.map((s) => (
            <div key={s._id} className="glass-card scroll-animate" style={{ padding: 24, textAlign: "center" }}>
              <div style={{ marginBottom: 8 }}>
                <span style={{ fontSize: "1.5rem" }}>{s.icon}</span>
              </div>
              <h3 style={{ fontSize: "1rem", fontWeight: 800, marginBottom: 8 }}>{s.name}</h3>
              <p style={{ color: "var(--text-dim)", fontSize: "0.85rem", lineHeight: 1.6 }}>{s.shortDescription}</p>
            </div>
          ))}
        </div>
        </ScrollAnimate>
      </div>
    </section>
  );
}

/* ==================== TESTIMONIALS ==================== */
function Testimonials({ testimonials }: { testimonials: any[] }) {
  if (testimonials.length === 0) return null;
  return (
    <section id="reviews" className="section-alt" style={{ padding: "100px 0" }}>
      <div className="container">
        <div className="section-head">
          <h2>What Your Neighbors Say</h2>
          <div className="section-bar" />
          <p>Built one repair and install at a time.</p>
        </div>
        <ScrollAnimate stagger>
        <div className="grid-testimonials scroll-animate-stagger" style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(320px, 1fr))", gap: 20 }}>
          {testimonials.map((t) => (
            <div key={t._id} className="glass-card scroll-animate" style={{ padding: 28 }}>
              {t.rating && <div style={{ marginBottom: 12 }}>{"⭐".repeat(t.rating)}</div>}
              <p style={{ color: "var(--text-dim)", lineHeight: 1.7, fontStyle: "italic", marginBottom: 16, fontSize: "0.95rem" }}>&ldquo;{t.text}&rdquo;</p>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                <div>
                  <p style={{ fontWeight: 700, fontSize: "0.95rem" }}>{t.name}</p>
                  {t.neighborhood && <p style={{ color: "var(--text-light)", fontSize: "0.8rem" }}>{t.neighborhood}</p>}
                </div>
                {t.source && <span className="badge badge-forest" style={{ fontSize: "0.7rem" }}>{t.source}</span>}
              </div>
            </div>
          ))}
        </div>
        </ScrollAnimate>
      </div>
    </section>
  );
}

/* (Old Convex tips section replaced by TipsPreview above) */

/* ==================== BID FORM ==================== */
function BidForm() {
  const submitBid = useMutation(api.mutations.submitBid);
  const generateUploadUrl = useMutation(api.mutations.generateUploadUrl);

  const [submitted, setSubmitted] = useState(false);
  const [hasPhotos, setHasPhotos] = useState(false);
  const [uploading, setUploading] = useState(false);
  const [files, setFiles] = useState<File[]>([]);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    phone: "",
    phoneType: "",
    email: "",
    address: "",
    serviceType: "",
    flooringType: "",
    squareFootage: "",
    description: "",
    timeline: "",
    referralSource: "",
  });

  const updateField = (field: string, value: string) => setForm(prev => ({ ...prev, [field]: value }));

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const newFiles = Array.from(e.target.files);
      setFiles(prev => [...prev, ...newFiles]);
    }
  };

  const removeFile = (index: number) => {
    setFiles(prev => prev.filter((_, i) => i !== index));
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setUploading(true);

    try {
      // Upload photos to Convex storage
      const storageIds: string[] = [];
      for (const file of files) {
        const uploadUrl = await generateUploadUrl();
        const result = await fetch(uploadUrl, {
          method: "POST",
          headers: { "Content-Type": file.type },
          body: file,
        });
        const { storageId } = await result.json();
        storageIds.push(storageId);
      }

      await submitBid({
        firstName: form.firstName,
        lastName: form.lastName,
        phone: form.phone,
        phoneType: form.phoneType,
        email: form.email || undefined,
        address: form.address || undefined,
        serviceType: form.serviceType,
        flooringType: form.flooringType,
        photoStorageIds: storageIds.length > 0 ? storageIds : undefined,
        squareFootage: form.squareFootage || undefined,
        description: form.description,
        timeline: form.timeline,
        referralSource: form.referralSource,
      });

      setHasPhotos(storageIds.length > 0);
      setSubmitted(true);
    } catch (err) {
      console.error("Submission error:", err);
      alert("Something went wrong. Please try again or call Chad directly at 651-353-6238.");
    } finally {
      setUploading(false);
    }
  };

  if (submitted) {
    return (
      <section id="bid" style={{ padding: "100px 0" }}>
        <div className="container" style={{ maxWidth: 700 }}>
          <div className="card gold-glow" style={{ padding: 48, textAlign: "center" }}>
            <div style={{ fontSize: "3rem", marginBottom: 16 }}>🙌</div>
            {hasPhotos ? (
              <>
                <h2 style={{ fontSize: "1.5rem", fontWeight: 900, marginBottom: 16 }}>Thank You!</h2>
                <p style={{ color: "var(--text-dim)", lineHeight: 1.8, fontSize: "1.05rem" }}>
                  Thank you for reaching out to Chad the Flooring Guy! We received your photos — Chad will review them and text you an estimate as soon as possible, usually within 24 hours. No need to call — sit tight and he&apos;ll come to you!
                </p>
                <p style={{ color: "var(--text-dim)", lineHeight: 1.8, fontSize: "1.05rem", marginTop: 16 }}>
                  Have a great day! — Katie & Chad
                </p>
              </>
            ) : (
              <>
                <h2 style={{ fontSize: "1.5rem", fontWeight: 900, marginBottom: 16 }}>Thank You!</h2>
                <p style={{ color: "var(--text-dim)", lineHeight: 1.8, fontSize: "1.05rem" }}>
                  Thank you for reaching out to Chad the Flooring Guy! Chad will give you a call or text to learn more about your project and may ask for a few photos to put together an accurate estimate. Expect to hear from him within 24 hours.
                </p>
                <p style={{ color: "var(--text-dim)", lineHeight: 1.8, fontSize: "1.05rem", marginTop: 16 }}>
                  Have a great day! — Katie & Chad
                </p>
              </>
            )}
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="bid" className="section-alt" style={{ padding: "100px 0" }}>
      <div className="container" style={{ maxWidth: 800 }}>
        <div className="section-head">
          <h2>Get a Free Bid</h2>
          <div className="section-bar" />
          <p>Send photos, get an estimate. Usually within 24 hours. Call or text <a href="tel:6513536238" style={{ color: "var(--gold)", fontWeight: 700 }}>651-353-6238</a>.</p>
        </div>
        <form onSubmit={handleSubmit} className="card" style={{ padding: 36, background: "rgba(255,255,255,0.65)", backdropFilter: "blur(16px)", WebkitBackdropFilter: "blur(16px)", border: "1px solid rgba(255,255,255,0.3)", boxShadow: "0 4px 24px rgba(0,0,0,0.06)" }}>
          {/* First & Last Name */}
          <div className="grid-form-2col" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}>
            <div className="form-group">
              <label className="form-label">First Name *</label>
              <input className="form-input" required value={form.firstName} onChange={e => updateField("firstName", e.target.value)} placeholder="First name" />
            </div>
            <div className="form-group">
              <label className="form-label">Last Name *</label>
              <input className="form-input" required value={form.lastName} onChange={e => updateField("lastName", e.target.value)} placeholder="Last name" />
            </div>
          </div>
          {/* Phone & Phone Type */}
          <div className="grid-form-2col" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}>
            <div className="form-group">
              <label className="form-label">Phone *</label>
              <input className="form-input" required type="tel" value={form.phone} onChange={e => updateField("phone", e.target.value)} placeholder="651-555-1234" />
            </div>
            <div className="form-group">
              <label className="form-label">Phone Type *</label>
              <select className="form-input" required value={form.phoneType} onChange={e => updateField("phoneType", e.target.value)}>
                <option value="">Select...</option>
                <option value="cell">📱 Cell Phone</option>
                <option value="landline">📞 Landline</option>
              </select>
            </div>
          </div>

          {/* Email & Address */}
          <div className="grid-form-2col" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}>
            <div className="form-group">
              <label className="form-label">Email <span style={{ color: "var(--text-light)", fontWeight: 400 }}>(optional)</span></label>
              <input className="form-input" type="email" value={form.email} onChange={e => updateField("email", e.target.value)} placeholder="you@email.com" />
            </div>
            <div className="form-group">
              <label className="form-label">Address / Location</label>
              <input className="form-input" value={form.address} onChange={e => updateField("address", e.target.value)} placeholder="Woodbury, MN" />
            </div>
          </div>

          {/* Service & Flooring Type */}
          <div className="grid-form-2col" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}>
            <div className="form-group">
              <label className="form-label">Type of Service *</label>
              <select className="form-select" required value={form.serviceType} onChange={e => updateField("serviceType", e.target.value)}>
                <option value="">Select a service...</option>
                <option value="repair">🔧 Flooring Repair</option>
                <option value="re-stretch">📐 Carpet Re-Stretching</option>
                <option value="new-install">🏠 New Installation</option>
                <option value="transition">🚪 Transition Repair</option>
                <option value="other">💬 Other / Not Sure</option>
              </select>
            </div>
            <div className="form-group">
              <label className="form-label">Type of Flooring *</label>
              <select className="form-select" required value={form.flooringType} onChange={e => updateField("flooringType", e.target.value)}>
                <option value="">Select flooring type...</option>
                <option value="carpet">Carpet</option>
                <option value="lvp">Luxury Vinyl Plank (LVP)</option>
                <option value="hardwood-engineered">Hardwood / Engineered Wood</option>
                <option value="not-sure">Not Sure</option>
              </select>
            </div>
          </div>

          {/* Square Footage & Timeline */}
          <div className="grid-form-2col" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}>
            <div className="form-group">
              <label className="form-label">Square Footage / Room Size <span style={{ color: "var(--text-light)", fontWeight: 400 }}>(optional)</span></label>
              <input className="form-input" value={form.squareFootage} onChange={e => updateField("squareFootage", e.target.value)} placeholder="e.g., 200 sqft, 12x15 room, or 'not sure'" />
            </div>
            <div className="form-group">
              <label className="form-label">Timeline *</label>
              <select className="form-select" required value={form.timeline} onChange={e => updateField("timeline", e.target.value)}>
                <option value="">When do you need this done?</option>
                <option value="asap">ASAP</option>
                <option value="this-week">This Week</option>
                <option value="this-month">This Month</option>
                <option value="flexible">Flexible / No Rush</option>
              </select>
            </div>
          </div>

          {/* Description */}
          <div className="form-group">
            <label className="form-label">Describe Your Project *</label>
            <textarea className="form-textarea" required value={form.description} onChange={e => updateField("description", e.target.value)} placeholder={form.address ? "Tell Chad what's going on with your floors — what needs fixing, what room, any details that help..." : "Tell us about your project! If you didn't enter an address above, let us know the general area or city where the work is needed — this helps us confirm we service your location. For businesses with multiple locations, just let us know how many sites and their general areas."} rows={4} />
          </div>

          {/* Photo Upload */}
          <div className="form-group">
            <label className="form-label">Photos</label>
            <div style={{ background: "rgba(245,166,35,0.06)", border: "2px dashed rgba(245,166,35,0.3)", borderRadius: 12, padding: 24, textAlign: "center" }}>
              <p style={{ fontSize: "0.95rem", color: "var(--text-dim)", marginBottom: 12, lineHeight: 1.6 }}>
                📸 Adding photos speeds up the process! Upload pictures of the area that needs repair or installation and Chad can text you an estimate faster. No photos? No problem — he&apos;ll reach out to discuss.
              </p>
              <input
                ref={fileInputRef}
                type="file"
                accept="image/*"
                multiple
                onChange={handleFileChange}
                style={{ display: "none" }}
              />
              <button
                type="button"
                onClick={() => fileInputRef.current?.click()}
                className="btn btn-outline"
                style={{ padding: "10px 24px", fontSize: "0.9rem" }}
              >
                📷 Choose Photos
              </button>
              {files.length > 0 && (
                <div style={{ marginTop: 16, display: "flex", gap: 8, flexWrap: "wrap", justifyContent: "center" }}>
                  {files.map((f, i) => (
                    <div key={i} style={{ background: "var(--bg-card)", border: "1px solid var(--border)", borderRadius: 8, padding: "6px 12px", fontSize: "0.8rem", display: "flex", alignItems: "center", gap: 8 }}>
                      <span>{f.name.length > 20 ? f.name.slice(0, 20) + "..." : f.name}</span>
                      <button type="button" onClick={() => removeFile(i)} style={{ background: "none", border: "none", cursor: "pointer", color: "var(--maroon)", fontWeight: 700 }}>✕</button>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* How did you hear about us */}
          <div className="form-group">
            <label className="form-label">How Did You Hear About Chad? *</label>
            <select className="form-select" required value={form.referralSource} onChange={e => updateField("referralSource", e.target.value)}>
              <option value="">Select one...</option>
              <option value="nextdoor">Nextdoor</option>
              <option value="facebook">Facebook</option>
              <option value="google">Google</option>
              <option value="word-of-mouth">Word of Mouth</option>
              <option value="other">Other</option>
            </select>
          </div>

          {/* Submit */}
          <button
            type="submit"
            className="btn btn-primary"
            disabled={uploading}
            style={{ width: "100%", justifyContent: "center", fontSize: "1.1rem", padding: "16px 32px", marginTop: 8 }}
          >
            {uploading ? "Submitting..." : "🔨 Submit Bid Request"}
          </button>
          <p style={{ textAlign: "center", color: "var(--text-light)", fontSize: "0.8rem", marginTop: 12 }}>
            Chad will text you back within 24 hours. Your information is never shared.
          </p>
        </form>
      </div>
    </section>
  );
}

/* (FAQ moved to /faq page) */

/* ==================== MEET US ==================== */
function MeetUs() {
  return (
    <section id="about" style={{ padding: "80px 0", background: "var(--bg)" }}>
      <div className="container">
        <div className="section-head">
          <div className="badge badge-forest" style={{ marginBottom: 12 }}>👋 Meet Us</div>
          <h2>Your Neighbors, Not a Corporation</h2>
          <div className="section-bar" />
        </div>
        <div className="grid-meet-us" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 40, alignItems: "center", maxWidth: 900, margin: "0 auto" }}>
          <ScrollAnimate><div className="photo-hover-subtle scroll-animate" style={{ position: "relative", borderRadius: 20, overflow: "hidden", height: 450 }}>
            <Image
              src="/photos/chad-katie-smiling.jpg"
              alt="Chad and Katie — the husband-and-wife team behind Chad the Flooring Guy"
              fill
              style={{ objectFit: "cover", objectPosition: "center 20%" }}
              sizes="(max-width: 768px) 100vw, 450px"
            />
          </div></ScrollAnimate>
          <div>
            <h3 style={{ fontSize: "1.5rem", fontWeight: 900, color: "var(--charcoal)", marginBottom: 16 }}>
              Hey, that&apos;s Chad! 👋
            </h3>
            <p style={{ color: "var(--text-dim)", lineHeight: 1.8, fontSize: "1rem", marginBottom: 16 }}>
              20+ years in flooring. Repair and re-stretching specialist. Based in Woodbury, MN.
            </p>
            <p style={{ color: "var(--text-dim)", lineHeight: 1.8, fontSize: "1rem", marginBottom: 16 }}>
              Chad&apos;s the guy who actually shows up, does the work, and makes your floors look right. No sales team, no subcontractors — just a guy who&apos;s really good at what he does and treats every home like his own.
            </p>
            <p style={{ color: "var(--text-dim)", lineHeight: 1.8, fontSize: "1rem" }}>
              Text him photos, get a straight answer. That&apos;s how it works. 🔨
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ==================== TIPS PREVIEW ==================== */
function TipsPreview() {
  const previewTips = tipPosts.slice(0, 3);
  return (
    <section id="tips" style={{ padding: "80px 0" }}>
      <div className="container">
        <div className="section-head">
          <div className="badge badge-gold" style={{ marginBottom: 12 }}>💡 From Katie&apos;s Desk</div>
          <h2>Floor Care Tips</h2>
          <div className="section-bar" />
          <p>Real talk about taking care of your floors — from someone who lives with a flooring guy. 😄</p>
        </div>
        <ScrollAnimate stagger>
        <div className="scroll-animate-stagger" style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(320px, 1fr))", gap: 24 }}>
          {previewTips.map((tip) => (
            <Link key={tip.slug} href={`/tips/${tip.slug}`} style={{ textDecoration: "none", color: "inherit" }} className="scroll-animate">
              <div className="glass-card tip-card-hover" style={{ overflow: "hidden", height: "100%", display: "flex", flexDirection: "column" }}>
                <div style={{ position: "relative", width: "100%", height: 200 }}>
                  <Image src={tip.photo} alt={tip.title} fill style={{ objectFit: "cover" }} sizes="(max-width: 768px) 100vw, 400px" />
                </div>
                <div style={{ padding: 20, flex: 1 }}>
                  <h3 style={{ fontSize: "1rem", fontWeight: 800, marginBottom: 8, color: "var(--charcoal)" }}>{tip.emoji} {tip.title}</h3>
                  <p style={{ color: "var(--text-dim)", fontSize: "0.85rem", lineHeight: 1.7 }}>{tip.preview}</p>
                  <span style={{ color: "var(--gold)", fontWeight: 700, fontSize: "0.85rem", marginTop: 8, display: "inline-block" }}>Read More →</span>
                </div>
              </div>
            </Link>
          ))}
        </div>
        </ScrollAnimate>
        <div style={{ textAlign: "center", marginTop: 32 }}>
          <Link href="/tips" className="btn btn-outline" style={{ padding: "12px 28px", fontSize: "0.95rem" }}>
            See All Tips →
          </Link>
        </div>
      </div>
    </section>
  );
}

/* ==================== GALLERY PREVIEW ==================== */
function GalleryPreview() {
  const previewPhotos = [
    { src: "/photos/gallery-styled-closeup.jpg", alt: "Styled floor close-up" },
    { src: "/photos/gallery-kitchen-lvp.jpg", alt: "Finished LVP kitchen" },
    { src: "/photos/gallery-living-warm-fireplace.jpg", alt: "Living room warm-tone wood" },
    { src: "/photos/gallery-living-dining-grey.jpg", alt: "Open living and dining with light grey LVP" },
  ];
  return (
    <section style={{ padding: "80px 0", background: "var(--bg-section)" }}>
      <div className="container">
        <div className="section-head">
          <div className="badge badge-forest" style={{ marginBottom: 12 }}>📸 Our Work</div>
          <h2>Project Gallery</h2>
          <div className="section-bar" />
          <p>Real projects. Real results.</p>
        </div>
        <ScrollAnimate stagger>
        <div className="grid-4col scroll-animate-stagger" style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 16, maxWidth: 900, margin: "0 auto" }}>
          {previewPhotos.map((photo, i) => (
            <Link key={i} href="/gallery" style={{ textDecoration: "none" }} className="scroll-animate">
              <div className="photo-hover" style={{ position: "relative", borderRadius: 16, overflow: "hidden", height: 200 }}>
                <Image src={photo.src} alt={photo.alt} fill style={{ objectFit: "cover" }} sizes="(max-width: 768px) 50vw, 225px" />
              </div>
            </Link>
          ))}
        </div>
        </ScrollAnimate>
        <ScrollAnimate><div className="before-after-img scroll-animate" style={{ maxWidth: 900, margin: "24px auto 0", position: "relative", borderRadius: 20, overflow: "hidden", height: 400 }}>
          <Image
            src="/photos/gallery-before-after-stretch.jpg"
            alt="Before & after carpet stretching"
            fill
            style={{ objectFit: "cover" }}
            sizes="(max-width: 768px) 100vw, 900px"
          />
        </div></ScrollAnimate>
        <div style={{ textAlign: "center", marginTop: 32 }}>
          <Link href="/gallery" className="btn btn-outline" style={{ padding: "12px 28px", fontSize: "0.95rem" }}>
            View Full Gallery →
          </Link>
        </div>
      </div>
    </section>
  );
}

/* ==================== SCROLL PROGRESS ==================== */
function ScrollProgress() {
  const [progress, setProgress] = useState(0);
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      setProgress(docHeight > 0 ? scrollTop / docHeight : 0);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <div style={{ position: "fixed", left: 0, top: 0, width: 4, height: "100vh", zIndex: 90, background: "var(--bg-section)" }}>
      <div style={{ width: "100%", height: `${progress * 100}%`, background: "var(--gold)", transition: "height 0.1s linear" }} />
    </div>
  );
}

/* ==================== BACK TO TOP ==================== */
function BackToTop() {
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const handleScroll = () => setVisible(window.scrollY > 500);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <button
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      aria-label="Back to top"
      style={{
        position: "fixed", bottom: 24, right: 24, zIndex: 90,
        width: 48, height: 48, borderRadius: "50%",
        background: "var(--charcoal)", color: "#fff",
        border: "none", cursor: "pointer",
        fontSize: "1.3rem", display: "flex", alignItems: "center", justifyContent: "center",
        boxShadow: "0 2px 8px rgba(0,0,0,0.2)",
        opacity: visible ? 1 : 0,
        pointerEvents: visible ? "auto" : "none",
        transition: "opacity 0.3s ease",
      }}
    >↑</button>
  );
}

/* ==================== SCROLL ANIMATE ==================== */
function useScrollAnimation() {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-in");
            // Also animate children with scroll-animate class
            entry.target.querySelectorAll(".scroll-animate").forEach((child) => child.classList.add("animate-in"));
          }
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -40px 0px" }
    );
    // Observe the element itself
    if (el.classList.contains("scroll-animate")) observer.observe(el);
    // Observe children
    el.querySelectorAll(".scroll-animate").forEach((child) => observer.observe(child));
    return () => observer.disconnect();
  }, []);
  return ref;
}

function ScrollAnimate({ children, className = "", stagger = false }: { children: React.ReactNode; className?: string; stagger?: boolean }) {
  const ref = useScrollAnimation();
  return (
    <div ref={ref} className={stagger ? `scroll-animate-stagger ${className}` : className}>
      {children}
    </div>
  );
}

/* ==================== FOOTER ==================== */
function Footer({ config }: { config: Record<string, string> }) {
  return (
    <footer style={{ background: "var(--charcoal)", color: "#fff", padding: "60px 0 40px" }}>
      <div className="container">
        <div className="grid-footer" style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))", gap: 40, marginBottom: 40 }}>
          <div>
            <h3 style={{ fontSize: "1.2rem", fontWeight: 900, marginBottom: 12 }}>🔨 Chad the Flooring Guy</h3>
            <p style={{ color: "rgba(255,255,255,0.6)", lineHeight: 1.7, fontSize: "0.9rem" }}>
              Flooring repair &amp; installation. {config.serviceArea}. 20+ years. Nextdoor Neighborhood Favorite.
            </p>
            <p style={{ color: "rgba(255,255,255,0.4)", fontSize: "0.8rem", marginTop: 12 }}>Anthony Marie LLC</p>
          </div>
          <div>
            <h4 style={{ fontWeight: 700, marginBottom: 12 }}>Contact</h4>
            <p style={{ color: "rgba(255,255,255,0.6)", fontSize: "0.9rem", marginBottom: 8 }}>
              📞 <a href="tel:6513536238" style={{ color: "var(--gold)", textDecoration: "none" }}>651-353-6238</a>
            </p>
            <p style={{ color: "rgba(255,255,255,0.6)", fontSize: "0.9rem", marginBottom: 8 }}>
              📍 {config.address || "Woodbury, MN"}
            </p>
            <p style={{ color: "rgba(255,255,255,0.5)", fontSize: "0.85rem" }}>
              Text preferred — include photos for fastest response!
            </p>
          </div>
          <div>
            <h4 style={{ fontWeight: 700, marginBottom: 12 }}>Find Us</h4>
            <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
              <a href="https://nextdoor.com/pages/chad-the-flooring-guy-woodbury-mn/" target="_blank" rel="noopener noreferrer" style={{ color: "rgba(255,255,255,0.6)", textDecoration: "none", fontSize: "0.9rem" }}>→ Nextdoor</a>
              <a href="https://www.facebook.com/ChadTheFlooringGuy/" target="_blank" rel="noopener noreferrer" style={{ color: "rgba(255,255,255,0.6)", textDecoration: "none", fontSize: "0.9rem" }}>→ Facebook</a>
              <a href="https://linktr.ee/chadtheflooringguy" target="_blank" rel="noopener noreferrer" style={{ color: "rgba(255,255,255,0.6)", textDecoration: "none", fontSize: "0.9rem" }}>→ Linktree</a>
            </div>
          </div>
        </div>
        <div style={{ borderTop: "1px solid rgba(255,255,255,0.1)", paddingTop: 24, textAlign: "center" }}>
          <p style={{ color: "rgba(255,255,255,0.3)", fontSize: "0.8rem" }}>
            © {new Date().getFullYear()} Chad the Flooring Guy · Anthony Marie LLC · @ChadTheFlooringGuy
          </p>
          <p style={{ color: "rgba(255,255,255,0.25)", fontSize: "0.75rem", marginTop: 8 }}>
            Love and love, Katie and Chad ❤️
          </p>
        </div>
      </div>
    </footer>
  );
}
