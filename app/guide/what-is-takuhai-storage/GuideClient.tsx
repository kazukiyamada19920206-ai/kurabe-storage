"use client";

import { useState } from "react";
import Link from "next/link";

const faqs = [
  {
    q: "段ボール以外の荷物も預けられますか？",
    a: "サービスによって異なります。AZUKELやエアトランク、宅トラでは大型の家具・家電にも対応しています。段ボールに収まらない荷物がある場合は各サービスの詳細をご確認ください。",
  },
  {
    q: "最低利用期間はありますか？",
    a: "ほとんどのサービスで1ヶ月から利用できます。ただし宅トラは最低6ヶ月の利用期間が設けられています。短期間だけ預けたい場合は、最低利用期間を事前に確認しましょう。",
  },
  {
    q: "荷物が壊れたり紛失した場合の補償はありますか？",
    a: "各サービスで補償制度が用意されています。宅トラは1梱包最大30万円と充実した補償を提供しています。大切な荷物を預ける場合は補償内容を事前に確認することをおすすめします。",
  },
  {
    q: "取り出しにはどのくらい時間がかかりますか？",
    a: "多くのサービスで翌日〜3営業日程度で届きます。衣替えの時期は混み合うことがあるため、余裕を持って依頼するのがおすすめです。",
  },
  {
    q: "解約はいつでもできますか？",
    a: "ほとんどのサービスでいつでも解約できます。ただし預けている荷物をすべて取り出してから解約する必要があります。",
  },
];

const steps = [
  {
    title: "サービスに申し込む",
    body: "公式サイトまたはアプリから申し込みを行います。多くのサービスでは初期費用が無料で、クレジットカード登録だけで始められます。",
  },
  {
    title: "段ボールに荷物を詰める",
    body: "申し込み後に専用の段ボールが届きます。預けたい荷物を詰めて、アプリから集荷日を指定するだけです。集荷当日はドライバーが自宅まで取りに来てくれます。",
  },
  {
    title: "倉庫で保管",
    body: "荷物は温度・湿度が管理された専用倉庫で保管されます。サービスによっては1点ずつ写真撮影してアプリで管理されるため、何を預けているか一目で確認できます。",
  },
  {
    title: "必要なときに取り出す",
    body: "読みたい本、着たい服、使いたいアイテムが出てきたらスマホから取り出しを依頼します。早ければ翌日、通常は2〜3営業日で自宅に届きます。",
  },
];

