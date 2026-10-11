import type { Metadata } from "next";
import SoftwareDigitalProductsPage from "@/views/services/software-digital-products-page";
import { softwareDigitalProductsPageData } from "@/data/pages/services/software-digital-products-page-data";

export const metadata: Metadata = softwareDigitalProductsPageData.metadata;

export default function SoftwareDigitalProducts() {
  return <SoftwareDigitalProductsPage />;
}
