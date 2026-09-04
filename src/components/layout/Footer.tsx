import Link from "next/link";
import { Phone, Mail } from "lucide-react";
import { SITE } from "@/data/site";
import { NAV_ITEMS } from "@/data/site";

export function Footer() {
  const services = [
    { label: "펌웨어 개발", href: "/services/firmware" },
    { label: "IoT 솔루션", href: "/services/iot" },
    { label: "하드웨어 설계", href: "/services/hardware" },
    { label: "시스템 통합", href: "/services/integration" },
    { label: "양산 지원", href: "/services/production" },
  ];

  return (
    <footer className="border-t border-line bg-[#0f172a] text-slate-300">
      <div className="container-px mx-auto max-w-6xl py-12">
        <div className="grid gap-10 md:grid-cols-4">
          <div className="space-y-4 md:col-span-1">
            <div className="flex items-center gap-2">
              <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary text-sm font-bold text-white">
                JS
              </span>
              <span className="text-lg font-bold text-white">{SITE.name}</span>
            </div>
            <p className="text-sm leading-relaxed text-slate-400">
              기획부터 양산까지, 원스톱 임베디드 개발 파트너
            </p>
            <div className="space-y-2 text-sm">
              <p className="flex items-center gap-2">
                <Phone className="h-4 w-4 text-primary" /> {SITE.phone}
              </p>
              <p className="flex items-center gap-2">
                <Mail className="h-4 w-4 text-primary" /> {SITE.email}
              </p>
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white">
              사업영역
            </h3>
            <ul className="space-y-2 text-sm">
              {services.map((s) => (
                <li key={s.href}>
                  <Link href={s.href} className="text-slate-400 hover:text-white">
                    {s.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-4">
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white">
              회사
            </h3>
            <ul className="space-y-2 text-sm">
              {NAV_ITEMS.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="text-slate-400 hover:text-white">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-4">
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white">
              회사 정보
            </h3>
            <ul className="space-y-2 text-sm text-slate-400">
              <li>설립: {SITE.established}</li>
              <li>대표: {SITE.ceo}</li>
              <li>경력: {SITE.years}</li>
            </ul>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-lg bg-primary px-4 py-2 text-sm font-medium text-white hover:bg-primary-dark"
            >
              무료 기술 상담 신청
            </Link>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-slate-800 pt-6 text-sm text-slate-500 sm:flex-row">
          <p>
            © {new Date().getFullYear()} {SITE.fullName} ({SITE.name}). All rights reserved.
          </p>
          <div className="flex gap-6">
            <Link href="/privacy" className="hover:text-slate-300">
              개인정보처리방침
            </Link>
            <Link href="/terms" className="hover:text-slate-300">
              이용약관
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
