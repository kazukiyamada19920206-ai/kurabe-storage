import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "宅配収納おすすめランキング9選｜料金・口コミ比較",
  description:
    "宅配収納サービスのおすすめランキングを料金・使いやすさ・保管環境で徹底比較。コスパ最強・初心者向け・大型荷物対応など目的別1位も紹介。最安月額220円〜。",
};

const rankings = [
  {
    rank: 1,
    slug: "azukel",
    name: "AZUKEL",
    tag: "コスパ重視の方に",
    monthly: 220,
    body: "月額220円と業界最安水準の料金が最大の魅力です。初期費用も無料で、短期から中期の保管を検討している方に特におすすめです。大型家具・家電にも対応しており、段ボール以外の荷物も預けられます。「とにかく安く始めたい」という方の第一選択肢です。",
    reviewSlug: "azukel-review",
  },
  {
    rank: 2,
    slug: "minikura",
    name: "minikura",
    tag: "バランス重視の方に",
    monthly: 275,
    body: "月額275円と料金が安く、寺田倉庫の本格的な保管環境も兼ね備えたバランスの良いサービスです。本・CD専用プランも充実しており、幅広い方におすすめできます。コスパと品質の両方を求める方に向いています。",
    reviewSlug: "minikura-review",
  },
  {
    rank: 3,
    slug: "summary-pocket",
    name: "サマリーポケット",
    tag: "初めての方・クリーニング利用者に",
    monthly: 330,
    body: "業界トップクラスの知名度と充実したサポートで、初めて宅配収納を使う方に最適です。クリーニングオプションが便利で、衣替えと同時にメンテナンスも済ませたい方に特に向いています。",
    reviewSlug: "summary-pocket-review",
  },
  {
    rank: 4,
    slug: "caraeto",
    name: "カラエト",
    tag: "アイテム管理にこだわる方に",
    monthly: 308,
    body: "預けた荷物を1点ずつ写真管理し、アイテム単位で取り出せる点が独自の強みです。フリマ出品機能もあり、不用品整理と収納を同時に進めたい方にぴったりです。",
    reviewSlug: "caraeto-review",
  },
  {
    rank: 5,
    slug: "airtrunk",
    name: "エアトランク",
    tag: "頻繁に出し入れする方に",
    monthly: 3718,
    body: "取り出し配送料が何度でも完全無料という点で他社と大きく差別化されています。月額料金は高めですが、毎月のように荷物を出し入れする方にとってはトータルコストを抑えられます。首都圏在住で頻繁に利用したい方におすすめです。",
    reviewSlug: null,
  },
];

export default function RankingPage() {
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
            <span>おすすめランキング</span>
          </nav>
          <div className="flex items-center gap-2 mb-3">
            <span className="text-sm font-[600] text-[#C4620A]">ランキング</span>
          </div>
          <h1 className="text-[26px] font-[700] text-[#2D5016] leading-[1.4] mb-3">
            宅配収納サービス<br />おすすめランキング2026年版
          </h1>
          <p className="text-[12px] text-[#888780] mb-2">2026年4月更新</p>
          <p className="text-[13px] text-[#5F5E5A]">料金・使いやすさ・保管環境・サポートの4項目で比較</p>
        </div>
      </div>

      {/* ランキング */}
      <div className="mx-auto max-w-3xl px-6 py-10">
        <div className="space-y-6 mb-12">
          {rankings.map((item) => {
            const isFirst = item.rank === 1;
            return (
              <div
                key={item.slug}
                className="bg-white rounded-[12px] p-6"
                style={{ border: isFirst ? "2px solid #E8873A" : "0.5px solid #D3D1C7" }}
              >
                <div className="flex items-start gap-4">
                  {/* 順位バッジ */}
                  <div
                    className="w-10 h-10 rounded-full flex items-center justify-center font-bold text-white text-[16px] flex-shrink-0"
                    style={{ background: isFirst ? "#E8873A" : "#2D5016" }}
                  >
                    {item.rank}
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex flex-wrap items-center gap-2 mb-1">
                      <h2 className="text-[20px] font-[700] text-[#2D5016]">{item.name}</h2>
                      <span className="bg-[#F5F0E8] text-[#C4620A] border border-[#C4620A] text-[11px] font-[600] px-2 py-0.5 rounded-[6px]">
                        {item.tag}
                      </span>
                    </div>
                    <p className="text-[13px] text-[#888780] mb-3">月額 ¥{item.monthly.toLocaleString()}〜</p>
                    <p className="text-[13px] text-[#5F5E5A] leading-[1.8] mb-4">{item.body}</p>
                    <div className="flex flex-wrap items-center gap-4">
                      <Link
                        href={`/detail/${item.slug}`}
                        className="inline-block bg-[#2D5016] hover:bg-[#1A3009] text-white font-[600] px-5 py-2.5 rounded-[8px] text-[13px] transition"
                      >
                        詳細を見る →
                      </Link>
                      {item.reviewSlug && (
                        <Link href={`/guide/${item.reviewSlug}`} className="text-[#E8873A] text-sm font-medium hover:underline">
                          詳しい評判・口コミを見る →
                        </Link>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* 診断CTAバナー */}
        <div className="bg-[#2D5016] rounded-[12px] px-8 py-10 text-center">
          <p className="text-white text-[17px] font-[700] mb-2">
            自分の条件で最安サービスを調べたい方は
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
