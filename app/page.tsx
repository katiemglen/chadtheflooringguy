"use client";

import { useQuery, useMutation } from "convex/react";
import { api } from "../convex/_generated/api";
import { useState, useRef, FormEvent } from "react";

export default function Home() {
  const config = useQuery(api.queries.getSiteConfig);
  const services = useQuery(api.queries.getActiveServices);
  const testimonials = useQuery(api.queries.getTestimonials);
  const faqs = useQuery(api.queries.getFaqs);
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
      <Navbar config={config} />
      <Hero config={config} />
      <NeighborhoodFavorite />
      <ReviewLinks variant="top" />
      <RepairServices services={primaryServices} />
      <InstallServices services={standardServices} />
      <AdditionalServices services={additionalServices} />
      <Testimonials testimonials={testimonials || []} />
      <Tips tips={tips || []} />
      <ReviewLinks variant="middle" />
      <BidForm />
      <Faqs faqs={faqs || []} />
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
    { href: "#tips", label: "Tips" },
    { href: "#bid", label: "Get a Bid" },
    { href: "#faq", label: "FAQ" },
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
    <section style={{ position: "relative", minHeight: "90vh", display: "flex", alignItems: "center", paddingTop: 72, background: `linear-gradient(135deg, var(--bg) 0%, var(--bg-section) 50%, rgba(46,83,57,0.05) 100%)` }}>
      <div className="container" style={{ textAlign: "center", padding: "60px 20px" }}>
        <div className="badge badge-forest" style={{ marginBottom: 20 }}>
          ⭐ Nextdoor Neighborhood Favorite — Multiple Years Running
        </div>
        <h1 className="fade-up" style={{ fontSize: "clamp(2.2rem, 5vw, 4rem)", fontWeight: 900, lineHeight: 1.15, marginBottom: 20, color: "var(--charcoal)" }}>
          Repairing Your Floors<br />
          <span style={{ color: "var(--gold)" }}>Saves You Time & Money</span>
        </h1>
        <p style={{ fontSize: "1.15rem", color: "var(--text-dim)", maxWidth: 650, margin: "0 auto 16px", lineHeight: 1.7 }}>
          Expert flooring repair and installation in {config.serviceArea || "Woodbury, MN"}.
          20+ years of experience. Text photos for a fast estimate!
        </p>
        <p style={{ fontSize: "0.95rem", color: "var(--text-dim)", maxWidth: 500, margin: "0 auto 32px", lineHeight: 1.7 }}>
          Most people don&apos;t know who to call for flooring repairs. Now you do.
        </p>
        <div style={{ display: "flex", gap: 16, justifyContent: "center", flexWrap: "wrap" }}>
          <a href="#bid" className="btn btn-primary" style={{ fontSize: "1.1rem" }}>📸 Get a Free Bid</a>
          <a href="tel:6513536238" className="btn btn-outline">📞 Call 651-353-6238</a>
        </div>
      </div>
      {/* Placeholder for hero image */}
      <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, height: 80, background: "linear-gradient(to bottom, transparent, var(--bg))" }} />
    </section>
  );
}

