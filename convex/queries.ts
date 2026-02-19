import { query } from "./_generated/server";
import { v } from "convex/values";

export const getSiteConfig = query({
  handler: async (ctx) => {
    const configs = await ctx.db.query("siteConfig").collect();
    const map: Record<string, string> = {};
    for (const c of configs) map[c.key] = c.value;
    return map;
  },
});

export const getActiveServices = query({
  handler: async (ctx) => {
    const all = await ctx.db.query("services").withIndex("by_order").collect();
    return all.filter((s) => s.active);
  },
});

export const getServicesByTier = query({
  args: { tier: v.string() },
  handler: async (ctx, args) => {
    const all = await ctx.db.query("services").withIndex("by_order").collect();
    return all.filter((s) => s.active && s.tier === args.tier);
  },
});

export const getTestimonials = query({
  handler: async (ctx) => {
    const all = await ctx.db.query("testimonials").withIndex("by_order").collect();
    return all.filter((t) => t.active);
  },
});

export const getFaqs = query({
  handler: async (ctx) => {
    const all = await ctx.db.query("faqs").withIndex("by_order").collect();
    return all.filter((f) => f.active);
  },
});

export const getTips = query({
  handler: async (ctx) => {
    const all = await ctx.db.query("tips").withIndex("by_order").collect();
    return all.filter((t) => t.active);
  },
});

// Admin queries
export const getBidSubmissions = query({
  handler: async (ctx) => {
    return await ctx.db.query("bidSubmissions").withIndex("by_created").order("desc").collect();
  },
});

export const getBidSubmission = query({
  args: { id: v.id("bidSubmissions") },
  handler: async (ctx, args) => {
    return await ctx.db.get(args.id);
  },
});

export const getPhotoUrl = query({
  args: { storageId: v.id("_storage") },
  handler: async (ctx, args) => {
    return await ctx.storage.getUrl(args.storageId);
  },
});
