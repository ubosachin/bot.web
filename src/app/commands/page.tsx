import type { Metadata } from "next";
import { CommandsPageContent, SitePage } from "@/components/landing/landing-page";

export const metadata: Metadata = {
  title: "Commands | CUTIE <3 Prime Discord Bot",
  description:
    "Search all CUTIE <3 Prime Discord bot commands for security, automod, moderation, tickets, welcomer, music, utility, giveaway, fun, voice control, and premium systems.",
};

export default function CommandsPage() {
  return (
    <SitePage>
      <CommandsPageContent />
    </SitePage>
  );
}
