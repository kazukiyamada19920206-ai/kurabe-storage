import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import pricing from "../../../pricing.json";

export const metadata: Metadata = {
  title: "宅配収納の月額相場はいくら？9社の料金を総費用で徹底比較【2026年最新】",
  description: "宅配収納サービスの月額相場は220円〜880円。しかし月額だけで選ぶと損するケースも。9社の料金を総費用ベースで比較し、失敗しない選び方を解説します。",
};

type PricingItem = {
  name: string;
  slug: string;
  monthly_per_box: number;
  initial_fee: number;
  retrieval_fee: number;
};

export default function MonthlyFeeComparisonPage() {
  const services = (pricing as PricingItem[]).slice().sort((a, b) => a.monthly_per_box - b.monthly_per_box);

  return (
    <main className="min-h-screen bg-[#F5F0E8]">
      {/* ヘッダー */}
      <header className="bg-white border-b border-gray-200 py-4">
        <div className="mx-auto max-w-6xl px-6">
          <Link href="/" className="flex items-center gap-2 w-fit">
            <div className="w-6 h-6 bg-[#2D5016] rounded-full" />
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
            <span>宅配収納の月額相場</span>
          </nav>
          <div className="flex items-center gap-2 mb-3">
            <span className="text-sm font-[600] text-[#C4620A]">料金ガイド</span>
          </div>
          <h1 className="text-[26px] font-[700] text-[#2D5016] leading-[1.4] mb-3">
            宅配収納の月額相場はいくら？<br />9社の料金を総費用で徹底比較
          </h1>
          <p className="text-[14px] text-[#5F5E5A] leading-[2.0] mb-4">
            「宅配収納の月額っていくらが普通？」「安いサービスを選べば間違いない？」そんな疑問に答えるため、9社の月額料金を一覧化し、さらに総費用ベースで比較しました。月額だけで選ぶと損するケースについても詳しく解説します。
          </p>
          <p className="text-[12px] text-[#888780]">2026年6月更新</p>
        </div>
      </div>

      {/* ヒーロー画像 */}
      <div className="mx-auto max-w-3xl px-6 pt-8">
        <div className="rounded-[12px] overflow-hidden">
          <Image
            src="/images/guide/monthly-fee-hero.png"
            alt="宅配収納の料金比較イメージ"
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
            結論：月額相場は220円〜880円。ただし総費用で見ないと損する
          </h2>
          <div className="bg-white rounded-[12px] p-6 mb-4" style={{ border: "0.5px solid #D3D1C7" }}>
            <p className="text-[14px] text-[#2C2C2A] leading-[2.0]">
              宅配収納サービスの月額料金は、1箱あたり<strong className="text-[#2D5016]">220円〜880円</strong>が相場です。最安はAZUKEL（220円〜）、最も高めなのはエアトランクのスペース単位プラン（月額8,800円〜）です。ただし<strong className="text-[#2D5016]">「月額が安い＝総費用が安い」ではありません</strong>。取り出し送料・初期費用・最低利用期間を含めた総費用で比較することが重要です。
            </p>
          </div>
        </section>

        {/* ② 月額料金一覧表 */}
        <section>
          <h2 className="text-[20px] font-[700] text-[#2D5016] mb-4 pb-2 border-b-2 border-[#2D5016]">
            9社の月額料金一覧表
          </h2>
          <div className="overflow-x-auto">
            <table className="w-full text-[13px]" style={{ borderCollapse: "collapse" }}>
              <thead>
                <tr>
                  {["サービス", "月額（1箱）", "初期費用", "取り出し送料"].map((h) => (
                    <th key={h} className="py-3 px-3 text-center text-white font-bold" style={{ background: "#2D5016", border: "0.5px solid #D3D1C7" }}>{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {services.map((s, i) => (
                  <tr key={s.slug} style={{ background: i % 2 === 1 ? "#F5F0E8" : "white" }}>
                    <td className="py-3 px-3 font-medium text-[#2C2C2A]" style={{ border: "0.5px solid #D3D1C7" }}>{s.name}</td>
                    <td className="py-3 px-3 text-center font-[700] text-[#2D5016]" style={{ border: "0.5px solid #D3D1C7" }}>¥{s.monthly_per_box.toLocaleString()}</td>
                    <td className="py-3 px-3 text-center text-[#2C2C2A]" style={{ border: "0.5px solid #D3D1C7" }}>{s.initial_fee === 0 ? "無料" : `¥${s.initial_fee.toLocaleString()}`}</td>
                    <td className="py-3 px-3 text-center text-[#2C2C2A]" style={{ border: "0.5px solid #D3D1C7" }}>{s.retrieval_fee === 0 ? "無料" : `¥${s.retrieval_fee.toLocaleString()}`}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* ③ 月額だけで選ぶと危険な理由 */}
        <section>
          <h2 className="text-[20px] font-[700] text-[#2D5016] mb-4 pb-2 border-b-2 border-[#2D5016]">
            「月額が安い」だけで選ぶと危険な理由
          </h2>
          <div className="space-y-3">
            {[
              {
                title: "取り出し送料が見落とされがち",
                body: "月額が最安でも、取り出し送料が1,000円以上かかるサービスがあります。年に2〜3回取り出す場合、月額の差より取り出し送料の差の方が総費用に大きく影響します。",
                color: "#2D5016",
              },
              {
                title: "最低利用期間内の早期解約で違約金が発生する",
                body: "サービスによっては最低利用期間（5〜6ヶ月程度）が設定されており、それより早く全ての荷物を取り出すと早期解約料がかかります。月額が安いサービスほどこの設定がある傾向があります。",
                color: "#E8873A",
              },
              {
                title: "初期費用が「無料」でない場合がある",
                body: "多くのサービスは初回箱代が無料ですが、一部は1箱あたり数百円の初期費用がかかります。月額だけを見て「安い」と判断すると、初回にまとまった費用が発生して驚くことがあります。",
                color: "#E8873A",
              },
            ].map((item) => (
              <div key={item.title} className="bg-white rounded-[12px] p-6" style={{ border: "0.5px solid #D3D1C7", borderLeft: `4px solid ${item.color}` }}>
                <p className="font-[700] text-[#2C2C2A] mb-2">{item.title}</p>
                <p className="text-[14px] text-[#5F5E5A] leading-[2.0]">{item.body}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ④ 月額以外にかかる費用 */}
        <section>
          <h2 className="text-[20px] font-[700] text-[#2D5016] mb-4 pb-2 border-b-2 border-[#2D5016]">
            月額以外にかかる費用の全項目
          </h2>
          <p className="text-[14px] text-[#5F5E5A] mb-4 leading-[2.0]">宅配収納の総費用を正確に把握するには、以下5つの費用項目を確認する必要があります。</p>
          <div className="overflow-x-auto">
            <table className="w-full text-[13px]" style={{ borderCollapse: "collapse" }}>
              <thead>
                <tr>
                  {["費用項目", "相場", "発生タイミング"].map((h) => (
                    <th key={h} className="py-3 px-3 text-left text-white font-bold" style={{ background: "#2D5016", border: "0.5px solid #D3D1C7" }}>{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {[
                  ["月額保管料", "220円〜880円/箱", "預けている間毎月"],
                  ["初期費用（箱代）", "無料〜550円/箱", "申し込み時"],
                  ["取り出し送料", "無料〜1,500円/回", "取り出し依頼ごと"],
                  ["早期解約料", "無料〜数千円", "最低利用期間内に解約時"],
                  ["クリーニング費用", "990円〜/点", "オプション利用時のみ"],
                ].map(([label, price, timing], i) => (
                  <tr key={label} style={{ background: i % 2 === 1 ? "#F5F0E8" : "white" }}>
                    <td className="py-3 px-3 font-medium text-[#2C2C2A]" style={{ border: "0.5px solid #D3D1C7" }}>{label}</td>
                    <td className="py-3 px-3 text-[#2D5016] font-[600]" style={{ border: "0.5px solid #D3D1C7" }}>{price}</td>
                    <td className="py-3 px-3 text-[#888780]" style={{ border: "0.5px solid #D3D1C7" }}>{timing}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="mt-4 bg-[#F5F0E8] rounded-[10px] p-4" style={{ border: "0.5px solid #D3D1C7" }}>
            <p className="text-[13px] text-[#5F5E5A] leading-[1.8]">
              💡 <strong>ポイント：</strong>クリーニング費用はオプションなので必須ではありませんが、サマリーポケットなど対応サービスを選べば、衣替えと同時に依頼できて効率的です。
            </p>
          </div>
        </section>

        {/* ⑤ 総費用シミュレーション */}
        <section>
          <h2 className="text-[20px] font-[700] text-[#2D5016] mb-2 pb-2 border-b-2 border-[#2D5016]">
            利用期間別 総費用シミュレーション
          </h2>
          <p className="text-[13px] text-[#888780] mb-4">条件：3箱・取り出し1回の場合</p>
          <div className="rounded-[12px] overflow-hidden mb-6">
            <Image
              src="/images/guide/monthly-fee-simulation.png"
              alt="総費用シミュレーションのイメージ"
              width={800}
              height={450}
              className="w-full h-auto"
            />
          </div>
          {[
            { label: "短期（3ヶ月）", months: 3 },
            { label: "中期（6ヶ月）", months: 6 },
            { label: "長期（12ヶ月）", months: 12 },
          ].map(({ label, months }) => (
            <div key={label} className="mb-5">
              <p className="text-[14px] font-[700] text-[#2D5016] mb-2">{label}</p>
              <div className="overflow-x-auto">
                <table className="w-full text-[12px]" style={{ borderCollapse: "collapse" }}>
                  <thead>
                    <tr>
                      {["サービス", "総費用"].map((h) => (
                        <th key={h} className="py-2 px-3 text-center text-white font-bold" style={{ background: "#2D5016", border: "0.5px solid #D3D1C7" }}>{h}</th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {services
                      .map((s) => ({
                        ...s,
                        total: s.monthly_per_box * 3 * months + s.initial_fee * 3 + s.retrieval_fee,
                      }))
                      .sort((a, b) => a.total - b.total)
                      .slice(0, 5)
                      .map((s, i) => (
                        <tr key={s.slug} style={{ background: i % 2 === 1 ? "#F5F0E8" : "white" }}>
                          <td className="py-2 px-3 font-medium text-[#2C2C2A]" style={{ border: "0.5px solid #D3D1C7" }}>{s.name}</td>
                          <td className="py-2 px-3 text-center font-[700] text-[#2D5016]" style={{ border: "0.5px solid #D3D1C7" }}>¥{s.total.toLocaleString()}</td>
                        </tr>
                      ))}
                  </tbody>
                </table>
              </div>
            </div>
          ))}
          <div className="bg-[#F5F0E8] rounded-[10px] p-4" style={{ border: "0.5px solid #D3D1C7" }}>
            <p className="text-[13px] text-[#5F5E5A] leading-[1.8]">
              💡 <strong>ポイント：</strong>期間が長くなるほど月額の安さが効いてきます。3ヶ月程度の短期利用なら初期費用・取り出し送料の安さを重視し、12ヶ月以上の長期利用なら月額の安さを最優先しましょう。
            </p>
          </div>
        </section>

        {/* ⑥ 失敗しない料金の見方 */}
        <section>
          <h2 className="text-[20px] font-[700] text-[#2D5016] mb-4 pb-2 border-b-2 border-[#2D5016]">
            失敗しない料金の見方｜チェックすべき4項目
          </h2>
          <div className="space-y-4">
            {[
              { point: "① 自分の利用期間を先に決める", body: "3ヶ月の短期利用か、1年以上の長期利用かで最適なサービスが変わります。利用期間を決めてから料金を比較しましょう。" },
              { point: "② 取り出し回数を予想する", body: "年に何回取り出す予定かを考えましょう。1回も取り出さない想定なら月額重視、複数回取り出す予定なら取り出し送料も含めて計算しましょう。" },
              { point: "③ 最低利用期間を確認する", body: "「お得そう」に見えるサービスほど最低利用期間が長い傾向があります。短期利用を考えている方は必ず確認してください。" },
              { point: "④ 公式サイトの「月額」表記の単位を確認する", body: "「月額」が1箱あたりなのか、複数箱セットなのかでサービスごとに表記が異なります。比較する際は1箱あたりの金額に統一して見ましょう。" },
            ].map((item) => (
              <div key={item.point} className="bg-white rounded-[12px] p-6" style={{ border: "0.5px solid #D3D1C7" }}>
                <p className="font-[700] text-[#2C2C2A] mb-2">{item.point}</p>
                <p className="text-[14px] text-[#5F5E5A] leading-[2.0]">{item.body}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ⑦ 失敗した人のリアルな声 */}
        <section>
          <h2 className="text-[20px] font-[700] text-[#2D5016] mb-4 pb-2 border-b-2 border-[#2D5016]">
            料金で失敗した人のリアルな声
          </h2>
          <p className="text-[13px] text-[#5F5E5A] mb-4 leading-[1.8]">実際のユーザーの声は以下のサイトで確認できます。</p>
          <div className="space-y-3">
            {[
              { name: "みん評（口コミサイト）", desc: "宅配収納サービスの実際の口コミ・評判が多数掲載されています。", url: "https://minhyo.jp/" },
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

        {/* ⑧ 用途別おすすめ */}
        <section>
          <h2 className="text-[20px] font-[700] text-[#2D5016] mb-4 pb-2 border-b-2 border-[#2D5016]">
            用途別おすすめサービス
          </h2>
          <div className="space-y-4">
            {[
              { tag: "とにかく安く始めたい方", name: "AZUKEL", reason: "月額220円〜と業界最安クラス。短期利用にも向いています。", slug: "azukel" },
              { tag: "取り出し頻度が高い方", name: "カラエト", reason: "年4回まで取り出し送料無料。頻繁に出し入れする方に最適。", slug: "caraeto" },
              { tag: "長期保管を考えている方", name: "minikura", reason: "13ヶ月目以降に自動で割引が適用され、長期ほどお得になります。", slug: "minikura" },
            ].map((item) => (
              <div key={item.slug} className="bg-white rounded-[12px] p-5" style={{ border: "0.5px solid #D3D1C7" }}>
                <p className="text-[12px] text-[#E8873A] font-[600] mb-1">{item.tag}</p>
                <p className="font-[700] text-[#2C2C2A] text-[15px] mb-2">{item.name}</p>
                <p className="text-[13px] text-[#5F5E5A] leading-[1.8] mb-2">{item.reason}</p>
                <Link href={`/guide/${item.slug}-review`} className="text-[13px] text-[#E8873A] hover:underline">
                  → {item.name}の詳細・評判を見る
                </Link>
              </div>
            ))}
          </div>
        </section>

        {/* ⑨ FAQ */}
        <section>
          <h2 className="text-[20px] font-[700] text-[#2D5016] mb-4 pb-2 border-b-2 border-[#2D5016]">
            よくある質問
          </h2>
          <div className="space-y-4">
            {[
              { q: "月額料金は箱数が増えると割引されますか？", a: "サービスによります。多くのサービスは箱数に応じた割引はなく、1箱あたりの料金がそのまま積算されます。一部サービスでは複数箱のセット割引が用意されている場合もあるため、公式サイトで確認してください。" },
              { q: "月額料金はいつから発生しますか？", a: "荷物を発送した日、または倉庫に到着した日から発生するサービスが一般的です。申し込んだだけでは料金は発生しません。" },
              { q: "解約するとお金は返ってきますか？", a: "前払いの場合、未使用期間分が返金されるサービスとされないサービスがあります。最低利用期間内の解約は早期解約料が発生することもあるため、契約前に解約条件を確認しましょう。" },
              { q: "一番総費用が安いサービスはどこですか？", a: "利用期間・取り出し回数によって変わります。短期・取り出し少なめならAZUKEL、長期保管ならminikura、取り出し頻度が高いならカラエトが有利な傾向です。詳細は本記事のシミュレーション表をご参照ください。" },
            ].map((item) => (
              <div key={item.q} className="bg-white rounded-[12px] p-6" style={{ border: "0.5px solid #D3D1C7" }}>
                <p className="font-[700] text-[#2C2C2A] mb-2 text-[14px]">Q. {item.q}</p>
                <p className="text-[14px] text-[#5F5E5A] leading-[2.0]">A. {item.a}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ⑩ 関連記事・CTA */}
        <section>
          <h2 className="text-[20px] font-[700] text-[#2D5016] mb-4 pb-2 border-b-2 border-[#2D5016]">
            関連記事
          </h2>
          <div className="grid md:grid-cols-2 gap-3">
            {[
              { title: "宅配収納サービス比較ランキング", href: "/compare/ranking" },
              { title: "サマリーポケット vs minikura 比較", href: "/compare/summary-pocket-vs-minikura" },
              { title: "宅配型トランクルームとは？仕組みとメリットを解説", href: "/guide/what-is-takuhai-storage" },
              { title: "一人暮らしで収納が足りない時の解決策", href: "/guide/hitoriguashi-storage" },
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

        {/* CTA */}
        <div className="bg-[#2D5016] rounded-[12px] px-8 py-10 text-center">
          <p className="text-white text-[17px] font-[700] mb-2">
            あなたに最適なサービスを3秒で診断
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
