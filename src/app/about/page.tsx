import type { Metadata } from "next";
import {
  Cpu,
  Wifi,
  CircuitBoard,
  Boxes,
  Factory,
  GraduationCap,
  Award,
  Users,
  Target,
  Sparkles,
  Phone,
  Mail,
  Calendar,
  Building2,
} from "lucide-react";
import { SITE } from "@/data/site";
import { companyFacts, history, values } from "@/data/about";
import { PageHero } from "@/components/ui/page-hero";
import { SectionHeading } from "@/components/ui/section-heading";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

export const metadata: Metadata = {
  title: "회사소개",
  description: `11년+ 임베디드 개발 전문 기업 JSTech. ${companyFacts.mainBusiness}.`,
};

const capabilities = [
  {
    icon: Cpu,
    title: "MCU 플랫폼",
    desc: "STM32, ESP32, ATmel, ARM Cortex 등 다양한 플랫폼 지원",
  },
  {
    icon: Wifi,
    title: "IoT 솔루션",
    desc: "WiFi, BLE, LoRa 등 무선 통신 기반 엔드투엔드 IoT 구축",
  },
  {
    icon: CircuitBoard,
    title: "하드웨어 설계",
    desc: "회로 설계부터 PCB 제작, 센서 인터페이스까지 지원",
  },
  {
    icon: Boxes,
    title: "시스템 통합",
    desc: "웹·앱·서버·클라우드 통합 개발로 완성도 극대화",
  },
  {
    icon: Factory,
    title: "양산 지원",
    desc: "BOM 관리, 부품 소싱, KC/EMC 인증, 양산 관리",
  },
  {
    icon: GraduationCap,
    title: "교육 사업",
    desc: "임베디드 인재 양성을 위한 교육 프로그램 운영",
  },
];

const valueIcons = [Target, Sparkles, Award, Users] as const;

