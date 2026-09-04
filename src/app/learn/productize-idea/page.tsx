import type { Metadata } from "next";
import { Lightbulb, Wrench, Package, GraduationCap, MessageCircle, CheckCircle, AlertTriangle, ArrowRight } from "lucide-react";
import { PageHero } from "@/components/ui/page-hero";
import { SectionHeading } from "@/components/ui/section-heading";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

export const metadata: Metadata = {
  title: "나의 아이디어 제품화하기",
  description:
    "머릿속 아이디어를 실제 임베디드 제품으로 만드는 과정을 기획, 설계, 개발, 양산 단계별로 안내합니다.",
};

const decisionOptions = [
  {
    icon: Lightbulb,
    situation: "아이디어만 있는데 실제 제품을 만들고 싶어요",
    action: "무료 상담 신청",
    description: "기술 가능성, 예상 비용, 일정을 함께 검토합니다.",
    href: "/contact",
    badge: "개발 용역",
  },
  {
    icon: Wrench,
    situation: "프로토타입이나 시제품이 필요합니다",
    action: "프로젝트 문의",
    description: "소량 제작부터 시제품까지 맞춤 상담을 진행합니다.",
    href: "/contact",
    badge: "시제품",
  },
  {
    icon: Package,
    situation: "이미 개발된 부품이나 모듈을 찾고 있어요",
    action: "문의하기",
    description: "활용 가능한 솔루션을 안내해 드립니다.",
    href: "/contact",
    badge: "부품 안내",
  },
  {
    icon: GraduationCap,
    situation: "직접 배워서 만들고 싶습니다",
    action: "교육 과정 안내",
    description: "입문부터 실전까지 단계별 교육을 받으실 수 있어요.",
    href: "/contact",
    badge: "교육",
  },
];

const costGuide = [
  {
    type: "간단한 센서 모듈",
    budget: "100~300만원",
    period: "2~4주",
    desc: "온도, 습도 등을 측정하는 단순한 기기",
  },
  {
    type: "IoT 기기",
    budget: "300~800만원",
    period: "1~3개월",
    desc: "무선 통신, 앱 연동이 필요한 중간 복잡도 제품",
  },
  {
    type: "복잡한 제어 시스템",
    budget: "800만원~",
    period: "3개월~",
    desc: "여러 센서, 모터, 정밀 제어가 필요한 기기",
  },
];

const checklist = [
  "아이디어를 가능한 한 자세히 적어보세요",
  "어떤 문제를 해결하는 제품인지 명확히 하세요",
  "유사 제품이 시장에 있는지 찾아보세요",
  "예상 고객이 누구인지 생각해 보세요",
  "대략적인 예산 범위를 정해보세요",
  "원하는 완성 시점을 정해보세요",
];

export default function ProductizeIdeaPage() {
  return (
    <>
      <PageHero
        title="나의 아이디어 제품화하기"
        description="머릿속 아이디어를 현실로 만드는 과정을 안내합니다."
      />

      <section className="py-16 sm:py-20">
        <div className="container-px mx-auto max-w-5xl">
          <SectionHeading
            eyebrow="어디에 속하나요?"
            title="지금 내 상황은?"
            description="현재 상황에 맞는 항목을 골라보세요. 가장 적합한 다음 단계를 안내해 드립니다."
          />

          <div className="mt-12 grid gap-6 sm:grid-cols-2">
            {decisionOptions.map((option) => {
              const Icon = option.icon;
              return (
                <div
                  key={option.situation}
                  className="flex flex-col rounded-xl border border-line bg-white p-6 shadow-sm"
                >
                  <div className="flex items-center gap-3">
                    <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-primary-light">
                      <Icon className="h-5 w-5 text-primary" />
                    </div>
                    <Badge variant="primary">{option.badge}</Badge>
                  </div>
                  <p className="mt-4 text-sm text-muted">{option.situation}</p>
                  <h3 className="mt-2 text-lg font-bold text-foreground">{option.action}</h3>
                  <p className="mt-2 flex-1 text-sm text-muted">{option.description}</p>
                  <Button href={option.href} variant="primary" size="sm" className="mt-4 self-start">
                    문의하기
                    <ArrowRight className="h-4 w-4" />
                  </Button>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="border-t border-line bg-surface py-16 sm:py-20">
        <div className="container-px mx-auto max-w-5xl">
          <SectionHeading
            eyebrow="현실적 안내"
            title="개발 비용과 기간은 얼마나?"
            description="복잡도에 따라 달라지지만, 대략적인 수준을 알려드립니다."
            align="left"
          />

          <div className="mt-10 overflow-x-auto">
            <table className="w-full min-w-[480px] border border-line bg-white">
              <thead>
                <tr className="border-b border-line bg-surface">
                  <th className="p-4 text-left text-sm font-semibold text-foreground">제품 유형</th>
                  <th className="p-4 text-left text-sm font-semibold text-foreground">예상 비용</th>
                  <th className="p-4 text-left text-sm font-semibold text-foreground">기간</th>
                </tr>
              </thead>
              <tbody>
                {costGuide.map((row) => (
                  <tr key={row.type} className="border-b border-line last:border-0">
                    <td className="p-4">
                      <p className="text-sm font-semibold text-foreground">{row.type}</p>
                      <p className="mt-1 text-xs text-muted">{row.desc}</p>
                    </td>
                    <td className="p-4 text-sm text-foreground">{row.budget}</td>
                    <td className="p-4 text-sm text-foreground">{row.period}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="mt-4 flex items-start gap-2 rounded-lg border border-accent/30 bg-accent/5 p-4">
            <AlertTriangle className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
            <p className="text-sm text-muted">
              위 비용은 대략적인 참고용이며, 실제 프로젝트의 요구사항에 따라 달라집니다. 정확한 견적은 상담을 통해 안내해 드립니다.
            </p>
          </div>
        </div>
      </section>

      <section className="border-t border-line py-16 sm:py-20">
        <div className="container-px mx-auto max-w-5xl">
          <SectionHeading
            eyebrow="체크리스트"
            title="실패를 줄이는 준비 체크리스트"
            description="상담 전에 미리 준비하면 더 좋은 것들이에요."
            align="left"
          />

          <div className="mt-10 grid gap-3 sm:grid-cols-2">
            {checklist.map((item, i) => (
              <div
                key={i}
                className="flex items-start gap-3 rounded-xl border border-line bg-white p-4"
              >
                <CheckCircle className="mt-0.5 h-5 w-5 shrink-0 text-secondary" />
                <span className="text-sm text-foreground">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-primary py-16 text-center text-white sm:py-20">
        <div className="container-px mx-auto max-w-3xl">
          <MessageCircle className="mx-auto h-10 w-10 text-primary-light" />
          <h2 className="mt-6 text-3xl font-bold tracking-tight sm:text-4xl">
            무료 상담으로 시작하세요
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-lg text-primary-light">
            준비하지 않아도 괜찮습니다. 아이디어만 가지고 오시면 함께 방법을 찾아드립니다.
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
