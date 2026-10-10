import AIAutomationPage from "@/views/services/ai-automation-page";
import type { Metadata } from "next";
import { aiAutomationPageData } from "@/data/pages/services/ai-automation-page-data";

export const metadata: Metadata = aiAutomationPageData.metadata;

function AIAutomation() {
  return <AIAutomationPage />;
}

export default AIAutomation;
