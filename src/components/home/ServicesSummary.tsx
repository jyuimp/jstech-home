import { Cpu, Wifi, CircuitBoard, Boxes, Factory, ArrowRight } from "lucide-react";
import { services } from "@/data/services";
import { Button } from "@/components/ui/button";

const iconMap = {
  Cpu,
  Wifi,
  CircuitBoard,
  Boxes,
  Factory,
};

export function ServicesSummary() {
  const featured = services.slice(0, 4);

  return (
    <section className="container-px mx-auto max-w-6xl py-20">
      <div className="mx-auto max-w-2xl text-center">
        <p className="text-sm font-semibold uppercase tracking-wider text-primary">
          Our Services
        </p>
        <h2 className="mt-4 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
          임베디드 개발의 모든 것
        </h2>
        <p className="mt-4 text-lg text-muted">
          펌웨어부터 양산까지, 프로젝트의 전 과정을 원스톱으로 수행합니다.
        </p>
      </div>

      <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {featured.map((service) => {
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
              <h3 className="mt-4 text-lg font-bold text-foreground">{service.title}</h3>
              <p className="mt-2 flex-1 text-sm leading-relaxed text-muted">
                {service.short}
              </p>
              <span className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-primary">
                자세히 보기
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </span>
            </a>
          );
        })}
      </div>

      <div className="mt-10 flex justify-center">
        <Button href="/services" variant="outline">
          전체 사업영역 보기
        </Button>
      </div>
    </section>
  );
}
