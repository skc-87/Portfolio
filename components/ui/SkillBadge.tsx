"use client";
import { cn } from "@/lib/utils";

interface SkillBadgeProps {
  label: string;
  variant?: "default" | "highlight" | "subtle";
  className?: string;
}

export default function SkillBadge({ label, variant = "default", className }: SkillBadgeProps) {
  const variants = {
    default:
      "bg-slate-800/60 border border-slate-700/50 text-slate-300 hover:border-violet-500/50 hover:text-violet-300",
    highlight:
      "bg-violet-500/15 border border-violet-500/40 text-violet-300 hover:bg-violet-500/25",
    subtle:
      "bg-slate-900/40 border border-slate-800 text-slate-400 hover:text-slate-300",
  };

  return (
    <span
      className={cn(
        "inline-flex items-center px-3 py-1.5 rounded-full text-xs font-medium transition-all duration-200 cursor-default",
        variants[variant],
        className
      )}
    >
      {label}
    </span>
  );
}
