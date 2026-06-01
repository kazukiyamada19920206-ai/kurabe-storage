import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";

export const metadata: Metadata = {
  title: "単身赴任の荷物どうする？宅配収納を使った解決法【2026年最新】",
  description: "単身赴任で荷物の置き場に困っていませんか？宅配収納を使えば月330円〜で荷物を安全に保管できます。おすすめサービス4選・料金比較・失敗しない選び方を徹底解説。",
};

export default function TanshinFuninStoragePage() {
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
            <span>単身赴任の荷物どうする？</span>
          </nav>
          <div className="flex items-center gap-2 mb-3">
            <span className="text-sm font-[600] text-[#C4620A]">単身赴任ガイド</span>
          </div>
          <h1 className="text-[26px] font-[700] text-[#2D5016] leading-[1.4] mb-3">
            単身赴任の荷物どうする？<br />宅配収納を使った解決法【2026年最新】
          </h1>
          <p className="text-[14px] text-[#5F5E5A] leading-[2.0] mb-4">
            「単身赴任が決まったけど、荷物をどうすればいいかわからない」「今の家に荷物を残したまま赴任先で生活するのは不安」そんな方に向けて、宅配収納を使った荷物の解決法を徹底解説します。月330円〜で荷物を安全に保管でき、必要なときはスマホで取り出し依頼するだけです。
          </p>
          <p className="text-[12px] text-[#888780]">2026年6月更新</p>
        </div>
      </div>

      {/* ヒーロー画像 */}
      <div className="mx-auto max-w-3xl px-6 pt-8">
        <div className="rounded-[12px] overflow-hidden">
          <Image
            src="/images/guide/tanshin-funin-hero.png"
            alt="単身赴任の荷物を宅配収納で解決するイメージ"
            width={800}
            height={450}
            className="w-full h-auto"
          />
        </div>
      </div>

      <div className="mx-auto max-w-3xl px-6 py-10 space-y-12">

        {/* ① 結論 */}
        <section>
          <h2 className="text-[20px] font-[700] text-[#2D5016] mb-4 pb-2 border-b-2 border-[#2D5016]">
            結論：単身赴任に宅配収納が最適な3つの理由
          </h2>
          <div className="space-y-3">
            {[
              {
                num: "1",
                title: "荷物を減らさず・捨てずに解決できる",
                body: "単身赴任で悩むのは「持っていく荷物」ではなく「置いていく荷物」の扱いです。宅配収納なら捨てる必要なく、月数百円で安全に保管できます。シーズンオフの衣類・趣味用品・季節家電など、赴任先には不要だけど手放したくないものをそのまま預けられます。",
              },
              {
                num: "2",
                title: "赴任先からでもスマホ1つで管理できる",
                body: "宅配収納はスマホアプリで完結します。預けた荷物の写真確認・取り出し依頼・集荷手配がすべてオンラインで可能です。赴任先から「あの荷物が必要になった」という場合も、アプリから依頼するだけで数日以内に届きます。",
              },
              {
                num: "3",
                title: "月330円〜と家賃・トランクルームより圧倒的に安い",
                body: "都市部のトランクルームは月額5,000〜30,000円が相場です。宅配収納なら月額220〜330円（1箱あたり）から利用できます。単身赴任期間が1〜3年の場合、トランクルームと比べて数万円の節約になるケースも珍しくありません。",
              },
            ].map((item) => (
              <div key={item.num} className="bg-white rounded-[12px] p-6 flex gap-4" style={{ border: "0.5px solid #D3D1C7" }}>
                <span className="font-[700] text-[#2D5016] flex-shrink-0 text-[20px] leading-none mt-0.5">{item.num}</span>
                <div>
                  <p className="font-[700] text-[#2C2C2A] mb-2">{item.title}</p>
                  <p className="text-[14px] text-[#5F5E5A] leading-[2.0]">{item.body}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ② よくある悩み */}
        <section>
          <h2 className="text-[20px] font-[700] text-[#2D5016] mb-4 pb-2 border-b-2 border-[#2D5016]">
            単身赴任でよくある荷物の悩み
          </h2>
          <div className="space-y-3">
            {[
              {
                rank: "悩み①",
                title: "持っていく荷物と置いていく荷物の判断が難しい",
                body: "赴任先が社宅・寮・賃貸マンションによって持ち込める荷物量が変わります。「とりあえず持っていったけど邪魔だった」「置いてきたら必要になった」というケースが多いです。宅配収納なら後から取り出せるため、判断を先送りできます。",
                color: "#2D5016",
              },
              {
                rank: "悩み②",
                title: "今の家に残した荷物が心配",
                body: "家族と別居する場合、自宅に残した荷物のカビ・虫食い・劣化が心配です。特に衣類・書籍・楽器などデリケートなものは、空調管理された宅配収納の倉庫に預ける方が自宅保管より安全なケースがあります。",
                color: "#2D5016",
              },
              {
                rank: "悩み③",
                title: "単身赴任が終わった後の荷物の扱い",
                body: "赴任期間が1〜3年と長い場合、荷物の扱いが悩みの種です。宅配収納は1ヶ月単位で利用でき、赴任終了後はすぐに取り出して自宅に戻せます。帰任のタイミングに合わせて柔軟に対応できます。",
                color: "#E8873A",
              },
              {
                rank: "悩み④",
                title: "赴任先での収納スペース不足",
                body: "社宅や寮は収納スペースが限られています。シーズンオフの衣類や使わない荷物を宅配収納に預けることで、赴任先の限られたスペースを有効活用できます。",
                color: "#E8873A",
              },
            ].map((item) => (
              <div key={item.rank} className="bg-white rounded-[12px] p-6" style={{ border: "0.5px solid #D3D1C7", borderLeft: `4px solid ${item.color}` }}>
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-[11px] font-[700] px-2 py-0.5 rounded-full text-white" style={{ background: item.color }}>{item.rank}</span>
                  <p className="font-[700] text-[#2C2C2A]">{item.title}</p>
                </div>
                <p className="text-[14px] text-[#5F5E5A] leading-[2.0]">{item.body}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ③ 預けるものリスト */}
        <section>
          <h2 className="text-[20px] font-[700] text-[#2D5016] mb-4 pb-2 border-b-2 border-[#2D5016]">
            単身赴任で宅配収納に預けるべきもの一覧
          </h2>
          <div className="grid md:grid-cols-2 gap-4 mb-4">
            <div className="bg-white rounded-[12px] p-6" style={{ border: "1px solid #2D5016" }}>
              <p className="font-[700] text-[#2D5016] mb-3">✓ 預けるべきもの</p>
              <ul className="space-y-2">
                {[
                  "シーズンオフの衣類（コート・スーツ・冬物）",
                  "趣味用品（スポーツ用品・楽器・カメラ等）",
                  "季節家電（扇風機・ヒーター・加湿器）",
                  "書籍・コレクション品",
                  "冠婚葬祭用品（礼服・喪服等）",
                  "使用頻度が低い調理器具",
                  "思い出の品・写真アルバム",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2 text-[14px] text-[#2C2C2A] leading-[2.0]">
                    <span className="font-bold text-[#2D5016] flex-shrink-0">✓</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-white rounded-[12px] p-6" style={{ border: "1px solid #E8873A" }}>
              <p className="font-[700] text-[#E8873A] mb-3">✕ 預けられないもの</p>
              <ul className="space-y-2">
                {[
                  "食品・飲料（腐敗の恐れ）",
                  "生き物・植物",
                  "危険物・引火物",
                  "貴重品・現金・有価証券",
                  "著しく汚れたもの・悪臭のあるもの",
                  "大型家具・家電（サービスによる）",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2 text-[14px] text-[#2C2C2A] leading-[2.0]">
                    <span className="font-bold text-[#E8873A] flex-shrink-0">✕</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="bg-[#F5F0E8] rounded-[10px] p-4" style={{ border: "0.5px solid #D3D1C7" }}>
            <p className="text-[13px] text-[#5F5E5A] leading-[1.8]">
              💡 <strong>大型家具・家電を預けたい方へ：</strong>通常の宅配収納はボックスに入るサイズが対象です。ソファ・ベッド・大型家電は宅トラやエアトランクのようにスペース単位で預けられるサービスをご利用ください。
            </p>
          </div>
        </section>

        {/* ④ 失敗しない選び方 */}
        <section>
          <h2 className="text-[20px] font-[700] text-[#2D5016] mb-4 pb-2 border-b-2 border-[#2D5016]">
            単身赴任で失敗しない宅配収納の選び方
          </h2>
          <p className="text-[14px] text-[#5F5E5A] mb-5 leading-[2.0]">単身赴任という特殊なシチュエーションでは、通常の衣替え用途とは異なる観点でサービスを選ぶ必要があります。以下の4点を必ず確認してください。</p>
          <div className="space-y-4">
            {[
              {
                point: "① 取り出し日数を確認する",
                body: "赴任先から急に「あの荷物が必要」となるケースがあります。最短翌日対応のサービス（サマリーポケット・minikura）と、3〜5営業日かかるサービスがあります。急ぎの取り出しが発生しやすい方は翌日対応のサービスを選びましょう。",
                tag: "最重要",
                tagColor: "#2D5016",
              },
              {
                point: "② 赴任先への配送に対応しているか確認する",
                body: "取り出した荷物を自宅ではなく赴任先に届けてもらえるサービスがあります。サマリーポケット・minikuraは届け先の変更が可能です。赴任中に必要になった荷物を赴任先に直送してもらえると便利です。",
                tag: "重要",
                tagColor: "#E8873A",
              },
              {
                point: "③ 最低利用期間と解約条件を確認する",
                body: "単身赴任期間が1〜3年と長期になる場合、途中解約の条件を確認しておきましょう。ほとんどのサービスは1ヶ月単位で解約できますが、早期解約料が発生するサービスもあります。",
                tag: "重要",
                tagColor: "#E8873A",
              },
              {
                point: "④ 長期割引があるか確認する",
                body: "1年以上の長期利用が見込まれる場合、長期割引のあるサービスがお得です。minikuraは13ヶ月目以降に月額が自動値下がりし、1年以上預けたボックスの取り出し送料が無料になります。",
                tag: "任意",
                tagColor: "#888780",
              },
            ].map((item) => (
              <div key={item.point} className="bg-white rounded-[12px] p-6" style={{ border: "0.5px solid #D3D1C7" }}>
                <div className="flex items-center gap-2 mb-2">
                  <p className="font-[700] text-[#2C2C2A]">{item.point}</p>
                  <span className="text-[11px] px-2 py-0.5 rounded-full font-[600] text-white" style={{ background: item.tagColor }}>{item.tag}</span>
                </div>
                <p className="text-[14px] text-[#5F5E5A] leading-[2.0]">{item.body}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ⑤ おすすめサービス4選 */}
        <section>
          <h2 className="text-[20px] font-[700] text-[#2D5016] mb-4 pb-2 border-b-2 border-[#2D5016]">
            単身赴任向けおすすめサービス4選
          </h2>
          <div className="space-y-4">
            {[
              {
                rank: 1,
                name: "サマリーポケット",
                tag: "赴任先への直送対応・翌日取り出し",
                monthly: "330円〜",
                retrieval: "1,100円",
                point: "赴任先への配送変更が可能で、急な取り出しにも最短翌日対応。クリーニングオプションで預けたまま衣類のメンテナンスもできます。単身赴任中の衣類管理に最適です。",
                slug: "summary-pocket",
              },
              {
                rank: 2,
                name: "minikura",
                tag: "長期割引あり・1年以上の赴任に最適",
                monthly: "275円〜",
                retrieval: "1,320円",
                point: "業界最安水準の月額275円〜。13ヶ月目以降は自動で月額値下がり・取り出し送料無料に。単身赴任期間が1年を超える場合はminikuraが最もコスパが高いです。",
                slug: "minikura",
              },
              {
                rank: 3,
                name: "AZUKEL",
                tag: "とにかく安く始めたい方",
                monthly: "220円〜",
                retrieval: "1,100円",
                point: "業界最安クラスの月額220円〜。1972年創業のセキュリティ企業が運営する自社倉庫で保管。LINEで操作が完結するため、スマホ操作が苦手な方にも向いています。",
                slug: "azukel",
              },
              {
                rank: 4,
                name: "宅トラ",
                tag: "大型荷物・家具を預けたい方",
                monthly: "330円〜",
                retrieval: "880円〜",
                point: "大型荷物（家具・家電・スーツケース）の保管が得意。単身赴任で家具をそのまま預けたい方に向いています。引越し業者との連携もスムーズです。",
                slug: "takutora",
              },
            ].map((item) => (
              <div key={item.name} className="bg-white rounded-[12px] p-6" style={{ border: item.rank === 1 ? "1px solid #2D5016" : "0.5px solid #D3D1C7" }}>
                <div className="flex items-center gap-2 mb-3">
                  <span className={`text-[11px] font-[700] px-2 py-0.5 rounded-full text-white`} style={{ background: item.rank === 1 ? "#2D5016" : "#888780" }}>{item.rank}位</span>
                  <p className="font-[700] text-[#2C2C2A] text-[16px]">{item.name}</p>
                  <span className="text-[11px] text-[#E8873A] font-[600]">{item.tag}</span>
                </div>
                <div className="grid grid-cols-2 gap-3 mb-3">
                  <div className="bg-[#F5F0E8] rounded-[8px] p-3">
                    <p className="text-[11px] text-[#888780] mb-1">月額</p>
                    <p className="font-[700] text-[#2D5016] text-[15px]">{item.monthly}</p>
                  </div>
                  <div className="bg-[#F5F0E8] rounded-[8px] p-3">
                    <p className="text-[11px] text-[#888780] mb-1">取り出し送料</p>
                    <p className="font-[700] text-[#2D5016] text-[15px]">{item.retrieval}</p>
                  </div>
                </div>
                <p className="text-[14px] text-[#5F5E5A] leading-[2.0] mb-3">{item.point}</p>
                <Link href={`/guide/${item.slug}-review`} className="text-[13px] text-[#E8873A] hover:underline">
                  → {item.name}の詳細・評判を見る
                </Link>
              </div>
            ))}
          </div>
        </section>

        {/* ⑥ 料金シミュレーション */}
        <section>
          <h2 className="text-[20px] font-[700] text-[#2D5016] mb-2 pb-2 border-b-2 border-[#2D5016]">
            単身赴任を想定した料金シミュレーション
          </h2>
          <p className="text-[13px] text-[#888780] mb-4">条件：2箱・12ヶ月保管・取り出し2回の場合</p>

          {/* シミュレーション画像 */}
          <div className="rounded-[12px] overflow-hidden mb-6">
            <Image
              src="/images/guide/tanshin-funin-simulation.png"
              alt="宅配収納の料金シミュレーションイメージ"
              width={800}
              height={450}
              className="w-full h-auto"
            />
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-[13px]" style={{ borderCollapse: "collapse" }}>
              <thead>
                <tr>
                  {["サービス", "月額×2箱×12ヶ月", "取り出し送料×2回", "年間総費用"].map((h) => (
                    <th key={h} className="py-3 px-4 text-center text-white font-bold" style={{ background: "#2D5016", border: "0.5px solid #D3D1C7" }}>{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {[
                  { name: "AZUKEL", monthly: 220, retrieval: 1100 },
                  { name: "minikura", monthly: 275, retrieval: 0, note: "1年以上取り出し無料" },
                  { name: "サマリーポケット", monthly: 330, retrieval: 1100 },
                  { name: "宅トラ", monthly: 330, retrieval: 880 },
                ].map(({ name, monthly, retrieval, note }, i) => {
                  const base = monthly * 2 * 12;
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
            <p className="text-[13px] text-[#5F5E5A] leading-[1.8]">
              💡 <strong>ポイント：</strong>1年以上の長期赴任ならminikuraが最もお得です。13ヶ月目以降は月額が自動値下がりし、取り出し送料も無料になるため、長期になるほどコスト差が広がります。
            </p>
          </div>
        </section>

        {/* ⑦ FAQ */}
        <section>
          <h2 className="text-[20px] font-[700] text-[#2D5016] mb-4 pb-2 border-b-2 border-[#2D5016]">
            よくある質問
          </h2>
          <div className="space-y-4">
            {[
              {
                q: "単身赴任中に荷物を取り出す場合、赴任先に届けてもらえますか？",
                a: "サービスによります。サマリーポケット・minikuraは届け先の変更が可能で、赴任先の住所に直送できます。申し込み時または取り出し依頼時に届け先を変更してください。",
              },
              {
                q: "単身赴任が急に終わった場合、すぐに解約できますか？",
                a: "ほとんどのサービスは1ヶ月単位で解約できます。ただし荷物の取り出しが完了してから解約手続きが必要です。取り出し依頼から自宅到着まで数日かかるため、帰任日の1〜2週間前に手続きを始めることをおすすめします。",
              },
              {
                q: "家具や大型家電も預けられますか？",
                a: "通常の宅配収納（ボックス型）では対応していません。ソファ・ベッド・大型家電を預けたい場合は、スペース単位で契約できる宅トラやエアトランクをご検討ください。",
              },
              {
                q: "単身赴任期間が2〜3年になる場合、どのサービスが最もお得ですか？",
                a: "minikuraが最もお得です。13ヶ月目以降は月額が自動で値下がりし、1年以上預けたボックスは取り出し送料が無料になります。長期になるほどコスト優位性が高まります。",
              },
              {
                q: "赴任先でも宅配収納を使えますか？",
                a: "はい、使えます。宅配収納は全国対応のサービスがほとんどで、赴任先から新たに荷物を預けることも可能です。ただし2nd STORAGEのように一部エリア限定のサービスもあるため、事前に対応エリアを確認してください。",
              },
            ].map((item) => (
              <div key={item.q} className="bg-white rounded-[12px] p-6" style={{ border: "0.5px solid #D3D1C7" }}>
                <p className="font-[700] text-[#2C2C2A] mb-2 text-[14px]">Q. {item.q}</p>
                <p className="text-[14px] text-[#5F5E5A] leading-[2.0]">A. {item.a}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ⑧ 関連記事 */}
        <section>
          <h2 className="text-[20px] font-[700] text-[#2D5016] mb-4 pb-2 border-b-2 border-[#2D5016]">
            関連記事
          </h2>
          <div className="grid md:grid-cols-2 gap-3">
            {[
              { title: "衣替えに宅配収納を使うべき理由とおすすめサービス5選", href: "/guide/koromogae-storage" },
              { title: "宅配型トランクルームとは？仕組みとメリットを解説", href: "/guide/what-is-takuhai-storage" },
              { title: "サマリーポケットの評判・口コミを徹底解説", href: "/guide/summary-pocket-review" },
              { title: "minikuraの評判・口コミを徹底解説", href: "/guide/minikura-review" },
              { title: "宅配収納サービス比較ランキング", href: "/compare/ranking" },
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

        {/* ⑨ 診断CTA */}
        <div className="bg-[#2D5016] rounded-[12px] px-8 py-10 text-center">
          <p className="text-white text-[17px] font-[700] mb-2">
            あなたの単身赴任に最適なサービスを3秒で診断
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
