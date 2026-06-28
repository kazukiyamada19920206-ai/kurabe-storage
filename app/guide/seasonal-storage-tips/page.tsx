import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "衣替え前に知っておきたい宅配収納の使い方と選び方",
  description:
    "衣替えで宅配収納を使う前に知っておくべき「預ける前の3つの質問」から、目的別サービスの選び方・コストシミュレーションまで徹底解説。後悔しない預け方を紹介します。",
};

export default function SeasonalStorageTipsPage() {
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
            <span>衣替えに宅配収納を使う前に知っておきたいこと</span>
          </nav>
          <div className="flex items-center gap-2 mb-3">
            <span className="text-sm font-[600] text-[#C4620A]">活用ガイド</span>
          </div>
          <h1 className="text-[26px] font-[700] text-[#2D5016] leading-[1.4] mb-3">
            衣替えに宅配収納を使う前に<br />知っておきたいこと
          </h1>
          <p className="text-[14px] text-[#5F5E5A] leading-[1.7] mb-3">後悔しない預け方と選び方</p>
          <p className="text-[12px] text-[#888780]">2026年4月更新</p>
        </div>
      </div>

      <div className="mx-auto max-w-3xl px-6 py-10 space-y-12">

        {/* ① 冒頭 */}
        <section>
          <div className="bg-white rounded-[12px] p-5" style={{ border: "0.5px solid #D3D1C7" }}>
            <p className="text-[14px] text-[#2C2C2A] leading-[1.9]">
              宅配収納で一番多い後悔は<strong className="text-[#2D5016]">「とりあえず預けて、気づいたら1年以上経っていた」</strong>こと。月額330円は安く見えても、1年間預け続けると3,960円。5箱なら年間約2万円。本当に必要なものだけを預ければ、宅配収納はとても賢いサービスになります。この記事では「預ける前の判断」から「サービスの選び方」まで丁寧に解説します。
            </p>
          </div>
        </section>

        {/* ② 預ける前に問う「3つの質問」 */}
        <section>
          <h2 className="text-[20px] font-[700] text-[#2D5016] mb-4 pb-2 border-b-2 border-[#2D5016]">
            預ける前に問う「3つの質問」
          </h2>
          <p className="text-[13px] text-[#5F5E5A] mb-4 leading-[1.8]">
            以下の3つ全部にYESが揃ったものだけ預ける。
          </p>
          <div className="space-y-3 mb-5">
            {[
              "来シーズン、本当に使うか？",
              "手元になかったとき、困るか？",
              "取り出す送料（約1,000円）を払ってでも欲しいと思えるか？",
            ].map((q, i) => (
              <div key={i} className="bg-white rounded-[12px] p-5 flex items-center gap-4" style={{ border: "0.5px solid #D3D1C7" }}>
                <div className="w-8 h-8 rounded-full bg-[#2D5016] text-white flex items-center justify-center font-[700] text-[13px] flex-shrink-0">
                  Q{i + 1}
                </div>
                <p className="text-[14px] font-[600] text-[#2C2C2A]">{q}</p>
                <span className="ml-auto text-[13px] font-[700] text-[#2D5016] bg-[#F5F0E8] px-3 py-1 rounded-[6px] flex-shrink-0">YES?</span>
              </div>
            ))}
          </div>
          <div className="bg-[#FFF8F0] rounded-[12px] p-4" style={{ border: "1px solid #E8873A" }}>
            <p className="text-[13px] text-[#7A4A1E] leading-[1.8]">
              ⚠️ 1つでもNOがあれば、預けるより<strong>手放すことを検討</strong>しましょう。使わないものに月額を払い続けるのはもったいない。
            </p>
          </div>
        </section>

        {/* ③ 「預ける・手放す・残す」の仕分け方 */}
        <section>
          <h2 className="text-[20px] font-[700] text-[#2D5016] mb-4 pb-2 border-b-2 border-[#2D5016]">
            衣替えで「預ける・手放す・残す」の仕分け方
          </h2>
          <div className="overflow-x-auto">
            <table className="w-full text-[13px]" style={{ borderCollapse: "collapse" }}>
              <thead>
                <tr>
                  <th className="py-3 px-4 text-left text-white font-bold" style={{ background: "#2D5016", border: "0.5px solid #D3D1C7" }}>判断基準</th>
                  <th className="py-3 px-4 text-left text-white font-bold" style={{ background: "#2D5016", border: "0.5px solid #D3D1C7" }}>行動</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ["来季も使う・でも今は不要", "預ける → 宅配収納へ"],
                  ["1年以上使っていない・来季も使うか不明", "手放す → フリマ・寄付・処分"],
                  ["頻繁に使う・オールシーズン使えるクローゼットに残す", "残す → クローゼットに残す"],
                ].map(([basis, action], i) => (
                  <tr key={i} style={{ background: i % 2 === 1 ? "#F5F0E8" : "white" }}>
                    <td className="py-3 px-4 text-[#2C2C2A]" style={{ border: "0.5px solid #D3D1C7" }}>{basis}</td>
                    <td className="py-3 px-4 font-[600] text-[#2C2C2A]" style={{ border: "0.5px solid #D3D1C7" }}>{action}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* ④ 衣替えコストを可視化する */}
        <section>
          <h2 className="text-[20px] font-[700] text-[#2D5016] mb-4 pb-2 border-b-2 border-[#2D5016]">
            衣替えコストを可視化する
          </h2>
          <div className="grid md:grid-cols-3 gap-4 mb-4">
            {[
              { service: "サマリーポケット", monthly: 330, annual: 3960 },
              { service: "minikura", monthly: 275, annual: 3300 },
              { service: "AZUKEL", monthly: 220, annual: 2640, cheapest: true },
            ].map((item) => (
              <div
                key={item.service}
                className="bg-white rounded-[12px] p-5"
                style={{ border: item.cheapest ? "1px solid #E8873A" : "0.5px solid #D3D1C7", position: "relative" }}
              >
                {item.cheapest && (
                  <span className="absolute top-3 right-3 bg-[#E8873A] text-white text-[11px] font-[700] px-2 py-0.5 rounded-[6px]">最安</span>
                )}
                <p className="text-[12px] font-[600] text-[#5F5E5A] mb-1">{item.service}</p>
                <p className="text-[11px] text-[#888780] mb-2">月額{item.monthly}円 × 12ヶ月</p>
                <p className="text-[28px] font-[700] text-[#2D5016]">¥{item.annual.toLocaleString()}<span className="text-[13px] font-[400] text-[#5F5E5A]">/年</span></p>
              </div>
            ))}
          </div>
          <div className="bg-white rounded-[12px] p-4" style={{ border: "0.5px solid #D3D1C7" }}>
            <p className="text-[13px] text-[#5F5E5A] leading-[1.8]">
              部屋の収納を増やすリフォームや引越しと比べると、圧倒的に安いコストでスペースを作れます。年間3,000円以下から始められる宅配収納は、コストパフォーマンスの高い選択肢です。
            </p>
          </div>
        </section>

        {/* ⑤ 「衣替えしない暮らし」という選択肢 */}
        <section>
          <h2 className="text-[20px] font-[700] text-[#2D5016] mb-4 pb-2 border-b-2 border-[#2D5016]">
            「衣替えしない暮らし」という選択肢
          </h2>
          <div className="space-y-3 mb-4">
            {[
              { season: "春", action: "冬物をまとめて預ける", note: "繁忙期前に余裕を持って" },
              { season: "秋", action: "取り出し依頼するだけ", note: "届いたら終わり" },
            ].map((item) => (
              <div key={item.season} className="bg-white rounded-[12px] p-5 flex items-center gap-4" style={{ border: "0.5px solid #D3D1C7" }}>
                <div className="w-10 h-10 rounded-full bg-[#F5F0E8] flex items-center justify-center font-[700] text-[#2D5016] text-[14px] flex-shrink-0">
                  {item.season}
                </div>
                <div>
                  <p className="font-[700] text-[#2C2C2A] text-[14px]">{item.action}</p>
                  <p className="text-[12px] text-[#888780]">{item.note}</p>
                </div>
                <span className="ml-auto text-[20px]">→</span>
              </div>
            ))}
          </div>
          <div className="bg-white rounded-[12px] p-4" style={{ border: "0.5px solid #D3D1C7" }}>
            <p className="text-[13px] text-[#5F5E5A] leading-[1.8]">
              年2回の衣替え作業が<strong className="text-[#2D5016]">「取り出し依頼をアプリでポチる」だけ</strong>になります。重い段ボールを押し入れから出し入れする手間が完全になくなります。
            </p>
          </div>
        </section>

        {/* ⑥ 衣替えの目的別・サービスの選び方 */}
        <section>
          <h2 className="text-[20px] font-[700] text-[#2D5016] mb-4 pb-2 border-b-2 border-[#2D5016]">
            衣替えの目的別・サービスの選び方
          </h2>
          <div className="overflow-x-auto">
            <table className="w-full text-[13px]" style={{ borderCollapse: "collapse" }}>
              <thead>
                <tr>
                  <th className="py-3 px-4 text-left text-white font-bold" style={{ background: "#2D5016", border: "0.5px solid #D3D1C7" }}>目的</th>
                  <th className="py-3 px-4 text-left text-white font-bold" style={{ background: "#2D5016", border: "0.5px solid #D3D1C7" }}>おすすめ</th>
                  <th className="py-3 px-4 text-left text-white font-bold" style={{ background: "#2D5016", border: "0.5px solid #D3D1C7" }}>理由</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ["クリーニングも一緒に済ませたい", "サマリーポケット", "クリーニングオプションが充実", "/detail/summary-pocket"],
                  ["とにかく安く預けたい", "AZUKEL", "月額220円で業界最安", "/detail/azukel"],
                  ["頻繁に出し入れしたい", "エアトランク", "取り出し送料が何度でも無料", "/detail/airtrunk"],
                  ["長期間預けっぱなしにしたい", "minikura", "1年以上で取り出し送料無料", "/detail/minikura"],
                  ["本格的な保管環境にこだわりたい", "minikura・リソコ", "温度湿度管理が徹底", "/detail/minikura"],
                ].map(([purpose, name, reason, link], i) => (
                  <tr key={i} style={{ background: i % 2 === 1 ? "#F5F0E8" : "white" }}>
                    <td className="py-3 px-4 text-[#2C2C2A]" style={{ border: "0.5px solid #D3D1C7" }}>{purpose}</td>
                    <td className="py-3 px-4 font-[600]" style={{ border: "0.5px solid #D3D1C7" }}>
                      <Link href={link} className="text-[#E8873A] hover:underline">{name}</Link>
                    </td>
                    <td className="py-3 px-4 text-[#5F5E5A]" style={{ border: "0.5px solid #D3D1C7" }}>{reason}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="mt-4 space-y-2">
            <Link href="/guide/summary-pocket-review" className="block text-[#E8873A] text-sm font-medium hover:underline">
              サマリーポケットの詳しい評判を見る →
            </Link>
            <Link href="/guide/minikura-review" className="block text-[#E8873A] text-sm font-medium hover:underline">
              minikuraの詳しい評判を見る →
            </Link>
          </div>
        </section>

        {/* ⑦ 実際のコストシミュレーション */}
        <section>
          <h2 className="text-[20px] font-[700] text-[#2D5016] mb-2 pb-2 border-b-2 border-[#2D5016]">
            実際のコストシミュレーション
          </h2>
          <p className="text-[13px] text-[#888780] mb-4">5箱・6ヶ月・1回取り出しの場合</p>
          <div className="overflow-x-auto mb-6">
            <table className="w-full text-[13px]" style={{ borderCollapse: "collapse" }}>
              <thead>
                <tr>
                  {["サービス", "月額×5箱×6ヶ月", "取り出し送料", "合計"].map((h) => (
                    <th key={h} className="py-3 px-4 text-left text-white font-bold" style={{ background: "#2D5016", border: "0.5px solid #D3D1C7" }}>{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {[
                  { name: "AZUKEL", monthly: "6,600円", retrieval: "1,100円", total: "7,700円", cheapest: true },
                  { name: "minikura", monthly: "8,250円", retrieval: "1,320円", total: "9,570円", cheapest: false },
                  { name: "サマリーポケット", monthly: "9,900円", retrieval: "1,100円", total: "11,000円", cheapest: false },
                ].map((row, i) => (
                  <tr key={row.name} style={{ background: i % 2 === 1 ? "#F5F0E8" : "white" }}>
                    <td className="py-3 px-4 font-[600] text-[#2C2C2A]" style={{ border: "0.5px solid #D3D1C7" }}>
                      {row.name}
                      {row.cheapest && <span className="ml-2 bg-[#E8873A] text-white text-[10px] font-[700] px-1.5 py-0.5 rounded-[4px]">最安</span>}
                    </td>
                    <td className="py-3 px-4 text-[#2C2C2A]" style={{ border: "0.5px solid #D3D1C7" }}>{row.monthly}</td>
                    <td className="py-3 px-4 text-[#2C2C2A]" style={{ border: "0.5px solid #D3D1C7" }}>{row.retrieval}</td>
                    <td className="py-3 px-4 font-[700] text-[#2D5016]" style={{ border: "0.5px solid #D3D1C7" }}>{row.total}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <Link
            href="/"
            className="inline-block bg-[#E8873A] hover:bg-[#D97A2D] text-white font-[700] px-8 py-3 rounded-[10px] text-[15px] transition"
          >
            あなたの条件で最安サービスを3秒で確認する →
          </Link>
        </section>

        {/* ⑧ 衣替えの季節スケジュール */}
        <section>
          <h2 className="text-[20px] font-[700] text-[#2D5016] mb-4 pb-2 border-b-2 border-[#2D5016]">
            衣替えの季節スケジュール
          </h2>
          <div className="overflow-x-auto mb-4">
            <table className="w-full text-[13px]" style={{ borderCollapse: "collapse" }}>
              <thead>
                <tr>
                  <th className="py-3 px-4 text-left text-white font-bold" style={{ background: "#2D5016", border: "0.5px solid #D3D1C7" }}>時期</th>
                  <th className="py-3 px-4 text-left text-white font-bold" style={{ background: "#2D5016", border: "0.5px solid #D3D1C7" }}>やること</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ["3月下旬〜4月上旬", "冬物を預ける（繁忙期前に余裕を持って）"],
                  ["9月下旬〜10月上旬", "夏物を預ける・冬物を取り出す"],
                ].map(([timing, action], i) => (
                  <tr key={i} style={{ background: i % 2 === 1 ? "#F5F0E8" : "white" }}>
                    <td className="py-3 px-4 font-[600] text-[#2C2C2A] whitespace-nowrap" style={{ border: "0.5px solid #D3D1C7" }}>{timing}</td>
                    <td className="py-3 px-4 text-[#2C2C2A]" style={{ border: "0.5px solid #D3D1C7" }}>{action}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="bg-[#FFF8F0] rounded-[12px] p-4" style={{ border: "1px solid #E8873A" }}>
            <p className="text-[13px] text-[#7A4A1E] leading-[1.8]">
              ⚠️ 衣替え時期（4月・10月）は各社取り出しが混雑します。<strong>2週間前には依頼しておく</strong>と安心です。
            </p>
          </div>
        </section>

        {/* ⑨ 診断CTAバナー */}
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
