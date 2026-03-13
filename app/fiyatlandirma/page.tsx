import type { Metadata } from "next";
import PricingContent from "@/components/PricingContent";

export const metadata: Metadata = {
  title: "Fiyatlandırma | Bloomo",
  description:
    "Bloomo hizmetlerini keşfedin ve size özel teklif alın.",
};

export default function FiyatlandirmaPage() {
  return <PricingContent />;
}
