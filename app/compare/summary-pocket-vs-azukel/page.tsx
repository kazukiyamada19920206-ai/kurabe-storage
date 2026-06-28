import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "サマリーポケット vs AZUKEL｜料金・機能の徹底比較",
  description:
    "サマリーポケットとAZUKELを月額・取り出し送料・クリーニング・知名度など全項目で徹底比較。料金シミュレーション付き。どちらがあなたに合うか3分でわかります。",
};

const patterns = [
  {
    label: "1箱・3ヶ月・取り出し1回",
    summaryMonthly: 330,
    azukelMonthly: 220,
    boxes: 1,
    months: 3,
    summaryShipping: 1100,
    azukelShipping: 1100,
  },
  {
    label: "3箱・6ヶ月・取り出し1回",
    summaryMonthly: 330,
    azukelMonthly: 220,
    boxes: 3,
    months: 6,
    summaryShipping: 1100,
    azukelShipping: 1100,
  },
  {
    label: "5箱・6ヶ月・取り出し2回",
    summaryMonthly: 330,
    azukelMonthly: 220,
    boxes: 5,
    months: 6,
    summaryShipping: 1100 * 2,
    azukelShipping: 1100 * 2,
  },
  {
    label: "5箱・12ヶ月・取り出し2回",
    summaryMonthly: 330,
    azukelMonthly: 220,
    boxes: 5,
    months: 12,
    summaryShipping: 1100 * 2,
    azukelShipping: 1100 * 2,
  },
];

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
            <span>サマリーポケット vs AZUKEL</span>
          </nav>
          <div className="flex items-center gap-2 mb-3">
            <span className="text-sm font-[600] text-[#C4620A]">比較記事</span>
          </div>
          <h1 className="text-[26px] font-[700] text-[#2D5016] leading-[1.4] mb-3">
            サマリーポケット vs AZUKEL<br />月額110円差の実態｜どっちがお得？【2026年最新】
          </h1>
          <p className="text-[13px] text-[#5F5E5A] leading-[1.8] mb-3">
            「月額が安いAZUKELとサマリーポケット、どちらが本当にお得？」という疑問に答えます。月額だけでなく取り出し送料・機能・クリーニングの有無など全項目を比較しました。
          </p>
          <p className="text-[12px] text-[#888780]">2026年6月更新</p>
        </div>
      </div>

      <div className="mx-auto max-w-3xl px-6 py-10 space-y-12">

        {/* 比較サマリー表 */}
        <section>
          <h2 className="text-[20px] font-[700] text-[#2D5016] mb-4 pb-2 border-b-2 border-[#2D5016]">
            サマリーポケット vs AZUKEL：一目でわかる比較表
          </h2>
          <div className="overflow-x-auto">
            <table className="w-full text-[13px]" style={{ borderCollapse: "collapse" }}>
              <thead>
                <tr>
                  <th className="py-3 px-4 text-left text-white font-bold" style={{ background: "#2D5016", border: "0.5px solid #D3D1C7" }}>比較項目</th>
                  <th className="py-3 px-4 text-center text-white font-bold" style={{ background: "#2D5016", border: "0.5px solid #D3D1C7" }}>サマリーポケット</th>
                  <th className="py-3 px-4 text-center text-white font-bold" style={{ background: "#2D5016", border: "0.5px solid #D3D1C7" }}>AZUKEL</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ["月額（1箱）", "330円", "220円 ★安い"],
                  ["取り出し送料", "1,100円", "1,100円（同じ）"],
                  ["取り出し日数", "最短翌日", "最短翌日"],
                  ["初期費用", "無料", "無料"],
                  ["最低利用期間", "1ヶ月〜", "1ヶ月〜"],
                  ["運営会社", "サマリー株式会社", "株式会社日本パープル（1972年創業）"],
                  ["保管環境", "三菱倉庫", "自社倉庫（温度25℃以下・湿度65%以下）"],
                  ["クリーニング", "あり ★", "なし"],
                  ["大型家具・家電", "あり（スーツケース・ゴルフ等）★", "あり ★"],
                  ["写真で中身確認", "あり", "あり（1点ずつ）"],
                  ["ブランド査定・買取", "あり ★", "なし"],
                  ["知名度・安心感", "テレビCM有・業界最大手 ★", "やや低い"],
                  ["アイテム単位取り出し", "あり", "あり"],
                  ["全国対応", "あり", "あり"],
                ].map(([item, summary, azukel], i) => (
                  <tr key={item} style={{ background: i % 2 === 1 ? "#F5F0E8" : "white" }}>
                    <td className="py-3 px-4 font-medium text-[#2C2C2A]" style={{ border: "0.5px solid #D3D1C7" }}>{item}</td>
                    <td className="py-3 px-4 text-center text-[#2C2C2A]" style={{ border: "0.5px solid #D3D1C7" }}>{summary}</td>
                    <td className="py-3 px-4 text-center text-[#2C2C2A]" style={{ border: "0.5px solid #D3D1C7" }}>{azukel}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-[12px] text-[#888780] mt-2">★ は各項目で優れている点</p>
        </section>

        {/* 結論 */}
        <section>
          <h2 className="text-[20px] font-[700] text-[#2D5016] mb-4 pb-2 border-b-2 border-[#2D5016]">
            結論：どちらを選ぶべきか
          </h2>
          <div className="space-y-4">
            <div className="bg-white rounded-[12px] p-5" style={{ border: "1px solid #2D5016" }}>
              <p className="font-[700] text-[#2D5016] mb-2">✓ サマリーポケットが向いている人</p>
              <ul className="text-[13px] text-[#2C2C2A] leading-[2] space-y-1">
                <li>・初めて宅配収納を使う方（知名度・サポートが安心）</li>
                <li>・衣類をクリーニングしながら保管したい方</li>
                <li>・ブランドバッグ・衣類の査定・買取もしたい方</li>
                <li>・大手サービスの信頼性を重視したい方</li>
              </ul>
            </div>
            <div className="bg-white rounded-[12px] p-5" style={{ border: "1px solid #E8873A" }}>
              <p className="font-[700] text-[#E8873A] mb-2">✓ AZUKELが向いている人</p>
              <ul className="text-[13px] text-[#2C2C2A] leading-[2] space-y-1">
                <li>・月額料金をとにかく安く抑えたい方</li>
                <li>・クリーニングは不要で純粋に保管したい方</li>
                <li>・短期〜中期（1〜12ヶ月）の保管を検討している方</li>
                <li>・セキュリティ企業の高品質な保管環境を重視したい方</li>
              </ul>
            </div>
          </div>
        </section>

        {/* 料金差の真実 */}
        <section>
          <h2 className="text-[20px] font-[700] text-[#2D5016] mb-4 pb-2 border-b-2 border-[#2D5016]">
            月額110円差の実態：取り出し送料が同じなので純粋に差額が出る
          </h2>
          <div className="bg-white rounded-[12px] p-5 mb-4" style={{ border: "0.5px solid #D3D1C7" }}>
            <p className="text-[13px] text-[#5F5E5A] leading-[1.9]">
              サマリーポケットとAZUKELの最大の違いは<strong className="text-[#2D5016]">月額料金（330円 vs 220円）</strong>です。取り出し送料は両方1,100円で同じため、AZUKELの方が箱数・期間に比例してそのまま安くなります。1箱を6ヶ月預ける場合、月額差だけで660円安くなります。10箱を12ヶ月預けると月額差だけで<strong className="text-[#E8873A]">13,200円</strong>の差になります。
            </p>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-[13px]" style={{ borderCollapse: "collapse" }}>
              <thead>
                <tr>
                  <th className="py-3 px-4 text-left text-white font-bold" style={{ background: "#2D5016", border: "0.5px solid #D3D1C7" }}>箱数×期間</th>
                  <th className="py-3 px-4 text-center text-white font-bold" style={{ background: "#2D5016", border: "0.5px solid #D3D1C7" }}>月額の差額合計</th>
                  <th className="py-3 px-4 text-center text-white font-bold" style={{ background: "#2D5016", border: "0.5px solid #D3D1C7" }}>どちらが安い</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { label: "1箱・6ヶ月", diff: 660 },
                  { label: "3箱・6ヶ月", diff: 1980 },
                  { label: "5箱・12ヶ月", diff: 6600 },
                  { label: "10箱・12ヶ月", diff: 13200 },
                ].map(({ label, diff }, i) => (
                  <tr key={label} style={{ background: i % 2 === 1 ? "#F5F0E8" : "white" }}>
                    <td className="py-3 px-4 font-medium text-[#2C2C2A]" style={{ border: "0.5px solid #D3D1C7" }}>{label}</td>
                    <td className="py-3 px-4 text-center font-[600] text-[#E8873A]" style={{ border: "0.5px solid #D3D1C7" }}>¥{diff.toLocaleString()} 安い</td>
                    <td className="py-3 px-4 text-center font-[600] text-[#2D5016]" style={{ border: "0.5px solid #D3D1C7" }}>AZUKEL</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-[12px] text-[#888780] mt-2">※取り出し送料は両サービスとも1,100円で同額のため、月額差のみで算出</p>
        </section>

        {/* 料金シミュレーション */}
        <section>
          <h2 className="text-[20px] font-[700] text-[#2D5016] mb-2 pb-2 border-b-2 border-[#2D5016]">
            総費用シミュレーション（取り出し送料込み）
          </h2>
          <p className="text-[13px] text-[#5F5E5A] mb-6">月額料金＋取り出し送料を含めたトータルコストで比較しました。</p>
          <div className="space-y-6">
            {patterns.map((p) => {
              const summaryTotal = p.summaryMonthly * p.boxes * p.months + p.summaryShipping;
              const azukelTotal = p.azukelMonthly * p.boxes * p.months + p.azukelShipping;
              const diff = Math.abs(summaryTotal - azukelTotal);
              const azukelCheaper = azukelTotal < summaryTotal;
              return (
                <div key={p.label}>
                  <p className="text-[13px] font-[600] text-[#2C2C2A] mb-3">{p.label}</p>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="bg-white rounded-[12px] p-5" style={{ border: "0.5px solid #D3D1C7" }}>
                      <p className="text-[13px] font-[600] text-[#2C2C2A] mb-1">サマリーポケット</p>
                      <p className="text-[11px] text-[#888780] mb-2">月額{p.summaryMonthly}円×{p.boxes}箱×{p.months}ヶ月＋送料{p.summaryShipping.toLocaleString()}円</p>
                      <p className="text-[28px] font-[700] text-[#2D5016]">¥{summaryTotal.toLocaleString()}</p>
                    </div>
                    <div className="bg-white rounded-[12px] p-5 relative" style={{ border: azukelCheaper ? "1px solid #E8873A" : "0.5px solid #D3D1C7" }}>
                      {azukelCheaper && (
                        <span className="absolute top-3 right-3 bg-[#E8873A] text-white text-[11px] font-[700] px-2 py-0.5 rounded-[6px]">お得</span>
                      )}
                      <p className="text-[13px] font-[600] text-[#2C2C2A] mb-1">AZUKEL</p>
                      <p className="text-[11px] text-[#888780] mb-2">月額{p.azukelMonthly}円×{p.boxes}箱×{p.months}ヶ月＋送料{p.azukelShipping.toLocaleString()}円</p>
                      <p className="text-[28px] font-[700] text-[#2D5016]">¥{azukelTotal.toLocaleString()}</p>
                      {azukelCheaper && (
                        <p className="text-[12px] text-[#E8873A] font-[600] mt-1">¥{diff.toLocaleString()} お得</p>
                      )}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
          <div className="bg-[#F5F0E8] rounded-[10px] p-4 mt-4" style={{ border: "0.5px solid #D3D1C7" }}>
            <p className="text-[12px] text-[#5F5E5A] leading-[1.8]">
              💡 <strong>ポイント：</strong>取り出し送料が同額（1,100円）のため、全パターンでAZUKELの方が安くなります。「クリーニングは不要・とにかく安く預けたい」ならAZUKEL一択です。
            </p>
          </div>
        </section>

        {/* クリーニングの有無が最大の分岐点 */}
        <section>
          <h2 className="text-[20px] font-[700] text-[#2D5016] mb-4 pb-2 border-b-2 border-[#2D5016]">
            クリーニングの有無が選択の最大の分岐点
          </h2>
          <div className="bg-white rounded-[12px] p-5 mb-4" style={{ border: "0.5px solid #D3D1C7" }}>
            <p className="text-[13px] text-[#5F5E5A] leading-[1.9]">
              コスト面ではAZUKELが圧勝ですが、<strong className="text-[#2D5016]">サマリーポケットにはAZUKELにないクリーニングオプション</strong>があります。衣替えのタイミングで衣類を預け、倉庫からそのままクリーニングに出して戻してもらえます。クリーニング店への持ち込み・受け取りの手間がなくなるため、衣類メンテナンスを重視する方にはサマリーポケットの方が価値があります。「衣類のクリーニングは自分でやる」「純粋に保管だけ」という方にはAZUKELで十分です。
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-white rounded-[12px] p-4" style={{ border: "0.5px solid #D3D1C7" }}>
              <p className="font-[700] text-[#2D5016] mb-2 text-[13px]">サマリーポケットのクリーニング</p>
              <ul className="text-[12px] text-[#5F5E5A] leading-[2] space-y-1">
                <li>✓ 保管中の衣類をそのままクリーニングに出せる</li>
                <li>✓ 衣類の種類に合わせた専門クリーニング</li>
                <li>✓ 返却時は綺麗な状態で戻ってくる</li>
                <li>✓ クリーニング料金は別途発生</li>
              </ul>
            </div>
            <div className="bg-white rounded-[12px] p-4" style={{ border: "0.5px solid #D3D1C7" }}>
              <p className="font-[700] text-[#888780] mb-2 text-[13px]">AZUKELにはクリーニングなし</p>
              <ul className="text-[12px] text-[#5F5E5A] leading-[2] space-y-1">
                <li>△ クリーニングオプション非対応</li>
                <li>✓ その分、月額料金が安い</li>
                <li>✓ 衣類以外（家具・家電）の保管は得意</li>
                <li>✓ 保管だけならAZUKELで十分</li>
              </ul>
            </div>
          </div>
        </section>

        {/* 運営会社・保管品質 */}
        <section>
          <h2 className="text-[20px] font-[700] text-[#2D5016] mb-4 pb-2 border-b-2 border-[#2D5016]">
            運営会社・保管品質の違い
          </h2>
          <div className="space-y-4">
            <div className="bg-white rounded-[12px] p-5" style={{ border: "0.5px solid #D3D1C7" }}>
              <p className="font-[700] text-[#2D5016] mb-2">サマリーポケット：サマリー株式会社</p>
              <p className="text-[13px] text-[#5F5E5A] leading-[1.8]">
                テレビCMでおなじみの国内最大手の宅配収納サービス。三菱倉庫での保管のため信頼性が高く、知名度・ブランド力はNo.1。初めての方向けサポートも充実しており、ブランド査定・買取サービスとの連携も可能。
              </p>
            </div>
            <div className="bg-white rounded-[12px] p-5" style={{ border: "0.5px solid #D3D1C7" }}>
              <p className="font-[700] text-[#2D5016] mb-2">AZUKEL：株式会社日本パープル（1972年創業）</p>
              <p className="text-[13px] text-[#5F5E5A] leading-[1.8]">
                官公庁・大手企業の機密文書保管を手がける老舗セキュリティ企業が運営。自社保管施設で温度25℃以下・湿度65%以下を365日24時間維持。外部委託なしの高品質な環境がサマリーポケットを上回る面もある。2018年「使いやすさ満足度No.1」受賞（日本マーケティングリサーチ機構調査）。
              </p>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section>
          <h2 className="text-[20px] font-[700] text-[#2D5016] mb-4 pb-2 border-b-2 border-[#2D5016]">
            よくある質問
          </h2>
          <div className="space-y-4">
            {[
              {
                q: "サマリーポケットとAZUKELの一番の違いは何ですか？",
                a: "最大の違いはクリーニングオプションの有無です。サマリーポケットは預けた衣類をそのままクリーニングに出せますが、AZUKELにはこの機能がありません。料金面ではAZUKELが月額110円安く、箱数・期間が多いほど差が開きます。取り出し送料は両方1,100円で同じです。",
              },
              {
                q: "AZUKELはサマリーポケットよりどれくらい安いですか？",
                a: "月額は1箱あたり110円安くなります。取り出し送料は同じ1,100円です。例えば5箱を12ヶ月預ける場合、月額だけで6,600円安くなります。箱数・期間が多いほど節約額は大きくなります。",
              },
              {
                q: "AZUKELの保管品質は信頼できますか？",
                a: "十分に信頼できます。1972年創業の老舗セキュリティ企業・株式会社日本パープルが自社倉庫で直接運営しており、温度25℃以下・湿度65%以下を365日24時間維持しています。官公庁や大手企業の機密文書保管も手がけており、セキュリティ面ではむしろ業界トップクラスです。",
              },
              {
                q: "どちらが初心者に向いていますか？",
                a: "初心者にはサマリーポケットをおすすめします。テレビCMでおなじみの知名度があり、サポートが手厚く、初めての方でも安心して使えます。「とにかく安く保管したい」という場合はAZUKELでも十分なサポートを受けられます。",
              },
              {
                q: "大型家具・家電を預けたい場合はどちらがいいですか？",
                a: "どちらも大型家具・家電に対応していますが、AZUKELはスタッフが自宅まで搬出・搬入してくれるサービスも提供しています。大型荷物の場合は事前に各サービスに確認することをおすすめします。",
              },
            ].map((item, i) => (
              <div key={i} className="bg-white rounded-[12px] p-5" style={{ border: "0.5px solid #D3D1C7" }}>
                <p className="font-[700] text-[#2C2C2A] mb-2">Q. {item.q}</p>
                <p className="text-[13px] text-[#5F5E5A] leading-[1.8]">A. {item.a}</p>
              </div>
            ))}
          </div>
        </section>

        {/* 各サービス詳細リンク */}
        <section>
          <h2 className="text-[20px] font-[700] text-[#2D5016] mb-4 pb-2 border-b-2 border-[#2D5016]">
            各サービスの詳細・評判記事
          </h2>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-white rounded-[12px] p-5" style={{ border: "0.5px solid #D3D1C7" }}>
              <p className="font-[700] text-[#2D5016] mb-3">サマリーポケット</p>
              <div className="space-y-2">
                <Link href="/detail/summary-pocket" className="block text-[13px] text-[#2D5016] hover:underline">→ サマリーポケットの詳細・料金シミュレーション</Link>
                <Link href="/guide/summary-pocket-review" className="block text-[13px] text-[#2D5016] hover:underline">→ サマリーポケットの評判・口コミ記事</Link>
              </div>
            </div>
            <div className="bg-white rounded-[12px] p-5" style={{ border: "0.5px solid #D3D1C7" }}>
              <p className="font-[700] text-[#2D5016] mb-3">AZUKEL</p>
              <div className="space-y-2">
                <Link href="/detail/azukel" className="block text-[13px] text-[#2D5016] hover:underline">→ AZUKELの詳細・料金シミュレーション</Link>
                <Link href="/guide/azukel-review" className="block text-[13px] text-[#2D5016] hover:underline">→ AZUKELの評判・口コミ記事</Link>
              </div>
            </div>
          </div>
        </section>

        {/* 関連比較 */}
        <section>
          <h2 className="text-[20px] font-[700] text-[#2D5016] mb-4 pb-2 border-b-2 border-[#2D5016]">
            他の比較記事
          </h2>
          <div className="space-y-3">
            <Link href="/compare/summary-pocket-vs-minikura" className="flex items-center gap-2 bg-white rounded-[12px] p-4 hover:bg-[#F5F0E8] transition" style={{ border: "0.5px solid #D3D1C7" }}>
              <span className="text-[13px] text-[#2D5016] font-[600]">→ サマリーポケット vs minikura 比較</span>
            </Link>
            <Link href="/compare/azukel-vs-minikura" className="flex items-center gap-2 bg-white rounded-[12px] p-4 hover:bg-[#F5F0E8] transition" style={{ border: "0.5px solid #D3D1C7" }}>
              <span className="text-[13px] text-[#2D5016] font-[600]">→ AZUKEL vs minikura 比較</span>
            </Link>
            <Link href="/compare/ranking" className="flex items-center gap-2 bg-white rounded-[12px] p-4 hover:bg-[#F5F0E8] transition" style={{ border: "0.5px solid #D3D1C7" }}>
              <span className="text-[13px] text-[#2D5016] font-[600]">→ 宅配収納サービス ランキング一覧</span>
            </Link>
          </div>
        </section>

        {/* 診断CTAバナー */}
        <div className="bg-[#2D5016] rounded-[12px] px-8 py-10 text-center">
          <p className="text-white text-[17px] font-[700] mb-2">
            あなたの条件で最安サービスを診断する
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
