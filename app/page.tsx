import type { Metadata } from "next";
import { Suspense } from "react";
import HomeClient from "./HomeClient";

export const metadata: Metadata = {
  title: "宅配収納サービス比較・診断",
  description: "箱数と保管期間を入力するだけで、サマリーポケット・minikura・AZUKELなど9社の料金を自動比較。登録不要・3秒で最安サービスが分かります。",
  alternates: {
    canonical: "https://moriyamanaomi.com",
  },
  openGraph: {
    title: "宅配収納サービス比較・診断 | くらべる収納",
    description: "箱数と保管期間を入力するだけで、9社の料金を自動比較。登録不要・3秒で最安サービスが分かります。",
    url: "https://moriyamanaomi.com",
    siteName: "くらべる収納",
    images: [
      {
        url: "https://moriyamanaomi.com/ogp.png",
        width: 1200,
        height: 630,
        alt: "くらべる収納 - 宅配収納サービス比較・診断",
      },
    ],
    locale: "ja_JP",
    type: "website",
  },
};

export default function Home() {
  return (
    <Suspense>
      <HomeClient />
    </Suspense>
  );
}
