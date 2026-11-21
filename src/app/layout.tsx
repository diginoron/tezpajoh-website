import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import GlobalCTA from "@/components/shared/GlobalCTA";

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
  verification: {
    google: "KgLbLQwfNg9_7e7w9_vO5YSUrT0UB_xnoeidGPhj7D8",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fa" dir="rtl">
      <head>
        <meta name="google-site-verification" content="KgLbLQwfNg9_7e7w9_vO5YSUrT0UB_xnoeidGPhj7D8" />
      </head>
      <body>
        <Header />
        <main style={{ minHeight: 'calc(100vh - 200px)' }}>
          {children}
        </main>
        <GlobalCTA />
        <Footer />
        <a href="tel:09055611316" className="floating-call" aria-label="تماس برای مشاوره رایگان">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
          </svg>
          مشاوره رایگان
        </a>
      </body>
    </html>
  );
}
