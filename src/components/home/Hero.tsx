import { SITE } from "@/data/site";
import { Button } from "@/components/ui/button";

const techTags = ["STM32", "ESP32", "ATmel", "ARM Cortex", "C", "C++", "Qt"];

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-white via-surface to-white">
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.06]"
        style={{
          backgroundImage:
            "linear-gradient(#1a73e8 1px, transparent 1px), linear-gradient(90deg, #1a73e8 1px, transparent 1px)",
          backgroundSize: "48px 48px",
        }}
      />
      <div className="container-px relative mx-auto max-w-6xl py-24 sm:py-32">
        <div className="mx-auto max-w-3xl text-center">
          <p className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary-light px-4 py-1.5 text-sm font-medium text-primary">
            <span className="flex h-2 w-2 rounded-full bg-secondary" />
            {SITE.years} 임베디드 개발 경력 · {SITE.careers}
          </p>

          <h1 className="mt-6 text-4xl font-bold leading-tight tracking-tight text-foreground sm:text-5xl lg:text-6xl">
            {SITE.heroMessageA}
          </h1>
          <p className="mt-4 text-2xl font-bold text-primary sm:text-3xl">
            {SITE.heroMessageB}
          </p>
          <p className="mt-6 text-lg text-muted">
            펌웨어 개발, IoT 솔루션, HW/SW 통합 개발, 양산 지원까지 —{" "}
            <span className="font-semibold text-foreground">
              기획부터 양산까지 원스톱
            </span>
            으로 함께합니다.
          </p>

          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button href="/contact" size="lg">
              프로젝트 문의
            </Button>
            <Button href="/projects" variant="outline" size="lg">
              포트폴리오 보기
            </Button>
          </div>

          <div className="mt-10 flex flex-wrap items-center justify-center gap-2">
            {techTags.map((tag) => (
              <span
                key={tag}
                className="rounded-full border border-line bg-white px-4 py-1.5 text-sm font-medium text-muted"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
