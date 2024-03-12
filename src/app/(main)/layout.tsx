import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/modules/Header";
import AOSInit from "@/components/modules/AOSInit";
import BackToTop from "@/components/modules/BackToTop";
import Footer from "@/components/modules/Footer";

export const metadata: Metadata = {
  title: "فروشگاه دانا | Dana Shop",
  description: "Created by Next.js",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fa" dir="rtl">
      <body className="max-w-[1440px] mx-auto min-h-screen">
        <AOSInit />
        <BackToTop />
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
