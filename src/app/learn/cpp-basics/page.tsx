import type { Metadata } from "next";
import { BookOpen, Code2, Rocket, Map, ArrowRight } from "lucide-react";
import { PageHero } from "@/components/ui/page-hero";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

export const metadata: Metadata = {
  title: "C/C++ 첫걸음",
  description:
    "임베디드 개발의 기본 언어인 C와 C++을 처음부터 차근차근 배워봅니다. 변수, 조건문, 함수, 포인터까지.",
};

const roadmapSteps = [
  { step: "1", title: "변수와 자료형", desc: "데이터를 저장하는 상자" },
  { step: "2", title: "조건문과 반복문", desc: "프로그램의 흐름을 조절하는 규칙" },
  { step: "3", title: "함수", desc: "반복되는 작업을 묶는 도구" },
  { step: "4", title: "포인터와 배열", desc: "메모리를 직접 다루는 방법" },
  { step: "5", title: "하드웨어 제어", desc: "실제 기기를 움직이는 코드 작성" },
];

export default function CppBasicsPage() {
  return (
    <>
      <PageHero
        title="C/C++ 첫걸음"
        description="임베디드 개발의 기본 언어를 처음부터 차근차근 배워봅니다."
      />

      <section className="py-16 sm:py-20">
        <div className="container-px mx-auto max-w-4xl">
          <div className="flex items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-primary-light">
              <BookOpen className="h-5 w-5 text-primary" />
            </div>
            <Badge variant="primary">기초 개념</Badge>
          </div>
          <h2 className="mt-6 text-3xl font-bold tracking-tight text-foreground">
            프로그래밍이란?
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-muted">
            프로그래밍은 컴퓨터에게 <strong className="text-foreground">&quot;이렇게 하세요&quot;</strong>라고 가르치는 언어예요.
            우리가 한국어로 대화하듯, 컴퓨터에게는 프로그래밍 언어로 명령을 내려요.
          </p>
          <div className="mt-6 rounded-xl border border-line bg-primary-light p-6">
            <p className="text-base leading-relaxed text-foreground">
              레시피를 읽고 요리하는 것과 비슷해요. 재료(데이터)를 준비하고, 순서대로(프로세스) 요리(프로그램)를 하면 결과물이 나오는 거예요.
            </p>
          </div>
        </div>
      </section>

      <section className="border-t border-line bg-surface py-16 sm:py-20">
        <div className="container-px mx-auto max-w-4xl">
          <div className="flex items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-primary-light">
              <Code2 className="h-5 w-5 text-primary" />
            </div>
            <Badge variant="primary">핵심 언어</Badge>
          </div>
          <h2 className="mt-6 text-3xl font-bold tracking-tight text-foreground">
            C언어가 뭔가요?
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-muted">
            <strong className="text-foreground">C언어</strong>는 1970년대에 만들어진 프로그래밍 언어예요. 나이는 많지만,
            여전히 가장 중요한 언어 중 하나예요.
          </p>
          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            <div className="rounded-xl border border-line bg-white p-5">
              <p className="font-semibold text-foreground">왜 오래됐는데 아직도 쓰나요?</p>
              <p className="mt-2 text-sm text-muted">
                컴퓨터 하드웨어와 가장 가까운 언어라서, 성능이 중요한 임베디드 분야에서 여전히 최고예요.
              </p>
            </div>
            <div className="rounded-xl border border-line bg-white p-5">
              <p className="font-semibold text-foreground">C++는 뭔가요?</p>
              <p className="mt-2 text-sm text-muted">
                C언어에 더 많은 기능을 추가한 진화된 언어예요. 더 복잡한 프로그램을 만들 때 편해요.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="border-t border-line py-16 sm:py-20">
        <div className="container-px mx-auto max-w-4xl">
          <Badge variant="primary">실습</Badge>
          <h2 className="mt-4 text-3xl font-bold tracking-tight text-foreground">
            첫 코드 예시
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-muted">
            가장 간단한 C 프로그램을 하나 살펴볼게요.
          </p>

          <div className="mt-8 rounded-xl bg-[#1e1e2e] p-6 overflow-x-auto">
            <p className="mb-3 text-xs text-slate-400">hello.c</p>
            <pre className="text-sm leading-relaxed">
              <code>
                <span className="text-cyan-400">#include</span> <span className="text-green-400">&lt;stdio.h&gt;</span>
                {"\n\n"}
                <span className="text-purple-400">int</span> <span className="text-yellow-300">main</span>(<span className="text-purple-400">void</span>) {"{"}
                {"\n  "}
                <span className="text-slate-400">printf</span>(<span className="text-green-400">&quot;안녕하세요, 세계!\\n&quot;</span>);
                {"\n  "}
                <span className="text-purple-400">return</span> <span className="text-orange-300">0</span>;
                {"\n"}
                {"}"}
              </code>
            </pre>
          </div>

          <div className="mt-6 space-y-3">
            <div className="flex items-start gap-3 rounded-lg border border-line bg-white p-4">
              <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary text-xs font-bold text-white">1</span>
              <p className="text-sm text-foreground">
                <strong className="text-foreground">#include &lt;stdio.h&gt;</strong> — 화면에 글자를 출력하는 도구를 가져옵니다.
              </p>
            </div>
            <div className="flex items-start gap-3 rounded-lg border border-line bg-white p-4">
              <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary text-xs font-bold text-white">2</span>
              <p className="text-sm text-foreground">
                <strong className="text-foreground">int main()</strong> — 프로그램이 시작되는 곳이에요. 모든 C 프로그램에는 이 부분이 있어야 해요.
              </p>
            </div>
            <div className="flex items-start gap-3 rounded-lg border border-line bg-white p-4">
              <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary text-xs font-bold text-white">3</span>
              <p className="text-sm text-foreground">
                <strong className="text-foreground">printf()</strong> — 괄호 안의 글자를 화면에 보여줍니다.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="border-t border-line bg-surface py-16 sm:py-20">
        <div className="container-px mx-auto max-w-4xl">
          <div className="flex items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-primary-light">
              <Map className="h-5 w-5 text-primary" />
            </div>
            <Badge variant="primary">학습 로드맵</Badge>
          </div>
          <h2 className="mt-6 text-3xl font-bold tracking-tight text-foreground">
            어떻게 배우면 좋을까요?
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-muted">
            순서대로 하나씩 배워나가면 됩니다. 매 단계를 충분히 익히고 다음으로 넘어가세요.
          </p>

          <div className="mt-10 space-y-4">
            {roadmapSteps.map((item) => (
              <div key={item.step} className="flex items-center gap-4 rounded-xl border border-line bg-white p-5">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary text-sm font-bold text-white">
                  {item.step}
                </span>
                <div>
                  <p className="font-semibold text-foreground">{item.title}</p>
                  <p className="mt-1 text-sm text-muted">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-primary py-16 text-center text-white sm:py-20">
        <div className="container-px mx-auto max-w-3xl">
          <Rocket className="mx-auto h-10 w-10 text-primary-light" />
          <h2 className="mt-6 text-3xl font-bold tracking-tight sm:text-4xl">
            더 배우고 싶다면 문의하세요
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-lg text-primary-light">
            체계적인 교육 과정이나 심화 학습이 필요하시다면, JSTech에 문의해 주세요.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button href="/contact" variant="white" size="lg">
              교육 과정 문의
              <ArrowRight className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
