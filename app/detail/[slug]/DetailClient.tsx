"use client";

import { useParams, useSearchParams } from "next/navigation";
import Link from "next/link";
import { useState } from "react";
import pricing from "../../../pricing.json";

type Review = {
  author: string;
  comment: string;
  source: string;
  source_url: string;
};

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
  image_url?: string;
  reviews?: Review[];
  quality_score?: number;
  retrieval_score?: number;
};

const faqs = [
  {
    question: "契約期間に制限はありますか？",
    answer: "最低契約期間は各サービスで異なります。詳細は公式サイトでご確認ください。",
  },
  {
    question: "荷物が壊れたら？",
    answer: "各サービスとも保険があります。詳細は公式サイトをご参照ください。",
  },
  {
    question: "配送料金は含まれていますか？",
    answer: "通常、月額には配送料が含まれ、取り出し時に手数料が発生します。",
  },
];


export default function DetailClient() {
  const params = useParams();
  const searchParams = useSearchParams();
  const slug = params.slug as string;
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);

  const boxes = Number(searchParams.get("boxes") ?? 1);
  const months = Number(searchParams.get("months") ?? 1);

  const service = (pricing as PricingItem[]).find((p) => p.slug === slug);

  if (!service) {
    return (
      <main className="min-h-screen bg-[#F5F0E8] px-6 py-10">
        <div className="mx-auto max-w-6xl">
          <h1 className="text-2xl font-bold text-[#2D5016]">
            サービスが見つかりません
          </h1>
          <Link href="/" className="mt-6 inline-block text-[#E8873A] hover:underline">
            ← 診断ページに戻る
          </Link>
        </div>
      </main>
    );
  }

  const totalFeeForExample =
    service.monthly_per_box * boxes * months +
    service.initial_fee +
    service.retrieval_fee;

  const sortedServices = (pricing as PricingItem[])
    .map((s) => ({
      ...s,
      total: s.monthly_per_box * boxes * months + s.retrieval_fee,
    }))
    .sort((a, b) => a.total - b.total);

  return (
    <main className="min-h-screen bg-[#F5F0E8]">
      {/* ヘッダー */}
      <header className="bg-white border-b border-gray-200 py-4 sticky top-0 z-40">
        <div className="mx-auto max-w-6xl px-6 flex justify-between items-center">
          <Link href="/" className="flex items-center gap-2">
            <div className="w-6 h-6 bg-[#2D5016] rounded-sm"></div>
            <span className="text-xl font-bold text-[#2D5016]">くらべる収納</span>
          </Link>
        </div>
      </header>

      {/* 戻る + 診断条件帯 */}
      <div className="bg-white border-b border-gray-200 py-6">
        <div className="mx-auto max-w-6xl px-6">
          <Link href="/" className="text-[#2D5016] hover:text-[#E8873A] font-medium">
            ← 診断結果に戻る
          </Link>
          <div className="mt-4 flex justify-between items-center bg-[#F5F0E8] rounded-[12px] p-4">
            <span className="text-gray-700">
              あなたの診断条件：<span className="font-bold">{boxes}箱 × {months}ヶ月</span>
            </span>
            <Link href="/" className="text-[#E8873A] hover:underline text-sm font-medium">
              条件を変える
            </Link>
          </div>
        </div>
      </div>

      {/* コンテンツ */}
      <div className="mx-auto max-w-6xl px-6 py-12">
        {/* サービスヘッダー */}
        <div className="bg-white rounded-[12px] border border-gray-200 p-8 mb-10">
          <div className="flex items-center gap-3 mb-4">
            <div className="inline-flex items-center gap-2 bg-[#2D5016] text-white px-3 py-1 rounded-lg text-sm font-bold">
              👑 総合1位
            </div>
            <span className="text-yellow-500 text-lg">★★★★★</span>
            <span className="text-gray-600 text-sm">(4.8/5)</span>
          </div>
          <h2 className="text-4xl font-bold text-[#2D5016] mb-2">
            {service.name}
          </h2>
          {/* サービス説明 */}
          <div className="space-y-3 mb-4">
            <p className="text-[13px] text-[#5F5E5A] leading-[1.8] line-clamp-3">
              {service.description}
            </p>
            <div className="flex flex-wrap gap-2">
              {[
                service.retrieval_fee === 0 ? "取り出し無料" : null,
                slug === "summary-pocket" ? "クリーニング対応" : null,
                service.monthly_per_box <= 275 ? "業界最安水準" : null,
                "1ヶ月から利用可",
                "写真で管理",
              ]
                .filter(Boolean)
                .slice(0, 3)
                .map((tag) => (
                  <span
                    key={tag}
                    className="text-[11px] bg-[#F5F0E8] text-[#2D5016] px-3 py-1 rounded-full font-[500]"
                    style={{ border: "0.5px solid #D3D1C7" }}
                  >
                    {tag}
                  </span>
                ))}
            </div>
          </div>
        </div>

        {/* サービス画像 */}
        <div className="rounded-[12px] h-48 mb-10 overflow-hidden bg-gray-100">
          {service.image_url ? (
            <img
              src={service.image_url}
              alt={`${service.name}のサービス画像`}
              className="w-full h-full object-cover"
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center text-gray-400">画像なし</div>
          )}
        </div>

        {/* 料金カード */}
        <div className="mb-10">
          {/* 総費用 */}
          <div className="bg-[#2D5016] text-white rounded-[12px] p-5 mb-3">
            <p className="text-[12px] opacity-80 mb-1">総費用（{months}ヶ月）</p>
            <p className="text-[36px] font-[700]">¥{totalFeeForExample.toLocaleString()}</p>
          </div>
          {/* 月額・取り出し送料を横並び */}
          <div className="grid grid-cols-2 gap-3">
            <div className="bg-white rounded-[12px] p-4" style={{ border: "0.5px solid #D3D1C7" }}>
              <p className="text-[11px] text-[#888780] mb-1">月額（1箱）</p>
              <p className="text-[20px] font-[700] text-[#2D5016]">¥{service.monthly_per_box.toLocaleString()}</p>
            </div>
            <div className="bg-white rounded-[12px] p-4" style={{ border: "0.5px solid #D3D1C7" }}>
              <p className="text-[11px] text-[#888780] mb-1">取り出し送料</p>
              <p className="text-[20px] font-[700] text-[#2D5016]">
                {service.retrieval_fee === 0 ? "無料" : `¥${service.retrieval_fee.toLocaleString()}`}
              </p>
            </div>
          </div>
        </div>

        {/* WHY THIS SERVICE */}
        <div className="bg-white rounded-[12px] border border-gray-200 p-8 mb-10">
          <h2 className="text-[16px] font-[700] text-[#2C2C2A] mb-4 pb-2 border-b border-[#E8E6E0]">
            このサービスを選ぶ3つの理由
          </h2>
          <div className="space-y-3">
            {service.selected_reasons.map((reason, index) => (
              <div key={index} className="flex items-start gap-3 bg-[#F5F0E8] rounded-[10px] p-4">
                <span className="text-[#2D5016] font-[700] text-[16px] flex-shrink-0 leading-none mt-0.5">
                  {index + 1}
                </span>
                <p className="text-[14px] text-[#2C2C2A] leading-[1.8]">{reason}</p>
              </div>
            ))}
          </div>
        </div>

        {/* 4つの軸スコア */}
        <div className="bg-white rounded-[12px] border border-gray-200 p-8 mb-10">
          <h2 className="text-[16px] font-[700] text-[#2C2C2A] mb-4 pb-2 border-b border-[#E8E6E0]">サービススコア</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {[
              { label: "費用", score: 9, comment: "業界最安水準" },
              { label: "取り出し", score: 8, comment: "スムーズで迅速" },
              { label: "保管品質", score: 8, comment: "温度湿度管理完備" },
              { label: "サポート", score: 9, comment: "24時間対応" },
            ].map((item) => (
              <div key={item.label}>
                <div className="flex justify-between items-center mb-2">
                  <span className="font-bold text-gray-700">{item.label}</span>
                  <span className="text-2xl font-bold text-[#2D5016]">
                    {item.score}/10
                  </span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-3 mb-2">
                  <div
                    className="bg-[#2D5016] h-3 rounded-full"
                    style={{ width: `${item.score * 10}%` }}
                  />
                </div>
                <p className="text-sm text-gray-600">{item.comment}</p>
              </div>
            ))}
          </div>
        </div>

        {/* 料金内訳 */}
        <div className="bg-white rounded-[12px] border border-gray-200 p-8 mb-10">
          <h2 className="text-[16px] font-[700] text-[#2C2C2A] mb-4 pb-2 border-b border-[#E8E6E0]">料金内訳</h2>
          <div className="overflow-x-auto">
            <table className="w-full">
              <tbody>
                <tr className="border-b">
                  <td className="py-4 px-4 font-medium text-gray-700">月額 × {months}ヶ月</td>
                  <td className="py-4 px-4 text-right font-bold">
                    ¥{(service.monthly_per_box * boxes * months).toLocaleString()}
                  </td>
                </tr>
                <tr className="border-b">
                  <td className="py-4 px-4 font-medium text-gray-700">初回送料</td>
                  <td className="py-4 px-4 text-right font-bold">
                    ¥{service.initial_fee.toLocaleString()}
                  </td>
                </tr>
                <tr className="border-b">
                  <td className="py-4 px-4 font-medium text-gray-700">取り出し手数料</td>
                  <td className="py-4 px-4 text-right font-bold">
                    ¥{service.retrieval_fee.toLocaleString()}
                  </td>
                </tr>
                <tr className="bg-[#F5F0E8]">
                  <td className="py-4 px-4 font-bold text-[#2D5016] text-lg">総費用</td>
                  <td className="py-4 px-4 text-right font-bold text-2xl text-[#2D5016]">
                    ¥{totalFeeForExample.toLocaleString()}
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          {service.note && (
            <div
              style={{
                backgroundColor: '#FFF8F0',
                border: '1px solid #E8873A',
                borderRadius: '8px',
                padding: '12px 16px',
                fontSize: '13px',
                color: '#7A4A1E',
                marginTop: '16px'
              }}
            >
              ⚠️ {service.note}
            </div>
          )}
        </div>

        {/* 比較テーブル */}
        <div className="bg-white rounded-[12px] border border-gray-200 p-8 mb-10">
          <h2 className="text-[16px] font-[700] text-[#2C2C2A] mb-4 pb-2 border-b border-[#E8E6E0]">他サービスと比較</h2>
          <div className="space-y-2">
            {/* ヘッダー */}
            <div className="grid grid-cols-4 gap-1 mb-2">
              {["サービス", "総費用", "品質", "取り出し"].map((h) => (
                <p key={h} className="text-[10px] text-[#888780] font-[600] text-center">{h}</p>
              ))}
            </div>
            {/* 行 */}
            {sortedServices.map((s) => (
              <div
                key={s.slug}
                className={`grid grid-cols-4 gap-1 rounded-[8px] p-2 items-center ${
                  s.slug === slug ? "bg-[#2D5016] text-white" : "bg-white"
                }`}
                style={s.slug !== slug ? { border: "0.5px solid #D3D1C7" } : {}}
              >
                <p className={`text-[11px] font-[600] truncate ${s.slug === slug ? "text-white" : "text-[#2C2C2A]"}`}>
                  {s.name}
                </p>
                <p className={`text-[11px] text-center ${s.slug === slug ? "text-white" : "text-[#2D5016]"}`}>
                  ¥{(s.monthly_per_box * boxes * months + s.retrieval_fee).toLocaleString()}
                </p>
                <p className={`text-[11px] text-center ${s.slug === slug ? "text-white" : "text-[#888780]"}`}>
                  {s.quality_score ?? 8}/10
                </p>
                <p className={`text-[11px] text-center ${s.slug === slug ? "text-white" : "text-[#888780]"}`}>
                  {s.retrieval_score ?? 8}/10
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* 基本情報テーブル */}
        <div className="bg-white rounded-[12px] border border-gray-200 p-8 mb-10">
          <h2 className="text-[16px] font-[700] text-[#2C2C2A] mb-4 pb-2 border-b border-[#E8E6E0]">基本情報</h2>
          <div className="space-y-4">
            <div className="grid md:grid-cols-2 gap-6 border-b pb-4">
              <div>
                <p className="text-gray-600 font-medium mb-1">最低契約期間</p>
                <p className="text-gray-900 font-bold">1ヶ月</p>
              </div>
              <div>
                <p className="text-gray-600 font-medium mb-1">保管環境</p>
                <p className="text-gray-900 font-bold">空調・防湿完備</p>
              </div>
            </div>
            <div className="grid md:grid-cols-2 gap-6 border-b pb-4">
              <div>
                <p className="text-gray-600 font-medium mb-1">サポート</p>
                <p className="text-gray-900 font-bold">24時間チャットサポート</p>
              </div>
              <div>
                <p className="text-gray-600 font-medium mb-1">対応エリア</p>
                <p className="text-gray-900 font-bold">全国対応</p>
              </div>
            </div>
            <div className="grid md:grid-cols-2 gap-6 border-b pb-4">
              <div>
                <p className="text-gray-600 font-medium mb-1">配送会社</p>
                <p className="text-gray-900 font-bold">クロネコヤマト</p>
              </div>
              <div>
                <p className="text-gray-600 font-medium mb-1">補償</p>
                <p className="text-gray-900 font-bold">1箱50万円まで</p>
              </div>
            </div>
          </div>
        </div>

        {/* 口コミセクション */}
        {service.reviews && service.reviews.length > 0 && (
          <div className="bg-white rounded-[12px] border border-gray-200 p-8 mb-10">
            <h2 className="text-[16px] font-[700] text-[#2C2C2A] mb-4 pb-2 border-b border-[#E8E6E0]">利用者の声</h2>
            <div className="space-y-4">
              {service.reviews.map((review, index) => {
                const isFemale = review.author.includes("女性");
                return (
                  <div
                    key={index}
                    className="bg-[#F5F0E8] rounded-[12px] p-5"
                  >
                    <div className="flex items-center gap-3 mb-3">
                      <div className={`w-10 h-10 rounded-full flex-shrink-0 flex items-center justify-center text-white font-bold text-sm ${isFemale ? "bg-[#E8873A]" : "bg-[#2D5016]"}`}>
                        👤
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="font-bold text-[#2C2C2A] text-sm">{review.author}</p>
                        <div className="flex items-center gap-2">
                          <span className="text-[#E8873A] text-xs">★★★★★</span>
                          {review.source_url ? (
                            <a
                              href={review.source_url}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-[11px] text-[#888780] underline truncate"
                            >
                              {review.source}
                            </a>
                          ) : (
                            <span className="text-[11px] text-[#888780]">{review.source}</span>
                          )}
                        </div>
                      </div>
                    </div>
                    <p className="text-[#2C2C2A] text-sm leading-6">{review.comment}</p>
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {/* 評判記事への内部リンク */}
        <div className="bg-[#F5F0E8] rounded-[12px] p-6 mb-10">
          <p className="text-[11px] text-[#888780] mb-2">もっと詳しく知りたい方はこちら</p>
          <Link
            href={`/guide/${slug}-review`}
            className="text-[14px] font-[700] text-[#2D5016] hover:underline"
          >
            {service.name}の評判・口コミ・料金を詳しく見る →
          </Link>
        </div>

        {/* FAQアコーディオン */}
        <div className="bg-white rounded-[12px] border border-gray-200 p-8 mb-10">
          <h2 className="text-[16px] font-[700] text-[#2C2C2A] mb-4 pb-2 border-b border-[#E8E6E0]">よくある質問</h2>
          <div className="space-y-3">
            {faqs.map((faq, index) => (
              <div key={index}>
                <button
                  onClick={() =>
                    setExpandedFaq(expandedFaq === index ? null : index)
                  }
                  className="w-full flex items-center justify-between bg-[#F5F0E8] rounded-[12px] p-4 hover:bg-gray-200 transition"
                >
                  <span className="font-bold text-gray-900 text-left">
                    {faq.question}
                  </span>
                  <span className="text-[#2D5016] font-bold text-xl">
                    {expandedFaq === index ? "−" : "＋"}
                  </span>
                </button>
                {expandedFaq === index && (
                  <div className="bg-gray-50 rounded-b-[12px] p-4 border-x border-b border-gray-200">
                    <p className="text-gray-700">{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

      </div>

      {/* フッター固定CTA */}
      <div className="fixed bottom-0 left-0 right-0 bg-[#2D5016] px-6 py-4">
        <div className="max-w-3xl mx-auto flex items-center justify-between">
          <div>
            <p className="text-white text-sm opacity-80">総費用</p>
            <p className="text-3xl font-bold text-white">
              ¥{totalFeeForExample.toLocaleString()}
            </p>
            <p className="text-white text-[11px] opacity-70">登録不要・無料で利用できます</p>
          </div>
          <a
            href={service.affiliate_url}
            onClick={() => {
              if (typeof window !== "undefined" && window.gtag) {
                window.gtag("event", "click_official", {
                  event_category: "conversion",
                  event_label: service.name,
                });
              }
            }}
            className="bg-[#E8873A] hover:bg-[#D97A2D] text-white font-bold px-8 py-4 rounded-lg transition flex items-center gap-2"
          >
            公式サイトで申し込む →
          </a>
        </div>
      </div>

      {/* フッタースペーサー */}
      <div className="h-28" />
    </main>
  );
}
