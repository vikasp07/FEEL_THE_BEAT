"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface CardProps {
  children: ReactNode;
  className?: string;
  hover?: boolean;
  gradient?: boolean;
}

export default function Card({ children, className = "", hover = true, gradient = false }: CardProps) {
  const baseStyles = gradient
    ? "glass-card rounded-2xl bg-gradient-to-br from-red-500/15 via-red-600/10 to-red-700/15 p-6"
    : "glass-card rounded-2xl p-6";

  return (
    <motion.div
      whileHover={hover ? { y: -6, scale: 1.01 } : {}}
      transition={{ duration: 0.24, ease: "easeOut" }}
      className={`beat-reactive ${baseStyles} ${className}`}
    >
      {children}
    </motion.div>
  );
}
