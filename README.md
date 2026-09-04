# JSTech (제이에스테크) — 임베디드 개발 파트너 홈페이지

기획부터 양산까지 원스톱으로 제공하는 임베디드 개발 용역 전문 기업 **JSTech**의 기업 홈페이지입니다.

> Next.js 16 + TypeScript + Tailwind CSS 기반의 정적 MVP (Phase 1)

## 기술 스택

- **Framework**: Next.js 16 (App Router, Turbopack, `src-dir`)
- **Language**: TypeScript
- **Styling**: Tailwind CSS v4 (디자인 토큰 기반)
- **Animation**: Framer Motion (카운터 등)
- **Icons**: lucide-react
- **Utilities**: clsx, tailwind-merge, class-variance-authority

## 시작하기

```bash
npm install
npm run dev      # 개발 서버 (http://localhost:3000)
npm run build    # 프로덕션 빌드 (타입 체크 포함)
npm run start    # 프로덕션 서버 실행
npm run lint     # ESLint
```

## 사이트 구조 (라우트)

| 경로 | 설명 |
| --- | --- |
| `/` | 홈 (히어로 · 클라이언트 · 서비스 요약 · 차별성 · 대표 프로젝트 · CTA) |
| `/about` | 회사소개 (연혁 · 핵심가치 · 회사 정보) |
| `/services` | 사업영역 목록 |
| `/services/[slug]` | 사업영역 상세 (펌웨어 / IoT / 하드웨어 / 통합 / 양산) |
| `/projects` | 프로젝트 목록 (산업 · 기술 · 단계 필터) |
| `/projects/[slug]` | 프로젝트 상세 |
| `/learn` | 입문 가이드 |
| `/learn/*` | 가이드 상세 (임베디드란 · 제품화 · C/C++) |
| `/contact` | 문의 (클라이언트 폼) |
| `/privacy`, `/terms` | 개인정보처리방침 · 이용약관 |
| `/sitemap.xml`, `/robots.txt` | SEO |

## 프로젝트 구조

```
src/
├── app/                 # 라우트 (page.tsx, layout.tsx, metadata)
├── components/
│   ├── home/            # 홈 섹션 컴포넌트
│   ├── layout/          # Header / Footer
│   ├── projects/        # ProjectList (클라이언트 필터)
│   ├── contact/         # ContactForm (클라이언트 폼)
│   └── ui/              # button / badge / page-hero / section-heading
├── data/                # site / services / projects / tech / about
└── lib/                 # utils (cn)
```

## 데이터 / 커스터마이징

- 회사 정보(전화/이메일/설립일/대표 등): `src/data/site.ts`
- 서비스·프로젝트·기술·회사소개 데이터: `src/data/*.ts`
- 디자인 토큰(색상/폰트): `src/app/globals.css`

## 배포 (Vercel)

```bash
vercel
```

환경 변수: `NEXT_PUBLIC_SITE_URL` (기본 `https://jstech-home.vercel.app`)

## 참고 문서

기획서: [`docs/01_홈페이지_기획서.md`](docs/01_홈페이지_기획서.md)
