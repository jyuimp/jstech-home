const clients = [
  "제조업 R&D",
  "의료기기 스타트업",
  "IoT 솔루션",
  "산업용 장비",
  "스마트팩토리",
  "모빌리티",
  "소비재 브랜드",
  "에듀테크",
];

export function ClientLogos() {
  return (
    <section className="border-y border-line bg-white py-12">
      <div className="mx-auto max-w-6xl">
        <p className="text-center text-sm font-medium uppercase tracking-wider text-muted">
          다양한 산업의 파트너와 협력하고 있습니다
        </p>
        <div className="relative mt-8 overflow-hidden">
          <div className="flex w-max animate-marquee gap-12">
            {[...clients, ...clients].map((client, i) => (
              <span
                key={i}
                className="whitespace-nowrap rounded-lg border border-line px-6 py-3 text-base font-semibold text-muted"
              >
                {client}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
