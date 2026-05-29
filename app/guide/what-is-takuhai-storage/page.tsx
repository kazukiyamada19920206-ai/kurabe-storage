import type { Metadata } from "next";
import { Suspense } from "react";
import GuideClient from "./GuideClient";

export const metadata: Metadata = {
  title: "宅配収納サービスとは？【2026年最新】トランクルームとの違い・料金・選び方を徹底解説",
  description:
    "宅配収納サービスの仕組み・料金相場・トランクルームとの違いをわかりやすく解説。初めて利用する方向けに、おすすめサービスの選び方まで紹介します。",
};

export default function GuidePage() {
  return (
    <Suspense>
      <GuideClient />
    </Suspense>
  );
}
