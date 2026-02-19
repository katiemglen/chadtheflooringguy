import { mutation } from "./_generated/server";
import { v } from "convex/values";
import { internal } from "./_generated/api";
import { api } from "./_generated/api";

export const submitBid = mutation({
  args: {
    firstName: v.string(),
    lastName: v.string(),
    phone: v.string(),
    phoneType: v.string(),
    email: v.optional(v.string()),
    address: v.optional(v.string()),
    serviceType: v.string(),
    flooringType: v.string(),
    photoStorageIds: v.optional(v.array(v.string())),
    squareFootage: v.optional(v.string()),
    description: v.string(),
    timeline: v.string(),
    referralSource: v.string(),
  },
  handler: async (ctx, args) => {
    const photoCount = args.photoStorageIds?.length ?? 0;
    const id = await ctx.db.insert("bidSubmissions", {
      ...args,
      photoCount,
      status: "new",
      smsNotified: false,
      createdAt: new Date().toISOString(),
    });

    // Schedule SMS notification to Chad (runs immediately via email-to-SMS gateway)
    await ctx.scheduler.runAfter(0, api.actions.sendSmsNotification, {
      bidId: id,
      firstName: args.firstName,
      lastName: args.lastName,
      phone: args.phone,
      phoneType: args.phoneType,
      serviceType: args.serviceType,
      flooringType: args.flooringType,
      squareFootage: args.squareFootage,
      timeline: args.timeline,
      referralSource: args.referralSource,
      description: args.description,
      photoCount,
    });

    return { id, photoCount };
  },
});

export const generateUploadUrl = mutation({
  handler: async (ctx) => {
    return await ctx.storage.generateUploadUrl();
  },
});

export const updateBidStatus = mutation({
  args: {
    id: v.id("bidSubmissions"),
    status: v.string(),
    notes: v.optional(v.string()),
  },
  handler: async (ctx, args) => {
    await ctx.db.patch(args.id, {
      status: args.status,
      ...(args.notes !== undefined ? { notes: args.notes } : {}),
    });
  },
});
