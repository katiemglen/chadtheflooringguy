import { action } from "./_generated/server";
import { v } from "convex/values";
import { api } from "./_generated/api";

// FREE SMS via T-Mobile Email-to-SMS Gateway
// Uses Resend (free tier: 100 emails/day) to send an email to
// 6513536238@tmomail.net which arrives as a text message on Chad's phone.
//
// Set these environment variables in Convex dashboard:
// RESEND_API_KEY - Your Resend API key (free at resend.com)
// SITE_URL - Your Vercel deployment URL (optional, defaults to prod)

export const sendSmsNotification = action({
  args: {
    bidId: v.id("bidSubmissions"),
    firstName: v.string(),
    lastName: v.string(),
    phone: v.string(),
    phoneType: v.string(),
    serviceType: v.string(),
    flooringType: v.string(),
    squareFootage: v.optional(v.string()),
    timeline: v.string(),
    referralSource: v.string(),
    description: v.string(),
    photoCount: v.number(),
  },
  handler: async (ctx, args) => {
    const siteUrl = process.env.SITE_URL || "https://chadtheflooringguy.vercel.app";
    const resendKey = process.env.RESEND_API_KEY;

    const serviceLabels: Record<string, string> = {
      "repair": "Repair",
      "re-stretch": "Re-Stretch",
      "new-install": "New Installation",
      "transition": "Transition Repair",
      "other": "Other",
    };
    const flooringLabels: Record<string, string> = {
      "carpet": "Carpet",
      "lvp": "LVP",
      "hardwood-engineered": "Hardwood/Engineered",
      "not-sure": "Not Sure",
    };
    const timelineLabels: Record<string, string> = {
      "asap": "ASAP",
      "this-week": "This Week",
      "this-month": "This Month",
      "flexible": "Flexible",
    };
    const sourceLabels: Record<string, string> = {
      "nextdoor": "Nextdoor",
      "google": "Google",
      "facebook": "Facebook",
      "word-of-mouth": "Word of Mouth",
      "other": "Other",
    };
    const phoneTypeLabels: Record<string, string> = {
      "cell": "📱 Cell",
      "landline": "📞 Landline",
      "not-sure": "❓ Unknown",
    };

    const message = `🔨 New Bid Request
Name: ${args.firstName} ${args.lastName}
Phone: ${args.phone} (${phoneTypeLabels[args.phoneType] || args.phoneType})
Service: ${serviceLabels[args.serviceType] || args.serviceType}
Flooring: ${flooringLabels[args.flooringType] || args.flooringType}
Area: ${args.squareFootage || "Not provided"}
Timeline: ${timelineLabels[args.timeline] || args.timeline}
Source: ${sourceLabels[args.referralSource] || args.referralSource}

${args.description}

📸 ${args.photoCount} photo${args.photoCount !== 1 ? "s" : ""}
${siteUrl}/admin`;

    if (!resendKey) {
      console.log("📱 SMS notification (Resend not configured):", message);
      return { sent: false, reason: "Resend API key not configured — set RESEND_API_KEY in Convex env vars" };
    }

    // Send via T-Mobile email-to-SMS gateway
    // Chad's number: 651-353-6238 on T-Mobile → 6513536238@tmomail.net
    const smsGateway = "6513536238@tmomail.net";

    try {
      const response = await fetch("https://api.resend.com/emails", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${resendKey}`,
        },
        body: JSON.stringify({
          from: "Chad the Flooring Guy <onboarding@resend.dev>",
          to: [smsGateway],
          subject: `🔨 New Bid: ${args.firstName} ${args.lastName} - ${serviceLabels[args.serviceType] || args.serviceType}`,
          text: message,
        }),
      });

      if (!response.ok) {
        const err = await response.text();
        console.error("Resend error:", err);
        return { sent: false, reason: "Email-to-SMS failed: " + err };
      }

      // Mark as notified
      await ctx.runMutation(api.mutations.updateBidStatus, {
        id: args.bidId,
        status: "new",
      });

      return { sent: true, method: "email-to-sms" };
    } catch (err) {
      console.error("SMS notification error:", err);
      return { sent: false, reason: String(err) };
    }
  },
});
