import type { Metadata } from "next";
import Link from "next/link";
import pricing from "../../../pricing.json";

export const metadata: Metadata = {
  title: "カラエトの評判・口コミ・料金を徹底解説",
  description:
    "カラエトの実際の口コミ・評判、月額料金、メリット・デメリットを徹底解説。アイテム単位で取り出せる宅配収納サービスの特徴をまとめました。",
};

const service = pricing.find((s) => s.slug === "caraeto")!;

export default function CaraetoReviewPage() {
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
            <span>カラエトの評判・口コミ</span>
          </nav>
          <div className="flex items-center gap-2 mb-3">
            <span className="text-sm font-[600] text-[#C4620A]">評判・口コミ</span>
          </div>
          <h1 className="text-[26px] font-[700] text-[#2D5016] leading-[1.4] mb-3">
            カラエトの評判・口コミ・料金を徹底解説
          </h1>
          <p className="text-[12px] text-[#888780]">2026年4月更新</p>
        </div>
      </div>

      <div className="mx-auto max-w-3xl px-6 py-10 space-y-12">

        {/* 結論 */}
        <section>
          <h2 className="text-[20px] font-[700] text-[#2D5016] mb-4 pb-2 border-b-2 border-[#2D5016]">
            結論
          </h2>
          <div className="bg-white rounded-[12px] p-5" style={{ border: "0.5px solid #D3D1C7" }}>
            <p className="text-[14px] text-[#2C2C2A] leading-[1.9]">
              カラエトは<strong className="text-[#2D5016]">アイテム単位での管理・取り出し</strong>に特化した宅配収納サービスです。「箱ごと取り出すのが面倒」「何を預けたか分からなくなる」という悩みを解決してくれます。フリマ出品機能も備えており、不用品整理と収納を同時に進めたい方に特におすすめです。衣替えを頻繁に行う方や、細かい荷物を管理したい方にとって利便性の高いサービスです。
            </p>
          </div>
        </section>

        {/* 基本情報・料金 */}
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
                  ["月額料金（1箱）", `¥${service.monthly_per_box.toLocaleString()}〜`],
                  ["取り出し送料", `¥${service.retrieval_fee.toLocaleString()}`],
                  ["初期費用", `¥${service.initial_fee.toLocaleString()}`],
                  ["最低利用期間", "1ヶ月〜"],
                  ["管理方法", "アイテム単位で写真管理"],
                  ["特徴機能", "フリマ出品・アイテム単位取り出し"],
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

        {/* メリット */}
        <section>
          <h2 className="text-[20px] font-[700] text-[#2D5016] mb-4 pb-2 border-b-2 border-[#2D5016]">
            カラエトのメリット
          </h2>
          <div className="space-y-3">
            {[
              { title: "アイテム単位で取り出せる", body: "箱ごとではなく、必要な1点だけを取り出せます。「この服だけ出したい」という衣替えのニーズにぴったりです。" },
              { title: "1点ずつ写真で管理", body: "預けた荷物は全て写真撮影されアプリで管理されます。「何を預けたか忘れた」という問題が起きません。" },
              { title: "フリマ出品機能", body: "預けている荷物をそのままフリマアプリに出品できます。不用品整理と収納を同時に進められる独自機能です。" },
              { title: "取り出し送料が安め", body: "取り出し1回あたり990円と、業界水準より低めの送料です。アイテム単位での取り出しと組み合わせてコストを抑えられます。" },
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

        {/* デメリット */}
        <section>
          <h2 className="text-[20px] font-[700] text-[#2D5016] mb-4 pb-2 border-b-2 border-[#2D5016]">
            カラエトのデメリット
          </h2>
          <div className="space-y-3">
            {[
              { title: "月額・初期費用がやや高め", body: "月額308円＋初期費用308円と、AZUKELやminikuraよりコストが高めです。長期保管ではコスト差が積み上がります。" },
              { title: "大型荷物は非対応", body: "段ボールに収まらない大型家具や家電には対応していません。大型荷物も一緒に預けたい場合はAZUKELや宅トラが向いています。" },
              { title: "アイテム管理に手間がかかる場合も", body: "荷物を1点ずつ管理するため、大量の荷物を一気に預けるケースでは手続きに時間がかかることがあります。" },
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

        {/* 口コミ */}
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
                    <a
                      href={review.source_url}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{ fontSize: "11px", color: "#888780", textDecoration: "underline" }}
                    >
                      出典：{review.source}
                    </a>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* 料金シミュレーション */}
        <section>
          <h2 className="text-[20px] font-[700] text-[#2D5016] mb-4 pb-2 border-b-2 border-[#2D5016]">
            料金シミュレーション
          </h2>
          <p className="text-[13px] text-[#888780] mb-4">サマリーポケット（330円/月・送料1,100円）との比較。取り出し1回分を含む。</p>
          <div className="overflow-x-auto">
            <table className="w-full text-[13px]" style={{ borderCollapse: "collapse" }}>
              <thead>
                <tr>
                  <th className="py-3 px-4 text-left text-white font-bold" style={{ background: "#2D5016", border: "0.5px solid #D3D1C7" }}>条件</th>
                  <th className="py-3 px-4 text-center text-white font-bold" style={{ background: "#2D5016", border: "0.5px solid #D3D1C7" }}>カラエト</th>
                  <th className="py-3 px-4 text-center text-white font-bold" style={{ background: "#2D5016", border: "0.5px solid #D3D1C7" }}>サマリーポケット</th>
                  <th className="py-3 px-4 text-center text-white font-bold" style={{ background: "#2D5016", border: "0.5px solid #D3D1C7" }}>差額</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { label: "1箱・3ヶ月", self: 1914, ref: 2090 },
                  { label: "3箱・6ヶ月", self: 6534, ref: 7040 },
                  { label: "5箱・6ヶ月", self: 10230, ref: 11000 },
                  { label: "5箱・12ヶ月", self: 19470, ref: 20900 },
                ].map(({ label, self, ref }, i) => {
                  const cheaper = self < ref;
                  const diff = Math.abs(self - ref);
                  return (
                    <tr key={label} style={{ background: i % 2 === 1 ? "#F5F0E8" : "white" }}>
                      <td className="py-3 px-4 font-medium text-[#2C2C2A]" style={{ border: "0.5px solid #D3D1C7" }}>{label}</td>
                      <td className={`py-3 px-4 text-center ${cheaper ? "font-[600] text-[#2D5016]" : "text-[#888780]"}`} style={{ border: "0.5px solid #D3D1C7" }}>¥{self.toLocaleString()}</td>
                      <td className={`py-3 px-4 text-center ${!cheaper ? "font-[600] text-[#2D5016]" : "text-[#888780]"}`} style={{ border: "0.5px solid #D3D1C7" }}>¥{ref.toLocaleString()}</td>
                      <td className={`py-3 px-4 text-center font-[600] ${cheaper ? "text-[#2D5016]" : "text-[#C4620A]"}`} style={{ border: "0.5px solid #D3D1C7" }}>
                        {cheaper ? `${diff.toLocaleString()}円 安い` : `${diff.toLocaleString()}円 高い`}
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
          <div className="mt-6">
            <Link href="/" className="inline-block bg-[#E8873A] hover:bg-[#D97A2D] text-white font-[700] px-8 py-3 rounded-[10px] text-[15px] transition">
              あなたの条件で正確な料金を3秒で確認する →
            </Link>
          </div>
        </section>

        {/* こんな人におすすめ */}
        <section>
          <h2 className="text-[20px] font-[700] text-[#2D5016] mb-4 pb-2 border-b-2 border-[#2D5016]">
            こんな人におすすめ
          </h2>
          <ul className="space-y-3 mb-6">
            {[
              "季節ごとに衣替えを頻繁に行う方",
              "アイテム単位で細かく管理・取り出しをしたい方",
              "不用品をフリマで売りながら整理したい方",
              "何を預けたか分からなくなりがちな方",
            ].map((item) => (
              <li key={item} className="flex items-start gap-3 text-[14px] text-[#2C2C2A] leading-[1.8]">
                <span className="font-bold text-[#2D5016] flex-shrink-0 mt-0.5">✓</span>
                {item}
              </li>
            ))}
          </ul>
          <Link
            href="/detail/caraeto"
            className="inline-block bg-[#2D5016] hover:bg-[#1A3009] text-white font-[600] px-6 py-3 rounded-[10px] text-[14px] transition"
          >
            カラエトの詳細・料金シミュレーションを見る →
          </Link>
        </section>

        {/* 診断CTAバナー */}
        <div className="bg-[#2D5016] rounded-[12px] px-8 py-10 text-center">
          <p className="text-white text-[18px] font-[700] mb-2">
            あなたの条件で最安サービスを診断する
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
