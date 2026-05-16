import type { Metadata } from "next";
import { DashboardPageContent, SitePage } from "@/components/landing/landing-page";

export const metadata: Metadata = {
  title: "Dashboard Preview | CUTIE <3 Prime",
  description:
    "Preview a premium Discord bot dashboard for CUTIE <3 Prime command analytics, security status, ticket panels, giveaways, voice moderation, and premium systems.",
};

export default function DashboardPreviewPage() {
  return (
    <SitePage>
      <DashboardPageContent />
    </SitePage>
  );
}
