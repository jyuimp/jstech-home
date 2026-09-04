"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { projects, projectStages, type Project } from "@/data/projects";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

const industries = ["전체", ...Array.from(new Set(projects.map((p) => p.industry)))];
const techs = ["전체", ...Array.from(new Set(projects.flatMap((p) => p.tech)))];
const stages = ["전체", ...projectStages];

type FilterButtonProps = {
  label: string;
  active: boolean;
  onClick: () => void;
};

function FilterButton({ label, active, onClick }: FilterButtonProps) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={cn(
        "rounded-full border px-4 py-1.5 text-sm font-medium transition-colors",
        active
          ? "border-primary bg-primary text-white"
          : "border-line bg-white text-muted hover:border-primary hover:text-primary"
      )}
    >
      {label}
    </button>
  );
}

function ProjectCard({ project }: { project: Project }) {
  return (
    <Link
      href={`/projects/${project.slug}`}
      className="group overflow-hidden rounded-2xl border border-line bg-white transition-all hover:-translate-y-1 hover:shadow-lg"
    >
      <div className="flex aspect-[16/10] items-center justify-center bg-gradient-to-br from-primary/10 to-secondary/10 p-8">
        <div className="flex h-full w-full items-center justify-center rounded-xl bg-white shadow-sm">
          <span className="px-4 text-center text-sm font-semibold text-primary">
            {project.title}
          </span>
        </div>
      </div>
      <div className="p-6">
        <div className="flex flex-wrap gap-2">
          <Badge variant="primary">{project.industry}</Badge>
          <Badge variant="green">{project.stage}</Badge>
        </div>
        <h3 className="mt-3 text-lg font-bold text-foreground">{project.title}</h3>
        <p className="mt-2 line-clamp-2 text-sm text-muted">{project.description}</p>
        <div className="mt-4 flex flex-wrap gap-1.5">
          {project.tech.map((t) => (
            <span
              key={t}
              className="rounded-full bg-surface px-2.5 py-0.5 text-xs font-medium text-muted"
            >
              {t}
            </span>
          ))}
        </div>
        <span className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-primary">
          자세히 보기
          <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
        </span>
      </div>
    </Link>
  );
}

export function ProjectList() {
  const [industry, setIndustry] = useState("전체");
  const [tech, setTech] = useState("전체");
  const [stage, setStage] = useState("전체");

  const filtered = useMemo(() => {
    return projects.filter((p) => {
      const matchIndustry = industry === "전체" || p.industry === industry;
      const matchTech = tech === "전체" || p.tech.includes(tech);
      const matchStage = stage === "전체" || p.stage === stage;
      return matchIndustry && matchTech && matchStage;
    });
  }, [industry, tech, stage]);

  return (
    <section className="container-px mx-auto max-w-6xl py-16">
      <div className="space-y-8">
        <div className="space-y-4">
          <div>
            <p className="mb-2 text-sm font-medium text-muted">산업</p>
            <div className="flex flex-wrap gap-2">
              {industries.map((item) => (
                <FilterButton
                  key={item}
                  label={item}
                  active={industry === item}
                  onClick={() => setIndustry(item)}
                />
              ))}
            </div>
          </div>
          <div>
            <p className="mb-2 text-sm font-medium text-muted">기술</p>
            <div className="flex flex-wrap gap-2">
              {techs.map((item) => (
                <FilterButton
                  key={item}
                  label={item}
                  active={tech === item}
                  onClick={() => setTech(item)}
                />
              ))}
            </div>
          </div>
          <div>
            <p className="mb-2 text-sm font-medium text-muted">단계</p>
            <div className="flex flex-wrap gap-2">
              {stages.map((item) => (
                <FilterButton
                  key={item}
                  label={item}
                  active={stage === item}
                  onClick={() => setStage(item)}
                />
              ))}
            </div>
          </div>
        </div>

        {filtered.length > 0 ? (
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {filtered.map((project) => (
              <ProjectCard key={project.slug} project={project} />
            ))}
          </div>
        ) : (
          <div className="rounded-2xl border border-line bg-surface py-16 text-center">
            <p className="text-lg font-medium text-foreground">조건에 맞는 프로젝트가 없습니다</p>
            <p className="mt-2 text-sm text-muted">필터를 변경해 다시 시도해 주세요.</p>
          </div>
        )}
      </div>
    </section>
  );
}
