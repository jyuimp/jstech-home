import type { Metadata } from "next";
import { Cpu, Smartphone, Lightbulb, Zap, BookOpen, ArrowRight, ChevronRight } from "lucide-react";
import { PageHero } from "@/components/ui/page-hero";
import { SectionHeading } from "@/components/ui/section-heading";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

export const metadata: Metadata = {
  title: "임베디드란 무엇인가",
  description:
    "임베디드 시스템이 무엇인지, 펌웨어·하드웨어·소프트웨어의 차이, MCU의 역할까지 쉽게 알아봅니다.",
};

const tocItems = [
  { label: "임베디드 시스템이란?", href: "#what-is" },
  { label: "펌웨어 vs 하드웨어 vs 소프트웨어", href: "#three-types" },
  { label: "MCU란?", href: "#mcu" },
  { label: "임베디드 개발이 필요한 순간", href: "#when-needed" },
  { label: "JSTech가 어떻게 도와줄 수 있는지", href: "#how-we-help" },
];

const dailyExamples = [
  { icon: Smartphone, name: "스마트폰", desc: "화면, 카메라, 통신 모두 임베디드" },
  { icon: Cpu, name: "에어컨 / 냉장고", desc: "온도를 자동으로 조절하는 두뇌" },
  { icon: Zap, name: "자동차", desc: "엔진, 브레이크, 내비게이션" },
  { icon: Lightbulb, name: "LED 조명", desc: "밝기를 조절하는 작은 칩" },
];

const threeTypes = [
  {
    title: "하드웨어",
    analogy: "몸",
    description: "실제로 만져지는 회로 기판, 부품, 배선입니다. 집으로 비유하면 벽과 기둥이에요.",
  },
  {
    title: "펌웨어",
    analogy: "뇌",
    description: "하드웨어에 들어가는 программ입니다. 기기가 어떻게 행동할지 정해요. 집의 배선도 같은 거예요.",
  },
  {
    title: "소프트웨어",
    analogy: "손발",
    description: "컴퓨터나 핸드폰에서 쓰는 앱과 프로그램이에요. 펌웨어가 정한 규칙을 실제로 실행합니다.",
  },
];

const whenNeededCases = [
  "일반적인 앱(웹사이트, 모바일 앱)으로는 해결이 안 되는 문제가 있을 때",
  "센서 데이터를 직접 읽고 처리해야 할 때",
  "기계나 기기의 동작을 정밀하게 제어해야 할 때",
  "배터리 소모를 극도로 줄여야 할 때",
  "개발 로드맵",
];

const helpServices = [
  {
    title: "개발 용역",
    desc: "아이디어를 전문가가 직접 제품으로 만들어 드립니다.",
    href: "/contact",
  },
  {
    title: "교육 과정",
    desc: "임베디드 개발을 직접 배우고 싶으시다면?",
    href: "/contact",
  },
];

