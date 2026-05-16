import type { Metadata } from "next";
import { PremiumContent, SitePage } from "@/components/landing/landing-page";

export const metadata: Metadata = {
  title: "Premium | CUTIE <3 Prime",
  description:
    "Claim CUTIE <3 Prime premium Discord bot features with advanced commands, faster support, early access, priority updates, and premium server automation.",
};

export default function PremiumPage() {
  return (
    <SitePage>
      <PremiumContent />
    </SitePage>
  );
}
