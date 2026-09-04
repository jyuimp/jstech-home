"use client";

import { useEffect, useRef, useState } from "react";
import { Award, Calculator, Layers, LifeBuoy } from "lucide-react";

const counterItems = [
  { icon: Award, label: "임베디드 개발 경력", value: 11, suffix: "년+" },
  { icon: Calculator, label: "투명한 온라인 견적", value: 0, text: "차별화" },
  { icon: Layers, label: "지원 MCU 플랫폼", value: 4, suffix: "종" },
  { icon: LifeBuoy, label: "원스톱 개발 프로세스", value: 0, text: "기획→양산" },
];

function useCountUp(target: number, active: boolean, duration = 1200) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!active || target === 0) return;
    let start: number | null = null;
    let frame: number;
    const step = (ts: number) => {
      if (start === null) start = ts;
      const progress = Math.min((ts - start) / duration, 1);
      setCount(Math.floor(progress * target));
      if (progress < 1) frame = requestAnimationFrame(step);
    };
    frame = requestAnimationFrame(step);
    return () => cancelAnimationFrame(frame);
  }, [active, target, duration]);

  return count;
}

function Counter({
  icon: Icon,
  label,
  value,
  suffix,
  text,
  active,
}: (typeof counterItems)[number] & { active: boolean }) {
  const count = useCountUp(value, active);
  return (
    <div className="flex flex-col items-center gap-3 p-6 text-center">
      <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary-light text-primary">
        <Icon className="h-6 w-6" />
      </div>
      <div className="text-3xl font-bold text-foreground">
        {text ? (
          text
        ) : (
          <>
            {count}
            <span className="text-primary">{suffix || ""}</span>
          </>
        )}
      </div>
      <p className="text-sm text-muted">{label}</p>
    </div>
  );
}

export function WhyJSTech() {
  const ref = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setActive(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="bg-surface py-20">
      <div className="container-px mx-auto max-w-6xl">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-wider text-primary">
            Why JSTech
          </p>
          <h2 className="mt-4 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            왜 JSTech인가?
          </h2>
          <p className="mt-4 text-lg text-muted">
            11년의 경험으로 검증된 전문성과 투명한 협업 방식.
          </p>
        </div>

        <div
          ref={ref}
          className="mt-12 grid grid-cols-2 divide-y divide-line rounded-2xl border border-line bg-white lg:grid-cols-4 lg:divide-x lg:divide-y-0"
        >
          {counterItems.map((item) => (
            <Counter key={item.label} {...item} active={active} />
          ))}
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          <div className="rounded-2xl border border-line bg-white p-8">
            <h3 className="text-xl font-bold text-foreground">개발비 투명성</h3>
            <p className="mt-3 leading-relaxed text-muted">
              업계 최초 온라인 견적 시뮬레이터를 통해, 문의 전에 프로젝트 비용 범위를
              미리 확인할 수 있습니다. 숨은 비용 없이 투명하게 진행합니다.
            </p>
          </div>
          <div className="rounded-2xl border border-line bg-white p-8">
            <h3 className="text-xl font-bold text-foreground">기획 → 양산 원스톱</h3>
            <p className="mt-3 leading-relaxed text-muted">
              아이디어 단계에서부터 설계, 개발, 테스트, 양산 지원까지 한 팀이 책임지고
              수행합니다. 커뮤니케이션 비용을 줄이고 일정을 단축합니다.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
