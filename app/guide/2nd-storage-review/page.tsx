import type { Metadata } from "next";
import Link from "next/link";
import pricing from "../../../pricing.json";

export const metadata: Metadata = {
  title: "2nd STORAGEの評判・口コミ｜配送料無料の実態とデメリット",
  description:
    "2nd STORAGEの評判・口コミを正直レビュー。ゲオグループ運営・配送料完全無料の実態、対応エリアの制限、月額料金、梱包不要のメリット・デメリットを徹底解説。首都圏在住の方必読。",
  openGraph: {
    title: "2nd STORAGEの評判・口コミ｜配送料無料の実態とデメリット | くらべる収納",
    description: "2nd STORAGEの評判・口コミを正直レビュー。ゲオグループ運営・配送料完全無料の実態、対応エリアの制限、月額料金、梱包不要のメリット・デメリットを徹底解説。首都圏在住の方必読。",
    url: "https://moriyamanaomi.com/guide/2nd-storage-review",
    siteName: "くらべる収納",
    locale: "ja_JP",
    type: "article",
  },
};

const service = pricing.find((s) => s.slug === "2nd-storage")!;

export default function SecondStorageReviewPage() {
  return (
    <main className="min-h-screen bg-[#F5F0E8]">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: "{\"@context\": \"https://schema.org\", \"@type\": \"BreadcrumbList\", \"itemListElement\": [{\"@type\": \"ListItem\", \"position\": 1, \"name\": \"ホーム\", \"item\": \"https://moriyamanaomi.com\"}, {\"@type\": \"ListItem\", \"position\": 2, \"name\": \"ガイド\", \"item\": \"https://moriyamanaomi.com/guide\"}, {\"@type\": \"ListItem\", \"position\": 3, \"name\": \"2nd STORAGEの評判・口コミ\"}]}" }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: "{\"@context\": \"https://schema.org\", \"@type\": \"FAQPage\", \"mainEntity\": [{\"@type\": \"Question\", \"name\": \"2nd STORAGEの運営会社はどこですか？\", \"acceptedAnswer\": {\"@type\": \"Answer\", \"text\": \"株式会社ゲオ（ゲオグループ）が運営しています。DVDレンタルやリユース事業（セカンドストリート）で知られる大手企業で、2022年3月に宅配型トランクルームサービスとして2nd STORAGEを開始しました。\"}}, {\"@type\": \"Question\", \"name\": \"対応エリアはどこですか？\", \"acceptedAnswer\": {\"@type\": \"Answer\", \"text\": \"現在は東京都（離島除く）・神奈川県（横浜市・川崎市）・千葉県（市川市・浦安市）に対応しています。順次エリアを拡大中のため、最新情報は公式サイトでご確認ください。\"}}, {\"@type\": \"Question\", \"name\": \"箱に入らない大型荷物は預けられますか？\", \"acceptedAnswer\": {\"@type\": \"Answer\", \"text\": \"預けられます。これが2nd STORAGEの最大の特徴です。ゴルフバッグ・スーツケース・釣り道具・スキー板など、他の宅配収納サービスでは断られる大型荷物も梱包不要でそのまま預けられます。\"}}, {\"@type\": \"Question\", \"name\": \"取り出し送料はかかりますか？\", \"acceptedAnswer\": {\"@type\": \"Answer\", \"text\": \"小型荷物の取り出しは無料です。大型品については別途費用が発生する場合があります。頻繁に出し入れする方にとってはコスパが良いサービスです。\"}}, {\"@type\": \"Question\", \"name\": \"保管中の荷物を売ることはできますか？\", \"acceptedAnswer\": {\"@type\": \"Answer\", \"text\": \"ゲオグループのオプションとして、保管中の荷物をゲオ・セカンドストリートで買取査定してもらうことができます。不用品の処分と収納整理を同時に進めたい方に特におすすめの機能です。\"}}]}" }} />
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
            <span>2nd STORAGEの評判・口コミ</span>
          </nav>
          <div className="flex items-center gap-2 mb-3">
            <span className="text-sm font-[600] text-[#C4620A]">評判・口コミ</span>
          </div>
          <h1 className="text-[26px] font-[700] text-[#2D5016] leading-[1.4] mb-3">
            2nd STORAGEの配送料無料は本当？<br />評判・口コミ・デメリットを正直解説【2026年版】
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
              2nd STORAGEは<strong className="text-[#2D5016]">GEOグループが運営する宅配型トランクルーム</strong>です。集荷・配送料が完全無料で、専門スタッフが自宅まで来てくれるため梱包不要。GEO・2nd STREETでの買取オプションも利用でき、不用品整理と収納を同時に進められます。対応エリアは東京都・横浜市・川崎市・市川市・浦安市限定です。
            </p>
          </div>
        </section>

        {/* 運営会社 */}
        <section>
          <h2 className="text-[20px] font-[700] text-[#2D5016] mb-4 pb-2 border-b-2 border-[#2D5016]">
            2nd STORAGEの運営会社：株式会社ゲオとは
          </h2>
          <div className="bg-white rounded-[12px] p-5 mb-4" style={{ border: "0.5px solid #D3D1C7" }}>
            <table className="w-full text-[13px]" style={{ borderCollapse: "collapse" }}>
              <tbody>
                {[
                  ["会社名", "株式会社ゲオ（ゲオグループ）"],
                  ["設立", "1985年"],
                  ["本社", "愛知県名古屋市"],
                  ["事業内容", "DVD・ゲームレンタル、リユース事業（セカンドストリート）、宅配型トランクルーム運営"],
                  ["サービス開始", "2022年3月"],
                ].map(([label, value], i) => (
                  <tr key={label} style={{ background: i % 2 === 1 ? "#F5F0E8" : "white" }}>
                    <td className="py-2 px-3 font-medium text-[#2C2C2A] w-1/3" style={{ border: "0.5px solid #D3D1C7" }}>{label}</td>
                    <td className="py-2 px-3 text-[#2C2C2A]" style={{ border: "0.5px solid #D3D1C7" }}>{value}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-[14px] text-[#2C2C2A] leading-[1.9] mb-5">
            2nd STORAGEは、DVD・ゲームレンタルでおなじみのゲオグループが2022年3月に開始した宅配型トランクルームです。グループ企業のセカンドストリートで培った中古品の運送・保管ノウハウを活かした高品質な保管環境と、預けた荷物をそのままゲオ・セカンドストリートで買取査定できるオプションが特徴です。
          </p>
          <div className="space-y-3">
            {[
              { point: "ゲオグループの信頼性", body: "DVDレンタル・リユース事業で培った物品管理ノウハウ" },
              { point: "大型荷物も梱包不要", body: "ゴルフバッグ・スーツケース・釣り道具もそのまま預けられる" },
              { point: "ゲオ・セカンドストリートで買取査定", body: "保管中の荷物をそのまま売却できる" },
            ].map((item) => (
              <div key={item.point} className="bg-white rounded-[12px] p-4 flex gap-3" style={{ border: "0.5px solid #D3D1C7" }}>
                <span className="font-bold text-[#2D5016] flex-shrink-0 mt-0.5">✓</span>
                <p className="text-[13px] text-[#2C2C2A] leading-[1.8]">
                  <strong>{item.point}</strong>：{item.body}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* 対応エリア */}
        <section>
          <h2 className="text-[20px] font-[700] text-[#2D5016] mb-4 pb-2 border-b-2 border-[#2D5016]">
            対応エリア（重要）
          </h2>
          <div className="rounded-[12px] p-5 mb-4" style={{ border: "1.5px solid #E8873A", background: "#FFF8F3" }}>
            <p className="text-[14px] text-[#2C2C2A] leading-[1.8]">
              ⚠️ 2nd STORAGEは現在、首都圏の一部エリアのみ対応しています。申し込み前に必ず対応エリアを確認してください。
            </p>
          </div>
          <div className="bg-white rounded-[12px] p-5 mb-4" style={{ border: "0.5px solid #D3D1C7" }}>
            <ul className="space-y-2">
              {[
                "東京都（離島除く）",
                "神奈川県（横浜市・川崎市）",
                "千葉県（市川市・浦安市）",
              ].map((area) => (
                <li key={area} className="flex items-start gap-2 text-[14px] text-[#2C2C2A] leading-[1.8]">
                  <span className="font-bold text-[#2D5016] flex-shrink-0">✓</span>
                  {area}
                </li>
              ))}
            </ul>
            <p className="text-[12px] text-[#888780] mt-3">※2026年5月時点。順次エリア拡大中。</p>
          </div>
          <p className="text-[13px] text-[#5F5E5A] leading-[1.8]">
            対応エリア外の方には、全国対応のサマリーポケット・minikura・カラエトをおすすめします。
            <Link href="/compare/ranking" className="text-[#E8873A] hover:underline ml-1">→ サービス比較ランキングを見る</Link>
          </p>
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
                  ["月額", "3,300円〜（スペースプラン）"],
                  ["取り出し送料", "無料（何度でも）"],
                  ["初期費用", "無料"],
                  ["最低利用期間", "1ヶ月〜"],
                  ["対応エリア", "東京都・横浜市・川崎市・市川市・浦安市"],
                  ["運営会社", "GEOグループ"],
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
            2nd STORAGEのメリット
          </h2>
          <div className="space-y-3">
            {[
              {
                title: "預け入れ・取り出し配送料が何度でも無料",
                body: "エアトランクと同様に送料ゼロで頻繁に出し入れできます。月額の中に送料が含まれているため追加費用がかかりません。",
              },
              {
                title: "専門スタッフが自宅まで集荷するため梱包不要",
                body: "ダンボールに詰める手間がなく、そのまま渡すだけ。重い荷物でもスタッフが運んでくれます。",
              },
              {
                title: "GEO・2nd STREETとの連携で不用品をそのまま買取依頼できる",
                body: "収納と断捨離を同時に進められます。「売れるかも」というものを預けながら出品依頼できるのは2nd STORAGEならではの強みです。",
              },
              {
                title: "預けた荷物を1点ずつ写真管理",
                body: "何を預けているか一目でわかり、取り出しも簡単。スマホアプリで管理できます。",
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
            2nd STORAGEのデメリット
          </h2>
          <div className="space-y-3">
            {[
              {
                title: "対応エリアが狭い",
                body: "東京都・横浜市・川崎市・市川市・浦安市のみ。それ以外の地域は利用できません。エアトランク同様にエリア外の方には選択肢になりません。",
              },
              {
                title: "月額料金が高め",
                body: "スペースプランのため保管量によって料金が変動します。少量の荷物には割高になる場合があります。",
              },
              {
                title: "対応エリアが首都圏の一部に限定されている",
                body: "現在は東京都・横浜市・川崎市・市川市・浦安市のみ対応。それ以外の地域にお住まいの方は利用できません。ただし順次エリア拡大中のため、公式サイトで最新情報を確認してください。",
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
                title: "季節物の衣替えに使う",
                body: "送料無料なので春・秋の入れ替えがコストゼロ。スタッフが来てくれるので重い荷物も楽に出し入れできます。",
              },
              {
                title: "不用品整理と収納を同時に進める",
                body: "GEO買取オプションで「売れるかも」というものを預けながら出品。手間ゼロで部屋がスッキリします。",
              },
              {
                title: "子育て世帯の季節品保管",
                body: "子供の成長で増える服・おもちゃ・季節行事品を梱包不要でそのまま預けられます。",
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
                  <th className="py-3 px-4 text-center text-white font-bold" style={{ background: "#2D5016", border: "0.5px solid #D3D1C7" }}>2nd STORAGE</th>
                  <th className="py-3 px-4 text-center text-white font-bold" style={{ background: "#2D5016", border: "0.5px solid #D3D1C7" }}>サマリーポケット</th>
                  <th className="py-3 px-4 text-center text-white font-bold" style={{ background: "#2D5016", border: "0.5px solid #D3D1C7" }}>差額</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { label: "1箱・3ヶ月", self: 9900, ref: 2090 },
                  { label: "3箱・6ヶ月", self: 19800, ref: 7040 },
                  { label: "5箱・6ヶ月", self: 19800, ref: 11000 },
                  { label: "5箱・12ヶ月", self: 39600, ref: 20900 },
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
          <p className="text-[12px] text-[#888780] mt-2">※ 2nd STORAGEはスペースプランのため月額は箱数に比例しません。上記はスペースプラン（3,300円/月）で算出。</p>
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
              <p className="font-[700] text-[#2D5016] mb-3">2nd STORAGEがおすすめ</p>
              <ul className="space-y-2">
                {[
                  "月に何度も荷物を出し入れする方",
                  "梱包の手間を省きたい方",
                  "GEOグループの安心感を重視する方",
                  "東京都・横浜市・川崎市在住の方",
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
                  { text: "対応エリア外の方", link: "/detail/airtrunk", label: "エアトランク・サマリーポケット" },
                  { text: "月額を安く抑えたい", link: "/detail/azukel", label: "AZUKEL（220円〜）" },
                  { text: "書籍専門", link: "/detail/tokyo-shoko", label: "東京書庫" },
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
              あなたの箱数・保管期間で2nd STORAGEの総費用を計算できます。他のサービスと比べて最安かどうかも一目で確認できます。
            </p>
            <Link
              href="/detail/2nd-storage"
              className="inline-block bg-[#2D5016] hover:bg-[#1A3009] text-white font-[600] px-6 py-3 rounded-[10px] text-[14px] transition"
            >
              2nd STORAGEの料金を診断で確認する →
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
                q: "2nd STORAGEの運営会社はどこですか？",
                a: "株式会社ゲオ（ゲオグループ）が運営しています。DVDレンタルやリユース事業（セカンドストリート）で知られる大手企業で、2022年3月に宅配型トランクルームサービスとして2nd STORAGEを開始しました。",
              },
              {
                q: "対応エリアはどこですか？",
                a: "現在は東京都（離島除く）・神奈川県（横浜市・川崎市）・千葉県（市川市・浦安市）に対応しています。順次エリアを拡大中のため、最新情報は公式サイトでご確認ください。",
              },
              {
                q: "箱に入らない大型荷物は預けられますか？",
                a: "預けられます。これが2nd STORAGEの最大の特徴です。ゴルフバッグ・スーツケース・釣り道具・スキー板など、他の宅配収納サービスでは断られる大型荷物も梱包不要でそのまま預けられます。",
              },
              {
                q: "取り出し送料はかかりますか？",
                a: "小型荷物の取り出しは無料です。大型品については別途費用が発生する場合があります。頻繁に出し入れする方にとってはコスパが良いサービスです。",
              },
              {
                q: "保管中の荷物を売ることはできますか？",
                a: "ゲオグループのオプションとして、保管中の荷物をゲオ・セカンドストリートで買取査定してもらうことができます。不用品の処分と収納整理を同時に進めたい方に特におすすめの機能です。",
              },
            ].map((item) => (
              <div key={item.q} className="bg-white rounded-[12px] p-5" style={{ border: "0.5px solid #D3D1C7" }}>
                <p className="font-[700] text-[#2C2C2A] mb-2 text-[14px]">Q. {item.q}</p>
                <p className="text-[13px] text-[#5F5E5A] leading-[1.8]">A. {item.a}</p>
              </div>
            ))}
          </div>
        </section>

        
        {/* 関連記事 */}
        <section>
          <h2 className="text-[20px] font-[700] text-[#2D5016] mb-4 pb-2 border-b-2 border-[#2D5016]">
            関連記事
          </h2>
          <div className="grid md:grid-cols-2 gap-3">
            {[
              { title: "宅配収納おすすめランキング9選", href: "/compare/ranking" },
              { title: "2nd STORAGE vs minikura 料金・機能比較", href: "/compare/2nd-storage-vs-minikura" },
              { title: "minikuraの評判・口コミ", href: "/guide/minikura-review" },
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
