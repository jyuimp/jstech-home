import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <section className="flex flex-col items-center justify-center px-6 py-32 text-center">
      <p className="text-8xl font-extrabold tracking-tighter text-primary">404</p>
      <h1 className="mt-6 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
        페이지를 찾을 수 없습니다
      </h1>
      <p className="mt-4 max-w-md text-lg leading-relaxed text-muted">
        요청하신 페이지는 존재하지 않거나 이동되었을 수 있습니다.
      </p>
      <Button href="/" variant="primary" size="lg" className="mt-10">
        홈으로 돌아가기
      </Button>
    </section>
  );
}
