import type { Metadata } from "next";
import { Orbitron, Rajdhani } from "next/font/google";
import "./globals.css";

const orbitron = Orbitron({
  subsets: ["latin"],
  variable: "--font-orbitron",
  weight: ["400", "500", "600", "700", "800", "900"]
});

const rajdhani = Rajdhani({
  subsets: ["latin"],
  variable: "--font-rajdhani",
  weight: ["400", "500", "600", "700"]
});

export const metadata: Metadata = {
  metadataBase: new URL("https://space.org.ug"),
  title: {
    default: "Space Uganda",
    template: "%s | Space Uganda"
  },
  description:
    "Uganda's umbrella home for space enthusiasts, educators, engineers, innovators, astronomers, and partner organisations.",
  openGraph: {
    title: "Space Uganda",
    description:
      "Uganda's umbrella home for space enthusiasts, educators, engineers, innovators, astronomers, and partner organisations.",
    url: "https://space.org.ug",
    siteName: "Space Uganda",
    images: [{ url: "/assets/uganda-space-week-2025-main.png", width: 1200, height: 630 }],
    type: "website"
  }
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${orbitron.variable} ${rajdhani.variable}`}>{children}</body>
    </html>
  );
}
