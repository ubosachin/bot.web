import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "CUTIE <3 Prime | Discord Bot for Moderation, Security & Esports",
  description:
    "CUTIE <3 Prime is a premium Discord utility and esports management bot with security, automod, moderation, tickets, welcomer, music, giveaways, voice control, and premium systems.",
  keywords: [
    "Discord Bot",
    "Discord Moderation Bot",
    "Esports Discord Bot",
    "Giveaway Bot",
    "Security Bot",
    "Ticket Bot",
    "Discord music bot",
    "Discord automod bot",
    "Discord utility bot",
    "CUTIE Prime",
  ],
  openGraph: {
    title: "CUTIE <3 Prime | Discord Management Bot",
    description:
      "Complete Discord management for esports and communities: security, automod, moderation, tickets, music, giveaways, utilities, voice control, and premium automation.",
    type: "website",
  },
  icons: {
    icon: "/logo.png",
    shortcut: "/logo.png",
    apple: "/logo.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <body className={`${inter.variable} bg-background font-sans text-foreground antialiased`}>
        {children}
      </body>
    </html>
  );
}
