import type { Metadata } from "next";
import {
  Cpu,
  Wifi,
  CircuitBoard,
  Boxes,
  Factory,
  ArrowRight,
  CheckCircle2,
  Lightbulb,
  PenTool,
  Code2,
  TestTube2,
  PackageCheck,
} from "lucide-react";
import { services } from "@/data/services";
import { techStack } from "@/data/tech";
import { PageHero } from "@/components/ui/page-hero";
import { SectionHeading } from "@/components/ui/section-heading";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "사업영역",
  description:
    "펌웨어 개발부터 IoT 솔루션, 하드웨어 설계, 시스템 통합, 양산 지원까지 — JSTech의 5대 핵심 사업 영역.",
};

const iconMap = { Cpu, Wifi, CircuitBoard, Boxes, Factory };

const processSteps = [
  { icon: Lightbulb, label: "기획", desc: "요구사항 분석 및 프로젝트 설계" },
  { icon: PenTool, label: "설계", desc: "시스템 아키텍처 및 회로 설계" },
  { icon: Code2, label: "개발", desc: "펌웨어·하드웨어·소프트웨어 구현" },
  { icon: TestTube2, label: "테스트", desc: "검증 및 품질 확인" },
  { icon: PackageCheck, label: "양산", desc: "BOM·소싱·인증·양산 관리" },
];

function ServicesGrid() {
  return (
    <section className="container-px mx-auto max-w-6xl py-20">
      <SectionHeading
        eyebrow="What We Do"
        title="5대 핵심 사업 영역"
        description="기획부터 양산까지, 프로젝트의 전 과정을 원스톱으로 수행합니다."
      />
      <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {services.map((service) => {
          const Icon = iconMap[service.icon as keyof typeof iconMap] ?? Cpu;
          return (
            <a
              key={service.slug}
              href={`/services/${service.slug}`}
              className="group flex flex-col rounded-2xl border border-line bg-white p-6 transition-all hover:-translate-y-1 hover:border-primary/40 hover:shadow-lg"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary-light text-primary">
                <Icon className="h-6 w-6" />
              </div>
              <h3 className="mt-4 text-lg font-bold text-foreground">
                {service.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">
                {service.short}
              </p>
              <ul className="mt-4 flex-1 space-y-1.5">
                {service.features.slice(0, 3).map((f) => (
                  <li
                    key={f}
                    className="flex items-start gap-2 text-sm text-muted"
                  >
                    <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-secondary" />
                    {f}
                  </li>
                ))}
              </ul>
              <span className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-primary">
                자세히 보기
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </span>
            </a>
          );
        })}
      </div>
    </section>
  );
}

function TechStack() {
  return (
    <section className="bg-surface py-20">
      <div className="container-px mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="Tech Stack"
          title="기술 스택"
          description="다양한 플랫폼과 기술을 아우르는 폭넓은 기술력"
        />
        <div className="mt-12 grid gap-6 sm:grid-cols-2">
          {techStack.map((cat) => (
            <div
              key={cat.category}
              className="rounded-2xl border border-line bg-white p-6"
            >
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary-light text-primary">
                  <Cpu className="h-5 w-5" />
                </div>
                <h3 className="text-lg font-bold text-foreground">
                  {cat.category}
                </h3>
              </div>
              <div className="mt-4 space-y-3">
                {cat.items.map((item) => (
                  <div
                    key={item.name}
                    className="flex items-baseline justify-between gap-4"
                  >
                    <span className="font-medium text-foreground">
                      {item.name}
                    </span>
                    <span className="text-right text-sm text-muted">
                      {item.detail}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function DevelopmentProcess() {
  return (
    <section className="container-px mx-auto max-w-6xl py-20">
      <SectionHeading
        eyebrow="Process"
        title="개발 프로세스"
        description="기획에서 양산까지, 체계적인 5단계 프로세스"
      />
      <div className="mt-12 relative">
        <div className="absolute left-6 top-0 bottom-0 w-px bg-line md:left-1/2 md:-translate-x-px" />
        <div className="space-y-8">
          {processSteps.map((step, i) => {
            const Icon = step.icon;
            return (
              <div
                key={step.label}
                className={`relative flex items-center gap-6 md:gap-0 ${
                  i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                }`}
              >
                <div className={`hidden md:block md:w-1/2 ${i % 2 === 0 ? "text-right pr-12" : "text-left pl-12"}`}>
                  <div className="rounded-2xl border border-line bg-white p-6 inline-block">
                    <h3 className="text-lg font-bold text-foreground">
                      {step.label}
                    </h3>
                    <p className="mt-1 text-sm text-muted">{step.desc}</p>
                  </div>
                </div>
                <div className="absolute left-6 md:left-1/2 -translate-x-1/2 z-10 flex h-12 w-12 items-center justify-center rounded-full bg-primary text-white shadow-md">
                  <Icon className="h-5 w-5" />
                </div>
                <div className={`md:hidden ml-16 rounded-2xl border border-line bg-white p-4`}>
                  <h3 className="font-bold text-foreground">{step.label}</h3>
                  <p className="mt-1 text-sm text-muted">{step.desc}</p>
                </div>
                <div className="hidden md:block md:w-1/2" />
              </div>
            );
          })}
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
          프로젝트를 시작해보세요
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-lg text-primary-light">
          아이디어만 있다면 상관없습니다. 무료 기술 상담으로 프로젝트의 방향을
          함께 설계해 드립니다.
        </p>
        <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Button href="/contact" variant="white" size="lg">
            무료 기술 상담 신청
          </Button>
        </div>
      </div>
    </section>
  );
}

export default function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="Services"
        title="사업영역"
        description="5대 핵심 역량으로 기획부터 양산까지 원스톱 임베디드 개발 서비스를 제공합니다."
      />
      <ServicesGrid />
      <TechStack />
      <DevelopmentProcess />
      <CTA />
    </>
  );
}
