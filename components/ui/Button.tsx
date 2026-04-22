"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface ButtonProps {
  children: ReactNode;
  onClick?: () => void;
  variant?: "primary" | "secondary" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
  className?: string;
  disabled?: boolean;
  type?: "button" | "submit" | "reset";
}

export default function Button({
  children,
  onClick,
  variant = "primary",
  size = "md",
  className = "",
  disabled = false,
  type = "button"
}: ButtonProps) {
  const baseStyles =
    "beat-reactive inline-flex items-center justify-center rounded-xl font-semibold tracking-wide transition-all duration-300 disabled:cursor-not-allowed disabled:opacity-50";
  
  const variants = {
    primary:
      "bg-gradient-to-r from-cyan-500 via-blue-500 to-pink-500 text-white shadow-lg shadow-cyan-500/20 hover:shadow-pink-500/30",
    secondary:
      "bg-gradient-to-r from-indigo-500 to-violet-500 text-white shadow-lg shadow-indigo-500/25 hover:shadow-violet-500/35",
    outline:
      "border border-cyan-300/50 bg-cyan-400/5 text-cyan-100 hover:border-pink-300/60 hover:bg-pink-400/10",
    ghost:
      "border border-white/10 bg-white/5 text-white/85 hover:border-cyan-200/40 hover:bg-white/10",
  };
  
  const sizes = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3 text-sm sm:text-base",
    lg: "px-8 py-4 text-base sm:text-lg"
  };

  return (
    <motion.button
      whileHover={{ scale: disabled ? 1 : 1.05 }}
      whileTap={{ scale: disabled ? 1 : 0.95 }}
      className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`}
      onClick={onClick}
      disabled={disabled}
      type={type}
    >
      {children}
    </motion.button>
  );
}
