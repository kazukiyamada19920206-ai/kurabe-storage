"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
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
  is_space_based: boolean;
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
  quality_score: number;
};

const quickBoxOptions = [1, 3, 5, 10];
const quickMonthOptions = [1, 3, 6, 12, 24];

export default function Home() {
  const [boxCount, setBoxCount] = useState<number>(5);
  const [storageMonths, setStorageMonths] = useState<number>(6);
  const [results, setResults] = useState<ResultItem[]>([]);
  const [sortType, setSortType] = useState<string>("総費用順");
  const [retrievalFreq, setRetrievalFreq] = useState<string>("年に数回");
  const [itemTypes, setItemTypes] = useState<string[]>([]);
  const [priority, setPriority] = useState<string>("安さ");
  const [expandedAccordion, setExpandedAccordion] = useState<boolean>(false);

  useEffect(() => {
    if (results.length === 0) return;
    const sorted = [...results].sort((a, b) => {
      if (sortType === "月額単価順") {
        return a.monthly_per_box - b.monthly_per_box;
      }
      if (sortType === "口コミ順") {
        return (b.quality_score ?? 0) - (a.quality_score ?? 0);
      }
      return a.total - b.total;
    });
    setResults(sorted);
  }, [sortType]);

  useEffect(() => {
    if (results.length > 0 && typeof window !== "undefined" && window.gtag) {
      window.gtag("event", "complete_diagnosis", {
        event_category: "conversion",
        event_label: results[0]?.name ?? "",
        boxes: boxCount,
        months: storageMonths,
        top_service: results[0]?.name ?? "",
      });
    }
  }, [results]);

  const handleDiagnose = () => {
    if (boxCount <= 0 || storageMonths <= 0) {
      alert("箱数と保管月数を正しく入力してください");
      return;
    }

    const retrievalMultiplier = 
      retrievalFreq === "ほぼ取り出さない" ? 0.5 :
      retrievalFreq === "月1回以上" ? 12 : 1;

    const filteredPricing = (pricing as PricingItem[]).filter(service => {
      if (service.is_space_based) return false;
      // is_book_only のサービスは「本・書類」のみが選択されている場合だけ表示する
      if (service.is_book_only) {
        if (itemTypes.length === 0) return false;
        if (!itemTypes.includes("本・書類")) return false;
        if (itemTypes.some(type => type !== "本・書類")) return false;
      }
      return true;
    });

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
        quality_score: service.quality_score,
      };
    });

    const prioritySorted = calculated.sort((a, b) => {
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

    const top3 = prioritySorted.slice(0, 3).sort((a, b) => a.total - b.total);
    setSortType("総費用順");
    setResults(top3);
  };

  return (
    <main className="min-h-screen bg-[#F5F0E8]">
      {/* ヘッダー */}
      <header className="bg-white border-b border-gray-200 py-4">
        <div className="mx-auto max-w-6xl px-6">
          <div className="flex items-center justify-center gap-2">
            <div className="w-6 h-6 bg-[#2D5016] rounded-full" />
            <span className="text-xl font-bold text-[#2D5016]">くらべる収納</span>
          </div>
        </div>
      </header>

      {/* ヒーロー画像 */}
      <div className="bg-white">
        <Image
          src="/images/hero-main.png"
          alt="整理されたクローゼットと宅配収納のイメージ"
          width={800}
          height={450}
          className="w-full h-[200px] object-cover"
          priority
        />
      </div>

      {/* キャッチコピー（中央寄せ） */}
      <div className="bg-white border-b border-gray-200 py-8 text-center px-6">
        <p className="text-[13px] text-[#888780] leading-[1.8] mb-3">
          捨てなくていい。判断しなくていい。<br />
          預けるだけで、部屋が変わる。
        </p>
        <h1 className="text-[24px] font-[700] text-[#2C2C2A] leading-[1.5] mb-5">
          自分に合う宅配収納を、<br />
          3秒で見つける。
        </h1>
        <div className="flex flex-wrap gap-2 justify-center mb-2">
          {["衣替え", "引越し", "一人暮らし", "単身赴任"].map((tag) => (
            <span
              key={tag}
              className="text-[12px] bg-[#F5F0E8] rounded-full px-3 py-1 text-[#5F5E5A]"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>

      {/* メインコンテンツ */}
      <div className="mx-auto max-w-6xl px-6 pt-2 pb-12">
        {/* 入力フォーム */}
        <div className="bg-white rounded-[12px] border border-gray-200 p-8 mt-2 mb-12">
          <div className="space-y-8 mb-8">
            {/* 箱数入力 */}
            <div>
              <label className="text-[16px] font-[700] text-[#2C2C2A] mb-1">
                何箱くらい預けたい？
              </label>
              <span className="text-[12px] text-[#888780] mb-[14px] block">
                押し入れ1段分くらい
              </span>

              {/* ステッパー */}
              <div className="flex items-center bg-[#F5F0E8] rounded-[12px] p-[8px_12px] justify-between mb-[14px]">
                <button
                  onClick={() => setBoxCount(Math.max(1, boxCount - 1))}
                  className="w-[44px] h-[44px] bg-white border-[0.5px] border-[#D3D1C7] rounded-[10px] text-[22px] hover:bg-gray-50 transition flex-shrink-0"
                >
                  −
                </button>
                <span className="text-[28px] font-[700] text-[#2D5016]">
                  {boxCount}箱
                </span>
                <button
                  onClick={() => setBoxCount(boxCount + 1)}
                  className="w-[44px] h-[44px] bg-white border-[0.5px] border-[#D3D1C7] rounded-[10px] text-[22px] hover:bg-gray-50 transition flex-shrink-0"
                >
                  ＋
                </button>
              </div>

              {/* クイック選択 */}
              <div className="grid grid-cols-4 gap-2">
                {quickBoxOptions.map((opt) => (
                  <button
                    key={opt}
                    onClick={() => setBoxCount(opt)}
                    className={`p-[10px_4px] text-[14px] font-[500] rounded-[10px] text-center transition ${
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
              <label className="text-[16px] font-[700] text-[#2C2C2A] mb-1">
                どのくらい預けたい？
              </label>
              <span className="text-[12px] text-[#888780] mb-[14px] block">
                あとで変更もできます
              </span>

              {/* ステッパー */}
              <div className="flex items-center bg-[#F5F0E8] rounded-[12px] p-[8px_12px] justify-between mb-[14px]">
                <button
                  onClick={() => setStorageMonths(Math.max(1, storageMonths - 1))}
                  className="w-[44px] h-[44px] bg-white border-[0.5px] border-[#D3D1C7] rounded-[10px] text-[22px] hover:bg-gray-50 transition flex-shrink-0"
                >
                  −
                </button>
                <span className="text-[28px] font-[700] text-[#2D5016]">
                  {storageMonths}ヶ月
                </span>
                <button
                  onClick={() => setStorageMonths(storageMonths + 1)}
                  className="w-[44px] h-[44px] bg-white border-[0.5px] border-[#D3D1C7] rounded-[10px] text-[22px] hover:bg-gray-50 transition flex-shrink-0"
                >
                  ＋
                </button>
              </div>

              {/* クイック選択 */}
              <div className="grid grid-cols-3 gap-2">
                {quickMonthOptions.map((opt) => (
                  <button
                    key={opt}
                    onClick={() => setStorageMonths(opt)}
                    className={`p-[10px_4px] text-[14px] font-[500] rounded-[10px] text-center transition ${
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
          <div className="mb-8">
            <button
              onClick={() => setExpandedAccordion(!expandedAccordion)}
              className="w-full flex items-center justify-between bg-[#F5F0E8] rounded-[10px] p-[14px_16px] hover:bg-[#EDE5D9] transition"
            >
              <span className="text-[14px] font-[500] text-[#444441]">
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
            onClick={() => {
              if (typeof window !== "undefined" && window.gtag) {
                window.gtag("event", "click_diagnose", {
                  event_category: "engagement",
                  event_label: "診断開始",
                });
              }
              handleDiagnose();
            }}
            className="w-full bg-[#E8873A] hover:bg-[#D97A2D] text-white p-[18px] rounded-[12px] text-[17px] font-[700] transition mb-4"
          >
            無料で診断する →
          </button>

          {/* 信頼シグナル */}
          <div className="text-center text-[14px] text-[#5F5E5A]">
            <div className="flex justify-center gap-4 mb-1">
              <span>✓ 入力は3秒</span>
              <span>✓ 登録不要</span>
            </div>
            <div>✓ 広告で順位は変わりません</div>
          </div>
        </div>

        <div className="text-center text-[12px] text-[#888780] mb-[10px]">
          比較対象サービス
        </div>
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {([
            { name: "サマリーポケット", slug: "summary-pocket" },
            { name: "minikura", slug: "minikura" },
            { name: "AZUKEL", slug: "azukel" },
            { name: "カラエト", slug: "caraeto" },
            { name: "エアトランク", slug: "airtrunk" },
            { name: "宅トラ", slug: "takutora" },
            { name: "リソコ", slug: "risoco" },
            { name: "2nd STORAGE", slug: "2nd-storage" },
          ] as { name: string; slug: string }[]).map((service) => (
            <a
              key={service.slug}
              href={`/detail/${service.slug}?boxes=${boxCount}&months=${storageMonths}`}
              style={{ color: "#2D5016", textDecoration: "none" }}
              className="bg-white border border-[#D3D1C7] rounded-[8px] px-2.5 py-1 text-[11px] hover:border-[#2D5016] transition"
            >
              {service.name}
            </a>
          ))}
        </div>

        {/* ナビゲーションリンク */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          <Link
            href="/guide/what-is-takuhai-storage"
            className="bg-white border border-[#D3D1C7] rounded-[8px] px-3 py-2 text-[12px] font-[500] hover:border-[#2D5016] hover:text-[#2D5016] transition"
            style={{ color: "#5F5E5A", textDecoration: "none" }}
          >
            宅配収納とは？
          </Link>
          <Link
            href="/compare"
            className="bg-white border border-[#D3D1C7] rounded-[8px] px-3 py-2 text-[12px] font-[500] hover:border-[#2D5016] hover:text-[#2D5016] transition"
            style={{ color: "#5F5E5A", textDecoration: "none" }}
          >
            サービス比較一覧
          </Link>
          <Link
            href="/compare/ranking"
            className="bg-white border border-[#D3D1C7] rounded-[8px] px-3 py-2 text-[12px] font-[500] hover:border-[#2D5016] hover:text-[#2D5016] transition"
            style={{ color: "#5F5E5A", textDecoration: "none" }}
          >
            おすすめランキング
          </Link>
        </div>

        {results.length > 0 && (
          <div className="space-y-8">
            {/* 結果ヘッド */}
            <div className="bg-white rounded-[12px] border border-gray-200 p-8">
              <div className="mb-4">
                <p className="text-[#E8873A] text-sm font-bold uppercase tracking-wide mb-2">
                  Diagnosis Result
                </p>
                <h3 className="text-[26px] font-bold text-[#2D5016] mb-4">
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
              <div className="flex gap-[6px] mt-6 border-t pt-6">
                {["総費用順", "月額単価順", "口コミ順"].map((label) => (
                  <button
                    key={label}
                    onClick={() => setSortType(label)}
                    className="transition"
                    style={{
                      fontSize: "13px",
                      padding: "8px 12px",
                      borderRadius: "8px",
                      fontWeight: 500,
                      background: sortType === label ? "#2D5016" : "white",
                      color: sortType === label ? "white" : "#444441",
                      border: sortType === label ? "none" : "0.5px solid #D3D1C7",
                    }}
                  >
                    {label}
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
                            const maxTotal = Math.max(...results.map(r => r.total));
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
                            onClick={() => {
                              if (typeof window !== "undefined" && window.gtag) {
                                window.gtag("event", "click_detail", {
                                  event_category: "engagement",
                                  event_label: result.name,
                                });
                              }
                            }}
                            className="block w-full px-4 py-3 rounded-lg border-2 border-[#2D5016] text-[#2D5016] font-bold hover:bg-[#F5F0E8] transition text-center"
                          >
                            詳細を見る →
                          </a>
                          <a
                            href={`/detail/${result.slug}?boxes=${boxCount}&months=${storageMonths}`}
                            onClick={() => {
                              if (typeof window !== "undefined" && window.gtag) {
                                window.gtag("event", "click_apply", {
                                  event_category: "conversion",
                                  event_label: result.name,
                                });
                              }
                            }}
                            className="block w-full px-4 py-3 rounded-lg bg-[#2D5016] text-white font-bold hover:bg-[#1A3009] transition text-center"
                          >
                            公式サイトを見る →
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

      {/* 関連記事リンク */}
      <div className="mx-auto max-w-6xl px-6 py-10">
        <h2 className="text-xl font-bold text-[#2D5016] mb-6">サービスを詳しく知る</h2>
        <div className="grid grid-cols-2 gap-3">
          {[
            { href: "/guide/summary-pocket-review", label: "サマリーポケットの評判・口コミ" },
            { href: "/guide/minikura-review", label: "minikuraの評判・口コミ" },
            { href: "/guide/azukel-review", label: "AZUKELの評判・口コミ" },
            { href: "/guide/caraeto-review", label: "カラエトの評判・口コミ" },
            { href: "/guide/seasonal-storage-tips", label: "衣替えに宅配収納を使う前に知っておきたいこと" },
            { href: "/compare/summary-pocket-vs-minikura", label: "サマリーポケット vs minikura 比較" },
          ].map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="bg-white rounded-[10px] border border-gray-200 px-4 py-3 text-sm text-[#2D5016] font-medium hover:border-[#2D5016] transition"
            >
              {item.label} →
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
}