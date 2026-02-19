import { mutation } from "./_generated/server";

export const seedInitialData = mutation({
  handler: async (ctx) => {
    const existing = await ctx.db.query("siteConfig").first();
    if (existing) throw new Error("Already seeded!");

    // ==================== SITE CONFIG ====================
    const configs = [
      { key: "companyName", value: "Chad the Flooring Guy", group: "branding" },
      { key: "tagline", value: "Repairing Your Floors Saves You Time & Money", group: "branding" },
      { key: "phone", value: "651-353-6238", group: "contact" },
      { key: "email", value: "", group: "contact" },
      { key: "address", value: "Woodbury, MN", group: "contact" },
      { key: "serviceArea", value: "Woodbury, MN and surrounding neighborhoods", group: "contact" },
      { key: "owner", value: "Chad Bublitz", group: "branding" },
      { key: "llc", value: "Anthony Marie LLC", group: "branding" },
      { key: "experience", value: "20+ years", group: "branding" },
      { key: "metaDescription", value: "Expert flooring repair and installation in Woodbury, MN. Carpet repair, re-stretching, LVP repair, and installation. Nextdoor Neighborhood Favorite. Text photos for a fast estimate!", group: "seo" },
      { key: "facebook", value: "https://www.facebook.com/ChadTheFlooringGuy/", group: "social" },
      { key: "nextdoor", value: "https://nextdoor.com/pages/chad-the-flooring-guy-woodbury-mn/", group: "social" },
      { key: "linktree", value: "https://linktr.ee/chadtheflooringguy", group: "social" },
    ];
    for (const c of configs) await ctx.db.insert("siteConfig", c);

    // ==================== SERVICES ====================
    // 🥇 PRIMARY — Repair & Re-Stretching
    const services = [
      {
        name: "Carpet Repair",
        description: "Seam repair, pet damage patches, transitions, and more. Most carpet issues can be fixed without replacing the whole room. Chad specializes in making repairs invisible.",
        shortDescription: "Seams, pet damage, patches, transitions",
        icon: "🔧",
        features: ["Seam repair", "Pet damage patching", "Transition fixes", "Burn & stain patches", "Invisible repairs"],
        priceRange: "$300–$800",
        tier: "primary",
        sortOrder: 1,
        active: true,
      },
      {
        name: "Carpet Re-Stretching",
        description: "Wrinkles, buckling, and loose carpet? Re-stretching brings your carpet back to life. Especially common in newer homes where carpet wasn't mechanically stretched during installation.",
        shortDescription: "Wrinkle removal, buckling, loose carpet",
        icon: "📐",
        features: ["Wrinkle removal", "Buckling repair", "Power stretching", "New home corrections", "Extends carpet life"],
        priceRange: "$300–$800",
        tier: "primary",
        sortOrder: 2,
        active: true,
      },
      {
        name: "LVP Repair",
        description: "Scratched, broken, or clicking luxury vinyl plank? Chad can replace individual boards, fix clicking issues, and repair transitions without tearing up your whole floor.",
        shortDescription: "Scratched boards, clicking, transitions",
        icon: "🛠️",
        features: ["Board replacement", "Click repair", "Scratch fixes", "Transition repairs", "New build corrections"],
        priceRange: "$300–$800",
        tier: "primary",
        sortOrder: 3,
        active: true,
      },
      {
        name: "Floor Transition Repairs",
        description: "Where different flooring types meet — doorways, hallways, room transitions — these are common failure points. Chad fixes transitions that are loose, lifting, or just plain ugly.",
        shortDescription: "Doorways, hallways, room-to-room",
        icon: "🚪",
        features: ["Doorway transitions", "T-molding fixes", "Reducer strips", "Stair nosing"],
        priceRange: "$300–$600",
        tier: "primary",
        sortOrder: 4,
        active: true,
      },
      // 🥈 STANDARD — Installation
      {
        name: "Carpet Installation",
        description: "Full room or whole house carpet installation. Chad helps you source the best materials at the best price and installs with proper mechanical stretching — the way it should be done.",
        shortDescription: "Full rooms, full house, done right",
        icon: "🏠",
        features: ["Full room install", "Whole house projects", "Material sourcing help", "Proper mechanical stretching", "Furniture moving"],
        tier: "standard",
        sortOrder: 5,
        active: true,
      },
      {
        name: "LVP Installation",
        description: "Luxury Vinyl Plank installation for any room. Waterproof, durable, and beautiful. Chad ensures proper clicking, expansion gaps, and transitions so your floors last.",
        shortDescription: "Waterproof, durable, beautiful",
        icon: "✨",
        features: ["Any room or whole house", "Waterproof flooring", "Proper installation technique", "Material guidance", "Transition work included"],
        tier: "standard",
        sortOrder: 6,
        active: true,
      },
      // 🥉 ADDITIONAL — Premium installs
      {
        name: "Pre-Finished Hardwood Installation",
        description: "Pre-finished hardwood installation for the right project. Beautiful, timeless flooring installed with care and precision.",
        shortDescription: "Timeless hardwood, professionally installed",
        icon: "🪵",
        features: ["Pre-finished hardwood", "Professional installation", "Custom quotes"],
        tier: "additional",
        sortOrder: 7,
        active: true,
      },
      {
        name: "Engineered Wood Installation",
        description: "Engineered wood offers the look of hardwood with added stability. Available for the right project and location.",
        shortDescription: "Hardwood look with added stability",
        icon: "🌳",
        features: ["Engineered wood", "Stable and beautiful", "Custom quotes"],
        tier: "additional",
        sortOrder: 8,
        active: true,
      },
    ];
    for (const s of services) await ctx.db.insert("services", s);

    // ==================== TESTIMONIALS ====================
    const testimonials = [
      {
        name: "Sarah M.",
        text: "Chad re-stretched our carpet and it looks brand new! We had wrinkles in every room from a bad original install. He was professional, explained everything, and priced fairly. Can't recommend him enough!",
        rating: 5,
        source: "Nextdoor",
        neighborhood: "Woodbury",
        featured: true,
        active: true,
        sortOrder: 1,
      },
      {
        name: "Mike & Jenny T.",
        text: "Our dog destroyed the carpet by the back door. We thought we'd need to replace the whole room. Chad patched it and you literally cannot tell. Saved us thousands. The repair guy is REAL.",
        rating: 5,
        source: "Nextdoor",
        neighborhood: "Oakdale",
        featured: true,
        active: true,
        sortOrder: 2,
      },
      {
        name: "Lisa R.",
        text: "We moved into our new build and the LVP was already clicking and had scratched boards. Chad came out, explained what went wrong during install, and fixed everything. So glad someone recommended him on Nextdoor!",
        rating: 5,
        source: "Nextdoor",
        neighborhood: "Woodbury",
        featured: true,
        active: true,
        sortOrder: 3,
      },
      {
        name: "Tom K.",
        text: "I've been trying to find someone to fix my carpet seams for months. Nobody does repairs anymore. Found Chad on Nextdoor and he had it done in two hours. Fair price, great work, even better personality.",
        rating: 5,
        source: "Nextdoor",
        neighborhood: "Cottage Grove",
        featured: true,
        active: true,
        sortOrder: 4,
      },
      {
        name: "Amanda P.",
        text: "Chad installed LVP in our entire main floor. He helped us pick the right material, got us a great deal, and the install was flawless. He even educated us on maintenance. Five stars all day!",
        rating: 5,
        source: "Google",
        neighborhood: "Woodbury",
        active: true,
        sortOrder: 5,
      },
      {
        name: "Dave & Carol H.",
        text: "Katie was great with communication and scheduling, and Chad's work speaks for itself. We had carpet installed in 3 bedrooms and the quality is outstanding. A real team effort — love these two!",
        rating: 5,
        source: "Facebook",
        neighborhood: "Lake Elmo",
        active: true,
        sortOrder: 6,
      },
    ];
    for (const t of testimonials) await ctx.db.insert("testimonials", t);

    // ==================== FAQs ====================
    const faqs = [
      { question: "Can carpet wrinkles and buckling actually be fixed?", answer: "Absolutely! Most wrinkled or buckled carpet can be re-stretched using a power stretcher. It's one of Chad's specialties. In most cases, your carpet will look like new — and it's a fraction of the cost of replacement.", category: "repair", sortOrder: 1, active: true },
      { question: "How do I get a bid?", answer: "The fastest way is to fill out our bid form and include photos. Chad can often give you a text estimate within 24 hours just from photos. No photos? No problem — he'll reach out to discuss your project.", category: "process", sortOrder: 2, active: true },
      { question: "Why text instead of email?", answer: "Chad's a hands-on guy — he's on job sites all day. Texting with photos is the fastest way to communicate and get you an accurate estimate. Projects don't get lost in email threads, and you get a real person texting you back.", category: "process", sortOrder: 3, active: true },
      { question: "How much do repairs typically cost?", answer: "Most repairs run $300–$800 and take 2-3 hours. The exact price depends on the type of repair, size of the area, and materials needed. Send photos through the bid form for the fastest estimate!", category: "pricing", sortOrder: 4, active: true },
      { question: "My new home has flooring issues — is that normal?", answer: "Unfortunately, yes. Many new homes have carpet that wasn't properly power-stretched or LVP that wasn't clicked in correctly. You might also see scratches and damage from the construction process. The good news: Chad fixes these issues all the time.", category: "repair", sortOrder: 5, active: true },
      { question: "Do you help with material selection?", answer: "Yes! Chad has 20+ years of experience and knows which materials perform best for your specific situation. He'll help you find the right product at the best price — he's not trying to upsell you.", category: "services", sortOrder: 6, active: true },
      { question: "What areas do you serve?", answer: "Woodbury, MN and surrounding neighborhoods — Oakdale, Cottage Grove, Lake Elmo, Maplewood, and more. If you're in the east metro, chances are Chad can help.", category: "general", sortOrder: 7, active: true },
      { question: "Can I just call instead of texting?", answer: "Of course! Chad takes phone calls too. But if you can text photos of the issue, it helps him give you a faster and more accurate estimate. Call or text: 651-353-6238.", category: "process", sortOrder: 8, active: true },
    ];
    for (const f of faqs) await ctx.db.insert("faqs", f);

    // ==================== TIPS ====================
    const tips = [
      { title: "New Home? Check Your Floors", content: "Many new builds have carpet that wasn't mechanically stretched or LVP with clicking issues. Walk your floors barefoot — if you feel bumps, ridges, or hear clicking, it may need professional attention before it gets worse.", icon: "🏗️", sortOrder: 1, active: true },
      { title: "Wrinkles Get Worse Over Time", content: "That small wrinkle in your carpet won't fix itself. Over time, foot traffic causes the carpet to wear unevenly at the wrinkle, eventually creating a permanent crease that even re-stretching can't fully remove. Fix it early!", icon: "⏰", sortOrder: 2, active: true },
      { title: "LVP Isn't Invincible", content: "Luxury Vinyl Plank is durable, but it's still plastic. Heavy furniture, pet nails, and improper installation can cause scratches, chips, and clicking. The good news: individual boards can usually be replaced without redoing the whole floor.", icon: "💡", sortOrder: 3, active: true },
      { title: "Repair vs Replace — Save Money", content: "Before you rip out your entire floor, ask about repair. Pet damage, seam failures, transitions, and small areas of damage can almost always be patched or fixed for a fraction of replacement cost.", icon: "💰", sortOrder: 4, active: true },
    ];
    for (const t of tips) await ctx.db.insert("tips", t);

    return { message: "✅ Chad the Flooring Guy seeded!" };
  },
});
