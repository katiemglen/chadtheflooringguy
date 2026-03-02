"use client";

import { useQuery, useMutation } from "convex/react";
import { api } from "../convex/_generated/api";
import { useState, useRef, useEffect, useCallback } from "react";
import Image from "next/image";
import Link from "next/link";
import { tipPosts } from "./tips/data"; // used by TipsPreview

// Hardcoded fallback data so the page renders immediately for crawlers/AI bots
const FALLBACK_CONFIG: Record<string, string> = {
  serviceArea: "Woodbury, MN & Washington County",
  address: "Woodbury, MN",
  phone: "651-353-6238",
};

const FALLBACK_SERVICES = [
  { _id: "f1", tier: "primary", icon: "🔧", name: "Carpet Repair & Re-Stretching", priceRange: "$149–$499", description: "Wrinkles, bumps, pet damage, seam repairs, burn patches. Power stretching and professional radio-wave seaming — targeted fixes that extend your carpet's life by years.", features: ["Wrinkle & bump removal", "Pet damage patching", "Seam repair", "Burn & stain patching", "Stair carpet repair"], active: true, order: 1 },
  { _id: "f2", tier: "primary", icon: "📐", name: "LVP & Vinyl Plank Repair", priceRange: "$199–$799", description: "Single-board replacement, click-lock fixes, water damage repair. No whole-floor teardown needed — save thousands vs full replacement.", features: ["Single-board replacement", "Water damage repair", "Click-lock fixes", "Transition strip repair", "Subfloor leveling"], active: true, order: 2 },
  { _id: "f3", tier: "primary", icon: "🪵", name: "Hardwood & Engineered Wood Repair", priceRange: "$299–$1199", description: "Board replacement, scratch repair, water damage fixes. Stained and finished to blend seamlessly with your existing floor.", features: ["Board replacement", "Scratch & dent repair", "Water damage repair", "Engineered wood fixes"], active: true, order: 3 },
  { _id: "f4", tier: "primary", icon: "🚪", name: "Floor Transition Repair", priceRange: "$99–$399", description: "Fix gaps between rooms, replace broken transition strips, level uneven thresholds. A $200 fix now prevents a $2,000 problem later.", features: ["Transition strip replacement", "Doorway gap repair", "Threshold leveling", "Stair nosing repair"], active: true, order: 4 },
];

// Testimonials load from Convex (social media reviews). Empty fallback hides section until real data loads.
const FALLBACK_TESTIMONIALS: any[] = [];

