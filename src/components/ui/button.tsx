import Link from "next/link";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 rounded-lg font-medium transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/50 disabled:pointer-events-none disabled:opacity-50 min-h-[44px] px-6",
  {
    variants: {
      variant: {
        primary: "bg-primary text-white hover:bg-primary-dark shadow-sm",
        secondary: "bg-secondary text-white hover:brightness-105 shadow-sm",
        outline:
          "border border-line bg-transparent text-foreground hover:border-primary hover:text-primary",
        ghost: "text-foreground hover:bg-surface",
        white: "bg-white text-primary hover:bg-slate-50 shadow-sm",
      },
      size: {
        default: "text-base",
        sm: "text-sm px-4 min-h-[40px]",
        lg: "text-lg px-8 min-h-[52px]",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "default",
    },
  }
);

type CommonProps = {
  className?: string;
  children?: React.ReactNode;
};

type ButtonAsButton = CommonProps &
  VariantProps<typeof buttonVariants> &
  Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, "className" | "children">;

type ButtonAsLink = CommonProps &
  VariantProps<typeof buttonVariants> &
  Omit<React.AnchorHTMLAttributes<HTMLAnchorElement>, "className" | "children"> & {
    href: string;
  };

export type ButtonProps = ButtonAsButton | ButtonAsLink;

export function Button(props: ButtonProps) {
  const { className, variant, size, ...rest } = props;
  const base = buttonVariants({ variant, size });

  if ("href" in rest && rest.href) {
    const { href, ...anchorRest } = rest;
    return <Link href={href} className={cn(base, className)} {...anchorRest} />;
  }

  return <button className={cn(base, className)} {...(rest as ButtonAsButton)} />;
}

export { buttonVariants };