function CEOMessage() {
  return (
    <section className="container-px mx-auto max-w-6xl py-20">
      <SectionHeading
        eyebrow="CEO Message"
        title="대표 인사말"
        align="left"
      />
      <div className="mt-12 rounded-2xl border border-line bg-white p-8 sm:p-12">
        <div className="flex flex-col gap-8 md:flex-row md:items-start md:gap-12">
          <div className="flex h-20 w-20 shrink-0 items-center justify-center rounded-2xl bg-primary-light text-primary">
            <Building2 className="h-10 w-10" />
          </div>
          <div className="flex-1 space-y-6">
            <p className="text-lg leading-relaxed text-foreground">
              &ldquo;기획부터 양산까지, 한 팀이 끝까지 책임집니다.&rdquo;
            </p>
            <p className="leading-relaxed text-muted">
              2015년 설립 이래 11년간 수백 건의 임베디드 프로젝트를 성공적으로
              수행하며, STM32·ESP32·ATmel·ARM Cortex 등 다양한 MCU 플랫폼에서
              안정적이고 최적화된 솔루션을 제공해 왔습니다.
            </p>
            <p className="leading-relaxed text-muted">
              기술적 전문성과 투명한 소통을 바탕으로, 고객님의 아이디어가
              실제 제품으로 완성되는 여정을 함께합니다. 매 프로젝트마다
              최고의 품질을 약속드리며, 납품 후에도 꾸준한 기술 지원을
              이어가겠습니다.
            </p>
            <div className="flex items-center gap-4 pt-2">
              <div>
                <p className="font-bold text-foreground">{SITE.ceo}</p>
                <p className="text-sm text-muted">JSTech 대표이사</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Timeline() {
  return (
    <section className="bg-surface py-20">
      <div className="container-px mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="History"
          title="회사 연혁"
          description="11년간 이어온 성장의 발자취"
        />
        <div className="relative mt-16">
          <div className="absolute left-4 top-0 bottom-0 w-px bg-line md:left-1/2 md:-translate-x-px" />
          <div className="space-y-12">
            {history.map((item, i) => (
              <div
                key={item.year}
                className={`relative flex flex-col md:flex-row ${
                  i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                }`}
              >
                <div className="hidden md:block md:w-1/2" />
                <div className="absolute left-4 md:left-1/2 -translate-x-1/2 h-4 w-4 rounded-full border-2 border-primary bg-white z-10" />
                <div className="ml-12 md:ml-0 md:w-1/2 md:px-12">
                  <div className="rounded-2xl border border-line bg-white p-6 transition-all hover:-translate-y-1 hover:shadow-md">
                    <Badge variant="primary" className="mb-3">
                      {item.year}
                    </Badge>
                    <h3 className="text-lg font-bold text-foreground">
                      {item.title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted">
                      {item.detail}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function Capabilities() {
  return (
    <section className="container-px mx-auto max-w-6xl py-20">
      <SectionHeading
        eyebrow="Capabilities"
        title="핵심 역량"
        description="다양한 기술과 경험으로 완성하는 임베디드 개발 역량"
      />
      <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {capabilities.map((cap) => {
          const Icon = cap.icon;
          return (
            <div
              key={cap.title}
              className="rounded-2xl border border-line bg-white p-6 transition-all hover:-translate-y-1 hover:border-primary/40 hover:shadow-md"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary-light text-primary">
                <Icon className="h-6 w-6" />
              </div>
              <h3 className="mt-4 text-lg font-bold text-foreground">
                {cap.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">
                {cap.desc}
              </p>
            </div>
          );
        })}
      </div>
    </section>
  );
}

function Values() {
  return (
    <section className="bg-surface py-20">
      <div className="container-px mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="Values"
          title="핵심 가치"
          description="JSTech가 지키고 추구하는 네 가지 원칙"
        />
        <div className="mt-12 grid gap-6 sm:grid-cols-2">
          {values.map((v, i) => {
            const Icon = valueIcons[i];
            return (
              <div
                key={v.title}
                className="rounded-2xl border border-line bg-white p-8"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary-light text-primary">
                  <Icon className="h-6 w-6" />
                </div>
                <h3 className="mt-4 text-xl font-bold text-foreground">
                  {v.title}
                </h3>
                <p className="mt-3 leading-relaxed text-muted">{v.detail}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function CompanyInfo() {
  const facts = [
    { label: "회사명", value: companyFacts.name },
    { label: "영문명", value: companyFacts.englishName },
    { label: "설립일", value: companyFacts.established },
    { label: "대표이사", value: companyFacts.ceo },
    { label: "경력", value: companyFacts.years },
    { label: "주요사업", value: companyFacts.mainBusiness },
  ];

  return (
    <section className="container-px mx-auto max-w-6xl py-20">
      <SectionHeading
        eyebrow="Company Info"
        title="회사 정보"
        align="left"
      />
      <div className="mt-12 grid gap-6 md:grid-cols-2">
        <div className="divide-y divide-line rounded-2xl border border-line bg-white">
          {facts.map((f) => (
            <div key={f.label} className="flex items-start gap-4 px-6 py-4">
              <span className="w-24 shrink-0 text-sm font-medium text-muted">
                {f.label}
              </span>
              <span className="text-sm font-medium text-foreground">
                {f.value}
              </span>
            </div>
          ))}
        </div>
        <div className="flex flex-col gap-4">
          <div className="flex items-center gap-3 rounded-2xl border border-line bg-white px-6 py-4">
            <Phone className="h-5 w-5 text-primary" />
            <div>
              <p className="text-sm text-muted">전화</p>
              <p className="font-medium text-foreground">{companyFacts.phone}</p>
            </div>
          </div>
          <div className="flex items-center gap-3 rounded-2xl border border-line bg-white px-6 py-4">
            <Mail className="h-5 w-5 text-primary" />
            <div>
              <p className="text-sm text-muted">이메일</p>
              <p className="font-medium text-foreground">{companyFacts.email}</p>
            </div>
          </div>
          <div className="flex items-center gap-3 rounded-2xl border border-line bg-white px-6 py-4">
            <Calendar className="h-5 w-5 text-primary" />
            <div>
              <p className="text-sm text-muted">활동 기간</p>
              <p className="font-medium text-foreground">{companyFacts.careers}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function CTA() {
  return (
    <section className="bg-primary py-16 text-center text-white">
      <div className="container-px mx-auto max-w-4xl">
        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
          함께 시작해볼까요?
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-lg text-primary-light">
          아이디어만 있다면 충분합니다. 무료 기술 상담으로 프로젝트의 방향을
          함께 설계해 드립니다.
        </p>
        <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Button href="/contact" variant="white" size="lg">
            무료 기술 상담 신청
          </Button>
          <a
            href="tel:01024843208"
            className="inline-flex min-h-[52px] items-center gap-2 rounded-lg border border-white/40 px-8 text-lg font-medium text-white transition-colors hover:bg-white/10"
          >
            <Phone className="h-5 w-5" />
            {SITE.phone}
          </a>
        </div>
      </div>
    </section>
  );
}

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="Company"
        title="회사소개"
        description="기획부터 양산까지, 원스톱 임베디드 개발 파트너 JSTech를 소개합니다."
      />
      <CEOMessage />
      <Timeline />
      <Capabilities />
      <Values />
      <CompanyInfo />
      <CTA />
    </>
  );
}
