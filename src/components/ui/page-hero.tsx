import { cn } from "@/lib/utils";

type PageHeroProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  className?: string;
};

export function PageHero({ eyebrow, title, description, className }: PageHeroProps) {
  return (
    <section
      className={cn(
        "border-b border-line bg-gradient-to-b from-white to-surface",
        className
      )}
    >
      <div className="container-px mx-auto max-w-6xl py-16 sm:py-20">
        <div className="max-w-3xl">
          {eyebrow && (
            <p className="text-sm font-semibold uppercase tracking-wider text-primary">
              {eyebrow}
            </p>
          )}
          <h1 className="mt-4 text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
            {title}
          </h1>
          {description && (
            <p className="mt-6 text-lg leading-relaxed text-muted">{description}</p>
          )}
        </div>
      </div>
    </section>
  );
}
