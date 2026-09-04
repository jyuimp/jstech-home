import { cn } from "@/lib/utils";

type BadgeProps = {
  children: React.ReactNode;
  className?: string;
  variant?: "default" | "outline" | "primary" | "green";
};

export function Badge({ children, className, variant = "default" }: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full px-3 py-1 text-sm font-medium",
        variant === "default" && "bg-surface text-muted",
        variant === "outline" && "border border-line text-muted",
        variant === "primary" && "bg-primary-light text-primary",
        variant === "green" && "bg-secondary/10 text-secondary",
        className
      )}
    >
      {children}
    </span>
  );
}
