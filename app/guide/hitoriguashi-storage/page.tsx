import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";

export const metadata: Metadata = {
  title: "一人暮らしで収納が足りない時の解決策【宅配収納活用法】2026年最新",
  description: "一人暮らしで収納スペースが足りない悩みを宅配収納で解決。月220円〜でクローゼットをスッキリさせる方法・おすすめサービス4選・料金比較を徹底解説。",
};

export default function HitoriguashiStoragePage() {
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
            <span>一人暮らしで収納が足りない時の解決策</span>
          </nav>
          <div className="flex items-center gap-2 mb-3">
            <span className="text-sm font-[600] text-[#C4620A]">一人暮らしガイド</span>
          </div>
          <h1 className="text-[26px] font-[700] text-[#2D5016] leading-[1.4] mb-3">
            一人暮らしで収納が足りない時の解決策<br />【宅配収納活用法】2026年最新
          </h1>
          <p className="text-[14px] text-[#5F5E5A] leading-[2.0] mb-4">
            「クローゼットがパンパンで衣替えができない」「収納グッズを買い足しても解決しない」「部屋が狭くて荷物の置き場がない」。一人暮らしの収納不足はよくある悩みです。この記事では、収納グッズに頼らずに月220円〜で根本的に解決できる宅配収納の活用法を徹底解説します。
          </p>
          <p className="text-[12px] text-[#888780]">2026年6月更新</p>
        </div>
      </div>

      {/* ヒーロー画像 */}
      <div className="mx-auto max-w-3xl px-6 pt-8">
        <div className="rounded-[12px] overflow-hidden">
          <Image
            src="/images/guide/hitoriguashi-storage-hero.png"
            alt="一人暮らしの収納不足を宅配収納で解決するイメージ"
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
            結論：一人暮らしの収納不足は「外に出す」で解決できる
          </h2>
          <div className="bg-white rounded-[12px] p-6 mb-4" style={{ border: "0.5px solid #D3D1C7" }}>
            <p className="text-[14px] text-[#2C2C2A] leading-[2.0]">
              一人暮らしの収納不足を解決する方法は大きく2つあります。①収納グッズを増やす、②今の部屋に入らないものを外に出す。収納グッズを増やす方法は一時的な解決にしかならず、グッズ自体がスペースを取るという悪循環に陥りがちです。根本的な解決は<strong className="text-[#2D5016]">「使わないものを外に出すこと」</strong>。宅配収納を使えば月220円〜で今すぐクローゼットを空けられます。
            </p>
          </div>
          <div className="space-y-3">
            {[
              {
                num: "1",
                title: "月220円〜でクローゼットが劇的にスッキリする",
                body: "シーズンオフの衣類・使わない趣味用品・季節家電を宅配収納に預けるだけで、クローゼットに「今使うものだけ」が残ります。収納グッズを買い足すより安く、部屋が広く感じられます。",
              },
              {
                num: "2",
                title: "捨てなくていい・判断しなくていい",
                body: "「捨てるか迷っているもの」を一度預けてみるという使い方もできます。見えないところに置くことで判断が冷静にでき、本当に必要なものが見えてきます。断捨離の第一歩として使う方も多いです。",
              },
              {
                num: "3",
                title: "必要になったらすぐ取り出せる安心感",
                body: "「捨てたら後悔するかも」という不安が断捨離を阻む大きな要因です。宅配収納なら最短翌日で手元に戻せるため、「いざとなれば取り出せる」という安心感を持って預けられます。",
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

        {/* ② 一人暮らしの収納あるある */}
        <section>
          <h2 className="text-[20px] font-[700] text-[#2D5016] mb-4 pb-2 border-b-2 border-[#2D5016]">
            一人暮らしの収納「あるある」悩みランキング
          </h2>
          <div className="space-y-3">
            {[
              {
                rank: "1位",
                title: "クローゼットがパンパンで衣替えができない",
                body: "「冬物をしまいたいのに夏物の場所がない」。ワンルーム・1Kのクローゼットは容量が限られており、4シーズン分の衣類を収めるのは至難の業です。シーズンオフの衣類を宅配収納に預けるだけで、クローゼットに余裕が生まれます。",
                color: "#2D5016",
              },
              {
                rank: "2位",
                title: "収納グッズを買い足すが根本解決にならない",
                body: "収納ボックス・突っ張り棒・ハンガーラックを買い足すほど部屋が狭くなる悪循環。収納グッズは「あるものを整理する」ためのものであり、「増えすぎたものを収める」解決策にはなりません。",
                color: "#2D5016",
              },
              {
                rank: "3位",
                title: "趣味用品・季節家電の置き場がない",
                body: "キャンプ用品・スポーツ用品・スキー板・扇風機・こたつなど、シーズンごとに使う大型アイテムの置き場に困るケースが多いです。使わない期間だけ宅配収納に預けると部屋が一気にスッキリします。",
                color: "#E8873A",
              },
              {
                rank: "4位",
                title: "「捨てられないもの」が積み上がっていく",
                body: "思い出の品・もらいもの・高価だったもの・いつか使うかもしれないもの。捨てられない理由はさまざまですが、宅配収納に預けることで「とりあえず手放す」一歩を踏み出せます。",
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
            一人暮らしで宅配収納に預けるべきもの一覧
          </h2>
          <div className="grid md:grid-cols-2 gap-4 mb-4">
            <div className="bg-white rounded-[12px] p-6" style={{ border: "1px solid #2D5016" }}>
              <p className="font-[700] text-[#2D5016] mb-3">✓ 特に効果的なもの</p>
              <ul className="space-y-2">
                {[
                  "シーズンオフの衣類（コート・ダウン・冬物）",
                  "使用頻度の低い趣味用品",
                  "季節家電（扇風機・ヒーター・加湿器）",
                  "キャンプ・スポーツ用品",
                  "使わない調理器具・食器",
                  "思い出の品・捨てられないもの",
                  "本・雑誌・コミック（大量の場合）",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2 text-[14px] text-[#2C2C2A] leading-[2.0]">
                    <span className="font-bold text-[#2D5016] flex-shrink-0">✓</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-white rounded-[12px] p-6" style={{ border: "0.5px solid #D3D1C7" }}>
              <p className="font-[700] text-[#888780] mb-3">△ 預ける前に検討が必要なもの</p>
              <ul className="space-y-2">
                {[
                  "毎日使うもの（取り出しコストがかかる）",
                  "高頻度で使う衣類（季節外れでないもの）",
                  "大型家具・家電（別サービスが必要）",
                  "貴重品・現金（保管不可のサービスが多い）",
                  "食品・飲料（腐敗の恐れ）",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2 text-[14px] text-[#2C2C2A] leading-[2.0]">
                    <span className="font-bold text-[#888780] flex-shrink-0">△</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="bg-[#F5F0E8] rounded-[10px] p-4" style={{ border: "0.5px solid #D3D1C7" }}>
            <p className="text-[13px] text-[#5F5E5A] leading-[1.8]">
              💡 <strong>効果的な使い方：</strong>「3ヶ月以上使っていないもの」を基準に預けるものを選ぶと迷いにくいです。季節家電・趣味用品は使う季節だけ手元に置き、オフシーズンは宅配収納に預けるサイクルを作ると部屋が常にスッキリした状態を保てます。
            </p>
          </div>
        </section>

        {/* ④ 失敗しない選び方 */}
        <section>
          <h2 className="text-[20px] font-[700] text-[#2D5016] mb-4 pb-2 border-b-2 border-[#2D5016]">
            一人暮らしが失敗しない宅配収納の選び方
          </h2>
          <div className="space-y-4">
            {[
              {
                point: "① 月額料金より「取り出し頻度」で選ぶ",
                body: "月額が安くても取り出し送料が高いと、頻繁に使うものを預けるとコストが膨らみます。年1〜2回しか取り出さないものを預けるなら月額重視（minikura・AZUKEL）、頻繁に出し入れするならカラエト（年4回取り出し無料）やエアトランク（取り出し無料）が向いています。",
                tag: "最重要",
                tagColor: "#2D5016",
              },
              {
                point: "② 預けるものに合ったボックスサイズを確認する",
                body: "コート・ダウンジャケット・布団はレギュラーボックスに入らない場合があります。ラージボックス対応のサービスか、スペース単位で預けられるサービスを選びましょう。サマリーポケットはラージボックス（月額605円〜）に対応しています。",
                tag: "重要",
                tagColor: "#E8873A",
              },
              {
                point: "③ アプリの使いやすさを確認する",
                body: "宅配収納はアプリで管理するサービスがほとんどです。スマホ操作が得意でない方はLINEで完結するAZUKEL、アプリの使いやすさを重視する方はサマリーポケット・minikuraがおすすめです。",
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
            一人暮らし向けおすすめサービス4選
          </h2>
          <div className="space-y-4">
            {[
              {
                rank: 1,
                name: "AZUKEL",
                tag: "一人暮らしの費用を抑えたい方に最適",
                monthly: "220円〜",
                retrieval: "1,100円",
                point: "業界最安クラスの月額220円〜。一人暮らしで収納費用を最小限に抑えたい方に最適。LINEで操作が完結するためアプリ不要。1972年創業のセキュリティ企業が運営する自社倉庫で安心して預けられます。",
                slug: "azukel",
              },
              {
                rank: 2,
                name: "カラエト",
                tag: "頻繁に出し入れする方・送料を節約したい方",
                monthly: "330円〜",
                retrieval: "年4回無料",
                point: "年4回まで取り出し送料が無料。衣替えで年2回取り出す方にとってはコスパが最も良いサービスです。写真でアイテム管理ができるため、何を預けたか一目でわかります。",
                slug: "caraeto",
              },
              {
                rank: 3,
                name: "サマリーポケット",
                tag: "クリーニングもまとめてしたい方",
                monthly: "330円〜",
                retrieval: "1,100円",
                point: "預けた衣類をそのままクリーニングに出せるオプション（990円〜）が充実。衣替えとクリーニングを同時に済ませたい一人暮らしの方に最適です。アプリが使いやすく初めての方にも安心。",
                slug: "summary-pocket",
              },
              {
                rank: 4,
                name: "minikura",
                tag: "本・CD・コミックが多い方",
                monthly: "275円〜",
                retrieval: "1,320円",
                point: "本・CD・コミック専用プランが充実。1冊単位での取り出しが可能で、大量の蔵書を持つ一人暮らしの方に特に向いています。月額275円〜と低コストで長期保管も安心。",
                slug: "minikura",
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
            一人暮らし向け料金シミュレーション
          </h2>
          <p className="text-[13px] text-[#888780] mb-4">条件：2箱・6ヶ月保管・年2回取り出しの場合</p>
          <div className="rounded-[12px] overflow-hidden mb-6">
            <Image
              src="/images/guide/hitoriguashi-storage-simulation.png"
              alt="一人暮らし向け宅配収納の料金シミュレーション"
              width={800}
              height={450}
              className="w-full h-auto"
            />
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-[13px]" style={{ borderCollapse: "collapse" }}>
              <thead>
                <tr>
                  {["サービス", "月額×2箱×6ヶ月", "取り出し送料×2回", "年間総費用"].map((h) => (
                    <th key={h} className="py-3 px-4 text-center text-white font-bold" style={{ background: "#2D5016", border: "0.5px solid #D3D1C7" }}>{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {[
                  { name: "AZUKEL", monthly: 220, retrieval: 1100 },
                  { name: "カラエト", monthly: 330, retrieval: 0, note: "年4回無料" },
                  { name: "minikura", monthly: 275, retrieval: 1320 },
                  { name: "サマリーポケット", monthly: 330, retrieval: 1100 },
                ].map(({ name, monthly, retrieval, note }, i) => {
                  const base = monthly * 2 * 6;
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
              💡 <strong>ポイント：</strong>年2回取り出す場合はカラエト（取り出し無料）がコスパ最強です。月額はサマリーポケットと同じ330円ですが、送料が年2,200円浮きます。取り出し頻度が年1回以下ならAZUKELが最安です。
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
                q: "一人暮らしの狭い部屋から集荷してもらえますか？",
                a: "はい、対応しています。宅配収納の集荷はヤマト運輸などの宅配業者が自宅まで来てくれます。エレベーターなしの物件や狭い廊下でも対応可能です。ボックスに詰めた状態で玄関前に出しておくだけで集荷できます。",
              },
              {
                q: "どのくらいの量から使えますか？",
                a: "1箱から利用できます。まず試しに1箱だけ預けてみて、使い勝手を確認してから箱数を増やすという方法がおすすめです。1箱の費用は月額220〜330円なので、試しやすい金額です。",
              },
              {
                q: "預けたものを写真で確認できますか？",
                a: "サービスによります。サマリーポケット・minikura・カラエトはアイテムを1点ずつ写真撮影してアプリで管理できます。「何を預けたか忘れた」という問題を防げます。",
              },
              {
                q: "契約期間の縛りはありますか？",
                a: "ほとんどのサービスは1ヶ月単位で利用でき、縛りはありません。引越しや生活環境の変化が多い一人暮らしの方でも、気軽に始めて必要なくなったらすぐやめられます。",
              },
              {
                q: "収納グッズを買うより本当にお得ですか？",
                a: "長期的に見るとお得なケースが多いです。収納グッズは購入コストがかかり、使わなくなっても捨てにくい。宅配収納は月額数百円で必要な期間だけ使え、不要になればすぐやめられます。部屋のスペースを有効活用できることを考えると、コスパは高いといえます。",
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
              { title: "引越し前後の荷物を一時保管する方法", href: "/guide/hikkoshi-storage" },
              { title: "宅配型トランクルームとは？仕組みとメリットを解説", href: "/guide/what-is-takuhai-storage" },
              { title: "カラエトの評判・口コミを徹底解説", href: "/guide/caraeto-review" },
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
            あなたの一人暮らしに最適なサービスを3秒で診断
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
