import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowRight, Calendar, CheckCircle2, Layers, Tag, TrendingUp } from "lucide-react";
import { projects, type Project } from "@/data/projects";
import { PageHero } from "@/components/ui/page-hero";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

type Props = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  if (!project) {
    return { title: "프로젝트를 찾을 수 없습니다" };
  }
  return {
    title: project.title,
    description: project.description,
  };
}

function MetaCard({
  icon,
  label,
  value,
}: {
  icon: React.ReactNode;
  label: string;
  value: string;
}) {
  return (
    <div className="rounded-2xl border border-line bg-white p-6">
      <div className="flex items-center gap-2 text-primary">
        {icon}
        <span className="text-sm font-medium text-muted">{label}</span>
      </div>
      <p className="mt-3 text-lg font-bold text-foreground">{value}</p>
    </div>
  );
}

function RelatedProjectCard({ project }: { project: Project }) {
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
        <span className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-primary">
          자세히 보기
          <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
        </span>
      </div>
    </Link>
  );
}

export default async function ProjectDetailPage({ params }: Props) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    notFound();
  }

  const related = projects.filter((p) => p.slug !== slug).slice(0, 2);

  return (
    <>
      <PageHero
        eyebrow={project.industry}
        title={project.title}
        description={project.description}
      />

      <section className="container-px mx-auto max-w-6xl py-16">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          <MetaCard icon={<Tag className="h-5 w-5" />} label="산업" value={project.industry} />
          <MetaCard icon={<Layers className="h-5 w-5" />} label="단계" value={project.stage} />
          <MetaCard icon={<Calendar className="h-5 w-5" />} label="기간" value={project.period} />
          <MetaCard icon={<TrendingUp className="h-5 w-5" />} label="성과" value={project.result} />
        </div>

        <div className="mt-16">
          <h2 className="text-2xl font-bold tracking-tight text-foreground">기술 스택</h2>
          <div className="mt-4 flex flex-wrap gap-2">
            {project.tech.map((t) => (
              <Badge key={t} variant="outline">
                {t}
              </Badge>
            ))}
          </div>
        </div>

        <div className="mt-16">
          <h2 className="text-2xl font-bold tracking-tight text-foreground">주요 성과</h2>
          <ul className="mt-6 space-y-3">
            {project.outcome.map((item) => (
              <li key={item} className="flex items-start gap-3">
                <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-secondary" />
                <span className="text-foreground">{item}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-16 rounded-2xl border border-line bg-gradient-to-br from-primary-light to-surface p-8 sm:p-10">
          <p className="text-sm font-semibold uppercase tracking-wider text-primary">
            성과 지표
          </p>
          <p className="mt-4 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            {project.result}
          </p>
        </div>

        <div className="mt-16">
          <h2 className="text-2xl font-bold tracking-tight text-foreground">다른 프로젝트</h2>
          <div className="mt-6 grid gap-6 md:grid-cols-2">
            {related.map((p) => (
              <RelatedProjectCard key={p.slug} project={p} />
            ))}
          </div>
        </div>

        <div className="mt-16 rounded-2xl border border-line bg-surface p-8 text-center sm:p-12">
          <h2 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
            비슷한 프로젝트가 필요하신가요?
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-muted">
            JSTech와 함께 임베디드 개발 프로젝트를 시작해 보세요. 기획부터 양산까지 원스톱으로 지원합니다.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Button href="/contact" variant="primary">
              프로젝트 문의
            </Button>
            <Button href="/projects" variant="outline">
              전체 프로젝트 보기
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
