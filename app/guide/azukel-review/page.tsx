import type { Metadata } from "next";
import Link from "next/link";
import pricing from "../../../pricing.json";

export const metadata: Metadata = {
  title: "AZUKEL（アズケル）の評判・口コミ・料金を徹底解説",
  description:
    "AZUKELの実際の口コミ・評判、月額料金、メリット・デメリットを徹底解説。宅配収納サービスを初めて使う方にも分かりやすくまとめました。",
};

const service = pricing.find((s) => s.slug === "azukel")!;

export default function AzukelReviewPage() {
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
            <span>AZUKELの評判・口コミ</span>
          </nav>
          <div className="flex items-center gap-2 mb-3">
            <span className="text-sm font-[600] text-[#C4620A]">評判・口コミ</span>
          </div>
          <h1 className="text-[26px] font-[700] text-[#2D5016] leading-[1.4] mb-3">
            AZUKEL（アズケル）の評判・口コミ・<br />料金を徹底解説
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
              AZUKELは<strong className="text-[#2D5016]">月額220円と業界最安水準の料金</strong>が最大の強みです。初期費用も無料で、短期から中期の保管を検討している方に特におすすめです。「とにかくコストを抑えて預けたい」という方の第一選択肢として自信を持っておすすめできます。大型家具・家電への対応や1点ずつの写真管理など、機能面も充実しています。
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
                  ["初期費用", service.initial_fee === 0 ? "無料" : `¥${service.initial_fee.toLocaleString()}`],
                  ["最低利用期間", "1ヶ月〜"],
                  ["対応荷物", "段ボール・大型家具・家電"],
                  ["運営会社", "株式会社日本パープル"],
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
            AZUKELのメリット
          </h2>
          <div className="space-y-3">
            {[
              { title: "業界最安水準の月額220円", body: "宅配収納サービスの中でトップクラスに安い月額料金です。コストを最優先したい方にとって最有力の選択肢です。" },
              { title: "初期費用・最低利用期間なし", body: "申し込み時の初期費用が無料で、1ヶ月から利用可能です。気軽に試しやすく、短期利用にも向いています。" },
              { title: "大型家具・家電にも対応", body: "段ボールに収まらないソファや家電なども預けられます。引越しの一時保管や大型荷物の整理にも活用できます。" },
              { title: "1点ずつ写真管理", body: "預けた荷物は1点ずつ写真で管理されるため、何を預けているか一目で確認できます。" },
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
            AZUKELのデメリット
          </h2>
          <div className="space-y-3">
            {[
              { title: "知名度がやや低い", body: "サマリーポケットやminikuraと比べると認知度は低め。運営実績や口コミ件数が少ない点は留意が必要です。" },
              { title: "取り出し送料が別途かかる", body: "取り出し1回あたり1,100円の送料が発生します。頻繁に出し入れする方はコストが積み上がりやすいため、利用頻度を考慮して検討しましょう。" },
              { title: "クリーニングオプションなし", body: "サマリーポケットのように預けた衣類をそのままクリーニングに出す機能はありません。衣類のメンテナンスも一緒に行いたい方には不向きです。" },
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

        {/* こんな人におすすめ */}
        <section>
          <h2 className="text-[20px] font-[700] text-[#2D5016] mb-4 pb-2 border-b-2 border-[#2D5016]">
            こんな人におすすめ
          </h2>
          <ul className="space-y-3 mb-6">
            {[
              "月額料金をとにかく抑えたい方",
              "短期から中期（1〜12ヶ月）の保管を検討している方",
              "大型家具・家電も一緒に預けたい方",
              "初めて宅配収納を試してみたい方",
            ].map((item) => (
              <li key={item} className="flex items-start gap-3 text-[14px] text-[#2C2C2A] leading-[1.8]">
                <span className="font-bold text-[#2D5016] flex-shrink-0 mt-0.5">✓</span>
                {item}
              </li>
            ))}
          </ul>
          <Link
            href="/detail/azukel"
            className="inline-block bg-[#2D5016] hover:bg-[#1A3009] text-white font-[600] px-6 py-3 rounded-[10px] text-[14px] transition"
          >
            AZUKELの詳細・料金シミュレーションを見る →
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
