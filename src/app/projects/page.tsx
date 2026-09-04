import type { Metadata } from "next";
import { PageHero } from "@/components/ui/page-hero";
import { ProjectList } from "@/components/projects/ProjectList";

export const metadata: Metadata = {
  title: "프로젝트",
  description: "산업·기술·단계별 필터로 프로젝트를 탐색하세요",
};

export default function ProjectsPage() {
  return (
    <>
      <PageHero
        eyebrow="Portfolio"
        title="프로젝트"
        description="산업·기술·단계별 필터로 프로젝트를 탐색하세요"
      />
      <ProjectList />
    </>
  );
}
