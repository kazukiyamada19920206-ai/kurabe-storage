import type { Metadata } from "next";
import { Suspense } from "react";
import pricing from "../../../pricing.json";
import DetailClient from "./DetailClient";

type PricingItem = {
  name: string;
  slug: string;
  monthly_per_box: number;
  initial_fee: number;
  retrieval_fee: number;
  reason: string;
  description: string;
  target_audience: string;
  recommended_for: string[];
  selected_reasons: string[];
  common_pains: string[];
  affiliate_url: string;
  note: string | null;
  meta_title?: string;
  meta_description?: string;
};

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const service = (pricing as PricingItem[]).find((s) => s.slug === slug);
  if (!service) return {};

  return {
    title: service.meta_title ?? `${service.name}の評判・料金・口コミ`,
    description: service.meta_description ?? service.description,
    openGraph: {
      title: service.meta_title ?? `${service.name}の料金・評判 | くらべる収納`,
      description: service.meta_description ?? `${service.name}の月額料金・取り出し送料・おすすめポイントを詳しく解説。`,
      url: `https://moriyamanaomi.com/detail/${service.slug}`,
      siteName: "くらべる収納",
      locale: "ja_JP",
      type: "website",
    },
  };
}

export default function DetailPage() {
  return (
    <Suspense>
      <DetailClient />
    </Suspense>
  );
}
