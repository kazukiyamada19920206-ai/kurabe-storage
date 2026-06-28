import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "2nd STORAGE vs minikura｜料金・機能の徹底比較",
  description:
    "2nd STORAGEとminikuraを料金・取り出し送料・対応エリア・機能で徹底比較。首都圏在住なら2nd STORAGEが有利？書籍を大量に預けるならminikura？使い方別のおすすめを解説。",
};

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
            <span>2nd STORAGE vs minikura</span>
          </nav>
          <div className="flex items-center gap-2 mb-3">
            <span className="text-sm font-[600] text-[#C4620A]">比較記事</span>
          </div>
          <h1 className="text-[26px] font-[700] text-[#2D5016] leading-[1.4] mb-3">
            2nd STORAGE vs minikura<br />送料無料 vs 月額最安｜どちらがお得？【2026年最新】
          </h1>
          <p className="text-[13px] text-[#5F5E5A] leading-[1.8] mb-3">
            「配送料が無料の2nd STORAGEと、月額が安いminikura、どちらが自分に合うの？」という疑問に答えます。料金モデルが全く異なる2サービスを、使い方別に徹底比較しました。
          </p>
          <p className="text-[12px] text-[#888780]">2026年6月更新</p>
        </div>
      </div>

      <div className="mx-auto max-w-3xl px-6 py-10 space-y-12">

        {/* 最重要：エリア注意 */}
        <div className="rounded-[12px] p-5" style={{ border: "1.5px solid #E8873A", background: "#FFF8F3" }}>
          <p className="font-[700] text-[#C4620A] mb-2">⚠️ 比較前に確認：対応エリアの制限</p>
          <p className="text-[13px] text-[#2C2C2A] leading-[1.8]">
            <strong>2nd STORAGEは首都圏限定</strong>（東京都・横浜市・川崎市・市川市・浦安市）です。<br />
            <strong>minikuraは全国対応</strong>です。<br />
            対応エリア外の方は自動的にminikura一択となります。
          </p>
        </div>

        {/* 比較サマリー表 */}
        <section>
          <h2 className="text-[20px] font-[700] text-[#2D5016] mb-4 pb-2 border-b-2 border-[#2D5016]">
            2nd STORAGE vs minikura：一目でわかる比較表
          </h2>
          <div className="overflow-x-auto">
            <table className="w-full text-[13px]" style={{ borderCollapse: "collapse" }}>
              <thead>
                <tr>
                  <th className="py-3 px-4 text-left text-white font-bold" style={{ background: "#2D5016", border: "0.5px solid #D3D1C7" }}>比較項目</th>
                  <th className="py-3 px-4 text-center text-white font-bold" style={{ background: "#2D5016", border: "0.5px solid #D3D1C7" }}>2nd STORAGE</th>
                  <th className="py-3 px-4 text-center text-white font-bold" style={{ background: "#2D5016", border: "0.5px solid #D3D1C7" }}>minikura</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ["料金モデル", "スペースプラン（保管量で変動）", "ボックスプラン（1箱275円〜）"],
                  ["取り出し送料", "無料 ★", "1,320円"],
                  ["梱包", "不要（スタッフが搬出）★", "自分でダンボールに詰める"],
                  ["集荷方法", "スタッフが自宅に来る ★", "ヤマト運輸で宅配"],
                  ["対応エリア", "首都圏限定（東京・横浜・川崎等）", "全国対応 ★"],
                  ["運営会社", "GEOグループ ★（大手）", "株式会社寺田倉庫 ★（老舗）"],
                  ["書籍専用プラン", "なし", "あり ★（HAKO本棚プラン）"],
                  ["ヤフオク連携", "なし", "あり ★"],
                  ["ゲオ買取連携", "あり ★", "なし"],
                  ["長期割引", "なし", "13ヶ月〜月額値下がり ★"],
                  ["長期取り出し無料", "なし", "1年以上預けたボックスは無料 ★"],
                  ["写真管理", "あり（1点ずつ）", "あり（1点ずつ）"],
                  ["大型荷物", "対応（梱包不要）★", "専用ボックス外は非対応"],
                  ["最低利用期間", "1ヶ月〜", "1ヶ月〜"],
                ].map(([item, storage, minikura], i) => (
                  <tr key={item} style={{ background: i % 2 === 1 ? "#F5F0E8" : "white" }}>
                    <td className="py-3 px-4 font-medium text-[#2C2C2A]" style={{ border: "0.5px solid #D3D1C7" }}>{item}</td>
                    <td className="py-3 px-4 text-center text-[#2C2C2A]" style={{ border: "0.5px solid #D3D1C7" }}>{storage}</td>
                    <td className="py-3 px-4 text-center text-[#2C2C2A]" style={{ border: "0.5px solid #D3D1C7" }}>{minikura}</td>
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
              <p className="font-[700] text-[#2D5016] mb-2">✓ 2nd STORAGEが向いている人</p>
              <ul className="text-[13px] text-[#2C2C2A] leading-[2] space-y-1">
                <li>・東京都・横浜市・川崎市在住の方</li>
                <li>・月に複数回荷物を出し入れする方（送料無料で何度でもOK）</li>
                <li>・梱包が面倒・重い荷物がある方</li>
                <li>・GEO買取と組み合わせて不用品整理をしたい方</li>
                <li>・ゴルフバッグ・スーツケースなど大型荷物がある方</li>
              </ul>
            </div>
            <div className="bg-white rounded-[12px] p-5" style={{ border: "1px solid #E8873A" }}>
              <p className="font-[700] text-[#E8873A] mb-2">✓ minikuraが向いている人</p>
              <ul className="text-[13px] text-[#2C2C2A] leading-[2] space-y-1">
                <li>・首都圏以外にお住まいの方（全国対応）</li>
                <li>・月額料金を抑えて長期保管したい方</li>
                <li>・本・CD・コミックを大量に預けたい方</li>
                <li>・年1〜2回だけ取り出す方（取り出し回数が少ない）</li>
                <li>・寺田倉庫の本格的な保管環境を重視する方</li>
              </ul>
            </div>
          </div>
        </section>

        {/* 料金モデルの違いを理解する */}
        <section>
          <h2 className="text-[20px] font-[700] text-[#2D5016] mb-4 pb-2 border-b-2 border-[#2D5016]">
            料金モデルが全く異なる：直接比較が難しい理由
          </h2>
          <div className="bg-white rounded-[12px] p-5 mb-4" style={{ border: "0.5px solid #D3D1C7" }}>
            <p className="text-[13px] text-[#5F5E5A] leading-[1.9]">
              2nd STORAGEとminikuraは<strong className="text-[#2D5016]">料金モデルが根本的に異なります</strong>。minikuraは「ボックス単位（1箱275円〜）」で課金されるのに対し、2nd STORAGEは「スペース単位（保管量・体積に応じた月額）」で課金されます。そのため単純な価格比較が難しいですが、取り出し頻度と荷物量で有利なサービスが変わります。
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-white rounded-[12px] p-5" style={{ border: "0.5px solid #D3D1C7" }}>
              <p className="font-[700] text-[#2D5016] mb-2 text-[13px]">2nd STORAGE：スペースプラン</p>
              <ul className="text-[12px] text-[#5F5E5A] leading-[2] space-y-1">
                <li>・保管スペースの体積で月額が決まる</li>
                <li>・取り出し送料は何度でも無料</li>
                <li>・月に複数回出し入れするほどコスパが上がる</li>
                <li>・大型荷物も梱包不要でそのまま預けられる</li>
              </ul>
            </div>
            <div className="bg-white rounded-[12px] p-5" style={{ border: "0.5px solid #D3D1C7" }}>
              <p className="font-[700] text-[#E8873A] mb-2 text-[13px]">minikura：ボックスプラン</p>
              <ul className="text-[12px] text-[#5F5E5A] leading-[2] space-y-1">
                <li>・専用ボックス1箱あたり275円〜</li>
                <li>・取り出し1回あたり1,320円</li>
                <li>・年に数回しか取り出さないほど有利</li>
                <li>・13ヶ月以上で自動的に月額が値下がり</li>
              </ul>
            </div>
          </div>
        </section>

        {/* 取り出し頻度別コスト比較 */}
        <section>
          <h2 className="text-[20px] font-[700] text-[#2D5016] mb-4 pb-2 border-b-2 border-[#2D5016]">
            取り出し頻度でどちらが安くなるか変わる
          </h2>
          <p className="text-[13px] text-[#5F5E5A] mb-4">minikuraの月額を275円×5箱＝1,375円/月と仮定した場合の試算です。</p>
          <div className="space-y-4">
            {[
              {
                scene: "月1回取り出す場合（年12回）",
                storage: "3,300円×12ヶ月＝39,600円（送料0円）",
                minikura: "1,375円×12ヶ月＋1,320円×12回＝32,340円",
                winner: "minikura",
                note: "取り出し頻度が高くてもminikuraが安い（但し梱包の手間あり）",
              },
              {
                scene: "月3回取り出す場合（年36回）",
                storage: "3,300円×12ヶ月＝39,600円（送料0円）",
                minikura: "1,375円×12ヶ月＋1,320円×36回＝64,020円",
                winner: "2nd STORAGE",
                note: "頻繁に出し入れするなら2nd STORAGEが圧倒的に安い",
              },
            ].map((item, i) => (
              <div key={i} className="bg-white rounded-[12px] p-5" style={{ border: "0.5px solid #D3D1C7" }}>
                <p className="font-[700] text-[#2C2C2A] mb-3 text-[13px]">{item.scene}</p>
                <div className="grid md:grid-cols-2 gap-3 mb-3">
                  <div>
                    <p className="text-[11px] text-[#888780] mb-1">2nd STORAGE（年間）</p>
                    <p className="text-[13px] text-[#2C2C2A] font-[600]">{item.storage}</p>
                  </div>
                  <div>
                    <p className="text-[11px] text-[#888780] mb-1">minikura（年間）</p>
                    <p className="text-[13px] text-[#2C2C2A] font-[600]">{item.minikura}</p>
                  </div>
                </div>
                <div className={`rounded-[8px] p-3 text-[12px] font-[600] ${item.winner === "2nd STORAGE" ? "bg-[#E8F5E9] text-[#2D5016]" : "bg-[#FFF3E0] text-[#E8873A]"}`}>
                  → {item.winner}の方が安い。{item.note}
                </div>
              </div>
            ))}
          </div>
          <p className="text-[12px] text-[#888780] mt-3">※試算はあくまで目安です。2nd STORAGEの実際の月額は保管スペースの体積によって異なります。</p>
        </section>

        {/* 書籍・大型荷物の違い */}
        <section>
          <h2 className="text-[20px] font-[700] text-[#2D5016] mb-4 pb-2 border-b-2 border-[#2D5016]">
            書籍・大型荷物の対応の違い
          </h2>
          <div className="space-y-4">
            <div className="bg-white rounded-[12px] p-5" style={{ border: "0.5px solid #D3D1C7" }}>
              <p className="font-[700] text-[#2D5016] mb-2">本・CD・コミックを大量に預けるならminikura</p>
              <p className="text-[13px] text-[#5F5E5A] leading-[1.8]">
                minikuraには「HAKO本棚プラン」があり、本・CD・コミックを1冊単位で管理・取り出しできます。大量の蔵書を整理したい方にとって、minikuraの書籍専用プランは唯一無二の機能です。2nd STORAGEには書籍専用プランがないため、本を大量に預けたい方はminikura一択です。
              </p>
            </div>
            <div className="bg-white rounded-[12px] p-5" style={{ border: "0.5px solid #D3D1C7" }}>
              <p className="font-[700] text-[#2D5016] mb-2">ゴルフバッグ・スーツケースなど大型荷物なら2nd STORAGE</p>
              <p className="text-[13px] text-[#5F5E5A] leading-[1.8]">
                minikuraは専用ボックスに収まらない大型荷物には対応していません。ゴルフバッグ・スーツケース・スキー・釣り道具などを梱包なしで預けたい方には2nd STORAGEが適しています。スタッフが自宅まで来て搬出してくれるため、重い荷物でも楽に保管できます。
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
                q: "2nd STORAGEとminikuraの最大の違いは何ですか？",
                a: "最大の違いは対応エリアと料金モデルです。2nd STORAGEは首都圏限定・スペースプラン・取り出し無料、minikuraは全国対応・ボックスプラン・取り出し1,320円です。首都圏外の方はminikura一択です。首都圏在住で取り出しを頻繁にするなら2nd STORAGE、年に数回の取り出しならminikuraが有利です。",
              },
              {
                q: "2nd STORAGEは首都圏以外では使えないのですか？",
                a: "現在は東京都（離島除く）・横浜市・川崎市・千葉県（市川市・浦安市）のみ対応しています。それ以外の地域にお住まいの方はminikura・サマリーポケット・AZUKELなど全国対応のサービスをご利用ください。",
              },
              {
                q: "長期保管するなら2nd STORAGEとminikuraどちらがお得ですか？",
                a: "長期（1年以上）保管するならminikuraが有利です。13ヶ月目以降は月額が自動的に値下がりし、さらに1年以上預けたボックスの取り出し送料が無料になります。年に数回しか取り出さない場合、月額コストを抑えられるminikuraの方がトータルで安くなるケースが多いです。",
              },
              {
                q: "本を大量に預けたいのですが、どちらがいいですか？",
                a: "minikura一択です。minikuraには書籍・CD・コミック専用の「HAKO本棚プラン」があり、1冊単位で管理・取り出しできます。2nd STORAGEには書籍専用プランがないため、大量の書籍保管にはminikuraが圧倒的に向いています。",
              },
              {
                q: "GEO（ゲオ）の買取と組み合わせて使えますか？",
                a: "2nd STORAGEを利用することで、保管中の荷物をGEO・セカンドストリートで買取査定してもらうことができます。不用品の処分と収納整理を同時に進めたい方に特に向いている機能で、minikuraにはない2nd STORAGE独自の強みです。",
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
              <p className="font-[700] text-[#2D5016] mb-3">2nd STORAGE</p>
              <div className="space-y-2">
                <Link href="/detail/2nd-storage" className="block text-[13px] text-[#2D5016] hover:underline">→ 2nd STORAGEの詳細・料金シミュレーション</Link>
                <Link href="/guide/2nd-storage-review" className="block text-[13px] text-[#2D5016] hover:underline">→ 2nd STORAGEの評判・口コミ記事</Link>
              </div>
            </div>
            <div className="bg-white rounded-[12px] p-5" style={{ border: "0.5px solid #D3D1C7" }}>
              <p className="font-[700] text-[#2D5016] mb-3">minikura</p>
              <div className="space-y-2">
                <Link href="/detail/minikura" className="block text-[13px] text-[#2D5016] hover:underline">→ minikuraの詳細・料金シミュレーション</Link>
                <Link href="/guide/minikura-review" className="block text-[13px] text-[#2D5016] hover:underline">→ minikuraの評判・口コミ記事</Link>
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
            <Link href="/compare/summary-pocket-vs-azukel" className="flex items-center gap-2 bg-white rounded-[12px] p-4 hover:bg-[#F5F0E8] transition" style={{ border: "0.5px solid #D3D1C7" }}>
              <span className="text-[13px] text-[#2D5016] font-[600]">→ サマリーポケット vs AZUKEL 比較</span>
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
