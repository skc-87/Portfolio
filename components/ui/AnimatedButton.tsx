"use client";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { ReactNode } from "react";

interface AnimatedButtonProps {
  children: ReactNode;
  href?: string;
  onClick?: () => void;
  variant?: "primary" | "secondary" | "ghost";
  className?: string;
  target?: string;
  rel?: string;
  download?: boolean | string;
}

export default function AnimatedButton({
  children,
  href,
  onClick,
  variant = "primary",
  className = "",
  target,
  rel,
  download,
}: AnimatedButtonProps) {
  const base =
    "inline-flex items-center gap-2 px-6 py-3 rounded-full font-semibold text-sm transition-all duration-200 cursor-pointer select-none";

  const variants = {
    primary:
      "bg-gradient-to-r from-violet-600 to-indigo-600 text-white shadow-lg shadow-violet-500/30 hover:shadow-violet-500/50 hover:scale-105",
    secondary:
      "border border-violet-500/40 text-violet-300 hover:border-violet-400 hover:text-white hover:bg-violet-500/10 hover:scale-105",
    ghost:
      "text-slate-400 hover:text-white hover:bg-white/5 hover:scale-105",
  };

  const classes = cn(base, variants[variant], className);

  if (href) {
    return (
      <motion.a
        href={href}
        target={target}
        rel={rel}
        download={download}
        className={classes}
        whileTap={{ scale: 0.97 }}
      >
        {children}
      </motion.a>
    );
  }

  return (
    <motion.button onClick={onClick} className={classes} whileTap={{ scale: 0.97 }}>
      {children}
    </motion.button>
  );
}
