import type { Metadata } from "next";
import "./globals.css";
import ConvexClientProvider from "./ConvexClientProvider";
import { SpeedInsights } from '@vercel/speed-insights/next';

export const metadata: Metadata = {
  title: "Chad the Flooring Guy | Woodbury, MN — Flooring Repair & Installation",
  description: "Expert flooring repair and installation in Woodbury, MN. Carpet repair, re-stretching, LVP repair, and installation. Nextdoor Neighborhood Favorite. Text photos for a fast estimate!",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <ConvexClientProvider>{children}</ConvexClientProvider>
        <SpeedInsights />
      </body>
    </html>
  );
}
