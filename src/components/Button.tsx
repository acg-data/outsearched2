import { Link } from "react-router";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";
import type { ReactNode } from "react";

interface ButtonProps {
  children: ReactNode;
  to?: string;
  href?: string;
  variant?: "primary" | "secondary" | "ghost";
  size?: "default" | "large";
  className?: string;
  onClick?: () => void;
}

const variantClasses = {
  primary: "bg-gold text-navy hover:bg-goldLight shadow-gold",
  secondary: "border border-navy/15 bg-white text-navy hover:border-gold hover:text-navy",
  ghost: "text-ivory hover:text-gold",
};

export function Button({
  children,
  to,
  href,
  variant = "primary",
  size = "default",
  className,
  onClick,
}: ButtonProps) {
  const classes = cn(
    "inline-flex items-center justify-center gap-2 rounded-full font-bold uppercase tracking-[0.08em] transition",
    "focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-gold",
    size === "large" ? "min-h-[52px] px-7 text-[13px]" : "min-h-11 px-5 text-[12px]",
    variantClasses[variant],
    className,
  );

  const content = (
    <>
      <span>{children}</span>
      {variant !== "ghost" ? <ArrowRight className="size-4" aria-hidden="true" /> : null}
    </>
  );

  if (to) {
    return (
      <Link className={classes} to={to} onClick={onClick}>
        {content}
      </Link>
    );
  }

  if (href) {
    const external = /^https?:\/\//.test(href);
    return (
      <a
        className={classes}
        href={href}
        onClick={onClick}
        {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      >
        {content}
      </a>
    );
  }

  return (
    <button className={classes} type="button" onClick={onClick}>
      {content}
    </button>
  );
}
