import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "サマリーポケット vs minikura｜料金・機能の徹底比較",
  description:
    "サマリーポケットとminikuraを月額・取り出し送料・クリーニング・長期割引など18項目で徹底比較。料金シミュレーション付き。あなたの使い方でどちらがお得か3分でわかります。",
  openGraph: {
    title: "サマリーポケット vs minikura｜料金・機能の徹底比較 | くらべる収納",
    description: "サマリーポケットとminikuraを月額・取り出し送料・クリーニング・長期割引など18項目で徹底比較。料金シミュレーション付き。あなたの使い方でどちらがお得か3分でわかります。",
    url: "https://moriyamanaomi.com/compare/summary-pocket-vs-minikura",
    siteName: "くらべる収納",
    locale: "ja_JP",
    type: "article",
  },
};

const patterns = [
  {
    label: "1箱・6ヶ月・取り出し1回",
    summaryMonthly: 330,
    minikuraMonthly: 275,
    boxes: 1,
    months: 6,
    summaryShipping: 1100,
    minikuraShipping: 1320,
  },
  {
    label: "3箱・6ヶ月・取り出し1回",
    summaryMonthly: 330,
    minikuraMonthly: 275,
    boxes: 3,
    months: 6,
    summaryShipping: 1100,
    minikuraShipping: 1320,
  },
  {
    label: "5箱・12ヶ月・取り出し2回",
    summaryMonthly: 330,
    minikuraMonthly: 275,
    boxes: 5,
    months: 12,
    summaryShipping: 1100 * 2,
    minikuraShipping: 1320 * 2,
  },
];

