import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Cpu, Wifi, CircuitBoard, Boxes, Factory, CheckCircle2, ArrowRight } from "lucide-react";
import { services, type Service } from "@/data/services";
import { PageHero } from "@/components/ui/page-hero";
import { SectionHeading } from "@/components/ui/section-heading";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

const iconMap = { Cpu, Wifi, CircuitBoard, Boxes, Factory };

function getService(slug: string): Service | undefined {
  return services.find((s) => s.slug === slug);
}

type PageParams = Promise<{ slug: string }>;

export async function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: PageParams;
}): Promise<Metadata> {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) return { title: "서비스를 찾을 수 없습니다" };
  return {
    title: service.title,
    description: service.description,
  };
}

export default async function ServicePage({
  params,
}: {
  params: PageParams;
}) {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) notFound();

  const Icon = iconMap[service.icon as keyof typeof iconMap] ?? Cpu;

  const otherServices = services.filter((s) => s.slug !== service.slug);

  return (
    <>
      <PageHero
        eyebrow="Service"
        title={service.title}
        description={service.description}
      />

      <section className="container-px mx-auto max-w-6xl py-20">
        <div className="grid gap-12 lg:grid-cols-3">
          <div className="lg:col-span-2 space-y-12">
            <div>
              <SectionHeading
                eyebrow="Overview"
                title="서비스 소개"
                align="left"
              />
              <p className="mt-6 text-lg leading-relaxed text-muted">
                {service.description}
              </p>
            </div>

            <div>
              <SectionHeading
                eyebrow="Features"
                title="주요 기능"
                align="left"
              />
              <ul className="mt-6 space-y-3">
                {service.features.map((f) => (
                  <li
                    key={f}
                    className="flex items-start gap-3 rounded-xl border border-line bg-white px-5 py-4"
                  >
                    <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-secondary" />
                    <span className="text-foreground">{f}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="space-y-8">
            <div className="rounded-2xl border border-line bg-white p-6">
              <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-primary-light text-primary">
                <Icon className="h-7 w-7" />
              </div>
              <h3 className="mt-4 text-lg font-bold text-foreground">
                {service.title}
              </h3>
              <p className="mt-2 text-sm text-muted">{service.short}</p>

              <div className="mt-6">
                <p className="text-sm font-medium text-muted mb-2">
                  지원 MCU
                </p>
                <div className="flex flex-wrap gap-2">
                  {service.mcus.map((mcu) => (
                    <Badge key={mcu} variant="primary">
                      {mcu}
                    </Badge>
                  ))}
                </div>
              </div>

              <div className="mt-5">
                <p className="text-sm font-medium text-muted mb-2">
                  관련 산업
                </p>
                <div className="flex flex-wrap gap-2">
                  {service.industries.map((ind) => (
                    <Badge key={ind} variant="green">
                      {ind}
                    </Badge>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-surface py-20">
        <div className="container-px mx-auto max-w-6xl">
          <SectionHeading
            eyebrow="Other Services"
            title="다른 서비스 둘러보기"
          />
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {otherServices.map((s) => {
              const SvcIcon = iconMap[s.icon as keyof typeof iconMap] ?? Cpu;
              return (
                <a
                  key={s.slug}
                  href={`/services/${s.slug}`}
                  className="group flex flex-col rounded-2xl border border-line bg-white p-6 transition-all hover:-translate-y-1 hover:border-primary/40 hover:shadow-md"
                >
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary-light text-primary">
                    <SvcIcon className="h-5 w-5" />
                  </div>
                  <h3 className="mt-3 text-base font-bold text-foreground">
                    {s.title}
                  </h3>
                  <p className="mt-1 flex-1 text-sm text-muted">{s.short}</p>
                  <span className="mt-3 inline-flex items-center gap-1 text-sm font-medium text-primary">
                    자세히 보기
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </span>
                </a>
              );
            })}
          </div>
        </div>
      </section>

      <section className="bg-primary py-16 text-center text-white">
        <div className="container-px mx-auto max-w-4xl">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            {service.title} 문의하기
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-primary-light">
            {service.title} 프로젝트에 대해 무료 상담을 받아보세요.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button href="/contact" variant="white" size="lg">
              무료 기술 상담 신청
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
