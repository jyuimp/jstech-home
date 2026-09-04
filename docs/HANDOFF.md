HANDOFF CONTEXT
===============

USER REQUESTS (AS-IS)
---------------------
- "1. 회사 홈페이지를 만드는 기획서 작성 2. https://j-iot.co.kr/를 밴치마킹, 차별화 3. 임베디드 개발 용역 검토/검색/밴치마킹/차별화"
- "설립일 : 2015.02.02, 대표 : 전용운, 핵심 기술 : 펌웨어(STM32, ESP32, ATmel, ARM Cortex), C, C++, C#, Qt,"
- "계속"
- "전화번호 : 010-2484-3208, 이메일 : jyuimp@empas.com"
- "JSTech_Home 폴더 기획서 확인"
- "1부터 계속 진행" (기획서 1번 = 홈페이지 개발 착수, Phase 1)
- (자동 슬래시 명령) "/handoff 파일로 저장" - 핸드오프 요약을 파일로 저장

GOAL
----
임베디드 개발 용역 전문 기업 JSTech의 기업 홈페이지 구축 완료 (기획·개발·QA·배포 준비). Phase 1 정적 MVP: 홈/회사소개/사업영역(+상세)/프로젝트(목록+상세)/입문가이드/문의 + SEO.

WORK COMPLETED
--------------
- 기획서 docs/01_홈페이지_기획서.md (v1.4) 확인 및 개발 착수.
- Next.js 16 프로젝트 생성 후 JSTech_Home으로 rename. 의존성 설치: framer-motion, lucide-react, clsx, tailwind-merge, class-variance-authority. (Shadcn/UI·MDX·Supabase·Resend 미설치 — 후속 단계)
- 디자인 시스템: Tailwind v4 디자인 토큰(globals.css `@theme`), Inter 폰트, 공용 UI(button/badge/page-hero/section-heading), cn 유틸.
- 레이아웃: Header(모바일 메뉴 포함), Footer.
- 데이터: site / services(5) / projects(3) / tech / about.
- 홈 페이지: Hero / ClientLogos(marquee) / ServicesSummary / WhyJSTech(카운터) / FeaturedProjects / CTASection.
- 위임 완료 페이지: /about, /services(+slug), /projects(+slug, 필터), /learn(+3 상세), /contact(클라이언트 폼), /privacy, /terms, not-found, sitemap, robots.
- QA 완료: 통합 `npm run build` 성공 (24 라우트 정적/SSG), `npm run lint` 0 에러 0 경고, 브라우저 스모크 테스트(홈/서비스/서비스상세/문의 폼/404), 페이지별 metadata(타이틀) 보완, 버튼 variant 타입 오류 수정, 중국어 타이포("清单"→"체크리스트") 수정.
- README.md 작성 완료.

CURRENT STATE
-------------
- 작업 디렉토리: E:\workspace\opencode\JSTech\JSTech_Home (git 저장소 아님)
- 프로덕션 빌드/정적 생성 정상. 서버는 중지 상태 (npm run dev 또는 npm run start로 실행).
- 라우트(빌드 확인): / /about /services(+5 slug) /projects(+3 slug) /learn(+3) /contact /privacy /terms /sitemap.xml /robots.txt /not-found

PENDING TASKS
-------------
- [완료] 홈페이지 개발 Phase 1 (홈/회사소개/사업영역/프로젝트/문의 + SEO)
- [완료] 통합 빌드/린트/스모크 테스트 QA
- [대기] 확보 시 데이터 반영: 회사 주소, 사업자등록번호, 대표 프로젝트 실사진, 팀 규모
- [대기] 배포: Vercel (환경변수 NEXT_PUBLIC_SITE_URL)
- [대기] (기획서상 후속, 미착수) 백엔드 연동: /contact 폼 백엔드(Resend/Supabase), Framer Motion 세부 활용, Shadcn/UI·MDX 도입, 온라인 견적 시뮬레이터, 제품 스토어/교육 라우트 확장, 프로젝트 실 이미지 교체

KEY FILES
---------
- docs/01_홈페이지_기획서.md - 종합 기획서 (v1.4)
- src/app/globals.css - 디자인 토큰
- src/app/layout.tsx - 루트 레이아웃 + SERead 메타데이터
- src/data/*.ts - 회사/서비스/프로젝트/기술 데이터
- src/components/ - layout / home / ui / projects / contact
- README.md - 프로젝트 개요/구조/라우트

IMPORTANT DECISIONS
-------------------
- Next.js 16 (App Router, Turbopack, src-dir). 동적 라우트는 `await params` 패턴 사용.
- 디자인 토큰: primary #1a73e8, secondary #34a853, accent #fbbc04, surface #f8f9fa, muted #5f6368, line #e5e7eb.
- 폰트: Inter (Pretendard는 Google Fonts에 없어 사용 안 함).
- 이미지 없음 → 프로젝트/서비스 썸네일은 그라데이션 박스+아이콘/제목 사용. next/image 로컬 svg 금지.
- 존재하지 않는 라우트(/estimate, /shop, /academy) 하드링크 금지 — /contact로 대체.
- /contact 폼은 프론트만 (백엔드 미구현), 제출 시 성공 메시지 표시.
- 포지셔닝: "기획부터 양산까지, 원스톱 임베디드 개발 파트너".

EXPLICIT CONSTRAINTS (위임 시 공통, 원문 유지)
-------------------
- "기존 파일(layout/Header/Footer/ui/data) 수정 금지. 새 파일만 생성" — 단, 통합 QA 중 본 세션(MOMUS)이 직접 수정한 경우 있음(타입 오류·metadata·타이포).
- `as any`, `@ts-ignore`, `@ts-expect-error` 금지.
- 커스텀 CSS 추가 금지 (Tailwind 유틸리티만).
- 이미지/스톡 사진 금지 (아이콘/컬러만).
- next.js 에이전트 규칙: 새 코드 작성 전 node_modules/next/dist/docs/ 해당 가이드 읽기.

CONTEXT FOR CONTINUATION
------------------------
- 다음 세션 가치 작업: ① Vercel 배포 안내/실행, ② /contact 폼 백엔드 연동(Resend — 이메일 jyuimp@empas.com), ③ 실 데이터(주소/사업자등록번호/프로젝트 사진/팀) 확보 시 반영, ④ 원하는 경우 견적 시뮬레이터 등 기획서 후속 기능.
- JSTech 확정 회사 정보(설립 2015.02.02 / 대표 전용운 / 010-2484-3208 / jyuimp@empas.com / STM32·ESP32·ATmel·ARM Cortex / C·C++·C#·Qt)는 모든 페이지에 일관 사용됨.
- git 저장소가 아니므로 커밋 절차 없음.
- 작업 디렉토리: E:\workspace\opencode\JSTech\JSTech_Home
