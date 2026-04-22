import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Script from "next/script";
import "./globals.css";

declare global {
  interface Window {
    gtag: (...args: any[]) => void;
    dataLayer: any[];
  }
}

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "宅配収納サービス比較・診断 | くらべる収納",
    template: "%s | くらべる収納",
  },
  description: "箱数と保管期間を入力するだけで、サマリーポケット・minikura・AZUKELなど8社の料金を自動比較。登録不要・3秒で最安サービスが分かります。",
  openGraph: {
    title: "宅配収納サービス比較・診断 | くらべる収納",
    description: "箱数と保管期間を入力するだけで、8社の料金を自動比較。登録不要・3秒で最安サービスが分かります。",
    url: "https://moriyamanaomi.com",
    siteName: "くらべる収納",
    locale: "ja_JP",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "宅配収納サービス比較・診断 | くらべる収納",
    description: "箱数と保管期間を入力するだけで、8社の料金を自動比較。登録不要・3秒で最安サービスが分かります。",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="ja"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <Script
        src="https://www.googletagmanager.com/gtag/js?id=G-JKX5ZP9QR6"
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-JKX5ZP9QR6');
        `}
      </Script>
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
