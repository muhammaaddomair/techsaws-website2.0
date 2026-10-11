import type { Metadata } from "next";
import CybersecurityProtectionPage from "@/views/services/cybersecurity-protection-page";
import { cybersecurityProtectionPageData } from "@/data/pages/services/cybersecurity-protection-page-data";

export const metadata: Metadata = cybersecurityProtectionPageData.metadata;

export default function CybersecurityProtection() {
  return <CybersecurityProtectionPage />;
}