export default function GuideClient() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <main className="min-h-screen bg-[#F5F0E8]">
      {/* ヘッダー */}
      <header className="bg-white border-b border-gray-200 py-4">
        <div className="mx-auto max-w-6xl px-6 flex justify-between items-center">
          <Link href="/" className="flex items-center gap-2">
            <div className="w-6 h-6 bg-[#2D5016] rounded-sm" />
            <span className="text-xl font-bold text-[#2D5016]">くらべる収納</span>
          </Link>
        </div>
      </header>

      {/* ヒーロー */}
      <div className="bg-white border-b border-gray-200 pt-6 pb-8">
        <div className="mx-auto max-w-3xl px-6">
          <nav className="text-[12px] text-[#888780] mb-4">
            <Link href="/" className="hover:underline">ホーム</Link>
            <span className="mx-1">›</span>
            <span>ガイド</span>
            <span className="mx-1">›</span>
            <span>宅配収納とは</span>
          </nav>
          <div className="flex items-center gap-2 mb-3">
            <span className="text-sm font-[600] text-[#C4620A]">ガイド</span>
          </div>
          <h1 className="text-[26px] font-[700] text-[#2D5016] leading-[1.4] mb-3">
            宅配収納サービスとは？<br />トランクルームとの違いや使い方を解説
          </h1>
          <p className="text-[12px] text-[#888780]">2026年4月更新</p>
        </div>
      </div>

      {/* 本文 */}
      <div className="mx-auto max-w-3xl px-6 py-10 space-y-12">

        {/* セクション1 */}
        <section>
          <h2 className="text-[20px] font-[700] text-[#2D5016] mb-4 pb-2 border-b-2 border-[#2D5016]">
            宅配収納サービスとは？
          </h2>
          <p className="text-[14px] text-[#2C2C2A] leading-[1.9] mb-4">
            宅配収納サービスとは、自宅にいながら荷物をプロの倉庫に預けられるサービスです。利用の流れはシンプルで、専用の段ボールに荷物を詰めて集荷を依頼するだけ。あとは倉庫スタッフが受け取り、温度・湿度が管理された専用倉庫で大切に保管してくれます。必要になったらスマホアプリから取り出しを依頼すると、数日以内に自宅まで届けてもらえます。
          </p>
          <p className="text-[14px] text-[#2C2C2A] leading-[1.9]">
            月額数百円から始められるため、「収納スペースが足りないけどトランクルームを借りるほどではない」という方にも気軽に利用できるのが特徴です。
          </p>
        </section>

        {/* セクション2 */}
        <section>
          <h2 className="text-[20px] font-[700] text-[#2D5016] mb-4 pb-2 border-b-2 border-[#2D5016]">
            普通のトランクルームとの違い
          </h2>
          <p className="text-[14px] text-[#2C2C2A] leading-[1.9] mb-4">
            従来のトランクルームは、自分で荷物を運んで預け、取り出すときもまた自分で取りに行く必要があります。立地によっては車が必要なことも多く、重い荷物を運ぶのが大変という声も多くありました。
          </p>
          <p className="text-[14px] text-[#2C2C2A] leading-[1.9] mb-6">
            宅配収納サービスはその課題をすべて解決します。集荷も配送も自宅で完結するため、車がなくても、体力に自信がなくても利用できます。また、預けた荷物はアプリで写真管理されるため、「何を預けたか忘れた」という問題も起きません。
          </p>
          <div className="overflow-x-auto">
            <table className="w-full text-[13px]" style={{ borderCollapse: "collapse" }}>
              <thead>
                <tr>
                  <th className="py-3 px-4 text-left text-white font-bold" style={{ background: "#2D5016", border: "0.5px solid #D3D1C7" }}>比較項目</th>
                  <th className="py-3 px-4 text-center text-white font-bold" style={{ background: "#2D5016", border: "0.5px solid #D3D1C7" }}>宅配収納</th>
                  <th className="py-3 px-4 text-center text-white font-bold" style={{ background: "#2D5016", border: "0.5px solid #D3D1C7" }}>トランクルーム</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ["荷物の運搬", "不要（自宅で完結）", "自分で運ぶ"],
                  ["月額料金", "数百円〜", "数千円〜"],
                  ["荷物の管理", "アプリで写真管理", "自己管理"],
                  ["取り出し", "スマホで依頼・配送", "自分で取りに行く"],
                  ["最低利用期間", "1ヶ月〜", "数ヶ月〜1年"],
                ].map(([item, takuhai, trunk], i) => (
                  <tr key={item} style={{ background: i % 2 === 1 ? "#F5F0E8" : "white" }}>
                    <td className="py-3 px-4 font-medium text-[#2C2C2A]" style={{ border: "0.5px solid #D3D1C7" }}>{item}</td>
                    <td className="py-3 px-4 text-center text-[#2D5016] font-medium" style={{ border: "0.5px solid #D3D1C7" }}>{takuhai}</td>
                    <td className="py-3 px-4 text-center text-[#888780]" style={{ border: "0.5px solid #D3D1C7" }}>{trunk}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* セクション3 */}
        <section>
          <h2 className="text-[20px] font-[700] text-[#2D5016] mb-4 pb-2 border-b-2 border-[#2D5016]">
            こんな人に向いています
          </h2>
          <ul className="space-y-3">
            {[
              "衣替えのたびにクローゼットが溢れてしまう方",
              "引越しや転勤で一時的に荷物を預けたい方",
              "趣味グッズや思い出の品など捨てられないものの置き場所に困っている方",
              "高齢の親御さんの荷物整理や子どもの成長に伴う不用品の一時保管に",
              "トランクルームまで荷物を運ぶのが大変な方",
            ].map((item) => (
              <li key={item} className="flex items-start gap-3 text-[14px] text-[#2C2C2A] leading-[1.8]">
                <span className="font-bold mt-0.5 flex-shrink-0" style={{ color: "#2D5016" }}>✓</span>
                {item}
              </li>
            ))}
          </ul>
        </section>

        {/* セクション4 */}
        <section>
          <h2 className="text-[20px] font-[700] text-[#2D5016] mb-6 pb-2 border-b-2 border-[#2D5016]">
            利用の流れ（4ステップ）
          </h2>
          <div className="space-y-4">
            {steps.map((step, i) => (
              <div key={i} className="bg-white rounded-[12px] p-5 flex gap-4 items-start" style={{ border: "0.5px solid #D3D1C7" }}>
                <div className="w-10 h-10 rounded-full bg-[#2D5016] text-white flex items-center justify-center font-bold text-[16px] flex-shrink-0">
                  {i + 1}
                </div>
                <div>
                  <p className="font-[700] text-[#2D5016] mb-1">{step.title}</p>
                  <p className="text-[13px] text-[#5F5E5A] leading-[1.8]">{step.body}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* セクション5：FAQ */}
        <section>
          <h2 className="text-[20px] font-[700] text-[#2D5016] mb-6 pb-2 border-b-2 border-[#2D5016]">
            よくある質問
          </h2>
          <div className="space-y-3">
            {faqs.map((faq, i) => (
              <div
                key={i}
                className="bg-white rounded-[10px] overflow-hidden"
                style={{ border: `0.5px solid ${openFaq === i ? "#2D5016" : "#D3D1C7"}` }}
              >
                <button
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="w-full flex items-center justify-between p-4 text-left hover:bg-[#F5F0E8] transition"
                >
                  <span className="text-[14px] font-[600] text-[#2C2C2A] pr-4">Q. {faq.q}</span>
                  <span className="text-[#2D5016] font-bold text-xl flex-shrink-0">{openFaq === i ? "－" : "＋"}</span>
                </button>
                {openFaq === i && (
                  <div className="px-4 pb-4 text-[13px] text-[#5F5E5A] leading-[1.8]">
                    A. {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </section>

        {/* 診断CTAバナー */}
        <div className="bg-[#2D5016] rounded-[12px] px-8 py-10 text-center">
          <p className="text-white text-[18px] font-[700] mb-2">
            あなたに合う宅配収納サービスを診断する
          </p>
          <p className="text-[#A8C78A] text-[14px] mb-6">
            箱数と期間を入力するだけで最安サービスが3秒で分かります
          </p>
          <Link
            href="/"
            className="inline-block bg-[#E8873A] hover:bg-[#D97A2D] text-white font-[700] px-8 py-3 rounded-[10px] text-[15px] transition"
          >
            無料で診断する →
          </Link>
        </div>
      </div>
    </main>
  );
}
