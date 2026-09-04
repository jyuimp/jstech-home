import Image from "next/image";
import { SITE } from "@/data/site";
import { Button } from "@/components/ui/button";

const techTags = ["STM32", "ESP32", "ATmel", "ARM Cortex", "C", "C++", "Qt"];

const CODE_IMAGE_SRC =
  "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=1200&q=80";

const PCB_IMAGE_SRC =
  "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=800&q=80";

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-white via-surface to-white">
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.06]"
        aria-hidden="true"
        style={{
          backgroundImage:
            "linear-gradient(#1a73e8 1px, transparent 1px), linear-gradient(90deg, #1a73e8 1px, transparent 1px)",
          backgroundSize: "48px 48px",
        }}
      />
      <div className="container-px relative mx-auto max-w-7xl py-20 sm:py-28 lg:py-32">
        <div className="grid items-center gap-10 sm:gap-12 lg:grid-cols-2 lg:gap-16">
          <div className="flex flex-col items-center text-center lg:items-start lg:text-left">
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
            <p className="mt-6 max-w-xl text-lg text-muted">
              펌웨어 개발, IoT 솔루션, HW/SW 통합 개발, 양산 지원까지 —{" "}
              <span className="font-semibold text-foreground">
                기획부터 양산까지 원스톱
              </span>
              으로 함께합니다.
            </p>

            <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row lg:justify-start">
              <Button href="/contact" size="lg">
                프로젝트 문의
              </Button>
              <Button href="/projects" variant="outline" size="lg">
                포트폴리오 보기
              </Button>
            </div>

            <div className="mt-10 flex flex-wrap items-center justify-center gap-2 lg:justify-start">
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

          <div className="relative mx-auto w-full max-w-lg lg:mx-0 lg:max-w-none">
            <div className="relative aspect-[4/3] overflow-hidden rounded-2xl shadow-2xl shadow-primary/10">
              <Image
                src={CODE_IMAGE_SRC}
                alt="프로그래밍 코드 화면 - 소프트웨어 개발 환경"
                fill
                sizes="(max-width: 1023px) 100vw, 45vw"
                className="object-cover"
                preload
              />
              <div
                aria-hidden="true"
                className="absolute inset-0 bg-gradient-to-tr from-primary/10 via-transparent to-secondary/5"
              />
            </div>

            <div
              className="absolute -bottom-4 -left-4 sm:-bottom-6 sm:-left-6 w-2/5 aspect-[3/2] overflow-hidden rounded-xl border-2 border-white shadow-xl"
            >
              <Image
                src={PCB_IMAGE_SRC}
                alt="임베디드 회로 기판 - 정밀 PCB 회로 디테일"
                fill
                sizes="(max-width: 1023px) 35vw, 18vw"
                className="object-cover"
              />
              <div
                aria-hidden="true"
                className="absolute inset-0 bg-gradient-to-br from-secondary/10 via-transparent to-primary/5"
              />
            </div>

            <div
              aria-hidden="true"
              className="mx-auto mt-4 h-1 w-24 rounded-full bg-gradient-to-r from-primary to-secondary lg:mx-0"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
