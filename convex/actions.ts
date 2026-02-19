import { action } from "./_generated/server";
import { v } from "convex/values";
import { api } from "./_generated/api";

// TODO: Set these environment variables in Convex dashboard:
// TWILIO_ACCOUNT_SID - Your Twilio Account SID
// TWILIO_AUTH_TOKEN - Your Twilio Auth Token
// TWILIO_PHONE_NUMBER - Your Twilio phone number (e.g., +1XXXXXXXXXX)
// CHAD_PHONE_NUMBER - Chad's phone: +16513536238
// SITE_URL - Your Vercel deployment URL

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

Description: ${args.description}

📸 Photos: ${args.photoCount} attached
${siteUrl}/admin`;

    // TODO: Uncomment when Twilio credentials are configured
    /*
    const accountSid = process.env.TWILIO_ACCOUNT_SID;
    const authToken = process.env.TWILIO_AUTH_TOKEN;
    const twilioPhone = process.env.TWILIO_PHONE_NUMBER;
    const chadPhone = process.env.CHAD_PHONE_NUMBER || "+16513536238";

    if (!accountSid || !authToken || !twilioPhone) {
      console.log("Twilio not configured. SMS would have been:", message);
      return { sent: false, reason: "Twilio not configured" };
    }

    const url = `https://api.twilio.com/2010-04-01/Accounts/${accountSid}/Messages.json`;
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
        "Authorization": "Basic " + btoa(`${accountSid}:${authToken}`),
      },
      body: new URLSearchParams({
        To: chadPhone,
        From: twilioPhone,
        Body: message,
      }),
    });

    if (!response.ok) {
      console.error("Twilio error:", await response.text());
      return { sent: false, reason: "Twilio API error" };
    }

    // Mark as notified
    await ctx.runMutation(api.mutations.updateBidStatus, {
      id: args.bidId,
      status: "new",
    });

    return { sent: true };
    */

    console.log("📱 SMS notification (Twilio not configured):", message);
    return { sent: false, reason: "Twilio not configured — see console for message preview" };
  },
});
