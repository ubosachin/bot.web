import type { Metadata } from "next";
import { DocumentationContent, SitePage } from "@/components/landing/landing-page";

export const metadata: Metadata = {
  title: "Documentation | CUTIE <3 Prime",
  description:
    "CUTIE <3 Prime documentation for Discord bot setup, antinuke, automod, tickets, moderation, music, giveaways, voice control, and premium systems.",
};

export default function DocumentationPage() {
  return (
    <SitePage>
      <DocumentationContent />
    </SitePage>
  );
}
