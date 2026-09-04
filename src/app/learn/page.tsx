import type { Metadata } from "next";
import Link from "next/link";
import { Lightbulb, Compass, Code2, ArrowRight, HelpCircle, MessageCircle, GraduationCap, School, BookOpen, Layers } from "lucide-react";
import { PageHero } from "@/components/ui/page-hero";
import { SectionHeading } from "@/components/ui/section-heading";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

export const metadata: Metadata = {
  title: "입문 가이드",
  description:
    "임베디드가 무엇인지, 아이디어를 제품으로 만드는 방법, C/C++ 기초까지 — JSTech가 전하는 임베디드 개발 입문 가이드.",
};

const guides = [
  {
    icon: Lightbulb,
    title: "임베디드란 무엇인가",
    description: "임베디드가 뭔지, 주변 기기 속에 어떻게 들어있는지 쉽게 알아봅니다.",
    href: "/learn/what-is-embedded",
    badge: "첫걸음",
  },
  {
    icon: Compass,
    title: "나의 아이디어 제품화하기",
    description: "머릿속 아이디어를 실제로 만드는 과정을 단계별로 안내합니다.",
    href: "/learn/productize-idea",
    badge: "로드맵",
  },
  {
    icon: Code2,
    title: "C/C++ 첫걸음",
    description: "임베디드 개발의 기본 언어, C와 C++을 처음부터 차근차근 배워봅니다.",
    href: "/learn/cpp-basics",
    badge: "실습",
  },
];

const decisionTree = [
  {
    situation: "아이디어만 있는데 실제 제품을 만들고 싶어요",
    action: "개발 용역 문의",
    href: "/contact",
    color: "primary" as const,
  },
  {
    situation: "프로토타입이나 시제품이 필요합니다",
    action: "프로젝트 상담 신청",
    href: "/contact",
    color: "secondary" as const,
  },
  {
    situation: "이미 개발된 부품이나 모듈을 찾고 있어요",
    action: "문의하기",
    href: "/contact",
    color: "primary" as const,
  },
  {
    situation: "직접 배워서 만들고 싶습니다",
    action: "교육 과정 안내",
    href: "/contact",
    color: "secondary" as const,
  },
];

