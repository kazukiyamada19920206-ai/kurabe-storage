import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "AZUKEL vs minikura｜料金・特徴の徹底比較",
  description:
    "AZUKELとminikuraの月額料金・取り出し送料・特徴・おすすめの人を徹底比較。保管期間によってどちらがお得か変わる逆転ポイントも解説します。",
  openGraph: {
    title: "AZUKEL vs minikura｜料金・特徴の徹底比較 | くらべる収納",
    description: "AZUKELとminikuraの月額料金・取り出し送料・特徴・おすすめの人を徹底比較。保管期間によってどちらがお得か変わる逆転ポイントも解説します。",
    url: "https://moriyamanaomi.com/compare/azukel-vs-minikura",
    siteName: "くらべる収納",
    locale: "ja_JP",
    type: "article",
  },
};

const simulations = [
  { label: "1箱・3ヶ月", azukel: 1760, minikura: 2145, reversed: false },
  { label: "3箱・6ヶ月", azukel: 4860, minikura: 5970, reversed: false },
  { label: "5箱・6ヶ月", azukel: 7700, minikura: 9570, reversed: false },
  { label: "5箱・12ヶ月", azukel: 14300, minikura: 16500, reversed: false },
  { label: "5箱・24ヶ月", azukel: 27500, minikura: 16500, reversed: true },
];