export default function Home() {
  const configQuery = useQuery(api.queries.getSiteConfig);
  const servicesQuery = useQuery(api.queries.getActiveServices);
  const testimonialsQuery = useQuery(api.queries.getTestimonials);
  const tips = useQuery(api.queries.getTips);

  // Use Convex data when available, fallback to hardcoded for SSR/initial render
  const config = configQuery || FALLBACK_CONFIG;
  const services = servicesQuery || FALLBACK_SERVICES;
  const testimonials = testimonialsQuery || FALLBACK_TESTIMONIALS;

  const primaryServices = services.filter((s: any) => s.tier === "primary");
  const standardServices = services.filter((s: any) => s.tier === "standard");
  const additionalServices = services.filter((s: any) => s.tier === "additional");

  return (
    <>
      <ScrollProgress />
      <BackToTop />
      <Navbar config={config} />
      <Hero config={config} />
      <NeighborhoodFavorite />
      <WhyChadSavesMoney />
      <ReviewLinks variant="top" />
      <MeetUs />
      <RepairServices services={primaryServices} />
      <NewInstallations />
      <HomeSellerSection />
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
            Expert Flooring Repairs<br />
            <span style={{ color: "var(--gold)" }}>Done Right the First Time</span>
          </h1>
          <p style={{ fontSize: "1.15rem", color: "rgba(255,255,255,0.85)", maxWidth: 650, margin: "0 auto 16px", lineHeight: 1.7 }}>
            Expert flooring repair and installation in {config.serviceArea || "Woodbury, MN & Washington County"}.
            20+ years insured. Transparent itemized quotes &amp; DIY savings. Text photos for a free estimate!
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
/* ==================== NEW INSTALLATIONS ==================== */
function NewInstallations() {
  const tiers = [
    { icon: "💎", name: "Premium / 100-Year Tier", years: "20+ years / lifetime", desc: "Luxury materials designed for lifetime performance \u2014 never replace again. This tier often includes pre-finished hardwood." },
    { icon: "⭐", name: "Mid-Range Tier", years: "7–10 years", desc: "Built to last. This is Chad\u2019s most popular and recommended option for most homeowners who live in the house full-time.", featured: true },
    { icon: "🏷️", name: "Budget Tier", years: "3–5 years", desc: "Ideal for rental properties, quick flips, or situations where you\u2019re not staying long-term. Chad happily installs these lower-tier options when they match your goals." },
  ];
  return (
    <section className="section-alt" style={{ padding: "80px 0" }}>
      <div className="container" style={{ maxWidth: 900 }}>
        <div className="section-head">
          <div className="badge badge-forest" style={{ marginBottom: 12 }}>🏠 Installation</div>
          <h2>New LVP &amp; Carpet Installations</h2>
          <div className="section-bar" />
          <p style={{ maxWidth: 600, margin: "0 auto" }}>
            Custom projects &mdash; no fixed price, because every home and lifestyle is unique.
          </p>
        </div>
        <p style={{ color: "var(--text-dim)", lineHeight: 1.8, textAlign: "center", maxWidth: 700, margin: "0 auto 32px", fontSize: "0.95rem" }}>
          Chad Bublitz personally walks homeowners through the best flooring choice based on how long you plan to live in the home, your current living conditions (pets, kids, high-traffic areas), and how long you want the flooring to last.
        </p>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: 20, marginBottom: 28 }}>
          {tiers.map((t) => (
            <div key={t.name} style={{ padding: "28px 24px", borderRadius: 16, background: "var(--bg-card)", border: t.featured ? "2px solid var(--gold)" : "1px solid rgba(0,0,0,0.06)", boxShadow: t.featured ? "0 2px 24px rgba(245,166,35,0.12)" : "0 2px 12px rgba(0,0,0,0.03)", position: "relative" }}>
              {t.featured && <div style={{ position: "absolute", top: -10, left: "50%", transform: "translateX(-50%)", background: "var(--gold)", color: "#fff", fontSize: "0.7rem", fontWeight: 700, padding: "3px 14px", borderRadius: 100, textTransform: "uppercase", letterSpacing: "0.5px" }}>Most Popular</div>}
              <div style={{ fontSize: "2rem", marginBottom: 12, textAlign: "center" }}>{t.icon}</div>
              <h3 style={{ fontSize: "1.1rem", fontWeight: 700, marginBottom: 4, color: "#2d2d2d", textAlign: "center" }}>{t.name}</h3>
              <div style={{ fontSize: "0.85rem", fontWeight: 600, color: "var(--gold-dark)", textAlign: "center", marginBottom: 12 }}>{t.years}</div>
              <p style={{ color: "var(--text-dim)", lineHeight: 1.6, margin: 0, fontSize: "0.9rem" }}>{t.desc}</p>
            </div>
          ))}
        </div>
        <div style={{ textAlign: "center", padding: "20px 24px", background: "rgba(245,166,35,0.06)", borderRadius: 12, border: "1px solid rgba(245,166,35,0.15)", maxWidth: 700, margin: "0 auto 24px" }}>
          <p style={{ color: "var(--text-dim)", fontSize: "0.88rem", lineHeight: 1.6, margin: 0 }}>
            Chad installs <strong>pre-finished hardwood</strong> for the right projects. He does not install traditional solid hardwood flooring, but has trusted professional recommendations if that&apos;s what your project needs.
          </p>
        </div>
        <div style={{ textAlign: "center" }}>
          <p style={{ color: "var(--text-dim)", lineHeight: 1.7, marginBottom: 16 }}>
            Text photos of your space to Chad Bublitz at <a href="sms:6513536238" style={{ color: "var(--gold-dark)", fontWeight: 700, textDecoration: "none" }}>651.353.6238</a>. He&apos;ll review your situation and help you choose the smartest, most cost-effective option for your budget and lifestyle.
          </p>
        </div>
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
/* ==================== WHY CHAD SAVES YOU MONEY ==================== */
function WhyChadSavesMoney() {
  const points = [
    { icon: "📋", title: "Transparent Itemized Quotes", desc: "You see every line item and choose what to DIY — demo, garbage, material pickup at cost. Save hundreds on every job." },
    { icon: "🔧", title: "Specialized Tools = Targeted Repairs", desc: "Professional radio-wave carpet seaming — invisible patches bonded from the top with no heat, no smoke, no fiber damage. No full restretch needed. Single-board LVP removal (no whole-floor teardown risk)." },
    { icon: "💪", title: "20+ Years + Proper Adhesives", desc: "One-and-done repairs. No callbacks, no expensive redos. Done right the first time with industry-grade materials." },
    { icon: "📊", title: "Less Than $1.37/Day", desc: "A $499 carpet repair = less than $1.37/day over a year. Compare that to $800+ when a cheap fix fails and you pay twice. Typical full-room replacement: $3,500–$8,500. Chad\u2019s targeted repair: $149–$1199 + your DIY savings." },
    { icon: "🎯", title: "You Only Pay for What\u2019s Broken", desc: "Chad repairs the damaged area only — not the whole floor. A few bad LVP boards don\u2019t mean a full-room teardown. A carpet wrinkle doesn\u2019t mean new carpet. Targeted repairs start at $149." },
    { icon: "✅", title: "No Surprises — The Quote Is the Price", desc: "Chad\u2019s itemized quote is the price you pay. No hidden fees, no surprise add-ons, no \u2018well, once we got in there...\u2019 conversations. What you see is what you get." },
  ];
  return (
    <section style={{ padding: "60px 0", background: "var(--bg-section)" }}>
      <div className="container" style={{ maxWidth: 900 }}>
        <div className="section-head">
          <h2>Why Chad Bublitz Saves You Money Long-Term</h2>
          <div className="section-bar" />
          <p style={{ maxWidth: 550, margin: "0 auto" }}>Repairing your floors saves you time &amp; money. Here&apos;s exactly how.</p>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))", gap: 20 }}>
          {points.map((p, i) => (
            <div key={i} style={{ padding: "28px 24px", borderRadius: 16, background: "var(--bg-card)", border: "1px solid rgba(0,0,0,0.06)", boxShadow: "0 2px 12px rgba(0,0,0,0.03)" }}>
              <div style={{ fontSize: "2rem", marginBottom: 12 }}>{p.icon}</div>
              <h3 style={{ fontSize: "1.05rem", fontWeight: 700, marginBottom: 8, color: "#2d2d2d" }}>{p.title}</h3>
              <p style={{ color: "var(--text-dim)", lineHeight: 1.6, margin: 0, fontSize: "0.92rem" }}>{p.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ==================== HOME SELLER / REALTOR SECTION ==================== */
function HomeSellerSection() {
  const stats = [
    { value: "$149–$799", label: "typical pre-listing repair" },
    { value: "$3,500–$8,500", label: "what full replacement costs" },
    { value: "Same day", label: "most repairs completed" },
  ];
  return (
    <section style={{ padding: "80px 0", background: "linear-gradient(135deg, #2d2d2d 0%, #1a1a1a 100%)", color: "#fff" }}>
      <div className="container" style={{ maxWidth: 800, textAlign: "center" }}>
        <div style={{ display: "inline-flex", alignItems: "center", gap: 6, padding: "6px 16px", borderRadius: 100, fontSize: "0.8rem", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.5px", background: "rgba(196,136,42,0.2)", color: "var(--gold)", border: "1px solid rgba(196,136,42,0.4)", marginBottom: 20 }}>
          🏡 For Home Sellers &amp; Realtors
        </div>
        <h2 style={{ fontSize: "clamp(1.5rem, 3vw, 2.2rem)", fontWeight: 800, marginBottom: 16 }}>
          Selling Your Home? Fix the Floors — Don&apos;t Replace Them
        </h2>
        <p style={{ fontSize: "1.05rem", color: "rgba(255,255,255,0.8)", lineHeight: 1.7, maxWidth: 650, margin: "0 auto 32px" }}>
          Most sellers think damaged carpet or scratched LVP means a full replacement before listing. It usually doesn&apos;t. Chad does targeted repairs that photograph beautifully, pass buyer inspection, and save thousands compared to replacement. Fast turnaround — most repairs done same day.
        </p>
        <div style={{ display: "flex", gap: 24, justifyContent: "center", flexWrap: "wrap", marginBottom: 32 }}>
          {stats.map((s) => (
            <div key={s.label} style={{ textAlign: "center", minWidth: 140 }}>
              <div style={{ fontSize: "1.4rem", fontWeight: 900, color: "var(--gold)", fontFamily: "'Montserrat', sans-serif" }}>{s.value}</div>
              <div style={{ fontSize: "0.8rem", color: "rgba(255,255,255,0.5)", marginTop: 4 }}>{s.label}</div>
            </div>
          ))}
        </div>
        <div style={{ display: "flex", gap: 12, justifyContent: "center", flexWrap: "wrap", marginBottom: 16 }}>
          <a href="/home-seller-flooring-repair" style={{ display: "inline-flex", alignItems: "center", gap: 8, padding: "14px 28px", borderRadius: 10, background: "var(--gold)", color: "#fff", fontWeight: 700, textDecoration: "none" }}>
            See Pre-Listing Repair Options →
          </a>
        </div>
        <a href="sms:6513536238" style={{ color: "var(--gold)", fontWeight: 600, textDecoration: "none", fontSize: "0.9rem" }}>
          Or text photos now to 651-353-6238
        </a>
      </div>
    </section>
  );
}

/* ==================== CONTACT / BID ==================== */
function BidForm() {
  return (
    <section id="bid" className="section-alt" style={{ padding: "80px 0" }}>
      <div className="container" style={{ maxWidth: 900 }}>
        <div className="section-head">
          <h2>Let&apos;s Find Solutions!</h2>
          <div className="section-bar" />
          <p style={{ maxWidth: 550, margin: "0 auto" }}>
            <strong>Repairing your floors saves you time &amp; money.</strong> Chad responds to every inquiry personally — usually same day.
          </p>
        </div>

        {/* Contact Dock — 2 Action Tiles */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: 20, marginBottom: 32 }}>
          {/* Tile 1 — Call */}
          <div style={{ background: "var(--bg-card)", borderRadius: 16, padding: "32px 24px", textAlign: "center", border: "1px solid rgba(0,0,0,0.08)", boxShadow: "0 2px 16px rgba(0,0,0,0.04)" }}>
            <div style={{ fontSize: "2.2rem", marginBottom: 12 }}>📞</div>
            <div style={{ fontSize: "1.15rem", fontWeight: 700, marginBottom: 4, color: "#2d2d2d" }}>Call or Text</div>
            <div style={{ fontSize: "1.4rem", fontWeight: 800, color: "var(--gold)", marginBottom: 4 }}>651-353-6238</div>
            <div style={{ fontSize: "0.85rem", color: "var(--text-dim)", marginBottom: 20 }}>Mon–Fri, 7am–5pm</div>
            <a href="tel:6513536238" style={{ display: "inline-flex", alignItems: "center", justifyContent: "center", gap: 8, width: "100%", padding: "14px 20px", borderRadius: 10, background: "var(--gold)", color: "#fff", fontWeight: 700, fontSize: "1rem", textDecoration: "none", border: "none" }}>
              Call 651-353-6238
            </a>
          </div>

          {/* Tile 2 — Photo Quote (Featured) */}
          <div style={{ background: "var(--bg-card)", borderRadius: 16, padding: "32px 24px", textAlign: "center", border: "2px solid var(--gold)", boxShadow: "0 2px 24px rgba(245,166,35,0.12)" }}>
            <div style={{ fontSize: "2.2rem", marginBottom: 12 }}>📷</div>
            <div style={{ fontSize: "1.15rem", fontWeight: 700, marginBottom: 4, color: "#2d2d2d" }}>Fastest Quote</div>
            <div style={{ fontSize: "0.9rem", color: "var(--text-dim)", lineHeight: 1.6, marginBottom: 14 }}>
              Text a few photos of the flooring area(s) that need repair — <strong>from different angles</strong> — along with your <strong>first and last name</strong>. Chad reviews and responds with a free estimate, usually same day.
            </div>
            <div style={{ fontSize: "0.85rem", marginBottom: 16 }}>
              <span style={{ fontWeight: 700 }}>Text to: </span>
              <a href="sms:6513536238" style={{ color: "var(--gold-dark)", textDecoration: "none", fontWeight: 600 }}>651-353-6238</a>
            </div>
            <div style={{ fontSize: "0.8rem", fontWeight: 700, marginBottom: 8, color: "#2d2d2d" }}>What to photograph:</div>
            <ul style={{ listStyle: "none", padding: 0, margin: "0 0 20px", textAlign: "left", display: "inline-block" }}>
              {[
                "The full flooring area from a standing position",
                "Close-ups of damage (wrinkles, tears, pet damage, transitions)",
                "Any doorways, thresholds, or edges involved",
                "What\u2019s nearby \u2014 furniture, walls, stairs",
              ].map((item, i) => (
                <li key={i} style={{ display: "flex", gap: 8, alignItems: "flex-start", fontSize: "0.82rem", color: "var(--text-dim)", padding: "3px 0" }}>
                  <span style={{ color: "var(--gold)", fontWeight: 700, flexShrink: 0 }}>✓</span>
                  {item}
                </li>
              ))}
            </ul>
            <a href="sms:6513536238" style={{ display: "inline-flex", alignItems: "center", justifyContent: "center", gap: 8, width: "100%", padding: "14px 20px", borderRadius: 10, background: "var(--gold)", color: "#fff", fontWeight: 700, fontSize: "1rem", textDecoration: "none", border: "none" }}>
              📷 Text Photos Now
            </a>
          </div>
        </div>

        {/* Service Badges */}
        <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: 10, marginBottom: 28 }}>
          {["Repair Floor Transitions", "Remove Carpet Wrinkles", "Repair Doorways", "Pet Damage + More!"].map((badge) => (
            <span key={badge} style={{ display: "inline-flex", alignItems: "center", gap: 6, padding: "6px 16px", borderRadius: 100, fontSize: "0.78rem", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.5px", background: "rgba(245,166,35,0.12)", color: "var(--gold-dark)", border: "1px solid rgba(245,166,35,0.25)" }}>
              {badge}
            </span>
          ))}
        </div>

        {/* Response time */}
        <div style={{ textAlign: "center", marginBottom: 24 }}>
          <p style={{ fontSize: "0.9rem", color: "var(--text-dim)" }}>
            ⏱ We respond within <strong>24 hours</strong>. No site visit required for initial estimates.
          </p>
        </div>

        {/* Thank You Note */}
        <div style={{ textAlign: "center", maxWidth: 500, margin: "0 auto", padding: "24px", background: "var(--bg-section)", borderRadius: 16, border: "1px solid rgba(245,166,35,0.15)" }}>
          <p style={{ fontSize: "0.95rem", color: "var(--text-dim)", lineHeight: 1.7, margin: 0, fontStyle: "italic" }}>
            &ldquo;Thank you for the love + support! We are so blessed by a wonderful community of happy people!&rdquo;
          </p>
          <p style={{ fontSize: "0.85rem", color: "var(--gold-dark)", fontWeight: 700, marginTop: 8, marginBottom: 0 }}>
            — Chad &amp; Katie
          </p>
        </div>

        {/* Insured badge */}
        <div style={{ textAlign: "center", marginTop: 20 }}>
          <p style={{ fontSize: "0.82rem", color: "var(--text-light)" }}>
            Chad Bublitz · Anthony Marie LLC · Insured · 20+ Years Experience
          </p>
        </div>
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

    // Collect all animatable elements
    const targets: Element[] = [];
    if (el.classList.contains("scroll-animate")) targets.push(el);
    el.querySelectorAll(".scroll-animate").forEach((child) => targets.push(child));

    // Hide elements that are NOT yet in viewport (below the fold)
    targets.forEach((target) => {
      const rect = target.getBoundingClientRect();
      if (rect.top >= window.innerHeight) {
        target.classList.add("scroll-hidden");
      }
      // Elements already in viewport stay visible (opacity: 1 default)
    });

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.remove("scroll-hidden");
            entry.target.classList.add("animate-in");
          }
        });
      },
      { threshold: 0.05, rootMargin: "0px 0px -20px 0px" }
    );
    targets.forEach((target) => observer.observe(target));
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
