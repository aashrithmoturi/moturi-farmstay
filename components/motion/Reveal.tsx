"use client";

import { motion, useReducedMotion, type Variants } from "framer-motion";
import type { ReactNode } from "react";

type Direction = "up" | "down" | "left" | "right" | "zoom" | "blur" | "curtain" | "rise";

const offset: Record<Direction, { x?: number; y?: number }> = {
  up: { y: 48 },
  down: { y: -48 },
  left: { x: 64 },
  right: { x: -64 },
  zoom: {},
  blur: { y: 24 },
  curtain: { y: 60 },
  rise: { y: 90 },
};

/**
 * Scroll-reveal wrapper for Moturi Farmstay.
 * Uses spring physics + blur for a soft, lively feel.
 */
export function Reveal({
  children,
  direction = "up",
  delay = 0,
  className,
}: {
  children: ReactNode;
  direction?: Direction;
  delay?: number;
  className?: string;
}) {
  const reduce = useReducedMotion();
  const o = offset[direction];

  const variants: Variants = {
    hidden: {
      opacity: 0,
      x: reduce ? 0 : o.x ?? 0,
      y: reduce ? 0 : o.y ?? 0,
      scale: direction === "zoom" && !reduce ? 0.9 : 1,
      filter: direction === "blur" && !reduce ? "blur(10px)" : "blur(0px)",
      clipPath:
        direction === "curtain" && !reduce
          ? "inset(100% 0% 0% 0%)"
          : "inset(0% 0% 0% 0%)",
    },
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
      scale: 1,
      filter: "blur(0px)",
      clipPath: "inset(0% 0% 0% 0%)",
      transition: {
        type: "spring",
        stiffness: direction === "rise" ? 70 : 90,
        damping: direction === "rise" ? 18 : 16,
        mass: 0.7,
        delay,
      },
    },
  };

  return (
    <motion.div
      className={className}
      variants={variants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
    >
      {children}
    </motion.div>
  );
}

/**
 * Stagger container — children using <RevealItem> animate in sequence.
 */
export function Stagger({
  children,
  className,
  gap = 0.12,
}: {
  children: ReactNode;
  className?: string;
  gap?: number;
}) {
  const variants: Variants = {
    hidden: {},
    visible: { transition: { staggerChildren: gap } },
  };
  return (
    <motion.div
      className={className}
      variants={variants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.15 }}
    >
      {children}
    </motion.div>
  );
}

export function RevealItem({
  children,
  className,
  direction = "up",
}: {
  children: ReactNode;
  className?: string;
  direction?: Direction;
}) {
  const reduce = useReducedMotion();
  const o = offset[direction];
  const variants: Variants = {
    hidden: {
      opacity: 0,
      x: reduce ? 0 : o.x ?? 0,
      y: reduce ? 0 : o.y ?? 0,
      scale: direction === "zoom" && !reduce ? 0.9 : 1,
      clipPath:
        direction === "curtain" && !reduce
          ? "inset(100% 0% 0% 0%)"
          : "inset(0% 0% 0% 0%)",
    },
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
      scale: 1,
      clipPath: "inset(0% 0% 0% 0%)",
      transition: { type: "spring", stiffness: 110, damping: 18 },
    },
  };
  return (
    <motion.div className={className} variants={variants}>
      {children}
    </motion.div>
  );
}