export default function VsPage() {
  return (
    <main className="min-h-screen bg-[#F5F0E8]">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: "{\"@context\": \"https://schema.org\", \"@type\": \"BreadcrumbList\", \"itemListElement\": [{\"@type\": \"ListItem\", \"position\": 1, \"name\": \"ホーム\", \"item\": \"https://moriyamanaomi.com\"}, {\"@type\": \"ListItem\", \"position\": 2, \"name\": \"比較\", \"item\": \"https://moriyamanaomi.com/compare\"}, {\"@type\": \"ListItem\", \"position\": 3, \"name\": \"AZUKEL vs minikura\"}]}" }} />
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
            <span>比較記事</span>
            <span className="mx-1">›</span>
            <span>AZUKEL vs minikura</span>
          </nav>
          <div className="flex items-center gap-2 mb-3">
            <span className="text-sm font-[600] text-[#C4620A]">比較記事</span>
          </div>
          <h1 className="text-[26px] font-[700] text-[#2D5016] leading-[1.4] mb-3">
            AZUKEL vs minikura<br />どちらを選ぶべき？料金・特徴を徹底比較
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
              月額の安さだけで選ぶなら<strong className="text-[#2D5016]">AZUKEL</strong>、長期保管・本格的な保管環境・不用品整理も一緒にしたいなら<strong className="text-[#2D5016]">minikura</strong>がおすすめです。ただし<strong>1年以上預けるならminikuraの取り出し送料無料が効いてくるため、保管期間によって逆転します。</strong>短期なら迷わずAZUKEL、長期ならminikuraという判断軸が分かりやすいでしょう。
            </p>
          </div>
        </section>

        {/* ② 料金比較テーブル */}
        <section>
          <h2 className="text-[20px] font-[700] text-[#2D5016] mb-4 pb-2 border-b-2 border-[#2D5016]">
            料金比較テーブル
          </h2>
          <div className="overflow-x-auto">
            <table className="w-full text-[13px]" style={{ borderCollapse: "collapse" }}>
              <thead>
                <tr>
                  <th className="py-3 px-4 text-left text-white font-bold" style={{ background: "#2D5016", border: "0.5px solid #D3D1C7" }}>比較項目</th>
                  <th className="py-3 px-4 text-center text-white font-bold" style={{ background: "#2D5016", border: "0.5px solid #D3D1C7" }}>AZUKEL</th>
                  <th className="py-3 px-4 text-center text-white font-bold" style={{ background: "#2D5016", border: "0.5px solid #D3D1C7" }}>minikura</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ["月額（1箱）", "220円", "275円"],
                  ["取り出し送料", "1,100円", "1,320円（1年以上で無料）"],
                  ["初期費用", "無料", "無料"],
                  ["最低利用期間", "1ヶ月〜", "1ヶ月〜"],
                  ["運営会社", "株式会社日本パープル", "株式会社寺田倉庫"],
                  ["専用アプリ", "なし", "なし"],
                  ["オプション", "シンプル", "豊富"],
                ].map(([item, azukel, minikura], i) => (
                  <tr key={item} style={{ background: i % 2 === 1 ? "#F5F0E8" : "white" }}>
                    <td className="py-3 px-4 font-medium text-[#2C2C2A]" style={{ border: "0.5px solid #D3D1C7" }}>{item}</td>
                    <td className="py-3 px-4 text-center text-[#2C2C2A]" style={{ border: "0.5px solid #D3D1C7" }}>{azukel}</td>
                    <td className="py-3 px-4 text-center text-[#2C2C2A]" style={{ border: "0.5px solid #D3D1C7" }}>{minikura}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* ③ 料金シミュレーション */}
        <section>
          <h2 className="text-[20px] font-[700] text-[#2D5016] mb-4 pb-2 border-b-2 border-[#2D5016]">
            料金シミュレーション
          </h2>
          <div className="overflow-x-auto">
            <table className="w-full text-[13px]" style={{ borderCollapse: "collapse" }}>
              <thead>
                <tr>
                  <th className="py-3 px-4 text-left text-white font-bold" style={{ background: "#2D5016", border: "0.5px solid #D3D1C7" }}>条件</th>
                  <th className="py-3 px-4 text-center text-white font-bold" style={{ background: "#2D5016", border: "0.5px solid #D3D1C7" }}>AZUKEL</th>
                  <th className="py-3 px-4 text-center text-white font-bold" style={{ background: "#2D5016", border: "0.5px solid #D3D1C7" }}>minikura</th>
                  <th className="py-3 px-4 text-center text-white font-bold" style={{ background: "#2D5016", border: "0.5px solid #D3D1C7" }}>差額</th>
                </tr>
              </thead>
              <tbody>
                {simulations.map(({ label, azukel, minikura, reversed }, i) => {
                  const diff = Math.abs(azukel - minikura);
                  const diffText = reversed
                    ? `minikuraが${diff.toLocaleString()}円お得`
                    : `AZUKELが${diff.toLocaleString()}円お得`;
                  return (
                    <tr
                      key={label}
                      style={{
                        background: reversed ? "#FFF3CD" : i % 2 === 1 ? "#F5F0E8" : "white",
                      }}
                    >
                      <td className="py-3 px-4 font-medium text-[#2C2C2A]" style={{ border: "0.5px solid #D3D1C7" }}>
                        <span className="flex items-center gap-2">
                          {label}
                          {reversed && (
                            <span className="bg-[#E8873A] text-white text-[10px] font-[700] px-1.5 py-0.5 rounded-[4px]">
                              ★逆転
                            </span>
                          )}
                        </span>
                      </td>
                      <td className={`py-3 px-4 text-center ${reversed ? "text-[#888780]" : "font-[600] text-[#2D5016]"}`} style={{ border: "0.5px solid #D3D1C7" }}>
                        ¥{azukel.toLocaleString()}
                      </td>
                      <td className={`py-3 px-4 text-center ${reversed ? "font-[600] text-[#2D5016]" : "text-[#888780]"}`} style={{ border: "0.5px solid #D3D1C7" }}>
                        ¥{minikura.toLocaleString()}
                      </td>
                      <td className="py-3 px-4 text-center text-[#C4620A] font-[600]" style={{ border: "0.5px solid #D3D1C7" }}>
                        {diffText}
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
          <p className="text-[12px] text-[#888780] mt-3">
            ※ minikuraは1年以上預けると取り出し送料が無料になるため、長期保管では逆転します。
          </p>
        </section>

        {/* ④ サービスの特徴の違い */}
        <section>
          <h2 className="text-[20px] font-[700] text-[#2D5016] mb-4 pb-2 border-b-2 border-[#2D5016]">
            サービスの特徴の違い
          </h2>
          <div className="space-y-4">
            <div className="bg-white rounded-[12px] p-5" style={{ border: "0.5px solid #D3D1C7" }}>
              <p className="font-[700] text-[#2D5016] mb-2">AZUKEL</p>
              <p className="text-[13px] text-[#5F5E5A] leading-[1.8]">
                株式会社日本パープルが運営。月額220円という業界最安水準の料金が最大の強みです。余計なオプションを省いたシンプル設計で、「安く・気軽に始めたい」方に最適。短期〜中期の保管に向いており、初めて宅配収納を試してみたい方にも利用しやすいサービスです。
              </p>
            </div>
            <div className="bg-white rounded-[12px] p-5" style={{ border: "0.5px solid #D3D1C7" }}>
              <p className="font-[700] text-[#2D5016] mb-2">minikura</p>
              <p className="text-[13px] text-[#5F5E5A] leading-[1.8]">
                創業70年超の寺田倉庫が運営。温度28℃以下・湿度65%以下を24時間管理する本格的な保管環境が特徴です。ヤフオク出品・クリーニング・書籍専用プランなど豊富なオプションが揃っており、長期保管ほどお得になる仕組みです。大切なコレクションや書籍を長く預けたい方に特に向いています。
              </p>
            </div>
          </div>
        </section>

        {/* ⑤ 用途別おすすめテーブル */}
        <section>
          <h2 className="text-[20px] font-[700] text-[#2D5016] mb-4 pb-2 border-b-2 border-[#2D5016]">
            用途別おすすめ
          </h2>
          <div className="overflow-x-auto">
            <table className="w-full text-[13px]" style={{ borderCollapse: "collapse" }}>
              <thead>
                <tr>
                  <th className="py-3 px-4 text-left text-white font-bold" style={{ background: "#2D5016", border: "0.5px solid #D3D1C7" }}>用途</th>
                  <th className="py-3 px-4 text-center text-white font-bold" style={{ background: "#2D5016", border: "0.5px solid #D3D1C7" }}>おすすめ</th>
                  <th className="py-3 px-4 text-left text-white font-bold" style={{ background: "#2D5016", border: "0.5px solid #D3D1C7" }}>理由</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ["衣替えの一時保管（6ヶ月以内）", "AZUKEL", "月額が安く短期コストを抑えられる"],
                  ["引越しの一時保管", "AZUKEL", "短期間なのでコスト重視"],
                  ["長期保管（1年以上）", "minikura", "取り出し送料が無料になる"],
                  ["書籍・漫画の整理", "minikura", "書籍専用プランあり"],
                  ["コレクション・フィギュア保管", "minikura", "本格的な温湿度管理環境"],
                  ["不用品を売りながら収納", "minikura", "ヤフオク出品オプションあり"],
                ].map(([use, rec, reason], i) => (
                  <tr key={use} style={{ background: i % 2 === 1 ? "#F5F0E8" : "white" }}>
                    <td className="py-3 px-4 text-[#2C2C2A]" style={{ border: "0.5px solid #D3D1C7" }}>{use}</td>
                    <td className="py-3 px-4 text-center font-[600] text-[#2D5016]" style={{ border: "0.5px solid #D3D1C7" }}>{rec}</td>
                    <td className="py-3 px-4 text-[#5F5E5A]" style={{ border: "0.5px solid #D3D1C7" }}>{reason}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* ⑥ 使い方シナリオ */}
        <section>
          <h2 className="text-[20px] font-[700] text-[#2D5016] mb-4 pb-2 border-b-2 border-[#2D5016]">
            使い方シナリオ
          </h2>
          <div className="space-y-4">
            <div className="bg-white rounded-[12px] p-5" style={{ border: "0.5px solid #D3D1C7" }}>
              <p className="font-[700] text-[#2D5016] mb-2">シナリオA：まずAZUKELで安く始めて、長期化したらminikuraへ</p>
              <p className="text-[13px] text-[#5F5E5A] leading-[1.8]">
                最初は「とりあえず試してみたい」という気持ちでAZUKELに。半年後に「もう少し長く預けたい」と思ったらminikuraに切り替えるのがコスパ最大化のパターンです。短期はAZUKELの低月額、長期はminikuraの送料無料という、それぞれの強みを活かした賢い使い方です。
              </p>
            </div>
            <div className="bg-white rounded-[12px] p-5" style={{ border: "0.5px solid #D3D1C7" }}>
              <p className="font-[700] text-[#2D5016] mb-2">シナリオB：コレクションはminikura・季節物はAZUKEL</p>
              <p className="text-[13px] text-[#5F5E5A] leading-[1.8]">
                大切なフィギュアや書籍はminikuraの本格環境に。衣類などの季節物はAZUKELで安く預けるという使い分けも賢い選択です。保管物の性質によって最適なサービスを使い分けることで、コストと品質を両立できます。
              </p>
            </div>
          </div>
        </section>

        {/* ⑦ こんな人はAZUKEL／こんな人はminikura */}
        <section>
          <h2 className="text-[20px] font-[700] text-[#2D5016] mb-4 pb-2 border-b-2 border-[#2D5016]">
            こんな人はAZUKEL
          </h2>
          <ul className="space-y-3 mb-5">
            {[
              "とにかく月額を安く抑えたい",
              "短期〜中期（1年未満）で預けたい",
              "シンプルに使いたい",
              "初めて宅配収納を試してみたい",
            ].map((item) => (
              <li key={item} className="flex items-start gap-3 text-[14px] text-[#2C2C2A] leading-[1.8]">
                <span className="font-bold mt-0.5 flex-shrink-0 text-[#2D5016]">✓</span>
                {item}
              </li>
            ))}
          </ul>
          <Link
            href="/detail/azukel"
            className="inline-block bg-[#2D5016] hover:bg-[#1A3009] text-white font-[600] px-6 py-3 rounded-[10px] text-[14px] transition"
          >
            AZUKELの料金を診断で確認する →
          </Link>
        </section>

        <section>
          <h2 className="text-[20px] font-[700] text-[#2D5016] mb-4 pb-2 border-b-2 border-[#2D5016]">
            こんな人はminikura
          </h2>
          <ul className="space-y-3 mb-5">
            {[
              "1年以上の長期保管を考えている",
              "書籍・コレクションを専用プランで預けたい",
              "不用品をヤフオクで売りたい",
              "本格的な保管環境にこだわりたい",
            ].map((item) => (
              <li key={item} className="flex items-start gap-3 text-[14px] text-[#2C2C2A] leading-[1.8]">
                <span className="font-bold mt-0.5 flex-shrink-0 text-[#2D5016]">✓</span>
                {item}
              </li>
            ))}
          </ul>
          <Link
            href="/detail/minikura"
            className="inline-block bg-[#2D5016] hover:bg-[#1A3009] text-white font-[600] px-6 py-3 rounded-[10px] text-[14px] transition"
          >
            minikuraの料金を診断で確認する →
          </Link>
        </section>

        {/* ⑧ 評判記事への内部リンク */}
        <section>
          <h2 className="text-[20px] font-[700] text-[#2D5016] mb-4 pb-2 border-b-2 border-[#2D5016]">
            各サービスの評判・口コミ
          </h2>
          <div className="bg-white rounded-[12px] p-5" style={{ border: "0.5px solid #D3D1C7" }}>
            <div className="space-y-2 mt-4">
              <Link href="/guide/azukel-review" className="block text-[#E8873A] font-medium hover:underline text-sm">
                AZUKELの詳しい評判・口コミを見る →
              </Link>
              <Link href="/guide/minikura-review" className="block text-[#E8873A] font-medium hover:underline text-sm">
                minikuraの詳しい評判・口コミを見る →
              </Link>
            </div>
          </div>
        </section>

        
        {/* 関連記事 */}
        <section>
          <h2 className="text-[20px] font-[700] text-[#2D5016] mb-4 pb-2 border-b-2 border-[#2D5016]">
            関連記事
          </h2>
          <div className="grid md:grid-cols-2 gap-3">
            {[
              { title: "AZUKELの評判・口コミ詳細", href: "/guide/azukel-review" },
              { title: "minikuraの評判・口コミ詳細", href: "/guide/minikura-review" },
              { title: "宅配収納おすすめランキング9選", href: "/compare/ranking" },
              { title: "宅配収納の月額相場はいくら？9社比較", href: "/guide/monthly-fee-comparison" },
            ].map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="block bg-white rounded-[12px] p-4 hover:bg-[#F5F0E8] transition"
                style={{ border: "0.5px solid #D3D1C7" }}
              >
                <p className="text-[13px] font-[600] text-[#2D5016]">→ {item.title}</p>
              </Link>
            ))}
          </div>
        </section>

        {/* ⑨ 診断CTAバナー */}
        <div className="bg-[#2D5016] rounded-[12px] px-8 py-10 text-center">
          <p className="text-white text-[17px] font-[700] mb-2">
            あなたの条件でAZUKELとminikuraどちらが安いか3秒で確認
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
