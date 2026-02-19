"use client";

import { useQuery, useMutation } from "convex/react";
import { api } from "../../convex/_generated/api";
import { useState } from "react";
import { Id } from "../../convex/_generated/dataModel";

export default function AdminDashboard() {
  const submissions = useQuery(api.queries.getBidSubmissions);
  const updateStatus = useMutation(api.mutations.updateBidStatus);
  const [selected, setSelected] = useState<string | null>(null);

  const statusColors: Record<string, string> = {
    new: "#F5A623",
    contacted: "#3B82F6",
    quoted: "#8B5CF6",
    booked: "#2E5339",
    completed: "#059669",
    closed: "#6B7280",
  };

  const statusOptions = ["new", "contacted", "quoted", "booked", "completed", "closed"];

  if (!submissions) return <div style={{ padding: 40, textAlign: "center" }}>Loading submissions...</div>;

  return (
    <div style={{ minHeight: "100vh", background: "#f5f5f5", fontFamily: "'Open Sans', sans-serif" }}>
      <div style={{ background: "#2D2D2D", color: "#fff", padding: "16px 24px", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <h1 style={{ fontSize: "1.2rem", fontWeight: 800, fontFamily: "'Montserrat', sans-serif" }}>🔨 Chad the Flooring Guy — Bid Dashboard</h1>
        <a href="/" style={{ color: "#F5A623", textDecoration: "none", fontSize: "0.9rem" }}>← Back to Site</a>
      </div>

      <div style={{ maxWidth: 1200, margin: "24px auto", padding: "0 20px" }}>
        <div style={{ display: "flex", gap: 12, marginBottom: 24, flexWrap: "wrap" }}>
          <span style={{ padding: "6px 16px", background: "#fff", borderRadius: 8, fontSize: "0.85rem", fontWeight: 700 }}>
            Total: {submissions.length}
          </span>
          {statusOptions.map(s => {
            const count = submissions.filter(sub => sub.status === s).length;
            if (count === 0) return null;
            return (
              <span key={s} style={{ padding: "6px 16px", background: statusColors[s] + "20", color: statusColors[s], borderRadius: 8, fontSize: "0.85rem", fontWeight: 700, textTransform: "capitalize" }}>
                {s}: {count}
              </span>
            );
          })}
        </div>

        {submissions.length === 0 ? (
          <div style={{ background: "#fff", borderRadius: 12, padding: 48, textAlign: "center" }}>
            <p style={{ fontSize: "1.1rem", color: "#666" }}>No bid requests yet. They&apos;ll show up here as they come in!</p>
          </div>
        ) : (
          <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
            {submissions.map((sub) => (
              <div key={sub._id} style={{ background: "#fff", borderRadius: 12, border: "1px solid #e5e5e5", overflow: "hidden" }}>
                <div
                  onClick={() => setSelected(selected === sub._id ? null : sub._id)}
                  style={{ padding: "16px 24px", cursor: "pointer", display: "flex", justifyContent: "space-between", alignItems: "center" }}
                >
                  <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
                    <span style={{ width: 10, height: 10, borderRadius: "50%", background: statusColors[sub.status] || "#ccc" }} />
                    <div>
                      <span style={{ fontWeight: 700 }}>{sub.firstName} {sub.lastName}</span>
                      <span style={{ color: "#888", marginLeft: 12, fontSize: "0.85rem" }}>{sub.phone} {sub.phoneType === "landline" ? "📞" : sub.phoneType === "cell" ? "📱" : ""}</span>
                    </div>
                    <span style={{ padding: "3px 10px", background: "#F5A62320", color: "#d97706", borderRadius: 6, fontSize: "0.75rem", fontWeight: 700, textTransform: "capitalize" }}>{sub.serviceType}</span>
                    {sub.photoCount > 0 && (
                      <span style={{ fontSize: "0.8rem", color: "#059669" }}>📸 {sub.photoCount} photo{sub.photoCount > 1 ? "s" : ""}</span>
                    )}
                  </div>
                  <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                    <span style={{ color: "#999", fontSize: "0.8rem" }}>{new Date(sub.createdAt).toLocaleDateString()}</span>
                    <span style={{ transform: selected === sub._id ? "rotate(180deg)" : "none", transition: "0.2s" }}>▼</span>
                  </div>
                </div>

                {selected === sub._id && (
                  <div style={{ padding: "0 24px 24px", borderTop: "1px solid #f0f0f0" }}>
                    <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))", gap: 16, marginTop: 16 }}>
                      <Detail label="Phone" value={`${sub.phone} (${sub.phoneType === "cell" ? "📱 Cell" : sub.phoneType === "landline" ? "📞 Landline" : "Unknown"})`} isPhone />
                      <Detail label="Email" value={sub.email || "—"} />
                      <Detail label="Address" value={sub.address || "—"} />
                      <Detail label="Service" value={sub.serviceType} />
                      <Detail label="Flooring" value={sub.flooringType} />
                      <Detail label="Area" value={sub.squareFootage || "Not provided"} />
                      <Detail label="Timeline" value={sub.timeline} />
                      <Detail label="Source" value={sub.referralSource} />
                    </div>
                    <div style={{ marginTop: 16, padding: 16, background: "#f9f9f9", borderRadius: 8 }}>
                      <strong style={{ fontSize: "0.85rem" }}>Description:</strong>
                      <p style={{ color: "#555", lineHeight: 1.7, marginTop: 4 }}>{sub.description}</p>
                    </div>

                    {sub.photoStorageIds && sub.photoStorageIds.length > 0 && (
                      <div style={{ marginTop: 16 }}>
                        <strong style={{ fontSize: "0.85rem" }}>📸 Photos:</strong>
                        <div style={{ display: "flex", gap: 8, marginTop: 8, flexWrap: "wrap" }}>
                          {sub.photoStorageIds.map((id, i) => (
                            <PhotoThumb key={i} storageId={id as Id<"_storage">} />
                          ))}
                        </div>
                      </div>
                    )}

                    <div style={{ marginTop: 16, display: "flex", gap: 8, alignItems: "center", flexWrap: "wrap" }}>
                      <strong style={{ fontSize: "0.85rem", marginRight: 8 }}>Status:</strong>
                      {statusOptions.map(s => (
                        <button
                          key={s}
                          onClick={() => updateStatus({ id: sub._id, status: s })}
                          style={{
                            padding: "6px 14px", borderRadius: 6, border: "1px solid #ddd",
                            background: sub.status === s ? statusColors[s] : "#fff",
                            color: sub.status === s ? "#fff" : "#666",
                            cursor: "pointer", fontSize: "0.8rem", fontWeight: 600, textTransform: "capitalize",
                          }}
                        >
                          {s}
                        </button>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

function Detail({ label, value, isPhone }: { label: string; value: string; isPhone?: boolean }) {
  return (
    <div>
      <div style={{ fontSize: "0.75rem", color: "#999", fontWeight: 600, textTransform: "uppercase", marginBottom: 2 }}>{label}</div>
      {isPhone ? (
        <a href={`tel:${value}`} style={{ color: "#F5A623", fontWeight: 600, textDecoration: "none" }}>{value}</a>
      ) : (
        <div style={{ fontSize: "0.95rem", fontWeight: 500, textTransform: "capitalize" }}>{value}</div>
      )}
    </div>
  );
}

function PhotoThumb({ storageId }: { storageId: Id<"_storage"> }) {
  const url = useQuery(api.queries.getPhotoUrl, { storageId });
  if (!url) return <div style={{ width: 100, height: 100, background: "#eee", borderRadius: 8 }} />;
  return (
    <a href={url} target="_blank" rel="noopener noreferrer">
      <img src={url} alt="Uploaded photo" style={{ width: 100, height: 100, objectFit: "cover", borderRadius: 8, border: "1px solid #ddd" }} />
    </a>
  );
}
