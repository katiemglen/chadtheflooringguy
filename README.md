# Chad the Flooring Guy — Website + Bid Intake System

Professional website and automated bid intake system for Chad the Flooring Guy, a flooring repair and installation business in Woodbury, MN.

**Live:** https://chadtheflooringguy.vercel.app

## Stack
- **Next.js 14** + **Tailwind CSS** — fast, mobile-first frontend
- **Convex** — real-time database for services, testimonials, bid submissions
- **Vercel** — auto-deploys from GitHub

## Features
- 🔨 **Service-tiered layout** — Repair/re-stretching featured prominently, installation standard, premium services listed but not pushed
- 📸 **Bid intake form** — Name, phone, service type, flooring type, photo upload, description, timeline, referral source
- ✅ **Smart auto-reply** — Different confirmation messages depending on whether photos were included
- 📱 **SMS notification stub** — Twilio integration ready, sends formatted text to Chad on new submissions
- 🏆 **Nextdoor Neighborhood Favorite** — prominently featured
- 💡 **Flooring tips** — Educational content section
- 📊 **Admin dashboard** — View all submissions, photos, update status at `/admin`
- 🎨 **Brand colors** — Gold, charcoal, maroon, forest green on warm cream

## Setup

```bash
npm install
npx convex dev   # starts Convex dev server
npm run dev       # starts Next.js dev server
```

## Twilio SMS Setup

To enable SMS notifications to Chad on new bid submissions:

1. Create a Twilio account at https://twilio.com
2. Get a phone number
3. In the Convex dashboard (https://dashboard.convex.dev), set these environment variables:
   - `TWILIO_ACCOUNT_SID` — Your Twilio Account SID
   - `TWILIO_AUTH_TOKEN` — Your Twilio Auth Token
   - `TWILIO_PHONE_NUMBER` — Your Twilio phone number (e.g., `+1XXXXXXXXXX`)
   - `CHAD_PHONE_NUMBER` — `+16513536238`
   - `SITE_URL` — `https://chadtheflooringguy.vercel.app`
4. Uncomment the Twilio section in `convex/actions.ts`
5. Redeploy: `npx convex deploy`

## Convex Dashboard

Manage all content (services, testimonials, FAQs, tips) at:
https://dashboard.convex.dev/t/katiemglen/chadtheflooringguy

## Project Structure
```
app/
  page.tsx          — Main website (all sections)
  admin/page.tsx    — Bid submission dashboard
  layout.tsx        — Root layout + Convex provider
  globals.css       — Brand theme + component styles
convex/
  schema.ts         — Database schema
  queries.ts        — Read operations
  mutations.ts      — Write operations (bid submit, file upload)
  actions.ts        — Twilio SMS notification (stubbed)
  seed.ts           — Initial data seeder
```

## Deployment
Auto-deploys to Vercel on push to `main`. Convex functions deploy separately:
```bash
npx convex deploy
```

---
*Built with love by Katie & Chad* ❤️
