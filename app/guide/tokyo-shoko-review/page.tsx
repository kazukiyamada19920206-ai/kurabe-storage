import type { Metadata } from "next";
import Link from "next/link";
import pricing from "../../../pricing.json";

export const metadata: Metadata = {
  title: "東京書庫の評判・口コミ【2026年最新】本専門の宅配収納・料金・デメリットを解説",
  description:
    "東京書庫の評判・口コミ・料金を徹底解説。本好きのための書籍専用倉庫。取り出し送料無料・RC構造倉庫・月額275円〜のコスパを正直レビュー。",
};

const service = pricing.find((s) => s.slug === "tokyo-shoko")!;

export default function TokyoShokoReviewPage() {
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
            <span>東京書庫の評判・口コミ</span>
          </nav>
          <div className="flex items-center gap-2 mb-3">
            <span className="text-sm font-[600] text-[#C4620A]">評判・口コミ</span>
          </div>
          <h1 className="text-[26px] font-[700] text-[#2D5016] leading-[1.4] mb-3">
            東京書庫の評判・口コミを徹底解説<br />本専門の宅配収納サービスの特徴
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
              東京書庫は<strong className="text-[#2D5016]">本専門の宅配収納サービス</strong>です。RC構造（鉄筋コンクリート）の書籍専用倉庫でカビ・虫から大切な本を守ります。預け入れ・取り出し送料が完全無料で、1冊単位での取り出しにも対応。「本が増えすぎて困っているが捨てられない」という本好きに最適なサービスです。
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
                  ["月額（1箱）", "275円〜"],
                  ["取り出し送料", "無料"],
                  ["初期費用", "無料"],
                  ["最低利用期間", "1ヶ月〜"],
                  ["対応エリア", "全国"],
                  ["対応品目", "書籍・雑誌・コミックのみ"],
                  ["運営会社", "株式会社東京書庫"],
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
            東京書庫のメリット
          </h2>
          <div className="space-y-3">
            {[
              {
                title: "預け入れ・取り出し送料が完全無料",
                body: "往復の送料がゼロなので1冊だけ取り出してもコスト増なし。頻繁に出し入れしても追加費用がかかりません。",
              },
              {
                title: "書籍専門倉庫でカビ・虫から本を守る",
                body: "RC構造の自社倉庫で温度・湿度・防虫を徹底管理。図書館や企業も利用する本格的な保管環境です。",
              },
              {
                title: "1冊単位での取り出しに対応",
                body: "読みたい本をピンポイントで手元に呼び戻せます。箱ごと取り出す必要がありません。",
              },
              {
                title: "月額275円〜で業界最安水準",
                body: "書籍に特化しているため他サービスより安価に運営できています。大量の本を低コストで保管できます。",
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
            東京書庫のデメリット
          </h2>
          <div className="space-y-3">
            {[
              {
                title: "書籍・雑誌・コミック専門",
                body: "衣類や雑貨は預けられません。本以外のものも預けたい場合は他サービスが必要です。",
              },
              {
                title: "写真撮影に費用がかかる場合がある",
                body: "ISBN登録あり11円・なし44円の撮影費用が発生するケースがあります。大量の本を預ける場合は事前確認が必要です。",
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
                title: "読み終わった本の保管庫として使う",
                body: "「捨てられないが読み返すかも」という本を低コストで保管。読みたくなったら1冊単位で呼び戻せます。",
              },
              {
                title: "コレクション本・絶版本の長期保管",
                body: "プレミアのついた希少本や絶版本をカビ・虫から守る専門環境で保管。大切なコレクションを安全に守れます。",
              },
              {
                title: "引越し前の本の一時保管",
                body: "引越しで荷物を減らしたい時に一時的に預けて、落ち着いたら取り出す使い方。送料無料なので費用が膨らみません。",
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
                  <th className="py-3 px-4 text-center text-white font-bold" style={{ background: "#2D5016", border: "0.5px solid #D3D1C7" }}>東京書庫</th>
                  <th className="py-3 px-4 text-center text-white font-bold" style={{ background: "#2D5016", border: "0.5px solid #D3D1C7" }}>サマリーポケット</th>
                  <th className="py-3 px-4 text-center text-white font-bold" style={{ background: "#2D5016", border: "0.5px solid #D3D1C7" }}>差額</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { label: "1箱・3ヶ月", self: 825, ref: 2090 },
                  { label: "3箱・6ヶ月", self: 4950, ref: 7040 },
                  { label: "5箱・6ヶ月", self: 8250, ref: 11000 },
                  { label: "5箱・12ヶ月", self: 16500, ref: 20900 },
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

        {/* ⑥ こんな人におすすめ／向いていない人 */}
        <section>
          <h2 className="text-[20px] font-[700] text-[#2D5016] mb-4 pb-2 border-b-2 border-[#2D5016]">
            こんな人におすすめ／他のサービスが向いている人
          </h2>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-white rounded-[12px] p-5" style={{ border: "0.5px solid #D3D1C7" }}>
              <p className="font-[700] text-[#2D5016] mb-3">東京書庫がおすすめ</p>
              <ul className="space-y-2">
                {[
                  "本が増えすぎて部屋が狭い方",
                  "大切な本を処分せずに保管したい方",
                  "1冊単位で取り出したい方",
                  "本の保管環境にこだわりたい方",
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
                  { text: "本以外も預けたい", link: "/detail/minikura", label: "minikura（書籍専用プランあり）・リソコ" },
                  { text: "不用な本を売りたい", link: "/detail/minikura", label: "minikura（ヤフオク出品オプション）" },
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
              あなたの箱数・保管期間で東京書庫の総費用を計算できます。他のサービスと比べて最安かどうかも一目で確認できます。
            </p>
            <Link
              href="/detail/tokyo-shoko"
              className="inline-block bg-[#2D5016] hover:bg-[#1A3009] text-white font-[600] px-6 py-3 rounded-[10px] text-[14px] transition"
            >
              東京書庫の料金を診断で確認する →
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
