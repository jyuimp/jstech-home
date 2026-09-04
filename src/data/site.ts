export const SITE = {
  name: "JSTech",
  fullName: "제이에스테크",
  tagline: "기획부터 양산까지, 원스톱 임베디드 개발 파트너",
  heroMessageA: "수백 개의 프로젝트, 한결같은 품질",
  heroMessageB: "기획부터 양산까지, JSTech가 함께합니다.",
  established: "2015.02.02",
  ceo: "전용운",
  phone: "010-2484-3208",
  email: "jyuimp@empas.com",
  years: "다년간",
  careers: "설립 이래",
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://jstech-home.vercel.app",
} as const;

export const NAV_ITEMS = [
  { label: "홈", href: "/" },
  { label: "회사소개", href: "/about" },
  { label: "사업영역", href: "/services" },
  { label: "프로젝트", href: "/projects" },
  { label: "입문 가이드", href: "/learn" },
  { label: "문의", href: "/contact" },
] as const;