export default function LearnPage() {
  return (
    <>
      <PageHero
        eyebrow="Learn"
        title="입문 · 비전문가 가이드"
        description="임베디드에 대해 잘 몰라도 괜찮습니다. 쉽게 시작하세요."
      />

      <section className="py-16 sm:py-20">
        <div className="container-px mx-auto max-w-6xl">
          <SectionHeading
            eyebrow="Guides"
            title="어디서 시작할지 모르겠다면"
            description="임베디드가 처음인 분들을 위해 준비한 가이드입니다. 순서에 관계없이 관심 있는 주제부터 읽어보세요."
          />

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {guides.map((guide) => {
              const Icon = guide.icon;
              return (
                <Link
                  key={guide.href}
                  href={guide.href}
                  className="group flex flex-col rounded-xl border border-line bg-white p-6 shadow-sm transition-all hover:border-primary hover:shadow-md"
                >
                  <div className="flex items-center gap-3">
                    <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-primary-light">
                      <Icon className="h-5 w-5 text-primary" />
                    </div>
                    <Badge variant="primary">{guide.badge}</Badge>
                  </div>
                  <h3 className="mt-4 text-lg font-bold text-foreground">
                    {guide.title}
                  </h3>
                  <p className="mt-2 flex-1 text-sm leading-relaxed text-muted">
                    {guide.description}
                  </p>
                  <span className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-primary group-hover:gap-2 transition-all">
                    읽어보기
                    <ArrowRight className="h-4 w-4" />
                  </span>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      <section className="border-y border-line bg-surface py-16 sm:py-20">
        <div className="container-px mx-auto max-w-6xl">
          <SectionHeading
            eyebrow="Decision Tree"
            title="내 상황에 맞는 길 안내"
            description="지금 내 상황을 골라보세요. 가장 적합한 다음 단계를 안내해 드립니다."
          />

          <div className="mt-12 grid gap-4 sm:grid-cols-2">
            {decisionTree.map((item) => (
              <div
                key={item.situation}
                className="flex flex-col gap-4 rounded-xl border border-line bg-white p-6 sm:flex-row sm:items-center"
              >
                <div className="flex-1">
                  <p className="text-sm text-muted">{item.situation}</p>
                  <p className="mt-2 font-semibold text-foreground">{item.action}</p>
                </div>
                <Button href={item.href} variant={item.color} size="sm">
                  바로가기
                </Button>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-20">
        <div className="container-px mx-auto max-w-6xl">
          <SectionHeading
            eyebrow="Education"
            title="임베디드·코딩 교육"
            description="JSTech가 운영하는 임베디드·코딩 교육 프로그램을 소개합니다."
          />

          <div className="mt-12 grid gap-6 lg:grid-cols-2">
            <div className="flex flex-col rounded-xl border border-line bg-white p-6 shadow-sm">
              <div className="flex items-center gap-3">
                <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-primary-light">
                  <GraduationCap className="h-5 w-5 text-primary" />
                </div>
                <h3 className="text-lg font-bold text-foreground">코딩지도사(코딩 강사) 과정</h3>
              </div>
              <p className="mt-4 flex-1 text-sm leading-relaxed text-muted">
                코딩 교육 지도사 양성 과정으로, 임베디드·코딩 교육을 이끌어갈 강사를
                체계적으로 육성합니다. 교육 이수 후 학교·기관에서 직접 수업을 진행하며
                활동할 수 있습니다.
              </p>
            </div>

            <div className="flex flex-col rounded-xl border border-line bg-white p-6 shadow-sm">
              <div className="flex items-center gap-3">
                <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-primary-light">
                  <School className="h-5 w-5 text-primary" />
                </div>
                <h3 className="text-lg font-bold text-foreground">방과후 코딩 수업</h3>
              </div>
              <p className="mt-4 flex-1 text-sm leading-relaxed text-muted">
                학교와 기관에서 진행하는 방과후 임베디드·코딩 프로그램입니다. 학생들이
                직접 회로를 다루고 코드를 작성하며 창의력과 문제 해결 능력을 키울 수
                있도록 구성했습니다.
              </p>
            </div>
          </div>

          <div className="mt-6 rounded-xl border border-line bg-white p-6 shadow-sm sm:p-8">
            <div className="flex items-center gap-3">
              <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-primary-light">
                <BookOpen className="h-5 w-5 text-primary" />
              </div>
              <h3 className="text-lg font-bold text-foreground">교육 커리큘럼</h3>
            </div>
            <p className="mt-4 text-sm leading-relaxed text-muted">
              레벨별로 단계를 나누어 기초부터 실전 프로젝트까지 차근차근 배웁니다.
            </p>
            <div className="mt-6 grid gap-4 sm:grid-cols-3">
              <div className="rounded-lg border border-line bg-surface p-5">
                <div className="flex items-center gap-2">
                  <Layers className="h-4 w-4 text-secondary" />
                  <span className="text-sm font-semibold text-foreground">입문</span>
                </div>
                <ul className="mt-3 space-y-1.5 text-sm text-muted">
                  <li>· 스크래치·블록코딩 이해</li>
                  <li>· 전자회로 기초</li>
                </ul>
              </div>
              <div className="rounded-lg border border-line bg-surface p-5">
                <div className="flex items-center gap-2">
                  <Layers className="h-4 w-4 text-primary" />
                  <span className="text-sm font-semibold text-foreground">초급</span>
                </div>
                <ul className="mt-3 space-y-1.5 text-sm text-muted">
                  <li>· C언어 기초</li>
                  <li>· 아두이노/ESP32 실습</li>
                </ul>
              </div>
              <div className="rounded-lg border border-line bg-surface p-5">
                <div className="flex items-center gap-2">
                  <Layers className="h-4 w-4 text-accent" />
                  <span className="text-sm font-semibold text-foreground">중급</span>
                </div>
                <ul className="mt-3 space-y-1.5 text-sm text-muted">
                  <li>· STM32 펌웨어</li>
                  <li>· IoT 프로젝트</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-primary py-16 text-center text-white sm:py-20">
        <div className="container-px mx-auto max-w-3xl">
          <HelpCircle className="mx-auto h-10 w-10 text-primary-light" />
          <h2 className="mt-6 text-3xl font-bold tracking-tight sm:text-4xl">
            막막하다면 무료 상담
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-lg text-primary-light">
            무슨 말인지 하나도 모르겠어도 괜찮습니다. JSTech가 내 상황에 맞는 방향을 함께 찾아드립니다.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button href="/contact" variant="white" size="lg">
              <MessageCircle className="h-5 w-5" />
              무료 상담 신청
            </Button>
          </div>
          <p className="mt-6 text-sm text-primary-light">
            평균 24시간 이내 회신 · 부담 없이 문의하세요
          </p>
        </div>
      </section>
    </>
  );
}
