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
  reviews?: Review[];
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

  return (
    <main className="min-h-screen bg-[#F5F0E8]">
      {/* ヘッダー */}
      <header className="bg-white border-b border-gray-200 py-4 sticky top-0 z-40">
        <div className="mx-auto max-w-6xl px-6 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 bg-[#2D5016] rounded-sm"></div>
            <h1 className="text-xl font-bold text-[#2D5016]">くらべる収納</h1>
          </div>
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
        <div className="bg-white rounded-[12px] border border-gray-200 p-8 mb-8">
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
          <p className="text-gray-600 mb-4 text-lg">
            {service.description}
          </p>
          <div className="text-sm text-gray-600">
            最低契約期間：<span className="font-bold">1ヶ月</span>
          </div>
        </div>

        {/* サービス画像プレースホルダー */}
        <div className="bg-gradient-to-br from-gray-200 to-gray-300 rounded-[12px] h-48 mb-8 flex items-center justify-center">
          <span className="text-gray-600 text-lg">サービス画像</span>
        </div>

        {/* 料金カード */}
        <div className="grid md:grid-cols-2 gap-8 mb-8">
          <div className="bg-[#2D5016] text-white rounded-[12px] p-8">
            <p className="text-sm font-medium opacity-80 mb-2">総費用</p>
            <h3 className="text-5xl font-bold mb-4">¥{totalFeeForExample.toLocaleString()}</h3>
            <p className="text-sm opacity-80 mb-6">{months}ヶ月の条件で</p>
            <div className="inline-block bg-[#E8873A] text-white px-4 py-2 rounded-lg font-bold text-sm">
              2位より ¥{(totalFeeForExample * 0.1).toLocaleString()} おトク
            </div>
          </div>

          <div className="bg-white rounded-[12px] border border-gray-200 p-8 space-y-4">
            <div>
              <p className="text-gray-600 text-sm font-medium mb-1">月額（1箱）</p>
              <p className="text-3xl font-bold text-[#2D5016]">
                ¥{service.monthly_per_box.toLocaleString()}
              </p>
            </div>
            <div>
              <p className="text-gray-600 text-sm font-medium mb-1">取り出し送料</p>
              <p className="text-3xl font-bold text-[#E8873A]">
                ¥{service.retrieval_fee.toLocaleString()}
              </p>
            </div>
          </div>
        </div>

        {/* WHY THIS SERVICE */}
        <div className="bg-white rounded-[12px] border border-gray-200 p-8 mb-8">
          <h3 className="text-2xl font-bold text-[#2D5016] mb-8">
            このサービスを選ぶ3つの理由
          </h3>
          <div className="grid md:grid-cols-3 gap-6">
            {service.selected_reasons.map((reason, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-[#F5F0E8] to-white rounded-[12px] border-2 border-[#E8873A] p-6"
              >
                <div className="text-4xl font-bold text-[#E8873A] mb-3">
                  {index + 1}
                </div>
                <p className="text-gray-700 font-medium leading-7">{reason}</p>
              </div>
            ))}
          </div>
        </div>

        {/* 4つの軸スコア */}
        <div className="bg-white rounded-[12px] border border-gray-200 p-8 mb-8">
          <h3 className="text-2xl font-bold text-[#2D5016] mb-8">サービススコア</h3>
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
        <div className="bg-white rounded-[12px] border border-gray-200 p-8 mb-8">
          <h3 className="text-2xl font-bold text-[#2D5016] mb-6">COST BREAKDOWN</h3>
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
        <div className="bg-white rounded-[12px] border border-gray-200 p-8 mb-8">
          <h3 className="text-2xl font-bold text-[#2D5016] mb-6">COMPARE</h3>
          <p className="text-gray-600 text-sm mb-4">
            他の上位サービスと比べると
          </p>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b-2 border-[#2D5016]">
                  <th className="py-4 px-4 text-left font-bold">サービス</th>
                  <th className="py-4 px-4 text-right font-bold">総費用</th>
                  <th className="py-4 px-4 text-right font-bold">品質</th>
                  <th className="py-4 px-4 text-right font-bold">取り出し</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b bg-[#F5F0E8]">
                  <td className="py-4 px-4 font-bold">{service.name}</td>
                  <td className="py-4 px-4 text-right font-bold">
                    ¥{totalFeeForExample.toLocaleString()}
                  </td>
                  <td className="py-4 px-4 text-right">8/10</td>
                  <td className="py-4 px-4 text-right">8/10</td>
                </tr>
                {(pricing as PricingItem[])
                  .filter((s) => s.slug !== slug)
                  .map((s) => {
                    const otherTotal =
                      s.monthly_per_box * boxes * months +
                      s.initial_fee +
                      s.retrieval_fee;
                    return (
                      <tr key={s.slug} className="border-b">
                        <td className="py-4 px-4">{s.name}</td>
                        <td className="py-4 px-4 text-right">
                          ¥{otherTotal.toLocaleString()}
                        </td>
                        <td className="py-4 px-4 text-right">7/10</td>
                        <td className="py-4 px-4 text-right">8/10</td>
                      </tr>
                    );
                  })}
              </tbody>
            </table>
          </div>
        </div>

        {/* 基本情報テーブル */}
        <div className="bg-white rounded-[12px] border border-gray-200 p-8 mb-8">
          <h3 className="text-2xl font-bold text-[#2D5016] mb-6">SPEC</h3>
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
          <div className="bg-white rounded-[12px] border border-gray-200 p-8 mb-8">
            <h3 className="text-2xl font-bold text-[#2D5016] mb-8">REVIEW - 利用者の声</h3>
            <div className="grid md:grid-cols-3 gap-6">
              {service.reviews.map((review, index) => (
                <div
                  key={index}
                  className="bg-gradient-to-br from-[#F5F0E8] to-white rounded-[12px] border border-gray-200 p-6 flex flex-col"
                >
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-full bg-[#E8873A] flex items-center justify-center text-white font-bold text-sm flex-shrink-0">
                      {review.author.charAt(0)}
                    </div>
                    <p className="font-bold text-gray-900 text-sm">{review.author}</p>
                  </div>
                  <p className="text-gray-700 text-sm leading-6 flex-1">{review.comment}</p>
                  <div className="mt-4 pt-3 border-t border-gray-200">
                    {review.source_url ? (
                      <a
                        href={review.source_url}
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{ fontSize: "11px", color: "#888780", textDecoration: "underline" }}
                      >
                        出典：{review.source}
                      </a>
                    ) : (
                      <span style={{ fontSize: "11px", color: "#888780" }}>
                        出典：{review.source}
                      </span>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* FAQアコーディオン */}
        <div className="bg-white rounded-[12px] border border-gray-200 p-8 mb-8">
          <h3 className="text-2xl font-bold text-[#2D5016] mb-6">FAQ - よくある質問</h3>
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
      <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-[#E5E0D8] px-6 py-4 h-20">
        <div className="max-w-3xl mx-auto flex items-center justify-between">
          <div>
            <p className="text-gray-600 text-sm">総費用</p>
            <p className="text-3xl font-bold text-[#2D5016]">
              ¥{totalFeeForExample.toLocaleString()}
            </p>
          </div>
          <a
            href={service.affiliate_url}
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
