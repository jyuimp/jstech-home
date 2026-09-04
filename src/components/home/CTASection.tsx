import { Phone } from "lucide-react";
import { SITE } from "@/data/site";
import { Button } from "@/components/ui/button";

export function CTASection() {
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
          <a
            href="tel:01024843208"
            className="inline-flex min-h-[52px] items-center gap-2 rounded-lg border border-white/40 px-8 text-lg font-medium text-white transition-colors hover:bg-white/10"
          >
            <Phone className="h-5 w-5" />
            {SITE.phone}
          </a>
        </div>
        <p className="mt-6 text-sm text-primary-light">
          평균 24시간 이내 상담 회신 · 부담 없이 문의하세요
        </p>
      </div>
    </section>
  );
}
