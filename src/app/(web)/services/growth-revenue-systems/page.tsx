import type { Metadata } from "next";
import GrowthRevenueSystemsPage from "@/views/services/growth-revenue-systems-page";
import { growthRevenueSystemsPageData } from "@/data/pages/services/growth-revenue-systems-page-data";

export const metadata: Metadata = growthRevenueSystemsPageData.metadata;

export default function GrowthRevenueSystems() {
  return <GrowthRevenueSystemsPage />;
}
