import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";

export const metadata: Metadata = {
  title: "引越し前後の荷物を一時保管する方法｜宅配収納活用",
  description: "引越し前後の荷物の一時保管に困っていませんか？宅配収納なら月330円〜でスマホから完結。トランクルームより安く、引越し業者の一時保管より手軽な方法を徹底解説。",
  openGraph: {
    title: "引越し前後の荷物を一時保管する方法｜宅配収納活用 | くらべる収納",
    description: "引越し前後の荷物の一時保管に困っていませんか？宅配収納なら月330円〜でスマホから完結。トランクルームより安く、引越し業者の一時保管より手軽な方法を徹底解説。",
    url: "https://moriyamanaomi.com/guide/hikkoshi-storage",
    siteName: "くらべる収納",
    locale: "ja_JP",
    type: "article",
  },
};

export default function HikkoshiStoragePage() {
  return (
    <main className="min-h-screen bg-[#F5F0E8]">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: "{\"@context\": \"https://schema.org\", \"@type\": \"BreadcrumbList\", \"itemListElement\": [{\"@type\": \"ListItem\", \"position\": 1, \"name\": \"ホーム\", \"item\": \"https://moriyamanaomi.com\"}, {\"@type\": \"ListItem\", \"position\": 2, \"name\": \"ガイド\", \"item\": \"https://moriyamanaomi.com/guide\"}, {\"@type\": \"ListItem\", \"position\": 3, \"name\": \"引越し前後の一時保管\"}]}" }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: "{\"@context\": \"https://schema.org\", \"@type\": \"FAQPage\", \"mainEntity\": [{\"@type\": \"Question\", \"name\": \"引越し当日に荷物を預けることはできますか？\", \"acceptedAnswer\": {\"@type\": \"Answer\", \"text\": \"当日の預け入れは難しいです。宅配収納は申し込みから専用ボックスが届くまで数日かかります。退去日の1〜2週間前には申し込みを済ませ、ボックスを受け取っておくことをおすすめします。\"}}, {\"@type\": \"Question\", \"name\": \"取り出した荷物を旧居ではなく新居に届けてもらえますか？\", \"acceptedAnswer\": {\"@type\": \"Answer\", \"text\": \"サービスによります。サマリーポケット・minikuraは届け先の変更が可能です。取り出し依頼時に新居の住所を指定するだけで、新居に直送してもらえます。\"}}, {\"@type\": \"Question\", \"name\": \"引越し業者の一時保管サービスと宅配収納はどちらがお得ですか？\", \"acceptedAnswer\": {\"@type\": \"Answer\", \"text\": \"費用面では宅配収納の方が圧倒的に安いケースがほとんどです。引越し業者の一時保管は引越し費用に上乗せされることが多く、期間が長くなるほどコスト差が広がります。ただし大型家具・家電は引越し業者の方が対応しやすい場合もあります。\"}}, {\"@type\": \"Question\", \"name\": \"繁忙期（3月・9月）でも申し込めますか？\", \"acceptedAnswer\": {\"@type\": \"Answer\", \"text\": \"はい、宅配収納はオンラインで24時間申し込みが可能で、繁忙期でも料金が変わりません。ただし集荷・取り出しの混雑により通常より時間がかかる場合があります。繁忙期は1〜2週間前に余裕を持って依頼することをおすすめします。\"}}, {\"@type\": \"Question\", \"name\": \"保管中の荷物が破損した場合の補償はありますか？\", \"acceptedAnswer\": {\"@type\": \"Answer\", \"text\": \"ほとんどのサービスに補償制度があります。サマリーポケットは1箱あたり最大10万円、minikuraは1箱あたり最大5万円の補償が付いています。貴重品・壊れやすいものは事前に確認してください。\"}}]}" }} />
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
            <span>引越し前後の荷物を一時保管する方法</span>
          </nav>
          <div className="flex items-center gap-2 mb-3">
            <span className="text-sm font-[600] text-[#C4620A]">引越しガイド</span>
          </div>
          <h1 className="text-[26px] font-[700] text-[#2D5016] leading-[1.4] mb-3">
            引越し前後の荷物を一時保管する方法<br />【宅配収納が最安・最便利】2026年最新
          </h1>
          <p className="text-[14px] text-[#5F5E5A] leading-[2.0] mb-4">
            「引越し先がまだ決まっていない」「新居に荷物が入りきらない」「引越し日程がズレてしまった」そんな方に向けて、引越し前後の荷物を一時保管する最もお得で手軽な方法を解説します。トランクルームや引越し業者の一時保管と比べて、宅配収納が最もコスパが高い理由もまとめました。
          </p>
          <p className="text-[12px] text-[#888780]">2026年6月更新</p>
        </div>
      </div>

      {/* ヒーロー画像 */}
      <div className="mx-auto max-w-3xl px-6 pt-8">
        <div className="rounded-[12px] overflow-hidden">
          <Image
            src="/images/guide/hikkoshi-storage-hero.png"
            alt="引越し前後の荷物を宅配収納で一時保管するイメージ"
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
            結論：引越し時の一時保管に宅配収納が最適な3つの理由
          </h2>
          <div className="space-y-3">
            {[
              {
                num: "1",
                title: "トランクルームより圧倒的に安い",
                body: "都市部のトランクルームは月額5,000〜30,000円が相場です。宅配収納なら月額220〜330円（1箱あたり）から利用できます。引越しの繁忙期（3月・9月）はトランクルームの空きが少なく料金も高騰しますが、宅配収納はオンラインで即申し込みできます。",
              },
              {
                num: "2",
                title: "荷物を運ぶ手間がゼロ",
                body: "トランクルームは自分で荷物を運び入れる必要がありますが、宅配収納は自宅まで集荷に来てくれます。引越し作業で忙しい時期に、重い荷物を運ぶ手間が省けます。集荷・取り出しともにスマホで完結します。",
              },
              {
                num: "3",
                title: "1ヶ月から使えて柔軟に解約できる",
                body: "引越しの一時保管は期間が読めないケースが多いです。宅配収納は1ヶ月単位で利用でき、新居が決まったらすぐに取り出し依頼できます。引越し業者の一時保管サービスより柔軟に対応できます。",
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

        {/* ② 一時保管が必要になるシーン */}
        <section>
          <h2 className="text-[20px] font-[700] text-[#2D5016] mb-4 pb-2 border-b-2 border-[#2D5016]">
            引越し時に一時保管が必要になるシーン
          </h2>
          <div className="space-y-3">
            {[
              {
                scene: "ケース①",
                title: "旧居の退去日と新居の入居日がズレる",
                body: "引越しで最もよくあるケースです。旧居を3月末に退去したが、新居の入居は4月中旬というような場合、その間の荷物の置き場に困ります。宅配収納に一時預けしておけば、入居日に合わせて取り出し依頼するだけです。",
                color: "#2D5016",
              },
              {
                scene: "ケース②",
                title: "新居に全ての荷物が入りきらない",
                body: "引越し先が今より狭い場合、すべての荷物を持ち込むと部屋が荷物だらけになります。すぐに必要でないものを宅配収納に預けておき、新居での生活が落ち着いてから少しずつ取り出すという使い方が便利です。",
                color: "#2D5016",
              },
              {
                scene: "ケース③",
                title: "海外赴任・長期出張で荷物を残す場合",
                body: "海外赴任や長期出張で自宅を空ける場合、家具・家電以外の荷物を宅配収納に預けておくと管理が楽になります。帰国後に必要なものを取り出せます。",
                color: "#E8873A",
              },
              {
                scene: "ケース④",
                title: "実家の荷物整理・親の引越しサポート",
                body: "実家の荷物整理や親の引越しサポートで、すぐには処分できないものを一時保管したいケースです。宅配収納なら遠方の実家からでも集荷してもらえるため、子供側が手配することも可能です。",
                color: "#E8873A",
              },
            ].map((item) => (
              <div key={item.scene} className="bg-white rounded-[12px] p-6" style={{ border: "0.5px solid #D3D1C7", borderLeft: `4px solid ${item.color}` }}>
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-[11px] font-[700] px-2 py-0.5 rounded-full text-white" style={{ background: item.color }}>{item.scene}</span>
                  <p className="font-[700] text-[#2C2C2A]">{item.title}</p>
                </div>
                <p className="text-[14px] text-[#5F5E5A] leading-[2.0]">{item.body}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ③ 一時保管方法の比較 */}
        <section>
          <h2 className="text-[20px] font-[700] text-[#2D5016] mb-4 pb-2 border-b-2 border-[#2D5016]">
            一時保管方法の比較：宅配収納 vs トランクルーム vs 引越し業者
          </h2>
          <div className="overflow-x-auto">
            <table className="w-full text-[13px]" style={{ borderCollapse: "collapse" }}>
              <thead>
                <tr>
                  {["", "宅配収納", "トランクルーム", "引越し業者の一時保管"].map((h) => (
                    <th key={h} className="py-3 px-4 text-center text-white font-bold" style={{ background: "#2D5016", border: "0.5px solid #D3D1C7" }}>{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {[
                  ["月額費用", "220〜330円/箱", "5,000〜30,000円", "引越し費用に含む"],
                  ["荷物の運搬", "集荷に来てくれる", "自分で運ぶ", "業者が運ぶ"],
                  ["最低利用期間", "1ヶ月〜", "1ヶ月〜", "業者による"],
                  ["取り出し", "最短翌日", "いつでも可", "引越し時のみ"],
                  ["スマホ管理", "可能", "不可", "不可"],
                  ["空き状況", "常に申込可能", "繁忙期は空きなし", "業者による"],
                ].map(([label, a, b, c], i) => (
                  <tr key={label} style={{ background: i % 2 === 1 ? "#F5F0E8" : "white" }}>
                    <td className="py-3 px-4 font-medium text-[#2C2C2A]" style={{ border: "0.5px solid #D3D1C7" }}>{label}</td>
                    <td className="py-3 px-4 text-center font-[600] text-[#2D5016]" style={{ border: "0.5px solid #D3D1C7" }}>{a}</td>
                    <td className="py-3 px-4 text-center text-[#888780]" style={{ border: "0.5px solid #D3D1C7" }}>{b}</td>
                    <td className="py-3 px-4 text-center text-[#888780]" style={{ border: "0.5px solid #D3D1C7" }}>{c}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="mt-4 bg-[#F5F0E8] rounded-[10px] p-4" style={{ border: "0.5px solid #D3D1C7" }}>
            <p className="text-[13px] text-[#5F5E5A] leading-[1.8]">
              💡 <strong>ポイント：</strong>引越し繁忙期（3月・9月）はトランクルームの空きが少なく料金も高くなります。宅配収納はオンラインで即申し込みでき、繁忙期でも料金が変わらないため、引越し時期に関わらず安定して利用できます。
            </p>
          </div>
        </section>

        {/* ④ 失敗しない選び方 */}
        <section>
          <h2 className="text-[20px] font-[700] text-[#2D5016] mb-4 pb-2 border-b-2 border-[#2D5016]">
            引越し一時保管で失敗しない宅配収納の選び方
          </h2>
          <div className="space-y-4">
            {[
              {
                point: "① 取り出し日数を確認する",
                body: "引越し先への入居日に合わせて荷物を届けてもらう必要があります。最短翌日対応のサービス（サマリーポケット・minikura）なら、入居日の前日に取り出し依頼すれば当日に届きます。繁忙期は取り出しに時間がかかるサービスもあるため、余裕を持って依頼しましょう。",
                tag: "最重要",
                tagColor: "#2D5016",
              },
              {
                point: "② 大型荷物に対応しているか確認する",
                body: "引越し時には大型の荷物を預けたいケースもあります。通常の宅配収納はボックスサイズが限られているため、ソファ・ベッド・大型家電は宅トラやエアトランクなどスペース単位で預けられるサービスを選びましょう。",
                tag: "重要",
                tagColor: "#E8873A",
              },
              {
                point: "③ 新居への配送に対応しているか確認する",
                body: "取り出した荷物を旧居ではなく新居に届けてもらえると便利です。サマリーポケット・minikuraは届け先の変更が可能です。引越し先に直送してもらえれば、荷物の二重移動を避けられます。",
                tag: "重要",
                tagColor: "#E8873A",
              },
              {
                point: "④ 申し込みから集荷までの日数を確認する",
                body: "引越しの退去日が迫っている場合、できるだけ早く集荷してもらいたいです。サービスによって申し込みから集荷まで2〜7日かかるケースがあります。退去日の1週間前には申し込みを済ませておくと安心です。",
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

        {/* ⑤ おすすめサービス */}
        <section>
          <h2 className="text-[20px] font-[700] text-[#2D5016] mb-4 pb-2 border-b-2 border-[#2D5016]">
            引越し一時保管向けおすすめサービス4選
          </h2>
          <div className="space-y-4">
            {[
              {
                rank: 1,
                name: "サマリーポケット",
                tag: "新居への直送対応・最短翌日取り出し",
                monthly: "330円〜",
                retrieval: "1,100円",
                point: "新居への配送変更が可能で、入居日に合わせて荷物を届けてもらえます。最短翌日対応で急な入居にも対応。クリーニングオプションで引越しと同時に衣類のメンテナンスも可能です。",
                slug: "summary-pocket",
              },
              {
                rank: 2,
                name: "minikura",
                tag: "コスパ重視・長期保管にも対応",
                monthly: "275円〜",
                retrieval: "1,320円",
                point: "業界最安水準の月額275円〜。新居への直送も可能。引越し先が決まるまで長期保管になっても、13ヶ月目以降は自動で割引が適用されます。",
                slug: "minikura",
              },
              {
                rank: 3,
                name: "宅トラ",
                tag: "大型荷物・家具の一時保管に",
                monthly: "330円〜",
                retrieval: "880円〜",
                point: "大型荷物（家具・家電・スーツケース）の保管が得意。引越し業者との連携もスムーズで、ボックスに入らない大型アイテムも預けられます。",
                slug: "takutora",
              },
              {
                rank: 4,
                name: "AZUKEL",
                tag: "費用を最小限に抑えたい方",
                monthly: "220円〜",
                retrieval: "1,100円",
                point: "業界最安クラスの月額220円〜。引越しでただでさえ費用がかかる時期に、一時保管費用を最小限に抑えたい方におすすめです。",
                slug: "azukel",
              },
            ].map((item) => (
              <div key={item.name} className="bg-white rounded-[12px] p-6" style={{ border: item.rank === 1 ? "1px solid #2D5016" : "0.5px solid #D3D1C7" }}>
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-[11px] font-[700] px-2 py-0.5 rounded-full text-white" style={{ background: item.rank === 1 ? "#2D5016" : "#888780" }}>{item.rank}位</span>
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
            引越し一時保管の料金シミュレーション
          </h2>
          <p className="text-[13px] text-[#888780] mb-4">条件：3箱・2ヶ月保管・取り出し1回の場合</p>
          <div className="rounded-[12px] overflow-hidden mb-6">
            <Image
              src="/images/guide/hikkoshi-storage-simulation.png"
              alt="引越し一時保管の料金シミュレーション"
              width={800}
              height={450}
              className="w-full h-auto"
            />
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-[13px]" style={{ borderCollapse: "collapse" }}>
              <thead>
                <tr>
                  {["サービス", "月額×3箱×2ヶ月", "取り出し送料×1回", "総費用"].map((h) => (
                    <th key={h} className="py-3 px-4 text-center text-white font-bold" style={{ background: "#2D5016", border: "0.5px solid #D3D1C7" }}>{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {[
                  { name: "AZUKEL", monthly: 220, retrieval: 1100 },
                  { name: "minikura", monthly: 275, retrieval: 1320 },
                  { name: "サマリーポケット", monthly: 330, retrieval: 1100 },
                  { name: "宅トラ", monthly: 330, retrieval: 880 },
                ].map(({ name, monthly, retrieval }, i) => {
                  const base = monthly * 3 * 2;
                  const total = base + retrieval;
                  return (
                    <tr key={name} style={{ background: i % 2 === 1 ? "#F5F0E8" : "white" }}>
                      <td className="py-3 px-4 font-medium text-[#2C2C2A]" style={{ border: "0.5px solid #D3D1C7" }}>{name}</td>
                      <td className="py-3 px-4 text-center text-[#2C2C2A]" style={{ border: "0.5px solid #D3D1C7" }}>¥{base.toLocaleString()}</td>
                      <td className="py-3 px-4 text-center text-[#2C2C2A]" style={{ border: "0.5px solid #D3D1C7" }}>¥{retrieval.toLocaleString()}</td>
                      <td className="py-3 px-4 text-center font-[700] text-[#2D5016]" style={{ border: "0.5px solid #D3D1C7" }}>¥{total.toLocaleString()}</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
          <div className="mt-4 bg-[#F5F0E8] rounded-[10px] p-4" style={{ border: "0.5px solid #D3D1C7" }}>
            <p className="text-[13px] text-[#5F5E5A] leading-[1.8]">
              💡 <strong>ポイント：</strong>短期の一時保管ならAZUKELが最安です。ただし取り出し送料まで含めると差は縮まります。取り出し先を新居に変更できるサービスを選ぶことが最重要です。
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
                q: "引越し当日に荷物を預けることはできますか？",
                a: "当日の預け入れは難しいです。宅配収納は申し込みから専用ボックスが届くまで数日かかります。退去日の1〜2週間前には申し込みを済ませ、ボックスを受け取っておくことをおすすめします。",
              },
              {
                q: "取り出した荷物を旧居ではなく新居に届けてもらえますか？",
                a: "サービスによります。サマリーポケット・minikuraは届け先の変更が可能です。取り出し依頼時に新居の住所を指定するだけで、新居に直送してもらえます。",
              },
              {
                q: "引越し業者の一時保管サービスと宅配収納はどちらがお得ですか？",
                a: "費用面では宅配収納の方が圧倒的に安いケースがほとんどです。引越し業者の一時保管は引越し費用に上乗せされることが多く、期間が長くなるほどコスト差が広がります。ただし大型家具・家電は引越し業者の方が対応しやすい場合もあります。",
              },
              {
                q: "繁忙期（3月・9月）でも申し込めますか？",
                a: "はい、宅配収納はオンラインで24時間申し込みが可能で、繁忙期でも料金が変わりません。ただし集荷・取り出しの混雑により通常より時間がかかる場合があります。繁忙期は1〜2週間前に余裕を持って依頼することをおすすめします。",
              },
              {
                q: "保管中の荷物が破損した場合の補償はありますか？",
                a: "ほとんどのサービスに補償制度があります。サマリーポケットは1箱あたり最大10万円、minikuraは1箱あたり最大5万円の補償が付いています。貴重品・壊れやすいものは事前に確認してください。",
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
              { title: "単身赴任の荷物どうする？宅配収納を使った解決法", href: "/guide/tanshin-funin-storage" },
              { title: "衣替えに宅配収納を使うべき理由とおすすめサービス5選", href: "/guide/koromogae-storage" },
              { title: "宅配型トランクルームとは？仕組みとメリットを解説", href: "/guide/what-is-takuhai-storage" },
              { title: "サマリーポケットの評判・口コミを徹底解説", href: "/guide/summary-pocket-review" },
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
            引越し時の一時保管に最適なサービスを3秒で診断
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