/* ==================== NEIGHBORHOOD FAVORITE ==================== */
function NeighborhoodFavorite() {
  return (
    <section style={{ padding: "60px 0", background: "var(--charcoal)", color: "#fff" }}>
      <div className="container" style={{ textAlign: "center" }}>
        <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 40, flexWrap: "wrap" }}>
          <div>
            <div style={{ fontSize: "3rem", marginBottom: 8 }}>🏆</div>
            <h3 style={{ fontSize: "1.5rem", fontWeight: 900, marginBottom: 8 }}>Nextdoor Neighborhood Favorite</h3>
            <p style={{ color: "rgba(255,255,255,0.7)", maxWidth: 500, margin: "0 auto", lineHeight: 1.7 }}>
              Awarded multiple years in a row. When your neighbors need flooring help, they recommend Chad.
              Word-of-mouth is our #1 growth engine — because quality work speaks for itself.
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
              Want to learn more about Chad&apos;s process and see his work? Read reviews from real neighbors who&apos;ve trusted Chad with their floors — and see why they keep recommending him.
            </p>
          </>
        ) : (
          <>
            <h2 style={{ fontSize: "1.5rem", fontWeight: 900, marginBottom: 8, color: "#fff" }}>
              Loved Your Experience? Leave a Review! 🥰
            </h2>
            <p style={{ color: "rgba(255,255,255,0.7)", lineHeight: 1.8, marginBottom: 24, fontSize: "0.95rem" }}>
              Your review helps other neighbors find quality flooring help. We REALLY appreciate it — every review makes a difference!
            </p>
          </>
        )}
        <div style={{ display: "flex", gap: 16, justifyContent: "center", flexWrap: "wrap" }}>
          {reviewLinks.map((r) => (
            <a
              key={r.name}
              href={r.url}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: "flex",
                alignItems: "center",
                gap: 10,
                padding: "14px 28px",
                borderRadius: 12,
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
      </div>
    </section>
  );
}

/* ==================== REPAIR SERVICES (Primary) ==================== */
function RepairServices({ services }: { services: any[] }) {
  return (
    <section id="services" style={{ padding: "100px 0" }}>
      <div className="container">
        <div className="section-head">
          <div className="badge badge-gold" style={{ marginBottom: 12 }}>🥇 Our Specialty</div>
          <h2>Flooring Repair & Re-Stretching</h2>
          <div className="section-bar" />
          <p>
            Flooring repair specialists are hard to find. Most people don&apos;t even know this service exists.
            Chad is one of the few — and he&apos;s been doing it for 20+ years.
          </p>
          <p style={{ color: "var(--text-dim)", maxWidth: 700, margin: "16px auto 0", lineHeight: 1.8, fontSize: "0.95rem" }}>
            Some fixes are quick wins — a simple seam repair, a small patch, or a single transition fix. With over 20 years of experience, Chad can often knock these out efficiently and have your floors looking perfect in no time.
          </p>
          <p style={{ color: "var(--text-dim)", maxWidth: 700, margin: "12px auto 0", lineHeight: 1.8, fontSize: "0.95rem" }}>
            Other projects are a different story. An entire house that needs re-stretching, multiple doorway transitions, extensive damage across several rooms — these are the jobs that challenge every tool in Chad&apos;s toolbox and every bit of expertise he&apos;s built over two decades. Think of it like this: sometimes it&apos;s one job, and sometimes it&apos;s four jobs rolled into one. The price reflects the scope, the skill required, and the time it takes to get it done right. Either way, Chad will walk you through exactly what&apos;s needed before any work begins — no surprises.
          </p>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: 20, maxWidth: 700, margin: "0 auto" }}>
          {services.map((s) => (
            <div key={s._id} className="card" style={{ padding: 28, textAlign: "center" }}>
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
          <p>Full room or whole house — Chad installs it right the first time and helps you source the best materials at the best price.</p>
        </div>
        <div style={{ display: "flex", gap: 20, justifyContent: "center", flexWrap: "wrap" }}>
          {services.map((s) => (
            <div key={s._id} className="card" style={{ padding: 28, textAlign: "center", maxWidth: 380, width: "100%" }}>
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
          <p style={{ fontSize: "0.95rem" }}>Available for the right project. Contact Chad for a custom quote.</p>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))", gap: 20, maxWidth: 700, margin: "0 auto", justifyItems: "center" }}>
          {services.map((s) => (
            <div key={s._id} className="card" style={{ padding: 24, textAlign: "center" }}>
              <div style={{ marginBottom: 8 }}>
                <span style={{ fontSize: "1.5rem" }}>{s.icon}</span>
              </div>
              <h3 style={{ fontSize: "1rem", fontWeight: 800, marginBottom: 8 }}>{s.name}</h3>
              <p style={{ color: "var(--text-dim)", fontSize: "0.85rem", lineHeight: 1.6 }}>{s.shortDescription}</p>
            </div>
          ))}
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
          <p>Real reviews from real neighbors. Chad&apos;s reputation is built one repair at a time.</p>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(320px, 1fr))", gap: 20 }}>
          {testimonials.map((t) => (
            <div key={t._id} className="card" style={{ padding: 28 }}>
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
      </div>
    </section>
  );
}

/* ==================== TIPS ==================== */
function Tips({ tips }: { tips: any[] }) {
  if (tips.length === 0) return null;
  return (
    <section id="tips" style={{ padding: "80px 0" }}>
      <div className="container">
        <div className="section-head">
          <h2>Flooring Tips from Chad</h2>
          <div className="section-bar" />
          <p>Knowledge is power. Here&apos;s what Chad wants every homeowner to know.</p>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(260px, 1fr))", gap: 20 }}>
          {tips.map((t) => (
            <div key={t._id} className="card" style={{ padding: 24 }}>
              <div style={{ fontSize: "2rem", marginBottom: 8 }}>{t.icon}</div>
              <h3 style={{ fontSize: "1rem", fontWeight: 800, marginBottom: 8, color: "var(--charcoal)" }}>{t.title}</h3>
              <p style={{ color: "var(--text-dim)", fontSize: "0.85rem", lineHeight: 1.7 }}>{t.content}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

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
          <p>Fill out the form below and Chad will get back to you — usually within 24 hours. Sending a text with photos is the fastest way to get an estimate! If you&apos;d prefer to call Chad directly, you can reach him at <a href="tel:6513536238" style={{ color: "var(--gold)", fontWeight: 700 }}>651-353-6238</a> — he&apos;s usually on a job, so texting is more efficient, but he&apos;s always happy to chat when he&apos;s free!</p>
        </div>
        <form onSubmit={handleSubmit} className="card" style={{ padding: 36 }}>
          {/* First & Last Name */}
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}>
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
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}>
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
                <option value="not-sure">Not Sure</option>
              </select>
            </div>
          </div>

          {/* Email & Address */}
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}>
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
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}>
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
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}>
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
            <textarea className="form-textarea" required value={form.description} onChange={e => updateField("description", e.target.value)} placeholder="Tell Chad what's going on with your floors — what needs fixing, what room, any details that help..." rows={4} />
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
              <option value="google">Google</option>
              <option value="facebook">Facebook</option>
              <option value="word-of-mouth">Word of Mouth / Referral</option>
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

/* ==================== FAQ ==================== */
function Faqs({ faqs }: { faqs: any[] }) {
  const [open, setOpen] = useState<string | null>(null);
  if (faqs.length === 0) return null;
  return (
    <section id="faq" style={{ padding: "100px 0" }}>
      <div className="container" style={{ maxWidth: 800 }}>
        <div className="section-head">
          <h2>Frequently Asked Questions</h2>
          <div className="section-bar" />
        </div>
        {faqs.map((f) => (
          <div key={f._id} className="faq-item">
            <button className="faq-q" onClick={() => setOpen(open === f._id ? null : f._id)}>
              {f.question}
              <span style={{ fontSize: "1.2rem", transition: "transform 0.3s", transform: open === f._id ? "rotate(45deg)" : "none", color: "var(--gold)" }}>+</span>
            </button>
            {open === f._id && <div className="faq-a">{f.answer}</div>}
          </div>
        ))}
      </div>
    </section>
  );
}

/* ==================== FOOTER ==================== */
function Footer({ config }: { config: Record<string, string> }) {
  return (
    <footer style={{ background: "var(--charcoal)", color: "#fff", padding: "60px 0 40px" }}>
      <div className="container">
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))", gap: 40, marginBottom: 40 }}>
          <div>
            <h3 style={{ fontSize: "1.2rem", fontWeight: 900, marginBottom: 12 }}>🔨 Chad the Flooring Guy</h3>
            <p style={{ color: "rgba(255,255,255,0.6)", lineHeight: 1.7, fontSize: "0.9rem" }}>
              Expert flooring repair and installation serving {config.serviceArea}. 20+ years of experience. Nextdoor Neighborhood Favorite.
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
