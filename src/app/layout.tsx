import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { SITE } from "@/data/site";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: `${SITE.name} | 기획부터 양산까지, 원스톱 임베디드 개발 파트너`,
    template: `%s | ${SITE.name}`,
  },
  description:
    "11년+ 임베디드 개발 경력의 JSTech. STM32·ESP32·ATmel·ARM Cortex 펌웨어 개발, IoT 솔루션, HW/SW 통합 개발, 양산 지원까지 원스톱으로 제공합니다.",
  keywords: [
    "임베디드 개발",
    "임베디드 외주",
    "MCU 개발",
    "펌웨어 개발",
    "STM32 개발",
    "ESP32 개발",
    "IoT 솔루션",
    "임베디드 용역",
    "하드웨어 설계",
    "PCB 설계",
  ],
  metadataBase: new URL(SITE.url),
  openGraph: {
    type: "website",
    locale: "ko_KR",
    url: SITE.url,
    siteName: SITE.name,
    title: `${SITE.name} | 원스톱 임베디드 개발 파트너`,
    description:
      "11년+ 임베디드 개발 경력. 펌웨어 개발, IoT 솔루션, HW/SW 통합, 양산 지원.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko" className={`${inter.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
