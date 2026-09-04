import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { projects } from "@/data/projects";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

export function FeaturedProjects() {
  return (
    <section className="container-px mx-auto max-w-6xl py-20">
      <div className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-end">
        <div>
          <p className="text-sm font-semibold uppercase tracking-wider text-primary">
            Portfolio
          </p>
          <h2 className="mt-4 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            대표 프로젝트
          </h2>
        </div>
        <Button href="/projects" variant="outline">
          전체 프로젝트 보기
        </Button>
      </div>

      <div className="mt-12 grid gap-6 md:grid-cols-3">
        {projects.map((project) => (
          <Link
            key={project.slug}
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
        ))}
      </div>
    </section>
  );
}
