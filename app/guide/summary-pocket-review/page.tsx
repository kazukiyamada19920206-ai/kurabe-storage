import type { Metadata } from "next";
import Link from "next/link";
import pricing from "../../../pricing.json";

export const metadata: Metadata = {
  title: "サマリーポケットの評判・口コミ｜料金・メリット・デメリット",
  description:
    "サマリーポケットの評判・口コミ・クリーニングの料金と仕上がりを徹底解説。悪い口コミ・最悪の声も掲載。月額料金・メリット・デメリットを正直にレビュー。",
};

const service = pricing.find((s) => s.slug === "summary-pocket")!;

export default function SummaryPocketReviewPage() {
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
            <span>サマリーポケットの評判・口コミ</span>
          </nav>
          <div className="flex items-center gap-2 mb-3">
            <span className="text-sm font-[600] text-[#C4620A]">評判・口コミ</span>
          </div>
          <h1 className="text-[26px] font-[700] text-[#2D5016] leading-[1.4] mb-3">
            サマリーポケットの評判・口コミを徹底解説<br />メリット・デメリットとおすすめの使い方
          </h1>
          <p className="text-[12px] text-[#888780]">2026年4月更新</p>
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
              サマリーポケットは<strong className="text-[#2D5016]">初めて宅配収納を使う方に最もおすすめできるサービス</strong>です。知名度・使いやすさ・クリーニングオプションの三拍子が揃っており、月額330円〜とコスパも良く、迷ったらまずここから試して間違いありません。
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
                  ["月額（1箱）", `¥${service.monthly_per_box.toLocaleString()}〜`],
                  ["取り出し送料", `¥${service.retrieval_fee.toLocaleString()}`],
                  ["初期費用", service.initial_fee === 0 ? "無料" : `¥${service.initial_fee.toLocaleString()}`],
                  ["最低利用期間", "1ヶ月〜"],
                  ["運営会社", "株式会社サマリー"],
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

        {/* ③ メリット5つ */}
        <section>
          <h2 className="text-[20px] font-[700] text-[#2D5016] mb-4 pb-2 border-b-2 border-[#2D5016]">
            サマリーポケットのメリット
          </h2>
          <div className="space-y-3">
            {[
              {
                title: "アプリ操作が直感的でわかりやすい",
                body: "集荷依頼・取り出し・中身の確認がすべてアプリで完結。預けたものを写真で一覧管理できるので「何を預けたか忘れた」がなくなります。",
              },
              {
                title: "クリーニングオプションが充実",
                body: "預けた衣類をそのままクリーニングに出せます。コートなど1点990円〜。衣替えとクリーニングを同時に済ませられるのはサマリーポケットならではの強みです。",
              },
              {
                title: "初回は日割り計算",
                body: "月の途中から始めても損しません。月額を日割りで計算してくれるため、気軽に始められます。",
              },
              {
                title: "大手の安心感",
                body: "テレビCMでもおなじみの知名度。初めての宅配収納で不安な方にとって「聞いたことある会社」という安心感は大きいです。",
              },
              {
                title: "保管環境が高品質",
                body: "三菱倉庫が運営する倉庫で温度10〜28℃・湿度40〜65%を管理。カビや虫のリスクが低く、大切な衣類も安心して預けられます。",
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

        {/* ④ オプション機能一覧 */}
        <section>
          <h2 className="text-[20px] font-[700] text-[#2D5016] mb-4 pb-2 border-b-2 border-[#2D5016]">
            オプション機能一覧
          </h2>
          <div className="overflow-x-auto">
            <table className="w-full text-[13px]" style={{ borderCollapse: "collapse" }}>
              <thead>
                <tr>
                  <th className="py-3 px-4 text-left text-white font-bold" style={{ background: "#2D5016", border: "0.5px solid #D3D1C7" }}>オプション</th>
                  <th className="py-3 px-4 text-left text-white font-bold" style={{ background: "#2D5016", border: "0.5px solid #D3D1C7" }}>内容</th>
                  <th className="py-3 px-4 text-left text-white font-bold" style={{ background: "#2D5016", border: "0.5px solid #D3D1C7" }}>料金</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ["クリーニング（スタンダード）", "預けた衣類をそのままクリーニング", "990円〜/点"],
                  ["クリーニング（プレミアム）", "デリケート素材・高級品対応", "1,276円〜/点"],
                  ["ハンガー保管", "衣類をハンガーにかけたまま保管、型崩れ防止", "60円〜/点/月"],
                  ["靴修理", "ヒール・ソールのすり減りを修理", "1,408円〜/両足"],
                  ["手放すオプション", "取り出さずにそのまま寄付・リサイクル", "200円〜/点"],
                ].map(([label, desc, price], i) => (
                  <tr key={label} style={{ background: i % 2 === 1 ? "#F5F0E8" : "white" }}>
                    <td className="py-3 px-4 font-medium text-[#2C2C2A]" style={{ border: "0.5px solid #D3D1C7" }}>{label}</td>
                    <td className="py-3 px-4 text-[#2C2C2A]" style={{ border: "0.5px solid #D3D1C7" }}>{desc}</td>
                    <td className="py-3 px-4 text-[#2C2C2A] whitespace-nowrap" style={{ border: "0.5px solid #D3D1C7" }}>{price}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="mt-4 bg-white rounded-[12px] p-4 text-[13px] text-[#5F5E5A] leading-[1.8]" style={{ border: "0.5px solid #D3D1C7" }}>
            クリーニングは近所の店舗だとコート1着2,000円以上かかるケースが多い中、サマリーポケットなら990円〜。しかも自宅から一歩も出ずに完結します。
          </div>
        </section>

        {/* クリーニング専用セクション */}
        <section>
          <h2 className="text-[20px] font-[700] text-[#2D5016] mb-4 pb-2 border-b-2 border-[#2D5016]">
            サマリーポケットのクリーニングサービスを徹底解説
          </h2>

          {/* 2-1: 料金テーブル */}
          <div className="overflow-x-auto mb-5">
            <table className="w-full text-[13px]" style={{ borderCollapse: "collapse" }}>
              <thead>
                <tr>
                  <th className="py-3 px-4 text-left text-white font-bold" style={{ background: "#2D5016", border: "0.5px solid #D3D1C7" }}>種類</th>
                  <th className="py-3 px-4 text-left text-white font-bold" style={{ background: "#2D5016", border: "0.5px solid #D3D1C7" }}>料金</th>
                  <th className="py-3 px-4 text-left text-white font-bold" style={{ background: "#2D5016", border: "0.5px solid #D3D1C7" }}>対象</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ["スタンダードコース", "990円〜/点", "衣類全般（コート・ジャケット・シャツなど）"],
                  ["プレミアムコース", "1,276円〜/点", "デリケート素材・高級品・ブランド品"],
                  ["布団クリーニング", "2,200円〜/枚", "掛け布団・敷き布団・毛布・枕"],
                ].map(([type, price, target], i) => (
                  <tr key={type} style={{ background: i % 2 === 1 ? "#F5F0E8" : "white" }}>
                    <td className="py-3 px-4 font-medium text-[#2C2C2A]" style={{ border: "0.5px solid #D3D1C7" }}>{type}</td>
                    <td className="py-3 px-4 text-[#2C2C2A] whitespace-nowrap" style={{ border: "0.5px solid #D3D1C7" }}>{price}</td>
                    <td className="py-3 px-4 text-[#2C2C2A]" style={{ border: "0.5px solid #D3D1C7" }}>{target}</td>
                  </tr>
                ))}
              </tbody>
            </table>
            <p className="text-[12px] text-[#888780] mt-2">※スタンダードプラン限定のオプション。エコノミープランでは利用不可。</p>
          </div>

          {/* 2-2: 特徴3点 */}
          <div className="space-y-3 mb-5">
            {[
              { title: "保管しながらクリーニングできる", body: "倉庫に預けたまま依頼できるため、自分でクリーニング店に持っていく手間がゼロ。衣替えのタイミングでまとめてクリーニングを依頼するのが最も効率的な使い方です。" },
              { title: "一律料金でコートもシャツも同額", body: "スタンダードコース990円〜はアイテムを問わず一律料金。通常のクリーニング店ではコート1着2,000円以上かかることが多いため、大型・高額アイテムほどお得になります。" },
              { title: "ホワイト急便が担当", body: "公式サイトによるとクリーニングはホワイト急便が担当。専門設備での洗浄のため、通常のクリーニング店と同等の仕上がりが期待できます。ただし仕上がりまで約2週間かかる点は注意が必要です。" },
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

          {/* 2-3: 注意事項カード */}
          <div className="rounded-[12px] p-5 mb-5" style={{ border: "1.5px solid #E8873A", background: "#FFF8F3" }}>
            <p className="text-[14px] text-[#2C2C2A] leading-[1.8]">
              ⚠️ クリーニングはスタンダードプランのみ対応です。仕上がりまで約2〜3週間かかるため、急ぎの場合はお早めに依頼してください。
            </p>
          </div>

          {/* 2-4: 外部口コミリンク */}
          <h3 className="text-[16px] font-[700] text-[#2C2C2A] mb-3">実際のユーザーの声はこちらで確認できます</h3>
          <div className="space-y-3">
            {[
              {
                name: "みん評（128件の口コミ）",
                desc: "実際に利用したユーザーの良い口コミ・悪い口コミが128件掲載されています。",
                url: "https://minhyo.jp/pocket-sumally",
              },
              {
                name: "トランクルームひろば",
                desc: "クリーニングオプションの料金・仕上がり・日数を詳しく解説しています。",
                url: "https://awele.co.jp/storage/sumallypocket-cleaning/",
              },
            ].map((item) => (
              <a
                key={item.name}
                href={item.url}
                target="_blank"
                rel="noopener noreferrer"
                className="block bg-white rounded-[12px] p-5 hover:bg-[#F5F0E8] transition"
                style={{ border: "0.5px solid #D3D1C7" }}
              >
                <p className="font-[700] text-[#2D5016] mb-1 text-[14px]">{item.name} ↗</p>
                <p className="text-[13px] text-[#5F5E5A] leading-[1.8]">{item.desc}</p>
              </a>
            ))}
          </div>
        </section>

        {/* ⑤ デメリット2つ */}
        <section>
          <h2 className="text-[20px] font-[700] text-[#2D5016] mb-4 pb-2 border-b-2 border-[#2D5016]">
            サマリーポケットのデメリット
          </h2>
          <div className="space-y-3">
            {[
              {
                title: "衣替え時期は取り出しが混雑する",
                body: "春・秋の繁忙期は取り出しに1〜2週間かかるケースがあります。急ぎで必要なものは余裕を持って依頼することが必要です。",
              },
              {
                title: "月額はAZUKELやminikuraより少し高め",
                body: "AZUKEL（220円）・minikura（275円）と比べると330円はやや高め。ただしオプションの付加価値を考えると十分な価値があります。",
              },
              {
                title: "長期利用はminikuraより割高になる",
                body: "minikuraは13ヶ月目以降に長期割引が適用され、1年以上預けたボックスの取り出し送料も無料になります。1年以上の長期保管を前提にするなら、minikuraの方がトータルコストを抑えられます。",
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

        {/* ⑥ こんな使い方がおすすめ */}
        <section>
          <h2 className="text-[20px] font-[700] text-[#2D5016] mb-4 pb-2 border-b-2 border-[#2D5016]">
            こんな使い方がおすすめ
          </h2>
          <div className="space-y-3">
            {[
              {
                title: "衣替え収納として使う",
                body: "シーズンオフの衣類・コートをまとめて預けて、クリーニングオプションと組み合わせれば「預けてきれいになって戻ってくる」理想の衣替えが実現します。",
              },
              {
                title: "引越し時の一時保管に使う",
                body: "引越し後すぐ開けない荷物をそのまま段ボールに入れて送るだけ。部屋の片付けがぐっと楽になります。",
              },
              {
                title: "捨てられないものの「とりあえず置き場」に使う",
                body: "「捨てるか迷っているもの」を一度預けてみる使い方。見えないところに置くことで判断が冷静にできます。",
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
          <p className="text-[13px] text-[#888780] mb-4">minikura（275円/月・送料1,320円）との比較。取り出し1回分を含む。</p>
          <div className="overflow-x-auto">
            <table className="w-full text-[13px]" style={{ borderCollapse: "collapse" }}>
              <thead>
                <tr>
                  <th className="py-3 px-4 text-left text-white font-bold" style={{ background: "#2D5016", border: "0.5px solid #D3D1C7" }}>条件</th>
                  <th className="py-3 px-4 text-center text-white font-bold" style={{ background: "#2D5016", border: "0.5px solid #D3D1C7" }}>サマリーポケット</th>
                  <th className="py-3 px-4 text-center text-white font-bold" style={{ background: "#2D5016", border: "0.5px solid #D3D1C7" }}>minikura</th>
                  <th className="py-3 px-4 text-center text-white font-bold" style={{ background: "#2D5016", border: "0.5px solid #D3D1C7" }}>差額</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { label: "1箱・3ヶ月", self: 2090, ref: 2145 },
                  { label: "3箱・6ヶ月", self: 7040, ref: 6270 },
                  { label: "5箱・6ヶ月", self: 11000, ref: 9570 },
                  { label: "5箱・12ヶ月", self: 20900, ref: 17820 },
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

        {/* ⑦ こんな人におすすめ／向いていない人 */}
        <section>
          <h2 className="text-[20px] font-[700] text-[#2D5016] mb-4 pb-2 border-b-2 border-[#2D5016]">
            こんな人におすすめ／他のサービスが向いている人
          </h2>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-white rounded-[12px] p-5" style={{ border: "0.5px solid #D3D1C7" }}>
              <p className="font-[700] text-[#2D5016] mb-3">サマリーポケットがおすすめ</p>
              <ul className="space-y-2">
                {[
                  "初めて宅配収納を使う方",
                  "衣替えとクリーニングをまとめて済ませたい方",
                  "アプリで管理したい方",
                  "大手サービスで安心したい方",
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
                  { text: "月額を安く抑えたい", link: "/detail/azukel", label: "AZUKEL（220円）" },
                  { text: "本・CDを専用プランで預けたい", link: "/detail/minikura", label: "minikura" },
                  { text: "頻繁に出し入れする", link: "/detail/airtrunk", label: "エアトランク（送料無料）" },
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

        {/* ⑧ 口コミ3選 */}
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

        {/* 悪い口コミ・最悪の声 */}
        <section>
          <h2 className="text-[20px] font-[700] text-[#2D5016] mb-4 pb-2 border-b-2 border-[#2D5016]">
            悪い口コミ・最悪と感じた人の声
          </h2>
          <div className="space-y-4">
            {[
              {
                title: "繁忙期に取り出しが2週間かかった",
                body: "春の衣替えシーズンに取り出し依頼をしたところ、通常3〜5日のところ約2週間かかった。急いでいたので困った。",
                response: "繁忙期（3〜5月・9〜11月）は混雑が集中します。急ぎの取り出しは繁忙期を避けるか、余裕を持って2〜3週間前に依頼することをおすすめします。",
              },
              {
                title: "クリーニングの仕上がりにムラがあった",
                body: "クリーニングオプションを使ったが、期待していたほどきれいにならなかったものがあった。高級品は別の専門店に出した方がよいかもしれない。",
                response: "クリーニングの品質は衣類の素材・汚れの程度によって異なります。デリケートな素材・高級品はプレミアムプラン（1,276円〜）の利用、または事前に相談することをおすすめします。",
              },
              {
                title: "取り出し送料が思ったより高かった",
                body: "月額330円と安いので使い始めたが、取り出すたびに1,100円かかるとは思わなかった。年に3〜4回取り出すと送料だけで4,000円超える。",
                response: "取り出し頻度が高い方は送料が積み上がります。年2回以下の取り出しならコスパは良いですが、頻繁に出し入れする方はカラエト（年4回送料無料）やエアトランクを検討してください。",
              },
              {
                title: "箱のサイズが思ったより小さかった",
                body: "レギュラーボックスに布団を入れようとしたが入らなかった。事前にサイズを確認せずに申し込んでしまい失敗した。",
                response: "布団・毛布はラージボックスまたは大型アイテムプランをご利用ください。申し込み前に公式サイトでボックスサイズを確認することをおすすめします。",
              },
            ].map((item) => (
              <div key={item.title} className="bg-white rounded-[12px] p-5" style={{ border: "0.5px solid #D3D1C7" }}>
                <div className="flex gap-3 mb-3">
                  <span className="font-bold text-[#C4620A] flex-shrink-0 mt-0.5">△</span>
                  <p className="font-[700] text-[#2C2C2A]">{item.title}</p>
                </div>
                <p className="text-[13px] text-[#5F5E5A] leading-[1.8] mb-3 pl-5">「{item.body}」</p>
                <div className="bg-[#F5F0E8] rounded-[8px] p-3 pl-5">
                  <p className="text-[11px] font-[600] text-[#2D5016] mb-1">編集部からの補足</p>
                  <p className="text-[12px] text-[#5F5E5A] leading-[1.8]">{item.response}</p>
                </div>
              </div>
            ))}
          </div>
          <p className="text-[11px] text-[#888780] mt-3">※上記は実際のユーザーの声をもとに構成した事例です。サービス内容・料金は2026年5月時点の情報です。</p>
        </section>

        {/* ⑨ 詳細ページへの内部リンク */}
        <section>
          <h2 className="text-[20px] font-[700] text-[#2D5016] mb-4 pb-2 border-b-2 border-[#2D5016]">
            料金シミュレーションで確認する
          </h2>
          <div className="bg-white rounded-[12px] p-5" style={{ border: "0.5px solid #D3D1C7" }}>
            <p className="text-[13px] text-[#5F5E5A] leading-[1.8] mb-4">
              あなたの箱数・保管期間でサマリーポケットの総費用を計算できます。他のサービスと比べて最安かどうかも一目で確認できます。
            </p>
            <Link
              href="/detail/summary-pocket"
              className="inline-block bg-[#2D5016] hover:bg-[#1A3009] text-white font-[600] px-6 py-3 rounded-[10px] text-[14px] transition"
            >
              サマリーポケットの料金を診断で確認する →
            </Link>
          </div>
        </section>

        {/* FAQ */}
        <section>
          <h2 className="text-[20px] font-[700] text-[#2D5016] mb-4 pb-2 border-b-2 border-[#2D5016]">
            よくある質問（FAQ）
          </h2>
          <div className="space-y-4">
            {[
              {
                q: "クリーニングオプションはどのプランで使えますか？",
                a: "スタンダードプランのみ利用できます。エコノミープランでは利用できません。料金は衣類1点990円〜、布団1枚2,200円〜です。預けたまま依頼できるため、自分でクリーニング店に持ち込む手間が不要です。",
              },
              {
                q: "クリーニングの仕上がりと日数は？",
                a: "ホワイト急便が担当しており、通常のクリーニング店と同等の仕上がりです。ただしひどいシミや特殊素材は完全に落ちない場合があります。仕上がりまでスタンダードコースで約2週間かかるため、急ぎの場合は早めに依頼してください。",
              },
            ].map((item) => (
              <div key={item.q} className="bg-white rounded-[12px] p-5" style={{ border: "0.5px solid #D3D1C7" }}>
                <p className="font-[700] text-[#2C2C2A] mb-2 text-[14px]">Q. {item.q}</p>
                <p className="text-[13px] text-[#5F5E5A] leading-[1.8]">A. {item.a}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ⑩ 診断CTAバナー */}
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
