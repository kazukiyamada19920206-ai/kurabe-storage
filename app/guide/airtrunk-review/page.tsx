import type { Metadata } from "next";
import Link from "next/link";
import pricing from "../../../pricing.json";

export const metadata: Metadata = {
  title: "エアトランクの評判・口コミを徹底解説｜メリット・デメリットとおすすめの使い方",
  description:
    "エアトランクの実際の口コミ・評判、料金、メリット・デメリットを徹底解説。集荷・配送料が何度でも無料のサービスの特徴とおすすめの使い方を紹介します。",
};

const service = pricing.find((s) => s.slug === "airtrunk")!;

export default function AirtrunkReviewPage() {
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
            <span>エアトランクの評判・口コミ</span>
          </nav>
          <div className="flex items-center gap-2 mb-3">
            <span className="text-sm font-[600] text-[#C4620A]">評判・口コミ</span>
          </div>
          <h1 className="text-[26px] font-[700] text-[#2D5016] leading-[1.4] mb-3">
            エアトランクの評判・口コミを徹底解説<br />メリット・デメリットとおすすめの使い方
          </h1>
          <p className="text-[12px] text-[#888780]">2026年5月更新</p>
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
              エアトランクは<strong className="text-[#2D5016]">集荷・配送料が何度でも無料という唯一無二の強み</strong>を持つサービスです。月額料金は他社より高めですが、頻繁に出し入れする人ほどトータルコストが安くなる逆転現象が起きます。大型荷物にも対応しており、自社スタッフが丁寧に対応してくれる点も評価が高いです。
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
                  ["月額", "3,718円〜（ベーシックプラン）"],
                  ["取り出し送料", "無料（何度でも）"],
                  ["初期費用", "無料"],
                  ["最低利用期間", "3ヶ月〜"],
                  ["対応エリア", "首都圏・一部地域限定"],
                  ["運営会社", "株式会社エアトランク"],
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

        {/* ③ メリット */}
        <section>
          <h2 className="text-[20px] font-[700] text-[#2D5016] mb-4 pb-2 border-b-2 border-[#2D5016]">
            エアトランクのメリット
          </h2>
          <div className="space-y-3">
            {[
              {
                title: "集荷・配送料が何度でも完全無料",
                body: "他社では毎回1,000円以上かかる送料がゼロ。頻繁に出し入れするほどお得になります。",
              },
              {
                title: "自社スタッフが玄関まで集荷・配送",
                body: "梱包不要でそのまま渡すだけ。スタッフの丁寧さを褒める口コミが多く、大切な荷物も安心して預けられます。",
              },
              {
                title: "ダンボールに入らない大型荷物にも対応",
                body: "ゴルフバッグ・スキー板・大型家具もそのまま預けられます。他の宅配収納サービスでは難しい大型荷物が預けられる点が大きな強みです。",
              },
              {
                title: "ゴルフバッグをゴルフ場に直送するオプションあり",
                body: "倉庫からゴルフ場に直送・帰りは自動回収と、手ぶらでゴルフが楽しめます。ゴルフ愛好者にとって非常に便利な機能です。",
              },
              {
                title: "スマホで荷物を写真管理",
                body: "預けたものを一覧で確認でき、取り出し依頼もアプリから数タップで完了。「何を預けたか忘れた」がなくなります。",
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

        {/* ④ デメリット */}
        <section>
          <h2 className="text-[20px] font-[700] text-[#2D5016] mb-4 pb-2 border-b-2 border-[#2D5016]">
            エアトランクのデメリット
          </h2>
          <div className="space-y-3">
            {[
              {
                title: "月額料金が他社の1.5〜2倍",
                body: "頻繁に出し入れしない場合はコスパが悪くなります。ほぼ預けっぱなしにするならAZUKELやminikuraの方が安いです。",
              },
              {
                title: "対応エリアが限定的",
                body: "首都圏・一部地域のみ対応。地方在住の方は利用できません。サービス内容は魅力的でも、エリア外の方には選択肢になりません。",
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

        {/* ⑤ こんな使い方がおすすめ */}
        <section>
          <h2 className="text-[20px] font-[700] text-[#2D5016] mb-4 pb-2 border-b-2 border-[#2D5016]">
            こんな使い方がおすすめ
          </h2>
          <div className="space-y-3">
            {[
              {
                title: "衣替えのたびに入れ替える使い方",
                body: "送料無料なので春・秋の衣替えで往復しても追加費用ゼロ。クローゼット感覚で使えます。",
              },
              {
                title: "趣味道具の保管",
                body: "ゴルフ・スキー・キャンプ用品など使用頻度が低いが捨てられない趣味グッズに最適。必要なときだけ呼び出せます。",
              },
              {
                title: "引越し時の一時保管",
                body: "自社スタッフが搬出・搬入してくれるので引越し作業の負担を大幅に軽減できます。",
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

        {/* ⑥ こんな人におすすめ／向いていない人 */}
        <section>
          <h2 className="text-[20px] font-[700] text-[#2D5016] mb-4 pb-2 border-b-2 border-[#2D5016]">
            こんな人におすすめ／他のサービスが向いている人
          </h2>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-white rounded-[12px] p-5" style={{ border: "0.5px solid #D3D1C7" }}>
              <p className="font-[700] text-[#2D5016] mb-3">エアトランクがおすすめ</p>
              <ul className="space-y-2">
                {[
                  "月に何度も荷物を出し入れする方",
                  "ダンボールに入らない荷物も預けたい方",
                  "梱包の手間を省きたい方",
                  "首都圏在住の方",
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
                  { text: "出し入れ頻度が低く月額を安く抑えたい", link: "/detail/azukel", label: "AZUKEL（220円〜）" },
                  { text: "地方在住", link: "/detail/summary-pocket", label: "サマリーポケット・minikura（全国対応）" },
                  { text: "書籍・コレクション専門", link: "/detail/minikura", label: "minikura・東京書庫" },
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

        {/* ⑦ 口コミ */}
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

        {/* ⑧ 詳細ページへの内部リンク */}
        <section>
          <h2 className="text-[20px] font-[700] text-[#2D5016] mb-4 pb-2 border-b-2 border-[#2D5016]">
            料金シミュレーションで確認する
          </h2>
          <div className="bg-white rounded-[12px] p-5" style={{ border: "0.5px solid #D3D1C7" }}>
            <p className="text-[13px] text-[#5F5E5A] leading-[1.8] mb-4">
              あなたの箱数・保管期間でエアトランクの総費用を計算できます。他のサービスと比べて最安かどうかも一目で確認できます。
            </p>
            <Link
              href="/detail/airtrunk"
              className="inline-block bg-[#2D5016] hover:bg-[#1A3009] text-white font-[600] px-6 py-3 rounded-[10px] text-[14px] transition"
            >
              エアトランクの料金を診断で確認する →
            </Link>
          </div>
        </section>

        {/* 診断CTAバナー */}
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
