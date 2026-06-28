import type { Metadata } from "next";
import Link from "next/link";
import pricing from "../../pricing.json";

export const metadata: Metadata = {
  title: "宅配収納サービス9社を徹底比較",
  description:
    "サマリーポケット・minikura・AZUKELなど宅配収納サービス9社の月額料金・取り出し送料・特徴を一覧比較。あなたに合うサービスを無料診断もできます。",
  openGraph: {
    title: "宅配収納サービス9社を徹底比較 | くらべる収納",
    description: "サマリーポケット・minikura・AZUKELなど宅配収納サービス9社の月額料金・取り出し送料・特徴を一覧比較。あなたに合うサービスを無料診断もできます。",
    url: "https://moriyamanaomi.com/compare",
    siteName: "くらべる収納",
    locale: "ja_JP",
    type: "website",
  },
};

const SERVICE_TAGS: Record<string, string> = {
  azukel: "最安値",
  "tokyo-shoko": "本専門",
  risoco: "本専門",
  minikura: "バランス重視",
  "summary-pocket": "知名度No.1",
  caraeto: "アイテム管理",
  takutora: "大手安心",
  airtrunk: "送料無料",
  "2nd-storage": "送料無料",
};

const MIN_PERIOD: Record<string, string> = {
  takutora: "6ヶ月〜",
};

type PricingItem = {
  name: string;
  slug: string;
  monthly_per_box: number;
  initial_fee: number;
  retrieval_fee: number;
  description: string;
  affiliate_url: string;
  note: string | null;
};

const sorted = [...(pricing as PricingItem[])].sort(
  (a, b) => a.monthly_per_box - b.monthly_per_box
);

export default function ComparePage() {
  return (
    <main className="min-h-screen bg-[#F5F0E8]">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: "{\"@context\": \"https://schema.org\", \"@type\": \"BreadcrumbList\", \"itemListElement\": [{\"@type\": \"ListItem\", \"position\": 1, \"name\": \"ホーム\", \"item\": \"https://moriyamanaomi.com\"}, {\"@type\": \"ListItem\", \"position\": 2, \"name\": \"比較\"}]}" }} />
      {/* ヘッダー */}
      <header className="bg-white border-b border-gray-200 py-4">
        <div className="mx-auto max-w-6xl px-6 flex justify-between items-center">
          <Link href="/" className="flex items-center gap-2">
            <div className="w-6 h-6 bg-[#2D5016] rounded-sm" />
            <span className="text-xl font-bold text-[#2D5016]">くらべる収納</span>
          </Link>
        </div>
      </header>

      {/* ヒーロー */}
      <div className="bg-white border-b border-gray-200 pt-8 pb-8">
        <div className="mx-auto max-w-6xl px-6">
          <div className="flex items-center gap-2 mb-4">
            <div className="w-3 h-3 rounded-full bg-[#C4620A]" />
            <span className="text-sm font-[600] text-[#C4620A]">サービス比較一覧</span>
          </div>
          <h1 className="text-[32px] font-[700] text-[#2D5016] leading-[1.3] tracking-[-0.5px] mb-4">
            宅配収納サービス<br />9社を徹底比較
          </h1>
          <p className="text-[14px] text-[#444441] mb-6 leading-relaxed">
            月額料金・取り出し送料・おすすめの人を一覧で確認。<br />
            あなたの条件に合うサービスを3秒で診断することもできます。
          </p>
          <Link
            href="/"
            className="inline-block bg-[#E8873A] hover:bg-[#D97A2D] text-white font-[700] px-6 py-3 rounded-[10px] text-[15px] transition"
          >
            箱数と期間で無料診断する →
          </Link>
        </div>
      </div>

      {/* サービス一覧 */}
      <div className="mx-auto max-w-6xl px-6 py-10">
        <div className="space-y-6">
          {sorted.map((service) => {
            const tag = SERVICE_TAGS[service.slug];
            const minPeriod = MIN_PERIOD[service.slug] ?? "1ヶ月〜";
            const retrievalLabel =
              service.retrieval_fee === 0
                ? "無料"
                : `¥${service.retrieval_fee.toLocaleString()}`;
            const initialLabel =
              service.initial_fee === 0
                ? "無料"
                : `¥${service.initial_fee.toLocaleString()}`;

            return (
              <div
                key={service.slug}
                className="bg-white rounded-[12px] border border-[#D3D1C7] p-6"
              >
                {/* サービス名 + タグ */}
                <div className="flex items-center gap-3 mb-4 flex-wrap">
                  <h2 className="text-[22px] font-[700] text-[#2D5016]">
                    {service.name}
                  </h2>
                  {tag && (
                    <span className="bg-[#F5F0E8] border border-[#C4620A] text-[#C4620A] text-[11px] font-[600] px-2.5 py-1 rounded-[6px]">
                      {tag}
                    </span>
                  )}
                </div>

                {/* 4つのスタッツ */}
                <div className="grid grid-cols-2 gap-3 mb-4">
                  {[
                    { label: "月額（1箱）", value: `¥${service.monthly_per_box.toLocaleString()}〜` },
                    { label: "取り出し送料", value: retrievalLabel },
                    { label: "初期費用", value: initialLabel },
                    { label: "最低利用期間", value: minPeriod },
                  ].map((stat) => (
                    <div
                      key={stat.label}
                      className="bg-[#F5F0E8] rounded-[8px] px-4 py-3"
                    >
                      <p className="text-[11px] text-[#888780] mb-1">{stat.label}</p>
                      <p className="text-[16px] font-[700] text-[#2D5016]">{stat.value}</p>
                    </div>
                  ))}
                </div>

                {/* 説明文 */}
                <p className="text-[13px] text-[#5F5E5A] leading-relaxed mb-5">
                  {service.description}
                </p>

                {/* ボタン */}
                <div className="flex gap-3">
                  <Link
                    href={`/detail/${service.slug}`}
                    className="flex-1 text-center border border-[#2D5016] text-[#2D5016] font-[600] text-[13px] py-2.5 rounded-[8px] hover:bg-[#F5F0E8] transition"
                  >
                    詳細を見る
                  </Link>
                  <a
                    href={service.affiliate_url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 text-center bg-[#2D5016] text-white font-[600] text-[13px] py-2.5 rounded-[8px] hover:bg-[#1A3009] transition"
                  >
                    公式サイト
                  </a>
                </div>
              </div>
            );
          })}
        </div>

        {/* 注釈 */}
        <div
          className="mt-8 rounded-[8px] px-4 py-3 text-[12px]"
          style={{
            backgroundColor: "#FFF8F0",
            border: "1px solid #E8873A",
            color: "#7A4A1E",
          }}
        >
          ※料金は各社公表情報に基づく参考値です。実際の料金は公式サイトでご確認ください。
        </div>

        {/* 診断バナー */}
        <div className="mt-10 bg-[#2D5016] rounded-[12px] px-8 py-10 text-center">
          <p className="text-white text-[18px] font-[700] mb-2">
            自分の条件で比べたい方は
          </p>
          <p className="text-[#A8C78A] text-[14px] mb-6">
            箱数と期間を入れるだけで最安サービスが分かります
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
