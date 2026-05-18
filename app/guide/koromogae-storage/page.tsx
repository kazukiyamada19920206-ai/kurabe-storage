import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "衣替えに宅配収納を使うべき理由とおすすめサービス5選【2026年最新】",
  description: "衣替えのたびにクローゼットがパンパンで困っていませんか？宅配収納を使えば月330円〜で自宅完結の衣替えが実現。おすすめ5社の比較・料金シミュレーション・失敗しない選び方を徹底解説。",
};

export default function KoromogaeStoragePage() {
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
            <span>衣替えに宅配収納を使うべき理由</span>
          </nav>
          <div className="flex items-center gap-2 mb-3">
            <span className="text-sm font-[600] text-[#C4620A]">衣替えガイド</span>
          </div>
          <h1 className="text-[26px] font-[700] text-[#2D5016] leading-[1.4] mb-3">
            衣替えに宅配収納を使うべき理由と<br />おすすめサービス5選【2026年最新】
          </h1>
          <p className="text-[13px] text-[#5F5E5A] leading-[1.8] mb-3">
            「衣替えのたびにクローゼットがパンパンになる」「毎年同じ悩みを繰り返している」そんな方に向けて、宅配収納を使った衣替えの方法・おすすめサービス・失敗しない選び方を徹底解説します。
          </p>
          <p className="text-[12px] text-[#888780]">2026年5月更新</p>
        </div>
      </div>

      <div className="mx-auto max-w-3xl px-6 py-10 space-y-12">

        {/* ① 結論 */}
        <section>
          <h2 className="text-[20px] font-[700] text-[#2D5016] mb-4 pb-2 border-b-2 border-[#2D5016]">
            結論：衣替えに宅配収納が最適な3つの理由
          </h2>
          <div className="space-y-3">
            {[
              { num: "1", title: "月330円〜でクローゼットの悩みが解決する", body: "シーズンオフの衣類をまるごと預けることで、クローゼットに「今着る服だけ」が残ります。収納ケースを買い足すよりも安く、スペースを有効活用できます。" },
              { num: "2", title: "自宅から一歩も出ずに完結する", body: "集荷も取り出しもスマホで依頼するだけ。重い荷物を運ぶ必要はありません。忙しい衣替えシーズンでも、隙間時間に完結できます。" },
              { num: "3", title: "空調管理された倉庫でカビ・虫の心配がない", body: "自宅保管で起きがちなカビ・虫食い・変色のリスクを回避できます。温度・湿度を24時間管理された専用倉庫で、大切な衣類を守れます。" },
            ].map((item) => (
              <div key={item.num} className="bg-white rounded-[12px] p-5 flex gap-4" style={{ border: "0.5px solid #D3D1C7" }}>
                <span className="font-[700] text-[#2D5016] flex-shrink-0 text-[18px] leading-none mt-0.5">{item.num}</span>
                <div>
                  <p className="font-[700] text-[#2C2C2A] mb-1">{item.title}</p>
                  <p className="text-[13px] text-[#5F5E5A] leading-[1.8]">{item.body}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ② よくある悩み */}
        <section>
          <h2 className="text-[20px] font-[700] text-[#2D5016] mb-4 pb-2 border-b-2 border-[#2D5016]">
            衣替えで「毎年困っていること」ランキング
          </h2>
          <div className="space-y-3">
            {[
              { rank: "1位", title: "クローゼットが足りない", body: "「冬物をしまいたいのに、夏物の場所がない」。都市部の住宅は収納スペースが限られており、季節の変わり目ごとにクローゼットの容量問題が発生します。" },
              { rank: "2位", title: "圧縮袋や収納ケースがかさばる", body: "毎年買い足す収納グッズ。気づけばクローゼットが収納グッズで埋まる悪循環。根本的な解決にはなっていません。" },
              { rank: "3位", title: "カビ・虫食いで衣類が傷む", body: "押し入れや収納ケースに入れておいたコートや布団が、翌シーズンに出したらカビていた、という経験をお持ちの方は多いはずです。" },
              { rank: "4位", title: "衣替えの手間が毎年憂鬱", body: "重い荷物を出し入れして、洗濯してたたんでしまう。この一連の作業が面倒で、衣替えを後回しにしがちです。" },
            ].map((item) => (
              <div key={item.rank} className="bg-white rounded-[12px] p-5" style={{ border: "0.5px solid #D3D1C7" }}>
                <div className="flex items-center gap-2 mb-2">
                  <span className="bg-[#2D5016] text-white text-[11px] font-[700] px-2 py-0.5 rounded-full">{item.rank}</span>
                  <p className="font-[700] text-[#2C2C2A]">{item.title}</p>
                </div>
                <p className="text-[13px] text-[#5F5E5A] leading-[1.8]">{item.body}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ③ 宅配収納で解決できる理由 */}
        <section>
          <h2 className="text-[20px] font-[700] text-[#2D5016] mb-4 pb-2 border-b-2 border-[#2D5016]">
            これらの悩みが宅配収納で解決できる理由
          </h2>
          <div className="bg-white rounded-[12px] p-5 mb-4" style={{ border: "0.5px solid #D3D1C7" }}>
            <p className="text-[13px] text-[#5F5E5A] leading-[1.8]">
              宅配収納とは、専用ボックスに荷物を詰めて宅配便で送るだけで預けられるサービスです。月額数百円〜で空調管理された倉庫に保管してもらえ、必要なときはアプリから取り出し依頼するだけで自宅に届きます。
            </p>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-[13px]" style={{ borderCollapse: "collapse" }}>
              <thead>
                <tr>
                  <th className="py-3 px-4 text-left text-white font-bold" style={{ background: "#2D5016", border: "0.5px solid #D3D1C7" }}>悩み</th>
                  <th className="py-3 px-4 text-left text-white font-bold" style={{ background: "#2D5016", border: "0.5px solid #D3D1C7" }}>宅配収納での解決策</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ["クローゼットが足りない", "シーズンオフの衣類を丸ごと預けてクローゼットを空ける"],
                  ["収納ケースがかさばる", "ケース不要。専用ボックスに詰めて送るだけ"],
                  ["カビ・虫食いが心配", "空調管理された倉庫で保管。自宅保管よりリスクが低い"],
                  ["衣替えの手間が憂鬱", "集荷も取り出しもスマホで完結。重い荷物を運ぶ必要なし"],
                ].map(([issue, solution], i) => (
                  <tr key={issue} style={{ background: i % 2 === 1 ? "#F5F0E8" : "white" }}>
                    <td className="py-3 px-4 font-medium text-[#2C2C2A]" style={{ border: "0.5px solid #D3D1C7" }}>{issue}</td>
                    <td className="py-3 px-4 text-[#2C2C2A]" style={{ border: "0.5px solid #D3D1C7" }}>{solution}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* ④ 衣替えのベストタイミング */}
        <section>
          <h2 className="text-[20px] font-[700] text-[#2D5016] mb-4 pb-2 border-b-2 border-[#2D5016]">
            衣替えのベストタイミングと宅配収納の予約時期
          </h2>
          <div className="space-y-4">
            <div className="grid md:grid-cols-2 gap-4">
              {[
                { season: "春の衣替え（冬物→夏物）", timing: "3月下旬〜4月中旬", caution: "⚠️ 3〜4月は宅配収納の繁忙期。集荷・取り出しに通常より時間がかかる場合があります。2月中に早めに預けておくのがおすすめ。", color: "#E8873A" },
                { season: "秋の衣替え（夏物→冬物）", timing: "9月下旬〜10月中旬", caution: "⚠️ 9〜10月も繁忙期。8月中に夏物を預け、冬物の取り出しは10月初旬に依頼しておくとスムーズです。", color: "#2D5016" },
              ].map((item) => (
                <div key={item.season} className="bg-white rounded-[12px] p-5" style={{ border: `1px solid ${item.color}` }}>
                  <p className="font-[700] text-[#2C2C2A] mb-1">{item.season}</p>
                  <p className="text-[13px] font-[600] mb-2" style={{ color: item.color }}>目安時期：{item.timing}</p>
                  <p className="text-[12px] text-[#5F5E5A] leading-[1.8]">{item.caution}</p>
                </div>
              ))}
            </div>
            <div className="bg-[#F5F0E8] rounded-[10px] p-4" style={{ border: "0.5px solid #D3D1C7" }}>
              <p className="text-[12px] text-[#5F5E5A] leading-[1.8]">
                💡 <strong>繁忙期を避けるコツ：</strong>衣替えシーズンの1〜2ヶ月前に預け入れを済ませておくと、混雑を避けてスムーズに利用できます。特にサマリーポケットは繁忙期に取り出しまで2週間以上かかるケースがあります。
              </p>
            </div>
          </div>
        </section>

        {/* ⑤ 預けるものリスト */}
        <section>
          <h2 className="text-[20px] font-[700] text-[#2D5016] mb-4 pb-2 border-b-2 border-[#2D5016]">
            衣替えで預けるべきもの・預けられないものリスト
          </h2>
          <div className="grid md:grid-cols-2 gap-4 mb-4">
            <div className="bg-white rounded-[12px] p-5" style={{ border: "1px solid #2D5016" }}>
              <p className="font-[700] text-[#2D5016] mb-3">✓ 預けるべきもの</p>
              <ul className="space-y-2">
                {[
                  "コート・ダウンジャケット",
                  "セーター・ニット類",
                  "厚手のパンツ・デニム",
                  "羽毛布団・毛布・こたつ布団",
                  "スキー・スノーボード用品",
                  "クリスマス・お正月の季節飾り",
                  "水着・浴衣（オフシーズン）",
                  "扇風機・ヒーターなどの季節家電（サービスによる）",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2 text-[13px] text-[#2C2C2A] leading-[1.8]">
                    <span className="font-bold text-[#2D5016] flex-shrink-0">✓</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-white rounded-[12px] p-5" style={{ border: "1px solid #E8873A" }}>
              <p className="font-[700] text-[#E8873A] mb-3">✕ 預けられないもの（主なもの）</p>
              <ul className="space-y-2">
                {[
                  "食品・飲料（腐敗の恐れ）",
                  "生き物・植物",
                  "危険物・引火物",
                  "貴重品・現金・有価証券",
                  "美術品・骨董品（一部サービスは対応）",
                  "著しく汚れたもの・悪臭のあるもの",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2 text-[13px] text-[#2C2C2A] leading-[1.8]">
                    <span className="font-bold text-[#E8873A] flex-shrink-0">✕</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="bg-[#F5F0E8] rounded-[10px] p-4" style={{ border: "0.5px solid #D3D1C7" }}>
            <p className="text-[12px] text-[#5F5E5A] leading-[1.8]">
              💡 <strong>布団を預けたい方へ：</strong>布団はボックスに入らないため、ラージボックス対応のサービスを選ぶ必要があります。サマリーポケットのラージボックス（月額605円〜）または2nd STORAGEのスペースプランが対応しています。
            </p>
          </div>
        </section>

        {/* ⑥ 失敗しない選び方 */}
        <section>
          <h2 className="text-[20px] font-[700] text-[#2D5016] mb-4 pb-2 border-b-2 border-[#2D5016]">
            衣替えで失敗しない宅配収納の選び方
          </h2>
          <p className="text-[13px] text-[#5F5E5A] mb-4 leading-[1.8]">衣替え目的で使う場合、以下の4点を必ず確認してください。</p>
          <div className="space-y-4">
            {[
              {
                point: "① 取り出し送料を確認する",
                body: "衣替えでは年2回（春・秋）の取り出しが発生します。取り出しのたびに送料がかかるサービスだと年間コストが膨らみます。カラエトは年4回まで取り出し無料なのでコスパが良いです。",
                tag: "最重要",
              },
              {
                point: "② ボックスサイズを確認する",
                body: "布団・コート・ダウンを預けたい場合、レギュラーボックスでは入らないことがあります。ラージボックス対応か、スペース単位で預けられるサービスを選びましょう。",
                tag: "重要",
              },
              {
                point: "③ 繁忙期の取り出し日数を確認する",
                body: "3〜4月・9〜10月の繁忙期は取り出しに2週間以上かかるサービスもあります。衣替えシーズンに急いで取り出す可能性がある方は、取り出し最短日数が早いサービスを選びましょう。",
                tag: "重要",
              },
              {
                point: "④ クリーニングオプションの有無を確認する",
                body: "預けたまま衣類のクリーニングを依頼できるサービスがあります。サマリーポケットは990円〜でクリーニングオプションを利用可能。衣替えとクリーニングを同時に済ませたい方におすすめです。",
                tag: "任意",
              },
            ].map((item) => (
              <div key={item.point} className="bg-white rounded-[12px] p-5" style={{ border: "0.5px solid #D3D1C7" }}>
                <div className="flex items-center gap-2 mb-2">
                  <p className="font-[700] text-[#2C2C2A]">{item.point}</p>
                  <span className={`text-[11px] px-2 py-0.5 rounded-full font-[600] ${item.tag === "最重要" ? "bg-[#2D5016] text-white" : item.tag === "重要" ? "bg-[#E8873A] text-white" : "bg-[#F5F0E8] text-[#888780]"}`}>{item.tag}</span>
                </div>
                <p className="text-[13px] text-[#5F5E5A] leading-[1.8]">{item.body}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ⑦ おすすめ5社 */}
        <section>
          <h2 className="text-[20px] font-[700] text-[#2D5016] mb-4 pb-2 border-b-2 border-[#2D5016]">
            衣替え用途別おすすめサービス5選
          </h2>
          <div className="space-y-4">
            {[
              {
                rank: 1,
                name: "サマリーポケット",
                tag: "初めての方・クリーニングも使いたい方",
                monthly: "330円〜",
                retrieval: "1,100円",
                point: "クリーニングオプション（990円〜）が使えるため、衣替えと同時にクリーニングも済ませられます。アプリが使いやすく、初めての宅配収納に最適。",
                slug: "summary-pocket",
              },
              {
                rank: 2,
                name: "カラエト",
                tag: "取り出し頻度が高い方・コスパ重視",
                monthly: "330円〜",
                retrieval: "年4回無料",
                point: "年4回まで取り出し送料が無料。春・秋の衣替えで年2回取り出す方にとってはコスパが最も良いサービスです。",
                slug: "caraeto",
              },
              {
                rank: 3,
                name: "minikura",
                tag: "月額コストを抑えたい方",
                monthly: "275円〜",
                retrieval: "1,320円",
                point: "業界最安水準の月額275円〜。13ヶ月以上預けると長期割引も適用。コートなどを長期保管したい方に向いています。",
                slug: "minikura",
              },
              {
                rank: 4,
                name: "エアトランク",
                tag: "大量の衣類・大型アイテムがある方",
                monthly: "8,800円〜",
                retrieval: "無料",
                point: "スペース単位での契約のため、大量の衣類や布団・スキー用品をまとめて預けたい方に最適。取り出し送料無料で頻繁に出し入れできます。",
                slug: "airtrunk",
              },
              {
                rank: 5,
                name: "AZUKEL",
                tag: "とにかく安く始めたい方",
                monthly: "220円〜",
                retrieval: "1,100円",
                point: "月額220円〜と業界最安クラス。1972年創業のセキュリティ会社が運営しており、保管環境も安心。まず試してみたい方向けです。",
                slug: "azukel",
              },
            ].map((item) => (
              <div key={item.name} className="bg-white rounded-[12px] p-5" style={{ border: item.rank === 1 ? "1px solid #2D5016" : "0.5px solid #D3D1C7" }}>
                <div className="flex items-center gap-2 mb-3">
                  <span className={`text-[11px] font-[700] px-2 py-0.5 rounded-full ${item.rank === 1 ? "bg-[#2D5016] text-white" : "bg-[#F5F0E8] text-[#888780]"}`}>{item.rank}位</span>
                  <p className="font-[700] text-[#2C2C2A] text-[15px]">{item.name}</p>
                  <span className="text-[11px] text-[#E8873A] font-[600]">{item.tag}</span>
                </div>
                <div className="grid grid-cols-2 gap-3 mb-3">
                  <div className="bg-[#F5F0E8] rounded-[8px] p-3">
                    <p className="text-[11px] text-[#888780] mb-1">月額</p>
                    <p className="font-[700] text-[#2D5016]">{item.monthly}</p>
                  </div>
                  <div className="bg-[#F5F0E8] rounded-[8px] p-3">
                    <p className="text-[11px] text-[#888780] mb-1">取り出し送料</p>
                    <p className="font-[700] text-[#2D5016]">{item.retrieval}</p>
                  </div>
                </div>
                <p className="text-[13px] text-[#5F5E5A] leading-[1.8] mb-3">{item.point}</p>
                <Link href={`/guide/${item.slug}-review`} className="text-[13px] text-[#E8873A] hover:underline">
                  → {item.name}の詳細・評判を見る
                </Link>
              </div>
            ))}
          </div>
        </section>

        {/* ⑧ 料金シミュレーション */}
        <section>
          <h2 className="text-[20px] font-[700] text-[#2D5016] mb-2 pb-2 border-b-2 border-[#2D5016]">
            衣替えを想定した料金シミュレーション
          </h2>
          <p className="text-[13px] text-[#888780] mb-4">条件：3箱・6ヶ月保管・年2回取り出しの場合</p>
          <div className="overflow-x-auto">
            <table className="w-full text-[13px]" style={{ borderCollapse: "collapse" }}>
              <thead>
                <tr>
                  {["サービス", "月額×3箱×6ヶ月", "取り出し送料×2回", "年間総費用"].map((h) => (
                    <th key={h} className="py-3 px-4 text-center text-white font-bold" style={{ background: "#2D5016", border: "0.5px solid #D3D1C7" }}>{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {[
                  { name: "カラエト", monthly: 330, retrieval: 0, note: "年4回無料" },
                  { name: "AZUKEL", monthly: 220, retrieval: 1100, note: "" },
                  { name: "minikura", monthly: 275, retrieval: 1320, note: "" },
                  { name: "サマリーポケット", monthly: 330, retrieval: 1100, note: "" },
                  { name: "エアトランク", monthly: 8800, retrieval: 0, note: "スペース単位" },
                ].map(({ name, monthly, retrieval, note }, i) => {
                  const base = monthly * 3 * 6;
                  const shipping = retrieval * 2;
                  const total = base + shipping;
                  return (
                    <tr key={name} style={{ background: i % 2 === 1 ? "#F5F0E8" : "white" }}>
                      <td className="py-3 px-4 font-medium text-[#2C2C2A]" style={{ border: "0.5px solid #D3D1C7" }}>{name}</td>
                      <td className="py-3 px-4 text-center text-[#2C2C2A]" style={{ border: "0.5px solid #D3D1C7" }}>¥{base.toLocaleString()}</td>
                      <td className="py-3 px-4 text-center text-[#2C2C2A]" style={{ border: "0.5px solid #D3D1C7" }}>{note || `¥${shipping.toLocaleString()}`}</td>
                      <td className="py-3 px-4 text-center font-[700] text-[#2D5016]" style={{ border: "0.5px solid #D3D1C7" }}>¥{total.toLocaleString()}</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
          <div className="mt-4 bg-[#F5F0E8] rounded-[10px] p-4" style={{ border: "0.5px solid #D3D1C7" }}>
            <p className="text-[12px] text-[#5F5E5A] leading-[1.8]">
              💡 <strong>ポイント：</strong>年2回取り出す衣替え用途ではカラエト（取り出し無料）がコスパ最強です。月額はサマリーポケットと同じ330円ですが、送料が年2,200円浮きます。
            </p>
          </div>
        </section>

        {/* ⑨ 手順ステップガイド */}
        <section>
          <h2 className="text-[20px] font-[700] text-[#2D5016] mb-4 pb-2 border-b-2 border-[#2D5016]">
            宅配収納を使った衣替えの手順【5ステップ】
          </h2>
          <div className="space-y-3">
            {[
              {
                step: "STEP 1",
                title: "サービスに申し込んでボックスを取り寄せる",
                body: "公式サイトまたはアプリから申し込み。数日でボックスが自宅に届きます。追加費用はかかりません。",
                time: "所要時間：5分",
              },
              {
                step: "STEP 2",
                title: "シーズンオフの衣類をボックスに詰める",
                body: "コート・セーター・厚手のパンツなどをボックスに詰めます。洗濯済みのものを入れましょう。汚れたまま預けるとカビの原因になります。",
                time: "所要時間：15〜30分",
              },
              {
                step: "STEP 3",
                title: "アプリから集荷日時を指定する",
                body: "アプリで集荷日時を指定するだけ。ヤマト運輸などが自宅まで取りに来ます。自分で持ち込む必要はありません。",
                time: "所要時間：3分",
              },
              {
                step: "STEP 4",
                title: "倉庫で保管（空調管理された環境で安心）",
                body: "預けた荷物は空調管理された倉庫で保管されます。スタンダードプランなら写真で中身を確認できます。この間、クリーニングオプションも利用可能です。",
                time: "保管期間：1ヶ月〜",
              },
              {
                step: "STEP 5",
                title: "次のシーズンにアプリから取り出し依頼",
                body: "秋になったらアプリから取り出し依頼。最短翌日〜数日で自宅に届きます。繁忙期は2週間かかることがあるため、早めに依頼しましょう。",
                time: "所要時間：3分",
              },
            ].map((item, i) => (
              <div key={i} className="bg-white rounded-[12px] p-5 flex gap-4" style={{ border: "0.5px solid #D3D1C7" }}>
                <div className="flex-shrink-0">
                  <span className="text-[11px] font-[700] text-[#E8873A]">{item.step}</span>
                </div>
                <div className="flex-1">
                  <p className="font-[700] text-[#2C2C2A] mb-1">{item.title}</p>
                  <p className="text-[13px] text-[#5F5E5A] leading-[1.8] mb-2">{item.body}</p>
                  <span className="text-[11px] text-[#888780] bg-[#F5F0E8] px-2 py-0.5 rounded-full">{item.time}</span>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ⑩ FAQ */}
        <section>
          <h2 className="text-[20px] font-[700] text-[#2D5016] mb-4 pb-2 border-b-2 border-[#2D5016]">
            よくある質問
          </h2>
          <div className="space-y-4">
            {[
              {
                q: "布団を宅配収納に預けることはできますか？",
                a: "預けられます。ただし通常のレギュラーボックスには入らないため、ラージボックス対応のサービスを選ぶ必要があります。サマリーポケットのラージボックス（月額605円〜）、または2nd STORAGEのスペースプランが対応しています。",
              },
              {
                q: "衣替えと同時にクリーニングもできますか？",
                a: "サマリーポケットであればできます。預けた衣類をそのままクリーニングに出せる「クリーニングオプション（990円〜）」があります。衣替えとクリーニングを同時に完結させたい方に最適です。",
              },
              {
                q: "最低何ヶ月から利用できますか？",
                a: "ほとんどのサービスは1ヶ月から利用できます。ただし2ヶ月以内に取り出すと早期取り出し料金がかかるサービスもあります。衣替え用途なら最低6ヶ月程度の利用を想定しておきましょう。",
              },
              {
                q: "預けた衣類はどんな環境で保管されますか？",
                a: "温度・湿度を24時間管理された空調設備つきの倉庫で保管されます。サマリーポケットは三菱倉庫、minikuraは寺田倉庫と、大手倉庫会社が管理しているサービスが多く、自宅保管よりカビ・虫食いのリスクが低いです。",
              },
              {
                q: "コートや衣類は洗濯してから預ける必要がありますか？",
                a: "洗濯してから預けることを強くおすすめします。汚れや皮脂が残った状態で長期保管するとカビや虫食いの原因になります。クリーニングに出してから預けるか、サマリーポケットのクリーニングオプションを活用しましょう。",
              },
            ].map((item) => (
              <div key={item.q} className="bg-white rounded-[12px] p-5" style={{ border: "0.5px solid #D3D1C7" }}>
                <p className="font-[700] text-[#2C2C2A] mb-2">Q. {item.q}</p>
                <p className="text-[13px] text-[#5F5E5A] leading-[1.8]">A. {item.a}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ⑪ 関連記事リンク */}
        <section>
          <h2 className="text-[20px] font-[700] text-[#2D5016] mb-4 pb-2 border-b-2 border-[#2D5016]">
            各サービスの詳細・評判記事
          </h2>
          <div className="grid md:grid-cols-2 gap-3">
            {[
              { name: "サマリーポケット", slug: "summary-pocket" },
              { name: "カラエト", slug: "caraeto" },
              { name: "minikura", slug: "minikura" },
              { name: "AZUKEL", slug: "azukel" },
              { name: "エアトランク", slug: "airtrunk" },
              { name: "2nd STORAGE", slug: "2nd-storage" },
            ].map((item) => (
              <Link
                key={item.slug}
                href={`/guide/${item.slug}-review`}
                className="block bg-white rounded-[12px] p-4 hover:bg-[#F5F0E8] transition"
                style={{ border: "0.5px solid #D3D1C7" }}
              >
                <p className="text-[13px] font-[600] text-[#2D5016]">→ {item.name}の評判・口コミ・料金を見る</p>
              </Link>
            ))}
          </div>
        </section>

        {/* ⑫ 診断CTA */}
        <div className="bg-[#2D5016] rounded-[12px] px-8 py-10 text-center">
          <p className="text-white text-[17px] font-[700] mb-2">
            あなたの衣替えに最適なサービスを3秒で診断
          </p>
          <p className="text-[#A8C78A] text-[14px] mb-6">
            箱数と期間を入力するだけで最安サービスが分かります
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