export default function WhatIsEmbeddedPage() {
  return (
    <>
      <PageHero
        title="임베디드란 무엇인가"
        description="어렵지 않게, 쉽게 설명합니다."
      />

      <section className="py-12 sm:py-16">
        <div className="container-px mx-auto max-w-4xl">
          <nav className="rounded-xl border border-line bg-surface p-6">
            <p className="text-sm font-semibold text-foreground">이 페이지 목차</p>
            <ul className="mt-3 space-y-2">
              {tocItems.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    className="flex items-center gap-2 text-sm text-muted hover:text-primary transition-colors"
                  >
                    <ChevronRight className="h-3 w-3" />
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </section>

      <section id="what-is" className="border-t border-line py-16 sm:py-20">
        <div className="container-px mx-auto max-w-4xl">
          <Badge variant="primary">기본 개념</Badge>
          <h2 className="mt-4 text-3xl font-bold tracking-tight text-foreground">
            임베디드 시스템이란?
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-muted">
            간단히 말하면, <strong className="text-foreground">&quot;다른 기기 안에 들어있는 작은 컴퓨터&quot;</strong>예요.
            우리가 매일 쓰는 기기 대부분 안에는 임베디드 시스템이 들어 있습니다.
          </p>

          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            {dailyExamples.map((item) => {
              const Icon = item.icon;
              return (
                <div key={item.name} className="flex items-start gap-4 rounded-xl border border-line bg-white p-5">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary-light">
                    <Icon className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-semibold text-foreground">{item.name}</p>
                    <p className="mt-1 text-sm text-muted">{item.desc}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section id="three-types" className="border-t border-line bg-surface py-16 sm:py-20">
        <div className="container-px mx-auto max-w-4xl">
          <Badge variant="primary">핵심 구분</Badge>
          <h2 className="mt-4 text-3xl font-bold tracking-tight text-foreground">
            펌웨어 vs 하드웨어 vs 소프트웨어
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-muted">
            세 가지를 비유로 쉽게 구분해 볼게요.
          </p>

          <div className="mt-8 grid gap-6 sm:grid-cols-3">
            {threeTypes.map((item) => (
              <div key={item.title} className="rounded-xl border border-line bg-white p-6">
                <Badge variant="green">{item.analogy}</Badge>
                <h3 className="mt-3 text-lg font-bold text-foreground">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="mcu" className="border-t border-line py-16 sm:py-20">
        <div className="container-px mx-auto max-w-4xl">
          <Badge variant="primary">핵심 부품</Badge>
          <h2 className="mt-4 text-3xl font-bold tracking-tight text-foreground">
            MCU란?
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-muted">
            <strong className="text-foreground">MCU(Micro Controller Unit)</strong>는 손바닥보다 작은 칩 하나에 컴퓨터의 핵심 기능이 모두 들어 있는 부품이에요.
          </p>
          <div className="mt-6 rounded-xl border border-line bg-primary-light p-6">
            <p className="text-base leading-relaxed text-foreground">
              집으로 비유하면, MCU는 작은 원룸 같은 거예요. 비록 작지만, 필요한 모든 것이 하나의 방 안에 들어 있어요.
              계산도 하고, 주변 기기와 대화도 하고, 자동으로 판단도 할 수 있어요.
            </p>
          </div>
          <p className="mt-4 text-base leading-relaxed text-muted">
            가장 유명한 MCU로는 STM32, ESP32, ATmega 등이 있어요. 이 칩들을 활용하면 센서 데이터를 읽고,
            모터를 움직이고, 무선 통신을 하는 것들을 구현할 수 있어요.
          </p>
        </div>
      </section>

      <section id="when-needed" className="border-t border-line bg-surface py-16 sm:py-20">
        <div className="container-px mx-auto max-w-4xl">
          <Badge variant="primary">판단 기준</Badge>
          <h2 className="mt-4 text-3xl font-bold tracking-tight text-foreground">
            임베디드 개발이 필요한 순간
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-muted">
            다음과 같은 상황이 하나라도 해당된다면, 임베디드 개발이 필요할 수 있어요.
          </p>

          <div className="mt-8 space-y-3">
            {whenNeededCases.map((item, i) => (
              <div key={i} className="flex items-start gap-3 rounded-lg border border-line bg-white p-4">
                <ChevronRight className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                <span className="text-sm text-foreground">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="how-we-help" className="border-t border-line py-16 sm:py-20">
        <div className="container-px mx-auto max-w-4xl">
          <SectionHeading
            eyebrow="How We Help"
            title="JSTech가 어떻게 도와줄 수 있는지"
            description=" שלכם의 상황에 맞는 방법을 선택해 보세요."
            align="left"
          />

          <div className="mt-8 grid gap-6 sm:grid-cols-2">
            {helpServices.map((service) => (
              <div key={service.title} className="flex flex-col gap-4 rounded-xl border border-line bg-white p-6">
                <h3 className="text-lg font-bold text-foreground">{service.title}</h3>
                <p className="flex-1 text-sm leading-relaxed text-muted">{service.desc}</p>
                <Button href={service.href} variant="primary" size="sm">
                  문의하기
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-primary py-16 text-center text-white sm:py-20">
        <div className="container-px mx-auto max-w-3xl">
          <BookOpen className="mx-auto h-10 w-10 text-primary-light" />
          <h2 className="mt-6 text-3xl font-bold tracking-tight sm:text-4xl">
            다음 단계: 무료 상담으로 시작하세요
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-lg text-primary-light">
            무엇이든 모르는 것이 있다면 편하게 질문해 주세요. 무료 상담을 통해 함께 방법을 찾아드립니다.
          </p>
          <div className="mt-8">
            <Button href="/contact" variant="white" size="lg">
              무료 상담 신청
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
