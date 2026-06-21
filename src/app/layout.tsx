import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

export const metadata: Metadata = {
  metadataBase: new URL("https://tezpajoh.ir"),
  title: {
    default: "تز پژوه | مشاوره و انجام پایان نامه ارشد و دکتری",
    template: "%s | تز پژوه"
  },
  description: "گروه تز پژوه با 15 سال سابقه تخصصی در زمینه ارائه موضوع، پروپوزال، انجام فصول پایان نامه، آموزش و مشاوره در مقاطع کارشناسی ارشد و دکتری.",
  keywords: ["انجام پایان نامه", "پایان نامه ارشد", "پایان نامه دکتری", "پروپوزال", "تز پژوه", "مشاوره پایان نامه"],
  openGraph: {
    title: "تز پژوه | مشاوره و انجام پایان نامه ارشد و دکتری",
    description: "تیم تخصصی تز پژوه آماده ارائه خدمات حرفه‌ای پایان‌نامه، آموزش و مشاوره با بالاترین کیفیت.",
    url: "https://tezpajoh.ir",
    siteName: "تز پژوه",
    images: [
      {
        url: "/logo.jpg",
        width: 800,
        height: 600,
        alt: "لوگوی تز پژوه",
      },
    ],
    locale: "fa_IR",
    type: "website",
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
    <html lang="fa" dir="rtl">
      <body>
        <Header />
        <main style={{ minHeight: 'calc(100vh - 200px)' }}>
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
