"use client";

import { useState } from "react";
import pricing from "../pricing.json";

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
  is_book_only: boolean;
  quality_score: number;
  note: string | null;
};

type ResultItem = {
  name: string;
  slug: string;
  total: number;
  reason: string;
  affiliate_url: string;
  monthly_per_box: number;
  qualityScore: number;
};

const quickBoxOptions = [1, 3, 5, 10];
const quickMonthOptions = [1, 3, 6, 12, 24];

export default function Home() {
  const [boxCount, setBoxCount] = useState<number>(5);
  const [storageMonths, setStorageMonths] = useState<number>(6);
  const [results, setResults] = useState<ResultItem[]>([]);
  const [sortBy, setSortBy] = useState<"total" | "monthly" | "quality">("total");
  const [retrievalFreq, setRetrievalFreq] = useState<string>("年に数回");
  const [itemTypes, setItemTypes] = useState<string[]>([]);
  const [priority, setPriority] = useState<string>("安さ");
  const [expandedAccordion, setExpandedAccordion] = useState<boolean>(false);

  const handleDiagnose = () => {
    if (boxCount <= 0 || storageMonths <= 0) {
      alert("箱数と保管月数を正しく入力してください");
      return;
    }

    const retrievalMultiplier = 
      retrievalFreq === "ほぼ取り出さない" ? 0.5 :
      retrievalFreq === "月1回以上" ? 12 : 1;

    const filteredPricing = (pricing as PricingItem[]).filter(service => 
      itemTypes.includes("本・書類") ? true : !service.is_book_only
    );

    const pricingMap = Object.fromEntries(
      (pricing as PricingItem[]).map(p => [p.slug, p])
    );

    const calculated = filteredPricing
      .map((service) => {
      const total =
        service.monthly_per_box * boxCount * storageMonths +
        service.initial_fee +
        service.retrieval_fee * retrievalMultiplier;

      return {
        name: service.name,
        slug: service.slug,
        total,
        reason: service.reason,
        affiliate_url: service.affiliate_url,
        monthly_per_box: service.monthly_per_box,
        qualityScore: service.quality_score,
      };
    });

    let sorted = calculated.sort((a, b) => {
      if (priority === "取り出しやすさ") {
        const aRetrieval = pricingMap[a.slug].retrieval_fee;
        const bRetrieval = pricingMap[b.slug].retrieval_fee;
        return aRetrieval - bRetrieval;
      }
      if (priority === "保管品質") {
        return (b.qualityScore ?? 0) - (a.qualityScore ?? 0);
      }
      return a.total - b.total;
    });

    if (sortBy === "monthly") {
      sorted = calculated.sort((a, b) => a.monthly_per_box - b.monthly_per_box);
    }

    setResults(sorted.slice(0, 3));
  };

  return (
    <main className="min-h-screen bg-[#F5F0E8]">
      {/* ヘッダー */}
      <header className="bg-white border-b border-gray-200 py-4">
        <div className="mx-auto max-w-6xl px-6 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 bg-[#2D5016] rounded-sm"></div>
            <h1 className="text-xl font-bold text-[#2D5016]">くらべる収納</h1>
          </div>
        </div>
      </header>

      {/* ヒーロー */}
      <div className="bg-white border-b border-gray-200 py-12">
        <div className="mx-auto max-w-6xl px-6">
          <div className="flex items-center gap-2 mb-4">
            <div className="w-3 h-3 rounded-full bg-[#E8873A]"></div>
            <span className="text-sm font-medium text-[#E8873A]">
              宅配収納サービス 比較診断
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-[#2D5016] mb-4 leading-tight">
            箱数と期間を入れるだけ。<br />
            あなたに一番トクな1社が分かります。
          </h2>
          <p className="text-gray-600 text-sm md:text-base">
            比較対象 8社 / 所要3秒 / 登録不要。広告料で順位は変わりません。
          </p>
        </div>
      </div>

      {/* メインコンテンツ */}
      <div className="mx-auto max-w-6xl px-6 py-12">
        {/* 入力フォーム */}
        <div className="bg-white rounded-[12px] border border-gray-200 p-8 mb-12">
          <div className="space-y-8 mb-8">
            {/* 箱数入力 */}
            <div>
              <div className="flex justify-between items-start mb-4">
                <label className="text-lg font-bold text-[#2D5016]">
                  何箱くらい預けたい？
                </label>
                <span className="text-xs text-gray-500">
                  押し入れ1段分くらい
                </span>
              </div>

              {/* ステッパー */}
              <div className="flex items-center gap-4 mb-6 justify-center">
                <button
                  onClick={() => setBoxCount(Math.max(1, boxCount - 1))}
                  className="w-12 h-12 rounded-lg bg-gray-200 font-bold text-lg hover:bg-gray-300 transition flex-shrink-0"
                >
                  −
                </button>
                <span className="text-4xl font-bold text-[#2D5016] w-24 text-center">
                  {boxCount}
                </span>
                <button
                  onClick={() => setBoxCount(boxCount + 1)}
                  className="w-12 h-12 rounded-lg bg-gray-200 font-bold text-lg hover:bg-gray-300 transition flex-shrink-0"
                >
                  ＋
                </button>
              </div>

              {/* クイック選択 */}
              <div className="flex gap-2 flex-wrap justify-center">
                {quickBoxOptions.map((opt) => (
                  <button
                    key={opt}
                    onClick={() => setBoxCount(opt)}
                    className={`px-4 py-2 rounded-lg font-medium transition ${
                      boxCount === opt
                        ? "bg-[#2D5016] text-white"
                        : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                    }`}
                  >
                    {opt}箱
                  </button>
                ))}
              </div>
            </div>

            {/* 保管月数入力 */}
            <div>
              <div className="flex justify-between items-start mb-4">
                <label className="text-lg font-bold text-[#2D5016]">
                  どのくらい預けたい？
                </label>
                <span className="text-xs text-gray-500">
                  あとで変更もできます
                </span>
              </div>

              {/* ステッパー */}
              <div className="flex items-center gap-4 mb-6 justify-center">
                <button
                  onClick={() => setStorageMonths(Math.max(1, storageMonths - 1))}
                  className="w-12 h-12 rounded-lg bg-gray-200 font-bold text-lg hover:bg-gray-300 transition flex-shrink-0"
                >
                  −
                </button>
                <span className="text-4xl font-bold text-[#2D5016] w-24 text-center">
                  {storageMonths}
                </span>
                <button
                  onClick={() => setStorageMonths(storageMonths + 1)}
                  className="w-12 h-12 rounded-lg bg-gray-200 font-bold text-lg hover:bg-gray-300 transition flex-shrink-0"
                >
                  ＋
                </button>
              </div>

              {/* クイック選択 */}
              <div className="flex gap-2 flex-wrap justify-center">
                {quickMonthOptions.map((opt) => (
                  <button
                    key={opt}
                    onClick={() => setStorageMonths(opt)}
                    className={`px-4 py-2 rounded-lg font-medium transition ${
                      storageMonths === opt
                        ? "bg-[#2D5016] text-white"
                        : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                    }`}
                  >
                    {opt === 24 ? "2年" : `${opt}ヶ月`}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* アコーディオン */}
          <div className="mb-8 border-t pt-8">
            <button
              onClick={() => setExpandedAccordion(!expandedAccordion)}
              className="w-full flex items-center justify-between p-4 bg-[#F5F0E8] rounded-lg hover:bg-[#EDE5D9] transition"
            >
              <span className="font-bold text-[#2D5016]">
                もっと正確に絞り込む（任意）
              </span>
              <span className="text-xl text-[#2D5016]">
                {expandedAccordion ? "−" : "＋"}
              </span>
            </button>

            {expandedAccordion && (
              <div className="mt-4 space-y-6 p-4 bg-white rounded-lg border border-gray-200">
                {/* 取り出し頻度 */}
                <div>
                  <label className="block text-sm font-bold text-[#2D5016] mb-3">
                    取り出し頻度
                  </label>
                  <div className="space-y-2">
                    {["ほぼ取り出さない", "年に数回", "月1回以上"].map((option) => (
                      <label key={option} className="flex items-center gap-3 cursor-pointer">
                        <input
                          type="radio"
                          name="retrieval"
                          value={option}
                          checked={retrievalFreq === option}
                          onChange={(e) => setRetrievalFreq(e.target.value)}
                          className="w-4 h-4"
                        />
                        <span className="text-gray-700">{option}</span>
                      </label>
                    ))}
                  </div>
                </div>

                {/* 荷物の種類 */}
                <div>
                  <label className="block text-sm font-bold text-[#2D5016] mb-3">
                    荷物の種類（複数選択可）
                  </label>
                  <div className="space-y-2">
                    {["衣類", "本・書類", "季節物", "趣味の品", "思い出の品"].map((option) => (
                      <label key={option} className="flex items-center gap-3 cursor-pointer">
                        <input
                          type="checkbox"
                          checked={itemTypes.includes(option)}
                          onChange={(e) => {
                            if (e.target.checked) {
                              setItemTypes([...itemTypes, option]);
                            } else {
                              setItemTypes(itemTypes.filter(t => t !== option));
                            }
                          }}
                          className="w-4 h-4"
                        />
                        <span className="text-gray-700">{option}</span>
                      </label>
                    ))}
                  </div>
                </div>

                {/* 重視ポイント */}
                <div>
                  <label className="block text-sm font-bold text-[#2D5016] mb-3">
                    重視ポイント
                  </label>
                  <div className="space-y-2">
                    {["安さ", "取り出しやすさ", "保管品質"].map((option) => (
                      <label key={option} className="flex items-center gap-3 cursor-pointer">
                        <input
                          type="radio"
                          name="priority"
                          value={option}
                          checked={priority === option}
                          onChange={(e) => setPriority(e.target.value)}
                          className="w-4 h-4"
                        />
                        <span className="text-gray-700">{option}</span>
                      </label>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* CTA */}
          <button
            onClick={handleDiagnose}
            className="w-full bg-[#E8873A] hover:bg-[#D97A2D] text-white font-bold py-4 rounded-lg text-lg transition mb-4"
          >
            無料で診断する →
          </button>

          {/* 信頼シグナル */}
          <div className="flex justify-center gap-6 text-sm text-gray-600 flex-wrap">
            <span>✓ 入力は3秒</span>
            <span>✓ 登録不要</span>
            <span>✓ 広告で順位を変えません</span>
          </div>
        </div>

        {results.length > 0 && (
          <div className="space-y-8">
            {/* 結果ヘッド */}
            <div className="bg-white rounded-[12px] border border-gray-200 p-8">
              <div className="text-center mb-4">
                <p className="text-[#E8873A] text-sm font-bold uppercase tracking-wide mb-2">
                  Diagnosis Result
                </p>
                <h3 className="text-3xl font-bold text-[#2D5016] mb-4">
                  あなたに一番合うのは{" "}
                  <span className="text-[#E8873A]">{results[0]?.name}</span>{" "}
                  でした
                </h3>
                <p className="text-gray-600">
                  {boxCount}箱 × {storageMonths}ヶ月 の条件で、
                  {results.length}
                  社を比較 / 2位より ¥
                  {results.length > 1
                    ? (results[1].total - results[0].total).toLocaleString()
                    : "0"}{" "}
                  おトク
                </p>
                <p className="text-gray-500 text-xs mt-4">
                  ※表示金額は入力条件をもとにした概算です。実際の料金はサービスにより異なる場合があります。各サービスの詳細ページまたは公式サイトにてご確認ください。
                </p>
              </div>

              {/* ソートタブ */}
              <div className="flex gap-4 justify-center mt-6 border-t pt-6">
                {[
                  { value: "total", label: "総費用順" },
                  { value: "monthly", label: "月額単価順" },
                  { value: "quality", label: "口コミ順" },
                ].map((tab) => (
                  <button
                    key={tab.value}
                    onClick={() => setSortBy(tab.value as any)}
                    className={`px-4 py-2 rounded-lg font-medium transition ${
                      sortBy === tab.value
                        ? "bg-[#2D5016] text-white"
                        : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                    }`}
                  >
                    {tab.label}
                  </button>
                ))}
              </div>
            </div>

            {/* ランキングカード */}
            <div className="space-y-6">
              {results.map((result, index) => {
                const isFirst = index === 0;
                const priceDiff = isFirst
                  ? 0
                  : result.total - results[0].total;

                return (
                  <div
                    key={result.slug}
                    className={`rounded-[12px] border ${
                      isFirst
                        ? "bg-white border-[#2D5016] border-2"
                        : "bg-[#F5F0E8] border-gray-200"
                    } p-8`}
                  >
                    <div className="grid md:grid-cols-3 gap-8">
                      {/* 左：サービス情報 */}
                      <div>
                        {isFirst && (
                          <div className="inline-flex items-center gap-2 mb-4 bg-[#2D5016] text-white px-3 py-1 rounded-lg text-sm font-bold">
                            👑 総合1位
                          </div>
                        )}
                        <h4 className={`font-bold text-[#2D5016] mb-2 ${
                          isFirst ? "text-3xl" : "text-2xl"
                        }`}>
                          {index + 1}位：{result.name}
                        </h4>
                        <p className="text-gray-600 text-sm mb-4">
                          {result.reason}
                        </p>
                        {isFirst && (
                          <p className="text-sm text-[#E8873A] font-medium mb-4">
                            迷ったらこのサービスを選んでおけば問題ありません
                          </p>
                        )}
                        <div className="flex flex-wrap gap-2">
                          <span className="border-2 border-[#E8873A] text-[#E8873A] px-3 py-1 rounded-lg text-xs font-medium">
                            月額¥{result.monthly_per_box}
                          </span>
                        </div>
                      </div>

                      {/* 中央：差額バーグラフ & スコア表 */}
                      <div className="space-y-6">
                        {/* 差額バーグラフ */}
                        <div className="pb-4 border-b border-gray-200">
                          <p className="text-sm font-medium text-gray-700 mb-3">
                            総費用比較
                          </p>
                          {(() => {
                            const maxTotal = results[results.length - 1]?.total || 1;
                            const barWidth = (result.total / maxTotal) * 100;
                            const barColor = isFirst ? "#2D5016" : "#D1CBC0";
                            return (
                              <div className="space-y-2">
                                <div className="flex items-center gap-3">
                                  <div className="flex-1">
                                    <div
                                      className="h-2 rounded"
                                      style={{
                                        width: `${barWidth}%`,
                                        backgroundColor: barColor,
                                      }}
                                    />
                                  </div>
                                  <span className="text-sm font-bold text-gray-700 whitespace-nowrap">
                                    ¥{result.total.toLocaleString()}
                                  </span>
                                </div>
                              </div>
                            );
                          })()}
                        </div>

                        {/* スコア表 */}
                        <div className="space-y-3">
                          {[
                            { label: "費用", score: 9 },
                            { label: "取り出し", score: 8 },
                            { label: "品質", score: 7 },
                            { label: "サポート", score: 8 },
                          ].map((item) => (
                            <div key={item.label}>
                              <div className="flex justify-between text-sm font-medium mb-1">
                                <span className="text-gray-700">{item.label}</span>
                                <span className="text-[#2D5016]">
                                  {item.score}/10
                                </span>
                              </div>
                              <div className="w-full bg-gray-200 rounded-full h-2">
                                <div
                                  className="bg-[#2D5016] h-2 rounded-full"
                                  style={{ width: `${item.score * 10}%` }}
                                />
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* 右：費用と CTA */}
                      <div className="flex flex-col justify-between">
                        <div className="mb-6">
                          <p className="text-gray-600 text-sm mb-1">
                            総費用
                          </p>
                          <p className="text-4xl font-bold text-[#2D5016] mb-4">
                            ¥{result.total.toLocaleString()}
                          </p>
                          {!isFirst && (
                            <div className="inline-flex items-center bg-[#E8873A] text-white px-3 py-1 rounded-lg text-sm font-bold">
                              1位より +¥{priceDiff.toLocaleString()}
                            </div>
                          )}
                        </div>
                        <div className="space-y-3">
                          <a
                            href={`/detail/${result.slug}?boxes=${boxCount}&months=${storageMonths}`}
                            className="block w-full px-4 py-3 rounded-lg border-2 border-[#2D5016] text-[#2D5016] font-bold hover:bg-[#F5F0E8] transition text-center"
                          >
                            詳細を見る →
                          </a>
                          <a
                            href={`/detail/${result.slug}?boxes=${boxCount}&months=${storageMonths}`}
                            className="block w-full px-4 py-3 rounded-lg bg-[#2D5016] text-white font-bold hover:bg-[#1A3009] transition text-center"
                          >
                            決める
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* 再診断 */}
            <div className="text-center py-8">
              <p className="text-gray-600 mb-4">
                まだ迷っている方は、条件を変えて再診断してみてください
              </p>
              <button
                onClick={() => {
                  setResults([]);
                  window.scrollTo({ top: 0, behavior: "smooth" });
                }}
                className="px-8 py-3 rounded-lg bg-transparent border border-[#2D5016] text-[#2D5016] font-bold hover:bg-[#2D5016] hover:text-white transition"
              >
                条件を変更して再診断
              </button>
            </div>
          </div>
        )}
      </div>
    </main>
  );
}