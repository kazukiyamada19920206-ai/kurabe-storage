import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "サマリーポケットvsminikura料金・特徴を徹底比較",
  description:
    "サマリーポケットとminikuraの月額料金・取り出し送料・特徴・おすすめの人を徹底比較。どちらを選ぶべきか迷っている方はこの記事で解決。",
};

const summaryTotal = 330 * 5 * 6 + 1100; // 11000
const minikuraTotal = 275 * 5 * 6 + 1320; // 9570
const diff = summaryTotal - minikuraTotal; // 1430

export default function VsPage() {
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
            <span>比較記事</span>
            <span className="mx-1">›</span>
            <span>サマリーポケット vs minikura</span>
          </nav>
          <div className="flex items-center gap-2 mb-3">
            <span className="text-sm font-[600] text-[#C4620A]">比較記事</span>
          </div>
          <h1 className="text-[26px] font-[700] text-[#2D5016] leading-[1.4] mb-3">
            サマリーポケット vs minikura<br />料金・特徴を徹底比較
          </h1>
          <p className="text-[12px] text-[#888780]">2026年4月更新</p>
        </div>
      </div>

      <div className="mx-auto max-w-3xl px-6 py-10 space-y-12">

        {/* セクション1：結論 */}
        <section>
          <h2 className="text-[20px] font-[700] text-[#2D5016] mb-4 pb-2 border-b-2 border-[#2D5016]">
            結論
          </h2>
          <div className="bg-white rounded-[12px] p-5" style={{ border: "0.5px solid #D3D1C7" }}>
            <p className="text-[14px] text-[#2C2C2A] leading-[1.9]">
              サマリーポケットとminikuraは、どちらも宅配収納サービスの代表格で、料金・使いやすさともに甲乙つけがたい2サービスです。結論から言うと、月額料金を少しでも抑えたい方は<strong className="text-[#2D5016]">minikura</strong>、初めて宅配収納を使う方やクリーニングも一緒に利用したい方は<strong className="text-[#2D5016]">サマリーポケット</strong>がおすすめです。
            </p>
          </div>
        </section>

        {/* セクション2：料金比較 */}
        <section>
          <h2 className="text-[20px] font-[700] text-[#2D5016] mb-4 pb-2 border-b-2 border-[#2D5016]">
            料金比較テーブル
          </h2>
          <div className="overflow-x-auto">
            <table className="w-full text-[13px]" style={{ borderCollapse: "collapse" }}>
              <thead>
                <tr>
                  <th className="py-3 px-4 text-left text-white font-bold" style={{ background: "#2D5016", border: "0.5px solid #D3D1C7" }}>比較項目</th>
                  <th className="py-3 px-4 text-center text-white font-bold" style={{ background: "#2D5016", border: "0.5px solid #D3D1C7" }}>サマリーポケット</th>
                  <th className="py-3 px-4 text-center text-white font-bold" style={{ background: "#2D5016", border: "0.5px solid #D3D1C7" }}>minikura</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ["月額（1箱）", "330円", "275円"],
                  ["取り出し送料", "1,100円", "1,320円"],
                  ["初期費用", "無料", "無料"],
                  ["最低利用期間", "1ヶ月〜", "1ヶ月〜"],
                  ["クリーニング", "あり", "なし"],
                  ["書籍専用プラン", "なし", "あり"],
                ].map(([item, summary, minikura], i) => (
                  <tr key={item} style={{ background: i % 2 === 1 ? "#F5F0E8" : "white" }}>
                    <td className="py-3 px-4 font-medium text-[#2C2C2A]" style={{ border: "0.5px solid #D3D1C7" }}>{item}</td>
                    <td className="py-3 px-4 text-center text-[#2C2C2A]" style={{ border: "0.5px solid #D3D1C7" }}>{summary}</td>
                    <td className="py-3 px-4 text-center text-[#2C2C2A]" style={{ border: "0.5px solid #D3D1C7" }}>{minikura}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* セクション3：総費用シミュレーション */}
        <section>
          <h2 className="text-[20px] font-[700] text-[#2D5016] mb-2 pb-2 border-b-2 border-[#2D5016]">
            総費用シミュレーション
          </h2>
          <p className="text-[13px] text-[#888780] mb-4">5箱・6ヶ月・1回取り出しの場合</p>
          <div className="grid md:grid-cols-2 gap-4">
            {/* サマリーポケット */}
            <div className="bg-white rounded-[12px] p-5" style={{ border: "0.5px solid #D3D1C7" }}>
              <p className="text-[13px] font-[600] text-[#2C2C2A] mb-3">サマリーポケット</p>
              <p className="text-[32px] font-[700] text-[#2D5016]">¥{summaryTotal.toLocaleString()}</p>
            </div>
            {/* minikura */}
            <div className="bg-white rounded-[12px] p-5 relative" style={{ border: "1px solid #E8873A" }}>
              <span className="absolute top-3 right-3 bg-[#E8873A] text-white text-[11px] font-[700] px-2 py-0.5 rounded-[6px]">
                お得
              </span>
              <p className="text-[13px] font-[600] text-[#2C2C2A] mb-3">minikura</p>
              <p className="text-[32px] font-[700] text-[#2D5016]">¥{minikuraTotal.toLocaleString()}</p>
              <p className="text-[12px] text-[#E8873A] font-[600] mt-1">¥{diff.toLocaleString()} お得</p>
            </div>
          </div>
        </section>

        {/* セクション4：特徴の違い */}
        <section>
          <h2 className="text-[20px] font-[700] text-[#2D5016] mb-4 pb-2 border-b-2 border-[#2D5016]">
            サービスの特徴の違い
          </h2>
          <div className="space-y-4">
            <div className="bg-white rounded-[12px] p-5" style={{ border: "0.5px solid #D3D1C7" }}>
              <p className="font-[700] text-[#2D5016] mb-2">サマリーポケット</p>
              <p className="text-[13px] text-[#5F5E5A] leading-[1.8]">
                テレビCMでおなじみの知名度と、クリーニングオプションの充実が強みです。預けた衣類をそのままクリーニングに出して戻してもらえるため、衣替えと同時にメンテナンスもできます。また初めての方向けのサポートが手厚く、使い方に迷ったときも安心です。
              </p>
            </div>
            <div className="bg-white rounded-[12px] p-5" style={{ border: "0.5px solid #D3D1C7" }}>
              <p className="font-[700] text-[#2D5016] mb-2">minikura</p>
              <p className="text-[13px] text-[#5F5E5A] leading-[1.8]">
                株式会社寺田倉庫が運営しており、老舗倉庫会社ならではの本格的な保管環境が特徴です。本・CD・コミック専用のプランも充実しており、大量の書籍や音楽コレクションをお持ちの方には特に向いています。またヤフオクとの連携機能があり、不用品をそのまま出品できます。
              </p>
            </div>
          </div>
        </section>

        {/* セクション5：サマリーポケット向き */}
        <section>
          <h2 className="text-[20px] font-[700] text-[#2D5016] mb-4 pb-2 border-b-2 border-[#2D5016]">
            こんな人はサマリーポケット
          </h2>
          <ul className="space-y-3 mb-5">
            {[
              "初めて宅配収納サービスを使う方",
              "クリーニングもまとめてお願いしたい方",
              "知名度の高いサービスで安心したい方",
              "ヤフオク出品機能を使いたい方",
            ].map((item) => (
              <li key={item} className="flex items-start gap-3 text-[14px] text-[#2C2C2A] leading-[1.8]">
                <span className="font-bold mt-0.5 flex-shrink-0 text-[#2D5016]">✓</span>
                {item}
              </li>
            ))}
          </ul>
          <Link
            href="/detail/summary-pocket"
            className="inline-block bg-[#2D5016] hover:bg-[#1A3009] text-white font-[600] px-6 py-3 rounded-[10px] text-[14px] transition"
          >
            サマリーポケットの詳細を見る →
          </Link>
        </section>

        {/* セクション6：minikura向き */}
        <section>
          <h2 className="text-[20px] font-[700] text-[#2D5016] mb-4 pb-2 border-b-2 border-[#2D5016]">
            こんな人はminikura
          </h2>
          <ul className="space-y-3 mb-5">
            {[
              "月額料金をできるだけ抑えたい方",
              "本・CDを専用プランで預けたい方",
              "寺田倉庫の本格的な保管環境を重視する方",
              "複数のプランを使い分けたい方",
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
            minikuraの詳細を見る →
          </Link>
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
