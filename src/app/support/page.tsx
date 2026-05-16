import type { Metadata } from "next";
import { SitePage, SupportContent } from "@/components/landing/landing-page";

export const metadata: Metadata = {
  title: "Support | CUTIE <3 Prime",
  description:
    "Get support for CUTIE <3 Prime setup, Discord bot security, moderation systems, ticket workflows, premium features, and server management.",
};

export default function SupportPage() {
  return (
    <SitePage>
      <SupportContent />
    </SitePage>
  );
}
