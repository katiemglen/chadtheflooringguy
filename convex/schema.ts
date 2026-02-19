import { defineSchema, defineTable } from "convex/server";
import { v } from "convex/values";

export default defineSchema({
  siteConfig: defineTable({
    key: v.string(),
    value: v.string(),
    group: v.optional(v.string()),
  }).index("by_key", ["key"])
    .index("by_group", ["group"]),

  services: defineTable({
    name: v.string(),
    description: v.string(),
    shortDescription: v.optional(v.string()),
    icon: v.optional(v.string()),
    imageUrl: v.optional(v.string()),
    features: v.optional(v.array(v.string())),
    priceRange: v.optional(v.string()),
    tier: v.string(), // "primary", "standard", "additional"
    category: v.optional(v.string()),
    sortOrder: v.number(),
    active: v.boolean(),
  }).index("by_order", ["sortOrder"])
    .index("by_tier", ["tier"]),

  testimonials: defineTable({
    name: v.string(),
    text: v.string(),
    rating: v.optional(v.number()),
    source: v.optional(v.string()),
    neighborhood: v.optional(v.string()),
    featured: v.optional(v.boolean()),
    active: v.boolean(),
    sortOrder: v.number(),
  }).index("by_featured", ["featured"])
    .index("by_order", ["sortOrder"]),

  faqs: defineTable({
    question: v.string(),
    answer: v.string(),
    category: v.optional(v.string()),
    sortOrder: v.number(),
    active: v.boolean(),
  }).index("by_order", ["sortOrder"]),

  // Bid intake submissions — the core feature
  bidSubmissions: defineTable({
    firstName: v.string(),
    lastName: v.string(),
    phone: v.string(),
    phoneType: v.string(), // "cell", "landline", "not-sure"
    email: v.optional(v.string()),
    address: v.optional(v.string()),
    serviceType: v.string(),        // "repair", "re-stretch", "new-install", "other"
    flooringType: v.string(),       // "carpet", "lvp", "hardwood-engineered", "not-sure"
    photoStorageIds: v.optional(v.array(v.string())), // Convex storage IDs
    photoCount: v.number(),
    squareFootage: v.optional(v.string()),
    description: v.string(),
    timeline: v.string(),           // "asap", "this-week", "this-month", "flexible"
    referralSource: v.string(),     // "nextdoor", "google", "facebook", "word-of-mouth", "other"
    status: v.string(),             // "new", "contacted", "quoted", "booked", "completed", "closed"
    notes: v.optional(v.string()),
    smsNotified: v.boolean(),
    createdAt: v.string(),
  }).index("by_status", ["status"])
    .index("by_created", ["createdAt"]),

  // Tips / education content
  tips: defineTable({
    title: v.string(),
    content: v.string(),
    icon: v.optional(v.string()),
    sortOrder: v.number(),
    active: v.boolean(),
  }).index("by_order", ["sortOrder"]),
});
