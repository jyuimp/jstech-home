import type { Metadata } from "next";
import { Phone, Mail, Calendar, ChevronDown } from "lucide-react";
import { SITE } from "@/data/site";
import { PageHero } from "@/components/ui/page-hero";
import { SectionHeading } from "@/components/ui/section-heading";
import { Badge } from "@/components/ui/badge";
import { ContactForm } from "@/components/contact/ContactForm";

export const metadata: Metadata = {
  title: "문의",
  description:
    "프로젝트, 제품, 교육 등 무엇이든 문의하세요. 평균 24시간 이내 회신합니다. 무료 기술 상담을 원하시면 지금 연락 주세요.",
};

const faqItems = [
  {
    question: "상담 비용이 있나요?",
    answer: "아니요, 상담은 완전히 무료입니다. 프로젝트 규모나 방향에 대해 편하게 이야기 나누실 수 있어요.",
  },
  {
    question: "소규모 프로젝트도 가능하나요?",
    answer: "네, 소규모 프로젝트도 환영합니다. 1개 부품 개발부터 전체 시스템 개발까지 맞춤 상담이 가능합니다.",
  },
  {
    question: "TEMPLATE이나 샘플이 있나요?",
    answer: "이전 프로젝트 레퍼런스는 상담 시 공유해 드릴 수 있습니다. NDA 체결 후 구체적인 사례를 확인하실 수 있어요.",
  },
  {
    question: "교육은 어떻게 진행되나요?",
    answer: "대면/비대면 모두 가능하며, 초급~고급 과정을 상황에 맞게 구성합니다. 자세한 내용은 문의해 주세요.",
  },
];

const companyInfo = [
  { icon: Phone, label: "전화", value: SITE.phone },
  { icon: Mail, label: "이메일", value: SITE.email },
  { icon: Calendar, label: "설립일", value: SITE.established },
];

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="문의"
        description="프로젝트, 제품, 교육 등 무엇이든 문의하세요. 평균 24시간 이내 회신합니다."
      />

      <section className="py-16 sm:py-20">
        <div className="container-px mx-auto max-w-6xl">
          <div className="grid gap-12 lg:grid-cols-5">
            <div className="lg:col-span-3">
              <SectionHeading
                eyebrow="Message"
                title="문의하기"
                align="left"
              />
              <div className="mt-8">
                <ContactForm />
              </div>
            </div>

            <div className="space-y-6 lg:col-span-2">
              <div>
                <h3 className="text-lg font-bold text-foreground">회사 정보</h3>
                <div className="mt-4 space-y-4">
                  {companyInfo.map((item) => {
                    const Icon = item.icon;
                    return (
                      <div key={item.label} className="flex items-center gap-3 rounded-xl border border-line bg-white p-4">
                        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary-light">
                          <Icon className="h-5 w-5 text-primary" />
                        </div>
                        <div>
                          <p className="text-xs text-muted">{item.label}</p>
                          <p className="text-sm font-medium text-foreground">{item.value}</p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

              <div className="rounded-xl border border-line bg-surface p-6">
                <p className="text-sm font-semibold text-foreground">대표</p>
                <p className="mt-1 text-sm text-muted">{SITE.ceo}</p>
                <div className="mt-4 border-t border-line pt-4">
                  <p className="text-sm font-semibold text-foreground">경력</p>
                  <p className="mt-1 text-sm text-muted">{SITE.careers} ({SITE.years})</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="border-t border-line bg-surface py-16 sm:py-20">
        <div className="container-px mx-auto max-w-3xl">
          <SectionHeading
            eyebrow="FAQ"
            title="자주 묻는 질문"
            description="입문자분들이 자주 물어보시는 질문을 모았습니다."
          />

          <div className="mt-10 space-y-4">
            {faqItems.map((item) => (
              <details
                key={item.question}
                className="group rounded-xl border border-line bg-white"
              >
                <summary className="flex cursor-pointer items-center justify-between gap-4 p-5 text-sm font-semibold text-foreground list-none">
                  <span className="flex items-center gap-3">
                    <Badge variant="primary">Q</Badge>
                    {item.question}
                  </span>
                  <ChevronDown className="h-4 w-4 shrink-0 text-muted transition-transform group-open:rotate-180" />
                </summary>
                <div className="border-t border-line px-5 pb-5 pt-4">
                  <p className="text-sm leading-relaxed text-muted">{item.answer}</p>
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
