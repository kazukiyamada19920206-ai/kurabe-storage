import type { Metadata } from "next";
import Link from "next/link";
import pricing from "../../../pricing.json";

export const metadata: Metadata = {
  title: "サマリーポケットの評判・口コミを徹底解説｜メリット・デメリットとおすすめの使い方",
  description:
    "サマリーポケットの実際の口コミ・評判、月額料金、メリット・デメリット、オプション機能を徹底解説。初めて宅配収納を使う方におすすめの使い方も紹介します。",
};

const service = pricing.find((s) => s.slug === "summary-pocket")!;

export default function SummaryPocketReviewPage() {
  return (
    <main className="min-h-screen bg-[#F5F0E8]">
      {/* ヘッダー */}
      <header className="bg-white border-b border-gray-200 py-4">
        <div className="mx-auto max-w-6xl px-6">
          <Link href="/" className="flex items-center gap-2 w-fit">
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
            <span>サマリーポケットの評判・口コミ</span>
          </nav>
          <div className="flex items-center gap-2 mb-3">
            <span className="text-sm font-[600] text-[#C4620A]">評判・口コミ</span>
          </div>
          <h1 className="text-[26px] font-[700] text-[#2D5016] leading-[1.4] mb-3">
            サマリーポケットの評判・口コミを徹底解説<br />メリット・デメリットとおすすめの使い方
          </h1>
          <p className="text-[12px] text-[#888780]">2026年4月更新</p>
        </div>
      </div>

      <div className="mx-auto max-w-3xl px-6 py-10 space-y-12">

        {/* ① 結論 */}
        <section>
          <h2 className="text-[20px] font-[700] text-[#2D5016] mb-4 pb-2 border-b-2 border-[#2D5016]">
            結論
          </h2>
          <div className="bg-white rounded-[12px] p-5" style={{ border: "0.5px solid #D3D1C7" }}>
            <p className="text-[14px] text-[#2C2C2A] leading-[1.9]">
              サマリーポケットは<strong className="text-[#2D5016]">初めて宅配収納を使う方に最もおすすめできるサービス</strong>です。知名度・使いやすさ・クリーニングオプションの三拍子が揃っており、月額330円〜とコスパも良く、迷ったらまずここから試して間違いありません。
            </p>
          </div>
        </section>

        {/* ② 基本情報・料金テーブル */}
        <section>
          <h2 className="text-[20px] font-[700] text-[#2D5016] mb-4 pb-2 border-b-2 border-[#2D5016]">
            基本情報・料金
          </h2>
          <div className="overflow-x-auto">
            <table className="w-full text-[13px]" style={{ borderCollapse: "collapse" }}>
              <thead>
                <tr>
                  <th className="py-3 px-4 text-left text-white font-bold" style={{ background: "#2D5016", border: "0.5px solid #D3D1C7" }}>項目</th>
                  <th className="py-3 px-4 text-left text-white font-bold" style={{ background: "#2D5016", border: "0.5px solid #D3D1C7" }}>内容</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ["月額（1箱）", `¥${service.monthly_per_box.toLocaleString()}〜`],
                  ["取り出し送料", `¥${service.retrieval_fee.toLocaleString()}`],
                  ["初期費用", service.initial_fee === 0 ? "無料" : `¥${service.initial_fee.toLocaleString()}`],
                  ["最低利用期間", "1ヶ月〜"],
                  ["運営会社", "株式会社サマリー"],
                ].map(([label, value], i) => (
                  <tr key={label} style={{ background: i % 2 === 1 ? "#F5F0E8" : "white" }}>
                    <td className="py-3 px-4 font-medium text-[#2C2C2A]" style={{ border: "0.5px solid #D3D1C7" }}>{label}</td>
                    <td className="py-3 px-4 text-[#2C2C2A]" style={{ border: "0.5px solid #D3D1C7" }}>{value}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* ③ メリット5つ */}
        <section>
          <h2 className="text-[20px] font-[700] text-[#2D5016] mb-4 pb-2 border-b-2 border-[#2D5016]">
            サマリーポケットのメリット
          </h2>
          <div className="space-y-3">
            {[
              {
                title: "アプリ操作が直感的でわかりやすい",
                body: "集荷依頼・取り出し・中身の確認がすべてアプリで完結。預けたものを写真で一覧管理できるので「何を預けたか忘れた」がなくなります。",
              },
              {
                title: "クリーニングオプションが充実",
                body: "預けた衣類をそのままクリーニングに出せます。コートなど1点990円〜。衣替えとクリーニングを同時に済ませられるのはサマリーポケットならではの強みです。",
              },
              {
                title: "初回は日割り計算",
                body: "月の途中から始めても損しません。月額を日割りで計算してくれるため、気軽に始められます。",
              },
              {
                title: "大手の安心感",
                body: "テレビCMでもおなじみの知名度。初めての宅配収納で不安な方にとって「聞いたことある会社」という安心感は大きいです。",
              },
              {
                title: "保管環境が高品質",
                body: "三菱倉庫が運営する倉庫で温度10〜28℃・湿度40〜65%を管理。カビや虫のリスクが低く、大切な衣類も安心して預けられます。",
              },
            ].map((item) => (
              <div key={item.title} className="bg-white rounded-[12px] p-5 flex gap-4" style={{ border: "0.5px solid #D3D1C7" }}>
                <span className="font-bold text-[#2D5016] flex-shrink-0 mt-0.5">✓</span>
                <div>
                  <p className="font-[700] text-[#2C2C2A] mb-1">{item.title}</p>
                  <p className="text-[13px] text-[#5F5E5A] leading-[1.8]">{item.body}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ④ オプション機能一覧 */}
        <section>
          <h2 className="text-[20px] font-[700] text-[#2D5016] mb-4 pb-2 border-b-2 border-[#2D5016]">
            オプション機能一覧
          </h2>
          <div className="overflow-x-auto">
            <table className="w-full text-[13px]" style={{ borderCollapse: "collapse" }}>
              <thead>
                <tr>
                  <th className="py-3 px-4 text-left text-white font-bold" style={{ background: "#2D5016", border: "0.5px solid #D3D1C7" }}>オプション</th>
                  <th className="py-3 px-4 text-left text-white font-bold" style={{ background: "#2D5016", border: "0.5px solid #D3D1C7" }}>内容</th>
                  <th className="py-3 px-4 text-left text-white font-bold" style={{ background: "#2D5016", border: "0.5px solid #D3D1C7" }}>料金</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ["クリーニング（スタンダード）", "預けた衣類をそのままクリーニング", "990円〜/点"],
                  ["クリーニング（プレミアム）", "デリケート素材・高級品対応", "1,276円〜/点"],
                  ["ハンガー保管", "衣類をハンガーにかけたまま保管、型崩れ防止", "60円〜/点/月"],
                  ["靴修理", "ヒール・ソールのすり減りを修理", "1,408円〜/両足"],
                  ["手放すオプション", "取り出さずにそのまま寄付・リサイクル", "200円〜/点"],
                ].map(([label, desc, price], i) => (
                  <tr key={label} style={{ background: i % 2 === 1 ? "#F5F0E8" : "white" }}>
                    <td className="py-3 px-4 font-medium text-[#2C2C2A]" style={{ border: "0.5px solid #D3D1C7" }}>{label}</td>
                    <td className="py-3 px-4 text-[#2C2C2A]" style={{ border: "0.5px solid #D3D1C7" }}>{desc}</td>
                    <td className="py-3 px-4 text-[#2C2C2A] whitespace-nowrap" style={{ border: "0.5px solid #D3D1C7" }}>{price}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="mt-4 bg-white rounded-[12px] p-4 text-[13px] text-[#5F5E5A] leading-[1.8]" style={{ border: "0.5px solid #D3D1C7" }}>
            クリーニングは近所の店舗だとコート1着2,000円以上かかるケースが多い中、サマリーポケットなら990円〜。しかも自宅から一歩も出ずに完結します。
          </div>
        </section>

        {/* ⑤ デメリット2つ */}
        <section>
          <h2 className="text-[20px] font-[700] text-[#2D5016] mb-4 pb-2 border-b-2 border-[#2D5016]">
            サマリーポケットのデメリット
          </h2>
          <div className="space-y-3">
            {[
              {
                title: "衣替え時期は取り出しが混雑する",
                body: "春・秋の繁忙期は取り出しに1〜2週間かかるケースがあります。急ぎで必要なものは余裕を持って依頼することが必要です。",
              },
              {
                title: "月額はAZUKELやminikuraより少し高め",
                body: "AZUKEL（220円）・minikura（275円）と比べると330円はやや高め。ただしオプションの付加価値を考えると十分な価値があります。",
              },
            ].map((item) => (
              <div key={item.title} className="bg-white rounded-[12px] p-5 flex gap-4" style={{ border: "0.5px solid #D3D1C7" }}>
                <span className="font-bold text-[#C4620A] flex-shrink-0 mt-0.5">△</span>
                <div>
                  <p className="font-[700] text-[#2C2C2A] mb-1">{item.title}</p>
                  <p className="text-[13px] text-[#5F5E5A] leading-[1.8]">{item.body}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ⑥ こんな使い方がおすすめ */}
        <section>
          <h2 className="text-[20px] font-[700] text-[#2D5016] mb-4 pb-2 border-b-2 border-[#2D5016]">
            こんな使い方がおすすめ
          </h2>
          <div className="space-y-3">
            {[
              {
                title: "衣替え収納として使う",
                body: "シーズンオフの衣類・コートをまとめて預けて、クリーニングオプションと組み合わせれば「預けてきれいになって戻ってくる」理想の衣替えが実現します。",
              },
              {
                title: "引越し時の一時保管に使う",
                body: "引越し後すぐ開けない荷物をそのまま段ボールに入れて送るだけ。部屋の片付けがぐっと楽になります。",
              },
              {
                title: "捨てられないものの「とりあえず置き場」に使う",
                body: "「捨てるか迷っているもの」を一度預けてみる使い方。見えないところに置くことで判断が冷静にできます。",
              },
            ].map((item, i) => (
              <div key={item.title} className="bg-white rounded-[12px] p-5 flex gap-4" style={{ border: "0.5px solid #D3D1C7" }}>
                <span className="font-[700] text-[#2D5016] flex-shrink-0 text-[18px] leading-none mt-0.5">{i + 1}</span>
                <div>
                  <p className="font-[700] text-[#2C2C2A] mb-1">{item.title}</p>
                  <p className="text-[13px] text-[#5F5E5A] leading-[1.8]">{item.body}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ⑦ こんな人におすすめ／向いていない人 */}
        <section>
          <h2 className="text-[20px] font-[700] text-[#2D5016] mb-4 pb-2 border-b-2 border-[#2D5016]">
            こんな人におすすめ／他のサービスが向いている人
          </h2>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-white rounded-[12px] p-5" style={{ border: "0.5px solid #D3D1C7" }}>
              <p className="font-[700] text-[#2D5016] mb-3">サマリーポケットがおすすめ</p>
              <ul className="space-y-2">
                {[
                  "初めて宅配収納を使う方",
                  "衣替えとクリーニングをまとめて済ませたい方",
                  "アプリで管理したい方",
                  "大手サービスで安心したい方",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2 text-[13px] text-[#2C2C2A] leading-[1.8]">
                    <span className="font-bold text-[#2D5016] flex-shrink-0">✓</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-white rounded-[12px] p-5" style={{ border: "0.5px solid #D3D1C7" }}>
              <p className="font-[700] text-[#C4620A] mb-3">他のサービスが向いている人</p>
              <ul className="space-y-2">
                {[
                  { text: "月額を安く抑えたい", link: "/detail/azukel", label: "AZUKEL（220円）" },
                  { text: "本・CDを専用プランで預けたい", link: "/detail/minikura", label: "minikura" },
                  { text: "頻繁に出し入れする", link: "/detail/airtrunk", label: "エアトランク（送料無料）" },
                ].map((item) => (
                  <li key={item.text} className="flex items-start gap-2 text-[13px] text-[#2C2C2A] leading-[1.8]">
                    <span className="font-bold text-[#C4620A] flex-shrink-0">→</span>
                    <span>{item.text} ：<Link href={item.link} className="text-[#E8873A] hover:underline">{item.label}</Link></span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* ⑧ 口コミ3選 */}
        <section>
          <h2 className="text-[20px] font-[700] text-[#2D5016] mb-4 pb-2 border-b-2 border-[#2D5016]">
            実際の口コミ・評判
          </h2>
          <div className="grid md:grid-cols-3 gap-4">
            {service.reviews?.map((review, i) => {
              const isFemale = review.author.includes("女性");
              return (
                <div key={i} className="bg-white rounded-[12px] p-5 flex flex-col" style={{ border: "0.5px solid #D3D1C7" }}>
                  <div className="flex items-center gap-3 mb-3">
                    <svg viewBox="0 0 40 40" width="36" height="36" className="flex-shrink-0">
                      {isFemale ? (
                        <>
                          <circle cx="20" cy="20" r="20" fill="#E8873A"/>
                          <circle cx="20" cy="15" r="7" fill="white"/>
                          <path d="M6 36 Q6 26 20 26 Q34 26 34 36" fill="white"/>
                          <path d="M13 12 Q14 6 20 8 Q26 6 27 12" fill="#E8873A"/>
                          <path d="M13 13 Q11 10 12 8 Q13 6 15 8" fill="white"/>
                          <path d="M27 13 Q29 10 28 8 Q27 6 25 8" fill="white"/>
                        </>
                      ) : (
                        <>
                          <circle cx="20" cy="20" r="20" fill="#2D5016"/>
                          <circle cx="20" cy="15" r="7" fill="white"/>
                          <path d="M6 36 Q6 26 20 26 Q34 26 34 36" fill="white"/>
                        </>
                      )}
                    </svg>
                    <div>
                      <p className="font-bold text-[#2C2C2A] text-[13px]">{review.author}</p>
                      <span style={{ fontSize: "13px", color: "#E8873A" }}>★★★★★</span>
                    </div>
                  </div>
                  <p className="text-[13px] text-[#5F5E5A] leading-[1.8] flex-1">{review.comment}</p>
                  <div className="mt-3 pt-3 border-t border-gray-200">
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
                      <span style={{ fontSize: "11px", color: "#888780" }}>出典：{review.source}</span>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* ⑨ 詳細ページへの内部リンク */}
        <section>
          <h2 className="text-[20px] font-[700] text-[#2D5016] mb-4 pb-2 border-b-2 border-[#2D5016]">
            料金シミュレーションで確認する
          </h2>
          <div className="bg-white rounded-[12px] p-5" style={{ border: "0.5px solid #D3D1C7" }}>
            <p className="text-[13px] text-[#5F5E5A] leading-[1.8] mb-4">
              あなたの箱数・保管期間でサマリーポケットの総費用を計算できます。他のサービスと比べて最安かどうかも一目で確認できます。
            </p>
            <Link
              href="/detail/summary-pocket"
              className="inline-block bg-[#2D5016] hover:bg-[#1A3009] text-white font-[600] px-6 py-3 rounded-[10px] text-[14px] transition"
            >
              サマリーポケットの料金を診断で確認する →
            </Link>
          </div>
        </section>

        {/* ⑩ 診断CTAバナー */}
        <div className="bg-[#2D5016] rounded-[12px] px-8 py-10 text-center">
          <p className="text-white text-[17px] font-[700] mb-2">
            他のサービスも含めて比較したい方は
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
