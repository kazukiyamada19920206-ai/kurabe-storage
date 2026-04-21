import type { Metadata } from "next";
import { Suspense } from "react";
import GuideClient from "./GuideClient";

export const metadata: Metadata = {
  title: "宅配収納サービスとは？トランクルームとの違いや使い方を解説",
  description:
    "宅配収納サービスの仕組み・トランクルームとの違い・利用の流れ・よくある質問をわかりやすく解説。初めての方でも安心して始められます。",
};

export default function GuidePage() {
  return (
    <Suspense>
      <GuideClient />
    </Suspense>
  );
}