export default function VsPage() {
  return (
    <main className="min-h-screen bg-[#F5F0E8]">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: "{\"@context\": \"https://schema.org\", \"@type\": \"BreadcrumbList\", \"itemListElement\": [{\"@type\": \"ListItem\", \"position\": 1, \"name\": \"ホーム\", \"item\": \"https://moriyamanaomi.com\"}, {\"@type\": \"ListItem\", \"position\": 2, \"name\": \"比較\", \"item\": \"https://moriyamanaomi.com/compare\"}, {\"@type\": \"ListItem\", \"position\": 3, \"name\": \"サマリーポケット vs minikura\"}]}" }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: "{\"@context\": \"https://schema.org\", \"@type\": \"FAQPage\", \"mainEntity\": [{\"@type\": \"Question\", \"name\": \"サマリーポケットとminikuraの一番の違いは何ですか？\", \"acceptedAnswer\": {\"@type\": \"Answer\", \"text\": \"最大の違いはクリーニングサービスの有無と書籍専用プランの有無です。衣類のクリーニングを一緒にしたい方はサマリーポケット、本・CDを大量に預けたい方はminikuraが向いています。月額料金はminikuraの方が55円安いですが、取り出し送料はサマリーポケットの方が220円安いです。\"}}, {\"@type\": \"Question\", \"name\": \"どちらの方が安いですか？\", \"acceptedAnswer\": {\"@type\": \"Answer\", \"text\": \"月額料金はminikura（275円〜）の方が安いですが、取り出し送料はサマリーポケット（1,100円）の方が安いです。取り出し頻度が年2回以上ある場合はサマリーポケットがトータルで安くなるケースもあります。上記のシミュレーションで自分の使い方に合わせて計算してみてください。\"}}, {\"@type\": \"Question\", \"name\": \"どちらも最低利用期間はありますか？\", \"acceptedAnswer\": {\"@type\": \"Answer\", \"text\": \"どちらも最低利用期間は1ヶ月からです。引越しや衣替えなどで短期間だけ使いたい場合も安心して利用できます。\"}}, {\"@type\": \"Question\", \"name\": \"本や書籍を預けるならどちらがおすすめですか？\", \"acceptedAnswer\": {\"@type\": \"Answer\", \"text\": \"minikuraがおすすめです。minikuraには書籍・CD・コミック専用の「HAKO本棚プラン」があり、1冊単位での取り出しが可能です。大量の蔵書を整理したい方に特に向いています。\"}}, {\"@type\": \"Question\", \"name\": \"サマリーポケットのクリーニングサービスはどんなものですか？\", \"acceptedAnswer\": {\"@type\": \"Answer\", \"text\": \"預けた衣類を倉庫から直接クリーニングに出してもらえるサービスです。取り出して自分でクリーニングに持っていく手間がなく、衣替えのタイミングでまとめてクリーニングできます。料金は衣類の種類によって異なります。\"}}, {\"@type\": \"Question\", \"name\": \"1年以上長期で預けるならどちらがお得ですか？\", \"acceptedAnswer\": {\"@type\": \"Answer\", \"text\": \"minikuraが明確にお得です。13ヶ月目以降は月額が自動的に値下がりし、さらに1年以上預けたボックスの取り出し送料が無料になります。長期保管を前提にするならminikura一択です。\"}}, {\"@type\": \"Question\", \"name\": \"スーツケースやゴルフバッグを預けたいのですが？\", \"acceptedAnswer\": {\"@type\": \"Answer\", \"text\": \"サマリーポケット一択です。minikuraは専用ボックス以外の大型アイテムには対応していません。サマリーポケットはスーツケース・ゴルフバッグ・スキー・スノーボードなどの大型アイテムに対応した専用プランがあります。\"}}]}" }} />
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
            サマリーポケット vs minikura<br />どっちが安い？料金・機能を徹底比較【2026年最新】
          </h1>
          <p className="text-[13px] text-[#5F5E5A] leading-[1.8] mb-3">
            「サマリーポケットとminikura、どっちがいいの？」と迷っている方向けに、料金・使い方・口コミ・実際のコストまで詳しく比較しました。結論から知りたい方は最初の比較表をご覧ください。
          </p>
          <p className="text-[12px] text-[#888780]">2026年5月更新</p>
        </div>
      </div>

      <div className="mx-auto max-w-3xl px-6 py-10 space-y-12">

        {/* セクション0：比較サマリー表 */}
        <section>
          <h2 className="text-[20px] font-[700] text-[#2D5016] mb-4 pb-2 border-b-2 border-[#2D5016]">
            サマリーポケット vs minikura：一目でわかる比較表
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
                  ["月額（1箱）", "330円", "275円 ★安い"],
                  ["取り出し送料", "1,100円", "1,320円"],
                  ["取り出し日数", "最短翌日", "最短翌日"],
                  ["初期費用", "無料", "無料"],
                  ["最低利用期間", "1ヶ月〜", "1ヶ月〜"],
                  ["運営会社", "サマリー株式会社", "寺田倉庫株式会社"],
                  ["保管環境", "三菱倉庫", "自社倉庫（空調管理）"],
                  ["クリーニング", "あり ★", "なし"],
                  ["書籍専用プラン", "なし", "あり ★"],
                  ["写真で中身確認", "あり", "あり"],
                  ["ヤフオク連携", "なし", "あり ★"],
                  ["アイテム単位取り出し", "あり", "あり"],
                  ["ボックスサイズ（レギュラー）", "43×37×33cm", "38×38×38cm"],
                  ["長期割引", "なし", "13ヶ月〜月額300円〜 ★"],
                  ["1年以上で取り出し無料", "なし", "あり ★"],
                  ["大型アイテム保管", "あり ★（スーツケース・ゴルフ・スキー）", "なし"],
                  ["無酸素保管", "あり ★", "なし"],
                  ["クローゼットプラン", "なし", "あり ★"],
                  ["ボックス無料期間", "30日", "2ヶ月 ★"],
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
          <p className="text-[12px] text-[#888780] mt-2">★ は各項目で優れている点</p>
        </section>

        {/* セクション1：結論 */}
        <section>
          <h2 className="text-[20px] font-[700] text-[#2D5016] mb-4 pb-2 border-b-2 border-[#2D5016]">
            結論：どちらを選ぶべきか
          </h2>
          <div className="space-y-4">
            <div className="bg-white rounded-[12px] p-5" style={{ border: "1px solid #2D5016" }}>
              <p className="font-[700] text-[#2D5016] mb-2">✓ サマリーポケットが向いている人</p>
              <ul className="text-[13px] text-[#2C2C2A] leading-[2] space-y-1">
                <li>・初めて宅配収納を使う方（サポートが手厚い）</li>
                <li>・クリーニングもまとめてお願いしたい方</li>
                <li>・衣類・バッグなどファッションアイテムが多い方</li>
                <li>・知名度のあるサービスで安心したい方</li>
              </ul>
            </div>
            <div className="bg-white rounded-[12px] p-5" style={{ border: "1px solid #E8873A" }}>
              <p className="font-[700] text-[#E8873A] mb-2">✓ minikuraが向いている人</p>
              <ul className="text-[13px] text-[#2C2C2A] leading-[2] space-y-1">
                <li>・月額料金をできるだけ抑えたい方</li>
                <li>・本・CD・コミックを大量に預けたい方</li>
                <li>・寺田倉庫の本格的な保管環境を重視する方</li>
                <li>・ヤフオクと連携して不用品を売りたい方</li>
              </ul>
            </div>
          </div>
        </section>

        {/* セクション2：料金シミュレーション */}
        <section>
          <h2 className="text-[20px] font-[700] text-[#2D5016] mb-2 pb-2 border-b-2 border-[#2D5016]">
            総費用シミュレーション
          </h2>
          <p className="text-[13px] text-[#5F5E5A] mb-6">月額料金だけでなく、取り出し送料を含めたトータルコストで比較しました。</p>
          <div className="space-y-6">
            {patterns.map((p) => {
              const summaryTotal = p.summaryMonthly * p.boxes * p.months + p.summaryShipping;
              const minikuraTotal = p.minikuraMonthly * p.boxes * p.months + p.minikuraShipping;
              const diff = Math.abs(summaryTotal - minikuraTotal);
              const minikuraCheaper = minikuraTotal < summaryTotal;
              return (
                <div key={p.label}>
                  <p className="text-[13px] font-[600] text-[#2C2C2A] mb-3">{p.label}</p>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="bg-white rounded-[12px] p-5" style={{ border: "0.5px solid #D3D1C7" }}>
                      <p className="text-[13px] font-[600] text-[#2C2C2A] mb-1">サマリーポケット</p>
                      <p className="text-[11px] text-[#888780] mb-2">月額{p.summaryMonthly}円×{p.boxes}箱×{p.months}ヶ月＋送料{p.summaryShipping.toLocaleString()}円</p>
                      <p className="text-[28px] font-[700] text-[#2D5016]">¥{summaryTotal.toLocaleString()}</p>
                    </div>
                    <div className="bg-white rounded-[12px] p-5 relative" style={{ border: minikuraCheaper ? "1px solid #E8873A" : "0.5px solid #D3D1C7" }}>
                      {minikuraCheaper && (
                        <span className="absolute top-3 right-3 bg-[#E8873A] text-white text-[11px] font-[700] px-2 py-0.5 rounded-[6px]">お得</span>
                      )}
                      <p className="text-[13px] font-[600] text-[#2C2C2A] mb-1">minikura</p>
                      <p className="text-[11px] text-[#888780] mb-2">月額{p.minikuraMonthly}円×{p.boxes}箱×{p.months}ヶ月＋送料{p.minikuraShipping.toLocaleString()}円</p>
                      <p className="text-[28px] font-[700] text-[#2D5016]">¥{minikuraTotal.toLocaleString()}</p>
                      {minikuraCheaper && (
                        <p className="text-[12px] text-[#E8873A] font-[600] mt-1">¥{diff.toLocaleString()} お得</p>
                      )}
                    </div>
                  </div>
                </div>
              );
            })}

            {/* パターン4：長期利用（特別計算） */}
            <div>
              <p className="text-[13px] font-[600] text-[#2C2C2A] mb-3">3箱・13ヶ月・取り出し1回</p>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="bg-white rounded-[12px] p-5" style={{ border: "0.5px solid #D3D1C7" }}>
                  <p className="text-[13px] font-[600] text-[#2C2C2A] mb-1">サマリーポケット</p>
                  <p className="text-[11px] text-[#888780] mb-2">月額330円×3箱×13ヶ月＋送料1,100円</p>
                  <p className="text-[28px] font-[700] text-[#2D5016]">¥13,990</p>
                </div>
                <div className="bg-white rounded-[12px] p-5 relative" style={{ border: "1px solid #E8873A" }}>
                  <span className="absolute top-3 right-3 bg-[#E8873A] text-white text-[11px] font-[700] px-2 py-0.5 rounded-[6px]">お得</span>
                  <p className="text-[13px] font-[600] text-[#2C2C2A] mb-1">minikura</p>
                  <p className="text-[11px] text-[#888780] mb-2">月額300円×3箱×13ヶ月＋送料0円（長期割引＋取り出し無料）</p>
                  <p className="text-[28px] font-[700] text-[#2D5016]">¥11,700</p>
                  <p className="text-[12px] text-[#E8873A] font-[600] mt-1">¥2,290 お得</p>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-[#F5F0E8] rounded-[10px] p-4 mt-4" style={{ border: "0.5px solid #D3D1C7" }}>
            <p className="text-[12px] text-[#5F5E5A] leading-[1.8]">
              💡 <strong>ポイント：</strong>月額はminikuraが安いですが、取り出し送料はサマリーポケットの方が安いです。取り出し頻度が高い場合はサマリーポケットがトータルで安くなるケースもあります。13ヶ月以上の長期利用ではminikuraの長期割引が大きく効いてきます。
            </p>
          </div>
        </section>

        {/* セクション：意外な事実 */}
        <section>
          <h2 className="text-[20px] font-[700] text-[#2D5016] mb-4 pb-2 border-b-2 border-[#2D5016]">
            実は両サービスとも同じ倉庫で保管されています
          </h2>
          <div className="bg-white rounded-[12px] p-5" style={{ border: "0.5px solid #D3D1C7" }}>
            <p className="text-[13px] text-[#5F5E5A] leading-[1.9]">
              あまり知られていない事実ですが、<strong className="text-[#2D5016]">サマリーポケットもminikuraも、実は同じ寺田倉庫で管理されています。</strong>保管品質に実質的な差はなく、違いはサービス設計・料金体系・付帯機能（クリーニング・書籍プランなど）です。「どちらが安心か」という観点で迷っている方は、保管環境の優劣を気にする必要はありません。料金と使いたい機能で選んでください。
            </p>
          </div>
        </section>

        {/* セクション3：使い方フロー比較 */}
        <section>
          <h2 className="text-[20px] font-[700] text-[#2D5016] mb-4 pb-2 border-b-2 border-[#2D5016]">
            実際の使い方フロー比較
          </h2>
          <p className="text-[13px] text-[#5F5E5A] mb-4">両サービスとも基本的な流れは同じですが、細かい点に違いがあります。</p>
          <div className="space-y-4">
            {[
              {
                step: "STEP 1",
                title: "申し込み・ボックス受け取り",
                summary: "Webで申し込み後、専用ボックスが自宅に届きます。サイズはS・M・Lから選択可能。",
                minikura: "Webで申し込み後、専用ボックスが届きます。MONO（通常）・HAKO（大型）・書籍専用プランから選択。",
              },
              {
                step: "STEP 2",
                title: "荷物を詰めて集荷依頼",
                summary: "アプリまたはWebから集荷日時を指定。ヤマト運輸が自宅まで集荷に来ます。",
                minikura: "アプリまたはWebから集荷日時を指定。ヤマト運輸が集荷。集荷後に中身を1点ずつ写真撮影してくれます。",
              },
              {
                step: "STEP 3",
                title: "倉庫で保管",
                summary: "三菱倉庫の空調管理された倉庫で保管。アプリで預けたアイテムを写真確認できます。",
                minikura: "寺田倉庫の自社倉庫で保管。全アイテムを写真で管理。ヤフオクに直接出品する機能も利用可能。",
              },
              {
                step: "STEP 4",
                title: "取り出し依頼",
                summary: "アプリから取り出したいアイテムを選択して依頼。送料1,100円で最短翌日に届きます。",
                minikura: "アプリからアイテムを選択して依頼。送料1,320円で最短翌日に届きます（1年以上預けたボックスは無料）。",
              },
            ].map((item, i) => (
              <div key={i} className="bg-white rounded-[12px] p-5" style={{ border: "0.5px solid #D3D1C7" }}>
                <p className="text-[11px] font-[700] text-[#E8873A] mb-1">{item.step}</p>
                <p className="font-[700] text-[#2C2C2A] mb-3">{item.title}</p>
                <div className="grid md:grid-cols-2 gap-3">
                  <div>
                    <p className="text-[11px] font-[600] text-[#2D5016] mb-1">サマリーポケット</p>
                    <p className="text-[12px] text-[#5F5E5A] leading-[1.8]">{item.summary}</p>
                  </div>
                  <div>
                    <p className="text-[11px] font-[600] text-[#E8873A] mb-1">minikura</p>
                    <p className="text-[12px] text-[#5F5E5A] leading-[1.8]">{item.minikura}</p>
                  </div>
                </div>
              </div>
            ))}
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
                テレビCMでおなじみの知名度と、クリーニングオプションの充実が強みです。預けた衣類をそのままクリーニングに出して戻してもらえるため、衣替えと同時にメンテナンスもできます。三菱倉庫での保管のため信頼性も高く、初めての方向けのサポートも手厚いです。ブランドバッグの査定・買取サービスも利用できるため、断捨離と合わせて使いたい方にも向いています。
              </p>
            </div>
            <div className="bg-white rounded-[12px] p-5" style={{ border: "0.5px solid #D3D1C7" }}>
              <p className="font-[700] text-[#2D5016] mb-2">minikura</p>
              <p className="text-[13px] text-[#5F5E5A] leading-[1.8]">
                株式会社寺田倉庫が運営しており、老舗倉庫会社ならではの本格的な保管環境が特徴です。本・CD・コミック専用のプランが充実しており、大量の書籍や音楽コレクションをお持ちの方には特に向いています。ヤフオクとの連携機能があり、預けた荷物をそのまま出品できるため、不用品整理にも活用できます。月額料金は業界最安クラスで、コストパフォーマンスの高さが魅力です。
              </p>
            </div>
          </div>
        </section>

        {/* セクション5：口コミ・評判 */}
        <section>
          <h2 className="text-[20px] font-[700] text-[#2D5016] mb-4 pb-2 border-b-2 border-[#2D5016]">
            口コミ・評判
          </h2>
          <div className="space-y-6">
            <div>
              <p className="font-[700] text-[#2D5016] mb-3">サマリーポケットの口コミ</p>
              <div className="space-y-3">
                {[
                  { rating: "★★★★★", text: "クリーニングと同時に使えるのが最高。衣替えのたびにクリーニングに持っていく手間がなくなりました。", tag: "良い口コミ" },
                  { rating: "★★★★☆", text: "アプリが使いやすく、預けた荷物の管理がとても楽です。写真で確認できるので何を預けたか忘れることがなくなりました。", tag: "良い口コミ" },
                  { rating: "★★★☆☆", text: "取り出しに1,100円かかるのがネック。年に何度も取り出す場合はコストが積み上がります。", tag: "気になる点" },
                ].map((review, i) => (
                  <div key={i} className="bg-white rounded-[12px] p-4" style={{ border: "0.5px solid #D3D1C7" }}>
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-[#E8873A] text-[14px]">{review.rating}</span>
                      <span className={`text-[11px] px-2 py-0.5 rounded-full ${review.tag === "良い口コミ" ? "bg-[#E8F5E9] text-[#2D5016]" : "bg-[#FFF3E0] text-[#E8873A]"}`}>{review.tag}</span>
                    </div>
                    <p className="text-[13px] text-[#5F5E5A] leading-[1.8]">{review.text}</p>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <p className="font-[700] text-[#2D5016] mb-3">minikuraの口コミ</p>
              <div className="space-y-3">
                {[
                  { rating: "★★★★★", text: "月額275円は本当に安い。大量の本を預けていますが、書籍専用プランで1冊単位で取り出せるのが便利です。", tag: "良い口コミ" },
                  { rating: "★★★★☆", text: "寺田倉庫の保管品質は安心感があります。大切なコレクションを預けていますが、状態が良いまま返ってきます。", tag: "良い口コミ" },
                  { rating: "★★★☆☆", text: "取り出し送料がサマリーポケットより少し高いのが気になりました。頻繁に取り出す方は注意が必要です。", tag: "気になる点" },
                ].map((review, i) => (
                  <div key={i} className="bg-white rounded-[12px] p-4" style={{ border: "0.5px solid #D3D1C7" }}>
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-[#E8873A] text-[14px]">{review.rating}</span>
                      <span className={`text-[11px] px-2 py-0.5 rounded-full ${review.tag === "良い口コミ" ? "bg-[#E8F5E9] text-[#2D5016]" : "bg-[#FFF3E0] text-[#E8873A]"}`}>{review.tag}</span>
                    </div>
                    <p className="text-[13px] text-[#5F5E5A] leading-[1.8]">{review.text}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* セクション：長期利用するならminikura一択 */}
        <section>
          <h2 className="text-[20px] font-[700] text-[#2D5016] mb-4 pb-2 border-b-2 border-[#2D5016]">
            1年以上預けるならminikuraが圧倒的にお得
          </h2>
          <div className="bg-white rounded-[12px] p-5" style={{ border: "1px solid #E8873A" }}>
            <ul className="text-[13px] text-[#2C2C2A] leading-[2] space-y-2">
              <li>✓ <strong>13ヶ月目から月額が自動的に値下がり</strong>（300円〜）</li>
              <li>✓ <strong>1年以上預けたボックスは取り出し送料が無料</strong>になる</li>
              <li>✓ 3箱を1年以上預ける場合、年間コストがサマリーポケットより<strong className="text-[#E8873A]">約2,000〜3,000円安くなる</strong></li>
            </ul>
            <p className="text-[12px] text-[#888780] mt-3">※長期割引は自動適用。別途申請は不要です。</p>
          </div>
        </section>

        {/* セクション6：FAQ */}
        <section>
          <h2 className="text-[20px] font-[700] text-[#2D5016] mb-4 pb-2 border-b-2 border-[#2D5016]">
            よくある質問
          </h2>
          <div className="space-y-4">
            {[
              {
                q: "サマリーポケットとminikuraの一番の違いは何ですか？",
                a: "最大の違いはクリーニングサービスの有無と書籍専用プランの有無です。衣類のクリーニングを一緒にしたい方はサマリーポケット、本・CDを大量に預けたい方はminikuraが向いています。月額料金はminikuraの方が55円安いですが、取り出し送料はサマリーポケットの方が220円安いです。",
              },
              {
                q: "どちらの方が安いですか？",
                a: "月額料金はminikura（275円〜）の方が安いですが、取り出し送料はサマリーポケット（1,100円）の方が安いです。取り出し頻度が年2回以上ある場合はサマリーポケットがトータルで安くなるケースもあります。上記のシミュレーションで自分の使い方に合わせて計算してみてください。",
              },
              {
                q: "どちらも最低利用期間はありますか？",
                a: "どちらも最低利用期間は1ヶ月からです。引越しや衣替えなどで短期間だけ使いたい場合も安心して利用できます。",
              },
              {
                q: "本や書籍を預けるならどちらがおすすめですか？",
                a: "minikuraがおすすめです。minikuraには書籍・CD・コミック専用の「HAKO本棚プラン」があり、1冊単位での取り出しが可能です。大量の蔵書を整理したい方に特に向いています。",
              },
              {
                q: "サマリーポケットのクリーニングサービスはどんなものですか？",
                a: "預けた衣類を倉庫から直接クリーニングに出してもらえるサービスです。取り出して自分でクリーニングに持っていく手間がなく、衣替えのタイミングでまとめてクリーニングできます。料金は衣類の種類によって異なります。",
              },
              {
                q: "1年以上長期で預けるならどちらがお得ですか？",
                a: "minikuraが明確にお得です。13ヶ月目以降は月額が自動的に値下がりし、さらに1年以上預けたボックスの取り出し送料が無料になります。長期保管を前提にするならminikura一択です。",
              },
              {
                q: "スーツケースやゴルフバッグを預けたいのですが？",
                a: "サマリーポケット一択です。minikuraは専用ボックス以外の大型アイテムには対応していません。サマリーポケットはスーツケース・ゴルフバッグ・スキー・スノーボードなどの大型アイテムに対応した専用プランがあります。",
              },
            ].map((item, i) => (
              <div key={i} className="bg-white rounded-[12px] p-5" style={{ border: "0.5px solid #D3D1C7" }}>
                <p className="font-[700] text-[#2C2C2A] mb-2">Q. {item.q}</p>
                <p className="text-[13px] text-[#5F5E5A] leading-[1.8]">A. {item.a}</p>
              </div>
            ))}
          </div>
        </section>

        {/* セクション7：各サービス詳細リンク */}
        <section>
          <h2 className="text-[20px] font-[700] text-[#2D5016] mb-4 pb-2 border-b-2 border-[#2D5016]">
            各サービスの詳細・評判記事
          </h2>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-white rounded-[12px] p-5" style={{ border: "0.5px solid #D3D1C7" }}>
              <p className="font-[700] text-[#2D5016] mb-3">サマリーポケット</p>
              <div className="space-y-2">
                <Link href="/detail/summary-pocket" className="block text-[13px] text-[#2D5016] hover:underline">→ サマリーポケットの詳細ページ</Link>
                <Link href="/guide/summary-pocket-review" className="block text-[13px] text-[#2D5016] hover:underline">→ サマリーポケットの評判・口コミ記事</Link>
              </div>
            </div>
            <div className="bg-white rounded-[12px] p-5" style={{ border: "0.5px solid #D3D1C7" }}>
              <p className="font-[700] text-[#2D5016] mb-3">minikura</p>
              <div className="space-y-2">
                <Link href="/detail/minikura" className="block text-[13px] text-[#2D5016] hover:underline">→ minikuraの詳細ページ</Link>
                <Link href="/guide/minikura-review" className="block text-[13px] text-[#2D5016] hover:underline">→ minikuraの評判・口コミ記事</Link>
              </div>
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
              { title: "サマリーポケットの評判・口コミ詳細", href: "/guide/summary-pocket-review" },
              { title: "minikuraの評判・口コミ詳細", href: "/guide/minikura-review" },
              { title: "宅配収納おすすめランキング9選", href: "/compare/ranking" },
              { title: "サマリーポケット vs AZUKEL 料金比較", href: "/compare/summary-pocket-vs-azukel" },
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
